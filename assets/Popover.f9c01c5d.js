import{s as O,y as me,T as ee,R as Z,S as Ne,r as de,V as et,_ as Y,e as A,p as tt,k as X,Y as nt}from"./index.7054238d.js";import{a as p,e as ie,_ as K,u as G,l as Me,D as we,g as ve,b as Ee,A as Oe,f as ge,t as ot,w as rt,s as se,m as Ie,d as xe,i as it,T as ze}from"./ButtonBase.34854dae.js";function De(...e){return e.reduce((t,r)=>r==null?t:function(...i){t.apply(this,i),r.apply(this,i)},()=>{})}function st(e,t=166){let r;function o(...i){const n=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(n,t)}return o.clear=()=>{clearTimeout(r)},o}function z(e){return e&&e.ownerDocument||document}function ce(e){return z(e).defaultView||window}function En({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=O(e!==void 0),[n,s]=me(t),a=i?e:n,l=ee(f=>{i||s(f)},[]);return[a,l]}function at(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ke(e){return typeof e=="string"}function lt(e,t={},r){return Ke(e)?t:p({},t,{ownerState:p({},t.ownerState,r)})}function ct(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{r[o]=e[o]}),r}function Re(e,t){return typeof e=="function"?e(t):e}function Fe(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function dt(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:i,className:n}=e;if(!t){const E=ie(i==null?void 0:i.className,o==null?void 0:o.className,n,r==null?void 0:r.className),d=p({},r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),b=p({},r,i,o);return E.length>0&&(b.className=E),Object.keys(d).length>0&&(b.style=d),{props:b,internalRef:void 0}}const s=ct(p({},i,o)),a=Fe(o),l=Fe(i),f=t(s),m=ie(f==null?void 0:f.className,r==null?void 0:r.className,n,i==null?void 0:i.className,o==null?void 0:o.className),v=p({},f==null?void 0:f.style,r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),y=p({},f,r,l,a);return m.length>0&&(y.className=m),Object.keys(v).length>0&&(y.style=v),{props:y,internalRef:f.ref}}const ut=["elementType","externalSlotProps","ownerState"];function Ae(e){var t;const{elementType:r,externalSlotProps:o,ownerState:i}=e,n=K(e,ut),s=Re(o,i),{props:a,internalRef:l}=dt(p({},n,{externalSlotProps:s})),f=G(l,G(s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref));return lt(r,p({},a,{ref:f}),i)}function ft(e){return typeof e=="function"?e():e}const pt=Z(function(t,r){const{children:o,container:i,disablePortal:n=!1}=t,[s,a]=me(null),l=G(Ne(o)?o.ref:null,r);return Me(()=>{n||a(ft(i)||document.body)},[i,n]),Me(()=>{if(s&&!n)return we(r,s),()=>{we(r,null)}},[r,s,n]),n?Ne(o)?de(o,{ref:l}):o:s&&et(o,s)}),ht=pt;function mt(e){const t=z(e);return t.body===e?ce(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function le(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function $e(e){return parseInt(ce(e).getComputedStyle(e).paddingRight,10)||0}function vt(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||o}function Le(e,t,r,o=[],i){const n=[t,r,...o];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!vt(s);a&&l&&le(s,i)})}function ye(e,t){let r=-1;return e.some((o,i)=>t(o)?(r=i,!0):!1),r}function Et(e,t){const r=[],o=e.container;if(!t.disableScrollLock){if(mt(o)){const s=at(z(o));r.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${$e(o)+s}px`;const a=z(o).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${$e(l)+s}px`})}let n;if(o.parentNode instanceof DocumentFragment)n=z(o).body;else{const s=o.parentElement,a=ce(o);n=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:o}r.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{r.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function gt(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class xt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,r){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&le(t.modalRef,!1);const i=gt(r);Le(r,t.mount,t.modalRef,i,!0);const n=ye(this.containers,s=>s.container===r);return n!==-1?(this.containers[n].modals.push(t),o):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:i}),o)}mount(t,r){const o=ye(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=Et(i,r))}remove(t,r=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=ye(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(o,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&le(t.modalRef,r),Le(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&le(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const bt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function yt(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Tt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function Pt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Tt(e))}function Rt(e){const t=[],r=[];return Array.from(e.querySelectorAll(bt)).forEach((o,i)=>{const n=yt(o);n===-1||!Pt(o)||(n===0?t.push(o):r.push({documentOrder:i,tabIndex:n,node:o}))}),r.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function St(){return!0}function kt(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:n=Rt,isEnabled:s=St,open:a}=e,l=O(),f=O(null),m=O(null),v=O(null),y=O(null),E=O(!1),d=O(null),b=G(t.ref,d),R=O(null);Y(()=>{!a||!d.current||(E.current=!r)},[r,a]),Y(()=>{if(!a||!d.current)return;const u=z(d.current);return d.current.contains(u.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex",-1),E.current&&d.current.focus()),()=>{i||(v.current&&v.current.focus&&(l.current=!0,v.current.focus()),v.current=null)}},[a]),Y(()=>{if(!a||!d.current)return;const u=z(d.current),T=P=>{const{current:S}=d;if(S!==null){if(!u.hasFocus()||o||!s()||l.current){l.current=!1;return}if(!S.contains(u.activeElement)){if(P&&y.current!==P.target||u.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!E.current)return;let M=[];if((u.activeElement===f.current||u.activeElement===m.current)&&(M=n(d.current)),M.length>0){var $,L;const U=Boolean((($=R.current)==null?void 0:$.shiftKey)&&((L=R.current)==null?void 0:L.key)==="Tab"),D=M[0],W=M[M.length-1];U?W.focus():D.focus()}else S.focus()}}},N=P=>{R.current=P,!(o||!s()||P.key!=="Tab")&&u.activeElement===d.current&&P.shiftKey&&(l.current=!0,m.current.focus())};u.addEventListener("focusin",T),u.addEventListener("keydown",N,!0);const B=setInterval(()=>{u.activeElement.tagName==="BODY"&&T()},50);return()=>{clearInterval(B),u.removeEventListener("focusin",T),u.removeEventListener("keydown",N,!0)}},[r,o,i,s,a,n]);const C=u=>{v.current===null&&(v.current=u.relatedTarget),E.current=!0,y.current=u.target;const T=t.props.onFocus;T&&T(u)},I=u=>{v.current===null&&(v.current=u.relatedTarget),E.current=!0};return A(tt,{children:[A("div",{tabIndex:0,onFocus:I,ref:f,"data-test":"sentinelStart"}),de(t,{ref:b,onFocus:C}),A("div",{tabIndex:0,onFocus:I,ref:m,"data-test":"sentinelEnd"})]})}function Ct(e){return ve("MuiModal",e)}Ee("MuiModal",["root","hidden"]);const Nt=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"],Mt=e=>{const{open:t,exited:r,classes:o}=e;return ge({root:["root",!t&&r&&"hidden"]},Ct,o)};function wt(e){return typeof e=="function"?e():e}function Ot(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const It=new xt,Dt=Z(function(t,r){var o;const{children:i,classes:n,closeAfterTransition:s=!1,component:a="div",components:l={},componentsProps:f={},container:m,disableAutoFocus:v=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:E=!1,disablePortal:d=!1,disableRestoreFocus:b=!1,disableScrollLock:R=!1,hideBackdrop:C=!1,keepMounted:I=!1,manager:u=It,onBackdropClick:T,onClose:N,onKeyDown:B,open:P,onTransitionEnter:S,onTransitionExited:$}=t,L=K(t,Nt),[M,U]=me(!0),D=O({}),W=O(null),g=O(null),h=G(g,r),c=Ot(t),x=(o=t["aria-hidden"])!=null?o:!0,k=()=>z(W.current),w=()=>(D.current.modalRef=g.current,D.current.mountNode=W.current,D.current),F=()=>{u.mount(w(),{disableScrollLock:R}),g.current.scrollTop=0},q=Oe(()=>{const H=wt(m)||k().body;u.add(w(),H),g.current&&F()}),te=ee(()=>u.isTopModal(w()),[u]),ue=Oe(H=>{W.current=H,H&&(P&&te()?F():le(g.current,x))}),V=ee(()=>{u.remove(w(),x)},[u,x]);Y(()=>()=>{V()},[V]),Y(()=>{P?q():(!c||!s)&&V()},[P,V,c,s,q]);const ne=p({},t,{classes:n,closeAfterTransition:s,disableAutoFocus:v,disableEnforceFocus:y,disableEscapeKeyDown:E,disablePortal:d,disableRestoreFocus:b,disableScrollLock:R,exited:M,hideBackdrop:C,keepMounted:I}),fe=Mt(ne),_=()=>{U(!1),S&&S()},Xe=()=>{U(!0),$&&$(),s&&V()},Ye=H=>{H.target===H.currentTarget&&(T&&T(H),N&&N(H,"backdropClick"))},Ze=H=>{B&&B(H),!(H.key!=="Escape"||!te())&&(E||(H.stopPropagation(),N&&N(H,"escapeKeyDown")))},pe={};i.props.tabIndex===void 0&&(pe.tabIndex="-1"),c&&(pe.onEnter=De(_,i.props.onEnter),pe.onExited=De(Xe,i.props.onExited));const Ce=l.Root||a,Je=Ae({elementType:Ce,externalSlotProps:f.root,externalForwardedProps:L,additionalProps:{ref:h,role:"presentation",onKeyDown:Ze},className:fe.root,ownerState:ne}),be=l.Backdrop,Qe=Ae({elementType:be,externalSlotProps:f.backdrop,additionalProps:{"aria-hidden":!0,onClick:Ye,open:P},ownerState:ne});return!I&&!P&&(!c||M)?null:A(ht,{ref:ue,container:m,disablePortal:d,children:A(Ce,p({},Je,{children:[!C&&be?A(be,p({},Qe)):null,A(kt,{disableEnforceFocus:y,disableAutoFocus:v,disableRestoreFocus:b,isEnabled:te,open:P,children:de(i,pe)})]}))})}),Ft=Dt;function Ge(){return ot(rt)}function At(e){return ve("MuiPaper",e)}Ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $t=["className","component","elevation","square","variant"],Be=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Lt=e=>{const{square:t,elevation:r,variant:o,classes:i}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ge(n,At,i)},Bt=se("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ie("#fff",Be(t.elevation))}, ${Ie("#fff",Be(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),Ut=Z(function(t,r){const o=xe({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=o,f=K(o,$t),m=p({},o,{component:n,elevation:s,square:a,variant:l}),v=Lt(m);return A(Bt,p({as:n,ownerState:m,className:ie(v.root,i),ref:r},f))}),Ht=Ut,Ue={disabled:!1};var _t=function(t){return t.scrollTop},ae="unmounted",J="exited",Q="entering",re="entered",Se="exiting",j=function(e){it(t,e);function t(o,i){var n;n=e.call(this,o,i)||this;var s=i,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=J,n.appearStatus=Q):l=re:o.unmountOnExit||o.mountOnEnter?l=ae:l=J,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===ae?{status:J}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Q&&s!==re&&(n=Q):(s===Q||s===re)&&(n=Se)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===Q){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this);s&&_t(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:ae})},r.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[X.findDOMNode(this),a],f=l[0],m=l[1],v=this.getTimeouts(),y=a?v.appear:v.enter;if(!i&&!s||Ue.disabled){this.safeSetState({status:re},function(){n.props.onEntered(f)});return}this.props.onEnter(f,m),this.safeSetState({status:Q},function(){n.props.onEntering(f,m),n.onTransitionEnd(y,function(){n.safeSetState({status:re},function(){n.props.onEntered(f,m)})})})},r.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:X.findDOMNode(this);if(!n||Ue.disabled){this.safeSetState({status:J},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Se},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:J},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},r.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],f=l[0],m=l[1];this.props.addEndListener(f,m)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===ae)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=K(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return X.createElement(ze.Provider,{value:null},typeof s=="function"?s(i,a):X.cloneElement(X.Children.only(s),a))},t}(X.Component);j.contextType=ze;j.propTypes={};function oe(){}j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:oe,onEntering:oe,onEntered:oe,onExit:oe,onExiting:oe,onExited:oe};j.UNMOUNTED=ae;j.EXITED=J;j.ENTERING=Q;j.ENTERED=re;j.EXITING=Se;const qe=j,je=e=>e.scrollTop;function he(e,t){var r,o;const{timeout:i,easing:n,style:s={}}=e;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}const Wt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],zt={entering:{opacity:1},entered:{opacity:1}},Kt=Z(function(t,r){const o=Ge(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:f,onEnter:m,onEntered:v,onEntering:y,onExit:E,onExited:d,onExiting:b,style:R,timeout:C=i,TransitionComponent:I=qe}=t,u=K(t,Wt),T=O(null),N=G(a.ref,r),B=G(T,N),P=g=>h=>{if(g){const c=T.current;h===void 0?g(c):g(c,h)}},S=P(y),$=P((g,h)=>{je(g);const c=he({style:R,timeout:C,easing:l},{mode:"enter"});g.style.webkitTransition=o.transitions.create("opacity",c),g.style.transition=o.transitions.create("opacity",c),m&&m(g,h)}),L=P(v),M=P(b),U=P(g=>{const h=he({style:R,timeout:C,easing:l},{mode:"exit"});g.style.webkitTransition=o.transitions.create("opacity",h),g.style.transition=o.transitions.create("opacity",h),E&&E(g)}),D=P(d);return A(I,p({appear:s,in:f,nodeRef:T,onEnter:$,onEntered:L,onEntering:S,onExit:U,onExited:D,onExiting:M,addEndListener:g=>{n&&n(T.current,g)},timeout:C},u,{children:(g,h)=>de(a,p({style:p({opacity:0,visibility:g==="exited"&&!f?"hidden":void 0},zt[g],R,a.props.style),ref:B},h))}))}),Gt=Kt;function qt(e){return ve("MuiBackdrop",e)}Ee("MuiBackdrop",["root","invisible"]);const jt=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Vt=e=>{const{classes:t,invisible:r}=e;return ge({root:["root",r&&"invisible"]},qt,t)},Xt=se("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>p({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Yt=Z(function(t,r){var o,i;const n=xe({props:t,name:"MuiBackdrop"}),{children:s,component:a="div",components:l={},componentsProps:f={},className:m,invisible:v=!1,open:y,transitionDuration:E,TransitionComponent:d=Gt}=n,b=K(n,jt),R=p({},n,{component:a,invisible:v}),C=Vt(R);return A(d,p({in:y,timeout:E},b,{children:A(Xt,{"aria-hidden":!0,as:(o=l.Root)!=null?o:a,className:ie(C.root,m),ownerState:p({},R,(i=f.root)==null?void 0:i.ownerState),classes:C,ref:r,children:s})}))}),Zt=Yt,Jt=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],Qt=e=>e.classes,en=se("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(({theme:e,ownerState:t})=>p({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),tn=se(Zt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),nn=Z(function(t,r){var o,i;const n=xe({name:"MuiModal",props:t}),{BackdropComponent:s=tn,BackdropProps:a,closeAfterTransition:l=!1,children:f,component:m,components:v={},componentsProps:y={},disableAutoFocus:E=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:b=!1,disablePortal:R=!1,disableRestoreFocus:C=!1,disableScrollLock:I=!1,hideBackdrop:u=!1,keepMounted:T=!1,theme:N}=n,B=K(n,Jt),[P,S]=me(!0),$={closeAfterTransition:l,disableAutoFocus:E,disableEnforceFocus:d,disableEscapeKeyDown:b,disablePortal:R,disableRestoreFocus:C,disableScrollLock:I,hideBackdrop:u,keepMounted:T},L=p({},n,$,{exited:P}),M=Qt(L),U=(o=(i=v.Root)!=null?i:m)!=null?o:en;return A(Ft,p({components:p({Root:U,Backdrop:s},v),componentsProps:{root:()=>p({},Re(y.root,L),!Ke(U)&&{as:m,theme:N}),backdrop:()=>p({},a,Re(y.backdrop,L))},onTransitionEnter:()=>S(!1),onTransitionExited:()=>S(!0),ref:r},B,{classes:M},$,{children:f}))}),on=nn,rn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ke(e){return`scale(${e}, ${e**2})`}const sn={entering:{opacity:1,transform:ke(1)},entered:{opacity:1,transform:"none"}},Te=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ve=Z(function(t,r){const{addEndListener:o,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:f,onEntering:m,onExit:v,onExited:y,onExiting:E,style:d,timeout:b="auto",TransitionComponent:R=qe}=t,C=K(t,rn),I=O(),u=O(),T=Ge(),N=O(null),B=G(n.ref,r),P=G(N,B),S=h=>c=>{if(h){const x=N.current;c===void 0?h(x):h(x,c)}},$=S(m),L=S((h,c)=>{je(h);const{duration:x,delay:k,easing:w}=he({style:d,timeout:b,easing:s},{mode:"enter"});let F;b==="auto"?(F=T.transitions.getAutoHeightDuration(h.clientHeight),u.current=F):F=x,h.style.transition=[T.transitions.create("opacity",{duration:F,delay:k}),T.transitions.create("transform",{duration:Te?F:F*.666,delay:k,easing:w})].join(","),l&&l(h,c)}),M=S(f),U=S(E),D=S(h=>{const{duration:c,delay:x,easing:k}=he({style:d,timeout:b,easing:s},{mode:"exit"});let w;b==="auto"?(w=T.transitions.getAutoHeightDuration(h.clientHeight),u.current=w):w=c,h.style.transition=[T.transitions.create("opacity",{duration:w,delay:x}),T.transitions.create("transform",{duration:Te?w:w*.666,delay:Te?x:x||w*.333,easing:k})].join(","),h.style.opacity=0,h.style.transform=ke(.75),v&&v(h)}),W=S(y),g=h=>{b==="auto"&&(I.current=setTimeout(h,u.current||0)),o&&o(N.current,h)};return Y(()=>()=>{clearTimeout(I.current)},[]),A(R,p({appear:i,in:a,nodeRef:N,onEnter:L,onEntered:M,onEntering:$,onExit:D,onExited:W,onExiting:U,addEndListener:g,timeout:b==="auto"?null:b},C,{children:(h,c)=>de(n,p({style:p({opacity:0,transform:ke(.75),visibility:h==="exited"&&!a?"hidden":void 0},sn[h],d,n.props.style),ref:P},c))}))});Ve.muiSupportAuto=!0;const an=Ve;function ln(e){return ve("MuiPopover",e)}Ee("MuiPopover",["root","paper"]);const cn=["onEntering"],dn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function He(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.height/2:t==="bottom"&&(r=e.height),r}function _e(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.width/2:t==="right"&&(r=e.width),r}function We(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Pe(e){return typeof e=="function"?e():e}const un=e=>{const{classes:t}=e;return ge({root:["root"],paper:["paper"]},ln,t)},fn=se(on,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),pn=se(Ht,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),hn=Z(function(t,r){const o=xe({props:t,name:"MuiPopover"}),{action:i,anchorEl:n,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:f,className:m,container:v,elevation:y=8,marginThreshold:E=16,open:d,PaperProps:b={},transformOrigin:R={vertical:"top",horizontal:"left"},TransitionComponent:C=an,transitionDuration:I="auto",TransitionProps:{onEntering:u}={}}=o,T=K(o.TransitionProps,cn),N=K(o,dn),B=O(),P=G(B,b.ref),S=p({},o,{anchorOrigin:s,anchorReference:l,elevation:y,marginThreshold:E,PaperProps:b,transformOrigin:R,TransitionComponent:C,transitionDuration:I,TransitionProps:T}),$=un(S),L=ee(()=>{if(l==="anchorPosition")return a;const c=Pe(n),k=(c&&c.nodeType===1?c:z(B.current).body).getBoundingClientRect();return{top:k.top+He(k,s.vertical),left:k.left+_e(k,s.horizontal)}},[n,s.horizontal,s.vertical,a,l]),M=ee(c=>({vertical:He(c,R.vertical),horizontal:_e(c,R.horizontal)}),[R.horizontal,R.vertical]),U=ee(c=>{const x={width:c.offsetWidth,height:c.offsetHeight},k=M(x);if(l==="none")return{top:null,left:null,transformOrigin:We(k)};const w=L();let F=w.top-k.vertical,q=w.left-k.horizontal;const te=F+x.height,ue=q+x.width,V=ce(Pe(n)),ne=V.innerHeight-E,fe=V.innerWidth-E;if(F<E){const _=F-E;F-=_,k.vertical+=_}else if(te>ne){const _=te-ne;F-=_,k.vertical+=_}if(q<E){const _=q-E;q-=_,k.horizontal+=_}else if(ue>fe){const _=ue-fe;q-=_,k.horizontal+=_}return{top:`${Math.round(F)}px`,left:`${Math.round(q)}px`,transformOrigin:We(k)}},[n,l,L,M,E]),D=ee(()=>{const c=B.current;if(!c)return;const x=U(c);x.top!==null&&(c.style.top=x.top),x.left!==null&&(c.style.left=x.left),c.style.transformOrigin=x.transformOrigin},[U]),W=(c,x)=>{u&&u(c,x),D()};Y(()=>{d&&D()}),nt(i,()=>d?{updatePosition:()=>{D()}}:null,[d,D]),Y(()=>{if(!d)return;const c=st(()=>{D()}),x=ce(n);return x.addEventListener("resize",c),()=>{c.clear(),x.removeEventListener("resize",c)}},[n,d,D]);let g=I;I==="auto"&&!C.muiSupportAuto&&(g=void 0);const h=v||(n?z(Pe(n)).body:void 0);return A(fn,p({BackdropProps:{invisible:!0},className:ie($.root,m),container:h,open:d,ref:r,ownerState:S},N,{children:A(C,p({appear:!0,in:d,onEntering:W,timeout:g},T,{children:A(pn,p({elevation:y},b,{ref:P,className:ie($.paper,b.className),children:f}))}))}))}),gn=hn;export{Zt as B,Gt as F,on as M,Ht as P,qe as T,En as a,gn as b,at as c,st as d,z as e,Ae as f,he as g,Ke as i,ce as o,je as r,Ge as u};
