import{X as x,_ as p,ay as w,o,b as V,w as k,g as e,j as s,af as a,e as i,d,v as I,x as C,a1 as v,r as u}from"./modules/vue-Bl2l7_5U.js";import{I as j}from"./slidev/center-CiCMe8jC.js";import{u as D,f as B}from"./slidev/context-BAQLIszF.js";import"./index-0rbkrWEB.js";import"./monaco/bundled-types-Cyvq5-7x.js";import"./modules/shiki-CxsFbBJl.js";import"./modules/file-saver-C8QSpN-3.js";const N={class:"space-y-8 w-[50dvw]"},P={class:"w-full mx-auto"},W={class:"relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"},z={class:"flex items-center justify-between relative z-10"},O={class:"flex flex-col items-center"},R={class:"mb-4 min-h-[80px] flex items-center justify-center"},$={class:"bg-blue-500/20 border-2 border-blue-400/50 rounded-full w-16 h-16 flex items-center justify-center relative"},E={class:"text-xl font-bold text-blue-300 tabular-nums"},L={class:"flex flex-col items-center"},M={class:"flex flex-col items-center"},S={class:"mb-7 min-h-[80px] flex items-center justify-center"},T={class:"bg-green-500/20 border-2 border-green-400/50 rounded-xl px-4 py-3 relative"},U={class:"flex items-center gap-x-3"},X={class:"flex flex-col items-center"},q={class:"bg-green-600/30 rounded-full w-8 h-8 flex items-center justify-center"},A={class:"text-xs font-bold text-green-200 tabular-nums"},F={class:"flex flex-col items-center"},G={class:"bg-blue-600/30 rounded-full w-8 h-8 flex items-center justify-center"},H={class:"text-xs font-bold text-blue-200 tabular-nums"},J={class:"flex flex-col items-center"},K={class:"mb-4 min-h-[80px] flex items-center justify-center"},Q={class:"bg-orange-500/20 border-2 border-orange-400/50 rounded-xl px-4 py-3 relative"},Y={class:"flex flex-col items-center gap-y-1"},Z={class:"text-xs text-orange-300 font-bold text-center"},ee={class:"mt-6 text-center"},de={__name:"07-watch.md__slidev_176",setup(te){const{$clicksContext:m,$frontmatter:f}=D();m.setup();const n=u(0);let c=null;x(()=>{c=setInterval(()=>{n.value=(n.value+1)%6},1500)}),p(()=>{c&&clearInterval(c)});const b={setup(){return{sharedCounter:n}},template:`
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 300 } }"
      :leave="{ scale: 1, transition: { duration: 300 } }"
      :key="sharedCounter"
    >
      {{ sharedCounter }}
    </span>
  `},g={setup(){const r=u(5),t=()=>{r.value=(n.value-1+6)%6};return x(()=>{t();const l=setInterval(t,1500);p(()=>{clearInterval(l)})}),{oldValue:r}},template:`
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.1, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="oldValue"
    >
      {{ oldValue }}
    </span>
  `},_={setup(){return{sharedCounter:n}},template:`
    <span 
      v-motion
      :initial="{ scale: 1 }"
      :enter="{ scale: 1.2, transition: { duration: 200 } }"
      :leave="{ scale: 1, transition: { duration: 200 } }"
      :key="sharedCounter"
    >
      {{ sharedCounter }}
    </span>
  `},h={setup(){const r=u(5),t=u(0),l=()=>{r.value=(n.value-1+6)%6,t.value=n.value};return x(()=>{l();const y=setInterval(l,1500);p(()=>{clearInterval(y)})}),{oldValue:r,newValue:t}},template:`
    <div 
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      :key="oldValue + '-' + newValue"
    >
      {{ oldValue }} → {{ newValue }}
    </div>
  `};return(r,t)=>{const l=w("click");return o(),V(j,I(C(v(B)(v(f),175))),{default:k(()=>[e("div",N,[s(" 上方文字說明區塊 "),t[14]||(t[14]=e("div",{class:"text-center"},[e("h2",{class:"text-3xl font-bold mb-4"},"新、舊狀態訪問"),e("p",{class:"text-xl text-gray-200"}," Watch 在監聽響應式狀態變化時，可以訪問變化前跟變化後的狀態。 ")],-1)),s(" 下方流程動畫 "),a((o(),i("div",P,[e("div",W,[s(" 流程線 "),t[12]||(t[12]=e("div",{class:"absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 via-purple-500 to-orange-400 opacity-30"},null,-1)),s(" 動畫波紋 "),t[13]||(t[13]=e("div",{class:"absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 via-purple-500 to-orange-400 animate-pulse"},null,-1)),e("div",z,[s(" 響應式狀態 "),a((o(),i("div",O,[e("div",R,[e("div",$,[e("span",E,[d(b)]),s(" 脈衝動畫 "),t[0]||(t[0]=e("div",{class:"absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"},null,-1))])]),t[1]||(t[1]=e("div",{class:"text-sm text-blue-300 font-medium"},"響應式狀態",-1))])),[[l,2]]),s(" Watch 監聽器 "),a((o(),i("div",L,[...t[2]||(t[2]=[e("div",{class:"mb-4 min-h-[80px] flex items-center justify-center"},[e("div",{class:"bg-purple-500/20 border-2 border-purple-400/50 rounded-xl px-6 py-3 relative overflow-hidden"},[s(" 處理動畫背景 "),e("div",{class:"absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 animate-pulse"}),s(" 處理指示器 "),e("div",{class:"absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"}),e("div",{class:"relative flex items-center gap-x-2"},[e("div",{"i-carbon:view":"",class:"text-lg text-purple-300"}),e("code",{class:"text-lg font-bold text-purple-300"},"watch")])])],-1),e("div",{class:"text-sm text-purple-300 font-medium"},"狀態監聽",-1)])])),[[l,3]]),s(" 新舊狀態對比 "),a((o(),i("div",M,[e("div",S,[e("div",T,[e("div",U,[s(" 舊狀態 "),e("div",X,[e("div",q,[e("span",A,[d(g)])]),t[3]||(t[3]=e("div",{class:"text-xs text-green-300 mt-1"},"舊",-1))]),s(" 箭頭 "),t[5]||(t[5]=e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-gray-400"},null,-1)),s(" 新狀態 "),e("div",F,[e("div",G,[e("span",H,[d(_)])]),t[4]||(t[4]=e("div",{class:"text-xs text-blue-300 mt-1"},"新",-1))])]),s(" 對比閃爍 "),t[6]||(t[6]=e("div",{class:"absolute inset-0 border-2 border-green-400 rounded-xl animate-pulse"},null,-1))])]),t[7]||(t[7]=e("div",{class:"text-sm text-green-300 font-medium"},"新舊對比",-1))])),[[l,4]]),s(" 觸發回調函式 "),a((o(),i("div",J,[e("div",K,[e("div",Q,[e("div",Y,[t[8]||(t[8]=e("div",{"i-carbon:function":"",class:"text-lg text-orange-300"},null,-1)),e("div",Z,[d(h)])]),s(" 回調閃爍 "),t[9]||(t[9]=e("div",{class:"absolute inset-0 border-2 border-orange-400 rounded-xl animate-pulse"},null,-1))])]),t[10]||(t[10]=e("div",{class:"text-sm text-orange-300 font-medium"},"觸發回調",-1))])),[[l,5]])]),s(" 底部流程說明 "),a((o(),i("div",ee,[...t[11]||(t[11]=[e("div",{class:"inline-flex items-center gap-x-3 text-sm text-gray-400"},[e("span",null,"響應式狀態變化"),e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-blue-400"}),e("span",null,"Watch 監聽"),e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-purple-400"}),e("span",null,"獲取新舊狀態"),e("div",{"i-heroicons:arrow-right-20-solid":"",class:"text-green-400"}),e("span",null,"觸發回調")],-1)])])),[[l,6]])])])),[[l,1]])])]),_:1},16)}}};export{de as default};
