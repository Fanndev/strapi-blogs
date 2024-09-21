import{X as a,c as F,aD as E,e as l,a as i,Z as n,f as B,D as oe,r as w,u as le,g as ue,ae as ce,ak as pe,ai as he,$ as ae,h as me,i as be,j as e,P as T,ao as ge,ap as fe,aq as V,ar as U,T as M,as as ve,ay as xe,az as z,aB as je,aA as ye,a5 as Pe,aE as L,aF as qe,aG as Me,a9 as Le,aa as Re,F as ke,G as X,n as J,k as y,aH as we,l as Te}from"./strapi-B-LHh8jx.js";import{u as Ce,L as I}from"./index-hoTsgrwy-BfJxOAzF-qT9GIrPJ.js";const H=({description:r,disabled:v,intlLabel:m,error:u,name:c,onChange:x,placeholder:t,providerToEditName:b,type:h,value:o})=>{const{formatMessage:d}=B(),g=c==="noName"?`${window.strapi.backendURL}/api/connect/${b}/callback`:o,j=d({id:m.id,defaultMessage:m.defaultMessage},{provider:b,...m.values}),p=r?d({id:r.id,defaultMessage:r.defaultMessage},{provider:b,...r.values}):"";if(h==="bool")return e.jsxs(y.Root,{hint:p,name:c,children:[e.jsx(y.Label,{children:j}),e.jsx(we,{"aria-label":c,checked:o,disabled:v,offLabel:d({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:d({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{x({target:{name:c,value:q.target.checked}})}}),e.jsx(y.Hint,{})]});const P=t?d({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):"",C=u?d({id:u,defaultMessage:u}):"";return e.jsxs(y.Root,{error:C,name:c,children:[e.jsx(y.Label,{children:j}),e.jsx(Te,{disabled:v,onChange:x,placeholder:P,type:h,value:g}),e.jsx(y.Error,{})]})};H.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""};H.propTypes={description:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),disabled:a.bool,error:a.string,intlLabel:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}).isRequired,name:a.string.isRequired,onChange:a.func.isRequired,placeholder:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),providerToEditName:a.string.isRequired,type:a.string.isRequired,value:a.oneOfType([a.bool,a.string])};const A=({headerBreadcrumbs:r,initialData:v,isSubmiting:m,layout:u,isOpen:c,onSubmit:x,onToggle:t,providerToEditName:b})=>{const{formatMessage:h}=B();return e.jsx(L.Root,{open:c,onOpenChange:t,children:e.jsxs(L.Content,{children:[e.jsx(L.Header,{children:e.jsx(qe,{label:r.join(", "),children:r.map((o,d,g)=>e.jsx(Me,{isCurrent:d===g.length-1,children:o},o))})}),e.jsx(Le,{onSubmit:o=>x(o),initialValues:v,validationSchema:u.schema,validateOnChange:!1,children:({errors:o,handleChange:d,values:g})=>e.jsxs(Re,{children:[e.jsx(L.Body,{children:e.jsx(ke,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(X.Root,{gap:5,children:u.form.map(j=>j.map(p=>e.jsx(X.Item,{col:p.size,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(H,{...p,error:o[p.name],onChange:d,value:g[p.name],providerToEditName:b})},p.name)))})})}),e.jsxs(L.Footer,{children:[e.jsx(J,{variant:"tertiary",onClick:t,type:"button",children:h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(J,{type:"submit",loading:m,children:h({id:"global.save",defaultMessage:"Save"})})]})]})})]})})};A.defaultProps={initialData:null,providerToEditName:null};A.propTypes={headerBreadcrumbs:a.arrayOf(a.string).isRequired,initialData:a.object,layout:a.shape({form:a.arrayOf(a.array),schema:a.object}).isRequired,isOpen:a.bool.isRequired,isSubmiting:a.bool.isRequired,onSubmit:a.func.isRequired,onToggle:a.func.isRequired,providerToEditName:a.string};const K={id:n("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},Z={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},N={id:n("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},O={id:n("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Y={id:n("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},_={id:n("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},R={id:n("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ee={id:n("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},D={email:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6}]],schema:F().shape({enabled:E().required(l.required.id)})},providers:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:K,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:_,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:F().shape({enabled:E().required(l.required.id),key:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()})})},providersWithSubdomain:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:{id:n({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:R,size:12,validations:{required:!1}}],[{intlLabel:{id:n("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:n("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:K,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:_,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:F().shape({enabled:E().required(l.required.id),key:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),subdomain:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()})})}},Se=()=>{const{formatMessage:r,locale:v}=B(),m=oe(),{trackUsage:u}=Ce(),[c,x]=w.useState(!1),[t,b]=w.useState(null),{toggleNotification:h}=le(),{get:o,put:d}=ue(),{formatAPIError:g}=ce(),j=pe(v,{sensitivity:"base"}),{isLoading:p,allowedActions:{canUpdate:P}}=he({update:ae.updateProviders}),{isLoading:C,data:q}=me(["users-permissions","get-providers"],async()=>{const{data:s}=await o("/users-permissions/providers");return s},{initialData:{}}),$=be(s=>d("/users-permissions/providers",s),{async onSuccess(){await m.invalidateQueries(["users-permissions","get-providers"]),h({type:"success",message:r({id:n("notification.success.submit")})}),u("didEditAuthenticationProvider"),S()},onError(s){h({type:"danger",message:g(s)})},refetchActive:!1}),k=Object.entries(q).reduce((s,[f,te])=>{const{icon:Q,enabled:ne,subdomain:de}=te;return s.push({name:f,icon:Q==="envelope"?["fas","envelope"]:["fab",Q],enabled:ne,subdomain:de}),s},[]).sort((s,f)=>j.compare(s.name,f.name)),se=C||p,W=w.useMemo(()=>t?!!k.find(f=>f.name===t)?.subdomain:!1,[k,t]),ie=w.useMemo(()=>t==="email"?D.email:W?D.providersWithSubdomain:D.providers,[t,W]),S=()=>{x(s=>!s)},G=s=>{P&&(b(s.name),S())},re=async s=>{u("willEditAuthenticationProvider"),$.mutate({providers:{...q,[t]:s}})};return se?e.jsx(T.Loading,{}):e.jsxs(I.Root,{children:[e.jsx(T.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})})}),e.jsxs(T.Main,{children:[e.jsx(I.Header,{title:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.jsx(I.Content,{children:e.jsxs(ge,{colCount:3,rowCount:k.length+1,children:[e.jsx(fe,{children:e.jsxs(V,{children:[e.jsx(U,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),e.jsx(U,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:n("Providers.status"),defaultMessage:"Status"})})}),e.jsx(U,{children:e.jsx(M,{variant:"sigma",children:e.jsx(ve,{children:r({id:"global.settings",defaultMessage:"Settings"})})})})]})}),e.jsx(xe,{children:k.map(s=>e.jsxs(V,{onClick:()=>P?G(s):void 0,children:[e.jsx(z,{width:"45%",children:e.jsx(M,{fontWeight:"semiBold",textColor:"neutral800",children:s.name})}),e.jsx(z,{width:"65%",children:e.jsx(M,{textColor:s.enabled?"success600":"danger600","data-testid":`enable-${s.name}`,children:s.enabled?r({id:"global.enabled",defaultMessage:"Enabled"}):r({id:"global.disabled",defaultMessage:"Disabled"})})}),e.jsx(z,{onClick:f=>f.stopPropagation(),children:P&&e.jsx(je,{onClick:()=>G(s),variant:"ghost",label:"Edit",children:e.jsx(ye,{})})})]},s.name))})]})})]}),e.jsx(A,{initialData:q[t],isOpen:c,isSubmiting:$.isLoading,layout:ie,headerBreadcrumbs:[r({id:n("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Pe(t)],onToggle:S,onSubmit:re,providerToEditName:t})]})},Ue=()=>e.jsx(T.Protect,{permissions:ae.readProviders,children:e.jsx(Se,{})});export{Se as ProvidersPage,Ue as default};