(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={title:"Statistics_title__3hjBI",list:"Statistics_list__2T7yp",result:"Statistics_result__1l0KO",details:"Statistics_details__3Wgaw Statistics_result__1l0KO",common:"Statistics_common__3ofeU Statistics_result__1l0KO",text:"Statistics_text__3mA7w",good:"Statistics_good__3LExL Statistics_details__3Wgaw Statistics_result__1l0KO",neutral:"Statistics_neutral__1-4tP Statistics_details__3Wgaw Statistics_result__1l0KO",bad:"Statistics_bad__1nxqe Statistics_details__3Wgaw Statistics_result__1l0KO",total:"Statistics_total__9vZE6 Statistics_common__3ofeU Statistics_result__1l0KO",positivePercentage:"Statistics_positivePercentage___jdVO Statistics_common__3ofeU Statistics_result__1l0KO"}},,function(t,e,a){t.exports={button__list:"FeedbackOptions_button__list__UhB1A",button:"FeedbackOptions_button__2DhYD",good:"FeedbackOptions_good__td54r FeedbackOptions_button__2DhYD",neutral:"FeedbackOptions_neutral__lOCxA FeedbackOptions_button__2DhYD",bad:"FeedbackOptions_bad__Drzpw FeedbackOptions_button__2DhYD"}},,function(t,e,a){t.exports={section:"Section_section__s4CoU",title:"Section_title__Bcb3Q"}},,,,,function(t,e,a){t.exports={container:"Container_container__3sYH0"}},function(t,e,a){t.exports={text:"Notification_text__1Y2cF"}},function(t,e,a){t.exports={wrapper:"App_wrapper__3-IPQ"}},,,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var s=a(2),i=a.n(s),c=a(6),n=a.n(c),o=(a(19),a(20),a(7)),r=a(8),l=a(9),_=a(14),u=a(13),b=a(3),d=a.n(b),j=a(0),p=function(t){var e=t.onLeaveFeedback,a=t.names;return Object(j.jsx)("ul",{className:d.a.button__list,children:a.map((function(t){return Object(j.jsx)("li",{className:d.a.button__item,children:Object(j.jsx)("button",{type:"button",className:d.a[t],onClick:function(){return e(t)},children:t})},t)}))})},O=a(1),h=a.n(O),x=function(t){var e=t.options,a=t.total,s=t.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:h.a.title,children:"Statistics"}),Object(j.jsxs)("ul",{className:h.a.list,children:[Object.keys(e).map((function(t){return Object(j.jsx)("li",{className:h.a[t],children:Object(j.jsxs)("p",{className:h.a.text,children:[t,": ",e[t]]})},t)})),Object(j.jsx)("li",{className:h.a.total,children:Object(j.jsxs)("p",{className:h.a.text,children:["Total: ",a]})}),Object(j.jsx)("li",{className:h.a.positivePercentage,children:Object(j.jsxs)("p",{className:h.a.text,children:["Positive feedback: ",s]})})]})]})},m=a(5),f=a.n(m),v=a(10),k=a.n(v),S=function(t){var e=t.children;return Object(j.jsx)("div",{className:k.a.container,children:e})},g=function(t){var e=t.title,a=void 0===e?"":e,s=t.children;return Object(j.jsx)("section",{className:f.a.section,children:Object(j.jsxs)(S,{children:[a&&Object(j.jsx)("h1",{className:f.a.title,"aria-label":"Please leave your feedback",children:a}),s]})})},F=a(11),N=a.n(F),P=function(t){var e=t.message;return Object(j.jsx)("p",{className:N.a.text,children:e})},w=a(12),y=a.n(w),D=function(t){Object(_.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:t.props.initialValue,neutral:t.props.initialValue,bad:t.props.initialValue},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return t.countTotalFeedback()>0?"".concat(Math.round(t.state.good/t.countTotalFeedback()*100),"%"):"0%"},t}return Object(l.a)(a,[{key:"render",value:function(){var t=Object.keys(this.state),e=this.state,a=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:y.a.wrapper,children:Object(j.jsx)(g,{title:"Please leave your",children:Object(j.jsx)(p,{onLeaveFeedback:this.onLeaveFeedback,names:t})})}),Object(j.jsx)(g,{children:a?Object(j.jsx)(x,{options:e,total:a,positivePercentage:s}):Object(j.jsx)(P,{message:"No feedback given..."})})]})}}]),a}(s.Component);D.defaultProps={initialValue:0};var K=D;n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.979b32ba.chunk.js.map