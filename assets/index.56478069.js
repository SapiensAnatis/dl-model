import{aw as e,aV as k,aE as h,aA as x}from"./vendor.fe894b4a.js";import{u as S,S as F}from"./lists.8b7a2f8d.js";import{b as N,x as G,y as T,v as L,C as R}from"./index.efc20ae0.js";import{f as M,B as $,F as E,a as P}from"./filterConfig.45758633.js";import{G as H}from"./GlowToggle.82bde0aa.js";import{g as V}from"./index.89b1eb78.js";import{b as q}from"./useAppData.977799ba.js";import{G as z}from"./Gallery.e9fc7a5e.js";import{u as y}from"./useToggleState.f23a187b.js";import{L as O,I as Q}from"./LoadSpinner.a05eea0f.js";import{M as Y}from"./ModelIcon.59ee1480.js";import{B}from"./Box.5574f6c8.js";import{D as J,a as K}from"./DialogTitle.30aca7f1.js";import"./ButtonBase.415db68d.js";import"./Popover.81573183.js";import"./MenuItem.dd1ea573.js";import"./ToggleGroup.7df67400.js";import"./DialogContext.e1e8d0f9.js";const f={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}},w=[{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"boss",label:"Boss",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],U=o=>{let t=w;const i=[];return o.forEach(c=>{const a=t[c],l=a==null?void 0:a.value;l!==void 0&&(i.push(l),t=a.options)}),i.join("-")},X={Left:"\u21D0",Right:"\u21D2"},D=({side:o,onClick:t})=>e("div",{className:"WeaponButton-addBtn","data-side":o,onClick:t},X[o]);const Z=o=>o.stopPropagation();function _({id:o,name:t,noIcon:i,onClick:c}){const[a,l]=y(!1),[d,g]=y(!1),u=!i&&e(Y,{modelId:o,className:"WeaponButton-icon"}),n=a&&e("div",{className:"WeaponButton-grip",onClick:Z},e("input",{type:"checkbox",id:`grip-${o}`,checked:d,onChange:g}),e("label",{htmlFor:`grip-${o}`},"Reverse Grip")),m=p=>{p.stopPropagation();const{side:s}=p.currentTarget.dataset;c({side:s,id:o,name:t,reverse:d})};return e("div",{className:"WeaponButton"},u,a?e("div",{className:"WeaponButton-add",onClick:l},n,e("div",{className:"WeaponButton-addBtnGroup"},e(D,{side:"Left",onClick:m}),e("div",null,"ADD"),e(D,{side:"Right",onClick:m}))):e("div",{className:"WeaponButton-name",onClick:l},t))}const ee=[];function oe({content:o,searchQuery:t,searchAll:i,filter:c=ee}){var p;const a=(p=q(s=>s[o]))!=null?p:[],[l,d]=h([]),[g,u]=h(!1),{activeModel:n}=N();x(()=>d(a),[o]),x(()=>{u(!0);async function s(){if(i)return t?await G(t):a;const r=await T(a,t);return await M(r,c)}setTimeout(async()=>{const r=await s();d(r),u(!1)})},[t,c,i]);const m=async({side:s,id:r,name:b,reverse:A})=>{var j;const C=`jWeapon${s[0]}`;if(!(n==null?void 0:n.bones.list.includes(C)))return;const v=await L.loadDLModel(r);v.userData.name=b,A&&(v.rotation.y=Math.PI),(j=n.attachment[C])==null||j.forEach(W=>W.dispose()),n.attach(v,C),v.outline.code=n.outline.code,v.material.code=n.material.code};return a.length&&!g?e(z,{list:l,component:_,onClick:m}):e(O,null)}var ae=k(oe);const I=[];function Ce(){const{indices:o,setIndex:t,showFilter:i,toggleFilter:c,searchAll:a,toggleSearchAll:l}=R(),d=!!indexedDB,[g,u]=h(""),n=S(g,500),[m,p]=h(I),s=U(o),r=V(s);x(()=>p(I),[i,o]),x(()=>{u(""),a&&l()},[o]);const b=o.join();return e(B,{className:"AddWeapon",sx:f.root},e(B,{sx:f.top},e(J,{sx:f.title},"Add Weapon"),e($,{options:w,selectedIndices:o,setIndex:t}),e(B,{sx:f.searchFilter},e(B,{sx:f.search},d&&e(H,{type:"text",value:"All",checked:a,onClick:l}),e(F,{key:b,query:g,onChange:u}),r&&!a&&e(Q,{onClick:c,size:"large"},e(E,null))),!a&&i&&r&&e(P,{key:b,config:r,onChange:p}))),e(K,{sx:f.content},e(ae,{searchQuery:n,filter:m,content:s,searchAll:a})))}export{Ce as default};
