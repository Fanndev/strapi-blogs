import{j as e,P as c,bf as R,f,ae as v,u as C,j3 as P,jl as w,ai as h,ja as x,L as g,aI as I,n as A,ab as F,F as L,T as E,G as p,bC as D,k as d,bD as B,bE as G,bY as H}from"./strapi-B-LHh8jx.js";import{S as U}from"./schemas-DdA2ic2U-BgR2-IRz.js";const m=R,_=()=>{const{formatMessage:s}=f(),{formatAPIError:r}=v(),{toggleNotification:n}=C(),{data:u,isLoading:a}=P(),[t,{isLoading:j}]=w(),S=m(i=>i.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:T}}=h(S),{timezoneList:b}=x(new Date),y=async i=>{const{defaultTimezone:l}=i,z=b.some(o=>o.value===l),M=!l||!z?{defaultTimezone:null}:{...i};try{const o=await t(M);"data"in o?n({type:"success",message:s({id:"content-releases.pages.Settings.releases.setting.default-timezone-notification-success",defaultMessage:"Default timezone updated."})}):H(o.error)?n({type:"danger",message:r(o.error)}):n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}catch{n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}};return a?e.jsx(c.Loading,{}):e.jsxs(g.Root,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Releases"})}),e.jsx(c.Main,{"aria-busy":a,tabIndex:-1,children:e.jsx(I,{method:"PUT",initialValues:{defaultTimezone:u?.data.defaultTimezone},onSubmit:y,validationSchema:U,children:({modified:i,isSubmitting:l})=>e.jsxs(e.Fragment,{children:[e.jsx(g.Header,{primaryAction:T?e.jsx(A,{disabled:!i||j,loading:l,startIcon:e.jsx(F,{}),type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}):null,title:s({id:"content-releases.pages.Settings.releases.title",defaultMessage:"Releases"}),subtitle:s({id:"content-releases.pages.Settings.releases.description",defaultMessage:"Create and manage content updates"})}),e.jsx(g.Content,{children:e.jsxs(L,{direction:"column",background:"neutral0",alignItems:"stretch",padding:6,gap:6,shadow:"filterShadow",hasRadius:!0,children:[e.jsx(E,{variant:"delta",tag:"h2",children:s({id:"content-releases.pages.Settings.releases.preferences.title",defaultMessage:"Preferences"})}),e.jsx(p.Root,{children:e.jsx(p.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(N,{})})})]})})]})})})]})},N=()=>{const s=m(t=>t.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:r}}=h(s),{formatMessage:n}=f(),{timezoneList:u}=x(new Date),a=D("defaultTimezone");return e.jsxs(d.Root,{name:"defaultTimezone",hint:n({id:"content-releases.pages.Settings.releases.timezone.hint",defaultMessage:"The timezone of every release can still be changed individually. "}),error:a.error,children:[e.jsx(d.Label,{children:n({id:"content-releases.pages.Settings.releases.timezone.label",defaultMessage:"Default timezone"})}),e.jsx(B,{autocomplete:{type:"list",filter:"contains"},onChange:t=>a.onChange("defaultTimezone",t),onTextValueChange:t=>a.onChange("defaultTimezone",t),onClear:()=>a.onChange("defaultTimezone",""),value:a.value,disabled:!r,children:u.map(t=>e.jsx(G,{value:t.value,children:t.value.replace(/&/," ")},t.value))}),e.jsx(d.Hint,{}),e.jsx(d.Error,{})]})},O=()=>{const s=m(r=>r.admin_app.permissions.settings?.releases?.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(_,{})})};export{O as ProtectedReleasesSettingsPage};