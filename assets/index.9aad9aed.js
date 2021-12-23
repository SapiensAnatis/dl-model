var T=Object.defineProperty;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(t,a,o)=>a in t?T(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,k=(t,a)=>{for(var o in a||(a={}))u.call(a,o)&&h(t,o,a[o]);if(d)for(var o of d(a))b.call(a,o)&&h(t,o,a[o]);return t};var f=(t,a)=>{var o={};for(var e in t)u.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&d)for(var e of d(t))a.indexOf(e)<0&&b.call(t,e)&&(o[e]=t[e]);return o};import{ab as x}from"./vendor.1559e0f8.js";import{T as I}from"./TabBar.5f769d41.js";import{C as P}from"./ColorPicker.8c27cb1b.js";import{G as w,T as R,u as y}from"./Gallery.e092a50e.js";import{j as n,a as g,F as W,v as C}from"./index.76c8a7d4.js";import{B as v}from"./Box.67ec6d9e.js";import{U as L,f as $}from"./file2dataURL.79c20493.js";import{B as D}from"./Button.fd03d01b.js";import{a as F,b as G}from"./DialogTitle.12d3b59c.js";import"./ButtonBase.d9c20b1c.js";import"./Popover.2f9af12c.js";import"./createSvgIcon.53d90706.js";import"./ColorButton.ff584ad1.js";const p={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},S=({src:t,value:a,name:o,onClick:e})=>n(v,{sx:p.container,"data-name":o,children:n("img",{src:t,"data-value":a,onClick:e,style:p.image})}),B=({list:t,onClick:a})=>n(w,{style:p.gallery,onClick:a,list:t,component:S}),j={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function z(e){var i=e,{onApply:t,applyLabel:a="Apply"}=i,o=f(i,["onApply","applyLabel"]);const[r,s]=x(""),l=U=>s(U.target.value),c=()=>t(r),m=n(D,{sx:j.button,variant:"contained",onClick:c,children:a});return n(R,k({value:r,onChange:l,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:m,sx:j.input},inputProps:{type:"url"},size:"small"},o))}const A={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function N({onSelect:t}){const a=y(r=>r["background-image"]),o=r=>{const{value:s}=r.target.dataset,l=`img:${s}`;t(l)},e=async r=>{const l=`img:${await $(r[0])}`;t(l)},i=r=>{if(!r)return;const s=`img:${r}`;t(s)};return g(W,{children:[g(v,{sx:A.external,children:[n(L,{onChange:e}),n(z,{onApply:i})]}),n(B,{list:a,onClick:o})]})}function E({onSelect:t}){const a=y(e=>e["background-skybox"]);return n(B,{list:a,onClick:e=>{const{value:i}=e.target.dataset,r=`sky:${i}`;t(r)}})}const H=["Color","Image","Skybox"].map(t=>({name:t})),V={Color:P,Image:N,Skybox:E},_=t=>t.startsWith("sky:")?"Skybox":t.startsWith("img:")?"Image":"Color";function nt({onAfterSelect:t}){var l;const a=_(C.background),[o,e]=x(a),i=c=>{C.background=c,t==null||t()},r=(c,m)=>e(m),s=(l=V[o])!=null?l:()=>null;return g("div",{className:"BackgroundPicker",children:[n(F,{sx:{textAlign:"center"},children:"Choose a background"}),n(I,{value:o,onChange:r,tabs:H}),n(G,{children:n(s,{onSelect:i})})]})}export{nt as default};
