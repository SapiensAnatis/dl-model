(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[25],{137:function(e,t,a){"use strict";var o=a(0),n=o.createContext({});t.a=n},183:function(e,t,a){"use strict";var o=a(2),n=a(11),i=a(0),r=(a(16),a(18)),c=a(26),s=a(106),d=a(67),l=a(31),p=a(137),u=a(32),y="undefined"===typeof window?i.useEffect:i.useLayoutEffect,b=i.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,b=e.autoFocus,m=void 0!==b&&b,h=e.button,g=void 0!==h&&h,v=e.children,j=e.classes,f=e.className,O=e.component,x=e.ContainerComponent,C=void 0===x?"li":x,k=e.ContainerProps,T=(k=void 0===k?{}:k).className,P=Object(n.a)(k,["className"]),w=e.dense,N=void 0!==w&&w,A=e.disabled,B=void 0!==A&&A,S=e.disableGutters,E=void 0!==S&&S,R=e.divider,I=void 0!==R&&R,L=e.focusVisibleClassName,M=e.selected,W=void 0!==M&&M,F=Object(n.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=i.useContext(p.a),$={dense:N||V.dense||!1,alignItems:c},D=i.useRef(null);y((function(){m&&D.current&&D.current.focus()}),[m]);var J=i.Children.toArray(v),G=J.length&&Object(d.a)(J[J.length-1],["ListItemSecondaryAction"]),H=i.useCallback((function(e){D.current=u.findDOMNode(e)}),[]),z=Object(l.a)(H,t),q=Object(o.a)({className:Object(r.a)(j.root,f,$.dense&&j.dense,!E&&j.gutters,I&&j.divider,B&&j.disabled,g&&j.button,"center"!==c&&j.alignItemsFlexStart,G&&j.secondaryAction,W&&j.selected),disabled:B},F),K=O||"li";return g&&(q.component=O||"div",q.focusVisibleClassName=Object(r.a)(j.focusVisible,L),K=s.a),G?(K=q.component||O?K:"div","li"===C&&("li"===K?K="div":"li"===q.component&&(q.component="div")),i.createElement(p.a.Provider,{value:$},i.createElement(C,Object(o.a)({className:Object(r.a)(j.container,T),ref:z},P),i.createElement(K,q,J),J.pop()))):i.createElement(p.a.Provider,{value:$},i.createElement(K,Object(o.a)({ref:z},q),J))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},254:function(e,t,a){"use strict";var o=a(2),n=a(11),i=a(0),r=(a(16),a(18)),c=a(26),s=a(25),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},l=i.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,l=e.classes,p=e.className,u=e.color,y=void 0===u?"initial":u,b=e.component,m=e.display,h=void 0===m?"initial":m,g=e.gutterBottom,v=void 0!==g&&g,j=e.noWrap,f=void 0!==j&&j,O=e.paragraph,x=void 0!==O&&O,C=e.variant,k=void 0===C?"body1":C,T=e.variantMapping,P=void 0===T?d:T,w=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=b||(x?"p":P[k]||d[k])||"span";return i.createElement(N,Object(o.a)({className:Object(r.a)(l.root,p,"inherit"!==k&&l[k],"initial"!==y&&l["color".concat(Object(s.a)(y))],f&&l.noWrap,v&&l.gutterBottom,x&&l.paragraph,"inherit"!==c&&l["align".concat(Object(s.a)(c))],"initial"!==h&&l["display".concat(Object(s.a)(h))]),ref:t},w))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(l)},267:function(e,t,a){"use strict";var o=a(2),n=a(11),i=a(0),r=(a(16),a(18)),c=a(26),s=a(137),d=i.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,l=e.component,p=void 0===l?"ul":l,u=e.dense,y=void 0!==u&&u,b=e.disablePadding,m=void 0!==b&&b,h=e.subheader,g=Object(n.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=i.useMemo((function(){return{dense:y}}),[y]);return i.createElement(s.a.Provider,{value:v},i.createElement(p,Object(o.a)({className:Object(r.a)(c.root,d,y&&c.dense,!m&&c.padding,h&&c.subheader),ref:t},g),h,a))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},269:function(e,t,a){"use strict";var o=a(2),n=a(11),i=a(0),r=(a(16),a(18)),c=a(26),s=a(254),d=a(137),l=i.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,p=e.disableTypography,u=void 0!==p&&p,y=e.inset,b=void 0!==y&&y,m=e.primary,h=e.primaryTypographyProps,g=e.secondary,v=e.secondaryTypographyProps,j=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),f=i.useContext(d.a).dense,O=null!=m?m:a;null==O||O.type===s.a||u||(O=i.createElement(s.a,Object(o.a)({variant:f?"body2":"body1",className:c.primary,component:"span",display:"block"},h),O));var x=g;return null==x||x.type===s.a||u||(x=i.createElement(s.a,Object(o.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},v),x)),i.createElement("div",Object(o.a)({className:Object(r.a)(c.root,l,f&&c.dense,b&&c.inset,O&&x&&c.multiline),ref:t},j),O,x)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(l)},458:function(e,t,a){"use strict";a.r(t);var o=a(8),n=a(10),i=a(0),r=a(15),c=a(111),s=a(267),d=a(183),l=a(269),p={backgroundColor:"rgba(255,255,255,0.5)",width:"100%",paddingBottom:0,marginBottom:"0.8rem"},u={color:"inherit",variant:"button",align:"center"},y=[{value:"model",text:"Choose a Model"},{value:"texture",text:"Face Override"},{value:"face",text:"Choose Face"},{value:"weapon",text:"Add Weapons"}];t.default=function(e){var t=e.openControl,a=Object(i.useContext)(r.b),b=Object(i.useContext)(r.a),m=a.model,h=m.weaponRight,g=m.weaponLeft,v=a.app,j=v.showAniControl,f=v.antiAliasing,O=a.outline.enable,x=function(e){t(e.currentTarget.dataset.value)},C=function(e){var t=e.currentTarget.dataset.value,a="weapon".concat(t),n=Object(o.a)({},a,"");b({type:"update",key:"model",value:n})},k=function(e){var t=e.currentTarget.dataset,a=t.key,o=t.name;b({type:"toggle",key:a,value:o})},T=function(e){var t=e.currentTarget.getAttribute("value");b({type:"update",key:"app",value:{sideContent:t}})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:p,children:Object(n.jsxs)(s.a,{dense:!0,disablePadding:!0,component:"nav",children:[y.map((function(e){return Object(n.jsx)(d.a,{button:!0,divider:!0,"data-value":e.value,onClick:x,children:Object(n.jsx)(l.a,{primary:e.text,primaryTypographyProps:u})},e.value)})),g&&Object(n.jsx)(d.a,{button:!0,divider:!0,"data-value":"Left",onClick:C,children:Object(n.jsx)(l.a,{primary:"Remove Left Weapon",primaryTypographyProps:u})}),h&&Object(n.jsx)(d.a,{button:!0,"data-value":"Right",onClick:C,children:Object(n.jsx)(l.a,{primary:"Remove Right Weapon",primaryTypographyProps:u})})]})}),Object(n.jsx)("div",{style:p,children:Object(n.jsxs)(s.a,{dense:!0,disablePadding:!0,component:"nav",children:[Object(n.jsx)(d.a,{button:!0,divider:!0,"data-value":"animation",onClick:x,children:Object(n.jsx)(l.a,{primary:"Choose Animation",primaryTypographyProps:u})}),Object(n.jsx)(d.a,{button:!0,value:"chainMaker",onClick:T,children:Object(n.jsx)(l.a,{primary:"Chain Maker (BETA)",primaryTypographyProps:u})})]})}),Object(n.jsx)("div",{style:p,children:Object(n.jsxs)(s.a,{dense:!0,disablePadding:!0,component:"nav",children:[Object(n.jsx)(d.a,{button:!0,divider:!0,"data-value":"background",onClick:x,children:Object(n.jsx)(l.a,{primary:"Background Settings",primaryTypographyProps:u})}),Object(n.jsx)(d.a,{button:!0,"data-key":"app","data-name":"antiAliasing",divider:!0,onClick:k,children:Object(n.jsx)(l.a,{primary:"Turn ".concat(f?"Off":"On"," Anti-Aliasing"),primaryTypographyProps:u})}),Object(n.jsx)(d.a,{button:!0,"data-key":"app","data-name":"showAniControl",divider:!0,onClick:k,children:Object(n.jsx)(l.a,{primary:"".concat(j?"Hide":"Show"," Animation Control"),primaryTypographyProps:u})}),Object(n.jsx)(d.a,{button:!0,"data-key":"outline","data-name":"enable",divider:!0,onClick:k,children:Object(n.jsx)(l.a,{primary:"".concat(O?"Hide":"Show"," Outline"),primaryTypographyProps:u})}),Object(n.jsx)(d.a,{button:!0,value:"advanced",onClick:T,children:Object(n.jsx)(l.a,{primary:"Advanced Settings",primaryTypographyProps:u})})]})}),Object(n.jsx)("div",{className:"SettingBtns-Share",children:Object(n.jsx)(c.a,{variant:"contained","data-value":"share",onClick:x,children:"Share"})})]})}}}]);
//# sourceMappingURL=25.a83401fd.chunk.js.map