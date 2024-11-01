import{on}from"./store";import{on as onUIChange}from"@store/ui";import{state as checkoutState}from"@store/checkout";on("set",((t,e,n)=>Object.keys(e||{}).forEach((t=>handleCheckoutLineItemChange(e[t],null==n?void 0:n[t])))));export const handleCheckoutLineItemChange=(t,e)=>{var n,o;const i=(null===(n=null==t?void 0:t.line_items)||void 0===n?void 0:n.data)||[],u=(null===(o=null==e?void 0:e.line_items)||void 0===o?void 0:o.data)||[];if(i.forEach((t=>{const e=u.find((e=>e.id===t.id));if(!e||(null==e?void 0:e.quantity)<(null==t?void 0:t.quantity)){const n=new CustomEvent("scAddedToCart",{detail:{...t,quantity:t.quantity-((null==e?void 0:e.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),u.forEach((t=>{const e=i.find((e=>e.id===t.id));if(!e||(null==t?void 0:t.quantity)>(null==e?void 0:e.quantity)){const n=new CustomEvent("scRemovedFromCart",{detail:{...t,quantity:t.quantity-((null==e?void 0:e.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),!(null==checkoutState?void 0:checkoutState.isCheckoutPage)&&JSON.stringify(i)!==JSON.stringify(u)){const n=new CustomEvent("scCartUpdated",{detail:{currentCart:t,previousCart:e},bubbles:!0});document.dispatchEvent(n)}};onUIChange("set",((t,e,n)=>{if("cart"===t&&(null==e?void 0:e.open)!==(null==n?void 0:n.open)&&(null==e?void 0:e.open)){const t=new CustomEvent("scViewedCart",{detail:checkoutState.checkout,bubbles:!0});document.dispatchEvent(t)}}));