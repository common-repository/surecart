import{s as speak}from"./index-c5a96d53.js";import{c as createStore}from"./index-1046c77e.js";const store=createStore({type:"default",code:"",message:"",data:{status:0,type:"",http_status:""},additional_errors:[],dismissible:!1},((e,t)=>JSON.stringify(e)!==JSON.stringify(t))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store,defaultOptions={dismissible:!1},createNotice=(e,t,s=defaultOptions)=>{"string"==typeof t&&(t={type:e,message:t,code:""}),(null==t?void 0:t.message)||(t.message=wp.i18n.__("Something went wrong. Please try again.","surecart")),state.type=e,t={...s,...t},speak(t.message,"assertive"),Object.keys(t).forEach((e=>{state[e]=t[e]}))},createErrorNotice=(e,t=defaultOptions)=>{createNotice("error",e,t)},createInfoNotice=(e,t=defaultOptions)=>{createNotice("info",e,t)},removeNotice=()=>{state.type="default",state.code="",state.message="",state.data={status:0,type:"",http_status:""},state.additional_errors=[]};export{createInfoNotice as a,createErrorNotice as c,removeNotice as r,state as s};