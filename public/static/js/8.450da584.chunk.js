(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{42:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(49);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n),c=a(48),l=a(10),o=a(0),s=a.n(o),i=a(1),u=a(42),m=a(44),p=a(58),E=a(50),d=a(15),f=a(11),h=a(51),v=(a(65),function(e){var t=Object(h.a)(),a=t.isLoading,n=t.error,i=t.sendRequest,v=t.clearError,b=Object(o.useContext)(f.a),j=Object(o.useState)(!1),k=Object(l.a)(j,2),C=k[0],O=k[1],N=Object(o.useState)(!1),_=Object(l.a)(N,2),g=_[0],w=_[1],y=function(){return O(!1)},D=function(){return w(!1)},I=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!1),t.prev=1,t.next=4,i("".concat("https://marwen-mern-project.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+b.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:n,onClear:v}),s.a.createElement(p.a,{show:C,onCancel:y,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:y},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement("h2",null,"THE MAP!"))),s.a.createElement(p.a,{show:g,onCancel:D,header:"Proceed?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:D},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:I},"DELETE"))},s.a.createElement("p",null,"Are you sure?")),s.a.createElement("li",{className:"place-item"},s.a.createElement(u.a,{className:"place-item__content"},a&&s.a.createElement(d.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://marwen-mern-project.herokuapp.com","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(m.a,{inverse:!0,onClick:function(){return O(!0)}},"VIEW ON MAP"),b.userId===e.creatorId&&s.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),b.userId===e.creatorId&&s.a.createElement(m.a,{danger:!0,onClick:function(){return w(!0)}},"DELETE")))))}),b=(a(66),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(u.a,null,s.a.createElement("h2",null," No places found!! Maybe create one?"),s.a.createElement(m.a,{to:"/places/new"},"Share place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(v,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(h.a)(),m=u.isLoading,p=u.error,f=u.sendRequest,v=u.clearError,j=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://marwen-mern-project.herokuapp.com/api","/places/user/").concat(j));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[f,j]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:p,onClear:v}),m&&s.a.createElement("div",{className:"center"},s.a.createElement(d.a,null)),!m&&a&&s.a.createElement(b,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=8.450da584.chunk.js.map