(this.webpackJsonpdemotask=this.webpackJsonpdemotask||[]).push([[0],{24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(11),i=a.n(s),n=(a(24),a(6)),r="ADD_TODO",l="DELETE_TODO",d="UPDATE_TODO",j=a(8),o=a(1);var u=function(){var e=Object(n.c)((function(e){return e.allList.taskList})),t=Object(n.b)(),a=function(e){t({type:l,payload:e})};return e&&0===e.length?Object(o.jsx)("div",{className:"ui segment container",children:Object(o.jsx)("p",{children:"No List Found"})}):Object(o.jsx)("div",{className:"ui grid centered container",children:e.map((function(e){return Object(o.jsx)("div",{className:"four wide column",children:Object(o.jsxs)("div",{className:"ui positive message",children:[Object(o.jsx)("i",{className:"close icon",onClick:function(){return a(e.id)}}),Object(o.jsx)("div",{className:"header",children:Object(o.jsx)(j.b,{to:"edit/".concat(e.id),children:e.label})}),Object(o.jsx)("p",{children:e.description})]})},e.id)}))})},b=a(3);var O=function(){var e=Object(n.b)(),t=Object(c.useState)(""),a=Object(b.a)(t,2),s=a[0],i=a[1],l=Object(c.useState)(""),d=Object(b.a)(l,2),j=d[0],u=d[1];return Object(o.jsx)("div",{className:"ui grid centered container",children:Object(o.jsx)("div",{className:"eight wide column",children:Object(o.jsxs)("div",{className:"ui segment",children:[Object(o.jsx)("h2",{className:"ui floated header",children:"Add Task"}),Object(o.jsx)("div",{className:"ui clearing divider"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!=s&&""!=j?(e(function(e,t){return{type:r,payload:{label:e,description:t,id:Math.random().toString(16).slice(2)}}}(s,j)),i(""),u("")):alert("Please fill blank filed")},className:"ui form",children:[Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("input",{type:"text",value:s,placeholder:"Add Title",onChange:function(e){return i(e.target.value)}})}),Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("textarea",{rows:"2",value:j,placeholder:"Add Note...",onChange:function(e){return u(e.target.value)}})}),Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("input",{type:"submit",className:"ui primary button",value:"Add Task"})})]})]})})})};var m=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{}),Object(o.jsx)(u,{})]})},h=a(2);var p=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(),r=Object(b.a)(i,2),l=r[0],j=r[1],u=Object(h.g)().listId,O=Object(h.f)(),m=Object(n.c)((function(e){return e.allList.taskList})),p=Object(n.b)(),x=m.filter((function(e){return e.id===u})),v=Object(b.a)(x,1)[0];return Object(c.useEffect)((function(){s(v.label),j(v.description)}),[v]),Object(o.jsx)("div",{className:"ui grid centered container",children:Object(o.jsx)("div",{className:"eight wide column",children:Object(o.jsxs)("div",{className:"ui segment",children:[Object(o.jsx)("h2",{className:"ui floated header",children:"Update Note"}),Object(o.jsx)("div",{className:"ui clearing divider"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(function(e,t,a){return{type:d,payload:{label:e,description:t,id:a}}}(a,l,u)),O(-1)},className:"ui form",children:[Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("input",{type:"text",value:a,placeholder:"Add Title",onChange:function(e){return s(e.target.value)}})}),Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("textarea",{rows:"2",value:l,onChange:function(e){return j(e.target.value)},placeholder:"Description"})}),Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("input",{type:"submit",className:"ui primary button",value:"Update Task"})})]})]})})})},x=a(16),v=a.n(x),f=a(18),N=a(12),g=a(7);var w=function(){var e=Object(h.f)(),t=Object(c.useState)({username:"",password:""}),a=Object(b.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),r=Object(b.a)(n,2),l=r[0],d=r[1],j=function(e){i(Object(g.a)(Object(g.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))},u=function(){var t=Object(f.a)(v.a.mark((function t(a){var c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,""===s.username?d("Username is not blank"):""===s.password?d("Password is not blank"):c.test(s.username)?(localStorage.setItem("user-loggedIn",s.username),e("/update"),d("")):d("Please enter valid email");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"ui grid centered container",children:Object(o.jsx)("div",{className:"eight wide column",children:Object(o.jsxs)("div",{className:"ui segment",children:[Object(o.jsx)("h2",{className:"display-7",children:"Login"}),Object(o.jsxs)("form",{className:"ui form",onSubmit:u,children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"username",className:"mb-2",children:"Email address"}),Object(o.jsx)("input",{type:"text",name:"username",id:"username",className:"form-control",value:s.username,onChange:j,placeholder:"Enter your email"})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"password",className:"mb-2",children:"Password"}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",value:s.password,onChange:j,className:"form-control",placeholder:"Enter your password"}),Object(o.jsx)("div",{className:"color-red text-right",children:l})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{type:"submit",className:"ui primary button",children:"Login"})})]})]})})})})};var k=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(h.f)(),n=localStorage.getItem("user-loggedIn"),r=!!n;return Object(o.jsxs)("div",{className:"ui top attached header",children:[Object(o.jsx)("i",{className:"edit outline icon"}),Object(o.jsx)("div",{className:"content",children:"Todo App"}),r&&Object(o.jsxs)("div",{className:"d-flex align-items-center position-relative loginfo",children:[Object(o.jsxs)("div",{onClick:function(){s(!a)},className:"d-inline-block profile",children:[n.split("@")[0],Object(o.jsx)("i",{className:"angle down icon"})]}),Object(o.jsx)("span",{className:"profileLogout ".concat(a?"active":""),onClick:function(){localStorage.setItem("user-loggedIn",""),i("/Todo"),s(!1)},children:"Logout"})]})]})};var y=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(k,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{path:"/Todo",element:Object(o.jsx)(w,{})}),Object(o.jsx)(h.a,{path:"/update",element:Object(o.jsx)(m,{})}),Object(o.jsx)(h.a,{path:"update/edit/:listId",element:Object(o.jsx)(p,{})})]})]})})},L=a(13),S=a(19),E={taskList:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case r:return Object(g.a)(Object(g.a)({},e),{},{taskList:[].concat(Object(S.a)(e.taskList),[c])});case d:return Object(g.a)(Object(g.a)({},e),{},{taskList:e.taskList.map((function(e){return e.id===c.id?c:e}))});case l:return Object(g.a)(Object(g.a)({},e),{},{taskList:e.taskList.filter((function(e){return e.id!==c}))});default:return e}},D=Object(L.a)({allList:T}),_=Object(L.b)(D,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(o.jsx)(n.a,{store:_,children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9be0a839.chunk.js.map