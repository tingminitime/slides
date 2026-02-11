---
layout: center
transition: slide-left
---

<div
  transition duration-400
  :class="$clicks > 0 ? '-translate-y-20' : 'translate-y-0'"
>
  <h1 class="font-bold text-center tracking-wide">
    四、事件監聽處理
  </h1>
  
  <div class="text-center text-2xl text-purple mb-8">
    <code>v-on</code>
  </div>
</div>

<div
  transition duration-400
  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-8 w-48 rounded overflow-hidden"
  :class="$clicks > 0 ? 'op100' : 'op0'"
  v-click
>
  <img class="size-full" src="../assets/roger.gif" alt="rope toss" />
</div>

<div class="absolute left-1/2 bottom-20 -translate-x-1/2 [&_code]:text-lg" v-click>

```javascript
addEventLister('click', () => { ... })
```

</div>

<ExternalLink
  href="https://hackmd.io/ms08KAoxSuWADtyxRTxnXg"
  class="absolute bottom-12 right-12"
>
  HackMD
</ExternalLink>

<!--
[click] 在 JavaScript 中如果要監聽瀏覽器中 DOM 事件，

例如 點擊 `click`、輸入 `input`、表單送出 `submit`、游標移動 `mousemove` 等等 ...，

[click] 會用 `addEventListenr` 綁定瀏覽器 DOM 並監聽。
-->

---
transition: slide-left
---

<h2 class="font-bold tracking-wide mb-8">
  計數器
</h2>

<div class="grid grid-cols-2 gap-8">

<div v-click>
<div class="text-2xl text-yellow font-bold mb-4">原生 JavaScript</div>
<div class="mb-4">

```html
<div id="count">Count: 0</div>
<button id="increment-button">+</button>
```

</div>
<div>

```javascript
let count = 0
const countDiv = document.querySelector('#count')
const incrementButton = document.querySelector('#increment-button')

incrementButton.addEventListener('click', () => {
  count++
  countDiv.textContent = `Count: ${count}`
})
```

</div>
</div>

<div v-click>
<div class="text-2xl text-green font-bold mb-4">Vue</div>

````md magic-move {at:3,lines: true}
```vue {*|9}
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>Count: {{ count }}</div>
  <button v-on:click="count++">+</button>
</template>
```

```vue {9|4,8-9}
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="count++">+</button>
</template>
```
````

</div>

</div>

<!--
舉一個計數器的範例

[click] 原生 JavaScript 必須使用 `document.querySelector()` 方法獲取 DOM，然後使用 `addEventListener` 監聽 DOM 事件執行函式，函式內部再更改 `.textContent` 的值更新 DOM，這類 **命令式** 的邏輯過程會顯得有些冗長和複雜。

[click] 而在 Vue 中，我們使用 `ref` 定義響應式狀態，

[click] 然後在模板中使用 `v-on` 監聽 DOM 事件執行對應方法，簡單直觀又好上手，

[click] `v-on` 還可以縮寫成 `@` ( 小老鼠 )，

[click] 因為 Vue 是 **狀態驅動畫面**，所以我們只需要關注狀態 `count` 的變化，專注在操作 `count` 就可以了，其餘的畫面更新流程會由 Vue 自動處理。

另外要注意，應該要依循 Vue 所提供的規則和風格撰寫，在 Vue 元件中盡量不要使用 `document.querySelector()` 這類原生 JavaScript 方法手動操作 DOM，這樣可能會導致 Vue 無法追蹤狀態的變化，導致畫面與狀態不同步，變得很難維護。
-->

---
layout: center
transition: slide-left
---

<div
  transition duration-400
  :class="$clicks > 0 ? '-translate-y-40 op0' : 'translate-y-0 op100'"
>
<h2 class="text-3xl text-center font-bold tracking-wide mb-8">
  Inline Handlers
</h2>

<div class="[&_code]:text-lg">

```html
<button @click="count++">+</button>
```

</div>
</div>

<div
  transition duration-400
  class="absolute left-1/2 top-1/2 -translate-x-1/2"
  :class="$clicks > 0 ? '-translate-y-1/2 op100' : 'translate-y-20 op0'"
  v-click
>
<h2 class="text-3xl text-center font-bold tracking-wide mb-8">
  Method Handlers
</h2>

<div class="[&_code]:text-lg">

```html
<button @click="increment">+</button>
```

</div>
</div>

<!--
在前面的範例中，是使用 Inline Handler 方法，在監聽事件的冒號裡面直接撰寫邏輯，這種適合簡單的事件處理情境

[click] 不過在實務上，比較常用的會是另外定義一個函式給事件監聽調用
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Method Handlers {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnCounter">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="increment">+</button>
  <!-- or -->
  <button @click="increment()">+</button>
</template>
```

</div>

<!--
來看個範例，button 按鈕監聽了 click 事件，

然後調用 `increment` 函式，有沒有後面調用的小括號在這裡表現是一樣的，

不過通常沒有參數要傳遞的話，直接寫函式名稱就好了，不需要調用的小括號

( 點擊 button )

這樣的寫法可以讓我們把事件處理邏輯集中在 `<script>` 中，讓模板保持簡潔。
-->

---
layout: center
transition: slide-left
---

<h2 class="text-center font-bold tracking-wide space-y-2">
  <div>保持 <code text-green>&lt;template&gt;</code><span v-mark.yellow.highlight.op30> 簡潔 </span></div>
  <div>轉移<span v-mark.yellow.highlight.op30>複雜</span>邏輯到 <code text-green>&lt;script&gt;</code></div>
</h2>

<!--
所以在撰寫 Vue 元件的時候，

[click] 建議時刻提醒自己保持模板的簡潔，

[click] 把複雜的邏輯轉移到 `<script>` 中，實現元件內的 **關注點分離**。
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="text-3xl text-center font-bold tracking-wide mb-12"
  :class="$clicks > 0 ? 'translate-y-10' : 'translate-y-20'"
>
  <code text-purple>v-on</code> 的預設參數 <code>event</code>
</h2>

<div
  transition duration-400
  class="w-max mx-auto mb-8"
  :class="$clicks > 0 ? 'translate-y-10' : 'translate-y-20'"
>

```html
<button @click="(event) => eventType = event.type">
  傳入參數
</button>
```

</div>

<div class="w-max mx-auto translate-y-10" v-click>

```html
<button @click="element = $event.target.nodeName">
  使用 $event
</button>
```

</div>

<style>
  code {
    font-size: 1.2rem;
  }
</style>

<!--
`v-on` 在綁定事件的時候，Vue 會自動將原生 JavaScript 事件對象 `event` 傳遞給事件處理函式的第一個參數，這個 `event` 在 Inline Handlers 和 Method Handlers 都可以使用。

[click] `v-on` 還封裝了 `$event` 這個事件對象的特殊變數，內容和沒有錢字號的 `event` 一樣，不過它可以直接使用表達式存取。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Inline Handlers - <code text-purple>v-on</code> 預設參數 `event` {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventInline">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const eventType = ref('')
const element = ref(null)
</script>

<template>
  <div>點擊事件 : {{ eventType }}</div>
  <div>點擊元素 : {{ element }}</div>
  <!-- 傳遞 `event` 參數 -->
  <button @click="(event) => eventType = event.type">
    傳入參數
  </button>
  <!-- 或是使用 `$event` -->
  <button @click="element = $event.target.nodeName">
    使用特殊變數
  </button>
</template>
```

</div>

<!--
這個範例有兩個按鈕，分別用 `event` 參數和 `$event` 特殊變數，

點擊"傳入參數"的時候，`eventType` 這個響應式狀態會更新成 `event` 參數的 `type` 值 ( 點擊傳入參數 )，點擊事件這邊顯示 `click`，

在點擊"使用特殊變數"的時候，`element` 會更新成 `$event` 的 `target` 的 `nodeName` ( 點擊使用特殊變數 )，點擊元素這邊就出現 `BUTTON`。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Method Handlers - <code text-purple>v-on</code> 預設參數 `event` {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventMethod">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const element = ref(null)

function clickHandler(event) {
  element.value = event.target.nodeName
}
</script>

<template>
  <div>點擊元素 : {{ element }}</div>
  <button @click="clickHandler">Click</button>
</template>
```

</div>

<!--
比較好的做法還是定義一個函式，函式的第一個參數就會自動傳入事件的物件可以在函式內部使用，

像這邊點擊了 Click 按鈕之後，執行 `clickHandler` 函式，在元素監聽事件這邊不需要使用小括號寫參數，

然後在 `function` `clickHandler` 這邊填入參數 `event`，接著把響應式狀態 `element` 更新成 `event.target.nodeName`，點擊一下 Click

( 點擊 Click ) 點擊元素這邊顯示 BUTTON，就是 `event.target.nodeName`。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Method Handlers - <code text-purple>v-on</code> 特殊變數 `$event` {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventMethodWithParams">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const message = ref('')
const element = ref(null)

function clickHandler(msg, event) {
  message.value = msg
  element.value = event.target.nodeName
}
</script>

<template>
  <div>訊息 : {{ message }}</div>
  <div>點擊元素 : {{ element }}</div>
  <button @click="clickHandler('我是訊息!', $event)">
    Click
  </button>
</template>
```

</div>

<!--
當然可以在定義的函式傳入多個參數，如果要其他參數又需要 `event` 物件的話，可以運用 `$event`，

( 照畫面說明 )
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## <code text-purple>v-on</code> - 商品計數 {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventCountProductions">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

// 商品數量
const productQuantities = ref(0)

// 增加數量
function increment() {
  productQuantities.value++
}

// 減少數量
function decrement() {
  if (productQuantities.value <= 0) return
  productQuantities.value--
}

// 重置數量
function reset() {
  productQuantities.value = 0
}
</script>

<template>
  <div>
    <span>商品數量 : </span>
    <span>{{ productQuantities }}　</span>
    <button @click="decrement">－</button>
    <button @click="increment">＋</button>
    <button @click="reset">清除</button>
  </div>
</template>
```

</div>

<!--
來一個比較實際的例子

( 從 template 和畫面開始講 )

這是一個有商品數量「增加」、「減少」、「清除」按鈕搭配 `click` 事件的商品計數功能，

其中比較要注意的是商品數量不會是負數，因此 `decrement` 函式中需要多寫一個判斷，當商品數量小於等於 `0` 時不會繼續減少數量。

( 實際操作 )
-->

---
transition: slide-left
---

<h2 class="text-3xl text-center font-bold tracking-wide my-12">
  <code text-purple>input</code> 、 <code text-purple>change</code> 事件
</h2>

<div class="grid grid-cols-2 gap-8">

<div class="bg-zinc/15 border border-zinc/40 rounded-xl pt-4 pb-6 px-6" v-click>
  <div class="text-2xl text-purple font-bold mb-4"><code>@input</code></div>
  <div class="text-lg mb-4">
    在每次輸入框內容<strong text-yellow>「改變時」</strong>觸發 :
  </div>

  <ul class="space-y-2 text-sm list-disc list-inside">
    <li>每次按鍵輸入 ( 輸入一個字元 )</li>
    <li>貼上文字 ( 使用 <code>Ctrl + V</code> 或右鍵貼上 )</li>
    <li>刪除文字 ( 使用 Backspace 或 Delete )</li>
  </ul>
</div>

<div class="bg-zinc/15 border border-zinc/40 rounded-xl pt-4 pb-6 px-6" v-click>
  <div class="text-2xl text-purple font-bold mb-4"><code>@change</code></div>
  <div class="text-lg mb-4">
    在輸入框內容<strong text-yellow>「確認後」</strong>觸發 :
  </div>

  <ul class="space-y-2 text-sm list-disc list-inside">
    <li>輸入框失去焦點 ( 點擊輸入框外的地方 )，並且內容有改變時</li>
    <li>按下 Enter 鍵</li>
  </ul>
</div>

</div>

<!--
除了 `click` 事件外，表單輸入的 `change` 和 `input` 事件也很常見

[click] `input` 事件會在每次輸入框內容「改變時」觸發，例如在每次的按鍵輸入、使用 `Ctrl + V` 或右鍵貼上文字、刪除文字的時候，都會觸發 `input` 事件。

[click] `change` 事件同樣是監聽輸入框內容，但是是在「確認後」觸發，包括輸入框失去焦點並且內容有改變、或是輸入完畢後按 Enter 按鍵等。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## <code text-purple>v-on</code> - 表單 <code text-purple>input</code> / <code text-purple>change</code> 事件 {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventInputAndChange">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const inputText = ref('') // 綁定輸入框的值
const confirmedText = ref('') // 儲存確認後的內容

// 處理 input 事件（即時變化）
function inputHandler(event) {
  inputText.value = event.target.value // 更新輸入框的值
};

// 處理 change 事件（失去焦點或按 Enter 後）
function changeHandler (event) {
  confirmedText.value = event.target.value // 更新確認後的文字
}

// 送出後清空相關的狀態
function send() {
  // do something ...
  inputText.value = ''
  confirmedText.value = ''
}
</script>

<template>
  <h2>表單綁定範例</h2>
  <label>
    輸入文字：
    <input
      type="text"
      :value="inputText"
      @input="inputHandler"
      @change="changeHandler"
      placeholder="請輸入文字"
    />
    <button @click="send">送出</button>
  </label>
  <p>即時輸入內容 ( Input 事件 )：{{ inputText }}</p>
  <p>確認後的內容 ( Change 事件 )：{{ confirmedText }}</p>
</template>
```

</div>

<!--
來嘗試一下，這裡有一個輸入框，

它同時監聽了 `input` 和 `change` 事件，分別對應到 `inputHandler` 和 `changeHandler` 函式，

兩個函式都會更新響應式狀態 `inputText` 和 `confirmText`，更新的內容同樣都是 `event.target.value`，也就是輸入框輸入的"值"

畫面上「即時輸入內容」綁定了 `input` 事件，「確認後的內容」綁定了 `change` 事件，

然後按下「送出」按鈕會清空狀態。

( 實際輸入看看 ... )
-->

---
transition: slide-left
---

<h2 class="text-3xl text-center font-bold tracking-wide my-8">
  表單 <code text-purple>submit</code> 事件
</h2>

<div class="bg-zinc/15 border border-zinc/40 rounded-xl w-max pt-4 pb-6 px-6 mx-auto">
  <div class="text-2xl text-purple font-bold mb-4"><code>@submit</code></div>
  <div class="text-lg mb-4">
    在表單元素 <code>&lt;form&gt;</code> 監聽使用 :
  </div>

  <ul class="space-y-2 text-sm list-disc list-inside">
    <li>
      <code>&lt;form&gt;</code> 表單元素內 <code>&lt;input&gt;</code> 輸入框按下 Enter 觸發
    </li>
    <li>
      <code>&lt;form&gt;</code> 表單元素內 <code>&lt;button type="submit"&gt;</code> 按鈕觸發
    </li>
    <li>
      通常會搭配 <code>.prevent</code> 修飾符
    </li>
  </ul>
</div>

<!--
submit 是表單 form 元素的原生事件，所以一般會放在 form 元素上監聽使用，

只要 form 表單元素內在輸入框按下 Enter，或是點擊類型是 `submit` 的按鈕就會觸發 submit 事件，

而且為了避免原生 submit 事件導致頁面重新載入，通常會搭配 `.prevent` 修飾符阻止頁面重新載入。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## <code text-purple>v-on</code> - 表單 <code text-purple>submit</code> 事件 {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="VOnEventSubmit">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const name = ref('') // 綁定輸入框的值
const savedName = ref('') // 儲存送出的名字

function submitHandler(event) {
  event.preventDefault() // 防止表單送出時頁面重新整理
  savedName.value = name.value // 將輸入的值儲存
  name.value = '' // 清空輸入框
}

function inputHandler(event) {
  name.value = event.target.value
}
</script>

<template>
  <div>
    <h2>表單送出範例</h2>
    <form @submit="submitHandler">
      <label>
        輸入你的名字：
        <input
          type="text"
          :value="name"
          @input="inputHandler"
          placeholder="請輸入名字"
        />
      </label>
      <button type="submit">送出</button>
    </form>
    <p>你送出的名字是：{{ savedName }}</p>
  </div>
</template>
```

</div>

<!--
範例中有兩個響應式狀態，其中 `name` 綁定輸入框，

`savedName` 它儲存我們送出的名字要呈現在畫面中送出的結果上的，

輸入框 `input` 監聽了 `input` 事件執行 `inputHandler` 函式修改 `name` 響應式狀態的值，

( 示範輸入 Enter、點擊送出 )

可以看到 `submitHandler` 表單送出執行的函式中，有 `event.preventDefault()` 防止表單送出的時候頁面重新整理，

( 修改程式碼 ) 我們也可以把這行刪掉，然後在監聽 `submit` 事件的地方加上 `.prevent` 修飾符，這樣就可以達到同樣的效果。
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="important-text-4xl font-bold text-center tracking-wide mt-4 mb-8"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-40'"
>
  事件修飾符
</h2>

<div class="flex flex-col gap-y-8 w-max mx-auto">
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.stop</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>阻止事件向上層元素冒泡</div>
  </div>
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.prevent</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>阻止事件的預設行為</div>
  </div>
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.self</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>確保事件只在當前元素觸發</div>
  </div>
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.capture</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>使用捕獲模式</div>
  </div>
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.once</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>事件監聽只會觸發一次</div>
  </div>
  <div class="grid grid-cols-[2fr_1fr_5fr] items-center gap-x-2 text-2xl" v-click>
    <div><code>.passive</code></div>
    <div i-heroicons:arrow-long-right-16-solid class="text-green justify-self-center"></div>
    <div>改善滾動效能</div>
  </div>
</div>

<!--
剛剛有提到事件修飾符 `prevent`，Vue 的 `v-on` 除了提供 `prevent` 修飾之外，還有其他事件修飾符可以使用，例如 ...

[click] `stop` 阻止事件往上層元素冒泡，避免觸發父元素的事件監聽。

[click] `prevent` 阻止事件的預設行為，例如阻止表單提交時頁面重新載入。

[click] `self` 確保事件只在當前元素觸發。

[click] `capture` 改變事件在捕獲階段觸發而不是冒泡階段。

[click] `once` 限制事件監聽只會觸發一次，然後自動移除監聽。

[click] `passive` 改善頁面滾動效能，但是不能和 `prevent` 一起使用。

因為
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="important-text-4xl font-bold text-center tracking-wide mt-4"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-40'"
>
  按鍵修飾符
</h2>

<div class="flex justify-center items-center gap-x-8 mt-8" v-click>
  <div class="flex flex-col justify-center items-center text-2xl">
    <code text-purple self-center>keyup</code>
    <div class="op80 text-lg font-bold mt-2">放開按鍵時</div>
  </div>
  <div class="flex flex-col justify-center items-center text-2xl">
    <code text-purple self-center>keydown</code>
    <div class="op80 text-lg font-bold mt-2">按下按鍵時</div>
  </div>
  <div class="flex flex-col justify-center items-center text-2xl">
    <code text-purple self-center>keypress</code>
    <div class="op80 text-lg font-bold mt-2">按住按鍵時</div>
  </div>
  <div class="flex flex-col justify-center items-center text-2xl">
    <code text-purple self-center>click</code>
    <div class="op80 text-lg font-bold mt-2">點擊時</div>
  </div>
</div>

<div class="mt-8 w-85% mx-auto">

<!-- 鍵盤修飾符 -->
<div class="flex items-center gap-x-6 bg-zinc/15 border border-zinc/40 rounded-xl py-4 px-6 mb-8" v-click>
  <div class="shrink-0 text-green text-2xl text-center font-bold">鍵盤修飾符</div>
  <div class="flex flex-wrap gap-x-2 gap-y-3">
    <div><code>.enter</code></div>
    <div><code>.tab</code></div>
    <div><code>.delete</code></div>
    <div><code>.esc</code></div>
    <div><code>.space</code></div>
    <div><code>.up</code></div>
    <div><code>.down</code></div>
    <div><code>.left</code></div>
    <div><code>.right</code></div>
    <div><code>.ctrl</code></div>
    <div><code>.alt</code></div>
    <div><code>.shift</code></div>
    <div><code>.meta</code></div>
    <div><code>.exact</code></div>
    <div><code>...</code></div>
  </div>
</div>

<!-- 滑鼠修飾符 -->
<div class="flex items-center gap-x-6 bg-zinc/15 border border-zinc/40 rounded-xl py-4 px-6 h-max" v-click>
  <div class="text-green text-2xl text-center font-bold">滑鼠修飾符</div>
  <div class="flex flex-wrap gap-2">
    <div><code>.left</code></div>
    <div><code>.right</code></div>
    <div><code>.middle</code></div>
    <div><code>.exact</code></div>
  </div>
</div>

</div>

<div class="absolute bottom-12 right-12 flex items-center gap-x-4">
  <ExternalLink href="https://vuejs.org/guide/essentials/event-handling.html#event-modifiers">
    官方文件
  </ExternalLink>
  <ExternalLink href="https://hackmd.io/qwOsd9C4SCSa-uEXFrxZSQ?view#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A3%BE%E7%AC%A6">
    HackMD
  </ExternalLink>
</div>

<!--
除了前面介紹的事件修飾符，`v-on` 還提供了「**按鍵修飾符**」指令後綴，

[click] 常用在 `keyup`、`keydown`、`keypress`、`click` 等事件。

按鍵修飾符有很多，其中又分成 :

[click] "鍵盤修飾符"

[click] 和 "滑鼠修飾符"

怕篇幅太長，這邊就不一一介紹，大家可以參考官方文件或是我們整理的 HackMD 文件。
-->
