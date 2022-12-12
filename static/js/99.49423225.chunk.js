"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{3559:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(168),a=t(8789).ZP.section(r||(r=(0,i.Z)(["\n  padding-top: 60px;\n  padding-bottom: 60px;\n"]))),o=t(184),u=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},99:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r=t(885),i=t(2791),a=t(5206),o=t(9434),u="NOT_FOUND";var c=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,a=t.maxSize,o=void 0===a?1:a,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),d=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(e,i){r(e)===u&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function f(){var e=d.get(arguments);if(e===u){if(e=n.apply(null,arguments),l){var t=d.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var a,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,d=l.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],x=s(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),v=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return a=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:x,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return i}var f,p,x,h,v,m,g=d(l),y=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},j=g([y,function(n){return n.filters.value}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),b=t(168),C=t(8789),k=C.ZP.form(f||(f=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),P=t(6052),z=t(7205),A=t(4285),N=t(184),F=function(n){var e=n.closeModal,t=(0,i.useState)(""),u=(0,r.Z)(t,2),c=u[0],l=u[1],s=(0,i.useState)(""),d=(0,r.Z)(s,2),f=d[0],p=d[1],x=(0,o.I0)(),h=(0,o.v9)(y),v=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":l(r);break;case"number":p(r);break;default:return}},m=function(){l(""),p("")};return(0,N.jsxs)(k,{onSubmit:function(n){n.preventDefault();var t=c.toLowerCase();if(h.find((function(n){return n.name.toLowerCase()===t})))return a.Am.error("".concat(c," is already in contacts"));var r={name:c,number:f};x((0,P.uK)(r)),m(),e()},children:[(0,N.jsx)(A.Z,{sx:{m:1,width:"100%"},id:"filled-basic",label:"Name",variant:"filled",required:!0,name:"name",type:"text",onChange:v}),(0,N.jsx)(A.Z,{sx:{m:1,width:"100%"},id:"filled-basic",label:"Number",variant:"filled",required:!0,name:"number",type:"text",onChange:v}),(0,N.jsx)(z.Z,{variant:"contained",type:"submit",sx:{backgroundColor:"#1976d2",opacity:1,"&:hover":{opacity:.8,backgroundColor:"#1976d2"}},children:"        Add contact"})]})},S=t(5546),E=C.ZP.div(p||(p=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  align-items: center;\n"]))),M=C.ZP.div(x||(x=(0,b.Z)(["\n  text-align: center;\n"]))),I=t(286),q=t(3811),L=t(7247),O=function(n){var e=n.id,t=n.name,r=n.number,i=(0,o.I0)();return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(I.Z,{elevation:3,sx:{width:"100%"},children:(0,N.jsxs)(E,{children:[(0,N.jsx)(S.ZP,{size:"40",name:t,round:!0}),(0,N.jsxs)(M,{children:[(0,N.jsx)("p",{children:t}),(0,N.jsxs)("p",{children:[" ",r]})]}),(0,N.jsx)(q.Z,{"aria-label":"delete",onClick:function(){i((0,P.GK)(e))},children:(0,N.jsx)(L.Z,{})})]})})})},_=C.ZP.li(h||(h=(0,b.Z)(["\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  @media (min-width: 425px) {\n    width: 100%;\n  }\n  @media (min-width: 768px) {\n    width: calc((100% - 1 * 30px) / 2);\n  }\n  @media (min-width: 1200px) {\n    width: calc((100% - 2 * 30px) / 3);\n  }\n"]))),R=C.ZP.ul(v||(v=(0,b.Z)(["\n  @media (min-width: 425px) {\n    font-size: 14px;\n  }\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 30px;\n"]))),T=function(){var n=(0,o.v9)(j);return(0,N.jsx)(R,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,N.jsx)(_,{children:(0,N.jsx)(O,{name:t,number:r,id:e})},e)}))})},D=t(686),H=(0,C.ZP)(A.Z)(m||(m=(0,b.Z)(["\n  width: 100%;\n  @media (min-width: 425px) {\n    width: 400px;\n  }\n"]))),V=function(){var n=(0,o.I0)();return(0,N.jsx)(H,{id:"filled-search",label:"Find contact by name",type:"search",variant:"filled",onChange:function(e){var t=e.target.value;n((0,D.z)(t))}})},B=t(6723),K=t(3559),G=t(7279),U=t(2939),J=t(7462),Q=t(3366),W=t(8182),X=t(3842),Y=t(104),$=t(8519),nn=t(886),en=["className","component"];var tn,rn,an=t(5902),on=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.defaultTheme,t=n.defaultClassName,r=void 0===t?"MuiBox-root":t,a=n.generateClassName,o=n.styleFunctionSx,u=void 0===o?Y.Z:o,c=(0,X.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(u),l=i.forwardRef((function(n,t){var i=(0,nn.Z)(e),o=(0,$.Z)(n),u=o.className,l=o.component,s=void 0===l?"div":l,d=(0,Q.Z)(o,en);return(0,N.jsx)(c,(0,J.Z)({as:s,ref:t,className:(0,W.Z)(u,a?a(r):r),theme:i},d))}));return l}({defaultTheme:(0,t(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:an.Z.generate}),un=on,cn=(0,C.ZP)(un)(tn||(tn=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(100% - 12px);\n  @media (min-width: 425px) {\n    width: 420px;\n  }\n\n  background-color: #fff;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,\n    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;\n  padding: 30px;\n"]))),ln=t(2419),sn=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],a=e[1],o=function(){return a(!1)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(z.Z,{variant:"contained",startIcon:(0,N.jsx)(ln.Z,{}),onClick:function(){return a(!0)},sx:{backgroundColor:"#1976d2",opacity:1,"&:hover":{opacity:.8,backgroundColor:"#1976d2"}},children:"Add new contact"}),(0,N.jsx)(U.Z,{open:t,onClose:o,children:(0,N.jsx)(cn,{children:(0,N.jsx)(F,{closeModal:o})})})]})},dn=C.ZP.div(rn||(rn=(0,b.Z)(["\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 60px;\n\n  align-items: baseline;\n  display: flex;\n  margin-bottom: 60px;\n"]))),fn=function(){var n=(0,o.I0)(),e=(0,o.v9)(w),t=(0,o.v9)(Z);return(0,i.useEffect)((function(){n((0,P.yF)())}),[n]),e&&a.Am.error(e),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(K.Z,{children:(0,N.jsxs)(G.Z,{children:[(0,N.jsxs)(dn,{children:[(0,N.jsx)(sn,{children:(0,N.jsx)(F,{})}),(0,N.jsx)(V,{})]}),(0,N.jsx)(T,{})]})}),t&&!e&&(0,N.jsx)(B.Z,{})]})}},2419:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=o},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o}}]);
//# sourceMappingURL=99.49423225.chunk.js.map