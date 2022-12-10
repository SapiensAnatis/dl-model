import{_ as D,n as pe,T as te,h as Z,o as $,c as he,p as je,k as Q,U as Oe,Q as nt,l as Y,Y as ot}from"./index-43909fc9.js";import{t as rt,w as it,a as f,e as se,_ as j,u as ne,l as Ie,D as De,g as be,b as xe,A as $e,f as ye,i as st,T as qe,s as ae,m as Ae,d as Te}from"./ButtonBase-58f3bc05.js";function Fe(...e){return e.reduce((t,r)=>r==null?t:function(...i){t.apply(this,i),r.apply(this,i)},()=>{})}function at(e,t=166){let r;function o(...i){const n=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(n,t)}return o.clear=()=>{clearTimeout(r)},o}function G(e){return e&&e.ownerDocument||document}function fe(e){return G(e).defaultView||window}function bn({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=D(e!==void 0),[n,s]=pe(t),a=i?e:n,l=te(d=>{i||s(d)},[]);return[a,l]}function lt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ve(){return rt(it)}const ct=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Le=ct;function Xe(e){return typeof e=="string"}function dt(e,t,r){return e===void 0||Xe(e)?t:f({},t,{ownerState:f({},t.ownerState,r)})}function ut(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{r[o]=e[o]}),r}function Ce(e,t){return typeof e=="function"?e(t):e}function _e(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function ft(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:i,className:n}=e;if(!t){const b=se(i==null?void 0:i.className,o==null?void 0:o.className,n,r==null?void 0:r.className),u=f({},r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),x=f({},r,i,o);return b.length>0&&(x.className=b),Object.keys(u).length>0&&(x.style=u),{props:x,internalRef:void 0}}const s=ut(f({},i,o)),a=_e(o),l=_e(i),d=t(s),E=se(d==null?void 0:d.className,r==null?void 0:r.className,n,i==null?void 0:i.className,o==null?void 0:o.className),g=f({},d==null?void 0:d.style,r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),T=f({},d,r,l,a);return E.length>0&&(T.className=E),Object.keys(g).length>0&&(T.style=g),{props:T,internalRef:d.ref}}const pt=["elementType","externalSlotProps","ownerState"];function Ue(e){var t;const{elementType:r,externalSlotProps:o,ownerState:i}=e,n=j(e,pt),s=Ce(o,i),{props:a,internalRef:l}=ft(f({},n,{externalSlotProps:s})),d=ne(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return dt(r,f({},a,{ref:d}),i)}const ht=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function mt(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function vt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function Et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||vt(e))}function gt(e){const t=[],r=[];return Array.from(e.querySelectorAll(ht)).forEach((o,i)=>{const n=mt(o);n===-1||!Et(o)||(n===0?t.push(o):r.push({documentOrder:i,tabIndex:n,node:o}))}),r.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function bt(){return!0}function xt(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:n=gt,isEnabled:s=bt,open:a}=e,l=D(),d=D(null),E=D(null),g=D(null),T=D(null),b=D(!1),u=D(null),x=ne(t.ref,u),S=D(null);Z(()=>{!a||!u.current||(b.current=!r)},[r,a]),Z(()=>{if(!a||!u.current)return;const p=G(u.current);return u.current.contains(p.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex",-1),b.current&&u.current.focus()),()=>{i||(g.current&&g.current.focus&&(l.current=!0,g.current.focus()),g.current=null)}},[a]),Z(()=>{if(!a||!u.current)return;const p=G(u.current),m=C=>{const{current:A}=u;if(A!==null){if(!p.hasFocus()||o||!s()||l.current){l.current=!1;return}if(!A.contains(p.activeElement)){if(C&&T.current!==C.target||p.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!b.current)return;let F=[];if((p.activeElement===d.current||p.activeElement===E.current)&&(F=n(u.current)),F.length>0){var M,O;const H=Boolean(((M=S.current)==null?void 0:M.shiftKey)&&((O=S.current)==null?void 0:O.key)==="Tab"),z=F[0],v=F[F.length-1];H?v.focus():z.focus()}else A.focus()}}},R=C=>{S.current=C,!(o||!s()||C.key!=="Tab")&&p.activeElement===u.current&&C.shiftKey&&(l.current=!0,E.current.focus())};p.addEventListener("focusin",m),p.addEventListener("keydown",R,!0);const P=setInterval(()=>{p.activeElement.tagName==="BODY"&&m()},50);return()=>{clearInterval(P),p.removeEventListener("focusin",m),p.removeEventListener("keydown",R,!0)}},[r,o,i,s,a,n]);const w=p=>{g.current===null&&(g.current=p.relatedTarget),b.current=!0,T.current=p.target;const m=t.props.onFocus;m&&m(p)},k=p=>{g.current===null&&(g.current=p.relatedTarget),b.current=!0};return $(je,{children:[$("div",{tabIndex:a?0:-1,onFocus:k,ref:d,"data-testid":"sentinelStart"}),he(t,{ref:x,onFocus:w}),$("div",{tabIndex:a?0:-1,onFocus:k,ref:E,"data-testid":"sentinelEnd"})]})}function yt(e){return typeof e=="function"?e():e}const Tt=Q(function(t,r){const{children:o,container:i,disablePortal:n=!1}=t,[s,a]=pe(null),l=ne(Oe(o)?o.ref:null,r);return Ie(()=>{n||a(yt(i)||document.body)},[i,n]),Ie(()=>{if(s&&!n)return De(r,s),()=>{De(r,null)}},[r,s,n]),n?Oe(o)?he(o,{ref:l}):o:$(je,{children:s&&nt(o,s)})}),Pt=Tt;function St(e){const t=G(e);return t.body===e?fe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Be(e){return parseInt(fe(e).getComputedStyle(e).paddingRight,10)||0}function kt(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||o}function He(e,t,r,o,i){const n=[t,r,...o];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!kt(s);a&&l&&ue(s,i)})}function Se(e,t){let r=-1;return e.some((o,i)=>t(o)?(r=i,!0):!1),r}function Rt(e,t){const r=[],o=e.container;if(!t.disableScrollLock){if(St(o)){const s=lt(G(o));r.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Be(o)+s}px`;const a=G(o).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Be(l)+s}px`})}let n;if(o.parentNode instanceof DocumentFragment)n=G(o).body;else{const s=o.parentElement,a=fe(o);n=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:o}r.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{r.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function Ct(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class Nt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,r){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ue(t.modalRef,!1);const i=Ct(r);He(r,t.mount,t.modalRef,i,!0);const n=Se(this.containers,s=>s.container===r);return n!==-1?(this.containers[n].modals.push(t),o):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:i}),o)}mount(t,r){const o=Se(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=Rt(i,r))}remove(t,r=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Se(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(o,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&ue(t.modalRef,r),He(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&ue(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function wt(e){return be("MuiModal",e)}xe("MuiModal",["root","hidden"]);const Mt=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],Ot=e=>{const{open:t,exited:r,classes:o}=e;return ye({root:["root",!t&&r&&"hidden"]},wt,o)};function It(e){return typeof e=="function"?e():e}function Dt(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const $t=new Nt,At=Q(function(t,r){var o,i;const{children:n,classes:s,closeAfterTransition:a=!1,component:l,container:d,disableAutoFocus:E=!1,disableEnforceFocus:g=!1,disableEscapeKeyDown:T=!1,disablePortal:b=!1,disableRestoreFocus:u=!1,disableScrollLock:x=!1,hideBackdrop:S=!1,keepMounted:w=!1,manager:k=$t,onBackdropClick:p,onClose:m,onKeyDown:R,open:P,onTransitionEnter:C,onTransitionExited:A,slotProps:M={},slots:O={}}=t,F=j(t,Mt),[H,z]=pe(!P),v=D({}),c=D(null),y=D(null),U=ne(y,r),_=Dt(t),I=(o=t["aria-hidden"])!=null?o:!0,h=()=>G(c.current),N=()=>(v.current.modalRef=y.current,v.current.mountNode=c.current,v.current),L=()=>{k.mount(N(),{disableScrollLock:x}),y.current.scrollTop=0},le=$e(()=>{const B=It(d)||h().body;k.add(N(),B),y.current&&L()}),K=te(()=>k.isTopModal(N()),[k]),V=$e(B=>{c.current=B,B&&(P&&K()?L():ue(y.current,I))}),X=te(()=>{k.remove(N(),I)},[k,I]);Z(()=>()=>{X()},[X]),Z(()=>{P?le():(!_||!a)&&X()},[P,X,_,a,le]);const oe=f({},t,{classes:s,closeAfterTransition:a,disableAutoFocus:E,disableEnforceFocus:g,disableEscapeKeyDown:T,disablePortal:b,disableRestoreFocus:u,disableScrollLock:x,exited:H,hideBackdrop:S,keepMounted:w}),ce=Ot(oe),me=()=>{z(!1),C&&C()},ve=()=>{z(!0),A&&A(),a&&X()},W=B=>{B.target===B.currentTarget&&(p&&p(B),m&&m(B,"backdropClick"))},Je=B=>{R&&R(B),!(B.key!=="Escape"||!K())&&(T||(B.stopPropagation(),m&&m(B,"escapeKeyDown")))},Ee={};n.props.tabIndex===void 0&&(Ee.tabIndex="-1"),_&&(Ee.onEnter=Fe(me,n.props.onEnter),Ee.onExited=Fe(ve,n.props.onExited));const Me=(i=l??O.root)!=null?i:"div",et=Ue({elementType:Me,externalSlotProps:M.root,externalForwardedProps:F,additionalProps:{ref:U,role:"presentation",onKeyDown:Je},className:ce.root,ownerState:oe}),Pe=O.backdrop,tt=Ue({elementType:Pe,externalSlotProps:M.backdrop,additionalProps:{"aria-hidden":!0,onClick:W,open:P},className:ce.backdrop,ownerState:oe});return!w&&!P&&(!_||H)?null:$(Pt,{ref:V,container:d,disablePortal:b,children:$(Me,f({},et,{children:[!S&&Pe?$(Pe,f({},tt)):null,$(xt,{disableEnforceFocus:g,disableAutoFocus:E,disableRestoreFocus:u,isEnabled:K,open:P,children:he(n,Ee)})]}))})}),Ft=At,We={disabled:!1};var Lt=function(t){return t.scrollTop},de="unmounted",J="exited",ee="entering",ie="entered",Ne="exiting",q=function(e){st(t,e);function t(o,i){var n;n=e.call(this,o,i)||this;var s=i,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=J,n.appearStatus=ee):l=ie:o.unmountOnExit||o.mountOnEnter?l=de:l=J,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===de?{status:J}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ee&&s!==ie&&(n=ee):(s===ee||s===ie)&&(n=Ne)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this);s&&Lt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:de})},r.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Y.findDOMNode(this),a],d=l[0],E=l[1],g=this.getTimeouts(),T=a?g.appear:g.enter;if(!i&&!s||We.disabled){this.safeSetState({status:ie},function(){n.props.onEntered(d)});return}this.props.onEnter(d,E),this.safeSetState({status:ee},function(){n.props.onEntering(d,E),n.onTransitionEnd(T,function(){n.safeSetState({status:ie},function(){n.props.onEntered(d,E)})})})},r.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Y.findDOMNode(this);if(!n||We.disabled){this.safeSetState({status:J},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ne},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:J},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},r.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],d=l[0],E=l[1];this.props.addEndListener(d,E)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===de)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=j(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Y.createElement(qe.Provider,{value:null},typeof s=="function"?s(i,a):Y.cloneElement(Y.Children.only(s),a))},t}(Y.Component);q.contextType=qe;q.propTypes={};function re(){}q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:re,onEntering:re,onEntered:re,onExit:re,onExiting:re,onExited:re};q.UNMOUNTED=de;q.EXITED=J;q.ENTERING=ee;q.ENTERED=ie;q.EXITING=Ne;const Ye=q,Ze=e=>e.scrollTop;function ge(e,t){var r,o;const{timeout:i,easing:n,style:s={}}=e;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}function _t(e){return be("MuiPaper",e)}xe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ut=["className","component","elevation","square","variant"],Bt=e=>{const{square:t,elevation:r,variant:o,classes:i}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ye(n,_t,i)},Ht=ae("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return f({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&f({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ae("#fff",Le(t.elevation))}, ${Ae("#fff",Le(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),Wt=Q(function(t,r){const o=Te({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=o,d=j(o,Ut),E=f({},o,{component:n,elevation:s,square:a,variant:l}),g=Bt(E);return $(Ht,f({as:n,ownerState:E,className:se(g.root,i),ref:r},d))}),zt=Wt,Kt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Gt={entering:{opacity:1},entered:{opacity:1}},jt=Q(function(t,r){const o=Ve(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:d,onEnter:E,onEntered:g,onEntering:T,onExit:b,onExited:u,onExiting:x,style:S,timeout:w=i,TransitionComponent:k=Ye}=t,p=j(t,Kt),m=D(null),R=ne(m,a.ref,r),P=v=>c=>{if(v){const y=m.current;c===void 0?v(y):v(y,c)}},C=P(T),A=P((v,c)=>{Ze(v);const y=ge({style:S,timeout:w,easing:l},{mode:"enter"});v.style.webkitTransition=o.transitions.create("opacity",y),v.style.transition=o.transitions.create("opacity",y),E&&E(v,c)}),M=P(g),O=P(x),F=P(v=>{const c=ge({style:S,timeout:w,easing:l},{mode:"exit"});v.style.webkitTransition=o.transitions.create("opacity",c),v.style.transition=o.transitions.create("opacity",c),b&&b(v)}),H=P(u);return $(k,f({appear:s,in:d,nodeRef:m,onEnter:A,onEntered:M,onEntering:C,onExit:F,onExited:H,onExiting:O,addEndListener:v=>{n&&n(m.current,v)},timeout:w},p,{children:(v,c)=>he(a,f({style:f({opacity:0,visibility:v==="exited"&&!d?"hidden":void 0},Gt[v],S,a.props.style),ref:R},c))}))}),qt=jt;function Vt(e){return be("MuiBackdrop",e)}xe("MuiBackdrop",["root","invisible"]);const Xt=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],Yt=e=>{const{classes:t,invisible:r}=e;return ye({root:["root",r&&"invisible"]},Vt,t)},Zt=ae("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>f({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Qt=Q(function(t,r){var o,i,n;const s=Te({props:t,name:"MuiBackdrop"}),{children:a,component:l="div",components:d={},componentsProps:E={},className:g,invisible:T=!1,open:b,slotProps:u={},slots:x={},transitionDuration:S,TransitionComponent:w=qt}=s,k=j(s,Xt),p=f({},s,{component:l,invisible:T}),m=Yt(p),R=(o=u.root)!=null?o:E.root;return $(w,f({in:b,timeout:S},k,{children:$(Zt,f({"aria-hidden":!0},R,{as:(i=(n=x.root)!=null?n:d.Root)!=null?i:l,className:se(m.root,g,R==null?void 0:R.className),ownerState:f({},p,R==null?void 0:R.ownerState),classes:m,ref:r,children:a}))}))}),Jt=Qt,en=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],tn=e=>e.classes,nn=ae("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(({theme:e,ownerState:t})=>f({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),on=ae(Jt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),rn=Q(function(t,r){var o,i,n,s,a,l;const d=Te({name:"MuiModal",props:t}),{BackdropComponent:E=on,BackdropProps:g,closeAfterTransition:T=!1,children:b,component:u,components:x={},componentsProps:S={},disableAutoFocus:w=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:p=!1,disablePortal:m=!1,disableRestoreFocus:R=!1,disableScrollLock:P=!1,hideBackdrop:C=!1,keepMounted:A=!1,slotProps:M,slots:O,theme:F}=d,H=j(d,en),[z,v]=pe(!0),c={closeAfterTransition:T,disableAutoFocus:w,disableEnforceFocus:k,disableEscapeKeyDown:p,disablePortal:m,disableRestoreFocus:R,disableScrollLock:P,hideBackdrop:C,keepMounted:A},y=f({},d,c,{exited:z}),U=tn(y),_=(o=(i=O==null?void 0:O.root)!=null?i:x.Root)!=null?o:nn,I=(n=(s=O==null?void 0:O.backdrop)!=null?s:x.Backdrop)!=null?n:E,h=(a=M==null?void 0:M.root)!=null?a:S.root,N=(l=M==null?void 0:M.backdrop)!=null?l:S.backdrop;return $(Ft,f({slots:{root:_,backdrop:I},slotProps:{root:()=>f({},Ce(h,y),!Xe(_)&&{as:u,theme:F}),backdrop:()=>f({},g,Ce(N,y))},onTransitionEnter:()=>v(!1),onTransitionExited:()=>v(!0),ref:r},H,{classes:U},c,{children:b}))}),sn=rn,an=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function we(e){return`scale(${e}, ${e**2})`}const ln={entering:{opacity:1,transform:we(1)},entered:{opacity:1,transform:"none"}},ke=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Qe=Q(function(t,r){const{addEndListener:o,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:d,onEntering:E,onExit:g,onExited:T,onExiting:b,style:u,timeout:x="auto",TransitionComponent:S=Ye}=t,w=j(t,an),k=D(),p=D(),m=Ve(),R=D(null),P=ne(R,n.ref,r),C=c=>y=>{if(c){const U=R.current;y===void 0?c(U):c(U,y)}},A=C(E),M=C((c,y)=>{Ze(c);const{duration:U,delay:_,easing:I}=ge({style:u,timeout:x,easing:s},{mode:"enter"});let h;x==="auto"?(h=m.transitions.getAutoHeightDuration(c.clientHeight),p.current=h):h=U,c.style.transition=[m.transitions.create("opacity",{duration:h,delay:_}),m.transitions.create("transform",{duration:ke?h:h*.666,delay:_,easing:I})].join(","),l&&l(c,y)}),O=C(d),F=C(b),H=C(c=>{const{duration:y,delay:U,easing:_}=ge({style:u,timeout:x,easing:s},{mode:"exit"});let I;x==="auto"?(I=m.transitions.getAutoHeightDuration(c.clientHeight),p.current=I):I=y,c.style.transition=[m.transitions.create("opacity",{duration:I,delay:U}),m.transitions.create("transform",{duration:ke?I:I*.666,delay:ke?U:U||I*.333,easing:_})].join(","),c.style.opacity=0,c.style.transform=we(.75),g&&g(c)}),z=C(T),v=c=>{x==="auto"&&(k.current=setTimeout(c,p.current||0)),o&&o(R.current,c)};return Z(()=>()=>{clearTimeout(k.current)},[]),$(S,f({appear:i,in:a,nodeRef:R,onEnter:M,onEntered:O,onEntering:A,onExit:H,onExited:z,onExiting:F,addEndListener:v,timeout:x==="auto"?null:x},w,{children:(c,y)=>he(n,f({style:f({opacity:0,transform:we(.75),visibility:c==="exited"&&!a?"hidden":void 0},ln[c],u,n.props.style),ref:P},y))}))});Qe.muiSupportAuto=!0;const cn=Qe;function dn(e){return be("MuiPopover",e)}xe("MuiPopover",["root","paper"]);const un=["onEntering"],fn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function ze(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.height/2:t==="bottom"&&(r=e.height),r}function Ke(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.width/2:t==="right"&&(r=e.width),r}function Ge(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Re(e){return typeof e=="function"?e():e}const pn=e=>{const{classes:t}=e;return ye({root:["root"],paper:["paper"]},dn,t)},hn=ae(sn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),mn=ae(zt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),vn=Q(function(t,r){const o=Te({props:t,name:"MuiPopover"}),{action:i,anchorEl:n,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:d,className:E,container:g,elevation:T=8,marginThreshold:b=16,open:u,PaperProps:x={},transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:w=cn,transitionDuration:k="auto",TransitionProps:{onEntering:p}={}}=o,m=j(o.TransitionProps,un),R=j(o,fn),P=D(),C=ne(P,x.ref),A=f({},o,{anchorOrigin:s,anchorReference:l,elevation:T,marginThreshold:b,PaperProps:x,transformOrigin:S,TransitionComponent:w,transitionDuration:k,TransitionProps:m}),M=pn(A),O=te(()=>{if(l==="anchorPosition")return a;const h=Re(n),L=(h&&h.nodeType===1?h:G(P.current).body).getBoundingClientRect();return{top:L.top+ze(L,s.vertical),left:L.left+Ke(L,s.horizontal)}},[n,s.horizontal,s.vertical,a,l]),F=te(h=>({vertical:ze(h,S.vertical),horizontal:Ke(h,S.horizontal)}),[S.horizontal,S.vertical]),H=te(h=>{const N={width:h.offsetWidth,height:h.offsetHeight},L=F(N);if(l==="none")return{top:null,left:null,transformOrigin:Ge(L)};const le=O();let K=le.top-L.vertical,V=le.left-L.horizontal;const X=K+N.height,oe=V+N.width,ce=fe(Re(n)),me=ce.innerHeight-b,ve=ce.innerWidth-b;if(K<b){const W=K-b;K-=W,L.vertical+=W}else if(X>me){const W=X-me;K-=W,L.vertical+=W}if(V<b){const W=V-b;V-=W,L.horizontal+=W}else if(oe>ve){const W=oe-ve;V-=W,L.horizontal+=W}return{top:`${Math.round(K)}px`,left:`${Math.round(V)}px`,transformOrigin:Ge(L)}},[n,l,O,F,b]),[z,v]=pe(u),c=te(()=>{const h=P.current;if(!h)return;const N=H(h);N.top!==null&&(h.style.top=N.top),N.left!==null&&(h.style.left=N.left),h.style.transformOrigin=N.transformOrigin,v(!0)},[H]),y=(h,N)=>{p&&p(h,N),c()},U=()=>{v(!1)};Z(()=>{u&&c()}),ot(i,()=>u?{updatePosition:()=>{c()}}:null,[u,c]),Z(()=>{if(!u)return;const h=at(()=>{c()}),N=fe(n);return N.addEventListener("resize",h),()=>{h.clear(),N.removeEventListener("resize",h)}},[n,u,c]);let _=k;k==="auto"&&!w.muiSupportAuto&&(_=void 0);const I=g||(n?G(Re(n)).body:void 0);return $(hn,f({BackdropProps:{invisible:!0},className:se(M.root,E),container:I,open:u,ref:r,ownerState:A},R,{children:$(w,f({appear:!0,in:u,onEntering:y,onExited:U,timeout:_},m,{children:$(mn,f({elevation:T},x,{ref:C,className:se(M.paper,x.className)},z?void 0:{style:f({},x.style,{opacity:0})},{ownerState:A,children:d}))}))}))}),xn=vn;export{Jt as B,qt as F,sn as M,zt as P,Ye as T,bn as a,xn as b,lt as c,at as d,G as e,Ue as f,ge as g,Xe as i,fe as o,Ze as r,Ve as u};
