(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[30,17],{159:function(e,a,t){"use strict";var o=t(7),r=t(14),n=t(1),s=(t(19),t(21)),i=t(29),d=t(27),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=n.forwardRef((function(e,a){var t=e.align,i=void 0===t?"inherit":t,c=e.classes,l=e.className,h=e.color,p=void 0===h?"initial":h,u=e.component,P=e.display,A=void 0===P?"initial":P,b=e.gutterBottom,_=void 0!==b&&b,y=e.noWrap,B=void 0!==y&&y,g=e.paragraph,v=void 0!==g&&g,j=e.variant,w=void 0===j?"body1":j,f=e.variantMapping,x=void 0===f?m:f,N=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),O=u||(v?"p":x[w]||m[w])||"span";return n.createElement(O,Object(o.a)({className:Object(s.a)(c.root,l,"inherit"!==w&&c[w],"initial"!==p&&c["color".concat(Object(d.a)(p))],B&&c.noWrap,_&&c.gutterBottom,v&&c.paragraph,"inherit"!==i&&c["align".concat(Object(d.a)(i))],"initial"!==A&&c["display".concat(Object(d.a)(A))]),ref:a},N))}));a.a=Object(i.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},201:function(e,a,t){"use strict";var o=t(7),r=t(14),n=t(1),s=(t(19),t(21)),i=t(29),d=t(116),m=t(75),c=t(36),l=t(166),h=t(37),p="undefined"===typeof window?n.useEffect:n.useLayoutEffect,u=n.forwardRef((function(e,a){var t=e.alignItems,i=void 0===t?"center":t,u=e.autoFocus,P=void 0!==u&&u,A=e.button,b=void 0!==A&&A,_=e.children,y=e.classes,B=e.className,g=e.component,v=e.ContainerComponent,j=void 0===v?"li":v,w=e.ContainerProps,f=(w=void 0===w?{}:w).className,x=Object(r.a)(w,["className"]),N=e.dense,O=void 0!==N&&N,C=e.disabled,k=void 0!==C&&C,W=e.disableGutters,S=void 0!==W&&W,R=e.divider,T=void 0!==R&&R,M=e.focusVisibleClassName,I=e.selected,L=void 0!==I&&I,E=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=n.useContext(l.a),H={dense:O||F.dense||!1,alignItems:i},z=n.useRef(null);p((function(){P&&z.current&&z.current.focus()}),[P]);var V=n.Children.toArray(_),U=V.length&&Object(m.a)(V[V.length-1],["ListItemSecondaryAction"]),D=n.useCallback((function(e){z.current=h.findDOMNode(e)}),[]),G=Object(c.a)(D,a),$=Object(o.a)({className:Object(s.a)(y.root,B,H.dense&&y.dense,!S&&y.gutters,T&&y.divider,k&&y.disabled,b&&y.button,"center"!==i&&y.alignItemsFlexStart,U&&y.secondaryAction,L&&y.selected),disabled:k},E),J=g||"li";return b&&($.component=g||"div",$.focusVisibleClassName=Object(s.a)(y.focusVisible,M),J=d.a),U?(J=$.component||g?J:"div","li"===j&&("li"===J?J="div":"li"===$.component&&($.component="div")),n.createElement(l.a.Provider,{value:H},n.createElement(j,Object(o.a)({className:Object(s.a)(y.container,f),ref:G},x),n.createElement(J,$,V),V.pop()))):n.createElement(l.a.Provider,{value:H},n.createElement(J,Object(o.a)({ref:G},$),V))}));a.a=Object(i.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(u)},205:function(e,a,t){"use strict";var o=t(14),r=t(40),n=t(7),s=t(1),i=(t(19),t(21)),d=t(29),m=t(201),c=s.forwardRef((function(e,a){var t,r=e.classes,d=e.className,c=e.component,l=void 0===c?"li":c,h=e.disableGutters,p=void 0!==h&&h,u=e.ListItemClasses,P=e.role,A=void 0===P?"menuitem":P,b=e.selected,_=e.tabIndex,y=Object(o.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==_?_:-1),s.createElement(m.a,Object(n.a)({button:!0,role:A,tabIndex:t,component:l,selected:b,disableGutters:p,classes:Object(n.a)({dense:r.dense},u),className:Object(i.a)(r.root,d,b&&r.selected,!p&&r.gutters),ref:a},y))}));a.a=Object(d.a)((function(e){return{root:Object(n.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(c)},287:function(e,a,t){},288:function(e,a,t){"use strict";var o=t(7),r=t(14),n=t(1),s=(t(19),t(21)),i=t(29),d=t(159),m=t(166),c=n.forwardRef((function(e,a){var t=e.children,i=e.classes,c=e.className,l=e.disableTypography,h=void 0!==l&&l,p=e.inset,u=void 0!==p&&p,P=e.primary,A=e.primaryTypographyProps,b=e.secondary,_=e.secondaryTypographyProps,y=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),B=n.useContext(m.a).dense,g=null!=P?P:t;null==g||g.type===d.a||h||(g=n.createElement(d.a,Object(o.a)({variant:B?"body2":"body1",className:i.primary,component:"span",display:"block"},A),g));var v=b;return null==v||v.type===d.a||h||(v=n.createElement(d.a,Object(o.a)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},_),v)),n.createElement("div",Object(o.a)({className:Object(s.a)(i.root,c,B&&i.dense,u&&i.inset,g&&v&&i.multiline),ref:a},y),g,v)}));a.a=Object(i.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(c)},289:function(e,a,t){},290:function(e,a,t){},291:function(e,a,t){"use strict";var o=t(87),r=t(88);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(1)),s=(0,o(t(89)).default)(n.createElement("path",{d:"M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"}),"Camera");a.default=s},511:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var o=t(9),r=t(1),n=t(32),s=t(94),i=t(479),d=t(201),m=t(288),c=t(521),l=t(291),h=t.n(l),p={backgroundColor:"rgba(255,255,255,0.5)",width:"100%",paddingBottom:0,marginBottom:"0.4rem"},u={color:"inherit",variant:"button",align:"center"},P=(t(287),t(10)),A=["adv","dragon"];var b=function(e){var a=e.handleClick,t=A.map((function(e){var t="".concat("/dl-model","/img/icons/").concat(e,"Icon.png");return Object(P.jsx)(s.a,{className:"ModelSelectBtns-Btn","data-value":e,onClick:a,children:Object(P.jsx)("img",{src:t,alt:e})},e)}));return Object(P.jsxs)(i.a,{dense:!0,disablePadding:!0,style:p,component:"div",children:[Object(P.jsx)(d.a,{divider:!0,children:Object(P.jsx)(m.a,{primary:"Change Model",primaryTypographyProps:u})}),Object(P.jsx)(d.a,{children:Object(P.jsx)("div",{className:"ModelSelectBtns",children:t})})]})},_=t(514),y=t(205),B=t(93);t(289);var g=function(e){var a,t=e.model,o=t.id,s=t.modName,i=Object(r.useContext)(n.a),d=null===(a=B.default[o])||void 0===a?void 0:a.map((function(e){return e.name}));return d?Object(P.jsx)(_.a,{className:"ModelModSelect",value:d.includes(s)?s:d[0],onChange:function(e){var a=e.target.value;!function(e,a){i({type:"update",key:"model",value:{mod:e,modName:a}})}(B.default[o].find((function(e){return e.name===a})).code,a)},autoWidth:!0,children:d.map((function(e){return Object(P.jsx)(y.a,{value:e,children:e},e)}))}):Object(P.jsx)(P.Fragment,{})},v=(t(290),{adv:[{value:"texture",text:"Face Override"},{value:"face",text:"Facial Expression"},{value:"weapon",text:"Add Weapons"}],dragon:[{value:"dragonFace",text:"Facial Expression"}],ani:[],basic:[]});var j=function(e){var a=e.openModal,t=Object(r.useContext)(n.b),l=Object(r.useContext)(n.a),A=t.model,_=t.app,y=_.showAniControl,B=_.antiAliasing,j=_.viewerType,w=t.outline.enable,f=t.ascii.enable,x=function(e){a(e.currentTarget.dataset.value)},N=function(e,a){l({type:"update",key:e,value:a})},O=function(e){var a=e.currentTarget.dataset.value,t="weapon".concat(a),r=Object(o.a)({},t,"");N("model",r)},C=function(e){var a=e.currentTarget.dataset,t=a.key,o=a.name;l({type:"toggle",key:t,value:o})},k=function(e){var a=e.currentTarget.dataset.value;N("app",{sidebarContent:a})},W=function(e){var a="weapon".concat(e);return A[a]?Object(P.jsx)(d.a,{button:!0,divider:!0,"data-value":e,onClick:O,children:Object(P.jsx)(m.a,{primary:"Remove ".concat(e," Weapon"),primaryTypographyProps:u})}):null},S=Object(P.jsxs)(i.a,{dense:!0,disablePadding:!0,style:p,component:"div",children:[Object(P.jsx)(d.a,{button:!0,divider:!0,"data-value":"adv"===j?"animation":"nonHumanAni",onClick:x,children:Object(P.jsx)(m.a,{primary:"Choose Animation",primaryTypographyProps:u})}),Object(P.jsx)(d.a,{button:!0,"data-value":"chainMaker",onClick:k,children:Object(P.jsx)(m.a,{primary:"Chain Maker",primaryTypographyProps:u})})]}),R=Object(P.jsxs)("div",{className:"SettingBtns-others",children:[Object(P.jsx)(s.a,{variant:"contained","data-value":"share",onClick:x,children:"Share"}),Object(P.jsx)(s.a,{variant:"contained","data-value":"export",onClick:x,children:"Export"}),!f&&Object(P.jsx)(c.a,{title:"Take screenshot",placement:"top",children:Object(P.jsx)(s.a,{variant:"contained",onClick:function(){return window.getScreenshot=!0},children:Object(P.jsx)(h.a,{})})})]});return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(b,{handleClick:x}),Object(P.jsx)(g,{model:A}),Object(P.jsxs)(i.a,{dense:!0,disablePadding:!0,style:p,component:"div",children:[v[j].map((function(e){return Object(P.jsx)(d.a,{button:!0,divider:!0,"data-value":e.value,onClick:x,children:Object(P.jsx)(m.a,{primary:e.text,primaryTypographyProps:u})},e.value)})),W("Left"),W("Right")]}),"basic"!==j?S:null,Object(P.jsxs)(i.a,{dense:!0,disablePadding:!0,style:p,component:"div",children:[Object(P.jsx)(d.a,{button:!0,divider:!0,"data-value":"background",onClick:x,children:Object(P.jsx)(m.a,{primary:"Background Settings",primaryTypographyProps:u})}),Object(P.jsx)(d.a,{button:!0,"data-key":"app","data-name":"antiAliasing",divider:!0,onClick:C,children:Object(P.jsx)(m.a,{primary:"Turn ".concat(B?"Off":"On"," Anti-Aliasing"),primaryTypographyProps:u})}),Object(P.jsx)(d.a,{button:!0,"data-key":"app","data-name":"showAniControl",divider:!0,onClick:C,children:Object(P.jsx)(m.a,{primary:"".concat(y?"Hide":"Show"," Animation Control"),primaryTypographyProps:u})}),Object(P.jsx)(d.a,{button:!0,"data-key":"outline","data-name":"enable",divider:!0,onClick:C,children:Object(P.jsx)(m.a,{primary:"".concat(w?"Hide":"Show"," Outline"),primaryTypographyProps:u})}),Object(P.jsx)(d.a,{button:!0,"data-value":"advanced",onClick:k,children:Object(P.jsx)(m.a,{primary:"Advanced Settings",primaryTypographyProps:u})})]}),R,Object(P.jsx)("a",{href:"https://ko-fi.com/L4L83VOAP",rel:"noreferrer",target:"_blank",children:Object(P.jsx)("img",{height:"36px",src:"https://cdn.ko-fi.com/cdn/kofi5.png?v=2",alt:"Buy Me a Coffee"})})]})}},93:function(e,a,t){"use strict";t.r(a);a.default={c110383_01:[{name:"Wheel Up",code:"show mPartsB_A, mPartsA_A, mPartsC_A; hide mPartsB_B"},{name:"Wheel Down",code:"hide mPartsB_A; show mPartsB_B, mPartsA_A, mPartsC_A"},{name:"Wheel Up No Booster",code:"show mPartsB_A; hide mPartsB_B, mPartsA_A, mPartsC_A"},{name:"Wheel Down No Booster",code:"hide mPartsB_A, mPartsA_A, mPartsC_A; show mPartsB_B"}],c110281_02:[{name:"Unmasked",code:"show mPartsA_A; hide mPartsA_B"},{name:"Masked",code:"hide mPartsA_A; show mPartsA_B"}],c110381_01:[{name:"Locked Sigil",code:"show mPartsA_A; hide mPartsA_B"},{name:"Sigil Released",code:"hide mPartsA_A; show mPartsA_B"}],c110377_01:[{name:"Normal",code:"show mPartsA_A; hide mPartsA_B"},{name:"Ars\xe8ne Summoned",code:"hide mPartsA_A; show mPartsA_B"}],c110378_01:[{name:"Normal No Whip",code:"show mPartsA_A; hide mPartsA_B, mPartsB_B"},{name:"Carmen Summoned No Whip",code:"hide mPartsA_A, mPartsB_B; show mPartsA_B"},{name:"With Whip",code:"show mPartsA_A, mPartsB_B; hide mPartsA_B"},{name:"Carmen Summoned With Whip",code:"hide mPartsA_A; show mPartsA_B, mPartsB_B"}],c110379_01:[{name:"Normal",code:"hide mPartsA_B; show mParts A_A, mPartsB_A, mBodyAll"},{name:"Car",code:"show mPartsA_B; hide mParts A_A, mPartsB_A, mBodyAll"}],c110380_01:[{name:"Lobby",code:"show mPartsA_B; hide mPartsA_A, mPartsA_C"},{name:"In Quest",code:"show mPartsA_A; hide mPartsA_B, mPartsA_C"},{name:"Pithos Summoned",code:"show mPartsA_C; hide mPartsA_A, mPartsA_B"}],c110354_01:[{name:"No Buster",code:"show mPartsA_A; hide mPartsA_B"},{name:"Buster",code:"show mPartsA_B; hide mPartsA_A"}],c110388_01:[{name:"Clenched Fist",code:"show mPartsA_A; hide mPartsA_B"},{name:"Claw Hand",code:"show mPartsA_B; hide mPartsA_A"}],d210144_01:[{name:"No Flag",code:"hide mPartsA_B; show mPartsA_A"},{name:"With Flag",code:"show mPartsA_A, mPartsA_B"},{name:"No Lance",code:"hide mPartsA_A, mPartsA_B"}],d210145_01:[{name:"Wings Plushie",code:"show mPartsA_B, mPartsB_A"},{name:"No Wings",code:"hide mPartsA_B; show mPartsB_A"},{name:"No Plushie",code:"show mPartsA_B; hide mPartsB_A"},{name:"No Wings No Plushie",code:"hide mPartsA_B, mPartsB_A"}],d210145_02:[{name:"Normal",code:"show mPartsA_A"},{name:"No Book",code:"hide mPartsA_A"}],d210145_03:[{name:"Normal",code:"show mPartsA_A"},{name:"No Book",code:"hide mPartsA_A"}],d210132_01:[{name:"With Wings",code:"show mPartsA_B"},{name:"No Wings",code:"hide mPartsA_B"}],d210132_03:[{name:"Halo and Wings",code:"show mPartsA_B; hide mPartsA_A"},{name:"No Wings",code:"hide mPartsA_B; show mPartsA_A"},{name:"No Halo No Wings",code:"hide mPartsA_B, mPartsA_A"}],d210118_01:[{name:"No Buster",code:"show mPartsA_A; hide mPartsA_B"},{name:"Buster",code:"hide mPartsA_A; show mPartsA_B"}],d210117_01:[{name:"Normal",code:"show mSpear"},{name:"No Weapon",code:"hide mSpear"}],d210102_01:[{name:"Normal",code:"show mSpear"},{name:"No Weapon",code:"hide mSpear"}],d210025_01:[{name:"Normal",code:"show mWeapon"},{name:"No Weapon",code:"hide mWeapon"}],d210101_01:[{name:"Normal",code:"show mWeapon"},{name:"No Weapon",code:"hide mWeapon"}],d210138_01:[{name:"Normal",code:"show mBody_scroll"},{name:"No Face",code:"hide mBody_scroll"}],d210110_01:[{name:"Normal",code:"show mWeapon"},{name:"No Weapon",code:"hide mWeapon"}],d210076_01:[{name:"Normal",code:"show mSpear"},{name:"No Weapon",code:"hide mSpear"}],d210114_01:[{name:"Normal",code:"show mWeapon"},{name:"No Rod",code:"hide mWeapon"}],d210084_01:[{name:"Normal",code:"show mWepon"},{name:"No Staff",code:"hide mWepon"}],d210134_01:[{name:"Normal",code:"show mSpear"},{name:"No Trident",code:"hide mSpear"}],d210020_01:[{name:"Normal",code:"show mSpear"},{name:"No Weapon",code:"hide mSpear"}],d210142_01:[{name:"With Box",code:"show mPartsA_B"},{name:"No Box",code:"hide mPartsA_B"}],d210077_01:[{name:"Normal",code:"show mSword"},{name:"No Weapon",code:"hide mSword"}],d210153_01:[{name:"Normal",code:"show mSword"},{name:"No Weapon",code:"hide mSword"}],d210125_01:[{name:"Normal",code:"show mUribou"},{name:"No Uribou",code:"hide mUribou"}],d210085_01:[{name:"Normal",code:"show mWeapon"},{name:"No Fan",code:"hide mWeapon"}],d200008_01:[{name:"Normal",code:"show mbox_01"},{name:"No Box",code:"hide mbox_01"}],d210147_01:[{name:"Large Wings",code:"show mPartsA_B; hide mPartsA_A, mPartsB_A, mPartsB_B"},{name:"Small Wings",code:"show mPartsA_A; hide mPartsA_B, mPartsB_A, mPartsB_B"}],h0080501:[{name:"Normal",code:"hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB, mCandy"},{name:"No Candy",code:"hide mPartsA_BR, mPartsB_BR, mCandy; show mPartsA, mPartsB"},{name:"Broken Right Wing",code:"hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB, mCandy"},{name:"Broken Left Wing",code:"hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR, mCandy"},{name:"Wings Broken",code:"hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR, mCandy"}],h0090501:[{name:"Normal",code:"hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB"},{name:"Broken Right Wing",code:"hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB, mCandy"},{name:"Broken Left Wing",code:"hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR, mCandy"},{name:"Wings Broken",code:"hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR, mCandy"}],h0100301:[{name:"Normal",code:"show mPartsA; hide mPartsA_BR"},{name:"Broken Tome",code:"hide mPartsA; show mPartsA_BR"}],r0130001:[{name:"Normal",code:"hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB"},{name:"Broken Wings",code:"hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR"},{name:"Broken Blue Soul",code:"hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB"},{name:"Broken",code:"hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR"}]}}}]);
//# sourceMappingURL=30.93ea6bf1.chunk.js.map