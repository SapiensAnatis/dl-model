var D=Object.defineProperty,N=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(o,r,c)=>r in o?D(o,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[r]=c,A=(o,r)=>{for(var c in r||(r={}))l.call(r,c)&&m(o,c,r[c]);if(a)for(var c of a(r))p.call(r,c)&&m(o,c,r[c]);return o},f=(o,r)=>N(o,G(r));var u=(o,r)=>{var c={};for(var n in o)l.call(o,n)&&r.indexOf(n)<0&&(c[n]=o[n]);if(o!=null&&a)for(var n of a(o))r.indexOf(n)<0&&p.call(o,n)&&(c[n]=o[n]);return c};import{j as e,x as $,a as g}from"./index.83ee0ec4.js";import{u as j}from"./useToggleState.eb300de6.js";import{c as b}from"./createSvgIcon.1cb726f5.js";var z=b(e("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),C=b(e("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const T=$((o,r)=>{const t=o,{children:c=[],className:n="",defaultOpen:h=!1,disableGutters:v=!1}=t,x=u(t,["children","className","defaultOpen","disableGutters"]),[i,y]=j(h),w=`Accordion ${v?"noGutters":""} ${i?"open":""} ${n}`,[s,d]=c,k=i?e(C,{}):e(z,{});return g("div",f(A({className:w},x),{ref:r,children:[s&&g("div",{onClick:y,className:"Accordion-summary",children:[k,s]}),i&&d&&e("div",{className:"Accordion-details",children:d})]}))});export{T as A,C as a,z as b};
