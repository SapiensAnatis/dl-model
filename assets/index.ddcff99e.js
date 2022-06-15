import{m as u,v as t,a as p,F as x,j as e,u as T}from"./index.b0b001f1.js";import{u as g}from"./useToggleState.8d7d3fb7.js";import{G as b}from"./GlowToggle.c3949a1a.js";import{B as a}from"./Button.63298446.js";import{b as k}from"./Popover.a0ce8e41.js";import{S,B as P,b as w,a as y,P as B,c as F}from"./SkipPrevious.0d4eb7f4.js";import{I as R,C as j}from"./Close.97a273e9.js";import"./ButtonBase.230d38f2.js";import"./createSvgIcon.cd069a6c.js";const h={popover:{backgroundColor:"#101010",minHeight:"16.5rem",maxHeight:"80vh",display:"flex",padding:"0.3rem",paddingBottom:"1.5rem",flexDirection:"column",justifyContent:"flex-end",alignItems:"center","& .MuiSlider-root":{marginRight:"3.2rem"}},slider:{minHeight:"15rem",maxHeight:"90%","& span.MuiSlider-markLabel":{color:"#bbb",textAlign:"right",width:"2.3rem"},"& span.MuiSlider-markLabelActive":{color:"#fff"}}},A=[.25,.5,.75,1,1.25,1.5,1.75,2].map(o=>({value:o,label:`${o}x`}));function G(){const[o,s]=u(t.loop.timeScale),[n,i]=u(null),c=r=>{r.stopPropagation(),i(r.currentTarget)},m=()=>i(null),d=(r,l)=>{t.loop.timeScale=l,s(l)};return p(x,{children:[e(a,{title:"Time Scale",onClick:c,children:`${o}x`}),e(k,{anchorEl:n,open:!!n,onClose:m,className:"TimeScaleSelect",PaperProps:{sx:h.popover},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:e(S,{orientation:"vertical",track:!1,marks:A,min:.25,max:2,step:.05,value:o,onChange:d,sx:h.slider})})]})}function q(){const[o,s]=g(t.loop.paused),[n,i]=g(t.loop.reverse),{toggleTimeControl:c}=T(),m=()=>{o?t.loop.resume():t.loop.pause(),s()},d=()=>{t.loop.reverse=!n,i()},r=l=>{const{dir:f}=l.currentTarget.dataset,v=f==="next"?1:-1,C=1/60*v;t.update(C)};return p("div",{className:"TimeControl",children:[p(P,{children:[e(a,{variant:"contained","data-dir":"prev",onClick:r,title:"Previous Frame",children:e(w,{})}),e(a,{variant:"contained",onClick:m,title:o?"Resume":"Pause",children:o?e(y,{}):e(B,{})}),e(a,{variant:"contained","data-dir":"next",onClick:r,title:"Next Frame",children:e(F,{})})]}),e(b,{type:"text",value:"Reverse",checked:n,onClick:d,title:"Click to change animation direction"}),e(G,{}),e(R,{onClick:c,title:"Close",children:e(j,{})})]})}export{q as default};
