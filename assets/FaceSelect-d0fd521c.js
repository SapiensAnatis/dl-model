import{o as c,h as r,O as M,n as S,a as f,p as m}from"./index-43909fc9.js";import{u as B}from"./useKey-6aa4a4c4.js";import{F as E}from"./FacePartSelector-09689c16.js";import{E as I,M as N,i as b,b as T,c as C}from"./MeshMouthSelect-19aa96cf.js";import{a as x,b as L}from"./DialogTitle-9448bc2b.js";function k({eyeTexture:s,eyeIdx:n,mouthTexture:e,mouthIdx:i,...t}){return c("div",{className:"FaceBox",...t,children:[c(I,{texture:s,index:n}),c(N,{texture:e,index:i})]})}function U({target:s,onSelect:n}){const e=s==null?void 0:s.face;if(!e||(e==null?void 0:e.type)!=="uv")return c("h2",{children:"Not Available"});const[i,t]=B();r(()=>{const l=e.addEventListener("change",({propName:a})=>{(a.includes("Base")||a.includes("Texture"))&&t()});return()=>e.removeEventListener("change",l)},[]);const u=M(),[o,d]=S("Both");r(()=>!u&&t(),[o]);const h=l=>{const{index:a}=l.currentTarget.dataset;o!=="Eyes"&&n(a,"mouth"),o!=="Mouth"&&n(a,"eye")},{eyeBaseIdx:v,eyeTexture:y,mouthBaseIdx:p,mouthTexture:F}=e;return c("div",{className:"UvFaceSelect",children:[c(E,{value:o,onClick:d}),c("div",{className:"FaceBoxes",children:b.map(l=>c(k,{eyeTexture:y,eyeIdx:o==="Mouth"?v:l,mouthTexture:F,mouthIdx:o==="Eyes"?p:l,"data-index":l,onClick:h}))},i)]})}function D({target:s,onSelect:n}){var i,t;const e=s==null?void 0:s.face;return(e==null?void 0:e.type)==="meshes"&&c("div",{className:"MeshFaceSelect",children:[((i=e==null?void 0:e.eyeList)==null?void 0:i.length)>0&&c(T,{target:s,onSelect:n}),((t=e==null?void 0:e.mouthList)==null?void 0:t.length)>0&&c(C,{target:s,onSelect:n})]})}const K={uv:U,meshes:D},P={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function q({target:s,onSelect:n,onAfterSelect:e}){var d;const{activeModel:i}=f();s??(s=i);const t=(d=s==null?void 0:s.face)==null?void 0:d.type,u=K[t]??(()=>c(m,{})),o=(...h)=>{n(...h),e==null||e()};return s!=null&&s.face?c("div",{className:"FaceSelect",children:[c(x,{sx:{textAlign:"center"},children:"Face Select"}),c(L,{sx:{padding:"1rem"},children:c(u,{target:s,onSelect:o})})]}):c(m,{children:[c(x,{sx:{textAlign:"center"},children:"Face Select"}),c("div",{style:P,children:"Not available"})]})}export{q as F};
