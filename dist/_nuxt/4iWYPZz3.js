import{m as c,u as y,r as D,n as A,$ as r,c as C,a as t,d as g,s as d,v as a,C as m,D as b,x,o as V}from"./47DChMVZ.js";import{_ as U}from"./Dql-H8dD.js";import{_ as k}from"./BK3afaXz.js";import{S as w}from"./CZ6zJjqP.js";const P={class:"edit-deal-modal__content"},I={class:"edit-deal-modal__room-img"},S={class:"edit-deal-modal__upload-file"},E={class:"edit-deal-modal__address-section"},$={class:"edit-deal-modal__address-field"},R={class:"edit-deal-modal__address-field"},T={class:"edit-deal-modal__address-field"},M={class:"edit-deal-modal__address-field"},O={class:"edit-deal-modal__details-section"},z={class:"edit-deal-modal__details-row"},B={class:"edit-deal-modal__details-field"},F={class:"edit-deal-modal__details-field"},N={class:"edit-deal-modal__details-row"},j={class:"edit-deal-modal__details-field"},H={class:"edit-deal-modal__details-field"},K={class:"edit-deal-modal__details-row"},L={class:"edit-deal-modal__details-field"},Z={class:"edit-deal-modal__details-field"},q={class:"edit-deal-modal__footer"},G={class:"edit-deal-modal__status"},ee=c({__name:"[id]",setup(J){const i=()=>x("/deals/deals"),u=y().params.id,l=D({id:null,customerId:null,streetAddress:"",city:"",state:"",zipCode:"",roomArea:0,numberOfPeople:0,avatar:null,appointmentDate:"",specialInstructions:"",roomAccess:"",price:0,status:w.InProgress});A(async()=>{try{const o=await r(`/api/deals/${u}`);l.value=o}catch(o){console.log("Ошибка при получении сделки:",o)}});const n=new FormData,v=async()=>{if(l.value){n.delete("avatar");for(const[o,e]of Object.entries(l.value))e!=null&&(o==="avatar"&&e instanceof File?n.append(o,e):(typeof e=="string"||typeof e=="number"||typeof e=="boolean")&&n.append(o,String(e)));try{const o=await r(`/api/deals/${u}`,{method:"PATCH",body:n});l.value=o,i()}catch(o){console.error("Ошибка при сохранении сделки:",o)}}},_=o=>{var s,p;const e=(p=(s=o.target)==null?void 0:s.files)==null?void 0:p[0];e&&(l.value.avatar=e)},f=async()=>{if(confirm("Вы действительно хотите удалить эту сделку?"))try{await r(`/api/deals/${u}`,{method:"DELETE"}),i()}catch(e){console.log("Ошиюка при удалении сделки:",e)}};return(o,e)=>(V(),C("div",{class:"edit-deal-overlay",onClick:i},[t("div",{class:"edit-deal-modal",onClick:e[11]||(e[11]=b(()=>{},["stop"]))},[t("div",{class:"edit-deal-modal__header"},[e[12]||(e[12]=t("h4",null,"Edit Deal",-1)),t("img",{src:U,alt:"",onClick:i})]),t("div",P,[t("div",I,[e[14]||(e[14]=t("h4",null,"Room images",-1)),t("label",S,[e[13]||(e[13]=g(" ADD ")),t("input",{type:"file",accept:"image/*",onChange:_},null,32)])]),t("div",E,[t("div",$,[e[15]||(e[15]=t("h4",null,"Address",-1)),d(t("input",{type:"text",placeholder:"Street Address","onUpdate:modelValue":e[0]||(e[0]=s=>l.value.streetAddress=s)},null,512),[[a,l.value.streetAddress]])]),t("div",R,[d(t("input",{type:"text",placeholder:"City","onUpdate:modelValue":e[1]||(e[1]=s=>l.value.city=s)},null,512),[[a,l.value.city]])]),t("div",T,[d(t("input",{type:"text",placeholder:"State / Province","onUpdate:modelValue":e[2]||(e[2]=s=>l.value.state=s)},null,512),[[a,l.value.state]])]),t("div",M,[d(t("input",{type:"text",placeholder:"Zip Code","onUpdate:modelValue":e[3]||(e[3]=s=>l.value.zipCode=s)},null,512),[[a,l.value.zipCode]])])]),t("div",O,[t("div",z,[t("div",B,[e[16]||(e[16]=t("h4",null,"Room Area (m2)",-1)),d(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=s=>l.value.roomArea=s)},null,512),[[a,l.value.roomArea]])]),t("div",F,[e[17]||(e[17]=t("h4",null,"# of People",-1)),d(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=s=>l.value.numberOfPeople=s)},null,512),[[a,l.value.numberOfPeople]])])]),t("div",N,[t("div",j,[e[18]||(e[18]=t("h4",null,"Appointment Date",-1)),d(t("input",{type:"date","onUpdate:modelValue":e[6]||(e[6]=s=>l.value.appointmentDate=s)},null,512),[[a,l.value.appointmentDate]])]),t("div",H,[e[19]||(e[19]=t("h4",null,"Special Instructions",-1)),d(t("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=s=>l.value.specialInstructions=s)},null,512),[[a,l.value.specialInstructions]])])]),t("div",K,[t("div",L,[e[21]||(e[21]=t("h4",null,"Room Access",-1)),d(t("select",{class:"edit-deal-modal__select","onUpdate:modelValue":e[8]||(e[8]=s=>l.value.roomAccess=s)},e[20]||(e[20]=[t("option",null,"Keys with doorman",-1),t("option",null,"Direct access",-1)]),512),[[m,l.value.roomAccess]])]),t("div",Z,[e[22]||(e[22]=t("h4",null,"Price ($)",-1)),d(t("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=s=>l.value.price=s)},null,512),[[a,l.value.price]])])])]),t("div",q,[t("div",G,[e[24]||(e[24]=t("label",{for:"status"},"Progress",-1)),d(t("select",{id:"status","onUpdate:modelValue":e[10]||(e[10]=s=>l.value.status=s)},e[23]||(e[23]=[t("option",null,"In Progress",-1),t("option",null,"Completed",-1)]),512),[[m,l.value.status]])]),t("div",{class:"edit-deal-modal__delete",onClick:f},e[25]||(e[25]=[t("img",{src:k,alt:""},null,-1)])),t("div",{class:"edit-deal-modal__buttons"},[t("button",{class:"edit-deal-modal__cancel",onClick:i}," Cancel "),t("button",{class:"edit-deal-modal__done",onClick:v},"Done")])])])])]))}});export{ee as default};
