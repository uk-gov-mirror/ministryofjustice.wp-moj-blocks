!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,a){"use strict";a.r(t);var r=a(0),n=wp.i18n.__,s=wp.blocks.registerBlockType,o=wp.date.format,c=wp.blockEditor,l=(c.RichText,c.InnerBlocks,wp.data),i=l.dispatch,u=(l.subscribe,l.select,l.withSelect);s("mojblocks/example",{title:n("Example Block","mojblocks"),category:"mojblocks",icon:"admin-post",example:{attributes:{lastSaved:n("5 July 1948")}},attributes:{lastSaved:{type:"string",source:"html",selector:".last-saved-date"}},edit:u((function(e){return{savedDate:e("core/editor").getEditedPostAttribute("modified")}}))((function(e){var t=e.savedDate,a=(e.className,e.setAttributes),n=e.attributes.lastSaved;if(t){var s=new Date(t),c=o("d F Y",s);return n!==c&&(void 0===n?(a({lastSaved:c}),i("core/editor").savePost()):a({lastSaved:c})),Object(r.createElement)("div",{className:"nhsuk-review-date"},Object(r.createElement)("p",{className:"nhsuk-body-s"},"Page last reviewed: ",Object(r.createElement)("span",{className:"last-saved-date"},n)))}})),save:function(e){e.className;var t=e.attributes.lastSaved;return Object(r.createElement)("div",{className:"nhsuk-review-date"},Object(r.createElement)("p",{className:"nhsuk-body-s"},"Page last reviewed: ",Object(r.createElement)("span",{className:"last-saved-date"},t)))}})}]);