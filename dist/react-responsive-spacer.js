var e=require("react"),t=require("styled-components"),r=require("react-responsive");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(e),n=u(t);function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}function a(){var e=d(["\n  width: ",";\n"]);return a=function(){return e},e}function l(){var e=d(["\n  height: ",";\n"]);return l=function(){return e},e}var m=n.default.div(l(),function(e){return e.y+"px"}),o=n.default.div(a(),function(e){return e.x+"px"}),x={mb:"0px",sm:"420px",md:"768px",lg:"1024px",xl:"1366px",xxl:"1440px"},c=i.default.createContext(x);exports.SpacerProvider=function(e){var t=e.breakpoints;return i.default.createElement(c.Provider,{value:void 0===t?x:t},e.children)},exports.SpacerStateContext=c,exports.XSpacer=function(t){var u=t.mb,n=void 0===u?0:u,d=t.sm,a=void 0===d?n:d,l=t.md,m=void 0===l?a:l,x=t.lg,y=void 0===x?m:x,f=t.xl,s=void 0===f?y:f,v=t.xxl,p=void 0===v?s:v,h=e.useContext(c),q=r.useMediaQuery({query:"(min-width: "+h.mb+")"}),E=r.useMediaQuery({query:"(min-width: "+h.sm+")"}),w=r.useMediaQuery({query:"(min-width: "+h.md+")"}),M=r.useMediaQuery({query:"(min-width: "+h.lg+")"}),Q=r.useMediaQuery({query:"(min-width: "+h.xl+")"});return r.useMediaQuery({query:"(min-width: "+h.xxl+")"})?i.default.createElement(o,{x:p}):Q?i.default.createElement(o,{x:s}):M?i.default.createElement(o,{x:y}):w?i.default.createElement(o,{x:m}):E?i.default.createElement(o,{x:a}):q?i.default.createElement(o,{x:n}):i.default.createElement("div",null)},exports.YSpacer=function(t){var u=t.mb,n=void 0===u?0:u,d=t.sm,a=void 0===d?n:d,l=t.md,o=void 0===l?a:l,x=t.lg,y=void 0===x?o:x,f=t.xl,s=void 0===f?y:f,v=t.xxl,p=void 0===v?s:v,h=e.useContext(c),q=r.useMediaQuery({query:"(min-width: "+h.mb+")"}),E=r.useMediaQuery({query:"(min-width: "+h.sm+")"}),w=r.useMediaQuery({query:"(min-width: "+h.md+")"}),M=r.useMediaQuery({query:"(min-width: "+h.lg+")"}),Q=r.useMediaQuery({query:"(min-width: "+h.xl+")"});return r.useMediaQuery({query:"(min-width: "+h.xxl+")"})?i.default.createElement(m,{y:p}):Q?i.default.createElement(m,{y:s}):M?i.default.createElement(m,{y:y}):w?i.default.createElement(m,{y:o}):E?i.default.createElement(m,{y:a}):q?i.default.createElement(m,{y:n}):i.default.createElement("div",null)};
//# sourceMappingURL=react-responsive-spacer.js.map
