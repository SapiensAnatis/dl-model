import{L as S,u as D,S as F}from"./a9dc416e-lists.js";import{b as N,h as R}from"./850748e7-index.js";import{o as e,g as G,a as B,h as C}from"./9121d302-jsxRuntime.module.js";import{f as L,B as M,F as T,a as j}from"./6060fbc4-filterConfig.js";import{G as $}from"./d65f183e-GlowToggle.js";import{g as E}from"./647a0a28-index.js";import{u as H,G as P}from"./2f5c5a37-Gallery.js";import{u as w}from"./6c499396-useToggleState.js";/* empty css               */import{M as q}from"./6a23e72f-ModelIcon.js";import{b as z,c as O}from"./f60cacb5-index.js";import{v as Q}from"./8524ed34-viewer.js";import{i as V}from"./54296060-initAniSelectState.js";import{B as x}from"./272a55ce-Box.js";import{a as Y,b as J}from"./7b2118ae-DialogTitle.js";import{I as K}from"./7b270a3e-Close.js";const h={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}},W=[{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"boss",label:"Boss",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],U=o=>{let a=W;const n=[];return o.forEach(d=>{const t=a[d],i=t==null?void 0:t.value;i!==void 0&&(n.push(i),a=t.options)}),n.join("-")},X={Left:"⇐",Right:"⇒"},A=({side:o,onClick:a})=>e("div",{className:"WeaponButton-addBtn","data-side":o,onClick:a,children:X[o]});const Z=o=>o.stopPropagation();function _({id:o,name:a,noIcon:n,onClick:d}){const[t,i]=w(!1),[l,p]=w(!1),f=!n&&e(q,{modelId:o,className:"WeaponButton-icon"}),u=t&&e("div",{className:"WeaponButton-grip",onClick:Z,children:[e("input",{type:"checkbox",id:`grip-${o}`,checked:l,onChange:p}),e("label",{htmlFor:`grip-${o}`,children:"Reverse Grip"})]}),g=r=>{r.stopPropagation();const{side:s}=r.currentTarget.dataset;d({side:s,id:o,name:a,reverse:l})};return e("div",{className:"WeaponButton",children:[f,t?e("div",{className:"WeaponButton-add",onClick:i,children:[u,e("div",{className:"WeaponButton-addBtnGroup",children:[e(A,{side:"Left",onClick:g}),e("div",{children:"ADD"}),e(A,{side:"Right",onClick:g})]})]}):e("div",{className:"WeaponButton-name",onClick:i,children:a})]})}const ee=[];function oe({target:o,content:a,searchQuery:n,searchAll:d,filter:t=ee}){const i=H(r=>r[a])??[],[l,p]=B([]),[f,u]=B(!1);return C(()=>p(i),[a]),C(()=>{u(!0);async function r(){if(d)return n?await z(n):i;const s=await O(i,n);return await L(s,t)}setTimeout(async()=>{const s=await r();p(s),u(!1)})},[n,t,d]),f?e(S,{}):e(P,{list:l,component:_,onClick:async({side:r,id:s,name:v,reverse:b})=>{var y;const m=`jWeapon${r[0]}`;if(!(o!=null&&o.bones.list.includes(m)))return;const c=await Q.loadDLModel(s);c.userData.name=v,b&&(c.rotation.y=Math.PI),(y=o.attachment[m])==null||y.forEach(k=>k.dispose()),o.attach(c,m),c.outline.code=o.outline.code,c.material.code=o.material.code,V(c)}})}const ne=G(oe),I=[];function xe({target:o}){const{activeModel:a}=N();o??(o=a);const{indices:n,setIndex:d,showFilter:t,toggleFilter:i,searchAll:l,toggleSearchAll:p}=R(),f=!!indexedDB,[u,g]=B(""),r=D(u,500),[s,v]=B(I),b=U(n),m=E(b);C(()=>v(I),[t,n]),C(()=>{g(""),l&&p()},[n]);const c=n.join();return e(x,{className:"AddWeapon",sx:h.root,children:[e(x,{sx:h.top,children:[e(Y,{sx:h.title,children:"Add Weapon"}),e(M,{options:W,selectedIndices:n,setIndex:d}),e(x,{sx:h.searchFilter,children:[e(x,{sx:h.search,children:[f&&e($,{type:"text",value:"All",checked:l,onClick:p}),e(F,{query:u,onChange:g},c),m&&!l&&e(K,{onClick:i,size:"large",children:e(T,{})})]}),!l&&t&&m&&e(j,{config:m,onChange:v},c)]})]}),e(J,{sx:h.content,children:e(ne,{target:o,searchQuery:r,filter:s,content:b,searchAll:l})})]})}export{xe as A};
