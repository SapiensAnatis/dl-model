import{c as h}from"./index-d7a93f3d.js";import{p as T}from"./immer.esm-6fa25dee.js";import{v as m,A as v}from"./viewer-7c94c9c1.js";import{_ as i}from"./preload-helper-45408441.js";import{M as r,o as f}from"./jsxRuntime.module-9121d302.js";const C=n=>({indices:[0,0],_indicesCache:{},setIndex:(e,o)=>{n(t=>{const{indices:a,_indicesCache:d}=t;a[e]=o;const l=a.slice(0,e+1).join(),p=d[l]??[],{length:g}=a;for(let u=0;e+1+u<g;u++)a[e+1+u]=p[u]??0;const c=a.slice(e),_=a.slice(0,e).join();_&&(d[_]=c)})},showFilter:!1,toggleFilter:()=>n(e=>{e.showFilter=!e.showFilter}),searchAll:!1,toggleSearchAll:()=>n(e=>{e.searchAll=!e.searchAll})}),U=n=>n==="true";function y(n,e){return n&&e&&Object.keys(e).forEach(o=>{const t=e[o];typeof t=="object"?(n[o]||(n[o]={}),y(n[o],t)):n[o]=t}),n}const E=(n,e)=>({category:"Adv",setCategory:o=>n(t=>{t.category=o}),advAni:{category:"home",setCategory:o=>n(t=>{t.advAni.category=o}),home:{gender:"Male",setGender:o=>n(t=>{t.advAni.home.gender=o})},weapon:{type:"Sword",setType:o=>n(t=>{t.advAni.weapon.type=o}),gunMode:"Long",setGunMode:o=>n(t=>{t.advAni.weapon.gunMode=o})},genericSkill:{type:"Sword",setType:o=>n(t=>{t.advAni.genericSkill.type=o})},groupByWeapon:{setGroupWeaponType:(o,t)=>n(a=>{a.advAni.groupByWeapon[o]=t})},uniqueOther:{type:"Sword",setType:o=>n(t=>{t.advAni.uniqueOther.type=o}),selected:"",setSelected:o=>n(t=>{t.advAni.uniqueOther.selected=o})}},extraAni:{category:"Dance",setCategory:o=>n(t=>{t.extraAni.category=o})},personalAni:{source:"",setSource:o=>n(t=>{t.personalAni.source=o}),sourceName:"",setSourceName:o=>n(t=>{t.personalAni.sourceName=o})},getCurrentState:()=>{const o=e();return JSON.parse(JSON.stringify(o))},loadState:(o={})=>{n(t=>y(t,o))}});function I(){try{return window.self!==window.top}catch{return!0}}let S="";const M=I(),b=M?!1:!window.location.hash.includes("showSettings=false"),O=M?!1:!window.location.hash.includes("showAC=false"),P=n=>({showSettings:b,toggleSettings:()=>n(e=>{e.showSettings=!e.showSettings}),loadingMsg:"",setLoadingMsg:e=>n(o=>{o.loadingMsg=e}),showTimeControl:O,toggleTimeControl:()=>n(e=>{e.showTimeControl=!e.showTimeControl}),showFrameRate:!1,toggleFrameRate:()=>n(e=>{e.showFrameRate=!e.showFrameRate}),sidebar:{open:!0,toggle:()=>n(e=>{e.sidebar.open=!e.sidebar.open}),settings:{tab:"Model",setTab:e=>n(o=>{o.sidebar.settings.tab=e})},modal:{mode:"",handleSelect:void 0,open:(e,o)=>{S=m.loop.state,m.loop.stop(),n(t=>{t.sidebar.modal.mode=e,t.sidebar.modal.handleSelect=o})},close:()=>{S==="active"&&m.loop.start(),n(e=>{e.sidebar.modal.mode="",e.sidebar.modal.handleSelect=void 0})}},manageMode:"single",setManageMode:e=>n(o=>{o.sidebar.manageMode=e})},chainMaker:{target:null,setTarget:e=>n(o=>{o.chainMaker.target=e})},dock:{mode:"",handleSelect:void 0,open:(e="",o)=>n(t=>{t.dock.mode=e,t.dock.handleSelect=o}),close:()=>n(e=>{e.dock.mode="",e.dock.handleSelect=void 0})}}),R=r(()=>i(()=>import("./index-7f31dacd.js"),["assets/index-7f31dacd.js","assets/jsxRuntime.module-9121d302.js","assets/TabBar-ba457ef1.js","assets/ButtonBase-c56a8b38.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/createSvgIcon-f2a0048b.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/ColorPicker-1a296ce0.js","assets/preload-helper-45408441.js","assets/ColorButton-28f4d73a.js","assets/Button-1aaa8f1a.js","assets/ColorPicker-a4b8921d.css","assets/file2dataURL-568e809b.js","assets/viewer-7c94c9c1.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/index-aa80096d.css"])),D=r(()=>i(()=>import("./index-984881f5.js"),["assets/index-984881f5.js","assets/jsxRuntime.module-9121d302.js","assets/lists-8bda5b9b.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/Close-0ad613b5.js","assets/lists-4341b07e.css","assets/filterConfig-b75132fe.js","assets/immer.esm-6fa25dee.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/filterConfig-ea114570.css","assets/styles-f5bd6115.js","assets/styles-6d95f099.css","assets/styles-2ff56570.css","assets/index-f60cacb5.js","assets/index-cb8eaac3.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js"])),k=r(()=>i(()=>import("./index-97f492b3.js"),["assets/index-97f492b3.js","assets/jsxRuntime.module-9121d302.js","assets/lists-8bda5b9b.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/Close-0ad613b5.js","assets/lists-4341b07e.css","assets/Stretcher-961678e0.js","assets/Stretcher-c7840dc6.css","assets/TabBar-ba457ef1.js","assets/Button-1aaa8f1a.js","assets/ModelIcon-6ce365e9.js","assets/aniFunction-ccfc2e7d.js","assets/index-f60cacb5.js","assets/Selector-dc749ac1.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/Selector-88a094c7.css","assets/getPersonalAni-d0a63abd.js","assets/useKey-ea23d921.js","assets/file2dataURL-568e809b.js","assets/useToggleState-3fb9d00b.js","assets/Check-d9877cdf.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/immer.esm-6fa25dee.js","assets/index-a584847b.css","assets/styles-2ff56570.css"])),L=r(()=>i(()=>import("./index-298d3fbd.js"),["assets/index-298d3fbd.js","assets/AddWeapon-a8e5ab16.js","assets/lists-8bda5b9b.js","assets/jsxRuntime.module-9121d302.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/Close-0ad613b5.js","assets/lists-4341b07e.css","assets/filterConfig-b75132fe.js","assets/immer.esm-6fa25dee.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/filterConfig-ea114570.css","assets/index-cb8eaac3.js","assets/useToggleState-3fb9d00b.js","assets/ModelIcon-6ce365e9.js","assets/index-f60cacb5.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/initAniSelectState-54296060.js","assets/AddWeapon-45b642d6.css","assets/styles-2ff56570.css"])),F=r(()=>i(()=>import("./ColorSelect-34c652ca.js"),["assets/ColorSelect-34c652ca.js","assets/ColorPicker-1a296ce0.js","assets/preload-helper-45408441.js","assets/jsxRuntime.module-9121d302.js","assets/ColorButton-28f4d73a.js","assets/Button-1aaa8f1a.js","assets/ButtonBase-c56a8b38.js","assets/ColorPicker-a4b8921d.css","assets/DialogTitle-b23f8be5.js"])),V=r(()=>i(()=>import("./index-2d81a0e8.js"),["assets/index-2d81a0e8.js","assets/FaceSelect-23c7fcb9.js","assets/jsxRuntime.module-9121d302.js","assets/useKey-ea23d921.js","assets/useIsMount-3cd333ef.js","assets/FacePartSelector-ce967422.js","assets/Selector-dc749ac1.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/Selector-88a094c7.css","assets/MeshMouthSelect-f4b84919.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/_commonjsHelpers-35101cd5.js","assets/Box-9fcd2e2c.js","assets/ButtonBase-c56a8b38.js","assets/DialogTitle-b23f8be5.js","assets/Button-1aaa8f1a.js","assets/MeshMouthSelect-7f49998c.css","assets/FaceSelect-febe3778.css","assets/index-d7a93f3d.js","assets/compat.module-90d28d8c.js","assets/immer.esm-6fa25dee.js"])),x=r(()=>i(()=>import("./index-0c270994.js"),["assets/index-0c270994.js","assets/FaceTexture-8543109d.js","assets/jsxRuntime.module-9121d302.js","assets/useToggleState-3fb9d00b.js","assets/lists-8bda5b9b.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/Close-0ad613b5.js","assets/lists-4341b07e.css","assets/FacePartSelector-ce967422.js","assets/Selector-dc749ac1.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/Selector-88a094c7.css","assets/filterConfig-b75132fe.js","assets/immer.esm-6fa25dee.js","assets/filterConfig-ea114570.css","assets/styles-f5bd6115.js","assets/styles-6d95f099.css","assets/styles-2ff56570.css","assets/index-f60cacb5.js"])),W=r(()=>i(()=>import("./index-dc9d1393.js"),["assets/index-dc9d1393.js","assets/jsxRuntime.module-9121d302.js","assets/useKey-ea23d921.js","assets/Stretcher-961678e0.js","assets/Stretcher-c7840dc6.css","assets/BoneManager-e22483f6.js","assets/ModelIcon-6ce365e9.js","assets/Accordion-b426e74d.js","assets/useToggleState-3fb9d00b.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Accordion-09fd7fc3.css","assets/filterConfig-b75132fe.js","assets/Gallery-44e2f555.js","assets/Popover-851dcb03.js","assets/index-d7a93f3d.js","assets/_commonjsHelpers-35101cd5.js","assets/compat.module-90d28d8c.js","assets/Box-9fcd2e2c.js","assets/DialogTitle-b23f8be5.js","assets/immer.esm-6fa25dee.js","assets/GlowToggle-14284aac.js","assets/GlowToggle-eb519626.css","assets/lists-8bda5b9b.js","assets/Close-0ad613b5.js","assets/lists-4341b07e.css","assets/filterConfig-ea114570.css","assets/ColorButton-28f4d73a.js","assets/Button-1aaa8f1a.js","assets/SkipPrevious-6e1cb3e1.js","assets/FaceSelect-23c7fcb9.js","assets/useIsMount-3cd333ef.js","assets/FacePartSelector-ce967422.js","assets/Selector-dc749ac1.js","assets/Selector-88a094c7.css","assets/MeshMouthSelect-f4b84919.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/MeshMouthSelect-7f49998c.css","assets/FaceSelect-febe3778.css","assets/FaceTexture-8543109d.js","assets/styles-f5bd6115.js","assets/styles-6d95f099.css","assets/styles-2ff56570.css","assets/index-f60cacb5.js","assets/helper-aa3b0c96.js","assets/AddWeapon-a8e5ab16.js","assets/index-cb8eaac3.js","assets/initAniSelectState-54296060.js","assets/AddWeapon-45b642d6.css","assets/BoneManager-bf3fbd2c.css","assets/index-98b9a174.css"])),A=r(()=>i(()=>import("./index-08facecb.js"),["assets/index-08facecb.js","assets/jsxRuntime.module-9121d302.js","assets/MeshMouthSelect-f4b84919.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/_commonjsHelpers-35101cd5.js","assets/Box-9fcd2e2c.js","assets/ButtonBase-c56a8b38.js","assets/DialogTitle-b23f8be5.js","assets/Button-1aaa8f1a.js","assets/MeshMouthSelect-7f49998c.css","assets/index-d7a93f3d.js","assets/compat.module-90d28d8c.js","assets/immer.esm-6fa25dee.js","assets/index-045f3dd6.css"])),j=r(()=>i(()=>import("./index-e9724cdc.js"),["assets/index-e9724cdc.js","assets/viewer-7c94c9c1.js","assets/preload-helper-45408441.js","assets/three-95e0c7cb.js","assets/CopyShader-e27bbfcf.js","assets/ShaderPass-ffe7d003.js","assets/Pass-b3525e48.js","assets/_commonjsHelpers-35101cd5.js","assets/jsxRuntime.module-9121d302.js","assets/useKey-ea23d921.js","assets/Accordion-b426e74d.js","assets/useToggleState-3fb9d00b.js","assets/createSvgIcon-f2a0048b.js","assets/ButtonBase-c56a8b38.js","assets/Accordion-09fd7fc3.css","assets/ModelIcon-6ce365e9.js","assets/index-f60cacb5.js","assets/Button-1aaa8f1a.js","assets/Check-d9877cdf.js","assets/DialogTitle-b23f8be5.js","assets/Box-9fcd2e2c.js","assets/index-79f787e2.css","assets/styles-2ff56570.css"])),w={background:R,model:D,animation:k,weapon:L,color:F,face:V,faceTexture:x,attachment:W,target:j,eye:({onSelect:n})=>f(A,{part:"eye",onSelect:n}),mouth:({onSelect:n})=>f(A,{part:"mouth",onSelect:n})},B=(n,e)=>({Component:void 0,props:void 0,openModal:(o,t)=>n(a=>{a.props=t,a.Component=o}),close:()=>n(o=>{o.Component=void 0}),onClose:void 0,reset:()=>n(o=>{o.Component=o.props=o.onClose=void 0}),getInput:async o=>{if(!w[o])return null;const{close:t,reset:a}=e(),d=new Promise((l,p)=>{const g=(...c)=>l(c);n(c=>{c.onClose=()=>{p(),t()},c.props={onSelect:g,onAfterSelect:t},c.Component=w[o]})});try{return await d}catch{return null}finally{a()}},inputModel:()=>e().getInput("model"),inputAni:()=>e().getInput("animation"),inputColor:async()=>{const o=await e().getInput("color");return o==null?void 0:o[0]},inputTarget:()=>e().getInput("target"),inputEye:()=>e().getInput("eye"),inputMouth:()=>e().getInput("mouth")}),N=n=>({activeModel:void 0,setActiveModel:e=>n({activeModel:e})}),q=n=>({open:!1,toggle:()=>n(e=>({open:!e.open})),target:null,setTarget:e=>{!e||(e.userData.chain||(e.userData.chain=new v),n({target:e}))}}),G=n=>(e,o,t)=>n(a=>e(T(a)),o,t),s=n=>h(G(n)),X=s(P),Y=s(C),Z=s(C),$=s(E),ee=s(B),oe=h(N),ne=h(q);export{$ as a,oe as b,Y as c,w as d,ne as e,ee as f,U as g,Z as h,X as u};
