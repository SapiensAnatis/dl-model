var Q=Object.defineProperty;var M=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var D=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))W.call(e,t)&&D(o,t,e[t]);if(M)for(var t of M(e))$.call(e,t)&&D(o,t,e[t]);return o};import{j as s,J as q,K as z,k as E,a as p}from"./index.c7db4231.js";import{ap as J,ab as h,y as C,a8 as K}from"./vendor.5500c094.js";import{L as P,u as R,S as H}from"./lists.ffff92b0.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.cb34acab.js";import{G as Y}from"./GlowToggle.c4084c79.js";import{u as Z,G as _}from"./Gallery.ecff03e5.js";import{M as T,C as tt,c as G,u as k,s as l}from"./styles.6d70ae76.js";import{g as et}from"./index.cad619b5.js";import{B as x}from"./Box.b0fa668c.js";import{a as ot,b as st}from"./DialogTitle.06f6e231.js";import{I as at}from"./Close.392ae451.js";import"./createSvgIcon.103ccf4a.js";import"./ButtonBase.30c24c2c.js";import"./Popover.fcf6d8b4.js";/* empty css               */const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),ct=o=>rt(o.id)?s(T,y({},o)):s(tt,y({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:a,filter:n=nt,onSelect:i}){var u;const c=(u=Z(f=>f[e]))!=null?u:[],[r,d]=h([]),[j,m]=h(!1);return C(()=>d(c),[e]),C(()=>{m(!0);async function f(){if(a)return t?await q(t):c;const g=await z(c,t);return await O(g,n)}setTimeout(async()=>{const g=await f();d(g),m(!1)})},[t,n,a]),c.length&&!j?s(_,{list:r,component:o?T:ct,onClick:i}):s(P,{})}var dt=J(lt);const mt=o=>{let e=G;const t=[];return o.forEach(a=>{const n=e[a],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function Tt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:c,searchAll:r,toggleSearchAll:d}=E(),j=!!indexedDB,[m,u]=h(""),f=R(m,500),[g,B]=h(L),w=o||k("(max-width:640px)")||k("(max-height:640px)"),S=K(I=>{const{value:N,name:A}=I.currentTarget.dataset;e(N,A),t==null||t()},[]),F=mt(a),b=et(F);C(()=>B(L),[i,a]),C(()=>{u(""),r&&d()},[a]);const v=a.join();return p(x,{className:"ModelCatalog",sx:l.root,children:[p(x,{sx:l.top,children:[s(ot,{sx:l.title,children:"Model Select"}),s(U,{options:G,selectedIndices:a,setIndex:n}),p(x,{sx:l.searchFilter,children:[p(x,{sx:l.search,children:[j&&s(Y,{type:"text",value:"All",checked:r,onClick:d,title:"Whether to search all model"}),s(H,{query:m,onChange:u},v),b&&!r&&s(at,{title:"Toggle Filter",onClick:c,size:"large",children:s(V,{})})]}),!r&&i&&b&&s(X,{config:b,onChange:B,compact:w},v)]})]}),s(st,{sx:l.content,children:s(dt,{compact:w,searchQuery:f,filter:g,content:F,onSelect:S,searchAll:r})})]})}export{Tt as default};
