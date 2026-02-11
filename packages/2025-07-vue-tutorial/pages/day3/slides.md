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
title: Vue 3 - ( Day 3 ) 深入元件應用、邏輯複用、API 串接
---

# Day 3 {.font-bold}

<div v-click>

<span text-2xl tracking-wide font-bold italic v-mark.green.highlight.op20="2">深入元件應用、邏輯複用、API 串接</span>

</div>

<ExternalLink
  href="https://hackmd.io/QlBsPaQkQMGYI447XsCN7w"
  class="absolute bottom-12 right-12"
>
  HackMD
</ExternalLink>

<!--
今天講的內容會涵蓋 Vue 元件的狀態傳遞、事件發送，

還有元件的雙向綁定、Composables 邏輯複用，

最後會有 API 串接的實戰範例。
-->

---
layout: center
transition: slide-left
src: ./sections/01-props_and_emits.md
---

---
src: ./sections/02-define_model.md
---

---
src: ./sections/03-composables.md
---

---
layout: center
transition: slide-left
src: ./sections/04-api_fetch.md
---

---
layout: center
transition: slide-left
---

<h2 class="text-3xl font-bold tracking-wide mb-4">
  學習完畢後還可以 ...
</h2>

<div class="[&_ol]:space-y-2 [&_ol]:tracking-wide" v-click>

1. 學習 [Vue TypeScript](https://vuejs.org/guide/typescript/composition-api.html) 撰寫方式。
2. 對元件有基本認識後，嘗試看看 [Slots (插槽)](https://vuejs.org/guide/components/slots.html) 用法。
3. 想讓網頁元件有更多動態效果，試試看 [Transition (過渡效果)](https://vuejs.org/guide/built-ins/transition.html)。
4. 專屬 Vue 的頁面路由管理 - [Vue Router](https://router.vuejs.org/introduction.html)。
5. 不同頁面、元件之間的共用狀態管理 - [Pinia](https://pinia.vuejs.org/introduction.html)。

</div>

---
layout: center
transition: slide-left
---

<h2 class="important-text-5xl text-center font-serif font-bold tracking-wide mb-8">
  End
</h2>

<div class="w-72">
  <img src="./assets/end.gif" alt="ending" />
</div>

<div class="absolute top-20 left-20 w-60">
  <img src="./assets/happy-cat.gif" />
</div>

<div class="absolute top-20 right-20 w-60 -scale-x-100">
  <img src="./assets/happy-cat.gif" />
</div>
