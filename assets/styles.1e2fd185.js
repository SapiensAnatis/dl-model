import{y as h,R as f,q as v,T as m,o as t,p}from"./index.46bd647f.js";import{j as b,k as I,l as w}from"./ButtonBase.4565078c.js";/* empty css               */function x(e,n,a,r,o){const l=typeof window<"u"&&typeof window.matchMedia<"u",[s,d]=h(()=>o&&l?a(e).matches:r?r(e).matches:n);return w(()=>{let c=!0;if(!l)return;const i=a(e),u=()=>{c&&d(i.matches)};return u(),i.addListener(u),()=>{c=!1,i.removeListener(u)}},[e,a,l]),s}const g=f["useSyncExternalStore"];function y(e,n,a,r){const o=v(()=>n,[n]),l=m(()=>{if(r!==null){const{matches:i}=r(e);return()=>i}return o},[o,e,r]),[s,d]=m(()=>{if(a===null)return[o,()=>()=>{}];const i=a(e);return[()=>i.matches,u=>(i.addListener(u),()=>{i.removeListener(u)})]},[o,a,e]);return g(d,s,l)}function D(e,n={}){const a=b(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:l=r?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:d}=I({name:"MuiUseMediaQuery",props:n,theme:a});let c=typeof e=="function"?e(a):e;return c=c.replace(/^@media( ?)/m,""),(g!==void 0?y:x)(c,o,l,s,d)}const C=e=>`img/portrait/${e}.png`;function M({type:e,...n}){const a=`img/appIcon/weapon_${e}.png`;return e?t("img",{src:a,alt:e,className:"DLIcon WeaponIcon",...n}):t(p,{})}function S({element:e,...n}){const a=`img/appIcon/element_${e}.png`;return e?t("img",{src:a,alt:e,className:"DLIcon ElementIcon",...n}):t(p,{})}function N({rarity:e,style:n={}}){const a=`img/appIcon/card_r${e}.png`;return e?t("img",{src:a,alt:e,className:"DLIcon RarityStars",style:n}):t(p,{})}function Q({id:e,name:n,title:a,rarity:r,element:o,weapon:l,noPortrait:s=!1,onClick:d}){const c=C(e);return t("div",{className:"CharaCard","data-value":e,"data-name":n,"data-element":o,onClick:d,children:[t("div",{className:"CharaCard-title",children:a||" "}),t("div",{className:"CharaCard-name",children:n}),t("div",{className:"CharaCard-modelIcons",children:[t(S,{element:o}),t(M,{type:l})]}),!s&&t("img",{className:"CharaCard-portrait",src:c,alt:n,loading:"lazy"}),t(N,{rarity:r})]})}function $({id:e,name:n,noIcon:a=!1,onClick:r}){const o=`img/icon/${e}.png`,l=!a&&t("img",{src:o,alt:e,className:"ModelButton-icon"});return t("div",{className:"ModelButton","data-value":e,"data-name":n,onClick:r,children:[l,t("div",{className:"ModelButton-name",children:n})]})}const A=[{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"boss",label:"Enemy",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],B={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}};export{Q as C,$ as M,A as c,B as s,D as u};
