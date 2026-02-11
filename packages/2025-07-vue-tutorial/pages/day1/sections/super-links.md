<div class="flex flex-col items-center justify-center">
<h1 class="text-red-500 !text-[100px]">☢️</h1>
<p class="text-red-500 !text-[80px] font-bold !opacity-100 pt-20">Danger Zone</p>
</div>
---

## Components

<div class="flex items-center justify-between">
<p class="text-gray-200 pt-2">元件拆分與命名方式</p>
<div class="text-gray-300 text-sm border inline-block px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300 opacity-0"
:class="{'opacity-100': $clicks >= 2}"
 @click="$router.push('/25?clicks=2')">GO Back</div>
</div>

<div class="mt-3 grid grid-cols-2 gap-x-5">

<div class="bg-gray-800 p-4 rounded-lg">
<p class="text-blue-200 mb-2"><strong>命名方式：</strong></p>
<ul class="text-gray-300 space-y-1">
<li>資料夾為小寫</li>
<li>檔案名稱為大寫開頭並使用駝峰方式命名</li>
<li><code class="text-emerald-300">home</code>/<code class="text-yellow-300">BannerImg.vue</code></li>
</ul>
</div>

<div>

````md magic-move {lines: true}
```html
<!-- 首頁 -->
<script setup></script>

<template>
  <div>
    <!-- 假設這裡是首頁的 Banner 區塊 -->
    <div>
      <div>輪播圖片</div>
      <div>輪播圖片</div>
    </div>
  </div>
</template>
```

```html
<!-- components/home/banner.vue -->
<!-- Banner 元件 -->
<script setup></script>

<template>
  <div>
    <div>輪播圖片</div>
    <div>輪播圖片</div>
  </div>
</template>
```

```html
<script setup>
  // 引用元件
  import HomeBanner from '@/components/home/banner.vue'
</script>

<template>
  <!-- 使用元件 -->
  <HomeBanner />
</template>
```
````

</div>

</div>

<div>
<div v-click="1">
<p class="!mb-2">元件拆分範例</p>

````md magic-move {lines: true}
```yaml
components/
home/
BannerImg.vue
```
````

</div>
</div>

<!--
可能大家會很好奇，我什麼時候要把元件拆分出去？

但是在說明怎麼拆之前，要先跟大家說元件要怎麼命名這件事

一般來說，在 vue 的專案裡面，元件的命名方式資料夾用小寫，檔案名稱用大寫開頭，如果檔案名稱有組合的單字則會使用駝峰的方式進行命名

例如，home 的資料夾裡面有一個 bannerImg 的檔案，那 home 就會用小寫，而 bannerImg 的 b 就會是大寫，然後 img 因為是第二個單字，所以 i 也會大寫

那到底什麼時候要拆分元件呢？

以我自己的習慣來說，共用元件一定會拆出去，另一個情況就是這個頁面的程式碼太多的時候我也會拆元件出去

例如右邊這個範例，假設有一個 banner 區塊，裡面可能有很多圖片，這些圖片讓我這一頁的程式碼過多的時候，我就會把這個 banner 給拆出去


[click] 我就會去 components 資料夾裡面建立一個 home 資料夾，然後在裡面建立一個 banner.vue 的檔案，然後把剛剛 banner 區塊的程式碼給搬過去

[click] 最後再回到首頁，把剛剛拆出去的 banner 元件給引用回來，這樣就完成了元件的拆分跟引用。
 -->

---

## Composables

<div class="flex items-center justify-between">
<p class="text-gray-200 pt-2">組合式函數的封裝與重用</p>
<div class="text-gray-300 text-sm border inline-block px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300 opacity-0"
:class="{'opacity-100': $clicks >= 2}"
 @click="$router.push('/25?clicks=4')">GO Back</div>
</div>

<div class="grid grid-cols-2 gap-x-5">

<div class="bg-gray-800 p-4 rounded-lg">
<p class="text-blue-200 mb-2"><strong>命名規範：</strong></p>
<ul class="text-gray-300 space-y-1">
<li>檔案名稱以 <code class="text-emerald-300">use</code> 開頭</li>
<li>使用駝峰命名法</li>
<li>檔案副檔名為 <code class="text-emerald-300">.ts</code> 或 <code class="text-emerald-300">.js</code></li>
<li><code class="text-emerald-300">useCounter.ts</code></li>
</ul>
</div>

<div>

````md magic-move {lines: true}
```vue
<!-- Home.vue -->
<script setup>
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--

  return {
    ...
  }
}
</script>

<template>
  <div>
    <p>計數：{{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
```

```ts
// composables/useCounter.ts
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--

  return {
    count,
    increment,
    decrement,
  }
}
```

```vue
<!-- Home.vue -->
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement } = useCounter()
</script>

<template>
  <div>
    <p>計數：{{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
```
````

</div>

</div>

<div>
</div>

<!--
一樣我們先瞭解一下 composables 的檔案我們會怎麼命名

首先，開頭會使用 use 這個關鍵字，一樣使用駝峰的命名方式

副檔名要特別注意，這時候就不是用 .vue 了，而是用 .ts 或 .js

那什麼時候會把在頁面中的函數給拆出去呢

說實話，這個有點吃個人習慣，如果說這個函式所控制的狀態是全域的，而且這個狀態在初始化時是固定的時候，我就會考慮拆去 composables 放

例如，右邊是一個加減的範例，不管怎樣我頁面載入之後起始一定是 0，那這時候我就會把整個狀態連同函式一起拆出去

[click] 拆出去的話，我會先去 composables 裡面建立一個 useCounter.ts 的檔案，然後把整個狀態連同函式一起放到這裡面

[click] 最後再回到頁面，把這個 useCounter 給引用回來，如果有要使用 count 或 increment 或 decrement 的話，就可以先從 useCounter 裡面把要用的東西解構出來再掛到畫面上
 -->

---

## Store

<div class="flex items-center justify-between">
<p class="text-gray-200 pt-2">狀態的統一管理</p>
<div class="text-gray-300 text-sm border inline-block px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300 opacity-0"
:class="{'opacity-100': $clicks >= 6}"
 @click="$router.push('/25?clicks=6')">GO Back</div>
</div>

<div class="grid grid-cols-2 gap-x-5">

<div class="bg-gray-800 p-4 rounded-lg relative">
<div class="absolute bottom-3 right-3 w-10 h-auto transform -rotate-12">
<img src="../assets/01/pinia-logo.png" alt="Pinia" class="w-full h-full">
</div>
<p class="text-blue-200 mb-2"><strong>Pinia 特點：</strong></p>
<ul class="text-gray-300 space-y-1">
<li>Vue 3 官方推薦的狀態管理庫</li>
<li>支援 TypeScript</li>
<li>模組化設計，易於維護</li>
<li>支援 DevTools 調試</li>
<li>支援 HMR（熱模組替換）</li>
<li>通常使用單字加上 Store 來命名</li>
<li><code class="text-emerald-300">userStore.ts</code></li>
</ul>
</div>

<div>

````md magic-move {lines: true}
```vue
<!-- Home.vue -->
<script setup>
import { ref } from 'vue'

const user = ref({
  name: '',
  isLoggedIn: false,
})
const login = (...) => {...}
const logout = () => {...}
</script>

<template>
  <div>
    <div v-if="user.isLoggedIn">
      <p>歡迎，{{ user.name }}！</p>
      <button @click="logout">登出</button>
    </div>
    <div v-else>
      <button @click="login(...)">登入</button>
    </div>
  </div>
</template>
```

```ts{1-24|2-3|5|20-23|6-16}
<!-- store/userStore.ts -->
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: '',
    isLoggedIn: false,
  })

  const login = (...) => {...}
  const logout = () => {...}

  return {
    ...
  }
})

// 啟用 HMR（熱模組替換）
if (import.meta.hot) {
  import.meta.hot.accept(
      acceptHMRUpdate(useUserStore, import.meta.hot)
    )
}
```

```vue
<!-- Home.vue -->
<script setup>
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

const handleLogin = () => {
  userStore.login(...)
}
</script>

<template>
  <div>
    <div v-if="userStore.isLoggedIn">
      <p>歡迎，{{ userStore.user.name }}！</p>
      <button @click="userStore.logout">登出</button>
    </div>
    <div v-else>
      <button @click="handleLogin">登入</button>
    </div>
  </div>
</template>
```
````

</div>

</div>

<div>
</div>

<!--
老樣子，我們先來看一下 store 的檔案我們會怎麼命名

通常，會使用單字加上 Store 來命名，例如 userStore.ts

一開始的時候，其實挺容易把 pinia 的狀態跟 composables 搞混，容易搞不清楚什麼時候要用 pinia

我自己判斷的方式是問 ai，開玩笑的

如果這個狀態在重新整理後的狀態不是固定的，例如，一開始是初始化是登出狀態，但我登入後重新整理還會是登入狀態

這種情況我就會使用 pinia 來做

作法的話其實跟 composables 很像，在頁面完成後

[click] 我就會去 store 資料夾裡面建立一個 userStore.ts 的檔案

[click] 建完之後有一些基礎的東西需要引入，例如 pinia 的 defineStore 跟 vue 的 api

[click] 再來要定義一下整個 store 的名稱，例如 store 的變數通常會使用 use 加上檔案名稱的方式，至於 store 名稱會直接使用不加 store 的檔案名稱

[click] 最下面有一個小技巧是可以加上一段熱更新的程式碼，這樣的話有任何異動就不需要重新整理頁面

[click] 這些都做完之後，就可以把剛剛 home 的程式碼貼過來了

[click] 最後回到頁面元件後，只要把 userStore 給引入回來，並且用一個變數去接函數，就可以直接再樣版中使用 store 裡面的狀態或函數了
 -->
