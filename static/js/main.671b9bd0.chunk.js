(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={title:"Statistics_title__3hjBI",list:"Statistics_list__2T7yp",result:"Statistics_result__1l0KO",details:"Statistics_details__3Wgaw Statistics_result__1l0KO",common:"Statistics_common__3ofeU Statistics_result__1l0KO",text:"Statistics_text__3mA7w",good:"Statistics_good__3LExL Statistics_details__3Wgaw Statistics_result__1l0KO",neutral:"Statistics_neutral__1-4tP Statistics_details__3Wgaw Statistics_result__1l0KO",bad:"Statistics_bad__1nxqe Statistics_details__3Wgaw Statistics_result__1l0KO",total:"Statistics_total__9vZE6 Statistics_common__3ofeU Statistics_result__1l0KO",positivePercentage:"Statistics_positivePercentage___jdVO Statistics_common__3ofeU Statistics_result__1l0KO"}},,function(t,e,s){t.exports={button__list:"FeedbackOptions_button__list__UhB1A",button:"FeedbackOptions_button__2DhYD",good:"FeedbackOptions_good__td54r FeedbackOptions_button__2DhYD",neutral:"FeedbackOptions_neutral__lOCxA FeedbackOptions_button__2DhYD",bad:"FeedbackOptions_bad__Drzpw FeedbackOptions_button__2DhYD"}},,,function(t,e,s){t.exports={section:"Section_section__s4CoU",title:"Section_title__Bcb3Q"}},,function(t,e,s){t.exports={container:"Container_container__3sYH0"}},function(t,e,s){t.exports={text:"Notification_text__1Y2cF"}},function(t,e,s){t.exports={wrapper:"App_wrapper__3-IPQ"}},,,,,,function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(2),c=s.n(a),i=s(7),n=s.n(i),r=(s(15),s(16),s(4)),_=s(3),o=s.n(_),l=s(0),u=function(t){var e=t.onLeaveFeedback,s=t.names;return Object(l.jsx)("ul",{className:o.a.button__list,children:s.map((function(t){return Object(l.jsx)("li",{className:o.a.button__item,children:Object(l.jsx)("button",{type:"button",className:o.a[t],onClick:function(){return e(t)},children:t})},t)}))})},b=s(1),d=s.n(b),j=function(t){var e=t.options,s=t.total,a=t.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:d.a.title,children:"Statistics"}),Object(l.jsxs)("ul",{className:d.a.list,children:[Object.keys(e).map((function(t){return Object(l.jsx)("li",{className:d.a[t],children:Object(l.jsxs)("p",{className:d.a.text,children:[t,": ",e[t]]})},t)})),Object(l.jsx)("li",{className:d.a.total,children:Object(l.jsxs)("p",{className:d.a.text,children:["Total: ",s]})}),Object(l.jsx)("li",{className:d.a.positivePercentage,children:Object(l.jsxs)("p",{className:d.a.text,children:["Positive feedback: ",a]})})]})]})},O=s(6),p=s.n(O),x=s(8),h=s.n(x),m=function(t){var e=t.children;return Object(l.jsx)("div",{className:h.a.container,children:e})},f=function(t){var e=t.title,s=void 0===e?"":e,a=t.children;return Object(l.jsx)("section",{className:p.a.section,children:Object(l.jsxs)(m,{children:[s&&Object(l.jsx)("h1",{className:p.a.title,"aria-label":"Please leave your feedback",children:s}),a]})})},S=s(9),g=s.n(S),v=function(t){var e=t.message;return Object(l.jsx)("p",{className:g.a.text,children:e})},N=s(10),k=s.n(N),w={GOOD:"good",NEUTRAL:"neutral",BAD:"bad"},D=function(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),s=e[0],c=e[1],i=Object(a.useState)(0),n=Object(r.a)(i,2),_=n[0],o=n[1],b=Object(a.useState)(0),d=Object(r.a)(b,2),O=d[0],p=d[1],x=function(){return s+_+O},h=Object.values(w),m=x(),S=x()>0?"".concat(Math.round(s/x()*100),"%"):"0%";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:k.a.wrapper,children:Object(l.jsx)(f,{title:"Please leave your",children:Object(l.jsx)(u,{onLeaveFeedback:function(t){switch(t){case w.GOOD:return c((function(t){return t+1}));case w.NEUTRAL:return o((function(t){return t+1}));case w.BAD:return p((function(t){return t+1}));default:return}},names:h})})}),Object(l.jsx)(f,{children:m?Object(l.jsx)(j,{options:{good:s,neutral:_,bad:O},total:m,positivePercentage:S}):Object(l.jsx)(v,{message:"No feedback given..."})})]})};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.671b9bd0.chunk.js.map