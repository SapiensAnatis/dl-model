var Q=Object.defineProperty;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))$.call(e,t)&&v(o,t,e[t]);if(M)for(var t of M(e))q.call(e,t)&&v(o,t,e[t]);return o};import{j as s,C as z,D as E,i as J,a as f}from"./index.07cdc799.js";import{aX as P,aG as h,aD as j,aJ as R}from"./vendor.7867cdc7.js";import{u as W,S as X}from"./lists.f8fbb053.js";import{f as H,B as K,F as O,a as U}from"./filterConfig.cb87a838.js";import{G as V}from"./GlowToggle.012c0dfa.js";import{u as Y}from"./useAppData.dd089d42.js";import{G as Z}from"./Gallery.d2a6389d.js";import{M as G,C as _,s as l}from"./styles.7bdab362.js";import{L as tt}from"./LoadSpinner.90cc9e45.js";import{g as et}from"./index.2b039984.js";import{c as T,u as L}from"./categories.8599c83b.js";import{B as C}from"./Box.57c3ddf7.js";import{D as ot,a as st}from"./DialogTitle.767b2c05.js";import{I as at}from"./Close.58cb7edf.js";import"./TextField.b2cb9927.js";import"./ButtonBase.e6ab2cdc.js";import"./Popover.3656a55e.js";import"./MenuItem.337a5aa6.js";import"./ToggleGroup.d1c64465.js";/* empty css               */import"./DialogContext.c552a20e.js";const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),ct=o=>rt(o.id)?s(G,y({},o)):s(_,y({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:a,filter:n=nt,onSelect:i}){var u;const c=(u=Y(p=>p[e]))!=null?u:[],[r,d]=h([]),[x,m]=h(!1);return j(()=>d(c),[e]),j(()=>{m(!0);async function p(){if(a)return t?await z(t):c;const g=await E(c,t);return await H(g,n)}setTimeout(async()=>{const g=await p();d(g),m(!1)})},[t,n,a]),c.length&&!x?s(Z,{list:r,component:o?G:ct,onClick:i}):s(tt,{})}var dt=P(lt);const mt=o=>{let e=T;const t=[];return o.forEach(a=>{const n=e[a],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},S=[];function Nt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:c,searchAll:r,toggleSearchAll:d}=J(),x=!!indexedDB,[m,u]=h(""),p=W(m,500),[g,B]=h(S),D=o||L("(max-width:640px)")||L("(max-height:640px)"),k=R(I=>{const{value:N,name:A}=I.currentTarget.dataset;e(N,A),t==null||t()},[]),F=mt(a),b=et(F);j(()=>B(S),[i,a]),j(()=>{u(""),r&&d()},[a]);const w=a.join();return f(C,{className:"ModelCatalog",sx:l.root,children:[f(C,{sx:l.top,children:[s(ot,{sx:l.title,children:"Model Select"}),s(K,{options:T,selectedIndices:a,setIndex:n}),f(C,{sx:l.searchFilter,children:[f(C,{sx:l.search,children:[x&&s(V,{type:"text",value:"All",checked:r,onClick:d}),s(X,{query:m,onChange:u},w),b&&!r&&s(at,{onClick:c,size:"large",children:s(O,{})})]}),!r&&i&&b&&s(U,{config:b,onChange:B,compact:D},w)]})]}),s(st,{sx:l.content,children:s(dt,{compact:D,searchQuery:p,filter:g,content:F,onSelect:k,searchAll:r})})]})}export{Nt as default};
