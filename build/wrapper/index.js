!function(){"use strict";var e,t={989:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components,o=JSON.parse('{"u2":"create-block/ksk-wrapper"}');(0,e.registerBlockType)(o.u2,{edit:function(e){let{attributes:o,setAttributes:a}=e;const{screenWidth:i}=o;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(l.PanelBody,null,(0,t.createElement)(l.SelectControl,{label:(0,n.__)("Width","ksk-wrapper"),value:i,onChange:e=>{a({screenWidth:e})},options:[{label:"Default",value:""},{label:"Max width - 640px",value:"640px"},{label:"Max width - 720px",value:"720px"},{label:"Max width - 1040px",value:"1040px"},{label:"Full width",value:"100%"}]}))),(0,t.createElement)("section",(0,r.useBlockProps)(),(0,t.createElement)("div",{className:"inner",style:{maxWidth:i}},(0,t.createElement)(r.InnerBlocks,{placeholder:"-- Insert blocks --"}))))},save:function(e){let{attributes:n}=e;const{screenWidth:l}=n;return(0,t.createElement)("section",r.useBlockProps.save(),(0,t.createElement)("div",{className:"inner",style:{maxWidth:l}},(0,t.createElement)(r.InnerBlocks.Content,null)))}})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,l,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={536:0,743:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,a=n[0],i=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var u=c(r)}for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkksk_portfolio_blocks=self.webpackChunkksk_portfolio_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[743],(function(){return r(989)}));l=r.O(l)}();