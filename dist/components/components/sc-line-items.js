import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{s as state}from"./mutations2.js";import{h as hasSubscription}from"./index5.js";import{i as intervalString}from"./price.js";import{g as getFeaturedProductMediaAttributes}from"./media.js";import{u as updateCheckoutLineItem,r as removeCheckoutLineItem}from"./mutations4.js";import{f as formBusy}from"./getters3.js";import{g as getMaxStockQuantity}from"./quantity.js";import{d as defineCustomElement$7}from"./sc-format-number2.js";import{d as defineCustomElement$6}from"./sc-icon2.js";import{d as defineCustomElement$5}from"./sc-line-item2.js";import{d as defineCustomElement$4}from"./sc-product-line-item2.js";import{d as defineCustomElement$3}from"./sc-quantity-select2.js";import{d as defineCustomElement$2}from"./sc-skeleton2.js";const scLineItemsCss=":host{display:block}:slotted(*~*){margin-top:20px}.line-items{display:grid;gap:var(--sc-form-row-spacing)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}",ScLineItems$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.editable=void 0,this.removable=void 0}isEditable(e){var t;return!((null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.ad_hoc)||(null==e?void 0:e.bump_amount)||(null==e?void 0:e.locked))&&this.editable}render(){var e,t,i,n,s;return formBusy()&&!(null===(i=null===(t=null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.line_items)||void 0===t?void 0:t.data)||void 0===i?void 0:i.length)?h("sc-line-item",null,h("sc-skeleton",{style:{width:"50px",height:"50px","--border-radius":"0"},slot:"image"}),h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"description",style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"}),h("sc-skeleton",{style:{width:"60px",display:"inline-block"},slot:"price-description"})):h("div",{class:"line-items",part:"base",tabindex:"0"},((null===(s=null===(n=null==state?void 0:state.checkout)||void 0===n?void 0:n.line_items)||void 0===s?void 0:s.data)||[]).map((e=>{var t,i,n,s,l,o,a,m,u;const{url:c,title:r,alt:d}=getFeaturedProductMediaAttributes(null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.product,null==e?void 0:e.variant),p=getMaxStockQuantity(null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.product,null==e?void 0:e.variant);return h("div",{class:"line-item"},h("sc-product-line-item",{key:e.id,imageUrl:c,imageTitle:r,imageAlt:d,name:null===(s=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===s?void 0:s.name,priceName:null===(l=null==e?void 0:e.price)||void 0===l?void 0:l.name,variantLabel:((null==e?void 0:e.variant_options)||[]).filter(Boolean).join(" / ")||null,purchasableStatusDisplay:null==e?void 0:e.purchasable_status_display,...p?{max:p}:{},editable:this.isEditable(e),removable:!(null==e?void 0:e.locked)&&this.removable,quantity:e.quantity,fees:null===(o=null==e?void 0:e.fees)||void 0===o?void 0:o.data,setupFeeTrialEnabled:null===(a=null==e?void 0:e.price)||void 0===a?void 0:a.setup_fee_trial_enabled,amount:null!==e.ad_hoc_amount?e.ad_hoc_amount:e.subtotal_amount,scratchAmount:null==e.ad_hoc_amount&&(null==e?void 0:e.scratch_amount),currency:null===(m=null==state?void 0:state.checkout)||void 0===m?void 0:m.currency,trialDurationDays:null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.trial_duration_days,interval:!!(null==e?void 0:e.price)&&intervalString(null==e?void 0:e.price,{showOnce:hasSubscription(null==state?void 0:state.checkout)}),onScUpdateQuantity:t=>updateCheckoutLineItem({id:e.id,data:{quantity:t.detail}}),onScRemove:()=>removeCheckoutLineItem(null==e?void 0:e.id),exportparts:"base:line-item, product-line-item, image:line-item__image, text:line-item__text, title:line-item__title, suffix:line-item__suffix, price:line-item__price, price__amount:line-item__price-amount, price__description:line-item__price-description, price__scratch:line-item__price-scratch, static-quantity:line-item__static-quantity, remove-icon__base:line-item__remove-icon, quantity:line-item__quantity, quantity__minus:line-item__quantity-minus, quantity__minus-icon:line-item__quantity-minus-icon, quantity__plus:line-item__quantity-plus, quantity__plus-icon:line-item__quantity-plus-icon, quantity__input:line-item__quantity-input, line-item__price-description:line-item__price-description"}))})))}static get style(){return scLineItemsCss}},[1,"sc-line-items",{editable:[4],removable:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-line-items","sc-format-number","sc-icon","sc-line-item","sc-product-line-item","sc-quantity-select","sc-skeleton"].forEach((e=>{switch(e){case"sc-line-items":customElements.get(e)||customElements.define(e,ScLineItems$1);break;case"sc-format-number":customElements.get(e)||defineCustomElement$7();break;case"sc-icon":customElements.get(e)||defineCustomElement$6();break;case"sc-line-item":customElements.get(e)||defineCustomElement$5();break;case"sc-product-line-item":customElements.get(e)||defineCustomElement$4();break;case"sc-quantity-select":customElements.get(e)||defineCustomElement$3();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$2()}}))}const ScLineItems=ScLineItems$1,defineCustomElement=defineCustomElement$1;export{ScLineItems,defineCustomElement};