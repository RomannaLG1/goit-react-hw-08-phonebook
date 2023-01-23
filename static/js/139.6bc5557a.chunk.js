"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[139],{8008:function(n,e,r){r.d(e,{I:function(){return s}});var t,i=r(168),a=r(6088),o=r(3329),l=r(184),u=(0,a.Z)(o.Z)(t||(t=(0,i.Z)(["\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n"]))),s=function(n){var e=n.handleSubmit,r=n.children;return(0,l.jsx)(u,{component:"form",noValidate:!0,onSubmit:e,autoComplete:"off",children:r})}},9391:function(n,e,r){r.d(e,{i:function(){return c},t:function(){return d}});var t,i,a=r(168),o=r(7691),l=r(184),u=o.ZP.div(t||(t=(0,a.Z)(["\n  height: 16px;\n  margin-bottom: 8px;\n"]))),s=o.ZP.p(i||(i=(0,a.Z)(["\n  color: red;\n  font-size: 12px;\n  &::before {\n    display: inline;\n    content: '\u26a0 ';\n  }\n\n"]))),c=function(n){var e=n.children;return(0,l.jsx)(u,{children:e})},d=function(n){var e=n.children;return(0,l.jsx)(s,{children:e})}},4965:function(n,e,r){r.d(e,{M:function(){return u}});var t=r(8096),i=r(4925),a=r(5835),o=r(3606),l=r(184),u=function(n){var e=n.onChange,r=n.onBlur,u=n.name,s=n.value;return(0,l.jsxs)(t.Z,{fullWidth:!0,sx:{mb:1},variant:"standard",children:[(0,l.jsx)(i.Z,{htmlFor:"standard-adornment-".concat(u),children:(0,o.V)(u)}),(0,l.jsx)(a.Z,{onChange:e,onBlur:r,value:s,name:u,type:u})]})}},7255:function(n,e,r){r.d(e,{W:function(){return m}});var t=r(9439),i=r(9569),a=r(3710),o=r(8096),l=r(4925),u=r(5835),s=r(3466),c=r(3400),d=r(2791),h=r(184),m=function(n){var e=n.onChange,r=n.onBlur,m=n.value,f=(0,d.useState)(!1),x=(0,t.Z)(f,2),v=x[0],p=x[1];return(0,h.jsxs)(o.Z,{sx:{mb:1,width:"46.5ch"},variant:"standard",children:[(0,h.jsx)(l.Z,{htmlFor:"standard-adornment-password",children:"Password"}),(0,h.jsx)(u.Z,{name:"password",value:m,onChange:e,onBlur:r,id:"standard-adornment-password",type:v?"text":"password",endAdornment:(0,h.jsx)(s.Z,{position:"end",children:(0,h.jsx)(c.Z,{"aria-label":"toggle password visibility",onClick:function(){return p((function(n){return!n}))},onMouseDown:function(n){n.preventDefault()},children:v?(0,h.jsx)(i.Z,{}):(0,h.jsx)(a.Z,{})})})})]})}},3606:function(n,e,r){r.d(e,{V:function(){return t}});var t=function(n){for(var e=n.split(" "),r=[],t=0;t<e.length;t++)r.push(e[t].charAt(0).toUpperCase()+e[t].slice(1));return r.join(" ")}},8139:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(4270),i=r(6151),a=r(1961),o=r(9434),l=r(9273),u=r(7255),s=r(4965),c=r(8008),d=r(9616),h=r(9391),m=r(184),f=function(){var n=(0,o.I0)(),e=(0,d.Gl)("",{isEmpty:!0,minLength:3,maxLength:15}),r=(0,d.Gl)("",{isEmpty:!0,minLength:3,isEmail:!1}),t=(0,d.Gl)("",{isEmpty:!0,minLength:8,maxLength:15});return(0,m.jsxs)(c.I,{handleSubmit:function(e){e.preventDefault();var r=e.currentTarget;n((0,l.z2)({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},children:[(0,m.jsx)(s.M,{onChange:function(n){return e.onChange(n)},onBlur:function(n){return e.onBlur(n)},value:e.value,name:"name"}),(0,m.jsx)(h.i,{children:e.isDirty&&e.minLengthError&&(0,m.jsx)(h.t,{children:"to short, min 3 characters"})||e.isDirty&&e.maxLengthError&&(0,m.jsx)(h.t,{children:"to long"})}),(0,m.jsx)(s.M,{onChange:function(n){return r.onChange(n)},onBlur:function(n){return r.onBlur(n)},value:r.value,name:"email"}),(0,m.jsx)(h.i,{children:r.isDirty&&r.emailError&&(0,m.jsx)(h.t,{children:"please, enter valid email"})}),(0,m.jsx)(u.W,{onChange:function(n){return t.onChange(n)},onBlur:function(n){return t.onBlur(n)},value:t.value}),(0,m.jsx)(h.i,{children:t.isDirty&&t.minLengthError&&(0,m.jsx)(h.t,{children:"to short, min 3 characters"})||t.isDirty&&t.maxLengthError&&(0,m.jsx)(h.t,{children:"to long"})}),(0,m.jsx)(i.Z,{disabled:!e.inputValid||!r.inputValid||!t.inputValid,type:"submit",variant:"contained",startIcon:(0,m.jsx)(a.Z,{}),children:"Register"})]})};function x(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(t.q,{children:(0,m.jsx)("title",{children:"Registration"})}),(0,m.jsx)(f,{})]})}},1961:function(n,e,r){var t=r(4836);e.Z=void 0;var i=t(r(5649)),a=r(184),o=(0,i.default)((0,a.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");e.Z=o}}]);
//# sourceMappingURL=139.6bc5557a.chunk.js.map