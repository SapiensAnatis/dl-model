import{a as l,j as n,F as c,l as B,B as b,v}from"./index.61c1998e.js";import{y as h}from"./vendor.60dd40ff.js";import{u as y}from"./useKey.d9fb48a7.js";import{A as f}from"./Accordion.3d5557f0.js";/* empty css               */import{M as T}from"./ModelIcon.6615b609.js";import{B as C}from"./Button.569c3066.js";import{C as I}from"./Check.8a099f1d.js";import{B as M}from"./Box.28a1b37a.js";import{a as D,b as N}from"./DialogTitle.44b0ff9f.js";import"./useToggleState.366752c0.js";import"./createSvgIcon.02886a0a.js";import"./ButtonBase.d5b80712.js";function k({list:e,label:s,defaultOpen:r=!1,onSelect:i}){return l(f,{disableGutters:!0,defaultOpen:r,className:"BoneChildren",children:[n(c,{children:s}),n(c,{children:e.map(t=>n(p,{target:t,onSelect:i},t.uniqueId))})]})}function p({target:e,onSelect:s}){if(!e)return null;const[r,i]=y();h(()=>{const o=e.addEventListener("AttachmentChanged",i);return()=>e.removeEventListener("AttachmentChanged",o)},[]),h(()=>{e.userData.name||B(e.id).then(o=>{e.userData.name=o==null?void 0:o.name,i()})},[]);const t=e.id,a=e==null?void 0:e.userData.name,x=a!=null?a:t,j=n(T,{modelId:t,alt:a!=null?a:t,className:"ModelTree-icon"}),d=b(e.attachment.list.map(o=>o.parentBone)),g=()=>s(e),u=l(c,{children:[j,n("div",{className:"target-name",children:x}),n(C,{title:"Select",variant:"contained",onClick:g,children:n(I,{})})]});return d.length?l(f,{disableGutters:!0,className:"ModelTree",children:[u,n(c,{children:d.map(o=>n(k,{defaultOpen:d.length===1,label:o,onSelect:s,list:e.attachment[o]}))})]},r):n("div",{className:"ModelTree",children:u},r)}const m={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"20rem",minWidth:"20rem"},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",minHeight:"4rem"},content:{padding:"2rem 1rem",display:"flex",flexDirection:"column",flexWrap:"wrap"}};function U({onSelect:e=console.log,onAfterSelect:s}){const r=v.model,i=t=>{e(t),s==null||s()};return l(M,{sx:m.root,className:"TargetPicker",children:[n(D,{sx:m.title,children:"Select Target"}),n(N,{sx:m.content,children:r.length?r.map(t=>n(p,{target:t,onSelect:i},t.uniqueId)):"No model"})]})}export{U as default};
