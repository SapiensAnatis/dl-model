import{b as M}from"./850748e7-index.js";import{o as c,h as r,a as f,p as m}from"./9121d302-jsxRuntime.module.js";import{u as S}from"./70e251a7-useKey.js";import{u as B}from"./c13ebfff-useIsMount.js";import{F as E}from"./4e1e9e52-FacePartSelector.js";import{E as b,M as I,i as N,b as T,c as C}from"./f1368859-MeshMouthSelect.js";import"./8524ed34-viewer.js";import{a as x,b as L}from"./7b2118ae-DialogTitle.js";function k({eyeTexture:s,eyeIdx:n,mouthTexture:e,mouthIdx:i,...t}){return c("div",{className:"FaceBox",...t,children:[c(b,{texture:s,index:n}),c(I,{texture:e,index:i})]})}function U({target:s,onSelect:n}){const e=s==null?void 0:s.face;if(!e||(e==null?void 0:e.type)!=="uv")return c("h2",{children:"Not Available"});const[i,t]=S();r(()=>{const l=e.addEventListener("change",({propName:a})=>{(a.includes("Base")||a.includes("Texture"))&&t()});return()=>e.removeEventListener("change",l)},[]);const d=B(),[o,u]=f("Both");r(()=>!d&&t(),[o]);const h=l=>{const{index:a}=l.currentTarget.dataset;o!=="Eyes"&&n(a,"mouth"),o!=="Mouth"&&n(a,"eye")},{eyeBaseIdx:v,eyeTexture:y,mouthBaseIdx:p,mouthTexture:F}=e;return c("div",{className:"UvFaceSelect",children:[c(E,{value:o,onClick:u}),c("div",{className:"FaceBoxes",children:N.map(l=>c(k,{eyeTexture:y,eyeIdx:o==="Mouth"?v:l,mouthTexture:F,mouthIdx:o==="Eyes"?p:l,"data-index":l,onClick:h}))},i)]})}function D({target:s,onSelect:n}){var i,t;const e=s==null?void 0:s.face;return(e==null?void 0:e.type)==="meshes"&&c("div",{className:"MeshFaceSelect",children:[((i=e==null?void 0:e.eyeList)==null?void 0:i.length)>0&&c(T,{target:s,onSelect:n}),((t=e==null?void 0:e.mouthList)==null?void 0:t.length)>0&&c(C,{target:s,onSelect:n})]})}const K={uv:U,meshes:D},P={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function J({target:s,onSelect:n,onAfterSelect:e}){var u;const{activeModel:i}=M();s??(s=i);const t=(u=s==null?void 0:s.face)==null?void 0:u.type,d=K[t]??(()=>c(m,{})),o=(...h)=>{n(...h),e==null||e()};return s!=null&&s.face?c("div",{className:"FaceSelect",children:[c(x,{sx:{textAlign:"center"},children:"Face Select"}),c(L,{sx:{padding:"1rem"},children:c(d,{target:s,onSelect:o})})]}):c(m,{children:[c(x,{sx:{textAlign:"center"},children:"Face Select"}),c("div",{style:P,children:"Not available"})]})}export{J as F};
