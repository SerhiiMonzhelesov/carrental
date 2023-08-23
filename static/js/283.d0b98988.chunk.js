"use strict";(self.webpackChunkcarrental=self.webpackChunkcarrental||[]).push([[283],{2329:function(n,e,i){i.d(e,{Z:function(){return h}});var t,r,o=i(168),a=i(6487),l=a.ZP.li(t||(t=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 274px;\n  justify-content: space-between;\n\n  p {\n    margin: 0;\n  }\n\n  span {\n    color: #3470ff;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n  }\n\n  h3 {\n    color: #121417;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n    margin: 0;\n  }\n\n  .wrapper-checkbox {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .title-wrapper {\n    margin-bottom: 8px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  p.description {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin-bottom: 28px;\n  }\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-bottom: 14px;\n\n  img {\n    width: 100%;\n    height: 268px;\n\n    object-fit: cover;\n    object-position: bottom;\n  }\n"])),(function(n){return n.$urlimg})),c=i(6151),p=i(4957),d=i(7488),u=i(7237),x=i(3329);var h=function(n){var e=n.car,i=n.handleLearnMore,t=n.handleCheckboxChange,r=n.isChecked,o=e.make,a=e.model,h=e.year,f=e.img,g=e.rentalPrice,m=e.address,b=e.rentalCompany,v=e.type,w=e.id,Z=e.functionalities,j=m.split(", ");return(0,x.jsxs)(l,{children:[(0,x.jsx)("div",{className:"wrapper-checkbox",children:(0,x.jsx)(p.Z,{icon:(0,x.jsx)(d.Z,{style:{color:"white"}}),checkedIcon:(0,x.jsx)(u.Z,{}),checked:r,onChange:function(){return t(e.id)},inputProps:{"aria-label":"controlled"}})}),(0,x.jsx)(s,{$urlimg:f}),(0,x.jsxs)("div",{className:"title-wrapper",children:[(0,x.jsxs)("h3",{children:[o," ",(0,x.jsx)("span",{children:a}),", ",h]}),(0,x.jsx)("p",{children:g})]}),(0,x.jsxs)("p",{className:"description",children:[j[1]," | ",j[2]," | ",b," | ",v," ","| ",a," | ",w," | ",Z[0]]}),(0,x.jsx)(c.Z,{id:w,variant:"contained",onClick:i,sx:{height:"44px",borderRadius:"12px"},children:"LEARN MORE"})]})}},8266:function(n,e,i){i.d(e,{s:function(){return o}});var t,r=i(168),o=i(6487).ZP.ul(t||(t=(0,r.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n  padding: 0;\n  margin: 0 0 100px 0;\n"])))},3288:function(n,e,i){i.d(e,{Z:function(){return p}});var t,r=i(1413),o=i(5987),a=i(168),l=i(6487).ZP.div(t||(t=(0,a.Z)(["\n  padding: 40px 128px 150px 128px;\n  width: 100%;\n  height: 100vh;\n  max-width: 1440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),s=i(3329),c=["children"];var p=function(n){var e=n.children,i=(0,o.Z)(n,c);return(0,s.jsx)(l,(0,r.Z)((0,r.Z)({},i),{},{children:e}))}},444:function(n,e,i){i.d(e,{Z:function(){return v}});var t=i(9434),r=i(8247),o=i(6351);var a,l,s=i(168),c=i(6487),p=c.ZP.div(a||(a=(0,s.Z)(["\n  margin: 0 auto 50px auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 18px;\n"]))),d=i(1413),u=c.ZP.form(l||(l=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  column-gap: 18px;\n  width: 100%;\n  max-width: 859px;\n\n  align-items: flex-end;\n  justify-content: center;\n\n  .brand-label,\n  .price-label {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    color: #8a8a89;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.29;\n  }\n\n  .select-brand {\n    display: flex;\n    gap: 10px;\n  }\n  .inputs-field {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    max-width: 320px;\n  }\n\n  .inputs-field label {\n    color: #8a8a89;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.29;\n  }\n\n  .inputs-mileage {\n    width: 320px;\n  }\n\n  input:focus {\n    outline: none;\n  }\n\n  .inputs-mileage input {\n    width: 100%;\n    max-width: 160px;\n    height: 48px;\n    text-indent: 24px;\n    background: #f7f7fb;\n  }\n  .fromMileage {\n    border-radius: 14px 0px 0px 14px;\n    border: none;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n  }\n  .toMileage {\n    border: none;\n    border-radius: 0px 14px 14px 0px;\n  }\n  .inputs-mileage input::placeholder {\n    color: #121417;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 20px;\n    padding-left: 14px;\n  }\n"]))),x={option:function(n){return(0,d.Z)((0,d.Z)({},n),{},{background:"#FFF",outline:"none",height:"32px",fontSize:"16px",fontWeight:"500",color:"rgba(18, 20, 23, 0.20)",cursor:"pointer","&:hover":{color:"#121417",fontWeight:"500"},textAlign:"left"})},control:function(n){return(0,d.Z)((0,d.Z)({},n),{},{border:"none",borderRadius:"14px",boxShadow:"none",backgroundColor:"#F7F7FB",width:"224px",height:"48px",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"})},singleValue:function(n,e){var i=e.isDisabled?.5:1;return(0,d.Z)((0,d.Z)({},n),{},{opacity:i,transition:"opacity 300ms",right:5,color:"#121417",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"})},menu:function(n){return(0,d.Z)((0,d.Z)({},n),{},{background:"#FFF",borderRadius:"14px",display:"inline-block",width:"224px",marginLeft:"auto",marginRight:"auto",border:"1px solid rgba(18, 20, 23, 0.05)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)"})},menuList:function(n){return(0,d.Z)((0,d.Z)({},n),{},{"::-webkit-scrollbar":{}})},placeholder:function(){return{position:"absolute",left:10,color:"#121417",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"}},indicators:function(){return{cursor:"pointer"}},dropdownIndicator:function(n){return(0,d.Z)((0,d.Z)({},n),{},{size:"20px",color:"#121417;","&:hover":{color:"rgba(18, 20, 23, 1)"}})},input:function(n){return(0,d.Z)((0,d.Z)({},n),{},{margin:"0px",color:"#121417",width:"100%"})}},h={option:function(n){return(0,d.Z)((0,d.Z)({},n),{},{background:"#FFF",outline:"none",height:"32px",fontSize:"16px",fontWeight:"500",color:"rgba(18, 20, 23, 0.20)",cursor:"pointer","&:hover":{color:"#121417",fontWeight:"500"},textAlign:"left"})},control:function(n){return(0,d.Z)((0,d.Z)({},n),{},{border:"none",borderRadius:"14px",boxShadow:"none",backgroundColor:"#F7F7FB",width:"125px",height:"48px",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"})},singleValue:function(n,e){var i=e.isDisabled?.5:1;return(0,d.Z)((0,d.Z)({},n),{},{opacity:i,transition:"opacity 300ms",right:5,color:"#121417",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"})},menu:function(n){return(0,d.Z)((0,d.Z)({},n),{},{background:"#FFF",borderRadius:"14px",display:"inline-block",width:"224px",marginLeft:"auto",marginRight:"auto",border:"1px solid rgba(18, 20, 23, 0.05)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)"})},menuList:function(n){return(0,d.Z)((0,d.Z)({},n),{},{"::-webkit-scrollbar":{}})},placeholder:function(){return{position:"absolute",left:10,color:"#121417",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"}},indicators:function(){return{cursor:"pointer"}},dropdownIndicator:function(n){return(0,d.Z)((0,d.Z)({},n),{},{size:"20px",color:"#121417;","&:hover":{color:"rgba(18, 20, 23, 1)"}})},input:function(n){return(0,d.Z)((0,d.Z)({},n),{},{margin:"0px",color:"#121417",width:"100%"})}},f=i(6151),g=i(5705),m=i(8613),b=i(3329);var v=function(n){n.page;var e=(0,t.I0)(),i=(0,t.v9)(o.tu),a=function(n){for(var e=null===n||void 0===n?void 0:n.map((function(n){return{brandOptions:{value:n.make,label:n.make},priceOptions:{value:n.rentalPrice.replace("$",""),label:n.rentalPrice.replace("$","")}}})),i=new Set,t=new Set,r={uniqBrandOptions:[],uniqPriceOptions:[]},o=0;o<(null===e||void 0===e?void 0:e.length);o++){var a=e[o].brandOptions,l=a.label;i.has(l)||(i.add(l),r.uniqBrandOptions.push(a));var s=e[o].priceOptions,c=s.value;t.has(c)||(t.add(c),r.uniqPriceOptions.push(s))}return r.uniqPriceOptions.sort((function(n,e){return n.label-e.label})),r}(i),l=(0,g.TA)({initialValues:{make:"",price:"",fromMileage:"",toMileage:""},onSubmit:function(n){e((0,r.Tv)(function(n,e){var i=n.make,t=n.price,r=n.fromMileage,o=n.toMileage,a=""===i?e:null===e||void 0===e?void 0:e.filter((function(n){return n.make.includes(i.trim())})),l=""===t?a:a.filter((function(n){return parseInt(n.rentalPrice.slice(1))<=parseInt(t)}));return""===r&&""===o?l:l.filter((function(n){return n.mileage>=r&&n.mileage<=o}))}(n,i)))}});return(0,b.jsxs)(p,{children:[(0,b.jsxs)(u,{onSubmit:l.handleSubmit,children:[(0,b.jsxs)("label",{className:"brand-label",children:["Car brand",(0,b.jsx)(m.ZP,{classNames:"select-brand",type:"text",name:l.values.label,value:l.values.label,options:a.uniqBrandOptions,styles:x,placeholder:"Enter the text",onChange:function(n){var e=n.value;return l.setFieldValue("make",e)},onBlur:l.handleBlur})]}),(0,b.jsxs)("label",{className:"price-label",children:["Price / 1 hour",(0,b.jsx)(m.ZP,{type:"number",name:l.values.label,value:l.values.value,options:a.uniqPriceOptions,styles:h,placeholder:"To $ ",onChange:function(n){var e=n.value;return l.setFieldValue("price",e)},onBlur:l.handleBlur})]}),(0,b.jsxs)("div",{className:"inputs-field",children:[(0,b.jsx)("label",{children:"Car mileage / km"}),(0,b.jsxs)("div",{className:"inputs-mileage",children:[(0,b.jsx)("input",{className:"fromMileage",type:"number",name:"fromMileage",value:l.values.fromMileage,placeholder:"From",autoComplete:"off",onChange:l.handleChange,min:"1"}),(0,b.jsx)("input",{className:"toMileage",type:"number",name:"toMileage",value:l.values.toMileage,placeholder:"To",autoComplete:"off",onChange:l.handleChange,min:"1"})]})]}),(0,b.jsx)(f.Z,{type:"submit",variant:"contained",sx:{width:"136px",height:"48px",borderRadius:"12px"},children:"SEARCH"})]}),(0,b.jsx)(f.Z,{type:"button",variant:"contained",sx:{width:"136px",height:"48px",borderRadius:"12px"},onClick:function(){e((0,r.aX)())},children:"cancel"})]})}},9829:function(n,e,i){i.d(e,{u:function(){return v}});var t,r,o,a=i(3433),l=i(9434),s=i(2791),c=i(8247),p=i(6351),d=i(168),u=i(6487),x=u.ZP.div(t||(t=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(116, 114, 114, 0.7);\n  backdrop-filter: blur(3.5px);\n  overscroll-behavior: contain;\n"]))),h=u.ZP.div(r||(r=(0,d.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  padding: 40px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 541px;\n  min-height: 742px;\n\n  border-radius: 24px;\n  background: white;\n\n  img {\n    border-radius: 14px;\n    width: 100%;\n    margin-bottom: 18px;\n    object-fit: cover;\n    object-position: bottom;\n  }\n\n  .blur-up {\n    filter: blur(5px);\n    transition: filter 400ms;\n  }\n\n  .blur-up.lazyloaded {\n    filter: blur(0);\n  }\n\n  h3 {\n    margin: 0 0 8px 0;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.33;\n  }\n  .title-span {\n    color: #3470ff;\n  }\n  .text-exposition {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n\n    line-height: 1.5;\n    max-width: 300px;\n    margin: 0 0 14px 0;\n  }\n  .text-description {\n    font-size: 14px;\n    line-height: 1.43;\n    margin: 0 0 24px 0;\n  }\n\n  h4 {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    margin: 0 0 8px 0;\n  }\n\n  .text-accessories {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    line-height: 1.5;\n    margin: 0 0 24px 0;\n  }\n\n  .field-conditions {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin: 0 0 24px 0;\n  }\n\n  .field-conditions p {\n    display: flex;\n    padding: 7px 14px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 35px;\n    background: #f9f9f9;\n    font-size: 12px;\n    line-height: 1.5;\n    letter-spacing: -0.24px;\n    margin: 0;\n  }\n  .age,\n  .field-conditions span {\n    color: #3470ff;\n  }\n"]))),f=u.ZP.button(o||(o=(0,d.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]))),g=i(2134),m=i(6151),b=(i(2504),i(2664),i(3329));function v(){var n=(0,l.I0)(),e=(0,l.v9)(p.CD),i=(0,l.v9)(p.ie);(0,s.useEffect)((function(){i?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");var e=function(e){"Escape"===e.code&&n((0,c.L8)(""))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n,i]);var t=e.id,r=e.img,o=e.make,d=e.model,u=e.year,v=e.address,w=e.type,Z=e.fuelConsumption,j=e.engineSize,y=e.description,k=e.accessories,C=e.functionalities,z=e.rentalConditions,P=e.rentalPrice,F=e.mileage,S=[].concat((0,a.Z)(k),(0,a.Z)(C)),N=v.split(", "),M=z.split("\n"),L=M[0].split(":")[1],O=M[0].split(":")[0];return(0,b.jsx)(x,{onClick:function(e){e.target===e.currentTarget&&(n((0,c.L8)()),n((0,c.GO)("null")))},children:(0,b.jsxs)(h,{children:[(0,b.jsx)(f,{type:"button",onClick:function(){n((0,c.L8)()),n((0,c.GO)("null"))},children:(0,b.jsx)(g.oHP,{size:24,fill:"black"})}),(0,b.jsx)("div",{children:(0,b.jsx)("img",{"data-src":r,alt:d,width:"461",height:"248",loading:"lazy",className:"lazyload blur-up"})}),(0,b.jsxs)("h3",{children:[o," ",(0,b.jsx)("span",{className:"title-span",children:d}),", ",u]}),(0,b.jsxs)("p",{className:"text-exposition",children:[N[1]," | ",N[2]," | id: ",t," | Year:"," ",u," | Type: ",w," | Fuel Consumption: ",Z," | Engine Size: ",j]}),(0,b.jsx)("p",{className:"text-description",children:y}),(0,b.jsx)("h4",{children:"Accessories and functionalities:"}),(0,b.jsx)("p",{className:"text-accessories",children:S.join(" | ")}),(0,b.jsx)("h4",{children:"Rental Conditions:"}),(0,b.jsxs)("div",{className:"field-conditions",children:[z.split("\n").map((function(n,e){return 0===e?(0,b.jsxs)("p",{children:[O,": ",(0,b.jsx)("span",{className:"age",children:L})]},e):(0,b.jsx)("p",{children:n},e)})),(0,b.jsxs)("p",{children:["Mileage: ",(0,b.jsx)("span",{children:F.toLocaleString("en-US")})]}),(0,b.jsxs)("p",{children:["Price: ",(0,b.jsx)("span",{children:P})]})]}),(0,b.jsx)(m.Z,{sx:{width:"100%",maxWidth:168,height:44,textTransform:"none"},variant:"contained",href:"tel:+380730000000",children:"Rental car"})]})})}}}]);
//# sourceMappingURL=283.d0b98988.chunk.js.map