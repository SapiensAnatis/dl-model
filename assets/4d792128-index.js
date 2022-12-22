import{h as v,v as B}from"./8524ed34-viewer.js";import{o as n,p as l,h as p}from"./9121d302-jsxRuntime.module.js";import{u as y}from"./70e251a7-useKey.js";import{A as h}from"./abd3a33b-Accordion.js";/* empty css               */import{M as C}from"./6a23e72f-ModelIcon.js";import{a as T}from"./f60cacb5-index.js";import{B as b}from"./7e61fe05-Button.js";import{C as M}from"./d2d312c8-Check.js";import{a as D,b as I}from"./7b2118ae-DialogTitle.js";import{B as N}from"./272a55ce-Box.js";import"./45408441-preload-helper.js";import"./1c81631e-three.js";import"./e27bbfcf-CopyShader.js";import"./91ac8981-ShaderPass.js";import"./b87293a3-Pass.js";import"./042e6b4d-_commonjsHelpers.js";import"./6c499396-useToggleState.js";import"./5c67166c-createSvgIcon.js";import"./8f91ce53-ButtonBase.js";function k({list:e,label:i,defaultOpen:o=!1,onSelect:a}){return n(h,{disableGutters:!0,defaultOpen:o,className:"BoneChildren",children:[n(l,{children:i}),n(l,{children:e.map(t=>n(u,{target:t,onSelect:a},t.uniqueId))})]})}function u({target:e,onSelect:i}){if(!e)return null;const[o,a]=y();p(()=>{const r=e.addEventListener("AttachmentChanged",a);return()=>e.removeEventListener("AttachmentChanged",r)},[]),p(()=>{e.userData.name||T(e.id).then(r=>{e.userData.name=r==null?void 0:r.name,a()})},[]);const t=e.id,c=e==null?void 0:e.userData.name,f=c??t,x=n(C,{modelId:t,alt:c??t,className:"ModelTree-icon"}),m=v(e.attachment.list.map(r=>r.parentBone)),g=()=>i(e),d=n(l,{children:[x,n("div",{className:"target-name",children:f}),n(b,{title:"Select",variant:"contained",onClick:g,children:n(M,{})})]});return m.length?n(h,{disableGutters:!0,className:"ModelTree",children:[d,n(l,{children:m.map(r=>n(k,{defaultOpen:m.length===1,label:r,onSelect:i,list:e.attachment[r]}))})]},o):n("div",{className:"ModelTree",children:d},o)}const s={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"20rem",minWidth:"20rem"},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",minHeight:"4rem"},content:{padding:"2rem 1rem",display:"flex",flexDirection:"column",flexWrap:"wrap"}};function R({onSelect:e=console.log,onAfterSelect:i}){const o=B.model,a=t=>{e(t),i==null||i()};return n(N,{sx:s.root,className:"TargetPicker",children:[n(D,{sx:s.title,children:"Select Target"}),n(I,{sx:s.content,children:o.length?o.map(t=>n(u,{target:t,onSelect:a},t.uniqueId)):"No model"})]})}export{R as default};
