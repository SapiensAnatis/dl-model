(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[30],{155:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(10),r=a(1),i=a(56),l=a(97),s=a(517),o=a(278),u=a(249),d=a(174),j=a(9),v=a(34),m=a(524),p=a(8),b=a(32),O=a(20);var x=function(e){var t=e.materialType,a=e.openControl,n=Object(r.useContext)(O.b),i=Object(r.useContext)(O.a),s=n.materialParams,o=[].concat(Object(v.a)(p.v),Object(v.a)(p.w[t])),u=function(e){var t=e.currentTarget.value;i({type:"toggle",key:"materialParams",value:t})},d=function(e){return function(t,a){!function(e,t){var a={type:"update",key:"materialParams",value:Object(j.a)({},e,t)};i(a)}(e,a)}},x=function(e){a(e.currentTarget.dataset.value)},h=function(e){switch(p.u[e].type){case"boolean":return function(e){var t=s[e];return Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{value:e,fullWidth:!0,variant:"contained",onClick:u,children:t?"ON":"OFF"})})}(e);case"number":case"percentage":return function(e){var t=s[e],a=p.u[e],n=a.min,r=a.max,i=a.step;return Object(c.jsx)("div",{className:"AdvancedSettingsGroup-slider",children:Object(c.jsx)(m.a,{value:t,min:n,max:r,step:i,onChange:d(e)})})}(e);case"color":return function(e){var t=s[e];return Object(c.jsx)(l.a,{fullWidth:!0,style:{backgroundColor:t,color:Object(b.d)(t),textShadow:"0px 0px 3px white"},"data-value":"materialParams-".concat(e),onClick:x,children:t})}(e);default:return s[e]}},g=o.map((function(e){return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:p.u[e].name}),Object(c.jsx)(c.Fragment,{children:h(e)})]},e)}));return Object(c.jsx)(c.Fragment,{children:g})},h=a(157),g=a.n(h),f=a(156),y=a.n(f);a(155);t.default=function(e){var t=e.openControl,a=Object(i.a)(!0),j=Object(n.a)(a,2),v=j[0],m=j[1],b=Object(r.useContext)(O.b).model.materialType,h=Object(r.useContext)(O.a),f=p.h.map((function(e){return Object(c.jsx)(o.a,{value:e,children:e},e)}));return Object(c.jsxs)("div",{className:"AdvancedSettingsGroup",children:[Object(c.jsxs)("div",{className:"AdvancedSettingsGroup-header",onClick:m,children:[Object(c.jsx)(d.a,{size:"small",children:v?Object(c.jsx)(y.a,{}):Object(c.jsx)(g.a,{})}),Object(c.jsx)("div",{className:"AdvancedSettingsGroup-title",children:"Material"}),Object(c.jsx)("div",{className:"AdvancedSettingsGroup-toggle",children:Object(c.jsx)(l.a,{variant:"contained",onClick:function(e){e.stopPropagation();var t={type:"reset",key:"model",value:["materialType"]};h(t),t.key="materialParams",t.value="",h(t)},children:"Reset"})})]}),Object(c.jsx)(u.a,{in:v,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)("div",{className:"AdvancedSettingsGroup-options",children:[Object(c.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:"Type"}),Object(c.jsx)("div",{children:Object(c.jsx)(s.a,{fullWidth:!0,onChange:function(e){var t=e.target.value;h({type:"update",key:"model",value:{materialType:t}})},value:b,children:f})}),Object(c.jsx)(x,{materialType:b,openControl:t})]})})]})}}}]);
//# sourceMappingURL=30.a6a84e04.chunk.js.map