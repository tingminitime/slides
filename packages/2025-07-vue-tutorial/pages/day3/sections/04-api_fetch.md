---
transition: slide-left
---

<h1 class="font-bold text-center tracking-wide">
  四、Vue 中的 API 串接
</h1>

<div class="text-center text-2xl">
  <code text-green>Fetch API</code>、<code text-green>元件化</code>、<code text-green>Composable</code>
</div>

<!--
再來要介紹這次課程中最重要的 API 串接

在這個部份我們會使用 JS 中最基本的 Fetch API 來實作

一樣會搭配一些例子來讓大家理解
-->

---

<h2 class="font-bold tracking-wide">
  API 串接的三種實作方式
</h2>

<div class="grid grid-cols-3 gap-6 mt-8">

<div v-click="1" class="p-6 bg-blue/10 border-2 border-blue/30 rounded-lg">
  <h3 class="flex items-center gap-x-2 font-bold mb-4">
    <span class="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white font-bold">1</span>
    <span class="text-xl">單一元件實作</span>
  </h3>
  <div class="text-lg mb-3">所有邏輯都在一個元件裡</div>
  <div class="text-sm bg-white/20 p-2 rounded">適合：簡單功能、快速開發</div>
</div>

<div v-click="2" class="p-6 bg-green/10 border-2 border-green/30 rounded-lg">
  <h3 class="flex items-center gap-x-2 font-bold mb-4">
    <span class="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white font-bold">2</span>
    <span class="text-xl">元件分離實作</span>
  </h3>
  <div class="text-lg mb-3">API 邏輯在父元件，子元件負責渲染</div>
  <div class="text-sm bg-white/20 p-2 rounded">適合：中型專案、邏輯分離</div>
</div>

<div v-click="3" class="p-6 bg-purple/10 border-2 border-purple/30 rounded-lg">
  <h3 class="flex items-center gap-x-2 font-bold mb-4">
    <span class="w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white font-bold">3</span>
    <span class="text-xl">Composable 實作</span>
  </h3>
  <div class="text-lg mb-3">封裝成可重複使用的函式</div>
  <div class="text-sm bg-white/20 p-2 rounded">適合：大型專案、程式碼複用</div>
</div>

</div>

<!--
在等一下的 demo 中

我們會從基本到稍微進階總共 3 種不同的寫法

[click] 第一種是單一元件實作，所有的 API 邏輯和 UI 渲染都放在同一個元件中，適合簡單功能和快速開發

[click] 第二種是元件分離實作，API 邏輯保留在父元件中，渲染部份拆分到子元件

[click] 第三種是 Composable 實作，將 API 邏輯封裝成可重複使用的函式，提高程式碼的複用性

接下來我們一一來看這三種方式的具體實作
-->

---

<img src="../assets/api-sample.gif" alt="API 串接的三種實作方式" class="w-[500px] mx-auto">

---

<div class="flex justify-center gap-x-4">

<div class="flex flex-col items-center gap-y-2">
<p class="text-3xl font-bold">GET</p>
<PlaygroundLink category="day3" link="ApiFetchGet">Playground</PlaygroundLink>
</div>

<div class="flex flex-col items-center gap-y-2">
<p class="text-3xl font-bold">POST</p>
<PlaygroundLink category="day3" link="ApiFetchPost">Playground</PlaygroundLink>
</div>

</div>

---

<h1 class="font-bold tracking-wide text-center">
  API 串接總結
</h1>

<div class="text-center text-2xl mt-8 space-y-6">
  <div v-click="1" class="flex items-center justify-center gap-4">
    <div class="px-4 py-2 bg-blue/10 border border-blue/30 rounded">單一元件</div>
    <div>→</div>
    <div class="px-4 py-2 bg-green/10 border border-green/30 rounded">元件分離</div>
    <div>→</div>
    <div class="px-4 py-2 bg-purple/10 border border-purple/30 rounded">Composable</div>
  </div>
  <div v-click="2" class="text-lg">
    根據專案規模選擇合適的實作方式
  </div>
  <div v-click="3" class="text-lg">
    乾淨的頁面邏輯跟資料傳遞
  </div>
</div>

<!--
總結一下 API 串接的部份：

[click] 剛剛示範了三種實作方式：單一元件實作適合簡單功能、元件分離實作適合中型專案、Composable 實作適合大型專案

[click] 不是說有拆元件或者有拆 Composable 就比較好，重要的是要根據專案規模和團隊情況選擇合適的實作方式

[click] 不管使用哪種方式，乾淨的頁面邏輯跟資料傳遞才是最重要的

-->
