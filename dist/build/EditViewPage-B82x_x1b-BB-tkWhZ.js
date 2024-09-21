import{b1 as N,ah as G,f as O,u as U,h9 as k,hc as Q,h6 as Y,r as E,j as t,P as d,a8 as _,aI as q,hS as H,hT as $,cc as m,hw as j,G as c,hU as J,hV as K,d as W,b_ as X,ai as Z,h4 as tt,F as I,B as st,hC as et,h3 as at}from"./strapi-B-LHh8jx.js";import{a as nt,f as it,t as rt,g as P}from"./Field-DufHXW17-izLYOj3G.js";import"./Relations-BTcf5xaw-YcOjygEn.js";import"./useDragAndDrop-DdHgKsqq-B_j2nKWp.js";import"./relations-C0w0GcXi-BVXtpHqJ.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-Blr68pFa.js";import"./objects-mKMAmfec-DHZX4VNd.js";import"./useDebounce-DmuSJIF3-DvUH3pGg.js";const ot=a=>E.useEffect(a,dt),dt=[],S=({layout:a})=>t.jsx(I,{direction:"column",alignItems:"stretch",gap:6,children:a.map((n,o)=>{if(n.some(e=>e.some(s=>s.type==="dynamiczone"))){const[e]=n,[s]=e;return t.jsx(c.Root,{gap:4,children:t.jsx(c.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(P,{...s})})},s.name)}return t.jsx(st,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150",children:t.jsx(I,{direction:"column",alignItems:"stretch",gap:6,children:n.map((e,s)=>t.jsx(c.Root,{gap:4,children:e.map(({size:r,...u})=>t.jsx(c.Item,{col:r,s:12,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(P,{...u})},u.name))},s))})},o)})}),ct=()=>{const a=N(),[{query:{status:n}},o]=G({status:"draft"}),{formatMessage:e}=O(),{toggleNotification:s}=U(),{document:r,meta:u,isLoading:R,schema:l,components:h,collectionType:C,id:v,model:D,hasError:A}=k(),p=l?.options?.draftAndPublish??!1;ot(()=>{a?.state&&"error"in a.state&&s({type:"danger",message:a.state.error,timeout:5e3})});const B=Q("EditViewPage",i=>i.isLoading),x=C===et,g=!v&&!x,{isLoading:F,edit:{layout:b,settings:{mainField:f}}}=Y(D),{isLazyLoading:M}=nt([]),w=B||R||F||M,L=E.useMemo(()=>{if(!r&&!g&&!x||!l)return;const i=r?.id?r:it(l,h);return rt(l,h)(i)},[r,g,x,l,h]);if(A)return t.jsx(d.Error,{});if(w&&!r?.documentId)return t.jsx(d.Loading,{});if(!L)return t.jsx(d.Error,{});const V=i=>{(i==="published"||i==="draft")&&o({status:i},"push",!0)},y=f!=="id"&&r?.[f]?r[f]:"Untitled";return t.jsxs(_,{paddingLeft:10,paddingRight:10,children:[t.jsx(d.Title,{children:`${y}`}),t.jsx(q,{disabled:p&&n==="published",initialValues:L,method:g?"POST":"PUT",validate:(i,z)=>H(l?.attributes,h,{status:n,...z}).validate(i,{abortEarly:!1}),children:({resetForm:i})=>t.jsxs(t.Fragment,{children:[t.jsx($,{isCreating:g,status:p?ut(r,u):void 0,title:y}),t.jsxs(m.Root,{variant:"simple",value:n,onValueChange:V,children:[t.jsx(m.List,{"aria-label":e({id:j("containers.edit.tabs.label"),defaultMessage:"Document status"}),children:p?t.jsxs(t.Fragment,{children:[t.jsx(T,{value:"draft",children:e({id:j("containers.edit.tabs.draft"),defaultMessage:"draft"})}),t.jsx(T,{disabled:!u||u.availableStatus.length===0,value:"published",children:e({id:j("containers.edit.tabs.published"),defaultMessage:"published"})})]}):null}),t.jsxs(c.Root,{paddingTop:8,gap:4,children:[t.jsxs(c.Item,{col:9,s:12,direction:"column",alignItems:"stretch",children:[t.jsx(m.Content,{value:"draft",children:t.jsx(S,{layout:b})}),t.jsx(m.Content,{value:"published",children:t.jsx(S,{layout:b})})]}),t.jsx(c.Item,{col:3,s:12,direction:"column",alignItems:"stretch",children:t.jsx(J,{})})]})]}),t.jsx(K,{onProceed:i})]})})]})},T=W(m.Trigger)`
  text-transform: uppercase;
`,ut=(a,n)=>{const o=a?.status,e=n?.availableStatus??[];return o?o==="draft"&&e.find(s=>s.publishedAt!==null)?"published":o:"draft"},yt=()=>{const{slug:a=""}=X(),{permissions:n=[],isLoading:o,error:e}=Z(at.map(s=>({action:s,subject:a})));return o?t.jsx(d.Loading,{}):e||!a?t.jsx(d.Error,{}):t.jsx(d.Protect,{permissions:n,children:({permissions:s})=>t.jsx(tt,{permissions:s,children:t.jsx(ct,{})})})};export{ct as EditViewPage,yt as ProtectedEditViewPage};