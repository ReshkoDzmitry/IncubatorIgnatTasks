(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={buttonWrapper:"Affairs_buttonWrapper__2lPws",button:"Affairs_button__RV4R7",active:"Affairs_active__wvDyA",affair:"Affairs_affair__6_y_Z",itemName:"Affairs_itemName__11jd4",itemPriority:"Affairs_itemPriority__37AGA",buttonAffairWrapper:"Affairs_buttonAffairWrapper__1A54i",buttonAffair:"Affairs_buttonAffair__1ShB9"}},,,function(e,a,t){e.exports={link:"Header_link__3UGRj",active:"Header_active__A37qF",block:"Header_block__7vhPU",header:"Header_header__2ISNC",menu:"Header_menu__32vW5"}},,function(e,a,t){e.exports={input:"Greeting_input__FPzvx",greeting:"Greeting_greeting__33hGK",error:"Greeting_error__2_5oT",errorInput:"Greeting_errorInput__3etr6",requiredToFill:"Greeting_requiredToFill__1CJM0",count:"Greeting_count__3Rp9y",countWrapper:"Greeting_countWrapper__10QaV",button:"Greeting_button__BLX7_"}},function(e,a,t){e.exports={message:"Message_message__3EWTR",avatar:"Message_avatar__RrFG6",content:"Message_content__3jxBu",angel:"Message_angel__3lEJc",text:"Message_text__2x5ZQ",name:"Message_name__3l-ID",time:"Message_time__3otMK"}},,,,,function(e,a,t){e.exports={input:"SuperInputText_input__T1al-",superInput:"SuperInputText_superInput__1-Ka-",errorInput:"SuperInputText_errorInput__3Mlhp",error:"SuperInputText_error__3wqga"}},function(e,a,t){e.exports={wrapper:"Error404_wrapper__18vyu",errorNumber:"Error404_errorNumber__3BNkk",errorName:"Error404_errorName__17fMU",badge:"Error404_badge__2pAjO"}},,,function(e,a,t){e.exports={blue:"HW4_blue__20kiJ",column:"HW4_column__1Jzj5",testSpanError:"HW4_testSpanError__35nyT"}},function(e,a,t){e.exports={default:"SuperButton_default__1zT3Q",button:"SuperButton_button__I00iH"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2JZOg"}},,,,,,function(e,a,t){e.exports={App:"App_App__1Mok0"}},,,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=(t(34),t(25)),o=t.n(i),u=t(8),s=t.n(u);var m=function(e){return r.a.createElement("div",{className:s.a.message},r.a.createElement("img",{className:s.a.avatar,src:e.avatar}),r.a.createElement("div",{className:s.a.angel}),r.a.createElement("div",{className:s.a.content},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.message},e.message),r.a.createElement("div",{className:s.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",f="some text",p="22:00";var E=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:_,name:d,message:f,time:p}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(6),b=t(2),h=t.n(b);var g=function(e){return r.a.createElement("div",{className:h.a.affair},r.a.createElement("div",{className:h.a.itemName},e.affair.name),r.a.createElement("div",{className:h.a.itemPriority},e.affair.priority),r.a.createElement("div",{className:h.a.buttonAffairWrapper},r.a.createElement("button",{className:h.a.buttonAffair,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"x")))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=h.a.button+" "+("all"===e.filter?h.a.active:""),n=h.a.button+" "+("high"===e.filter?h.a.active:""),l=h.a.button+" "+("middle"===e.filter?h.a.active:""),c=h.a.button+" "+("low"===e.filter?h.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("div",{className:h.a.buttonWrapper},r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low")))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(k),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(v.a)(c,2),o=i[0],u=i[1],s=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("div",null,r.a.createElement(N,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:o})),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(28),j=t(7),y=t.n(j),A=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=e.onEnter,o=l?y.a.errorInput:y.a.input;return r.a.createElement("div",{className:y.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onKeyDown:function(e){return i(e)},onBlur:t,placeholder:"Enter name"}),r.a.createElement("span",{className:y.a.requiredToFill},"*"),r.a.createElement("span",null,r.a.createElement("button",{className:y.a.button,onClick:n,disabled:!a},"Add"))),r.a.createElement("div",{className:y.a.error},l),r.a.createElement("div",{className:y.a.countWrapper},r.a.createElement("span",{className:y.a.count},"Count - ",c)))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(""),s=Object(v.a)(u,2),m=s[0],_=s[1],d=function(){t(i),alert("Hello ".concat(i,"!")),o("")},f=a.length;return r.a.createElement(A,{name:i,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(o(a),m&&_("")):(i&&o(""),_("* Required field"))},addUser:d,error:m,totalUsers:f,onEnter:function(e){"Enter"===e.key&&i&&(d(),o(""))}})},O=t(42);var S=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a={_id:Object(O.a)(),name:e};l([].concat(Object(x.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(10),W=t(13),I=t.n(W),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,u=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(I.a.error," ").concat(o||""),m="".concat(I.a.input," ").concat(c?I.a.errorInput:I.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m,placeholder:"Enter text"},u)),c&&r.a.createElement("span",{className:s},c))},G=t(17),M=t.n(G),P=t(18),H=t.n(P),J=function(e){e.red;var a=e.className,t=Object(T.a)(e,["red","className"]),n="".concat(H.a.button," ").concat(H.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:n},t))},B=t(19),U=t.n(B),R=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(U.a.checkbox," ").concat(t||"");return r.a.createElement("div",null,r.a.createElement("label",{className:"wrapperBox"},r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l))),r.a.createElement("div",null,n&&r.a.createElement("span",{className:U.a.spanClassName},n))))};var q=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(v.a)(o,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(F,{className:M.a.blue}),r.a.createElement(J,null,"default"),r.a.createElement(J,{red:!0,onClick:i},"delete "),r.a.createElement(J,{disabled:!0},"disabled"),r.a.createElement(R,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(R,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var K=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(q,null))},Z=t(14),z=t.n(Z);var D=function(){return r.a.createElement("div",{className:z.a.wrapper},r.a.createElement("div",{className:z.a.errorNumber},"404"),r.a.createElement("div",{className:z.a.errorName},"Page not found!"),r.a.createElement("div",{className:z.a.badge},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var Q=function(){return r.a.createElement("div",null,"JuniorPlus")};var L=function(){return r.a.createElement("div",null,"Junior")},V=t(1),X="/pre-junior",Y="/junior",$="/junior+";var ee=function(){return r.a.createElement("div",null,r.a.createElement(V.d,null,r.a.createElement(V.b,{exact:!0,path:"/",render:function(){return r.a.createElement(V.a,{to:X})}}),r.a.createElement(V.b,{path:X,render:function(){return r.a.createElement(K,null)}}),r.a.createElement(V.b,{path:Y,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(V.b,{path:$,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(V.b,{render:function(){return r.a.createElement(D,null)}})))},ae=t(5),te=t.n(ae),ne=t(9);var re=function(){return r.a.createElement("div",{className:te.a.header},r.a.createElement(ne.b,{to:X,className:te.a.link,activeClassName:te.a.active},r.a.createElement("div",{className:te.a.menu},"Pre-junior")),r.a.createElement(ne.b,{to:Y,className:te.a.link,activeClassName:te.a.active},r.a.createElement("div",{className:te.a.menu},"Junior")),r.a.createElement(ne.b,{to:$,className:te.a.link,activeClassName:te.a.active},r.a.createElement("div",{className:te.a.menu},"Junior+")),r.a.createElement("div",{className:te.a.block}))};var le=function(){return r.a.createElement("div",null,r.a.createElement(ne.a,null,r.a.createElement(re,null),r.a.createElement(ee,null)))};var ce=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.a864d870.chunk.js.map