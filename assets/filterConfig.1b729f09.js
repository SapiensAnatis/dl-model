var pe=Object.defineProperty,ue=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var J=(e,t,s)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,W=(e,t)=>{for(var s in t||(t={}))ye.call(t,s)&&J(e,s,t[s]);if(q)for(var s of q(t))fe.call(t,s)&&J(e,s,t[s]);return e},K=(e,t)=>ue(e,ge(t));import{a7 as _,ae as U,s as be,al as he,ab as Q,ad as ve,a4 as Ie,y as xe}from"./vendor.10b98a91.js";import{j as c,a as x,F as Z}from"./index.0e96b906.js";import{i as Ce,L as Le,M as Se}from"./Gallery.45903f43.js";import{g as ee,b as V,s as $,a as d,f as D,_ as F,h as z,i as N,v as w,n as Te,u as Ae,B as ke}from"./ButtonBase.a6397c2d.js";import{L as M,i as te}from"./Popover.dcd94175.js";import{l as se,g as Pe,M as Ne}from"./MenuItem.57aee1dc.js";import{T as B}from"./DialogTitle.a1536f90.js";import{B as Me}from"./Box.6816ba85.js";import{G as Re}from"./GlowToggle.02c2bc2f.js";import{c as je}from"./createSvgIcon.33b1de4f.js";import{W as oe,R as ne,E as ae,F as Ee,a as $e}from"./lists.e578e082.js";function Fe(e){return ee("MuiListItem",e)}const we=V("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var A=we;const Be=V("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var Ge=Be;function Oe(e){return ee("MuiListItemSecondaryAction",e)}V("MuiListItemSecondaryAction",["root","disableGutters"]);const We=["className"],_e=e=>{const{disableGutters:t,classes:s}=e;return z({root:["root",t&&"disableGutters"]},Oe,s)},Ue=$("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),re=_(function(t,s){const o=D({props:t,name:"MuiListItemSecondaryAction"}),{className:n}=o,a=F(o,We),r=U(M),l=d({},o,{disableGutters:r.disableGutters}),i=_e(l);return c(Ue,d({className:N(i.root,n),ownerState:l,ref:s},a))});re.muiName="ListItemSecondaryAction";var Ve=re;const De=["className"],ze=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],He=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Ye=e=>{const{alignItems:t,button:s,classes:o,dense:n,disabled:a,disableGutters:r,disablePadding:l,divider:i,hasSecondaryAction:p,selected:y}=e;return z({root:["root",n&&"dense",!r&&"gutters",!l&&"padding",i&&"divider",a&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",p&&"secondaryAction",y&&"selected"],container:["container"]},Fe,o)},Xe=$("div",{name:"MuiListItem",slot:"Root",overridesResolver:He})(({theme:e,ownerState:t})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&d({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${Ge.root}`]:{paddingRight:48}},{[`&.${A.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${A.selected}`]:{backgroundColor:w(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${A.disabled}`]:{opacity:e.palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}:hover`]:{backgroundColor:w(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:w(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),qe=$("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Je=_(function(t,s){const o=D({props:t,name:"MuiListItem"}),{alignItems:n="center",autoFocus:a=!1,button:r=!1,children:l,className:i,component:p,components:y={},componentsProps:C={},ContainerComponent:L="li",ContainerProps:{className:h}={},dense:u=!1,disabled:m=!1,disableGutters:f=!1,disablePadding:b=!1,divider:g=!1,focusVisibleClassName:S,secondaryAction:j,selected:ce=!1}=o,le=F(o.ContainerProps,De),de=F(o,ze),me=U(M),G={dense:u||me.dense||!1,alignItems:n,disableGutters:f},O=be(null);Te(()=>{a&&O.current&&O.current.focus()},[a]);const T=he.toArray(l),H=T.length&&Ce(T[T.length-1],["ListItemSecondaryAction"]),k=d({},o,{alignItems:n,autoFocus:a,button:r,dense:G.dense,disabled:m,disableGutters:f,disablePadding:b,divider:g,hasSecondaryAction:H,selected:ce}),Y=Ye(k),X=Ae(O,s),E=y.Root||Xe,P=C.root||{},v=d({className:N(Y.root,P.className,i),disabled:m},de);let I=p||"li";return r&&(v.component=p||"div",v.focusVisibleClassName=N(A.focusVisible,S),I=ke),H?(I=!v.component&&!p?"div":I,L==="li"&&(I==="li"?I="div":v.component==="li"&&(v.component="div")),c(M.Provider,{value:G,children:x(qe,d({as:L,className:N(Y.container,h),ref:X,ownerState:k},le,{children:[c(E,d({},P,!te(E)&&{as:I,ownerState:d({},k,P.ownerState)},v,{children:T})),T.pop()]}))})):c(M.Provider,{value:G,children:x(E,d({},P,{as:I,ref:X,ownerState:k},!te(E)&&{ownerState:d({},k,P.ownerState)},v,{children:[T,j&&c(Ve,{children:j})]}))})});var Ke=Je;const Qe=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Ze=e=>{const{classes:t,inset:s,primary:o,secondary:n,dense:a}=e;return z({root:["root",s&&"inset",a&&"dense",o&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},Pe,t)},et=$("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${se.primary}`]:t.primary},{[`& .${se.secondary}`]:t.secondary},t.root,s.inset&&t.inset,s.primary&&s.secondary&&t.multiline,s.dense&&t.dense]}})(({ownerState:e})=>d({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),tt=_(function(t,s){const o=D({props:t,name:"MuiListItemText"}),{children:n,className:a,disableTypography:r=!1,inset:l=!1,primary:i,primaryTypographyProps:p,secondary:y,secondaryTypographyProps:C}=o,L=F(o,Qe),{dense:h}=U(M);let u=i!=null?i:n,m=y;const f=d({},o,{disableTypography:r,inset:l,primary:!!u,secondary:!!m,dense:h}),b=Ze(f);return u!=null&&u.type!==B&&!r&&(u=c(B,d({variant:h?"body2":"body1",className:b.primary,component:"span",display:"block"},p,{children:u}))),m!=null&&m.type!==B&&!r&&(m=c(B,d({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},C,{children:m}))),x(et,d({className:N(b.root,a),ownerState:f,ref:s},L,{children:[u,m]}))});var st=tt;const R={box:{display:"flex",flexWrap:"no-wrap",flexGrow:1,minWidth:"15rem",padding:0,margin:"0 2rem",justifyContent:"center","&::-webkit-scrollbar":{height:"0.1rem",backgroundColor:"rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{height:"0.1rem",backgroundColor:"rgba(255, 255, 255, 0.3)"}},list:{backgroundColor:"rgba(16, 16, 16, 0.9)",color:"white",flex:"1 1",minWidth:"9rem",maxWidth:"20rem","&:hover":{backgroundColor:"rgba(16, 16, 16, 0.7)"},"& img":{filter:"drop-shadow(0 0 0.3rem white)"}},listItem:{cursor:"pointer",textAlign:"center","&[data-multi]::after":{content:'"\u25BC"',position:"absolute",bottom:"0.1rem",left:"50%",transform:"translateX(-50%)",fontSize:"x-small"},"&:not(first-of-type)":{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.5)"}},menuItem:{gap:"0.2rem",minWidth:"8rem"},icon:{maxHeight:"1.5rem",margin:"0 0.3rem"}},ie=e=>c("img",K(W({},e),{style:R.icon}));function ot({level:e=0,selectedIndices:t,options:s,setIndex:o}){var f,b;const[n,a]=Q(null),r=s.length>1;(f=t[e])!=null||o(e,0);const l=g=>{a(g.currentTarget)},i=g=>{const{level:S,index:j}=g.target.dataset;o(parseInt(S),parseInt(j)),a(null)},p=()=>{a(null)},y=(b=t[e])!=null?b:0,{label:C,value:L,icon:h,options:u}=s[y],m=x(Z,{children:[c(Le,{disablePadding:!0,sx:R.list,children:x(Ke,{"data-multi":r,sx:R.listItem,onClick:l,children:[h&&c(ie,{alt:L,src:h}),c(st,{primary:`${C}`})]})}),r&&c(Se,{anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:p,children:s.map((g,S)=>x(Ne,{selected:S===y,onClick:i,sx:R.menuItem,"data-index":S,"data-level":e,children:[g.icon&&c(ie,{alt:g.value,src:g.icon}),g.label]},g.value))}),u&&c(ot,{options:u,selectedIndices:t,level:e+1,setIndex:o})]});return e===0?c(Me,{className:"Breadcrumbs",sx:R.box,children:m}):m}const nt=(e,t)=>s=>{const o=s[e],n=o==null?void 0:o[t];n!==void 0&&(o[t]=!n,Object.values(o).every(Boolean)&&Object.keys(o).forEach(a=>o[a]=!1))};function at(e){const t=ve(()=>rt(e),[e]),[s,o]=Q(t);return[s,(r,l)=>o(i=>Ie(i,nt(r,l))),()=>o(t)]}function rt(e){const t=e.map(({name:s,options:o})=>{const n=o.map(r=>[r,!1]),a=Object.fromEntries(n);return[s,a]});return Object.fromEntries(t)}function it({name:e,options:t,type:s,state:o,toggle:n}){const a=i=>{const{group:p,value:y}=i.currentTarget.dataset;n(p,y)},r=i=>`img/appIcon/${e}_${i}.png`,l=t.map(i=>c(Re,{icon:r(i),value:i,type:s,checked:o[i],"data-group":e,onClick:a}));return c("div",{className:"ToggleGroup",children:l})}const ct=e=>Object.entries(e).map(([o,n])=>[o,Object.keys(n).filter(a=>n[a])]).filter(([,o])=>o.length);function Ct({config:e,onChange:t,compact:s}){if(!e)return c(Z,{});const[o,n,a]=at(e);xe(()=>{const l=ct(o);t(l)},[o]);const r=e.map((l,i)=>c(it,W({state:o[l.name],toggle:n},l),i));return x("div",{className:"Filter","data-compact":s,children:[r,c("button",{className:"Filter-reset",onClick:a,children:c("span",{children:"Reset"})})]})}var Lt=je(c("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");function lt(){return new Worker("/dl-model/assets/filterWorker.9787b4d9.js",{type:"module"})}function St(e,t){if(!t.length)return e;const s=new lt;return new Promise(o=>{s.addEventListener("message",n=>{s.terminate(),o(n.data)}),s.postMessage({fullList:e,conditions:t})})}const Tt=[{name:"weapon",type:"icon",options:oe},{name:"rarity",type:"icon",options:ne},{name:"element",type:"icon",options:ae}],At=[{name:"rarity",type:"icon",options:ne},{name:"element",type:"icon",options:ae}],kt=[{name:"weapon",type:"icon",options:oe},{name:"rarity",type:"icon",options:Ee},{name:"element",type:"icon",options:$e}];export{ot as B,Lt as F,it as T,Ct as a,Tt as c,At as d,St as f,kt as w};
