(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[17],{254:function(e,n,t){"use strict";t.r(n);var a=t(163),r=t(223),l=t(0),c=t.n(l),i=t(171),o=t(237),u=t(235),s=t(164),d=t(261),m=t(255),p=t(260),b=t(197),E=t(224),f=t.n(E),v=t(258);function g(){var e=Object(r.a)(["\n    query($id: Int) {\n        viewer(id: $id) {\n            id\n            name\n            email\n            team {\n                liveAccount {\n                    enabled\n                }\n                sandboxAccount {\n                    enabled\n                }\n            }\n        }\n    }\n"]);return g=function(){return e},e}function j(){var e=Object(r.a)(["\n    mutation($email: String!, $password: String!){\n        createToken(input: {email: $email, password: $password}) {\n            token\n        }\n    }\n"]);return j=function(){return e},e}function k(){var e=Object(r.a)(["\n    query($id: Int){\n        tasks(id: $id) {\n            id\n            content\n            description\n        }\n    }\n"]);return k=function(){return e},e}function h(){var e=Object(r.a)(["\nquery($id: Int){\n    user(id: $id) {\n        id\n        name\n        age\n    }\n}\n"]);return h=function(){return e},e}var y=f()(h()),O=f()(k()),$=f()(j()),w=f()(g()),q=new i.c({link:Object(o.a)({uri:"http://localhost:9000/graphql"}),cache:new u.a}),I=function(e){return c.a.createElement(s.a,{client:q},c.a.createElement(d.a,{query:O,variables:{id:1}},(function(e){var n=e.loading,t=e.error,a=e.data;return n?c.a.createElement("p",null,"loading..."):t?c.a.createElement("p",null,"error: ",t):a.tasks.map((function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("p",null,"content: ",c.a.createElement("span",{style:{color:"red"}},e.content)),c.a.createElement("p",null,"description: ",c.a.createElement("span",{style:{color:"red"}},e.description)))}))})))},S=function(e){var n=Object(m.a)($),t=Object(a.a)(n,2),r=t[0],l=t[1],i=l.data,o=(l.loading,l.error,Object(p.a)(w,{variables:{id:1}}).data);console.log(i),console.log(o);return c.a.createElement("div",null,c.a.createElement("p",null,"test use apollo-hooks"),c.a.createElement(v.a,{onClick:function(){r({variables:{email:"777@zhangjing.com",password:"123456"}})}},"createToken"))};n.default=function(e){var n=Object(l.useState)({name:"",age:null,id:null}),t=Object(a.a)(n,2),r=t[0],i=t[1];Object(l.useEffect)((function(){q.query({query:y,variables:{id:1}}).then((function(e){console.log(e);var n=e.data.user;i(n)}))}));return c.a.createElement("div",null,c.a.createElement("p",null,"username: ",r.name),c.a.createElement("p",null,"age: ",r.age),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(v.a,{onClick:function(){var e=q.readQuery({query:y,variables:{id:1}});console.log(e)}},"get cache"),c.a.createElement(I,null),c.a.createElement(b.a,{client:q},c.a.createElement(S,null)))}}}]);
//# sourceMappingURL=17.04987fe7.chunk.js.map