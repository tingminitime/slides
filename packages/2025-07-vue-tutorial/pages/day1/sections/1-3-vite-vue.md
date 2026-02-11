---
transition: fade-in
lineNumbers: true
---

<div class="flex items-center gap-6">
  <div class="w-24">
    <img src="../../day1/assets/01/vite-logo.png" alt="Vite Logo" class="w-full h-auto" />
  </div>
  
  <div>
    <h1>什麼是 Vite？ <span class="text-yellow-400 font-bold text-sm bg-gray-800 px-2 py-1 rounded">/vit/</span></h1>
    <p class="text-gray-200 pt-2">
      了解現代前端開發工具 <span class="text-blue-400 font-bold">Vite</span> 的核心概念
    </p>
  </div>
</div>

<!--
在這次的課程中

我們主要會使用 Vite 這個工具來建立 Vue 的專案

所以我們先來瞭解一下到底 Vite 是什麼東西

順帶一題，Vite 是法文，念法是 Vite

是快速的意思

所以代表 Vite 是一個編譯速度非常快的工具

 -->

---

# Vite 簡介

<br/>

<div v-click="1" class="mb-6">
  <h4 class="text-xl font-semibold mb-3">🚀 快速的開發伺服器</h4>
  <ul class="list-disc list-inside space-y-2 text-gray-300">
    <li>使用原生 ES 模組（ES Modules），無需打包即可快速啟動</li>
    <li>支援熱更新 (HMR)，修改程式碼立即看到結果</li>
  </ul>
</div>

<div v-click="2" class="mb-6">
  <h4 class="text-xl font-semibold mb-3">⚡ 優化的建置工具</h4>
  <ul class="list-disc list-inside space-y-2 text-gray-300">
    <li>基於 Rollup 的生產環境建置</li>
    <li>自動進行代碼分割和優化</li>
  </ul>
</div>

<div v-click="3" class="mb-6">
  <h4 class="text-xl font-semibold mb-3">🛠️ 豐富的功能支援</h4>
  <ul class="list-disc list-inside space-y-2 text-gray-300">
    <li>內建支援 TypeScript、JSX、CSS 等</li>
    <li>豐富的插件生態系統</li>
  </ul>
</div>

<!--

Vite 的優點

[click] 首先，Vite 在開發模式下，伺服器是使用原生 ES 模組，也就是說 Vite 會自動將 Vue 的程式碼轉成 ES Module 的 JS，這也是為什麼 Vite 可以支援熱更新的原因，因為只要有任何更新，Vite 就會自動重新編譯，不需要重新啟動伺服器。

[click] 再來，當我們程式碼完成的時候，Vite 會自動進行代碼分割和優化，這樣可以減少打包的時間。

[click] 最後，Vite 本身也支援將 TS 的程式碼編譯成 JS，因為目前 TS 的程式碼是沒辦法直接再瀏覽器中執行，所以只要有任何 TS 的程式碼都一定會經過一次編譯。

 -->
---

# 建立 Vue 專案

<p class="text-gray-200 pt-2 mb-4">
  使用 <span class="text-blue-400 font-bold">Vite</span> 快速建立 <span class="text-green-400 font-bold">Vue</span> 專案
</p>

<div class="text-center">
  <a href="https://cn.vite.dev/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
    📖 Vite 官網
  </a>
</div>

<!-- 
稍微瞭解 Vite 之後

終於來到我們這次課程的重點

使用 Vite 建立一個 Vue 的專案

 -->

---

## macOS 建立步驟

<div class="text-lg space-y-3 mt-6">
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">1.</span>
    <span>打開終端機，進入到桌面 <code class="bg-gray-800 px-2 py-1 rounded">cd ~/Desktop</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">2.</span>
    <span>建立專案 <code class="bg-gray-800 px-2 py-1 rounded">npm create vite@latest</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">3.</span>
    <span>輸入專案名稱，例如 <code class="bg-gray-800 px-2 py-1 rounded">my-project</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">4.</span>
    <span>選擇框架，例如 <code class="bg-gray-800 px-2 py-1 rounded text-green-400">Vue</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">5.</span>
    <span>選擇語言，例如 <code class="bg-gray-800 px-2 py-1 rounded text-yellow-400">JavaScript</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">6.</span>
    <span>使用 VSCode 開啟專案</span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">7.</span>
    <span>安裝相依套件 <code class="bg-gray-800 px-2 py-1 rounded">npm install</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">8.</span>
    <span>啟動專案 <code class="bg-gray-800 px-2 py-1 rounded">npm run dev</code></span>
  </div>
</div>

<!--
如果是使用 mac 的話

通常我都會使用終端機來建專案

不過要注意如果使用終端機的話要先 cd 到桌面或者自己習慣的位置

之後就按照上面的步驟一個一個貼上或選擇

原則上沒錯誤的話，就可以直接啟動專案了

 -->

---

## Windows 建立步驟

<div class="text-lg space-y-3 mt-6">
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">1.</span>
    <span>在桌面建立專案資料夾</span>
  </div>

   <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">2.</span>
    <span>使用 vscode 打開專案資料夾</span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">3.</span>
    <span>使用 vscode 終端機，輸入 <code class="bg-gray-800 px-2 py-1 rounded">npm create vite@latest .</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">4.</span>
    <span>輸入專案名稱，例如 <code class="bg-gray-800 px-2 py-1 rounded">my-project</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">5.</span>
    <span>選擇框架，例如 <code class="bg-gray-800 px-2 py-1 rounded text-green-400">Vue</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">6.</span>
    <span>選擇語言，例如 <code class="bg-gray-800 px-2 py-1 rounded text-yellow-400">JavaScript</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">7.</span>
    <span>使用 VSCode 開啟專案</span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">8.</span>
    <span>安裝相依套件 <code class="bg-gray-800 px-2 py-1 rounded">npm install</code></span>
  </div>
  
  <div class="flex items-start">
    <span class="text-blue-400 font-bold mr-3">9.</span>
    <span>啟動專案 <code class="bg-gray-800 px-2 py-1 rounded">npm run dev</code></span>
  </div>
</div>

<!--

如果是使用 windows 的話

步驟基本上跟 mac 差不多

只是一開始會建議可以先在桌面建立專案資料夾

之後使用 vscode 打開專案資料夾後使用 vscode 的終端機輸入指令

再按照終端機提示的指令選擇就可以了

 -->

---

# Vite 配置檔案

<p class="text-gray-200 pt-2 mb-4">
  了解 <code class="text-blue-400 font-bold">vite.config.js</code> 的常見配置選項
</p>

<!-- 
基本上剛剛的步驟如果都沒有錯誤的話

恭喜你，你已經成功建立了一個 Vue 的專案

不過在實際開發前，我們通常會先對 Vite 做一些配置

 -->

---

## 基本配置

<br />

````md magic-move {lines: true}
```js
// vite.config.js
export default {
  plugins: [vue()],
}
```

```js {1-17|3|4|5-7|8-12}
// vite.config.js
export default {
  plugins: [vue()], // 使用 Vue 插件
  base: './', // 部署後的根路徑
  server: {
    port: 3000, // 指定埠號
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 設定路徑別名
    },
  },
}
```
````

<!-- 
最一開始的 Vite Config 基本上會長這樣

但就像我剛剛說的，我們會對 Vite 做一些基礎配置

[click]

[click] 例如第一個屬性 Plugins，這邊是表示說 Vite 會使用 Vue 的套件

[click] base 是表示編譯後的 dist 資料夾要放在哪裡，通常就會使用 ./ 來表示說放在根目錄

[click] 再來 server 的 port 則是說有時候前端可能不希望 port 開在預設的 3000，那這邊就可以自己定義 

[click] 然後 resolve 的 alias 就是用來設定別名用的，例如我們在 src 資料夾下有一個 components 資料夾，那我們就可以使用 @components 來快速指向 components 這個資料夾

 -->


