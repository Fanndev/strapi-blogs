function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["strapi-B-LHh8jx.js","strapi-COJtagOC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as P,dt as I,du as _,ad as D,f as M,j as i,P as N,bR as T,L as A,dv as C,r as g,d4 as O,da as R,dw as U,bf as B,dx as H,cu as $,cv as G,a7 as K,b1 as V,dy as z,dz as F,dA as J,dB as W,al as Y}from"./strapi-B-LHh8jx.js";import{s as q}from"./sortBy-BgPIVEed.js";import{s as Q}from"./selectors--muHmKGe-BvffEgJ1.js";import"./_baseMap-hSyrkfZm.js";import"./_baseEach-Di8Zypgr.js";const X=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=O("useSettingsMenu",s=>s.checkUserHasPermissions),f=R("useSettingsMenu",s=>s.shouldUpdateStrapi),c=U("useSettingsMenu",s=>s.settings),d=B(Q),h=g.useMemo(()=>H(),[]),{admin:e,global:t}=$(h,async()=>(await G(()=>import("./strapi-B-LHh8jx.js").then(s=>s.jD),__vite__mapDeps([0,1])).then(s=>s.J)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),b=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:d.settings?.[s.id]?.main??[]}},[d.settings]);return g.useEffect(()=>{const s=async()=>{const w=await(S=>Promise.all(S.reduce((m,L,x)=>{const k=L.links.map(async(v,p)=>({hasPermission:(await o(v.permissions)).length>0,sectionIndex:x,linkIndex:p}));return[...m,...k]},[])))(j);r(S=>({...S,isLoading:!1,menu:j.map((m,L)=>({...m,links:m.links.map((x,k)=>{const v=w.find(p=>p.sectionIndex===L&&p.linkIndex===k);return{...x,isDisplayed:!!v?.hasPermission}})}))}))},{global:l,...E}=c,j=X([{...l,links:q([...l.links,...t.map(b)],u=>u.id).map(u=>({...u,hasNotification:u.id==="000-application-infos"&&f}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(b)},...Object.values(E)]);s()},[e,t,c,f,b,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=P(I)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=P(_)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=M(),{trackUsage:r}=K(),{pathname:o}=V(),c=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),d=a({id:"global.settings",defaultMessage:"Settings"}),h=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(z,{"aria-label":d,children:[i.jsx(F,{label:d}),i.jsx(J,{children:c.map(e=>i.jsx(W,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:Y,withBullet:t.hasNotification,to:t.to,onClick:h(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=D("/settings/:settingId/*"),{formatMessage:a}=M(),{isLoading:r,menu:o}=Z();return r?i.jsx(N.Loading,{}):n?.params.settingId?i.jsxs(A.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(N.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(C,{})]}):i.jsx(T,{to:"application-infos"})};export{rs as Layout};
