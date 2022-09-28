define(["exports","./tslib.es6-5322d4a4","preact/jsx-runtime","./utils/UNSAFE_classNames",'css!./UNSAFE_ProgressCircle.css',"./hooks/UNSAFE_useTranslationBundle","./classNames-73af7744","preact/hooks","./UNSAFE_Environment","preact","./UNSAFE_Layer","preact/compat"],(function(e,a,r,s,n,t,l,i,c,o,u,d){"use strict";const m=({accessibleLabel:e,id:a,size:s="md"})=>{const n=l.classNames([j.base,`oj-c-progress-circle-${s}`,j.indeterminateOuter]),i=t.useTranslationBundle("@oracle/oraclejet-preact");return r.jsx(x,Object.assign({id:a,ariaValuetext:e||i.progressIndeterminate(),class:n},{children:r.jsx(p,{class:j.indeterminateInner})}))},v=({value:e=0,max:a=100,id:s,size:n="md"})=>{const t=Math.min(Math.max(0,e/a),1),i=l.classNames([j.base,`oj-c-progress-circle-${n}`]),c=function(e){let a;if(e<.125)return a=b(e)+50,`polygon(50% 0, ${a}% 0, 50% 50%)`;if(e<.375)return a=e<.25?50-b(.25-e):b(e-.25)+50,`polygon(50% 0, 100% 0, 100% ${a}%, 50% 50%)`;if(e<.625)return a=e<.5?50+b(.5-e):50-b(e-.5),`polygon(50% 0, 100% 0, 100% 100%, ${a}% 100%, 50% 50%)`;if(e<.875)return a=e<.75?50+b(.75-e):50-b(e-.75),`polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% ${a}%, 50% 50%)`;return a=50-b(1-e),`polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 0%, ${a}% 0%, 50% 50%)`}(t);return r.jsxs(x,Object.assign({id:s,max:a,value:e,class:i},{children:[r.jsx(p,{class:l.classNames([j.determinateInner,j.track])}),r.jsx(p,{class:l.classNames([j.determinateInner,j.value]),clipPath:c})]}))},x=e=>{var{value:s,max:n,min:t,id:l,children:i,ariaValuetext:c,color:o}=e,u=a.__rest(e,["value","max","min","id","children","ariaValuetext","color"]);const d=null!=s?t||"0":null,m=null!=s?n:null,v=null!=s?s:null;return r.jsx("div",Object.assign({role:"progressbar",id:l,"aria-valuemin":d,"aria-valuemax":m,"aria-valuenow":v,"aria-valuetext":c,class:u.class,style:{borderColor:o}},{children:i}))},p=e=>{var{clipPath:s,color:n}=e,t=a.__rest(e,["clipPath","color"]);return r.jsx("div",{class:t.class,style:{clipPath:s,borderColor:n}})},j={base:"bn7wf4q",indeterminateOuter:"iv2lv64",indeterminateInner:"i1p1jgv8",determinateInner:"d1d0ra29",track:"tl8cvpa",value:"v1oiv99s"};function b(e){return 50*Math.tan(2*e*Math.PI)}e.ProgressCircle=function(e){var{value:s,max:n}=e,t=a.__rest(e,["value","max"]);return"indeterminate"===s?r.jsx(m,Object.assign({},t)):r.jsx(v,Object.assign({value:s,max:n},t))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_ProgressCircle.js.map