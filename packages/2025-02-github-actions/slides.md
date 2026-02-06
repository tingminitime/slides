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

<div flex flex-col gap-4 -translate-y-6>

<img w-20 h-20 mx-auto src="./assets/icon-github-actions.svg" alt="github actions logo" />

<h1 text-2xl tracking-wide font-bold italic>
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
  :initial="{ x: '-50%', y: -30 }"
  :enter="{ x: '-50%', y: -30, transition: { duration: 400 } }"
  :click-1="{x: '-50%', y: -10 }"
  :leave="{ x: '-50%', y: -30 }"
  class="text-center font-semibold text-xl tracking-widest absolute left-1/2"
>
  <span v-mark.green.op50.delay300="{strokeWidth: 3, roughness: 2}">測試</span>
</div>

<div
  v-motion
  v-click="[2]"
  :initial="{ x: '-50%', y: -30 }"
  :enter="{ x: '-50%', y: -30, transition: { duration: 400 } }"
  :click-2="{ x: '-50%', y: -10 }"
  :leave="{ x: '-50%', y: -30 }"
  class="text-center font-semibold text-xl tracking-widest absolute left-1/2"
>
  <span v-mark.gray.op50.delay300="{at: 2, strokeWidth: 3, roughness: 2}">手動部署</span> vs. <span v-mark.cyan.op50.delay600="{at: 2, strokeWidth: 3, roughness: 2}">自動部署</span>
</div>

<div
  v-motion
  v-click="3"
  :initial="{ x: '-50%', y: -30 }"
  :enter="{ x: '-50%', y: -30, transition: { duration: 400 } }"
  :click-3="{ x: '-50%', y: -10 }"
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
transition: slide-left
---

<h2
  transition duration-400
  :class="[
    $clicks === 1 ? '-translate-y-8' : 'translate-y-0',
    $clicks > 1 ? '-translate-x-110 -translate-y-52' : '-translate-x-1/2'
  ]"
  class="text-center font-bold tracking-wide absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
>
  GitHub Actions 的<span text-red>核心</span>概念
</h2>

<div
  v-click
  class="forward:delay-300"
>
  <span class="text-xl font-semibold tracking-wide">
    當
    <span class="inline-block text-yellow"> 某件事 </span>
    發生時，自動執行
    <span class="inline-block text-yellow"> 一連串動作</span>。
  </span>
</div>

<div
  v-motion
  v-click="1"
  class="absolute left-1/2 -translate-x-1/2"
>
  <span class="i-heroicons:arrow-up-16-solid text-xl font-bold text-red">arrow-up</span>
</div>

<!--
剛剛有提到，在正確的"時機"下，讓 actions 自動完成工作，

[click] 這個"時機"

[click] 和"一連串動作"就是 GitHub Actions 的核心概念

Event：開演的鈴聲
Workflow：整個劇本
Job：不同場景
Step：場景中的台詞和動作
Action：可重複使用的演技招式
-->
