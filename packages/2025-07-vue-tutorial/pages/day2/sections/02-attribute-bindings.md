---
layout: center
transition: slide-left
---

<div
  transition duration-400
  :class="$clicks > 0 ? '-translate-y-16' : 'translate-y-0'"
>
  <h1 class="font-bold text-center tracking-wide">
    二、動態屬性綁定
  </h1>
  
  <div class="text-center text-2xl text-purple mb-8">
    <code>v-bind</code>
  </div>
</div>

<div
  transition duration-400
  class="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-0 w-72 rounded overflow-hidden"
  :class="$clicks > 0 ? 'op100' : 'op0'"
  v-click
>
  <img src="../assets/rope-toss.gif" alt="rope toss" />
</div>

<ExternalLink
  href="https://hackmd.io/5bNMfOK-TzqKMwy8jvvWFw"
  class="absolute bottom-12 right-12"
>
  HackMD
</ExternalLink>

<!--
這一章來介紹一下

[click] Vue 的動態屬性綁定，`v-bind` 指令
-->

---
transition: slide-left
---

<h2 class="font-bold text-center tracking-wide mt-8">
  動態屬性綁定 <code text-purple>v-bind</code>
</h2>

<div class="w-max mx-auto mt-12">

````md magic-move
```vue
<img v-bind:src="響應式狀態">
```

```vue
<template>
  <img v-bind:src="imageUrl">
  <button v-bind:disabled="isButtonDisabled">按鈕</button>
  <a v-bind:href="linkUrl">連結</a>
</template>
```
````

<div class="flex justify-center items-center gap-x-2 mt-4" v-click>
<div text-blue>

`imageUrl`、`isButtonDisabled`、`linkUrl`

</div>

<span>都是響應式狀態</span>

</div>
</div>

<div class="text-2xl text-purple text-center mt-8" v-click>
  <code>v-*</code>
</div>

<!--
在 Vue 元件中，「動態綁定」隨處可見，所謂「動態」指的就是 **值會根據資料狀態的變化而自動更新**，也就是前面不斷提到的「**響應性**」。

HTML 標籤有預設的「屬性 ( attributes )」，例如 `class`、`style`、`src`、`alt`、`title` … 等等，

[click] 在 Vue 的模板中，大多數的 HTML 屬性或 Vue 內建屬性都可以使用 `v-bind` 綁定，

[click] 像畫面中各個元素綁定的 `imageUrl`、`isButtonDisabled`、`linkUrl` 都是響應式狀態，當這些狀態改變的時候，綁定的屬性值也會自動更新。

[click] 另外 Vue 還提供很多方便的 `v-*` 前綴指令魔法可以在 HTML 標籤上使用，後續會逐步介紹。
-->

---
transition: slide-left
---

<h2 class="font-bold tracking-wide text-center mb-8">
  更改圖片連結
</h2>

<div class="w-1/2 mx-auto">

```vue {*|4,19|6-8,12-17|7|7,19|*}{lines:true}
<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('/example-1.jpg')

function changeImage(id) {
  imageUrl.value = `/example-${id}.jpg`
}
</script>

<template>
  <button
    type="button"
    @click="changeImage(2)"
  >
    Change Image
  </button>
  <!-- 使用 v-bind 綁定動態的 `imageUrl` 狀態 -->
  <img v-bind:src="imageUrl" alt="示例圖片">
</template>
```

</div>

<!--
舉個情境，當畫面上有個按鈕和圖片，在按下按鈕要更改圖片的連結，可以這樣寫 :

[click] 在模板中 `<img>` 這個 HTML tag 中使用 `v-bind:src` 綁定 `imageUrl` 這個響應式狀態，

[click] 然後在我們點擊 `<button>` 按鈕觸發 `changeImage` 函式帶上參數 `2` 的時候，

[click] 這個函式就會對 `imageUrl` 狀態重新賦值，

[click] 這個時候因為 `<img>` 的圖片連結 `src` 有變動，瀏覽器就會重新渲染新的圖片

[click] 這就是「`v-bind` 動態綁定」主要的用途。
-->

---
layout: center
transition: slide-left
---

<h2
  transition duration-400
  class="font-bold text-center tracking-wider"
  :class="$clicks > 1 ? '-translate-y-12' : '-translate-y-6'"
>
  <code text-purple>v-bind</code>&nbsp;綁定<span text-yellow>布林</span>狀態 ?
</h2>

<div text-purple text-xl text-center v-click>
  <code>disabled</code>、<code>required</code>、<code>checked</code>
</div>

<!--
如果 `v-bind` 綁定的 HTML 屬性是"布林屬性"，

[click] 例如 `disabled`、`required`、`checked` ... 等等，會怎麼表現呢 ?
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## 按鈕 `disabled` {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VBindDisabledButton">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const isButtonDisabled = ref(true)
</script>

<template>
  <div>這裡有個按鈕 👇</div>
  <button
    type="button"
    v-bind:disabled="isButtonDisabled"
  >
    Click
  </button>
</template>
```

</div>

<!--
這個範例中，button 按鈕的 `disabled` 屬性綁定了 `isButtonDisabled` 這個響應式狀態，

現在這個狀態是 `true`，所以按鈕會被禁用沒辦法點擊，

(操作) 如果把 `isButtonDisabled` 預設狀態改成 `false`，按鈕就會變成可以點擊的狀態。
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="absolute top-1/2 left-1/2 flex justify-center items-center gap-x-4 font-bold text-center text-3xl"
  :class="[$clicks > 0 ? '-translate-y-50' : '-translate-y-35', $clicks === 1 ? '-translate-x-64' : $clicks >= 2 ? '-translate-x-20' : '-translate-x-1/2']"
>
  <div
    transition duration-400
    class="flex items-center gap-x-2"
    :class="$clicks === 1 ? 'op0' : 'op100'"
  >
    <div i-heroicons:check-16-solid class="text-green text-4xl"></div>
    <span>Truthy</span>
  </div>
  <div
    transition duration-400
    i-heroicons:arrows-right-left-20-solid
    class="text-2xl"
    :class="$clicks > 0 ? 'op0' : 'op100'"
  ></div>
  <div
    transition duration-400
    class="flex items-center gap-x-2"
    :class="$clicks >=2 ? 'op0' : 'op100'"
  >
    <div i-heroicons:x-mark-20-solid class="text-red text-4xl"></div>
    <span>Falsy</span>
  </div>
</h2>

<div
  transition duration-400
  class="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center"
  :class="$clicks > 0 ? '-translate-y-36 op100' : '-translate-y-36 op0'"
  v-click="['1', '2']"
>

<div w-max>

```javascript
/* Falsy */
false        // 布林值 false
0            // 數字 0
-0           // 負零
0n           // BigInt 零值
""           // 空字串
''           // 空字串
``           // 空模板字串
null         // null
undefined    // undefined
NaN          // Not a Number
```

</div>

<div class="flex items-center gap-x-2 font-bold tracking-wide mt-2">
  <div i-heroicons:exclamation-circle class="text-yellow"></div>
  <div>上述 <span text-red>假值 ( Falsy )</span> 以外的值都屬於 <span text-green>真值 ( Truthy )</span></div>
</div>

</div>

<div
  transition duration-400
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-30"
  v-click="2"
>

```html
<!-- 只宣告屬性 -->
<button type="button" disabled>Click</button>
<!-- 賦予空字串 -->
<button type="button" disabled="">Click</button>
<!-- 賦予 `false` 字串 -->
<button type="button" disabled="false">Click</button>
```

</div>

<style>
  code {
    font-size: 1.1rem;
  }
</style>

<!--
當這些布林屬性所綁定的狀態為真值 ( Truthy ) 時，最終就會在 HTML 上渲染這個屬性。

相反地，如果布林屬性所綁定的狀態為假值 ( Falsy ) 則不會渲染這個屬性。

[click] 以 JavaScript 來說，這些 false、0、空字串、null、undefined ... 等等都是 Falsy，

[click] 不過要注意，依照 HTML 的標準規範，如果像畫面中 button 按鈕這些 `disabled` 的形式，並沒有使用 `v-bind` 動態綁定，只有單純放 `disabled` 的，還有給一個空字串值，或是給個 `false` 字串，

這些都代表是真值，最終會存在在這個 button 按鈕元素的屬性中。
-->

---
transition: fade-out
---

<h2 class="font-bold tracking-wide mb-8">
  <code text-purple>v-bind</code> 的變化應用
</h2>

<div class="absolute left-16 top-30 grid grid-cols-2 gap-8 w-[calc(100%-12rem)]">

<div
  class="bg-teal/30 border-2 border-green/80 rounded-lg p-4"
  v-click="['1', '3']"
>
  <h3 class="text-center font-bold mb-4"><code text-purple>v-bind</code> 簡寫</h3>
  <div class="[&_code]:text-base flex flex-col items-center gap-y-4">

```html
<img v-bind:src="imageUrl">
```

<div class="text-center font-bold">等同於 👇</div>

```html
<img :src="imageUrl">
```
  
  </div>
</div>

<div
  class="bg-blue/30 border-2 border-blue/80 rounded-lg p-4"
  v-click="['2', '3']"
>
  <h3 class="text-center font-bold mb-4">變數同名縮寫</h3>
  <div class="[&_code]:text-base flex flex-col items-center gap-y-4">
  
```html
<div :id="id">...</div>
```

<div class="text-center font-bold">等同於 👇</div>

```html
<div :id>...</div>
```
  
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">

<div
  class="bg-violet/30 border-2 border-violet/80 rounded-lg p-4"
  v-click="3"
>
  <h3 class="text-center font-bold mb-4">綁定物件</h3>
  <div class="mb-2">多個屬性綁定</div>
  <div class="mb-2">
  
```vue
<script setup lang="ts">
const attrs = {
  id: 'container',
  class: 'wrapper',
}
</script>

<template>
  <div v-bind="attrs">...</div>
</template>
```

  </div>

  <div class="mb-2">渲染出來的 HTML 會長這樣 👇</div>

```html
<div id="container" class="wrapper">...</div>
```

</div>

<div
  class="bg-purple/30 border-2 border-purple/80 rounded-lg h-max p-4"
  v-click="4"
>
  <h3 class="text-center font-bold mb-4">調用函式</h3>
  <div class="mb-2">
  
```html
<div :id="findIdByPerson(person)">...</div>
```
  
  </div>
  <div>函式會在模板渲染成虛擬 DOM 時執行</div>
</div>

</div>

<!--
`v-bind` 動態綁定還有一些變化應用

[click] 像是如果覺得寫 `v-bind` 太冗長，尤其當元素的屬性很多的時候，可以把 `v-bind` 簡寫成一個冒號，這也是 Vue 開發者習慣的寫法

[click] 如果綁定的屬性名稱和狀態變數名稱一樣的時候，也可以省略變數名稱這樣縮寫，一個冒號接屬性名稱

[click] 另外還可以綁定物件，等於一次綁定多個屬性和值，不過這樣做必須明確使用 `v-bind`，不能簡寫成冒號

[click] 或者也可以調用函式，綁定函式輸出的結果

通常 `v-bind` 在 Vue 的模板語法中是最常使用到的模板指令，後續還會介紹很多 `v-*` 的模板指令，可以把這些模板指令當作是 Vue 的標記，主要是讓 Vue 的編譯器能夠依照對應的功能做不同的處理。
-->
