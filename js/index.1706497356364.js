import{u as h}from"./store.1706497356364.js";import{d as m,r as v,x as w,a5 as l,e,f as n,h as p,I as k,a7 as g,K as o,L as a,a1 as b,Q as y,u as B,aj as S,O as c,T as C,an as I,M as T}from"./vue.1706497356364.js";import{u as V}from"./App.1706497356364.js";import{_ as d}from"./_plugin-vue_export-helper.1706497356364.js";import"./element-plus.1706497356364.js";const H={class:"flex items-center justify-between"},N={class:"button-group",role:"group"},$=m({__name:"Header",setup(i){const r=S(),t=V(),s=h(),u=v([]);function f(){t.userInfo={},s.activeProcessTask=0,r.replace("/login")}return w(()=>{u.value=[{name:"工件确认",path:"/workpiece_confirm"},{name:"工件接受",path:"/workpiece_accept"},{name:"工件转出",path:"/workpiece_forward"}]}),(R,A)=>{const x=l("router-link");return e(),n("div",H,[p("div",N,[(e(!0),n(k,null,g(B(u),_=>(e(),o(x,{to:_.path,class:"button-group-item"},{default:a(()=>[b(y(_.name),1)]),_:2},1032,["to"]))),256))]),p("button",{class:"ring-btn-info text-primary xs:px-2 xs:py-1 xs:text-xs sm:px-4 sm:py-2 sm:text-sm",onClick:f}," 注 销 ")])}}}),j=d($,[["__scopeId","data-v-546c40d9"]]),D={};function K(i,r){const t=l("router-view");return e(),o(t,null,{default:a(({Component:s})=>[c(C,{name:"route-fade",mode:"out-in"},{default:a(()=>[(e(),o(I,null,[(e(),o(T(s)))],1024))]),_:2},1024)]),_:1})}const L=d(D,[["render",K],["__scopeId","data-v-0c368c20"]]),M={class:"w-screen h-screen p-2 flex flex-col overflow-hidden bg-gradient-to-b from-[#a3d4fd] to-[#4573c1]"},U=m({__name:"index",setup(i){return(r,t)=>(e(),n("div",M,[c(j),c(L)]))}});export{U as default};