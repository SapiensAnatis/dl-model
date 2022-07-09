import{e as c,_ as m,O as M,y as S,b as f,l as x}from"./index.00b83f8a.js";import{u as B}from"./useKey.b885ba99.js";import{F as E}from"./FacePartSelector.0a813f6f.js";import{E as b,M as I,i as N,b as T,c as C}from"./MeshMouthSelect.e57ff268.js";import{a as v,b as L}from"./DialogTitle.7652f36a.js";function k({eyeTexture:s,eyeIdx:n,mouthTexture:e,mouthIdx:l,...i}){return c("div",{className:"FaceBox",...i,children:[c(b,{texture:s,index:n}),c(I,{texture:e,index:l})]})}function U({target:s,onSelect:n}){const e=s==null?void 0:s.face;if(!e||(e==null?void 0:e.type)!=="uv")return c("h2",{children:"Not Available"});const[l,i]=B();m(()=>{const t=e.addEventListener("change",({propName:a})=>{(a.includes("Base")||a.includes("Texture"))&&i()});return()=>e.removeEventListener("change",t)},[]);const h=M(),[o,d]=S("Both");m(()=>!h&&i(),[o]);const u=t=>{const{index:a}=t.currentTarget.dataset;o!=="Eyes"&&n(a,"mouth"),o!=="Mouth"&&n(a,"eye")},{eyeBaseIdx:r,eyeTexture:y,mouthBaseIdx:F,mouthTexture:p}=e;return c("div",{className:"UvFaceSelect",children:[c(E,{value:o,onClick:d}),c("div",{className:"FaceBoxes",children:N.map(t=>c(k,{eyeTexture:y,eyeIdx:o==="Mouth"?r:t,mouthTexture:p,mouthIdx:o==="Eyes"?F:t,"data-index":t,onClick:u}))},l)]})}function D({target:s,onSelect:n}){var l,i;const e=s==null?void 0:s.face;return(e==null?void 0:e.type)==="meshes"&&c("div",{className:"MeshFaceSelect",children:[((l=e==null?void 0:e.eyeList)==null?void 0:l.length)>0&&c(T,{target:s,onSelect:n}),((i=e==null?void 0:e.mouthList)==null?void 0:i.length)>0&&c(C,{target:s,onSelect:n})]})}const K={uv:U,meshes:D},P={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function $({target:s,onSelect:n,onAfterSelect:e}){var d,u;const{activeModel:l}=f();s!=null||(s=l);const i=(d=s==null?void 0:s.face)==null?void 0:d.type,h=(u=K[i])!=null?u:()=>c(x,{}),o=(...r)=>{n(...r),e==null||e()};return s!=null&&s.face?c("div",{className:"FaceSelect",children:[c(v,{sx:{textAlign:"center"},children:"Face Select"}),c(L,{sx:{padding:"1rem"},children:c(h,{target:s,onSelect:o})})]}):c(x,{children:[c(v,{sx:{textAlign:"center"},children:"Face Select"}),c("div",{style:P,children:"Not available"})]})}export{$ as F};
