var Q=Object.defineProperty;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))$.call(e,t)&&v(o,t,e[t]);if(M)for(var t of M(e))q.call(e,t)&&v(o,t,e[t]);return o};import{j as s,C as z,D as E,i as J,a as g}from"./index.8ee699b6.js";import{aX as P,aG as h,aD as j,aJ as R}from"./vendor.7867cdc7.js";import{u as W,S as X}from"./lists.75b03b28.js";import{f as H,B as K,F as O,a as U}from"./filterConfig.57937b1c.js";import{G as V}from"./GlowToggle.4ec56772.js";import{u as Y}from"./useAppData.dd089d42.js";import{G as Z}from"./Gallery.907e850d.js";import{M as G,C as _,s as c}from"./styles.5fa23290.js";import{L as tt}from"./LoadSpinner.317f053a.js";import{g as et}from"./index.84805d87.js";import{c as T,u as L}from"./categories.1d2baf84.js";import{B as C}from"./Box.09ff57b9.js";import{D as ot,a as st}from"./DialogTitle.eec473bb.js";import{I as at}from"./Close.2c9f91ce.js";import"./TextField.50679dec.js";import"./ButtonBase.976c7cea.js";import"./Popover.1f219849.js";import"./MenuItem.7636004e.js";import"./ToggleGroup.8af3e59a.js";/* empty css               */import"./DialogContext.4177914f.js";const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),lt=o=>rt(o.id)?s(G,b({},o)):s(_,b({},o));function ct({compact:o,content:e,searchQuery:t,searchAll:a,filter:n=nt,onSelect:i}){var u;const l=(u=Y(f=>f[e]))!=null?u:[],[r,d]=h([]),[x,m]=h(!1);return j(()=>d(l),[e]),j(()=>{m(!0);async function f(){if(a)return t?await z(t):l;const p=await E(l,t);return await H(p,n)}setTimeout(async()=>{const p=await f();d(p),m(!1)})},[t,n,a]),l.length&&!x?s(Z,{list:r,component:o?G:lt,onClick:i}):s(tt,{})}var dt=P(ct);const mt=o=>{let e=T;const t=[];return o.forEach(a=>{const n=e[a],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},S=[];function Nt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:a,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=J(),x=!!indexedDB,[m,u]=h(""),f=W(m,500),[p,B]=h(S),D=o||L("(max-width:640px)")||L("(max-height:640px)"),k=R(I=>{const{value:N,name:A}=I.currentTarget.dataset;e(N,A),t==null||t()},[]),F=mt(a),y=et(F);j(()=>B(S),[i,a]),j(()=>{u(""),r&&d()},[a]);const w=a.join();return g(C,{className:"ModelCatalog",sx:c.root,children:[g(C,{sx:c.top,children:[s(ot,{sx:c.title,children:"Model Select"}),s(K,{options:T,selectedIndices:a,setIndex:n}),g(C,{sx:c.searchFilter,children:[g(C,{sx:c.search,children:[x&&s(V,{type:"text",value:"All",checked:r,onClick:d}),s(X,{query:m,onChange:u},w),y&&!r&&s(at,{onClick:l,size:"large",children:s(O,{})})]}),!r&&i&&y&&s(U,{config:y,onChange:B,compact:D},w)]})]}),s(st,{sx:c.content,children:s(dt,{compact:D,searchQuery:f,filter:p,content:F,onSelect:k,searchAll:r})})]})}export{Nt as default};
