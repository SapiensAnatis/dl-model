(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[4],{190:function(e,t,n){"use strict";var o=n(2),a=n(11),i=n(0),r=(n(16),n(18)),s=n(26),c=n(102),d=n(67),l=n(30),u=n(140),m=n(31),p="undefined"===typeof window?i.useEffect:i.useLayoutEffect,b=i.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,b=e.autoFocus,f=void 0!==b&&b,y=e.button,g=void 0!==y&&y,v=e.children,j=e.classes,h=e.className,O=e.component,x=e.ContainerComponent,E=void 0===x?"li":x,C=e.ContainerProps,N=(C=void 0===C?{}:C).className,I=Object(a.a)(C,["className"]),T=e.dense,k=void 0!==T&&T,w=e.disabled,S=void 0!==w&&w,R=e.disableGutters,M=void 0!==R&&R,L=e.divider,A=void 0!==L&&L,P=e.focusVisibleClassName,B=e.selected,H=void 0!==B&&B,V=Object(a.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),D=i.useContext(u.a),F={dense:k||D.dense||!1,alignItems:s},G=i.useRef(null);p((function(){f&&G.current&&G.current.focus()}),[f]);var $=i.Children.toArray(v),z=$.length&&Object(d.a)($[$.length-1],["ListItemSecondaryAction"]),J=i.useCallback((function(e){G.current=m.findDOMNode(e)}),[]),W=Object(l.a)(J,t),_=Object(o.a)({className:Object(r.a)(j.root,h,F.dense&&j.dense,!M&&j.gutters,A&&j.divider,S&&j.disabled,g&&j.button,"center"!==s&&j.alignItemsFlexStart,z&&j.secondaryAction,H&&j.selected),disabled:S},V),q=O||"li";return g&&(_.component=O||"div",_.focusVisibleClassName=Object(r.a)(j.focusVisible,P),q=c.a),z?(q=_.component||O?q:"div","li"===E&&("li"===q?q="div":"li"===_.component&&(_.component="div")),i.createElement(u.a.Provider,{value:F},i.createElement(E,Object(o.a)({className:Object(r.a)(j.container,N),ref:W},I),i.createElement(q,_,$),$.pop()))):i.createElement(u.a.Provider,{value:F},i.createElement(q,Object(o.a)({ref:W},_),$))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},219:function(e,t,n){"use strict";var o=n(2),a=n(62),i=n(11),r=n(0),s=(n(16),n(487)),c=n(128),d=n(135),l=n(30);function u(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var m={entering:{opacity:1,transform:u(1)},entered:{opacity:1,transform:"none"}},p=r.forwardRef((function(e,t){var n=e.children,p=e.disableStrictModeCompat,b=void 0!==p&&p,f=e.in,y=e.onEnter,g=e.onEntered,v=e.onEntering,j=e.onExit,h=e.onExited,O=e.onExiting,x=e.style,E=e.timeout,C=void 0===E?"auto":E,N=e.TransitionComponent,I=void 0===N?s.a:N,T=Object(i.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=r.useRef(),w=r.useRef(),S=Object(c.a)(),R=S.unstable_strictMode&&!b,M=r.useRef(null),L=Object(l.a)(n.ref,t),A=Object(l.a)(R?M:void 0,L),P=function(e){return function(t,n){if(e){var o=R?[M.current,t]:[t,n],i=Object(a.a)(o,2),r=i[0],s=i[1];void 0===s?e(r):e(r,s)}}},B=P(v),H=P((function(e,t){Object(d.b)(e);var n,o=Object(d.a)({style:x,timeout:C},{mode:"enter"}),a=o.duration,i=o.delay;"auto"===C?(n=S.transitions.getAutoHeightDuration(e.clientHeight),w.current=n):n=a,e.style.transition=[S.transitions.create("opacity",{duration:n,delay:i}),S.transitions.create("transform",{duration:.666*n,delay:i})].join(","),y&&y(e,t)})),V=P(g),D=P(O),F=P((function(e){var t,n=Object(d.a)({style:x,timeout:C},{mode:"exit"}),o=n.duration,a=n.delay;"auto"===C?(t=S.transitions.getAutoHeightDuration(e.clientHeight),w.current=t):t=o,e.style.transition=[S.transitions.create("opacity",{duration:t,delay:a}),S.transitions.create("transform",{duration:.666*t,delay:a||.333*t})].join(","),e.style.opacity="0",e.style.transform=u(.75),j&&j(e)})),G=P(h);return r.useEffect((function(){return function(){clearTimeout(k.current)}}),[]),r.createElement(I,Object(o.a)({appear:!0,in:f,nodeRef:R?M:void 0,onEnter:H,onEntered:V,onEntering:B,onExit:F,onExited:G,onExiting:D,addEndListener:function(e,t){var n=R?e:t;"auto"===C&&(k.current=setTimeout(n,w.current||0))},timeout:"auto"===C?null:C},T),(function(e,t){return r.cloneElement(n,Object(o.a)({style:Object(o.a)({opacity:0,transform:u(.75),visibility:"exited"!==e||f?void 0:"hidden"},m[e],x,n.props.style),ref:A},t))}))}));p.muiSupportAuto=!0,t.a=p},223:function(e,t,n){"use strict";var o=n(11),a=n(35),i=n(2),r=n(0),s=(n(16),n(18)),c=n(26),d=n(190),l=r.forwardRef((function(e,t){var n,a=e.classes,c=e.className,l=e.component,u=void 0===l?"li":l,m=e.disableGutters,p=void 0!==m&&m,b=e.ListItemClasses,f=e.role,y=void 0===f?"menuitem":f,g=e.selected,v=e.tabIndex,j=Object(o.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==v?v:-1),r.createElement(d.a,Object(i.a)({button:!0,role:y,tabIndex:n,component:u,selected:g,disableGutters:p,classes:Object(i.a)({dense:a.dense},b),className:Object(s.a)(a.root,c,g&&a.selected,!p&&a.gutters),ref:t},j))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(a.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(l)},278:function(e,t,n){"use strict";var o=n(2),a=n(11),i=n(0),r=(n(16),n(18)),s=n(26),c=n(155),d=n(140),l=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,u=e.disableTypography,m=void 0!==u&&u,p=e.inset,b=void 0!==p&&p,f=e.primary,y=e.primaryTypographyProps,g=e.secondary,v=e.secondaryTypographyProps,j=Object(a.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),h=i.useContext(d.a).dense,O=null!=f?f:n;null==O||O.type===c.a||m||(O=i.createElement(c.a,Object(o.a)({variant:h?"body2":"body1",className:s.primary,component:"span",display:"block"},y),O));var x=g;return null==x||x.type===c.a||m||(x=i.createElement(c.a,Object(o.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},v),x)),i.createElement("div",Object(o.a)({className:Object(r.a)(s.root,l,h&&s.dense,b&&s.inset,O&&x&&s.multiline),ref:t},j),O,x)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(l)},462:function(e,t,n){"use strict";n.r(t);var o=n(13),a=n(8),i=n(0),r=n(277),s=n(190),c=n(278),d=n(223),l=n(423);t.default=function(e){var t=e.options,n=e.selectedIndex,u=e.handleSelect,m=Object(i.useState)(null),p=Object(o.a)(m,2),b=p[0],f=p[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{component:"nav","aria-label":"Character Set Settings",style:{backgroundColor:"rgba(50,50,50,0.5",color:"white"},children:Object(a.jsx)(s.a,{button:!0,onClick:function(e){f(e.currentTarget)},children:Object(a.jsx)(c.a,{primary:t[n]})})}),Object(a.jsx)(l.a,{anchorEl:b,keepMounted:!0,open:Boolean(b),onClose:function(){f(null)},children:t.map((function(e,t){return Object(a.jsx)(d.a,{selected:t===n,onClick:function(e){return function(e,t){u(t),f(null)}(0,t)},children:e},e)}))})]})}}}]);
//# sourceMappingURL=4.82f966c0.chunk.js.map