import{_ as f,a,j as o}from"./index.6bbc6b5b.js";import{az as h,aK as k,aE as p}from"./vendor.f5906274.js";import{C as s}from"./ColorButton.2b9d867f.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}];const v=h(()=>f(()=>import("./index.40e61006.js"),["assets/index.40e61006.js","assets/vendor.f5906274.js","assets/ButtonBase.89129488.js","assets/index.6bbc6b5b.js","assets/index.15a3e0a4.css"]).then(c=>({default:c.ChromePicker})));function b({initColor:c="#cccccc",onSelect:t}){const[r,n]=k(c),i=({hex:e})=>n(e),m=e=>n(e.target.value),d=()=>t(r);return a("div",{className:"ColorPicker",children:[a("div",{className:"ColorPicker-select",children:[o(()=>o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:l,title:C})=>o(s,{onClick:m,value:l,color:l,title:C,children:e},l))}),{}),o(p,{fallback:null,children:o(v,{color:r,onChangeComplete:i})})]}),o(s,{color:r,onClick:d,children:"Apply"})]})}export{b as C};
