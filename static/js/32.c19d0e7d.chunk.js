(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[32],{143:function(e,n,a){"use strict";var t=a(63);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a(1)),c=(0,t(a(79)).default)(i.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.default=c},271:function(e,n,a){},452:function(e,n,a){"use strict";a.r(n);var t=a(31),i=a(11),c=a(1),l=a(17),r=a(143),s=a.n(r),d=a(99),u=a(29),o=(a(271),Object(c.lazy)((function(){return a.e(22).then(a.bind(null,407))})));n.default=function(e){var n=e.openControl,a=Object(c.useContext)(l.b).chainMaker.chain,r=Object(c.useContext)(l.a),h=function(e){r({type:"update",key:"animation",value:{code:e}})};return Object(i.jsxs)("div",{className:"ChainMaker",children:[Object(i.jsxs)("div",{className:"ChainMaker-header",children:[Object(i.jsx)("div",{className:"ChainMaker-title",children:"Chain Maker"}),Object(i.jsx)("div",{className:"ChainMaker-close",onClick:function(){r({type:"update",key:"app",value:{sideContent:"settings"}})},children:Object(i.jsx)(s.a,{})})]}),Object(i.jsxs)(c.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading"}),children:[Object(i.jsxs)("div",{className:"ChainMaker-btns",children:[Object(i.jsx)(d.a,{onClick:function(){var e=Object(u.e)(a);h(e)},className:"ChainMaker-btn",children:"Play All"}),Object(i.jsx)(d.a,{onClick:function(){n("addAni")},className:"ChainMaker-btn",children:"Add"})]}),Object(i.jsx)("div",{className:"ChainMaker-list",children:Object(i.jsx)(o,{playSingleAni:function(e){var n=e.currentTarget.id,t=a.find((function(e){return e.id===n})),i=Object(u.e)([t]);h(i)},deleteSingle:function(e){if(1!==a.length){var n=e.currentTarget.id,t={type:"update",key:"chainMaker",value:{chain:a.filter((function(e){return e.id!==n}))}};r(t)}},handleChange:function(e){var n=e.target,i=n.id,c=n.name,l=n.value,s=Object(t.a)(a),d=s.find((function(e){return e.id===i}));switch(c){case"repetitions":d[c]=l<0?0:Math.round(l);break;default:d[c]=l}r({type:"update",key:"chainMaker",value:{chain:s}})},chain:a})})]})]})}}}]);
//# sourceMappingURL=32.c19d0e7d.chunk.js.map