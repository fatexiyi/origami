!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),r=(n.n(l),n(3)),o=(n.n(r),wp.i18n.__),a=wp.blocks,c=a.registerBlockType;a.query;c("origami/notebox",{title:o("Origami Notebox"),icon:"format-aside",category:"common",keywords:[o("notebox"),o("Notebox"),o("origami")],attributes:{content:{type:"string",source:"html",selector:"p"},color_select:{type:"string"}},edit:function(e){var t=wp.element.createElement(wp.components.TextControl,{label:"Origami Notebox\u5757",value:e.attributes.content,onChange:function(t){e.setAttributes({content:t})}}),n=wp.element.createElement(wp.components.SelectControl,{label:"\u9009\u62e9\u6837\u5f0f",value:e.attributes.color_select,onChange:function(t){e.setAttributes({color_select:t})},options:[{label:"\u8bf7\u8bbe\u7f6e\u989c\u8272",value:null},{label:"blue",value:"blue"},{label:"green",value:"green"},{label:"yellow",value:"yellow"},{label:"red",value:"red"}]});return wp.element.createElement("div",{className:e.className},t,n)},save:function(e){var t="message-box "+e.attributes.color_select;return wp.element.createElement("div",null,wp.element.createElement("div",{class:t},wp.element.createElement("p",null,e.attributes.content)))}}),c("origami/prism",{title:o("Origami\u4ee3\u7801"),icon:"editor-code",category:"common",keywords:[o("code"),o("prism"),o("origami")],attributes:{content:{type:"string"},lang:{type:"string"}},edit:function(e){var t=wp.element.createElement(wp.components.TextareaControl,{label:"Origami \u4ee3\u7801\u5757",value:e.attributes.content,onChange:function(t){e.setAttributes({content:t})}}),n=wp.element.createElement(wp.components.TextControl,{label:"\u4ee3\u7801\u8bed\u8a00",value:e.attributes.lang,onChange:function(t){e.setAttributes({lang:t})}});return wp.element.createElement("div",{className:e.className},t,n)},save:function(e){var t="line-numbers language-"+e.attributes.lang,n="language-"+e.attributes.lang;return wp.element.createElement("div",null,wp.element.createElement("pre",{class:t},wp.element.createElement("code",{class:n},e.attributes.content)))}})},function(e,t){},function(e,t){}]);