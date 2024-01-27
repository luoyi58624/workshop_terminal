import{ae as V,b as W,C as $,d as U,a5 as q,e as K,K as G,L as Q,O as X,u as Y,n as P,g as Z,o as ee,r as k,c as te,w as M,a as re,t as ne,m as oe,af as ie,ag as se,ah as ae,ai as le}from"./vue.1706344741460.js";import{E as ue}from"./element-plus.1706344741460.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const v={xs:0,sm:540,md:768,lg:1024,xl:1280,"2xl":1440},ce="sm",fe=V("breakpoint",{state:()=>({name:"",width:0,height:0,mobile:!1,xs:!1,sm:!1,md:!1,lg:!1,xl:!1}),actions:{initBreakpoint(){const e=()=>{this.$reset(),this.width=window.innerWidth,this.height=window.innerHeight,this.mobile=this.width<=v[ce],this.width<=v.sm?(this.xs=!0,this.name="xs"):this.width<=v.md?(this.sm=!0,this.name="sm"):this.width<=v.lg?(this.md=!0,this.name="md"):this.width<=v.xl?(this.lg=!0,this.name="lg"):(this.xl=!0,this.name="xl")};e(),W(()=>{window.addEventListener("resize",e)}),$(()=>{window.removeEventListener("resize",e)})}}}),de=U({__name:"App",setup(e){return fe().initBreakpoint(),(r,s)=>{const n=q("router-view"),o=ue;return K(),G(o,null,{default:Q(()=>[X(n)]),_:1})}}}),pe="modulepreload",me=function(e){return"/workshop_terminal/"+e},F={},b=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");n=Promise.all(r.map(a=>{if(a=me(a),a in F)return;F[a]=!0;const f=a.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!s)for(let l=o.length-1;l>=0;l--){const d=o[l];if(d.href===a&&(!f||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${h}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":pe,f||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),f)return new Promise((l,d)=>{u.addEventListener("load",l),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};function he(e){return Z()?(ee(e),!0):!1}function N(e){return typeof e=="function"?e():Y(e)}const we=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ge=Object.prototype.toString,ye=e=>ge.call(e)==="[object Object]",_e=()=>{};function ve(e,t){function r(...s){return new Promise((n,o)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(n).catch(o)})}return r}const j=e=>e();function be(e=j){const t=k(!0);function r(){t.value=!1}function s(){t.value=!0}const n=(...o)=>{t.value&&e(...o)};return{isActive:te(t),pause:r,resume:s,eventFilter:n}}function Se(e){return e||re()}function Ee(e,t,r={}){const{eventFilter:s=j,...n}=r;return M(e,ve(s,t),n)}function Oe(e,t,r={}){const{eventFilter:s,...n}=r,{eventFilter:o,pause:a,resume:f,isActive:h}=be(s);return{stop:Ee(e,t,{...n,eventFilter:o}),pause:a,resume:f,isActive:h}}function Ae(e,t=!0,r){Se()?W(e,r):t?e():P(e)}function Le(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const L=we?window:void 0;function R(...e){let t,r,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,s,n]=e,t=L):[t,r,s,n]=e,!t)return _e;Array.isArray(r)||(r=[r]),Array.isArray(s)||(s=[s]);const o=[],a=()=>{o.forEach(u=>u()),o.length=0},f=(u,l,d,m)=>(u.addEventListener(l,d,m),()=>u.removeEventListener(l,d,m)),h=M(()=>[Le(t),N(n)],([u,l])=>{if(a(),!u)return;const d=ye(l)?{...l}:l;o.push(...r.flatMap(m=>s.map(S=>f(u,m,S,d))))},{immediate:!0,flush:"post"}),p=()=>{h(),a()};return he(p),p}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__",Pe=Ne();function Ne(){return A in O||(O[A]=O[A]||{}),O[A]}function Ce(e,t){return Pe[e]||t}function xe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Te={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},D="vueuse-storage";function Fe(e,t,r,s={}){var n;const{flush:o="pre",deep:a=!0,listenToStorageChanges:f=!0,writeDefaults:h=!0,mergeDefaults:p=!1,shallow:u,window:l=L,eventFilter:d,onError:m=i=>{console.error(i)},initOnMounted:S}=s,w=(u?ne:k)(typeof t=="function"?t():t);if(!r)try{r=Ce("getDefaultStorage",()=>{var i;return(i=L)==null?void 0:i.localStorage})()}catch(i){m(i)}if(!r)return w;const g=N(t),x=xe(g),_=(n=s.serializer)!=null?n:Te[x],{pause:B,resume:T}=Oe(w,()=>I(w.value),{flush:o,deep:a,eventFilter:d});return l&&f&&Ae(()=>{R(l,"storage",E),R(l,D,J),S&&E()}),S||E(),w;function I(i){try{if(i==null)r.removeItem(e);else{const c=_.write(i),y=r.getItem(e);y!==c&&(r.setItem(e,c),l&&l.dispatchEvent(new CustomEvent(D,{detail:{key:e,oldValue:y,newValue:c,storageArea:r}})))}}catch(c){m(c)}}function H(i){const c=i?i.newValue:r.getItem(e);if(c==null)return h&&g!=null&&r.setItem(e,_.write(g)),g;if(!i&&p){const y=_.read(c);return typeof p=="function"?p(y,g):x==="object"&&!Array.isArray(y)?{...g,...y}:y}else return typeof c!="string"?c:_.read(c)}function J(i){E(i.detail)}function E(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){w.value=g;return}if(!(i&&i.key!==e)){B();try{(i==null?void 0:i.newValue)!==_.write(w.value)&&(w.value=H(i))}catch(c){m(c)}finally{i?P(T):T()}}}}}const Re=V("user",()=>{const e=Fe("user_info",{}),t=oe(()=>e.value.id!=null);return{userInfo:e,isLogin:t}}),C=ie({history:se(),routes:[{path:"/:pathMatch(.*)*",component:()=>b(()=>import("./transfer_router.1706344741460.js"),__vite__mapDeps([0,1]))},{path:"/404",name:"NotFound",component:()=>b(()=>import("./not_found.1706344741460.js"),__vite__mapDeps([2,3,1]))},{path:"/login",name:"Login",meta:{title:"登陆车间系统"},component:()=>b(()=>import("./login.1706344741460.js"),__vite__mapDeps([4,1,5]))},{path:"/",name:"Home",meta:{auth:!0},component:()=>b(()=>import("./index.1706344741460.js"),__vite__mapDeps([6,1,3,5]))},{path:"/test",name:"Test",component:()=>b(()=>import("./test.1706344741460.js"),__vite__mapDeps([7,3,1]))}]});C.beforeEach(e=>(e.meta.title!=null?window.document.title=e.meta.title:window.document.title="车间终端报工系统",e.meta.auth==null||!e.meta.auth||Re().isLogin?!0:{name:"Login",query:{redirect:e.fullPath}}));C.afterEach(()=>{});const z=ae(de);z.directive("focus",{beforeMount:e=>{P(()=>{e.focus()})}});z.use(le()).use(C).mount("#app");export{R as a,fe as b,Fe as c,v as d,Re as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/transfer_router.1706344741460.js","js/vue.1706344741460.js","js/not_found.1706344741460.js","js/_plugin-vue_export-helper.1706344741460.js","js/login.1706344741460.js","js/element-plus.1706344741460.js","js/index.1706344741460.js","js/test.1706344741460.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}