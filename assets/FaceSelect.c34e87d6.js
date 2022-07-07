import{e as c,_ as x,O as f,y as B,b as M,l as m}from"./index.ee9ec2a8.js";import{u as S}from"./useKey.17cbab5d.js";import{F as b}from"./FacePartSelector.603b9851.js";import{E,M as I,i as N,b as T,c as C}from"./MeshMouthSelect.e6cc96b6.js";import{a as p,b as L}from"./DialogTitle.0d9874c2.js";function U({eyeTexture:s,eyeIdx:n,mouthTexture:e,mouthIdx:i,...o}){return c("div",{className:"FaceBox",...o,children:[c(E,{texture:s,index:n}),c(I,{texture:e,index:i})]})}function k({target:s,onSelect:n}){const e=s==null?void 0:s.face;if(!e||(e==null?void 0:e.type)!=="uv")return c("h2",{children:"Not Available"});const[i,o]=S();x(()=>{const l=e.addEventListener("change",({propName:a})=>{(a.includes("Base")||a.includes("Texture"))&&o()});return()=>e.removeEventListener("change",l)},[]);const u=f(),[t,d]=B("Both");x(()=>!u&&o(),[t]);const r=l=>{const{index:a}=l.currentTarget.dataset;t!=="Eyes"&&n(a,"mouth"),t!=="Mouth"&&n(a,"eye")},{eyeBaseIdx:h,eyeTexture:y,mouthBaseIdx:v,mouthTexture:F}=e;return c("div",{className:"UvFaceSelect",children:[c(b,{value:t,onClick:d}),c("div",{className:"FaceBoxes",children:N.map(l=>c(U,{eyeTexture:y,eyeIdx:t==="Mouth"?h:l,mouthTexture:F,mouthIdx:t==="Eyes"?v:l,"data-index":l,onClick:r}))},i)]})}function w({target:s,onSelect:n}){var i,o;const e=s==null?void 0:s.face;return(e==null?void 0:e.type)==="meshes"&&c("div",{className:"MeshFaceSelect",children:[((i=e==null?void 0:e.eyeList)==null?void 0:i.length)>0&&c(T,{target:s,onSelect:n}),((o=e==null?void 0:e.mouthList)==null?void 0:o.length)>0&&c(C,{target:s,onSelect:n})]})}const j={uv:k,meshes:w},D={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"large"};function $({target:s,onSelect:n,onAfterSelect:e}){var d,r;const{activeModel:i}=M();s!=null||(s=i);const o=(d=s==null?void 0:s.face)==null?void 0:d.type,u=(r=j[o])!=null?r:()=>c(m,{}),t=(...h)=>{n(...h),e==null||e()};return s!=null&&s.face?c("div",{className:"FaceSelect",children:[c(p,{sx:{textAlign:"center"},children:"Face Select"}),c(L,{sx:{padding:"1rem"},children:c(u,{target:s,onSelect:t})})]}):c(m,{children:[c(p,{sx:{textAlign:"center"},children:"Face Select"}),c("div",{style:D,children:"Not available"})]})}export{$ as F};
