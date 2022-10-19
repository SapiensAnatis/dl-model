import{_ as O,m as ue,T as ee,h as Y,o as I,l as fe,p as je,N as Z,Q as Oe,$ as tt,j as V,X as nt}from"./index.6f874b69.js";import{a as f,e as se,_ as j,u as te,l as Ie,D as De,g as xe,b as be,A as Fe,f as ye,t as ot,w as rt,s as ae,m as Ae,d as Te,i as it,T as qe}from"./ButtonBase.4625ee2a.js";function $e(...e){return e.reduce((t,r)=>r==null?t:function(...i){t.apply(this,i),r.apply(this,i)},()=>{})}function st(e,t=166){let r;function o(...i){const n=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(n,t)}return o.clear=()=>{clearTimeout(r)},o}function G(e){return e&&e.ownerDocument||document}function de(e){return G(e).defaultView||window}function En({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=O(e!==void 0),[n,s]=ue(t),a=i?e:n,l=ee(p=>{i||s(p)},[]);return[a,l]}function at(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Xe(e){return typeof e=="string"}function lt(e,t={},r){return Xe(e)?t:f({},t,{ownerState:f({},t.ownerState,r)})}function ct(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{r[o]=e[o]}),r}function Ce(e,t){return typeof e=="function"?e(t):e}function Le(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function dt(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:i,className:n}=e;if(!t){const E=se(i==null?void 0:i.className,o==null?void 0:o.className,n,r==null?void 0:r.className),d=f({},r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),g=f({},r,i,o);return E.length>0&&(g.className=E),Object.keys(d).length>0&&(g.style=d),{props:g,internalRef:void 0}}const s=ct(f({},i,o)),a=Le(o),l=Le(i),p=t(s),m=se(p==null?void 0:p.className,r==null?void 0:r.className,n,i==null?void 0:i.className,o==null?void 0:o.className),v=f({},p==null?void 0:p.style,r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),b=f({},p,r,l,a);return m.length>0&&(b.className=m),Object.keys(v).length>0&&(b.style=v),{props:b,internalRef:p.ref}}const ut=["elementType","externalSlotProps","ownerState"];function Be(e){var t;const{elementType:r,externalSlotProps:o,ownerState:i}=e,n=j(e,ut),s=Ce(o,i),{props:a,internalRef:l}=dt(f({},n,{externalSlotProps:s})),p=te(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return lt(r,f({},a,{ref:p}),i)}const ft=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function pt(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ht(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function mt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ht(e))}function vt(e){const t=[],r=[];return Array.from(e.querySelectorAll(ft)).forEach((o,i)=>{const n=pt(o);n===-1||!mt(o)||(n===0?t.push(o):r.push({documentOrder:i,tabIndex:n,node:o}))}),r.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function Et(){return!0}function gt(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:n=vt,isEnabled:s=Et,open:a}=e,l=O(),p=O(null),m=O(null),v=O(null),b=O(null),E=O(!1),d=O(null),g=te(t.ref,d),P=O(null);Y(()=>{!a||!d.current||(E.current=!r)},[r,a]),Y(()=>{if(!a||!d.current)return;const u=G(d.current);return d.current.contains(u.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex",-1),E.current&&d.current.focus()),()=>{i||(v.current&&v.current.focus&&(l.current=!0,v.current.focus()),v.current=null)}},[a]),Y(()=>{if(!a||!d.current)return;const u=G(d.current),y=T=>{const{current:w}=d;if(w!==null){if(!u.hasFocus()||o||!s()||l.current){l.current=!1;return}if(!w.contains(u.activeElement)){if(T&&b.current!==T.target||u.activeElement!==b.current)b.current=null;else if(b.current!==null)return;if(!E.current)return;let M=[];if((u.activeElement===p.current||u.activeElement===m.current)&&(M=n(d.current)),M.length>0){var A,$;const B=Boolean(((A=P.current)==null?void 0:A.shiftKey)&&(($=P.current)==null?void 0:$.key)==="Tab"),K=M[0],x=M[M.length-1];B?x.focus():K.focus()}else w.focus()}}},k=T=>{P.current=T,!(o||!s()||T.key!=="Tab")&&u.activeElement===d.current&&T.shiftKey&&(l.current=!0,m.current.focus())};u.addEventListener("focusin",y),u.addEventListener("keydown",k,!0);const S=setInterval(()=>{u.activeElement.tagName==="BODY"&&y()},50);return()=>{clearInterval(S),u.removeEventListener("focusin",y),u.removeEventListener("keydown",k,!0)}},[r,o,i,s,a,n]);const R=u=>{v.current===null&&(v.current=u.relatedTarget),E.current=!0,b.current=u.target;const y=t.props.onFocus;y&&y(u)},D=u=>{v.current===null&&(v.current=u.relatedTarget),E.current=!0};return I(je,{children:[I("div",{tabIndex:a?0:-1,onFocus:D,ref:p,"data-testid":"sentinelStart"}),fe(t,{ref:g,onFocus:R}),I("div",{tabIndex:a?0:-1,onFocus:D,ref:m,"data-testid":"sentinelEnd"})]})}function xt(e){return typeof e=="function"?e():e}const bt=Z(function(t,r){const{children:o,container:i,disablePortal:n=!1}=t,[s,a]=ue(null),l=te(Oe(o)?o.ref:null,r);return Ie(()=>{n||a(xt(i)||document.body)},[i,n]),Ie(()=>{if(s&&!n)return De(r,s),()=>{De(r,null)}},[r,s,n]),n?Oe(o)?fe(o,{ref:l}):o:I(je,{children:s&&tt(o,s)})}),yt=bt;function Tt(e){const t=G(e);return t.body===e?de(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ce(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ue(e){return parseInt(de(e).getComputedStyle(e).paddingRight,10)||0}function Pt(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||o}function He(e,t,r,o=[],i){const n=[t,r,...o];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!Pt(s);a&&l&&ce(s,i)})}function Re(e,t){let r=-1;return e.some((o,i)=>t(o)?(r=i,!0):!1),r}function Rt(e,t){const r=[],o=e.container;if(!t.disableScrollLock){if(Tt(o)){const s=at(G(o));r.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ue(o)+s}px`;const a=G(o).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ue(l)+s}px`})}let n;if(o.parentNode instanceof DocumentFragment)n=G(o).body;else{const s=o.parentElement,a=de(o);n=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:o}r.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{r.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function St(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class kt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,r){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ce(t.modalRef,!1);const i=St(r);He(r,t.mount,t.modalRef,i,!0);const n=Re(this.containers,s=>s.container===r);return n!==-1?(this.containers[n].modals.push(t),o):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:i}),o)}mount(t,r){const o=Re(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=Rt(i,r))}remove(t,r=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Re(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(o,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&ce(t.modalRef,r),He(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&ce(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ct(e){return xe("MuiModal",e)}be("MuiModal",["root","hidden"]);const Nt=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"],wt=e=>{const{open:t,exited:r,classes:o}=e;return ye({root:["root",!t&&r&&"hidden"]},Ct,o)};function Mt(e){return typeof e=="function"?e():e}function Ot(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const It=new kt,Dt=Z(function(t,r){var o;const{children:i,classes:n,closeAfterTransition:s=!1,component:a="div",components:l={},componentsProps:p={},container:m,disableAutoFocus:v=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:E=!1,disablePortal:d=!1,disableRestoreFocus:g=!1,disableScrollLock:P=!1,hideBackdrop:R=!1,keepMounted:D=!1,manager:u=It,onBackdropClick:y,onClose:k,onKeyDown:S,open:T,onTransitionEnter:w,onTransitionExited:A}=t,$=j(t,Nt),[M,B]=ue(!0),K=O({}),x=O(null),c=O(null),C=te(c,r),L=Ot(t),z=(o=t["aria-hidden"])!=null?o:!0,H=()=>G(x.current),h=()=>(K.current.modalRef=c.current,K.current.mountNode=x.current,K.current),N=()=>{u.mount(h(),{disableScrollLock:P}),c.current.scrollTop=0},F=Fe(()=>{const U=Mt(m)||H().body;u.add(h(),U),c.current&&N()}),ne=ee(()=>u.isTopModal(h()),[u]),X=Fe(U=>{x.current=U,U&&(T&&ne()?N():ce(c.current,z))}),W=ee(()=>{u.remove(h(),z)},[u,z]);Y(()=>()=>{W()},[W]),Y(()=>{T?F():(!L||!s)&&W()},[T,W,L,s,F]);const oe=f({},t,{classes:n,closeAfterTransition:s,disableAutoFocus:v,disableEnforceFocus:b,disableEscapeKeyDown:E,disablePortal:d,disableRestoreFocus:g,disableScrollLock:P,exited:M,hideBackdrop:R,keepMounted:D}),pe=wt(oe),he=()=>{B(!1),w&&w()},me=()=>{B(!0),A&&A(),s&&W()},ve=U=>{U.target===U.currentTarget&&(y&&y(U),k&&k(U,"backdropClick"))},_=U=>{S&&S(U),!(U.key!=="Escape"||!ne())&&(E||(U.stopPropagation(),k&&k(U,"escapeKeyDown")))},Ee={};i.props.tabIndex===void 0&&(Ee.tabIndex="-1"),L&&(Ee.onEnter=$e(he,i.props.onEnter),Ee.onExited=$e(me,i.props.onExited));const Me=l.Root||a,Je=Be({elementType:Me,externalSlotProps:p.root,externalForwardedProps:$,additionalProps:{ref:C,role:"presentation",onKeyDown:_},className:pe.root,ownerState:oe}),Pe=l.Backdrop,et=Be({elementType:Pe,externalSlotProps:p.backdrop,additionalProps:{"aria-hidden":!0,onClick:ve,open:T},ownerState:oe});return!D&&!T&&(!L||M)?null:I(yt,{ref:X,container:m,disablePortal:d,children:I(Me,f({},Je,{children:[!R&&Pe?I(Pe,f({},et)):null,I(gt,{disableEnforceFocus:b,disableAutoFocus:v,disableRestoreFocus:g,isEnabled:ne,open:T,children:fe(i,Ee)})]}))})}),Ft=Dt;function Ve(){return ot(rt)}function At(e){return xe("MuiPaper",e)}be("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $t=["className","component","elevation","square","variant"],_e=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Lt=e=>{const{square:t,elevation:r,variant:o,classes:i}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ye(n,At,i)},Bt=ae("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return f({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&f({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ae("#fff",_e(t.elevation))}, ${Ae("#fff",_e(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),Ut=Z(function(t,r){const o=Te({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=o,p=j(o,$t),m=f({},o,{component:n,elevation:s,square:a,variant:l}),v=Lt(m);return I(Bt,f({as:n,ownerState:m,className:se(v.root,i),ref:r},p))}),Ht=Ut,We={disabled:!1};var _t=function(t){return t.scrollTop},le="unmounted",Q="exited",J="entering",ie="entered",Ne="exiting",q=function(e){it(t,e);function t(o,i){var n;n=e.call(this,o,i)||this;var s=i,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=Q,n.appearStatus=J):l=ie:o.unmountOnExit||o.mountOnEnter?l=le:l=Q,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===le?{status:Q}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==J&&s!==ie&&(n=J):(s===J||s===ie)&&(n=Ne)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===J){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:V.findDOMNode(this);s&&_t(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Q&&this.setState({status:le})},r.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[V.findDOMNode(this),a],p=l[0],m=l[1],v=this.getTimeouts(),b=a?v.appear:v.enter;if(!i&&!s||We.disabled){this.safeSetState({status:ie},function(){n.props.onEntered(p)});return}this.props.onEnter(p,m),this.safeSetState({status:J},function(){n.props.onEntering(p,m),n.onTransitionEnd(b,function(){n.safeSetState({status:ie},function(){n.props.onEntered(p,m)})})})},r.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:V.findDOMNode(this);if(!n||We.disabled){this.safeSetState({status:Q},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ne},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Q},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},r.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:V.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],p=l[0],m=l[1];this.props.addEndListener(p,m)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===le)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=j(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return V.createElement(qe.Provider,{value:null},typeof s=="function"?s(i,a):V.cloneElement(V.Children.only(s),a))},t}(V.Component);q.contextType=qe;q.propTypes={};function re(){}q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:re,onEntering:re,onEntered:re,onExit:re,onExiting:re,onExited:re};q.UNMOUNTED=le;q.EXITED=Q;q.ENTERING=J;q.ENTERED=ie;q.EXITING=Ne;const Ye=q,Ze=e=>e.scrollTop;function ge(e,t){var r,o;const{timeout:i,easing:n,style:s={}}=e;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}const Wt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],zt={entering:{opacity:1},entered:{opacity:1}},Kt=Z(function(t,r){const o=Ve(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:p,onEnter:m,onEntered:v,onEntering:b,onExit:E,onExited:d,onExiting:g,style:P,timeout:R=i,TransitionComponent:D=Ye}=t,u=j(t,Wt),y=O(null),k=te(y,a.ref,r),S=x=>c=>{if(x){const C=y.current;c===void 0?x(C):x(C,c)}},T=S(b),w=S((x,c)=>{Ze(x);const C=ge({style:P,timeout:R,easing:l},{mode:"enter"});x.style.webkitTransition=o.transitions.create("opacity",C),x.style.transition=o.transitions.create("opacity",C),m&&m(x,c)}),A=S(v),$=S(g),M=S(x=>{const c=ge({style:P,timeout:R,easing:l},{mode:"exit"});x.style.webkitTransition=o.transitions.create("opacity",c),x.style.transition=o.transitions.create("opacity",c),E&&E(x)}),B=S(d);return I(D,f({appear:s,in:p,nodeRef:y,onEnter:w,onEntered:A,onEntering:T,onExit:M,onExited:B,onExiting:$,addEndListener:x=>{n&&n(y.current,x)},timeout:R},u,{children:(x,c)=>fe(a,f({style:f({opacity:0,visibility:x==="exited"&&!p?"hidden":void 0},zt[x],P,a.props.style),ref:k},c))}))}),Gt=Kt;function jt(e){return xe("MuiBackdrop",e)}be("MuiBackdrop",["root","invisible"]);const qt=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Xt=e=>{const{classes:t,invisible:r}=e;return ye({root:["root",r&&"invisible"]},jt,t)},Vt=ae("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>f({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Yt=Z(function(t,r){var o,i;const n=Te({props:t,name:"MuiBackdrop"}),{children:s,component:a="div",components:l={},componentsProps:p={},className:m,invisible:v=!1,open:b,transitionDuration:E,TransitionComponent:d=Gt}=n,g=j(n,qt),P=f({},n,{component:a,invisible:v}),R=Xt(P);return I(d,f({in:b,timeout:E},g,{children:I(Vt,{"aria-hidden":!0,as:(o=l.Root)!=null?o:a,className:se(R.root,m),ownerState:f({},P,(i=p.root)==null?void 0:i.ownerState),classes:R,ref:r,children:s})}))}),Zt=Yt,Qt=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],Jt=e=>e.classes,en=ae("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(({theme:e,ownerState:t})=>f({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),tn=ae(Zt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),nn=Z(function(t,r){var o,i;const n=Te({name:"MuiModal",props:t}),{BackdropComponent:s=tn,BackdropProps:a,closeAfterTransition:l=!1,children:p,component:m,components:v={},componentsProps:b={},disableAutoFocus:E=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:g=!1,disablePortal:P=!1,disableRestoreFocus:R=!1,disableScrollLock:D=!1,hideBackdrop:u=!1,keepMounted:y=!1,theme:k}=n,S=j(n,Qt),[T,w]=ue(!0),A={closeAfterTransition:l,disableAutoFocus:E,disableEnforceFocus:d,disableEscapeKeyDown:g,disablePortal:P,disableRestoreFocus:R,disableScrollLock:D,hideBackdrop:u,keepMounted:y},$=f({},n,A,{exited:T}),M=Jt($),B=(o=(i=v.Root)!=null?i:m)!=null?o:en;return I(Ft,f({components:f({Root:B,Backdrop:s},v),componentsProps:{root:()=>f({},Ce(b.root,$),!Xe(B)&&{as:m,theme:k}),backdrop:()=>f({},a,Ce(b.backdrop,$))},onTransitionEnter:()=>w(!1),onTransitionExited:()=>w(!0),ref:r},S,{classes:M},A,{children:p}))}),on=nn,rn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function we(e){return`scale(${e}, ${e**2})`}const sn={entering:{opacity:1,transform:we(1)},entered:{opacity:1,transform:"none"}},Se=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Qe=Z(function(t,r){const{addEndListener:o,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:p,onEntering:m,onExit:v,onExited:b,onExiting:E,style:d,timeout:g="auto",TransitionComponent:P=Ye}=t,R=j(t,rn),D=O(),u=O(),y=Ve(),k=O(null),S=te(k,n.ref,r),T=c=>C=>{if(c){const L=k.current;C===void 0?c(L):c(L,C)}},w=T(m),A=T((c,C)=>{Ze(c);const{duration:L,delay:z,easing:H}=ge({style:d,timeout:g,easing:s},{mode:"enter"});let h;g==="auto"?(h=y.transitions.getAutoHeightDuration(c.clientHeight),u.current=h):h=L,c.style.transition=[y.transitions.create("opacity",{duration:h,delay:z}),y.transitions.create("transform",{duration:Se?h:h*.666,delay:z,easing:H})].join(","),l&&l(c,C)}),$=T(p),M=T(E),B=T(c=>{const{duration:C,delay:L,easing:z}=ge({style:d,timeout:g,easing:s},{mode:"exit"});let H;g==="auto"?(H=y.transitions.getAutoHeightDuration(c.clientHeight),u.current=H):H=C,c.style.transition=[y.transitions.create("opacity",{duration:H,delay:L}),y.transitions.create("transform",{duration:Se?H:H*.666,delay:Se?L:L||H*.333,easing:z})].join(","),c.style.opacity=0,c.style.transform=we(.75),v&&v(c)}),K=T(b),x=c=>{g==="auto"&&(D.current=setTimeout(c,u.current||0)),o&&o(k.current,c)};return Y(()=>()=>{clearTimeout(D.current)},[]),I(P,f({appear:i,in:a,nodeRef:k,onEnter:A,onEntered:$,onEntering:w,onExit:B,onExited:K,onExiting:M,addEndListener:x,timeout:g==="auto"?null:g},R,{children:(c,C)=>fe(n,f({style:f({opacity:0,transform:we(.75),visibility:c==="exited"&&!a?"hidden":void 0},sn[c],d,n.props.style),ref:S},C))}))});Qe.muiSupportAuto=!0;const an=Qe;function ln(e){return xe("MuiPopover",e)}be("MuiPopover",["root","paper"]);const cn=["onEntering"],dn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function ze(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.height/2:t==="bottom"&&(r=e.height),r}function Ke(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.width/2:t==="right"&&(r=e.width),r}function Ge(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ke(e){return typeof e=="function"?e():e}const un=e=>{const{classes:t}=e;return ye({root:["root"],paper:["paper"]},ln,t)},fn=ae(on,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),pn=ae(Ht,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),hn=Z(function(t,r){const o=Te({props:t,name:"MuiPopover"}),{action:i,anchorEl:n,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:p,className:m,container:v,elevation:b=8,marginThreshold:E=16,open:d,PaperProps:g={},transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:R=an,transitionDuration:D="auto",TransitionProps:{onEntering:u}={}}=o,y=j(o.TransitionProps,cn),k=j(o,dn),S=O(),T=te(S,g.ref),w=f({},o,{anchorOrigin:s,anchorReference:l,elevation:b,marginThreshold:E,PaperProps:g,transformOrigin:P,TransitionComponent:R,transitionDuration:D,TransitionProps:y}),A=un(w),$=ee(()=>{if(l==="anchorPosition")return a;const h=ke(n),F=(h&&h.nodeType===1?h:G(S.current).body).getBoundingClientRect();return{top:F.top+ze(F,s.vertical),left:F.left+Ke(F,s.horizontal)}},[n,s.horizontal,s.vertical,a,l]),M=ee(h=>({vertical:ze(h,P.vertical),horizontal:Ke(h,P.horizontal)}),[P.horizontal,P.vertical]),B=ee(h=>{const N={width:h.offsetWidth,height:h.offsetHeight},F=M(N);if(l==="none")return{top:null,left:null,transformOrigin:Ge(F)};const ne=$();let X=ne.top-F.vertical,W=ne.left-F.horizontal;const oe=X+N.height,pe=W+N.width,he=de(ke(n)),me=he.innerHeight-E,ve=he.innerWidth-E;if(X<E){const _=X-E;X-=_,F.vertical+=_}else if(oe>me){const _=oe-me;X-=_,F.vertical+=_}if(W<E){const _=W-E;W-=_,F.horizontal+=_}else if(pe>ve){const _=pe-ve;W-=_,F.horizontal+=_}return{top:`${Math.round(X)}px`,left:`${Math.round(W)}px`,transformOrigin:Ge(F)}},[n,l,$,M,E]),[K,x]=ue(d),c=ee(()=>{const h=S.current;if(!h)return;const N=B(h);N.top!==null&&(h.style.top=N.top),N.left!==null&&(h.style.left=N.left),h.style.transformOrigin=N.transformOrigin,x(!0)},[B]),C=(h,N)=>{u&&u(h,N),c()},L=()=>{x(!1)};Y(()=>{d&&c()}),nt(i,()=>d?{updatePosition:()=>{c()}}:null,[d,c]),Y(()=>{if(!d)return;const h=st(()=>{c()}),N=de(n);return N.addEventListener("resize",h),()=>{h.clear(),N.removeEventListener("resize",h)}},[n,d,c]);let z=D;D==="auto"&&!R.muiSupportAuto&&(z=void 0);const H=v||(n?G(ke(n)).body:void 0);return I(fn,f({BackdropProps:{invisible:!0},className:se(A.root,m),container:H,open:d,ref:r,ownerState:w},k,{children:I(R,f({appear:!0,in:d,onEntering:C,onExited:L,timeout:z},y,{children:I(pn,f({elevation:b},g,{ref:T,className:se(A.paper,g.className)},K?void 0:{style:f({},g.style,{opacity:0})},{ownerState:w,children:p}))}))}))}),gn=hn;export{Zt as B,Gt as F,on as M,Ht as P,Ye as T,En as a,gn as b,at as c,st as d,G as e,Be as f,ge as g,Xe as i,de as o,Ze as r,Ve as u};
