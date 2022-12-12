"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[638],{3559:function(n,t,e){e.d(t,{Z:function(){return s}});var a,r=e(168),i=e(8789).ZP.section(a||(a=(0,r.Z)(["\n  padding-top: 60px;\n  padding-bottom: 60px;\n"]))),o=e(184),s=function(n){var t=n.children;return(0,o.jsx)(i,{children:t})}},4638:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var a,r,i,o=e(885),s=e(2791),l=e(9434),d=e(5822),p=e(4285),c=e(3811),h=e(793),u=e(9365),m=e(3771),v=e(1898),g=e(7205),f=e(168),Z=e(8789),x=Z.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  width: calc(100vw - 30px);\n  @media (min-width: 425px) {\n    width: 400px;\n  }\n"]))),b=e(184),y=function(){var n=(0,l.I0)(),t=(0,s.useState)(""),e=(0,o.Z)(t,2),a=e[0],r=e[1],i=(0,s.useState)(""),f=(0,o.Z)(i,2),Z=f[0],y=f[1],w=(0,s.useState)(""),j=(0,o.Z)(w,2),P=j[0],S=j[1],E=function(n){var t=n.target,e=t.name,a=t.value;switch(e){case"name":r(a);break;case"email":y(a);break;case"password":S(a)}};return(0,b.jsx)("form",{onSubmit:function(t){t.preventDefault(),n((0,d.z2)({name:a,email:Z,password:P})),r(""),y(""),S("")},autoComplete:"off",children:(0,b.jsxs)(x,{children:[(0,b.jsx)(p.Z,{sx:{m:1,width:"100%"},label:"Name",variant:"filled",required:!0,value:a,name:"name",type:"text",onChange:E}),(0,b.jsx)(p.Z,{sx:{m:1,width:"100%"},label:"Email",variant:"filled",required:!0,name:"email",value:Z,type:"email",onChange:E}),(0,b.jsxs)(v.Z,{sx:{m:1,width:"100%"},variant:"filled",children:[(0,b.jsx)(u.Z,{htmlFor:"filled-adornment-password",children:"Password"}),(0,b.jsx)(h.Z,{required:!0,id:"filled-adornment-password",type:"password",value:P,name:"password",onChange:E,endAdornment:(0,b.jsx)(m.Z,{position:"end",children:(0,b.jsx)(c.Z,{"aria-label":"toggle password visibility",onMouseDown:function(n){n.preventDefault()},edge:"end"})})})]}),(0,b.jsx)(g.Z,{type:"submit",variant:"contained",sx:{backgroundColor:"#1976d2",opacity:1,"&:hover":{opacity:.8,backgroundColor:"#1976d2"}},children:"Register"})]})})},w=e(3559),j=e(7279),P=Z.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),S=Z.ZP.h1(i||(i=(0,f.Z)(["\n  font-size: 20px;\n  @media (min-width: 768px) {\n    font-size: 26px;\n  }\n  margin-bottom: 20px;\n"]))),E=e(4289),M=e(6723),B=e(5206),k=function(){var n=(0,l.v9)(E.CV),t=(0,l.v9)(E.VF);return t&&B.Am.error(t),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w.Z,{children:(0,b.jsx)(j.Z,{children:(0,b.jsxs)(P,{children:[(0,b.jsx)(S,{children:"Register"}),(0,b.jsx)(y,{})]})})}),n&&!t&&(0,b.jsx)(M.Z,{})]})}},3771:function(n,t,e){e.d(t,{Z:function(){return k}});var a=e(4942),r=e(3366),i=e(7462),o=e(2791),s=e(8182),l=e(4419),d=e(9853),p=e(8519),c=e(6863),h=e(5873),u=e(5878),m=e(1217);function v(n){return(0,m.Z)("MuiTypography",n)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=e(184),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t["align".concat((0,d.Z)(e.align))],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=o.forwardRef((function(n,t){var e=(0,h.Z)({props:n,name:"MuiTypography"}),a=function(n){return b[n]||n}(e.color),o=(0,p.Z)((0,i.Z)({},e,{color:a})),c=o.align,u=void 0===c?"inherit":c,m=o.className,y=o.component,w=o.gutterBottom,j=void 0!==w&&w,P=o.noWrap,S=void 0!==P&&P,E=o.paragraph,M=void 0!==E&&E,B=o.variant,k=void 0===B?"body1":B,C=o.variantMapping,R=void 0===C?x:C,N=(0,r.Z)(o,f),W=(0,i.Z)({},o,{align:u,color:a,className:m,component:y,gutterBottom:j,noWrap:S,paragraph:M,variant:k,variantMapping:R}),z=y||(M?"p":R[k]||x[k])||"span",L=function(n){var t=n.align,e=n.gutterBottom,a=n.noWrap,r=n.paragraph,i=n.variant,o=n.classes,s={root:["root",i,"inherit"!==n.align&&"align".concat((0,d.Z)(t)),e&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,l.Z)(s,v,o)}(W);return(0,g.jsx)(Z,(0,i.Z)({as:z,ref:t,ownerState:W,className:(0,s.Z)(L.root,m)},N))})),w=e(1211),j=e(529);function P(n){return(0,m.Z)("MuiInputAdornment",n)}var S,E=(0,u.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],B=(0,c.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["position".concat((0,d.Z)(e.position))],!0===e.disablePointerEvents&&t.disablePointerEvents,t[e.variant]]}})((function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===e.variant&&(0,a.Z)({},"&.".concat(E.positionStart,"&:not(.").concat(E.hiddenLabel,")"),{marginTop:16}),"start"===e.position&&{marginRight:8},"end"===e.position&&{marginLeft:8},!0===e.disablePointerEvents&&{pointerEvents:"none"})})),k=o.forwardRef((function(n,t){var e=(0,h.Z)({props:n,name:"MuiInputAdornment"}),a=e.children,p=e.className,c=e.component,u=void 0===c?"div":c,m=e.disablePointerEvents,v=void 0!==m&&m,f=e.disableTypography,Z=void 0!==f&&f,x=e.position,b=e.variant,E=(0,r.Z)(e,M),k=(0,j.Z)()||{},C=b;b&&k.variant,k&&!C&&(C=k.variant);var R=(0,i.Z)({},e,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:v,position:x,variant:C}),N=function(n){var t=n.classes,e=n.disablePointerEvents,a=n.hiddenLabel,r=n.position,i=n.size,o=n.variant,s={root:["root",e&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),o,a&&"hiddenLabel",i&&"size".concat((0,d.Z)(i))]};return(0,l.Z)(s,P,t)}(R);return(0,g.jsx)(w.Z.Provider,{value:null,children:(0,g.jsx)(B,(0,i.Z)({as:u,ownerState:R,className:(0,s.Z)(N.root,p),ref:t},E,{children:"string"!==typeof a||Z?(0,g.jsxs)(o.Fragment,{children:["start"===x?S||(S=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,g.jsx)(y,{color:"text.secondary",children:a})}))})}))}}]);
//# sourceMappingURL=638.d9497455.chunk.js.map