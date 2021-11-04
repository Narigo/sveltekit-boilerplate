import{a1 as x,a3 as Je,V as Y,_ as Mt,U as M,a4 as Bt,X as Dt,$ as Oe,a5 as ae,a6 as se,Z as Ht}from"./vendor.c6540880.js";var Ke=x.exports.createContext(),Qe=x.exports.createContext();function Wt(t){var e=t.children,o=x.exports.useState(null),r=o[0],n=o[1],i=x.exports.useRef(!1);x.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=x.exports.useCallback(function(a){i.current||n(a)},[]);return x.exports.createElement(Ke.Provider,{value:r},x.exports.createElement(Qe.Provider,{value:s},e))}var _e=function(e){return Array.isArray(e)?e[0]:e},et=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Me=function(e,o){if(typeof e=="function")return et(e,o);e!=null&&(e.current=o)},tt=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},rt=typeof window!="undefined"&&window.document&&window.document.createElement?x.exports.useLayoutEffect:x.exports.useEffect,A="top",B="bottom",D="right",j="left",Be="auto",le=[A,B,D,j],re="start",ce="end",$t="clippingParents",ot="viewport",ue="popper",Lt="reference",nt=le.reduce(function(t,e){return t.concat([e+"-"+re,e+"-"+ce])},[]),it=[].concat(le,[Be]).reduce(function(t,e){return t.concat([e,e+"-"+re,e+"-"+ce])},[]),Nt="beforeRead",Ut="read",It="afterRead",Ft="beforeMain",Vt="main",Xt="afterMain",Yt="beforeWrite",zt="write",qt="afterWrite",Gt=[Nt,Ut,It,Ft,Vt,Xt,Yt,zt,qt];function U(t){return t?(t.nodeName||"").toLowerCase():null}function L(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){var e=L(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=L(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function at(t){if(typeof ShadowRoot=="undefined")return!1;var e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Zt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!H(i)||!U(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function Jt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!H(n)||!U(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var Kt={name:"applyStyles",enabled:!0,phase:"write",fn:Zt,effect:Jt,requires:["computeStyles"]};function I(t){return t.split("-")[0]}function oe(t,e){var o=t.getBoundingClientRect(),r=1,n=1;return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function De(t){var e=oe(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function st(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&at(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function z(t){return L(t).getComputedStyle(t)}function Qt(t){return["table","td","th"].indexOf(U(t))>=0}function Z(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function xe(t){return U(t)==="html"?t:t.assignedSlot||t.parentNode||(at(t)?t.host:null)||Z(t)}function lt(t){return!H(t)||z(t).position==="fixed"?null:t.offsetParent}function _t(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&H(t)){var r=z(t);if(r.position==="fixed")return null}for(var n=xe(t);H(n)&&["html","body"].indexOf(U(n))<0;){var i=z(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function fe(t){for(var e=L(t),o=lt(t);o&&Qt(o)&&z(o).position==="static";)o=lt(o);return o&&(U(o)==="html"||U(o)==="body"&&z(o).position==="static")?e:o||_t(t)||e}function He(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var J=Math.max,de=Math.min,Te=Math.round;function Re(t,e,o){return J(t,de(e,o))}function ct(){return{top:0,right:0,bottom:0,left:0}}function ut(t){return Object.assign({},ct(),t)}function pt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var er=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,ut(typeof e!="number"?e:pt(e,le))};function tr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=I(o.placement),l=He(a),u=[j,D].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var d=er(n.padding,o),m=De(i),f=l==="y"?A:j,v=l==="y"?B:D,g=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],h=s[l]-o.rects.reference[l],T=fe(i),w=T?l==="y"?T.clientHeight||0:T.clientWidth||0:0,y=g/2-h/2,p=d[f],b=w-m[c]-d[v],O=w/2-m[c]/2+y,R=Re(p,O,b),P=l;o.modifiersData[r]=(e={},e[P]=R,e.centerOffset=R-O,e)}}function rr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!st(e.elements.popper,n)||(e.elements.arrow=n))}var or={name:"arrow",enabled:!0,phase:"main",fn:tr,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(t){return t.split("-")[1]}var nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ir(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:Te(Te(e*n)/n)||0,y:Te(Te(o*n)/n)||0}}function ft(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=c===!0?ir(s):typeof c=="function"?c(s):s,m=d.x,f=m===void 0?0:m,v=d.y,g=v===void 0?0:v,h=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),w=j,y=A,p=window;if(u){var b=fe(o),O="clientHeight",R="clientWidth";b===L(o)&&(b=Z(o),z(b).position!=="static"&&a==="absolute"&&(O="scrollHeight",R="scrollWidth")),b=b,(n===A||(n===j||n===D)&&i===ce)&&(y=B,g-=b[O]-r.height,g*=l?1:-1),(n===j||(n===A||n===B)&&i===ce)&&(w=D,f-=b[R]-r.width,f*=l?1:-1)}var P=Object.assign({position:a},u&&nr);if(l){var C;return Object.assign({},P,(C={},C[y]=T?"0":"",C[w]=h?"0":"",C.transform=(p.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C))}return Object.assign({},P,(e={},e[y]=T?g+"px":"",e[w]=h?f+"px":"",e.transform="",e))}function ar(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:I(e.placement),variation:ne(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ft(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ft(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var sr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}},Ce={passive:!0};function lr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=L(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,Ce)}),a&&l.addEventListener("resize",o.update,Ce),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,Ce)}),a&&l.removeEventListener("resize",o.update,Ce)}}var cr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}},ur={left:"right",right:"left",bottom:"top",top:"bottom"};function Pe(t){return t.replace(/left|right|bottom|top/g,function(e){return ur[e]})}var pr={start:"end",end:"start"};function dt(t){return t.replace(/start|end/g,function(e){return pr[e]})}function We(t){var e=L(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function $e(t){return oe(Z(t)).left+We(t).scrollLeft}function fr(t){var e=L(t),o=Z(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+$e(t),y:a}}function dr(t){var e,o=Z(t),r=We(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=J(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=J(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+$e(t),l=-r.scrollTop;return z(n||o).direction==="rtl"&&(a+=J(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Le(t){var e=z(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function vt(t){return["html","body","#document"].indexOf(U(t))>=0?t.ownerDocument.body:H(t)&&Le(t)?t:vt(xe(t))}function ve(t,e){var o;e===void 0&&(e=[]);var r=vt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=L(r),s=n?[i].concat(i.visualViewport||[],Le(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(ve(xe(s)))}function Ne(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t){var e=oe(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ht(t,e){return e===ot?Ne(fr(t)):H(e)?vr(e):Ne(dr(Z(t)))}function hr(t){var e=ve(xe(t)),o=["absolute","fixed"].indexOf(z(t).position)>=0,r=o&&H(t)?fe(t):t;return pe(r)?e.filter(function(n){return pe(n)&&st(n,r)&&U(n)!=="body"}):[]}function gr(t,e,o){var r=e==="clippingParents"?hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=ht(t,l);return a.top=J(u.top,a.top),a.right=de(u.right,a.right),a.bottom=de(u.bottom,a.bottom),a.left=J(u.left,a.left),a},ht(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function gt(t){var e=t.reference,o=t.element,r=t.placement,n=r?I(r):null,i=r?ne(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case A:l={x:s,y:e.y-o.height};break;case B:l={x:s,y:e.y+e.height};break;case D:l={x:e.x+e.width,y:a};break;case j:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?He(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case re:l[u]=l[u]-(e[c]/2-o[c]/2);break;case ce:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function he(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?$t:i,a=o.rootBoundary,l=a===void 0?ot:a,u=o.elementContext,c=u===void 0?ue:u,d=o.altBoundary,m=d===void 0?!1:d,f=o.padding,v=f===void 0?0:f,g=ut(typeof v!="number"?v:pt(v,le)),h=c===ue?Lt:ue,T=t.rects.popper,w=t.elements[m?h:c],y=gr(pe(w)?w:w.contextElement||Z(t.elements.popper),s,l),p=oe(t.elements.reference),b=gt({reference:p,element:T,strategy:"absolute",placement:n}),O=Ne(Object.assign({},T,b)),R=c===ue?O:p,P={top:y.top-R.top+g.top,bottom:R.bottom-y.bottom+g.bottom,left:y.left-R.left+g.left,right:R.right-y.right+g.right},C=t.modifiersData.offset;if(c===ue&&C){var k=C[n];Object.keys(P).forEach(function(S){var $=[D,B].indexOf(S)>=0?1:-1,E=[A,B].indexOf(S)>=0?"y":"x";P[S]+=k[E]*$})}return P}function mr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?it:l,c=ne(r),d=c?a?nt:nt.filter(function(v){return ne(v)===c}):le,m=d.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=d);var f=m.reduce(function(v,g){return v[g]=he(t,{placement:g,boundary:n,rootBoundary:i,padding:s})[I(g)],v},{});return Object.keys(f).sort(function(v,g){return f[v]-f[g]})}function yr(t){if(I(t)===Be)return[];var e=Pe(t);return[dt(t),e,dt(e)]}function br(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,f=o.flipVariations,v=f===void 0?!0:f,g=o.allowedAutoPlacements,h=e.options.placement,T=I(h),w=T===h,y=l||(w||!v?[Pe(h)]:yr(h)),p=[h].concat(y).reduce(function(Q,N){return Q.concat(I(N)===Be?mr(e,{placement:N,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:g}):N)},[]),b=e.rects.reference,O=e.rects.popper,R=new Map,P=!0,C=p[0],k=0;k<p.length;k++){var S=p[k],$=I(S),E=ne(S)===re,q=[A,B].indexOf($)>=0,G=q?"width":"height",V=he(e,{placement:S,boundary:c,rootBoundary:d,altBoundary:m,padding:u}),X=q?E?D:j:E?B:A;b[G]>O[G]&&(X=Pe(X));var ie=Pe(X),_=[];if(i&&_.push(V[$]<=0),a&&_.push(V[X]<=0,V[ie]<=0),_.every(function(Q){return Q})){C=S,P=!1;break}R.set(S,_)}if(P)for(var me=v?3:1,ke=function(N){var be=p.find(function(Ae){var te=R.get(Ae);if(te)return te.slice(0,N).every(function(je){return je})});if(be)return C=be,"break"},ee=me;ee>0;ee--){var ye=ke(ee);if(ye==="break")break}e.placement!==C&&(e.modifiersData[r]._skip=!0,e.placement=C,e.reset=!0)}}var wr={name:"flip",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"],data:{_skip:!1}};function mt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function yt(t){return[A,D,B,j].some(function(e){return t[e]>=0})}function Or(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=he(e,{elementContext:"reference"}),a=he(e,{altBoundary:!0}),l=mt(s,r),u=mt(a,n,i),c=yt(l),d=yt(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var xr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Or};function Tr(t,e,o){var r=I(t),n=[j,A].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[j,D].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Rr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=it.reduce(function(c,d){return c[d]=Tr(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rr};function Pr(t){var e=t.state,o=t.name;e.modifiersData[o]=gt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Sr(t){return t==="x"?"y":"x"}function kr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,f=m===void 0?!0:m,v=o.tetherOffset,g=v===void 0?0:v,h=he(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),T=I(e.placement),w=ne(e.placement),y=!w,p=He(T),b=Sr(p),O=e.modifiersData.popperOffsets,R=e.rects.reference,P=e.rects.popper,C=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,k={x:0,y:0};if(!!O){if(i||a){var S=p==="y"?A:j,$=p==="y"?B:D,E=p==="y"?"height":"width",q=O[p],G=O[p]+h[S],V=O[p]-h[$],X=f?-P[E]/2:0,ie=w===re?R[E]:P[E],_=w===re?-P[E]:-R[E],me=e.elements.arrow,ke=f&&me?De(me):{width:0,height:0},ee=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ct(),ye=ee[S],Q=ee[$],N=Re(0,R[E],ke[E]),be=y?R[E]/2-X-N-ye-C:ie-N-ye-C,Ae=y?-R[E]/2+X+N+Q+C:_+N+Q+C,te=e.elements.arrow&&fe(e.elements.arrow),je=te?p==="y"?te.clientTop||0:te.clientLeft||0:0,Ve=e.modifiersData.offset?e.modifiersData.offset[e.placement][p]:0,Xe=O[p]+be-Ve-je,Ye=O[p]+Ae-Ve;if(i){var ze=Re(f?de(G,Xe):G,q,f?J(V,Ye):V);O[p]=ze,k[p]=ze-q}if(a){var At=p==="x"?A:j,jt=p==="x"?B:D,we=O[b],qe=we+h[At],Ge=we-h[jt],Ze=Re(f?de(qe,Xe):qe,we,f?J(Ge,Ye):Ge);O[b]=Ze,k[b]=Ze-we}}e.modifiersData[r]=k}}var Ar={name:"preventOverflow",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"]};function jr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Mr(t){return t===L(t)||!H(t)?We(t):jr(t)}function Br(t){var e=t.getBoundingClientRect(),o=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return o!==1||r!==1}function Dr(t,e,o){o===void 0&&(o=!1);var r=H(e);H(e)&&Br(e);var n=Z(e),i=oe(t),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!o)&&((U(e)!=="body"||Le(n))&&(s=Mr(e)),H(e)?(a=oe(e),a.x+=e.clientLeft,a.y+=e.clientTop):n&&(a.x=$e(n))),{x:i.left+s.scrollLeft-a.x,y:i.top+s.scrollTop-a.y,width:i.width,height:i.height}}function Hr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Wr(t){var e=Hr(t);return Gt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function $r(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Lr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var bt={placement:"bottom",modifiers:[],strategy:"absolute"};function wt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Nr(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?bt:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},bt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,f={state:c,setOptions:function(T){var w=typeof T=="function"?T(c.options):T;g(),c.options=Object.assign({},i,c.options,w),c.scrollParents={reference:pe(a)?ve(a):a.contextElement?ve(a.contextElement):[],popper:ve(l)};var y=Wr(Lr([].concat(r,c.options.modifiers)));return c.orderedModifiers=y.filter(function(p){return p.enabled}),v(),f.update()},forceUpdate:function(){if(!m){var T=c.elements,w=T.reference,y=T.popper;if(!!wt(w,y)){c.rects={reference:Dr(w,fe(y),c.options.strategy==="fixed"),popper:De(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(k){return c.modifiersData[k.name]=Object.assign({},k.data)});for(var p=0;p<c.orderedModifiers.length;p++){if(c.reset===!0){c.reset=!1,p=-1;continue}var b=c.orderedModifiers[p],O=b.fn,R=b.options,P=R===void 0?{}:R,C=b.name;typeof O=="function"&&(c=O({state:c,options:P,name:C,instance:f})||c)}}}},update:$r(function(){return new Promise(function(h){f.forceUpdate(),h(c)})}),destroy:function(){g(),m=!0}};if(!wt(a,l))return f;f.setOptions(u).then(function(h){!m&&u.onFirstUpdate&&u.onFirstUpdate(h)});function v(){c.orderedModifiers.forEach(function(h){var T=h.name,w=h.options,y=w===void 0?{}:w,p=h.effect;if(typeof p=="function"){var b=p({state:c,name:T,instance:f,options:y}),O=function(){};d.push(b||O)}})}function g(){d.forEach(function(h){return h()}),d=[]}return f}}var Ur=[cr,Er,sr,Kt,Cr,wr,Ar,or,xr],Ir=Nr({defaultModifiers:Ur}),Fr=typeof Element!="undefined",Vr=typeof Map=="function",Xr=typeof Set=="function",Yr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ee(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!=0;)if(!Ee(t[r],e[r]))return!1;return!0}var i;if(Vr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Ee(r.value[1],e.get(r.value[0])))return!1;return!0}if(Xr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Yr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!=0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!=0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(Fr&&t instanceof Element)return!1;for(r=o;r--!=0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Ee(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var zr=function(e,o){try{return Ee(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},qr=[],Gr=function(e,o,r){r===void 0&&(r={});var n=x.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||qr},s=x.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=x.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var v=f.state,g=Object.keys(v.elements);l({styles:tt(g.map(function(h){return[h,v.styles[h]||{}]})),attributes:tt(g.map(function(h){return[h,v.attributes[h]]}))})},requires:["computeStyles"]}},[]),c=x.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return zr(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=x.exports.useRef();return rt(function(){d.current&&d.current.setOptions(c)},[c]),rt(function(){if(!(e==null||o==null)){var m=r.createPopper||Ir,f=m(e,o,c);return d.current=f,function(){f.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},Zr=function(){},Jr=function(){return Promise.resolve(null)},Kr=[];function Qr(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Kr:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,d=x.exports.useContext(Ke),m=x.exports.useState(null),f=m[0],v=m[1],g=x.exports.useState(null),h=g[0],T=g[1];x.exports.useEffect(function(){Me(u,f)},[u,f]);var w=x.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:h!=null,options:{element:h}}])}},[o,n,l,s,h]),y=Gr(a||d,f,w),p=y.state,b=y.styles,O=y.forceUpdate,R=y.update,P=x.exports.useMemo(function(){return{ref:v,style:b.popper,placement:p?p.placement:o,hasPopperEscaped:p&&p.modifiersData.hide?p.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:p&&p.modifiersData.hide?p.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:b.arrow,ref:T},forceUpdate:O||Zr,update:R||Jr}},[v,T,o,p,b,R,O]);return _e(c)(P)}function _r(t){var e=t.children,o=t.innerRef,r=x.exports.useContext(Qe),n=x.exports.useCallback(function(i){Me(o,i),et(r,i)},[o,r]);return x.exports.useEffect(function(){return function(){return Me(o,null)}}),x.exports.useEffect(function(){},[r]),_e(e)({ref:n})}var Ot=M.createContext({}),F=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},eo=function(){},xt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},to=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Tt=function(t){Je(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,to(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),Y({},a,{style:Y({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),Y({},a,r.isTriggeredBy("hover")&&{onMouseEnter:F(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:F(r.props.hideTooltip,a.onMouseLeave)},{style:Y({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return M.createElement(Ot.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(x.exports.Component);Tt.contextType=Ot;var ro={childList:!0,subtree:!0},Rt=function(t){Je(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=Y({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),Y({},a,r.isTriggeredBy("click")&&{onClick:F(r.clickToggle,a.onClick),onTouchEnd:F(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:F(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&Y({onMouseEnter:F(r.showTooltip,a.onMouseEnter),onMouseLeave:F(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:F(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:F(r.showTooltip,a.onFocus),onBlur:F(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,f=i.usePortal,v=i.portalContainer,g=i.followCursor,h=i.getTooltipRef,T=i.mutationObserverOptions,w=Mt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=M.createElement(Qr,Y({innerRef:h,placement:l,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(b){n.popperOffset=b.state.rects.popper}}].concat(d)},w),function(p){var b=p.ref,O=p.style,R=p.placement,P=p.arrowProps,C=p.isReferenceHidden,k=p.update;if(g&&n.popperOffset){var S=n.state,$=S.pageX,E=S.pageY,q=n.popperOffset,G=q.width,V=q.height,X=$+G>window.pageXOffset+document.body.offsetWidth?$-G:$,ie=E+V>window.pageYOffset+document.body.offsetHeight?E-V:E;O.transform="translate3d("+X+"px, "+ie+"px, 0"}return M.createElement(Tt,Y({arrowProps:P,closeOnReferenceHidden:m,isReferenceHidden:C,placement:R,update:k,style:O,tooltip:a,trigger:u,mutationObserverOptions:T},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:b}))});return M.createElement(Wt,null,M.createElement(_r,{innerRef:c},function(p){var b=p.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:b})}),this.getState()&&(f?Bt.exports.createPortal(y,v):y))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(x.exports.Component);Rt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:eo,placement:"right",portalContainer:xt()?document.body:null,trigger:"hover",usePortal:xt(),mutationObserverOptions:ro,modifiers:[]};var oo=Rt;function Se(){return Se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Se.apply(this,arguments)}function no(t,e){if(t==null)return{};var o=io(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function io(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var W=Dt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),K=8,ao=Oe.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(W("top",r,K*-1,"auto"),"px"),top:"".concat(W("bottom",r,K*-1,"auto"),"px"),right:"".concat(W("left",r,K*-1,"auto"),"px"),left:"".concat(W("right",r,K*-1,"auto"),"px"),borderBottomWidth:"".concat(W("top",r,"0",K),"px"),borderTopWidth:"".concat(W("bottom",r,"0",K),"px"),borderRightWidth:"".concat(W("left",r,"0",K),"px"),borderLeftWidth:"".concat(W("right",r,"0",K),"px"),borderTopColor:W("top",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderBottomColor:W("bottom",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderLeftColor:W("left",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderRightColor:W("right",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent")}}),so=Oe.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Ue=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=no(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return M.createElement(so,Se({hasChrome:r,placement:o,ref:s},u,{color:l}),r&&M.createElement(ao,Se({placement:o,ref:a},i,{color:l})),n)};Ue.displayName="Tooltip";Ue.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Ct,Pt;function lo(t,e){return fo(t)||po(t,e)||uo(t,e)||co()}function co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uo(t,e){if(!!t){if(typeof t=="string")return Et(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Et(t,e)}}function Et(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function po(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function fo(t){if(Array.isArray(t))return t}function ge(){return ge=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},ge.apply(this,arguments)}function St(t,e){if(t==null)return{};var o=vo(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function vo(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function kt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Ie=Ht.document,ho=Oe.div(Ct||(Ct=kt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),go=Oe.g(Pt||(Pt=kt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Fe=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,d=St(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?go:ho;return M.createElement(oo,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(v){var g=v.getTooltipProps,h=v.getArrowProps,T=v.tooltipRef,w=v.arrowRef,y=v.placement;return M.createElement(Ue,ge({hasChrome:s,placement:y,tooltipRef:T,arrowRef:w,arrowProps:h()},g()),typeof a=="function"?a({onHide:function(){return c(!1)}}):a)}},function(f){var v=f.getTriggerProps,g=f.triggerRef;return M.createElement(m,ge({ref:g},v(),d),l)})};Fe.displayName="WithTooltipPure";Fe.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var mo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=St(e,["startOpen","onVisibilityChange"]),i=x.exports.useState(o||!1),s=lo(i,2),a=s[0],l=s[1],u=x.exports.useCallback(function(c){r&&r(c)===!1||l(c)},[r]);return x.exports.useEffect(function(){var c=function(){return u(!1)};Ie.addEventListener("keydown",c,!1);var d=Array.from(Ie.getElementsByTagName("iframe")),m=[];return d.forEach(function(f){var v=function(){try{f.contentWindow.document&&(f.contentWindow.document.addEventListener("click",c),m.push(function(){try{f.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};v(),f.addEventListener("load",v),m.push(function(){f.removeEventListener("load",v)})}),function(){Ie.removeEventListener("keydown",c),m.forEach(function(f){f()})}}),M.createElement(Fe,ge({},n,{tooltipShown:a,onVisibilityChange:u}))};mo.displayName="WithToolTipState";export{mo as WithToolTipState,mo as WithTooltip,Fe as WithTooltipPure};
//# sourceMappingURL=WithTooltip.a40b0d76.js.map
