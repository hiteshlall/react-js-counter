(this["webpackJsonpreact-js-counter"]=this["webpackJsonpreact-js-counter"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(4),c=n.n(a),u=(n(9),n(2)),l=(n(10),n(11),n(0)),s=function(e){var t=e.maxVal,n=e.initialVal,i=Object(r.useState)(n.toString()),a=Object(u.a)(i,2),c=a[0],s=a[1];Object(r.useEffect)((function(){s(n.toString())}),[n]);var o=function(e){var n=parseInt(c);n+e<=t?n+=e:n=t,s(n.toString())};return Object(l.jsxs)("div",{id:"counter",children:[Object(l.jsx)("button",{id:"decrement-btn",className:"btn",title:"Decrement",onClick:function(){return o(-1)},children:"-"}),Object(l.jsx)("input",{type:"number",title:"Counter value",id:"counter-val",value:c,max:t,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{id:"increment-btn",className:"btn",title:"Increment",onClick:function(){return o(1)},children:"+"})]})},o=(n(13),function(e){var t=e.receiveMaxVal,n=e.receiveInitialVal,i=Object(r.useState)(1e3),a=Object(u.a)(i,2),c=a[0],s=a[1],o=Object(r.useState)(1),b=Object(u.a)(o,2),j=b[0],d=b[1];return Object(l.jsxs)("div",{id:"initializer",children:[Object(l.jsxs)("div",{className:"initializer-input-wrapper",children:[Object(l.jsx)("input",{id:"initial-input",onChange:function(e){return d(Number(e.target.value))},value:j,type:"number",placeholder:"Enter initial value"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return n(j)},children:"Set Initial Value"})]}),Object(l.jsxs)("div",{className:"initializer-input-wrapper",children:[Object(l.jsx)("input",{id:"max-val-input",onChange:function(e){return s(Number(e.target.value))},value:c,type:"number",placeholder:"Enter maximum value"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return t(c)},children:"Set Maximum Value"})]})]})});var b=function(){var e=Object(r.useState)(1e3),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(1),c=Object(u.a)(a,2),b=c[0],j=c[1];return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Counter"}),Object(l.jsx)(o,{receiveMaxVal:function(e){return i(e)},receiveInitialVal:function(e){return j(e)}}),Object(l.jsx)(s,{maxVal:n,initialVal:b}),Object(l.jsxs)("footer",{children:["Made by"," ",Object(l.jsx)("a",{href:"https://harshkapadia.bio.link",rel:"noreferrer",target:"_blank",children:"Harsh Kapadia"})," ","|"," ",Object(l.jsx)("a",{href:"https://github.com/HarshKapadia2/react-js-counter",rel:"noreferrer",target:"_blank",children:"GitHub repo"})]})]})};c.a.render(Object(l.jsxs)(i.a.StrictMode,{children:[Object(l.jsx)("noscript",{children:"You need to enable JavaScript to run this app."}),Object(l.jsx)(b,{})]}),document.querySelector("body"))}],[[14,1,2]]]);