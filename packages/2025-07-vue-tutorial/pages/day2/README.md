# Vue 3 教學 - Day 2

## 課程目標

- 掌握組件開發技巧
- 理解父子組件通訊
- 學習狀態管理基礎

## 課程內容

### 一、組件開發基礎

- 組件的概念與重要性
- `<script setup>` 語法
- 組件的生命週期

### 二、Props 與 Emit

- Props 資料傳遞
- TypeScript 類型定義
- Emit 事件發送
- 雙向資料綁定

### 三、狀態管理

- 本地狀態管理
- Pinia 介紹與使用
- Store 的建立與使用

### 四、生命週期鉤子

- `onMounted`、`onUnmounted`
- `onUpdated`、`onBeforeUpdate`
- 響應式監聽 `watch`、`watchEffect`

### 五、實作練習

- 建立 Todo List 應用
- 組件拆分與重用
- 狀態管理實戰

## 範例組件

### TodoItem.vue

Todo 項目組件，展示：

- Props 接收資料
- Emit 發送事件
- 條件渲染與樣式綁定

## 練習作業

1. 完成 Todo List 功能
2. 新增篩選和排序功能
3. 使用 Pinia 管理全域狀態

## 執行投影片

```bash
npm run dev:day2
```
