webpackJsonp([0],[,,function(e,t,a){"use strict";var n=a(1),s=a(20),i=a(14),l=a.n(i),o=a(15),r=a.n(o),c=a(13),u=a.n(c);n.a.use(s.a),t.a=new s.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"Hello",component:l.a},{path:"/projects",name:"Projects",component:r.a},{path:"/contact",name:"Contact",component:u.a}]})},function(e,t,a){function n(e){a(12)}var s=a(0)(a(4),a(19),n,null,null);e.exports=s.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"contact"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{schools:[{name:"Polytechnic university of Puerto Rico",major:"bachelor of Science in Computer Science",date:"July 2011 - October 2016"}],companies:[{name:"AON Hewitt",role:"Backend Software Developer",date:"July 2016 - January 2017"},{name:"Moonbeam Technologies",role:"Software Engineer",date:"March 2015 - Present"},{name:"BeaconMD",role:"Software Engineer",date:"April 2017 - Present"}],skills:[{language:"C++"},{language:"C#"},{language:"Java"},{language:"Python"},{language:"HTML5"},{language:"CSS3"},{language:"JavaScript"},{language:"SQL"}]}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"projects",data:function(){return{projects:[{name:"How to Perl",description:"A Perl language documentation website built with the latest front-end best practices and APIs. The website is currently in progress.",link:"https://how-to-perl.herokuapp.com"},{name:"Moonbeam Technologies",description:"This is my company's website.",link:"https://moonbeam-technologies.herokuapp.com"},{name:"Red Velvet",description:"Just twitter feeds for developers.",link:"https://red-velvet.herokuapp.com"}]}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),s=a(3),i=a.n(s),l=a(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:l.a,template:"<App/>",components:{App:i.a}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){function n(e){a(11)}var s=a(0)(a(5),a(18),n,"data-v-604efcf4",null);e.exports=s.exports},function(e,t,a){function n(e){a(10)}var s=a(0)(a(6),a(17),n,"data-v-25e928b8",null);e.exports=s.exports},function(e,t,a){function n(e){a(9)}var s=a(0)(a(7),a(16),n,"data-v-1ab89d04",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects"},e._l(e.projects,function(t){return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("h4",[a("a",{attrs:{href:t.link}},[e._v(" "+e._s(t.name)+" ")])])]),e._v(" "),a("div",{staticClass:"panel-body"},[e._v("\n                    "+e._s(t.description)+"\n                ")])])])])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[e._m(0),e._v(" "),a("div",{staticClass:"row"},[e._m(1),e._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"panel panel-default"},[e._m(2),e._v(" "),a("div",{staticClass:"panel-body"},[a("p",e._l(e.schools,function(t){return a("ul",[a("li",[e._v(" "+e._s(t.name)+" | "+e._s(t.major)+" | "+e._s(t.date)+" ")])])}))])])]),e._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"panel panel-default"},[e._m(3),e._v(" "),a("div",{staticClass:"panel-body"},[a("p",e._l(e.companies,function(t){return a("ul",[a("li",[e._v(" "+e._s(t.name)+" | "+e._s(t.role)+" | "+e._s(t.date)+" ")])])}))])])]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"panel panel-default"},[e._m(4),e._v(" "),a("div",{staticClass:"panel-body"},[a("p",[e._v("I'm proficient in the following programming languages:")]),e._v(" "),a("p",e._l(e.skills,function(t){return a("ul",[a("li",[e._v(" "+e._s(t.language)+" ")])])}))])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jumbotron"},[a("h1",[e._v("Hello There!")]),e._v(" "),a("p",{staticClass:"lead"},[e._v("\n            My name is Juan, and right now I'm completing my BS in Computer Science. It has been a long way now, but I had amazing experiences, meeting new friends and sorts. Here, you will find out more about me. Exciting isn't it? Well, let's get started\n        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("h4",[e._v("About Me")])]),e._v(" "),a("div",{staticClass:"panel-body"},[a("p",[e._v("\n                        I'm a little developer with big ambitions. I'm a big fan of food, tech, science, music and of course, gaming.\n                    ")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",[e._v("Education")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",[e._v("Experience")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",[e._v("Skills")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("h4",[e._v("Juan De Jesus")])]),e._v(" "),a("div",{staticClass:"panel-body"},[a("p",[e._v("Phone: "),a("a",{attrs:{href:"sms:1-787-562-9759"}},[e._v("(787)562-9759")])]),e._v(" "),a("p",[e._v("Email: "),a("a",{attrs:{href:"mailto:jdejesus93@gmail.com"}},[e._v("jdejesus93@gmail.com")])]),e._v(" "),a("p",[e._v("GitHub: "),a("a",{attrs:{href:"https://github.com/juan1003"}},[e._v("@juan1003")])]),e._v(" "),a("p",[e._v("Twitter: "),a("a",{attrs:{href:"https://twitter.com/jdejesus93"}},[e._v("@jdejesus93")])])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[e._m(0),e._v(" "),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Juan De Jesus")])],1),e._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])])])])]),e._v(" "),a("main",{staticClass:"container"},[a("router-view")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}},[a("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),e._v(" "),a("span",{staticClass:"icon-bar"}),e._v(" "),a("span",{staticClass:"icon-bar"}),e._v(" "),a("span",{staticClass:"icon-bar"})])}]}}],[8]);
//# sourceMappingURL=app.efcf80229240c0367b87.js.map