(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[46],{168:function(e,_,a){"use strict";var n=a(13),c=(a(169),a(10));_.a=function(e){var _=e.value,a=e.disabled,o=e.onClick,t=function(e){var _=e.currentTarget.dataset.value;o(_)},d=n.i.map((function(e){var n=a&&a.includes(e),o="".concat("/dl-model","/img/filter/weapon_").concat(e,".png");return Object(c.jsx)("div",{className:"WeaponSelector-GlowRadio ".concat(n&&"disabled"),"data-value":e,onClick:n?null:t,children:Object(c.jsx)("img",{className:"WeaponSelector-GlowRadioIcon  ".concat(_===e?"selected":""," "),src:o,alt:"".concat(e)})},e)}));return Object(c.jsx)("div",{className:"WeaponSelector",children:d})}},169:function(e,_,a){},208:function(e,_,a){},516:function(e,_,a){"use strict";a.r(_);var n=a(9),c=a(12),o=a(11),t=a(1),d=a(241),N=a(168),r=a(160),i={"Long Range":[{name:"Combo",code:"GUN_CMB_A_01"},{name:"Force Strike",code:"GUN_CHR_A_01>GUN_CHR_A_02>GUN_CHR_A_03"}],"Short Range":[{name:"Combo",code:"GUN_CMB_B_01"},{name:"Force Strike",code:"GUN_CHR_B_01>GUN_CHR_B_02>GUN_CHR_B_03"}],"Rapid-Fire":[{name:"Combo",code:"GUN_CMB_C_01>GUN_CMB_C_02>GUN_CMB_C_03"},{name:"Force Strike",code:"GUN_CHR_C_01>GUN_CHR_C_02>GUN_CHR_C_03"}]},m={Axe:[{name:"Force Strike Run",code:"AXE_RUN_05"},{name:"Summon",code:"SMN_CHR_AXE_APPEAR_01>SMN_CHR_AXE_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_AXE_WEAPON_APPEAR_01>SMN_CHR_AXE_WEAPON_LOOP_01"}],Bow:[{name:"Force Strike Run",code:"BOW_RUN_05"},{name:"Old Force Strike",code:"BOW_CHR_A_01>BOW_CHR_A_02>BOW_CHR_A_03"},{name:"Summon",code:"SMN_CHR_BOW_APPEAR_01>SMN_CHR_BOW_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_BOW_WEAPON_APPEAR_01>SMN_CHR_BOW_WEAPON_LOOP_01"}],Dagger:[{name:"Summon",code:"SMN_CHR_DAG_APPEAR_01>SMN_CHR_DAG_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_DAG_WEAPON_APPEAR_01>SMN_CHR_DAG_WEAPON_LOOP_01"}],Lance:[{name:"Summon",code:"SMN_CHR_LAN_APPEAR_01>SMN_CHR_LAN_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_LAN_WEAPON_APPEAR_01>SMN_CHR_LAN_WEAPON_LOOP_01"}],Staff:[{name:"Force Strike Run",code:"CAN_RUN_05"},{name:"Summon",code:"SMN_CHR_CAN_APPEAR_01>SMN_CHR_CAN_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_CAN_WEAPON_APPEAR_01>SMN_CHR_CAN_WEAPON_LOOP_01"}],Wand:[{name:"Force Strike Run",code:"ROD_RUN_05"},{name:"Summon",code:"SMN_CHR_ROD_APPEAR_01>SMN_CHR_ROD_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_ROD_WEAPON_APPEAR_01>SMN_CHR_ROD_WEAPON_LOOP_01"}],Sword:[{name:"Summon",code:"SMN_CHR_SWD_APPEAR_01>SMN_CHR_SWD_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_SWD_WEAPON_APPEAR_01>SMN_CHR_SWD_WEAPON_LOOP_01"}],Blade:[{name:"Summon",code:"SMN_CHR_KAT_APPEAR_01>SMN_CHR_KAT_LOOP_01"},{name:"Summon Special",code:"SMN_CHR_KAT_WEAPON_APPEAR_01>SMN_CHR_KAT_WEAPON_LOOP_01"},{name:"Slow Run",code:"KAT_RUN_01"},{name:"Fast Run",code:"KAT_RUN_02"},{name:"Die",code:"KAT_DIE_02"},{name:"Idle",code:"KAT_INT_01"},{name:"Stun",code:"KAT_SWN_01"},{name:"Frozen",code:"KAT_FRZ_01"},{name:"Take Damage",code:"KAT_KNB_01"},{name:"Fall to Ground",code:"KAT_BST_05"},{name:"Knocked Away",code:"KAT_BST_01>KAT_BST_02>KAT_BST_03>KAT_BST_04&ts=0.5>KAT_BST_07"},{name:"Stand Back Up",code:"KAT_BST_07&ts=0.1>KAT_BST_06"},{name:"Ukemi",code:"KAT_UKM_01&ts=0.5>KAT_UKM_03"},{name:"Ukemi 2",code:"KAT_UKM_11&ts=0.5>KAT_UKM_03"},{name:"Buff",code:"KAT_050_99"},{name:"Throw Item",code:"KAT_055_01_01"},{name:"Mega Man Weapon Force Strike",code:"KAT_054_01_01"}],Manacaster:[{name:"Summon",code:"SMN_CHR_GUN_APPEAR_01>SMN_CHR_GUN_LOOP_01"},{name:"Die",code:"GUN_DIE_02"},{name:"Idle",code:"GUN_INT_01"},{name:"Stun",code:"GUN_SWN_01"},{name:"Frozen",code:"GUN_FRZ_01"},{name:"Quick Turn",code:"GUN_QTN_01"},{name:"Take Damage",code:"GUN_KNB_01"},{name:"Slow Run",code:"GUN_RUN_01"},{name:"Fast Run",code:"GUN_RUN_02"},{name:"Knocked Away",code:"GUN_BST_01>GUN_BST_02>GUN_BST_03>GUN_BST_04&ts=0.5>GUN_BST_07"},{name:"Stand Back Up",code:"GUN_BST_07&ts=0.5>GUN_BST_06"},{name:"Ukemi",code:"GUN_UKM_01&ts=0.5>GUN_UKM_03"},{name:"Ukemi 2",code:"GUN_UKM_11&ts=0.5>GUN_UKM_03"}]},A=a(10);var S=function(e){var _=e.value,a=e.onClick,n=Object.keys(i);return Object(A.jsx)(r.a,{value:_,options:n,onClick:a})},l=a(94),O=a(18),R={Sword:"SWD",Blade:"KAT",Dagger:"DAG",Axe:"AXE",Lance:"LAN",Bow:"BOW",Wand:"ROD",Staff:"CAN",Manacaster:"GUN"},u={Male:21,Female:23},s={Axe:5,Bow:6,Staff:5,Dagger:6,Blade:5,Lance:5,Wand:5,Sword:5},C={Axe:3,Bow:3,Staff:5,Dagger:3,Blade:3,Lance:4,Wand:3,Sword:3},P=function(e,_){return"".concat(R[e],"_ONT_").concat(u[_])},M=function(e){return"".concat(R[e],"_WIN_01>").concat(R[e],"_WIN_02")},T=function(e){return"".concat(R[e],"_DAS_02")},U=function(e){return"".concat(R[e],"_ROL_01")},j=function(e){var _=R[e];return Array(s[e]).fill().map((function(e,a){return"".concat(_,"_CMB_0").concat(a+1)})).join(">")},B=function(e){var _=R[e];return Array(C[e]).fill().map((function(e,a){return"".concat(_,"_CHR_0").concat(a+1)})).join(">")},W=function(e,_){var a=R[e];return"Male"===_?"".concat(a,"_ONT_05&ts=-0.5>").concat(a,"_ONT_02>").concat(a,"_ONT_07>").concat(a,"_ONT_08>").concat(a,"_ONT_21"):"".concat(a,"_ONT_06&ts=-0.5>").concat(a,"_ONT_04>").concat(a,"_ONT_09>").concat(a,"_ONT_10>").concat(a,"_ONT_23")};a(208);_.default=function(e){var _=e.handleSelect,a=Object(t.useState)({weapon:"Sword",gender:"Male",gunMode:"Long Range"}),r=Object(o.a)(a,2),R=r[0],u=r[1],s=R.weapon,C=R.gender,H=R.gunMode,b=function(e){return function(_){u((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e,_))}))}};return Object(A.jsxs)("div",{className:"WeaponAni",children:[Object(A.jsxs)("div",{className:"WeaponAni-Selectors",children:[Object(A.jsx)(N.a,{value:s,onClick:b("weapon")}),Object(A.jsx)(d.a,{value:C,onClick:b("gender")})]}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"WeaponAni-Btns",children:[Object(A.jsx)(l.a,{variant:"contained","data-value":W(s,C),"data-name":"".concat(C," ").concat(s," Lobby"),onClick:_,children:"Join Lobby"}),Object(A.jsx)(l.a,{variant:"contained","data-value":P(s,C),"data-name":"".concat(C," ").concat(s," Standby"),onClick:_,children:"Standby"}),Object(A.jsx)(l.a,{variant:"contained","data-value":M(s),"data-name":"".concat(s," Victory"),onClick:_,children:"Victory"}),"Manacaster"!==s&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(l.a,{variant:"contained","data-value":j(s),"data-name":"".concat(s," Combo"),onClick:_,children:"Combo Chain"}),Object(A.jsx)(l.a,{variant:"contained","data-value":B(s),"data-name":"".concat(s," Force Strike"),onClick:_,children:"Force Strike"})]}),Object(A.jsx)(l.a,{variant:"contained","data-value":T(s),"data-name":"".concat(s," Dash Attack"),onClick:_,children:"Dash Attack"}),Object(A.jsx)(l.a,{variant:"contained","data-value":U(s),"data-name":"".concat(s," Roll"),onClick:_,children:"Roll"})]}),Object(A.jsx)("div",{className:"WeaponAni-Btns",children:Object(O.n)(m[s],_)}),"Manacaster"===s&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"WeaponAni-Selectors",children:Object(A.jsx)(S,{value:H,onClick:b("gunMode")})}),Object(A.jsx)("div",{className:"WeaponAni-Btns",children:Object(O.n)(i[R.gunMode],_)})]})]})}}}]);
//# sourceMappingURL=46.69b5b09f.chunk.js.map