var z=Object.defineProperty,D=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var U=(t,e,o)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&U(t,o,e[o]);if(w)for(var o of w(e))H.call(e,o)&&U(t,o,e[o]);return t},M=(t,e)=>D(t,N(e));import{ax as n}from"./vendor.9f6163a0.js";import{a as _,g as O}from"./getTexturePath.31e9701b.js";import{B as W}from"./Box.298973f2.js";import{B as X}from"./Button.470bce67.js";const $=1024,s=160;function Z({id:t,uvList:e,onClick:o,part:a}){const h=_(t),[x,d]=e[0].u,[u,v]=e[0].v,l=d-x,m=v-u,k=l*$,y=m*$,b=k/s,p=$/b,i=y/b,R={width:s,height:i,position:"relative",borderRadius:"0.5rem",overflow:"hidden"},g={content:'""',position:"absolute",backgroundImage:`url(${h})`,backgroundSize:`${p}px ${p}px`,width:s,height:i},E=({u:c,v:f})=>{const B=c[1]-c[0]!==l,F=c[0],I=f[0],S=F*p,P=I*p,T=B?(s-i)/2:0;return B?{width:i,height:s,"&::after":M(r({},g),{width:i,height:s,backgroundPosition:`left -${S}px bottom -${P}px`,transform:`rotate(90deg) translate(-${T}px, -${T}px)`,position:"absolute"})}:{width:s,height:i,position:"relative","&::after":M(r({},g),{backgroundPosition:`left -${S}px bottom -${P}px`})}};return n("div",{className:"MeshFaceButton"},e.map((c,f)=>n("div",{style:R,onClick:o,"data-index":f+1,"data-part":a},n(W,{sx:E(c)}))),n(X,{"data-part":a,"data-index":"0",onClick:o,variant:"outlined"},"Remove"))}const q=([t,...e])=>`${t.toUpperCase()}${e.join("")}`;function j({target:t,onSelect:e,part:o}){var d,u;const a=(d=t==null?void 0:t.face)==null?void 0:d[`${o}List`];if(!a)return null;const h=(u=t.userData[`${o}Uv`])!=null?u:O(a);t.userData[`${o}Uv`]=h;const x=v=>{const{index:l,part:m}=v.currentTarget.dataset;e(parseInt(l),m)};return a&&n("div",{className:"MeshPartSelect"},n("h3",null,"Select ",q(o)),n(Z,{id:t.id,uvList:h,onClick:x,part:o}))}const Q=t=>n(j,r({part:"eye"},t)),V=t=>n(j,r({part:"mouth"},t));export{V as M,Q as a};
