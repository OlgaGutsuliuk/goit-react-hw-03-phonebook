(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={contact_form:"TelContacts_contact_form__Cu-U9",form_label:"TelContacts_form_label__2Ppbc",form_input:"TelContacts_form_input__zFh_L",form_button:"TelContacts_form_button__3ZGRn"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(12),c=n.n(r),s=(n(18),n(10)),i=n(13),l=n(4),o=n(5),u=n(7),m=n(6),b=n(3),d=n(2),j=n.n(d),f=n(0),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],name:"",filter:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.addTelContact(t.state),t.setState({contacts:[],name:"",filter:"",number:""})},t.onHandleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.contact_form,onSubmit:this.onHandleSubmit,children:[Object(f.jsxs)("label",{className:j.a.form_label,children:["Name:"," ",Object(f.jsx)("input",{className:j.a.form_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange,value:this.state.name})]}),Object(f.jsxs)("label",{className:j.a.form_label,children:["Number:",Object(f.jsx)("input",{className:j.a.form_input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange,value:this.state.number})]}),Object(f.jsx)("button",{className:j.a.form_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(8),p=n.n(_),C=function(t){var e=t.telNumbers,n=t.deleteTelContact;return Object(f.jsx)("ul",{className:p.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{className:p.a.list_item,children:[Object(f.jsxs)("p",{children:[t.name,": "]}),Object(f.jsx)("p",{children:t.number}),Object(f.jsx)("button",{className:p.a.list_button,type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})},O=n(24),x=n(11),v=n.n(x),g=function(t){var e=t.filter,n=t.setFilter;return Object(f.jsxs)("label",{className:j.a.form_label,children:["Find contacts by name",Object(f.jsx)("input",{className:j.a.form_input,type:"text",value:e,onChange:n})]})},T=g;g.propTepes={setFilter:v.a.func.isRequired,filter:v.a.string.isRequired};var N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={telContacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addTelContact=function(e){if(t.state.telContacts.map((function(t){return t.name})).includes(e.name))return alert("".concat(e.name," is already in contacts"));t.setState((function(t){return{telContacts:[].concat(Object(i.a)(t.telContacts),[Object(s.a)(Object(s.a)({},e),{},{id:Object(O.a)()})])}}))},t.deleteTelContact=function(e){var n=e.target.id;t.setState({telContacts:t.state.telContacts.filter((function(t){return t.id!==n}))})},t.setFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.getFilterTelContact=function(){return t.state.telContacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(h,{addTelContact:this.addTelContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(T,{filter:this.state.filter,setFilter:this.setFilter}),Object(f.jsx)(C,{telNumbers:this.getFilterTelContact(),deleteTelContact:this.deleteTelContact})]})}}]),n}(a.Component),y=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(N,{})})},F=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(y,{})})};c.a.render(Object(f.jsx)(F,{}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactsList_list__TYo8H",list_item:"ContactsList_list_item__1dTvg",list_button:"ContactsList_list_button__MZa34"}}},[[22,1,2]]]);
//# sourceMappingURL=main.5d586580.chunk.js.map