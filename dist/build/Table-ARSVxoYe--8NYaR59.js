import{r as k,f as j,cW as B,cX as M,j as e,d as b,q as E,ah as A,a6 as I,a7 as S,ak as L,bx as a,T as g,F as $,au as y,B as F,aB as P,aC as U,av as N,aA as W,al as H}from"./strapi-B-LHh8jx.js";const O=["years","months","days","hours","minutes","seconds"],R=k.forwardRef(({timestamp:s,customIntervals:n=[],...l},i)=>{const{formatRelativeTime:d,formatDate:r,formatTime:c}=j(),x=B({start:s,end:Date.now()}),u=O.find(o=>x[o]>0&&Object.keys(x).includes(o)),h=M(s)?-x[u]:x[u],m=n.find(o=>x[o.unit]<o.threshold),p=m?m.text:d(h,u,{numeric:"auto"});return e.jsx("time",{ref:i,dateTime:s.toISOString(),role:"time",title:`${r(s)} ${c(s)}`,...l,children:p})}),J=({permissions:s,headers:n=[],isLoading:l=!1,tokens:i=[],onConfirmDelete:d,tokenType:r})=>{const[{query:c}]=A(),{formatMessage:x,locale:u}=j(),[,h]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],m=I(),{trackUsage:p}=S(),o=L(u),f=[...i].sort((t,v)=>h==="DESC"?o.compare(v.name,t.name):o.compare(t.name,v.name)),{canDelete:C,canUpdate:T,canRead:D}=s,w=t=>()=>{D&&(p("willEditTokenFromList",{tokenType:r}),m(t.toString()))};return e.jsx(a.Root,{headers:n,rows:f,isLoading:l,children:e.jsxs(a.Content,{children:[e.jsx(a.Head,{children:n.map(t=>e.jsx(a.HeaderCell,{...t},t.name))}),e.jsx(a.Empty,{}),e.jsx(a.Loading,{}),e.jsx(a.Body,{children:f.map(t=>e.jsxs(a.Row,{onClick:w(t.id),children:[e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(g,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(g,{textColor:"neutral800",ellipsis:!0,children:t.description})}),e.jsx(a.Cell,{children:e.jsx(g,{textColor:"neutral800",children:e.jsx(R,{timestamp:new Date(t.createdAt)})})}),e.jsx(a.Cell,{children:t.lastUsedAt&&e.jsx(g,{textColor:"neutral800",children:e.jsx(R,{timestamp:new Date(t.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:x({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T||D||C?e.jsx(a.Cell,{children:e.jsxs($,{justifyContent:"end",children:[T&&e.jsx(X,{tokenName:t.name,tokenId:t.id}),C&&e.jsx(Q,{tokenName:t.name,onClickDelete:()=>d?.(t.id),tokenType:r})]})}):null]},t.id))})]})})},q={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},z=({tokenName:s,tokenId:n,buttonType:l="edit",children:i})=>{const{formatMessage:d}=j();return e.jsx(G,{tag:H,to:n.toString(),onClick:r=>r.stopPropagation(),title:d(q[l],{target:s}),variant:"ghost",size:"S",children:i})},G=b(E)`
  padding: 0.7rem;

  & > span {
    display: flex;
  }
`,Q=({tokenName:s,onClickDelete:n,tokenType:l})=>{const{formatMessage:i}=j(),{trackUsage:d}=S(),r=()=>{d("willDeleteToken",{tokenType:l}),n()};return e.jsx(y.Root,{children:e.jsxs(F,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[e.jsx(y.Trigger,{children:e.jsx(P,{label:i({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",variant:"ghost",children:e.jsx(U,{})})}),e.jsx(N,{onConfirm:r})]})})},X=({tokenName:s,tokenId:n})=>e.jsx(z,{tokenName:s,tokenId:n,children:e.jsx(W,{})});export{J as T};
