import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execaCommand } from 'execa'
import fs from 'fs-extra'
import prompts from 'prompts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function run() {
  const packagesDir = resolve(__dirname, '../packages')

  const projects = await fs.readdir(packagesDir)
  const validProjects = []

  for (const project of projects) {
    const projectPath = resolve(packagesDir, project)
    const stat = await fs.stat(projectPath)

    if (stat.isDirectory()) {
      const pkgPath = resolve(projectPath, 'package.json')
      if (await fs.pathExists(pkgPath)) {
        validProjects.push(project)
      }
    }
  }

  if (validProjects.length === 0) {
    console.log('No valid projects found in packages directory.')
    process.exit(1)
  }

  validProjects.sort()

  const { project } = await prompts({
    type: 'select',
    name: 'project',
    message: 'Select a project to develop:',
    choices: validProjects.map(name => ({
      title: name,
      value: name,
    })),
  })

  if (!project) {
    console.log('No project selected. Exiting.')
    process.exit(0)
  }

  console.log(`\n 🚀 Starting development for project: ${project} ...`)

  await execaCommand(`pnpm --filter ${project} dev`, {
    stdio: 'inherit',
    cwd: resolve(__dirname, '..'),
  })
}

run().catch((error) => {
  console.error('Error during development setup:', error)
  process.exit(1)
})
