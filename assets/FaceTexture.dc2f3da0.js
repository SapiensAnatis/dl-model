var G=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(a,e,t)=>e in a?G(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,w=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&v(a,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&v(a,t,e[t]);return a},D=(a,e)=>N(a,P(e));import{ab as i,y as j,a8 as q}from"./vendor.1559e0f8.js";import{u as z}from"./useToggleState.e5df3c77.js";import{L as A,u as E,S as R}from"./lists.bf0279c6.js";import{F as W}from"./FacePartSelector.35158dc7.js";import{f as H,c as J,B as K,F as O,a as U}from"./filterConfig.a47a1b50.js";import{u as V,G as X}from"./Gallery.902d8b08.js";import{M as Y,C as Z,c as _,s as n,u as I}from"./styles.bb98d279.js";import{j as s,I as ee,a as g}from"./index.43240ac5.js";import{B as y}from"./Box.7928dc8e.js";import{a as te,b as ae}from"./DialogTitle.3fceafb1.js";import{I as se}from"./Close.6af917e7.js";function oe({compact:a,searchQuery:e,filter:t,content:d,onSelect:r}){var p;const u=(p=V(o=>o[`chara-${d}`]))!=null?p:[],m=u.filter(({id:o})=>!o.endsWith("h")),[h,c]=i([]),[F,f]=i(!1);return j(()=>c(m),[d]),j(()=>{f(!0);async function o(){const l=e?await ee(e):m;return await H(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),u.length&&!F?s(X,{list:h,component:a?Y:Z,onClick:r}):s(A,{})}const C=_.find(({value:a})=>a==="chara").options,re=[],ie=D(w({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function Fe({compact:a,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,u]=i(0),m=(S,x)=>u(x),[h,c]=i(""),F=E(h,500);j(()=>{c("")},[r]);const[f,p]=i(re),[o,l]=i("Both"),[L,M]=z(!0),b=C[r].value==="regular"&&J,B=a||I("(max-width:640px)")||I("(max-height:640px)"),k=q(S=>{const{value:x}=S.currentTarget.dataset;o!=="Eyes"&&e(x,"mouth"),o!=="Mouth"&&e(x,"eye"),t==null||t()},[o]);return g(y,{className:"FaceTexture",sx:n.root,children:[g(y,{sx:ie,children:[s(te,{sx:n.title,children:"Select Texture"}),s(W,{value:o,onClick:l}),s(K,{options:C,selectedIndices:[r],setIndex:m}),g(y,{sx:n.searchFilter,children:[g(y,{sx:n.search,children:[s(R,{query:h,onChange:c,placeholder:d?"Search All":"Search"},r[0]),b&&s(se,{onClick:M,size:"large",children:s(O,{})})]}),L&&b&&s(U,{config:b,onChange:p,compact:B})]})]}),s(ae,{sx:n.content,children:s(oe,{compact:B,searchQuery:F,filter:f,content:C[r].value,onSelect:k})})]})}export{Fe as F};
