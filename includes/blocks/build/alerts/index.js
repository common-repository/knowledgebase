(()=>{"use strict";var e,t={462:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,r=window.wp.blockEditor;(0,e.registerBlockType)("knowledgebase/alerts",{edit:function({attributes:e,setAttributes:o}){const a=(0,r.useBlockProps)({className:"wzkb-alert"}),{content:l,align:s}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.BlockControls,null,(0,t.createElement)(r.AlignmentControl,{value:s,onChange:e=>{o({align:void 0===e?"none":e})}})),(0,t.createElement)(r.RichText,{...a,tagName:"div",value:l,onChange:e=>{o({content:e})},placeholder:(0,n.__)("Enter the alert text...","knowledgebase"),style:{textAlign:s}}))},save:function({attributes:e}){const n=r.useBlockProps.save({className:"wzkb-alert"}),{content:o,align:a}=e,l=n.className;return(0,t.createElement)(r.RichText.Content,{...n,className:l,tagName:"div",value:o,style:{textAlign:a}})}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={539:0,267:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,l=n[0],s=n[1],i=n[2],c=0;if(l.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var u=i(r)}for(t&&t(n);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunk_webberzone_knowledgebase=self.webpackChunk_webberzone_knowledgebase||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[267],(()=>r(462)));o=r.O(o)})();