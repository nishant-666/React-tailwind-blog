(this["webpackJsonpreact-tailwind-blog"]=this["webpackJsonpreact-tailwind-blog"]||[]).push([[0],{304:function(e,t,s){},305:function(e,t,s){},307:function(e,t,s){},519:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(60),n=s.n(l),r=(s(304),s(305),s(279)),i=s(26),o=Object(r.a)({apiKey:"AIzaSyBvE6lrJfKp4ufBf4aLpyj6VeQotmTj90M",authDomain:"firegram-e4c96.firebaseapp.com",projectId:"firegram-e4c96",storageBucket:"firegram-e4c96.appspot.com",messagingSenderId:"1039021562599",appId:"1:1039021562599:web:77c4f8e7d3e0432ec12042",measurementId:"G-W86ZHBCVM9"}),j=Object(i.f)(o),b=s(69),d=s(4),u=s(15),m=s(0),O=s.n(m),g=s(39),h=s(19),x=(s(307),s(5));function f(){var e=Object(h.f)();return Object(x.jsx)("div",{className:"sidebar-main",children:Object(x.jsx)("div",{className:"sidebar-menu",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)(g.b,{to:"/createBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Write a Blog"})}),Object(x.jsx)(g.b,{to:"/readBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Public Blogs"})}),Object(x.jsx)(g.b,{to:"/myBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"My Blogs"})}),Object(x.jsx)(g.b,{to:"/savedBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Saved Blogs"})}),Object(x.jsx)("li",{className:"sidebar-lists",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),e("/login")},children:"Log out"})]})})})}var v=s(542),p=s(534),N=s(537),S=s(118),y=s(535),B=s(285),k=s.p+"static/media/userImage.5046265d.png";function I(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)(""),n=Object(u.a)(l,2),r=n[0],i=n[1],o=Object(a.useState)(""),j=Object(u.a)(o,2),b=j[0],d=j[1];return Object(a.useEffect)((function(){c(localStorage.getItem("User Name")),i(localStorage.getItem("User Email")),d(localStorage.getItem("PhotoURL"))}),[]),Object(x.jsx)("div",{className:"right-float",children:Object(x.jsxs)("div",{className:"topbar-container",children:[Object(x.jsx)(B.a,{className:"profile-image",size:"mini",src:b||k,avatar:!0}),Object(x.jsxs)("p",{className:"welcome-text",children:["Welcome, ",s||r]})]})})}var C=s.p+"static/media/NoDataImg.6ad77992.jpg";function q(){var e=Object(h.f)();return Object(x.jsxs)("div",{className:"no-data-container",children:[Object(x.jsx)("img",{className:"no-data-image",src:C}),Object(x.jsx)("p",{className:"no-data-text",children:"No Blogs Found.. \u2639\ufe0f"}),Object(x.jsx)("div",{className:"logout-mobile",children:Object(x.jsx)("button",{class:"btn btn-green mt-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),e("/login")},children:"Log out"})})]})}var E=s(31),P=(s(121),s(107));function U(e){var t=e.databaseRef,s=e.savedRef,c=Object(h.f)(),l=Object(a.useState)([]),n=Object(u.a)(l,2),r=n[0],o=n[1],m=Object(a.useState)(!0),g=Object(u.a)(m,2),C=g[0],U=g[1],w=Object(a.useState)(""),L=Object(u.a)(w,2),z=(L[0],L[1]),R=Object(a.useState)(""),M=Object(u.a)(R,2),D=M[0],A=M[1],K=function(){var e=Object(d.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.e)(t);case 2:s=e.sent,o(s.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}))),U(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){sessionStorage.getItem("Auth Key")?(z(localStorage.getItem("User Name")),A(localStorage.getItem("User Email")),K()):c("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(E.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),r.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return c("/createBlogs")},children:"Create Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),c("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return c("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return c("/myBlogs")},children:"My Blogs"})]})]}):"",C?Object(x.jsx)(v.a,{active:!0,children:Object(x.jsx)(p.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):r.length>0?r.map((function(e){return Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{className:"popup",on:"click",position:"bottom right",trigger:Object(x.jsx)(P.a,{size:"1.5rem"}),children:Object(x.jsxs)("div",{className:"popup-container",children:[e.userEmail===D?Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){c("/createBlogs",{state:{blogData:e}})},children:[Object(x.jsx)(S.a,{size:"large",name:"edit"}),"Edit Post"]}),Object(x.jsx)(y.a,{}),Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(i.d)(j,"react-blogs",e);Object(i.c)(t).then((function(){K(),E.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(S.a,{size:"large",name:"trash"}),"Delete Post"]}),Object(x.jsx)(y.a,{})]}):"",Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){Object(i.a)(s,{userEmail:localStorage.getItem("User Email"),title:e.title,privacy:e.privacy,tag:e.tag,avatar:e.avatar,timestamp:e.timestamp,author:e.author,banner:e.banner,blogPost:e.blogPost}).then((function(){E.b.success("Blog Saved Successfully!",{pauseOnHover:!0})}))}(e)},children:[Object(x.jsx)(S.a,{size:"large",name:"save"}),"Save this Post"]})]})})}),Object(x.jsx)("div",{className:"blog-main",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(B.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:k,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e.blogPost.substring(0,200),"..")}})}),Object(x.jsx)("div",{className:"readMore",children:Object(x.jsx)("a",{href:"https://single-blogs.web.app/read/".concat(e.id),target:"_blank",children:"Read More..."})})]})})]})})})):Object(x.jsx)(q,{})]})}var w=s(538),L=s(536),z=s(541),R=(s(314),s(411),s(95)),M=s.n(R),D=function(){return Object(x.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(x.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(x.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})},A=function(){return Object(x.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(x.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(x.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};var K=R.Quill.import("formats/size");K.whitelist=["extra-small","small","medium","large"],R.Quill.register(K,!0);var T=R.Quill.import("formats/font");T.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","lucida"],R.Quill.register(T,!0);var F={toolbar:{container:"#toolbar",handlers:{undo:function(){this.quill.history.undo()},redo:function(){this.quill.history.redo()}}},history:{delay:500,maxStack:100,userOnly:!0}},H=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","color","code-block"],_=function(){return Object(x.jsxs)("div",{id:"toolbar",children:[Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsxs)("select",{className:"ql-font",defaultValue:"arial",children:[Object(x.jsx)("option",{value:"arial",children:"Arial"}),Object(x.jsx)("option",{value:"comic-sans",children:"Comic Sans"}),Object(x.jsx)("option",{value:"courier-new",children:"Courier New"}),Object(x.jsx)("option",{value:"georgia",children:"Georgia"}),Object(x.jsx)("option",{value:"helvetica",children:"Helvetica"}),Object(x.jsx)("option",{value:"lucida",children:"Lucida"})]}),Object(x.jsxs)("select",{className:"ql-size",defaultValue:"medium",children:[Object(x.jsx)("option",{value:"extra-small",children:"Size 1"}),Object(x.jsx)("option",{value:"small",children:"Size 2"}),Object(x.jsx)("option",{value:"medium",children:"Size 3"}),Object(x.jsx)("option",{value:"large",children:"Size 4"})]}),Object(x.jsxs)("select",{className:"ql-header",defaultValue:"3",children:[Object(x.jsx)("option",{value:"1",children:"Heading"}),Object(x.jsx)("option",{value:"2",children:"Subheading"}),Object(x.jsx)("option",{value:"3",children:"Normal"})]})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-bold"}),Object(x.jsx)("button",{className:"ql-italic"}),Object(x.jsx)("button",{className:"ql-underline"}),Object(x.jsx)("button",{className:"ql-strike"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-list",value:"ordered"}),Object(x.jsx)("button",{className:"ql-list",value:"bullet"}),Object(x.jsx)("button",{className:"ql-indent",value:"-1"}),Object(x.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-script",value:"super"}),Object(x.jsx)("button",{className:"ql-script",value:"sub"}),Object(x.jsx)("button",{className:"ql-blockquote"}),Object(x.jsx)("button",{className:"ql-direction"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("select",{className:"ql-align"}),Object(x.jsx)("select",{className:"ql-color"}),Object(x.jsx)("select",{className:"ql-background"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-link"}),Object(x.jsx)("button",{className:"ql-image"}),Object(x.jsx)("button",{className:"ql-video"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-formula"}),Object(x.jsx)("button",{className:"ql-code-block"}),Object(x.jsx)("button",{className:"ql-clean"})]}),Object(x.jsxs)("span",{className:"ql-formats",children:[Object(x.jsx)("button",{className:"ql-undo",children:Object(x.jsx)(D,{})}),Object(x.jsx)("button",{className:"ql-redo",children:Object(x.jsx)(A,{})})]})]})},W=(s(515),s(133)),Q=s(209),V=s.n(Q),J=[{key:"private",value:"private",text:"Private"},{key:"public",value:"public",text:"Public"}];function G(e){var t=e.databaseRef,s=Object(h.f)(),l=Object(h.e)().state,n=Object(a.useState)(""),r=Object(u.a)(n,2),o=r[0],b=r[1],d=Object(a.useState)(""),m=Object(u.a)(d,2),O=m[0],g=m[1],v=Object(a.useState)(""),p=Object(u.a)(v,2),N=p[0],S=p[1],B=Object(a.useState)(!1),k=Object(u.a)(B,2),C=k[0],q=k[1],P=Object(a.useState)({}),U=Object(u.a)(P,2),R=U[0],D=U[1],A=Object(a.useState)(null),K=Object(u.a)(A,2),T=K[0],Q=K[1],G=Object(a.useState)(""),Z=Object(u.a)(G,2),X=Z[0],Y=Z[1],$=Object(a.useState)(""),ee=Object(u.a)($,2),te=ee[0],se=ee[1],ae=Object(a.useState)(""),ce=Object(u.a)(ae,2),le=ce[0],ne=ce[1];c.a.useEffect((function(){if(l){var e=l.blogData;b(e.title),S(e.banner),g(e.tag),Q(e.privacy),Y(e.blogPost)}}),[]);Object(a.useEffect)((function(){var e=sessionStorage.getItem("Auth Key");se(localStorage.getItem("User Name")),ne(localStorage.getItem("User Email")),e||s("/login")}),[]);return Object(x.jsxs)("div",{className:"create-form-container",children:[Object(x.jsx)(I,{}),Object(x.jsx)("p",{className:"blog-text",children:"Create a Blog.."}),Object(x.jsx)(E.a,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),Object(x.jsxs)(w.a,{children:[Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Title"}),Object(x.jsx)("input",{className:"form-input",placeholder:"Please Enter the Title",value:o,onChange:function(e){return b(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Privacy"}),Object(x.jsx)(L.a,{className:"form-input",placeholder:"Select the Privacy",options:J,onChange:function(e){return function(e){Q(e.target.outerText)}(e)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Content"}),Object(x.jsxs)("div",{className:"mt-4",children:[Object(x.jsx)(_,{}),Object(x.jsx)(M.a,{theme:"snow",placeholder:"Write something awesome...",value:X,className:"react-quill",modules:F,formats:H,onChange:function(e){Y(e)}})]})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Tags"}),Object(x.jsx)("input",{className:"form-input",placeholder:"Please Enter the Tags",value:O,onChange:function(e){return g(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Banner Image"}),Object(x.jsx)("input",{type:"file",id:"actual-btn",hidden:!0,onChange:function(e){e.preventDefault(),D(e.target.files[0])}}),Object(x.jsxs)("div",{className:"flex-inline",children:[Object(x.jsx)("label",{for:"actual-btn",className:"file-label",children:R.name?R.name:"Choose Banner Image"}),Object(x.jsx)(z.a,{loading:!!C,primary:!0,className:"upload-button",onClick:function(){var e=Object(W.b)(),t=(Math.random()+1).toString(36).substring(7),s=Object(W.c)(e,t),a=Object(W.d)(s,R);a.on("state_changed",(function(e){q(!0)}),(function(e){}),(function(){Object(W.a)(a.snapshot.ref).then((function(e){q(!1),S(e),E.b.success("Banner Added")}))}))},children:"Upload"})]})]}),Object(x.jsx)("div",{className:"btn-container",children:l?Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){var e=Object(i.d)(j,"react-blogs",l.blogData.id);Object(i.g)(e,{title:o,privacy:T,tag:O,userEmail:le,banner:N,timestamp:V()().format("LL"),blogPost:X}).then((function(){s("/readBlogs")}))},children:"Update your Blog"}):Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){o&&T&&X?Object(i.a)(t,{title:o,privacy:T,tag:O,avatar:localStorage.getItem("PhotoURL"),timestamp:V()().format("LL"),userEmail:le,author:te||le,banner:N,blogPost:X}).then((function(){s("/readBlogs")})):E.b.error("Please fill all the fields...")},children:"Submit your Blog"})}),Object(x.jsxs)("div",{className:"mobile-only pb-5",children:[Object(x.jsx)(y.a,{horizontal:!0,children:"Or"}),Object(x.jsx)("p",{className:"read-blogs-text",children:"Don't want to write.."}),Object(x.jsx)("button",{class:"btn btn-green btn-block",onClick:function(){window.scrollTo(0,0),s("/readBlogs")},children:"Read Blogs"}),Object(x.jsx)("button",{class:"btn btn-green btn-block blogs-btn",onClick:function(){return s("/myBlogs")},children:"My Blogs"}),Object(x.jsx)("button",{class:"btn btn-green btn-block blogs-btn",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"})]})]})]})}var Z=s(540),X=s(539),Y=s(132),$=s(283),ee=s.n($);function te(){var e=Object(h.f)(),t=new Y.a,s=Object(Y.b)(),c=Object(a.useState)(""),l=Object(u.a)(c,2),n=(l[0],l[1],Object(a.useState)("")),r=Object(u.a)(n,2);r[0],r[1];Object(a.useEffect)((function(){sessionStorage.getItem("Auth Key")&&e("/readBlogs")}),[]);return Object(x.jsxs)("div",{className:"card-centered",children:[Object(x.jsx)(E.a,{}),Object(x.jsx)(Z.a,{className:"card-body",children:Object(x.jsx)(Z.a.Content,{children:Object(x.jsx)(X.a,{children:Object(x.jsx)(X.a.Event,{children:Object(x.jsx)(X.a.Content,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsxs)("div",{className:"signup-header",children:[Object(x.jsx)("h3",{children:"Blogs by Cybernatico"}),Object(x.jsx)("p",{children:"Sign In to Read Blogs !"})]}),Object(x.jsx)("div",{className:"google-btn",children:Object(x.jsx)(ee.a,{onClick:function(){Object(Y.d)(s,t).then((function(t){localStorage.setItem("PhotoURL",t.user.photoURL),localStorage.setItem("User Name",t.user.displayName),localStorage.setItem("User Email",t.user.email),sessionStorage.setItem("Auth Key",t.user.accessToken),e("/readBlogs")})).catch((function(e){console.log(e)}))}})})]})})})})})})]})}function se(e){var t=e.databaseRef,s=Object(h.f)(),c=Object(a.useState)([]),l=Object(u.a)(c,2),n=l[0],r=l[1],o=Object(a.useState)(!0),m=Object(u.a)(o,2),g=m[0],C=m[1],U=Object(a.useState)(""),w=Object(u.a)(U,2),L=(w[0],w[1]),z=Object(a.useState)(""),R=Object(u.a)(z,2),M=(R[0],R[1]),D=Object(a.useState)(""),A=Object(u.a)(D,2),K=A[0],T=A[1],F=function(){var e=Object(d.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.e)(t);case 2:s=e.sent,r(s.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}))),C(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){sessionStorage.getItem("Auth Key")?(L(localStorage.getItem("User Name")),T(localStorage.getItem("User Email")),F(),M(localStorage.getItem("PhotoURL"))):s("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(E.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),n.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/createBlogs")},children:"Write a Blog"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),s("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return s("/myBlogs")},children:"My Blogs"})]})]}):Object(x.jsx)(q,{}),g?Object(x.jsx)(v.a,{active:!0,children:Object(x.jsx)(p.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):n.length>0?n.map((function(e){return e.userEmail===K?Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{on:"click",position:"bottom right",trigger:Object(x.jsx)(P.a,{size:"1.5rem"}),children:Object(x.jsxs)("div",{className:"popup-container",children:[Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){s("/createBlogs",{state:{blogData:e}})},children:[Object(x.jsx)(S.a,{size:"large",name:"edit"}),"Edit Post"]}),Object(x.jsx)(y.a,{}),Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(i.d)(j,"react-blogs",e);Object(i.c)(t).then((function(){F(),E.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(S.a,{size:"large",name:"trash"}),"Delete Post"]})]})})}),Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(B.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:k,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e.blogPost.substring(0,100),"..")}})}),Object(x.jsx)("div",{className:"readMore",children:Object(x.jsx)("a",{href:"https://single-blogs.web.app/read/".concat(e.id),target:"_blank",children:"Read More..."})})]})}):""})):Object(x.jsx)(q,{})]})}function ae(e){var t=e.savedRef,s=Object(h.f)(),c=Object(a.useState)([]),l=Object(u.a)(c,2),n=l[0],r=l[1],o=Object(a.useState)(!0),m=Object(u.a)(o,2),g=m[0],C=m[1],U=Object(a.useState)(""),w=Object(u.a)(U,2),L=w[0],z=w[1],R=Object(a.useState)(""),M=Object(u.a)(R,2),D=(M[0],M[1]),A=function(){var e=Object(d.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.e)(t);case 2:s=e.sent,r(s.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}))),C(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){sessionStorage.getItem("Auth Key")?(z(localStorage.getItem("User Email")),A(),D(localStorage.getItem("PhotoURL"))):s("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(E.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),n.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/createBlogs")},children:"Write a Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),s("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return s("/myBlogs")},children:"My Blogs"})]})]}):"",g?Object(x.jsx)(v.a,{active:!0,children:Object(x.jsx)(p.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):n.length>0?n.map((function(e){return e.userEmail===L?Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{on:"click",position:"bottom right",trigger:Object(x.jsx)(P.a,{size:"1.5rem"}),children:Object(x.jsxs)("div",{className:"popup-container",children:[Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){s("/createBlogs",{state:{blogData:e}})},children:[Object(x.jsx)(S.a,{size:"large",name:"edit"}),"Edit Post"]}),Object(x.jsx)(y.a,{}),Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(i.d)(j,"saved-blogs",e);Object(i.c)(t).then((function(){A(),E.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(S.a,{size:"large",name:"trash"}),"Delete Post"]})]})})}),Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(B.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:k,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e.blogPost.substring(0,100),"..")}})}),Object(x.jsx)("div",{className:"readMore",children:Object(x.jsx)("a",{href:"https://single-blogs.web.app/read/".concat(e.id),target:"_blank",children:"Read More..."})})]})}):""})):Object(x.jsx)(q,{})]})}var ce=Object(i.b)(j,"react-blogs"),le=Object(i.b)(j,"saved-blogs");var ne=function(){var e=Object(h.f)();return Object(a.useEffect)((function(){e("/login")}),[]),Object(x.jsxs)("div",{className:"main-body",children:[Object(x.jsx)(h.c,{children:Object(x.jsx)(h.a,{exact:!0,path:"/login",element:Object(x.jsx)(te,{})})}),Object(x.jsx)("div",{className:"blog-body",children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/myBlogs",element:Object(x.jsx)(se,{databaseRef:ce})}),Object(x.jsx)(h.a,{exact:!0,path:"/readBlogs",element:Object(x.jsx)(U,{databaseRef:ce,savedRef:le})}),Object(x.jsx)(h.a,{exact:!0,path:"/createBlogs",element:Object(x.jsx)(G,{databaseRef:ce})}),Object(x.jsx)(h.a,{exact:!0,path:"/savedBlogs",element:Object(x.jsx)(ae,{databaseRef:ce,savedRef:le})})]})})]})},re=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,545)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),l(e),n(e)}))};s(518);n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)(ne,{})})}),document.getElementById("root")),re()}},[[519,1,2]]]);
//# sourceMappingURL=main.3dfb3008.chunk.js.map