define(["exports","preact/jsx-runtime","./hooks/UNSAFE_useActionable",'module',"preact/hooks","./utils/UNSAFE_classNames","./classNames-73af7744"],(function(e,s,i,a,l,c,n){"use strict";const t={base:"b16hrnn0",disabled:"d16riqis",info:"i1abp3op",infoSubtle:"iu2igik",infoSubtleLighter:"i149ovoc"};e.Chip=function({isSelected:e,isDisabled:a,accessibleLabel:c,children:o,onToggle:r}){const b=l.useCallback((()=>{null==r||r({previousValue:e,value:!e})}),[e,r]),{actionableProps:u,isHover:d,isActive:h}=i.useActionable(b,{isSuppressDup:!1}),f=a?"disabled":e||h?"info":d?"infoSubtle":"infoSubtleLighter",p=n.classNames([t.base,a?t.disabled:`${t.base} ${t[f]} c1drwgih`]);return a?s.jsx("div",Object.assign({class:p},{children:o})):s.jsx("div",Object.assign({},u,{class:p,tabIndex:0,"aria-label":c,role:"switch","aria-checked":e?"true":"false"},{children:o}))}}));
//# sourceMappingURL=Chip-28bd0e30.js.map