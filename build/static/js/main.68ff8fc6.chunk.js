(this["webpackJsonpnyt-app"]=this["webpackJsonpnyt-app"]||[]).push([[0],{10:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(20),c=n.n(r),o=(n(28),n(9)),l=n.n(o),s=n(21),u=n(7),d=(n(10),n(22)),p=n.n(d),j=n(50),x=(n(19),n(51)),h=n(1);var b=function(e){var t,n,a=e.article;return Object(h.jsx)("div",{children:a&&Object(h.jsxs)(x.a,{id:a._id,style:{width:"350px",height:"520px",marginBottom:"55px"},children:[Object(h.jsx)(x.a.Img,{style:{height:"250px"},src:(null===(t=a.multimedia)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.url)?"https://nytimes.com/".concat(a.multimedia[0].url):"https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",alt:"news-img"}),Object(h.jsxs)(x.a.Body,{style:{textAlign:"left"},children:[Object(h.jsx)(x.a.Title,{children:Object(h.jsx)("a",{href:a.web_url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:a.headline.main})}),Object(h.jsxs)(x.a.Text,{style:{fontSize:"10.5px",color:"orange",marginBottom:"3px",padding:0},children:["Published ",a.pub_date.slice(0,10)]}),Object(h.jsx)(x.a.Text,{style:{color:"grey",fontSize:"11px"},children:a.byline.original}),Object(h.jsx)(x.a.Text,{style:{color:"black",fontSize:"12px",fontWeight:"500"},children:a.snippet})]})]},a.id)})};var f=function(e){var t=e.max,n=e.min,a=e.value,i=e.onChange;return Object(h.jsx)("input",{className:"date",type:"date",max:t,min:n,value:a,onChange:i,style:{backgroundColor:"#282c34",border:"2px solid white",color:"white",width:"190px",outline:"none",fontSize:"17px"}})};var g=function(e){var t=e.articles,n=Object(a.useState)(null),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)(null),l=Object(u.a)(o,2),s=l[0],d=l[1],p=Object(a.useState)(null),x=Object(u.a)(p,2),g=x[0],m=x[1],v=new Date,O=v.getDate(),y=v.getMonth()+1,w=v.getFullYear();return O<10&&(O="0"+O),y<10&&(y="0"+y),v=w+"-"+y+"-"+O,Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsxs)("div",{style:{paddingTop:"20px"},children:[Object(h.jsx)("label",{style:{paddingRight:"10px"},children:"from"}),Object(h.jsx)(f,{min:"2020-01-01",max:v,value:r,onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)}}),Object(h.jsx)("label",{style:{padding:"0 10px"},children:"to"}),Object(h.jsx)(f,{min:r,max:v,value:s,onChange:function(e){return function(e){var t=e.target.value;d(t)}(e)}})]}),Object(h.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return function(e){var t=e.target.value;m(t)}(e)},className:"text-input",style:{marginTop:"15px",height:"30px",outline:"none",fontSize:"18px",width:"280px"}}),Object(h.jsx)(j.a,{className:"d-flex flex-row justify-content-around flex-wrap",style:{marginTop:"25px"},children:t.filter((function(e){return null==r||null==s||r<=e.pub_date.slice(0,10)&&s>=e.pub_date.slice(0,10)?e:void 0})).filter((function(e){return null==g||e.headline.main.toLowerCase().includes(g.toLowerCase())||e.pub_date.toLowerCase().includes(g.toLowerCase())||e.byline.original.toLowerCase().includes(g.toLowerCase())||e.snippet.toLowerCase().includes(g.toLowerCase())?e:void 0})).map((function(e){return Object(h.jsx)(b,{article:e})}))})]})})};var m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DVRdWmGOwD7GeAWCWcIjoJKvTqAr4juT");case 2:t=e.sent,i(t.data.response.docs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(g,{articles:n})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),v()}},[[49,1,2]]]);
//# sourceMappingURL=main.68ff8fc6.chunk.js.map