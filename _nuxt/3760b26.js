(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{505:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iI0M0QzRDNCIvPgo8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI1IiBmaWxsPSIjMUU5NkM4Ii8+CjxwYXRoIGQ9Ik01LjI3MTg2IDE0LjUxMjFDNy4xMTMzMiAxMy41NTk2IDkuMTY4ODcgMTIuNzY0NiAxMS4wODk1IDExLjk2NTVDMTQuMzkzNyAxMC42NTY2IDE3LjcxMSA5LjM3MDQ1IDIxLjA2MTggOC4xNzMwNUMyMS43MTM3IDcuOTY5MDQgMjIuODg1MSA3Ljc2OTU1IDIzIDguNjc2ODRDMjIuOTM3MSA5Ljk2MTE2IDIyLjY3ODMgMTEuMjM3OSAyMi41MDA5IDEyLjUxNDdDMjIuMDUwNSAxNS4zMjI1IDIxLjUyOTggMTguMTIwNyAyMS4wMjIxIDIwLjkxOTJDMjAuODQ3MiAyMS44NTE1IDE5LjYwMzggMjIuMzM0IDE4LjgwODEgMjEuNzM3NEMxNi44OTYxIDIwLjUyNDUgMTQuOTY5MyAxOS4zMjM0IDEzLjA4MTYgMTguMDgyNEMxMi40NjMzIDE3LjQ5MjMgMTMuMDM2NyAxNi42NDQ5IDEzLjU4ODkgMTYuMjIzNkMxNS4xNjM4IDE0Ljc2NiAxNi44MzM5IDEzLjUyNzcgMTguMzI2NCAxMS45OTQ5QzE4LjcyOTEgMTEuMDgxOSAxNy41Mzk1IDExLjg1MTMgMTcuMTQ3MSAxMi4wODcxQzE0Ljk5MTEgMTMuNDgyNCAxMi44ODc5IDE0Ljk2MjggMTAuNjE0OCAxNi4xODkxQzkuNDUzNzYgMTYuNzg5MyA4LjEwMDQ5IDE2LjI3NjQgNi45Mzk5NCAxNS45NDE0QzUuODk5MzcgMTUuNTM2OCA0LjM3NDUzIDE1LjEyOTIgNS4yNzE3NiAxNC41MTIzTDUuMjcxODYgMTQuNTEyMVoiIGZpbGw9IiNGOEY4RjgiLz4KPC9zdmc+Cg=="},506:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzE4NzdGMiIvPgo8cGF0aCBkPSJNMjAuNTkxNSAxOS4wMjczTDIxLjIzNDQgMTQuODM1OUgxNy4yMTI5VjEyLjExNzJDMTcuMjEyOSAxMC45NzAyIDE3Ljc3MzYgOS44NTE1NiAxOS41NzQ4IDkuODUxNTZIMjEuNDA0M1Y2LjI4MzJDMjEuNDA0MyA2LjI4MzIgMTkuNzQ0NyA2IDE4LjE1ODggNkMxNC44NDUzIDYgMTIuNjgxNiA4LjAwNzkxIDEyLjY4MTYgMTEuNjQxNFYxNC44MzU5SDlWMTkuMDI3M0gxMi42ODE2VjI5LjE2MDRDMTMuNDIwOCAyOS4yNzY1IDE0LjE3NyAyOS4zMzU5IDE0Ljk0NzMgMjkuMzM1OUMxNS43MTc2IDI5LjMzNTkgMTYuNDczNyAyOS4yNzY1IDE3LjIxMjkgMjkuMTYwNFYxOS4wMjczSDIwLjU5MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},507:function(t,e,n){t.exports=n.p+"img/Instagram.0720a1b.svg"},521:function(t,e,n){"use strict";n.r(e);var l=n(8),M=(n(70),n(65)),c=n(314),r={name:"NewsPage",components:{},data:function(){return{visitor:""}},fetch:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,M,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=t.store,M=t.error,c=t.params,n.prev=1,n.next=4,l.dispatch("allData/fetchSettings");case 4:return n.next=6,l.dispatch("allData/fetchMenuItems");case 6:return n.next=8,l.dispatch("allData/fetchSocialItems");case 8:return n.next=10,l.dispatch("allData/fetchLatestNews");case 10:return n.next=12,l.dispatch("allData/fetchNewsData",c.slug,e.visitor);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),M({statusCode:n.t0.statusCode,message:n.t0.message});case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))()},head:function(){return{title:"Evr.uz - ".concat(this.details.news_detail.title),meta:[{hid:"description",name:"description",content:"Evr.uz - Bosh Sahifa | O'zbekistinda birinchi raqamli Yangiliklar sayti | ".concat(this.details.news_detail.title)}]}},computed:Object(M.b)({details:function(){return this.newsData.data},newsData:function(t){return t.allData.newsData},latestNews:function(t){return t.allData.latestNews.data.last_news},baseURL:function(t){return t.allData.baseURL},socialItems:function(t){return t.allData.socialItems}}),mounted:function(){var t=this;c.a.load({apiKey:"FBCdNtsJJc6hkrHekrbS"}).then((function(t){return t.get()})).then((function(e){t.visitor=e.visitorId}))},methods:{}},d=n(67),I=n(87),D=n.n(I),o=n(481),N=n(230),j=n(482),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"news-details"},[t._v("\n  "+t._s(t.visitor)+"\n  "),l("div",{staticClass:"my-container"},[l("v-row",[l("v-col",{attrs:{md:"8"}},[l("div",{staticClass:"news-details__main"},[l("div",{staticClass:"news-details__main--top"},[l("div",{staticClass:"options"},[l("p",{staticClass:"date"},[l("v-icon",{attrs:{small:""}},[t._v("mdi-calendar-blank-outline")]),t._v(" "),l("span",[t._v(t._s(t.details.news_detail.date))])],1),t._v(" "),l("p",{staticClass:"views"},[l("v-icon",{attrs:{small:""}},[t._v("mdi-eye-outline")]),t._v(" "),l("span",[t._v(t._s(t.details.news_detail.count_view))])],1)]),t._v(" "),l("div",{staticClass:"share"},[l("span",{staticClass:"share-title"},[t._v("Ulashing")]),t._v(" "),l("a",{staticClass:"social-link",attrs:{href:"https://telegram.me/share/url?url="+t.baseURL+"/news/"+t.details.news_detail.slug,target:"_blank"}},[l("img",{attrs:{src:n(505)}})]),t._v(" "),l("a",{staticClass:"social-link",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.baseURL+"/news/"+t.details.news_detail.slug,target:"_blank"}},[l("img",{attrs:{src:n(506)}})]),t._v(" "),l("a",{staticClass:"social-link",attrs:{href:"https://www.instagram.com/sharer.php?u="+t.baseURL+"/news/"+t.details.news_detail.slug,target:"_blank"}},[l("img",{attrs:{src:n(507)}})])])]),t._v(" "),l("div",{staticClass:"news-details__main--img"},[l("img",{attrs:{src:""+t.baseURL+t.details.news_detail.image,alt:""}})]),t._v(" "),l("div",{staticClass:"news-details__main--content",domProps:{innerHTML:t._s(t.details.news_detail.content)}}),t._v(" "),l("div",{staticClass:"news-details__main--bottom"},[l("h3",[t._v(t._s(t.$t("tags")))]),t._v(" "),l("ul",{staticClass:"tags"},t._l(t.details.news_detail.tag,(function(e,i){return l("li",{key:i},[l("nuxt-link",{attrs:{to:t.localePath("/tag/"+e)}},[t._v(t._s(e))])],1)})),0)])])]),t._v(" "),l("v-col",{attrs:{md:"4"}},[l("div",{staticClass:"news-details__sidebar"},[l("div",{staticClass:"news-details__sidebar--group"},[l("h3",{staticClass:"main-title"},[t._v("So’ngi yangiliklar")]),t._v(" "),l("div",{staticClass:"main-items"},t._l(t.latestNews,(function(e,n){return l("div",{key:n,staticClass:"news-card"},[l("div",{staticClass:"img"},[l("img",{attrs:{src:""+t.baseURL+e.image,alt:e.title}})]),t._v(" "),l("div",{staticClass:"details"},[l("p",{staticClass:"details__category"},[t._v("\n                    "+t._s(e.category_id)+"\n                  ")]),t._v(" "),l("nuxt-link",{directives:[{name:"snip",rawName:"v-snip",value:{lines:3},expression:"{ lines: 3 }"}],staticClass:"details__title",attrs:{to:t.localePath("/news/"+e.slug)}},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),l("div",{staticClass:"details__options"},[l("p",{staticClass:"date"},[l("v-icon",{attrs:{small:""}},[t._v("mdi-calendar-blank-outline ")]),t._v(" "),l("span",[t._v(t._s(e.date))])],1),t._v(" "),l("p",{staticClass:"views"},[l("v-icon",{attrs:{small:""}},[t._v("mdi-eye-outline")]),t._v(" "),l("span",[t._v(t._s(e.count_view))])],1)])],1)])})),0)])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;D()(component,{VCol:o.a,VIcon:N.a,VRow:j.a})}}]);