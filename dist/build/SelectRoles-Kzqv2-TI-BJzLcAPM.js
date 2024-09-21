import{cz as p,d as u,u as g,f as d,cA as f,j as e,cB as m,aB as h,bX as x,bC as C,k as i,bI as M,bJ as j,cC as b,cD as k}from"./strapi-B-LHh8jx.js";import{u as y}from"./useAdminRoles-uRNvxyDX-By_GqHDm.js";const v=({children:a,target:t})=>{const{toggleNotification:n}=g(),{formatMessage:o}=d(),{copy:r}=f(),l=o({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),c=async s=>{s.preventDefault(),await r(t)&&n({type:"info",message:o({id:"notification.link-copied"})})};return e.jsx(m,{endAction:e.jsx(h,{label:l,variant:"ghost",onClick:c,children:e.jsx(x,{})}),title:t,titleEllipsis:!0,subtitle:a,icon:e.jsx("span",{style:{fontSize:32},children:"✉️"}),iconBackground:"neutral100"})},F=({registrationToken:a})=>{const{formatMessage:t}=d(),n=`${window.location.origin}${k()}/auth/register?registrationToken=${a}`;return e.jsx(v,{target:n,children:t({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},A=({disabled:a})=>{const{isLoading:t,roles:n}=y(),{formatMessage:o}=d(),{value:r=[],onChange:l,error:c}=C("roles");return e.jsxs(i.Root,{error:c,hint:o({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),name:"roles",required:!0,children:[e.jsx(i.Label,{children:o({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"})}),e.jsx(M,{disabled:a,onChange:s=>{l("roles",s)},placeholder:o({id:"app.components.Select.placeholder",defaultMessage:"Select"}),startIcon:t?e.jsx(L,{}):void 0,value:r.map(s=>s.toString()),withTags:!0,children:n.map(s=>e.jsx(j,{value:s.id.toString(),children:o({id:`global.${s.code}`,defaultMessage:s.name})},s.id))}),e.jsx(i.Error,{}),e.jsx(i.Hint,{})]})},S=p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,B=u.div`
  animation: ${S} 2s infinite linear;
`,L=()=>e.jsx(B,{children:e.jsx(b,{})});export{F as M,A as S,v as a};
