import{e as n,l as s,_ as u,n as g,S as B,v as y}from"./index.00b83f8a.js";import{u as C}from"./useKey.b885ba99.js";import{A as h}from"./Accordion.1e84627c.js";/* empty css               */import{M as T}from"./ModelIcon.932a98b8.js";import{B as b}from"./Button.dbb1cfea.js";import{C as M}from"./Check.d572a4d6.js";import{a as D,b as I}from"./DialogTitle.7652f36a.js";import{B as N}from"./Box.caa4915b.js";import"./useToggleState.ca36b7c7.js";import"./createSvgIcon.aa810f40.js";import"./ButtonBase.4a10c8a7.js";function k({list:e,label:i,defaultOpen:o=!1,onSelect:l}){return n(h,{disableGutters:!0,defaultOpen:o,className:"BoneChildren",children:[n(s,{children:i}),n(s,{children:e.map(t=>n(p,{target:t,onSelect:l},t.uniqueId))})]})}function p({target:e,onSelect:i}){if(!e)return null;const[o,l]=C();u(()=>{const r=e.addEventListener("AttachmentChanged",l);return()=>e.removeEventListener("AttachmentChanged",r)},[]),u(()=>{e.userData.name||g(e.id).then(r=>{e.userData.name=r==null?void 0:r.name,l()})},[]);const t=e.id,a=e==null?void 0:e.userData.name,f=a!=null?a:t,x=n(T,{modelId:t,alt:a!=null?a:t,className:"ModelTree-icon"}),c=B(e.attachment.list.map(r=>r.parentBone)),v=()=>i(e),m=n(s,{children:[x,n("div",{className:"target-name",children:f}),n(b,{title:"Select",variant:"contained",onClick:v,children:n(M,{})})]});return c.length?n(h,{disableGutters:!0,className:"ModelTree",children:[m,n(s,{children:c.map(r=>n(k,{defaultOpen:c.length===1,label:r,onSelect:i,list:e.attachment[r]}))})]},o):n("div",{className:"ModelTree",children:m},o)}const d={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"20rem",minWidth:"20rem"},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",minHeight:"4rem"},content:{padding:"2rem 1rem",display:"flex",flexDirection:"column",flexWrap:"wrap"}};function O({onSelect:e=console.log,onAfterSelect:i}){const o=y.model,l=t=>{e(t),i==null||i()};return n(N,{sx:d.root,className:"TargetPicker",children:[n(D,{sx:d.title,children:"Select Target"}),n(I,{sx:d.content,children:o.length?o.map(t=>n(p,{target:t,onSelect:l},t.uniqueId)):"No model"})]})}export{O as default};
