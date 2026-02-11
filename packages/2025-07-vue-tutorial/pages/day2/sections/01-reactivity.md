---
layout: center
transition: slide-left
---

<h1 class="font-bold text-center tracking-wide">
  一、響應式狀態聲明
</h1>

<div class="text-center text-2xl">
  <span text-purple><code>ref</code></span>、<span text-purple><code>reactive</code></span>
</div>

<ExternalLink
  href="https://hackmd.io/atS551HER-C_UjUlpwfBeA"
  class="absolute bottom-12 right-12"
>
  HackMD
</ExternalLink>

<!--
我這邊會講 5 個章節介紹 Vue API 功能，

第一個，在 Vue 中，主要依靠 `ref` 和 `reactive` 兩個方法聲明響應式狀態。
-->

---
layout: center
transition: slide-left
---

<h2
  transition duration-400
  class="font-bold text-center tracking-wider"
  :class="$clicks > 1 ? '-translate-y-12' : '-translate-y-6'"
>
  為什麼會需要<span v-mark.green>響應式</span>狀態 ?
</h2>

<div
  transition duration-400
  class="text-3xl text-center flex justify-center items-center gap-x-4"
  :class="$clicks > 1 ? '-translate-y-3 op100' : '-translate-y-6 op0'"
  v-click
>
  <div class="px-4 py-2 font-bold bg-blue/10 border-2 border-blue/30 rounded-lg">
    狀態
  </div>
  <div class="text-3xl flex items-center justify-center gap-x-2">
    <div
      i-heroicons:arrow-long-right-20-solid
      class="animate-flash"
      style="animation-iteration-count: infinite; animation-duration: 2.5s; animation-timing-function: ease-in-out;"
    ></div>
    <span>驅動</span>
    <div
      i-heroicons:arrow-long-right-20-solid
      class="animate-flash"
      style="animation-iteration-count: infinite; animation-duration: 2.5s; animation-timing-function: ease-in-out;"
    ></div>
  </div>
  <div class="px-4 py-2 font-bold bg-green/10 border-2 border-green/30 rounded-lg">
    畫面
  </div>
</div>

<div class="absolute left-1/2 bottom-40 -translate-x-1/2 text-3xl text-center" v-click>
  <code>ref()</code>
</div>

<div class="absolute right-8 bottom-8 w-80 rounded-lg overflow-hidden" v-click>
  <img class="size-full" src="../assets/magic-ref.png" />
</div>

<!--
[click] 為什麼會需要響應式狀態 ? 先前有提到

[click] 「狀態 驅動 畫面」是 Vue 響應式系統的核心概念，

[click] 其中最常使用的方法就是 `ref`，可以把 `ref` 當作一個魔法咒語

[click] 這個咒語它在背後幫我們自動進行了很多事情，

包括虛擬 DOM 比較演算，也就是第一天提到的 diff 比較，還有更新畫面的流程等，

不過我們不需要在意細節，使用這個咒語我們只需要它的效果，也就是自動更新畫面。
-->

---
transition: slide-left
---

<h2 class="font-bold tracking-wide">
  使用 <code><span text-purple>ref</span>()</code> 聲明響應式狀態
</h2>

<div class="flex justify-between gap-x-4 mt-8">

<div class="w-1/2 flex flex-col gap-y-8">

```vue {*|1,5}
<script setup>
import { ref } from 'vue'

const title = ref('Hello World')
</script>
```

<div class="px-4 py-3 bg-green/10 border-2 border-green/30 rounded-lg w-max" v-click="3">
  <code>ref()</code> 參數可以傳入任何型別的值
</div>

<div class="w-max" v-click="4">

````md magic-move {at:5}
```javascript
ref('Hello World') // 字串
```

```javascript
ref(123) // 數值
```

```javascript
ref(true) // 布林
```

```javascript
ref({ name: 'Vue' }) // 物件
```

```javascript
ref([1, 2, 3]) // 陣列
```

```javascript
ref(() => 'Hello') // 函式
```

```javascript
const 響應式狀態 = ref( ... )
```
````

</div>

</div>

<div class="w-56 rounded overflow-hidden mr-12" v-click="2">
  <img src="../assets/useless_curse.gif" />
</div>

</div>

<!--
那要怎麼使用 `ref` 聲明響應式狀態呢 ?

像 `ref`、`reactive` 這種魔法工具

[click] 必須在 Vue 元件的 `script` 標籤中使用，

[click] 否則咒語會失效。

[click] `ref` 它是一個函式方法，它的參數可以傳入任何型別的值，

[click] 包括字串、

[click] 數值、

[click] 布林、

[click] 物件、

[click] 陣列、

[click] 甚至是函式，

[click] 不管什麼類型的值，只要放進 `ref()` 就會變成響應式狀態 !
-->

---
transition: slide-left
---

<h2 class="font-bold tracking-wide">
  如何使用或修改 <span text-purple><code>ref</code></span> 響應式狀態 ?
</h2>

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click>

<div class="text-xl mb-2">綁定響應式狀態</div>

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const title = ref('Hello World')
</script>

<template>
  <h2>{{ title }}</h2>
</template>
```

</div>

<div v-click>

<div class="text-xl mb-2">修改響應式狀態</div>

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const title = ref('Hello World !')
</script>

<template>
  <h2>{{ title }}</h2>
  <button
    @click="title = 'Magic World !'"
    style="background: blue; color: white; padding: 0.5rem;"
  >
    更換標題
  </button>
</template>
```

</div>

</div>

<!--
如果我們要把響應式狀態渲染到畫面上，就在模板上

[click] 使用 "雙大括號" 綁定 "響應式狀態"

上面是 Vue 元件的程式碼，下面是渲染的畫面結果。

[click] 那如果要修改狀態呢 ?

這邊寫了一個 button 按鈕，點擊這個按鈕的時候，對應到的方法會修改 `title` 這個響應式狀態的值，然後 Vue 就會自動更新畫面。

( 操作 )

按鈕上的 `@click` 是 `v-on:click` 的縮寫，它是監聽網頁元素的點擊事件，後面會介紹到。
-->

---
transition: slide-left
---

<h2 class="font-bold text-center mt-2 mb-4"><code><span text-purple>ref</span>()</code>&nbsp;會回傳一個物件</h2>

<div
  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12 text-3xl"
  :class="$clicks > 0 ? 'op0' : 'op100'"
>
  <code>const <span text-yellow>&lt;物件&gt;</span>  = <span text-purple>ref</span>()</code>
</div>

<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12 text-3xl" v-click="['+1', '+1']">
  <code><span text-yellow>&lt;物件&gt;</span>.<span text-red>value</span> = ...</code>
</div>

<div class="w-150 mx-auto" v-click="['2', '3']">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const title = ref('Hello World !')

function updateTitle() {
  title.value = 'Magic World !'
}
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="updateTitle" style="background: blue; color: white; padding: 0.5rem;">
    更換標題
  </button>
</template>
```

</div>

<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-40" v-click="3">

````md magic-move {at:4,lines:true}
```vue {3,4}
<template>
  <h2>{{ title }}</h2>
  <!-- 在模板修改 `title` 不需要 `.value` -->
  <button @click="title = 'Magic World !'">
    更換標題
  </button>
</template>
```

```vue {*|6-8,13-15}
<script setup>
import { ref } from 'vue'

const title = ref('Hello World !')

function updateTitle() {
  title.value = 'Magic World !'
}
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="updateTitle">
    更換標題
  </button>
</template>
```
````

</div>

<!--
`ref` 呢，實際上會回傳一個物件

[click] 這個物件有一個 `value` 屬性，不管是要讀取還是修改，都得透過這個 `value`

[click] 讓我們稍微修改上面的範例

這裡加入了函式 `updateTitle` 並透過 `title.value` 修改狀態，和上一個範例有一樣的效果 ( 點擊 )

[click] 只有在模板 `template` 中，這個 `title` 不需要透過 `value` 就可以修改它的狀態，

只要記得 `ref` 在 Vue 模板中會「自動解包」就比較不會誤用 `value` 了 !

這裡是直接在 `click` 事件中撰寫邏輯修改 `title` 響應式狀態，

[click] 實務上，在 Vue 模板中還會盡量把邏輯集中在 `script` 標籤裡面，而不是在 `template` 模板中撰寫邏輯。

[click] 就像上面範例，按鈕的 `click` 事件通常會封裝成一個函式分離關注點。
-->

---
layout: center
transition: slide-left
---

<h1
  transition duration-400
  class="font-bold tracking-wide"
  :class="$clicks > 0 ? '-translate-y-4' : 'translate-y-0'"
>
  <span>深層追蹤響應的&nbsp;</span><code><span text-purple>ref</span></code>
</h1>

<div class="flex justify-center items-center gap-x-4 text-2xl mb-4" v-click>
  <span>物件</span>
  <div i-heroicons:arrow-long-right-16-solid></div>
  <code><span text-purple>ref</span>(<span text-yellow>{ ... }</span>)</code>
</div>
<div class="flex justify-center items-center gap-x-4 text-2xl" v-click>
  <span>陣列</span>
  <div i-heroicons:arrow-long-right-16-solid></div>
  <code><span text-purple>ref</span>(<span text-yellow>[ ... ]</span>)</code>
</div>

<!--
接下來講到 `ref` 的一個特性，什麼是深層追蹤響應 ?

當 `ref` 包裝一個

[click] **物件** 或是

[click] **陣列** 的時候，

不管其中嵌套了幾層，可能物件包陣列，或是陣列包物件，然後屬性埋在深處，

不管屬性埋在多深處，只要這個屬性有綁定到模板上，它被修改的時候，Vue 都會更新畫面，這就是深層追蹤響應。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## 深層追蹤狀態 {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="DeepRef">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { ref } from 'vue'

const user = ref({
  name: '小明',
  info: {
    age: 25,
    address: {
      city: '台北'
    }
  }
})

function updateUser() {
  user.value.name = '小紅' // 修改頂層屬性
  user.value.info.age += 1 // 修改嵌套屬性
  user.value.info.address.city = '台中' // 修改更深的屬性
}
</script>

<template>
  <div>
    <h2>使用者資料</h2>
    <p>姓名：{{ user.name }}</p>
    <p>年齡：{{ user.info.age }}</p>
    <p>城市：{{ user.info.address.city }}</p>
    <button @click="updateUser">更新資料</button>
  </div>
</template>
```

</div>

<!--
這個範例是一個使用者資料的更新

可以看到使用者小明的 **地址資料** 嵌套在 `user` 響應式物件的第一 ... 二 ... 第三層中

當我按下「更新資料」按鈕，會執行 `updateUser` 方法，

把使用者資料 `user` 中的姓名 `name` 改為"小紅"，年齡 `info` 裡面的 `age` 加一，居住城市 `info` 裡面的 `address` 裡面的 `city` 改為"台中"。

( 點擊按鈕 )
-->

---
layout: center
transition: slide-left
---

<h1 class="font-bold tracking-wide">
  另一種聲明響應式狀態的方法
</h1>

<div class="text-purple text-2xl font-bold text-center"><code>reactive</code></div>

<!--
除了 `ref` 外，還有另一種使用響應式狀態的方法 — `reactive`。
-->

---
transition: slide-left
---

<h2 class="font-bold tracking-wide flex items-center gap-x-2 my-8">
  <span><code><span text-purple>reactive</span>()</code></span>
  <div>只能傳入<span>「物件」</span>或<span>「陣列」</span></div>
</h2>

<div class="grid grid-cols-2 gap-4">

```vue {*|4-7}{lines:true}
<script setup>
import { reactive } from 'vue'

const player = reactive({
  name: '勇者小明',
  hp: 100
})
</script>
```

```vue {*|4}{lines:true}
<script setup>
import { reactive } from 'vue'

const lottery = reactive([5, 13, 17, 22, 27, 28, 31])
</script>
```

</div>

<!--
`reactive` 不像 `ref` 可以傳入任何型別的值，它只能傳入

[click] 「**物件**」 或

[click] 「**陣列**」 。
-->

---
layout: center
transition: slide-left
---

<div class="text-3xl mb-8">
  <code>const <span text-yellow>&lt;狀態&gt;</span>  = <span text-purple>reactive</span>()</code>
</div>

<div class="text-3xl">
  <code><span text-yellow>&lt;狀態&gt;</span>
  <span>.</span>
  <span text-red v-mark.linethrough.red.op80={roughness:3,strokeWidth:4}>value</span> = ...</code>
</div>

<!--
要特別注意 `reactive` 包裝的響應式狀態沒有 `value` 屬性，

[click] 不管在 `script` 標籤中，或 `template` 模板中，都不需要透過 `value` 修改其中的值，它也沒有這個 `value` 屬性，所以直接對狀態進行修改就可以了
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Reactive {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="ReactiveExample">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { reactive } from 'vue'

const player = reactive({
  name: '勇者小明',
  hp: 100
})

function takeDamage() {
  player.hp -= 10 // 直接修改屬性
}
</script>

<template>
  <div>
    <h2>{{ player.name }} 的血量：{{ player.hp }}</h2>
    <button @click="takeDamage">受到 10 點傷害</button>
  </div>
</template>
```

</div>

<!--
在這個範例中，用 `reactive` 宣告了一個 `player` 響應式物件

當按下「受到 10 點傷害」按鈕時，勇者小明的 `hp` 值會減 10 並更新畫面

( 操作 )
-->

---
layout: center
transition: slide-left
---

<h1
  transition duration-400
  class="font-bold tracking-wide"
  :class="$clicks > 0 ? '-translate-y-4' : 'translate-y-0'"
>
  <span>同樣也是深層追蹤響應的&nbsp;</span><code><span text-purple>reactive</span></code>
</h1>

<!--
`reactive` 和 `ref` 一樣，會 "深層追蹤" 物件或陣列的屬性狀態。

一樣，不管嵌套幾層，只要值有改變，Vue 就會更新畫面。
-->

---
transition: slide-left
---

<div class="flex justify-between items-center gap-x-2 mb-2">

## Deep Reactive {.text-3xl .font-bold .mb-2 .tracking-wide}

<PlaygroundLink category="day2" link="DeepReactive">Playground</PlaygroundLink>

</div>

<div class="horizontal-runner full-height">

```vue {monaco-run} {autorun:true}
<script setup>
import { reactive } from 'vue'

const player = reactive({
  name: '勇者小明',
  stats: {
    hp: 100,
    mp: 50,
    level: 1,
  },
})

function takeDamage() {
  player.stats.hp -= 10
}

function levelUp() {
  player.stats.level += 1
  player.stats.hp += 50
  player.stats.mp += 20
}
</script>

<template>
  <div>
    <h2>{{ player.name }}</h2>
    <p>等級：{{ player.stats.level }}</p>
    <p>血量：{{ player.stats.hp }}</p>
    <p>魔力：{{ player.stats.mp }}</p>
    <button @click="takeDamage">受到 10 點傷害</button>
    <button @click="levelUp">升級</button>
  </div>
</template>
```

</div>

<!--
把剛剛的範例改變一下，把勇者小明的狀態再嵌套了一層 `stats` 物件，有 `hp`、`mp`、`level`

然後將這些物件屬性綁定到模板上。

( 操作 ) 當我按下「受到 10 點傷害」按鈕，勇者小明的血量 `player.stats.hp` 會減 10 並更新畫面

( 操作 ) 那當我按下「升級」按鈕，勇者小明 `player.stats` 裡面所有的值都會變動並更新畫面

從這個範例可以得知 `reactive` 這個宣告響應式狀態的方法也是深層追蹤響應的
-->

---
transition: slide-left
---

<h2 class="font-bold text-3xl text-center">
  使用 <span text-purple><code>reactive</code></span> 的限制
</h2>

<div class="grid grid-cols-1 gap-y-12 mt-8">

<div v-click="1" class="p-6 bg-yellow/10 border-2 border-yellow/50 rounded-lg w-70% mx-auto">

<div class="flex items-center justify-between mb-4">
  <h3 class="flex items-center gap-x-2 font-bold">
    <span class="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-black font-bold">1</span>
    <span>替換整個物件會失去響應性</span>
  </h3>
  <PlaygroundLink category="day2" link="ReplaceObjectBreaksReactivity">Playground</PlaygroundLink>
</div>

```javascript
let player = reactive({ name: '小明', hp: 100 })
player = { name: '老王', hp: 200 } // ⚠️ `player` 失去響應性
```

</div>

<div v-click="2" class="p-6 bg-orange/10 border-2 border-orange/50 rounded-lg w-70% mx-auto">

<div class="flex items-center justify-between mb-4">
  <h3 class="flex items-center gap-x-2 font-bold">
    <span class="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-black font-bold">2</span>
    <span>解構物件會失去響應性</span>
  </h3>
  <PlaygroundLink category="day2" link="DestructureBreaksReactivity">Playground</PlaygroundLink>
</div>

```javascript
const player = reactive({ name: '小明', hp: 100 })
let { hp } = player // ⚠️ hp 失去響應性
```

</div>

</div>

<!--
`reactive` 在使用上會有一些限制

[click] 第一個是，替換整個物件會失去響應性，

由於 JavaScript 物件是 by reference 引用特性，如果將 `reactive` 方法所創建的響應式物件替換成新的物件，會因為原先的物件失去引用進而失去響應性。

[click] 從 `reactive` 創建的響應式物件中解構出屬性，也會讓這個屬性失去響應性
-->

---
transition: slide-left
---

<h2
  transition duration-500
  class="font-bold text-3xl text-center mb-4"
  :class="$clicks > 0 ? 'translate-y-0' : 'translate-y-50'"
>
  <span>複習一下&nbsp;</span>
  <span text-purple><code>ref</code></span> 
  <span>&nbsp;與&nbsp;</span>
  <span text-purple><code>reactive</code></span> 
  <span>&nbsp;的差異</span>
</h2>

<div v-click>

| 響應式 API | <span text-purple text-xl><code>ref</code></span> | <span text-purple text-xl><code>reactive</code></span> |
|:---|:---|:---|
| 資料型別 | 支援任何型別<br>( 字串、數字、布林、物件、陣列等 ) | 僅支援物件和陣列 |
| 存取方式 | 在 `<script setup>` 中需使用 `.value`；<br>在 `<template>` 中自動解包，無需 `.value` | 直接存取屬性 |
| 深層響應 | ✅ | ✅ |
| 響應式行為 | ✅ 可直接替換整個值 ( `obj.value = newObj` ) 依然保留響應性 | ❌ 無法直接替換物件或陣列，會失去響應性 |
| 使用場景 | - 管理單一值 ( 如計數器、輸入框 )<br>- 需替換整個物件 | - 管理複雜物件 ( 如表單、遊戲狀態 )<br>- 僅修改屬性而非替換整個物件 |

</div>

<!--
這裡整理了 `ref` 和 `reactive` 兩個方法的差異。

比較要注意的是兩個方法存取狀態的差異，在 JavaScript 邏輯中，`ref` 需要靠 `.value` 存取，而 `reactive` 是直接存取屬性。
-->

---
layout: center
transition: fade-out
---

<h1 class="font-bold tracking-wide">
  推薦一律使用 <span text-purple><code>ref</code></span> 聲明響應式狀態
</h1>

<div
  transition duration-500
  class="absolute left-1/2 -translate-x-1/2 bottom-32 flex justify-center items-center text-2xl text-center"
  :class="$clicks > 0 ? 'translate-y-0 op100' : 'translate-y-12 op0'"
  v-click
>
  <code><span>.</span><span text-yellow>value</span></code>
  <div class="flex items-center justify-center gap-x-2 ml-4">
    <div i-heroicons:arrow-long-left-20-solid></div>
    <div>響應式狀態</div>
  </div>
</div>

<!--
`ref` 在使用上靈活的特點幾乎可以應用在所有情境，相反的，`reactive` 在使用的時候常常需要注意它的限制，因此官方也建議使用 `ref` 聲明響應式狀態。

[click] 雖然 `ref` 要使用 `value` 進行狀態的存取，看似要多打一段程式碼顯得麻煩，但是在實務上在存取 `value` 的時候，比較能清楚知道目前正在操作的是「響應式狀態」而不是一般的狀態，讓元件中響應式狀態和一般狀態資料更容易區分。
-->
