import{L as S,u as F,S as N}from"./lists.814958e4.js";import{j as o,a as d,H as G,I as T,v as L,b as M,J as R}from"./index.3aae7855.js";import{ao as $,ab as C,a4 as y}from"./vendor.c152cc4e.js";import{f as E,B as H,F as P,a as q}from"./filterConfig.5d33ed36.js";import{G as z}from"./GlowToggle.5cadcea3.js";import{g as J}from"./index.a235b735.js";import{u as O,G as Q}from"./Gallery.618517cb.js";import{u as I}from"./useToggleState.2affbec2.js";/* empty css               */import{M as V}from"./ModelIcon.b3405257.js";import{B as j}from"./Box.a70eca2f.js";import{a as Y,b as K}from"./DialogTitle.7e1ac713.js";import{I as U}from"./Close.d518c9ec.js";const f={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}},A=[{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"boss",label:"Boss",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],X=e=>{let t=A;const a=[];return e.forEach(c=>{const n=t[c],i=n==null?void 0:n.value;i!==void 0&&(a.push(i),t=n.options)}),a.join("-")},Z={Left:"\u21D0",Right:"\u21D2"},W=({side:e,onClick:t})=>o("div",{className:"WeaponButton-addBtn","data-side":e,onClick:t,children:Z[e]});const _=e=>e.stopPropagation();function ee({id:e,name:t,noIcon:a,onClick:c}){const[n,i]=I(!1),[l,p]=I(!1),v=!a&&o(V,{modelId:e,className:"WeaponButton-icon"}),u=n&&d("div",{className:"WeaponButton-grip",onClick:_,children:[o("input",{type:"checkbox",id:`grip-${e}`,checked:l,onChange:p}),o("label",{htmlFor:`grip-${e}`,children:"Reverse Grip"})]}),m=g=>{g.stopPropagation();const{side:s}=g.currentTarget.dataset;c({side:s,id:e,name:t,reverse:l})};return d("div",{className:"WeaponButton",children:[v,n?d("div",{className:"WeaponButton-add",onClick:i,children:[u,d("div",{className:"WeaponButton-addBtnGroup",children:[o(W,{side:"Left",onClick:m}),o("div",{children:"ADD"}),o(W,{side:"Right",onClick:m})]})]}):o("div",{className:"WeaponButton-name",onClick:i,children:t})]})}const oe=[];function ae({target:e,content:t,searchQuery:a,searchAll:c,filter:n=oe}){var g;const i=(g=O(s=>s[t]))!=null?g:[],[l,p]=C([]),[v,u]=C(!1);y(()=>p(i),[t]),y(()=>{u(!0);async function s(){if(c)return a?await G(a):i;const r=await T(i,a);return await E(r,n)}setTimeout(async()=>{const r=await s();p(r),u(!1)})},[a,n,c]);const m=async({side:s,id:r,name:B,reverse:b})=>{var w;const h=`jWeapon${s[0]}`;if(!(e==null?void 0:e.bones.list.includes(h)))return;const x=await L.loadDLModel(r);x.userData.name=B,b&&(x.rotation.y=Math.PI),(w=e.attachment[h])==null||w.forEach(k=>k.dispose()),e.attach(x,h),x.outline.code=e.outline.code,x.material.code=e.material.code};return i.length&&!v?o(Q,{list:l,component:ee,onClick:m}):o(S,{})}var ne=$(ae);const D=[];function ve({target:e}){const{activeModel:t}=M();e!=null||(e=t);const{indices:a,setIndex:c,showFilter:n,toggleFilter:i,searchAll:l,toggleSearchAll:p}=R(),v=!!indexedDB,[u,m]=C(""),g=F(u,500),[s,r]=C(D),B=X(a),b=J(B);y(()=>r(D),[n,a]),y(()=>{m(""),l&&p()},[a]);const h=a.join();return d(j,{className:"AddWeapon",sx:f.root,children:[d(j,{sx:f.top,children:[o(Y,{sx:f.title,children:"Add Weapon"}),o(H,{options:A,selectedIndices:a,setIndex:c}),d(j,{sx:f.searchFilter,children:[d(j,{sx:f.search,children:[v&&o(z,{type:"text",value:"All",checked:l,onClick:p}),o(N,{query:u,onChange:m},h),b&&!l&&o(U,{onClick:i,size:"large",children:o(P,{})})]}),!l&&n&&b&&o(q,{config:b,onChange:r},h)]})]}),o(K,{sx:f.content,children:o(ne,{target:e,searchQuery:g,filter:s,content:B,searchAll:l})})]})}export{ve as A};
