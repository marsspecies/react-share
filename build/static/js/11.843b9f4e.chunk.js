(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[11],{163:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,l=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){l=!0,a=o}finally{try{r||null==u.return||u.return()}finally{if(l)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},250:function(e,t,n){"use strict";n.r(t);var r=n(163),l=n(0),a=n.n(l),c=n(258);function u(){return a.a.createElement("span",null,"time: ",Date.now())}var o=a.a.memo(u);t.default=function(e){var t=Object(l.useState)(0),n=Object(r.a)(t,2),i=n[0],m=n[1],f=Object(l.useState)("zhangjing"),b=Object(r.a)(f,2),s=b[0],E=b[1],p=Object(l.useMemo)((function(){return console.log("double\u91cd\u65b0\u8ba1\u7b97\u4e86"),2*i}),[i]),d=Object(l.useMemo)((function(){return a.a.createElement(u,null)}),[s]),j=Object(l.useMemo)((function(){return function(){m(i+1)}}),[]);return a.a.createElement("div",null,a.a.createElement("p",null,"count: ",i),a.a.createElement("p",null,"doubleCount: ",p),a.a.createElement(c.a,{onClick:function(){return m(i+1)}},"click to add count"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("p",null,"name: ",s),a.a.createElement(c.a,{onClick:function(){return E("zhangjing"+i+1)}},"click to set name"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("p",null,"not memorized component: ",a.a.createElement(u,null)),a.a.createElement("p",null,"memorized component: ",d),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("p",null,"not memorized function: ",a.a.createElement(o,{onClick:function(){return m(i+1)}})),a.a.createElement("p",null,"memorized function: ",a.a.createElement(o,{onClick:j})))}}}]);
//# sourceMappingURL=11.843b9f4e.chunk.js.map