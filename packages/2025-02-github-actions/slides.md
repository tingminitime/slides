---
highlighter: shiki
css: unocss
colorSchema: dark
mdc: true
layout: center
class: text-center
drawings:
  persist: true
glowSeed: 4
transition: fade-out
lang: zh-Hant
title: GitHub Actions 淺入淺出
---

<div flex flex-col gap-8 -translate-y-8>

<img w-18 h-18 mx-auto src="./assets/icon-github-actions.svg" alt="github actions logo" />

<h1 tracking-wide font-bold italic>
  <span>GitHub Actions&nbsp;</span>
  <span v-mark.green.op50="{strokeWidth: 4, roughness: 2}">淺入淺出</span>
</h1>

</div>

<!--
今天分享的主題是 GitHub Actions，

[click] 會說「淺入淺出」是因為之前我比較多都是使用 GitLab CI/CD，沒有什麼使用 GitHub Actions 的經驗，剛好趁這次分享我也學習一下怎麼使用 Actions。

GitHub Actions 可以很簡單也可以很複雜，今天分享的內容比較簡單的基礎概念，還有簡單實作體會一下 actions 的建立運作過程，希望可以當作大家接觸 DevOps 的敲門磚。
-->

---
layout: center
transition: slide-left
---

<h2
  transition duration-400
  class="text-center font-bold tracking-wide"
  :class="$clicks > 0 ? '-translate-x-40' : 'translate-x-0'"
>
  什麼是 GitHub <span text-sky>Actions</span>？
</h2>

<div
  v-click
  transition duration-300
  class="absolute right-6 top-1/2 -translate-y-1/2 w-84"
  :class="$clicks > 0 ? 'opacity-100 -translate-x-10' : 'opacity-0 translate-x-0'"
>

<div>YAML</div>

```yaml {*}{lines: true}
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v6

      - name: Set up Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '24'

      - name: Install dependencies
        run: npm install

# ...
```

</div>

<!--
什麼是 GitHub Actions 呢 ?

GitHub Actions 是由 GitHub 提供的一個自動化平台，

[click] 透過撰寫 YAML 腳本來執行各種工作流程，
通常會在腳本中撰寫專案的建置、測試、部署… 等等的任務，實現持續整合與持續部署，也就是 CI/CD。

如果看不太懂右邊腳本在寫什麼也沒關係，後面也會帶大家一起實作簡單的 actions 工作流程。
-->

---
layout: center
transition: slide-left
---

<h2
  transition duration-400
  class="text-center font-bold tracking-wide"
  :class="$clicks > 0 ? '-translate-y-12' : '-translate-y-4'"
>
  為什麼我們會<span text-yellow>需要</span> GitHub Actions ?
</h2>

<div
  v-motion
  v-click="[1]"
  :initial="{ x: '-50%', y: -40 }"
  :enter="{ x: '-50%', y: -40, transition: { duration: 400 } }"
  :click-1="{x: '-50%', y: -20 }"
  :leave="{ x: '-50%', y: -40 }"
  class="text-center font-semibold text-xl tracking-widest absolute left-1/2"
>
  <span v-mark.green.op50.delay300="{strokeWidth: 3, roughness: 2}">測試</span>
</div>

<div
  v-motion
  v-click="[2]"
  :initial="{ x: '-50%', y: -40 }"
  :enter="{ x: '-50%', y: -40, transition: { duration: 400 } }"
  :click-2="{ x: '-50%', y: -20 }"
  :leave="{ x: '-50%', y: -40 }"
  class="text-center font-semibold text-xl tracking-widest absolute left-1/2"
>
  <span v-mark.gray.op50.delay300="{at: 2, strokeWidth: 3, roughness: 2}">手動部署</span> vs. <span v-mark.cyan.op50.delay600="{at: 2, strokeWidth: 3, roughness: 2}">自動部署</span>
</div>

<div
  v-motion
  v-click="3"
  :initial="{ x: '-50%', y: -40 }"
  :enter="{ x: '-50%', y: -40, transition: { duration: 400 } }"
  :click-3="{ x: '-50%', y: -20 }"
  class="text-center font-semibold text-xl tracking-widest absolute left-1/2"
>
  <span v-mark.orange.op50.delay300="{at: 3, strokeWidth: 3, roughness: 2}">團隊協作</span>
</div>

<!--
在提核心概念之前，可以先探討一下，為什麼我們會需要 GitHub Actions ?

(詢問大家)

[click] **測試**：<br>
想像一下，如果我們為了趕時間，或是忘記先測試就直接把程式碼合併到主分支，如果這個程式異動是有問題的，那很有可能直接炸掉正式環境，這時候要被異動的可能就是你了 (開玩笑)。

[click] **手動部署和自動部署的效率差異**：<br>
在沒有自動化的幫助下，如果我們要把程式部署在遠端環境下，我們可能要想辦法進入遠端主機，然後 git clone 程式碼，然後再打一連串的指令進行建置和部署，這個流程做一次還好，但如果是每次更新程式都要這樣做的話，是非常沒有效率的。<br>
所以我們需要把這些繁雜的流程，"一次"寫到一個劇本中，然後在正確的時機下，讓 actions 自動幫我們完成這些工作，節省我們的時間和力氣。

[click] **團隊協作方面**：<br>
有些人可能有這樣的經驗像是 - 「你的電腦能跑嗎 ?」、「在我這邊可以跑啊，你那邊不行嗎 ?」，所以在一個專案中尤其是多人協作的專案，更需要像是 GitHub Actions 這樣的工具在團隊建立一套標準，大家都照著同樣的規矩來提交程式，維持專案的穩定又可以降低發生問題的機率，也是在團隊中，對開發和維運建立信心的其中一環。
-->

---
layout: center
transition: fade-out
---

<h2
  transition duration-400
  :class="$clicks > 0 ? '-translate-y-12' : '-translate-y-4'"
  class="text-center font-bold tracking-wide"
>
  GitHub Actions 的<span text-red>核心</span>概念
</h2>

<div
  v-motion
  v-click="1"
  :initial="{ x: '-50%', y: -40 }"
  :enter="{ x: '-50%', y: -40, transition: { duration: 400 } }"
  :click-1="{x: '-50%', y: -20 }"
  class="absolute left-1/2"
>
  <span class="text-xl font-semibold tracking-wide">
    當
    <span class="inline-block text-yellow"> 某件事 </span>
    發生時，自動執行
    <span class="inline-block text-red"> 一連串動作</span>
  </span>
</div>

<div
  v-motion
  v-click="2"
  :initial="{ x: 20, y: 10 }"
  :enter="{ x: 20, y: 10, transition: { duration: 400 } }"
  :click-3-4="{ x: 280, y: 10 }"
  class="relative w-fit"
>
  <span class="i-heroicons:arrow-up-16-solid text-xl font-bold text-red">arrow-up</span>
  <div
    v-click="[2]"
    class="absolute w-12 py-0.5 left-1/2 top-8 -translate-x-1/2 text-center font-semibold bg-yellow-500/50 rounded"
  >時機</div>
  <div
    v-click="3"
    class="absolute w-24 py-0.5 left-1/2 top-8 -translate-x-1/2 text-center font-semibold bg-red-500/30 rounded"
  >工作流程</div>
</div>

<!--
其實剛剛已經提到 actions 的核心概念了，

[click] 也就是當"某件事"發生時，自動執行"一連串動作"。

[click] 這個"某件事情的發生"就是"時機"

[click] 然後"一連串動作"就是我們要執行的"工作流程"。

這個由事件驅動的自動化工作流程，就是 GitHub Actions 的核心概念。
-->

---
transition: slide-left
---

<h2
  transition duration-400
  class="font-bold tracking-wide"
>
  Actions 的基本架構
</h2>

<div class="grid grid-cols-[max-content_min-content_auto] items-center gap-y-12 gap-x-12 mt-12">
  <div v-click class="text-xl font-semibold tracking-wide">觸發事件 ( Events )</div>
  <div v-click class="i-heroicons:arrow-right"></div>
  <div class="text-lg">
    <span v-click>收到新的訂單</span>
    <code v-click>on</code>
  </div>

  <div v-click class="text-xl font-semibold tracking-wide">工作流程 ( Workflow )</div>
  <div v-click class="i-heroicons:arrow-right"></div>
  <div v-after class="text-lg"></div>

  <div v-click class="text-xl font-semibold tracking-wide">任務 ( Jobs )</div>
  <div v-click class="i-heroicons:arrow-right"></div>
  <div v-after class="text-lg"></div>

  <div v-click class="text-xl font-semibold tracking-wide">步驟 ( Steps )</div>
  <div v-click class="i-heroicons:arrow-right"></div>
  <div v-after class="text-lg"></div>
</div>

<!--
1. 觸發事件 (Events)
2. 工作流程 (Workflow)
3. 任務 (Jobs)
4. 步驟 (Steps)
5. 動作 (Actions)

用"生產線"來比喻的話：<br>
「觸發事件」就像是"收到新的訂單"，<br>
「工作流程」代表"生產線"，當然一個工廠內可能不只一條生產線，所以其實我們可以有很多個"工作流程"<br>
「任務」是生產線上的每道關卡，例如"加工原料"、"包裝"、"品質檢測"...等等<br>
「步驟」是在"任務"中要按照順序執行的細項，以"包裝"來說，像是"將產品放入包裝盒"、"封箱"、"貼標籤"...等等。<br>

「動作」是實現"步驟"進而達成"任務"目標的關鍵，把產品放入包裝盒、封箱、貼標籤具體要怎麼實現，
-->
