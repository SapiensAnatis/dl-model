import{aC as D,aK as L,aD as F}from"./vendor.079a595c.js";import{u as N}from"./FaceSelect.3800e1a1.js";import{b,a as r,F as A,j as a,l as T,J as k,v as M}from"./index.d8f9bdfc.js";import{S as w}from"./Stretcher.1df4767f.js";import{b as P,f as v,A as G}from"./AttachmentSetting.ca10f78d.js";import{B}from"./Button.896b5ebc.js";import{B as p}from"./Box.1edb363b.js";import{a as I,b as E}from"./DialogTitle.16b15c9f.js";import{S as K}from"./Gallery.a7c1295c.js";import{M as $}from"./MenuItem.ef9f3e5d.js";import"./FacePartSelector.46218e5e.js";import"./Selector.d5fcd43c.js";import"./GlowToggle.aebcbde0.js";import"./MeshMouthSelect.3e561e5b.js";import"./lists.71aa002c.js";import"./Popover.0b2027e5.js";import"./ButtonBase.ada2b72b.js";import"./Close.460808e9.js";import"./ModelIcon.db562eed.js";import"./useToggleState.e402c4c6.js";import"./ColorButton.b56ea77a.js";import"./filterConfig.eb7ad3eb.js";import"./FaceTexture.4b2acf1b.js";import"./styles.432c08cf.js";import"./SkipPrevious.6732f71c.js";function q({bone:e,add:l}){var c;const{activeModel:o}=b(),h=(c=o==null?void 0:o.attachment[e])!=null?c:[],s=n=>{n.stopPropagation(),l(e)};return r(P,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[r(A,{children:[a("div",{className:"BoneManager-name",children:e}),a(B,{variant:"contained",className:"BoneManager-add",onClick:s,children:a(v,{})})]}),a(A,{children:h.map(n=>{var i,d;return a(G,{target:n,label:(d=(i=n==null?void 0:n.userData)==null?void 0:i.name)!=null?d:n.id})})})]})}function he(){var f,g;const{activeModel:e}=b(),[l,o]=N(),{inputModel:h}=T(),s=D(()=>{}),c=["root",...(g=(f=e==null?void 0:e.bones)==null?void 0:f.list)!=null?g:[]],[n,i]=L(c[0]),d=k(e.attachment.list.map(t=>t.parentBone));F(()=>{if(!e)return;s.current();const t=e.addEventListener("AttachmentChanged",o);return s.current=()=>e.removeEventListener("AttachmentChanged",t),s.current},[e]);const S=t=>{i(t.target.value)},u=async(t=n)=>{const j=await h();if(!j)return;const[x,y]=j,m=await M.loadDLModel(x);m.userData.name=y,e.attach(m,t==="root"?void 0:t),m.outline.code=e.outline.code,m.material.code=e.material.code,M.render()},C=()=>u();return r(p,{className:"AttachmentManager",children:[r(p,{className:"AttachmentManager-top",children:[a(I,{children:"Manage Attachments"}),r(p,{className:"AttachmentManager-add",children:[a(K,{onChange:S,value:n,className:"AttachmentManager-select",children:c.map(t=>a($,{value:t,children:t},t))}),a(B,{title:"Add Attachment",variant:"contained",onClick:C,children:a(v,{})})]})]}),r(E,{className:"AttachmentManager-body",children:[a(w,{}),d.map(t=>a(q,{add:u,bone:t},t))]},l)]})}export{he as default};
