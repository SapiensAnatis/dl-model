import{k as V,q as W,o as n,F as Y,_ as st,O as ft,a as ot,p as at,h as vt}from"./jsxRuntime.module-9121d302.js";import{L,i as Ct,c as It,M as xt}from"./Gallery-74b65e41.js";import{b as T,g as _,s as w,a as d,d as U,_ as R,e as S,f as j,m as I,l as nt,u as rt,B as it,r as $t}from"./ButtonBase-e35dbca3.js";import{i as Q}from"./Popover-9fb2a3a1.js";import{T as B}from"./DialogTitle-c13aece2.js";import{B as ht}from"./Box-22a79bc4.js";import{p as Lt}from"./immer.esm-6fa25dee.js";import{G as St}from"./GlowToggle-14284aac.js";import{c as Tt}from"./createSvgIcon-06820ebd.js";import{W as ct,R as lt,E as dt,F as Mt,a as kt}from"./lists-87486fd5.js";const Ot=T("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Z=Ot;function Pt(t){return _("MuiListItem",t)}const At=T("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),k=At,Nt=T("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Rt=Nt;function wt(t){return _("MuiListItemSecondaryAction",t)}T("MuiListItemSecondaryAction",["root","disableGutters"]);const Ft=["className"],Gt=t=>{const{disableGutters:e,classes:o}=t;return j({root:["root",e&&"disableGutters"]},wt,o)},Bt=w("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})(({ownerState:t})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),pt=V(function(e,o){const s=U({props:e,name:"MuiListItemSecondaryAction"}),{className:a}=s,r=R(s,Ft),i=W(L),l=d({},s,{disableGutters:i.disableGutters}),c=Gt(l);return n(Bt,d({className:S(c.root,a),ownerState:l,ref:o},r))});pt.muiName="ListItemSecondaryAction";const Et=pt,Vt=["className"],Wt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],_t=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.button&&e.button,o.hasSecondaryAction&&e.secondaryAction]},Ut=t=>{const{alignItems:e,button:o,classes:s,dense:a,disabled:r,disableGutters:i,disablePadding:l,divider:c,hasSecondaryAction:u,selected:b}=t;return j({root:["root",a&&"dense",!i&&"gutters",!l&&"padding",c&&"divider",r&&"disabled",o&&"button",e==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",b&&"selected"],container:["container"]},Pt,s)},jt=w("div",{name:"MuiListItem",slot:"Root",overridesResolver:_t})(({theme:t,ownerState:e})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&d({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Rt.root}`]:{paddingRight:48}},{[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${k.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Dt=w("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ht=V(function(e,o){const s=U({props:e,name:"MuiListItem"}),{alignItems:a="center",autoFocus:r=!1,button:i=!1,children:l,className:c,component:u,components:b={},componentsProps:f={},ContainerComponent:C="li",ContainerProps:{className:v}={},dense:m=!1,disabled:g=!1,disableGutters:p=!1,disablePadding:y=!1,divider:x=!1,focusVisibleClassName:D,secondaryAction:O,selected:ut=!1,slotProps:mt={},slots:gt={}}=s,bt=R(s.ContainerProps,Vt),yt=R(s,Wt),q=W(L),H=Y(()=>({dense:m||q.dense||!1,alignItems:a,disableGutters:p}),[a,q.dense,m,p]),z=st(null);nt(()=>{r&&z.current&&z.current.focus()},[r]);const M=ft.toArray(l),X=M.length&&Ct(M[M.length-1],["ListItemSecondaryAction"]),F=d({},s,{alignItems:a,autoFocus:r,button:i,dense:H.dense,disabled:g,disableGutters:p,disablePadding:y,divider:x,hasSecondaryAction:X,selected:ut}),J=Ut(F),K=rt(z,o),G=gt.root||b.Root||jt,P=mt.root||f.root||{},$=d({className:S(J.root,P.className,c),disabled:g},yt);let h=u||"li";return i&&($.component=u||"div",$.focusVisibleClassName=S(k.focusVisible,D),h=it),X?(h=!$.component&&!u?"div":h,C==="li"&&(h==="li"?h="div":$.component==="li"&&($.component="div")),n(L.Provider,{value:H,children:n(Dt,d({as:C,className:S(J.container,v),ref:K,ownerState:F},bt,{children:[n(G,d({},P,!Q(G)&&{as:h,ownerState:d({},F,P.ownerState)},$,{children:M})),M.pop()]}))})):n(L.Provider,{value:H,children:n(G,d({},P,{as:h,ref:K},!Q(G)&&{ownerState:d({},F,P.ownerState)},$,{children:[M,O&&n(Et,{children:O})]}))})}),zt=Ht,Yt=T("MuiListItemIcon",["root","alignItemsFlexStart"]),tt=Yt;function qt(t){return _("MuiListItemText",t)}const Xt=T("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),E=Xt,Jt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Kt=t=>{const{classes:e,inset:o,primary:s,secondary:a,dense:r}=t;return j({root:["root",o&&"inset",r&&"dense",s&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},qt,e)},Qt=w("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${E.primary}`]:e.primary},{[`& .${E.secondary}`]:e.secondary},e.root,o.inset&&e.inset,o.primary&&o.secondary&&e.multiline,o.dense&&e.dense]}})(({ownerState:t})=>d({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Zt=V(function(e,o){const s=U({props:e,name:"MuiListItemText"}),{children:a,className:r,disableTypography:i=!1,inset:l=!1,primary:c,primaryTypographyProps:u,secondary:b,secondaryTypographyProps:f}=s,C=R(s,Jt),{dense:v}=W(L);let m=c??a,g=b;const p=d({},s,{disableTypography:i,inset:l,primary:!!m,secondary:!!g,dense:v}),y=Kt(p);return m!=null&&m.type!==B&&!i&&(m=n(B,d({variant:v?"body2":"body1",className:y.primary,component:u!=null&&u.variant?void 0:"span",display:"block"},u,{children:m}))),g!=null&&g.type!==B&&!i&&(g=n(B,d({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},f,{children:g}))),n(Qt,d({className:S(y.root,r),ownerState:p,ref:o},C,{children:[m,g]}))}),te=Zt;function ee(t){return _("MuiMenuItem",t)}const se=T("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),A=se,oe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ae=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.divider&&e.divider,!o.disableGutters&&e.gutters]},ne=t=>{const{disabled:e,dense:o,divider:s,disableGutters:a,selected:r,classes:i}=t,c=j({root:["root",o&&"dense",e&&"disabled",!a&&"gutters",s&&"divider",r&&"selected"]},ee,i);return d({},i,c)},re=w(it,{shouldForwardProp:t=>$t(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ae})(({theme:t,ownerState:e})=>d({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${A.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${A.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${Z.inset}`]:{marginLeft:52},[`& .${E.root}`]:{marginTop:0,marginBottom:0},[`& .${E.inset}`]:{paddingLeft:36},[`& .${tt.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&d({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${tt.root} svg`]:{fontSize:"1.25rem"}}))),ie=V(function(e,o){const s=U({props:e,name:"MuiMenuItem"}),{autoFocus:a=!1,component:r="li",dense:i=!1,divider:l=!1,disableGutters:c=!1,focusVisibleClassName:u,role:b="menuitem",tabIndex:f,className:C}=s,v=R(s,oe),m=W(L),g=Y(()=>({dense:i||m.dense||!1,disableGutters:c}),[m.dense,i,c]),p=st(null);nt(()=>{a&&p.current&&p.current.focus()},[a]);const y=d({},s,{dense:g.dense,divider:l,disableGutters:c}),x=ne(s),D=rt(p,o);let O;return s.disabled||(O=f!==void 0?f:-1),n(L.Provider,{value:g,children:n(re,d({ref:D,role:b,tabIndex:O,component:r,focusVisibleClassName:S(x.focusVisible,u),className:S(x.root,C)},v,{ownerState:y,classes:x}))})}),ce=ie,N={box:{display:"flex",flexWrap:"no-wrap",flexGrow:1,minWidth:"15rem",padding:0,margin:"0 2rem",justifyContent:"center","&::-webkit-scrollbar":{height:"0.1rem",backgroundColor:"rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{height:"0.1rem",backgroundColor:"rgba(255, 255, 255, 0.3)"}},list:{backgroundColor:"rgba(16, 16, 16, 0.9)",color:"white",flex:"1 1",minWidth:"9rem",maxWidth:"20rem","&:hover":{backgroundColor:"rgba(16, 16, 16, 0.7)"},"& img":{filter:"drop-shadow(0 0 0.3rem white)"}},listItem:{cursor:"pointer",textAlign:"center","&[data-multi]::after":{content:'"▼"',position:"absolute",bottom:"0.1rem",left:"50%",transform:"translateX(-50%)",fontSize:"x-small"},"&:not(first-of-type)":{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.5)"}},menuItem:{gap:"0.2rem",minWidth:"8rem"},icon:{maxHeight:"1.5rem",margin:"0 0.3rem"}},et=t=>n("img",{...t,style:N.icon});function le({level:t=0,selectedIndices:e,options:o,setIndex:s}){const[a,r]=ot(null),i=o.length>1;e[t]??s(t,0);const l=p=>{r(p.currentTarget)},c=p=>{const{level:y,index:x}=p.target.dataset;s(parseInt(y),parseInt(x)),r(null)},u=()=>{r(null)},b=e[t]??0,{label:f,value:C,icon:v,options:m}=o[b],g=n(at,{children:[n(It,{disablePadding:!0,sx:N.list,children:n(zt,{"data-multi":i,sx:N.listItem,onClick:l,children:[v&&n(et,{alt:C,src:v}),n(te,{primary:`${f}`})]})}),i&&n(xt,{anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:u,children:o.map((p,y)=>n(ce,{selected:y===b,onClick:c,sx:N.menuItem,"data-index":y,"data-level":t,children:[p.icon&&n(et,{alt:p.value,src:p.icon}),p.label]},p.value))}),m&&n(le,{options:m,selectedIndices:e,level:t+1,setIndex:s})]});return t===0?n(ht,{className:"Breadcrumbs",sx:N.box,children:g}):g}const de=(t,e)=>o=>{const s=o[t],a=s==null?void 0:s[e];a!==void 0&&(s[e]=!a,Object.values(s).every(Boolean)&&Object.keys(s).forEach(r=>s[r]=!1))};function pe(t){const e=Y(()=>ue(t),[t]),[o,s]=ot(e);return[o,(i,l)=>s(c=>Lt(c,de(i,l))),()=>s(e)]}function ue(t){const e=t.map(({name:o,options:s})=>{const a=s.map(i=>[i,!1]),r=Object.fromEntries(a);return[o,r]});return Object.fromEntries(e)}function me({name:t,options:e,type:o,state:s,toggle:a}){const r=c=>{const{group:u,value:b}=c.currentTarget.dataset;a(u,b)},i=c=>`img/appIcon/${t}_${c}.png`,l=e.map(c=>n(St,{icon:i(c),value:c,type:o,checked:s[c],"data-group":t,onClick:r}));return n("div",{className:"ToggleGroup",children:l})}const ge=t=>Object.entries(t).map(([s,a])=>[s,Object.keys(a).filter(r=>a[r])]).filter(([,s])=>s.length);function Te({config:t,onChange:e,compact:o}){if(!t)return n(at,{});const[s,a,r]=pe(t);vt(()=>{const l=ge(s);e(l)},[s]);const i=t.map((l,c)=>n(me,{state:s[l.name],toggle:a,...l},c));return n("div",{className:"Filter","data-compact":o,children:[i,n("button",{className:"Filter-reset",onClick:r,children:n("span",{children:"Reset"})})]})}const Me=Tt(n("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");function be(){return new Worker("/dl-model/assets/filterWorker-ba992f3a.js")}function ke(t,e){if(!e.length)return t;const o=new be;return new Promise(s=>{o.addEventListener("message",a=>{o.terminate(),s(a.data)}),o.postMessage({fullList:t,conditions:e})})}const Oe=[{name:"weapon",type:"icon",options:ct},{name:"rarity",type:"icon",options:lt},{name:"element",type:"icon",options:dt}],Pe=[{name:"rarity",type:"icon",options:lt},{name:"element",type:"icon",options:dt}],Ae=[{name:"weapon",type:"icon",options:ct},{name:"rarity",type:"icon",options:Mt},{name:"element",type:"icon",options:kt}];export{le as B,Me as F,ce as M,me as T,Te as a,Oe as c,Pe as d,ke as f,Ae as w};
