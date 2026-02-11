# 九、生命週期

<div class="text-gray-200" v-click="1">
  Vue 元件的生老病死
</div>

<!-- 
最後，要跟大家介紹的就是 vue 元件的生老病死

也就是我們在說的生命週期

 -->

---

<div class="text-gray-200 absolute transition-all duration-1000 ease-in-out" 
     :class="{
       'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': $clicks < 1,
     }"
     v-if="$clicks < 1"
     >
<h1>
  Vue3 生命週期順序
</h1>
</div>

<div class="grid grid-cols-3 gap-3" v-click="1">
  <!-- 第1階段 - onBeforeMount -->
  <div class="backdrop-blur-md bg-gradient-to-br from-purple-600/30 to-purple-800/30 border border-purple-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000" 
       :class="{
         'scale-0 opacity-0': $clicks >= 7,
         'scale-100 opacity-100': $clicks < 7
       }"
       v-click="1">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</div>
      <h3 class="text-sm font-bold">onBeforeMount</h3>
    </div>
    <p class="text-purple-100 text-xs mb-1">即將首次執行 DOM 渲染</p>
    <ul class="text-purple-200 text-xs space-y-0.5">
      <li>響應式狀態已設置</li>
      <li>還未創建 DOM 節點</li>
    </ul>
  </div>

  <!-- 第2階段 - onMounted -->
  <div class="backdrop-blur-md bg-gradient-to-br from-green-600/30 to-green-800/30 border border-green-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000 z-10" 
       :class="{
         'scale-150 translate-x-[-84.5%] translate-y-[45%]': $clicks >= 7,
         'scale-100 translate-x-0 translate-y-0': $clicks < 7
       }"
       v-click="2">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold mr-2" 
           :class="{ 'w-10 h-10 text-sm': $clicks >= 7 }">
        <span v-if="$clicks < 7">2</span>
        <span v-else>🚀</span>
      </div>
      <h3 class="text-sm font-bold" :class="{ 'text-xl': $clicks >= 7 }">onMounted</h3>
    </div>
    <p class="text-green-100 text-xs mb-1" :class="{ 'text-base mb-3': $clicks >= 7 }">
      <span v-if="$clicks < 7">元件掛載完成後執行</span>
      <span v-else>元件掛載完成</span>
    </p>
    <ul class="text-green-200 text-xs space-y-0.5" :class="{ 'text-sm space-y-1': $clicks >= 7 }">
      <template v-if="$clicks < 7">
        <li>DOM 樹已創建並插入</li>
        <li>可訪問渲染的 DOM</li>
      </template>
      <template v-else>
        <li>✅ DOM 樹已創建並插入父容器</li>
        <li>✅ 可以安全訪問渲染的 DOM</li>
        <li>✅ 適合執行初始化邏輯</li>
        <li>✅ 啟動計時器、發送 API 請求</li>
      </template>
    </ul>
  </div>

  <!-- 第3階段 - onBeforeUpdate -->
  <div class="backdrop-blur-md bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border border-yellow-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000" 
       :class="{
         'scale-0 opacity-0': $clicks >= 7,
         'scale-100 opacity-100': $clicks < 7
       }"
       v-click="3">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</div>
      <h3 class="text-sm font-bold">onBeforeUpdate</h3>
    </div>
    <p class="text-yellow-100 text-xs mb-1">即將更新 DOM 樹之前調用</p>
    <ul class="text-yellow-200 text-xs space-y-0.5">
      <li>響應式狀態變更</li>
      <li>可訪問更新前 DOM</li>
    </ul>
  </div>

  <!-- 第4階段 - onUpdated -->
  <div class="backdrop-blur-md bg-gradient-to-br from-indigo-600/30 to-indigo-800/30 border border-indigo-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000" 
       :class="{
         'scale-0 opacity-0': $clicks >= 7,
         'scale-100 opacity-100': $clicks < 7
       }"
       v-click="4">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</div>
      <h3 class="text-sm font-bold">onUpdated</h3>
    </div>
    <p class="text-indigo-100 text-xs mb-1">DOM 樹更新之後調用</p>
    <ul class="text-indigo-200 text-xs space-y-0.5">
      <li>DOM 更新已完成</li>
      <li>⚠️ 避免狀態變更</li>
    </ul>
  </div>

  <!-- 第5階段 - onBeforeUnmount -->
  <div class="backdrop-blur-md bg-gradient-to-br from-red-600/30 to-red-800/30 border border-red-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000" 
       :class="{
         'scale-0 opacity-0': $clicks >= 7,
         'scale-100 opacity-100': $clicks < 7
       }"
       v-click="5">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">5</div>
      <h3 class="text-sm font-bold">onBeforeUnmount</h3>
    </div>
    <p class="text-red-100 text-xs mb-1">元件實例卸載之前調用</p>
    <ul class="text-red-200 text-xs space-y-0.5">
      <li>元件實例仍保有功能</li>
      <li>適合清理副作用</li>
    </ul>
  </div>

  <!-- 第6階段 - onUnmounted -->
  <div class="backdrop-blur-md bg-gradient-to-br from-gray-600/30 to-gray-800/30 border border-gray-400/40 p-3 rounded-lg shadow-xl text-white transform transition-all duration-1000 z-10" 
       :class="{
         'scale-150 translate-x-[-20%] translate-y-[-60%]': $clicks >= 7,
         'scale-100 translate-x-0 translate-y-0': $clicks < 7
       }"
       v-click="6">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold mr-2"
           :class="{ 'w-10 h-10 text-sm': $clicks >= 7 }">
        <span v-if="$clicks < 7">6</span>
        <span v-else>💀</span>
      </div>
      <h3 class="text-sm font-bold" :class="{ 'text-xl': $clicks >= 7 }">onUnmounted</h3>
    </div>
    <p class="text-gray-100 text-xs mb-1" :class="{ 'text-base mb-3': $clicks >= 7 }">
      <span v-if="$clicks < 7">元件實例卸載之後調用</span>
      <span v-else>元件卸載完成</span>
    </p>
    <ul class="text-gray-200 text-xs space-y-0.5" :class="{ 'text-sm space-y-1': $clicks >= 7 }">
      <template v-if="$clicks < 7">
        <li>所有子元件已卸載</li>
        <li>響應式作用已停止</li>
      </template>
      <template v-else>
        <li>🧹 所有子元件已經卸載</li>
        <li>🧹 響應式作用已經停止</li>
        <li>🧹 清除計時器和事件監聽器</li>
        <li>🧹 釋放資源，防止記憶體洩漏</li>
             </template>
     </ul>
   </div>
</div>

<!-- 觸發動畫的隱藏元素 -->
<div v-click="7" class="opacity-0 pointer-events-none"></div>

<div v-click="8" class="opacity-0 pointer-events-none"></div>

<div class="flex justify-end duration-500 absolute bottom-8 right-13"
    :class="{
      'opacity-0 pointer-events-none': $clicks < 8,
      'opacity-100 pointer-events-auto': $clicks >= 8,
    }"
>

  <a href="https://ltedu-vue-book.zeabur.app/life-cycle" target="_blank" class="mt-4 inline-block text-emerald-200 hover:!text-emerald-400">
    來去看看手冊
  </a>

</div>

<!-- 
我們先一個一個瞭解一下在 vue 3 的 composition api 裡面，生命週期的順序

[click] 第一個是 onBeforeMount，這個生命週期會做的主要事情就是在元件掛載前先把 script 裡面的響應式狀態宣告好

[click] 接下來是 onMounted，這個生命週期會做的主要事情就是在元件掛載完成後，把 DOM 樹創建好，如果說有要取 DOM 元素的話也是在這個階段可以取得

[click] 再來是 onBeforeUpdate，這個生命週期會做的主要事情就是響應式狀態變更時會先觸發，這時候可以先取得更新前的 DOM 元素

[click] 接下來是 onUpdated，這個生命週期會做的主要事情就是響應式狀態變更後會觸發，這時候可以取得更新後的 DOM 元素，要注意的就是不要再這個階段做響應式狀態的變更，不然你就會進入到更新的迴圈裡面

[click] 再來是 onBeforeUnmount，這個生命週期會做的主要事情就是元件實例卸載之前會觸發，在這個階段內因為元件還沒完全銷毀，所以還是可以針對元件內部做操作

[click] 最後是 onUnmounted，這個生命週期會做的主要事情就是元件實例卸載完成後會觸發，這時候可以做一些清理的工作，例如說清除計時器、事件監聽器之類的

[click] 講了這麼多，但實際上最常用的就是 onMounted 跟 onUnmounted 這兩個生命週期，onMounted 最常用在元件掛載好之後呼叫 api 或是發送事件，而 onUnmounted 最常用在元件卸載前清除計時器、事件監聽器之類的

[click] 所以接下來我們就來看看實際的例子

 -->

---
layout: center
transition: fade-out
---

<div class="flex flex-col items-center gap-y-4">

<h1
  transition duration-500
  class="text-center font-bold"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-[150px]'"
>
  上完課，頭很痛嗎 💊
</h1>

<div transition duration-500 class="w-[400px]" :class="$clicks > 0 ? 'translate-y-0 op100' : 'translate-y-10 op0'" v-click="1">
  <img src="../assets/end.png" alt="Day 2 End" class="w-full h-auto">
</div>

</div>
