/*! kyui v1.4.9 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([26],{E8ZN:function(e,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=v("OE8h"),n=v.n(_);for(var l in _)"default"!==l&&function(e){v.d(t,e,function(){return _[e]})}(l);var o=v("KfWw"),a=v("XyMi"),c=Object(a.a)(n.a,o.a,o.b,!1,null,null,null);t.default=c.exports},KfWw:function(e,t,v){"use strict";v.d(t,"a",function(){return _}),v.d(t,"b",function(){return n});var _=function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",[v("h2",[e._v("Checkbox 多选框")]),e._v(" "),v("h3",[e._v("基础 ")]),e._v(" "),v("h4",[e._v("单独使用 ,使用 v-model 可以双向绑定数据。")]),e._v(" "),v("p",[e._v(e._s(e.d))]),e._v(" "),v("Checkbox",{model:{value:e.d,callback:function(t){e.d=t},expression:"d"}},[e._v("单选框 ")]),e._v(" "),v("Button",{on:{click:function(t){e.d=!e.d}}},[e._v("Click me")]),e._v(" "),v("h3",[e._v("组合使用")]),e._v("\n  "+e._s(e.g)+"\n  "),v("CheckboxGroup",{model:{value:e.g,callback:function(t){e.g=t},expression:"g"}},[v("Checkbox",{attrs:{label:"苹果🍎"}}),e._v(" "),v("Checkbox",{attrs:{label:"橘子🍊"}}),e._v(" "),v("Checkbox",{attrs:{label:"香蕉🍌"}}),e._v(" "),v("Checkbox",{attrs:{label:"栗子🌰"}}),e._v(" "),v("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),e._v(" "),v("Checkbox",{attrs:{label:"梨子🍐",disabled:""}})],1),e._v(" "),v("Button",{on:{click:function(t){e.g=[]}}},[e._v("清除")]),e._v(" "),v("Button",{on:{click:function(t){e.g=["苹果🍎"]}}},[e._v("选中苹果")]),e._v(" "),v("Code",[e._v(e._s(e.demo))]),e._v(" "),v("h3",[e._v("API")]),e._v(" "),e._m(0),e._v(" "),v("h3",[e._v("CheckboxGroup API")]),e._v(" "),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[e._v("属性")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("默认值")])]),e._v(" "),v("tr",[v("td",[e._v("value")]),e._v(" "),v("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("label")]),e._v(" "),v("td",[e._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),e._v(" "),v("td",[e._v(" String | Number")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("disabled")]),e._v(" "),v("td",[e._v("是否禁用当前项")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("在选项状态发生改变时触发，返回当前状态")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[e._v("属性")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("默认值")])]),e._v(" "),v("tr",[v("td",[e._v("value")]),e._v(" "),v("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])])])])}]},OE8h:function(e,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{d:!0,g:["苹果🍎","香蕉🍌","葡萄🍇"],demo1:'<Checkbox v-model="d">单选框 </Checkbox>',demo:'<CheckboxGroup v-model="g">\n      <Checkbox label="苹果🍎"></Checkbox>\n      <Checkbox label="橘子🍊"></Checkbox>\n      <Checkbox label="香蕉🍌"></Checkbox>\n      <Checkbox label="葡萄🍇" disabled></Checkbox>\n      <Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<script>\nexport default {\n  data() {\n    return {\n      d: true,\n      g: ["苹果🍎", "香蕉🍌",\'葡萄🍇\'],\n    }\n  }\n}\n<\/script>'}}}}});