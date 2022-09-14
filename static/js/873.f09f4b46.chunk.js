"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[873],{5649:function(n,r,t){t.d(r,{XT:function(){return s},Zx:function(){return f},cI:function(){return p},kh:function(){return l},v9:function(){return d}});var e=t(5861),a=t(4687),c=t.n(a),i=t(4569),u=t.n(i),o="152aa9c1fb200c1c42a40b69b3af0ad5";u().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/day?api_key=".concat(o));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(o,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},5873:function(n,r,t){t.r(r),t.d(r,{default:function(){return b}});var e,a,c=t(2982),i=t(1413),u=t(5861),o=t(885),s=t(4687),f=t.n(s),p=t(5649),l=t(2791),d=t(6871),v=t(5067),m=t(2903),h=t(4160),g=t(168),x=t(9584),y=x.Z.ul(e||(e=(0,g.Z)(["\n@media screen and (min-width: 552px) {\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  }\ndisplay: grid;\njustify-content: center;\nlist-style: none;\n"]))),w=x.Z.li(a||(a=(0,g.Z)(["\nmax-width:300px;\nmargin-right:10px\n"]))),Z=t(184),b=function(){var n=(0,l.useState)({movies:[],loading:!1,error:null}),r=(0,o.Z)(n,2),t=r[0],e=r[1],a=(0,d.TH)();(0,l.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(){var r,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!0,error:null})})),n.next=4,p.XT();case 4:r=n.sent,t=r.results,e((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!1,movies:[].concat((0,c.Z)(n.movies),(0,c.Z)(t))})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e((function(r){return(0,i.Z)((0,i.Z)({},r),{},{error:n.t0})}));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var s=t.movies,g=t.loading,x=t.error,b=s.map((function(n){var r=n.id,t=n.original_title,e=n.poster_path,c=n.name;return(0,Z.jsx)("div",{children:(0,Z.jsx)(h.rU,{state:{from:a},to:"/movies/".concat(r),children:(0,Z.jsxs)(w,{children:[e?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e),alt:""}):(0,Z.jsx)("img",{src:m,alt:"",width:"90",height:"135"}),(0,Z.jsx)("h2",{children:t||c})]})},r)},r)}));return(0,Z.jsxs)("div",{children:[g&&(0,Z.jsx)(v.Z,{}),x&&(0,Z.jsx)("p",{children:"Error"}),(0,Z.jsx)(y,{children:b})]})}},2903:function(n,r,t){n.exports=t.p+"static/media/no-image.2e218afdc371d5a9c297.webp"},2982:function(n,r,t){t.d(r,{Z:function(){return c}});var e=t(907);var a=t(181);function c(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=873.f09f4b46.chunk.js.map