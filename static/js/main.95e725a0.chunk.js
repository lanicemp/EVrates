(this["webpackJsonpevrates-client"]=this["webpackJsonpevrates-client"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),o=(n(16),n(17),n(2)),r=n(10),l=n.n(r),j=n(0),d=function(e){var t=e.handleTOUChange,n=e.timeOfUse;return Object(j.jsxs)("div",{className:"form-component",children:[Object(j.jsx)("div",{className:"modal-question",children:Object(j.jsx)("h3",{children:"What hours of the day do you plan to charge your EV? "})}),Object(j.jsx)("br",{}),Object(j.jsxs)("select",{name:"time-of-use",value:n,type:"number",onChange:t,children:[Object(j.jsx)("option",{value:"Between noon and 6pm",children:"Between noon and 6pm"}),Object(j.jsx)("option",{value:"Between 7pm and 11am",children:"Between 7pm and 11am"})]})]})},b=(n(30),function(e){var t=e.handleMileChange,n=e.miles;return Object(j.jsxs)("div",{className:"form-component",children:[Object(j.jsx)("div",{className:"modal-question",children:Object(j.jsx)("h3",{children:"How Many miles do you drive per year?"})}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"miles-bar",name:"miles",value:n,type:"range",min:"1000",max:"100000",step:"1000",width:"100",onChange:t}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"miles",children:Object(j.jsx)("h3",{children:n})})]})}),u=(n(31),function(e){var t=e.handleRateChange,n=e.rate;return Object(j.jsxs)("div",{className:"form-component",children:[Object(j.jsx)("div",{className:"modal-question",children:Object(j.jsx)("h3",{children:"Which rate do you currently use?"})}),Object(j.jsxs)("div",{className:"rate-info",children:[Object(j.jsx)("h4",{children:"Rate A is a flat rate"}),Object(j.jsx)("h4",{children:" Rate B is based on your time of Use"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("select",{name:"rate",value:n,type:"text",onChange:t,children:[Object(j.jsx)("option",{value:"Rate A",children:"Rate A "}),Object(j.jsx)("option",{value:"Rate B",children:"Rate B"})]})]})}),m=(n(32),function(){var e=Object(c.useState)("Rate A"),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("20000"),i=Object(o.a)(a,2),r=i[0],m=i[1],h=Object(c.useState)("Between noon and 6pm"),O=Object(o.a)(h,2),x=O[0],f=O[1],p=Object(c.useState)(""),v=Object(o.a)(p,2),g=v[0],N=v[1],B=Object(c.useState)(""),w=Object(o.a)(B,2),C=w[0],y=w[1],R=Object(c.useState)(""),S=Object(o.a)(R,2),A=S[0],k=S[1],E=Object(c.useState)(!1),F=Object(o.a)(E,2),U=F[0],q=F[1],M=Object(c.useState)(1),T=Object(o.a)(M,2),I=T[0],W=T[1];function D(){q(!1),W(1),s("Rate A"),m("20000"),f("Between noon and 6pm"),N(""),k(""),y("")}var J=function(e){e.preventDefault(),W(I+1);var t="Rate A is the Better Option.",c="Rate B is the Better Option",a="Savings of!",i="",o=.045*r+1350.56,l=.06*r+1033,j=.024*r+1033;if("Rate A"===n){if(console.log("Between noon and 6pm","Between noon and 6pm"===x),"Between noon and 6pm"===x)return o<l?(i=l-o,N(t),y(i),k(a)):(i=o-l,N(c),y(i),k(a));if("Between 7pm and 11am"===x)return o<j?(i=j-o,N(t),y(i),k(a)):(i=o-j,N(c),y(i),k(a))}else if("Rate B"===n){if("Between noon and 6pm"===x)return o<l?(i=l-o,N(t),y(i),k(a)):(i=o-l,N(c),y(i),k(a));if("Between 7pm and 11am"===x)return o<j?(i=j-o,N(t),y(i),k(a)):(i=o-j,N(c),y(i),k(a))}console.log(n),console.log(r),console.log(x),s("Rate A"),m("20000"),f("Between noon and 6pm"),N(""),k(""),y("")};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{className:"modal-button",style:{cursor:"pointer"},onClick:function(){q(!0)},children:["Get your Electric Rate"," "]}),Object(j.jsxs)(l.a,{className:"modal-container modal-backdrop fade show",isOpen:U,onAfterOpen:function(){},onRequestClose:D,children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsxs)("p",{children:["step ",I," of 4"]}),Object(j.jsx)("div",{onClick:D,style:{cursor:"pointer"},children:"\u2716"})]}),Object(j.jsxs)("form",{className:"modal-form",onSubmit:J,children:[1===I&&Object(j.jsx)(u,{handleRateChange:function(e){var t=e.target.value;s(t)},rate:n}),2===I&&Object(j.jsx)(b,{handleMileChange:function(e){var t=e.target.value;m(t)},miles:r}),3===I&&Object(j.jsx)(d,{handleTOUChange:function(e){var t=e.target.value;f(t)},timeOfUse:x}),4===I&&Object(j.jsxs)("div",{className:"form-component",children:[Object(j.jsx)("div",{className:"form-message",children:Object(j.jsx)("h3",{children:g})}),Object(j.jsx)("div",{className:"form-savings",children:Object(j.jsx)("h3",{children:A})}),Object(j.jsxs)("div",{className:"form-difference",children:[Object(j.jsxs)("h2",{children:["$",C.toFixed(2)]})," "]})]})]}),Object(j.jsxs)("div",{className:"progress-button",children:[(2===I||3===I)&&Object(j.jsx)("button",{className:"progress-button",onClick:function(){return W(I-1)},children:"previous "}),(1===I||2===I)&&Object(j.jsx)("button",{className:"progress-button",onClick:function(){return W(I+1)},children:"next "}),3===I&&Object(j.jsx)("button",{className:"progress-button",type:"submit",onClick:J,children:"Submit"})]})]})]})}),h=(n(33),function(){return Object(j.jsxs)("div",{className:"main-page",children:[Object(j.jsx)("header",{children:" "}),Object(j.jsxs)("div",{className:"main-banner-content",children:[Object(j.jsx)("h1",{className:"main-message",children:"Will Your EV Impact Your Electric Bill"}),Object(j.jsx)(m,{})]})]})});var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.95e725a0.chunk.js.map