(this.webpackJsonpbunnyghp=this.webpackJsonpbunnyghp||[]).push([[0],{18:function(t,e,o){"use strict";o.r(e);var c=o(2),r=o.n(c),n=o(7),a=o.n(n),s=o(8),u=o.n(s),i=o(1),l=o(9),p=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case"pr":return"pull";case"issue":case"i":return e?"issues":"issue";default:return""}},h=":repo(\\w+/\\w+)",m=":asset(pr|issue|i)",d=":number(\\d+)",b=function(){return[{template:"gh ".concat(":person([a-zA-Z0-9_]+)"),toUrl:function(t){var e=t.person;return"https://github.com/".concat(e)},example:"gh johndoe",desc:"Go to a person's Github profile."}]},g=function(t){return[{template:"gh me",toUrl:function(){return"https://github.com/".concat(t)},desc:"Go to your Github profile."},{template:"gh i",toUrl:function(){return"https://github.com/issues?q=is%3Aissue+is%3Aopen+author%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc")},desc:"Go to your open issues."},{template:"gh pr",toUrl:function(){return"https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc")},desc:"Go to your open pull requests."}]},f=function(t){return[{template:"gh ".concat(m," ").concat(d),toUrl:function(e){var o=e.asset,c=e.number;return"https://github.com/".concat(t,"/").concat(p(o),"/").concat(c)},example:"gh pr|i|issue 123",desc:"Go to a Github issue or pull request by number."},{template:"gh ".concat(d),toUrl:function(e){var o=e.number;return"https://github.com/".concat(t,"/issues/").concat(o)},example:"gh 123",desc:"Go to a Github issue or pull request by number."},{template:"gh r ".concat(m),toUrl:function(e){var o=e.asset;return"https://github.com/".concat(t,"/").concat(p(o,!0),"?q=is%3A").concat(p(o),"+is%3Aopen+sort%3Aupdated-desc")},example:"gh r pr|i|issue",desc:"Go to ".concat(t," open issues or pull requests.")},{template:"gh r ".concat(d),toUrl:function(e){var o=e.number;return"https://github.com/".concat(t,"/issues/").concat(o)},example:"gh r 123",desc:"Go to ".concat(t," open issue or pull request by number.")},{template:"gh r",toUrl:function(){return"https://github.com/".concat(t)},desc:"Go to ".concat(t,".")}]},j=function(){return[{template:"gh ".concat(h," ").concat(m," ").concat(d),toUrl:function(t){var e=t.repo,o=t.asset,c=t.number;return"https://github.com/".concat(e,"/").concat(p(o,!0),"/").concat(c)},example:"gh johndoe/repo pr|i|issue 123",desc:"Go to a repo's Github issue or pull request by number."},{template:"gh ".concat(h," ").concat(d),toUrl:function(t){var e=t.repo,o=t.number;return"https://github.com/".concat(e,"/issues/").concat(o)},example:"gh johndoe/repo 123",desc:"Go to a repo's Github issue or pull request by number."},{template:"gh ".concat(h," ").concat(m),toUrl:function(t){var e=t.repo,o=t.asset;return"https://github.com/".concat(e,"/").concat(p(o,!0),"?q=is%3A").concat(p(o),"+is%3Aopen+sort%3Aupdated-desc")},example:"gh johndoe/repo pr|i|issue",desc:"Go to a repo's Github issues or pull requests."},{template:"gh ".concat(h),toUrl:function(t){var e=t.repo;return"https://github.com/".concat(e)},example:"gh johndoe/repo",desc:"Go to a Github repository."}]},w=function(t){var e=t.defaultRepo,o=t.defaultPerson,c=[].concat(Object(i.a)(j()),Object(i.a)(b()));return e&&(c=[].concat(Object(i.a)(f(e)),Object(i.a)(c))),o&&(c=[].concat(Object(i.a)(g(o)),Object(i.a)(c))),[].concat(Object(i.a)(c),Object(i.a)([{template:"gh",toUrl:function(){return"https://github.com"},desc:"Go to Github."}]))},v={delimiter:" ?"},y="{ }?",x="".concat(y,":query(.+)?"),q=o(0),O=function(t){var e=t.commands;return Object(q.jsx)("dl",{children:e.map((function(t,e){return Object(q.jsxs)(c.Fragment,{children:[Object(q.jsx)("dt",{children:Object(q.jsx)("code",{children:t.example})},"dt-".concat(e)),Object(q.jsx)("dd",{children:t.desc},"dd-".concat(e))]},"f"+e)}))})},U=o(10),G=function(t){var e=t.registry,o=t.query,r=Object(c.useState)(o),n=Object(U.a)(r,2),a=n[0],s=n[1];return Object(q.jsxs)("div",{children:[Object(q.jsxs)("form",{action:"/",method:"GET",children:[Object(q.jsx)("input",{type:"text",name:"q",value:a,onChange:function(t){return s(t.target.value)},autoComplete:"off"}),Object(q.jsx)("input",{type:"submit"})]}),Object(q.jsx)("p",{children:e.toUrl(a)||Object(q.jsx)("br",{})})]})},A=function(t){var e=t.registry,o=t.query;return Object(q.jsx)("div",{children:Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(G,{registry:e,query:o}),Object(q.jsx)(O,{commands:e.commands})]})})},k=function(t){var e=t.map((function(t){var e=t.template,o=t.toUrl,c=t.example,r=t.desc,n=Object(l.a)(e,v);return{match:n,toUrl:function(t){var e=n(t);return!!e&&o(e.params)},example:c||e,desc:r}}));return{commands:e,toUrl:function(t){var o;return(null===(o=e.find((function(e){return(0,e.match)(t)})))||void 0===o?void 0:o.toUrl(t))||!1}}}([].concat(Object(i.a)([{template:":help(h|help|home)",toUrl:function(){return"/"},example:"h|help|home",desc:"View how to use bunnyghp."}]),Object(i.a)([{template:"g".concat(x),toUrl:function(t){var e=t.query;return"https://www.google.com".concat(e?"/search?q=".concat(e):"")},example:"g how to google",desc:"Search Google, or just go to Google."}]),Object(i.a)(w({defaultPerson:"clintandrewhall",defaultRepo:"elastic/kibana"})),Object(i.a)([{template:"lol",toUrl:function(){return"http://icanhascheezburger.com/?random"},desc:"a random lolcat"},{template:"hoo :query",toUrl:function(t){var e=t.query;return"http://haskell.org/hoogle/?q=".concat(e)},example:"hoo how to hoogle",desc:"a hoogle (haskell + google) search"},{template:"rickroll",toUrl:function(){return"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},desc:"You Just Got Rick Roll'd By bunnyghp!"},{template:"fb".concat(x),toUrl:function(t){var e=t.query;return"http://www.facebook.com/".concat(e?"s.php?q=".concat(e,"&init=q"):"")},desc:"search www.facebook.com or go there",example:"fb mark zuckerberg"},{template:"yt".concat(x),toUrl:function(t){var e=t.query;return"http://www.youtube.com/".concat(e?"results?search_query=".concat(e,"&search_type=&aq=-1&oq="):"")},desc:"searches YouTube or goes to it",example:"yt i'm cool sushi 654 yeah"},{template:"bugcongress".concat(y).concat(":zip(\\d{5})","?"),toUrl:function(t){var e=t.zip;return"http://www.congress.org/congressorg/officials/congress/".concat(e?"?lvl=C&azip=".concat(e):"")},desc:"looks up your senator or congressperson based on a zip code you give it, or just view a list",example:"bugcongress 40207"},{template:"wa".concat(x),toUrl:function(t){var e=t.query;return"http://www.wolframalpha.com".concat(e?"/input/?i=".concat(e):"")},desc:"searches Wolfram Alpha or goes there",example:"wa ultimate question"},{template:"wikinvest".concat(x),toUrl:function(t){var e=t.query;return"http://www.wikinvest.com".concat(e?"/Special/Search?search=%s".concat(e):"")},desc:"searches Wikinvest or goes there",example:"wikinvest 2008 Financial Crisis"},{template:"time",toUrl:function(){return"https://time.is/"},desc:"shows the current time"}]))),z=function(){var t=function(){var t;return{path:location.pathname,query:new URLSearchParams(null===(t=window.location)||void 0===t?void 0:t.search).get("q")||""}}(),e=t.path,o=t.query;if("/"===e&&o){var c=k.toUrl(o);return c&&window.location.replace(c),null}return e.startsWith("/home")||"/"===e?Object(q.jsx)(A,{registry:k,query:o}):(window.location.replace("/"),null)},C=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,c=e.getFID,r=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),r(t),n(t),a(t)}))};u.a.config(),a.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(z,{})}),document.getElementById("root")),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.f80b0ae9.chunk.js.map