(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[32],{139:function(e,n,a){"use strict";var t=a(64);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a(1)),c=(0,t(a(79)).default)(i.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.default=c},271:function(e,n,a){},452:function(e,n,a){"use strict";a.r(n);var t=a(11),i=a(1),c=a(17),r=a(139),s=a.n(r),l=a(99),d=a(30),u=(a(271),Object(i.lazy)((function(){return a.e(22).then(a.bind(null,407))})));n.default=function(e){var n=e.openControl,a=Object(i.useContext)(c.b).chainMaker.chain,r=Object(i.useContext)(c.a),o=function(e,n){r({type:"update",key:e,value:n})},h=function(e){o("animation",{code:e})};return Object(t.jsxs)("div",{className:"ChainMaker",children:[Object(t.jsxs)("div",{className:"ChainMaker-header",children:[Object(t.jsx)("div",{className:"ChainMaker-title",children:"Chain Maker"}),Object(t.jsx)("div",{className:"ChainMaker-close",onClick:function(){o("app",{sideContent:"settings"})},children:Object(t.jsx)(s.a,{})})]}),Object(t.jsxs)(i.Suspense,{fallback:Object(t.jsx)("div",{children:"Loading"}),children:[Object(t.jsxs)("div",{className:"ChainMaker-btns",children:[Object(t.jsx)(l.a,{onClick:function(){var e=Object(d.e)(a);h(e)},className:"ChainMaker-btn",children:"Play All"}),Object(t.jsx)(l.a,{onClick:function(){n("addAni")},className:"ChainMaker-btn",children:"Add"})]}),Object(t.jsx)("div",{className:"ChainMaker-list",children:Object(t.jsx)(u,{playAni:function(e){var n=e.currentTarget.id,t=a.find((function(e){return e.id===n})),i=Object(d.e)([t]);h(i)},deleteAni:function(e){if(1!==a.length){var n=e.currentTarget.id,t=a.filter((function(e){return e.id!==n}));o("chainMaker",{chain:t})}},updateAni:function(e,n){var t=a.map((function(a){return a.id===e?n:a}));o("chainMaker",{chain:t})},chain:a})})]})]})}}}]);
//# sourceMappingURL=32.c52be885.chunk.js.map