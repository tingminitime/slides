# 二、Vue 專案架構

<p class="text-gray-200 pt-2">Vue 的專案就像是樂高一樣，頁面與元件都是一塊一塊拼起來的</p>

<!--
在 Vue 的世界中

每個頁面的內容都可以拆成一個一個的小元件

但如果這些元件沒有被妥善的收好的話

到最後整個專案就會像是小朋友玩完玩具後沒有整理的客廳一樣

所以接下來我們就稍微瞭解一下 Vue 的專案架構大概會長什麼樣子

 -->

---

## 專案架構

<br/>

````md magic-move {lines: true}
```yaml {1-10|1|2|3|4|5|6|7|8|9|10}
.vscode/          # VSCode 設定
node_modules/     # 依賴套件
public/           # 靜態資源（不進行編譯）
src/              # 程式碼
.gitignore        # Git 忽略檔案
index.html        # 首頁
package.json      # 依賴套件
package-lock.json # 依賴套件鎖定
README.md         # 專案說明
vite.config.js   # Vite 設定檔
```

```yaml {4-14|5|6|7|8|9|10|11|12|13|14}
.vscode/          # VSCode 設定
node_modules/     # 依賴套件
public/           # 靜態資源（不進行編譯）
src/              # 程式碼
  assets/         # 靜態資源（會進行編譯）
  components/     # 元件
  composables/    # 組合式 API
  layouts/        # 頁面布局
  pages/          # 主要頁面
  router/         # 路由設定
  store/          # 狀態管理
  utils/          # 工具函數
  App.vue         # Vue 根組件
  main.js         # 入口檔案
.gitignore        # Git 忽略檔案
index.html        # 首頁
package.json      # 依賴套件
package-lock.json # 依賴套件鎖定
README.md         # 專案說明
vite.config.js   # Vite 設定檔
```
````

<!--
如果沒有意外的話

現在各位的專案應該會長這樣

會有

[click] .vscode，這個是針對 vscode 的配置檔，像我就會在這裡面設定程式碼的行高

[click] node_modules，這個是所有安裝的套件資料夾，裡面會有所有我們在 package.json 裡面設定的套件，要特別注意的是這個資料夾我們是不會上到 git 的，因為他通常很大一包。

[click] public，這是一個專門存放靜態資源的資料夾，放在這個資料夾裡面的 icon、檔案是不會經過編譯的

[click] src，這個是程式碼的資料夾，基本上所有的程式碼我們都會放在這個裡面，等等我會在逐一介紹

[click] .gitignore，這就很單純，設定哪些檔案不要上傳到 git，一般來說我們用剛剛的指令建立 vue 專案的話，這裡面其實都已經有寫一些基本的東西了，除非有額外的需求，不然通常是不用額外去編輯他

[click] index.html，這個是首頁的檔案，也就是我們通常說的 SPA 的入口檔案

[click] package.json，這個是專案的設定檔，裡面會有所有我們在專案中設定的套件、腳本、版本號等等

[click] package-lock.json，這個是專案的鎖定檔，裡面會有所有我們在專案中設定的套件、腳本、版本號等等

[click] 最後的 readme 跟剛剛介紹過的 vite.config 就不用多說了

[click]

[click] 再來，我們回過頭來仔細看一下 src 資料夾裡面有什麼東西

[click] 首先，我們會看到 assets 資料夾，這個資料夾跟 public 資料夾很像，都是用來存放靜態資源的，但不同的是，assets 資料夾裡面的資源會經過 Vite 的編譯，通常會放一些頁面上的圖片或者如果有想要獨立部份的 css 的話也可以放這裡

[click] 再來，我們會看到 components 資料夾，這個資料夾裡面通常會放 UI 元件，例如按鈕、表單元素等。

[click] composables 的話，則是如果有一個有使用 vue api 的函數，且會有共用的可能性，這時候我們就會抽離出來放這裡。

[click] layouts 資料夾，則是如果有一個頁面有共用的佈局，例如頁首、頁尾等，這時候我們就會抽離出來放這裡。

[click] pages 的話，則是放頁面元件，例如首頁、登入頁、註冊頁等，這裡的頁面元件通常會被 router 所使用。

[click] router 的話，則是放路由的設定。

[click] store 的話，則是放狀態管理的程式碼。

[click] utils 的話，則是放一些工具函數，例如日期格式化、字串處理等，這邊的程式碼跟 composables 很像，但不同的是，utils 的程式碼通常不使用 Vue 的 api，而是使用純粹的 js 來寫。

[click] App.vue 的話，則是 Vue 的根組件，要掛載 Header 或 Footer 的話就會寫在這邊。

[click] main.js 的話，則是 Vue 的入口檔案，通常會放一些全域的設定，例如有沒有額外掛一些套件之類的。

 -->

---

## src 目錄結構

<div class="grid grid-cols-2 gap-3 mt-6">

  <div class="bg-gray-800 p-3 rounded-lg" v-click="1">
    <h4 class="text-pink-400 font-bold mb-2">assets/</h4>
    <p class="text-gray-300 text-sm">存放靜態資源，如圖片、字體和圖示等</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="2">
      <code class="text-pink-300">./src/assets/logo.png</code>
      <code class="text-pink-300">./src/assets/banner.png</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg" v-click="3">
    <h4 class="text-amber-400 font-bold mb-2">layouts/</h4>
    <p class="text-gray-300 text-sm">存放頁面佈局元件，如主佈局、管理面板佈局等</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="4">
      <code class="text-amber-300">./src/layouts/Login.vue</code>
      <code class="text-amber-300">./src/layouts/Main.vue</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg" v-click="5">
    <h4 class="text-teal-400 font-bold mb-2">views/</h4>
    <p class="text-gray-300 text-sm">存放頁面級元件，對應路由的各個頁面</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="6">
      <code class="text-teal-300">./src/views/Login.vue</code>
      <code class="text-teal-300">./src/views/Main.vue</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg group cursor-pointer hover:border-indigo-300 border-2 border-transparent transition-all duration-300" v-click="7" @click="$nav.go(24)">
    <div class="flex items-center gap-x-1">
      <h4 class="text-indigo-400 font-bold group-hover:text-indigo-300 transition-all duration-300">router/</h4>
      <span class="text-gray-400 text-sm group-hover:translate-x-15 transition-all duration-300">🚀</span>
    </div>
    <p class="text-gray-300 text-sm">存放 Vue Router 路由配置</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="8">
      <code class="text-indigo-300">./src/router/index.js</code>
      <code class="text-indigo-300">./src/router/routes.js</code>
    </div>
  </div>

</div>

<!-- 
講了這麼多

我們複習一下下 src 資料夾裡面有什麼東西

[click] assets 資料夾

[click] 通常會放一些頁面上的圖片

[click] layouts 資料夾

[click] 通常會放一些頁面佈局元件，例如主佈局、管理面板佈局等

[click] views 資料夾

[click] 通常會放頁面級元件，對應路由的各個頁面

[click] router 資料夾

[click] 主要會放路由的設定，看到這個火箭圖案就知道這邊需要仔細說明一下

 -->

---

## Router 配置介紹

<p class="text-gray-200 pt-2">Vue Router 是 Vue.js 的官方路由管理器，用於管理單頁應用程式的路由</p>

<div class="">

<!-- 左欄：程式碼 -->
<div class="space-y-4">
````md magic-move {lines: true}
```js {1-19|1-2|3-15|4-8|7,12|17|18}
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/Home.vue'
export const routes = [
  {
    name: 'Home',                                // 路由名稱
    path: '/',                                   // 路由路徑
    component: HomeView,                         // 對應的頁面組件（立即載入）
  },
  {
    name: 'Ref',                                 // 路由名稱
    path: '/ref',                                // 路由路徑
    component: () => import('../views/Ref.vue'), // 對應的頁面組件（動態載入）
  },
  ...其他路由
]
export const router = createRouter({
  history: createWebHistory(),                  // 路由模式，HTML5 模式
  routes,                                       // 註冊所有路由配置，可以讓瀏覽器支援前進/後退
})
```
````

</div>

</div>

<!-- 
其實基本的路由配置並不會很難

[click] 一開始我們先引入跟 router 相關的方法之後

[click] 接著我們定義一下哪些路由名稱或路徑要對應到哪個頁面元件

[click] 例如，首頁的路徑是 /，對應的頁面元件是 HomeView

[click] 然後 Ref 頁面的話，對應的頁面元件就會是 Ref.vue，仔細看的話會發現首頁跟 Ref 的 component 寫法有點不一樣，這種寫法我們叫做動態載入，意思就是說當我今天有需要用到 Ref 頁面的時候，我才會去載入 Ref.vue 這個元件，這樣的話就可以避免一開始就把所有頁面都載入進來，可以提升一點效能

[click] 最下面的 history 則是路由模式，這邊我們使用的是 HTML5 模式，這邊的話我們先不用太在意

[click] 最後再把剛剛配置的路由給註冊起來，這樣配置就完成了

 -->

---

## src 目錄結構

<p class="text-gray-200 pt-2">主要程式碼存放的核心目錄</p>

<div class="grid grid-cols-2 gap-3 mt-6">

  <div class="bg-gray-800 p-3 rounded-lg group cursor-pointer hover:border-cyan-400 border-2 border-transparent transition-all duration-300" v-click="1" @click="$nav.go(78)">
    <div class="flex items-center gap-x-1">
      <h4 class="text-cyan-400 font-bold group-hover:text-cyan-300 transition-all duration-300">components/</h4>
      <span class="text-gray-400 text-sm group-hover:translate-x-15 transition-all duration-300">🚀</span>
    </div>
    <p class="text-gray-300 text-sm">存放可重複使用的 UI 元件，如按鈕、表單元素等</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="2">
      <code class="text-cyan-300">./src/components/Button.vue</code>
      <code class="text-cyan-300">./src/components/Modal.vue</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg group cursor-pointer hover:border-emerald-400 border-2 border-transparent transition-all duration-300" v-click="3" @click="$nav.go(79)">
    <div class="flex items-center gap-x-1">
      <h4 class="text-emerald-400 font-bold group-hover:text-emerald-300 transition-all duration-300">composables/</h4>
      <span class="text-gray-400 text-sm group-hover:translate-x-15 transition-all duration-300">🚀</span>
    </div>
    <p class="text-gray-300 text-sm">存放可重複使用的組合式函數，遵循 Vue 3 的 Composition API 模式</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="4">
      <code class="text-emerald-300">./src/composables/useAuth.ts</code>
      <code class="text-emerald-300">./src/composables/useApi.ts</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg group cursor-pointer hover:border-violet-400 border-2 border-transparent transition-all duration-300" v-click="5" @click="$nav.go(80)">
    <div class="flex items-center gap-x-1">
      <h4 class="text-violet-400 font-bold group-hover:text-violet-300 transition-all duration-300">store/</h4>
      <span class="text-gray-400 text-sm group-hover:translate-x-15 transition-all duration-300">🚀</span>
    </div>
    <p class="text-gray-300 text-sm">存放 Pinia 狀態管理，用於管理應用程式的狀態</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="6">
      <code class="text-violet-300">./src/store/userStore.ts</code>
      <code class="text-violet-300">./src/store/appStore.ts</code>
    </div>
  </div>

  <div class="bg-gray-800 p-3 rounded-lg" v-click="7">
    <h4 class="text-rose-400 font-bold mb-2">utils/</h4>
    <p class="text-gray-300 text-sm">存放工具函數，如日期格式化、字串處理等</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="8">
      <code class="text-rose-300">./src/utils/format.ts</code>
      <code class="text-rose-300">./src/utils/request.ts</code>
    </div>
  </div>

</div>

<!-- 
接著這部份除了複習之外，我們也來瞭解一下 Vue 裡面一些命名的通俗約定

[click] 首先是 components 資料夾，按照剛剛說的

[click] 通常會放 UI 元件，例如按鈕、表單元素等

[click] 再來是 composables 資料夾

[click] 通常會放一些有使用到 vue api 的函數，那我們一樣來看看幾個例子

[click] 再來是 store 資料夾，以現在的專案來說，狀態管理通常我們會使用 pinia 來管理，以前的話可能會使用 vuex，這兩個工具的差別就是 pinia 的語法跟 vue3 的 composition api 寫法很像，所以對於剛接觸 vue3 的開發者來說，會比較好上手

[click] 在這個資料夾中，一定就是放 pinia 的檔案

[click] 最後是 utils 資料夾

[click] 這部份就沒什麼特的，通常會放一些工具函數，例如日期格式化、字串處理等

 -->

---

## Package.json 套件管理

<p class="text-gray-200 pt-2">專案依賴與腳本管理的核心文件</p>

<div class="grid grid-cols-2 gap-4 mt-6">
````md magic-move {lines: true}
```json {1-21|2|5|6-12}
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest"
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```
````

<div class="grid grid-cols-2 gap-4">

  <div class="bg-gray-800 px-2 py-1 rounded-lg" v-click="1">
    <h4 class="text-blue-400 font-bold mb-2">name</h4>
    <p class="text-gray-300 text-sm">專案名稱，必須為唯一值</p>
  </div>

  <div class="bg-gray-800 px-2 py-1 rounded-lg" v-click="2">
    <h4 class="text-yellow-400 font-bold mb-2">type</h4>
    <p class="text-gray-300 text-sm">模組類型，設為 "module" 表示使用 ES6 模組語法</p>
  </div>

  <div class="bg-gray-800 px-2 py-2 rounded-lg col-span-2" v-click="3">
    <h4 class="text-purple-400 font-bold mb-2">scripts</h4>
    <p class="text-gray-300 text-sm">專案的腳本命令，可設定執行、lint 指令...等</p>
    <div class="text-sm mt-2 flex flex-col gap-2" v-click="3">
      <code class="text-purple-300">npm run dev</code>
      <code class="text-purple-300">npm run build</code>
      <code class="text-purple-300">npm run lint</code>
      <code class="text-purple-300">npm run test</code>
    </div>
  </div>

</div>

</div>

<!-- 
接著是專案中除了 vite.config 之外，第二重要的配置檔了

在 package.json 裡面，我們有一些東西是可以自定義的

[click] 例如 name 這個欄位，通常用 vite 建立的話，這邊會使用專案名稱，如果說這個用 git 或開源，那就一定要是唯一值

[click] 再來是 type 這個欄位，目前都會使用 module 這個值，這樣的話就可以使用 ES6 的模組語法，也就是 import from 這種寫法

[click] 再來是 scripts 這個欄位，這個欄位通常會放一些腳本命令，例如 dev、build、lint、test 等，如果有一些自己習慣的啟動指令之類的也可以在這邊調整



 -->

---

## 版本號管理

<p class="text-gray-200 pt-2">套件版本號前的符號意義</p>

<div class="mt-8">

````md magic-move {lines: true}
```json
{
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.3",
    "@vue/tsconfig": "^0.7.0",
    "typescript": "~5.8.3",
    "vite": "^6.3.5",
    "vue-tsc": "^2.2.8"
  }
}
```

```json
{
  "dependencies": {
    "vue": "^3.5.13", // 允許更新到 3.x.x 的最新版本（主版本號不變）
    "axios": "~1.5.0", // 允許更新到 1.5.x 的最新版本（次版本號不變）
    "lodash": "4.17.21" // 固定版本，不允許自動更新
  }
}
```
````

<div class="grid grid-cols-2 gap-4 mt-6">

  <div class="bg-green-900 p-4 rounded-lg">
    <h4 class="text-green-400 font-bold mb-2">Dependencies</h4>
    <p class="text-gray-300 text-sm">專案運行時必需的套件，會包含在最終打包結果中</p>
  </div>

  <div class="bg-blue-900 p-4 rounded-lg">
    <h4 class="text-blue-400 font-bold mb-2">DevDependencies</h4>
    <p class="text-gray-300 text-sm">僅在開發階段需要的套件，如建置工具、測試框架等</p>
  </div>

</div>

</div>

<!-- 
剩下 dependencies 跟 devDependencies 這兩個欄位，這兩個欄位表示的是我們的專案中有使用哪一些套件

這兩個的區別就是 dependencies 表示的是我們的專案在運行時必需的套件，會包含在最終打包結果中

devDependencies 表示的是我們的專案在開發階段需要的套件，如建置工具、測試框架等

例如 typescript 這個套件，我們在開發的時候會使用到，但最終打包的時候是不需要的，所以就會放在 devDependencies 裡面

而 vue 這個套件，我們在開發的時候會使用到，最終打包的時候也是需要的，所以就會放在 dependencies 裡面

[click] 至於每個套件的版本號，有的時候我們會想要控制套件不要更新大版本或甚至固定版本，那就會有一些對應的符號
 -->
