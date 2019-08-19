(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(3),n(2)),l=Object(a.createContext)(),i=n(6),u=n(1),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state";localStorage.setItem(t,JSON.stringify(e))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"state",t=localStorage.getItem(e);return t?JSON.parse(t):[]};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=function(e,t){switch(t.type){case"ADD_TASK":var n=t.payload;n.id=(new Date).getTime();var a=f({},e,{tasks:E([n].concat(Object(i.a)(e.tasks)))});return p(a.tasks),a;case"REMOVE_TASK":var r=f({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.payload})});return p(r.tasks),r;case"SET_CURRENT":return f({},e,{currentTask:t.payload});case"UPDATE_TASK":var c=f({},e,{tasks:E(e.tasks.map(function(e){return e.id===t.payload.id?t.payload:e}))});return p(c.tasks),c;case"CLEAR_TASKK":return f({},e,{currentTask:null});case"GET_TASKS":return f({},e,{tasks:E(d())});case"SET_COMPLETED":var o=f({},e,{tasks:e.tasks.map(function(e){return e.id===t.payload.id?f({},t.payload,{completed:!t.payload.completed}):e})});return p(o.tasks),o;default:return e}},E=function(e){return e.sort(function(e,t){return e.title<t.title?1:-1}),e},k=function(e){var t=Object(a.useReducer)(b,{tasks:[],currentTask:null}),n=Object(s.a)(t,2),c=n[0],o=n[1];return r.a.createElement(l.Provider,{value:{tasks:c.tasks,currentTask:c.currentTask,addTask:function(e){o({type:"ADD_TASK",payload:e})},removeTask:function(e){o({type:"REMOVE_TASK",payload:e})},setCurrentTask:function(e){o({type:"SET_CURRENT",payload:e})},updateTask:function(e){o({type:"UPDATE_TASK",payload:e})},clearCurrentTask:function(){o({type:"CLEAR_TASKK"})},getTasks:function(){o({type:"GET_TASKS"})},setCompleted:function(e){o({type:"SET_COMPLETED",payload:e})}}},e.children)},O=function(e){var t=e.task,n=t.title,c=t.description,o=t.id,s=t.completed,i=Object(a.useContext)(l),u=i.removeTask,p=i.setCurrentTask,d=i.setCompleted;return r.a.createElement("div",{className:"card container"},r.a.createElement("h3",{className:"text-left"}," ",n," "),r.a.createElement("p",{className:"".concat(s?"completed":""," task-description")}," ",c),r.a.createElement("div",{className:"space-between"},r.a.createElement("div",null,!s&&r.a.createElement("div",null,r.a.createElement("button",{className:"flex btn btn-edit",onClick:function(e){p(t)}},"Edit"),r.a.createElement("button",{className:"flex btn btn-complete",onClick:function(e){d(t)}}," Complete"))),r.a.createElement("button",{className:"btn btn-delete",onClick:function(e){u(o)}}," Delete")))},y=function(){var e=Object(a.useContext)(l),t=e.tasks,n=e.getTasks;return Object(a.useEffect)(function(){n()},[]),r.a.createElement("div",{className:"tasks-container"},t.map(function(e){return r.a.createElement(O,{key:e.id,task:e})}))};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var v=function(){var e=Object(a.useContext)(l),t=e.addTask,n=e.currentTask,c=e.updateTask,o=e.clearCurrentTask,i=Object(a.useState)({title:"",description:"",completed:!1}),p=Object(s.a)(i,2),d=p[0],m=p[1];Object(a.useEffect)(function(){n?m(n):k()},[e,n]);var f=d.title,b=d.description,E=function(e){m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},d,Object(u.a)({},e.target.name,e.target.value)))},k=function(){m({title:"",description:"",completed:!1})};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n?(c(d),o()):t(d),k()},className:"container task-form"},r.a.createElement("input",{type:"text",placeholder:"title",name:"title",required:!0,value:f,onChange:E}),r.a.createElement("textarea",{type:"text",placeholder:"description",name:"description",value:b,onChange:E}),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:n?"Update Task":"Add Task",className:"btn btn-add btn-block"})),n&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-cancel btn-block",onClick:function(){o()}},"Cancel")))},j=function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"app"},r.a.createElement("h2",{className:"center"}," Todo list"),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(y,null))))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))},3:function(e,t,n){},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.75268c78.chunk.js.map