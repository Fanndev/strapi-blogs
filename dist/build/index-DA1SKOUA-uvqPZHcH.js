import{c as x,a as u,e as o,X as i,j as e,P as g,$ as L,f as T,ag as J,u as K,D as X,g as Z,ae as W,r as w,ai as Y,h as ee,i as se,Z as s,L as S,aE as m,aF as ae,aG as R,as as y,aI as ie,G as v,aJ as te,n as I,ao as le,ap as re,aq as b,ar as E,T as M,ay as de,az as p,B as k,aK as ne,aB as U,aA as _,ab as oe}from"./strapi-B-LHh8jx.js";import{u as me}from"./index-hoTsgrwy-BfJxOAzF-qT9GIrPJ.js";const pe=x().shape({options:x().shape({from:x().shape({name:u().required({id:o.required.id,defaultMessage:"This field is required"}),email:u().email(o.email).required({id:o.required.id,defaultMessage:"This field is required"})}).required(),response_email:u().email(o.email),object:u().required({id:o.required.id,defaultMessage:"This field is required"}),message:u().required({id:o.required.id,defaultMessage:"This field is required"})}).required(o.required.id)}),P=({template:a={},onToggle:d,open:t,onSubmit:n})=>{const{formatMessage:l}=T();return e.jsx(m.Root,{open:t,onOpenChange:d,children:e.jsxs(m.Content,{children:[e.jsxs(m.Header,{children:[e.jsxs(ae,{label:`${l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${a.display?l({id:s(a.display),defaultMessage:a.display}):""}`,children:[e.jsx(R,{children:l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),e.jsx(R,{isCurrent:!0,children:a.display?l({id:s(a.display),defaultMessage:a.display}):""})]}),e.jsx(y,{children:e.jsx(m.Title,{children:`${l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${a.display?l({id:s(a.display),defaultMessage:a.display}):""}`})})]}),e.jsx(ie,{onSubmit:n,initialValues:a,validationSchema:pe,children:({isSubmitting:h})=>e.jsxs(e.Fragment,{children:[e.jsx(m.Body,{children:e.jsx(v.Root,{gap:5,children:[{label:l({id:s("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"}),name:"options.from.name",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"}),name:"options.from.email",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"}),name:"options.response_email",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"}),name:"options.object",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",size:12,type:"text"}].map(({size:f,...c})=>e.jsx(v.Item,{col:f,direction:"column",alignItems:"stretch",children:e.jsx(te,{...c})},c.name))})}),e.jsxs(m.Footer,{children:[e.jsx(m.Close,{children:e.jsx(I,{variant:"tertiary",children:"Cancel"})}),e.jsx(I,{loading:h,type:"submit",children:"Finish"})]})]})})]})})};P.defaultProps={template:{}};P.propTypes={template:i.shape({display:i.string,icon:i.string,options:i.shape({from:i.shape({name:i.string,email:i.string}),message:i.string,object:i.string,response_email:i.string})}),open:i.bool.isRequired,onSubmit:i.func.isRequired,onToggle:i.func.isRequired};const $=({canUpdate:a,onEditClick:d})=>{const{formatMessage:t}=T();return e.jsxs(le,{colCount:3,rowCount:3,children:[e.jsx(re,{children:e.jsxs(b,{children:[e.jsx(E,{width:"1%",children:e.jsx(y,{children:t({id:s("Email.template.table.icon.label"),defaultMessage:"icon"})})}),e.jsx(E,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:t({id:s("Email.template.table.name.label"),defaultMessage:"name"})})}),e.jsx(E,{width:"1%",children:e.jsx(y,{children:t({id:s("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),e.jsxs(de,{children:[e.jsxs(b,{onClick:()=>d("reset_password"),children:[e.jsx(p,{children:e.jsx(k,{width:"3.2rem",height:"3.2rem",padding:"0.8rem",children:e.jsx(ne,{"aria-label":t({id:"global.reset-password",defaultMessage:"Reset password"})})})}),e.jsx(p,{children:e.jsx(M,{children:t({id:"global.reset-password",defaultMessage:"Reset password"})})}),e.jsx(p,{onClick:n=>n.stopPropagation(),children:e.jsx(U,{onClick:()=>d("reset_password"),label:t({id:s("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),variant:"ghost",disabled:!a,children:e.jsx(_,{})})})]}),e.jsxs(b,{onClick:()=>d("email_confirmation"),children:[e.jsx(p,{children:e.jsx(k,{width:"3.2rem",height:"3.2rem",padding:"0.8rem",children:e.jsx(oe,{"aria-label":t({id:s("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),e.jsx(p,{children:e.jsx(M,{children:t({id:s("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),e.jsx(p,{onClick:n=>n.stopPropagation(),children:e.jsx(U,{onClick:()=>d("email_confirmation"),label:t({id:s("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),variant:"ghost",disabled:!a,children:e.jsx(_,{})})})]})]})]})};$.propTypes={canUpdate:i.bool.isRequired,onEditClick:i.func.isRequired};const he=()=>e.jsx(g.Protect,{permissions:L.readEmailTemplates,children:e.jsx(ce,{})}),ce=()=>{const{formatMessage:a}=T(),{trackUsage:d}=me(),{notifyStatus:t}=J(),{toggleNotification:n}=K(),l=X(),{get:h,put:f}=Z(),{formatAPIError:c}=W(),[B,z]=w.useState(!1),[q,A]=w.useState(null),{isLoading:H,allowedActions:{canUpdate:N}}=Y({update:L.updateEmailTemplates}),{isLoading:O,data:C}=ee(["users-permissions","email-templates"],async()=>{const{data:r}=await h("/users-permissions/email-templates");return r},{onSuccess(){t(a({id:s("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(r){n({type:"danger",message:c(r)})}}),G=H||O,j=()=>{z(r=>!r)},Q=r=>{A(r),j()},F=se(r=>f("/users-permissions/email-templates",{"email-templates":r}),{async onSuccess(){await l.invalidateQueries(["users-permissions","email-templates"]),n({type:"success",message:a({id:"notification.success.saved",defaultMessage:"Saved"})}),d("didEditEmailTemplates"),j()},onError(r){n({type:"danger",message:c(r)})},refetchActive:!0}),D=r=>{d("willEditEmailTemplates");const V={...C,[q]:r};F.mutate(V)};return G?e.jsx(g.Loading,{}):e.jsxs(g.Main,{"aria-busy":F.isLoading,children:[e.jsx(g.Title,{children:a({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:a({id:s("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})})}),e.jsx(S.Header,{title:a({id:s("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.jsxs(S.Content,{children:[e.jsx($,{onEditClick:Q,canUpdate:N}),e.jsx(P,{template:C[q],onToggle:j,open:B,onSubmit:D})]})]})};export{ce as EmailTemplatesPage,he as ProtectedEmailTemplatesPage};
