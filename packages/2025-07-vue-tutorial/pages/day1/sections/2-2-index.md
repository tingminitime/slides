<div class="flex items-center gap-6">
  <div class="w-24">
    <img src="../../day1/assets/01/vue-logo.png" alt="Vue Logo" class="w-full h-auto" />
  </div>
  
  <div>
    <h1>Vue 的永久指針</h1>
    <p class="text-gray-200 pt-2">
      Index.html 是 Vue 的永久指針，是 Vue 的入口文件
    </p>
  </div>
</div>

<!--
終於介紹完專案的基本架構了

接下來我們要更靠近 vue 的主程式了

各位都知道 vue 是 js 的框架

而 vue 在一般情況下並不是 ssr 的模式，所以就會需要一個 html 檔案來做為入口

 -->

---

# Index.html

<div class="grid grid-cols-2 gap-4">

````md magic-move {lines: true}
```html{1-23|3-15}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/vite.svg"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Vite + Vue + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script
      type="module"
      src="/src/main.ts"
    ></script>
  </body>
</html>
```

```html{6-12}
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div id="app"></div>
    <script
      type="module"
      src="/src/main.ts"
    ></script>
  </body>
</html>
```

```html{7-12}
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div id="app">
      <!-- app.vue 的內容 -->
      <div>
        <HelloWorld msg="Vite + Vue" />
      </div>
    </div>
    <script
      type="module"
      src="/src/main.ts"
    ></script>
  </body>
</html>
```
````

<div class="grid grid-cols-2 gap-4">

  <div class="bg-green-900 p-2 rounded-lg col-span-2" v-click="1">
    <h4 class="text-green-400 font-bold mb-2">head</h4>
    <p class="text-gray-300 text-sm">
      <code class="text-green-300">meta</code> 用於設定網頁的元資料，如視窗大小、網站編碼等
    </p>
    <p class="text-gray-300 text-sm">
      <code class="text-green-300">link</code> 用於連結外部資源，如 favicon、CSS 檔案等
    </p>
    <p class="text-gray-300 text-sm">
      <code class="text-green-300">title</code> 用於設定網頁的標題
    </p>
  </div>

  <div class="bg-blue-900 p-2 rounded-lg col-span-2" v-click="2">
    <h4 class="text-blue-400 font-bold mb-2">body</h4>
    <p class="text-gray-300 text-sm">
      <code class="text-blue-300">div</code> 用於設定網頁的內容，如 <code class="text-blue-300">id="app"</code> 用於設定 Vue 的掛載點
    </p>
    <p class="text-gray-300 text-sm">
      <code class="text-blue-300">script</code> 用於引入 Vue 的程式碼，如 <code class="text-blue-300">type="module"</code> 用於設定模組類型
    </p>
  </div>

</div>
</div>

<!--
這邊我們先來看一下 index.html 的內容

其實跟一般的 html 檔案沒什麼差別

[click] 一樣 head 的區塊會有 meta 跟 link 跟 title 之類的

[click] 而 body 的話則是有一個 id 為 app 的 div 元素，這個 div 元素就是 vue 的掛載點，然後最下面就是引入 vue 的 js

[click] 而這邊的 app 就是我們剛剛提到的掛載點，也就是說我們的 vue 程式碼都會被掛載到這個 div 裡面

 -->

---

# Vue 主程式｜App.vue

````md magic-move {lines: true}
```html
<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    ...
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
```

```html
<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
```

```html
<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <header />
  <main>
    <RouterView />
  </main>
  <footer />
</template>
```
````

<!--
接著是 vue 的主程式，也就是 app.vue 這個檔案

一開始建好專案的話，大致上會長這個樣子

[click] 如果我們稍微調整一下，加上剛剛提到的 vue router 的話，就會變成這樣子，主要就是引入 routerView 讓頁面切換的邏輯交給 vue router 來處理

[click] 然後我們可以在進階一點點，如果說網頁有通用的 header 或 footer 的話，也可以統一在 app.vue 裡面引入，這樣的話就不用在每一頁都加上去
 -->






