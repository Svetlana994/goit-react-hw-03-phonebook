(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(12),o=n.n(c),s=(n(20),n(11)),i=n(15),l=n(5),b=n(6),u=n(9),d=n(8),j=n(3);var p=Object(j.a)("div",{target:"e1wkftob1"})({name:"1pybp31",styles:"width:500px;margin:0 auto"}),m=Object(j.a)("h2",{target:"e1wkftob0"})({name:"pbf5bt",styles:"margin-bottom:20px;text-align:center;color:#2d2b2b"}),h=n(1),f=function(t){var e=t.title,n=t.children;return Object(h.jsxs)(p,{children:[Object(h.jsx)(m,{children:e}),n]})};var g=Object(j.a)("li",{target:"epzilkb3"})({name:"1j8wke4",styles:"display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;list-style:none;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{color:#3561d0;}"}),x=Object(j.a)("button",{target:"epzilkb2"})({name:"zr3218",styles:"display:inline-flex;align-items:center;padding:5px;border-color:transparent;border-radius:5px;background-color:#c7cace;text-transform:uppercase;cursor:pointer;&:hover{background-color:#3561d0;color:#fff;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);}"}),O=Object(j.a)("span",{target:"epzilkb1"})({name:"1693thf",styles:"margin-right:5px"}),v=Object(j.a)("span",{target:"epzilkb0"})({name:"rmjeep",styles:"margin-right:30px;margin-left:10px"}),y=n(7),k=n(14),C=function(t){var e=t.options,n=t.onDelete;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(h.jsxs)(g,{children:[Object(h.jsx)(k.a,{size:18}),a,":",Object(h.jsx)(v,{children:r}),Object(h.jsxs)(x,{type:"button",onClick:function(){return n(e)},children:[Object(h.jsx)(O,{children:"Delete"}),Object(h.jsx)(y.a,{size:16})]})]},e)}))})},S=n(4);var w=Object(j.a)("div",{target:"ep4fsay5"})({name:"1uvqu8f",styles:"margin-bottom:20px;padding:20px;box-shadow:0px 1px 5px 1px rgba(34, 60, 80, 0.4)"}),z=Object(j.a)("button",{target:"ep4fsay4"})({name:"noouvr",styles:"display:flex;align-items:center;padding:7px;border-color:transparent;border-radius:5px;background-color:#c7cace;text-transform:uppercase;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;&:hover{background-color:#3561d0;color:#fff;}"}),A=Object(j.a)("span",{target:"ep4fsay3"})({name:"1693thf",styles:"margin-right:5px"}),D=Object(j.a)("div",{target:"ep4fsay2"})({name:"avpsk8",styles:"margin-bottom:15px"}),F=Object(j.a)("input",{target:"ep4fsay1"})({name:"djnsmr",styles:"border-color:#a29f9f;border-radius:5px;&:hover{border-color:#0741d3;}"}),I=Object(j.a)("p",{target:"ep4fsay0"})({name:"pr10xp",styles:"margin-bottom:10px"}),J=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(S.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsx)(w,{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)(D,{children:Object(h.jsxs)("label",{children:[Object(h.jsx)(I,{children:"Name"}),Object(h.jsx)(F,{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.  \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]})}),Object(h.jsx)(D,{children:Object(h.jsxs)("label",{children:[Object(h.jsx)(I,{children:"Number"}),Object(h.jsx)(F,{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435,  \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]})}),Object(h.jsxs)(z,{type:"submit",children:[Object(h.jsx)(A,{children:"Add contact"}),Object(h.jsx)(y.b,{size:16})]})]})})}}]),n}(a.Component);var L=Object(j.a)("h3",{target:"e131f52o1"})({name:"pr10xp",styles:"margin-bottom:10px"}),N=Object(j.a)("input",{target:"e131f52o0"})({name:"8gixdl",styles:"margin-bottom:20px;border-color:#a29f9f;border-radius:5px;&:hover{border-color:#0741d3;}"});var q=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("div",{children:[Object(h.jsx)(L,{children:"Find contacts by name"}),Object(h.jsx)(N,{type:"text",value:e,onChange:n})]})},M=n(27),Z=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(s.a)(Object(s.a)({},e),{},{id:Object(M.a)()})])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{title:"Phonebook",children:Object(h.jsx)(J,{onSubmit:this.formSubmitHandler})}),Object(h.jsxs)(f,{title:"Contacts",children:[Object(h.jsx)(q,{value:this.state.filter,onChange:this.changeFilter}),Object(h.jsx)(C,{options:t,onDelete:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ca890084.chunk.js.map