(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[22],{246:function(e,n,t){"use strict";t.r(n);var a=t(62),l=t(63),r=t(65),c=t(64),u=t(66),o=t(0),i=t.n(o),m=t(258),s=i.a.memo((function(e){return console.log("ChildShallow\u6e32\u67d3\u4e86---"),i.a.createElement("div",null,i.a.createElement("p",null,"ChildShallow\uff1a",e.name))})),h=i.a.memo((function(e){return console.log("ChildDeep\u6e32\u67d3\u4e86---"),i.a.createElement("div",null,i.a.createElement("p",null,"ChildDeep: ",e.user.name))}),(function(e,n){return e.user.name===n.user.name})),d=function(e){return console.log("ChildNormal\u6e32\u67d3\u4e86---- "),i.a.createElement("div",null,"this  is a normal child")},E=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,u=new Array(l),o=0;o<l;o++)u[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(u)))).state={name:"zhangjing",user:{name:"zhangjing"},count:0},t.handleChick=function(){t.setState({name:"zhangjing11",user:{name:"zhangjing"}})},t.handleCount=function(){t.setState({count:t.state.count+1})},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s,{name:this.state.name}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(h,{user:this.state.user}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(m.a,{onClick:this.handleChick},"click to change state"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(m.a,{onClick:this.handleCount},"add count"),i.a.createElement("p",null,this.state.count))}}]),n}(i.a.Component);n.default=E}}]);
//# sourceMappingURL=22.bbc28980.chunk.js.map