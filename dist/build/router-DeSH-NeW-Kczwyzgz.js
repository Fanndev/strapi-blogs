function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["index-Df1alkCk-xYzKew3i.js","strapi-B-LHh8jx.js","strapi-COJtagOC.css","Layout-BJOxxAeM-wFsa5ijV.js","useDragLayer-BYoMRIwv.js","_id-6LK95-rZ-B4i4ZqwU.js","getEmptyImage-CjqolaH3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as o,cv as a,j as e,R as r,p as s}from"./strapi-B-LHh8jx.js";const d=o.lazy(()=>a(()=>import("./index-Df1alkCk-xYzKew3i.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.ProtectedListPage}))),i=o.lazy(()=>a(()=>import("./_id-6LK95-rZ-B4i4ZqwU.js"),__vite__mapDeps([5,1,2,3,4,6])).then(t=>({default:t.ProtectedEditPage}))),p=[{path:"/",Component:d},{path:":id",Component:i}],_=()=>e.jsx(r,{children:p.map(t=>e.jsx(s,{...t},t.path))});export{_ as Router};
