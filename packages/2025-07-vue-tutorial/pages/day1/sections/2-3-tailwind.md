<div class="flex items-center gap-6">
  <div class="w-24">
    <img src="../../day1/assets/01/tailwind-logo.png" alt="Tailwind Logo" class="w-full h-auto" />
  </div>
  
  <div>
    <h1>Tailwind CSS</h1>
    <p class="text-gray-200 pt-2">
      所見即所得，想要什麼樣式就加什麼語法
    </p>
  </div>
</div>

<!--
講了那麼多的 vue 的東西，接下來我們換換口味

稍微提一下最常跟 vue 搭配的 Tailwind

 -->

---

# 為什麼要用 Tailwind？

<div class="flex flex-col gap-4 mt-6">
  <!-- 卡片1 - 所見即所得 -->
  <div class="backdrop-blur-md bg-cyan-600/20 border border-cyan-600/30 p-6 rounded-lg shadow-xl text-white" v-click="1">
    <h4 class="font-bold text-cyan-300 mb-2">👀 所見即所得</h4>
    <p class="text-slate-200">
      在 class 中直接加入想要的樣式後，樣式設定會直接套用到畫面上。
    </p>
  </div>

  <!-- 卡片2 - 不需要命名 -->
  <div class="backdrop-blur-md bg-emerald-600/20 border border-emerald-600/30 p-6 rounded-lg shadow-xl text-white" v-click="2">
    <h4 class="font-bold text-emerald-300 mb-2">🏷️ 不需要命名</h4>
    <p class="text-slate-200">
      不需要為樣式命名，直接使用 tailwind 的樣式名稱即可。
    </p>
  </div>

  <!-- 卡片3 - 模版生態系 -->
  <div class="backdrop-blur-md bg-purple-600/20 border border-purple-600/30 p-6 rounded-lg shadow-xl text-white" v-click="3">
    <h4 class="font-bold text-purple-300 mb-2">🌐 模版生態系</h4>
    <p class="text-slate-200">
      目前市面上有許多模版是使用 tailwind 進行建立的，不僅可以快速使用這些模版，對於小部份客製化來說難度也較低。
    </p>
  </div>
</div>

<!-- 
[click] tailwind 最大的好處就是需要什麼樣式就加入什麼語法，再配和 vite 的熱更新，就可以快速看到更改後的效果

[click] 不需要先想名字，對於前端來說，如果要接手別人的專案，就比較不會遇到 bg-red 其實是 bg-black 這種神奇的寫法，當然硬要這樣寫也是可以額外配置就是了

[click] 再來是模版生態系，目前市面上有許多模版是使用 tailwind 進行建立的，例如 shadcn 這種，也因為他的基底是 tailwind 的，所以如果要做客製化的話，難度也會比較低
 -->

---

### 安裝方式

[官網安裝說明](https://v3.tailwindcss.com/docs/guides/vite#vue)

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">步驟 1：安裝 Tailwind 跟相關套件</h4>

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">步驟 2：設定 tailwind.config.js</h4>

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">步驟 3：設定 style.css</h4>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">步驟 4：運行並測試</h4>

```bash
npm run dev
```

</div>

</div>

<!--
這邊是 tailwind 的安裝方式，基本上就是照著官網的說明來做就可以了

我就不多做說明了

 -->

---

<div class="flex items-center gap-6">
  <div class="w-24">
    <img src="../../day1/assets/01/tailwind-logo.png" alt="Tailwind Logo" class="w-full h-auto" />
  </div>
  
  <div>
    <h1 class="!m-0">Tailwind 基本用法</h1>
  </div>
</div>

<!-- 
接下來我們來看一下 tailwind 的基本用法
 -->

---

## 間距 (Spacing)

<div class="text-gray-200 pt-2 mb-4">控制元素的 margin 和 padding</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">Margin（外邊距）</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">mt-4</code>: margin-top: 1rem (16px)</li>
<li><code class="text-emerald-300">mb-4</code>: margin-bottom: 1rem</li>
<li><code class="text-emerald-300">ml-4</code>: margin-left: 1rem</li>
<li><code class="text-emerald-300">mr-4</code>: margin-right: 1rem</li>
<li><code class="text-emerald-300">m-4</code>: margin: 1rem (四邊)</li>
<li><code class="text-emerald-300">mx-4</code>: margin 左右: 1rem</li>
<li><code class="text-emerald-300">my-4</code>: margin 上下: 1rem</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">Padding（內邊距）</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">pt-4</code>: padding-top: 1rem</li>
<li><code class="text-emerald-300">pb-4</code>: padding-bottom: 1rem</li>
<li><code class="text-emerald-300">pl-4</code>: padding-left: 1rem</li>
<li><code class="text-emerald-300">pr-4</code>: padding-right: 1rem</li>
<li><code class="text-emerald-300">p-4</code>: padding: 1rem (四邊)</li>
<li><code class="text-emerald-300">px-4</code>: padding 左右: 1rem</li>
<li><code class="text-emerald-300">py-4</code>: padding 上下: 1rem</li>
</ul>
</div>

</div>

<!--
首先是關於間距的語法

margin 的話就是 m 開頭，padding 的話就是 p 開頭

數字的部份，tailwind 都是以 4 的倍數去算的

所以如果設計稿上面出現 26.79px 的話，就可以去跟設計師開戰了


 -->

---

## 彈性佈局 (Flexbox)

<div class="text-gray-200 pt-2 mb-4">現代網頁佈局的最佳選擇</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">基本設定</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">flex</code>: display: flex</li>
<li><code class="text-emerald-300">flex-col</code>: flex-direction: column</li>
<li><code class="text-emerald-300">flex-row</code>: flex-direction: row</li>
<li><code class="text-emerald-300">flex-wrap</code>: flex-wrap: wrap</li>
<li><code class="text-emerald-300">flex-nowrap</code>: flex-wrap: nowrap</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">對齊方式</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">justify-center</code>: justify-content: center</li>
<li><code class="text-emerald-300">justify-between</code>: justify-content: space-between</li>
<li><code class="text-emerald-300">justify-around</code>: justify-content: space-around</li>
<li><code class="text-emerald-300">items-center</code>: align-items: center</li>
<li><code class="text-emerald-300">items-start</code>: align-items: flex-start</li>
<li><code class="text-emerald-300">items-end</code>: align-items: flex-end</li>
</ul>
</div>

</div>

<!-- 
再來是關於布局的用法

最常用的應該就是 flex

css 會寫 display: flex，tailwind 的話就是直接寫 flex

對齊方式的話，就是前後加起來

例如 justify-center 就是 justify-content: center

items-center 就是 align-items: center

 -->

---

## 文字 (Typography)

<div class="text-gray-200 pt-2 mb-4">文字大小、粗細和對齊方式</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">文字大小</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">text-xs</code>: font-size: 0.75rem</li>
<li><code class="text-emerald-300">text-sm</code>: font-size: 0.875rem</li>
<li><code class="text-emerald-300">text-base</code>: font-size: 1rem</li>
<li><code class="text-emerald-300">text-lg</code>: font-size: 1.125rem</li>
<li><code class="text-emerald-300">text-xl</code>: font-size: 1.25rem</li>
<li><code class="text-emerald-300">text-2xl</code>: font-size: 1.5rem</li>
<li><code class="text-emerald-300">text-3xl</code>: font-size: 1.875rem</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">文字粗細與對齊</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">font-thin</code>: font-weight: 100</li>
<li><code class="text-emerald-300">font-normal</code>: font-weight: 400</li>
<li><code class="text-emerald-300">font-bold</code>: font-weight: 700</li>
<li><code class="text-emerald-300">text-center</code>: text-align: center</li>
<li><code class="text-emerald-300">text-left</code>: text-align: left</li>
<li><code class="text-emerald-300">text-right</code>: text-align: right</li>
</ul>
</div>

</div>

<!-- 
文字相關的調整，基本上都會使用 text 或 font 前綴

在編輯器上面打 text 或 font 的話，套件也會有相關的提示

 -->

---

## 顏色 (Colors)

<div class="text-gray-200 pt-2 mb-4">文字、背景和邊框顏色設定</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">常用顏色</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">text-red-500</code>: 文字顏色為紅色</li>
<li><code class="text-emerald-300">bg-blue-500</code>: 背景顏色為藍色</li>
<li><code class="text-emerald-300">border-gray-300</code>: 邊框顏色為灰色</li>
<li><code class="text-emerald-300">text-white</code>: 白色文字</li>
<li><code class="text-emerald-300">bg-black</code>: 黑色背景</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">顏色系統</h4>
<div class="text-gray-300 text-sm">
<p class="mb-2">Tailwind 使用數字系統來控制顏色深淺：</p>
<ul class="space-y-1">
<li>50 - 最淺</li>
<li>100, 200, 300... - 漸漸加深</li>
<li>900 - 最深</li>
</ul>
</div>
</div>

</div>

<!-- 
顏色的話，可以直接使用 tailwind 的顏色，例如 text-red-500 就是紅色文字

後面的數字則是代表顏色的深淺，但也不是每個顏色都可以加數字

例如黑色或白色就沒有數字直接使用 text-black 或 text-white 就可以了

另外如果有自定義顏色的話，就可以寫 text-custom-500


 -->

---

## 寬高 (Width & Height)

<div class="text-gray-200 pt-2 mb-4">控制元素的寬度和高度</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">寬度設定</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">w-full</code>: width: 100%</li>
<li><code class="text-emerald-300">w-1/2</code>: width: 50%</li>
<li><code class="text-emerald-300">w-1/3</code>: width: 33.333333%</li>
<li><code class="text-emerald-300">w-1/4</code>: width: 25%</li>
<li><code class="text-emerald-300">max-w-md</code>: max-width: 28rem</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">高度設定</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">h-full</code>: height: 100%</li>
<li><code class="text-emerald-300">h-screen</code>: height: 100vh</li>
<li><code class="text-emerald-300">min-h-screen</code>: min-height: 100vh</li>
<li><code class="text-emerald-300">h-auto</code>: height: auto</li>
</ul>
</div>

</div>

<!-- 
寬高相關的語法，基本上就是 w 或 h 開頭

數字的部份，基本上就是 1/2 或 1/3 或 1/4 這種

如果想要設定最大寬度或最大高度，就可以使用 max-w 或 max-h

這邊的 screen 指的是螢幕的寬度，所以 h-screen 就是螢幕的高度

min-h-screen 則是表示最小高度為螢幕的高度


 -->

---

## 邊框 (Borders)

<div class="text-gray-200 pt-2 mb-4">邊框樣式和圓角設定</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">邊框樣式</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">border</code>: border-width: 1px</li>
<li><code class="text-emerald-300">border-2</code>: border-width: 2px</li>
<li><code class="text-emerald-300">border-solid</code>: border-style: solid</li>
<li><code class="text-emerald-300">border-dashed</code>: border-style: dashed</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">圓角設定</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">rounded</code>: border-radius: 0.25rem</li>
<li><code class="text-emerald-300">rounded-lg</code>: border-radius: 0.5rem</li>
<li><code class="text-emerald-300">rounded-full</code>: border-radius: 9999px</li>
<li><code class="text-emerald-300">rounded-[10px]</code>: border-radius: 10px</li>
</ul>
</div>

</div>

<!-- 
邊框相關的語法，基本上就是 border 開頭

如果邊框有寫顏色的話，要記得先寫 border 再寫 border-color

單寫 border-color 的話，邊框是不會顯示的

圓角則是使用 rounded 加上 md、lg、full 這種

如果沒有剛好的值的話，也可以使用 -[] 的方式自定義

 -->

---

## 響應式設計 (Responsive)

<div class="text-gray-200 pt-2 mb-4">不同螢幕尺寸的樣式控制 <span class="text-blue-400 font-bold text-sm bg-gray-800 px-2 py-1 rounded ml-2">/ 從小到大 /</span></div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">斷點系統</h4>
<ul class="text-gray-300 space-y-1 text-sm">
<li><code class="text-emerald-300">sm:</code>: 640px 以上</li>
<li><code class="text-emerald-300">md:</code>: 768px 以上</li>
<li><code class="text-emerald-300">lg:</code>: 1024px 以上</li>
<li><code class="text-emerald-300">xl:</code>: 1280px 以上</li>
<li><code class="text-emerald-300">2xl:</code>: 1536px 以上</li>
</ul>
</div>

<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-blue-200 mb-3">使用範例</h4>

```html
<!-- 手機版單欄，桌面版雙欄 -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>內容 1</div>
  <div>內容 2</div>
</div>

<!-- 響應式文字大小 -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">響應式標題</h1>
```

</div>

</div>

<!-- 
最後是關於響應式設計的語法

在 tailwind 中，一開始會有點不習慣的部份應該就是由小到大的方式

也就是說先寫手機版再寫平板，最後再寫桌機

在不做任何配置的情況下，tailwind 有預設的斷點

實際的寫法就會像右邊這樣

手機版的時候是一欄，平板以上的話就會是兩欄

當然桌機也在平板以上，所以也會是兩欄

 -->
