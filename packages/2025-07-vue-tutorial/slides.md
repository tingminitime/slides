---
highlighter: shiki
css: unocss
colorSchema: dark
mdc: true
layout: center
class: text-center
drawings:
  persist: true
glowSeed: 4
transition: fade-out
lang: zh-Hant
title: 初探前端框架 - Vue 3
---

# 初探前端框架 Vue 3 {.font-bold .tracking-wider}

## <div class="flex items-center justify-center gap-x-4 tracking-wide"><div class="i-vscode-icons:file-type-vue text-4xl"></div> 3 天實戰 - 從入門到實作</div>

<div v-click class="mt-8">

### 📅 課程規劃

<div grid="~ cols-3 gap-6" class="mt-8">

<div @click="$nav.go(2)" class="text-left px-6 py-4 bg-red-400/10 border border-gray-300 rounded cursor-pointer hover:border-red-400 hover:bg-red-400/20 transition-all">
  <h3 class="text-red-400 font-bold">Day 1</h3>
  <p class="flex flex-col gap-y-2 tracking-wide font-bold">
    <span>開發環境</span>
    <span>Vue 3 簡介</span>
    <span>狀態驅動畫面</span>
  </p>
</div>

<div @click="$nav.go(81)" class="text-left px-6 py-4 bg-blue-400/10 border border-gray-300 rounded cursor-pointer hover:border-blue-400 hover:bg-blue-400/20 transition-all">
  <h3 class="text-blue-400 font-bold">Day 2</h3>
  <p class="flex flex-col gap-y-2 tracking-wide font-bold">
    <span>響應式狀態</span>
    <span>事件處理、綁定</span>
    <span>生命週期</span>
  </p>
</div>

<div @click="$nav.go(190)" class="text-left px-6 py-4 bg-green-400/10 border border-gray-300 rounded cursor-pointer hover:border-green-400 hover:bg-green-400/20 transition-all">
  <h3 class="text-green-400 font-bold">Day 3</h3>
  <p class="flex flex-col gap-y-2 tracking-wide font-bold">
    <span>深入元件應用</span>
    <span>邏輯複用</span>
    <span>API 串接</span>
  </p>
</div>

</div>
</div>

---
highlighter: shiki
css: unocss
mdc: true
# layout: center
src: ./pages/day1/slides.md
---

---
highlighter: shiki
css: unocss
mdc: true
# layout: center
src: ./pages/day2/slides.md
---

---
highlighter: shiki
css: unocss
mdc: true
# layout: center
src: ./pages/day3/slides.md
---

