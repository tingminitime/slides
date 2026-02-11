# VSCode 安裝＆常用擴充套件

<p class="text-gray-200 pt-2">接下來我們來安裝 Vue 的好朋友－<span class="text-blue-500 font-bold">VSCode（Visual Studio Code）</span></p>

<!--
Node 沒問題之後

接下來我們要來安裝一個好用的編輯器

除了 vscode 之外，我們也找了幾個好用的套件

各位都可以安裝這些套件試試看

 -->

---

## VSCode 安裝

<br/>

### 安裝步驟

<br/>

<div grid="~ cols-2 gap-4">

<div>

1. 前往 [VSCode 官網](https://code.visualstudio.com/)
2. 點擊 `Download for Mac` <br/> 或 `Download for Windows`
3. 打開安裝檔並依據安裝提示安裝

<br />
</div>

<div v-click class="rounded-lg overflow-hidden border border-gray-300 p-1">
<img src="../../day1/assets/01/vscode-macos.png" alt="VSCode macOS 安裝" class="w-full h-full rounded" />
</div>

</div>

<!--

首先我們先來安裝 VScode

安裝方式跟 Node 差不多

進到官網之後

點擊 Download 就會開始下載了

 -->

---

# Vue Official

<div grid="~ cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-4 text-blue-400">主要功能</h3>
    <div v-click="1" class="mt-5">
      <h4 class="font-bold text-blue-300 mb-2" v-mark.blue="1">🔧 語法提示</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>在 .vue 結尾的檔案中，可以提供 Vue 的語法提示</li>
        <li>提供 template、script、style 的語法提示及補全</li>
      </ul>
    </div>
    <div v-click="2">
      <h4 class="font-bold text-green-300 mb-2" v-mark.green="2">🚨 錯誤檢查</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>在 .vue 結尾的檔案中，可以提供基本的語法檢查與警告</li>
      </ul>
    </div>
    <div v-click="3">
      <h4 class="font-bold text-purple-300 mb-2" v-mark.purple="3">✨ 格式化</h4>
      <ul class="text-sm text-gray-300">
        <li>在 .vue 結尾的檔案中，可以提供程式碼格式化的功能</li>
      </ul>
    </div>
  </div>
  
  <div v-click="4" class="flex flex-col justify-center">
    <div class="bg-gray-800 p-4 rounded-lg border border-gray-600">
      <h4 class="font-bold mb-2 text-white">📦 安裝連結</h4>
      <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
         target="_blank"
         class="text-blue-400 text-sm break-all hover:text-blue-300">
        Vue Official
      </a>
    </div>
  </div>
</div>

<!--
再來是套件的部份

第一個推薦的套件就是 Vue Official

這個套件是 Vue 官方推出，它主要的功能有

[click] 語法提示的部份，只要是在 Vue 的檔案中使用關於 Vue 的語法，就會出現提示或者自動補全

[click] 再來，錯誤檢查的部份，在 Vue 的檔案中，這個套件會自動進行 Vue 語法的檢查，如果出現錯誤，就會有錯誤提示

[click] 最後，格式化的部份，只要是 Vue 的檔案就能使用 Vue 的官方設定進行格式化

不過在我們的專案中，格式化通常我們都是使用 eslint 來進行格式化

 -->

---

# Tailwind CSS IntelliSense

<div grid="~ cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-4 text-cyan-400">主要功能</h3>
    <div v-click="1">
      <h4 class="font-bold text-teal-300 mb-2" v-mark.teal="2">👀 樣式語法預覽</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>hover 到 Tailwind 的 class 名稱時，會有樣式語法預覽的彈窗</li>
      </ul>
    </div>
    <div v-click="2" class="mt-5">
      <h4 class="font-bold text-cyan-300 mb-2" v-mark.cyan="1">🎯 語法提示</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>輸入 Tailwind 的 class 名稱時會有下拉選單可供選擇</li>
        <li>定義 tailwind.config.js 的設定時，可以提供更精確的語法提示</li>
      </ul>
    </div>
    <div v-click="2" class="bg-gray-800 p-4 rounded-lg border border-gray-600 duration-500 delay-500">
      <h4 class="font-bold mb-2 text-cyan-200">💡 使用範例</h4>
      <div class="rounded-lg overflow-hidden border border-gray-300 p-1">
        <img src="../../day1/assets/01/tailwind-support.png" alt="Tailwind CSS IntelliSense" class="w-full h-full rounded" />
      </div>
    </div>
  </div>
  
  <div v-click="3" class="flex flex-col justify-center">
    <div class="bg-gray-800 p-4 rounded-lg border border-gray-600">
      <h4 class="font-bold mb-2 text-white">📦 安裝連結</h4>
      <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" 
         target="_blank"
         class="text-cyan-400 text-sm break-all hover:text-cyan-300">
        Tailwind CSS IntelliSense
      </a>
    </div>
    <div v-click="4" class="bg-cyan-900/30 p-3 rounded-lg mt-4 border border-cyan-500/30">
      <p class="text-sm text-cyan-200">
        🚀 <strong>效率神器：</strong>讓 Tailwind 開發更加順暢！
      </p>
    </div>
  </div>
</div>

<!--

再來是 Tailwind CSS IntelliSense 這個套件

這個套件主要是提供 Tailwind 的語法提示

[click] 首先，安裝這個套件之後只要滑鼠 hover 到 Tailwind 的 class 名稱時，就會有樣式語法預覽的彈窗，這個好處是可以馬上知道這個 Tailwind 的 Class 實際上的 CSS 是什麼

[click] 再來，語法提示的部份，只要在 Vue 的檔案中使用關於 Tailwind 的語法，就會出現下拉選單顯示相關的語法，或者說如果有些自定義的屬性只要在 tailwind.config.js 中定義過，就會有相關的語法提示


 -->

---

# Auto Rename Tag

<div grid="~ cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-4 text-orange-400">主要功能</h3>
    <div v-click="1" class="mt-5">
      <h4 class="font-bold text-orange-300 mb-2" v-mark.orange="1">🔄 自動命名標籤</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>修改 HTML 或 XML 的起始標籤或結束標籤時，它會自動更新與之配對的另一個標籤</li>
      </ul>
    </div>
    <div v-click="1" class="bg-gray-800 p-4 rounded-lg border border-gray-600 duration-500 delay-500">
      <h4 class="font-bold mb-2 text-orange-200">✏️ 使用情境</h4>
      <div class="text-sm text-gray-300">
        <p class="mb-2">當您修改：</p>
        <div class="flex items-center gap-2 mb-2">
          <code class="bg-gray-700 px-2 py-1 rounded text-orange-300">&lt;div&gt;</code>
          <span class="text-orange-400">→</span>
          <code class="bg-gray-700 px-2 py-1 rounded text-orange-300">&lt;section&gt;</code>
        </div>
        <p class="mb-2">結束標籤會自動變成：</p>
        <code class="bg-gray-700 px-2 py-1 rounded text-orange-300">&lt;/section&gt;</code>
      </div>
    </div>
  </div>
  
  <div class="flex flex-col justify-center">
    <div v-click="1" class="bg-gray-800 p-4 rounded-lg border border-gray-600 duration-500 delay-1000">
      <h4 class="font-bold mb-2 text-white">📦 安裝連結</h4>
      <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" 
         target="_blank"
         class="text-orange-400 text-sm break-all hover:text-orange-300">
        Auto Rename Tag
      </a>
    </div>
    <div v-click="1" class="bg-yellow-900/30 p-3 rounded-lg mt-4 border border-yellow-500/30 duration-500 delay-1500">
      <p class="text-sm text-yellow-200">
        ⚡ <strong>效率提升：</strong>減少手動修改標籤的錯誤！
      </p>
    </div>
  </div>
</div>

<!--

再來是 Auto Rename Tag 這個套件

這個套件主要是提供 HTML 或 XML 的標籤自動命名

什麼意思呢

[click] 如果我們今天把 div 的起始標籤改成 section，他的結尾標籤也會自動改成 section

-->

---

# Auto Close Tag

<div grid="~ cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-4 text-emerald-400">主要功能</h3>
    <div v-click="1" class="mt-5">
      <h4 class="font-bold text-red-300 mb-2" v-mark.red="1">🔚 自動插入結束標籤</h4>
      <ul class="text-sm mb-4 text-gray-300">
        <li>在 HTML 或 XML 中，輸入起始標籤時，它會自動插入對應的結束標籤</li>
      </ul>
    </div>
    <div v-click="1" class="bg-gray-800 p-4 rounded-lg border border-gray-600 duration-500 delay-500">
      <h4 class="font-bold mb-2 text-emerald-200">⌨️ 使用情境</h4>
      <div class="text-sm text-gray-300">
        <p class="mb-2">當您輸入：</p>
        <code class="bg-gray-700 px-2 py-1 rounded text-emerald-300">&lt;div&gt;</code>
        <p class="mt-2 mb-2">會自動補全為：</p>
        <code class="bg-gray-700 px-2 py-1 rounded text-emerald-300">&lt;div&gt;|&lt;/div&gt;</code>
        <p class="mt-2 text-emerald-200 text-xs">（游標會自動定位在標籤中間）</p>
      </div>
    </div>
  </div>
  
  <div  class="flex flex-col justify-center">
    <div v-click="1" class="bg-gray-800 p-4 rounded-lg border border-gray-600 duration-500 delay-1000">
      <h4 class="font-bold mb-2 text-white">📦 安裝連結</h4>
      <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
         target="_blank"
         class="text-emerald-400 text-sm break-all hover:text-emerald-300">
        Auto Close Tag
      </a>
    </div>
    <div v-click="1" class="bg-green-900/30 p-3 rounded-lg mt-4 border border-green-500/30 duration-500 delay-1500">
      <p class="text-sm text-green-200">
        🎯 <strong>開發必備：</strong>讓標籤編寫更加流暢！
      </p>
    </div>
  </div>
</div>

<!--

最後是 Auto Close Tag

顧名思義，這個套件主要是自動補上關閉的 Tag

[click] 如果我們今天輸入 div 的時候，他會自動補上 div 的結尾標籤

-->

---
layout: center
class: text-center
---

# 🎉 擴充套件安裝完成！

<div class="text-lg mt-8 text-gray-300">
  現在 VSCode 已經準備完成了
</div>

<div class="mt-6 text-base text-gray-400">
  接下來讓我們開始學習 Vue 3 的核心概念 🚀
</div>

<!-- 
以上是我們開始 Vue 之前的準備

如果沒有問題的話，我們繼續下去

 -->
