import{o,a as g,p as k}from"./jsxRuntime.module-9121d302.js";import{T as y}from"./TabBar-7733b045.js";import{C as x}from"./ColorPicker-9412ec3b.js";import{G as f,T as C,u}from"./Gallery-74b65e41.js";import{B as b}from"./Box-22a79bc4.js";import{U as v,f as B}from"./file2dataURL-3b06e3f2.js";import{B as U}from"./Button-79e361e6.js";import{v as d}from"./viewer-9239d58b.js";import{a as I,b as P}from"./DialogTitle-c13aece2.js";import"./ButtonBase-e35dbca3.js";import"./Popover-9fb2a3a1.js";import"./createSvgIcon-06820ebd.js";import"./preload-helper-45408441.js";import"./ColorButton-27ac9cef.js";import"./index-d7a93f3d.js";import"./_commonjsHelpers-35101cd5.js";import"./compat.module-90d28d8c.js";import"./three-5c1cbd72.js";import"./CopyShader-e27bbfcf.js";import"./ShaderPass-8cbc6b59.js";import"./Pass-4a28857e.js";const m={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},T=({src:t,value:e,name:n,onClick:a})=>o(b,{sx:m.container,"data-name":n,children:o("img",{src:t,"data-value":e,onClick:a,style:m.image})}),h=({list:t,onClick:e})=>o(f,{style:m.gallery,onClick:e,list:t,component:T}),p={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function w({onApply:t,applyLabel:e="Apply",...n}){const[a,l]=g(""),r=c=>l(c.target.value),i=()=>t(a),s=o(U,{sx:p.button,variant:"contained",onClick:i,children:e});return o(C,{value:a,onChange:r,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:s,sx:p.input},inputProps:{type:"url"},size:"small",...n})}const $={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function R({onSelect:t}){const e=u(r=>r["background-image"]),n=r=>{const{value:i}=r.target.dataset,s=`img:${i}`;t(s)},a=async r=>{const s=`img:${await B(r[0])}`;t(s)},l=r=>{if(!r)return;const i=`img:${r}`;t(i)};return o(k,{children:[o(b,{sx:$.external,children:[o(v,{onChange:a}),o(w,{onApply:l})]}),o(h,{list:e,onClick:n})]})}function W({onSelect:t}){const e=u(a=>a["background-skybox"]);return o(h,{list:e,onClick:a=>{const{value:l}=a.target.dataset,r=`sky:${l}`;t(r)}})}const L=["Color","Image","Skybox"].map(t=>({name:t})),D={Color:x,Image:R,Skybox:W},z=t=>t.startsWith("sky:")?"Skybox":t.startsWith("img:")?"Image":"Color";function rt({onAfterSelect:t}){const e=z(d.background),[n,a]=g(e),l=s=>{d.background=s,t==null||t()},r=(s,c)=>a(c),i=D[n]??(()=>null);return o("div",{className:"BackgroundPicker",children:[o(I,{sx:{textAlign:"center"},children:"Choose a background"}),o(y,{value:n,onChange:r,tabs:L}),o(P,{children:o(i,{onSelect:l})})]})}export{rt as default};
