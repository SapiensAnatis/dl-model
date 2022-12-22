import{c as h}from"./aceff306-index.js";import{p as T}from"./6fa25dee-immer.esm.js";import{v as m,A as v}from"./8524ed34-viewer.js";import{_ as i}from"./45408441-preload-helper.js";import{M as r,o as f}from"./9121d302-jsxRuntime.module.js";const C=n=>({indices:[0,0],_indicesCache:{},setIndex:(e,o)=>{n(t=>{const{indices:a,_indicesCache:d}=t;a[e]=o;const l=a.slice(0,e+1).join(),p=d[l]??[],{length:g}=a;for(let u=0;e+1+u<g;u++)a[e+1+u]=p[u]??0;const c=a.slice(e),_=a.slice(0,e).join();_&&(d[_]=c)})},showFilter:!1,toggleFilter:()=>n(e=>{e.showFilter=!e.showFilter}),searchAll:!1,toggleSearchAll:()=>n(e=>{e.searchAll=!e.searchAll})}),U=n=>n==="true";function y(n,e){return n&&e&&Object.keys(e).forEach(o=>{const t=e[o];typeof t=="object"?(n[o]||(n[o]={}),y(n[o],t)):n[o]=t}),n}const E=(n,e)=>({category:"Adv",setCategory:o=>n(t=>{t.category=o}),advAni:{category:"home",setCategory:o=>n(t=>{t.advAni.category=o}),home:{gender:"Male",setGender:o=>n(t=>{t.advAni.home.gender=o})},weapon:{type:"Sword",setType:o=>n(t=>{t.advAni.weapon.type=o}),gunMode:"Long",setGunMode:o=>n(t=>{t.advAni.weapon.gunMode=o})},genericSkill:{type:"Sword",setType:o=>n(t=>{t.advAni.genericSkill.type=o})},groupByWeapon:{setGroupWeaponType:(o,t)=>n(a=>{a.advAni.groupByWeapon[o]=t})},uniqueOther:{type:"Sword",setType:o=>n(t=>{t.advAni.uniqueOther.type=o}),selected:"",setSelected:o=>n(t=>{t.advAni.uniqueOther.selected=o})}},extraAni:{category:"Dance",setCategory:o=>n(t=>{t.extraAni.category=o})},personalAni:{source:"",setSource:o=>n(t=>{t.personalAni.source=o}),sourceName:"",setSourceName:o=>n(t=>{t.personalAni.sourceName=o})},getCurrentState:()=>{const o=e();return JSON.parse(JSON.stringify(o))},loadState:(o={})=>{n(t=>y(t,o))}});function I(){try{return window.self!==window.top}catch{return!0}}let S="";const M=I(),b=M?!1:!window.location.hash.includes("showSettings=false"),O=M?!1:!window.location.hash.includes("showAC=false"),P=n=>({showSettings:b,toggleSettings:()=>n(e=>{e.showSettings=!e.showSettings}),loadingMsg:"",setLoadingMsg:e=>n(o=>{o.loadingMsg=e}),showTimeControl:O,toggleTimeControl:()=>n(e=>{e.showTimeControl=!e.showTimeControl}),showFrameRate:!1,toggleFrameRate:()=>n(e=>{e.showFrameRate=!e.showFrameRate}),sidebar:{open:!0,toggle:()=>n(e=>{e.sidebar.open=!e.sidebar.open}),settings:{tab:"Model",setTab:e=>n(o=>{o.sidebar.settings.tab=e})},modal:{mode:"",handleSelect:void 0,open:(e,o)=>{S=m.loop.state,m.loop.stop(),n(t=>{t.sidebar.modal.mode=e,t.sidebar.modal.handleSelect=o})},close:()=>{S==="active"&&m.loop.start(),n(e=>{e.sidebar.modal.mode="",e.sidebar.modal.handleSelect=void 0})}},manageMode:"single",setManageMode:e=>n(o=>{o.sidebar.manageMode=e})},chainMaker:{target:null,setTarget:e=>n(o=>{o.chainMaker.target=e})},dock:{mode:"",handleSelect:void 0,open:(e="",o)=>n(t=>{t.dock.mode=e,t.dock.handleSelect=o}),close:()=>n(e=>{e.dock.mode="",e.dock.handleSelect=void 0})}}),R=r(()=>i(()=>import("./431b9970-index.js"),["assets/431b9970-index.js","assets/9121d302-jsxRuntime.module.js","assets/d712cfd6-TabBar.js","assets/8f91ce53-ButtonBase.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/5c67166c-createSvgIcon.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/802cbb55-ColorPicker.js","assets/45408441-preload-helper.js","assets/e1cac50e-ColorButton.js","assets/7e61fe05-Button.js","assets/a4b8921d-ColorPicker.css","assets/7c69f7fd-file2dataURL.js","assets/8524ed34-viewer.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/aa80096d-index.css"])),D=r(()=>i(()=>import("./5da30e68-index.js"),["assets/5da30e68-index.js","assets/9121d302-jsxRuntime.module.js","assets/a9dc416e-lists.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/7b270a3e-Close.js","assets/4341b07e-lists.css","assets/6060fbc4-filterConfig.js","assets/6fa25dee-immer.esm.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/ea114570-filterConfig.css","assets/96ba9c36-styles.js","assets/6d95f099-styles.css","assets/2ff56570-styles.css","assets/f60cacb5-index.js","assets/647a0a28-index.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js"])),k=r(()=>i(()=>import("./520718e0-index.js"),["assets/520718e0-index.js","assets/9121d302-jsxRuntime.module.js","assets/a9dc416e-lists.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/7b270a3e-Close.js","assets/4341b07e-lists.css","assets/cef298b2-Stretcher.js","assets/c7840dc6-Stretcher.css","assets/d712cfd6-TabBar.js","assets/7e61fe05-Button.js","assets/6a23e72f-ModelIcon.js","assets/e0a4883b-aniFunction.js","assets/f60cacb5-index.js","assets/0d1abf2a-Selector.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/88a094c7-Selector.css","assets/a4be5a26-getPersonalAni.js","assets/70e251a7-useKey.js","assets/7c69f7fd-file2dataURL.js","assets/6c499396-useToggleState.js","assets/d2d312c8-Check.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/6fa25dee-immer.esm.js","assets/a584847b-index.css","assets/2ff56570-styles.css"])),L=r(()=>i(()=>import("./9aa3f7b7-index.js"),["assets/9aa3f7b7-index.js","assets/80fff432-AddWeapon.js","assets/a9dc416e-lists.js","assets/9121d302-jsxRuntime.module.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/7b270a3e-Close.js","assets/4341b07e-lists.css","assets/6060fbc4-filterConfig.js","assets/6fa25dee-immer.esm.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/ea114570-filterConfig.css","assets/647a0a28-index.js","assets/6c499396-useToggleState.js","assets/6a23e72f-ModelIcon.js","assets/f60cacb5-index.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/54296060-initAniSelectState.js","assets/45b642d6-AddWeapon.css","assets/2ff56570-styles.css"])),F=r(()=>i(()=>import("./7a5423e0-ColorSelect.js"),["assets/7a5423e0-ColorSelect.js","assets/802cbb55-ColorPicker.js","assets/45408441-preload-helper.js","assets/9121d302-jsxRuntime.module.js","assets/e1cac50e-ColorButton.js","assets/7e61fe05-Button.js","assets/8f91ce53-ButtonBase.js","assets/a4b8921d-ColorPicker.css","assets/7b2118ae-DialogTitle.js"])),V=r(()=>i(()=>import("./7881e3d6-index.js"),["assets/7881e3d6-index.js","assets/f28bfb15-FaceSelect.js","assets/9121d302-jsxRuntime.module.js","assets/70e251a7-useKey.js","assets/c13ebfff-useIsMount.js","assets/4e1e9e52-FacePartSelector.js","assets/0d1abf2a-Selector.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/88a094c7-Selector.css","assets/f1368859-MeshMouthSelect.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/042e6b4d-_commonjsHelpers.js","assets/272a55ce-Box.js","assets/8f91ce53-ButtonBase.js","assets/7b2118ae-DialogTitle.js","assets/7e61fe05-Button.js","assets/7f49998c-MeshMouthSelect.css","assets/febe3778-FaceSelect.css","assets/aceff306-index.js","assets/4e8de4b5-compat.module.js","assets/6fa25dee-immer.esm.js"])),x=r(()=>i(()=>import("./b08686af-index.js"),["assets/b08686af-index.js","assets/2603cf40-FaceTexture.js","assets/9121d302-jsxRuntime.module.js","assets/6c499396-useToggleState.js","assets/a9dc416e-lists.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/7b270a3e-Close.js","assets/4341b07e-lists.css","assets/4e1e9e52-FacePartSelector.js","assets/0d1abf2a-Selector.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/88a094c7-Selector.css","assets/6060fbc4-filterConfig.js","assets/6fa25dee-immer.esm.js","assets/ea114570-filterConfig.css","assets/96ba9c36-styles.js","assets/6d95f099-styles.css","assets/2ff56570-styles.css","assets/f60cacb5-index.js"])),W=r(()=>i(()=>import("./6e4cb596-index.js"),["assets/6e4cb596-index.js","assets/9121d302-jsxRuntime.module.js","assets/70e251a7-useKey.js","assets/cef298b2-Stretcher.js","assets/c7840dc6-Stretcher.css","assets/f980cb47-BoneManager.js","assets/6a23e72f-ModelIcon.js","assets/abd3a33b-Accordion.js","assets/6c499396-useToggleState.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/09fd7fc3-Accordion.css","assets/6060fbc4-filterConfig.js","assets/2f5c5a37-Gallery.js","assets/eaf06fd2-Popover.js","assets/aceff306-index.js","assets/042e6b4d-_commonjsHelpers.js","assets/4e8de4b5-compat.module.js","assets/272a55ce-Box.js","assets/7b2118ae-DialogTitle.js","assets/6fa25dee-immer.esm.js","assets/d65f183e-GlowToggle.js","assets/eb519626-GlowToggle.css","assets/a9dc416e-lists.js","assets/7b270a3e-Close.js","assets/4341b07e-lists.css","assets/ea114570-filterConfig.css","assets/e1cac50e-ColorButton.js","assets/7e61fe05-Button.js","assets/9c8ee417-SkipPrevious.js","assets/f28bfb15-FaceSelect.js","assets/c13ebfff-useIsMount.js","assets/4e1e9e52-FacePartSelector.js","assets/0d1abf2a-Selector.js","assets/88a094c7-Selector.css","assets/f1368859-MeshMouthSelect.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/7f49998c-MeshMouthSelect.css","assets/febe3778-FaceSelect.css","assets/2603cf40-FaceTexture.js","assets/96ba9c36-styles.js","assets/6d95f099-styles.css","assets/2ff56570-styles.css","assets/f60cacb5-index.js","assets/a84c5f65-helper.js","assets/80fff432-AddWeapon.js","assets/647a0a28-index.js","assets/54296060-initAniSelectState.js","assets/45b642d6-AddWeapon.css","assets/bf3fbd2c-BoneManager.css","assets/98b9a174-index.css"])),A=r(()=>i(()=>import("./b366f766-index.js"),["assets/b366f766-index.js","assets/9121d302-jsxRuntime.module.js","assets/f1368859-MeshMouthSelect.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/042e6b4d-_commonjsHelpers.js","assets/272a55ce-Box.js","assets/8f91ce53-ButtonBase.js","assets/7b2118ae-DialogTitle.js","assets/7e61fe05-Button.js","assets/7f49998c-MeshMouthSelect.css","assets/aceff306-index.js","assets/4e8de4b5-compat.module.js","assets/6fa25dee-immer.esm.js","assets/045f3dd6-index.css"])),j=r(()=>i(()=>import("./4d792128-index.js"),["assets/4d792128-index.js","assets/8524ed34-viewer.js","assets/45408441-preload-helper.js","assets/1c81631e-three.js","assets/e27bbfcf-CopyShader.js","assets/91ac8981-ShaderPass.js","assets/b87293a3-Pass.js","assets/042e6b4d-_commonjsHelpers.js","assets/9121d302-jsxRuntime.module.js","assets/70e251a7-useKey.js","assets/abd3a33b-Accordion.js","assets/6c499396-useToggleState.js","assets/5c67166c-createSvgIcon.js","assets/8f91ce53-ButtonBase.js","assets/09fd7fc3-Accordion.css","assets/6a23e72f-ModelIcon.js","assets/f60cacb5-index.js","assets/7e61fe05-Button.js","assets/d2d312c8-Check.js","assets/7b2118ae-DialogTitle.js","assets/272a55ce-Box.js","assets/79f787e2-index.css","assets/2ff56570-styles.css"])),w={background:R,model:D,animation:k,weapon:L,color:F,face:V,faceTexture:x,attachment:W,target:j,eye:({onSelect:n})=>f(A,{part:"eye",onSelect:n}),mouth:({onSelect:n})=>f(A,{part:"mouth",onSelect:n})},B=(n,e)=>({Component:void 0,props:void 0,openModal:(o,t)=>n(a=>{a.props=t,a.Component=o}),close:()=>n(o=>{o.Component=void 0}),onClose:void 0,reset:()=>n(o=>{o.Component=o.props=o.onClose=void 0}),getInput:async o=>{if(!w[o])return null;const{close:t,reset:a}=e(),d=new Promise((l,p)=>{const g=(...c)=>l(c);n(c=>{c.onClose=()=>{p(),t()},c.props={onSelect:g,onAfterSelect:t},c.Component=w[o]})});try{return await d}catch{return null}finally{a()}},inputModel:()=>e().getInput("model"),inputAni:()=>e().getInput("animation"),inputColor:async()=>{const o=await e().getInput("color");return o==null?void 0:o[0]},inputTarget:()=>e().getInput("target"),inputEye:()=>e().getInput("eye"),inputMouth:()=>e().getInput("mouth")}),N=n=>({activeModel:void 0,setActiveModel:e=>n({activeModel:e})}),q=n=>({open:!1,toggle:()=>n(e=>({open:!e.open})),target:null,setTarget:e=>{e&&(e.userData.chain||(e.userData.chain=new v),n({target:e}))}}),G=n=>(e,o,t)=>n(a=>e(T(a)),o,t),s=n=>h(G(n)),X=s(P),Y=s(C),Z=s(C),$=s(E),ee=s(B),oe=h(N),ne=h(q);export{$ as a,oe as b,Y as c,w as d,ne as e,ee as f,U as g,Z as h,X as u};
