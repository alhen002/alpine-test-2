import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./entry.Dwd7IvnN.js";import{u as d}from"./asyncData.CYwwrxaN.js";import f from"./Ellipsis.DFw83zIc.js";import y from"./ComponentPlaygroundData.DNdJ7lg8.js";import"./TabsHeader.CWiAgBkL.js";import"./ComponentPlaygroundProps.B1ZGm1aY.js";import"./ProseH4.DGkkSPch.js";import"./ProseCodeInline.Br5yPPzZ.js";import"./Badge.DWJv_GB0.js";import"./MDCSlot.CENoKw15.js";import"./slot.UOrMS-XJ.js";import"./ProseP.DCshsKTr.js";import"./index.D-5i6H-f.js";import"./ComponentPlaygroundSlots.vue.CAeVzJsm.js";import"./ComponentPlaygroundTokens.vue.BYPxg-PS.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};
