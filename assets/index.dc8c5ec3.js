var $=Object.defineProperty;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var D=(o,t,e)=>t in o?$(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))q.call(t,e)&&D(o,e,t[e]);if(M)for(var e of M(t))z.call(t,e)&&D(o,e,t[e]);return o};import{j as s,I as A,J as E,i as J,a as p}from"./index.cc9465ee.js";import{ao as P,ab as h,a4 as C,a8 as R}from"./vendor.732e1712.js";import{L as W,u as H,S as K}from"./lists.af2aeeb0.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.b8e5d7e1.js";import{G as Y}from"./GlowToggle.7a9f60d7.js";import{u as Z,G as _}from"./Gallery.bfc6f124.js";import{M as G,C as ee,c as I,u as T,s as c}from"./styles.7d045224.js";import{g as te}from"./index.7bcae8b7.js";import{B as j}from"./Box.cc080e8a.js";import{a as oe,b as se}from"./DialogTitle.4d16d1f7.js";import{I as ae}from"./Close.c6f333bf.js";import"./createSvgIcon.4b535758.js";import"./ButtonBase.e1704cde.js";import"./Popover.421e0421.js";import"./MenuItem.869e4909.js";/* empty css               */const ne=[],ie=["w","b"],re=o=>ie.some(t=>o.startsWith(t)),le=o=>re(o.id)?s(G,y({},o)):s(ee,y({},o));function ce({compact:o,content:t,searchQuery:e,searchAll:a,filter:n=ne,onSelect:i}){var u;const l=(u=Z(f=>f[t]))!=null?u:[],[r,d]=h([]),[x,m]=h(!1);return C(()=>d(l),[t]),C(()=>{m(!0);async function f(){if(a)return e?await A(e):l;const g=await E(l,e);return await O(g,n)}setTimeout(async()=>{const g=await f();d(g),m(!1)})},[e,n,a]),l.length&&!x?s(_,{list:r,component:o?G:le,onClick:i}):s(W,{})}var de=P(ce);const me=o=>{let t=I;const e=[];return o.forEach(a=>{const n=t[a],i=n==null?void 0:n.value;i!==void 0&&(e.push(i),t=n.options)}),e.join("-")},L=[];function Ie({compact:o,onSelect:t=()=>{},onAfterSelect:e}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=J(),x=!!indexedDB,[m,u]=h(""),f=H(m,500),[g,B]=h(L),w=o||T("(max-width:640px)")||T("(max-height:640px)"),S=R(k=>{const{value:N,name:Q}=k.currentTarget.dataset;t(N,Q),e==null||e()},[]),F=me(a),b=te(F);C(()=>B(L),[i,a]),C(()=>{u(""),r&&d()},[a]);const v=a.join();return p(j,{className:"ModelCatalog",sx:c.root,children:[p(j,{sx:c.top,children:[s(oe,{sx:c.title,children:"Model Select"}),s(U,{options:I,selectedIndices:a,setIndex:n}),p(j,{sx:c.searchFilter,children:[p(j,{sx:c.search,children:[x&&s(Y,{type:"text",value:"All",checked:r,onClick:d}),s(K,{query:m,onChange:u},v),b&&!r&&s(ae,{onClick:l,size:"large",children:s(V,{})})]}),!r&&i&&b&&s(X,{config:b,onChange:B,compact:w},v)]})]}),s(se,{sx:c.content,children:s(de,{compact:w,searchQuery:f,filter:g,content:F,onSelect:S,searchAll:r})})]})}export{Ie as default};
