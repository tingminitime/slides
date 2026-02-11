import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface PresentationMetadata {
  name: string
  title?: string
  description?: string
  date?: string
  lang?: string
}

/**
 * Extract frontmatter from slides.md
 */
function extractFrontmatter(content: string): Record<string, any> {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)

  if (!match)
    return {}

  const frontmatter = match[1]
  const metadata: Record<string, any> = {}

  const lines = frontmatter.split('\n')
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1)
      continue

    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()

    // Remove quotes if present
    metadata[key] = value.replace(/^["']|["']$/g, '')
  }

  return metadata
}

/**
 * Format directory name to human-readable title
 * Example: "2025-02-12-github-actions" → "GitHub Actions"
 */
function formatDirectoryName(dirName: string): string {
  // Remove date prefix (YYYY-MM-DD-)
  const withoutDate = dirName.replace(/^\d{4}-\d{2}-\d{2}-/, '')

  // Convert kebab-case to Title Case
  return withoutDate
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Extract date from directory name
 * Example: "2025-02-12-github-actions" → "2025-02-12"
 */
function extractDateFromDirName(dirName: string): string | undefined {
  const dateMatch = dirName.match(/^(\d{4}-\d{2}-\d{2})/)
  return dateMatch ? dateMatch[1] : undefined
}

/**
 * Scan dist directory and extract presentation metadata
 */
async function scanPresentations(): Promise<PresentationMetadata[]> {
  const distDir = resolve(__dirname, '../dist')

  if (!await fs.pathExists(distDir)) {
    console.warn('⚠️  dist directory not found. Please run build first.')
    return []
  }

  const entries = await fs.readdir(distDir, { withFileTypes: true })
  const presentations: PresentationMetadata[] = []

  for (const entry of entries) {
    if (!entry.isDirectory())
      continue

    const name = entry.name
    const sourceSlidesPath = resolve(__dirname, `../packages/${name}/slides.md`)

    let metadata: PresentationMetadata = {
      name,
      date: extractDateFromDirName(name),
    }

    // Try to extract metadata from source slides.md
    if (await fs.pathExists(sourceSlidesPath)) {
      try {
        const slidesContent = await fs.readFile(sourceSlidesPath, 'utf-8')
        const frontmatter = extractFrontmatter(slidesContent)

        metadata = {
          name,
          title: frontmatter.title || formatDirectoryName(name),
          description: frontmatter.description,
          date: frontmatter.date || extractDateFromDirName(name),
          lang: frontmatter.lang,
        }
      }
      catch (error) {
        console.warn(`⚠️  Failed to read metadata for ${name}, using fallback`)
      }
    }

    // Fallback to formatted directory name
    if (!metadata.title) {
      metadata.title = formatDirectoryName(name)
    }

    presentations.push(metadata)
  }

  // Sort by date (newest first)
  presentations.sort((a, b) => {
    if (!a.date)
      return 1
    if (!b.date)
      return -1
    return b.date.localeCompare(a.date)
  })

  return presentations
}

/**
 * Generate presentation cards HTML
 */
function generatePresentationCards(presentations: PresentationMetadata[]): string {
  const baseUrl = 'https://tingminitime.github.io/slides'

  if (presentations.length === 0) {
    return `<div class="empty-state">
        <h2>目前沒有簡報</h2>
        <p>請先執行構建以產生簡報</p>
      </div>`
  }

  return presentations.map((p) => {
    const url = `${baseUrl}/${p.name}/`
    const displayDate = p.date
      ? new Date(p.date).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      : ''

    return `<a href="${url}" class="card">
        <div class="card-header">
          <h2 class="card-title">${p.title}</h2>
          ${displayDate ? `<time class="card-date" datetime="${p.date}">${displayDate}</time>` : ''}
        </div>
        ${p.description ? `<p class="card-description">${p.description}</p>` : ''}
        <div class="card-footer">
          <span class="card-link">查看簡報 →</span>
        </div>
      </a>`
  }).join('\n      ')
}

/**
 * Main function
 */
async function run() {
  console.log('🔍 掃描簡報目錄...')

  const presentations = await scanPresentations()

  if (presentations.length === 0) {
    console.log('⚠️  未找到任何簡報。請先執行 pnpm run packages:build-base')
  }
  else {
    console.log(`✅ 找到 ${presentations.length} 個簡報`)
    presentations.forEach((p) => {
      console.log(`   - ${p.title} (${p.name})`)
    })
  }

  console.log('\n📝 讀取 HTML 模板...')

  const templatePath = resolve(__dirname, '../templates/index.html')
  if (!await fs.pathExists(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`)
  }

  const template = await fs.readFile(templatePath, 'utf-8')

  console.log('🔄 產生簡報卡片並替換佔位符...')

  const presentationCards = generatePresentationCards(presentations)
  const html = template.replace('{{PRESENTATIONS_CARDS}}', presentationCards)

  const outputPath = resolve(__dirname, '../dist/index.html')

  await fs.ensureDir(dirname(outputPath))
  await fs.writeFile(outputPath, html, 'utf-8')

  console.log(`✅ 成功產生入口頁面: ${outputPath}`)
}

run().catch((error) => {
  console.error('❌ 產生入口頁面時發生錯誤:', error)
  process.exit(1)
})
