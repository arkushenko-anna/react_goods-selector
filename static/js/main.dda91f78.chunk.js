(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(3),s=c.n(o),n=c(4),a=c(5),l=c(8),d=c(7),i=c(1),r=(c(13),c(14),c(6)),b=c.n(r),u=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.deleteGood=function(){e.setState({selectedGood:""})},e.chooseGood=function(t){e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"RemoveButton","aria-label":"Delete goods",type:"button",className:"delete ml-3",onClick:this.deleteGood})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:j.map((function(c){var o=c===t;return Object(u.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":o}),children:[o?Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.deleteGood,children:"-"})}):Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.chooseGood(c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dda91f78.chunk.js.map