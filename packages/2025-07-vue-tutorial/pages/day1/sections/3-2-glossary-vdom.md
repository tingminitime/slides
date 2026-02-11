---
transition: slide-left
---

<div class="transition duration-300" :class="$clicks > 1 ? '-translate-y-8' : ''">

# <div font-bold tracking-wide text-center>什麼是 Virtual DOM ？</div>

<div class="-translate-x-2 text-xl text-center op75 mb-4"> ( Virtual Document Object Model )</div>

<div class="-translate-x-2 text-center text-xl font-bold w-max bg-zinc-500/50 rounded-lg px-4 py-1.5 mx-auto" v-click>虛擬文件物件模型</div>

</div>

<div class="p-4 bg-[#3fb984] bg-opacity-60 text-center text-2xl font-bold rounded-lg tracking-wider" v-click>
  現代前端框架的核心技術
</div>

<!--
那什麼又是 Virtual DOM 呢 ?

[click] 顧名思義，Virtual DOM 就是虛擬文件物件模型

[click] 也是現代前端框架的核心技術
-->

---
transition: slide-left
---

# <div class="transition duration-500 font-bold" :class="$clicks > 0 ? '-translate-y-55' : ''">Virtual DOM 概念</div>

<div>

  <!-- Before Virtual DOM Tree -->
  <div v-click="1" class="absolute left-12 top-16 transform transition-all duration-800">
    <div class="flex justify-center items-center gap-x-2 mb-2">
      <img src="../assets/icon-vue.svg" class="w-8 h-8" />
      <span class="text-xl font-bold">SFC</span>
    </div>
    <div class="text-center mb-4 font-semibold text-white">Virtual DOM Tree <span class="text-green">( Before )</span></div>
    <div class="flex flex-col items-center space-y-3">
      <div class="w-20 h-12 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-sm text-black font-bold">根元素</div>
      <div class="w-px h-8 bg-gray-400"></div>
      <div class="flex space-x-8">
        <div class="w-16 h-10 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-xs text-black font-bold">子元素 1</div>
        <div class="w-16 h-10 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-xs text-black font-bold">子元素 2</div>
      </div>
    </div>
  </div>
  
  <!-- After Virtual DOM Tree -->
  <div v-click="2" class="absolute left-12 top-80 transform transition-all duration-800">
    <div class="text-center mb-4 font-semibold text-white">Virtual DOM Tree <span class="text-orange">( After )</span></div>
    <div class="flex flex-col items-center space-y-3">
      <div class="w-20 h-12 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-sm text-black font-bold">根元素</div>
      <div class="w-px h-8 bg-gray-400"></div>
      <div class="flex space-x-6">
        <div class="w-16 h-10 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-xs text-black font-bold">子元素 1</div>
        <div class="w-16 h-10 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center text-xs text-black font-bold">子元素 2</div>
        <div class="w-16 h-10 bg-orange-200 border-2 border-orange-400 rounded flex items-center justify-center text-xs text-black font-bold">New</div>
      </div>
    </div>
  </div>
  
  <!-- Diff Algorithm Arrow -->
  <div v-click="3" class="absolute left-80 top-60 transform transition-all duration-800 flex items-center space-x-4">
    <div class="flex items-center space-x-4">
      <div class="text-lg font-semibold text-white">
        <heroicons-arrow-path class="animate-spin"/>
        <span>&nbsp;Diff</span>
      </div>
      <div class="w-0 h-0 border-l-16 border-l-pink-400 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
    </div>
    <div class="w-24 h-16 bg-orange-300 border-2 border-orange-500 rounded-lg flex items-center justify-center text-sm text-black font-semibold">
      New
    </div>
    <div class="flex items-center space-x-4">
      <div style="animation-iteration-count: infinite; animation-duration: 2.5s; animation-timing-function: ease-in-out;" class="text-lg font-semibold text-white animate-flash">Patch</div>
      <div class="w-0 h-0 border-l-16 border-l-pink-400 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
    </div>
  </div>
  
  <!-- Final DOM Tree -->
  <div v-click="4" class="absolute right-12 top-40 transform transition-all duration-800">
    <div class="text-center mb-4 font-semibold text-white text-2xl">DOM Tree</div>
    <div class="flex flex-col items-center space-y-3">
      <div class="w-24 h-14 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center text-black font-bold">根元素</div>
      <div class="w-2px h-8 bg-gray-400"></div>
      <div class="flex space-x-4">
        <div class="w-20 h-14 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center text-sm font-bold text-black text-black font-bold">子元素 1</div>
        <div class="w-20 h-14 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center text-sm font-bold text-black text-black font-bold">子元素 2</div>
        <div class="w-20 h-14 bg-orange-200 border-2 border-orange-400 rounded flex items-center justify-center text-sm font-bold text-black animate-pulse-alt text-black font-bold">New</div>
      </div>
    </div>
  </div>

</div>

<!--
虛擬 DOM 是以 JavaScript 物件模擬特定的 DOM 樹狀結構，也是 Vue 的關鍵技術。

因為直接操作真實 DOM 容易消耗多餘的畫面渲染效能，像 Vue 這類型的前端框架通常會藉由操作模擬的 DOM 物件進行新增、修改、刪除，

等待操作結束後，再將虛擬 DOM 有變動的地方更新回真實 DOM 的某個部分，達到"相對"效能優化目的。

[click] 假設左邊這個這是 Vue 元件模板中的元素節點 DOM，注意它是虛擬 DOM。

[click] 如果在模板中動態新增了一個元素節點，Vue 會先在虛擬 DOM 中建立一個新的節點。

[click] 然後透過 Diff 演算法比較虛擬 DOM 前後版本的差異

[click] 最後，Vue 只會更新有變動的部分到真實 DOM 上，這樣能夠盡量避免不必要的 DOM 操作和畫面渲染，提高瀏覽器渲染畫面的效率。

上面是在"新增"元素節點的情況，還有其他情況像是"刪除"、"修改"，這些也都會透過 Vue 核心的 Diff 演算法來優化處理。
-->

---
transition: slide-left
---

## JavaScript 模擬 DOM 所建立的物件

<div class="grid grid-cols-[1fr_max-content_1fr] gap-x-4 mt-8">

<div>

```javascript
const vNode = {
  type: 'div', // 元素標籤
  props: { // 元素標籤屬性
    class: 'container', // class 樣式
    style: 'display: flex;' // style 樣式
  },
  // 子元素
  children: [
    {
      type: 'a', // 子元素標籤
      props: { // 子元素標籤屬性
        href: 'https://www.google.com', // 連結
        class: 'link', // class 樣式
        style: 'text-decoration: none;' // style 樣式
      },
      // 子元素的子元素...
      children: [{ type: 'text', text: 'Google', props: {} }],
    },
    // ...
  ],
}
```

</div>

<span i-carbon:arrow-right v-click translate-y-25 />

<div v-after>

```markdown
<div
  class="container"
  style="display: flex;"
>
  <a
    href="https://www.google.com"
    class="link"
  >
    Google
  </a>
</div>
```

</div>

</div>

<!--
可能很難想像 DOM 到底是什麼，這邊使用 JavaScript 模擬 DOM 所建立的物件，就像左邊這樣。

看看有個印象就好，基本上就是一個物件包含所有元素節點的資訊。

[click] 將這個 DOM 物件渲染成實際的 HTML 文件就會像右邊這樣。
-->

---
transition: fade-out
---

<div
  class="transition duration-300"
  :class="$clicks > 0 ? '-translate-y-4' : 'translate-y-0'"
>

# <div class="font-bold text-center tracking-wide">程式選擇議題通常是一體兩面</div>

</div>
  
<div
  class="text-xl text-center tracking-wide opacity-0 transition duration-300"
  :class="$clicks > 0 ? 'translate-y-2 opacity-100' : 'translate-y-0'"
  v-click
>
  <span v-mark.red.delay-400>沒有絕對完美的解決方案，只有最適合當下情境的選擇</span>
</div>

<!--
操作虛擬 DOM 這個技術到底是好還是不好呢 ?

程式選擇議題通常是一體兩面

[click] 像 Vue 這類選擇以 Virtual DOM 技術來提升開發者體驗、程式碼可預測性、程式碼可維護性，另外還有優化提升瀏覽器渲染畫面的"相對的效能"，但這麼做犧牲的是存放 Virtual DOM 的記憶體空間，以及 Virtual DOM 轉換成實際 DOM 的渲染成本，還有前端專案最終編譯的檔案大小等。
-->
