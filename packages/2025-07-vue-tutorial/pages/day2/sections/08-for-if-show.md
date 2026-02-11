# 八、v-for、v-if、v-show

<div class="text-gray-200" v-click="1">
  Vue 的 渲染 3 件套
</div>

<!--

接下來要跟大家介紹的是在 vue 裡面控制渲染的指令

 -->

---

<div class="text-gray-200 absolute transition-all duration-1000 ease-in-out" 
     :class="{
       'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': $clicks < 1,
       'left-8 top-8 translate-x-0 translate-y-0': $clicks >= 1
     }">
<h1>
  什麼是 v-for
</h1>
</div>

<div class="flex flex-col gap-4 mt-6">
  <!-- 卡片1-->
  <div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white delay-1000" v-click="1">
    <p class="text-slate-200">
      v-for 是 Vue 提供的列表渲染指令，用於基於某個 Data 渲染一個列表。
    </p>
  </div>

  <!-- 卡片2 -->
  <div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white" v-click="2">
    <p class="text-slate-200">
      v-for 允許我們將陣列、物件甚至是數字或文字渲染為 DOM 元素列表。
    </p>
  </div>

  <!-- 卡片3 -->
  <div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white" v-click="3">
    <p class="text-slate-200">
      v-for 會自動響應數據變化，當響應式數據發生變化時，畫面會自動更新。
    </p>
  </div>
</div>

<!--
一開始我們先來瞭解 v-for 這個指令

[click] 首先 v-for 最常被使用的情境就是用來跑迴圈來渲染資料

[click] 再來，v-for 不止可以渲染陣列，也可以渲染物件，甚至是數字或文字

[click] 最後，v-for 也有對於響應式狀態更改時自動重新渲染的特性

 -->

---

<div class="grid grid-cols-2 gap-4">

<div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">基本資料渲染</h3>
  <p class="text-white">
    v-for 最常被使用的情境就是<span class="font-bold ml-[1px]">基於某個 Data 渲染一個列表</span>。
  </p>

  <p class="text-white">
    舉個例子，我們可以基於一個陣列，渲染出水果列表。
  </p>
</div>

<div class='for-code' v-click="1">
```vue {monaco-run} {autorun:false}
<script setup>
  import { ref } from 'vue'

const items = ref(['蘋果', '香蕉', '橘子'])
</script>

<template>
  <div>
    <h3>水果列表：</h3>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
</template>
```
</div>

</div>

<!--

我們來仔細看看如何渲染基本的資料

[click] 假設有一個水果的陣列，我們要用 v-for 來渲染這個列表的話，我們可以在 li 這個 dom 元素中直接使用 v-for 在 in 的後面帶入水果的陣列，這樣就可以渲染出水果列表了

 -->

---

<div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white mb-3">
  <h3 class="text-xl font-bold mb-3">渲染多種來源</h3>
  <p class="text-white">
    v-for 可以渲染多種來源，例如陣列、物件、數字、文字等。
  </p>
</div>

<div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">自動響應機制</h3>
  <p class="text-emerald-200">
    v-for 會自動響應數據變化，當響應式數據發生變化時，畫面會自動更新。
  </p>
</div>

<div class="flex justify-end">

  <a href="https://ltedu-vue-book.zeabur.app/for" target="_blank" class="mt-4 inline-block text-emerald-200 hover:!text-emerald-400">
    來去看看手冊
  </a>

</div>

<!--
除了剛剛標準的陣列渲染之外，v-for 也可以渲染物件、數字、文字

同時，v-for 也有對於響應式狀態更改時自動重新渲染的特性

所以接下來我們就來手冊看看 v-for 的實際應用

 -->

---

<div class="text-gray-200 absolute transition-all duration-1000 ease-in-out" 
     :class="{
       'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': $clicks < 1,
       'left-8 top-8 translate-x-0 translate-y-0': $clicks >= 1
     }">
<h1>
  什麼是 v-if & v-show
</h1>
</div>

<div class="flex flex-col gap-4 mt-6">
  <!-- 卡片1-->
  <div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white delay-1000" v-click="1">
    <p class="text-slate-200">
      v-if 跟 v-show 都是 Vue 用來控制元素的顯示與否的指令。
    </p>
  </div>

  <!-- 卡片2 -->
  <div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white" v-click="2">
    <p class="text-slate-200">
      v-if 和 v-show 最重要的差異就是 DOM 元素是否真正存在。
    </p>
  </div>

  <!-- 卡片3 -->
  <div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white" v-click="3">
    <p class="text-slate-200">
      v-if 可以跟 v-else 搭配使用，當條件為 false 時，會渲染 v-else 的內容。
    </p>
  </div>
</div>

<!--
回到 v-if 跟 v-show 的部份

[click] 首先 v-if 跟 v-show 都是用來控制元素的顯示與否的指令

[click] 不過 v-if 跟 v-show 有著本質上的差別，v-if 會從 DOM 中移除元素，而 v-show 會保留元素，只是隱藏起來。

[click] 至於 v-if 還可以搭配 v-else 來使用，當條件為 false 時，會渲染 v-else 的內容。

所以接下來我們就來看看 v-if 跟 v-show 的實際應用

 -->

---

<div class="grid grid-cols-2 gap-4">

<div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">基本用法</h3>
  <p class="text-white">
    v-if 跟 v-show 都能夠依賴於響應式狀態去判斷元素是否要顯示。
  </p>
</div>

<div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">DOM 元素是否存在</h3>
  <p class="text-white">
    v-if 跟 v-show 最重要的差異就是 DOM 元素是否真正存在。
  </p>
  <p class="text-white text-sm">
    ・v-if 會從 DOM 中移除元素。
  </p>
  <p class="text-white text-sm">
    ・v-show 會保留元素，只是隱藏起來。
  </p>
</div>

</div>

<!--

我們來看看 v-if 跟 v-show 可以怎麼使用

這兩個語法都可以使用響應式狀態去判斷是否要顯示

[click] 所以我們來看看程式碼，我們可以先宣告兩個變數，一個給 v-if 一個給 v-show，接下來我們在 template 的部份增加兩個按鈕，然後設定當按鈕被點擊時，變數的值會被反轉，這樣就可以控制元素的顯示與否了，至於剛剛提到的 v-if 跟 v-show 的差別，我們來看一下 console 的結果

 -->

---

<div class="w-[50dvw]">

<div class='horizontal-runner full-height'>
```vue {monaco-run} {autorun:false}
<script setup>
import { ref } from 'vue'

const showWithIf = ref(false)
const showWithShow = ref(false)
const message = ref('Hello Vue!')
</script>

<template>
  <div>
    <button class="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2" @click="showWithIf = !showWithIf">
      切換 v-if (當前: {{ showWithIf ? '顯示' : '隱藏' }})
    </button>
    
    <button class="bg-indigo-600 text-white px-4 py-2 rounded-md" @click="showWithShow = !showWithShow">
      切換 v-show (當前: {{ showWithShow ? '顯示' : '隱藏' }})
    </button>

    <p v-if="showWithIf">IF 文字：{{ message }}</p>
    <p v-show="showWithShow">SHOW 文字：{{ message }}</p>

  </div>
</template>
```
</div>

</div>

<!--

我們來看看 v-if 跟 v-show 可以怎麼使用

這兩個語法都可以使用響應式狀態去判斷是否要顯示

[click] 所以我們來看看程式碼，我們可以先宣告兩個變數，一個給 v-if 一個給 v-show，接下來我們在 template 的部份增加兩個按鈕，然後設定當按鈕被點擊時，變數的值會被反轉，這樣就可以控制元素的顯示與否了，至於剛剛提到的 v-if 跟 v-show 的差別，我們來看一下 console 的結果

 -->

---

<div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">v-if & v-else 搭配使用</h3>
  <p class="text-emerald-200">
    v-if 可以跟 v-else 搭配使用，依據設定條件的不同，渲染不同的內容。
  </p>
</div>

<div class="flex justify-end">

  <a href="https://ltedu-vue-book.zeabur.app/if" target="_blank" class="mt-4 inline-block text-emerald-200 hover:!text-emerald-400">
    來去看看手冊
  </a>

</div>

<!--
剛剛也有提到 v-if 可以搭配 v-else 來使用，當條件為 false 時，會渲染 v-else 的內容

所以我們就來去手冊看看幾個例子

 -->
