(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{53:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(20),c=s.n(a),i=s(28),o=s(2),j=s(9),l=s.n(j),u=s(21),d=s(22),m=s(23),h=s(29),v=s(27),b=s(24),p=s.n(b),x=(s(53),s(1));var O=function(e){var t=e.year,s=e.title,n=e.summary,r=e.poster,a=e.genres;return Object(x.jsxs)("div",{class:"movie",children:[Object(x.jsx)("h3",{class:"movie__title",children:s}),Object(x.jsx)("h5",{class:"movie__year",children:t}),Object(x.jsx)("img",{src:r,alt:s,title:s}),Object(x.jsx)("ul",{className:"genres",children:a.map((function(e,t){return Object(x.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(x.jsx)("p",{class:"movie__summary",children:n}),Object(x.jsx)("hr",{})]})},g=function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{class:"loader",children:Object(x.jsx)("span",{class:"loader__text_",children:"Loading..."})}):Object(x.jsxs)("div",{class:"movie",children:[Object(x.jsx)("h1",{children:"Currently Most popular Movies List"}),Object(x.jsx)("hr",{}),s.map((function(e){return Object(x.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))]})})}}]),s}(r.a.Component);var f=function(){return Object(x.jsxs)("span",{children:[Object(x.jsx)("h1",{children:"About this page"}),"Practice React with Minseo. Practice with NomadCoder.",Object(x.jsx)("br",{}),"We get axios from movie website, and return currently favorite movies."]})};var y=function(){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(x.jsx)(o.a,{path:"/about",component:f})]})};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a0c16824.chunk.js.map