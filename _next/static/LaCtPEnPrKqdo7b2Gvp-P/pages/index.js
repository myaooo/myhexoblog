(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{H0SL:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("cMU6");return{page:e.default||e}}])},KDze:function(e,t,a){"use strict";a.d(t,"a",function(){return v});var n=a("kOwS"),r=a("0iUn"),l=a("sLSF"),c=a("MI3g"),i=a("a7VT"),s=a("Tit0"),u=a("q1tI"),m=a.n(u),o=(a("n25B"),a("zzrc")),d=a("wd/R"),p=a("fh6R"),f=a("L6NH");a("O5Kp");function E(e,t){var a=d(e,d.ISO_8601,!1);return a.isValid()?a.format("MMM YYYY"):t}function b(e){var t=e.experience,a=t.job;return t.advisor&&(a="".concat(a," (advised by ").concat(t.advisor,")")),m.a.createElement("tr",null,m.a.createElement("td",{className:"date"},m.a.createElement("span",{className:"date-from"},E(t.from,t.from)),m.a.createElement("span",{className:"date-to"},E(t.to,t.to))),m.a.createElement("td",{className:"content"},m.a.createElement("span",{className:"institute",dangerouslySetInnerHTML:{__html:Object(f.a)(t.company)}}),t.location,m.a.createElement("br",null),m.a.createElement("span",{className:"title",dangerouslySetInnerHTML:{__html:Object(f.a)(a)}}),t.department&&m.a.createElement(m.a.Fragment,null,", ",m.a.createElement("span",{className:"department",dangerouslySetInnerHTML:{__html:Object(f.a)(t.department)}}))))}var h=function(e){function t(){return Object(r.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.experiences;return m.a.createElement(o.a,{id:"experiences"},m.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(f.a)(t)}}),a&&m.a.createElement("table",{className:"experiences"},m.a.createElement("tbody",null,a.map(function(e,t){return m.a.createElement(b,{experience:e,key:t})}))))}}]),t}(m.a.Component);function v(e){var t=p.a.experience||[];return m.a.createElement(h,Object(n.a)({title:"Research / Work Experience",experiences:t},e))}},RgYz:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("kOwS"),r=a("q1tI"),l=a.n(r),c=(a("blYf"),a("L6NH")),i=a("Wc4G"),s=a("fh6R");function u(e){var t=e.publications,a=e.title,n=e.description,s=e.isSubCategory;return l.a.createElement(r.Fragment,null,s?l.a.createElement("h5",null,a):l.a.createElement("h4",null,a),n&&l.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(c.a)(n)}}),t&&t.length>0&&l.a.createElement("div",null,t.map(function(e,t){return l.a.createElement(i.a,{publication:e,key:t,detail:!0})})))}function m(e){var t=e.research,a=e.papers,n=e.title,i=e.description,s={};return a.forEach(function(e){return s[e.name]=e}),l.a.createElement("section",{id:"research"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,n||"Research"),i&&l.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(c.a)(i)}}),t.map(function(e,t){return l.a.createElement(r.Fragment,{key:t},l.a.createElement(u,{title:e.title,description:e.description,publications:e.publications&&e.publications.map(function(e){return s[e]})}),e.categories&&e.categories.map(function(e,t){return l.a.createElement(u,{key:t,title:"".concat(t+1,". ").concat(e.title),description:e.description,publications:e.publications&&e.publications.map(function(e){return s[e]}),isSubCategory:!0})}))})))}function o(e){var t=s.a.research||[],a=s.a.papers||[];return l.a.createElement(m,Object(n.a)({title:"Featured Research",research:t,papers:a},e))}},Wc4G:function(e,t,a){"use strict";var n=a("qNsG"),r=a("q1tI"),l=a.n(r),c=(a("4/Qh"),a("L6NH"));function i(e){var t=e.publication;return l.a.createElement("div",{className:"pub mb-4"},l.a.createElement("div",{className:"shadow-sm rounded px-3 py-1 row no-gutters"},l.a.createElement("div",{className:"pub-teaser-container mx-auto col-10 col-md-3 col-sm-4 py-2"},t.teaser?l.a.createElement("img",{src:t.teaser,className:"pub-teaser"}):l.a.createElement("a",null,l.a.createElement("p",{className:"pub-teaser",dangerouslySetInnerHTML:{__html:t.short&&Object(c.a)(t.short)||""}}))),l.a.createElement("div",{className:"pub-info col-12 col-md-9 col-sm-8 py-2"},l.a.createElement("h5",null,l.a.createElement("a",{href:t.link,className:"pub-title",dangerouslySetInnerHTML:{__html:Object(c.a)(t.title)}})),l.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(c.a).join(", ")+"."}}),l.a.createElement("div",{className:"pub-venue"},l.a.createElement("span",null,l.a.createElement("span",{className:"pub-venue-type"},t.venue.tag),t.venue.title,", ",t.date,t.note&&l.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(t.note)}}),".")),l.a.createElement("div",null,l.a.createElement("ul",null,t.resources.map(function(e,t){return l.a.createElement("li",{key:t,className:"pub-resource"},l.a.createElement("a",{href:e.url},e.type))}))))))}function s(e){var t=e.publication;return l.a.createElement("div",{className:"pub mt-3 mb-1"},l.a.createElement("div",{className:"pub-info"},l.a.createElement("h5",null,l.a.createElement("span",{className:"pub-title",dangerouslySetInnerHTML:{__html:Object(c.a)(t.title)}})),l.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(c.a).join(", ")+"."}}),l.a.createElement("div",{className:"pub-venue"},l.a.createElement("span",null,l.a.createElement("i",null,t.venue.title),", ",t.date,t.note&&l.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(t.note)}}),"."))))}t.a=function(e){var t=e.detail,a=Object(n.a)(e,["detail"]),r=t?i:s;return l.a.createElement(r,a)}},cMU6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("2nGb"),c=a("0iUn"),i=a("sLSF"),s=a("MI3g"),u=a("a7VT"),m=a("Tit0"),o=a("L6Je"),d=a("ohJJ"),p=a("iRy+"),f=a("RgYz"),E=a("KDze"),b=a("rbqd"),h=function(e){function t(){return Object(c.default)(this,t),Object(s.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(d.a,null),r.a.createElement(p.a,null),r.a.createElement(f.a,null),r.a.createElement(E.a,null),r.a.createElement(b.a,null))}}]),t}(r.a.Component);t.default=function(){return n.createElement(h,{config:l.a})}},"iRy+":function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a("kOwS"),r=a("zrwo"),l=a("0iUn"),c=a("sLSF"),i=a("MI3g"),s=a("a7VT"),u=a("Tit0"),m=a("q1tI"),o=a.n(m),d=a("DlQD"),p=a.n(d),f=a("fh6R"),E=(a("n25B"),a("zzrc")),b=a("wd/R"),h=b().subtract(12,"months"),v=function(e){function t(){return Object(l.default)(this,t),Object(i.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.news;return o.a.createElement(E.a,{id:"news"},o.a.createElement("h2",{dangerouslySetInnerHTML:{__html:p()(t)}}),o.a.createElement("ul",{className:"news"},a.map(function(e){return Object(r.a)({},e,{date:b(e.date)})}).sort(function(e,t){return t.date-e.date}).slice(0,8).filter(function(e){return e.date>h}).map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("span",{className:"news-date"},e.date.format("MMM YYYY"),".  "),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:p.a.inlineLexer(e.content,[])}}))})))}}]),t}(o.a.Component);function _(e){var t=f.a.news||[];return o.a.createElement(v,Object(n.a)({title:"News",news:t},e))}},ohJJ:function(e,t,a){"use strict";var n=a("kOwS"),r=a("q1tI"),l=a.n(r),c=a("DlQD"),i=a.n(c),s=a("2nGb"),u=(a("X3CP"),a("xdRC"));function m(e){var t=e.info;return l.a.createElement("section",{className:"m-info",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-5 col-8 mx-auto mt-2",style:{textAlign:"center"}},l.a.createElement("div",{className:"profile-wrapper"},l.a.createElement("a",{href:t.profile_img},l.a.createElement("img",{src:t.profile_img,alt:""}))),l.a.createElement("div",{className:"mt-2"},l.a.createElement(u.a,{detail:!0}))),l.a.createElement("div",{className:"col-lg-9 col-md-8 col-sm-7 col-12"},l.a.createElement("h2",{dangerouslySetInnerHTML:{__html:i.a.inlineLexer(t.full_name,[])}}),t.job_title&&l.a.createElement("h5",{dangerouslySetInnerHTML:{__html:i.a.inlineLexer(t.job_title,[])}}),t.affiliation&&l.a.createElement("h5",{dangerouslySetInnerHTML:{__html:i.a.inlineLexer(t.affiliation,[])}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i()(t.about)}})))))}t.a=Object(s.b)(function(e){var t=e.config.info;return l.a.createElement(m,Object(n.a)({info:t},e))})},rbqd:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a("kOwS"),r=a("0iUn"),l=a("sLSF"),c=a("MI3g"),i=a("a7VT"),s=a("Tit0"),u=a("q1tI"),m=a.n(u),o=(a("n25B"),a("zzrc")),d=a("wd/R"),p=a("fh6R"),f=a("L6NH");a("jdU2");function E(e){var t,a,n,r=e.award;return m.a.createElement("tr",null,m.a.createElement("td",{className:"date"},m.a.createElement("span",{className:"award-date"},(t=r.date,a=r.date,(n=d(t,d.ISO_8601,!1)).isValid()?n.format("YYYY"):a))),m.a.createElement("td",{className:"content"},m.a.createElement("span",{className:"award-name",dangerouslySetInnerHTML:{__html:Object(f.a)(r.name)}}),r.content&&m.a.createElement(m.a.Fragment,null,m.a.createElement("br",null),m.a.createElement("span",{className:"award-content",dangerouslySetInnerHTML:{__html:Object(f.a)(r.content)}}))))}var b=function(e){function t(){return Object(r.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.awards;return m.a.createElement(o.a,{id:"awards"},m.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(f.a)(t)}}),a&&m.a.createElement("table",{className:"awards"},m.a.createElement("tbody",null,a.map(function(e,t){return m.a.createElement(E,{award:e,key:t})}))))}}]),t}(m.a.Component);function h(e){var t=p.a.awards||[];return m.a.createElement(b,Object(n.a)({title:"Honors and Awards",awards:t},e))}},zzrc:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("qNsG"),r=a("q1tI"),l=a.n(r);function c(e){var t=e.children,a=Object(n.a)(e,["children"]);return l.a.createElement("section",a,l.a.createElement("div",{className:"container"},t))}}},[["H0SL","5d41","9da1","ad9d"]]]);