define(["exports","preact/jsx-runtime","./hooks/UNSAFE_useMessagesFocusManager","./UNSAFE_LiveRegion","./UNSAFE_Message","preact/hooks","./UNSAFE_Flex","./Flex-155c2aac","./MessagesManager-c1177761","./MessageUtils-fbb3325b",'module',"./utils/UNSAFE_classNames","./classNames-73af7744","./MessageCloseButton-5b1f1674","./MessageDetail-a5d52a2c","preact","./MessageFormattingUtils-9aa68065","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-f9014434","./Message.types-cb789985","./utils/UNSAFE_arrayUtils","./MessageStartIcon-64af111b","./index-c2eae4df","./UNSAFE_Icon","./Icon-404367f1","./tslib.es6-5322d4a4","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","preact/compat","./hooks/UNSAFE_useTheme","./index-c0d64413","./MessageSummary-5990b45a","./MessageTimestamp-d830e666","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_size","./_curry1-2a38bee3","./utils/UNSAFE_mergeInterpolations","./_curry2-531229e9","./_has-3f42f5b3","./utils/UNSAFE_interpolations/boxalignment","./keys-5462bc54","./utils/UNSAFE_interpolations/flexbox","./flexbox-be79af91","./utils/UNSAFE_interpolations/flexitem","./flexitem-d070b54e","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./UNSAFE_TransitionGroup"],(function(e,s,n,t,a,i,o,r,l,c,u,g,d,f,m,F,U,b,h,E,M,_,S,v,x,p,A,N,R,y,k,j,C,I,T,B,L,O,P,w,z,W,D,G,H,K,q,J,Q,V){"use strict";const X={enter:[{effect:"expand",duration:"0.25s",direction:"height"}],exit:[{effect:"collapse",duration:"0.25s",direction:"height"}]},Y={close:"Close",navigationFromMessagesRegion:"Entering messages region. Press F6 to navigate back to prior focused element.",navigationToMessagesRegion:"Messages region has new messages. Press F6 to navigate to the most recent message region.",error:"Error",warning:"Warning",info:"Info",confirmation:"Confirmation"};e.MessageBanner=function({closeButtonRenderer:e,detailRendererKey:o,data:u,onClose:g,renderers:d,startAnimation:f,translations:m=Y,type:F="section"}){const U=i.useRef(new Map),b=i.useRef(null),h=i.useRef(null),[E,M]=i.useState(),[_,S]=i.useState(u.length>0),v=i.useRef(u.length),x=i.useRef(0);v.current=u.length;const p=i.useCallback((e=>s=>U.current.set(e,s)),[]);i.useImperativeHandle(h,(()=>({focus:()=>{var e;if(u.length){const s=u[0].key;return null===(e=U.current.get(s))||void 0===e||e.focus(),!0}return!1},contains:e=>{var s,n;return!(!u.length||!e)&&(null!==(n=null===(s=b.current)||void 0===s?void 0:s.contains(e))&&void 0!==n&&n)}})),[u,U]);const{controller:A,handlers:N}=n.useMessageFocusManager(h,{onFocus:i.useCallback((()=>{M(m.navigationFromMessagesRegion)}),[M])}),R=i.useCallback((e=>{null==g||g(e)}),[g]),y=i.useCallback(((e,s,n)=>{var t;const a=null==n?void 0:n.contains(document.activeElement);if(0===v.current)return S(!1),void(a&&A.restorePriorFocus());const i=s+1<u.length?s+1:s-1;if(i>-1&&a){const e=u[i].key;null===(t=U.current.get(e))||void 0===t||t.focus()}}),[A,u]);return i.useEffect((()=>{u.length?(S(!0),u.length>x.current&&M(m.navigationToMessagesRegion),A.prioritize()):M(""),x.current=u.length}),[u,A]),_||0!==u.length?s.jsx("div",Object.assign({ref:b,class:"oj-c-messagebanner",tabIndex:-1},N,{children:s.jsxs(r.Flex,Object.assign({direction:"column",gap:"section"===F?"1x":void 0},{children:[s.jsx(l.MessagesManager,Object.assign({animations:X,data:u,startAnimation:f,onMessageWillRemove:y},{children:({index:n,item:t})=>s.jsx(a.Message,{messageRef:p(t.key),item:t,closeButtonRenderer:e,detailRenderer:c.getRenderer(t,o,d),index:n,translations:m,type:F,onClose:R},t.key)})),s.jsx(t.LiveRegion,{children:E})]}))})):null},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_MessageBanner.js.map