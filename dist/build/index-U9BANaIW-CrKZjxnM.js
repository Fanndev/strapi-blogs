import{_ as Ve,Q as We,x as G,y as ee,z as ze,A as Ke,C as D,D as Ye,r as f,E as Ze,H as Je,I as Xe,J as es,K as ss,M as ts,N as oe,O as ns,U as rs,W as as,X as b,Y as is,d as U,f as k,j as e,G as O,F as y,T as x,Z as S,c as os,a as se,e as te,P as M,$ as w,R as cs,p as F,B as P,a0 as T,a1 as Q,a2 as V,a3 as ce,a4 as ne,s as ls,a5 as ds,u as B,a6 as le,a7 as de,g as I,i as W,a8 as ue,a9 as he,aa as ge,L as E,n as pe,ab as me,k as v,l as fe,ac as xe,ad as us,h as be,ae as je,af as ye,ag as hs,ah as gs,ai as ps,aj as ms,ak as fs,q as xs,al as ve,am as bs,an as js,ao as ys,ap as vs,aq as Re,ar as $,as as Ce,at as Rs,au as Cs,av as Ms,aw as re,ax as Os,ay as Ss,az as N,aA as ws,aB as ks,aC as Es}from"./strapi-B-LHh8jx.js";import{s as ae}from"./sortBy-BgPIVEed.js";import{_ as Ps}from"./_arrayIncludesWith-BNzMLSv9.js";import{t as As,m as Ls}from"./tail-Bg6Wx0CI.js";import"./_baseMap-hSyrkfZm.js";import"./_baseEach-Di8Zypgr.js";var Ds=function(s){Ve(t,s);function t(r,i){var n;return n=s.call(this)||this,n.client=r,n.queries=[],n.result=[],n.observers=[],n.observersMap={},i&&n.setQueries(i),n}var a=t.prototype;return a.onSubscribe=function(){var i=this;this.listeners.length===1&&this.observers.forEach(function(n){n.subscribe(function(o){i.onUpdate(n,o)})})},a.onUnsubscribe=function(){this.listeners.length||this.destroy()},a.destroy=function(){this.listeners=[],this.observers.forEach(function(i){i.destroy()})},a.setQueries=function(i,n){this.queries=i,this.updateObservers(n)},a.getCurrentResult=function(){return this.result},a.getOptimisticResult=function(i){return this.findMatchingObservers(i).map(function(n){return n.observer.getOptimisticResult(n.defaultedQueryOptions)})},a.findMatchingObservers=function(i){var n=this,o=this.observers,l=i.map(function(h){return n.client.defaultQueryObserverOptions(h)}),d=l.flatMap(function(h){var j=o.find(function(R){return R.options.queryHash===h.queryHash});return j!=null?[{defaultedQueryOptions:h,observer:j}]:[]}),p=d.map(function(h){return h.defaultedQueryOptions.queryHash}),g=l.filter(function(h){return!p.includes(h.queryHash)}),u=o.filter(function(h){return!d.some(function(j){return j.observer===h})}),c=g.map(function(h,j){if(h.keepPreviousData){var R=u[j];if(R!==void 0)return{defaultedQueryOptions:h,observer:R}}return{defaultedQueryOptions:h,observer:n.getObserver(h)}}),m=function(j,R){return l.indexOf(j.defaultedQueryOptions)-l.indexOf(R.defaultedQueryOptions)};return d.concat(c).sort(m)},a.getObserver=function(i){var n=this.client.defaultQueryObserverOptions(i),o=this.observersMap[n.queryHash];return o??new We(this.client,n)},a.updateObservers=function(i){var n=this;G.batch(function(){var o=n.observers,l=n.findMatchingObservers(n.queries);l.forEach(function(c){return c.observer.setOptions(c.defaultedQueryOptions,i)});var d=l.map(function(c){return c.observer}),p=Object.fromEntries(d.map(function(c){return[c.options.queryHash,c]})),g=d.map(function(c){return c.getCurrentResult()}),u=d.some(function(c,m){return c!==o[m]});o.length===d.length&&!u||(n.observers=d,n.observersMap=p,n.result=g,n.hasListeners()&&(ee(o,d).forEach(function(c){c.destroy()}),ee(d,o).forEach(function(c){c.subscribe(function(m){n.onUpdate(c,m)})}),n.notify()))})},a.onUpdate=function(i,n){var o=this.observers.indexOf(i);o!==-1&&(this.result=ze(this.result,o,n),this.notify())},a.notify=function(){var i=this;G.batch(function(){i.listeners.forEach(function(n){n(i.result)})})},t}(Ke);function Ts(s){var t=D.useRef(!1),a=D.useState(0),r=a[1],i=Ye(),n=f.useMemo(function(){return s.map(function(p){var g=i.defaultQueryObserverOptions(p);return g.optimisticResults=!0,g})},[s,i]),o=D.useState(function(){return new Ds(i,n)}),l=o[0],d=l.getOptimisticResult(n);return D.useEffect(function(){t.current=!0;var p=l.subscribe(G.batchCalls(function(){t.current&&r(function(g){return g+1})}));return function(){t.current=!1,p()}},[l]),D.useEffect(function(){l.setQueries(n,{listeners:!1})},[n,l]),d}var Is=Ze,_s=es,qs=Ps,$s=Je,Ns=Xe,Qs=ss,Us=200;function Bs(s,t,a,r){var i=-1,n=_s,o=!0,l=s.length,d=[],p=t.length;if(!l)return d;a&&(t=$s(t,Ns(a))),r?(n=qs,o=!1):t.length>=Us&&(n=Qs,o=!1,t=new Is(t));e:for(;++i<l;){var g=s[i],u=a==null?g:a(g);if(g=r||g!==0?g:0,o&&u===u){for(var c=p;c--;)if(t[c]===u)continue e;d.push(g)}else n(t,u,r)||d.push(g)}return d}var Hs=Bs,Fs=Hs,Gs=ts,Vs=ns,Ws=Gs(function(s,t){return Vs(s)?Fs(s,t):[]}),zs=Ws;const Ks=oe(zs);var Ys=rs,Zs=as;function Js(s,t,a){return s&&s.length?(t=a||t===void 0?1:Zs(t),Ys(s,0,t<0?0:t)):[]}var Xs=Js;const et=oe(Xs),Me=f.createContext({}),Oe=({children:s,value:t})=>e.jsx(Me.Provider,{value:t,children:s}),z=()=>f.useContext(Me);Oe.propTypes={children:b.node.isRequired,value:b.object.isRequired};function st(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return ds(s.replace("api::","").replace("plugin::",""))}}const tt=(s,t)=>{const a=Object.keys(t).sort().map(r=>({name:r,isOpen:!1}));return{...s,collapses:a}},ie=is`
  background: ${s=>s.theme.colors.primary100};

  #cog {
    opacity: 1;
  }
`,nt=U(P)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #cog {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&ie}
  &:hover {
    ${ie}
  }
`,rt=U.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Se=({subCategory:s})=>{const{formatMessage:t}=k(),{onChange:a,onChangeSelectAll:r,onSelectedAction:i,selectedAction:n,modifiedData:o}=z(),l=f.useMemo(()=>Q(o,s.name,{}),[o,s]),d=f.useMemo(()=>Object.values(l).every(c=>c.enabled===!0),[l]),p=f.useMemo(()=>Object.values(l).some(c=>c.enabled===!0)&&!d,[l,d]),g=f.useCallback(({target:{name:c}})=>{r({target:{name:c,value:!d}})},[d,r]),u=f.useCallback(c=>n===c,[n]);return e.jsxs(P,{children:[e.jsxs(y,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(P,{paddingRight:4,children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:s.label})}),e.jsx(rt,{}),e.jsx(P,{paddingLeft:4,children:e.jsx(re,{name:s.name,checked:p?"indeterminate":d,onCheckedChange:c=>g({target:{name:s.name,value:c}}),children:t({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),e.jsx(y,{paddingTop:6,paddingBottom:6,children:e.jsx(O.Root,{gap:2,style:{flex:1},children:s.actions.map(c=>{const m=`${c.name}.enabled`;return e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(nt,{isActive:u(c.name),padding:2,hasRadius:!0,children:[e.jsx(re,{checked:Q(o,m,!1),name:m,onCheckedChange:h=>a({target:{name:m,value:h}}),children:c.label}),e.jsxs("button",{type:"button",onClick:()=>i(c.name),style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(Ce,{tag:"span",children:t({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:c.name})}),e.jsx(Os,{id:"cog"})]})]})},c.name)})})})]})};Se.propTypes={subCategory:b.object.isRequired};const we=({name:s,permissions:t})=>{const a=f.useMemo(()=>ae(Object.values(t.controllers).reduce((r,i,n)=>{const o=`${s}.controllers.${Object.keys(t.controllers)[n]}`,l=ae(Object.keys(i).reduce((d,p)=>[...d,{...i[p],label:p,name:`${o}.${p}`}],[]),"label");return[...r,{actions:l,label:Object.keys(t.controllers)[n],name:o}]},[]),"label"),[s,t]);return e.jsx(P,{padding:6,children:a.map(r=>e.jsx(Se,{subCategory:r},r.name))})};we.propTypes={name:b.string.isRequired,permissions:b.object.isRequired};const at={collapses:[]},it=(s,t)=>ce(s,a=>{switch(t.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((r,i)=>i===t.index?{...r,isOpen:!r.isOpen}:{...r,isOpen:!1});break}default:return a}}),ot=()=>{const{modifiedData:s}=z(),{formatMessage:t}=k(),[{collapses:a}]=f.useReducer(it,at,r=>tt(r,s));return e.jsx(T.Root,{size:"M",children:e.jsx(y,{direction:"column",alignItems:"stretch",gap:1,children:a.map((r,i)=>e.jsxs(T.Item,{value:r.name,children:[e.jsx(T.Header,{variant:i%2===0?"secondary":void 0,children:e.jsx(T.Trigger,{caretPosition:"right",description:t({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:r.name}),children:st(r.name)})}),e.jsx(T.Content,{children:e.jsx(we,{permissions:s[r.name],name:r.name})})]},r.name))})})},ct=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},lt=U(P)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function K({route:s}){const{formatMessage:t}=k(),{method:a,handler:r,path:i}=s,n=i?As(i.split("/")):[],[o="",l=""]=r?r.split("."):[],d=ct(s.method);return e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(x,{variant:"delta",tag:"h3",children:[t({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"})," ",e.jsx("span",{children:o}),e.jsxs(x,{variant:"delta",textColor:"primary600",children:[".",l]})]}),e.jsxs(y,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[e.jsx(lt,{background:d.background,borderColor:d.border,padding:2,children:e.jsx(x,{fontWeight:"bold",textColor:d.text,children:a})}),e.jsx(P,{paddingLeft:2,paddingRight:2,children:Ls(n,p=>e.jsxs(x,{textColor:p.includes(":")?"neutral600":"neutral900",children:["/",p]},p))})]})]})}K.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}};K.propTypes={route:b.shape({handler:b.string,method:b.string,path:b.string})};const dt=()=>{const{formatMessage:s}=k(),{selectedAction:t,routes:a}=z(),r=Ks(t.split("."),"controllers"),i=Q(a,r[0]),n=r.slice(1).join("."),o=V(i)?[]:i.filter(l=>l.handler.endsWith(n));return e.jsx(O.Item,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},direction:"column",alignItems:"stretch",children:t?e.jsx(y,{direction:"column",alignItems:"stretch",gap:2,children:o.map((l,d)=>e.jsx(K,{route:l},d))}):e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(x,{variant:"delta",tag:"h3",children:s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),e.jsx(x,{tag:"p",textColor:"neutral600",children:s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},ut=(s,t,a)=>({...s,initialData:t,modifiedData:t,routes:a}),ht={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},gt=(s,t)=>ce(s,a=>{switch(t.type){case"ON_CHANGE":{const r=t.keys.length,i=t.keys[r-1]==="enabled";if(t.value&&i){const n=et(t.keys,r-1).join(".");a.selectedAction=n}ne(a,["modifiedData",...t.keys],t.value);break}case"ON_CHANGE_SELECT_ALL":{const r=["modifiedData",...t.keys],i=Q(s,r,{}),n=Object.keys(i).reduce((o,l)=>(o[l]={...i[l],enabled:t.value},o),{});ne(a,r,n);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:r}=t;a.selectedAction=r===s.selectedAction?"":r;break}default:return a}}),ke=f.forwardRef(({permissions:s,routes:t},a)=>{const{formatMessage:r}=k(),[i,n]=f.useReducer(gt,ht,g=>ut(g,s,t));f.useImperativeHandle(a,()=>({getPermissions(){return{permissions:i.modifiedData}},resetForm(){n({type:"ON_RESET"})},setFormAfterSubmit(){n({type:"ON_SUBMIT_SUCCEEDED"})}}));const p={...i,onChange:({target:{name:g,value:u}})=>n({type:"ON_CHANGE",keys:g.split("."),value:u==="empty__string_value"?"":u}),onChangeSelectAll:({target:{name:g,value:u}})=>n({type:"ON_CHANGE_SELECT_ALL",keys:g.split("."),value:u}),onSelectedAction:g=>n({type:"SELECT_ACTION",actionToSelect:g})};return e.jsx(Oe,{value:p,children:e.jsxs(O.Root,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(O.Item,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,direction:"column",alignItems:"stretch",children:e.jsxs(y,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(x,{variant:"delta",tag:"h2",children:r({id:S("Plugins.header.title"),defaultMessage:"Permissions"})}),e.jsx(x,{tag:"p",textColor:"neutral600",children:r({id:S("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),e.jsx(ot,{})]})}),e.jsx(dt,{})]})})});ke.propTypes={permissions:b.object.isRequired,routes:b.object.isRequired};const Ee=f.memo(ke),Pe=os().shape({name:se().required(te.required.id),description:se().required(te.required.id)}),pt=s=>Object.keys(s).reduce((t,a)=>{const r=s[a].controllers,i=Object.keys(r).reduce((n,o)=>(V(r[o])||(n[o]=r[o]),n),{});return V(i)||(t[a]={controllers:i}),t},{}),Ae=()=>{const{toggleNotification:s}=B(),{get:t}=I(),{formatAPIError:a}=je(S),[{data:r,isLoading:i,error:n,refetch:o},{data:l,isLoading:d,error:p,refetch:g}]=Ts([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:m}}=await t("/users-permissions/permissions");return m}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:m}}=await t("/users-permissions/routes");return m}}]),u=async()=>{await Promise.all([o(),g()])};f.useEffect(()=>{n&&s({type:"danger",message:a(n)})},[s,n,a]),f.useEffect(()=>{p&&s({type:"danger",message:a(p)})},[s,p,a]);const c=i||d;return{permissions:r?pt(r):{},routes:l??{},getData:u,isLoading:c}},mt=()=>{const{formatMessage:s}=k(),{toggleNotification:t}=B(),a=le(),{isLoading:r,permissions:i,routes:n}=Ae(),{trackUsage:o}=de(),l=f.useRef(),{post:d}=I(),p=W(u=>d("/users-permissions/roles",u),{onError(){t({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})},onSuccess(){o("didCreateRole"),t({type:"success",message:s({id:S("Settings.roles.created"),defaultMessage:"Role created"})}),a(-1)}}),g=async u=>{const c=l.current.getPermissions();await p.mutate({...u,...c,users:[]})};return e.jsxs(ue,{children:[e.jsx(M.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(he,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:g,validationSchema:Pe,children:({handleSubmit:u,values:c,handleChange:m,errors:h})=>e.jsxs(ge,{noValidate:!0,onSubmit:u,children:[e.jsx(E.Header,{primaryAction:!r&&e.jsx(pe,{type:"submit",loading:p.isLoading,startIcon:e.jsx(me,{}),children:s({id:"global.save",defaultMessage:"Save"})}),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.jsx(E.Content,{children:e.jsxs(y,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[e.jsxs(y,{direction:"column",alignItems:"stretch",children:[e.jsx(x,{variant:"delta",tag:"h2",children:s({id:S("EditPage.form.roles"),defaultMessage:"Role details"})}),e.jsxs(O.Root,{gap:4,children:[e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"name",error:h?.name?s({id:h.name,defaultMessage:"Name is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.name",defaultMessage:"Name"})}),e.jsx(fe,{value:c.name||"",onChange:m}),e.jsx(v.Error,{})]})}),e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"description",error:h?.description?s({id:h.description,defaultMessage:"Description is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.description",defaultMessage:"Description"})}),e.jsx(xe,{value:c.description||"",onChange:m}),e.jsx(v.Error,{})]})})]})]}),!r&&e.jsx(Ee,{ref:l,permissions:i,routes:n})]})})]})})]})},ft=()=>e.jsx(M.Protect,{permissions:w.createRole,children:e.jsx(mt,{})}),xt=()=>{const{formatMessage:s}=k(),{toggleNotification:t}=B(),{params:{id:a}}=us("/settings/users-permissions/roles/:id"),{get:r}=I(),{isLoading:i,routes:n}=Ae(),{data:o,isLoading:l,refetch:d}=be(["users-permissions","role",a],async()=>{const{data:{role:h}}=await r(`/users-permissions/roles/${a}`);return h}),p=f.useRef(),{put:g}=I(),{formatAPIError:u}=je(),c=W(h=>g(`/users-permissions/roles/${a}`,h),{onError(h){t({type:"danger",message:u(h)})},async onSuccess(){t({type:"success",message:s({id:S("Settings.roles.created"),defaultMessage:"Role edited"})}),await d()}}),m=async h=>{const j=p.current.getPermissions();await c.mutate({...h,...j,users:[]})};return l?e.jsx(M.Loading,{}):e.jsxs(ue,{children:[e.jsx(M.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(he,{enableReinitialize:!0,initialValues:{name:o.name,description:o.description},onSubmit:m,validationSchema:Pe,children:({handleSubmit:h,values:j,handleChange:R,errors:A})=>e.jsxs(ge,{noValidate:!0,onSubmit:h,children:[e.jsx(E.Header,{primaryAction:i?null:e.jsx(pe,{disabled:o.code==="strapi-super-admin",type:"submit",loading:c.isLoading,startIcon:e.jsx(me,{}),children:s({id:"global.save",defaultMessage:"Save"})}),title:o.name,subtitle:o.description,navigationAction:e.jsx(ye,{})}),e.jsx(E.Content,{children:e.jsxs(y,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[e.jsxs(y,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(x,{variant:"delta",tag:"h2",children:s({id:S("EditPage.form.roles"),defaultMessage:"Role details"})}),e.jsxs(O.Root,{gap:4,children:[e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"name",error:A?.name?s({id:A.name,defaultMessage:"Name is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.name",defaultMessage:"Name"})}),e.jsx(fe,{value:j.name||"",onChange:R}),e.jsx(v.Error,{})]})}),e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"description",error:A?.description?s({id:A.description,defaultMessage:"Description is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.description",defaultMessage:"Description"})}),e.jsx(xe,{value:j.description||"",onChange:R}),e.jsx(v.Error,{})]})})]})]}),!i&&e.jsx(Ee,{ref:p,permissions:o.permissions,routes:n})]})})]})})]})},bt=()=>e.jsx(M.Protect,{permissions:w.updateRole,children:e.jsx(xt,{})}),jt=U(ls)`
  align-items: center;
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  padding: ${({theme:s})=>`${s.spaces[2]}`};

  svg {
    height: 1.6rem;
    width: 1.6rem;

    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,Y=({sortedRoles:s,canDelete:t,canUpdate:a,setRoleToDelete:r,onDelete:i})=>{const{formatMessage:n}=k(),o=le(),[l,d]=i,p=u=>t&&!["public","authenticated"].includes(u.type),g=u=>{r(u),d(!l)};return e.jsx(Ss,{children:s?.map(u=>e.jsxs(Re,{onClick:()=>o(u.id.toString()),children:[e.jsx(N,{width:"20%",children:e.jsx(x,{children:u.name})}),e.jsx(N,{width:"50%",children:e.jsx(x,{children:u.description})}),e.jsx(N,{width:"30%",children:e.jsx(x,{children:n({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:u.nb_users})})}),e.jsx(N,{children:e.jsxs(y,{justifyContent:"end",onClick:c=>c.stopPropagation(),children:[a?e.jsx(jt,{tag:ve,to:u.id.toString(),"aria-label":n({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${u.name}`}),children:e.jsx(ws,{})}):null,p(u)&&e.jsx(ks,{onClick:()=>g(u.id.toString()),variant:"ghost",label:n({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${u.name}`}),children:e.jsx(Es,{})})]})})]},u.name))})};Y.defaultProps={canDelete:!1,canUpdate:!1};Y.propTypes={onDelete:b.array.isRequired,setRoleToDelete:b.func.isRequired,sortedRoles:b.array.isRequired,canDelete:b.bool,canUpdate:b.bool};const yt=()=>{const{trackUsage:s}=de(),{formatMessage:t,locale:a}=k(),{toggleNotification:r}=B(),{notifyStatus:i}=hs(),[{query:n}]=gs(),o=n?._q||"",[l,d]=f.useState(!1),[p,g]=f.useState(),{del:u,get:c}=I(),{isLoading:m,allowedActions:{canRead:h,canDelete:j,canCreate:R,canUpdate:A}}=ps({create:w.createRole,read:w.readRoles,update:w.updateRole,delete:w.deleteRole}),{isLoading:Le,data:{roles:Z},isFetching:De,refetch:Te}=be("get-roles",()=>$e(r,t,i),{initialData:{},enabled:h}),{contains:J}=ms(a,{sensitivity:"base"}),X=fs(a,{sensitivity:"base"}),Ie=Le||De||m,_e=()=>{d(!l)},qe=async(C,L,H)=>{try{await u(`/users-permissions/roles/${C}`)}catch{H({type:"danger",message:L({id:"notification.error",defaultMessage:"An error occured"})})}},$e=async(C,L,H)=>{try{const{data:q}=await c("/users-permissions/roles");return H("The roles have loaded successfully"),q}catch(q){throw C({type:"danger",message:L({id:"notification.error",defaultMessage:"An error occurred"})}),new Error(q)}},Ne={roles:{id:S("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:S("Roles.empty.search"),defaultMessage:"No roles match the search."}},Qe=t({id:"global.roles",defaultMessage:"Roles"}),Ue=W(C=>qe(C,t,r),{async onSuccess(){await Te()}}),Be=async()=>{await Ue.mutateAsync(p),d(!l)},_=(Z||[]).filter(C=>J(C.name,o)||J(C.description,o)).sort((C,L)=>X.compare(C.name,L.name)||X.compare(C.description,L.description)),He=o&&!_.length?"search":"roles",Fe=4,Ge=(Z?.length||0)+1;return Ie?e.jsx(M.Loading,{}):e.jsxs(E.Root,{children:[e.jsx(M.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:Qe})}),e.jsxs(M.Main,{children:[e.jsx(E.Header,{title:t({id:"global.roles",defaultMessage:"Roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:R?e.jsx(xs,{to:"new",tag:ve,onClick:()=>s("willCreateRole"),startIcon:e.jsx(bs,{}),size:"S",children:t({id:S("List.button.roles"),defaultMessage:"Add new role"})}):null,navigationAction:e.jsx(ye,{})}),e.jsx(E.Action,{startActions:e.jsx(js,{label:t({id:"app.component.search.label",defaultMessage:"Search"})})}),e.jsxs(E.Content,{children:[!h&&e.jsx(M.NoPermissions,{}),h&&_&&_?.length?e.jsxs(ys,{colCount:Fe,rowCount:Ge,children:[e.jsx(vs,{children:e.jsxs(Re,{children:[e.jsx($,{children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),e.jsx($,{children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),e.jsx($,{children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),e.jsx($,{children:e.jsx(Ce,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),e.jsx(Y,{sortedRoles:_,canDelete:j,canUpdate:A,permissions:w,setRoleToDelete:g,onDelete:[l,d]})]}):e.jsx(Rs,{content:t(Ne[He])})]}),e.jsx(Cs.Root,{open:l,onOpenChange:_e,children:e.jsx(Ms,{onConfirm:Be})})]})]})},vt=()=>e.jsx(M.Protect,{permissions:w.accessRoles,children:e.jsx(yt,{})}),kt=()=>e.jsx(M.Protect,{permissions:w.accessRoles,children:e.jsxs(cs,{children:[e.jsx(F,{index:!0,element:e.jsx(vt,{})}),e.jsx(F,{path:"new",element:e.jsx(ft,{})}),e.jsx(F,{path:":id",element:e.jsx(bt,{})})]})});export{kt as default};