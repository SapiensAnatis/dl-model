(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[30],{131:function(e,t,n){},138:function(e,t,n){"use strict";var a=n(13),i=n(9),c=n(56),s=n(158),l=n(155),r=n(140),o=n.n(r),d=n(139),j=n.n(d);n(131);t.a=function(e){var t=e.children,n=e.openAtStart,r=void 0!==n&&n,d=e.title,u=e.titleButton,p=Object(c.a)(r),b=Object(a.a)(p,2),v=b[0],O=b[1];return Object(i.jsxs)("div",{className:"AdvancedSettingsGroup",children:[Object(i.jsxs)("div",{className:"AdvancedSettingsGroup-header",onClick:O,children:[Object(i.jsx)(l.a,{size:"small",children:v?Object(i.jsx)(j.a,{}):Object(i.jsx)(o.a,{})}),Object(i.jsx)("div",{className:"AdvancedSettingsGroup-title",children:d}),u&&Object(i.jsx)("div",{className:"AdvancedSettingsGroup-titleBtn",children:u})]}),Object(i.jsx)(s.a,{in:v,timeout:"auto",unmountOnExit:!0,children:t})]})}},402:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(0),c=n(110),s=n(468),l=n(212),r=n(138),o=n(15),d=(n(131),n(7)),j=Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(45)]).then(n.bind(null,406))}));t.default=function(e){var t=e.openControl,n=e.openAtStart,u=Object(i.useContext)(o.b).material.type,p=Object(i.useContext)(o.a),b=d.j.map((function(e){return Object(a.jsx)(l.a,{value:e,children:e},e)})),v=Object(a.jsx)(c.a,{variant:"contained",onClick:function(e){e.stopPropagation();p({type:"reset",key:"material"})},children:"Reset"});return Object(a.jsx)(r.a,{title:"Material",titleButton:v,openAtStart:n,children:Object(a.jsxs)("div",{className:"AdvancedSettingsGroup-options",children:[Object(a.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:"Type"}),Object(a.jsx)("div",{children:Object(a.jsx)(s.a,{fullWidth:!0,onChange:function(e){var t=e.target.value;p({type:"update",key:"material",value:{type:t}})},value:u,children:b})}),Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading"}),children:Object(a.jsx)(j,{materialType:u,openControl:t})})]})})}}}]);
//# sourceMappingURL=30.db5c3208.chunk.js.map