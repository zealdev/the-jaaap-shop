"use strict";!function(t){const e=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(e),r().then((()=>console.log("ST Buy X Get Y loaded"))))}));let n=null;const i={add_to_cart:null,custom:[]},o='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M9.00034 12C8.85201 12 8.707 12.0439 8.58366 12.1264C8.46033 12.2088 8.3642 12.3259 8.30743 12.4629C8.25067 12.6 8.23581 12.7508 8.26475 12.8963C8.29369 13.0418 8.36512 13.1754 8.47001 13.2803C8.5749 13.3852 8.70854 13.4566 8.85402 13.4855C8.99951 13.5145 9.15031 13.4996 9.28735 13.4429C9.4244 13.3861 9.54153 13.29 9.62394 13.1666C9.70636 13.0433 9.75034 12.8983 9.75034 12.75C9.75034 12.551 9.67132 12.3603 9.53067 12.2196C9.39002 12.079 9.19925 12 9.00034 12ZM17.0028 13.1025L10.9653 2.60246C10.7702 2.2526 10.4852 1.96118 10.1397 1.75831C9.79429 1.55544 9.40095 1.44849 9.00034 1.44849C8.59973 1.44849 8.20639 1.55544 7.86095 1.75831C7.5155 1.96118 7.23049 2.2526 7.03534 2.60246L1.03534 13.1025C0.833439 13.443 0.724949 13.8307 0.720825 14.2266C0.716702 14.6224 0.81709 15.0124 1.01186 15.357C1.20662 15.7016 1.48887 15.9888 1.8301 16.1895C2.17134 16.3902 2.55948 16.4973 2.95534 16.5H15.0453C15.4444 16.5039 15.8373 16.4016 16.1838 16.2036C16.5303 16.0057 16.8179 15.7191 17.0171 15.3733C17.2163 15.0276 17.32 14.635 17.3175 14.236C17.315 13.8369 17.2064 13.4457 17.0028 13.1025ZM15.7053 14.6025C15.6396 14.7194 15.5437 14.8166 15.4276 14.8839C15.3115 14.9512 15.1795 14.9861 15.0453 14.985H2.95534C2.82117 14.9861 2.68917 14.9512 2.57308 14.8839C2.45699 14.8166 2.36108 14.7194 2.29534 14.6025C2.22952 14.4884 2.19486 14.3591 2.19486 14.2275C2.19486 14.0958 2.22952 13.9665 2.29534 13.8525L8.29534 3.35246C8.35828 3.22961 8.4539 3.12651 8.57168 3.05452C8.68945 2.98252 8.82481 2.94443 8.96284 2.94443C9.10088 2.94443 9.23623 2.98252 9.35401 3.05452C9.47178 3.12651 9.5674 3.22961 9.63034 3.35246L15.6678 13.8525C15.7423 13.9648 15.785 14.0952 15.7916 14.2298C15.7982 14.3644 15.7684 14.4983 15.7053 14.6175V14.6025ZM9.00034 5.99996C8.80143 5.99996 8.61066 6.07898 8.47001 6.21963C8.32936 6.36028 8.25034 6.55105 8.25034 6.74996V9.74996C8.25034 9.94887 8.32936 10.1396 8.47001 10.2803C8.61066 10.4209 8.80143 10.5 9.00034 10.5C9.19925 10.5 9.39002 10.4209 9.53067 10.2803C9.67132 10.1396 9.75034 9.94887 9.75034 9.74996V6.74996C9.75034 6.55105 9.67132 6.36028 9.53067 6.21963C9.39002 6.07898 9.19925 5.99996 9.00034 5.99996Z" fill="#DB302A"/>\n                </svg>\n                ',s={};class a{constructor(e){this.buyXgetY=e;const{id:n,htmlRender:i}=e;this.endpoints={CREATE_DISCOUNT:window.ST_GLOBALS.apiUrl+"buyx-gety-create-discount",CREATESTATISTIC:window.ST_GLOBALS.apiUrl+"statistic",CREATETOTALVIES:window.ST_GLOBALS.apiUrl+"total-views"},this.mainProducts={},this.discountProducts={},this.buyXgetYEl=t.createElement("div"),this.buyXgetYEl.dataset.id=n,this.buyXgetYEl.innerHTML=i,this.renderMainProduct().then((()=>{this.renderDiscountProduct().then((()=>{this.renderText()}))})),this.createTotalViews(),this.variantsData=[],this.variantsMain=[],this.variantsDiscount=[],this.totalMain=0,this.totalDiscount=0}async renderMainProduct(){const e=this,{editorData:n}=e.buyXgetY,{mainProducts:{products:{products:i={},variants:o={}}}}=n;let s=e.buyXgetYEl.querySelector(".selected-main-product");if(Object.keys(i).length)try{let n="";const a=Object.keys(i).length;let r=0;for(const t in i)n+=`handle:"${i[t].handle}"${r<a-1?" OR ":""}`,r++;const c=`${window.ST_GLOBALS.shopUrl}/search.js?q=${n}&view=shinetrust.product-handles`,l=await fetch(c,{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"},credentials:"include"});(await l.json()).map((t=>{e.mainProducts[t.id]=t}));for(const n in i){const a=n.replace("gid://shopify/Product/","");if(e.mainProducts.hasOwnProperty(a)){const r=e.mainProducts[a],{featured_media:c,variants:l}=r,{title:d,totalVariants:u}=i[n],p=c||i[n].featuredImage?.url;r.quantity=i[n].quantity;let h=window.ST_GLOBALS.fixPrice(r.price);h=window.ST_GLOBALS.formatMoney(h);const g=[];for(const t in l){const{available:e,title:i,price:s,id:a}=l[t],r=`gid://shopify/ProductVariant/${a}`;e&&(o.hasOwnProperty(n)&&Object.keys(o[n]).length?o[n].hasOwnProperty(r)&&g.push(`<option value="${a}" data-price="${s}">${i}</option>`):g.push(`<option value="${a}" data-price="${s}">${i}</option>`))}let y="",v="";if(g.length){v+='<div class="product-item-variants">';for(let t=1;t<=parseInt(r.quantity);t++)v+=`<div class="product-item-variant">\n                                                            <div class="stt">#${t}</div>\n                                                            <select data-product="${n}" name="bundle_variants[]" class="product-variant-item">${g.join("")}</select>\n                                                        </div>`;v+="</div>",y=`\n                                <div class="selected-product ${1==u?"one-item":""}">\n                                    <div class="selected-product-item">\n                                        <div class="thumbnail">\n                                            <div class="thumbnail-inner">\n                                                <img src="${p}" alt="Thumbnail">\n                                            </div>\n                                        </div>\n                                        <div class="selected-product-item-info">\n                                            <div class="product-item-title">${d} (x${r.quantity})</div>\n                                            <div class="price">${h}</div>\n                                            ${v}\n                                        </div>\n                                    </div>\n                                </div>\n                                `}else y=`\n                                <div class="selected-product product-bundle-item-sold-out">\n                                    <div class="selected-product-item">\n                                        <div class="thumbnail">\n                                            <div class="thumbnail-inner">\n                                                <img src="${p}" alt="Thumbnail">\n                                            </div>\n                                        </div>\n                                        <div class="selected-product-item-info">\n                                            <div class="product-item-title">${d}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                `;const T=t.createElement("div");T.innerHTML=y,s.appendChild(T.children[0])}}}catch(t){console.log(t)}}async renderDiscountProduct(){const e=this,{editorData:n}=e.buyXgetY,{labelText:i,discountType:o,discount:s,bundleProducts:{products:{products:a={},variants:r={}}}}=n;let c=e.buyXgetYEl.querySelector(".selected-discount-product");if(Object.keys(a).length)try{let n="";const l=Object.keys(a).length;let d=0;for(const t in a)n+=`handle:"${a[t].handle}"${d<l-1?" OR ":""}`,d++;const u=`${window.ST_GLOBALS.shopUrl}/search.js?q=${n}&view=shinetrust.product-handles`,p=await fetch(u,{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"},credentials:"include"});(await p.json()).map((t=>{e.discountProducts[t.id]=t}));for(const n in a){const l=n.replace("gid://shopify/Product/","");if(e.discountProducts.hasOwnProperty(l)){const d=e.discountProducts[l],{featured_media:u,variants:p}=d,{title:h,totalVariants:g}=a[n],y=u||a[n].featuredImage?.url;d.quantity=a[n].quantity;let v=window.ST_GLOBALS.fixPrice(d.price);v=window.ST_GLOBALS.formatMoney(v);let T=0;"percent"===o&&(T=window.ST_GLOBALS.fixPrice(d.price*(100-s)/100)),T=window.ST_GLOBALS.formatMoney(T);const m=[];for(const t in p){const{available:e,title:i,price:o,id:s}=p[t],a=`gid://shopify/ProductVariant/${s}`;e&&(r.hasOwnProperty(n)&&Object.keys(r[n]).length?r[n].hasOwnProperty(a)&&m.push(`<option value="${s}" data-price="${o}">${i}</option>`):m.push(`<option value="${s}" data-price="${o}">${i}</option>`))}let w="",S="",b="";if(m.length){b="percent"===o?`<span  class="label-sale" >${s}% OFF </span>`:`<span  class="label-sale" >${window.ST_GLOBALS.translate(i).trim()} </span>`,S+='<div class="product-item-variants">';for(let t=1;t<=parseInt(d.quantity);t++)S+=`<div class="product-item-variant">\n                                                            <div class="stt">#${t}</div>\n                                                            <select data-product="${n}" name="bundle_variants[]" class="product-variant-item">${m.join("")}</select>\n                                                        </div>`;S+="</div>",w=`\n                                <div class="selected-product ${1==g?"one-item":""}">\n                                    <div class="selected-product-item">\n                                        <div class="thumbnail">\n                                            <div class="thumbnail-inner">\n                                                <img src="${y}" alt="Thumbnail">\n                                                ${b}\n                                            </div>\n                                        </div>\n                                        <div class="selected-product-item-info">\n                                            <div class="product-item-title">${h} (x${d.quantity})</div>\n                                            <div class="price">\n                                            <span class="regular-price">${v}</span>\n                                            <span class="sale-price">${T}</span>\n                                            </div>\n                                            ${S}\n                                        </div>\n                                    </div>\n                                </div>\n                                `}else w=`\n                                <div class="selected-product product-bundle-item-sold-out">\n                                    <div class="selected-product-item">\n                                        <div class="thumbnail">\n                                            <div class="thumbnail-inner">\n                                                <img src="${y}" alt="Thumbnail">\n                                                ${b}\n                                            </div>\n                                        </div>\n                                        <div class="selected-product-item-info">\n                                            <div class="product-item-title">${h}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                `;const f=t.createElement("div");f.innerHTML=w,c.appendChild(f.children[0])}}}catch(t){console.log(t)}const l=e.buyXgetYEl.querySelector(".st-bought-action-button");l&&l.classList.remove("btn-disabled"),e.selectionEvents(),e.renderTotalPrices(),e.addToCartEvent()}renderText(){const t=this,{editorData:e}=t.buyXgetY,n={title:".bundle-product-heading",subTitle:".bundle-product-sub-heading",totalPriceText:".bundle-total .total-text",buttonText:".st-bought-action-button"};for(const i in n){const o=t.buyXgetYEl.querySelector(n[i]);o&&(o.innerHTML=window.ST_GLOBALS.translate(e[i]).trim())}}selectionEvents(){const t=this;t.getVariants();const e=t.buyXgetYEl.querySelector(".selected-product-wrapper").querySelectorAll("select.product-variant-item");for(let n=0;n<e.length;n++){const i=e[n];i.value;i.addEventListener("change",(function(e){const n=e.target.value;i.querySelector(`option[value="${n}"]`);t.getVariants(),t.renderTotalPrices()}))}}async renderTotalPrices(){const t=this,{editorData:e}=t.buyXgetY;let{discount:n,discountType:i}=e;t.totalDiscount=0,t.totalMain=0;let o=0,s=0;const a=t.buyXgetYEl.querySelector(".selected-product-wrapper").querySelectorAll("select.product-variant-item"),r=t.buyXgetYEl.querySelector(".bundle-total .price"),c=t.buyXgetYEl.querySelector(".bundle-total .sale-price");for(let e=0;e<a.length;e++){const n=a[e];let i=n.closest(".product-item-variant"),s=n.closest(".selected-discount-product"),r=n.closest(".selected-main-product");if(i){const e=n.value,i=n.querySelector(`option[value="${e}"]`);if(e&&i){const e=i.getAttribute("data-price");o+=window.ST_GLOBALS.fixPrice(e),s&&(t.totalDiscount+=window.ST_GLOBALS.fixPrice(e)),r&&(t.totalMain+=window.ST_GLOBALS.fixPrice(e))}}}o>0&&(n=parseFloat(n),s="percent"===i?o-t.totalDiscount*n/100:o-t.totalDiscount),r.innerHTML=window.ST_GLOBALS.formatMoney(o),s>0&&s<o?c.innerHTML=window.ST_GLOBALS.formatMoney(s):(c.innerHTML=window.ST_GLOBALS.formatMoney(o),r.innerHTML="")}getVariants(){const t=this;t.variantsData=[],t.variantsMain=[],t.variantsDiscount=[];const e=t.buyXgetYEl.querySelector(".selected-product-wrapper").querySelectorAll("select.product-variant-item");for(let n=0;n<e.length;n++){const i=e[n];let o=i.closest(".selected-main-product"),s=i.closest(".selected-discount-product");if(o){const e=i.value;if(t.variantsMain.length){let n=!1;t.variantsMain.map((t=>{t.id===e.toString().trim()&&(n=!0,t.quantity++)})),!1===n&&t.variantsMain.push({quantity:1,id:e.toString().trim()})}else t.variantsMain.push({quantity:1,id:e.toString().trim()})}if(s){const e=i.value;if(t.variantsDiscount.length){let n=!1;t.variantsDiscount.map((t=>{t.id===e.toString().trim()&&(n=!0,t.quantity++)})),!1===n&&t.variantsDiscount.push({quantity:1,id:e.toString().trim()})}else t.variantsDiscount.push({quantity:1,id:e.toString().trim()})}}t.variantsData=[...t.variantsMain,...t.variantsDiscount]}async addToCartEvent(){const t=this,{editorData:e}=t.buyXgetY,n=t.buyXgetYEl.querySelector(".st-bought-action-button"),i=t.buyXgetYEl.querySelector(".st-buyx-gety-error-msg"),a=t.buyXgetYEl.querySelector(".st-buyx-gety-success-msg"),r=t.buyXgetYEl.getAttribute("data-id");n&&n.addEventListener("click",(async function(c){try{if(n.classList.add("btn-running"),i.innerHTML="",a.innerHTML="",!r||!s.hasOwnProperty(r))return i.innerHTML=o+"This bundle is invalid. Please reload the page",n.classList.remove("btn-running"),!1;if(t.buyXgetYEl.querySelector(".product-bundle-item-sold-out"))return i.innerHTML=o+"Some products are out of stock",n.classList.remove("btn-running"),!1;try{t.createStatistic(t.variantsData);let s=null;const a=await t.createDiscount(t.variantsMain,t.variantsDiscount,t.totalMain,t.totalDiscount,e);a&&a?.status?s=await t.addToCart(t.variantsData):(i.innerHTML=o+"Can not create this bundle. Try again!",n.classList.remove("btn-running"),setTimeout((()=>{window.location.reload()}),2e3)),s?"422"===s?.status||"Cart Error"===s?.message?i.innerHTML=o+s?.description:t.redirectAfterAddedCart():i.innerHTML=o+"Error when adding cart. Try again!"}catch(t){console.log(t),i.innerHTML=o+"Error when adding cart. Try again!"}finally{n.classList.remove("btn-running"),setTimeout((()=>{i.innerHTML="",a.innerHTML=""}),3e3)}}catch(t){n.classList.remove("btn-running"),i.innerHTML=o+"Some products are out of stock",console.log(t)}}))}redirectAfterAddedCart(){const t=this.buyXgetYEl.querySelector(".st-buyx-gety-success-msg"),{editorData:e}=this.buyXgetY,{afterClickButton:n,addCartText:i}=e;"checkout"===n?window.location.href=`${window.ST_GLOBALS.shopUrl}/checkout`:"cart"===n?window.location.href=`${window.ST_GLOBALS.shopUrl}/cart`:t.innerHTML='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M11.04 6.5925L7.8225 9.8175L6.585 8.58C6.51777 8.50149 6.43503 8.43772 6.34198 8.39271C6.24893 8.34769 6.14758 8.32239 6.04429 8.3184C5.941 8.31441 5.838 8.33182 5.74176 8.36952C5.64552 8.40723 5.55811 8.46442 5.48502 8.53751C5.41192 8.6106 5.35473 8.69801 5.31703 8.79426C5.27932 8.8905 5.26191 8.9935 5.2659 9.09679C5.26989 9.20008 5.29519 9.30143 5.34021 9.39448C5.38523 9.48753 5.44899 9.57026 5.5275 9.6375L7.29 11.4075C7.36008 11.477 7.4432 11.532 7.53457 11.5693C7.62595 11.6067 7.7238 11.6256 7.8225 11.625C8.01926 11.6242 8.20781 11.5461 8.3475 11.4075L12.0975 7.6575C12.1678 7.58778 12.2236 7.50483 12.2617 7.41343C12.2997 7.32204 12.3194 7.22401 12.3194 7.125C12.3194 7.02599 12.2997 6.92796 12.2617 6.83657C12.2236 6.74517 12.1678 6.66222 12.0975 6.5925C11.957 6.45281 11.7669 6.37441 11.5688 6.37441C11.3706 6.37441 11.1805 6.45281 11.04 6.5925ZM9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM9 15C7.81332 15 6.65328 14.6481 5.66658 13.9888C4.67989 13.3295 3.91085 12.3925 3.45673 11.2961C3.0026 10.1997 2.88378 8.99334 3.11529 7.82946C3.3468 6.66557 3.91825 5.59647 4.75736 4.75736C5.59648 3.91824 6.66558 3.3468 7.82946 3.11529C8.99335 2.88378 10.1997 3.0026 11.2961 3.45672C12.3925 3.91085 13.3295 4.67988 13.9888 5.66658C14.6481 6.65327 15 7.81331 15 9C15 10.5913 14.3679 12.1174 13.2426 13.2426C12.1174 14.3679 10.5913 15 9 15Z" fill="#2BA52E"/>\n                </svg>\n                '+window.ST_GLOBALS.translate(i)}async addToCart(t){const e=await fetch("/cart/add.js",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({items:t})});return await e.json()}async createDiscount(t,e,n,i,o){return fetch(this.endpoints.CREATE_DISCOUNT,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({variantsMain:t,variantsDiscount:e,totalMain:n,totalDiscount:i,editorData:o,shop:window.ST_GLOBALS.shopDomain})}).then((t=>t.json())).then((t=>t))}createStatistic(t){const e=this.buyXgetYEl.getAttribute("data-id");fetch(this.endpoints.CREATESTATISTIC,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:window.ST_GLOBALS.shopDomain,serviceItemID:e,serviceType:"buyx-gety",variants:t})}).then((t=>t.json())).then((async({data:t})=>{console.log("success")})).catch((t=>console.log(t)))}createTotalViews(){const{id:t}=this.buyXgetY;fetch(this.endpoints.CREATETOTALVIES,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:window.ST_GLOBALS.shopDomain,serviceItemID:t,serviceType:"buyx-gety"})}).then((t=>t.json())).then().catch((t=>console.log(t)))}render(){return{buyXgetY:this.buyXgetY,buyXgetYEl:this.buyXgetYEl}}}const r=async function(){if(!window.ST_PLAN||"Advanced"!==window.ST_PLAN?.name||"ACTIVE"!==window.ST_PLAN?.status)return;if(n=window.ST_GLOBALS.getBaseCDN(),"product"!==window.ST_GLOBALS.pageType)return;const e=window.ST_BUYX_GETYS||[];if(0===e.length)return;const o={};let r="";const c=window.ST_GLOBALS.product,{collections:l=[]}=c;if(e.map((t=>{const{id:e,status:n,editorData:i}=t;if(n){const{mainProducts:e,bundleProducts:n,display:c,startDateStatus:d,endDateStatus:u,startDateTime:p,endDateTime:h}=i,g=`gid://shopify/Product/${window.ST_GLOBALS.productID}`;let y=!1;if("main_products"===c||"both"===c)if(e?.productFilter?.filters.collection&&e?.productFilter?.selectAll){const t=parseInt(e?.productFilter?.filters.collection.replace("gid://shopify/Collection/",""));l.includes(t)&&(y=!0)}else!e?.productFilter?.selectAll&&e?.products?.products&&e?.products?.products.hasOwnProperty(g)&&(y=!0);if("bundle_products"===c||"both"===c)if(n?.productFilter?.filters.collection&&n?.productFilter?.selectAll){const t=parseInt(n?.productFilter?.filters.collection.replace("gid://shopify/Collection/",""));l.includes(t)&&(y=!0)}else!n?.productFilter?.selectAll&&n?.products?.products&&n?.products?.products.hasOwnProperty(g)&&(y=!0);let v=!1;if(d||u){const t=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone),e=window.ST_GLOBALS.dateWithTimeZone(p,window.ST_META_DATA.timeZone),n=window.ST_GLOBALS.dateWithTimeZone(h,window.ST_META_DATA.timeZone);(!d&&u&&n.getTime()>=t.getTime()||d&&!u&&e.getTime()<=t.getTime()||d&&u&&e.getTime()<=t.getTime()&&n.getTime()>=t.getTime())&&(v=!0)}else v=!0;if(y&&v){const{id:e,editorData:n,cssRender:i}=t,{fontFamily:c,fontWeight:l,subTitleFontWeight:d,labelFontWeight:u,nameFontWeight:p,priceFontWeight:h,variantFontWeight:g,totalFontWeight:y,buttonFontWeight:v}=n;r+=i,c?.fontFamily&&(o.hasOwnProperty(c.fontFamily)?o[c.fontFamily]={...o[c.fontFamily],fontWeight:l,subTitleFontWeight:d,labelFontWeight:u,nameFontWeight:p,priceFontWeight:h,variantFontWeight:g,totalFontWeight:y,buttonFontWeight:v}:o[c.fontFamily]={fontWeight:l,subTitleFontWeight:d,labelFontWeight:u,nameFontWeight:p,priceFontWeight:h,variantFontWeight:g,totalFontWeight:y,buttonFontWeight:v}),s[e]=new a(t).render()}}})),Object.keys(o).length){const t=Object.keys(o).map((t=>({font:t,weight:[...new Set([parseInt(o[t].fontWeight),parseInt(o[t].subTitleFontWeight),parseInt(o[t].labelFontWeight),parseInt(o[t].nameFontWeight),parseInt(o[t].priceFontWeight),parseInt(o[t].variantFontWeight),parseInt(o[t].totalFontWeight),parseInt(o[t].buttonFontWeight)])].filter((t=>!isNaN(t)&&t>0)).sort((function(t,e){return t-e})).join(";")})));t.length&&t.map((t=>{window.ST_LOADED_FONTS.includes(t.fontFamily)||window.ST_GLOBALS.loadFont(t)}))}r&&window.ST_GLOBALS.addStyle(r),i.add_to_cart=t.querySelector(window.ST_GLOBALS.selectorForm);for(const e in s){const{buyXgetY:n,buyXgetYEl:o}=s[e],{editorData:a}=n,{position:r,cssSelector:c={}}=a;if("block"===r){const e=t.querySelector(".st-buyx-gety-block-wrapper");if(e){const t=e.querySelector(".st-editor-preview");t&&t.remove(),e.appendChild(o)}}else if("custom_css"===r){if(c?.cssSelector){const e=t.querySelectorAll(c.cssSelector);if(null!==e)for(let t=0;t<e.length;t++){const n=e[t].parentNode;if("above"===c?.cssPosition)n.insertBefore(o,e[t]);else if("below"===c?.cssPosition){const i=e[t].nextSibling;null===i?n.appendChild(o):n.insertBefore(o,i)}}}}else{let t=null,e=null;"below_add_to_cart"===r&&i.add_to_cart&&(t=i.add_to_cart.nextSibling,e=i.add_to_cart.parentNode),e&&(t?e.appendChild(o):e.insertBefore(o,t))}}}}(window.document);