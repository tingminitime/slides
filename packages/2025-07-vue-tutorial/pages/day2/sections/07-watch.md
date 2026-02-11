# 七、Watch

<div class="text-gray-200" v-click="1">
  Vue 的資料監聽工具
</div>

<!--

接下來要跟大家介紹一下 watch 這個小東西

[click] watch 以文字來說應該很好理解，就是監聽的意思

 -->

---

<div class="text-gray-200 absolute transition-all duration-1000 ease-in-out" 
     :class="{
       'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': $clicks < 1,
       'left-8 top-8 translate-x-0 translate-y-0': $clicks >= 1
     }">
<h1>
  什麼是 Watch
</h1>
</div>

<div class="flex flex-col gap-4 mt-6">
  <!-- 卡片1: 響應式依賴追蹤 -->
  <div class="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-lg shadow-xl text-white delay-1000" v-click="1">
    <p class="text-slate-200">
      Watch 是 Vue 中用來監聽狀態變化的工具，並在狀態變化時執行相應的邏輯。
    </p>
  </div>

  <!-- 卡片2: 框架地位 -->
  <div class="backdrop-blur-md bg-indigo-600/20 border border-indigo-600/30 p-6 rounded-lg shadow-xl text-white" v-click="2">
    <p class="text-slate-200">
      Watch 在監聽數據變化時，可以訪問變化前跟變化後的數據。
    </p>
  </div>

  <!-- 卡片3: 緩存機制 -->
  <div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white" v-click="3">
    <p class="text-slate-200">
      Watch 提供了一些額外的選項，例如深度監聽、立即執行、一次性監聽等。
    </p>
  </div>
</div>

<!--
一樣，我們先簡單的認識一下 watch 這個工具

[click] watch 是一個監聽狀態變化的工具，在 watch 的寫法中，會帶入一個 callback 函式，當狀態發生變化時，這個函式就會被執行。

[click] 除了在特定情況下執行特定函式的功能之外，watch 本身也可以訪問到狀態變化前跟變化後的值，這在某些特定場合的時候會是一個很方便的功能。

[click] 最後一個特性，watch 有一些額外的選項可以設定，例如深度監聽、立即執行、一次性監聽之類的，這個配置也會跟之後會提到的 watch 的好朋友 watchEffect 有關。

 -->

---

# Watch 的核心特性

<div class="text-gray-200" v-click="1">
  深入了解 Watch 的核心功能
</div>

<!--
所以接下來我們就一個一個情景來看一下 watch 的用法

 -->

---
layout: center
transition: slide-left
---

<div class="space-y-8">

<!-- 上方文字說明區塊 -->
<div class="text-center">
  <h2 class="text-3xl font-bold mb-4">精確的依賴監聽</h2>
  <p class="text-xl text-gray-200">
    Watch 可以明確指定要監聽哪些響應式數據，並在這些數據變化時執行相應的邏輯。
  </p>
</div>

<!-- 下方流程動畫 -->
<div class="w-full max-w-4xl mx-auto" v-click="1">
  <div class="relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
    <!-- 流程線 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 opacity-30"></div>
    <!-- 動畫波紋 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 animate-pulse"></div>
    <div class="flex items-center justify-between relative z-10">
      <!-- 響應式數據 -->
      <div class="flex flex-col items-center" v-click="2">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-blue-500/20 border-2 border-blue-400/50 rounded-full w-16 h-16 flex items-center justify-center relative">
            <span class="text-xl font-bold text-blue-300 tabular-nums">
              <AutoCounter />
            </span>
            <!-- 監聽脈衝 -->
            <div class="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>
        <div class="text-sm text-blue-300 font-medium">響應式狀態</div>
      </div>
      <!-- Watch 監聽器 -->
      <div class="flex flex-col items-center" v-click="3">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-purple-500/20 border-2 border-purple-400/50 rounded-xl px-6 py-3 relative overflow-hidden">
            <!-- 處理動畫背景 -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 animate-pulse"></div>
            <!-- 處理指示器 -->
            <div class="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div class="relative flex items-center gap-x-2">
              <div i-carbon:view class="text-lg text-purple-300"></div>
              <code class="text-lg font-bold text-purple-300">watch</code>
            </div>
          </div>
        </div>
        <div class="text-sm text-purple-300 font-medium">狀態監聽</div>
      </div>
      <!-- 執行回調 -->
      <div class="flex flex-col items-center" v-click="4">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <AlertAnimation />
        </div>
        <div class="text-sm text-red-300 font-medium">執行回調</div>
      </div>
    </div>
    <!-- 底部流程說明 -->
    <div class="mt-6 text-center" v-click="5">
      <div class="inline-flex items-center gap-x-4 text-sm text-gray-400">
        <span>數值變化</span>
        <div i-heroicons:arrow-right-20-solid class="text-purple-400"></div>
        <span>觸發監聽</span>
        <div i-heroicons:arrow-right-20-solid class="text-purple-400"></div>
        <span>執行邏輯</span>
      </div>
    </div>
  </div>
</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 自動計數器元件
const AutoCounter = {
  setup() {
    const count = ref(0)
    let intervalId = null
    
    onMounted(() => {
      intervalId = setInterval(() => {
        count.value = (count.value + 1) % 6
      }, 1000)
    })
    
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    })
    
    return { count }
  },
  template: `
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="count"
    >
      {{ count }}
    </span>
  `
}

// Alert 動畫元件
const AlertAnimation = {
  setup() {
    const count = ref(0)
    let intervalId = null
    
    onMounted(() => {
      intervalId = setInterval(() => {
        count.value = (count.value + 1) % 6
      }, 1000)
    })
    
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    })
    
    return { count }
  },
  template: `
    <div 
      class="bg-red-500/20 border-2 border-red-400/50 rounded-xl px-4 py-3 relative"
      :class="{ 
        'animate-pulse': count > 4
      }"
    >
      <div 
        class="flex items-center gap-x-2"
        :class="{ 
          'animate-bounce': count > 4
        }"
      >
        <div 
          i-carbon:warning 
          class="text-lg text-red-300"
          :class="{ 
            'animate-ping': count > 4
          }"
        ></div>
        <span 
          class="text-sm font-bold text-red-300"
          v-motion
          :initial="{ scale: 1 }"
          :enter="{ scale: [1, 1.2, 0.9, 1.1, 1], transition: { duration: 600, repeat: Infinity } }"
          v-if="count > 4"
        >
          Alert!
        </span>
        <span 
          class="text-sm font-bold text-red-300"
          v-else
        >
          Alert!
        </span>
      </div>
      <!-- 警告閃爍 -->
      <div 
        class="absolute inset-0 border-2 border-red-400 rounded-xl"
        :class="{ 
          'animate-pulse': count > 4
        }"
      ></div>
    </div>
  `
}
</script>

</div>

---
transition: slide-left
---

<div class="horizontal-runner full-height w-[50dvw]">

```vue {monaco-run} {autorun:false}
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  if (newValue > 5) {
    alert('count 超過 5 了！')
  }
})
</script>

<template>
  <div>
    <p>數字: {{ count }}</p>
    <button
      class="bg-indigo-600 text-white px-4 py-2 rounded-md"
      @click="count++"
    >
      增加數字
    </button>
  </div>
</template>
```

</div>

<!--
第一個監聽狀態變化

我們可以設想一個情境，假設我們有一個計數器，當數字超過 5 的時候就跳出一個通知

這時候我們就可以這樣做

[click] 首先，我們定義一個 count 的 ref，並且初始值為 0，接下來我們在 watch 的第一個參數中設定要監聽的狀態，也就是 count，接下來在第二個參數中，我們帶入一個 callback 函式，這個函式會在 count 的狀態發生變化時被執行，所以我們可以寫一個判斷，如果 count 的值大於 5 的話，就跳出一個通知。

接下來我們實際運行一下程式碼看看

 -->

---
layout: center
transition: slide-left
---

<div class="space-y-8 w-[50dvw]">

<!-- 上方文字說明區塊 -->
<div class="text-center ">
  <h2 class="text-3xl font-bold mb-4">新、舊狀態訪問</h2>
  <p class="text-xl text-gray-200">
    Watch 在監聽響應式狀態變化時，可以訪問變化前跟變化後的狀態。
  </p>
</div>

<!-- 下方流程動畫 -->
<div class="w-full  mx-auto" v-click="1">
  <div class="relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
    <!-- 流程線 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 via-purple-500 to-orange-400 opacity-30"></div>
    <!-- 動畫波紋 -->
    <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 via-purple-500 to-orange-400 animate-pulse"></div>
    <div class="flex items-center justify-between relative z-10">
      <!-- 響應式狀態 -->
      <div class="flex flex-col items-center" v-click="2">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-blue-500/20 border-2 border-blue-400/50 rounded-full w-16 h-16 flex items-center justify-center relative">
            <span class="text-xl font-bold text-blue-300 tabular-nums">
              <RefValueCounter />
            </span>
            <!-- 脈衝動畫 -->
            <div class="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>
        <div class="text-sm text-blue-300 font-medium">響應式狀態</div>
      </div>
      <!-- Watch 監聽器 -->
      <div class="flex flex-col items-center" v-click="3">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-purple-500/20 border-2 border-purple-400/50 rounded-xl px-6 py-3 relative overflow-hidden">
            <!-- 處理動畫背景 -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 animate-pulse"></div>
            <!-- 處理指示器 -->
            <div class="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div class="relative flex items-center gap-x-2">
              <div i-carbon:view class="text-lg text-purple-300"></div>
              <code class="text-lg font-bold text-purple-300">watch</code>
            </div>
          </div>
        </div>
        <div class="text-sm text-purple-300 font-medium">狀態監聽</div>
      </div>
      <!-- 新舊狀態對比 -->
      <div class="flex flex-col items-center" v-click="4">
        <div class="mb-7 min-h-[80px] flex items-center justify-center">
          <div class="bg-green-500/20 border-2 border-green-400/50 rounded-xl px-4 py-3 relative">
            <div class="flex items-center gap-x-3">
              <!-- 舊狀態 -->
              <div class="flex flex-col items-center">
                <div class="bg-green-600/30 rounded-full w-8 h-8 flex items-center justify-center">
                  <span class="text-xs font-bold text-green-200 tabular-nums">
                    <OldValueDisplay />
                  </span>
                </div>
                <div class="text-xs text-green-300 mt-1">舊</div>
              </div>
              <!-- 箭頭 -->
              <div i-heroicons:arrow-right-20-solid class="text-gray-400"></div>
              <!-- 新狀態 -->
              <div class="flex flex-col items-center">
                <div class="bg-blue-600/30 rounded-full w-8 h-8 flex items-center justify-center">
                  <span class="text-xs font-bold text-blue-200 tabular-nums">
                    <NewValueDisplay />
                  </span>
                </div>
                <div class="text-xs text-blue-300 mt-1">新</div>
              </div>
            </div>
            <!-- 對比閃爍 -->
            <div class="absolute inset-0 border-2 border-green-400 rounded-xl animate-pulse"></div>
          </div>
        </div>
        <div class="text-sm text-green-300 font-medium">新舊對比</div>
      </div>
      <!-- 觸發回調函式 -->
      <div class="flex flex-col items-center" v-click="5">
        <div class="mb-4 min-h-[80px] flex items-center justify-center">
          <div class="bg-orange-500/20 border-2 border-orange-400/50 rounded-xl px-4 py-3 relative">
            <div class="flex flex-col items-center gap-y-1">
              <div i-carbon:function class="text-lg text-orange-300"></div>
              <div class="text-xs text-orange-300 font-bold text-center">
                <CallbackDisplay />
              </div>
            </div>
            <!-- 回調閃爍 -->
            <div class="absolute inset-0 border-2 border-orange-400 rounded-xl animate-pulse"></div>
          </div>
        </div>
        <div class="text-sm text-orange-300 font-medium">觸發回調</div>
      </div>
    </div>
    <!-- 底部流程說明 -->
    <div class="mt-6 text-center" v-click="6">
      <div class="inline-flex items-center gap-x-3 text-sm text-gray-400">
        <span>響應式狀態變化</span>
        <div i-heroicons:arrow-right-20-solid class="text-blue-400"></div>
        <span>Watch 監聽</span>
        <div i-heroicons:arrow-right-20-solid class="text-purple-400"></div>
        <span>獲取新舊狀態</span>
        <div i-heroicons:arrow-right-20-solid class="text-green-400"></div>
        <span>觸發回調</span>
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 共享狀態
const sharedCounter = ref(0)
let sharedIntervalId = null

onMounted(() => {
  sharedIntervalId = setInterval(() => {
    sharedCounter.value = (sharedCounter.value + 1) % 6
  }, 1500)
})

onUnmounted(() => {
  if (sharedIntervalId) {
    clearInterval(sharedIntervalId)
  }
})

// 響應式狀態計數器
const RefValueCounter = {
  setup() {
    return { sharedCounter }
  },
  template: `
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 300 } }"
      :leave="{ scale: 1, transition: { duration: 300 } }"
      :key="sharedCounter"
    >
      {{ sharedCounter }}
    </span>
  `
}

// 舊狀態顯示（延遲一步）
const OldValueDisplay = {
  setup() {
    const oldValue = ref(5) // 初始為 5，因為 0 的前一個值是 5
    
    const updateOldValue = () => {
      oldValue.value = (sharedCounter.value - 1 + 6) % 6
    }
    
    onMounted(() => {
      updateOldValue()
      const intervalId = setInterval(updateOldValue, 1500)
      
      onUnmounted(() => {
        clearInterval(intervalId)
      })
    })
    
    return { oldValue }
  },
  template: `
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.1, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="oldValue"
    >
      {{ oldValue }}
    </span>
  `
}

// 新狀態顯示（與 ref 同步）
const NewValueDisplay = {
  setup() {
    return { sharedCounter }
  },
  template: `
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="sharedCounter"
    >
      {{ sharedCounter }}
    </span>
  `
}

// 回調函式顯示
const CallbackDisplay = {
  setup() {
    const oldValue = ref(5)
    const newValue = ref(0)
    
    const updateValues = () => {
      oldValue.value = (sharedCounter.value - 1 + 6) % 6
      newValue.value = sharedCounter.value
    }
    
    onMounted(() => {
      updateValues()
      const intervalId = setInterval(updateValues, 1500)
      
      onUnmounted(() => {
        clearInterval(intervalId)
      })
    })
    
    return { oldValue, newValue }
  },
  template: `
    <div 
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      :key="oldValue + '-' + newValue"
    >
      {{ oldValue }} → {{ newValue }}
    </div>
  `
}
</script>

---
transition: slide-left
---

<div class="horizontal-runner full-height w-[50dvw]">

```vue {monaco-run} {autorun:false}
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log('message', `從 ${oldValue} 變成 ${newValue}`)
})
</script>

<template>
  <div>
    <p>數字: {{ count }}</p>
    <button
      @click="count++"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      +1
    </button>
  </div>
</template>
```

</div>

<!--
再來 watch 的第二個特點就是新舊狀態的訪問

可以設想一個情境，假設我們希望記錄每次更改狀態時，要把這個更改狀態的 log 記錄下來，我們就可以使用 watch 來做

[click] 但我們先看個簡單的範例，老樣子，我們定義一個 count 的 ref，並且初始值為 0，接下來也一樣，在 watch 的第一個參數中設定要監聽的狀態，第二個函式的部份就跟第一 part 有點不一樣，我們可以帶入兩個參數，分別是新狀態跟舊狀態，這樣我們就可以訪問到新舊狀態的值，所以我們實際運行一下程式碼看看結果如何。

 -->

---

<div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white">
  <h3 class="text-xl font-bold mb-3">額外選項</h3>
  <p class="text-emerald-200">
    Watch 提供了一些額外的選項，例如深度監聽、立即執行、一次性監聽等。
  </p>
</div>

<div class="flex justify-end">

  <a href="https://ltedu-vue-book.zeabur.app/watch" target="_blank" class="mt-4 inline-block text-emerald-200 hover:!text-emerald-400">
    來去看看手冊
  </a>

</div>

<!--
最後一個特性就是 watch 的額外選項

所以，我們就來看一下手冊上面的範例～
 -->
