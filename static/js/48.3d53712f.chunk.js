(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[48],{151:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return v}));var a=n(12),c=n(60),r=n(28),o=n(171),i=n(172),s=n(173),l=n(155),d=n(164),u=n(149),j=n.n(u),b=n(153),h=n.n(b),O={dialogRoot:{margin:0,padding:0},closeButton:{position:"absolute",right:"0.25rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},dockButton:{position:"absolute",right:"2.3rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},titleRoot:{margin:0,padding:"1rem",paddingBottom:0,display:"flex",justifyContent:"center"}},f=n(9),p=Object(r.a)(O)((function(e){var t=e.children,n=e.classes,r=(e.onClose,Object(c.a)(e,["children","classes","onClose"]));return Object(f.jsx)(o.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:n.dialogRoot},r),{},{children:t}))})),m=Object(r.a)(O)((function(e){var t=e.children,n=e.classes,r=e.onClose,i=e.showDockBtn,s=void 0!==i&&i,u=e.onDock,b=Object(c.a)(e,["children","classes","onClose","showDockBtn","onDock"]);return Object(f.jsxs)(o.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:n.titleRoot},b),{},{children:[Object(f.jsx)(d.a,{variant:"h6",className:n.titleText,children:t}),s&&Object(f.jsx)(l.a,{"aria-label":"dock",className:n.dockButton,onClick:u,children:Object(f.jsx)(h.a,{})}),Object(f.jsx)(l.a,{"aria-label":"close",className:n.closeButton,onClick:r,children:Object(f.jsx)(j.a,{})})]}))})),v=Object(r.a)((function(e){return{root:{padding:e.spacing(2)}}}))(i.a);Object(r.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(s.a)},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),c=n(37),r=n(290),o=n(9),i=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,487))}));var s=function(e){var t=e.mode,n=e.closeModal,s=e.handleSelect,l=e.setDock,d=void 0===l?null:l;return t&&Object(c.createPortal)(Object(o.jsx)(r.a,{maxWidth:"lg",onClose:n,open:!!t,scroll:"paper",PaperProps:{classes:{root:"Modal"}},children:Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsx)(i,{mode:t,closeModal:n,handleSelect:s,setDock:d})})}),document.getElementById("modal-root"))}},307:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(11),c=n.n(a),r=n(16),o=n(10),i=n(0),s=n(32),l=n(100),d=n(151),u=n(238),j=n(47),b=n(18),h=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith("h")){e.next=6;break}return e.next=3,n.e(8).then(n.bind(null,132));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,n.e(7).then(n.bind(null,131));case 8:e.t0=e.sent;case 9:return a=e.t0,r=a.default,e.abrupt("return",r[t]);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(307),n(9));var f=function(e){var t,n=e.close,a=e.handleSelect,f=e.docked,p=e.moveToDock,m=Object(i.useContext)(s.a),v=Object(i.useContext)(s.b),x=v.model.id,g=v.app.sidebarContent,k=Object(i.useState)(x),C=Object(o.a)(k,2),y=C[0],S=C[1],N=Object(i.useState)(""),w=Object(o.a)(N,2),B=w[0],D=w[1],A=Object(i.useState)(),M=Object(o.a)(A,2),T=M[0],P=M[1],R=Object(i.useState)(!0),E=Object(o.a)(R,2),W=E[0],H=E[1],J=Object(i.useRef)(x);Object(i.useEffect)((function(){var e=Object(b.i)(x);["dragon","ani"].includes(e)?x!==J.current&&(J.current=x,S(x)):n()}),[x,n]),Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(y);case 2:t=e.sent,P(t),H(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();H(!0),e()}),[y]);var L=y.startsWith("h"),z=L?"enemyPortraits":"dragonPortraits",F=L?y:null===(t=y.slice)||void 0===t?void 0:t.call(y,1),I="".concat("/dl-model","/img/").concat(z,"/").concat(F,".png"),q=Object(O.jsx)("img",{src:I,alt:"portrait"}),G="chainMaker"===g,K=function(e,t){m({type:"update",key:e,value:t})},Q=a||function(e,t){K("animation",{code:e});var n=Object(j.k)(e,t);K("chainMaker",{chain:n})},U=function(e){var t=e.currentTarget.dataset.value,a=e.currentTarget.dataset.name;Q(t,a),!f&&n()},V=T?T.map((function(e){var t=e.name,n=e.code;return Object(O.jsx)(l.a,{"data-value":n,"data-name":t,variant:"contained",onClick:U,children:t},n)})):Object(O.jsx)("div",{children:"No Animation"});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.b,{showDockBtn:!f&&!G,onDock:p,onClose:n,children:G?"Add Animation":"Select an Animation"}),Object(O.jsxs)("div",{className:"NonHumanAni-source",children:[q,Object(O.jsx)(l.a,{variant:"outlined",onClick:function(){return D("dragon")},children:"Change Source"})]})]}),Object(O.jsx)(d.a,{dividers:!0,className:"NonHumanAni-content",children:W?Object(O.jsx)("div",{children:"Loading..."}):V}),Object(O.jsx)(u.a,{mode:B,closeModal:function(){return D("")},handleSelect:S})]})}}}]);
//# sourceMappingURL=48.3d53712f.chunk.js.map