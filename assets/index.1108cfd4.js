import{ac as W,o as e,y as f,s as S,f as d,p as g,E as O,j as H,ad as V,v as F}from"./index.46bd647f.js";import{L as R,W as L,u as z,S as _}from"./lists.d55c74dc.js";import{S as C}from"./Stretcher.d0cd4212.js";import{a as j,b as Q,T as K}from"./TabBar.9c8a8e9c.js";import{B as A}from"./Button.1cba4c8f.js";/* empty css               */import{h as Y,M as X}from"./ModelIcon.cef5f2c4.js";import{G as B,u as h}from"./Gallery.a86165b1.js";import{s as J,g as Z}from"./aniFunction.f3a03f54.js";import{S as U}from"./Selector.ddff16e2.js";import{u as nn}from"./useKey.0bfb60f6.js";import{U as en,f as tn}from"./file2dataURL.53733038.js";import{u as an}from"./useToggleState.270dc006.js";import{C as on}from"./Check.e7acd9eb.js";import{c as x}from"./createSvgIcon.d129db34.js";import{B as I}from"./Box.c46976c0.js";import{a as cn,b as sn}from"./DialogTitle.23c77994.js";import"./Close.eaf46ce2.js";import"./ButtonBase.4565078c.js";import"./Popover.f5b1c119.js";import"./GlowToggle.67f79d34.js";const ln=n=>n&&new Promise(t=>{new W().load(n,t)}),rn=x(e("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),un=x(e("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),dn=x(e("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");function mn({icon:n="",subIcon:t="",title:o,subtitle:c="",onClick:a,...i}){const s=n&&e("div",{className:"IconButton-icons",children:[e("img",{className:"IconButton-mainIcon",src:n,alt:o,loading:"lazy"}),t&&e("img",{className:"IconButton-subIcon",src:t,alt:t,loading:"lazy"})]}),u=e("div",{className:"IconButton-description",children:[c&&e("h5",{className:"IconButton-subtitle",children:c}),e("h3",{className:"IconButton-title",children:o})]});return e(A,{variant:"outlined",className:"IconButton",onClick:a,startIcon:s,...i,children:u})}function G({icon:n,user:t,name:o,fullName:c=o,subtitle:a="",code:i,onClick:s}){const u=Y(t)?`img/icon/${t}.png`:"",l=n?`img/aniIcon/${n}.png`:u;return e(mn,{icon:l,subIcon:n&&u,title:o,subtitle:a,onClick:s,"data-code":i,"data-name":c})}function pn({icon:n,user:t,code:o,fullName:c,onClick:a}){return e(G,{icon:n,user:t,name:c,code:o,onClick:a})}function hn({query:n,onSelect:t}){const[o,c]=f([]),[a,i]=f(!0);return S(()=>{i(!0),setTimeout(async()=>{const s=await J(n);c(s),i(!1)})},[n]),e("div",{className:"AniSearchResult",children:[e(C,{}),a?e(R,{}):e(B,{list:o,component:pn,onClick:t})]})}const gn=[{label:"Home Screen",name:"home"},{label:"In Quest",name:"quest"},{label:"Weapon Specific",name:"weapon"},{label:"Generic Skills",name:"genericSkill"},{label:"Unique Skills",name:"uniqueSkill"},{label:"Unique Combo",name:"uniqueCombo"},{label:"Unique Force Strike",name:"uniqueFS"},{label:"Unique Victory",name:"uniqueVictory"},{label:"Other Unique",name:"uniqueOther"},{label:"Misc",name:"misc"}];function w({tabs:n,value:t,onChange:o}){return e(Q,{variant:"scrollable",orientation:"vertical",className:"VerticalTabs",value:t,onChange:(a,i)=>o(i),children:n.map(({label:a,name:i})=>e(j,{label:a!=null?a:i,value:i},i))})}const An={minHeight:"3rem"};function q({name:n,code:t,onClick:o,fullName:c,...a}){return e(A,{className:"AniSelect-Btn",variant:"contained","data-code":t,"data-name":c!=null?c:n,onClick:o,sx:An,...a,children:n})}const vn=["Male","Female"];function fn({value:n,onClick:t}){return e(U,{type:"text",options:vn,value:n,onClick:t})}function Sn({onSelect:n}){const{gender:t,setGender:o}=d(a=>a.advAni.home),c=h(a=>a["ani-home"]);return e("div",{className:"HomeAni",children:[e("h3",{className:"HomeAni-groupTitle",children:"Common Animation"}),e("div",{className:"AniSelect-simpleBtns",children:c.common.map(({name:a,code:i})=>e(q,{name:a,code:i,onClick:n,className:"AniSelect-Btn"},a))}),e("hr",{}),e("div",{className:"HomeAni-groupTitle",children:[e("h3",{children:"Gender Specific"}),e(fn,{value:t,onClick:o})]}),e("div",{className:"AniSelect-simpleBtns",children:c[t].map(({name:a,code:i})=>e(q,{name:a,code:i,fullName:`${t} ${a}`,onClick:n,className:"AniSelect-Btn"},a))})]})}function v({list:n,onClick:t}){return e(B,{list:n,component:q,onClick:t})}function yn({onSelect:n}){const t=h(o=>o["ani-quest"]);return e(v,{list:t,onClick:n})}const $=["Long","Close","Rapid"],Cn=$.map(n=>`img/appIcon/gun_${n}.png`);function bn({value:n,onClick:t}){return e(U,{type:"icon",options:$,icons:Cn,labels:$,value:n,onClick:t})}const Nn=L.map(n=>`img/appIcon/weapon_${n}.png`);function b({value:n,onClick:t}){return e(U,{type:"icon",options:L,icons:Nn,value:n,onClick:t})}const kn={Long:"Long Range",Close:"Close Range",Rapid:"Rapid Fire"};function qn({onSelect:n}){const{type:t,setType:o,gunMode:c,setGunMode:a}=d(r=>r.advAni.weapon),i=h(r=>r["ani-weapon"]),s=h(r=>r["ani-gun"]),u=i[t].map(r=>({...r,fullName:`${t} ${r.name}`})),l=s[c].map(r=>({...r,fullName:`${kn[c]} Manacaster ${r.name}`}));return e("div",{className:"WeaponAni",children:[e(b,{value:t,onClick:o}),e(v,{list:u,onClick:n}),t==="Manacaster"&&e(g,{children:[e(bn,{value:c,onClick:a}),e(v,{list:l,onClick:n})]})]})}function $n({onSelect:n}){const{type:t,setType:o}=d(i=>i.advAni.genericSkill),a=h(i=>i["ani-genericSkill"])[t].map(i=>({...i,fullName:`${t} ${i.name}`}));return e("div",{className:"GenericSkills",children:[e(b,{value:t,onClick:o}),e(v,{list:a,onClick:n})]})}function P({list:n,onClick:t}){return e(B,{list:n,component:G,onClick:t})}const Bn=n=>({...n,fullName:`${n.name} Victory`}),Un=n=>({...n,fullName:`${n.name} ${n.subtitle||""} Combo`}),xn=n=>({...n,fullName:`${n.name} ${n.subtitle||""} Force Strike`}),Mn=n=>({...n,fullName:n.subtitle?`${n.subtitle} ${n.name}`:n.name}),Tn={uniqueCombo:Un,uniqueFS:xn,uniqueVictory:Bn,uniqueSkill:Mn};function y({name:n,onSelect:t}){var r,m;const o=`ani-${n}`,c=(r=h(p=>p[o]))!=null?r:{},{setGroupWeaponType:a}=d(p=>p.advAni.groupByWeapon),i=p=>a(n,p),s=d(p=>p.advAni.groupByWeapon[n]);s!=null||i(Object.keys(c)[0]);const u=Tn[n],l=u?(m=c[s])==null?void 0:m.map(u):c[s];return e("div",{className:"AniGroup",children:[e(b,{value:s,onClick:i}),e(P,{list:l,onClick:t},s)]})}function In({onSelect:n}){const t=h(o=>o["ani-misc"]);return e(v,{list:t,onClick:n})}function Ln({expanded:n,user:t,name:o,animations:c,onClick:a,onSelect:i}){return e(g,{children:[e("div",{className:`UniqueAniGroup ${n?"selected":""}`,"data-user":t,onClick:a,children:[e(X,{modelId:t,alt:o}),e("h3",{children:o})]}),n&&e("div",{className:"UniqueAniGroup-details",children:e(v,{list:c,onClick:i})})]})}function Gn({onSelect:n}){const t=h(l=>l["ani-uniqueOther"]),{type:o,setType:c,selected:a,setSelected:i}=d(l=>l.advAni.uniqueOther),s=t[o],u=l=>{const{user:r}=l.currentTarget.dataset;i(r===a?"":r)};return e(g,{children:e("div",{className:"OtherUniqueAni",children:[e(b,{value:o,onClick:c}),e("hr",{}),e("div",{className:"OtherUniqueAni-groups",children:s.map(l=>e(Ln,{expanded:a===l.user,...l,onClick:u,onSelect:n}))})]})})}const wn={home:Sn,quest:yn,weapon:qn,genericSkill:$n,uniqueSkill:n=>e(y,{...n,name:"uniqueSkill"}),uniqueVictory:n=>e(y,{...n,name:"uniqueVictory"}),uniqueFS:n=>e(y,{...n,name:"uniqueFS"}),uniqueCombo:n=>e(y,{...n,name:"uniqueCombo"}),uniqueOther:Gn,misc:In};function Pn({onSelect:n}){var a;const{category:t,setCategory:o}=d(i=>i.advAni),c=(a=wn[t])!=null?a:C;return e("div",{className:"AniSelect-categories",children:[e(w,{tabs:gn,value:t,onChange:o}),e("div",{className:"AniSelect-subCategory",children:e(c,{onSelect:n})})]})}function Dn(){const{source:n,setSource:t,sourceName:o,setSourceName:c}=d(l=>l.personalAni),{inputModel:a}=O(),i=(l,r)=>{c(r),t(l)},s=async()=>{const l=await a();l&&i(...l)};S(()=>{o||setTimeout(async()=>{const l=await H(n);l!=null&&l.id&&c(l.name)})},[n]);const u=["b","w","e"].includes(n==null?void 0:n[0])?`img/icon/${n}.png`:`img/portrait/${n}.png`;return e("div",{className:"PersonalAni-source",children:[n&&e("img",{src:u,alt:n},n),e("div",{children:[e("h3",{children:o}),e(A,{variant:"outlined",onClick:s,children:"Change Source"})]})]})}function En({onSelect:n}){const t=!!indexedDB,{source:o}=d(i=>i.personalAni),[c,a]=f([]);return S(()=>{a([]),setTimeout(async()=>{var u;if(!o)return;const s=((u=V(o))!=null?u:t?await Z(o):[]).map(l=>({...l,user:void 0}));a(s)})},[o]),e(P,{list:c,onClick:n})}function Wn({onSelect:n}){return e("div",{className:"PersonalAnimation",children:[e(Dn,{}),e(En,{onSelect:n})]})}function On({onSelect:n}){const{category:t,setCategory:o}=d(i=>i.extraAni),c=h(i=>i["ani-extra"]),a=Object.keys(c).map(i=>({name:i}));return e("div",{className:"AniSelect-categories",children:[e(w,{tabs:a,value:t,onChange:o}),e("div",{className:"AniSelect-subCategory",children:e(v,{list:c[t],onClick:n})})]})}function Hn({initText:n,onChange:t=c=>{},...o}){const[c,a]=f(n),[i,s]=an(),u=r=>{const{value:m}=r.target;a(m),t(r)},l=r=>{r.keyCode===13&&s()};return S(()=>{a(n)},[n]),i?e(g,{children:[e(A,{title:"Save",onClick:s,children:e(on,{})}),e("input",{value:c,onChange:u,onKeyUp:l,...o})]}):e(g,{children:[e(A,{title:"Edit",onClick:s,children:e(un,{})}),e("div",{...o,children:c})]})}function Vn({list:n,onSelect:t}){const o=a=>{const{value:i}=a.target,{uuid:s}=a.target.dataset,u=n.find(l=>l.uuid===s);u.name=i},c=a=>{const{uuid:i}=a.target.dataset,s=n.findIndex(u=>u.uuid===i);s!==-1&&n.splice(s,1)};return e("div",{className:"AnimationList",children:n==null?void 0:n.map(a=>e(g,{children:[e(Hn,{initText:a.name,onChange:o,className:"AnimationList-aniName","data-uuid":a.uuid}),e(A,{"data-code":`ex:${a.uuid}`,"data-name":a.name,onClick:t,variant:"contained",title:"Select this animation",children:"Select"}),e(A,{"data-uuid":a.uuid,onClick:c,variant:"contained",title:"Delete this animation",children:e(rn,{})})]}))})}function Fn({onSelect:n}){const{userData:t}=F,[o,c]=nn();return S(()=>{const i=t.ani.addEventListener("change",c);return()=>t.ani.removeEventListener("change",i)}),e("div",{className:"UploadedAni",children:[e(en,{title:"Upload fbx files containing animations applied on DL models",label:"Upload Animations",multiple:!0,mimeType:".fbx",onChange:async i=>{const s=Array.from(i),u=await Promise.all(s.map(tn)),r=(await Promise.all(u.map(ln))).flatMap(m=>m.animations);t.ani.push(...r)}}),e(Vn,{list:t.ani,onSelect:n},o)]})}const k={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh",minWidth:"20rem","& svg":{color:"rgba(16, 16, 16, 0.8)"}},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)","& h2":{padding:"0.2rem 1rem"},"& Searchbox":{minWidth:"15rem"}},content:{padding:"0.5rem 1rem",overflowX:"hidden"}};const Rn=[{name:"Adv"},{name:"Personal"},{name:"Extra"},{name:"Upload",icon:e(dn,{}),label:""}],zn={Adv:Pn,Personal:Wn,Extra:On,Upload:Fn};function pe({onSelect:n=()=>{},onAfterSelect:t}){var M;const{category:o,setCategory:c,getCurrentState:a}=d(),i=!!indexedDB,[s,u]=f(""),l=z(s,500),r=(T,N)=>c(N),m=T=>{const{code:N,name:D}=T.currentTarget.dataset,E=a();n(N,D,E),t==null||t()},p=(M=zn[o])!=null?M:C;return e(I,{className:"AniSelect",sx:k.root,children:[e(I,{sx:k.title,children:[e(cn,{children:"Select an Animation"}),i&&e(_,{placeholder:"Search",query:s,onChange:u})]}),s?e(hn,{query:l,onSelect:m}):e(g,{children:[e(K,{value:o,onChange:r,tabs:Rn}),e(sn,{sx:k.content,children:[e(C,{}),e(p,{onSelect:m})]})]})]})}export{pe as default};
