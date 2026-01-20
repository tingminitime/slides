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
  <span v-mark.yellow.op50="{strokeWidth: 3, roughness: 2}">淺入淺出</span>
</h1>

</div>

<!--
今天分享的主題是 GitHub Actions，會說「淺入淺出」是因為今天分享的內容是介紹 GitHub Actions 的基礎概念和簡單實作，希望可以當作大家接觸 DevOps 的敲門磚。
-->

---
transition: slide-left
---

<div
  transition duration-400
  :class="$clicks > 0 ? '-translate-x-40' : 'translate-x-0'"
>

<h2 text-center font-bold>什麼是 GitHub Actions？</h2>

</div>

<div class="absolute right-6 top-1/2 -translate-y-1/2">

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
GitHub Actions 是由 GitHub 提供的一個自動化平台，透過撰寫腳本來執行各種工作流程，通常會在腳本中撰寫建置、測試、部署… 等等的任務，實現持續整合與持續部署，也就是 CI/CD。
-->

---
transition: slide-left
---

## GitHub Actions 的核心概念

---
transition: slide-left
---
