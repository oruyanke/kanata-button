(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,e,n){"use strict";var o=n(1),r=n(155);o.a.use(r.a),e.a=function(t){var e=t.app,o=t.store;e.i18n=new r.a({locale:o.state.locale,fallbackLocale:"zh",messages:{en:n(376),ja:n(377),zh:n(378)}})}},156:function(t,e,n){"use strict";var o={install:function(t){t.prototype.$bus=new t}};n(1).a.use(o)},157:function(t,e,n){"use strict";var i,s,o,r,a,l;i=window,s=document,o="script",r="ga",i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(o),l=s.getElementsByTagName(o)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",l.parentNode.insertBefore(a,l),ga("create","UA-175534352-1","auto"),e.a=function(t){var e=t.app.router;t.store;e.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},188:function(t,e,n){},190:function(t,e,n){},223:function(t,e,n){"use strict";var o={mounted:function(){var t=n(226),e=t("20200107","YYYYMMDD"),o="color: #FF5A79; font-size: 105px;";console.log("%c❤%c天音かなた%c❤",o,"color: #0EBCF8; font-size: 105px; font-weight: bold;",o),console.log("%c"+this.$t("site.title"),"color: #6CB9F6","https://github.com/oruyanke/kanata-button"),console.log("The project has lived for "+t().diff(e,"day")+" days.")}},r=n(55),l=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}})}),[],!1,null,null,null).exports,c=n(53),v={components:{ConsoleMessage:l},data:function(){return{icons:{apps:c.b,code_tags:c.f,brightness:c.c,translate:c.o,github:c.g,newspaper:c.h,alpha_b_box:c.a,play_list_star:c.j},drawer:!1,fixed:!1,nav_items:[],external_cn:[{icon:"alpha_b_box",title:"天音彼方陶碗工厂",to:"https://space.bilibili.com/54139629"},{icon:"newspaper",title:"天音彼方周报",to:"https://www.bilibili.com/read/readlist/rl233589"}]}},computed:{current_locale:function(){return this.$i18n.locale}},mounted:function(){this.$vuetify.theme.dark="true"===this.$store.state.dark,window.innerWidth>=1024&&(this.drawer=!0)},methods:{switch_dark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$store.commit("SET_DARK",this.$vuetify.theme.dark)},switch_lang:function(t){console.log("switching to "+t),this.$store.commit("SET_LANG",t),this.$i18n.locale=t}},head:function(){return{htmlAttrs:{lang:this.current_locale}}}},d=(n(265),n(104)),_=n.n(d),f=n(393),m=n(402),h=n(394),w=n(224),k=n(395),y=n(396),x=n(397),S=n(147),$=n(129),A=n(148),V=n(97),E=n(149),C=n(74),N=n(398),T=n(399),F=n(403),L=n(400),O=n(218),j=n(401),D=Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"elevation-3",attrs:{"mobile-breakpoint":1024,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticStyle:{"padding-top":"0"}},[n("v-list-item",{attrs:{to:"/",router:"",exact:"",dense:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(t.icons.apps))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("site.index")))])],1)],1),t._v(" "),t._l(t.nav_items,(function(e,i){return n("v-list-item",{key:i,attrs:{href:e.to,target:"_blank",rel:"noreferrer",router:"",exact:"",dense:""}},[n("v-list-item-action",[n("v-img",{staticStyle:{width:"24px"},attrs:{src:e.icon}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2),t._v(" "),"zh"===t.current_locale?n("div",[n("v-divider"),t._v(" "),n("v-list",t._l(t.external_cn,(function(e){return n("v-list-item",{key:e.to,attrs:{dense:"",href:e.to,target:"_blank",rel:"noreferrer"}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(t.icons[e.icon]))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-list",[n("v-list-item",{attrs:{dense:"",to:"/links",router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(t.icons.play_list_star))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("site.links")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{dense:"",to:"/about",router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(t.icons.code_tags))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("site.about")))])],1)],1)],1)],1),t._v(" "),n("v-app-bar",{staticClass:"primary white--text",class:[this.$vuetify.theme.dark?"gradient-header-dark":"gradient-header-light"],attrs:{dense:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.$t("site.title"))}}),t._v(" "),n("v-img",{staticStyle:{"max-width":"30px","margin-left":"6px"},attrs:{src:"/img/header.png"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"white--text",attrs:{icon:""},on:{click:function(e){return t.switch_dark()}}},o),[n("v-icon",[t._v(t._s(t.icons.brightness))])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("site.switch_dark_mode")))])]),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var menu=e.on;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"white--text",attrs:{icon:""}},Object.assign({},o,menu)),[n("v-icon",[t._v(t._s(t.icons.translate))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("site.switch_language")))])])]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{id:"lang-switch-zh"},on:{click:function(e){return t.switch_lang("zh")}}},[n("v-list-item-title",[t._v("简体中文")])],1),t._v(" "),n("v-list-item",{attrs:{id:"lang-switch-ja"},on:{click:function(e){return t.switch_lang("ja")}}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{id:"lang-switch-en"},on:{click:function(e){return t.switch_lang("en")}}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"page"},[n("nuxt")],1),t._v(" "),n("v-footer",{staticClass:"footer",attrs:{fixed:!1}},[n("div",[n("div",{staticStyle:{"vertical-align":"middle"}},[n("span",[t._v("© "+t._s((new Date).getFullYear())+" ")]),t._v(" "),n("span",[n("a",{attrs:{href:"https://github.com/lonelyion",target:"_blank",rel:"noreferrer"}},[t._v("\n              "+t._s(t.$t("site.footer.lonely_ion"))+"\n            ")])]),t._v(" "),n("span",[t._v("\n            &\n            "),n("a",{attrs:{href:"https://github.com/oruyanke",target:"_blank",rel:"noreferrer"}},[t._v("\n              "+t._s(t.$t("site.footer.oruyanke"))+"\n            ")])]),t._v(" "),n("v-btn",{staticStyle:{"vertical-align":"middle"},attrs:{icon:"",href:"https://github.com/oruyanke/kanata-button",target:"_blank",rel:"noreferrer"}},[n("v-icon",[t._v(t._s(t.icons.github))])],1)],1),t._v(" "),n("div",[n("span",[t._v("Powered by GitHub Pages")])]),t._v(" "),n("div",[n("p",[t._v(t._s(t.$t("site.footer.content")))]),t._v(" "),"zh"===t.$i18n.locale?n("p",{staticStyle:{"font-size":"12px"}}):t._e()])])])],1),t._v(" "),n("console-message")],1)}),[],!1,null,null,null);e.a=D.exports;_()(D,{VApp:f.a,VAppBar:m.a,VAppBarNavIcon:h.a,VBtn:w.a,VContainer:k.a,VDivider:y.a,VFooter:x.a,VIcon:S.a,VImg:$.a,VList:A.a,VListItem:V.a,VListItemAction:E.a,VListItemContent:C.a,VListItemTitle:C.b,VMain:N.a,VMenu:T.a,VNavigationDrawer:F.a,VSpacer:L.a,VToolbarTitle:O.a,VTooltip:j.a})},229:function(t,e,n){t.exports=n(230)},251:function(t,e,n){"use strict";n.r(e);n(51),n(47),n(36),n(26);e.default=function(t){var e=t.isHMR,n=t.app,o=t.store;if(!e){0;var r=n.i18n.fallbackLocale,l=navigator.language.replace("-","_").toLowerCase().split("_")[0];n.i18n.availableLocales.includes(l)&&(r=l);var c=null,v=localStorage.getItem("locale");v?c=v:(c=r,localStorage.setItem("locale",c)),o.commit("SET_LANG",c),n.i18n.locale=o.state.locale;var d=!1,_=localStorage.getItem("dark");_?d=_:localStorage.setItem("dark",d),o.commit("SET_DARK",d)}}},262:function(t,e,n){"use strict";n(188)},265:function(t,e,n){"use strict";n(190)},299:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));n(36),n(26);var o=function(){return{locales:["en","ja","zh"],locale:"zh",dark:!1}},r={SET_LANG:function(t,e){t.locales.includes(e)&&(t.locale=e,localStorage.setItem("locale",t.locale))},SET_DARK:function(t,e){t.dark=e,localStorage.setItem("dark",t.dark)}}},376:function(t){t.exports=JSON.parse('{"site":{"title":"Kanata Button","description":"Brand-new voice buttons for Amane Kanata, we are aimming at building a comprehensive project related to Amane Kanata.\\n","index":"Home","links":"Links","about":"About","switch_dark_mode":"Switch Dark Mode","switch_language":"Switch Language","footer":{"lonely_ion":"AmaneKanata Pottery Factory","oruyanke":"Oruyanke Team","content":"This site is a fan work and is not associated with the Hololive official. For staff and more information, please see \\"About\\" page."}},"live":{"activity":"Live Board","schedule":"Scheduled at ","on_air":"LIVE NOW","loading":"Fetching live data...","no_schedule":"No scheduled live is found.","notification":"Glad to meet you @Kanata Button"},"control":{"self":"Player Control","pick_one":"Randomly Pick One","stop":"Stop Playing","enabled":"Enabled","disabled":"Disabled","overlap":"Overlap Mode","random":"Random Mode","repeat":"Repeat Mode","full_name":"Amane Kanata","overlap_title":"Multiple Kanata Voices"},"dev":{"title":"Development Mode","desc":"Dev mode may contains errors or vulnerability. We absolutely DO NOT guarantee any support and warranty. The actual new features are subject to the official version being launched.","to_stable":"Return to Official version"}}')},377:function(t){t.exports=JSON.parse('{"site":{"title":"かなたんボタン","description":"新生かなたんボタンサイトへようこそ！かなたんの総合ファンページを目指しますー","index":"ホームページ","links":"友情リンク","about":"について","switch_dark_mode":"ナイトモードスイッチ","switch_language":"言語を切り替える","footer":{"lonely_ion":"天音彼方陶芸工場","oruyanke":"おるやんけ組","content":"このサイトはファン作品であり、公式とは関係ありません。STAFFリストとプロジェクト参加方式は「について」ページをご覧ください。"}},"live":{"activity":"ライブ ストリーム","schedule":"予定","on_air":"ライブ配信中","loading":"生放送で取得中···","no_schedule":"まだ計画中の生放送は発見されていません。","notification":"今はまだ建設中！。"},"control":{"self":"コントロール","pick_one":"ランダム再生","stop":"再生停止","enabled":"有効","disabled":"無効","overlap":"音声を重ねる","random":"自動ランダム再生","repeat":"ループ","full_name":"天音かなた","overlap_title":"重なるかなたん音声"},"dev":{"title":"開発モードのWebサイトにアクセスしています","desc":"開発モードでは、かなたんボタンのベータ版に脆弱性、エラー、またはその他の問題が含まれる場合があります。 私たちはサポートを提供しておらず、問題または誤動作に対する明示的または黙示的な保証または補償を提供していません。实际新功能以正式版上线为准。","to_stable":"公式ページへ"}}')},378:function(t){t.exports=JSON.parse('{"site":{"title":"彼方碳按钮","description":"新生彼方碳按钮，绝赞持续建设中~","index":"主页","links":"友情链接","about":"关于","switch_dark_mode":"夜间模式开关","switch_language":"切换语言","footer":{"lonely_ion":"天音彼方陶碗工厂","oruyanke":"御宅白狐的狐笋之林","content":"本站为爱好者作品，和Hololive官方没有关联，STAFF名单以及项目参与方式请查看\\"关于\\"页面"}},"live":{"activity":"直播动态","schedule":"计划","on_air":"正在直播","loading":"直播动态获取中...","no_schedule":"还没有发现正在或计划中的直播","notification":"天音彼方陶碗工厂招新中~翻轴校有能man快到碗里来!"},"control":{"self":"播放控制","pick_one":"帮我选一个","stop":"停止","enabled":"开启","disabled":"关闭","overlap":"重叠播放","random":"随机播放","repeat":"洗脑循环","full_name":"天音彼方","overlap_title":"多重狐狸"},"dev":{"title":"您正在访问开发模式的站点","desc":"开发模式下，天按钮的测试版可能包含漏洞、错误或其他问题。开发模式由GitHub仓库的dev分支提供，我们不提供任何支持，对任何问题或故障也不提供任何明示或暗示保证或赔偿。实际新功能以正式版上线为准。","to_stable":"点此转到正式版页面"}}')},65:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(262),n(55)),l=n(104),c=n.n(l),v=n(393),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"39ae9f7d",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[229,5,1,6]]]);