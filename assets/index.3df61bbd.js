import{aC as y,aG as L,aD as N}from"./vendor.7867cdc7.js";import{u as T}from"./useKey.331ec04f.js";import{b as A,a as s,F as M,j as a,l as k,J as w,v}from"./index.18c8aea3.js";import{S as F}from"./Stretcher.c0b3e048.js";import{a as I,b as B,A as E}from"./AttachmentSetting.04c6a558.js";import{B as C}from"./Button.a849252a.js";import{B as u}from"./Box.1d2dff0c.js";import{D as G,a as K}from"./DialogTitle.65709124.js";import{S as P}from"./TextField.2f979f8f.js";import{M as $}from"./MenuItem.ddc2bf26.js";/* empty css               */import"./ModelIcon.9fc7595f.js";import"./useToggleState.269650a2.js";import"./Popover.c93dac01.js";import"./ButtonBase.2adcd039.js";import"./ColorButton.9860772e.js";import"./Close.2727597a.js";import"./DialogContext.79bde0b2.js";function q({bone:e,add:l}){var c;const{activeModel:o}=A(),h=(c=o==null?void 0:o.attachment[e])!=null?c:[],r=n=>{n.stopPropagation(),l(e)};return s(I,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[s(M,{children:[a("div",{className:"BoneManager-name",children:e}),a(C,{variant:"contained",className:"BoneManager-add",onClick:r,children:a(B,{})})]}),a(M,{children:h.map(n=>{var i,d;return a(E,{target:n,label:(d=(i=n==null?void 0:n.userData)==null?void 0:i.name)!=null?d:n.id})})})]})}function oe(){var g,f;const{activeModel:e}=A(),[l,o]=T(),{inputModel:h}=k(),r=y(()=>{}),c=["root",...(f=(g=e==null?void 0:e.bones)==null?void 0:g.list)!=null?f:[]],[n,i]=L(c[0]),d=w(e.attachment.list.map(t=>t.parentBone));N(()=>{if(!e)return;r.current();const t=e.addEventListener("AttachmentChanged",o);return r.current=()=>e.removeEventListener("AttachmentChanged",t),r.current},[e]);const b=t=>{i(t.target.value)},p=async(t=n)=>{const j=await h();if(!j)return;const[S,x]=j,m=await v.loadDLModel(S);m.userData.name=x,e.attach(m,t==="root"?void 0:t),m.outline.code=e.outline.code,m.material.code=e.material.code,v.render()},D=()=>p();return s(u,{className:"AttachmentManager",children:[s(u,{className:"AttachmentManager-top",children:[a(G,{children:"Manage Attachments"}),s(u,{className:"AttachmentManager-add",children:[a(P,{onChange:b,value:n,className:"AttachmentManager-select",children:c.map(t=>a($,{value:t,children:t},t))}),a(C,{title:"Add Attachment",variant:"contained",onClick:D,children:a(B,{})})]})]}),s(K,{className:"AttachmentManager-body",children:[a(F,{}),d.map(t=>a(q,{add:p,bone:t},t))]},l)]})}export{oe as default};
