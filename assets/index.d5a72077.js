var _=Object.defineProperty,Q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var z=(e,n,i)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,m=(e,n)=>{for(var i in n||(n={}))D.call(n,i)&&z(e,i,n[i]);if(w)for(var i of w(n))H.call(n,i)&&z(e,i,n[i]);return e},p=(e,n)=>Q(e,K(n));var k=(e,n)=>{var i={};for(var r in e)D.call(e,r)&&n.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&w)for(var r of w(e))n.indexOf(r)<0&&H.call(e,r)&&(i[r]=e[r]);return i};import{ae as Y,j as t,a as u,p as y,d as S,k as g,l as v,H as X,n as J,af as Z,v as ee}from"./index.1535c0ce.js";import{L as ne,W,u as te,S as ie}from"./lists.5acc2258.js";import{S as N}from"./Stretcher.9f20abea.js";import{a as oe,b as ae,T as re}from"./TabBar.bf96b139.js";import{B as b}from"./Button.9d12d4e6.js";/* empty css               */import{h as ce,M as le}from"./ModelIcon.f3cf2bbb.js";import{G as L,u as A}from"./Gallery.f60e5bd5.js";import{s as se,g as de}from"./aniFunction.73506f53.js";import{S as G}from"./Selector.ef26b1b2.js";import{u as ue}from"./useKey.c7fdf498.js";import{U as me,f as pe}from"./file2dataURL.bb2010fd.js";import{u as he}from"./useToggleState.6db2f030.js";import{C as ge}from"./Check.d5bae18d.js";import{c as T}from"./createSvgIcon.b6a9adfd.js";import{B as O}from"./Box.ffac8dbc.js";import{a as fe,b as Ae}from"./DialogTitle.8cc13dc5.js";import"./Close.ec71d757.js";import"./ButtonBase.ec474f31.js";import"./Popover.bf83cc28.js";import"./GlowToggle.2c4a9334.js";const ve=e=>e&&new Promise(n=>{new Y().load(e,n)});var be=T(t("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),xe=T(t("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),ye=T(t("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");function Se(l){var d=l,{icon:e="",subIcon:n="",title:i,subtitle:r="",onClick:o}=d,a=k(d,["icon","subIcon","title","subtitle","onClick"]);const c=e&&u("div",{className:"IconButton-icons",children:[t("img",{className:"IconButton-mainIcon",src:e,alt:i,loading:"lazy"}),n&&t("img",{className:"IconButton-subIcon",src:n,alt:n,loading:"lazy"})]}),s=u("div",{className:"IconButton-description",children:[r&&t("h5",{className:"IconButton-subtitle",children:r}),t("h3",{className:"IconButton-title",children:i})]});return t(b,p(m({variant:"outlined",className:"IconButton",onClick:o,startIcon:c},a),{children:s}))}function j({icon:e,user:n,name:i,fullName:r=i,subtitle:o="",code:a,onClick:l}){const d=ce(n)?`img/icon/${n}.png`:"",c=e?`img/aniIcon/${e}.png`:d;return t(Se,{icon:c,subIcon:e&&d,title:i,subtitle:o,onClick:l,"data-code":a,"data-name":r})}function Ce({icon:e,user:n,code:i,fullName:r,onClick:o}){return t(j,{icon:e,user:n,name:r,code:i,onClick:o})}function we({query:e,onSelect:n}){const[i,r]=y([]),[o,a]=y(!0);return S(()=>{a(!0),setTimeout(async()=>{const l=await se(e);r(l),a(!1)})},[e]),u("div",{className:"AniSearchResult",children:[t(N,{}),o?t(ne,{}):t(L,{list:i,component:Ce,onClick:n})]})}const ke=[{label:"Home Screen",name:"home"},{label:"In Quest",name:"quest"},{label:"Weapon Specific",name:"weapon"},{label:"Generic Skills",name:"genericSkill"},{label:"Unique Skills",name:"uniqueSkill"},{label:"Unique Combo",name:"uniqueCombo"},{label:"Unique Force Strike",name:"uniqueFS"},{label:"Unique Victory",name:"uniqueVictory"},{label:"Other Unique",name:"uniqueOther"},{label:"Misc",name:"misc"}];function E({tabs:e,value:n,onChange:i}){return t(oe,{variant:"scrollable",orientation:"vertical",className:"VerticalTabs",value:n,onChange:(o,a)=>i(a),children:e.map(({label:o,name:a})=>t(ae,{label:o!=null?o:a,value:a},a))})}const Be={minHeight:"3rem"};function $(a){var l=a,{name:e,code:n,onClick:i,fullName:r}=l,o=k(l,["name","code","onClick","fullName"]);return t(b,p(m({className:"AniSelect-Btn",variant:"contained","data-code":n,"data-name":r!=null?r:e,onClick:i,sx:Be},o),{children:e}))}const Ne=["Male","Female"];function qe({value:e,onClick:n}){return t(G,{type:"text",options:Ne,value:e,onClick:n})}function Ue({onSelect:e}){const{gender:n,setGender:i}=g(o=>o.advAni.home),r=A(o=>o["ani-home"]);return u("div",{className:"HomeAni",children:[t("h3",{className:"HomeAni-groupTitle",children:"Common Animation"}),t("div",{className:"AniSelect-simpleBtns",children:r.common.map(({name:o,code:a})=>t($,{name:o,code:a,onClick:e,className:"AniSelect-Btn"},o))}),t("hr",{}),u("div",{className:"HomeAni-groupTitle",children:[t("h3",{children:"Gender Specific"}),t(qe,{value:n,onClick:i})]}),t("div",{className:"AniSelect-simpleBtns",children:r[n].map(({name:o,code:a})=>t($,{name:o,code:a,fullName:`${n} ${o}`,onClick:e,className:"AniSelect-Btn"},o))})]})}function x({list:e,onClick:n}){return t(L,{list:e,component:$,onClick:n})}function Ie({onSelect:e}){const n=A(i=>i["ani-quest"]);return t(x,{list:n,onClick:e})}const M=["Long","Close","Rapid"],$e=M.map(e=>`img/appIcon/gun_${e}.png`);function Me({value:e,onClick:n}){return t(G,{type:"icon",options:M,icons:$e,labels:M,value:e,onClick:n})}const Le=W.map(e=>`img/appIcon/weapon_${e}.png`);function q({value:e,onClick:n}){return t(G,{type:"icon",options:W,icons:Le,value:e,onClick:n})}const Ge={Long:"Long Range",Close:"Close Range",Rapid:"Rapid Fire"};function Te({onSelect:e}){const{type:n,setType:i,gunMode:r,setGunMode:o}=g(s=>s.advAni.weapon),a=A(s=>s["ani-weapon"]),l=A(s=>s["ani-gun"]),d=a[n].map(s=>p(m({},s),{fullName:`${n} ${s.name}`})),c=l[r].map(s=>p(m({},s),{fullName:`${Ge[r]} Manacaster ${s.name}`}));return u("div",{className:"WeaponAni",children:[t(q,{value:n,onClick:i}),t(x,{list:d,onClick:e}),n==="Manacaster"&&u(v,{children:[t(Me,{value:r,onClick:o}),t(x,{list:c,onClick:e})]})]})}function Pe({onSelect:e}){const{type:n,setType:i}=g(a=>a.advAni.genericSkill),o=A(a=>a["ani-genericSkill"])[n].map(a=>p(m({},a),{fullName:`${n} ${a.name}`}));return u("div",{className:"GenericSkills",children:[t(q,{value:n,onClick:i}),t(x,{list:o,onClick:e})]})}function V({list:e,onClick:n}){return t(L,{list:e,component:j,onClick:n})}const ze=e=>p(m({},e),{fullName:`${e.name} Victory`}),De=e=>p(m({},e),{fullName:`${e.name} ${e.subtitle||""} Combo`}),He=e=>p(m({},e),{fullName:`${e.name} ${e.subtitle||""} Force Strike`}),Oe=e=>p(m({},e),{fullName:e.subtitle?`${e.subtitle} ${e.name}`:e.name}),We={uniqueCombo:De,uniqueFS:He,uniqueVictory:ze,uniqueSkill:Oe};function B({name:e,onSelect:n}){var s,f;const i=`ani-${e}`,r=(s=A(h=>h[i]))!=null?s:{},{setGroupWeaponType:o}=g(h=>h.advAni.groupByWeapon),a=h=>o(e,h),l=g(h=>h.advAni.groupByWeapon[e]);l!=null||a(Object.keys(r)[0]);const d=We[e],c=d?(f=r[l])==null?void 0:f.map(d):r[l];return u("div",{className:"AniGroup",children:[t(q,{value:l,onClick:a}),t(V,{list:c,onClick:n},l)]})}function je({onSelect:e}){const n=A(i=>i["ani-misc"]);return t(x,{list:n,onClick:e})}function Ee({expanded:e,user:n,name:i,animations:r,onClick:o,onSelect:a}){return u(v,{children:[u("div",{className:`UniqueAniGroup ${e?"selected":""}`,"data-user":n,onClick:o,children:[t(le,{modelId:n,alt:i}),t("h3",{children:i})]}),e&&t("div",{className:"UniqueAniGroup-details",children:t(x,{list:r,onClick:a})})]})}function Ve({onSelect:e}){const n=A(c=>c["ani-uniqueOther"]),{type:i,setType:r,selected:o,setSelected:a}=g(c=>c.advAni.uniqueOther),l=n[i],d=c=>{const{user:s}=c.currentTarget.dataset;a(s===o?"":s)};return t(v,{children:u("div",{className:"OtherUniqueAni",children:[t(q,{value:i,onClick:r}),t("hr",{}),t("div",{className:"OtherUniqueAni-groups",children:l.map(c=>t(Ee,p(m({expanded:o===c.user},c),{onClick:d,onSelect:e})))})]})})}const Fe={home:Ue,quest:Ie,weapon:Te,genericSkill:Pe,uniqueSkill:e=>t(B,p(m({},e),{name:"uniqueSkill"})),uniqueVictory:e=>t(B,p(m({},e),{name:"uniqueVictory"})),uniqueFS:e=>t(B,p(m({},e),{name:"uniqueFS"})),uniqueCombo:e=>t(B,p(m({},e),{name:"uniqueCombo"})),uniqueOther:Ve,misc:je};function Re({onSelect:e}){var o;const{category:n,setCategory:i}=g(a=>a.advAni),r=(o=Fe[n])!=null?o:N;return u("div",{className:"AniSelect-categories",children:[t(E,{tabs:ke,value:n,onChange:i}),t("div",{className:"AniSelect-subCategory",children:t(r,{onSelect:e})})]})}function _e(){const{source:e,setSource:n,sourceName:i,setSourceName:r}=g(c=>c.personalAni),{inputModel:o}=X(),a=(c,s)=>{r(s),n(c)},l=async()=>{const c=await o();c&&a(...c)};S(()=>{i||setTimeout(async()=>{const c=await J(e);c!=null&&c.id&&r(c.name)})},[e]);const d=["b","w","e"].includes(e==null?void 0:e[0])?`img/icon/${e}.png`:`img/portrait/${e}.png`;return u("div",{className:"PersonalAni-source",children:[e&&t("img",{src:d,alt:e},e),u("div",{children:[t("h3",{children:i}),t(b,{variant:"outlined",onClick:l,children:"Change Source"})]})]})}function Qe({onSelect:e}){const n=!!indexedDB,{source:i}=g(a=>a.personalAni),[r,o]=y([]);return S(()=>{o([]),setTimeout(async()=>{var d;if(!i)return;const l=((d=Z(i))!=null?d:n?await de(i):[]).map(c=>p(m({},c),{user:void 0}));o(l)})},[i]),t(V,{list:r,onClick:e})}function Ke({onSelect:e}){return u("div",{className:"PersonalAnimation",children:[t(_e,{}),t(Qe,{onSelect:e})]})}function Ye({onSelect:e}){const{category:n,setCategory:i}=g(a=>a.extraAni),r=A(a=>a["ani-extra"]),o=Object.keys(r).map(a=>({name:a}));return u("div",{className:"AniSelect-categories",children:[t(E,{tabs:o,value:n,onChange:i}),t("div",{className:"AniSelect-subCategory",children:t(x,{list:r[n],onClick:e})})]})}function Xe(r){var o=r,{initText:e,onChange:n=a=>{}}=o,i=k(o,["initText","onChange"]);const[a,l]=y(e),[d,c]=he(),s=h=>{const{value:C}=h.target;l(C),n(h)},f=h=>{h.keyCode===13&&c()};return S(()=>{l(e)},[e]),d?u(v,{children:[t(b,{title:"Save",onClick:c,children:t(ge,{})}),t("input",m({value:a,onChange:s,onKeyUp:f},i))]}):u(v,{children:[t(b,{title:"Edit",onClick:c,children:t(xe,{})}),t("div",p(m({},i),{children:a}))]})}function Je({list:e,onSelect:n}){const i=o=>{const{value:a}=o.target,{uuid:l}=o.target.dataset,d=e.find(c=>c.uuid===l);d.name=a},r=o=>{const{uuid:a}=o.target.dataset,l=e.findIndex(d=>d.uuid===a);l!==-1&&e.splice(l,1)};return t("div",{className:"AnimationList",children:e==null?void 0:e.map(o=>u(v,{children:[t(Xe,{initText:o.name,onChange:i,className:"AnimationList-aniName","data-uuid":o.uuid}),t(b,{"data-code":`ex:${o.uuid}`,"data-name":o.name,onClick:n,variant:"contained",title:"Select this animation",children:"Select"}),t(b,{"data-uuid":o.uuid,onClick:r,variant:"contained",title:"Delete this animation",children:t(be,{})})]}))})}function Ze({onSelect:e}){const{userData:n}=ee,[i,r]=ue();return S(()=>{const a=n.ani.addEventListener("change",r);return()=>n.ani.removeEventListener("change",a)}),u("div",{className:"UploadedAni",children:[t(me,{title:"Upload fbx files containing animations applied on DL models",label:"Upload Animations",multiple:!0,mimeType:".fbx",onChange:async a=>{const l=Array.from(a),d=await Promise.all(l.map(pe)),s=(await Promise.all(d.map(ve))).flatMap(f=>f.animations);n.ani.push(...s)}}),t(Je,{list:n.ani,onSelect:e},i)]})}const I={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh",minWidth:"20rem","& svg":{color:"rgba(16, 16, 16, 0.8)"}},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)","& h2":{padding:"0.2rem 1rem"},"& Searchbox":{minWidth:"15rem"}},content:{padding:"0.5rem 1rem",overflowX:"hidden"}};const en=[{name:"Adv"},{name:"Personal"},{name:"Extra"},{name:"Upload",icon:t(ye,{}),label:""}],nn={Adv:Re,Personal:Ke,Extra:Ye,Upload:Ze};function kn({onSelect:e=()=>{},onAfterSelect:n}){var C;const{category:i,setCategory:r,getCurrentState:o}=g(),a=!!indexedDB,[l,d]=y(""),c=te(l,500),s=(P,U)=>r(U),f=P=>{const{code:U,name:F}=P.currentTarget.dataset,R=o();e(U,F,R),n==null||n()},h=(C=nn[i])!=null?C:N;return u(O,{className:"AniSelect",sx:I.root,children:[u(O,{sx:I.title,children:[t(fe,{children:"Select an Animation"}),a&&t(ie,{placeholder:"Search",query:l,onChange:d})]}),l?t(we,{query:c,onSelect:f}):u(v,{children:[t(re,{value:i,onChange:s,tabs:en}),u(Ae,{sx:I.content,children:[t(N,{}),t(h,{onSelect:f})]})]})]})}export{kn as default};
