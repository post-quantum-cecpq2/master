(()=>{const e=[],o=window.document,t=window.MutationObserver||window.WebKitMutationObserver;let n=null;const r=()=>{e.forEach((e=>{o.querySelectorAll(e.selector).forEach((o=>{o.ready||(o.ready=!0,e.fn.call(o,o))}))}))};window.customjsReady=(c,l)=>{e.push({selector:c,fn:l}),n||(n=new t(r),n.observe(o.documentElement,{childList:!0,subtree:!0})),r()}})();