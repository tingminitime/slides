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

<h1>
  <div class="tracking-wide font-bold italic">GitHub Actions</div>
  <div
    v-click
    v-mark.green.op50.delay500="{at: 1, strokeWidth: 4, roughness: 2}"
    class="w-fit text-2xl text-gray-10 font-bold italic tracking-wider mt-2 mx-auto px-1"
  >淺入淺出</div>
</h1>

</div>

<!--
今天分享的主題是 GitHub Actions，

[click] 因為在工作上我比較多是使用 GitLab CI/CD，沒有什麼使用 GitHub Actions 的經驗，剛好趁這次分享和大家一起學習一下怎麼使用它。

GitHub Actions 可以很簡單也可以很複雜，今天分享的內容比較簡單的基礎概念，還有透過簡單的實作，體會一下 actions 運作的過程，希望可以當作大家接觸 CI/CD 的敲門磚。
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

[click] 透過撰寫像右邊這樣的 YAML 工作流程腳本來執行各種任務。

在腳本中，通常會有專案的環境建置、測試、部署… 之類的任務，目標是實現持續整合與持續部署，也就是 CI/CD。

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
那麼在提核心概念之前，我想詢問大家一個問題，為什麼我們會需要 GitHub Actions ?

(詢問大家)

[click] **測試**：<br>
想像一下，如果我們為了趕時間，或是忘記先測試就直接把程式碼異動合併到主分支，然後更新正式機，如果這個程式的異動是有問題的，好一點是被 PM 或 QA 發現然後被訓話一頓做一個 hotfix，如果很不幸 PM 和 QA 都沒發現，被客戶發現的話，這時候要被異動的可能就是你了 (開玩笑)。

[click] **手動部署和自動部署的效率差異**：<br>
在沒有自動化的幫助下，如果我們要把程式部署在遠端環境下，我們可能要想辦法進入遠端主機，然後 git clone 程式碼，接著再打一連串的指令進行環境建置和部署，這個流程做一次還好，但如果是每次更新程式都要這樣做的話，是非常沒有效率的。<br>
所以我們需要把這些繁雜的流程，"一次"寫到一個劇本中，然後在正確的時機下，讓 actions 自動幫我們完成這些工作，節省我們的時間和力氣。

[click] **團隊協作方面**：<br>
有些人可能有這樣的經驗像是 - 「你的電腦能跑嗎 ?」、「在我這邊可以跑啊，你那邊不行嗎 ?」，所以在一個專案中尤其是多人協作的專案，更需要像是 actions 這樣的工具在團隊建立一套標準，大家都照著同樣的規矩來提交程式，程式也會在相同的環境下進行構建測試，這樣既可以維持專案的穩定，又可以降低發生問題的機率，也是在團隊中，對開發和維運建立信心的其中一環。
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
  v-click="[2, 4]"
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
    v-click="[3]"
    class="absolute w-24 py-0.5 left-1/2 top-8 -translate-x-1/2 text-center font-semibold bg-red-500/30 rounded"
  >工作流程</div>
</div>

<div
  v-click="4"
  v-mark.highlight.green.op20.delay300="{at: 4, roughness: 2}"
  class="absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-20 text-3xl font-bold tracking-wide p-2"
>
  事件驅動
</div>

<!--
接下來帶大家了解 GitHub Actions 的核心概念，不過其實剛剛已經提到 actions 的核心概念了，

[click] 也就是當"某件事"發生時，自動執行"一連串動作"。

[click] 這個"某件事情的發生"就是"時機"

[click] 然後"一連串動作"就是我們要執行的"工作流程"。

[click] 這個由事件驅動的自動化工作流程，就是 GitHub Actions 的核心概念。
-->

---
transition: slide-up
glow: full
---

<h2
  transition duration-400
  class="font-bold tracking-wide"
>
  Actions 的基本架構
</h2>

<div class="grid grid-cols-[max-content_min-content_auto] items-center gap-y-12 gap-x-6 mt-12 ml-8 pr-6">
  <div v-click class="text-2xl text-purple font-semibold tracking-wide">觸發事件 ( Events )</div>
  <div v-click class="i-heroicons:arrow-right-16-solid text-xl op70"></div>
  <div class="grid grid-cols-[max-content_auto_min-content] items-center gap-2 text-xl">
    <div v-after class="tracking-wide translate-y-0.5">收到新的訂單</div>
    <div v-click class="w-full h-1px bg-white/50"></div>
    <code v-after class="text-purple align-center">on</code>
  </div>

  <div v-click class="text-2xl text-sky font-semibold tracking-wide">工作流程 ( Workflows )</div>
  <div v-click class="i-heroicons:arrow-right-16-solid text-xl op70"></div>
  <div class="grid grid-cols-[max-content_auto_min-content] items-center gap-2 text-xl">
    <div v-after class="tracking-wide translate-y-0.5">生產線</div>
    <div v-click class="w-full h-1px bg-white/50"></div>
    <code v-after class="text-sky align-center">.github/workflows/xxx.yml</code>
  </div>

  <div v-click class="text-2xl text-green font-semibold tracking-wide">任務 ( Jobs )</div>
  <div v-click class="i-heroicons:arrow-right-16-solid text-xl op70"></div>
  <div class="grid grid-cols-[max-content_auto_min-content] items-center gap-2 text-xl">
    <div v-after class="tracking-wide translate-y-0.5">加工原料、<span v-mark.circle.yellow.op80="{ at: 11, roughness: 1 }">包裝</span>、品質檢測 ...</div>
    <div v-click class="w-full h-1px bg-white/50"></div>
    <code v-after class="text-green align-center">jobs</code>
  </div>

  <div v-click class="text-2xl text-amber font-semibold tracking-wide">步驟 ( Steps )</div>
  <div v-click="12" class="i-heroicons:arrow-right-16-solid text-xl op70"></div>
  <div class="grid grid-cols-[max-content_auto_min-content] items-center gap-2 text-xl">
    <div v-click="12" class="tracking-wide translate-y-0.5">放入包裝盒、封箱、貼標籤 ...</div>
    <div v-click="12" class="w-full h-1px bg-white/50"></div>
    <code v-click="12" class="text-amber align-center">steps</code>
  </div>
</div>

<!--
簡報最後，我們來理解一下 GitHub Actions 的基本架構，其實整個工作流程，就像一間工廠靠著產線在生產產品一樣一樣：

[click] 「觸發事件 Events」就像是 [click] 一個工廠"收到新的訂單"，<br>
在腳本中的關鍵字是 [click]  `on`，這個可以先記一下。

[click] 「工作流程 Workflows」 代表 [click] "生產線"，這個生產線是放在專案中的 [click] `.github/workflows` 目錄下，另外提一下，在一個工廠裡面可以不只有一條生產線，所以其實我們可以有很多個"工作流程"。

[click] 再來「任務」是生產線上的每道關卡，[click] 例如"加工原料"、"包裝"、"品質檢測"...等等，它的關鍵字是 [click] `jobs`。<br>
在同一個產線，也就是工作流程中，可以有一個或多個任務，它們可以是併行的，也可以依序執行，而且每個任務都可以有自己的"獨立環境"進行工作，以最基本 GitHub 官方提供的環境來說，我們可以免費使用 Linux 的 Ubuntu，還有 Windows 和 macOS 可以使用。
> - [Workflow syntax - jobs](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobs)
> - [Workflow syntax - Standard GitHub-hosted runners for public repositories](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax?actionType=assigned&versionId=free-pro-team%40latest#choosing-github-hosted-runners)

[click] 最後是「步驟」，是在上一個"任務"中要按照順序執行的細項，[click] 以"包裝"這個任務來說，[click] 像是"將產品放入包裝盒"、"封箱"、"貼標籤"...等等，它的關鍵字是 `steps`。<br>
在步驟裡面，我們可以自己用 shell 指令完成一些事情，也可以用 GitHub 官方或第三方提供的 actions 來幫我們達成一些常見的功能，這個在後面我們直接實作會更有概念。
-->

---
layout: center
---

<h2 class="text-center font-bold tracking-wide">
  實作環節
</h2>

<!--
進入實作環節，讓我們體驗一下 GitHub Actions 是怎麼運作的。
-->
