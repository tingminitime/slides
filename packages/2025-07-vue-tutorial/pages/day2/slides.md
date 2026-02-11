---
highlighter: shiki
css: unocss
colorSchema: light
mdc: true
layout: center
class: text-center
drawings:
  persist: true
glowSeed: 4
transition: fade-out
lang: zh-Hant
title: Vue 3 - ( Day 2 ) 組件開發、Props 與 Emit、狀態管理
---

# Day 2 {.font-bold}

<div v-click>

<span text-2xl tracking-wide font-bold italic v-mark.blue.highlight.op20="1">響應式狀態、事件處理、綁定、生命週期</span>

</div>

<ExternalLink
  href="https://hackmd.io/qwOsd9C4SCSa-uEXFrxZSQ"
  class="absolute bottom-12 right-12"
>
  HackMD
</ExternalLink>

<!--
第二天主要把 Vue 最常使用到的 API 都簡單介紹過一遍，

[click] 包含響應式狀態 API、事件處理、綁定、生命週期 hooks，

範例程式碼會比較多，可能會比較枯燥乏味，大家忍耐一下。
-->

---
src: ./sections/01-reactivity.md
---

---
src: ./sections/02-attribute-bindings.md
---

---
src: ./sections/03-class-and-style.md
---

---
src: ./sections/04-event-handling.md
---

---
src: ./sections/05-v-model.md
---

---
transition: slide-left
layout: center
src: ./sections/06-computed.md
---

---
transition: slide-left
layout: center
src: ./sections/07-watch.md
---

---
transition: slide-left
layout: center
src: ./sections/08-for-if-show.md
---

---
transition: slide-left
layout: center
src: ./sections/09-life-cycle.md
---