(this.webpackJsonpsw_blog=this.webpackJsonpsw_blog||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n.n(o),i=(n(93),n(66)),s=n(8),l=n(137),d=n.p+"static/media/desert_hills1.ebd70f66.jpg",b=n(34),u=function(){return Object(b.b)()},j=b.c,m=n.p+"static/media/luke_mando.5671aa1a.jpeg",g=n(2),h=Object(l.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n            rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0"},header:{fontFamily:"Star Jedi",marginTop:"8rem",fontSize:"3rem",textAlign:"center"},subheader_logout:{fontFamily:"Star Jedi",textAlign:"center",marginTop:"10rem",color:"grey"},subheader_login:{fontFamily:"Star Jedi",textAlign:"center",marginTop:"-6rem",color:"black",position:"absolute"},h6:{fontFamily:"Star Jedi",textAlign:"center",marginTop:"-3rem",color:"black",position:"absolute"},img:{height:"50vh",width:"auto",borderRadius:"3px 100px"},img_div:{display:"flex",justifyContent:"center",marginTop:"13rem"}}),p=function(e){var t=h(),n=j((function(e){return e.root.user_token})),r=j((function(e){return e.root.user_name})).toLowerCase();return Object(g.jsxs)("div",{className:t.root,children:[n&&""!==n&&void 0!==n?null:Object(g.jsxs)("h1",{className:t.header,children:["mos eisley archives",Object(g.jsx)("br",{}),Object(g.jsx)("span",{style:{fontFamily:"impact"},children:"&"}),"\xa0cantina forum"]}),n&&""!==n&&void 0!==n?Object(g.jsxs)("div",{className:t.img_div,children:[Object(g.jsxs)("h2",{className:t.subheader_login,children:["welcome, ",r,"!"]}),Object(g.jsx)("img",{src:m,className:t.img,alt:"luke_mandalorian"})]}):Object(g.jsx)("h3",{className:t.subheader_logout,children:"Please login or signup"})]})},x=n(13),O=n(31),f=Object(O.b)({name:"auth",initialState:{title:"Star Wars Book",author:"Author Person",release_year:"2021",description:"A wonderful story.",book_id:""},reducers:{chooseTitle:function(e,t){e.title=t.payload},chooseAuthor:function(e,t){e.author=t.payload},chooseReleaseYear:function(e,t){e.release_year=t.payload},chooseDescription:function(e,t){e.description=t.payload},chooseBookID:function(e,t){e.book_id=t.payload}}}),k=f.reducer,v=f.actions,A=v.chooseTitle,y=v.chooseAuthor,w=v.chooseReleaseYear,C=v.chooseDescription,N=v.chooseBookID,S=n(7),R=n.n(S),L=n(14),T={getAll:function(){var e=Object(L.a)(R.a.mark((function e(t,n){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n),{method:"GET",headers:{"Content-Type":"application/json","access-token":"Bearer ".concat(t)}});case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch data (many) from server");case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(L.a)(R.a.mark((function e(t,n,r){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n,"/").concat(r),{method:"GET",headers:{"Content-Type":"application/json","access-token":"Bearer ".concat(t)}});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch data (one) from server");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),create:function(){var e=Object(L.a)(R.a.mark((function e(t,n){var r,a,o=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:{},e.next=3,fetch("/api/".concat(n),{method:"POST",headers:{"Content-Type":"application/json","access-token":"Bearer ".concat(t)},body:JSON.stringify(r)});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Failed to create new data on server");case 6:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(L.a)(R.a.mark((function e(t,n,r){var a,o=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>3&&void 0!==o[3]?o[3]:{},e.next=3,fetch("/api/".concat(n,"/").concat(r),{method:"POST",headers:{"Content-Type":"application/json","access-token":"Bearer ".concat(t)},body:JSON.stringify(a)});case 3:if(e.sent.ok){e.next=6;break}throw new Error("Failed to edit data in the database!");case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),delete:function(){var e=Object(L.a)(R.a.mark((function e(t,n,r){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n,"/").concat(r),{method:"DELETE",headers:{"Content-Type":"application/json","access-token":"Bearer ".concat(t)}});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Failed to delete data from the database!");case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),outerRim:function(){var e=Object(L.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.swapi.tech/api/people/".concat(t)).then((function(e){return e.json()})).then((function(e){return e}));case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=n(107),E=n(140),Z=n(142),B=n(39),M=n(143),D=n(144),F=Object(I.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n      rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",minWidth:275,height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"3rem",paddingTop:"5rem",margin:"0"},container:{flexGrow:2,display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"3rem"},book:{height:140,width:120,cursor:"pointer",color:"lightgrey",backgroundColor:"rgb(232, 246, 239, .7)","&:hover":{backgroundColor:"rgb(184, 223, 216, .7)"},borderRadius:"22px 3px 17px 2px",backgroundImage:"url(".concat("data:image/png;base64,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",")")},input:{backgroundColor:"rgb(255, 153, 0, .5)","&:hover":{backgroundColor:"rgb(255, 153, 0)"},border:"1px solid rgb(255, 153, 0, .5)",borderRadius:"5px",padding:"10px"},delete:{backgroundColor:"rgb(224, 93, 93, .7)","&:hover":{backgroundColor:"rgb(224, 93, 93)"},margin:"auto 1rem"},view:{backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}},add:{backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"},margin:"auto 1rem"},jedi:{fontFamily:"Star Jedi"},book_title:{fontSize:"20px",marginTop:"9px"}}),z=function(){var e=F(),t=Object(s.f)(),n=function(){var e=j((function(e){return e.root.user_token})),t=Object(r.useState)([]),n=Object(x.a)(t,2),a=n[0],o=n[1],c=function(){var t=Object(L.a)(R.a.mark((function t(){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("data was fetched"),t.next=3,T.getAll(e,"books");case 3:n=t.sent,o(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),{bookData:a,getData:c}}(),a=n.bookData,o=n.getData,c=Object(r.useState)(""),i=Object(x.a)(c,2),l=i[0],d=i[1],b=Object(r.useState)(""),m=Object(x.a)(b,2),h=m[0],p=m[1],O=u(),f=j((function(e){return e.root.user_token})),k=j((function(e){return e.root.user_name})).toLowerCase(),v=a.filter((function(e){return e.title.toLowerCase().includes(h.toLowerCase())})).map((function(t){return Object(g.jsx)(E.a,{id:t.id,onClick:function(){return function(e){d(e.id),O(N(e.id)),O(y(e.author)),O(C(e.description)),O(A(e.title)),O(w(e.release_year)),console.log(e.id)}(t)},className:e.book,children:Object(g.jsxs)(Z.a,{children:[Object(g.jsx)(B.a,{className:e.book_title,component:"h5",variant:"h5",children:t.title}),Object(g.jsx)("br",{}),t.author]})},t.id)}));return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsxs)("h2",{className:e.jedi,children:[k,"'s Archives"]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{children:["Search Title",Object(g.jsx)("br",{}),Object(g.jsx)("input",{value:h,onChange:function(e){return p(e.target.value)},className:e.input})]}),Object(g.jsx)(M.a,{className:e.delete,onClick:function(){console.log(l),T.delete(f,"books",l).then((function(){return o()}))},size:"small",children:"Delete Selection"}),Object(g.jsx)(M.a,{className:e.view,onClick:function(){t.push("/book-details")},size:"small",children:"View Selection"}),Object(g.jsx)(M.a,{className:e.add,onClick:function(){t.push("/add-books")},size:"small",children:"Add Entry"})]}),Object(g.jsx)(D.a,{className:e.container,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:1,children:v})]})},J=n.p+"static/media/notebook.df740143.png",Y=n.p+"static/media/jedi_texts.74c66d83.png",H=Object(I.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n            rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",zIndex:-1,padding:"0",margin:"0"},jedi_texts:{position:"absolute",top:"15rem",left:"6rem",borderRadius:"30px 30px 30px 30px"},paper:{height:420,width:360,marginTop:"11%",marginLeft:"60%",backgroundImage:"url(".concat(J,")"),backgroundRepeat:"no-repeat",backgroundPosition:"45% 40%",position:"absolute",borderRadius:"2px 2px 2px 2px"},paper_top:{paddingLeft:"45px"},paper_body:{width:"20rem",marginLeft:"2.5rem"},return:{backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"},marginLeft:"6rem",marginTop:"10rem"}}),X=function(){var e=H(),t=Object(s.f)(),n=j((function(e){return e.book}));return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)("img",{src:Y,className:e.jedi_texts,alt:"ancient jedi texts"}),Object(g.jsxs)(E.a,{className:e.paper,children:[Object(g.jsxs)(Z.a,{className:e.paper_top,children:[Object(g.jsx)(B.a,{component:"h2",variant:"h5",children:n.title}),Object(g.jsxs)(B.a,{children:[n.author,Object(g.jsx)("br",{}),n.release_year]})]}),Object(g.jsx)(B.a,{className:e.paper_body,component:"p",variant:"body1",children:n.description}),Object(g.jsx)(Z.a,{})]}),Object(g.jsx)(M.a,{className:e.return,onClick:function(){t.push("/archive")},children:"Return"})]})},W=n(17),Q=n(62),U=n(158),P=n.p+"static/media/falcon.56f936a9.png",G=Object(l.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n            rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0"},form:{marginTop:"6rem",width:"20rem",height:"27rem",marginLeft:"10rem",backgroundColor:"rgb(255, 153, 0, .5)",border:"1px solid rgb(255, 153, 0, .5)",borderRadius:"5px",padding:"10px"},form_div:{},input:{height:"8rem"},jedi:{fontFamily:"Star Jedi"},submit:{display:"inline",marginLeft:"10rem",marginTop:"1rem",backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}},falcon:{position:"absolute",height:"35%",width:"auto",bottom:"10rem",right:"7rem"}}),_=function(e){var t=G(),n=Object(b.b)(),r=j((function(e){return e})),a=Object(Q.a)({}),o=a.register,c=a.handleSubmit,i=Object(s.f)(),l=j((function(e){return e.root.user_token}));return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsxs)("div",{className:t.form_div,children:[Object(g.jsxs)("form",{className:t.form,onSubmit:c((function(e,t){n(A(e.title)),n(y(e.author)),n(w(e.release_year)),n(C(e.description))})),children:[Object(g.jsx)("h2",{className:t.jedi,children:"upload to Your Archives"}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({inputProps:{maxLength:200}},o("title")),{},{name:"title",placeholder:"book title"}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({inputProps:{maxLength:150}},o("author")),{},{name:"author",placeholder:"author"}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({inputProps:{maxLength:4}},o("release_year")),{},{name:"release_year",placeholder:"release year - [yyyy]"}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({minRows:"4",maxRows:"4",multiline:!0,inputProps:{maxLength:500}},o("description")),{},{name:"description",placeholder:"description - max 500 char"}))}),Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{type:"submit",children:"Load"})]}),Object(g.jsx)(M.a,{className:t.submit,onClick:function(){T.create(l,"books",r.book),i.push("/archive")},children:"Post"})]}),Object(g.jsx)("img",{src:P,className:t.falcon,alt:"millennium falcon"})]})},V=Object(O.b)({name:"auth",initialState:{post_title:"Blog Post for the Ages",sub_title:"SPOILER ALERT",body:"Bloggish Authorr"},reducers:{choosePostTitle:function(e,t){e.post_title=t.payload},chooseBody:function(e,t){e.body=t.payload},chooseSubtitle:function(e,t){e.sub_title=t.payload}}}),q=V.reducer,K=V.actions,$=K.choosePostTitle,ee=K.chooseBody,te=K.chooseSubtitle,ne=n.p+"static/media/han_cantina.df8a492f.jpg",re=Object(l.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n            rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0"},form:{marginTop:"6rem",width:"15rem",height:"25rem",marginLeft:"10rem",backgroundColor:"rgb(255, 153, 0, .5)",border:"1px solid rgb(255, 153, 0, .5)",borderRadius:"5px",padding:"10px"},input:{height:"8rem"},jedi:{fontFamily:"Star Jedi"},submit:{display:"inline",marginLeft:"10rem",marginTop:"2rem",backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}},cantina:{position:"absolute",right:"8rem",top:"10rem",borderRadius:"20px"}}),ae=function(e){var t=re(),n=Object(b.b)(),r=j((function(e){return e})),a=Object(Q.a)({}),o=a.register,c=a.handleSubmit,i=Object(s.f)(),l=j((function(e){return e.root.user_token}));return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)("img",{src:ne,className:t.cantina,alt:"han solo in cantina"}),Object(g.jsxs)("form",{className:t.form,onSubmit:c((function(e,t){n($(e.post_title)),n(te(e.sub_title)),n(ee(e.body)),console.log(e.post_title)})),children:[Object(g.jsx)("h2",{className:t.jedi,children:"From the Cantina..."}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({inputProps:{maxLength:100},maxRows:"1",multiline:!0},o("post_title")),{},{name:"post_title",placeholder:"post title"}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({inputProps:{maxLength:200},maxRows:"1",multiline:!0},o("sub_title")),{},{name:"sub_title",placeholder:"subtitle"}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,Object(W.a)(Object(W.a)({minRows:"6",maxRows:"6",multiline:!0,inputProps:{maxLength:5e3}},o("body")),{},{name:"body",placeholder:"body - max 5000 char"}))}),Object(g.jsx)(M.a,{type:"submit",children:"Create"})]}),Object(g.jsx)(M.a,{className:t.submit,onClick:function(){T.create(l,"blog",r.blog),i.push("/blog")},children:"Submit"})]})},oe=n(81),ce=n(161),ie=n(146),se=n(149),le=n(150),de=n(151),be=n(160),ue=n(152),je=n(145),me=n(153),ge=n(154),he=n(147),pe=n(148),xe=Object(O.b)({name:"root",initialState:{user_token:"",user_name:""},reducers:{chooseUserToken:function(e,t){e.user_token=t.payload},chooseUserName:function(e,t){e.user_name=t.payload}}}),Oe=xe.reducer,fe=xe.actions,ke=fe.chooseUserToken,ve=fe.chooseUserName,Ae=n.p+"static/media/milk.45d16113.png",ye=Object(oe.a)({palette:{primary:{main:"#ff9900"},secondary:{main:"#ffc400"},error:{main:"#f44336"},warning:{main:"#ff9800"},info:{main:"#2196f3"},success:{main:"#09FE00"},text:{primary:"#000000",secondary:"#FFFFFF"}}}),we=Object(l.a)((function(e){return Object(ce.a)({root:{display:"flex"},appBar:{opacity:.1},menuButton:{marginRight:e.spacing(2)},drawer:{width:100,flexShrink:0,fontFamily:"Star Jedi"},drawerPaper:{width:100,backgroundColor:"lightgrey"},drawerHeader:Object(W.a)(Object(W.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"left",backgroundColor:"grey"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-100},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},milk:{height:"4rem"},milk_button:{padding:"0",marginRight:"1rem"},typo:{fontFamily:"Star Jedi"},toolbar:{display:"flex"},toolbar_button:{marginLeft:"auto",marginRight:"2rem",color:"black",fontFamily:"Star Jedi",textTransform:"lowercase"},github:{margin:"0",color:"black",fontFamily:"Star Jedi",textTransform:"lowercase"}})})),Ce=function(){var e=we();return Object(g.jsx)("img",{src:Ae,className:e.milk,alt:"blue milk icon"})},Ne=Object(s.g)((function(e){console.log(e);var t=e.history,n=we(),a=Object(r.useState)(!1),o=Object(x.a)(a,2),c=o[0],i=o[1],s=j((function(e){return e.root.user_token})),l=u(),d=function(){i(!1)},b=[{text:"Home",onClick:function(){return t.push("/")}},{text:"Login",onClick:function(){return t.push("/signin")}},{text:"Sign Up",onClick:function(){return t.push("/signup")}}],m=[{text:"Home",onClick:function(){return t.push("/")}},{text:"Log Out",onClick:function(){l(ke("")),t.push("/"),window.location.reload(),console.log("Logged Out")}},{text:"Your Archive",onClick:function(){return t.push("/archive")}},{text:"Cantina Forum",onClick:function(){return t.push("/blog")}}];return Object(g.jsx)(ie.a,{theme:ye,children:Object(g.jsxs)("div",{className:n.root,children:[Object(g.jsx)(he.a,{}),Object(g.jsx)(pe.a,{onClickAway:d,children:Object(g.jsx)(se.a,{position:"fixed",children:Object(g.jsxs)(le.a,{className:n.toolbar,children:[Object(g.jsx)(de.a,{className:n.milk_button,onClick:function(){i(!0)},children:Object(g.jsx)(Ce,{})}),Object(g.jsx)(B.a,{className:n.typo,variant:"h6",noWrap:!0,children:"archive index"}),s&&""!==s&&void 0!==s?Object(g.jsx)(M.a,{onClick:function(){t.push("outer-rim")},className:n.toolbar_button,children:"watto's table"}):null,Object(g.jsx)("a",{className:n.toolbar_button,href:"https://github.com/zachPorras/mos-eisley-hosted",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"github icon"})})]})})}),Object(g.jsxs)(be.a,{className:n.drawer,variant:"persistent",anchor:"top",open:c,classes:{paper:n.drawerPaper},children:[Object(g.jsx)("div",{className:n.drawerHeader,children:Object(g.jsx)(de.a,{onClick:d,children:Object(g.jsx)(Ce,{})})}),Object(g.jsx)(ue.a,{}),s&&""!==s&&void 0!==s?Object(g.jsx)(je.a,{children:m.map((function(e,t){var n=e.text,r=e.onClick;return Object(g.jsx)(me.a,{button:!0,onClick:function(){d(),r()},children:Object(g.jsx)(ge.a,{primary:n})},n)}))}):Object(g.jsx)(je.a,{children:b.map((function(e,t){var n=e.text,r=e.onClick;return Object(g.jsx)(me.a,{button:!0,onClick:function(){d(),r()},children:Object(g.jsx)(ge.a,{primary:n})},n)}))})]})]})})})),Se=Object(l.a)((function(){return Object(ce.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n        rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0",display:"flex",justifyContent:"center"},form:{margin:"8rem auto"},h2:{fontFamily:"Star Jedi"},submit:{backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}}})})),Re=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(x.a)(o,2),i=c[0],l=c[1],d=j((function(e){return e.root.user_token})),b=Se(),m=u(),h=Object(s.f)();return Object(g.jsx)("div",{className:b.root,children:Object(g.jsxs)("div",{className:b.form,children:[Object(g.jsx)("h2",{className:b.h2,children:"Login"}),Object(g.jsx)("br",{}),d&&""!==d&&void 0!==d?"You have logged in!":Object(g.jsxs)("form",{action:"#",children:[Object(g.jsx)("div",{children:Object(g.jsx)(U.a,{type:"text",placeholder:"email",onChange:function(e){a(e.target.value)},value:n})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,{type:"password",placeholder:"Password",onChange:function(e){l(e.target.value)},value:i})}),Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{className:b.submit,onClick:function(e){e.preventDefault(),console.log("You pressed login");var t={email:n,password:i};fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("this came from the backend",e),e.msg&&"Bad username or password"===e.msg?window.alert("Invalid, please try again!"):m(ke(e.access_token))&&m(ve(e.user_name))})),h.push("/")},type:"submit",children:"Login"})]})]})})},Le=Object(l.a)((function(){return Object(ce.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n        rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0",display:"flex",justifyContent:"center"},form:{margin:"8rem auto"},h2:{fontFamily:"Star Jedi",textAlign:"center"},submit:{backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}}})})),Te=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(x.a)(o,2),i=c[0],s=c[1],l=Object(r.useState)(""),d=Object(x.a)(l,2),b=d[0],m=d[1],h=j((function(e){return e.root.user_token})),p=Le(),O=u();return Object(g.jsx)("div",{className:p.root,children:Object(g.jsxs)("div",{className:p.form,children:[Object(g.jsx)("h2",{className:p.h2,children:"Sign up"}),Object(g.jsx)("br",{}),h&&""!==h&&void 0!==h?"You have signed up!":Object(g.jsxs)("form",{action:"#",children:[Object(g.jsx)("div",{children:Object(g.jsx)(U.a,{type:"text",placeholder:"name",onChange:function(e){m(e.target.value)},value:b})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,{type:"text",placeholder:"email",onChange:function(e){a(e.target.value)},value:n})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)(U.a,{type:"password",placeholder:"Password",onChange:function(e){s(e.target.value)},value:i})}),Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{className:p.submit,onClick:function(e){e.preventDefault(),console.log("You pressed login");var t={user_name:b,email:n,password:i};fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("this came from the backend",e),e.msg&&"Email taken"===e.msg?window.alert("That email is already used!"):O(ke(e.access_token))}))},type:"submit",children:"SignUp"})]})]})})},Ie=n(27),Ee=n(4),Ze=n(155),Be=n(156),Me=n(157),De=n(80),Fe=n.n(De),ze=n.p+"static/media/cantina.f4baf85b.jpg",Je=Object(l.a)((function(e){return Object(ce.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n          rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0"},link:{margin:"7rem auto 0 5rem",display:"inline",backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}},cantina:{position:"absolute",top:"11rem",left:"5rem",borderRadius:"20px"},blog_list:{maxWidth:340,margin:"0 auto auto 63%",backgroundColor:"rgb(61, 178, 255, .8)",border:"9px solid rgb(34, 87, 122, .3)"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.standard})},expandOpen:{transform:"rotate(180deg)"},inline_edit:{display:"inline"},h6:{paddingLeft:"1rem",color:""}})})),Ye=function(){var e=Je(),t=Object(s.f)(),n=Object(r.useState)(!1),a=Object(x.a)(n,2),o=a[0],c=a[1],i=function(){var e=j((function(e){return e.root.user_token})),t=Object(r.useState)([]),n=Object(x.a)(t,2),a=n[0],o=n[1],c=function(){var t=Object(L.a)(R.a.mark((function t(){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("data was fetched"),t.next=3,T.getAll(e,"blog");case 3:n=t.sent,o(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),{blogData:a,getData:c}}(),l=i.blogData,d=(i.getData,function(){c(!o)}),b=l.slice(-2).reverse().map((function(t){return Object(g.jsxs)(E.a,{className:e.blog_list,children:[Object(g.jsx)(Ze.a,{title:t.post_title,subheader:t.timestamp}),Object(g.jsx)("h6",{children:"Posted by GALAXY_ANONYMOUS"}),Object(g.jsx)(Be.a,{className:e.inline_edit,children:Object(g.jsx)(de.a,{className:Object(Ee.a)(e.expand,Object(Ie.a)({},e.expandOpen,o)),onClick:d,"aria-expanded":o,"aria-label":"show more",children:Object(g.jsx)(Fe.a,{})})}),Object(g.jsx)(Z.a,{className:e.inline_edit,children:Object(g.jsx)(B.a,{className:e.inline_edit,variant:"body2",color:"textSecondary",component:"p",children:Object(g.jsx)("em",{children:t.sub_title})})}),Object(g.jsx)(Me.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(B.a,{paragraph:!0,children:t.body})})})]})}));return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(M.a,{onClick:function(){t.push("/blog-form")},className:e.link,children:"Contribute to the Forum"}),Object(g.jsx)("img",{src:ze,className:e.cantina,alt:"cantina scene"}),b]})},He=Object(l.a)((function(e){return Object(ce.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n          rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0",display:"flex",justifyContent:"center"},card:{margin:"13% auto auto auto",height:140,width:"auto",fontFamily:"Star Jedi",textAlign:"center",fontSize:"6rem",color:"rgb(0, 0, 0, .7)"},button:{position:"absolute",marginTop:"27rem",backgroundColor:"rgb(255, 225, 148, .8)","&:hover":{backgroundColor:"rgb(255, 225, 148)"}}})})),Xe=function(){var e=He(),t=Object(s.f)(),n=function(){var e=j((function(e){return e})),t=Object(r.useState)([]),n=Object(x.a)(t,2),a=n[0],o=n[1],c=function(){var t=Object(L.a)(R.a.mark((function t(){var n,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("data was fetched"),console.log("this is the chosen number: ".concat(e.rim.chosen_num)),t.next=4,T.outerRim(e.rim.chosen_num);case 4:n=t.sent,console.log("here is the result: ".concat(n.result.properties.name)),r=n.result.properties.name.toLowerCase(),o(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),{rimData:a,getData:c}}(),a=n.rimData;n.getData;return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)("h1",{className:e.card,children:a}),Object(g.jsx)(M.a,{className:e.button,onClick:function(){t.push("/outer-rim")},children:"Back to Watto's dice"})]})},We=Object(O.b)({name:"rim",initialState:{character:"Rando Charissian",homeworld:"Heumwurld",chosen_num:"1"},reducers:{chooseChosenNum:function(e,t){e.chosen_num=t.payload}}}),Qe=We.reducer,Ue=We.actions.chooseChosenNum,Pe=n.p+"static/media/watto_die_crop.105e7ccf.png",Ge=n.p+"static/media/watto_die_crop_rolled.08b60156.png",_e=Object(l.a)({root:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), \n            rgba(0, 0, 0, 0.7)), url(".concat(d,");"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"absolute",zIndex:-1,padding:"0",margin:"0"},form:{marginTop:"6rem",width:"20rem",height:"27rem",marginLeft:"10rem",backgroundColor:"rgb(255, 153, 0, .5)",border:"1px solid rgb(255, 153, 0, .5)",borderRadius:"5px",padding:"10px"},watto_die:{position:"absolute",height:"15rem",width:"auto",top:"5rem"},watto_text:{fontFamily:"Star Jedi",position:"absolute",top:"22rem",color:"darkgrey",textAlign:"center"},med_div:{display:"flex",justifyContent:"center"},buttons:{display:"flex",justifyContent:"space-around",width:"20%",margin:"27rem auto auto auto"},submit:{marginTop:"2rem",backgroundColor:"rgb(87, 204, 153, .7)","&:hover":{backgroundColor:"rgb(100, 204, 153)"}}}),Ve=function(){var e=_e(),t=u(),n=Object(s.f)(),a=Object(r.useState)(!1),o=Object(x.a)(a,2),c=o[0],i=o[1];return Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)("div",{className:e.med_div,children:[1==c?Object(g.jsx)("img",{className:e.watto_die,src:Ge,alt:"watto_dice"}):Object(g.jsx)("img",{className:e.watto_die,src:Pe,alt:"watto_dice"}),Object(g.jsxs)("h2",{className:e.watto_text,children:["Roll Watto's dice",Object(g.jsx)("br",{}),"and let fate decide..."]}),Object(g.jsxs)("div",{className:e.buttons,children:[Object(g.jsx)(M.a,{className:e.submit,onClick:function(e){var n=Math.floor(83*Math.random())+1;t(Ue(n)),console.log("chosen_num is: ".concat(n)),i(!0)},children:"Roll"}),Object(g.jsx)(M.a,{className:e.submit,onClick:function(){i(!1),n.push("/outer-rim/results")},children:"See Result"})]})]})})},qe=Object(O.a)({reducer:{book:k,root:Oe,blog:q,rim:Qe},devTools:!0});n(105);c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(b.a,{store:qe,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(Ne,{}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/add-books",children:Object(g.jsx)(_,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/archive",children:Object(g.jsx)(z,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/book-details",children:Object(g.jsx)(X,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{exact:!0,path:"/signin",children:Object(g.jsx)(Re,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{exact:!0,path:"/signup",children:Object(g.jsx)(Te,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{exact:!0,path:"/blog-form",children:Object(g.jsx)(ae,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/blog",children:Object(g.jsx)(Ye,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/outer-rim",children:Object(g.jsx)(Ve,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/outer-rim/results",children:Object(g.jsx)(Xe,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/blog",children:Object(g.jsx)(Ye,{})})}),Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{exact:!0,path:"/",children:Object(g.jsx)(p,{title:"Mos Eisley Archives"})})})]})})}),document.getElementById("root"))},93:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.1ff6b52c.chunk.js.map