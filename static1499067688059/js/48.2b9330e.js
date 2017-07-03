webpackJsonp([48],{1495:function(t,_,v){t.exports={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"doc"},[v("h2",[t._v("DropdownMenu 下拉菜单")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),v("blockquote",[t._v("由于该样式应用在组件中，所以在调用的"),v("code",[t._v("vue")]),t._v("文件中，"),v("code",[t._v("style")]),t._v("的"),v("code",[t._v("scope")]),t._v("属性将无效。")]),t._v(" "),v("h3",[t._v("基本调用")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu1"}}),t._v(" "),v("h3",[t._v("不同参数调用")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu2"}}),t._v(" "),v("h3",[t._v("组合调用")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu9"}}),t._v(" "),v("h3",[t._v("不同位置")]),t._v(" "),t._m(2),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu3"}}),t._v(" "),v("h3",[t._v("不同的触发方式")]),t._v(" "),t._m(3),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu4"}}),t._v(" "),v("h3",[t._v("不默认添加右侧的icon")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu5"}}),t._v(" "),v("h3",[t._v("和dom同样宽度")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu6"}}),t._v(" "),v("h3",[t._v("自定义宽度")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu7"}}),t._v(" "),v("h3",[t._v("添加未读数")]),t._v(" "),v("example",{attrs:{demo:"plugins/dropdownmenu8"}}),t._v(" "),v("h3",[t._v("DropdownMenu 参数")]),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("DropdownCustom可以添加自定义的"),v("code",[t._v("className")]),t._v("定义各种不同的模式的下拉菜单，"),v("code",[t._v("className")]),t._v("将应用在"),v("code",[t._v(".h-dropdownmenu-show")]),t._v("上，该dom为触发下拉的元素，包含自定义的内容以及右侧展示状态的icon。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("提示：系统自带一个"),v("code",[t._v("h-text-dropdown")]),t._v("的样式。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("code",[t._v("placement")]),t._v(": top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("code",[t._v("trigger")]),t._v(": hover, click")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("datas")]),t._v(" "),v("td",[t._v("选择的数据")]),t._v(" "),v("td",[t._v("Array, Object")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("dict")]),t._v(" "),v("td",[t._v("调用全局定义的字典")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("trigger")]),t._v(" "),v("td",[t._v("触发方式")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("click, hover")]),t._v(" "),v("td",[t._v("click")])]),t._v(" "),v("tr",[v("td",[t._v("equalWidth")]),t._v(" "),v("td",[t._v("是否和触发的dom等宽")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("toggleIcon")]),t._v(" "),v("td",[t._v("是否显示展示状态的icon")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("自定义menu的宽度")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("placement")]),t._v(" "),v("td",[t._v("menu显示的位置")]),t._v(" "),v("td",[t._v("Stirng")]),t._v(" "),v("td",[t._v("top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")]),t._v(" "),v("td",[t._v("bottom-start")])]),t._v(" "),v("tr",[v("td",[t._v("showCount")]),t._v(" "),v("td",[t._v("menu是否显示未读标志数")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("maxCount")]),t._v(" "),v("td",[t._v("未读标志数最大数字")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("99")])]),t._v(" "),v("tr",[v("td",[t._v("className")]),t._v(" "),v("td",[t._v("为点击触发的dom添加class")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0},880:function(t,_,v){var e=v(1)(null,v(1495),null,null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/dropdownmenu.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] dropdownmenu.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports}});