import i,{useContext as n}from"react";import r from"styled-components";import{useMediaQuery as t}from"react-responsive";function d(i,n){return n||(n=i.slice(0)),i.raw=n,i}function e(){var i=d(["\n  width: ",";\n"]);return e=function(){return i},i}function o(){var i=d(["\n  height: ",";\n"]);return o=function(){return i},i}var u=r.div(o(),function(i){return i.y+"px"}),m=r.div(e(),function(i){return i.x+"px"}),x={mb:"0px",sm:"420px",md:"768px",lg:"1024px",xl:"1366px",xxl:"1440px"},v=i.createContext(x),l=function(i){var n=i.breakpoints;return h(v.Provider,{value:void 0===n?x:n},i.children)},y=function(i){var r=i.mb,d=void 0===r?0:r,e=i.sm,o=void 0===e?d:e,m=i.md,x=void 0===m?o:m,l=i.lg,y=void 0===l?x:l,c=i.xl,p=void 0===c?y:c,w=i.xxl,f=void 0===w?p:w,a=n(v),q=t({query:"(min-width: "+a.mb+")"}),s=t({query:"(min-width: "+a.sm+")"}),b=t({query:"(min-width: "+a.md+")"}),g=t({query:"(min-width: "+a.lg+")"}),k=t({query:"(min-width: "+a.xl+")"});return t({query:"(min-width: "+a.xxl+")"})?h(u,{y:f}):k?h(u,{y:p}):g?h(u,{y:y}):b?h(u,{y:x}):s?h(u,{y:o}):q?h(u,{y:d}):h("div",null)},c=function(i){var r=i.mb,d=void 0===r?0:r,e=i.sm,o=void 0===e?d:e,u=i.md,x=void 0===u?o:u,l=i.lg,y=void 0===l?x:l,c=i.xl,p=void 0===c?y:c,w=i.xxl,f=void 0===w?p:w,a=n(v),q=t({query:"(min-width: "+a.mb+")"}),s=t({query:"(min-width: "+a.sm+")"}),b=t({query:"(min-width: "+a.md+")"}),g=t({query:"(min-width: "+a.lg+")"}),k=t({query:"(min-width: "+a.xl+")"});return t({query:"(min-width: "+a.xxl+")"})?h(m,{x:f}):k?h(m,{x:p}):g?h(m,{x:y}):b?h(m,{x:x}):s?h(m,{x:o}):q?h(m,{x:d}):h("div",null)};export{l as SpacerProvider,v as SpacerStateContext,c as XSpacer,y as YSpacer};
//# sourceMappingURL=react-responsive-spacer.module.js.map
