(this["webpackJsonpreact-tailwind-blog"]=this["webpackJsonpreact-tailwind-blog"]||[]).push([[0],{261:function(e,t,s){},262:function(e,t,s){},264:function(e,t,s){},372:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(61),r=s.n(n),l=(s(261),s(262),s(235)),o=s(29),i=Object(l.a)({apiKey:"AIzaSyBvE6lrJfKp4ufBf4aLpyj6VeQotmTj90M",authDomain:"firegram-e4c96.firebaseapp.com",projectId:"firegram-e4c96",storageBucket:"firegram-e4c96.appspot.com",messagingSenderId:"1039021562599",appId:"1:1039021562599:web:77c4f8e7d3e0432ec12042",measurementId:"G-W86ZHBCVM9"}),b=Object(o.f)(i),j=s(0),d=s.n(j),u=s(66),O=s(3),m=s(15),g=s(36),h=s(20),x=(s(264),s(4));function f(){var e=Object(h.f)();return Object(x.jsx)("div",{className:"sidebar-main",children:Object(x.jsx)("div",{className:"sidebar-menu",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)(g.b,{to:"/createBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Create Blogs"})}),Object(x.jsx)(g.b,{to:"/readBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Public Blogs"})}),Object(x.jsx)(g.b,{to:"/myBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"My Blogs"})}),Object(x.jsx)(g.b,{to:"/savedBlogs",children:Object(x.jsx)("li",{className:"sidebar-lists",children:"Saved Blogs"})}),Object(x.jsx)("li",{className:"sidebar-lists",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),e("/login")},children:"Log out"})]})})})}var p=s(395),v=s(387),N=s(390),y=s(117),S=s(388),C=s(242),B=s.p+"static/media/userImage.5046265d.png";function I(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(m.a)(n,2),l=r[0],o=r[1],i=Object(c.useState)(""),b=Object(m.a)(i,2),j=b[0],d=b[1],u=Object(c.useState)(""),O=Object(m.a)(u,2),g=O[0],h=O[1];Object(c.useEffect)((function(){o(localStorage.getItem("User Name")),d(localStorage.getItem("User Email")),h(localStorage.getItem("PhotoURL"))}),[]);return Object(x.jsx)("div",{className:"right-float",children:Object(x.jsxs)("div",{className:"topbar-container",children:[Object(x.jsx)(C.a,{className:"profile-image",size:"mini",src:g||B,avatar:!0,onClick:function(){a(!s)}}),Object(x.jsxs)("p",{className:"welcome-text",children:["Welcome, ",l||j]})]})})}var k=s.p+"static/media/NoDataImg.6ad77992.jpg";function E(){var e=Object(h.f)();return Object(x.jsxs)("div",{className:"no-data-container",children:[Object(x.jsx)("img",{className:"no-data-image",src:k}),Object(x.jsx)("p",{className:"no-data-text",children:"No Blogs Found.. \u2639\ufe0f"}),Object(x.jsx)("button",{class:"btn btn-green mt-3",onClick:function(){return e("/createBlogs")},children:"Write a Blog.."}),Object(x.jsx)("div",{className:"logout-mobile",children:Object(x.jsx)("button",{class:"btn btn-green mt-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),e("/login")},children:"Log out"})})]})}var P=s(26),R=(s(94),s(106));function U(e){var t=e.databaseRef,s=e.savedRef,a=Object(h.f)(),n=Object(c.useState)([]),r=Object(m.a)(n,2),l=r[0],i=r[1],j=Object(c.useState)(!0),g=Object(m.a)(j,2),k=g[0],U=g[1],w=Object(c.useState)(""),L=Object(m.a)(w,2),A=L[0],D=L[1],K=function(){var e=Object(O.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)(t);case 2:s=e.sent,i(s.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id})}))),U(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){sessionStorage.getItem("Auth Key")?(D(localStorage.getItem("User Name")),K()):a("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(P.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),l.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return a("/createBlogs")},children:"Create Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),a("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return a("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return a("/myBlogs")},children:"My Blogs"})]})]}):"",k?Object(x.jsx)(p.a,{active:!0,children:Object(x.jsx)(v.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):l.length>0?l.map((function(e){return Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{className:"popup",on:"click",position:"bottom right",trigger:Object(x.jsx)(R.a,{size:"1.5rem"}),children:Object(x.jsxs)("div",{className:"popup-container",children:[e.author===A?Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(o.d)(b,"react-blogs",e);Object(o.c)(t).then((function(){K(),P.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(y.a,{size:"large",name:"trash"}),"Delete Post"]}),Object(x.jsx)(S.a,{})]}):"",Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){Object(o.a)(s,{userEmail:localStorage.getItem("User Email"),title:e.title,privacy:e.privacy,tag:e.tag,avatar:e.avatar,timestamp:e.timestamp,author:e.author,banner:e.banner,blogPost:e.blogPost}).then((function(){P.b.success("Blog Saved Successfully!",{pauseOnHover:!0})}))}(e)},children:[Object(x.jsx)(y.a,{size:"large",name:"save"}),"Save this Post"]})]})})}),Object(x.jsx)("div",{className:"blog-main",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(C.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:B,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:e.blogPost.map((function(e){return Object(x.jsx)("p",{children:e.inlineStyleRanges.length>0?"BOLD"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"text-bold",children:e.text}):"ITALIC"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"italic-text",children:e.text}):"UNDERLINE"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"underlined-text",children:e.text}):Object(x.jsx)("p",{children:e.text}):Object(x.jsx)("p",{children:e.text})})}))})]})})]})})})):Object(x.jsx)(E,{})]})}var w=s(391),L=s(389),A=s(394),D=s(239),K=(s(367),s(126)),F=s(240),T=s.n(F),z=[{key:"private",value:"private",text:"Private"},{key:"public",value:"public",text:"Public"}];function M(e){var t=e.databaseRef,s=Object(h.f)(),a=Object(c.useState)(""),n=Object(m.a)(a,2),r=n[0],l=n[1],i=Object(c.useState)(""),b=Object(m.a)(i,2),j=b[0],d=b[1],u=Object(c.useState)(""),O=Object(m.a)(u,2),g=O[0],p=O[1],v=Object(c.useState)(!1),N=Object(m.a)(v,2),y=N[0],C=N[1],B=Object(c.useState)({}),k=Object(m.a)(B,2),E=k[0],R=k[1],U=Object(c.useState)(null),F=Object(m.a)(U,2),M=F[0],H=F[1],J=Object(c.useState)([]),W=Object(m.a)(J,2),V=W[0],G=W[1],Q=Object(c.useState)(""),Z=Object(m.a)(Q,2),_=Z[0],q=Z[1],X=Object(c.useState)(""),Y=Object(m.a)(X,2),$=Y[0],ee=Y[1];Object(c.useEffect)((function(){var e=sessionStorage.getItem("Auth Key");q(localStorage.getItem("User Name")),ee(localStorage.getItem("User Email")),e||s("/login")}),[]);return Object(x.jsxs)("div",{className:"create-form-container",children:[Object(x.jsx)(I,{}),Object(x.jsx)("p",{className:"blog-text",children:"Create a Blog.."}),Object(x.jsx)(P.a,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),Object(x.jsxs)(w.a,{children:[Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Title"}),Object(x.jsx)("input",{className:"form-input",placeholder:"Please Enter the Title",onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Privacy"}),Object(x.jsx)(L.a,{className:"form-input",placeholder:"Select the Privacy",options:z,onChange:function(e){return function(e){H(e.target.outerText)}(e)}})]}),Object(x.jsxs)(w.a.Field,{className:"form-field",children:[Object(x.jsx)("label",{className:"form-label",children:"Content"}),Object(x.jsx)(D.Editor,{toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onChange:function(e){G(e.blocks)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Tags"}),Object(x.jsx)("input",{className:"form-input",placeholder:"Please Enter the Tags",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{className:"form-label",children:"Banner Image"}),Object(x.jsx)("input",{type:"file",id:"actual-btn",hidden:!0,onChange:function(e){e.preventDefault(),R(e.target.files[0])}}),Object(x.jsxs)("div",{className:"flex-inline",children:[Object(x.jsx)("label",{for:"actual-btn",className:"file-label",children:E.name?E.name:"Choose Banner Image"}),Object(x.jsx)(A.a,{loading:!!y,primary:!0,className:"upload-button",onClick:function(){var e=Object(K.b)(),t=(Math.random()+1).toString(36).substring(7),s=Object(K.c)(e,t),c=Object(K.d)(s,E);c.on("state_changed",(function(e){C(!0)}),(function(e){}),(function(){Object(K.a)(c.snapshot.ref).then((function(e){C(!1),p(e),P.b.success("Banner Added")}))}))},children:"Upload"})]})]}),Object(x.jsx)("div",{className:"btn-container",children:Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){r&&M&&V?Object(o.a)(t,{title:r,privacy:M,tag:j,avatar:localStorage.getItem("PhotoURL"),timestamp:T()().format("LL"),author:_||$,banner:g,blogPost:V}).then((function(){s("/readBlogs")})):P.b.error("Please fill all the fields...")},children:"Submit your Blog"})}),Object(x.jsxs)("div",{className:"mobile-only pb-5",children:[Object(x.jsx)(S.a,{horizontal:!0,children:"Or"}),Object(x.jsx)("p",{className:"read-blogs-text",children:"Don't want to write.."}),Object(x.jsx)("button",{class:"btn btn-green btn-block",onClick:function(){window.scrollTo(0,0),s("/readBlogs")},children:"Read Blogs"}),Object(x.jsx)("button",{class:"btn btn-green btn-block blogs-btn",onClick:function(){return s("/myBlogs")},children:"My Blogs"}),Object(x.jsx)("button",{class:"btn btn-green btn-block blogs-btn",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"})]})]})]})}var H=s(393),J=s(392),W=s(83);function V(){var e=Object(h.f)(),t=Object(c.useState)(""),s=Object(m.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(""),l=Object(m.a)(r,2),o=l[0],i=l[1];Object(c.useEffect)((function(){sessionStorage.getItem("Auth Key")&&e("/readBlogs")}),[]);return Object(x.jsxs)("div",{className:"card-centered",children:[Object(x.jsx)(P.a,{}),Object(x.jsxs)(H.a,{className:"card-body",children:[Object(x.jsx)(H.a.Content,{children:Object(x.jsx)(H.a.Header,{children:"Create your account to get started.."})}),Object(x.jsx)(H.a.Content,{children:Object(x.jsx)(J.a,{children:Object(x.jsx)(J.a.Event,{children:Object(x.jsx)(J.a.Content,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"email",placeholder:"Please Enter your Email",onChange:function(e){return n(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",placeholder:"Please Enter your Password",onChange:function(e){return i(e.target.value)}})]}),Object(x.jsxs)("div",{className:"btn-centered",children:[Object(x.jsx)("button",{onClick:function(){if(a&&o){var t=Object(W.c)();Object(W.b)(t,a,o).then((function(t){localStorage.setItem("User Email",t.user.email),sessionStorage.setItem("Auth Key",t.user.accessToken),e("/readBlogs")})).catch((function(e){"auth/email-already-in-use"===e.code&&P.b.error("Email already Exists..")}))}else P.b.error("Please Enter the Credentials")},class:"regiser-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:"Create your account.."}),Object(x.jsx)("button",{onClick:function(){return e("/login")},class:"login-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:"Login"})]})]})})})})})]})]})}var G=s(241),Q=s.n(G);function Z(){var e=Object(h.f)(),t=new W.a,s=Object(W.c)(),a=Object(c.useState)(""),n=Object(m.a)(a,2),r=n[0],l=n[1],o=Object(c.useState)(""),i=Object(m.a)(o,2),b=i[0],j=i[1];Object(c.useEffect)((function(){sessionStorage.getItem("Auth Key")&&e("/readBlogs")}),[]);return Object(x.jsxs)("div",{className:"card-centered",children:[Object(x.jsx)(P.a,{}),Object(x.jsxs)(H.a,{className:"card-body",children:[Object(x.jsx)(H.a.Content,{children:Object(x.jsx)(H.a.Header,{children:"Sign In to get started.."})}),Object(x.jsx)(H.a.Content,{children:Object(x.jsx)(J.a,{children:Object(x.jsx)(J.a.Event,{children:Object(x.jsx)(J.a.Content,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"email",placeholder:"Please Enter your Email",onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)(w.a.Field,{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",placeholder:"Please Enter your Password",onChange:function(e){return j(e.target.value)}})]}),Object(x.jsxs)("div",{className:"btn-centered",children:[Object(x.jsx)("button",{onClick:function(){r&&b?Object(W.d)(s,r,b).then((function(t){localStorage.setItem("User Email",t.user.email),sessionStorage.setItem("Auth Key",t.user.accessToken),e("/readBlogs")})).catch((function(e){"auth/user-not-found"===e.code?P.b.error("User Not Found.."):"auth/wrong-password"===e.code&&P.b.error("Please Enter your correct Password..")})):P.b.error("Please Enter the Credentials")},class:"regiser-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:"Sign in.."}),Object(x.jsx)("button",{onClick:function(){return e("/register")},class:"login-btn px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:"Create your Account.."})]}),Object(x.jsx)(S.a,{horizontal:!0,children:"Or"}),Object(x.jsx)("div",{className:"google-btn",children:Object(x.jsx)(Q.a,{onClick:function(){Object(W.e)(s,t).then((function(t){localStorage.setItem("PhotoURL",t.user.photoURL),localStorage.setItem("User Name",t.user.displayName),localStorage.setItem("User Email",t.user.email),sessionStorage.setItem("Auth Key",t.user.accessToken),e("/readBlogs")})).catch((function(e){console.log(e)}))}})})]})})})})})]})]})}function _(e){var t=e.databaseRef,s=Object(h.f)(),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],l=n[1],i=Object(c.useState)(!0),j=Object(m.a)(i,2),g=j[0],S=j[1],k=Object(c.useState)(""),U=Object(m.a)(k,2),w=U[0],L=U[1],A=Object(c.useState)(""),D=Object(m.a)(A,2),K=(D[0],D[1]),F=function(){var e=Object(O.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)(t);case 2:s=e.sent,l(s.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id})}))),S(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){sessionStorage.getItem("Auth Key")?(L(localStorage.getItem("User Name")),F(),K(localStorage.getItem("PhotoURL"))):s("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(P.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),r.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/createBlogs")},children:"Create Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),s("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return s("/myBlogs")},children:"My Blogs"})]})]}):Object(x.jsx)(E,{}),g?Object(x.jsx)(p.a,{active:!0,children:Object(x.jsx)(v.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):r.length>0?r.map((function(e){return e.author===w?Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{on:"click",position:"bottom right",trigger:Object(x.jsx)(R.a,{size:"1.5rem"}),children:Object(x.jsx)("div",{className:"popup-container",children:Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(o.d)(b,"react-blogs",e);Object(o.c)(t).then((function(){F(),P.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(y.a,{size:"large",name:"trash"}),"Delete Post"]})})})}),Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(C.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:B,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:e.blogPost.map((function(e){return Object(x.jsx)("p",{children:e.inlineStyleRanges.length>0?"BOLD"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"text-bold",children:e.text}):"ITALIC"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"italic-text",children:e.text}):"UNDERLINE"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"underlined-text",children:e.text}):Object(x.jsx)("p",{children:e.text}):Object(x.jsx)("p",{children:e.text})})}))})]})}):""})):Object(x.jsx)(E,{})]})}function q(e){var t=e.savedRef,s=Object(h.f)(),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],l=n[1],i=Object(c.useState)(!0),j=Object(m.a)(i,2),g=j[0],S=j[1],k=Object(c.useState)(""),U=Object(m.a)(k,2),w=U[0],L=U[1],A=Object(c.useState)(""),D=Object(m.a)(A,2),K=(D[0],D[1]),F=function(){var e=Object(O.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)(t);case 2:s=e.sent,l(s.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id})}))),S(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){sessionStorage.getItem("Auth Key")?(L(localStorage.getItem("User Email")),F(),K(localStorage.getItem("PhotoURL"))):s("/login")}),[]);return Object(x.jsxs)("div",{className:"read-form-container mt-3 mb-2",children:[Object(x.jsx)(P.a,{}),Object(x.jsx)(I,{}),Object(x.jsx)("div",{className:"sidebar-body",children:Object(x.jsx)(f,{})}),r.length>0?Object(x.jsxs)("div",{className:"mobile-only",children:[Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/createBlogs")},children:"Create Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){localStorage.removeItem("User Name"),localStorage.removeItem("User Email"),sessionStorage.removeItem("Auth Key"),s("/login")},children:"Log out"})]}),Object(x.jsxs)("div",{className:"create-button",children:[Object(x.jsx)("button",{class:"btn btn-green",onClick:function(){return s("/savedBlogs")},children:"Saved Blogs"}),Object(x.jsx)("button",{class:"btn btn-green ml-3",onClick:function(){return s("/myBlogs")},children:"My Blogs"})]})]}):"",g?Object(x.jsx)(p.a,{active:!0,children:Object(x.jsx)(v.a,{indeterminate:!0,children:"Loading Blogs for you.."})}):r.length>0?r.map((function(e){return e.userEmail===w?Object(x.jsx)("div",{class:"blog-posts",children:Object(x.jsxs)("div",{class:"blog-content",children:[Object(x.jsx)("div",{className:"three-dots",children:Object(x.jsx)(N.a,{on:"click",position:"bottom right",trigger:Object(x.jsx)(R.a,{size:"1.5rem"}),children:Object(x.jsx)("div",{className:"popup-container",children:Object(x.jsxs)("p",{className:"delete-blog",onClick:function(){return function(e){var t=Object(o.d)(b,"saved-blogs",e);Object(o.c)(t).then((function(){F(),P.b.success("Data Deleted Successfully!",{pauseOnHover:!0})}))}(e.id)},children:[Object(x.jsx)(y.a,{size:"large",name:"trash"}),"Delete Post"]})})})}),Object(x.jsxs)("p",{class:"blog-timestamp",children:[e.timestamp," / ",Object(x.jsx)("span",{className:"tags-container",children:e.tag})]}),Object(x.jsx)("p",{class:"blog-title",children:e.title}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsx)(C.a,{className:"avatar-img",size:"mini",src:e.avatar?e.avatar:B,avatar:!0}),Object(x.jsx)("p",{class:"author-name",children:e.author.substring(0,21)})]}),Object(x.jsx)("p",{class:"blog-post",children:e.blogPost.map((function(e){return Object(x.jsx)("p",{children:e.inlineStyleRanges.length>0?"BOLD"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"text-bold",children:e.text}):"ITALIC"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"italic-text",children:e.text}):"UNDERLINE"===e.inlineStyleRanges[0].style?Object(x.jsx)("p",{className:"underlined-text",children:e.text}):Object(x.jsx)("p",{children:e.text}):Object(x.jsx)("p",{children:e.text})})}))})]})}):""})):Object(x.jsx)(E,{})]})}var X=Object(o.b)(b,"react-blogs"),Y=Object(o.b)(b,"saved-blogs");var $=function(){var e=Object(h.f)();return Object(c.useEffect)((function(){e("/login")}),[]),Object(x.jsxs)("div",{className:"main-body",children:[Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/register",element:Object(x.jsx)(V,{})}),Object(x.jsx)(h.a,{exact:!0,path:"/login",element:Object(x.jsx)(Z,{})})]}),Object(x.jsx)("div",{className:"blog-body",children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/myBlogs",element:Object(x.jsx)(_,{databaseRef:X})}),Object(x.jsx)(h.a,{exact:!0,path:"/readBlogs",element:Object(x.jsx)(U,{databaseRef:X,savedRef:Y})}),Object(x.jsx)(h.a,{exact:!0,path:"/createBlogs",element:Object(x.jsx)(M,{databaseRef:X})}),Object(x.jsx)(h.a,{exact:!0,path:"/savedBlogs",element:Object(x.jsx)(q,{databaseRef:X,savedRef:Y})})]})})]})},ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,398)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};s(371);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)($,{})})}),document.getElementById("root")),ee()}},[[372,1,2]]]);
//# sourceMappingURL=main.42ee7805.chunk.js.map