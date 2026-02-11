# 六、Computed

<div class="text-gray-200" v-click="1">
  Vue 的資料計算工具
</div>

<!--
[click] 接下來要跟大家介紹的是在 vue 裡面

超級常被使用的 Computed
 -->

---

<div class="text-gray-200 absolute transition-all duration-1000 ease-in-out" 
     :class="{
       'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': $clicks < 1,
       'left-8 top-8 translate-x-0 translate-y-0': $clicks >= 1
     }">
<h1>
  什麼是 Computed
</h1>
</div>

<div class="flex flex-col gap-4 mt-6">
  <!-- 卡片1: 響應式依賴追蹤 -->
  <div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white delay-1000" v-click="1">
    <p class="text-slate-200">
      Computed 是 Vue 框架中最強大的功能之一，允許我們基於現有的數據創建派生數據。
    </p>
  </div>

  <!-- 卡片2: 框架地位 -->
  <div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white" v-click="2">
    <p class="text-slate-200">
      Computed 屬性會自動追蹤其內部使用的響應式數據。
    </p>
  </div>

  <!-- 卡片3: 緩存機制 -->
  <div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white" v-click="3">
    <p class="text-slate-200">
      Computed 最重要的特性就是緩存機制，只有當依賴變化時才會重新計算。
    </p>
  </div>
</div>

<!--
那麼什麼是 Computed 呢？

以英文來說 Computed 是計算的意思

所以 Computed 會有以下幾個特性

[click] 第一個，computed 可以基於現有的資料去創造新的資料。

[click] 第二個，computed 會自動追蹤其內部使用的響應式數據。

[click] 第三個，computed 會有一個緩存機制，只有當依賴的響應式狀態發生變化時，Computed 內的函式才會重新執行。

聽完之後應該會覺得很模糊

所以我們來看看幾個例子

 -->

---

# Computed 的核心特性

<div class="text-gray-200" v-click="1">
  深入了解 Computed 的三大核心功能
</div>

---
layout: center
transition: slide-left
---

<div class="space-y-8">

<!-- 上方文字說明區塊 -->
<div class="text-center">
  <h2 class="text-3xl font-bold mb-4">智能數據轉換</h2>
  <p class="text-xl text-gray-200">
    Computed 最常被使用的情境就是基於某 Data 去創造 Data。
  </p>
</div>

<!-- 下方流程動畫 -->
<div class="w-full max-w-4xl mx-auto" v-click="1">
  <div class="relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
    <!-- 流程線 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 opacity-30"></div>
    <!-- 動畫波紋 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 animate-pulse"></div>
    <div class="flex items-center justify-between relative z-10">
      <!-- 輸入數據 -->
      <div class="flex flex-col items-center" v-click="2">
        <div class="bg-blue-500/20 border-2 border-blue-400/50 rounded-full w-16 h-16 flex items-center justify-center mb-3 relative">
          <span class="text-xl font-bold text-blue-300">abc</span>
          <!-- 監聽脈衝 -->
          <div class="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"></div>
        </div>
        <div class="text-sm text-blue-300 font-medium">原始數據</div>
      </div>
      <!-- Computed 處理器 -->
      <div class="flex flex-col items-center" v-click="3">
        <div class="bg-purple-500/20 border-2 border-purple-400/50 rounded-xl px-6 py-3 mb-3 relative overflow-hidden">
          <!-- 處理動畫背景 -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 animate-pulse"></div>
          <!-- 處理指示器 -->
          <div class="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div class="relative flex items-center gap-x-2">
            <div i-carbon:calculator class="text-lg text-purple-300"></div>
            <code class="text-lg font-bold text-purple-300">computed</code>
          </div>
        </div>
        <div class="text-sm text-purple-300 font-medium">智能計算</div>
      </div>
      <!-- 輸出結果 -->
      <div class="flex flex-col items-center" v-click="4">
        <div class="bg-green-500/20 border-2 border-green-400/50 rounded-full w-16 h-16 flex items-center justify-center mb-3 relative">
          <span class="text-xl font-bold text-green-300">ABC</span>
          <!-- 完成閃爍 -->
          <div class="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse"></div>
        </div>
        <div class="text-sm text-green-300 font-medium">轉換結果</div>
      </div>
    </div>
    <!-- 底部流程說明 -->
    <div class="mt-6 text-center" v-click="5">
      <div class="inline-flex items-center gap-x-4 text-sm text-gray-400">
        <span>監聽數據變化</span>
        <div i-heroicons:arrow-right-20-solid class="text-purple-400"></div>
        <span>自動重新計算</span>
        <div i-heroicons:arrow-right-20-solid class="text-purple-400"></div>
        <span>更新派生結果</span>
      </div>
    </div>
    
  </div>
</div>

</div>

<!--
剛剛提到的第一個特性，基於現有資料創造新的資料

舉個實際的例子，當我們今天希望頁面上輸入的英文都是大寫的時候，我們可以怎麼做呢？

這時候我們可以使用 computed 去綁定輸入欄位的響應式狀態，當狀態改變時，computed 就會自動進行小寫到大寫的轉換。

聽起來還是有點模糊的話，我們可以實際來看一下程式碼

[click] 剛剛說的輸入欄位就是 message 這個 ref，而轉成大寫的英文就是 reversedMessage 這個 computed

 -->

---

<div class="w-[50dvw]">

<div class='computed-code transition-all duration-400 horizontal-runner full-height'>

```vue {monaco-run} {autorun:false}
<script setup>
import { ref, computed } from 'vue'

const message = ref('hello')
const reversedMessage = computed(() => {
  return message.value.toUpperCase()
})
</script>

<template>
  <div>
    <input v-model="message" />
    <p>大寫後的訊息: {{ reversedMessage }}</p>
  </div>
</template>
```

</div>

</div>

---
layout: center
transition: slide-left
---

<div class="space-y-8">

<!-- 上方文字說明區塊 -->
<div class="text-center">
  <h2 class="text-3xl font-bold mb-4">響應式依賴追蹤</h2>
  <p class="text-xl text-gray-200">
    Computed 屬性會自動追蹤其內部使用的響應式數據，當這些數據變化時會自動更新。
  </p>
</div>

<!-- 下方流程動畫 -->
<div class="w-full max-w-5xl mx-auto" v-click="1">
  <div class="relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
    <!-- 流程線 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 via-indigo-500 to-green-400 opacity-30"></div>
    <!-- 動畫波紋 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 via-indigo-500 to-green-400 animate-pulse"></div>
    <div class="flex items-center justify-between relative z-10">
      <!-- 用戶輸入 -->
      <div class="flex flex-col items-center" v-click="2">
        <div class="flex flex-col items-center space-y-2 mb-4 min-h-[80px] justify-center -translate-y-2">
          <div class="bg-yellow-500/20 border-2 border-yellow-400/50 rounded-lg px-3 py-2 relative">
            <div class="flex items-center gap-x-2">
              <div i-carbon:keyboard class="text-sm text-yellow-300"></div>
              <span class="text-xs font-bold text-yellow-300">Input</span>
            </div>
            <!-- 輸入動畫 -->
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
          <div class="bg-yellow-500/20 border-2 border-yellow-400/50 rounded-lg px-3 py-2 relative">
            <div class="flex items-center gap-x-2">
              <div i-carbon:keyboard class="text-sm text-yellow-300"></div>
              <span class="text-xs font-bold text-yellow-300">Input</span>
            </div>
            <!-- 輸入動畫 -->
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
        </div>
        <div class="text-sm text-yellow-300 font-medium">用戶輸入</div>
      </div>
      <!-- Ref 數據 -->
      <div class="flex flex-col items-center" v-click="3">
        <div class="flex items-center space-x-4 mb-4 min-h-[80px] justify-center">
          <div class="bg-orange-500/20 border-2 border-orange-400/50 rounded-full w-14 h-14 flex items-center justify-center relative">
            <span class="text-xs font-bold text-orange-300">姓</span>
            <!-- 監聽脈衝 -->
            <div class="absolute inset-0 border-2 border-orange-400 rounded-full animate-ping"></div>
          </div>
          <div class="bg-orange-500/20 border-2 border-orange-400/50 rounded-full w-14 h-14 flex items-center justify-center relative">
            <span class="text-xs font-bold text-orange-300">名</span>
            <!-- 監聽脈衝 -->
            <div class="absolute inset-0 border-2 border-orange-400 rounded-full animate-ping"></div>
          </div>
        </div>
        <div class="text-sm text-orange-300 font-medium">響應式 Ref</div>
      </div>
      <!-- Computed 處理器 -->
      <div class="flex flex-col items-center" v-click="4">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-indigo-500/20 border-2 border-indigo-400/50 rounded-xl px-6 py-3 relative overflow-hidden">
            <!-- 處理動畫背景 -->
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-indigo-600/10 animate-pulse"></div>
            <!-- 處理指示器 -->
            <div class="absolute top-1 right-1 w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div class="relative flex items-center gap-x-2">
              <div i-carbon:network-3 class="text-lg text-indigo-300"></div>
              <code class="text-lg font-bold text-indigo-300">computed</code>
            </div>
          </div>
        </div>
        <div class="text-sm text-indigo-300 font-medium">依賴追蹤</div>
      </div>
      <!-- 輸出結果 -->
      <div class="flex flex-col items-center" v-click="5">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-green-500/20 border-2 border-green-400/50 rounded-full w-20 h-16 flex items-center justify-center relative">
            <span class="text-sm font-bold text-green-300">John Doe</span>
            <!-- 完成閃爍 -->
            <div class="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div class="text-sm text-green-300 font-medium">組合結果</div>
      </div>
    </div>
    <!-- 底部流程說明 -->
    <div class="mt-6 text-center" v-click="6">
      <div class="inline-flex items-center gap-x-3 text-sm text-gray-400">
        <span>用戶輸入</span>
        <div i-heroicons:arrow-right-20-solid class="text-yellow-400"></div>
        <span>更新 Ref</span>
        <div i-heroicons:arrow-right-20-solid class="text-orange-400"></div>
        <span>觸發 Computed</span>
        <div i-heroicons:arrow-right-20-solid class="text-indigo-400"></div>
        <span>更新結果</span>
      </div>
    </div>
  </div>
</div>

</div>

---
transition: slide-left
---

<div class="horizontal-runner full-height !w-[50dvw]">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
</script>

<template>
  <div>
    <p>First Name: <input v-model="firstName" /></p>
    <p>Last Name: <input v-model="lastName" /></p>
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>
```

</div>

<!--

剛剛提到的第二個特性，響應式依賴追蹤

其實這個特性在前面的第一部份也有使用到，但我們還是再多看一個例子

[click] 當我們今天希望頁面上顯示的姓名是基於 First Name 和 Last Name 組合而成的時候，我們可以怎麼做呢？

這時候我們可以使用 computed 去綁定 First Name 和 Last Name 這兩個 ref，當這兩個 ref 的狀態改變時，computed 就會自動更新顯示的姓名。

 -->

---

# 3. 緩存機制

<div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">高效緩存機制</h3>
  <p class="text-emerald-200">
    Computed 最重要的特性就是緩存機制。
  </p>

  <p class="text-emerald-200">
    Computed 只會在相關依賴發生改變時才重新求值，這與方法（methods）每次都重新執行的行為有本質區別。
  </p>

</div>

<div class="flex justify-end">

  <a href="https://ltedu-vue-book.zeabur.app/computed" target="_blank" class="mt-4 inline-block text-emerald-200 hover:!text-emerald-400">
    來去看看手冊
  </a>

</div>

<!--
最後一個特性，就要來講講 Computed 的緩存機制

剛剛有講到 Computed 會有一個緩存機制，只有當依賴的響應式狀態發生變化時，Computed 內的函式才會重新執行

而函式則是每次只要被呼叫都會執行一次

所以我們可以來看一下手冊裡面的例子

 -->
