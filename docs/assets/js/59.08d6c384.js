(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{205:function(a,t,r){"use strict";r.r(t);var _=r(0),e=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"前后端是如何交互的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前后端是如何交互的","aria-hidden":"true"}},[a._v("#")]),a._v(" 前后端是如何交互的")]),a._v(" "),r("pre",[r("code",[a._v("iOS，H5，安卓等前端开发的如何跟后台进行交互?\n应该怎么去规避一些不该属于自己的任务而被后台强加于自己?\n")])]),a._v(" "),r("h2",{attrs:{id:"_1-前端请求数据url由谁来写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端请求数据url由谁来写","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.前端请求数据URL由谁来写?")]),a._v(" "),r("p",[a._v("在开发中,URL主要是由后台来写的,写好了给前端开发者.如果后台在查询数据,需要借助查询条件才能查询到前端需要的数据时,这时后台会要求前端提供相关的查询参数，这里的查询参数也就是URL请求的参数。")]),a._v(" "),r("h2",{attrs:{id:"_2-接口文档主要由谁来写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-接口文档主要由谁来写","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.接口文档主要由谁来写?")]),a._v(" "),r("p",[a._v("接口文档也是主要由后台开发者来写的,因为直接跟数据打交道的就是后台,后台是最清楚,数据库里面有什么数据,能返回什么数据.前端开发只是数据的被动接受者.所以接口文档也主要是由后台来完成的,前端只是接口文档的使用者,使用过程中,发现返回的数据不对,则需要跟后台进行商量,由后台来修改.切记 前端不要随意更改接口文档,除非在取得后台开发人员的同意的情况下.总的来讲,接口文档主要由后台来设计,修改,前端开发者起到了辅助的作用.")]),a._v(" "),r("h2",{attrs:{id:"_3-前端开发与后台交互的数据格式主要是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-前端开发与后台交互的数据格式主要是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.前端开发与后台交互的数据格式主要是什么?")]),a._v(" "),r("p",[a._v("主要是JSON\nXML现在用的不多")]),a._v(" "),r("h2",{attrs:{id:"_4-前端开发的后台交互原理？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-前端开发的后台交互原理？","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.前端开发的后台交互原理？")]),a._v(" "),r("p",[a._v("在项目的时候，我们前后端会大概说一下接口地址，前端请求的参数，后端返回的参数，然后大家就开始写，写的差不多的时候，大家调一下接口看一下返回的数据，没问题就可以了。")]),a._v(" "),r("h2",{attrs:{id:"_5-前端请求参数的形式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-前端请求参数的形式","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.前端请求参数的形式")]),a._v(" "),r("p",[a._v("GET和POST两种方式, 也会采用RESTful架构, 通过请求方式表示用户行为\n对安全性不高 采用get方便\npost要比get安全\nGET - 从指定的服务器中获取数据\nPOST - 提交数据给指定的服务器处理")]),a._v(" "),r("h2",{attrs:{id:"_6-前端应该告知后台哪些有效信息-后台才能返回前端想的数据的呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-前端应该告知后台哪些有效信息-后台才能返回前端想的数据的呢","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.前端应该告知后台哪些有效信息,后台才能返回前端想的数据的呢?")]),a._v(" "),r("p",[a._v("先将要展示的页面内容进行模块划分，将模块的内容提取出来，以及方便前端的一些标志值等，将所有想要的内容和逻辑告知后端，后端就会去数据库里面去查找相应的数据表中去获得相应的内容，或者图片地址信息。\nURL中的参数主要是根据后台需要,\n如果后台需要一个参数作为查询的辅助条件  前端在URL数据请求时就传递参数。参数前面？几个参数中间&")]),a._v(" "),r("h2",{attrs:{id:"_7-我们应该怎么把页面这些信息有效传达给后台-以及后台是如何获取到这些数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-我们应该怎么把页面这些信息有效传达给后台-以及后台是如何获取到这些数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.我们应该怎么把页面这些信息有效传达给后台,以及后台是如何获取到这些数据?")]),a._v(" "),r("p",[a._v("总的来讲:所有前端请求的URL后面的参数,都是辅助后台数据查询的.如果不需要参数,那么后台就会直接给个URL给前端.")]),a._v(" "),r("h2",{attrs:{id:"_8-前端应该如何回拒一些本不属于自己做的一些功能需求或任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-前端应该如何回拒一些本不属于自己做的一些功能需求或任务","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.前端应该如何回拒一些本不属于自己做的一些功能需求或任务?")]),a._v(" "),r("p",[a._v("在与后台打交道中,我们经常遇到这种情况,有时候明明后台来处理某个事件很简单,后台非要你来做,这时候我们应该懂得去回绝他.\n原则:前端就是负责把数据展示在页面上\n发挥:这就需要我们对一个需求,一个任务的要有清晰认识了,如果对任务含糊不清,自己都没搞明白,你只能受后台摆布了.最后也会因为任务没有完成而备受责难了.")]),a._v(" "),r("h2",{attrs:{id:"_9-当前端在调用数据接口时-发现有些数据不是我们想要的-那么前端应该怎么办呢或者怎么跟后台讲呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-当前端在调用数据接口时-发现有些数据不是我们想要的-那么前端应该怎么办呢或者怎么跟后台讲呢","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.当前端在调用数据接口时,发现有些数据不是我们想要的,那么前端应该怎么办呢或者怎么跟后台讲呢?")]),a._v(" "),r("p",[a._v("首先要把请求的URL和返回的数据以及在页面的展示的情况给跟后台看,这样有理有据,后台开发人员是不会说什么的,否则,后台会很不耐烦的,甚至骂你的可能都有,本身做后台比较难,尤其在查询数据,取数据,封装数据方面都比较难处理.")]),a._v(" "),r("h2",{attrs:{id:"_10-为什么需要在请求的时候传入参数？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-为什么需要在请求的时候传入参数？","aria-hidden":"true"}},[a._v("#")]),a._v(" 10.为什么需要在请求的时候传入参数？")]),a._v(" "),r("p",[a._v("因为后台在查询数据库的时候需要条件查询。")])])}],!1,null,null,null);t.default=e.exports}}]);