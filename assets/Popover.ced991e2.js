import{h as O,m as me,A as ee,x as Y,X as Se,r as ue,W as tt,y as X,a as He,U as nt,j as _,R as J,$ as ot}from"./index.d7c3e191.js";import{a as h,u as V,l as Ne,D as Me,g as ve,b as Ee,_ as K,A as we,e as ge,f as ce,t as rt,w as it,s as re,m as Oe,d as be,i as st,T as We}from"./ButtonBase.9c8be9b5.js";function Ie(...e){return e.reduce((t,r)=>r==null?t:function(...i){t.apply(this,i),r.apply(this,i)},()=>{})}function at(e,t=166){let r;function o(...i){const n=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(n,t)}return o.clear=()=>{clearTimeout(r)},o}function G(e){return e&&e.ownerDocument||document}function de(e){return G(e).defaultView||window}function pn({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=O(e!==void 0),[n,s]=me(t),a=i?e:n,l=ee(v=>{i||s(v)},[]);return[a,l]}function lt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ze(e){return typeof e=="string"}function De(e,t={},r){return ze(e)?t:h({},t,{ownerState:h({},t.ownerState,r)})}function ct(e){return typeof e=="function"?e():e}const dt=Y(function(t,r){const{children:o,container:i,disablePortal:n=!1}=t,[s,a]=me(null),l=V(Se(o)?o.ref:null,r);return Ne(()=>{n||a(ct(i)||document.body)},[i,n]),Ne(()=>{if(s&&!n)return Me(r,s),()=>{Me(r,null)}},[r,s,n]),n?Se(o)?ue(o,{ref:l}):o:s&&tt(o,s)});var ut=dt;function ft(e){const t=G(e);return t.body===e?de(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function le(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ae(e){return parseInt(de(e).getComputedStyle(e).paddingRight,10)||0}function pt(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||o}function Fe(e,t,r,o=[],i){const n=[t,r,...o];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!pt(s);a&&l&&le(s,i)})}function ye(e,t){let r=-1;return e.some((o,i)=>t(o)?(r=i,!0):!1),r}function ht(e,t){const r=[],o=e.container;if(!t.disableScrollLock){if(ft(o)){const l=lt(G(o));r.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ae(o)+l}px`;const v=G(o).querySelectorAll(".mui-fixed");[].forEach.call(v,p=>{r.push({value:p.style.paddingRight,property:"padding-right",el:p}),p.style.paddingRight=`${Ae(p)+l}px`})}const n=o.parentElement,s=de(o),a=(n==null?void 0:n.nodeName)==="HTML"&&s.getComputedStyle(n).overflowY==="scroll"?n:o;r.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{r.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function mt(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class vt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,r){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&le(t.modalRef,!1);const i=mt(r);Fe(r,t.mount,t.modalRef,i,!0);const n=ye(this.containers,s=>s.container===r);return n!==-1?(this.containers[n].modals.push(t),o):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:i}),o)}mount(t,r){const o=ye(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=ht(i,r))}remove(t,r=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=ye(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(o,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&le(t.modalRef,r),Fe(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&le(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Et=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function gt(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function bt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function xt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||bt(e))}function yt(e){const t=[],r=[];return Array.from(e.querySelectorAll(Et)).forEach((o,i)=>{const n=gt(o);n===-1||!xt(o)||(n===0?t.push(o):r.push({documentOrder:i,tabIndex:n,node:o}))}),r.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function Tt(){return!0}function Pt(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:n=yt,isEnabled:s=Tt,open:a}=e,l=O(),v=O(null),p=O(null),m=O(null),k=O(null),E=O(!1),u=O(null),T=V(t.ref,u),P=O(null);X(()=>{!a||!u.current||(E.current=!r)},[r,a]),X(()=>{if(!a||!u.current)return;const f=G(u.current);return u.current.contains(f.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex",-1),E.current&&u.current.focus()),()=>{i||(m.current&&m.current.focus&&(l.current=!0,m.current.focus()),m.current=null)}},[a]),X(()=>{if(!a||!u.current)return;const f=G(u.current),g=y=>{const{current:C}=u;if(C!==null){if(!f.hasFocus()||o||!s()||l.current){l.current=!1;return}if(!C.contains(f.activeElement)){if(y&&k.current!==y.target||f.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!E.current)return;let w=[];if((f.activeElement===v.current||f.activeElement===p.current)&&(w=n(u.current)),w.length>0){var M,U;const H=Boolean(((M=P.current)==null?void 0:M.shiftKey)&&((U=P.current)==null?void 0:U.key)==="Tab"),A=w[0],z=w[w.length-1];H?z.focus():A.focus()}else C.focus()}}},S=y=>{P.current=y,!(o||!s()||y.key!=="Tab")&&f.activeElement===u.current&&y.shiftKey&&(l.current=!0,p.current.focus())};f.addEventListener("focusin",g),f.addEventListener("keydown",S,!0);const L=setInterval(()=>{f.activeElement.tagName==="BODY"&&g()},50);return()=>{clearInterval(L),f.removeEventListener("focusin",g),f.removeEventListener("keydown",S,!0)}},[r,o,i,s,a,n]);const N=f=>{m.current===null&&(m.current=f.relatedTarget),E.current=!0,k.current=f.target;const g=t.props.onFocus;g&&g(f)},I=f=>{m.current===null&&(m.current=f.relatedTarget),E.current=!0};return He(nt,{children:[_("div",{tabIndex:0,onFocus:I,ref:v,"data-test":"sentinelStart"}),ue(t,{ref:T,onFocus:N}),_("div",{tabIndex:0,onFocus:I,ref:p,"data-test":"sentinelEnd"})]})}function Rt(e){return ve("MuiModal",e)}Ee("MuiModal",["root","hidden"]);const kt=["children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"],Ct=e=>{const{open:t,exited:r,classes:o}=e;return ge({root:["root",!t&&r&&"hidden"]},Rt,o)};function St(e){return typeof e=="function"?e():e}function Nt(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const Mt=new vt,wt=Y(function(t,r){var o,i;const{children:n,classes:s,className:a,closeAfterTransition:l=!1,component:v="div",components:p={},componentsProps:m={},container:k,disableAutoFocus:E=!1,disableEnforceFocus:u=!1,disableEscapeKeyDown:T=!1,disablePortal:P=!1,disableRestoreFocus:N=!1,disableScrollLock:I=!1,hideBackdrop:f=!1,keepMounted:g=!1,manager:S=Mt,onBackdropClick:L,onClose:y,onKeyDown:C,open:M,onTransitionEnter:U,onTransitionExited:w}=t,H=K(t,kt),[A,z]=me(!0),b=O({}),d=O(null),c=O(null),x=V(c,r),R=Nt(t),D=(o=t["aria-hidden"])!=null?o:!0,F=()=>G(d.current),W=()=>(b.current.modalRef=c.current,b.current.mountNode=d.current,b.current),ie=()=>{S.mount(W(),{disableScrollLock:I}),c.current.scrollTop=0},se=we(()=>{const B=St(k)||F().body;S.add(W(),B),c.current&&ie()}),te=ee(()=>S.isTopModal(W()),[S]),fe=we(B=>{d.current=B,B&&(M&&te()?ie():le(c.current,D))}),q=ee(()=>{S.remove(W(),D)},[S,D]);X(()=>()=>{q()},[q]),X(()=>{M?se():(!R||!l)&&q()},[M,q,R,l,se]);const $=h({},t,{classes:s,closeAfterTransition:l,disableAutoFocus:E,disableEnforceFocus:u,disableEscapeKeyDown:T,disablePortal:P,disableRestoreFocus:N,disableScrollLock:I,exited:A,hideBackdrop:f,keepMounted:g}),Xe=Ct($);if(!g&&!M&&(!R||A))return null;const Ve=()=>{z(!1),U&&U()},Ye=()=>{z(!0),w&&w(),l&&q()},Je=B=>{B.target===B.currentTarget&&(L&&L(B),y&&y(B,"backdropClick"))},Qe=B=>{C&&C(B),!(B.key!=="Escape"||!te())&&(T||(B.stopPropagation(),y&&y(B,"escapeKeyDown")))},pe={};n.props.tabIndex===void 0&&(pe.tabIndex="-1"),R&&(pe.onEnter=Ie(Ve,n.props.onEnter),pe.onExited=Ie(Ye,n.props.onExited));const Ce=p.Root||v,Ze=De(Ce,h({role:"presentation"},H,m.root,{ref:x,onKeyDown:Qe,className:ce(Xe.root,(i=m.root)==null?void 0:i.className,a)}),$),xe=p.Backdrop,et=De(xe,h({"aria-hidden":!0,open:M,onClick:Je},m.backdrop),$);return _(ut,{ref:fe,container:k,disablePortal:P,children:He(Ce,h({},Ze,{children:[!f&&xe?_(xe,h({},et)):null,_(Pt,{disableEnforceFocus:u,disableAutoFocus:E,disableRestoreFocus:N,isEnabled:te,open:M,children:ue(n,pe)})]}))})});var Ot=wt;function Ke(){return rt(it)}function It(e){return ve("MuiPaper",e)}Ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Dt=["className","component","elevation","square","variant"],$e=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},At=e=>{const{square:t,elevation:r,variant:o,classes:i}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ge(n,It,i)},Ft=re("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return h({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&h({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Oe("#fff",$e(t.elevation))}, ${Oe("#fff",$e(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),$t=Y(function(t,r){const o=be({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=o,v=K(o,Dt),p=h({},o,{component:n,elevation:s,square:a,variant:l}),m=At(p);return _(Ft,h({as:n,ownerState:p,className:ce(m.root,i),ref:r},v))});var Lt=$t,Le={disabled:!1},ae="unmounted",Q="exited",Z="entering",oe="entered",Re="exiting",j=function(e){st(t,e);function t(o,i){var n;n=e.call(this,o,i)||this;var s=i,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=Q,n.appearStatus=Z):l=oe:o.unmountOnExit||o.mountOnEnter?l=ae:l=Q,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===ae?{status:Q}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Z&&s!==oe&&(n=Z):(s===Z||s===oe)&&(n=Re)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(i,n){i===void 0&&(i=!1),n!==null?(this.cancelNextCallback(),n===Z?this.performEnter(i):this.performExit()):this.props.unmountOnExit&&this.state.status===Q&&this.setState({status:ae})},r.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[J.findDOMNode(this),a],v=l[0],p=l[1],m=this.getTimeouts(),k=a?m.appear:m.enter;if(!i&&!s||Le.disabled){this.safeSetState({status:oe},function(){n.props.onEntered(v)});return}this.props.onEnter(v,p),this.safeSetState({status:Z},function(){n.props.onEntering(v,p),n.onTransitionEnd(k,function(){n.safeSetState({status:oe},function(){n.props.onEntered(v,p)})})})},r.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:J.findDOMNode(this);if(!n||Le.disabled){this.safeSetState({status:Q},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Re},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Q},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},r.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],v=l[0],p=l[1];this.props.addEndListener(v,p)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===ae)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=K(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return J.createElement(We.Provider,{value:null},typeof s=="function"?s(i,a):J.cloneElement(J.Children.only(s),a))},t}(J.Component);j.contextType=We;j.propTypes={};function ne(){}j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ne,onEntering:ne,onEntered:ne,onExit:ne,onExiting:ne,onExited:ne};j.UNMOUNTED=ae;j.EXITED=Q;j.ENTERING=Z;j.ENTERED=oe;j.EXITING=Re;var Ge=j;const je=e=>e.scrollTop;function he(e,t){var r,o;const{timeout:i,easing:n,style:s={}}=e;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}const Ut=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Bt={entering:{opacity:1},entered:{opacity:1}},_t=Y(function(t,r){const o=Ke(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:v,onEnter:p,onEntered:m,onEntering:k,onExit:E,onExited:u,onExiting:T,style:P,timeout:N=i,TransitionComponent:I=Ge}=t,f=K(t,Ut),g=O(null),S=V(a.ref,r),L=V(g,S),y=b=>d=>{if(b){const c=g.current;d===void 0?b(c):b(c,d)}},C=y(k),M=y((b,d)=>{je(b);const c=he({style:P,timeout:N,easing:l},{mode:"enter"});b.style.webkitTransition=o.transitions.create("opacity",c),b.style.transition=o.transitions.create("opacity",c),p&&p(b,d)}),U=y(m),w=y(T),H=y(b=>{const d=he({style:P,timeout:N,easing:l},{mode:"exit"});b.style.webkitTransition=o.transitions.create("opacity",d),b.style.transition=o.transitions.create("opacity",d),E&&E(b)}),A=y(u);return _(I,h({appear:s,in:v,nodeRef:g,onEnter:M,onEntered:U,onEntering:C,onExit:H,onExited:A,onExiting:w,addEndListener:b=>{n&&n(g.current,b)},timeout:N},f,{children:(b,d)=>ue(a,h({style:h({opacity:0,visibility:b==="exited"&&!v?"hidden":void 0},Bt[b],P,a.props.style),ref:L},d))}))});var Ht=_t;function Wt(e){return ve("MuiBackdrop",e)}Ee("MuiBackdrop",["root","invisible"]);const zt=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Kt=e=>{const{classes:t,invisible:r}=e;return ge({root:["root",r&&"invisible"]},Wt,t)},Gt=re("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>h({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),jt=Y(function(t,r){var o,i;const n=be({props:t,name:"MuiBackdrop"}),{children:s,component:a="div",components:l={},componentsProps:v={},className:p,invisible:m=!1,open:k,transitionDuration:E,TransitionComponent:u=Ht}=n,T=K(n,zt),P=h({},n,{component:a,invisible:m}),N=Kt(P);return _(u,h({in:k,timeout:E},T,{children:_(Gt,{"aria-hidden":!0,as:(o=l.Root)!=null?o:a,className:ce(N.root,p),ownerState:h({},P,(i=v.root)==null?void 0:i.ownerState),classes:N,ref:r,children:s})}))});var qt=jt;const Xt=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],Vt=e=>e.classes,Yt=re("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(({theme:e,ownerState:t})=>h({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Jt=re(qt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Qt=Y(function(t,r){var o,i;const n=be({name:"MuiModal",props:t}),{BackdropComponent:s=Jt,BackdropProps:a,closeAfterTransition:l=!1,children:v,component:p,components:m={},componentsProps:k={},disableAutoFocus:E=!1,disableEnforceFocus:u=!1,disableEscapeKeyDown:T=!1,disablePortal:P=!1,disableRestoreFocus:N=!1,disableScrollLock:I=!1,hideBackdrop:f=!1,keepMounted:g=!1,theme:S}=n,L=K(n,Xt),[y,C]=me(!0),M={closeAfterTransition:l,disableAutoFocus:E,disableEnforceFocus:u,disableEscapeKeyDown:T,disablePortal:P,disableRestoreFocus:N,disableScrollLock:I,hideBackdrop:f,keepMounted:g},U=h({},n,M,{exited:y}),w=Vt(U),H=(o=(i=m.Root)!=null?i:p)!=null?o:Yt;return _(Ot,h({components:h({Root:H,Backdrop:s},m),componentsProps:{root:h({},k.root,!ze(H)&&{as:p,theme:S}),backdrop:h({},a,k.backdrop)},onTransitionEnter:()=>C(!1),onTransitionExited:()=>C(!0),ref:r},L,{classes:w},M,{children:v}))});var Zt=Qt;const en=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ke(e){return`scale(${e}, ${e**2})`}const tn={entering:{opacity:1,transform:ke(1)},entered:{opacity:1,transform:"none"}},Te=typeof navigator!="undefined"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),qe=Y(function(t,r){const{addEndListener:o,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:v,onEntering:p,onExit:m,onExited:k,onExiting:E,style:u,timeout:T="auto",TransitionComponent:P=Ge}=t,N=K(t,en),I=O(),f=O(),g=Ke(),S=O(null),L=V(n.ref,r),y=V(S,L),C=d=>c=>{if(d){const x=S.current;c===void 0?d(x):d(x,c)}},M=C(p),U=C((d,c)=>{je(d);const{duration:x,delay:R,easing:D}=he({style:u,timeout:T,easing:s},{mode:"enter"});let F;T==="auto"?(F=g.transitions.getAutoHeightDuration(d.clientHeight),f.current=F):F=x,d.style.transition=[g.transitions.create("opacity",{duration:F,delay:R}),g.transitions.create("transform",{duration:Te?F:F*.666,delay:R,easing:D})].join(","),l&&l(d,c)}),w=C(v),H=C(E),A=C(d=>{const{duration:c,delay:x,easing:R}=he({style:u,timeout:T,easing:s},{mode:"exit"});let D;T==="auto"?(D=g.transitions.getAutoHeightDuration(d.clientHeight),f.current=D):D=c,d.style.transition=[g.transitions.create("opacity",{duration:D,delay:x}),g.transitions.create("transform",{duration:Te?D:D*.666,delay:Te?x:x||D*.333,easing:R})].join(","),d.style.opacity=0,d.style.transform=ke(.75),m&&m(d)}),z=C(k),b=d=>{T==="auto"&&(I.current=setTimeout(d,f.current||0)),o&&o(S.current,d)};return X(()=>()=>{clearTimeout(I.current)},[]),_(P,h({appear:i,in:a,nodeRef:S,onEnter:U,onEntered:w,onEntering:M,onExit:A,onExited:z,onExiting:H,addEndListener:b,timeout:T==="auto"?null:T},N,{children:(d,c)=>ue(n,h({style:h({opacity:0,transform:ke(.75),visibility:d==="exited"&&!a?"hidden":void 0},tn[d],u,n.props.style),ref:y},c))}))});qe.muiSupportAuto=!0;var nn=qe;function on(e){return ve("MuiPopover",e)}Ee("MuiPopover",["root","paper"]);const rn=["onEntering"],sn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Ue(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.height/2:t==="bottom"&&(r=e.height),r}function Be(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.width/2:t==="right"&&(r=e.width),r}function _e(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Pe(e){return typeof e=="function"?e():e}const an=e=>{const{classes:t}=e;return ge({root:["root"],paper:["paper"]},on,t)},ln=re(Zt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),cn=re(Lt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),dn=Y(function(t,r){const o=be({props:t,name:"MuiPopover"}),{action:i,anchorEl:n,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:v,className:p,container:m,elevation:k=8,marginThreshold:E=16,open:u,PaperProps:T={},transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:N=nn,transitionDuration:I="auto",TransitionProps:{onEntering:f}={}}=o,g=K(o.TransitionProps,rn),S=K(o,sn),L=O(),y=V(L,T.ref),C=h({},o,{anchorOrigin:s,anchorReference:l,elevation:k,marginThreshold:E,PaperProps:T,transformOrigin:P,TransitionComponent:N,transitionDuration:I,TransitionProps:g}),M=an(C),U=ee(()=>{if(l==="anchorPosition")return a;const c=Pe(n),R=(c&&c.nodeType===1?c:G(L.current).body).getBoundingClientRect();return{top:R.top+Ue(R,s.vertical),left:R.left+Be(R,s.horizontal)}},[n,s.horizontal,s.vertical,a,l]),w=ee(c=>({vertical:Ue(c,P.vertical),horizontal:Be(c,P.horizontal)}),[P.horizontal,P.vertical]),H=ee(c=>{const x={width:c.offsetWidth,height:c.offsetHeight},R=w(x);if(l==="none")return{top:null,left:null,transformOrigin:_e(R)};const D=U();let F=D.top-R.vertical,W=D.left-R.horizontal;const ie=F+x.height,se=W+x.width,te=de(Pe(n)),fe=te.innerHeight-E,q=te.innerWidth-E;if(F<E){const $=F-E;F-=$,R.vertical+=$}else if(ie>fe){const $=ie-fe;F-=$,R.vertical+=$}if(W<E){const $=W-E;W-=$,R.horizontal+=$}else if(se>q){const $=se-q;W-=$,R.horizontal+=$}return{top:`${Math.round(F)}px`,left:`${Math.round(W)}px`,transformOrigin:_e(R)}},[n,l,U,w,E]),A=ee(()=>{const c=L.current;if(!c)return;const x=H(c);x.top!==null&&(c.style.top=x.top),x.left!==null&&(c.style.left=x.left),c.style.transformOrigin=x.transformOrigin},[H]),z=(c,x)=>{f&&f(c,x),A()};X(()=>{u&&A()}),ot(i,()=>u?{updatePosition:()=>{A()}}:null,[u,A]),X(()=>{if(!u)return;const c=at(()=>{A()}),x=de(n);return x.addEventListener("resize",c),()=>{c.clear(),x.removeEventListener("resize",c)}},[n,u,A]);let b=I;I==="auto"&&!N.muiSupportAuto&&(b=void 0);const d=m||(n?G(Pe(n)).body:void 0);return _(ln,h({BackdropProps:{invisible:!0},className:ce(M.root,p),container:d,open:u,ref:r,ownerState:C},S,{children:_(N,h({appear:!0,in:u,onEntering:z,timeout:b},g,{children:_(cn,h({elevation:k},T,{ref:y,className:ce(M.paper,T.className),children:v}))}))}))});var hn=dn;export{qt as B,Ht as F,Zt as M,Lt as P,Ge as T,pn as a,hn as b,lt as c,at as d,G as e,De as f,he as g,ze as i,de as o,je as r,Ke as u};
