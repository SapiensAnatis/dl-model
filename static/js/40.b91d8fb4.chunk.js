(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[40],{151:function(e,t,n){},162:function(e,t,n){"use strict";var a=n(11),i=n(67),c=n(184),s=n(150),l=n(164),r=n.n(l),d=n(163),o=n.n(d),j=(n(151),n(9));t.a=function(e){var t=e.children,n=e.openAtStart,l=void 0!==n&&n,d=e.title,u=e.titleButton,p=Object(i.a)(l),b=Object(a.a)(p,2),v=b[0],O=b[1];return Object(j.jsxs)("div",{className:"AdvancedSettingsGroup",children:[Object(j.jsxs)("div",{className:"AdvancedSettingsGroup-header",onClick:O,children:[Object(j.jsx)(s.a,{size:"small",children:v?Object(j.jsx)(o.a,{}):Object(j.jsx)(r.a,{})}),Object(j.jsx)("div",{className:"AdvancedSettingsGroup-title",children:d}),u&&Object(j.jsx)("div",{className:"AdvancedSettingsGroup-titleBtn",children:u})]}),Object(j.jsx)(c.a,{in:v,timeout:"auto",unmountOnExit:!0,children:t})]})}},483:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(97),c=n(502),s=n(242),l=n(162),r=n(30),d=(n(151),n(10)),o=n(9),j=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(55)]).then(n.bind(null,443))}));t.default=function(e){var t=e.openModal,n=e.openAtStart,u=Object(a.useContext)(r.b).material.type,p=Object(a.useContext)(r.a),b=d.l.map((function(e){return Object(o.jsx)(s.a,{value:e,children:e},e)})),v=Object(o.jsx)(i.a,{variant:"contained",onClick:function(e){e.stopPropagation();p({type:"reset",key:"material"})},children:"Reset"});return Object(o.jsx)(l.a,{title:"Material",titleButton:v,openAtStart:n,children:Object(o.jsxs)("div",{className:"AdvancedSettingsGroup-options",children:[Object(o.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:"Type"}),Object(o.jsx)("div",{children:Object(o.jsx)(c.a,{fullWidth:!0,onChange:function(e){var t=e.target.value;p({type:"update",key:"material",value:{type:t}})},value:u,children:b})}),Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsx)(j,{materialType:u,openModal:t})})]})})}}}]);
//# sourceMappingURL=40.b91d8fb4.chunk.js.map