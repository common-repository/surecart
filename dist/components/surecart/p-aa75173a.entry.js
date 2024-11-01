import{r as i,h as t,F as o,a as s}from"./p-cc7ce8c7.js";import{g as e}from"./p-40e3d090.js";import{u as n,s as l,o as r}from"./p-e250339f.js";import{g as d}from"./p-c06b2e12.js";import{u as a,a as c}from"./p-c132baf6.js";import{c as v}from"./p-8266bbed.js";import{i as u,a as p}from"./p-f70181c4.js";import"./p-e64f9fcd.js";import"./p-25433d0f.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-830ab1a3.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-7c2e44b1.js";import"./p-50da3ba3.js";import"./p-18e45a13.js";const h="sc-checkout-product-price-variant-selector{display:block}.sc-checkout-product-price-variant-selector{position:relative}.sc-checkout-product-price-variant-selector>*:not(:last-child){display:block;margin-bottom:var(--sc-form-row-spacing, 0.75em)}.sc-checkout-product-price-variant-selector__pills-wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}.sc-checkout-product-price-variant-selector__hidden-input{position:absolute !important;top:0 !important;left:0 !important;opacity:0 !important;padding:0px !important;margin:0px !important;pointer-events:none !important;width:0 !important}";const m=class{constructor(t){i(this,t);this.product=undefined;this.label=undefined;this.selectorTitle=undefined;this.selectedVariant=undefined;this.selectedPrice=undefined;this.option1=undefined;this.option2=undefined;this.option3=undefined}handleOptionChange(){var i,t;this.selectedVariant=d({variants:(t=(i=this.product)===null||i===void 0?void 0:i.variants)===null||t===void 0?void 0:t.data,values:{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}}})}isSelectedVariantOutOfStock(){var i,t;return((i=this.product)===null||i===void 0?void 0:i.stock_enabled)&&this.hasVariants()&&!((t=this.product)===null||t===void 0?void 0:t.allow_out_of_stock_purchases)&&this.selectedVariant.available_stock<1}hasRequiredSelectedVariant(){var i;if(!this.hasVariants()){return true}return(i=this.selectedVariant)===null||i===void 0?void 0:i.id}async reportValidity(){this.input.setCustomValidity("");if(!this.hasVariants()){return this.input.reportValidity()}if(!this.hasRequiredSelectedVariant()){this.input.setCustomValidity(wp.i18n.__("Please choose an available option.","surecart"));return this.input.reportValidity()}if(this.isSelectedVariantOutOfStock()){this.input.setCustomValidity(wp.i18n.__("This selection is not available.","surecart"));return this.input.reportValidity()}return this.input.reportValidity()}getSelectedPrice(){var i,t,o,s,e;if(((o=(t=(i=this.product)===null||i===void 0?void 0:i.prices)===null||t===void 0?void 0:t.data)===null||o===void 0?void 0:o.length)===1){return(e=(s=this.product)===null||s===void 0?void 0:s.prices)===null||e===void 0?void 0:e.data[0]}return this.selectedPrice}async updateLineItems(){var i,t,o,s,e;const r=this.getSelectedPrice();if(!(r===null||r===void 0?void 0:r.id))return;const d=this.lineItem();if(((i=d===null||d===void 0?void 0:d.price)===null||i===void 0?void 0:i.id)===(r===null||r===void 0?void 0:r.id)&&((t=d===null||d===void 0?void 0:d.variant)===null||t===void 0?void 0:t.id)===((o=this.selectedVariant)===null||o===void 0?void 0:o.id))return;if(!this.hasRequiredSelectedVariant())return;if(this.isSelectedVariantOutOfStock())return;try{n("FETCH");if(d===null||d===void 0?void 0:d.id){l.checkout=await a({id:d===null||d===void 0?void 0:d.id,data:{variant:(s=this.selectedVariant)===null||s===void 0?void 0:s.id,price:r===null||r===void 0?void 0:r.id,quantity:1}})}else{l.checkout=await c({checkout:l.checkout,data:{variant:(e=this.selectedVariant)===null||e===void 0?void 0:e.id,price:r===null||r===void 0?void 0:r.id,quantity:1}})}n("RESOLVE")}catch(i){console.error(i);v(i);n("REJECT")}}componentWillLoad(){this.removeListener=r("checkout",(()=>{var i,t,o;const s=this.lineItem();this.selectedVariant=s===null||s===void 0?void 0:s.variant;this.selectedPrice=s===null||s===void 0?void 0:s.price;this.option1=(i=s===null||s===void 0?void 0:s.variant)===null||i===void 0?void 0:i.option_1;this.option2=(t=s===null||s===void 0?void 0:s.variant)===null||t===void 0?void 0:t.option_2;this.option3=(o=s===null||s===void 0?void 0:s.variant)===null||o===void 0?void 0:o.option_3}))}disconnectedCallback(){this.removeListener()}lineItem(){var i;return e((i=this.product)===null||i===void 0?void 0:i.id)}hasVariants(){var i,t,o;return((o=(t=(i=this.product)===null||i===void 0?void 0:i.variants)===null||t===void 0?void 0:t.data)===null||o===void 0?void 0:o.length)>0}render(){var i,s,e,n,l;return t("sc-form-control",{class:"sc-checkout-product-price-variant-selector",label:this.selectorTitle},(this.product.variant_options.data||[]).map((({name:i,values:s},e)=>t("sc-form-control",{label:i},t("div",{class:"sc-checkout-product-price-variant-selector__pills-wrapper"},(s||[]).map((s=>{const n=[e+1,s,{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}},this.product];const l=u.apply(void 0,n)||p.apply(void 0,n);return t("sc-pill-option",{isUnavailable:l,isSelected:this[`option${e+1}`]===s,onClick:()=>this[`option${e+1}`]=s},t("span",{"aria-hidden":"true"},s),t("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Select %s: %s","surecart"),i,s),l&&t(o,null," ",wp.i18n.__("(option unavailable)","surecart"))))})))))),((e=(s=(i=this.product)===null||i===void 0?void 0:i.prices)===null||s===void 0?void 0:s.data)===null||e===void 0?void 0:e.length)>1&&t("sc-form-control",{label:!!((n=this.product.variant_options.data)===null||n===void 0?void 0:n.length)?this.label:null},t("sc-choices",null,(this.product.prices.data||[]).sort(((i,t)=>(i===null||i===void 0?void 0:i.position)-(t===null||t===void 0?void 0:t.position))).map((i=>{var o,s,e;return t("sc-price-choice-container",{required:true,price:i,label:(i===null||i===void 0?void 0:i.name)||((o=this.product)===null||o===void 0?void 0:o.name),checked:((e=(s=this.lineItem())===null||s===void 0?void 0:s.price)===null||e===void 0?void 0:e.id)===(i===null||i===void 0?void 0:i.id),onScChange:t=>{if(t.target.checked){this.selectedPrice=i}}})})))),t("input",{class:"sc-checkout-product-price-variant-selector__hidden-input",ref:i=>this.input=i,value:(l=this.selectedVariant)===null||l===void 0?void 0:l.id}))}get el(){return s(this)}static get watchers(){return{option1:["handleOptionChange"],option2:["handleOptionChange"],option3:["handleOptionChange"],selectedVariant:["updateLineItems"],selectedPrice:["updateLineItems"]}}};m.style=h;export{m as sc_checkout_product_price_variant_selector};
//# sourceMappingURL=p-aa75173a.entry.js.map