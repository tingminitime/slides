# Vue 3 教學課程 - 3 天實戰

## 📚 課程概述

本課程採用模組化設計，分為 3 天進行，每天都有獨立的章節和實作練習。

## 🗂 專案架構

```
vue-tutorial/
├── slides.md                    # 🏠 主要課程總覽 + 完整課程內容
├── pages/                       # 📁 頁面資料夾
│   ├── day1/                   # 第一天：基礎入門
│   │   ├── slides.md           # 第一天投影片主檔
│   │   ├── sections/           # 模組化章節檔案
│   │   │   ├── 01-intro.md     # 課程介紹
│   │   │   ├── 02-environment.md # 開發環境
│   │   │   ├── 03-vue-intro.md # Vue 3 簡介
│   │   │   ├── 04-data-driven.md # 資料驅動
│   │   │   └── 05-practice.md  # 實作練習
│   │   ├── components/         # 範例組件
│   │   │   └── HelloVue.vue    # 基礎組件
│   │   ├── assets/             # 資源檔案
│   │   └── README.md           # 第一天課程說明
│   ├── day2/                   # 第二天：組件開發
│   │   ├── slides.md           # 第二天投影片
│   │   ├── sections/           # 章節檔案 (待建立)
│   │   ├── components/         # 範例組件
│   │   │   └── TodoItem.vue    # Props/Emit 範例
│   │   ├── assets/             # 資源檔案
│   │   └── README.md           # 第二天課程說明
│   └── day3/                   # 第三天：進階實戰
│       ├── slides.md           # 第三天投影片
│       ├── sections/           # 章節檔案 (待建立)
│       ├── components/         # 範例組件
│       │   └── UserProfile.vue # 進階組件範例
│       ├── composables/        # 自定義 Composables
│       │   └── useUser.ts      # 使用者資料處理
│       ├── assets/             # 資源檔案
│       └── README.md           # 第三天課程說明
├── components/                  # 🔧 全域組件
├── styles/                      # 🎨 全域樣式
└── package.json                # 📦 專案設定
```

## 🚀 快速開始

### 執行投影片

```bash
# 課程總覽
npm run dev

# 第一天課程 (獨立運行)
npm run dev:day1

# 第二天課程 (獨立運行)
npm run dev:day2

# 第三天課程 (獨立運行)
npm run dev:day3
```

### 匯出投影片

```bash
# 匯出總覽
npm run export

# 分別匯出各天
npm run export:day1
npm run export:day2
npm run export:day3
```

## 📅 課程規劃

### 🔴 Day 1 - 基礎入門 (6 小時)

- **開發環境建立** (1.5 小時)
  - Node.js 與開發工具安裝
  - Vite + Vue 3 專案建立
  - VS Code 擴充功能設定
- **Vue 3 簡介** (2 小時)

  - Vue 3 新特性介紹
  - Composition API vs Options API
  - 響應式系統原理

- **資料驅動畫面** (2 小時)

  - 模板語法與資料綁定
  - 條件渲染與列表渲染
  - 事件處理與表單綁定

- **實作練習** (0.5 小時)
  - 計數器應用
  - 簡易 Todo List
  - 表單驗證

### 🔵 Day 2 - 組件開發 (6 小時)

- **組件開發基礎**
- **Props 與 Emit 通訊**
- **狀態管理 (Pinia)**
- **生命週期管理**
- **Todo List 實戰**

### 🟢 Day 3 - 進階實戰 (6 小時)

- **Vue Router 路由**
- **Composition API 進階**
- **表單處理與驗證**
- **API 整合**
- **專案實戰**
- **部署與優化**

## 🎯 學習目標

完成本課程後，學員將能夠：

- ✅ 熟練使用 Vue 3 Composition API
- ✅ 建立可重用的 Vue 組件
- ✅ 掌握狀態管理和路由系統
- ✅ 整合外部 API 和處理非同步資料
- ✅ 部署完整的 Vue 3 應用程式

## 🛠 技術棧

- **前端框架**: Vue 3
- **建構工具**: Vite
- **程式語言**: TypeScript
- **狀態管理**: Pinia
- **路由**: Vue Router
- **樣式**: CSS / UnoCSS
- **開發工具**: VS Code + Volar

## 📝 課前準備

1. 安裝 Node.js (v16 或以上)
2. 安裝 VS Code 編輯器
3. 基礎 HTML/CSS/JavaScript 知識
4. 了解 ES6+ 語法更佳

## 👨‍💻 講師資訊

這是一個 Vue 3 實戰教學課程，採用最新的開發實踐和工具鏈。

## 📞 支援

如有問題，歡迎透過以下方式聯繫：

- 課程討論區
- Email 支援
- 即時聊天室

---

**開始你的 Vue 3 學習之旅！** 🚀
