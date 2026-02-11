import{ay as b,o as r,b as g,w as _,g as e,j as s,af as a,e as o,d as n,v as h,x as y,a1 as d,X as c,_ as u,r as p}from"./modules/vue-Bl2l7_5U.js";import{I as w}from"./slidev/center-CiCMe8jC.js";import{u as I,f as k}from"./slidev/context-BAQLIszF.js";import"./index-0rbkrWEB.js";import"./monaco/bundled-types-Cyvq5-7x.js";import"./modules/shiki-CxsFbBJl.js";import"./modules/file-saver-C8QSpN-3.js";const j={class:"space-y-8"},A={class:"w-full max-w-4xl mx-auto"},C={class:"relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"},B={class:"flex items-center justify-between relative z-10"},N={class:"flex flex-col items-center"},P={class:"mb-4 min-h-[80px] flex items-center justify-center"},V={class:"bg-blue-500/20 border-2 border-blue-400/50 rounded-full w-16 h-16 flex items-center justify-center relative"},z={class:"text-xl font-bold text-blue-300 tabular-nums"},D={class:"flex flex-col items-center"},W={class:"flex flex-col items-center"},$={class:"mb-4 min-h-[80px] flex items-center justify-center"},E={class:"mt-6 text-center"},F={__name:"07-watch.md__slidev_174",setup(L){const{$clicksContext:m,$frontmatter:v}=I();m.setup();const x={setup(){const l=p(0);let t=null;return c(()=>{t=setInterval(()=>{l.value=(l.value+1)%6},1e3)}),u(()=>{t&&clearInterval(t)}),{count:l}},template:`
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="count"
    >
      {{ count }}
    </span>
  `},f={setup(){const l=p(0);let t=null;return c(()=>{t=setInterval(()=>{l.value=(l.value+1)%6},1e3)}),u(()=>{t&&clearInterval(t)}),{count:l}},template:`
    <div 
      class="bg-red-500/20 border-2 border-red-400/50 rounded-xl px-4 py-3 relative"
      :class="{ 
        'animate-pulse': count > 4
      }"
    >
      <div 
        class="flex items-center gap-x-2"
        :class="{ 
          'animate-bounce': count > 4
        }"
      >
        <div 
          i-carbon:warning 
          class="text-lg text-red-300"
          :class="{ 
            'animate-ping': count > 4
          }"
        ></div>
        <span 
          class="text-sm font-bold text-red-300"
          v-motion
          :initial="{ scale: 1 }"
          :enter="{ scale: [1, 1.2, 0.9, 1.1, 1], transition: { duration: 600, repeat: Infinity } }"
          v-if="count > 4"
        >
          Alert!
        </span>
        <span 
          class="text-sm font-bold text-red-300"
          v-else
        >
          Alert!
        </span>
      </div>
      <!-- 警告閃爍 -->
      <div 
        class="absolute inset-0 border-2 border-red-400 rounded-xl"
        :class="{ 
          'animate-pulse': count > 4
        }"
      ></div>
    </div>
  `};return(l,t)=>{const i=b("click");return r(),g(w,h(y(d(k)(d(v),173))),{default:_(()=>[e("div",j,[s(" 上方文字說明區塊 "),t[7]||(t[7]=e("div",{class:"text-center"},[e("h2",{class:"text-3xl font-bold mb-4"},"精確的依賴監聽"),e("p",{class:"text-xl text-gray-200"}," Watch 可以明確指定要監聽哪些響應式數據，並在這些數據變化時執行相應的邏輯。 ")],-1)),s(" 下方流程動畫 "),a((r(),o("div",A,[e("div",C,[s(" 流程線 "),t[5]||(t[5]=e("div",{class:"absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 opacity-30"},null,-1)),s(" 動畫波紋 "),t[6]||(t[6]=e("div",{class:"absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 animate-pulse"},null,-1)),e("div",B,[s(" 響應式數據 "),a((r(),o("div",N,[e("div",P,[e("div",V,[e("span",z,[n(x)]),s(" 監聽脈衝 "),t[0]||(t[0]=e("div",{class:"absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"},null,-1))])]),t[1]||(t[1]=e("div",{class:"text-sm text-blue-300 font-medium"},"響應式狀態",-1))])),[[i,2]]),s(" Watch 監聽器 "),a((r(),o("div",D,[...t[2]||(t[2]=[e("div",{class:"mb-4 min-h-[80px] flex items-center justify-center"},[e("div",{class:"bg-purple-500/20 border-2 border-purple-400/50 rounded-xl px-6 py-3 relative overflow-hidden"},[s(" 處理動畫背景 "),e("div",{class:"absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 animate-pulse"}),s(" 處理指示器 "),e("div",{class:"absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"}),e("div",{class:"relative flex items-center gap-x-2"},[e("div",{"i-carbon:view":"",class:"text-lg text-purple-300"}),e("code",{class:"text-lg font-bold text-purple-300"},"watch")])])],-1),e("div",{class:"text-sm text-purple-300 font-medium"},"狀態監聽",-1)])])),[[i,3]]),s(" 執行回調 "),a((r(),o("div",W,[e("div",$,[n(f)]),t[3]||(t[3]=e("div",{class:"text-sm text-red-300 font-medium"},"執行回調",-1))])),[[i,4]])]),s(" 底部流程說明 "),a((r(),o("div",E,[...t[4]||(t[4]=[e("div",{class:"inline-flex items-center gap-x-4 text-sm text-gray-400"},[e("span",null,"數值變化"),e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-purple-400"}),e("span",null,"觸發監聽"),e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-purple-400"}),e("span",null,"執行邏輯")],-1)])])),[[i,5]])])])),[[i,1]])])]),_:1},16)}}};export{F as default};
