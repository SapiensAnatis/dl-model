var x=Object.defineProperty;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var g=(t,o,n)=>o in t?x(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(t,o)=>{for(var n in o||(o={}))f.call(o,n)&&g(t,n,o[n]);if(s)for(var n of s(o))u.call(o,n)&&g(t,n,o[n]);return t};var c=(t,o)=>{var n={};for(var r in t)f.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&s)for(var r of s(t))o.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n};import{ax as B}from"./vendor.9f6163a0.js";import{B as C}from"./Button.470bce67.js";const l=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},m=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,v=t=>{const o=l(t);return m(o)>128?"#000000":"#ffffff"};function k(d){var e=d,{color:t,children:o=null,title:n=void 0,style:r={}}=e,b=c(e,["color","children","title","style"]);const p=a({color:v(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return B(C,a({className:"ColorButton",sx:p,variant:"contained",title:n},b),o!=null?o:t)}export{k as C};
