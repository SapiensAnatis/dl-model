var j=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,c,s)=>c in e?j(e,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[c]=s,F=(e,c)=>{for(var s in c||(c={}))y.call(c,s)&&p(e,s,c[s]);if(x)for(var s of x(c))v.call(c,s)&&p(e,s,c[s]);return e},f=(e,c)=>T(e,C(c));var B=(e,c)=>{var s={};for(var n in e)y.call(e,n)&&c.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&x)for(var n of x(e))c.indexOf(n)<0&&v.call(e,n)&&(s[n]=e[n]);return s};import{a as d,j as o,y as S,S as L,m as U,b as k,F as M}from"./index.b0b001f1.js";import{u as w}from"./useKey.7a4b31da.js";import{F as D}from"./FacePartSelector.193f62ba.js";import{E as K,M as P,i as z,b as $,c as q}from"./MeshMouthSelect.378310c4.js";import{a as b,b as A}from"./DialogTitle.c579b153.js";function G(r){var i=r,{eyeTexture:e,eyeIdx:c,mouthTexture:s,mouthIdx:n}=i,t=B(i,["eyeTexture","eyeIdx","mouthTexture","mouthIdx"]);return d("div",f(F({className:"FaceBox"},t),{children:[o(K,{texture:e,index:c}),o(P,{texture:s,index:n})]}))}function H({target:e,onSelect:c}){const s=e==null?void 0:e.face;if(!s||(s==null?void 0:s.type)!=="uv")return o("h2",{children:"Not Available"});const[n,t]=w();S(()=>{const a=s.addEventListener("change",({propName:l})=>{(l.includes("Base")||l.includes("Texture"))&&t()});return()=>s.removeEventListener("change",a)},[]);const r=L(),[i,u]=U("Both");S(()=>!r&&t(),[i]);const h=a=>{const{index:l}=a.currentTarget.dataset;i!=="Eyes"&&c(l,"mouth"),i!=="Mouth"&&c(l,"eye")},{eyeBaseIdx:m,eyeTexture:E,mouthBaseIdx:I,mouthTexture:N}=s;return d("div",{className:"UvFaceSelect",children:[o(D,{value:i,onClick:u}),o("div",{className:"FaceBoxes",children:z.map(a=>o(G,{eyeTexture:E,eyeIdx:i==="Mouth"?m:a,mouthTexture:N,mouthIdx:i==="Eyes"?I:a,"data-index":a,onClick:h}))},n)]})}function J({target:e,onSelect:c}){var n,t;const s=e==null?void 0:e.face;return(s==null?void 0:s.type)==="meshes"&&d("div",{className:"MeshFaceSelect",children:[((n=s==null?void 0:s.eyeList)==null?void 0:n.length)>0&&o($,{target:e,onSelect:c}),((t=s==null?void 0:s.mouthList)==null?void 0:t.length)>0&&o(q,{target:e,onSelect:c})]})}const O={uv:H,meshes:J},Q={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function _({target:e,onSelect:c,onAfterSelect:s}){var u,h;const{activeModel:n}=k();e!=null||(e=n);const t=(u=e==null?void 0:e.face)==null?void 0:u.type,r=(h=O[t])!=null?h:()=>o(M,{}),i=(...m)=>{c(...m),s==null||s()};return e!=null&&e.face?d("div",{className:"FaceSelect",children:[o(b,{sx:{textAlign:"center"},children:"Face Select"}),o(A,{sx:{padding:"1rem"},children:o(r,{target:e,onSelect:i})})]}):d(M,{children:[o(b,{sx:{textAlign:"center"},children:"Face Select"}),o("div",{style:Q,children:"Not available"})]})}export{_ as F};
