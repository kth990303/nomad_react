(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{53:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),c=s(21),a=s.n(c),i=s(6),o=s(2),j=s(10),l=s.n(j),d=s(22),m=s(23),b=s(24),h=s(29),u=s(28),v=s(25),x=s.n(v),O=(s(53),s(1));var p=function(e){var t=e.id,s=e.year,n=e.title,r=e.summary,c=e.poster,a=e.genres;return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:r,poster:c,genres:a}},children:Object(O.jsx)("h3",{className:"movie__title",children:n})}),Object(O.jsx)("h5",{className:"movie__year",children:s}),Object(O.jsx)("img",{src:c,alt:n,title:n}),Object(O.jsx)("ul",{className:"genres",children:a.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsx)("p",{className:"movie__summary",children:r}),Object(O.jsx)("hr",{})]})},g=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(l.a.mark((function t(){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text_",children:"Loading..."})}):Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("h1",{children:"Currently Most popular Movies List"}),Object(O.jsx)("hr",{}),s.map((function(e){return Object(O.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))]})})}}]),s}(r.a.Component);var y=function(){return Object(O.jsxs)("span",{children:[Object(O.jsx)("h1",{children:"About this page"}),"Practice React with Minseo. Practice with NomadCoder.",Object(O.jsx)("br",{}),"We get axios from movie website, and return currently favorite movies."]})};var f=function(e){console.log(e.location.state);var t,s=e.location.state.year;s<=2010&&(t="\uc8fc\uc758: \uac1c\ubd09\ud55c\uc9c0 10\ub144\uc774 \ub118\uc740 \uc61b\ub0a0 \uc601\ud654\uc785\ub2c8\ub2e4.");var n=e.location.state.title;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:n}),Object(O.jsxs)("h2",{children:["\uac1c\ubd09: ",s,"\ub144"]}),Object(O.jsx)("p",{style:{color:"red"},children:t})]})};var _=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(i.b,{to:"/",children:"Movie List"}),Object(O.jsx)("br",{}),Object(O.jsx)(i.b,{to:"/about",children:"About this site"})]})};var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:f})]})};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5a9b0de7.chunk.js.map