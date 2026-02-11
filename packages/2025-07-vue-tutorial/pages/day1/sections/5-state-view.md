---
layout: center
transition: slide-left
---

<div>

# <span text-5xl font-bold tracking-wide>五、狀態驅動畫面</span>

<div class="text-3xl text-center font-bold op75 flex justify-center items-center gap-x-4">
  ( state
  <div
     i-heroicons:arrow-long-right-20-solid
     class="animate-flash text-green"
     style="animation-iteration-count: infinite; animation-duration: 2.5s; animation-timing-function: ease-in-out;"
  ></div>
  view )
</div>

</div>

<!--
在 Vue 3 中，「狀態驅動畫面」是指當資料狀態發生改變時，畫面會自動更新的設計裡面，這也是 Vue 響應式系統的核心概念。
-->

---
layout: sfc
transition: slide-left
---

<!-- 1. Hello Vue ! -->
<div class="flex justify-between items-center gap-x-2 mb-2">

# Hello Vue ! {.text-4xl .font-bold .tracking-wide}

<PlaygroundLink category="day1" link="HelloWorld">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
  <input v-model="message" />
</template>
```

</div>

<!--
Vue 3 提供了 `ref()`、`reactive()`、`computed()` 等方法宣告「響應式狀態」。
這裡先介紹在 Vue 3 中最常見的 `ref()` 方法，實作一個響應式的 Hello World !

在 `<script setup>` 中引入 Vue 的 ref 方法，並且用 `const` 宣告一個 `message` 變數，在 `ref()` 中我們可以輸入「預設值」"Hello World !"。

接著在 `<template>` 這個類似 HTML 的模板中綁定這個 `message` 狀態。

( 示範操作 )

※ `v-model` 語法在之後的章節會詳細介紹
-->

---
layout: center
transition: slide-left
---

<div class="flex justify-center items-center gap-x-4 mt-8">

<div class="bg-green/10 border-2 border-green/30 rounded-lg py-4 px-6">
  <h3 class="font-bold text-lg mb-3">狀態 ( State )</h3>
  <div class="font-mono text-sm bg-white/50 px-4 py-2 rounded">
    <code>ref()</code>、<code>reactive()</code>、<code>computed()</code> ...
  </div>
</div>

<div class="text-yellow text-center text-4xl content-center font-bold">
  ／
</div>

<div class="bg-blue/10 border-2 border-blue/30 rounded-lg py-4 px-6">
  <h3 class="font-bold text-lg mb-3">資料 ( Data )</h3>
  <div class="font-mono text-sm bg-white/20 px-4 py-2 rounded tracking-wide">
    靜態檔案、常數、後端 API 回傳資料 ...
  </div>
</div>

</div>

<!--
有時候會看到有人說 Vue 是「資料」驅動畫面，其實意思和「狀態」驅動畫面是一樣的，只是使用「狀態」會比較精準。

因為在 Vue 元件中，`ref`、`reactive`、`computed` ... 等等這類響應式狀態會影響程式行為、畫面渲染等，表現得比較「動態」，所以才稱之為「**狀態**」。相反的，靜態檔案、常數、後端 API 回傳資料等，表現得比較「靜態」，通常會稱之為「**資料**」。

不過「狀態」或「資料」的稱呼只是方便溝通的作法，這兩者的界線在前端中也比較模糊，後續的內容會以「狀態」來稱呼響應式狀態。
-->

---
layout: center
transition: slide-left
---

<!-- 2. 文本插值 ( Mustache ) -->
<h1
  transition duration-400
  class="text-4xl font-bold tracking-wide"
  :class="$clicks > 0 ? '-translate-y-0' : 'translate-y-20'"
>文本插值 ( Mustache )</h1>

<div class="w-50 mx-auto" v-click>
  <img src="../assets/05/subpar-mustache.gif" />
</div>

<!--
再來提到文本插植

文本插植是 Vue 3 中最基本的綁定狀態方式，

[click] 在模板使用 **雙大括號 ( mustache )** 綁定狀態。
-->

---
layout: center
transition: slide-up
---

## 綁定狀態 {.absolute .top-36 .left-1/2 .-translate-x-1/2 .text-center .font-bold}

<div>

````md magic-move
```html
{{  }}
```

```html
{{ message }}
```

```html
<template>
  <div>
    {{ message }}
  </div>
</template>
```
````

</div>

<!--
要怎麼綁定狀態呢 ? 假設有個狀態是 `message` ...

[click] 把 `message` 寫在雙大括號裡面

[click] 在模板會是這樣的撰寫方式
-->

---
layout: center
transition: slide-left
---

## 表達式、執行函式 {.absolute .top-24 .left-1/2 .-translate-x-1/2 .text-center .font-bold}

<div class="mt-16">

```vue
<template>
  {{ number + 1 }}

  {{ ok ? 'YES' : 'NO' }}

  {{ message.split('').reverse().join('') }}

  <div :id="`list-${id}`"></div>

  {{ formateDate(date) }}
</template>
```

</div>

<div class="bg-yellow/10 border-2 border-yellow/30 rounded-lg py-3 px-4 mt-8" v-click>
  <div class="text-xl text-center tracking-wide flex items-center justify-center gap-x-2">
    <div i-heroicons:exclamation-circle-16-solid text-yellow></div> 最終結果會輸出為<strong>字串</strong>而非 HTML
  </div>
</div>

<!--
除了單純綁定狀態，也可以在雙大括號裡面寫表達式，例如數學運算、三元運算、字串處理、執行函式... 等等。

[click] 但是要注意，最終結果會輸出為字串而非 HTML。
-->

---
layout: center
transition: slide-left
---

<!-- 3. 原生 JavaScript 渲染 vs. Vue 3 渲染 -->
<h1 class="font-bold tracking-wide flex flex-col items-center gap-y-4">
  原生 JavaScript 渲染
  <span class="text-yellow">vs.</span>
  Vue 3 渲染
</h1>

<!--
那麼原生的 JavaScript 渲染和 Vue 3 渲染有什麼差別呢 ?
-->

---
transition: slide-left
---

## 修改 HTML 的文字 {.font-bold .mt-4 .mb-8}

<div
  transition duration-300
  class="grid grid-cols-2 gap-x-8"
  :class="$clicks > 3 ? '-translate-x-100 op-0' : 'translate-x-0 op-100'"
  v-click.hide="4"
>

<div>

<div class="text-2xl font-bold"><code>index.html</code></div>

```html {*|2-3|2-3|*}
<div id="app">
  <p id="text">原始文字</p>
  <button type="button" id="button">更改文字</button>
</div>

```

</div>

<div>

<div class="text-2xl font-bold"><code>index.js</code></div>

```javascript {*|1-2|4-8|*}{at:1}
const textElement = document.querySeletor('#text')
const buttonElement = document.querySelector('#button')

function changeText() {
  textElement.textContent = '更改後的文字'
}

buttonElement.addEventListener('click', changeText)

```

</div>

</div>



<div
  transition duration-300 delay-100
  class="absolute left-16 top-30"
  :class="$clicks > 3 ? 'translate-x-0 op100' : 'translate-x-100 op0'"
  v-click
>

<div class="flex items-center gap-x-2 mb-2">
  <div class="w-8 h-8">
    <img class="size-full" src="../assets/icon-vue.svg" />
  </div>
  <div class="text-2xl font-bold"><code>App.vue</code></div>
</div>

<div>

```vue {*|1-7|9-14|*}{at:5}
<script setup lang="ts">
const text = ref('原始文字')

function changeText() {
  text.value = '更改後的文字' // `text` 為響應式狀態，在 `<script>` 中要使用 `.value` 修改狀態
}
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <button type="button" @click="changeText">更改文字</button>
  </div>
</template>
```

</div>

<div class="bg-green/10 border-2 border-green/30 rounded-lg py-4 px-6 mt-4 w-max" v-click="7">
  <div class="text-xl text-center tracking-wide flex items-center gap-x-2 pr-2">
    <div i-heroicons:check-circle-16-solid text-green></div>
    <strong>Vue 會自動處理 DOM 更新以及渲染</strong>
  </div>
</div>

</div>

<!--
原生 JavaScript 渲染需要先找到

[click] 目標 DOM

[click] 然後對 DOM 進行操作更新

[click] 這樣做雖然很直觀，但是卻也把畫面和程式邏輯混雜在一起，如果畫面需要更新的元素變多，容易讓程式變得更加複雜難以維護。

[click] 使用 Vue 單一檔案元件來撰寫的話，

[click] 所有程式的邏輯都在 `<script setup>` 裡面，這裡宣告了一個 `text` 響應式狀態，

[click] 然後將 `text` 狀態綁定在模板後，

[click] 當 text 發生變化，Vue 會自動處理 DOM 更新以及渲染，不需要經由我們手動操作 DOM 渲染畫面。
-->

---
layout: center
transition: slide-left
---

<div
  transition duration-500
  class="w-24 h-24 absolute left-1/2 top-1/2 -translate-x-1/2"
  :class="$clicks > 0 ? '-translate-y-50' : '-translate-y-20'"
>
  <img class="size-full" src="../assets/icon-vue.svg" />
</div>

<div
  transition duration-500
  class="absolute left-1/2 top-1/2 -translate-x-1/2 flex justify-center items-center gap-x-8 mt-8"
  :class="$clicks > 0 ? '-translate-y-25' : '-translate-y-1/2'"
>
  <div class="px-6 py-3 bg-green/50 border-2 border-green text-2xl font-bold rounded-xl" delay-300 v-click>狀態</div>
  <div class="px-6 py-3 bg-blue/50 border-2 border-blue text-2xl font-bold rounded-xl" v-click>邏輯</div>
</div>

<div
  transition duration-500
  class="absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col items-center gap-y-4 mt-8"
  :class="$clicks > 0 ? 'translate-y-10%' : 'translate-y-20%'"
>
  <div class="text-[#f16529] font-bold text-3xl tracking-wide" v-click>如何操作畫面</div>
  <div class="text-yellow-300 font-bold text-4xl flex flex-col items-center gap-y-4" v-click>
    <div class="i-heroicons:arrow-down-16-solid text-xl font-bold"></div>
    <div class="tracking-wide">如何管理資料狀態</div>
  </div>
</div>

<!--
從這個範例就可以發現 Vue 3 能讓我們

[click] 更專注在「狀態」

[click] 以及「邏輯」層面，而不是瑣碎語法又長的 DOM 操作上，

[click] 概念就從「如何操作畫面」

[click] 轉變為「如何管理資料狀態」的思維模式。
-->

---
layout: center
transition: fade-out
---

<div class="flex flex-col items-center gap-y-4">

<h1
  transition duration-500
  class="text-center font-bold"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-40'"
>
  第一天解脫囉 ～～～ 🎊🎉🎊
</h1>

<div transition duration-500 class="w-[400px]" :class="$clicks > 0 ? 'translate-y-0 op100' : 'translate-y-10 op0'" v-click="1">
  <img src="../assets/01/cat.png" alt="Day 1 End" class="w-full h-auto">
</div>

<div
  class="flex justify-center items-center gap-x-2 text-xl font-bold bg-blue-400/30 border-2 border-blue-400/50 rounded-lg px-6 py-3 mt-8 hover:bg-blue-400/50 hover:border-blue-400 transition-all duration-300 w-max cursor-pointer"
  @click="$nav.go(81)"
  v-click="1"
>
  <span>Day 2</span>
  <div i-heroicons:arrow-long-right-16-solid></div>
</div>

</div>

<!--
恭喜各位 ! 第一天解脫囉 ~

[click] 你知道嗎... 下禮拜還要上課喔 !
-->
