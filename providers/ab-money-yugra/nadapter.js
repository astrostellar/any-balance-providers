function NAdapter(m,w,h){function x(a){isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){if(n[a[b]])return!0;if(h.autoSimpleCounters&&0>a[b].indexOf("."))return t.call(AnyBalance,a[b])}return!1}function y(a){for(var b=0;b<arguments.length;++b)if(x(arguments[b]))return!0;return!1}function z(a,b){return g[b]&&a[0]&&a[0].__id?a.reduce(function(a,d){return a||d.__id!=g[b]?a:d},null):a[0]}function u(a,b){for(var c=b.split(/\./g),d,e=0;e<c.length;++e){d=a[c[e]];b=c.slice(0,e+1).join(".");var f=b;p[f]?d=p[f](d,
f):isArray(d)&&(d=z(d,f));if(!isset(d)||null===d)break;a=d}return d}function v(a,b){AnyBalance.isAvailable=y;try{return a.apply(null,b)}finally{AnyBalance.isAvailable=t}}var n={},t=AnyBalance.isAvailable;h||(h={});var p={},q;for(q in m)if(isAvailable(q)){var k=m[q];isArray(k)||(k=[k]);for(var r=0;r<k.length;++r){var l=k[r];do n[l]=!0,l=0<=l.indexOf(".")?l.replace(/\.[^.]*$/,""):null;while(null!==l)}}var g={};AnyBalance.shouldProcess=function(a,b){var c=h.shouldProcessMultipleCalls,c="object"==typeof c?
c[a]:c;if(!c&&g[a])return b.__id==g[a];if(c=w(a,b))g[a]=b.__id;return c};return{exec:v,convert:function(a){if(!a.success)return a;var b={success:!0};if(h.autoSimpleCounters)for(var c in a)n[c]||isArray(a[c])||(b[c]=a[c]);for(c in m)if(isAvailable(c)&&"__forceAvailable"!=c){var d=m[c];isArray(d)||(d=[d]);for(var e=0;e<d.length;++e){var f=u(a,d[e]);if(isset(f)){b[c]=f;break}}}return b},envelope:function(a){return function(){return v(a,arguments)}},traverse:u,wasProcessed:function(a){return!!g[a]},setTraverseCallbacks:function(a){for(var b in a)p[b]=
a[b]}}};
