(this["webpackJsonpnyt-app"]=this["webpackJsonpnyt-app"]||[]).push([[0],{10:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(20),c=n.n(r),o=(n(28),n(9)),l=n.n(o),s=n(21),u=n(7),d=(n(10),n(22)),p=n.n(d),j=n(50),h=(n(19),n(51)),x=n(1);var b=function(e){var t,n,i=e.article;return Object(x.jsx)("div",{children:i&&Object(x.jsxs)(h.a,{id:i._id,style:{width:"350px",height:"520px",marginBottom:"55px"},children:[Object(x.jsx)(h.a.Img,{style:{height:"250px"},src:(null===(t=i.multimedia)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.url)?"https://nytimes.com/".concat(i.multimedia[0].url):"https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",alt:"news-img"}),Object(x.jsxs)(h.a.Body,{style:{textAlign:"left"},children:[Object(x.jsx)(h.a.Title,{children:Object(x.jsx)("a",{href:i.web_url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:i.headline.main})}),Object(x.jsxs)(h.a.Text,{style:{fontSize:"10.5px",color:"orange",marginBottom:"3px",padding:0},children:["Published ",i.pub_date.slice(0,10)]}),Object(x.jsx)(h.a.Text,{style:{color:"grey",fontSize:"11px"},children:i.byline.original}),Object(x.jsx)(h.a.Text,{style:{color:"black",fontSize:"12px",fontWeight:"500"},children:i.snippet})]})]})})};var g=function(e){e.loading;var t=e.articles,n=Object(i.useState)(null),a=Object(u.a)(n,2),r=a[0],c=a[1],o=Object(i.useState)(null),l=Object(u.a)(o,2),s=l[0],d=l[1],p=Object(i.useState)(null),h=Object(u.a)(p,2),g=h[0],f=h[1];return console.log(r),console.log(s),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsxs)("div",{style:{paddingTop:"20px"},children:[Object(x.jsx)("label",{style:{paddingRight:"10px"},children:"from"}),Object(x.jsx)("input",{className:"date",type:"date",onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)},style:{backgroundColor:"#282c34",border:"2px solid white",color:"white",width:"190px",outline:"none"}}),Object(x.jsx)("label",{style:{padding:"0 10px"},children:"to"}),Object(x.jsx)("input",{className:"date",type:"date",onChange:function(e){return function(e){var t=e.target.value;d(t)}(e)},style:{backgroundColor:"#282c34",border:"2px solid white",color:"white",width:"190px",outline:"none"}})]}),Object(x.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return function(e){var t=e.target.value;f(t)}(e)},className:"text-input",style:{marginTop:"15px",height:"35px",outline:"none"}}),Object(x.jsx)(j.a,{className:"d-flex flex-row justify-content-around flex-wrap",style:{marginTop:"25px"},children:t.filter((function(e){return null==r||null==s||r<=e.pub_date.slice(0,10)&&s>=e.pub_date.slice(0,10)?e:void 0})).filter((function(e){return null==g||e.headline.main.toLowerCase().includes(g.toLowerCase())||e.pub_date.toLowerCase().includes(g.toLowerCase())||e.byline.original.toLowerCase().includes(g.toLowerCase())||e.snippet.toLowerCase().includes(g.toLowerCase())?e:void 0})).map((function(e){return Object(x.jsx)(b,{article:e})}))})]})})};var f=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DVRdWmGOwD7GeAWCWcIjoJKvTqAr4juT");case 2:t=e.sent,a(t.data.response.docs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(x.jsx)("div",{children:Object(x.jsx)(g,{articles:n})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),m()}},[[49,1,2]]]);
//# sourceMappingURL=main.d754dae2.chunk.js.map