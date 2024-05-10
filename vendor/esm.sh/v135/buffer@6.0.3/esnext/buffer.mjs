/* esm.sh - esbuild bundle(buffer@6.0.3) esnext production */
import * as __0$ from "/v135/base64-js@1.5.1/esnext/base64-js.mjs";
import * as __1$ from "/v135/ieee754@1.2.1/esnext/ieee754.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"base64-js":return e(__0$);case"ieee754":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var or=Object.create;var S=Object.defineProperty;var ur=Object.getOwnPropertyDescriptor;var hr=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var O=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')});var pr=(i,r)=>()=>(r||i((r={exports:{}}).exports,r),r.exports),lr=(i,r)=>{for(var t in r)S(i,t,{get:r[t],enumerable:!0})},_=(i,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of hr(r))!cr.call(i,e)&&e!==t&&S(i,e,{get:()=>r[e],enumerable:!(n=ur(r,e))||n.enumerable});return i},m=(i,r,t)=>(_(i,r,"default"),t&&_(t,r,"default")),G=(i,r,t)=>(t=i!=null?or(fr(i)):{},_(r||!i||!i.__esModule?S(t,"default",{value:i,enumerable:!0}):t,i));var M=pr(U=>{"use strict";var C=O("base64-js"),d=O("ieee754"),Y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;U.Buffer=u;U.SlowBuffer=Br;U.INSPECT_MAX_BYTES=50;var R=2147483647;U.kMaxLength=R;u.TYPED_ARRAY_SUPPORT=sr();!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function sr(){try{let i=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(i,r),i.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function x(i){if(i>R)throw new RangeError('The value "'+i+'" is invalid for option "size"');let r=new Uint8Array(i);return Object.setPrototypeOf(r,u.prototype),r}function u(i,r,t){if(typeof i=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return N(i)}return V(i,r,t)}u.poolSize=8192;function V(i,r,t){if(typeof i=="string")return wr(i,r);if(ArrayBuffer.isView(i))return ar(i);if(i==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i);if(a(i,ArrayBuffer)||i&&a(i.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(a(i,SharedArrayBuffer)||i&&a(i.buffer,SharedArrayBuffer)))return L(i,r,t);if(typeof i=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let n=i.valueOf&&i.valueOf();if(n!=null&&n!==i)return u.from(n,r,t);let e=xr(i);if(e)return e;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof i[Symbol.toPrimitive]=="function")return u.from(i[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i)}u.from=function(i,r,t){return V(i,r,t)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function j(i){if(typeof i!="number")throw new TypeError('"size" argument must be of type number');if(i<0)throw new RangeError('The value "'+i+'" is invalid for option "size"')}function yr(i,r,t){return j(i),i<=0?x(i):r!==void 0?typeof t=="string"?x(i).fill(r,t):x(i).fill(r):x(i)}u.alloc=function(i,r,t){return yr(i,r,t)};function N(i){return j(i),x(i<0?0:$(i)|0)}u.allocUnsafe=function(i){return N(i)};u.allocUnsafeSlow=function(i){return N(i)};function wr(i,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);let t=z(i,r)|0,n=x(t),e=n.write(i,r);return e!==t&&(n=n.slice(0,e)),n}function b(i){let r=i.length<0?0:$(i.length)|0,t=x(r);for(let n=0;n<r;n+=1)t[n]=i[n]&255;return t}function ar(i){if(a(i,Uint8Array)){let r=new Uint8Array(i);return L(r.buffer,r.byteOffset,r.byteLength)}return b(i)}function L(i,r,t){if(r<0||i.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(i.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return r===void 0&&t===void 0?n=new Uint8Array(i):t===void 0?n=new Uint8Array(i,r):n=new Uint8Array(i,r,t),Object.setPrototypeOf(n,u.prototype),n}function xr(i){if(u.isBuffer(i)){let r=$(i.length)|0,t=x(r);return t.length===0||i.copy(t,0,0,r),t}if(i.length!==void 0)return typeof i.length!="number"||P(i.length)?x(0):b(i);if(i.type==="Buffer"&&Array.isArray(i.data))return b(i.data)}function $(i){if(i>=R)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+R.toString(16)+" bytes");return i|0}function Br(i){return+i!=i&&(i=0),u.alloc(+i)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype};u.compare=function(r,t){if(a(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),a(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(r)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let n=r.length,e=t.length;for(let o=0,h=Math.min(n,e);o<h;++o)if(r[o]!==t[o]){n=r[o],e=t[o];break}return n<e?-1:e<n?1:0};u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<r.length;++n)t+=r[n].length;let e=u.allocUnsafe(t),o=0;for(n=0;n<r.length;++n){let h=r[n];if(a(h,Uint8Array))o+h.length>e.length?(u.isBuffer(h)||(h=u.from(h)),h.copy(e,o)):Uint8Array.prototype.set.call(e,h,o);else if(u.isBuffer(h))h.copy(e,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=h.length}return e};function z(i,r){if(u.isBuffer(i))return i.length;if(ArrayBuffer.isView(i)||a(i,ArrayBuffer))return i.byteLength;if(typeof i!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof i);let t=i.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let e=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return D(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ir(i).length;default:if(e)return n?-1:D(i).length;r=(""+r).toLowerCase(),e=!0}}u.byteLength=z;function Er(i,r,t){let n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return _r(this,r,t);case"utf8":case"utf-8":return J(this,r,t);case"ascii":return Rr(this,r,t);case"latin1":case"binary":return Tr(this,r,t);case"base64":return Ur(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Sr(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),n=!0}}u.prototype._isBuffer=!0;function g(i,r,t){let n=i[r];i[r]=i[t],i[t]=n}u.prototype.swap16=function(){let r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)g(this,t,t+1);return this};u.prototype.swap32=function(){let r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this};u.prototype.swap64=function(){let r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this};u.prototype.toString=function(){let r=this.length;return r===0?"":arguments.length===0?J(this,0,r):Er.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0};u.prototype.inspect=function(){let r="",t=U.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"};Y&&(u.prototype[Y]=u.prototype.inspect);u.prototype.compare=function(r,t,n,e,o){if(a(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),n===void 0&&(n=r?r.length:0),e===void 0&&(e=0),o===void 0&&(o=this.length),t<0||n>r.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&t>=n)return 0;if(e>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,e>>>=0,o>>>=0,this===r)return 0;let h=o-e,f=n-t,l=Math.min(h,f),p=this.slice(e,o),s=r.slice(t,n);for(let c=0;c<l;++c)if(p[c]!==s[c]){h=p[c],f=s[c];break}return h<f?-1:f<h?1:0};function H(i,r,t,n,e){if(i.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,P(t)&&(t=e?0:i.length-1),t<0&&(t=i.length+t),t>=i.length){if(e)return-1;t=i.length-1}else if(t<0)if(e)t=0;else return-1;if(typeof r=="string"&&(r=u.from(r,n)),u.isBuffer(r))return r.length===0?-1:q(i,r,t,n,e);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(i,r,t):Uint8Array.prototype.lastIndexOf.call(i,r,t):q(i,[r],t,n,e);throw new TypeError("val must be string, number or Buffer")}function q(i,r,t,n,e){let o=1,h=i.length,f=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(i.length<2||r.length<2)return-1;o=2,h/=2,f/=2,t/=2}function l(s,c){return o===1?s[c]:s.readUInt16BE(c*o)}let p;if(e){let s=-1;for(p=t;p<h;p++)if(l(i,p)===l(r,s===-1?0:p-s)){if(s===-1&&(s=p),p-s+1===f)return s*o}else s!==-1&&(p-=p-s),s=-1}else for(t+f>h&&(t=h-f),p=t;p>=0;p--){let s=!0;for(let c=0;c<f;c++)if(l(i,p+c)!==l(r,c)){s=!1;break}if(s)return p}return-1}u.prototype.includes=function(r,t,n){return this.indexOf(r,t,n)!==-1};u.prototype.indexOf=function(r,t,n){return H(this,r,t,n,!0)};u.prototype.lastIndexOf=function(r,t,n){return H(this,r,t,n,!1)};function mr(i,r,t,n){t=Number(t)||0;let e=i.length-t;n?(n=Number(n),n>e&&(n=e)):n=e;let o=r.length;n>o/2&&(n=o/2);let h;for(h=0;h<n;++h){let f=parseInt(r.substr(h*2,2),16);if(P(f))return h;i[t+h]=f}return h}function gr(i,r,t,n){return T(D(r,i.length-t),i,t,n)}function Ir(i,r,t,n){return T(Dr(r),i,t,n)}function dr(i,r,t,n){return T(ir(r),i,t,n)}function Fr(i,r,t,n){return T(Nr(r,i.length-t),i,t,n)}u.prototype.write=function(r,t,n,e){if(t===void 0)e="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")e=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,e===void 0&&(e="utf8")):(e=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let o=this.length-t;if((n===void 0||n>o)&&(n=o),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");let h=!1;for(;;)switch(e){case"hex":return mr(this,r,t,n);case"utf8":case"utf-8":return gr(this,r,t,n);case"ascii":case"latin1":case"binary":return Ir(this,r,t,n);case"base64":return dr(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fr(this,r,t,n);default:if(h)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),h=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ur(i,r,t){return r===0&&t===i.length?C.fromByteArray(i):C.fromByteArray(i.slice(r,t))}function J(i,r,t){t=Math.min(i.length,t);let n=[],e=r;for(;e<t;){let o=i[e],h=null,f=o>239?4:o>223?3:o>191?2:1;if(e+f<=t){let l,p,s,c;switch(f){case 1:o<128&&(h=o);break;case 2:l=i[e+1],(l&192)===128&&(c=(o&31)<<6|l&63,c>127&&(h=c));break;case 3:l=i[e+1],p=i[e+2],(l&192)===128&&(p&192)===128&&(c=(o&15)<<12|(l&63)<<6|p&63,c>2047&&(c<55296||c>57343)&&(h=c));break;case 4:l=i[e+1],p=i[e+2],s=i[e+3],(l&192)===128&&(p&192)===128&&(s&192)===128&&(c=(o&15)<<18|(l&63)<<12|(p&63)<<6|s&63,c>65535&&c<1114112&&(h=c))}}h===null?(h=65533,f=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),e+=f}return Ar(n)}var W=4096;function Ar(i){let r=i.length;if(r<=W)return String.fromCharCode.apply(String,i);let t="",n=0;for(;n<r;)t+=String.fromCharCode.apply(String,i.slice(n,n+=W));return t}function Rr(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]&127);return n}function Tr(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]);return n}function _r(i,r,t){let n=i.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);let e="";for(let o=r;o<t;++o)e+=$r[i[o]];return e}function Sr(i,r,t){let n=i.slice(r,t),e="";for(let o=0;o<n.length-1;o+=2)e+=String.fromCharCode(n[o]+n[o+1]*256);return e}u.prototype.slice=function(r,t){let n=this.length;r=~~r,t=t===void 0?n:~~t,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<r&&(t=r);let e=this.subarray(r,t);return Object.setPrototypeOf(e,u.prototype),e};function y(i,r,t){if(i%1!==0||i<0)throw new RangeError("offset is not uint");if(i+r>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||y(r,t,this.length);let e=this[r],o=1,h=0;for(;++h<t&&(o*=256);)e+=this[r+h]*o;return e};u.prototype.readUintBE=u.prototype.readUIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||y(r,t,this.length);let e=this[r+--t],o=1;for(;t>0&&(o*=256);)e+=this[r+--t]*o;return e};u.prototype.readUint8=u.prototype.readUInt8=function(r,t){return r=r>>>0,t||y(r,1,this.length),this[r]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||y(r,2,this.length),this[r]|this[r+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||y(r,2,this.length),this[r]<<8|this[r+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||y(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||y(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};u.prototype.readBigUInt64LE=B(function(r){r=r>>>0,F(r,"offset");let t=this[r],n=this[r+7];(t===void 0||n===void 0)&&A(r,this.length-8);let e=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,o=this[++r]+this[++r]*2**8+this[++r]*2**16+n*2**24;return BigInt(e)+(BigInt(o)<<BigInt(32))});u.prototype.readBigUInt64BE=B(function(r){r=r>>>0,F(r,"offset");let t=this[r],n=this[r+7];(t===void 0||n===void 0)&&A(r,this.length-8);let e=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],o=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n;return(BigInt(e)<<BigInt(32))+BigInt(o)});u.prototype.readIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||y(r,t,this.length);let e=this[r],o=1,h=0;for(;++h<t&&(o*=256);)e+=this[r+h]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*t)),e};u.prototype.readIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||y(r,t,this.length);let e=t,o=1,h=this[r+--e];for(;e>0&&(o*=256);)h+=this[r+--e]*o;return o*=128,h>=o&&(h-=Math.pow(2,8*t)),h};u.prototype.readInt8=function(r,t){return r=r>>>0,t||y(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};u.prototype.readInt16LE=function(r,t){r=r>>>0,t||y(r,2,this.length);let n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};u.prototype.readInt16BE=function(r,t){r=r>>>0,t||y(r,2,this.length);let n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};u.prototype.readInt32LE=function(r,t){return r=r>>>0,t||y(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};u.prototype.readInt32BE=function(r,t){return r=r>>>0,t||y(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};u.prototype.readBigInt64LE=B(function(r){r=r>>>0,F(r,"offset");let t=this[r],n=this[r+7];(t===void 0||n===void 0)&&A(r,this.length-8);let e=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(n<<24);return(BigInt(e)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)});u.prototype.readBigInt64BE=B(function(r){r=r>>>0,F(r,"offset");let t=this[r],n=this[r+7];(t===void 0||n===void 0)&&A(r,this.length-8);let e=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(e)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n)});u.prototype.readFloatLE=function(r,t){return r=r>>>0,t||y(r,4,this.length),d.read(this,r,!0,23,4)};u.prototype.readFloatBE=function(r,t){return r=r>>>0,t||y(r,4,this.length),d.read(this,r,!1,23,4)};u.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||y(r,8,this.length),d.read(this,r,!0,52,8)};u.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||y(r,8,this.length),d.read(this,r,!1,52,8)};function w(i,r,t,n,e,o){if(!u.isBuffer(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<o)throw new RangeError('"value" argument is out of bounds');if(t+n>i.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){let f=Math.pow(2,8*n)-1;w(this,r,t,n,f,0)}let o=1,h=0;for(this[t]=r&255;++h<n&&(o*=256);)this[t+h]=r/o&255;return t+n};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){let f=Math.pow(2,8*n)-1;w(this,r,t,n,f,0)}let o=n-1,h=1;for(this[t+o]=r&255;--o>=0&&(h*=256);)this[t+o]=r/h&255;return t+n};u.prototype.writeUint8=u.prototype.writeUInt8=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,1,255,0),this[t]=r&255,t+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function K(i,r,t,n,e){tr(r,n,e,i,t,7);let o=Number(r&BigInt(4294967295));i[t++]=o,o=o>>8,i[t++]=o,o=o>>8,i[t++]=o,o=o>>8,i[t++]=o;let h=Number(r>>BigInt(32)&BigInt(4294967295));return i[t++]=h,h=h>>8,i[t++]=h,h=h>>8,i[t++]=h,h=h>>8,i[t++]=h,t}function Z(i,r,t,n,e){tr(r,n,e,i,t,7);let o=Number(r&BigInt(4294967295));i[t+7]=o,o=o>>8,i[t+6]=o,o=o>>8,i[t+5]=o,o=o>>8,i[t+4]=o;let h=Number(r>>BigInt(32)&BigInt(4294967295));return i[t+3]=h,h=h>>8,i[t+2]=h,h=h>>8,i[t+1]=h,h=h>>8,i[t]=h,t+8}u.prototype.writeBigUInt64LE=B(function(r,t=0){return K(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))});u.prototype.writeBigUInt64BE=B(function(r,t=0){return Z(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))});u.prototype.writeIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){let l=Math.pow(2,8*n-1);w(this,r,t,n,l-1,-l)}let o=0,h=1,f=0;for(this[t]=r&255;++o<n&&(h*=256);)r<0&&f===0&&this[t+o-1]!==0&&(f=1),this[t+o]=(r/h>>0)-f&255;return t+n};u.prototype.writeIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){let l=Math.pow(2,8*n-1);w(this,r,t,n,l-1,-l)}let o=n-1,h=1,f=0;for(this[t+o]=r&255;--o>=0&&(h*=256);)r<0&&f===0&&this[t+o+1]!==0&&(f=1),this[t+o]=(r/h>>0)-f&255;return t+n};u.prototype.writeInt8=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1};u.prototype.writeInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2};u.prototype.writeInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2};u.prototype.writeInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4};u.prototype.writeInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||w(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};u.prototype.writeBigInt64LE=B(function(r,t=0){return K(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});u.prototype.writeBigInt64BE=B(function(r,t=0){return Z(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Q(i,r,t,n,e,o){if(t+n>i.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function v(i,r,t,n,e){return r=+r,t=t>>>0,e||Q(i,r,t,4,34028234663852886e22,-34028234663852886e22),d.write(i,r,t,n,23,4),t+4}u.prototype.writeFloatLE=function(r,t,n){return v(this,r,t,!0,n)};u.prototype.writeFloatBE=function(r,t,n){return v(this,r,t,!1,n)};function rr(i,r,t,n,e){return r=+r,t=t>>>0,e||Q(i,r,t,8,17976931348623157e292,-17976931348623157e292),d.write(i,r,t,n,52,8),t+8}u.prototype.writeDoubleLE=function(r,t,n){return rr(this,r,t,!0,n)};u.prototype.writeDoubleBE=function(r,t,n){return rr(this,r,t,!1,n)};u.prototype.copy=function(r,t,n,e){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!e&&e!==0&&(e=this.length),t>=r.length&&(t=r.length),t||(t=0),e>0&&e<n&&(e=n),e===n||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-t<e-n&&(e=r.length-t+n);let o=e-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,e):Uint8Array.prototype.set.call(r,this.subarray(n,e),t),o};u.prototype.fill=function(r,t,n,e){if(typeof r=="string"){if(typeof t=="string"?(e=t,t=0,n=this.length):typeof n=="string"&&(e=n,n=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){let h=r.charCodeAt(0);(e==="utf8"&&h<128||e==="latin1")&&(r=h)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);let o;if(typeof r=="number")for(o=t;o<n;++o)this[o]=r;else{let h=u.isBuffer(r)?r:u.from(r,e),f=h.length;if(f===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=h[o%f]}return this};var I={};function k(i,r,t){I[i]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${i}]`,this.stack,delete this.name}get code(){return i}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${i}]: ${this.message}`}}}k("ERR_BUFFER_OUT_OF_BOUNDS",function(i){return i?`${i} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);k("ERR_INVALID_ARG_TYPE",function(i,r){return`The "${i}" argument must be of type number. Received type ${typeof r}`},TypeError);k("ERR_OUT_OF_RANGE",function(i,r,t){let n=`The value of "${i}" is out of range.`,e=t;return Number.isInteger(t)&&Math.abs(t)>2**32?e=X(String(t)):typeof t=="bigint"&&(e=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(e=X(e)),e+="n"),n+=` It must be ${r}. Received ${e}`,n},RangeError);function X(i){let r="",t=i.length,n=i[0]==="-"?1:0;for(;t>=n+4;t-=3)r=`_${i.slice(t-3,t)}${r}`;return`${i.slice(0,t)}${r}`}function Cr(i,r,t){F(r,"offset"),(i[r]===void 0||i[r+t]===void 0)&&A(r,i.length-(t+1))}function tr(i,r,t,n,e,o){if(i>t||i<r){let h=typeof r=="bigint"?"n":"",f;throw o>3?r===0||r===BigInt(0)?f=`>= 0${h} and < 2${h} ** ${(o+1)*8}${h}`:f=`>= -(2${h} ** ${(o+1)*8-1}${h}) and < 2 ** ${(o+1)*8-1}${h}`:f=`>= ${r}${h} and <= ${t}${h}`,new I.ERR_OUT_OF_RANGE("value",f,i)}Cr(n,e,o)}function F(i,r){if(typeof i!="number")throw new I.ERR_INVALID_ARG_TYPE(r,"number",i)}function A(i,r,t){throw Math.floor(i)!==i?(F(i,t),new I.ERR_OUT_OF_RANGE(t||"offset","an integer",i)):r<0?new I.ERR_BUFFER_OUT_OF_BOUNDS:new I.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${r}`,i)}var br=/[^+/0-9A-Za-z-_]/g;function Lr(i){if(i=i.split("=")[0],i=i.trim().replace(br,""),i.length<2)return"";for(;i.length%4!==0;)i=i+"=";return i}function D(i,r){r=r||1/0;let t,n=i.length,e=null,o=[];for(let h=0;h<n;++h){if(t=i.charCodeAt(h),t>55295&&t<57344){if(!e){if(t>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(h+1===n){(r-=3)>-1&&o.push(239,191,189);continue}e=t;continue}if(t<56320){(r-=3)>-1&&o.push(239,191,189),e=t;continue}t=(e-55296<<10|t-56320)+65536}else e&&(r-=3)>-1&&o.push(239,191,189);if(e=null,t<128){if((r-=1)<0)break;o.push(t)}else if(t<2048){if((r-=2)<0)break;o.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;o.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;o.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return o}function Dr(i){let r=[];for(let t=0;t<i.length;++t)r.push(i.charCodeAt(t)&255);return r}function Nr(i,r){let t,n,e,o=[];for(let h=0;h<i.length&&!((r-=2)<0);++h)t=i.charCodeAt(h),n=t>>8,e=t%256,o.push(e),o.push(n);return o}function ir(i){return C.toByteArray(Lr(i))}function T(i,r,t,n){let e;for(e=0;e<n&&!(e+t>=r.length||e>=i.length);++e)r[e+t]=i[e];return e}function a(i,r){return i instanceof r||i!=null&&i.constructor!=null&&i.constructor.name!=null&&i.constructor.name===r.name}function P(i){return i!==i}var $r=function(){let i="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let e=0;e<16;++e)r[n+e]=i[t]+i[e]}return r}();function B(i){return typeof BigInt>"u"?kr:i}function kr(){throw new Error("BigInt not supported")}});var E={};lr(E,{Buffer:()=>Pr,INSPECT_MAX_BYTES:()=>Or,SlowBuffer:()=>Mr,default:()=>qr,kMaxLength:()=>Gr});var er=G(M());m(E,G(M()));var{Buffer:Pr,SlowBuffer:Mr,INSPECT_MAX_BYTES:Or,kMaxLength:Gr}=er,{default:nr,...Yr}=er,qr=nr!==void 0?nr:Yr;export{Pr as Buffer,Or as INSPECT_MAX_BYTES,Mr as SlowBuffer,qr as default,Gr as kMaxLength};
/*! Bundled license information:

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=buffer.mjs.map