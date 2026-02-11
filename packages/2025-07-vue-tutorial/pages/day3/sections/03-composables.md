---
layout: center
transition: slide-left
---

<h1
  transition duration-500
  class="relative font-bold text-center tracking-wide"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-10'"
>
  三、Composables 邏輯複用
</h1>

<ul
  class="tracking-wide p-4"
>
  <li
    transition duration-500
    class="text-xl font-bold mb-2"
    :class="$clicks > 0 ? 'translate-y-0 op100' : '-translate-y-4 op0'"
    v-click
  >
    Composable 可組合函式
  </li>
  <li
    transition duration-500
    class="text-xl font-bold"
    :class="$clicks > 1 ? 'translate-y-0 op100' : '-translate-y-4 op0'"
    v-click
  >
    在 <code>&lt;<span text-pink>script</span> <span text-green>setup</span>&gt;</code> 範疇中使用
  </li>
</ul>

<!--
寫程式就像在建構一個廠房一樣，有些重複的生產過程可以設計成一個產線來管理。

以 JavaScript 來說，可以把常使用的 function 函式拆分出去，方便在不同元件中重複使用，例如日期格式化、資料格式轉換等，這些 one input, one output 的工具類函式被稱為「無狀態函式」。

但是在 Vue 框架裡面，除了元件本身可以方便的被重複使用以外，元件中的邏輯也可以拆分出去作為一個邏輯模組方便重複使用，

[click] 這種邏輯模組稱為「Composable ( 可組合函式 )」，不過要特別注意的是，通常有使用到 Vue APIs 的邏輯模組才會叫做 Composable 函式，

[click] 而且這種函式只能在 Vue 的 `<script setup>` 標籤裡面引入使用。
-->

---
transition: slide-left
---

<div
  transition duration-500
  class="[&_code]:text-[0.9rem] w-112 absolute top-1/2 left-1/2 -translate-y-1/2"
  :class="$clicks > 0 ? '-translate-x-112' : '-translate-x-1/2'"
>

<div class="mb-2"><code>Counter.vue</code></div>

````md magic-move {lines:true,at:1}
```vue {*|2-12|2-12|2-12|2-12}
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <div>計數 : {{ count }}</div>
  <button @click="decrement">－</button>
  <button @click="increment">＋</button>
</template>
```

```vue {*}
<script setup>
import { useCounter } from '~/composables/counter'

const { count, increment, decrement } = useCounter(10)
</script>

<template>
  <div>計數 : {{ count }}</div>
  <button @click="decrement">－</button>
  <button @click="increment">＋</button>
</template>
```
````

</div>

<div
  transition duration-500
  class="[&_code]:text-[0.8rem] absolute top-1/2 right-12 -translate-y-1/2 forward:delay-200"
  :class="$clicks > 0 ? 'translate-x-0 op100' : 'translate-x-20 op0'"
>

<div class="mb-2"><code>composables/counter.js</code></div>

```javascript {*|*|3-4,21|1,5-13|15-20|*}{lines:true}
import { ref } from 'vue'

// 約定俗成使用 `use` 開頭命名函式
export function useCounter(initialCount = 0) {
  const count = ref(initialCount)

  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  // 透過回傳暴露 composable 的狀態與可使用的方法
  return {
    count,
    increment,
    decrement,
  }
}
```

</div>

<div
  transition duration-400
  class="absolute left-12 bottom-12 w-max"
  :class="$clicks > 5 ? 'op100' : 'op0'"
  v-click="6"
>
  <PlaygroundLink category="day3" link="ComposablesCounter">Playground</PlaygroundLink>
</div>

<!--
同樣舉一個計數器的例子，這個 `Counter.vue` 元件裡面有簡單的計數邏輯，

用 `ref` 宣告一個 `count` 響應式狀態，還有增減兩個函式。

[click] 我們把主要的計數邏輯抽離出來，在 `composables` 目錄底下，建立了一個 `counter.js` 模組檔案，

[click] 在模組檔案裡，用 `export` 匯出了一個以 `use` 開頭命名的函式，帶了一個預設值是 `0` 的參數 `initialCount`，

[click] 這個函式裡面的邏輯，和原本計數元件的邏輯一樣，引用了 `ref` 方法、宣告響應式狀態 `count`、還有 `count` 的增減函式

[click] 因為 function 函式內部是封閉的，如果要讓外部能存取這些響應式狀態和方法，就要在函式裡面透過 `return` 方式回傳，這樣就可以在執行函式的時候存取這些狀態或方法，

[click] 最後在計數元件 `Counter.vue` 使用 `import` 從 `composables` 目錄底下的 `counter.js` 引入 `useCounter` 函式，

在元件內部執行這個函式就可以存取用 `return` 回傳的狀態和方法，

而且這個 `count` 依然能保持響應性，

[click] 實際操作一下 ( 點開 Playground 按照畫面說明 )

Composable 函式最主要的特性就是使用了 Vue API，而且只能在 Vue 元件中使用。
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="text-2xl text-center font-bold tracking-wide mb-4"
  :class="$clicks > 0 ? 'translate-y-36' : 'translate-y-48'"
>
  為什麼要拆出 Composable ?
</h2>

<div class="flex items-center gap-x-8 mx-auto w-max translate-y-40">
  <div class="text-xl text-blue-300 font-bold tracking-wide bg-blue/20 px-3 pb-1 pt-2 rounded-lg" v-click>方便重複使用</div>
  <div class="text-xl text-yellow font-bold tracking-wide bg-yellow/20 px-3 pb-1 pt-2 rounded-lg" v-click>清晰組織邏輯</div>
  <div class="text-xl text-pink font-bold tracking-wide bg-pink/20 px-3 pb-1 pt-2 rounded-lg" v-click>易於測試</div>
</div>

<!--
為什麼我們要把邏輯從元件拆分出去呢 ? 這樣做有什麼好處嗎 ?

[click] 首先是方便重複使用，例如類似剛剛計數器的情境、API 請求、事件監聽處理邏輯等等，把常用的邏輯抽離出來，就可以在任何 Vue 元件都可以引入使用。

[click] 再來是清晰元件的組織邏輯，就算只是從複雜的元件把部分邏輯抽離出來，並沒有在其他地方使用到這個 composable 函式，也可以讓元件更專注在畫面渲染，不用過度理會部分邏輯的實現細節。

畢竟有時候在和別人協作的時候，或是安裝套件使用別人的 composable 方法的時候，我們只需要知道要傳遞什麼狀態給這個 composable，然後這個 composable 會回傳什麼東西這樣就足夠了，可以不用多花額外的時間去理解那個 composable 的實現細節。

[click] 然後是方便測試，因為獨立的 composable 可組合函式就像是工具函式，可以方便我們用 Vue 相關的測試工具進行測試。
-->

---
layout: center
transition: slide-left
---

<div class="flex flex-col justify-center items-center gap-y-4 mb-2">

<h2 class="text-3xl font-bold tracking-wide mb-2">
  (範例) 鼠標位置追蹤 - <code text-purple>useMouse</code>
</h2>

<PlaygroundLink category="day3" link="ComposablesUseMouse">Playground</PlaygroundLink>

</div>

<!--
我們來看幾個 composables 的範例，

( 點開 Playground 按照畫面說明 )
-->

---
layout: center
transition: slide-left
---

<div class="[&_span]:text-xl w-max mx-auto -translate-y-8">

````md magic-move {lines:true}
```javascript
const { ... } = useComposable()
```

```javascript
const { ... } = useComposable()
const { ... } = useComposable()
const { ... } = useComposable()
```
````

</div>

<h2
  transition duration-400
  class="text-3xl font-bold tracking-wide"
  :class="$clicks > 1 ? 'translate-y-6 op100' : 'translate-y-0 op0'"
  v-click
>
  Composable 不是<span v-mark.red.linethrough.op80.delay400="{at:3,roughness:4,strokeWidth:6}">「共用狀態」</span>，而是<span v-mark.green="{at:4,strokeWidth:6}">「共用邏輯」</span>
</h2>

<!--
每次執行 composable 函式的時候，都等於在元件中建立單一實例，

[click] 在同個元件或不同元件中，重複使用相同的可組合函式，彼此的狀態都是獨立不會互相影響的。

[click] 換句話說呢，composable 

[click] 不是「**共用狀態**」，

[click] 而是「**共用邏輯**」。

如果要共用狀態的話，就要使用像是 Pinia 這樣的狀態管理套件。
-->

---
layout: center
transition: slide-left
---

<div class="flex flex-col justify-center items-center gap-y-4 mb-2">

<h2 class="text-3xl font-bold tracking-wide mb-2">
  (範例) 嵌套 Composables
</h2>

<PlaygroundLink category="day3" link="ComposablesNesting">Playground</PlaygroundLink>

</div>

<!--
以剛剛的鼠標位置追蹤範例來說，我們還可以把事件監聽的 onMounted、onUnmounted 生命週期方法拆成另一個 composable 來「嵌套使用」:

( 點開 Playground 按照畫面說明 )
-->

---
layout: center
transition: slide-left
---

<div class="flex flex-col justify-center items-center gap-y-4 mb-2">

<h2 class="text-3xl font-bold tracking-wide mb-2">
  (範例) HTTP 請求  - <code text-purple>useFetch</code>
</h2>

<PlaygroundLink category="day3" link="ComposablesUseFetch">Playground</PlaygroundLink>

</div>

<!--
( 點開 Playground 按照畫面說明 )
-->

---
transition: fade-out
---

<h2 class="important-text-4xl font-bold tracking-wide mt-8 mb-8 ml-18">
  重點回顧
</h2>

<ul class="important-list-none [&_li]:flex [&_li]:items-center [&_li]:gap-x-4 text-xl space-y-8 ml-12">
  <li v-click>
    <div i-heroicons:cube-16-solid></div>
    <div>Composable 函式通常會放在 <span font-bold><code>composables/</code></span> 目錄中。</div>
  </li>
  <li v-click>
    <div i-heroicons:cube-16-solid></div>
    <div>Composable 只能在 Vue 元件的 <code>&lt;<span text-pink>script</span> <span text-green>setup</span>&gt;</code> 範疇內使用。</div>
  </li>
  <li v-click>
    <div i-heroicons:cube-16-solid></div>
    <div>Composable 的特點就是使用到 <span text-yellow font-mono font-bold>Vue APIs</span>。</div>
  </li>
  <li v-click>
    <div i-heroicons:cube-16-solid></div>
    <div>Composable 函式的目的是<strong text-yellow>「分離關注點」</strong>並且作為<strong text-yellow>「有狀態的共用邏輯」</strong>。</div>
  </li>
  <li v-click>
    <div i-heroicons:cube-16-solid></div>
    <div>Composable 函式<span text-yellow font-bold> 可以再嵌套 </span>另一個 Composable 函式。</div>
  </li>
</ul>

<!--
最後我們來重點回顧一下，

[click] Composable 函式通常會放在根目錄或 `src` 目錄的 `composables` 目錄中。

[click] 因為 Composable 函式會使用到 Vue APIs，所以只能在 Vue 元件中 `<script setup>` 標籤內使用。

[click] Composable 函式的特點就是使用到 Vue APIs，像是 `ref`、`computed`、`onMounted` ... 等等的 Vue 方法，如果沒有使用到這些 Vue APIs，那應該是放在 `utils` 或其他目錄底下的工具類函式。

[click] Composable 函式的目的是「分離關注點」，並且作為「有狀態的共用邏輯」，這裡要特別注意，是「共用邏輯」而不是「共用狀態」，如果要「共用狀態」那就是要用 Pinia 之類的共用狀態管理套件。

[click] Composable 函式可以再嵌套另一個 Composable 函式，這也是模組化邏輯的特點。
-->
