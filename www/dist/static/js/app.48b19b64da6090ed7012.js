webpackJsonp([1],{Kykc:function(t,e){},LE7Y:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"app"}},[e("router-view")],1)])},staticRenderFns:[]};var o=s("VU/8")({name:"App",methods:{}},i,!1,function(t){s("Kykc")},null,null).exports,n=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card1",staticStyle:{width:"22rem"}},[s("div",{staticClass:"card-body "},[s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"#createCommentModal"+t.task._id}},[t._v("Create Comment")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"createCommentModal"+t.task._id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.newComment(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"\n                                          comment.body"}],staticClass:"form-control",attrs:{type:"text",name:"commentBody",id:"formGroupExampleInput",placeholder:"Comment",required:""},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.newComment}},[t._v("Create Comment")])])])])]),t._v(" "),s("div",t._l(t.comments,function(e){return s("div",{staticClass:"card card3",staticStyle:{width:"19rem"}},[s("div",{staticClass:"card-body"},[s("h5",[t._v(t._s(e.body))]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"}),t._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){t.removeComment(e)}}},[t._v("Delete Comment")])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Create New Comment")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},d={name:"List",props:["list"],components:{comments:s("VU/8")({name:"Comments",props:["taskId"],components:{},mounted:function(){this.$store.dispatch("getComments",this.taskId)},data:function(){return{task:{body:""},comment:{body:""}}},computed:{comments:function(){return this.$store.state.comments[this.taskId]},user:function(){return this.$store.state.user}},methods:{removeTask:function(t){this.$store.dispatch("removeTask",t)},newComment:function(){this.comment.taskId=this.taskId,this.comment.userId=this.user._id,this.$store.dispatch("addComment",this.comment)},removeComment:function(t){this.$store.dispatch("removeComment",t)}}},r,!1,null,null,null).exports},mounted:function(){this.$store.dispatch("getTasks",this.list._id)},data:function(){return{newListId:"",task:{body:""},comment:{body:""}}},computed:{tasks:function(){return this.$store.state.tasks[this.list._id]},user:function(){return this.$store.state.user},lists:function(){return this.$store.state.lists}},methods:{removeList:function(t){this.$store.dispatch("removeList",t)},newTask:function(){this.task.listId=this.list._id,this.task.userId=this.user._id,this.$store.dispatch("addTask",this.task)},removeTask:function(t){this.$store.dispatch("removeTask",t)},moveTask:function(t,e){e.oldListId=e.listId,e.listId=t,this.$store.dispatch("moveTask",e)}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card1",staticStyle:{width:"30rem"}},[s("div",{staticClass:"card-body "},[s("h5",[t._v(t._s(t.list.title))]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"}),t._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(e){t.removeList(t.list)}}},[t._v("Delete List")]),t._v(" "),s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"#createTaskModal"+t.list._id}},[t._v("Create Task")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"createTaskModal"+t.list._id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.newTask(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.body,expression:"\n                                          task.body"}],staticClass:"form-control",attrs:{type:"text",name:"taskTitle",id:"formGroupExampleInput",placeholder:"Task",required:""},domProps:{value:t.task.body},on:{input:function(e){e.target.composing||t.$set(t.task,"body",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"\n                                              task.description"}],staticClass:"form-control",attrs:{type:"text",name:"taskDescription",id:"formGroupExampleInput",placeholder:"Description"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.newTask}},[t._v("Create Task")])])])])]),t._v(" "),s("div",t._l(t.tasks,function(e){return s("div",{staticClass:"card card2",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-body"},[s("h5",[t._v(t._s(e.body))]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:function(s){t.moveTask(t.newListId,e)}}},[t._v("Move Task")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newListId,expression:"newListId"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.newListId=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Please select list")]),t._v(" "),t._l(t.lists,function(e){return s("option",{domProps:{value:e._id}},[t._v(t._s(e.title))])})],2),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"}),t._v(" "),s("comments",{attrs:{taskId:e._id}}),t._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){t.removeTask(e)}}},[t._v("Delete Task")])],1)])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Create New Task")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},c=s("VU/8")(d,l,!1,null,null,null).exports,m={name:"Board",components:{list:c},mounted:function(){this.$store.dispatch("getLists",this.$route.params.boardId)},data:function(){return{list:{title:""},task:{body:""},comment:{body:""}}},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.lists},tasks:function(){return this.$store.state.tasks},user:function(){return this.$store.state.user}},methods:{logout:function(){this.$store.dispatch("logout")},newList:function(){this.list.boardId=this.$route.params.boardId,this.list.userId=this.user._id,this.$store.dispatch("addList",this.list)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-dark"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[t._m(0),t._v(" "),s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"#createListModal"}},[t._v("Create List")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"createListModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.newList(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"\n                                      list.title"}],staticClass:"form-control",attrs:{type:"text",name:"listTitle",id:"formGroupExampleInput",placeholder:"Title",required:""},domProps:{value:t.list.title},on:{input:function(e){e.target.composing||t.$set(t.list,"title",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.description,expression:"\n                                          list.description"}],staticClass:"form-control",attrs:{type:"text",name:"listDescription",id:"formGroupExampleInput",placeholder:"Description"},domProps:{value:t.list.description},on:{input:function(e){e.target.composing||t.$set(t.list,"description",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.newList}},[t._v("Create List")])])])])])])])]),t._v(" "),s("div",[s("div",{staticClass:"headline"},[s("h1",[t._v(t._s(t.board.title))]),t._v(" "),s("p",[t._v(t._s(t.board.description))])])]),t._v(" "),s("div",t._l(t.lists,function(t){return s("list",{key:t.id,attrs:{list:t}})}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nav-item nav-link active",attrs:{href:"#"}},[this._v("Home\n                    "),e("span",{staticClass:"sr-only"},[this._v("(current)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Create New List")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var v=s("VU/8")(m,u,!1,function(t){s("ak83")},null,null).exports,p={name:"Home",components:{board:v},mounted:function(){this.$store.state.user._id||g.push({name:"login"}),this.$store.dispatch("getBoards")},data:function(){return{board:{title:"",description:"",creator:""}}},computed:{boards:function(){return this.$store.state.boards},user:function(){return this.$store.state.user}},methods:{logout:function(){this.$store.dispatch("logout")},newBoard:function(){this.$store.dispatch("addBoard",this.board)},getBoard:function(){this.$store.dispatch("getBoards")},viewBoard:function(){this.$store.dispatch("viewBoard")},removeBoard:function(t){this.$store.dispatch("removeBoard",t)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-dark"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[t._m(0),t._v(" "),s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"#createBoardModal"}},[t._v("Create Board")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"createBoardModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.newBoard(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"\n                        board.title"}],staticClass:"form-control",attrs:{type:"text",name:"boardTitle",id:"formGroupExampleInput",placeholder:"Title",required:""},domProps:{value:t.board.title},on:{input:function(e){e.target.composing||t.$set(t.board,"title",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.board.description,expression:"\n                            board.description"}],staticClass:"form-control",attrs:{type:"text",name:"boardDescription",id:"formGroupExampleInput",placeholder:"Description"},domProps:{value:t.board.description},on:{input:function(e){e.target.composing||t.$set(t.board,"description",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.newBoard}},[t._v("Create Board")])])])])]),t._v(" "),s("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")])])])]),t._v(" "),t._m(2),t._v(" "),s("div",t._l(t.boards,function(e){return s("div",{staticClass:"card",staticStyle:{width:"20rem"}},[s("div",{staticClass:"card-body"},[s("h5",[t._v(t._s(e.title))]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"}),t._v(" "),s("p",[t._v(t._s(e.description))]),t._v(" "),s("router-link",{attrs:{to:"/Boards/"+e._id}},[t._v("View Board")]),t._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){t.removeBoard(e)}}},[t._v("Delete Board")])],1)])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nav-item nav-link active",attrs:{href:"#"}},[this._v("Home\n          "),e("span",{staticClass:"sr-only"},[this._v("(current)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Create a New Board")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",{staticClass:"headline"},[this._v("My Boards")])])}]};var f=s("VU/8")(p,h,!1,function(t){s("LE7Y")},"data-v-725a4c52",null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"login-page"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.userLogin(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"text",name:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("LOGIN")])])]),t._v(" "),s("div",{staticClass:"register-page"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.userRegister(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],attrs:{type:"text",name:"name",id:"name",placeholder:"User Name"},domProps:{value:t.register.name},on:{input:function(e){e.target.composing||t.$set(t.register,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],attrs:{type:"text",name:"regEmail",id:"regEmail",placeholder:"Email Address"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||t.$set(t.register,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",name:"regPassword",id:"regPassword",placeholder:"Password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Register")])])])])},staticRenderFns:[]};var _=s("VU/8")({name:"",mounted:function(){this.$store.dispatch("authenticate")},data:function(){return{login:{email:"",password:""},register:{name:"",email:"",password:""}}},computed:{},methods:{userLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},userRegister:function(){this.$store.dispatch("register",this.register),this.register={name:"",email:"",password:""}}}},b,!1,function(t){s("TSyJ")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card1",staticStyle:{width:"22rem"}},[s("div",{staticClass:"card-body "},[s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"#createCommentModal"+t.task._id}},[t._v("Create Comment")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"createCommentModal"+t.task._id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.newComment(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"\n                                          comment.body"}],staticClass:"form-control",attrs:{type:"text",name:"commentBody",id:"formGroupExampleInput",placeholder:"Comment",required:""},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.newComment}},[t._v("Create Comment")])])])])]),t._v(" "),s("div",t._l(t.comments,function(e){return s("div",{staticClass:"card card3",staticStyle:{width:"19rem"}},[s("div",{staticClass:"card-body"},[s("h5",[t._v(t._s(e.body))]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"}),t._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){t.removeComment(e)}}},[t._v("Delete Comment")])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Create New Comment")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};s("VU/8")({name:"Comments",props:["taskId"],components:{},mounted:function(){this.$store.dispatch("getComments",this.taskId)},data:function(){return{task:{body:""},comment:{body:""}}},computed:{comments:function(){return this.$store.state.comments[this.taskId]},user:function(){return this.$store.state.user}},methods:{removeTask:function(t){this.$store.dispatch("removeTask",t)},newComment:function(){this.comment.taskId=this.taskId,this.comment.userId=this.user._id,this.$store.dispatch("addComment",this.comment)},removeComment:function(t){this.$store.dispatch("removeComment",t)}}},C,!1,null,null,null).exports;a.a.use(n.a);var g=new n.a({routes:[{path:"/login",name:"login",component:_},{path:"/",name:"Home",component:f},{path:"/Boards/:boardId",name:"Board",component:v},{path:"/Lists/:listId",name:"List",component:c},{path:"/Comments/:commentId",name:"Comment",component:Comment},{path:"/Task/:taskId",name:"Task",component:c}]}),k=s("NYxO"),y=s("mtWM"),w=s.n(y),$=!window.location.host.includes("localhost")?"//cekanban.herokuapp.com/":"//localhost:3000/";a.a.use(k.a);var x=w.a.create({baseURL:$+"api/",timeout:3e3,withCredentials:!0}),I=w.a.create({baseURL:$+"auth/",timeout:3e3,withCredentials:!0}),L=new k.a.Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setUser:function(t,e){t.user=e},deleteUser:function(t){t.user={}},setBoards:function(t,e){t.boards=e},setActiveBoard:function(t,e){t.activeBoard=e},setLists:function(t,e){t.lists=e},setTasks:function(t,e){a.a.set(t.tasks,e.listId,e.tasks)},setComments:function(t,e){a.a.set(t.comments,e.taskId,e.comments)}},actions:{login:function(t,e){var s=t.commit;t.dispatch;I.post("login",e).then(function(t){s("setUser",t.data),g.push({name:"Home"})})},logout:function(t){var e=t.commit;t.dispatch;I.delete("/logout").then(function(t){e("deleteUser"),g.push({name:"login"})})},register:function(t,e){var s=t.commit;t.dispatch;I.post("register",e).then(function(t){s("setUser",t.data),g.push({name:"Home"})})},authenticate:function(t){var e=t.commit;t.dispatch;I.get("/authenticate").then(function(t){e("setUser",t.data),g.push({name:"Home"})}).catch(function(t){console.log(t.data)})},addBoard:function(t,e){var s=t.dispatch;t.commit;x.post("/boards",e).then(function(t){s("getBoards")})},getBoards:function(t){var e=t.commit;t.dispatch;x.get("/boards").then(function(t){e("setBoards",t.data)})},removeBoard:function(t,e){t.commit;var s=t.dispatch;t.state;x.delete("/boards/"+e._id,e).then(function(t){s("getBoards")})},viewBoard:function(t,e){var s=t.commit;t.dispatch,t.state;x.get("/boards/"+e).then(function(t){s("setActiveBoard",t.data)})},addList:function(t,e){var s=t.dispatch;t.commit;x.post("/lists",e).then(function(t){s("getLists",e.boardId)})},getLists:function(t,e){var s=t.commit;t.dispatch;x.get("/boards/"+e+"/lists").then(function(t){s("setLists",t.data)})},removeList:function(t,e){t.commit;var s=t.dispatch;t.state;x.delete("/lists/"+e._id,e).then(function(t){s("getLists")})},viewList:function(t,e){var s=t.commit;t.dispatch,t.state;x.get("/lists/"+e).then(function(t){s(t.data)})},addTask:function(t,e){var s=t.dispatch;t.commit;x.post("/tasks",e).then(function(t){s("getTasks",e.listId)})},moveTask:function(t,e){t.commit;var s=t.dispatch;x.put("/tasks/"+e._id,e).then(function(t){s("getTasks",e.listId),s("getTasks",e.oldListId)})},getTasks:function(t,e){var s=t.commit;t.dispatch;x.get("/lists/"+e+"/tasks").then(function(t){var a={listId:e,tasks:t.data};s("setTasks",a)})},removeTask:function(t,e){t.commit;var s=t.dispatch;t.state;x.delete("/tasks/"+e._id,e).then(function(t){s("getTasks",e.listId)})},viewTask:function(t,e){var s=t.commit;t.dispatch,t.state;x.get("/tasks/"+e).then(function(t){s(t.data)})},addComment:function(t,e){var s=t.dispatch;t.commit;x.post("/comments",e).then(function(t){s("getComments",e.taskId)})},getComments:function(t,e){var s=t.commit;t.dispatch;x.get("/tasks/"+e+"/comments").then(function(t){var a={taskId:e,comments:t.data};s("setComments",a)})},removeComment:function(t,e){t.commit;var s=t.dispatch;t.state;x.delete("/comments/"+e._id,e).then(function(t){s("getComments",e.taskId)})},viewComment:function(t,e){var s=t.commit;t.dispatch,t.state;x.get("/comments/"+e).then(function(t){s(t.data)})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,store:L,components:{App:o},template:"<App/>"})},TSyJ:function(t,e){},ak83:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.48b19b64da6090ed7012.js.map