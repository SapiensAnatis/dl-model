(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[41],{401:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(28),r=n(11),u=n(1),i=n(99),l=n(471),o=n(463),s=n(208),d=n(6),j=n(30),m=n(17);t.default=function(e){var t=e.materialType,n=e.openControl,b=Object(u.useContext)(m.b),p=Object(u.useContext)(m.a),v=b.materialParams,h=[].concat(Object(c.a)(d.z),Object(c.a)(d.A[t])),f=function(e,t){var n={type:"update",key:"materialParams",value:Object(a.a)({},e,t)};p(n)},x=function(e){var t=e.currentTarget.value;p({type:"toggle",key:"materialParams",value:t})},O=function(e){n(e.currentTarget.dataset.value)},g=function(e){switch(d.y[e].type){case"boolean":return function(e){var t=v[e];return Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{value:e,fullWidth:!0,variant:"contained",onClick:x,children:t?"ON":"OFF"})})}(e);case"number":case"percentage":return function(e){var t,n=v[e],a=d.y[e],c=a.min,u=a.max,i=a.step;return Object(r.jsx)("div",{className:"AdvancedSettingsGroup-slider",children:Object(r.jsx)(l.a,{value:n,min:c,max:u,step:i,onChange:(t=e,function(e,n){f(t,n)})})})}(e);case"color":return function(e){var t=v[e];return Object(r.jsx)(i.a,{fullWidth:!0,style:{backgroundColor:t,color:Object(j.d)(t),textShadow:"0px 0px 3px white"},"data-value":"materialParams-".concat(e),onClick:O,children:t})}(e);case"select":return function(e){var t,n=v[e],a=d.y[e].options.map((function(e){return Object(r.jsx)(s.a,{value:e,children:e},e)}));return Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{fullWidth:!0,value:n,onChange:(t=e,function(e){f(t,e.target.value)}),children:a})})}(e);default:return v[e]}},y=function(e){switch(d.y[e].type){case"number":return"".concat(d.y[e].name,": ").concat(v[e]);case"percentage":return"".concat(d.y[e].name,": ").concat(~~(100*v[e]),"%");default:return d.y[e].name}},C=h.map((function(e){return Object(r.jsxs)(u.Fragment,{children:[Object(r.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:y(e)}),Object(r.jsx)(r.Fragment,{children:g(e)})]},e)}));return Object(r.jsx)(r.Fragment,{children:C})}}}]);
//# sourceMappingURL=41.f4873593.chunk.js.map