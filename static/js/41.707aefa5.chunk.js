(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[41],{402:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(32),r=n(11),u=n(1),i=n(82),l=n(472),o=n(464),s=n(209),d=n(6),j=n(26),m=n(17);t.default=function(e){var t=e.materialType,n=e.openControl,b=Object(u.useContext)(m.b),v=Object(u.useContext)(m.a),p=b.materialParams,f=[].concat(Object(c.a)(d.x),Object(c.a)(d.z[t])),h=function(e,t){var n={type:"update",key:"materialParams",value:Object(a.a)({},e,t)};v(n)},O=function(e){var t=e.currentTarget.value;v({type:"toggle",key:"materialParams",value:t})},x=function(e){n(e.currentTarget.dataset.value)},g=function(e){switch(d.A[e].type){case"boolean":return function(e){var t=p[e];return Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{value:e,fullWidth:!0,variant:"contained",onClick:O,children:t?"ON":"OFF"})})}(e);case"number":case"percentage":return function(e){var t,n=p[e],a=d.A[e],c=a.min,u=a.max,i=a.step;return Object(r.jsx)("div",{className:"AdvancedSettingsGroup-slider",children:Object(r.jsx)(l.a,{value:n,min:c,max:u,step:i,onChange:(t=e,function(e,n){h(t,n)})})})}(e);case"color":return function(e){var t=p[e];return Object(r.jsx)(i.a,{fullWidth:!0,style:{backgroundColor:t,color:Object(j.k)(t)},"data-value":"materialParams-".concat(e),onClick:x,children:t})}(e);case"select":return function(e){var t,n=p[e],a=d.A[e].options.map((function(e){return Object(r.jsx)(s.a,{value:e,children:e},e)}));return Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{fullWidth:!0,value:n,onChange:(t=e,function(e){h(t,e.target.value)}),children:a})})}(e);default:return p[e]}},A=function(e){switch(d.A[e].type){case"number":return"".concat(d.A[e].name,": ").concat(p[e]);case"percentage":return"".concat(d.A[e].name,": ").concat(~~(100*p[e]),"%");default:return d.A[e].name}},k=f.map((function(e){return Object(r.jsxs)(u.Fragment,{children:[Object(r.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:A(e)}),Object(r.jsx)(r.Fragment,{children:g(e)})]},e)}));return Object(r.jsx)(r.Fragment,{children:k})}}}]);
//# sourceMappingURL=41.707aefa5.chunk.js.map