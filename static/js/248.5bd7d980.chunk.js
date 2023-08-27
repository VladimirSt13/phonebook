"use strict";(self.webpackChunkPhone_Book=self.webpackChunkPhone_Book||[]).push([[248],{2248:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,o,i,a,u=t(9439),c=t(2791),l=t(466),s=t(9434),d=t(168),f=t(5867),p=f.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  max-width: 320px;\n  align-items: center;\n  border: 1px solid #b7b7bf;\n"]))),h=f.ZP.label(o||(o=(0,d.Z)(["\n  display: block;\n  & span {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 5px;\n  }\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),v=f.ZP.input(i||(i=(0,d.Z)(["\n  display: block;\n  padding: 5px;\n  width: 300px;\n"]))),m=f.ZP.button(a||(a=(0,d.Z)(["\n  padding: 5px 10px;\n"]))),x="NOT_FOUND";var b=function(n,e){return n===e};function y(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?b:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:x},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return x}return{get:r,put:function(e,o){r(e)===x&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===x){if(e=n.apply(null,arguments),u){var t=l.getEntries().find((function(n){return u(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function g(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u.memoizeOptions,s=void 0===l?t:l,d=Array.isArray(s)?s:[s],f=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}(r),p=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:p,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h}}var j,w,k,Z,C,A=g(y),P=function(n){return n.contacts.items},E=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},z=function(n){return n.filters.query},S=A([P,z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),q=t(8927),N=t(184),L=function(n){var e=n.onAddContact,t=(0,c.useState)(""),r=(0,u.Z)(t,2),o=r[0],i=r[1],a=(0,c.useState)(""),d=(0,u.Z)(a,2),f=d[0],x=d[1],b=(0,s.v9)(P),y=(0,s.I0)(),g=function(n){switch(n.target.name){case"name":i(n.target.value);break;case"number":x(n.target.value)}};return(0,N.jsx)(l.x,{bg:"white",p:4,borderRadius:"normal",children:(0,N.jsxs)(p,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.currentTarget.name.value,r=n.currentTarget.number.value;!function(n){if(b)return!!b.find((function(e){return e.name===n}))}(t)?(y((0,q.uK)({name:t,number:r})),e(),i(""),x("")):alert("".concat(t," is already is in contacts"))},children:[(0,N.jsxs)(h,{htmlFor:"name",children:[(0,N.jsx)("span",{children:"Name"}),(0,N.jsx)(v,{type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o,onChange:g})]}),(0,N.jsxs)(h,{htmlFor:"number",children:[(0,N.jsx)("span",{children:"Number"}),(0,N.jsx)(v,{type:"tel",name:"number",placeholder:"Tel number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:g})]}),(0,N.jsx)(m,{type:"submit",children:"Add contact"})]})})},T=f.ZP.p(j||(j=(0,d.Z)(["\n  font-style: italic;\n"]))),I=t(3241),O=function(){var n=(0,s.v9)(z),e=(0,s.I0)();return(0,N.jsxs)(l.x,{children:[(0,N.jsx)(T,{children:"Find contacts by name"}),(0,N.jsx)(v,{type:"text",name:"filter",value:n,onChange:function(n){e((0,I.p)(n.target.value.toLowerCase().trim()))}})]})},_=f.ZP.ul(w||(w=(0,d.Z)(["\n  list-style: none;\n  border: 1px solid #b7b7bf;\n  padding: 0;\n"]))),R=f.ZP.li(k||(k=(0,d.Z)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  & span:last-of-type {\n    margin-left: 10px;\n  }\n  border-bottom: 1px solid #b7b7bf;\n  &:nth-of-type(odd) {\n    background-color: #b7b7bf;\n  }\n"]))),B=function(n){var e=n.contact,t=e._id,r=e.name,o=e.phone,i=(0,s.I0)();return(0,N.jsxs)(R,{children:[(0,N.jsxs)("div",{children:[(0,N.jsxs)("span",{children:[r,":"]})," ",(0,N.jsx)("span",{children:o})]}),(0,N.jsx)("button",{onClick:function(){return n=t,void i((0,q.GK)(n));var n},children:"Delete"})]})},D=function(){var n=(0,s.v9)(S);return(0,N.jsx)(_,{children:n.length>0?n.map((function(n){return(0,N.jsx)(B,{contact:n},n._id)})):(0,N.jsx)("div",{children:"No data"})})},K=t(4164),G=f.ZP.div(Z||(Z=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),J=f.ZP.div(C||(C=(0,d.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),M=document.querySelector("#modal-root"),U=function(n){var e=n.onClose,t=n.children;(0,c.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,K.createPortal)((0,N.jsx)(G,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,N.jsx)(J,{children:t})}),M)};function $(){var n=(0,s.I0)(),e=(0,s.v9)(E),t=(0,s.v9)(F),r=(0,c.useState)(!1),o=(0,u.Z)(r,2),i=o[0],a=o[1],d=function(){a(!i)};return(0,c.useEffect)((function(){n((0,q.yF)())}),[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("button",{type:"button",onClick:d,children:"Add contact"}),i&&(0,N.jsx)(U,{onClose:d,children:(0,N.jsx)(l.x,{bg:function(n){return n.theme.colors.background},children:(0,N.jsx)(L,{onAddContact:d})})}),(0,N.jsx)(l.x,{as:"h1",children:"Phonebook"}),(0,N.jsx)(O,{}),e&&(0,N.jsx)("div",{children:"Loading..."}),t&&(0,N.jsx)("div",{children:"Try again later..."}),(0,N.jsx)(D,{})]})}}}]);
//# sourceMappingURL=248.5bd7d980.chunk.js.map