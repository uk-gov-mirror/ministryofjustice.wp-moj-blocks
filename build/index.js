!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=wp.i18n.__,o=wp.blocks.registerBlockType,s=wp.date.format,c=wp.blockEditor,i=(c.RichText,c.InnerBlocks,wp.data),l=i.dispatch,u=(i.subscribe,i.select,i.withSelect);o("mojblocks/example",{title:r("Example Block","mojblocks"),category:"mojblocks",icon:"admin-post",example:{attributes:{lastSaved:r("5 July 1948")}},attributes:{lastSaved:{type:"string",source:"html",selector:".last-saved-date"}},edit:u((function(e){return{savedDate:e("core/editor").getEditedPostAttribute("modified")}}))((function(e){var t=e.savedDate,n=(e.className,e.setAttributes),r=e.attributes.lastSaved;if(t){var o=new Date(t),c=s("d F Y",o);return r!==c&&(void 0===r?(n({lastSaved:c}),l("core/editor").savePost()):n({lastSaved:c})),Object(a.createElement)("div",{className:"nhsuk-review-date"},Object(a.createElement)("p",{className:"nhsuk-body-s"},"Page last reviewed: ",Object(a.createElement)("span",{className:"last-saved-date"},r)))}})),save:function(e){e.className;var t=e.attributes.lastSaved;return Object(a.createElement)("div",{className:"nhsuk-review-date"},Object(a.createElement)("p",{className:"nhsuk-body-s"},"Page last reviewed: ",Object(a.createElement)("span",{className:"last-saved-date"},t)))}});n(1),n(2),n(3),n(4),n(5),n(6),n(7)}]);