exports.ids=[3],exports.modules={20:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(3),c=r.n(n),u=r(2),i=function(e){var t=e.users;return t?Object(s.jsx)("div",{children:Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(u.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},j=r(15),b=r(9),a=r(16),d=c.a.useEffect,O=Object(j.connect)((function(e){return{users:e.users.users}}),{getUsers:b.c})((function(e){var t=e.users,r=e.getUsers;return d((function(){t||r()}),[r,t]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{users:t}),Object(s.jsx)(a.a,{resolve:r})]})})),l=function(e){var t=e.user,r=t.email,n=t.name,c=t.username;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:[c," (",n,")"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"e-mail:"})," ",r]})]})},o=function(e){var t=e.id,r=Object(j.useSelector)((function(e){return e.users.user})),c=Object(j.useDispatch)();return Object(a.c)((function(){return c(Object(b.b)(t))})),Object(n.useEffect)((function(){r&&r.id===parseInt(t,10)||c(Object(b.b)(t))}),[c,t,r]),r?Object(s.jsx)(l,{user:r}):null};t.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(u.Route,{path:"/users/:id",render:function(e){var t=e.match;return Object(s.jsx)(o,{id:t.params.id})}})]})}}};