(window.webpackJsonp=window.webpackJsonp||[]).push([["a074"],{"/TvZ":function(e,t,a){"use strict";a.d(t,"a",function(){return v});var n=a("kOwS"),r=a("p0XB"),c=a.n(r),l=a("q1tI"),i=a.n(l),s=a("4MG8"),m=a.n(s),u=a("fh6R"),o=a("zzrc"),d=a("IH1Y"),f=a("L6NH");function E(e){return{name:i.a.createElement("span",{className:"skill-name"},e.name),content:i.a.createElement("div",{className:"skill-content"},c()(e.description)?e.description.map(function(e,t){return i.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:m()(e)}})}):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:m()(e.description)}}))}}function p(e){var t=e.title,a=e.skills;return i.a.createElement(o.a,{id:"skills"},i.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(f.a)(t)}}),a&&i.a.createElement(d.a,{className:"skills",items:a.map(E)}))}function v(e){var t=u.a.skills||[];return i.a.createElement(p,Object(n.a)({title:"Skills",skills:t},e))}},"5Km9":function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a("kOwS"),r=a("p0XB"),c=a.n(r),l=a("q1tI"),i=a.n(l),s=a("fh6R"),m=a("zzrc"),u=a("L6NH"),o=a("IH1Y");function d(e){return{name:i.a.createElement("span",{className:"service-name"},e.name),content:i.a.createElement("div",{className:"service-content"},c()(e.content)?e.content.map(function(e,t){return i.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:Object(u.a)(e)}})}):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(u.a)(e.content)}}))}}function f(e){var t=e.title,a=e.services;return i.a.createElement(m.a,{id:"services"},i.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(u.a)(t)}}),a&&i.a.createElement(o.a,{className:"services",items:a.map(d)}))}function E(e){var t=s.a.services||[];return i.a.createElement(f,Object(n.a)({title:e.title||"Services",services:t},e))}},"9wk7":function(e,t,a){"use strict";a.d(t,"a",function(){return N});var n=a("kOwS"),r=a("0iUn"),c=a("sLSF"),l=a("MI3g"),i=a("a7VT"),s=a("Tit0"),m=a("p0XB"),u=a.n(m),o=a("q1tI"),d=a.n(o),f=a("2nGb"),E=a("zzrc"),p=a("OTPt"),v=(a("JH8K"),a("L6NH"));function h(e){var t=e.address;return u()(t)?d.a.createElement("div",{className:"address"},t.map(function(e,t){return d.a.createElement(d.a.Fragment,{key:t},e,d.a.createElement("br",null))})):d.a.createElement("div",{className:"address"},t)}var b=function(e){function t(){return Object(r.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.contact,n=e.chineseName,r=a||{},c=r.address,l=r.mobile,i=r.email,s=r.website,m=l&&(u()(l)?l:[l]);return d.a.createElement(E.a,{id:"info"},d.a.createElement("div",{className:"d-flex"},d.a.createElement("h1",{className:"mr-auto name"},t,n&&d.a.createElement("span",{className:"name-small"}," (",n,") ")),d.a.createElement("div",{className:"contact"},c&&d.a.createElement(h,{address:c}),m&&m.map(function(e,t){return d.a.createElement("div",{className:"mobile",key:t},d.a.createElement(p.a,{icon:"phone"}),e)}),i&&d.a.createElement("div",{className:"email"},d.a.createElement(p.a,{icon:"envelope"}),d.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(v.a)(i)}})),s&&d.a.createElement("div",{className:"website"},d.a.createElement(p.a,{icon:"home"}),d.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(v.a)(s)}})))))}}]),t}(d.a.Component);function N(e){var t=f.a.info,a=t.name,r=t.chinese_name,c=t.contact;return d.a.createElement(b,Object(n.a)({name:a,contact:c,chineseName:r},e))}},IH1Y:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("0iUn"),r=a("sLSF"),c=a("MI3g"),l=a("a7VT"),i=a("Tit0"),s=a("q1tI"),m=a.n(s);a("9QGv");function u(e){var t=e.name,a=e.content;return m.a.createElement("tr",null,m.a.createElement("td",{className:"cv-left"},t),m.a.createElement("td",{className:"cv-content"},a))}var o=function(e){function t(){return Object(n.default)(this,t),Object(c.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.className,n=e.style;return m.a.createElement("table",{className:"cv-table ".concat(a),style:n},m.a.createElement("tbody",null,t.map(function(e,t){return m.a.createElement(u,{name:e.name,content:e.content,key:t})})))}}]),t}(m.a.Component)},KDze:function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a("kOwS"),r=a("0iUn"),c=a("sLSF"),l=a("MI3g"),i=a("a7VT"),s=a("Tit0"),m=a("q1tI"),u=a.n(m),o=a("4MG8"),d=a.n(o),f=a("zzrc"),E=a("wd/R"),p=a("fh6R"),v=a("L6NH"),h=a("IH1Y");a("O5Kp");function b(e,t){var a=E(e,E.ISO_8601,!1);return a.isValid()?a.format("MMM YYYY"):t}var N=function(e){function t(){return Object(r.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.experiences,n=e.detail,r=e.simplifiedContent;e.academic;return u.a.createElement(f.a,{id:"experiences"},u.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(v.a)(t)}}),a&&u.a.createElement(h.a,{className:"experiences",items:a.map(function(e){return function(e){var t=e.experience,a=e.detail,n=e.simplifiedContent,r=t.job;t.advisor&&(r="".concat(r," (advised by ").concat(t.advisor,")"));var c=u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"date-from"},b(t.from,t.from)),u.a.createElement("span",{className:"date-to"}," - ",b(t.to,t.to))),l=n&&t.content_simplified||t.content;return{name:c,content:u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("span",{className:"institute",dangerouslySetInnerHTML:{__html:Object(v.a)(t.company)}}),t.location),u.a.createElement("div",null,u.a.createElement("span",{className:"title",dangerouslySetInnerHTML:{__html:Object(v.a)(r)}}),t.department&&u.a.createElement(u.a.Fragment,null,", ",u.a.createElement("span",{className:"department",dangerouslySetInnerHTML:{__html:Object(v.a)(t.department)}}))),a&&l&&u.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:d()(l)}}))}}({experience:e,detail:n,simplifiedContent:r})})}))}}]),t}(u.a.Component);function _(e){var t=p.a.experience||[];e.minWeight&&(t=t.filter(function(t){return t.weight&&t.weight>=e.minWeight})),e.academic&&(t=t.filter(function(e){return void 0===e.academic||e.academic}));return u.a.createElement(N,Object(n.a)({title:"Research / Work Experience",experiences:t},e))}},L5su:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a("kOwS"),r=a("q1tI"),c=a.n(r),l=a("L6NH"),i=a("Wc4G"),s=a("fh6R");function m(e){var t=e.papers,a=e.title,n=e.description,r=e.academic,s={};return t.forEach(function(e){return s[e.name]=e}),c.a.createElement("section",{id:"publication"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,a||"Publications"),n&&c.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(l.a)(n)}}),t.map(function(e,t){return c.a.createElement(i.a,{className:"ml-2",publication:e,key:t,academic:r})})))}function u(e){var t=s.a.papers||[];return e.minWeight&&(t=t.filter(function(t){return t.weight&&t.weight>=e.minWeight})),e.sort&&t.sort(function(e,t){return(t.weight||0)-(e.weight||0)}),c.a.createElement(m,Object(n.a)({title:e.title||"Publications",papers:t},e))}},LN78:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("2nGb"),l=a("0iUn"),i=a("sLSF"),s=a("MI3g"),m=a("a7VT"),u=a("Tit0"),o=a("wd/R"),d=a("m/Pd"),f=a.n(d),E=a("L6Je"),p=a("KDze"),v=a("rbqd"),h=a("L5su"),b=a("PGOU"),N=a("9wk7"),_=a("Viqe"),O=a("5Km9"),g=a("/TvZ"),j=a("MMYm"),y=(a("5UVL"),function(e){function t(){return Object(l.default)(this,t),Object(s.default)(this,Object(m.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=o();return r.a.createElement(E.a,{lastUpdated:e},r.a.createElement("article",null,r.a.createElement("div",{className:"vita"},r.a.createElement(f.a,null),r.a.createElement(N.a,null),r.a.createElement(b.a,null),r.a.createElement(p.a,{detail:!0,academic:!0,minWeight:2,simplifiedContent:!0}),r.a.createElement(h.a,{academic:!0,minWeight:2}),r.a.createElement(j.a,null),r.a.createElement(v.a,{content:!0,minWeight:2}),r.a.createElement(_.a,{minWeight:1}),r.a.createElement(O.a,null),r.a.createElement(g.a,null))))}}]),t}(r.a.Component));t.default=function(){return n.createElement(y,{config:c.a})}},MMYm:function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a("kOwS"),r=a("q1tI"),c=a.n(r),l=a("4MG8"),i=a.n(l),s=a("fh6R"),m=a("zzrc"),u=a("IH1Y"),o=a("L6NH");function d(e){return{name:c.a.createElement("span",{className:"skill-name"},e.name),content:c.a.createElement("div",{className:"skill-content"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:i()(e.description)}}))}}function f(e){var t=e.title,a=e.software;return c.a.createElement(m.a,{id:"skills"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(o.a)(t)}}),a&&c.a.createElement(u.a,{className:"skills",items:a.map(d)}))}function E(e){var t=s.a.software||[];return c.a.createElement(f,Object(n.a)({title:"Software",software:t},e))}},PGOU:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a("kOwS"),r=a("q1tI"),c=a.n(r),l=a("4MG8"),i=a.n(l),s=a("fh6R"),m=a("zzrc"),u=a("wd/R"),o=a("L6NH"),d=a("IH1Y");a("3HxJ");function f(e,t){var a=u(e,u.ISO_8601,!1);return a.isValid()?a.format("MMM YYYY"):t}function E(e){var t=e.title,a=e.educations,n=a&&a.map(function(e){return{name:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"date-from"},f(e.from,e.from)),c.a.createElement("span",{className:"date-to"}," - ",f(e.to,e.to))),content:c.a.createElement("div",null,c.a.createElement("span",{className:"degree",dangerouslySetInnerHTML:{__html:Object(o.a)(e.degree)}}),c.a.createElement("br",null),c.a.createElement("span",{className:"institute",dangerouslySetInnerHTML:{__html:Object(o.a)(e.university)}}),e.location,c.a.createElement("br",null),c.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:i()(e.content)}}))}});return c.a.createElement(m.a,{id:"education"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(o.a)(t)}}),a&&c.a.createElement(d.a,{items:n,className:"educations"}))}function p(e){var t=s.a.education||[];return c.a.createElement(E,Object(n.a)({title:"Education",educations:t},e))}},Svza:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vita",function(){var e=a("LN78");return{page:e.default||e}}])},Viqe:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a("kOwS"),r=a("q1tI"),c=a.n(r),l=a("fh6R"),i=a("zzrc"),s=a("wd/R"),m=a("L6NH"),u=a("IH1Y");a("SzE6");function o(e){var t,a,n;return{name:c.a.createElement("span",{className:"talk-date"},(t=e.date,((n=s(t,s.ISO_8601,!1)).isValid()?n.format("MMM YYYY"):a)||e.date)),content:c.a.createElement("div",null,c.a.createElement("div",{className:"talk-title",dangerouslySetInnerHTML:{__html:Object(m.a)(e.title)}}),c.a.createElement("div",null,c.a.createElement("span",{className:"talk-venue"},e.venue,e.location?", ":"."),e.location&&c.a.createElement("span",{className:"talk-location"},e.location,".")))}}function d(e){var t=e.title,a=e.talks;return c.a.createElement(i.a,{id:"talks"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(m.a)(t)}}),a&&c.a.createElement(u.a,{className:"talks",items:a.map(o)}))}function f(e){var t=l.a.talks||[];return e.minWeight&&(t=t.filter(function(t){return t.weight&&t.weight>=e.minWeight})),c.a.createElement(d,Object(n.a)({title:e.title||"Invited Talks",talks:t},e))}},Wc4G:function(e,t,a){"use strict";var n=a("qNsG"),r=a("q1tI"),c=a.n(r),l=a("L6NH");a("4/Qh");function i(e){var t=e.publication,a=e.className,n=e.style;return c.a.createElement("div",{className:"pub mb-4 ".concat(a),style:n},c.a.createElement("div",{className:"shadow-sm rounded px-3 py-1 row no-gutters"},c.a.createElement("div",{className:"pub-teaser-container mx-auto col-10 col-md-3 col-sm-4 py-2"},t.teaser?c.a.createElement("a",{href:t.link},c.a.createElement("img",{src:Object(l.b)(".".concat(t.teaser)),className:"pub-teaser"})):c.a.createElement("a",{href:t.link},c.a.createElement("p",{className:"pub-teaser",dangerouslySetInnerHTML:{__html:t.short&&Object(l.a)(t.short)||""}}))),c.a.createElement("div",{className:"pub-info col-12 col-md-9 col-sm-8 py-1"},c.a.createElement("h5",null,c.a.createElement("a",{href:t.link,className:"pub-title",dangerouslySetInnerHTML:{__html:Object(l.a)(t.title)}})),c.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(l.a).join(", ")+"."}}),c.a.createElement("div",{className:"pub-venue"},c.a.createElement("span",null,c.a.createElement("span",{className:"pub-venue-type"},t.venue.tag),t.venue.title,", ",t.date,t.note&&c.a.createElement("span",null," (",c.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(t.note)}}),")"),".")),c.a.createElement("div",null,c.a.createElement("ul",null,t.resources.map(function(e,t){return c.a.createElement("li",{key:t,className:"pub-resource"},c.a.createElement("a",{href:e.url},e.type))}))))))}function s(e){var t=e.publication,a=e.className,n=e.style,r=e.academic?t.cv_note_academic:t.cv_note;return r=void 0===r?t.cv_note:r,c.a.createElement("div",{className:"pub pt-1 pb-2 ".concat(a),style:n},c.a.createElement("div",{className:"pub-info"},c.a.createElement("h5",null,c.a.createElement("span",{className:"pub-title",dangerouslySetInnerHTML:{__html:Object(l.a)(t.title)}})),c.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(l.a).join(", ")+"."}}),c.a.createElement("div",{className:"pub-venue"},c.a.createElement("span",null,c.a.createElement("i",null,t.venue.title),", ",t.date,".")),r&&c.a.createElement("div",{className:"pub-note"},"[",c.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(r)}}),"]")))}t.a=function(e){var t=e.detail,a=Object(n.a)(e,["detail"]),r=t?i:s;return c.a.createElement(r,a)}},rbqd:function(e,t,a){"use strict";a.d(t,"a",function(){return N});var n=a("kOwS"),r=a("0iUn"),c=a("sLSF"),l=a("MI3g"),i=a("a7VT"),s=a("Tit0"),m=a("q1tI"),u=a.n(m),o=a("4MG8"),d=a.n(o),f=a("zzrc"),E=a("wd/R"),p=a("fh6R"),v=a("L6NH"),h=(a("jdU2"),a("IH1Y"));var b=function(e){function t(){return Object(r.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.minWeight,n=e.content,r=a?this.props.awards.filter(function(e){return e.weight&&e.weight>=a}):this.props.awards;return u.a.createElement(f.a,{id:"awards"},u.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(v.a)(t)}}),r&&u.a.createElement(h.a,{className:"awards",items:r.map(function(e){return function(e,t){return{name:u.a.createElement("span",{className:"award-date"},(a=e.date,n=e.date,r=E(a,E.ISO_8601,!1),r.isValid()?r.format("YYYY"):n)),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"award-title",dangerouslySetInnerHTML:{__html:Object(v.a)(e.name)}}),t&&e.content&&u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("div",{className:"award-content",dangerouslySetInnerHTML:{__html:d()(e.content)}})))};var a,n,r}(e,n)})}))}}]),t}(u.a.Component);function N(e){var t=p.a.awards||[],a=e.title||"Honors and Awards";return u.a.createElement(b,Object(n.a)({title:a,awards:t},e))}},zzrc:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("qNsG"),r=a("q1tI"),c=a.n(r);function l(e){var t=e.children,a=Object(n.a)(e,["children"]);return c.a.createElement("section",a,c.a.createElement("div",{className:"container"},t))}}},[["Svza","5d41","9da1","ad9d"]]]);