(this["webpackJsonpmushroom-builder"]=this["webpackJsonpmushroom-builder"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,a,d,r=n(0),i=n.n(r),s=n(13),l=n.n(s),o=(n(21),n(2)),u=n(4),m=n(5),h=n(9),j=n(8),p=n(6),g=(n(22),n(7)),b=n(1),O=g.a.td(c||(c=Object(p.a)(["\n  border: 1px solide #c4c4c4;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  vertical-align: top;\n  padding-left: 3rem;\n"]))),f=g.a.img(a||(a=Object(p.a)(["\n  height: 11rem;\n  object-fit: cover;\n  width: 14rem;\n"]))),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.imgUrl,n=e.id,c=e.selectHandler;return Object(b.jsx)(O,{onClick:function(){return c(n)},children:Object(b.jsx)(f,{src:t})})}}]),n}(i.a.Component),v=g.a.h2(d||(d=Object(p.a)(["\n  padding-bottom: 0.5rem;\n  padding-left: 3rem;\n"]))),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.componentCardItems,c=e.selectHandler;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("table",{children:[Object(b.jsx)(v,{children:Object(b.jsx)("td",{children:t})}),Object(b.jsx)("tr",{children:n.map((function(e){return Object(b.jsx)(S,{imgUrl:e.imgUrl,id:e.id,selectHandler:c})}))})]})})}}]),n}(i.a.Component),x=[{imgUrl:"https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg",id:0},{imgUrl:"https://media.npr.org/assets/img/2018/02/02/enoki-promo_wide-5f65ced60025d4ef144f006496ccf5d00ca04021-s600-c85.webp",id:1},{imgUrl:"https://civileats.com/wp-content/uploads/2021/03/210311-doug-bierend-mycotopia-mushrooms-fungi-climate-local-food-nutrition-6-king-bolete-credit-bernard-spragg.jpg",id:2}],w=[{imgUrl:"https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg",id:3},{imgUrl:"https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg",id:4},{imgUrl:"https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg",id:5}],H=[{imgUrl:"https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg",id:6},{imgUrl:"https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg",id:7},{imgUrl:"https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg",id:8}],I=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={selectedHeadId:-1,selectedStemId:-1,selectedBackgroundId:-1},c.handleSelectHead=c.handleSelectHead.bind(Object(o.a)(c)),c.handleSelectStem=c.handleSelectStem.bind(Object(o.a)(c)),c.handleSelectBackground=c.handleSelectBackground.bind(Object(o.a)(c)),c}return Object(m.a)(n,[{key:"handleSelectHead",value:function(e){this.setState({selectedHeadId:e})}},{key:"handleSelectStem",value:function(e){this.setState({selectedStemId:e})}},{key:"handleSelectBackground",value:function(e){this.setState({selectedBackgroundId:e})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Welcome to mushroom builder"}),Object(b.jsx)(k,{title:"Select Head",componentCardItems:x,selectHandler:this.handleSelectHead}),Object(b.jsx)(k,{title:"Select Stem",componentCardItems:w,selectHandler:this.handleSelectStem}),Object(b.jsx)(k,{title:"Select Background",componentCardItems:H,selectHandler:this.handleSelectBackground})]})}}]),n}(i.a.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,d=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),d(e),r(e)}))};l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),U()}},[[26,1,2]]]);
//# sourceMappingURL=main.b6eed61c.chunk.js.map