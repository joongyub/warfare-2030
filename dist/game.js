(()=>{var Nf=0,Fh=1,Uf=2;var Ss=1,Ff=2,Sr=3,ss=0,pn=1,Xe=2,Qe=0,br=1,Co=2,Oh=3,Bh=4,El=5;var Vn=100,Of=101,Bf=102,zf=103,Hf=104,bs=200,kf=201,Gf=202,Vf=203,zh=204,Hh=205,Po=206,Wf=207,Io=208,Xf=209,qf=210,Yf=211,$f=212,Zf=213,Jf=214,ka=0,Ga=1,Va=2,er=3,Wa=4,Xa=5,qa=6,Ya=7,Tl=0,Kf=1,jf=2,ti=0,Do=1,Lo=2,No=3,rs=4,Uo=5,Fo=6,Oo=7;var kh=300,os=301,Es=302,wl=303,Al=304,Bo=306,ve=1e3,Hn=1001,$a=1002,je=1003,Qf=1004;var zo=1005;var dn=1006,Rl=1007;var vi=1008;var Mn=1009,Gh=1010,Vh=1011,Er=1012,Cl=1013,ei=1014,Wn=1015,Je=1016,Pl=1017,Il=1018,as=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,Cn=1023,hi=1026,_i=1027,Dl=1028,Ll=1029,ls=1030,Nl=1031;var Ul=1033,Ho=33776,ko=33777,Go=33778,Vo=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,Hl=36196,kl=37492,Gl=37496,Vl=37488,Wl=37489,Wo=37490,Xl=37491,ql=37808,Yl=37809,$l=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,Xo=36285,uc=36286;var jr=2300,Za=2301,Ba=2302,Eh=2303,Th=2400,wh=2401,Ah=2402;var td=3200;var Tr=0,ed=1,zi="",Oe="srgb",Qr="srgb-linear",to="linear",Se="srgb";var za=7680;var nd=519,id=512,sd=513,rd=514,fc=515,od=516,ad=517,dc=518,ld=519,$h=35044;var Zh="300 es",Qn=2e3,nr=2001;function ap(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cd(){let s=ir("canvas");return s.style.display="block",s}var Ku={},sr=null;function eo(...s){let t="THREE."+s.shift();sr?sr("log",t,...s):console.log(t,...s)}function hd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=hd(s);let t="THREE."+s.shift();if(sr)sr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function jt(...s){s=hd(s);let t="THREE."+s.shift();if(sr)sr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function gs(...s){let t=s.join(" ");t in Ku||(Ku[t]=!0,Qt(...s))}function ud(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var fd={[ka]:Ga,[Va]:qa,[Wa]:Ya,[er]:Xa,[Ga]:ka,[qa]:Va,[Ya]:Wa,[Xa]:er},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jc=Math.PI/180,Ja=180/Math.PI;function Ui(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function de(s,t,e){return Math.max(t,Math.min(e,s))}function cp(s,t){return(s%t+t)%t}function Kc(s,t,e){return(1-e)*s+e*t}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eu=class eu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eu.prototype.isVector2=!0;var j=eu,_n=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);p=Math.sin(p*v)/M,a=Math.sin(a*v)/M,l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nu=class nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jc.copy(this).projectOnVector(t),this.sub(jc)}reflect(t){return this.sub(jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;var P=nu,jc=new P,ju=new _n,iu=class iu{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],M=i[4],_=i[7],b=i[2],E=i[5],A=i[8];return r[0]=o*x+a*v+l*b,r[3]=o*m+a*M+l*E,r[6]=o*p+a*_+l*A,r[1]=c*x+h*v+f*b,r[4]=c*m+h*M+f*E,r[7]=c*p+h*_+f*A,r[2]=u*x+d*v+g*b,r[5]=u*m+d*M+g*E,r[8]=u*p+d*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;var se=iu,Qc=new se,Qu=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){let s={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?to:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qr]:{primaries:t,whitePoint:n,transfer:to,toXYZ:Qu,fromXYZ:tf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Qu,fromXYZ:tf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),s}var ue=hp();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Us,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=ir("canvas")),Us.width=t.width,Us.height=t.height;let i=Us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},up=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(th(i[o].image)):r.push(th(i[o]))}else r=th(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var fp=0,eh=new P,yn=class s extends ui{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Hn,i=Hn,r=dn,o=vi,a=Cn,l=Mn,c=s.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ui(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ve:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ve:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=kh;yn.DEFAULT_ANISOTROPY=1;var su=class su{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(d+1)/2,b=(p+1)/2,E=(h+u)/4,A=(f+x)/4,y=(g+m)/4;return M>_&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=A/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=y/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};su.prototype.isVector4=!0;var We=su,ja=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new yn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bl=class bl{constructor(t,e,n,i,r,o,a,l,c,h,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,u,d,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,pp)}lookAt(t,e,n){let i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(n,Pn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(n,Pn)),Yi.normalize(),ua.crossVectors(Pn,Yi),i[0]=Yi.x,i[4]=ua.x,i[8]=Pn.x,i[1]=Yi.y,i[5]=ua.y,i[9]=Pn.y,i[2]=Yi.z,i[6]=ua.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],M=n[7],_=n[11],b=n[15],E=i[0],A=i[4],y=i[8],w=i[12],R=i[1],I=i[5],D=i[9],B=i[13],L=i[2],z=i[6],W=i[10],q=i[14],rt=i[3],X=i[7],K=i[11],tt=i[15];return r[0]=o*E+a*R+l*L+c*rt,r[4]=o*A+a*I+l*z+c*X,r[8]=o*y+a*D+l*W+c*K,r[12]=o*w+a*B+l*q+c*tt,r[1]=h*E+f*R+u*L+d*rt,r[5]=h*A+f*I+u*z+d*X,r[9]=h*y+f*D+u*W+d*K,r[13]=h*w+f*B+u*q+d*tt,r[2]=g*E+x*R+m*L+p*rt,r[6]=g*A+x*I+m*z+p*X,r[10]=g*y+x*D+m*W+p*K,r[14]=g*w+x*B+m*q+p*tt,r[3]=v*E+M*R+_*L+b*rt,r[7]=v*A+M*I+_*z+b*X,r[11]=v*y+M*D+_*W+b*K,r[15]=v*w+M*B+_*q+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*u,M=a*d-c*f,_=a*u-l*f,b=o*d-c*h,E=o*u-l*h,A=o*f-a*h;return e*(x*v-m*M+p*_)-n*(g*v-m*b+p*E)+i*(g*M-x*b+p*A)-r*(g*_-x*E+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,M=e*l-i*o,_=e*c-r*o,b=n*l-i*a,E=n*c-r*a,A=i*c-r*l,y=h*x-f*g,w=h*m-u*g,R=h*p-d*g,I=f*m-u*x,D=f*p-d*x,B=u*p-d*m,L=v*B-M*D+_*I+b*R-E*w+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*B-l*D+c*I)*z,t[1]=(i*D-n*B-r*I)*z,t[2]=(x*A-m*E+p*b)*z,t[3]=(u*E-f*A-d*b)*z,t[4]=(l*R-o*B-c*w)*z,t[5]=(e*B-i*R+r*w)*z,t[6]=(m*_-g*A-p*M)*z,t[7]=(h*A-u*_+d*M)*z,t[8]=(o*D-a*R+c*y)*z,t[9]=(n*R-e*D-r*y)*z,t[10]=(g*E-x*_+p*v)*z,t[11]=(f*_-h*E-d*v)*z,t[12]=(a*w-o*I-l*y)*z,t[13]=(e*I-n*w+i*y)*z,t[14]=(x*M-g*b-m*v)*z,t[15]=(h*b-f*M+u*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,v=l*c,M=l*h,_=l*f,b=n.x,E=n.y,A=n.z;return i[0]=(1-(x+p))*b,i[1]=(d+_)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(u+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+M)*A,i[9]=(m-v)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length(),a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,f=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===nr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===nr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bl.prototype.isMatrix4=!0;var te=bl,Fs=new P,Jn=new te,dp=new P(0,0,0),pp=new P(1,1,1),Yi=new P,ua=new P,Pn=new P,ef=new te,nf=new _n,fi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nf.setFromEuler(this),this.setFromQuaternion(nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mp=0,sf=new P,Os=new _n,Ci=new te,fa=new P,zr=new P,gp=new P,xp=new _n,rf=new P(1,0,0),of=new P(0,1,0),af=new P(0,0,1),lf={type:"added"},vp={type:"removed"},Bs={type:"childadded",child:null},nh={type:"childremoved",child:null},$e=class s extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new fi,n=new _n,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new se}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(of,t)}rotateZ(t){return this.rotateOnAxis(af,t)}translateOnAxis(t,e){return sf.copy(t).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(of,t)}translateZ(t){return this.translateOnAxis(af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(zr,fa,this.up):Ci.lookAt(fa,zr,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(Ci),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new P(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},da={h:0,s:0,l:0};function ih(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=cp(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ue.workingToColorSpace(vn.copy(this),t),Math.round(de(vn.r*255,0,255))*65536+Math.round(de(vn.g*255,0,255))*256+Math.round(de(vn.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(vn.copy(this),e);let n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Oe){ue.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,i=vn.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(da);let n=Kc($i.h,da.h,e),i=Kc($i.s,da.s,e),r=Kc($i.l,da.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Yt;Yt.NAMES=dd;var io=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ji=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new P,Pi=new P,sh=new P,Ii=new P,zs=new P,Hs=new P,cf=new P,rh=new P,oh=new P,ah=new P,lh=new We,ch=new We,hh=new We,Ni=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Kn.subVectors(t,e),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Kn.subVectors(i,e),Pi.subVectors(n,e),sh.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Pi),l=Kn.dot(sh),c=Pi.dot(Pi),h=Pi.dot(sh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,n,i){return Kn.subVectors(n,e),Pi.subVectors(t,e),Kn.cross(Pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Kn.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;zs.subVectors(i,n),Hs.subVectors(r,n),rh.subVectors(t,n);let l=zs.dot(rh),c=Hs.dot(rh);if(l<=0&&c<=0)return e.copy(n);oh.subVectors(t,i);let h=zs.dot(oh),f=Hs.dot(oh);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zs,o);ah.subVectors(t,r);let d=zs.dot(ah),g=Hs.dot(ah);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hs,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return cf.subVectors(r,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(cf,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},di=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),ma.subVectors(this.max,Hr),ks.subVectors(t.a,Hr),Gs.subVectors(t.b,Hr),Vs.subVectors(t.c,Hr),Zi.subVectors(Gs,ks),Ji.subVectors(Vs,Gs),fs.subVectors(ks,Vs);let e=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-fs.z,fs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,fs.z,0,-fs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-fs.y,fs.x,0];return!uh(e,ks,Gs,Vs,ma)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,ks,Gs,Vs,ma))?!1:(ga.crossVectors(Zi,Ji),e=[ga.x,ga.y,ga.z],uh(e,ks,Gs,Vs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,pa=new di,ks=new P,Gs=new P,Vs=new P,Zi=new P,Ji=new P,fs=new P,Hr=new P,ma=new P,ga=new P,ds=new P;function uh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ds.fromArray(s,r);let a=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new P,xa=new j,yp=0,Le=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var so=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ro=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mp=new di,kr=new P,fh=new P,Oi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(fh)),this.expandByPoint(kr.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sp=0,zn=new te,dh=new $e,Ws=new P,In=new di,Gr=new di,hn=new P,xe=class s extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?ro:so)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(In.min,Gr.min),In.expandByPoint(hn),hn.addVectors(In.max,Gr.max),In.expandByPoint(hn)):(In.expandByPoint(Gr.min),In.expandByPoint(Gr.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),hn.add(Ws)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new P,l[y]=new P;let c=new P,h=new P,f=new P,u=new j,d=new j,g=new j,x=new P,m=new P;function p(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(x),a[w].add(x),a[R].add(x),l[y].add(m),l[w].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){let R=v[y],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new P,_=new P,b=new P,E=new P;function A(y){b.fromBufferAttribute(i,y),E.copy(b);let w=a[y];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(E,w);let I=_.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,w=v.length;y<w;++y){let R=v[y],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Le(u,h,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new P,lr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ph=new P,bp=new P,Ep=new se,An=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ph.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ep.getNormalMatrix(t),i=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tp=0,kn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=br,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new j().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xs=class extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,Vr=new P,qs=new P,Ys=new P,$s=new j,Wr=new j,pd=new te,va=new P,Xr=new P,_a=new P,hf=new j,mh=new j,uf=new j,cr=class extends $e{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oo(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new lr(n,3,0,!1)),Xs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new j(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ya(va.set(-.5,-.5,0),Ys,o,qs,i,r),ya(Xr.set(.5,-.5,0),Ys,o,qs,i,r),ya(_a.set(.5,.5,0),Ys,o,qs,i,r),hf.set(0,0),mh.set(1,0),uf.set(1,1);let a=t.ray.intersectTriangle(va,Xr,_a,!1,Vr);if(a===null&&(ya(Xr.set(-.5,.5,0),Ys,o,qs,i,r),mh.set(0,1),a=t.ray.intersectTriangle(va,_a,Xr,!1,Vr),a===null))return;let l=t.ray.origin.distanceTo(Vr);l<t.near||l>t.far||e.push({distance:l,point:Vr.clone(),uv:Ni.getInterpolation(Vr,va,Xr,_a,hf,mh,uf,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(s,t,e,n,i,r){$s.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Wr.x=r*$s.x-i*$s.y,Wr.y=i*$s.x+r*$s.y):Wr.copy($s),s.copy(t),s.x+=Wr.x,s.y+=Wr.y,s.applyMatrix4(pd)}var Li=new P,gh=new P,Ma=new P,Sa=new P,hr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gh.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(gh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(gh).addScaledVector(Ma,u),d}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,M=n.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),A,y,w,R,I,D,B,L,z,W,q,rt;if(_>=b&&_>=E?(w=l,D=f,z=g,rt=p,l>=0?(A=c,y=h,R=u,I=d,B=x,L=m,W=v,q=M):(A=h,y=c,R=d,I=u,B=m,L=x,W=M,q=v)):b>=E?(w=c,D=u,z=x,rt=v,c>=0?(A=h,y=l,R=d,I=f,B=m,L=g,W=M,q=p):(A=l,y=h,R=f,I=d,B=g,L=m,W=p,q=M)):(w=h,D=d,z=m,rt=M,h>=0?(A=l,y=c,R=f,I=u,B=g,L=x,W=p,q=v):(A=c,y=l,R=u,I=f,B=x,L=g,W=v,q=p)),w===0)return null;let X=A/w,K=y/w,tt=1/w,Pt=R-X*D,bt=I-K*D,ge=B-X*z,re=L-K*z,he=W-X*rt,$=q-K*rt,Q=he*re-$*ge,pt=Pt*$-bt*he,kt=ge*bt-re*Pt;if(i){if(Q<0||pt<0||kt<0)return null}else if((Q<0||pt<0||kt<0)&&(Q>0||pt>0||kt>0))return null;let At=Q+pt+kt;if(At===0)return null;let Jt=tt*(Q*D+pt*z+kt*rt);return(At>0?Jt<0:Jt>0)?null:this.at(Jt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ff=new te,ps=new hr,ba=new Oi,df=new P,Ea=new P,Ta=new P,wa=new P,xh=new P,Aa=new P,pf=new P,Ra=new P,ft=class extends $e{constructor(t=new xe,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(xh.fromBufferAttribute(f,t),o?Aa.addScaledVector(xh,h):Aa.addScaledVector(xh.sub(e),h))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(ba.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ba,df)===null||ps.origin.distanceToSquared(df)>(t.far-t.near)**2))&&(ff.copy(r).invert(),ps.copy(t.ray).applyMatrix4(ff),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,b=M;_<b;_+=3){let E=a.getX(_),A=a.getX(_+1),y=a.getX(_+2);i=Ca(this,p,t,n,c,h,f,E,A,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);i=Ca(this,o,t,n,c,h,f,v,M,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,b=M;_<b;_+=3){let E=_,A=_+1,y=_+2;i=Ca(this,p,t,n,c,h,f,E,A,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,M=m+1,_=m+2;i=Ca(this,o,t,n,c,h,f,v,M,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function wp(s,t,e,n,i,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ss,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:s}}function Ca(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ea),s.getVertexPosition(l,Ta),s.getVertexPosition(c,wa);let h=wp(s,t,e,n,Ea,Ta,wa,pf);if(h){let f=new P;Ni.getBarycoord(pf,Ea,Ta,wa,f),i&&(h.uv=Ni.getInterpolatedAttribute(i,a,l,c,f,new j)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,f,new j)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ni.getNormal(Ea,Ta,wa,u.normal),h.face=u,h.barycoord=f}return h}var Bi=class extends yn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=je,h=je,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new te,mf=new te,Pa=[],gf=new di,Ap=new te,qr=new ft,Yr=new Oi,Gn=class extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ap)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),gf.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(gf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Yr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zs),mf.multiplyMatrices(n,Zs),qr.matrixWorld=mf,qr.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(i*this.count),i,this.count,Dl,Wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Oi,Rp=new j(.5,.5),Ia=new P,fr=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],M=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-g,b-v).normalize(),i[1].setComponents(c+o,d+h,p+g,b+v).normalize(),i[2].setComponents(c+a,d+f,p+x,b+M).normalize(),i[3].setComponents(c-a,d-f,p-x,b-M).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,d-u,p-m,b-_).normalize();else if(i[4].setComponents(c-l,d-u,p-m,b-_).normalize(),e===Qn)i[5].setComponents(c+l,d+u,p+m,b+_).normalize();else if(e===nr)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Rp.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ia.x=i.normal.x>0?t.max.x:t.min.x,Ia.y=i.normal.y>0?t.max.y:t.min.y,Ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new P,el=new P,xf=new te,$r=new hr,Da=new Oi,vh=new P,vf=new P,ao=class extends $e{constructor(t=new xe,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)tl.fromBufferAttribute(e,i-1),el.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=tl.distanceTo(el);t.setAttribute("lineDistance",new Zt(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;xf.copy(i).invert(),$r.copy(t.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),M=La(this,t,$r,l,p,v,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=La(this,t,$r,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=La(this,t,$r,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=La(this,t,$r,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(tl.fromBufferAttribute(a,i),el.fromBufferAttribute(a,r),e.distanceSqToSegment(tl,el,vh,vf)>n)return;vh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(vh);if(!(c<t.near||c>t.far))return{distance:c,point:vf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var lo=class extends yn{constructor(t=[],e=os,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},un=class extends yn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends yn{constructor(t,e,n=ei,i,r,o,a=je,l=je,c,h=hi,f=1){if(h!==hi&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nl=class extends pi{constructor(t,e=ei,n=os,i,r,o=je,a=je,l,c=hi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},co=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Lt=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(f,2));function g(x,m,p,v,M,_,b,E,A,y,w){let R=_/A,I=b/y,D=_/2,B=b/2,L=E/2,z=A+1,W=y+1,q=0,rt=0,X=new P;for(let K=0;K<W;K++){let tt=K*I-B;for(let Pt=0;Pt<z;Pt++){let bt=Pt*R-D;X[x]=bt*v,X[m]=tt*M,X[p]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Pt/A),f.push(1-K/y),q+=1}}for(let K=0;K<y;K++)for(let tt=0;tt<A;tt++){let Pt=u+tt+z*K,bt=u+tt+z*(K+1),ge=u+(tt+1)+z*(K+1),re=u+(tt+1)+z*K;l.push(Pt,bt,re),l.push(bt,ge,re),rt+=6}a.addGroup(d,rt,w),d+=rt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},vs=class s extends xe{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=n*2+r,x=i+1,m=new P,p=new P;for(let v=0;v<=g;v++){let M=0,_=0,b=0,E=0;if(v<=n){let w=v/n,R=w*Math.PI/2;_=-h-t*Math.cos(R),b=t*Math.sin(R),E=-t*Math.cos(R),M=w*f}else if(v<=n+r){let w=(v-n)/r;_=-h+w*e,b=t,E=0,M=f+w*u}else{let w=(v-n-r)/n,R=w*Math.PI/2;_=h+t*Math.sin(R),b=t*Math.cos(R),E=t*Math.sin(R),M=f+u+w*f}let A=Math.max(0,Math.min(1,M/d)),y=0;v===0?y=.5/i:v===g&&(y=-.5/i);for(let w=0;w<=i;w++){let R=w/i,I=R*Math.PI*2,D=Math.sin(I),B=Math.cos(I);p.x=-b*B,p.y=_,p.z=b*D,a.push(p.x,p.y,p.z),m.set(-b*B,E,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+y,A)}if(v>0){let w=(v-1)*x;for(let R=0;R<i;R++){let I=w+R,D=w+R+1,B=v*x+R,L=v*x+R+1;o.push(I,D,B),o.push(D,L,B)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mi=class s extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ee=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function v(){let _=new P,b=new P,E=0,A=(e-t)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,I=R*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,L=B*l+a,z=Math.sin(L),W=Math.cos(L);b.x=I*z,b.y=-R*n+m,b.z=I*W,f.push(b.x,b.y,b.z),_.set(z,A,W).normalize(),u.push(_.x,_.y,_.z),d.push(B,1-R),w.push(g++)}x.push(w)}for(let y=0;y<i;y++)for(let w=0;w<r;w++){let R=x[w][y],I=x[w+1][y],D=x[w+1][y+1],B=x[w][y+1];(t>0||w!==0)&&(h.push(R,I,B),E+=3),(e>0||w!==r-1)&&(h.push(I,D,B),E+=3)}c.addGroup(p,E,0),p+=E}function M(_){let b=g,E=new j,A=new P,y=0,w=_===!0?t:e,R=_===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),g++;let I=g;for(let D=0;D<=i;D++){let L=D/i*l+a,z=Math.cos(L),W=Math.sin(L);A.x=w*W,A.y=m*R,A.z=w*z,f.push(A.x,A.y,A.z),u.push(0,R,0),E.x=z*.5+.5,E.y=W*.5*R+.5,d.push(E.x,E.y),g++}for(let D=0;D<i;D++){let B=b+D,L=I+D;_===!0?h.push(L,L+1,B):h.push(L+1,L,B),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dn=class s extends ee{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},il=class s extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new P,_=new P,b=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],_),d(e[E+2],b),l(M,_,b,v)}function l(v,M,_,b){let E=b+1,A=[];for(let y=0;y<=E;y++){A[y]=[];let w=v.clone().lerp(_,y/E),R=M.clone().lerp(_,y/E),I=E-y;for(let D=0;D<=I;D++)D===0&&y===E?A[y][D]=w:A[y][D]=w.clone().lerp(R,D/I)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let R=Math.floor(w/2);w%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function c(v){let M=new P;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(_,1-b)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let M=o[v+0],_=o[v+2],b=o[v+4],E=Math.max(M,_,b),A=Math.min(M,_,b);E>.9&&A<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,M){let _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let v=new P,M=new P,_=new P,b=new P,E=new j,A=new j,y=new j;for(let w=0,R=0;w<r.length;w+=9,R+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),b.copy(v).add(M).add(_).divideScalar(3);let I=m(b);x(E,R+0,v,I),x(A,R+2,M,I),x(y,R+4,_,I)}}function x(v,M,_,b){b<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new j:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],o=[],a=new P,l=new te;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(de(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pr=class extends Ln{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends pr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var _f=new P,yf=new P,_h=new Jh,yh=new Jh,Mh=new Jh,Qi=class extends Ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(yf.subVectors(i[0],i[1]).add(i[0]),c=yf);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_f.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),_h.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),yh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Mh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),yh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Mh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(_h.calc(l),yh.calc(l),Mh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Cp(s,t){let e=1-s;return e*e*t}function Pp(s,t){return 2*(1-s)*s*t}function Ip(s,t){return s*s*t}function Jr(s,t,e,n){return Cp(s,t)+Pp(s,e)+Ip(s,n)}function Dp(s,t){let e=1-s;return e*e*e*t}function Lp(s,t){let e=1-s;return 3*e*e*s*t}function Np(s,t){return 3*(1-s)*s*s*t}function Up(s,t){return s*s*s*t}function Kr(s,t,e,n,i){return Dp(s,t)+Lp(s,e)+Np(s,n)+Up(s,i)}var ho=class extends Ln{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,i.x,r.x,o.x,a.x),Kr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rl=class extends Ln{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,i.x,r.x,o.x,a.x),Kr(t,i.y,r.y,o.y,a.y),Kr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends Ln{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Ln{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Jr(t,i.x,r.x,o.x),Jr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Jr(t,i.x,r.x,o.x),Jr(t,i.y,r.y,o.y),Jr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Mf(a,l.x,c.x,h.x,f.x),Mf(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new j().fromArray(i))}return this}},al=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:Qi,CubicBezierCurve:ho,CubicBezierCurve3:rl,EllipseCurve:pr,LineCurve:uo,LineCurve3:ol,QuadraticBezierCurve:fo,QuadraticBezierCurve3:po,SplineCurve:mo}),ll=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new al[i.type]().fromJSON(i))}return this}},_s=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new uo(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new fo(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new ho(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new pr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rn=class extends _s{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new _s().fromJSON(i))}return this}};function Fp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=md(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=kp(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=s[u],g=s[u+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return go(r,o,e,a,l,c,0),o}function md(s,t,e,n,i){let r;if(i===jp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sf(o/n|0,s[o],s[o+1],r);return r&&mr(r,r.next)&&(vo(r),r=r.next),r}function ys(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(vo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function go(s,t,e,n,i,r,o){if(!s)return;!o&&r&&qp(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Bp(s,n,i,r):Op(s)){t.push(l.i,s.i,c.i),vo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=zp(ys(s),t),go(s,t,e,n,i,r,2)):o===2&&Hp(s,t,e,n,i,r):go(ys(s),t,e,n,i,r,1);break}}}function Op(s){let t=s.prev,e=s,n=s.next;if(Ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Zr(i,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bp(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),g=Math.min(h,f,u),x=Math.max(a,l,c),m=Math.max(h,f,u),p=Rh(d,g,t,e,n),v=Rh(x,m,t,e,n),M=s.prevZ,_=s.nextZ;for(;M&&M.z>=p&&_&&_.z<=v;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Zr(a,h,l,f,c,u,M.x,M.y)&&Ye(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Zr(a,h,l,f,c,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Zr(a,h,l,f,c,u,M.x,M.y)&&Ye(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Zr(a,h,l,f,c,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!mr(n,i)&&xd(n,e,e.next,i)&&xo(n,i)&&xo(i,n)&&(t.push(n.i,e.i,i.i),vo(e),vo(e.next),e=s=i),e=e.next}while(e!==s);return ys(e)}function Hp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zp(o,a)){let l=vd(o,a);o=ys(o,o.next),l=ys(l,l.next),go(o,t,e,n,i,r,0),go(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function kp(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=md(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push($p(c))}i.sort(Gp);for(let r=0;r<i.length;r++)e=Vp(i[r],e);return e}function Gp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Vp(s,t){let e=Wp(s,t);if(!e)return t;let n=vd(e,s);return ys(n,n.next),ys(e,e.next)}function Wp(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(mr(s,e))return e;do{if(mr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);xo(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Xp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Xp(s,t){return Ye(s.prev,s,t.prev)<0&&Ye(t.next,s,s.next)<0}function qp(s,t,e,n){let i=s;do i.z===0&&(i.z=Rh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Yp(i)}function Yp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Rh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function $p(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function gd(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Zr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&gd(s,t,e,n,i,r,o,a)}function Zp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Jp(s,t)&&(xo(s,t)&&xo(t,s)&&Kp(s,t)&&(Ye(s.prev,s,t.prev)||Ye(s,t.prev,t))||mr(s,t)&&Ye(s.prev,s,s.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function mr(s,t){return s.x===t.x&&s.y===t.y}function xd(s,t,e,n){let i=Ua(Ye(s,t,e)),r=Ua(Ye(s,t,n)),o=Ua(Ye(e,n,s)),a=Ua(Ye(e,n,t));return!!(i!==r&&o!==a||i===0&&Na(s,e,t)||r===0&&Na(s,n,t)||o===0&&Na(e,s,n)||a===0&&Na(e,t,n))}function Na(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ua(s){return s>0?1:s<0?-1:0}function Jp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xo(s,t){return Ye(s.prev,s,s.next)<0?Ye(s,t,s.next)>=0&&Ye(s,s.prev,t)>=0:Ye(s,t,s.prev)<0||Ye(s,s.next,t)<0}function Kp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function vd(s,t){let e=Ch(s.i,s.x,s.y),n=Ch(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sf(s,t,e,n){let i=Ch(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ch(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ph=class{static triangulate(t,e,n=2){return Fp(t,e,n)}},ci=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];bf(t),Ef(n,t);let o=t.length;e.forEach(bf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ef(n,e[l]);let a=Ph.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ef(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var gi=class s extends xe{constructor(t=new Rn([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Zt(i,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Qp,M,_=!1,b,E,A,y;if(p){M=p.getSpacedPoints(h),_=!0,u=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,nt),E=new P,A=new P,y=new P}u||(m=0,d=0,g=0,x=0);let w=a.extractPoints(c),R=w.shape,I=w.holes;if(!ci.isClockWise(R)){R=R.reverse();for(let nt=0,at=I.length;nt<at;nt++){let lt=I[nt];ci.isClockWise(lt)&&(I[nt]=lt.reverse())}}function B(nt){let lt=10000000000000001e-36,ht=nt[0];for(let dt=1;dt<=nt.length;dt++){let Xt=dt%nt.length,Gt=nt[Xt],Kt=Gt.x-ht.x,ne=Gt.y-ht.y,U=Kt*Kt+ne*ne,_e=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ht.x),Math.abs(ht.y)),ae=lt*_e*_e;if(U<=ae){nt.splice(Xt,1),dt--;continue}ht=Gt}}B(R),I.forEach(B);let L=I.length,z=R;for(let nt=0;nt<L;nt++){let at=I[nt];R=R.concat(at)}function W(nt,at,lt){return at||jt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,lt)}let q=R.length;function rt(nt,at,lt){let ht,dt,Xt,Gt=nt.x-at.x,Kt=nt.y-at.y,ne=lt.x-nt.x,U=lt.y-nt.y,_e=Gt*Gt+Kt*Kt,ae=Gt*U-Kt*ne;if(Math.abs(ae)>Number.EPSILON){let C=Math.sqrt(_e),S=Math.sqrt(ne*ne+U*U),H=at.x-Kt/C,k=at.y+Gt/C,Z=lt.x-U/S,ut=lt.y+ne/S,mt=((Z-H)*U-(ut-k)*ne)/(Gt*U-Kt*ne);ht=H+Gt*mt-nt.x,dt=k+Kt*mt-nt.y;let J=ht*ht+dt*dt;if(J<=2)return new j(ht,dt);Xt=Math.sqrt(J/2)}else{let C=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(C=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(C=!0):Math.sign(Kt)===Math.sign(U)&&(C=!0),C?(ht=-Kt,dt=Gt,Xt=Math.sqrt(_e)):(ht=Gt,dt=Kt,Xt=Math.sqrt(_e/2))}return new j(ht/Xt,dt/Xt)}let X=[];for(let nt=0,at=z.length,lt=at-1,ht=nt+1;nt<at;nt++,lt++,ht++)lt===at&&(lt=0),ht===at&&(ht=0),X[nt]=rt(z[nt],z[lt],z[ht]);let K=[],tt,Pt=X.concat();for(let nt=0,at=L;nt<at;nt++){let lt=I[nt];tt=[];for(let ht=0,dt=lt.length,Xt=dt-1,Gt=ht+1;ht<dt;ht++,Xt++,Gt++)Xt===dt&&(Xt=0),Gt===dt&&(Gt=0),tt[ht]=rt(lt[ht],lt[Xt],lt[Gt]);K.push(tt),Pt=Pt.concat(tt)}let bt;if(m===0)bt=ci.triangulateShape(z,I);else{let nt=[],at=[];for(let lt=0;lt<m;lt++){let ht=lt/m,dt=d*Math.cos(ht*Math.PI/2),Xt=g*Math.sin(ht*Math.PI/2)+x;for(let Gt=0,Kt=z.length;Gt<Kt;Gt++){let ne=W(z[Gt],X[Gt],Xt);pt(ne.x,ne.y,-dt),ht===0&&nt.push(ne)}for(let Gt=0,Kt=L;Gt<Kt;Gt++){let ne=I[Gt];tt=K[Gt];let U=[];for(let _e=0,ae=ne.length;_e<ae;_e++){let C=W(ne[_e],tt[_e],Xt);pt(C.x,C.y,-dt),ht===0&&U.push(C)}ht===0&&at.push(U)}}bt=ci.triangulateShape(nt,at)}let ge=bt.length,re=g+x;for(let nt=0;nt<q;nt++){let at=u?W(R[nt],Pt[nt],re):R[nt];_?(A.copy(b.normals[0]).multiplyScalar(at.x),E.copy(b.binormals[0]).multiplyScalar(at.y),y.copy(M[0]).add(A).add(E),pt(y.x,y.y,y.z)):pt(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<q;at++){let lt=u?W(R[at],Pt[at],re):R[at];_?(A.copy(b.normals[nt]).multiplyScalar(lt.x),E.copy(b.binormals[nt]).multiplyScalar(lt.y),y.copy(M[nt]).add(A).add(E),pt(y.x,y.y,y.z)):pt(lt.x,lt.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){let at=nt/m,lt=d*Math.cos(at*Math.PI/2),ht=g*Math.sin(at*Math.PI/2)+x;for(let dt=0,Xt=z.length;dt<Xt;dt++){let Gt=W(z[dt],X[dt],ht);pt(Gt.x,Gt.y,f+lt)}for(let dt=0,Xt=I.length;dt<Xt;dt++){let Gt=I[dt];tt=K[dt];for(let Kt=0,ne=Gt.length;Kt<ne;Kt++){let U=W(Gt[Kt],tt[Kt],ht);_?pt(U.x,U.y+M[h-1].y,M[h-1].x+lt):pt(U.x,U.y,f+lt)}}}he(),$();function he(){let nt=i.length/3;if(u){let at=0,lt=q*at;for(let ht=0;ht<ge;ht++){let dt=bt[ht];kt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}at=h+m*2,lt=q*at;for(let ht=0;ht<ge;ht++){let dt=bt[ht];kt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let at=0;at<ge;at++){let lt=bt[at];kt(lt[2],lt[1],lt[0])}for(let at=0;at<ge;at++){let lt=bt[at];kt(lt[0]+q*h,lt[1]+q*h,lt[2]+q*h)}}n.addGroup(nt,i.length/3-nt,0)}function $(){let nt=i.length/3,at=0;Q(z,at),at+=z.length;for(let lt=0,ht=I.length;lt<ht;lt++){let dt=I[lt];Q(dt,at),at+=dt.length}n.addGroup(nt,i.length/3-nt,1)}function Q(nt,at){let lt=nt.length;for(;--lt>=0;){let ht=lt,dt=lt-1;dt<0&&(dt=nt.length-1);for(let Xt=0,Gt=h+m*2;Xt<Gt;Xt++){let Kt=q*Xt,ne=q*(Xt+1),U=at+ht+Kt,_e=at+dt+Kt,ae=at+dt+ne,C=at+ht+ne;At(U,_e,ae,C)}}}function pt(nt,at,lt){l.push(nt),l.push(at),l.push(lt)}function kt(nt,at,lt){Jt(nt),Jt(at),Jt(lt);let ht=i.length/3,dt=v.generateTopUV(n,i,ht-3,ht-2,ht-1);ye(dt[0]),ye(dt[1]),ye(dt[2])}function At(nt,at,lt,ht){Jt(nt),Jt(at),Jt(ht),Jt(at),Jt(lt),Jt(ht);let dt=i.length/3,Xt=v.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);ye(Xt[0]),ye(Xt[1]),ye(Xt[3]),ye(Xt[1]),ye(Xt[2]),ye(Xt[3])}function Jt(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function ye(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new al[i.type]().fromJSON(i)),new s(n,t.options)}},Qp={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-f),new j(u,1-g),new j(x,1-p)]:[new j(a,1-l),new j(h,1-f),new j(d,1-g),new j(m,1-p)]}};function tm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ms=class s extends il{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ne=class s extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let M=0;M<c;M++){let _=M*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,_=v+c*(p+1),b=v+1+c*(p+1),E=v+1+c*p;d.push(M,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ts=class s extends xe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/i,d=new P,g=new j;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,M=v,_=v+n+1,b=v+n+2,E=v+1;a.push(M,_,E),a.push(_,b,E)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_o=class s extends xe{constructor(t=new Rn([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(i,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let f=i.length/3,u=h.extractPoints(e),d=u.shape,g=u.holes;ci.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];ci.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=ci.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],M=v[0]+f,_=v[1]+f,b=v[2]+f;n.push(M,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return em(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function em(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Pe=class s extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new P,u=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],M=p/n,_=o+M*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),A=0;p===0&&o===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let w=y/e,R=i+w*r;f.x=-E*Math.cos(R),f.y=b,f.z=E*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(w+A,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],_=h[p][v],b=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&d.push(M,_,E),(p!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nn=class s extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new P,d=new P,g=new P;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=i;p++){let v=p/i*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let p=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,_=(i+1)*x+m;l.push(p,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var yo=class s extends xe{constructor(t=new po(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new j,h=new P,f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),p()}function m(M){h=t.getPointAt(M/e,h);let _=o.normals[M],b=o.binormals[M];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,y=Math.sin(A),w=-Math.cos(A);l.x=w*_.x+y*b.x,l.y=w*_.y+y*b.y,l.z=w*_.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=i;_++){let b=(i+1)*(M-1)+(_-1),E=(i+1)*M+(_-1),A=(i+1)*M+_,y=(i+1)*(M-1)+_;g.push(b,E,y),g.push(E,A,y)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=i;_++)c.x=M/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new al[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Tf(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Tf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Sn(s){let t={};for(let e=0;e<s.length;e++){let n=Ts(s[e]);for(let i in n)t[i]=n[i]}return t}function Tf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var mn={clone:Ts,merge:Sn},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new j().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new We().fromArray(i.value);break;case"m3":this.uniforms[n].value=new se().fromArray(i.value);break;case"m4":this.uniforms[n].value=new te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gr=class extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mo=class extends kn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},So=class extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cl=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Js(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Sh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ul=class extends es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=t,a=2*e-n;break;case Ah:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=t,l=2*n-e;break;case Ah:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+v*o[c+b]+M*o[l+b]+_*o[f+b];return r}},fl=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},dl=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends es{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(i-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let u=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*u+g*2,v=f[p],M=f[p+1],_=t*u+g*2,b=h[_],E=h[_+1],A=om(n,e,v,b,i);r[g]=_d(A,x,M,E,m)}return r}};function _d(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function rm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function om(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=_d(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=rm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Sh(t.settings)&&(n.settings={inTangents:Js(t.settings.inTangents,Array),outTangents:Js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case Eh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Sh(this.settings)&&(wf(this.settings.inTangents,t),wf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&lp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Sh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function wf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Za;var ns=class extends Un{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=jr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};ml.prototype.ValueTypeName="color";var gl=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};gl.prototype.ValueTypeName="number";var xl=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},bo=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Un{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=jr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};vl.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Af(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Af(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Af(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var _l=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new _l,xr=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=new WeakMap,yl=class extends xr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ha.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Ks.get(o);f===void 0&&(f=[],Ks.set(o,f)),f.push({onLoad:e,onError:i})}return o}let a=ir("img");function l(){h(),e&&e(this);let f=Ks.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Ks.delete(this),r.manager.itemEnd(t)}function c(f){h(),i&&i(f),Ha.remove(`image:${t}`);let u=Ks.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}Ks.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ha.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Eo=class extends xr{constructor(t){super(t)}load(t,e,n,i){let r=new yn,o=new yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},vr=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_r=class extends vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bh=new te,Rf=new P,Cf=new P,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rf),Cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new P,Oa=new _n,ai=new P,wo=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Oa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fa,Oa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new P,Pf=new j,If=new j,fn=class extends wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Pf,If),e.subVectors(If,Pf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ih=class extends To{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},Ao=class extends vr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xi=class extends wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dh=class extends To{constructor(){super(new xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var js=-90,Qs=1,Ml=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(js,Qs,t,e);i.layers=this.layers,this.add(i);let r=new fn(js,Qs,t,e);r.layers=this.layers,this.add(r);let o=new fn(js,Qs,t,e);o.layers=this.layers,this.add(o);let a=new fn(js,Qs,t,e);a.layers=this.layers,this.add(a);let l=new fn(js,Qs,t,e);l.layers=this.layers,this.add(l);let c=new fn(js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sl=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=am.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function am(){this._document.hidden===!1&&this.reset()}var jh="\\[\\]\\.:\\/",lm=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",cm="[^"+jh.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",Qh),um=/(WCOD+)?/.source.replace("WCOD",cm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),pm=new RegExp("^"+hm+um+fm+dm+"$"),mm=["material","materials","bones","map"],Lh=class{constructor(t,e,n){let i=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(t){let e=pm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Lh;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q1=new Float32Array(1);var Df=new te,Mr=class{constructor(t,e,n=0,i=1/0){this.ray=new hr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(t,e=!0,n=[]){return Nh(t,this,n,e),n.sort(Lf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Nh(t[i],this,n,e);return n.sort(Lf),n}};function Lf(s,t){return s.distance-t.distance}function Nh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Nh(r[o],t,e,!0)}}var ru=class ru{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ru.prototype.isMatrix2=!0;var Uh=ru;function tu(s,t,e,n){let i=gm(n);switch(e){case qh:return s*t;case Dl:return s*t/i.components*i.byteLength;case Ll:return s*t/i.components*i.byteLength;case ls:return s*t*2/i.components*i.byteLength;case Nl:return s*t*2/i.components*i.byteLength;case Yh:return s*t*3/i.components*i.byteLength;case Cn:return s*t*4/i.components*i.byteLength;case Ul:return s*t*4/i.components*i.byteLength;case Ho:case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Go:case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ol:case zl:return Math.max(s,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(s,8)*Math.max(t,8)/2;case Hl:case kl:case Vl:case Wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Wo:case Xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xo:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(s){switch(s){case Mn:case Gh:return{byteLength:1,components:1};case Er:case Vh:case Je:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case ei:case Cl:case Wn:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gd(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Mm(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Sm,alphahash_pars_fragment:bm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:wm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Lm,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Hm,color_fragment:km,color_pars_fragment:Gm,color_pars_vertex:Vm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:Km,colorspace_fragment:jm,colorspace_pars_fragment:Qm,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:_g,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:bg,lightprobes_pars_fragment:Eg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Ig,map_particle_pars_fragment:Dg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Ug,morphcolor_vertex:Fg,morphnormal_vertex:Og,morphtarget_pars_vertex:Bg,morphtarget_vertex:zg,normal_fragment_begin:Hg,normal_fragment_maps:kg,normal_pars_fragment:Gg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Zg,opaque_fragment:Jg,packing:Kg,premultiplied_alpha_fragment:jg,project_vertex:Qg,dithering_fragment:tx,dithering_pars_fragment:ex,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ox,shadowmask_pars_fragment:ax,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:hx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:xx,uv_pars_fragment:vx,uv_pars_vertex:_x,uv_vertex:yx,worldpos_vertex:Mx,background_vert:Sx,background_frag:bx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:wx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distance_vert:Px,distance_frag:Ix,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:Fx,meshbasic_frag:Ox,meshlambert_vert:Bx,meshlambert_frag:zx,meshmatcap_vert:Hx,meshmatcap_frag:kx,meshnormal_vert:Gx,meshnormal_frag:Vx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:qx,meshphysical_frag:Yx,meshtoon_vert:$x,meshtoon_frag:Zx,points_vert:Jx,points_frag:Kx,shadow_vert:jx,shadow_frag:Qx,sprite_vert:tv,sprite_frag:ev},Et={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Mi={basic:{uniforms:Sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Sn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Sn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Sn([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Sn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Sn([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Sn([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Sn([Et.common,Et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Sn([Et.lights,Et.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Mi.physical={uniforms:Sn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var pc={r:0,b:0,g:0},nv=new te,Vd=new se;Vd.set(-1,0,0,0,1,0,0,0,1);function iv(s,t,e,n,i,r){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(v){let M=!1,_=d(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===Bo)?(c===void 0&&(c=new ft(new Lt(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Ts(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=ue.getTransfer(_.colorSpace)!==Se,(h!==_||f!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ft(new Ne(2,2),new Te({name:"BackgroundMaterial",uniforms:Ts(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(pc,Kh(s)),e.buffers.color.setClear(pc.r,pc.g,pc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function sv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(I,D,B,L,z){let W=!1,q=f(I,L,B,D);r!==q&&(r=q,c(r.object)),W=d(I,L,B,z),W&&g(I,L,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(I,D,B,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,D,B,L){let z=L.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let q=I.isInstancedMesh===!0?I.id:0,rt=W[q];rt===void 0&&(rt={},W[q]=rt);let X=rt[B.id];X===void 0&&(X={},rt[B.id]=X);let K=X[z];return K===void 0&&(K=u(l()),X[z]=K),K}function u(I){let D=[],B=[],L=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,D,B,L){let z=r.attributes,W=D.attributes,q=0,rt=B.getAttributes();for(let X in rt)if(rt[X].location>=0){let tt=z[X],Pt=W[X];if(Pt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Pt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Pt=I.instanceColor)),tt===void 0||tt.attribute!==Pt||Pt&&tt.data!==Pt.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function g(I,D,B,L){let z={},W=D.attributes,q=0,rt=B.getAttributes();for(let X in rt)if(rt[X].location>=0){let tt=W[X];tt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let Pt={};Pt.attribute=tt,tt&&tt.data&&(Pt.data=tt.data),z[X]=Pt,q++}r.attributes=z,r.attributesNum=q,r.index=L}function x(){let I=r.newAttributes;for(let D=0,B=I.length;D<B;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let B=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),z[I]!==D&&(s.vertexAttribDivisor(I,D),z[I]=D)}function v(){let I=r.newAttributes,D=r.enabledAttributes;for(let B=0,L=D.length;B<L;B++)D[B]!==I[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function M(I,D,B,L,z,W,q){q===!0?s.vertexAttribIPointer(I,D,B,z,W):s.vertexAttribPointer(I,D,B,L,z,W)}function _(I,D,B,L){x();let z=L.attributes,W=B.getAttributes(),q=D.defaultAttributeValues;for(let rt in W){let X=W[rt];if(X.location>=0){let K=z[rt];if(K===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let tt=K.normalized,Pt=K.itemSize,bt=t.get(K);if(bt===void 0)continue;let ge=bt.buffer,re=bt.type,he=bt.bytesPerElement,$=re===s.INT||re===s.UNSIGNED_INT||K.gpuType===Cl;if(K.isInterleavedBufferAttribute){let Q=K.data,pt=Q.stride,kt=K.offset;if(Q.isInstancedInterleavedBuffer){for(let At=0;At<X.locationSize;At++)p(X.location+At,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let At=0;At<X.locationSize;At++)m(X.location+At);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let At=0;At<X.locationSize;At++)M(X.location+At,Pt/X.locationSize,re,tt,pt*he,(kt+Pt/X.locationSize*At)*he,$)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,K.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Q=0;Q<X.locationSize;Q++)M(X.location+Q,Pt/X.locationSize,re,tt,Pt*he,Pt/X.locationSize*Q*he,$)}}else if(q!==void 0){let tt=q[rt];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(X.location,tt);break;case 3:s.vertexAttrib3fv(X.location,tt);break;case 4:s.vertexAttrib4fv(X.location,tt);break;default:s.vertexAttrib1fv(X.location,tt)}}}}v()}function b(){w();for(let I in n){let D=n[I];for(let B in D){let L=D[B];for(let z in L){let W=L[z];for(let q in W)h(W[q].object),delete W[q];delete L[z]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let B in D){let L=D[B];for(let z in L){let W=L[z];for(let q in W)h(W[q].object),delete W[q];delete L[z]}}delete n[I.id]}function A(I){for(let D in n){let B=n[D];for(let L in B){let z=B[L];if(z[I.id]===void 0)continue;let W=z[I.id];for(let q in W)h(W[q].object),delete W[q];delete z[I.id]}}}function y(I){for(let D in n){let B=n[D],L=I.isInstancedMesh===!0?I.id:0,z=B[L];if(z!==void 0){for(let W in z){let q=z[W];for(let rt in q)h(q[rt].object),delete q[rt];delete z[W]}delete B[L],Object.keys(B).length===0&&delete n[D]}}}function w(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function rv(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ov(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mn&&A!==Wn&&!y&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:E}}function av(s){let t=this,e=null,n=0,i=!1,r=!1,o=new An,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,M=v*4,_=p.clippingState||null;l.value=_,_=h(g,u,M,d);for(let b=0;b!==M;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==x;++M,_+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ar=4,lv=6,cv=20,hv=256,qo=new xi,Md=new Yt,ou=null,au=0,lu=0,cu=!1,uv=new P,ws=new P,Cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=uv}=r;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Je,format:Cn,colorSpace:Qr,depthBuffer:!1},i=Sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fv(r)),this._blurMaterial=pv(r,t,e),this._ggxMaterial=dv(r,t,e)}return i}_compileMaterial(t){let e=new ft(new xe,t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i,r){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Md),f.toneMapping=ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Lt,new be({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Md),p=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;wr(i,_*b,M>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===os||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ar?n-g+Ar:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,wr(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(a,qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,wr(t,m,p,3*x,2*x),i.setRenderTarget(t),i.render(a,qo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Ar?i-this._lodMax+Ar:0),u=4*(this._cubeSize-h);wr(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,qo)}};function fv(s){let t=[],e=[],n=s,i=s-Ar+1+lv;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,M=p>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(_,d*u*p);for(let b=0;b<u;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?ws.set(1,A,E):p===1?ws.set(-E,1,-A):p===2?ws.set(-E,A,1):p===3?ws.set(-1,A,-E):p===4?ws.set(-E,-1,A):ws.set(E,A,-1),ws.toArray(x,(p*u+b)*d)}}let m=new xe;m.setAttribute("position",new Le(g,d)),m.setAttribute("outputDirection",new Le(x,d)),e.push(new ft(m,null)),n>Ar&&n--}return{lodMeshes:e,sizeLods:t}}function Sd(s,t,e){let n=new Be(s,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dv(s,t,e){return new Te({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function pv(s,t,e){return new Te({name:"SphericalGaussianBlur",defines:{SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function bd(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function Ed(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Lt(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Qe});r.uniforms.tEquirect.value=e;let o=new ft(i,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=dn),new Ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function mv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===wl||d===Al)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new gc(g.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===wl||d===Al,x=d===os||d===Es;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Cr(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Cr(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===wl?u.mapping=os:d===Al&&(u.mapping=Es),u}function l(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function gv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function xv(s,t,e,n){let i={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let M=0,_=v.length;M<_;M+=3){let b=v[M+0],E=v[M+1],A=v[M+2];u.push(b,E,E,A,A,b)}}else{let v=g.array;x=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let b=M+0,E=M+1,A=M+2;u.push(b,E,E,A,A,b)}}let m=new(g.count>=65535?ro:so)(u,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function vv(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _v(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yv(s,t,e){let n=new WeakMap,i=new We;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*f),A=new no(E,_,b,f);A.type=Wn,A.needsUpdate=!0;let y=M*4;for(let R=0;R<f;R++){let I=m[R],D=p[R],B=v[R],L=_*b*4*R;for(let z=0;z<I.count;z++){let W=z*y;d===!0&&(i.fromBufferAttribute(I,z),E[L+W+0]=i.x,E[L+W+1]=i.y,E[L+W+2]=i.z,E[L+W+3]=0),g===!0&&(i.fromBufferAttribute(D,z),E[L+W+4]=i.x,E[L+W+5]=i.y,E[L+W+6]=i.z,E[L+W+7]=0),x===!0&&(i.fromBufferAttribute(B,z),E[L+W+8]=i.x,E[L+W+9]=i.y,E[L+W+10]=i.z,E[L+W+11]=B.itemSize===4?i.w:1)}}u={count:f,texture:A,size:new j(_,b)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Mv(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Sv={[Do]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[rs]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[Uo]:"CUSTOM_TONE_MAPPING"};function bv(s,t,e,n,i,r){let o=new Be(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xe;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ft(c,h),u=new xi(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],M=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let E=0;E<v.length;E++){let A=v[E];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;let b=o.width,E=o.height;v.length>0&&a===null&&(a=new Be(b,E,{type:Je,depthBuffer:!1,stencilBuffer:!1}),l=new Be(b,E,{type:Je,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let y=v[A];y.setSize&&y.setSize(b,E)}},this.begin=function(_,b){if(x||_.toneMapping===ti&&v.length===0)return!1;if(p=b,b!==null){let E=b.width,A=b.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return M===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=ti,!0},this.hasRenderPass=function(){return M},this.end=function(_,b){_.toneMapping=m,x=!0;let E=o,A=a;for(let y=0;y<v.length;y++){let w=v[y];w.enabled!==!1&&(w.render(_,A,E,b),w.needsSwap!==!1&&(E=A,A=A===a?l:a))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},ue.getTransfer(d)===Se&&(h.defines.SRGB_TRANSFER="");let y=Sv[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wd=new yn,fu=new pi(1,1),Xd=new no,qd=new Qa,Yd=new lo,Td=[],wd=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function Pr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Td[i];if(r===void 0&&(r=new Float32Array(i),Td[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function an(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ln(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vc(s,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Tv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2fv(this.addr,t),ln(e,t)}}function wv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;s.uniform3fv(this.addr,t),ln(e,t)}}function Av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4fv(this.addr,t),ln(e,t)}}function Rv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Cd.set(n),s.uniformMatrix2fv(this.addr,!1,Cd),ln(e,n)}}function Cv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Rd.set(n),s.uniformMatrix3fv(this.addr,!1,Rd),ln(e,n)}}function Pv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Ad.set(n),s.uniformMatrix4fv(this.addr,!1,Ad),ln(e,n)}}function Iv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Dv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2iv(this.addr,t),ln(e,t)}}function Lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3iv(this.addr,t),ln(e,t)}}function Nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4iv(this.addr,t),ln(e,t)}}function Uv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Fv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2uiv(this.addr,t),ln(e,t)}}function Ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3uiv(this.addr,t),ln(e,t)}}function Bv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4uiv(this.addr,t),ln(e,t)}}function zv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?dc:fc,r=fu):r=Wd,e.setTexture2D(t||r,i)}function Hv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qd,i)}function kv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yd,i)}function Gv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xd,i)}function Vv(s){switch(s){case 5126:return Ev;case 35664:return Tv;case 35665:return wv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Wv(s,t){s.uniform1fv(this.addr,t)}function Xv(s,t){let e=Pr(t,this.size,2);s.uniform2fv(this.addr,e)}function qv(s,t){let e=Pr(t,this.size,3);s.uniform3fv(this.addr,e)}function Yv(s,t){let e=Pr(t,this.size,4);s.uniform4fv(this.addr,e)}function $v(s,t){let e=Pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Zv(s,t){let e=Pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Jv(s,t){let e=Pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kv(s,t){s.uniform1iv(this.addr,t)}function jv(s,t){s.uniform2iv(this.addr,t)}function Qv(s,t){s.uniform3iv(this.addr,t)}function t_(s,t){s.uniform4iv(this.addr,t)}function e_(s,t){s.uniform1uiv(this.addr,t)}function n_(s,t){s.uniform2uiv(this.addr,t)}function i_(s,t){s.uniform3uiv(this.addr,t)}function s_(s,t){s.uniform4uiv(this.addr,t)}function r_(s,t,e){let n=this.cache,i=t.length,r=vc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=fu:o=Wd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function o_(s,t,e){let n=this.cache,i=t.length,r=vc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||qd,r[o])}function a_(s,t,e){let n=this.cache,i=t.length,r=vc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yd,r[o])}function l_(s,t,e){let n=this.cache,i=t.length,r=vc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Xd,r[o])}function c_(s){switch(s){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return $v;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Kv;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return l_}}var du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vv(e.type)}},pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c_(e.type)}},mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Pd(s,t){s.seq.push(t),s.map[t.id]=t}function h_(s,t,e){let n=s.name,i=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pd(e,c===void 0?new du(a,s,t):new pu(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new mu(a),Pd(e,f)),e=f}}}var Rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);h_(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Id(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var u_=37297,f_=0;function d_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Dd=new se;function p_(s){ue._getMatrix(Dd,ue.workingColorSpace,s);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case to:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ld(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+d_(s.getShaderSource(t),a)}else return r}function m_(s,t){let e=p_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var g_={[Do]:"Linear",[Lo]:"Reinhard",[No]:"Cineon",[rs]:"ACESFilmic",[Fo]:"AgX",[Oo]:"Neutral",[Uo]:"Custom"};function x_(s,t){let e=g_[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new P;function v_(){ue.getLuminanceCoefficients(mc);let s=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function y_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function $o(s){return s!==""}function Nd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ud(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(s){return s.replace(S_,E_)}var b_=new Map;function E_(s,t){let e=ce[t];if(e===void 0){let n=b_.get(t);if(n!==void 0)e=ce[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(s){return s.replace(T_,w_)}function w_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Od(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var A_={[Ss]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function R_(s){return A_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C_={[os]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function P_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":C_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var I_={[Es]:"ENVMAP_MODE_REFRACTION"};function D_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":I_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var L_={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};function N_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":L_[s.combine]||"ENVMAP_BLENDING_NONE"}function U_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function F_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=R_(e),c=P_(e),h=D_(e),f=N_(e),u=U_(e),d=__(e),g=y_(r),x=i.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($o).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($o).join(`
`),p.length>0&&(p+=`
`)):(m=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),p=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?ce.tonemapping_pars_fragment:"",e.toneMapping!==ti?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,m_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($o).join(`
`)),o=gu(o),o=Nd(o,e),o=Ud(o,e),a=gu(a),a=Nd(a,e),a=Ud(a,e),o=Fd(o),a=Fd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+o,_=v+p+a,b=Id(i,i.VERTEX_SHADER,M),E=Id(i,i.FRAGMENT_SHADER,_);i.attachShader(x,b),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(b)||"",L=i.getShaderInfoLog(E)||"",z=D.trim(),W=B.trim(),q=L.trim(),rt=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,E);else{let K=Ld(i,b,"vertex"),tt=Ld(i,E,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+K+`
`+tt)}else z!==""?Qt("WebGLProgram: Program Info Log:",z):(W===""||q==="")&&(X=!1);X&&(I.diagnostics={runnable:rt,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(b),i.deleteShader(E),y=new Rr(i,x),w=M_(i,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,u_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=f_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var O_=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vu(t),e.set(t,n)),n}},vu=class{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}};function B_(s){return s===ls||s===Wo||s===Xo}function z_(s,t,e,n,i,r){let o=new or,a=new xu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,R,I,D,B){let L=I.fog,z=D.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||W,q),X=rt&&rt.mapping===Bo?rt.image.height:null,K=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=tt!==void 0?tt.length:0,bt=0;z.morphAttributes.position!==void 0&&(bt=1),z.morphAttributes.normal!==void 0&&(bt=2),z.morphAttributes.color!==void 0&&(bt=3);let ge,re,he,$;if(K){let ze=Mi[K];ge=ze.vertexShader,re=ze.fragmentShader}else{ge=y.vertexShader,re=y.fragmentShader;let ze=a.getVertexShaderStage(y),we=a.getFragmentShaderStage(y);a.update(y,ze,we),he=ze.id,$=we.id}let Q=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Jt=!!y.map,ye=!!y.matcap,nt=!!rt,at=!!y.aoMap,lt=!!y.lightMap,ht=!!y.bumpMap&&y.wireframe===!1,dt=!!y.normalMap,Xt=!!y.displacementMap,Gt=!!y.emissiveMap,Kt=!!y.metalnessMap,ne=!!y.roughnessMap,U=y.anisotropy>0,_e=y.clearcoat>0,ae=y.dispersion>0,C=y.retroreflectivity>0,S=y.iridescence>0,H=y.sheen>0,k=y.transmission>0,Z=U&&!!y.anisotropyMap,ut=_e&&!!y.clearcoatMap,mt=_e&&!!y.clearcoatNormalMap,J=_e&&!!y.clearcoatRoughnessMap,it=S&&!!y.iridescenceMap,vt=S&&!!y.iridescenceThicknessMap,zt=H&&!!y.sheenColorMap,xt=H&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Ut=!!y.specularColorMap,Vt=!!y.specularIntensityMap,ie=k&&!!y.transmissionMap,O=k&&!!y.thicknessMap,Mt=!!y.gradientMap,et=!!y.alphaMap,St=y.alphaTest>0,Rt=!!y.alphaHash,ot=!!y.extensions,Wt=ti;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Wt=s.toneMapping);let Bt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:re,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:ye,envMap:nt,envMapMode:nt&&rt.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:lt,bumpMap:ht,normalMap:dt,displacementMap:Xt,emissiveMap:Gt,normalMapObjectSpace:dt&&y.normalMapType===ed,normalMapTangentSpace:dt&&y.normalMapType===Tr,packedNormalMap:dt&&y.normalMapType===Tr&&B_(y.normalMap.format),metalnessMap:Kt,roughnessMap:ne,anisotropy:U,anisotropyMap:Z,clearcoat:_e,clearcoatMap:ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:J,dispersion:ae,retroreflection:C,iridescence:S,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Ut,specularIntensityMap:Vt,transmission:k,transmissionMap:ie,thicknessMap:O,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===br&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:St,alphaHash:Rt,combine:y.combine,mapUv:Jt&&g(y.map.channel),aoMapUv:at&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:ht&&g(y.bumpMap.channel),normalMapUv:dt&&g(y.normalMap.channel),displacementMapUv:Xt&&g(y.displacementMap.channel),emissiveMapUv:Gt&&g(y.emissiveMap.channel),metalnessMapUv:Kt&&g(y.metalnessMap.channel),roughnessMapUv:ne&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(y.sheenRoughnessMap.channel),specularMapUv:gt&&g(y.specularMap.channel),specularColorMapUv:Ut&&g(y.specularColorMap.channel),specularIntensityMapUv:Vt&&g(y.specularIntensityMap.channel),transmissionMapUv:ie&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:et&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||U),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Jt||et),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&ue.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&ue.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let w=d[y.type],R;if(w){let I=Mi[w];R=mn.clone(I.uniforms)}else R=y.uniforms;return R}function _(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new F_(s,w,y,i),c.push(R),h.set(w,R)),R}function b(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function H_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function k_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Bd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,x,m,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let M=a(u,d,g,x,m,p);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):e.push(M)}function c(u,d,g,x,m,p){let v=a(u,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||k_),n.length>1&&n.sort(d||Bd),i.length>1&&i.sort(d||Bd)}function f(){for(let u=t,d=s.length;u<d;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function G_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new zd,s.set(n,[o])):i>=r.length?(o=new zd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function V_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Yt};break;case"SpotLight":e={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function W_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var X_=0;function q_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Y_(s){let t=new V_,e=W_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new te,o=new te;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,M=0,_=0,b=0,E=0,A=0,y=0,w=0,R=0;c.sort(q_);for(let D=0,B=c.length;D<B;D++){let L=c[D],z=L.color,W=L.intensity,q=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*W,f+=z.g*W,u+=z.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],W);R++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,tt=e.get(L);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=rt;let Pt=K.getViewportCount();for(let bt=0;bt<Pt;bt++)n.sunShadowMatrix[x+bt]=K.getMatrix(bt),n.sunShadowCascade[x+bt]=K._cascadeData[bt];x+=Pt,g++}n.sun[d]=X,d++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,tt=e.get(L);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(W),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;let K=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[v]=K.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=rt,A++}v++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(z).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=X,M++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,tt=e.get(L);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[_]=X,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==y||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=y,I.numLightProbes=R,n.version=X_++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let _=c[v];if(_.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Hd(s){let t=new Y_(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function $_(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Hd(s),t.set(i,[a])):r>=o.length?(a=new Hd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],j_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],kd=new te,Yo=new P,uu=new P;function Q_(s,t,e){let n=new fr,i=new j,r=new j,o=new We,a=new cl,l=new hl,c={},h=e.maxTextureSize,f={[ss]:pn,[pn]:ss,[Xe]:Xe},u=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Ff&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Qe),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){let W=E[L],q=W.shadow;if(q===void 0){Qt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let rt=q.getFrameExtents();i.multiply(rt),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,q.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Sr){if(W.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Be(i.x,i.y,{format:ls,type:Je,minFilter:dn,magFilter:dn,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new pi(i.x,i.y,Wn),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=hi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=je,q.map.depthTexture.magFilter=je}else W.isPointLight?(q.map=new gc(i.x),q.map.depthTexture=new nl(i.x,ei)):(q.map=new Be(i.x,i.y),q.map.depthTexture=new pi(i.x,i.y,ei)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=hi,this.type===Ss?(q.map.depthTexture.compareFunction=X?dc:fc,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=je,q.map.depthTexture.magFilter=je);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);let K=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,y);for(let tt=0;tt<K;tt++){let Pt=q.getCamera(tt);if(W.isPointLight){let bt=q.camera,ge=q.matrix,re=W.distance||bt.far;re!==bt.far&&(bt.far=re,bt.updateProjectionMatrix()),Yo.setFromMatrixPosition(W.matrixWorld),bt.position.copy(Yo),uu.copy(bt.position),uu.add(K_[tt]),bt.up.copy(j_[tt]),bt.lookAt(uu),bt.updateMatrixWorld(),ge.makeTranslation(-Yo.x,-Yo.y,-Yo.z),kd.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(kd,bt.coordinateSystem,bt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,tt),s.clear();else{tt===0&&(s.setRenderTarget(q.map),s.clear());let bt=q.getViewport(tt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),D.viewport(o)}n=q.getFrustum(tt),_(A,y,Pt,W,this.type)}q.isPointLightShadow!==!0&&this.type===Sr&&v(q,y),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,R,I)};function v(E,A){let y=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Be(i.x,i.y,{format:ls,type:Je}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,y,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,y,d,x,null)}function M(E,A,y,w){let R=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,B=A.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let z=L[B];z===void 0&&(z=R.clone(),L[B]=z,A.addEventListener("dispose",b)),R=z}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Sr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=y}return R}function _(E,A,y,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Sr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let B=t.update(E),L=E.material;if(Array.isArray(L)){let z=B.groups;for(let W=0,q=z.length;W<q;W++){let rt=z[W],X=L[rt.materialIndex];if(X&&X.visible){let K=M(E,X,w,R);E.onBeforeShadow(s,E,A,y,B,K,rt),s.renderBufferDirect(y,null,B,K,E,rt),E.onAfterShadow(s,E,A,y,B,K,rt)}}}else if(L.visible){let z=M(E,L,w,R);E.onBeforeShadow(s,E,A,y,B,z,null),s.renderBufferDirect(y,null,B,z,E,null),E.onAfterShadow(s,E,A,y,B,z,null)}}let D=E.children;for(let B=0,L=D.length;B<L;B++)_(D[B],A,y,w,R)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let w=c[y],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function t1(s,t){function e(){let O=!1,Mt=new We,et=null,St=new We(0,0,0,0);return{setMask:function(Rt){et!==Rt&&!O&&(s.colorMask(Rt,Rt,Rt,Rt),et=Rt)},setLocked:function(Rt){O=Rt},setClear:function(Rt,ot,Wt,Bt,ze){ze===!0&&(Rt*=Bt,ot*=Bt,Wt*=Bt),Mt.set(Rt,ot,Wt,Bt),St.equals(Mt)===!1&&(s.clearColor(Rt,ot,Wt,Bt),St.copy(Mt))},reset:function(){O=!1,et=null,St.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,et=null,St=null,Rt=null;return{setReversed:function(ot){if(Mt!==ot){let Wt=t.get("EXT_clip_control");ot?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ot;let Bt=Rt;Rt=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(ot){ot?Q(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(ot){et!==ot&&!O&&(s.depthMask(ot),et=ot)},setFunc:function(ot){if(Mt&&(ot=fd[ot]),St!==ot){switch(ot){case ka:s.depthFunc(s.NEVER);break;case Ga:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case er:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case Xa:s.depthFunc(s.GEQUAL);break;case qa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=ot}},setLocked:function(ot){O=ot},setClear:function(ot){Rt!==ot&&(Rt=ot,Mt&&(ot=1-ot),s.clearDepth(ot))},reset:function(){O=!1,et=null,St=null,Rt=null,Mt=!1}}}function i(){let O=!1,Mt=null,et=null,St=null,Rt=null,ot=null,Wt=null,Bt=null,ze=null;return{setTest:function(we){O||(we?Q(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(we){Mt!==we&&!O&&(s.stencilMask(we),Mt=we)},setFunc:function(we,Zn,ri){(et!==we||St!==Zn||Rt!==ri)&&(s.stencilFunc(we,Zn,ri),et=we,St=Zn,Rt=ri)},setOp:function(we,Zn,ri){(ot!==we||Wt!==Zn||Bt!==ri)&&(s.stencilOp(we,Zn,ri),ot=we,Wt=Zn,Bt=ri)},setLocked:function(we){O=we},setClear:function(we){ze!==we&&(s.clearStencil(we),ze=we)},reset:function(){O=!1,Mt=null,et=null,St=null,Rt=null,ot=null,Wt=null,Bt=null,ze=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,M=null,_=null,b=null,E=null,A=null,y=new Yt(0,0,0),w=0,R=!1,I=null,D=null,B=null,L=null,z=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,rt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=rt>=2);let K=null,tt={},Pt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),ge=new We().fromArray(Pt),re=new We().fromArray(bt);function he(O,Mt,et,St){let Rt=new Uint8Array(4),ot=s.createTexture();s.bindTexture(O,ot),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<et;Wt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Mt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ot}let $={};$[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(er),ht(!1),dt(Fh),Q(s.CULL_FACE),at(Qe);function Q(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function kt(O,Mt){return u[O]!==Mt?(s.bindFramebuffer(O,Mt),u[O]=Mt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Mt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(O,Mt){let et=g,St=!1;if(O){et=d.get(Mt),et===void 0&&(et=[],d.set(Mt,et));let Rt=O.textures;if(et.length!==Rt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Wt=Rt.length;ot<Wt;ot++)et[ot]=s.COLOR_ATTACHMENT0+ot;et.length=Rt.length,St=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,St=!0);St&&s.drawBuffers(et)}function Jt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let ye={[Vn]:s.FUNC_ADD,[Of]:s.FUNC_SUBTRACT,[Bf]:s.FUNC_REVERSE_SUBTRACT};ye[zf]=s.MIN,ye[Hf]=s.MAX;let nt={[bs]:s.ZERO,[kf]:s.ONE,[Gf]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[qf]:s.SRC_ALPHA_SATURATE,[Io]:s.DST_COLOR,[Po]:s.DST_ALPHA,[Vf]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[Xf]:s.ONE_MINUS_DST_COLOR,[Wf]:s.ONE_MINUS_DST_ALPHA,[Yf]:s.CONSTANT_COLOR,[$f]:s.ONE_MINUS_CONSTANT_COLOR,[Zf]:s.CONSTANT_ALPHA,[Jf]:s.ONE_MINUS_CONSTANT_ALPHA};function at(O,Mt,et,St,Rt,ot,Wt,Bt,ze,we){if(O===Qe){m===!0&&(pt(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),O!==El){if(O!==p||we!==R){if((v!==Vn||b!==Vn)&&(s.blendEquation(s.FUNC_ADD),v=Vn,b=Vn),we)switch(O){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",O);break}else switch(O){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Oh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",O);break}M=null,_=null,E=null,A=null,y.set(0,0,0),w=0,p=O,R=we}return}Rt=Rt||Mt,ot=ot||et,Wt=Wt||St,(Mt!==v||Rt!==b)&&(s.blendEquationSeparate(ye[Mt],ye[Rt]),v=Mt,b=Rt),(et!==M||St!==_||ot!==E||Wt!==A)&&(s.blendFuncSeparate(nt[et],nt[St],nt[ot],nt[Wt]),M=et,_=St,E=ot,A=Wt),(Bt.equals(y)===!1||ze!==w)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ze),y.copy(Bt),w=ze),p=O,R=!1}function lt(O,Mt){O.side===Xe?pt(s.CULL_FACE):Q(s.CULL_FACE);let et=O.side===pn;Mt&&(et=!et),ht(et),O.blending===br&&O.transparent===!1?at(Qe):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let St=O.stencilWrite;a.setTest(St),St&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function dt(O){O!==Nf?(Q(s.CULL_FACE),O!==D&&(O===Fh?s.cullFace(s.BACK):O===Uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),D=O}function Xt(O){O!==B&&(q&&s.lineWidth(O),B=O)}function Gt(O,Mt,et){O?(Q(s.POLYGON_OFFSET_FILL),(L!==Mt||z!==et)&&(L=Mt,z=et,o.getReversed()&&(Mt=-Mt),s.polygonOffset(Mt,et))):pt(s.POLYGON_OFFSET_FILL)}function Kt(O){O?Q(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function ne(O){O===void 0&&(O=s.TEXTURE0+W-1),K!==O&&(s.activeTexture(O),K=O)}function U(O,Mt,et){et===void 0&&(K===null?et=s.TEXTURE0+W-1:et=K);let St=tt[et];St===void 0&&(St={type:void 0,texture:void 0},tt[et]=St),(St.type!==O||St.texture!==Mt)&&(K!==et&&(s.activeTexture(et),K=et),s.bindTexture(O,Mt||$[O]),St.type=O,St.texture=Mt)}function _e(){let O=tt[K];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ae(){try{s.compressedTexImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function S(){try{s.texSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function H(){try{s.texSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function ut(){try{s.texStorage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function mt(){try{s.texStorage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function J(){try{s.texImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function it(){try{s.texImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function vt(O){return f[O]!==void 0?f[O]:s.getParameter(O)}function zt(O,Mt){f[O]!==Mt&&(s.pixelStorei(O,Mt),f[O]=Mt)}function xt(O){ge.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ge.copy(O))}function gt(O){re.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Ut(O,Mt){let et=c.get(Mt);et===void 0&&(et=new WeakMap,c.set(Mt,et));let St=et.get(O);St===void 0&&(St=s.getUniformBlockIndex(Mt,O.name),et.set(O,St))}function Vt(O,Mt){let St=c.get(Mt).get(O);l.get(Mt)!==St&&(s.uniformBlockBinding(Mt,St,O.__bindingPointIndex),l.set(Mt,St))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,tt={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,M=null,_=null,b=null,E=null,A=null,y=new Yt(0,0,0),w=0,R=!1,I=null,D=null,B=null,L=null,z=null,ge.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:pt,bindFramebuffer:kt,drawBuffers:At,useProgram:Jt,setBlending:at,setMaterial:lt,setFlipSided:ht,setCullFace:dt,setLineWidth:Xt,setPolygonOffset:Gt,setScissorTest:Kt,activeTexture:ne,bindTexture:U,unbindTexture:_e,compressedTexImage2D:ae,compressedTexImage3D:C,texImage2D:J,texImage3D:it,pixelStorei:zt,getParameter:vt,updateUBOMapping:Ut,uniformBlockBinding:Vt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:xt,viewport:gt,reset:ie}}function e1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return g?new OffscreenCanvas(C,S):ir("canvas")}function m(C,S,H){let k=1,Z=ae(C);if((Z.width>H||Z.height>H)&&(k=H/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(k*Z.width),mt=Math.floor(k*Z.height);u===void 0&&(u=x(ut,mt));let J=S?x(ut,mt):u;return J.width=ut,J.height=mt,J.getContext("2d").drawImage(C,0,0,ut,mt),Qt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+mt+")."),J}else return"data"in C&&Qt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,S,H,k,Z,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;k&&(mt=t.get("EXT_texture_norm16"),mt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8),H===s.UNSIGNED_SHORT&&mt&&(J=mt.R16_EXT),H===s.SHORT&&mt&&(J=mt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),S===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8),H===s.UNSIGNED_SHORT&&mt&&(J=mt.RG16_EXT),H===s.SHORT&&mt&&(J=mt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),S===s.RGB&&(H===s.UNSIGNED_SHORT&&mt&&(J=mt.RGB16_EXT),H===s.SHORT&&mt&&(J=mt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),S===s.RGBA){let it=ut?to:ue.getTransfer(Z);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=it===Se?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&mt&&(J=mt.RGBA16_EXT),H===s.SHORT&&mt&&(J=mt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(C,S){let H;return C?S===null||S===ei||S===as?H=s.DEPTH24_STENCIL8:S===Wn?H=s.DEPTH32F_STENCIL8:S===Er&&(H=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===as?H=s.DEPTH_COMPONENT24:S===Wn?H=s.DEPTH_COMPONENT32F:S===Er&&(H=s.DEPTH_COMPONENT16),H}function E(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function y(C){let S=C.target;S.removeEventListener("dispose",y),I(S)}function w(C){let S=n.get(C);if(S.__webglInit===void 0)return;let H=C.source,k=d.get(H);if(k){let Z=k[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(k).length===0&&d.delete(H)}n.remove(C)}function R(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let H=C.source,k=d.get(H);delete k[S.__cacheKey],o.memory.textures--}function I(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let Z=0;Z<S.__webglFramebuffer[k].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[k][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)s.deleteFramebuffer(S.__webglFramebuffer[k]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let k=0,Z=H.length;k<Z;k++){let ut=n.get(H[k]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(H[k])}n.remove(C)}let D=0;function B(){D=0}function L(){return D}function z(C){D=C}function W(){let C=D;return C>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function q(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function rt(C,S){let H=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let k=C.image;if(k===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function X(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){pt(H,C,S);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function K(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){pt(H,C,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function tt(C,S){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){kt(H,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let Pt={[ve]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[$a]:s.MIRRORED_REPEAT},bt={[je]:s.NEAREST,[Qf]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Rl]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},ge={[id]:s.NEVER,[ld]:s.ALWAYS,[sd]:s.LESS,[fc]:s.LEQUAL,[rd]:s.EQUAL,[dc]:s.GEQUAL,[od]:s.GREATER,[ad]:s.NOTEQUAL};function re(C,S){if(S.type===Wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Rl||S.magFilter===zo||S.magFilter===vi||S.minFilter===dn||S.minFilter===Rl||S.minFilter===zo||S.minFilter===vi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Pt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Pt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Pt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,bt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,bt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==zo&&S.minFilter!==vi||S.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function he(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let k=S.source,Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));let ut=q(S);if(ut!==C.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[ut].usedTimes++;let mt=Z[C.__cacheKey];mt!==void 0&&(Z[C.__cacheKey].usedTimes--,mt.usedTimes===0&&R(S)),C.__cacheKey=ut,C.__webglTexture=Z[ut].texture}return H}function $(C,S,H){return Math.floor(Math.floor(C/H)/S)}function Q(C,S,H,k){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,H,k,S.data);else{ut.sort((zt,xt)=>zt.start-xt.start);let mt=0;for(let zt=1;zt<ut.length;zt++){let xt=ut[mt],gt=ut[zt],Ut=xt.start+xt.count,Vt=$(gt.start,S.width,4),ie=$(xt.start,S.width,4);gt.start<=Ut+1&&Vt===ie&&$(gt.start+gt.count-1,S.width,4)===Vt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++mt,ut[mt]=gt)}ut.length=mt+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let zt=0,xt=ut.length;zt<xt;zt++){let gt=ut[zt],Ut=Math.floor(gt.start/4),Vt=Math.ceil(gt.count/4),ie=Ut%S.width,O=Math.floor(Ut/S.width),Mt=Vt,et=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,ie,O,Mt,et,H,k,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function pt(C,S,H){let k=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=s.TEXTURE_3D);let Z=he(C,S),ut=S.source;e.bindTexture(k,C.__webglTexture,s.TEXTURE0+H);let mt=n.get(ut);if(ut.version!==mt.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let et=ue.getPrimaries(ue.workingColorSpace),St=S.colorSpace===zi?null:ue.getPrimaries(S.colorSpace),Rt=S.colorSpace===zi||et===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let it=m(S.image,!1,i.maxTextureSize);it=_e(S,it);let vt=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),xt=_(S.internalFormat,vt,zt,S.normalized,S.colorSpace,S.isVideoTexture);re(k,S);let gt,Ut=S.mipmaps,Vt=S.isVideoTexture!==!0,ie=mt.__version===void 0||Z===!0,O=ut.dataReady,Mt=E(S,it);if(S.isDepthTexture)xt=b(S.format===_i,S.type),ie&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,xt,it.width,it.height,0,vt,zt,null));else if(S.isDataTexture)if(Ut.length>0){Vt&&ie&&e.texStorage2D(s.TEXTURE_2D,Mt,xt,Ut[0].width,Ut[0].height);for(let et=0,St=Ut.length;et<St;et++)gt=Ut[et],Vt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,vt,zt,gt.data):e.texImage2D(s.TEXTURE_2D,et,xt,gt.width,gt.height,0,vt,zt,gt.data);S.generateMipmaps=!1}else Vt?(ie&&e.texStorage2D(s.TEXTURE_2D,Mt,xt,it.width,it.height),O&&Q(S,it,vt,zt)):e.texImage2D(s.TEXTURE_2D,0,xt,it.width,it.height,0,vt,zt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,xt,Ut[0].width,Ut[0].height,it.depth);for(let et=0,St=Ut.length;et<St;et++)if(gt=Ut[et],S.format!==Cn)if(vt!==null)if(Vt){if(O)if(S.layerUpdates.size>0){let Rt=tu(gt.width,gt.height,S.format,S.type);for(let ot of S.layerUpdates){let Wt=gt.data.subarray(ot*Rt/gt.data.BYTES_PER_ELEMENT,(ot+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,ot,gt.width,gt.height,1,vt,Wt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,vt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,xt,gt.width,gt.height,it.depth,0,gt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,vt,zt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,xt,gt.width,gt.height,it.depth,0,vt,zt,gt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Vt&&ie&&e.texStorage2D(s.TEXTURE_2D,Mt,xt,Ut[0].width,Ut[0].height);for(let et=0,St=Ut.length;et<St;et++)gt=Ut[et],S.format!==Cn?vt!==null?Vt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,xt,gt.width,gt.height,0,gt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,vt,zt,gt.data):e.texImage2D(s.TEXTURE_2D,et,xt,gt.width,gt.height,0,vt,zt,gt.data)}else if(S.isDataArrayTexture)if(Vt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,xt,it.width,it.height,it.depth),O)if(S.layerUpdates.size>0){let et=tu(it.width,it.height,S.format,S.type);for(let St of S.layerUpdates){let Rt=it.data.subarray(St*et/it.data.BYTES_PER_ELEMENT,(St+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,it.width,it.height,1,vt,zt,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,zt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,vt,zt,it.data);else if(S.isData3DTexture)Vt?(ie&&e.texStorage3D(s.TEXTURE_3D,Mt,xt,it.width,it.height,it.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,zt,it.data)):e.texImage3D(s.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,vt,zt,it.data);else if(S.isFramebufferTexture){if(ie)if(Vt)e.texStorage2D(s.TEXTURE_2D,Mt,xt,it.width,it.height);else{let et=it.width,St=it.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,xt,et,St,0,vt,zt,null),et>>=1,St>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let et=s.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),f.add(S),et.onpaint=St=>{let Rt=St.changedElements;for(let ot of f)Rt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let Rt=s.RGBA,ot=s.RGBA,Wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,ot,Wt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Vt&&ie){let et=ae(Ut[0]);e.texStorage2D(s.TEXTURE_2D,Mt,xt,et.width,et.height)}for(let et=0,St=Ut.length;et<St;et++)gt=Ut[et],Vt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,vt,zt,gt):e.texImage2D(s.TEXTURE_2D,et,xt,vt,zt,gt);S.generateMipmaps=!1}else if(Vt){if(ie){let et=ae(it);e.texStorage2D(s.TEXTURE_2D,Mt,xt,et.width,et.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,zt,it)}else e.texImage2D(s.TEXTURE_2D,0,xt,vt,zt,it);p(S)&&v(k),mt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function kt(C,S,H){if(S.image.length!==6)return;let k=he(C,S),Z=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);let ut=n.get(Z);if(Z.version!==ut.__version||k===!0){e.activeTexture(s.TEXTURE0+H);let mt=ue.getPrimaries(ue.workingColorSpace),J=S.colorSpace===zi?null:ue.getPrimaries(S.colorSpace),it=S.colorSpace===zi||mt===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,zt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let ot=0;ot<6;ot++)!vt&&!zt?xt[ot]=m(S.image[ot],!0,i.maxCubemapSize):xt[ot]=zt?S.image[ot].image:S.image[ot],xt[ot]=_e(S,xt[ot]);let gt=xt[0],Ut=r.convert(S.format,S.colorSpace),Vt=r.convert(S.type),ie=_(S.internalFormat,Ut,Vt,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,Mt=ut.__version===void 0||k===!0,et=Z.dataReady,St=E(S,gt);re(s.TEXTURE_CUBE_MAP,S);let Rt;if(vt){O&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ie,gt.width,gt.height);for(let ot=0;ot<6;ot++){Rt=xt[ot].mipmaps;for(let Wt=0;Wt<Rt.length;Wt++){let Bt=Rt[Wt];S.format!==Cn?Ut!==null?O?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,0,0,Bt.width,Bt.height,Ut,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,ie,Bt.width,Bt.height,0,Bt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,0,0,Bt.width,Bt.height,Ut,Vt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,ie,Bt.width,Bt.height,0,Ut,Vt,Bt.data)}}}else{if(Rt=S.mipmaps,O&&Mt){Rt.length>0&&St++;let ot=ae(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ie,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(zt){O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,xt[ot].width,xt[ot].height,Ut,Vt,xt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,xt[ot].width,xt[ot].height,0,Ut,Vt,xt[ot].data);for(let Wt=0;Wt<Rt.length;Wt++){let ze=Rt[Wt].image[ot].image;O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,0,0,ze.width,ze.height,Ut,Vt,ze.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,ie,ze.width,ze.height,0,Ut,Vt,ze.data)}}else{O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ut,Vt,xt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,Ut,Vt,xt[ot]);for(let Wt=0;Wt<Rt.length;Wt++){let Bt=Rt[Wt];O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,0,0,Ut,Vt,Bt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,ie,Ut,Vt,Bt.image[ot])}}}p(S)&&v(s.TEXTURE_CUBE_MAP),ut.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function At(C,S,H,k,Z,ut){let mt=r.convert(H.format,H.colorSpace),J=r.convert(H.type),it=_(H.internalFormat,mt,J,H.normalized,H.colorSpace),vt=n.get(S),zt=n.get(H);if(zt.__renderTarget=S,!vt.__hasExternalTextures){let xt=Math.max(1,S.width>>ut),gt=Math.max(1,S.height>>ut);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,it,xt,gt,S.depth,0,mt,J,null):e.texImage2D(Z,ut,it,xt,gt,0,mt,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ne(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,Z,zt.__webglTexture,0,Kt(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,Z,zt.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(C,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let k=S.depthTexture,Z=k&&k.isDepthTexture?k.type:null,ut=b(S.stencilBuffer,Z),mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ne(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(S),ut,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(S),ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,C)}else{let k=S.textures;for(let Z=0;Z<k.length;Z++){let ut=k[Z],mt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),it=_(ut.internalFormat,mt,J,ut.normalized,ut.colorSpace);ne(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(S),it,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(S),it,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,it,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(C,S,H){let k=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),re(s.TEXTURE_CUBE_MAP,S.depthTexture);let vt=r.convert(S.depthTexture.format),zt=r.convert(S.depthTexture.type),xt;S.depthTexture.format===hi?xt=s.DEPTH_COMPONENT24:S.depthTexture.format===_i&&(xt=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,S.width,S.height,0,vt,zt,null)}}else rt(S.depthTexture,0);let ut=Z.__webglTexture,mt=Kt(S),J=k?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,it=S.depthTexture.format===_i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===hi)ne(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,J,ut,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,it,J,ut,0);else if(S.depthTexture.format===_i)ne(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,J,ut,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,it,J,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){let S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=k}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let k=0;k<6;k++)ye(S.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?ye(S.__webglFramebuffer[0],C,0):ye(S.__webglFramebuffer,C,0)}else if(H){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=s.createRenderbuffer(),Jt(S.__webglDepthbuffer[k],C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ut)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Jt(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,S,H){let k=n.get(C);S!==void 0&&At(k.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&nt(C)}function lt(C){let S=C.texture,H=n.get(C),k=n.get(S);C.addEventListener("dispose",y);let Z=C.textures,ut=C.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=S.version,o.memory.textures++),ut){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let it=0;it<S.mipmaps.length;it++)H.__webglFramebuffer[J][it]=s.createFramebuffer()}else H.__webglFramebuffer[J]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)H.__webglFramebuffer[J]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(mt)for(let J=0,it=Z.length;J<it;J++){let vt=n.get(Z[J]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ne(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let it=Z[J];H.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let vt=r.convert(it.format,it.colorSpace),zt=r.convert(it.type),xt=_(it.internalFormat,vt,zt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),gt=Kt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,H.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Jt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),re(s.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)At(H.__webglFramebuffer[J][it],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,it);else At(H.__webglFramebuffer[J],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(S)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let J=0,it=Z.length;J<it;J++){let vt=Z[J],zt=n.get(vt),xt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,zt.__webglTexture),re(xt,vt),At(H.__webglFramebuffer,C,vt,s.COLOR_ATTACHMENT0+J,xt,0),p(vt)&&v(xt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),re(J,S),S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)At(H.__webglFramebuffer[it],C,S,s.COLOR_ATTACHMENT0,J,it);else At(H.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,J,0);p(S)&&v(J),e.unbindTexture()}C.depthBuffer&&nt(C)}function ht(C){let S=C.textures;for(let H=0,k=S.length;H<k;H++){let Z=S[H];if(p(Z)){let ut=M(C),mt=n.get(Z).__webglTexture;e.bindTexture(ut,mt),v(ut),e.unbindTexture()}}}let dt=[],Xt=[];function Gt(C){if(C.samples>0){if(ne(C)===!1){let S=C.textures,H=C.width,k=C.height,Z=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(C),J=S.length>1;if(J)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let zt=n.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,H,k,0,0,H,k,Z,s.NEAREST),l===!0&&(dt.length=0,Xt.length=0,dt.push(s.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ut),Xt.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let zt=n.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Kt(C){return Math.min(i.maxSamples,C.samples)}function ne(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _e(C,S){let H=C.colorSpace,k=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Qr&&H!==zi&&(ue.getTransfer(H)===Se?(k!==Cn||Z!==Mn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",H)),S}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=rt,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function n1(s,t){function e(n,i=zi){let r,o=ue.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gh)return s.BYTE;if(n===Vh)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Cl)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===Wn)return s.FLOAT;if(n===Je)return s.HALF_FLOAT;if(n===qh)return s.ALPHA;if(n===Yh)return s.RGB;if(n===Cn)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===Dl)return s.RED;if(n===Ll)return s.RED_INTEGER;if(n===ls)return s.RG;if(n===Nl)return s.RG_INTEGER;if(n===Ul)return s.RGBA_INTEGER;if(n===Ho||n===ko||n===Go||n===Vo)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===kl||n===Gl||n===Vl||n===Wl||n===Wo||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===kl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===Xo||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Te({vertexShader:i1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends ui{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new _u,p={},v=e.getContextAttributes(),M=null,_=null,b=[],E=[],A=new j,y=null,w=null,R=new fn;R.viewport=new We;let I=new fn;I.viewport=new We;let D=[R,I],B=new Sl,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=b[$];return Q===void 0&&(Q=new ar,b[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=b[$];return Q===void 0&&(Q=new ar,b[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=b[$];return Q===void 0&&(Q=new ar,b[$]=Q),Q.getHandSpace()};function W($){let Q=E.indexOf($.inputSource);if(Q===-1)return;let pt=b[Q];pt!==void 0&&(pt.update($.inputSource,$.frame,c||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",rt);for(let $=0;$<b.length;$++){let Q=E[$];Q!==null&&(E[$]=null,b[$].disconnect(Q))}L=null,z=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(M),d=null,u=null,f=null,i=null,_=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,kt=null,At=null;v.depth&&(At=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?_i:hi,kt=v.stencil?as:ei);let Jt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Jt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Be(u.textureWidth,u.textureHeight,{format:Cn,type:Mn,depthTexture:new pi(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Be(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt($){for(let Q=0;Q<$.removed.length;Q++){let pt=$.removed[Q],kt=E.indexOf(pt);kt>=0&&(E[kt]=null,b[kt].disconnect(pt))}for(let Q=0;Q<$.added.length;Q++){let pt=$.added[Q],kt=E.indexOf(pt);if(kt===-1){for(let Jt=0;Jt<b.length;Jt++)if(Jt>=E.length){E.push(pt),kt=Jt;break}else if(E[Jt]===null){E[Jt]=pt,kt=Jt;break}if(kt===-1)break}let At=b[kt];At&&At.connect(pt)}}let X=new P,K=new P;function tt($,Q,pt){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);let kt=X.distanceTo(K),At=Q.projectionMatrix.elements,Jt=pt.projectionMatrix.elements,ye=At[14]/(At[10]-1),nt=At[14]/(At[10]+1),at=(At[9]+1)/At[5],lt=(At[9]-1)/At[5],ht=(At[8]-1)/At[0],dt=(Jt[8]+1)/Jt[0],Xt=ye*ht,Gt=ye*dt,Kt=kt/(-ht+dt),ne=Kt*-ht;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ(Kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let U=ye+Kt,_e=nt+Kt,ae=Xt-ne,C=Gt+(kt-ne),S=at*nt/_e*U,H=lt*nt/_e*U;$.projectionMatrix.makePerspective(ae,C,S,H,U,_e),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Pt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,pt=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),B.near=I.near=R.near=Q,B.far=I.far=R.far=pt,(L!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,z=B.far),B.layers.mask=$.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let kt=$.parent,At=B.cameras;Pt(B,kt);for(let Jt=0;Jt<At.length;Jt++)Pt(At[Jt],kt);At.length===2?tt(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),bt($,B,kt)};function bt($,Q,pt){pt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ja*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return p[$]};let ge=null;function re($,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let kt=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,kt=!0);for(let nt=0;nt<pt.length;nt++){let at=pt[nt],lt=null;if(d!==null)lt=d.getViewport(at);else{let dt=f.getViewSubImage(u,at);lt=dt.viewport,nt===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let ht=D[nt];ht===void 0&&(ht=new fn,ht.layers.enable(nt),ht.viewport=new We,D[nt]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(B.matrix.copy(ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),kt===!0&&B.cameras.push(ht)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let nt=f.getDepthInformation(pt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<pt.length;nt++){let at=pt[nt].camera;if(at){let lt=p[at];lt||(lt=new co,p[at]=lt);let ht=f.getCameraImage(at);lt.sourceTexture=ht}}}}for(let pt=0;pt<b.length;pt++){let kt=E[pt],At=b[pt];kt!==null&&At!==void 0&&At.update(kt,Q,c||o)}ge&&ge($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let he=new Gd;he.setAnimationLoop(re),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}},r1=new te,$d=new se;$d.set(-1,0,0,0,1,0,0,0,1);function o1(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($d),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a1(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function c(_,b){let E=i[_.id];E===void 0&&(m(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",v));let A=b.program;n.updateUBOMapping(_,A);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let b=f();_.__bindingPointIndex=b;let E=s.createBuffer(),A=_.__size,y=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=i[_.id],E=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,w=E.length;y<w;y++){let R=E[y];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)d(R[I],y,I,A);else d(R,y,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,b,E,A){if(x(_,b,E,A)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let D=w[I],B=p(D);g(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function g(_,b,E){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,E)}function x(_,b,E,A){let y=_.value,w=b+"_"+E;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){let b=_.uniforms,E=0,A=16;for(let w=0,R=b.length;w<R;w++){let I=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,B=I.length;D<B;D++){let L=I[D],z=Array.isArray(L.value)?L.value:[L.value];for(let W=0,q=z.length;W<q;W++){let rt=z[W],X=p(rt),K=E%A,tt=K%X.boundary,Pt=K+tt;E+=tt,Pt!==0&&A-Pt<X.storage&&(E+=A-Pt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=X.storage}}}let y=E%A;return y>0&&(E+=A-y),_.__size=E,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",_),b}function v(_){let b=_.target;b.removeEventListener("dispose",v);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function M(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:M}}var l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function c1(){return yi===null&&(yi=new Bi(l1,16,16,ls,Je),yi.name="DFG_LUT",yi.minFilter=dn,yi.magFilter=dn,yi.wrapS=Hn,yi.wrapT=Hn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Zo=class{constructor(t={}){let{canvas:e=cd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ul,Nl,Ll]),p=new Set([Mn,ei,Er,as,Pl,Il]),v=new Uint32Array(4),M=new Int32Array(4),_=new P,b=null,E=null,A=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,D=null,B=null,L=null,z=null;this._outputColorSpace=Oe;let W=0,q=0,rt=null,X=-1,K=null,tt=new We,Pt=new We,bt=null,ge=new Yt(0),re=0,he=e.width,$=e.height,Q=1,pt=null,kt=null,At=new We(0,0,he,$),Jt=new We(0,0,he,$),ye=!1,nt=new fr,at=!1,lt=!1,ht=new te,dt=new P,Xt=new We,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ne(){return rt===null?Q:1}let U=n;function _e(T,F){return e.getContext(T,F)}let ae,C,S,H,k,Z,ut,mt,J,it,vt,zt,xt,gt,Ut,Vt,ie,O,Mt,et,St,Rt,ot;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Zn,!1),U===null){let F="webgl2";if(U=_e(F,T),U===null)throw _e(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(T){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Zn,!1),jt("WebGLRenderer: "+T.message),T}function Wt(){ae=new gv(U),ae.init(),St=new n1(U,ae),C=new ov(U,ae,t,St),S=new t1(U,ae),C.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),B=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),H=new _v(U),k=new H_,Z=new e1(U,ae,S,k,C,St,H),ut=new mv(R),mt=new Mm(U),Rt=new sv(U,mt),J=new xv(U,mt,H,Rt),it=new Mv(U,J,mt,Rt,H),O=new yv(U,C,Z),Ut=new av(k),vt=new z_(R,ut,ae,C,Rt,Ut),zt=new o1(R,k),xt=new G_,gt=new $_(ae),ie=new iv(R,ut,S,it,g,l),Vt=new Q_(R,it,C),ot=new a1(U,H,C,S),Mt=new rv(U,ae,H),et=new vv(U,ae,H),H.programs=vt.programs,R.capabilities=C,R.extensions=ae,R.properties=k,R.renderLists=xt,R.shadowMap=Vt,R.state=S,R.info=H}x!==Mn&&(w=new bv(x,e.width,e.height,a,i,r));let Bt=new yu(R,U);this.xr=Bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(he,$,!1))},this.getSize=function(T){return T.set(he,$)},this.setSize=function(T,F,Y=!0){if(Bt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=T,$=F,e.width=Math.floor(T*Q),e.height=Math.floor(F*Q),Y===!0&&(e.style.width=T+"px",e.style.height=F+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(he*Q,$*Q).floor()},this.setDrawingBufferSize=function(T,F,Y){he=T,$=F,Q=Y,e.width=Math.floor(T*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(x===Mn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(At)},this.setViewport=function(T,F,Y,G){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,F,Y,G),S.viewport(tt.copy(At).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Jt)},this.setScissor=function(T,F,Y,G){T.isVector4?Jt.set(T.x,T.y,T.z,T.w):Jt.set(T,F,Y,G),S.scissor(Pt.copy(Jt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){S.setScissorTest(ye=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Y=!0){let G=0;if(T){let V=!1;if(rt!==null){let wt=rt.texture.format;V=m.has(wt)}if(V){let wt=rt.texture.type,Dt=p.has(wt),Tt=ie.getClearColor(),Ft=ie.getClearAlpha(),Ht=Tt.r,le=Tt.g,fe=Tt.b;Dt?(v[0]=Ht,v[1]=le,v[2]=fe,v[3]=Ft,U.clearBufferuiv(U.COLOR,0,v)):(M[0]=Ht,M[1]=le,M[2]=fe,M[3]=Ft,U.clearBufferiv(U.COLOR,0,M))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Zn,!1),ie.dispose(),xt.dispose(),gt.dispose(),k.dispose(),ut.dispose(),it.dispose(),Rt.dispose(),ot.dispose(),vt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Gu),Bt.removeEventListener("sessionend",Vu),us.stop()};function ze(T){T.preventDefault(),eo("WebGLRenderer: Context Lost."),I=!0}function we(){eo("WebGLRenderer: Context Restored."),I=!1;let T=H.autoReset,F=Vt.enabled,Y=Vt.autoUpdate,G=Vt.needsUpdate,V=Vt.type;Wt(),H.autoReset=T,Vt.enabled=F,Vt.autoUpdate=Y,Vt.needsUpdate=G,Vt.type=V}function Zn(T){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ri(T){let F=T.target;F.removeEventListener("dispose",ri),tp(F)}function tp(T){ep(T),k.remove(T)}function ep(T){let F=k.get(T).programs;F!==void 0&&(F.forEach(function(Y){vt.releaseProgram(Y)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,G,V,wt){F===null&&(F=Gt);let Dt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Tt=sp(T,F,Y,G,V);S.setMaterial(G,Dt);let Ft=Y.index,Ht=1;if(G.wireframe===!0){if(Ft=J.getWireframeAttribute(Y),Ft===void 0)return;Ht=2}let le=Y.drawRange,fe=Y.attributes.position,Ot=le.start*Ht,Ae=(le.start+le.count)*Ht;wt!==null&&(Ot=Math.max(Ot,wt.start*Ht),Ae=Math.min(Ae,(wt.start+wt.count)*Ht)),Ft!==null?(Ot=Math.max(Ot,0),Ae=Math.min(Ae,Ft.count)):fe!=null&&(Ot=Math.max(Ot,0),Ae=Math.min(Ae,fe.count));let tn=Ae-Ot;if(tn<0||tn===1/0)return;Rt.setup(V,G,Tt,Y,Ft);let Ge,Fe=Mt;if(Ft!==null&&(Ge=mt.get(Ft),Fe=et,Fe.setIndex(Ge)),V.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*ne()),Fe.setMode(U.LINES)):Fe.setMode(U.TRIANGLES);else if(V.isLine){let gn=G.linewidth;gn===void 0&&(gn=1),S.setLineWidth(gn*ne()),V.isLineSegments?Fe.setMode(U.LINES):V.isLineLoop?Fe.setMode(U.LINE_LOOP):Fe.setMode(U.LINE_STRIP)}else V.isPoints?Fe.setMode(U.POINTS):V.isSprite&&Fe.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let gn=V._multiDrawStarts,It=V._multiDrawCounts,En=V._multiDrawCount,Me=Ft?mt.get(Ft).bytesPerElement:1,Bn=k.get(G).currentProgram.getUniforms();for(let oi=0;oi<En;oi++)Bn.setValue(U,"_gl_DrawID",oi),Fe.render(gn[oi]/Me,It[oi])}else if(V.isInstancedMesh)Fe.renderInstances(Ot,tn,V.count);else if(Y.isInstancedBufferGeometry){let gn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,gn);Fe.renderInstances(Ot,tn,It)}else Fe.render(Ot,tn)};function ku(T,F,Y,G){D!==null&&T.isNodeMaterial&&D.setObject(G,T),at===!0&&Ut.setState(T,Y,!1),T.transparent===!0&&T.side===Xe&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,ha(T,F,G),T.side=ss,T.needsUpdate=!0,ha(T,F,G),T.side=Xe):ha(T,F,G)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),D!==null&&D.renderStart(T,F,Y),E=gt.get(Y),E.init(F),y.push(E),Y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,lt),at===!0&&Ut.setGlobalState(this.clippingPlanes,F),D!==null&&Vt.render(E.state.shadowsArray,Y,F);let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let wt=V.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){let Tt=wt[Dt];ku(Tt,Y,F,V),G.add(Tt)}else ku(wt,Y,F,V),G.add(wt)}),E=y.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(T,F,Y=null){let G=this.compile(T,F,Y);return new Promise(V=>{function wt(){if(G.forEach(function(Dt){let Ft=k.get(Dt).currentProgram;(Ft===void 0||Ft.isReady())&&G.delete(Dt)}),G.size===0){V(T);return}setTimeout(wt,10)}ae.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let $c=null;function np(T){$c&&$c(T)}function Gu(){us.stop()}function Vu(){us.start()}let us=new Gd;us.setAnimationLoop(np),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(T){$c=T,Bt.setAnimationLoop(T),T===null?us.stop():us.start()},Bt.addEventListener("sessionstart",Gu),Bt.addEventListener("sessionend",Vu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,F);let Y=Bt.enabled===!0&&Bt.isPresenting===!0,G=w!==null&&(rt===null||Y)&&w.begin(R,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(F),F=Bt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,rt),E=gt.get(T,y.length),E.init(F),E.state.textureUnits=Z.getTextureUnits(),y.push(E),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ht,Qn,F.reversedDepth),lt=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,lt),b=xt.get(T,A.length),b.init(),A.push(b),Bt.enabled===!0&&Bt.isPresenting===!0){let Dt=R.xr.getDepthSensingMesh();Dt!==null&&Zc(Dt,F,-1/0,R.sortObjects)}Zc(T,F,0,R.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(pt,kt),Kt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Kt&&ie.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ut.beginShadows();let V=E.state.shadowsArray;if(Vt.render(V,T,F),at===!0&&Ut.endShadows(),(G&&w.hasRenderPass())===!1){let Dt=b.opaque,Tt=b.transmissive;if(E.setupLights(),F.isArrayCamera){let Ft=F.cameras;if(Tt.length>0)for(let Ht=0,le=Ft.length;Ht<le;Ht++){let fe=Ft[Ht];Xu(Dt,Tt,T,fe)}Kt&&ie.render(T);for(let Ht=0,le=Ft.length;Ht<le;Ht++){let fe=Ft[Ht];Wu(b,T,fe,fe.viewport)}}else Tt.length>0&&Xu(Dt,Tt,T,F),Kt&&ie.render(T),Wu(b,T,F)}rt!==null&&q===0&&(Z.updateMultisampleRenderTarget(rt),Z.updateRenderTargetMipmap(rt)),G&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),Rt.resetDefaultState(),X=-1,K=null,y.pop(),y.length>0?(E=y[y.length-1],Z.setTextureUnits(E.state.textureUnits),at===!0&&Ut.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,D!==null&&D.renderEnd()};function Zc(T,F,Y,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(nt)){G&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);let Dt=it.update(T),Tt=T.material;Tt.visible&&b.push(T,Dt,Tt,Y,Xt.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(nt))){let Dt=it.update(T),Tt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Tt)){let Ft=Dt.groups;for(let Ht=0,le=Ft.length;Ht<le;Ht++){let fe=Ft[Ht],Ot=Tt[fe.materialIndex];Ot&&Ot.visible&&b.push(T,Dt,Ot,Y,Xt.z,fe,F)}}else Tt.visible&&b.push(T,Dt,Tt,Y,Xt.z,null,F)}}let wt=T.children;for(let Dt=0,Tt=wt.length;Dt<Tt;Dt++)Zc(wt[Dt],F,Y,G)}function Wu(T,F,Y,G){let{opaque:V,transmissive:wt,transparent:Dt}=T;E.setupLightsView(Y),at===!0&&Ut.setGlobalState(R.clippingPlanes,Y),G&&S.viewport(tt.copy(G)),V.length>0&&ca(V,F,Y),wt.length>0&&ca(wt,F,Y),Dt.length>0&&ca(Dt,F,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Xu(T,F,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Ot=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Be(1,1,{generateMipmaps:!0,type:Ot?Je:Mn,minFilter:vi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let wt=E.state.transmissionRenderTarget[G.id],Dt=G.viewport||tt;wt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);let Tt=R.getRenderTarget(),Ft=R.getActiveCubeFace(),Ht=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(ge),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),Kt&&ie.render(Y);let le=R.toneMapping;R.toneMapping=ti;let fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),at===!0&&Ut.setGlobalState(R.clippingPlanes,G),ca(T,Y,G),Z.updateMultisampleRenderTarget(wt),Z.updateRenderTargetMipmap(wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Ae=0,tn=F.length;Ae<tn;Ae++){let Ge=F[Ae],{object:Fe,geometry:gn,material:It,group:En}=Ge;if(It.side===Xe&&Fe.layers.test(G.layers)){let Me=It.side;It.side=pn,It.needsUpdate=!0,qu(Fe,Y,G,gn,It,En),It.side=Me,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(Z.updateMultisampleRenderTarget(wt),Z.updateRenderTargetMipmap(wt))}R.setRenderTarget(Tt,Ft,Ht),R.setClearColor(ge,re),fe!==void 0&&(G.viewport=fe),R.toneMapping=le}function ca(T,F,Y){let G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,wt=T.length;V<wt;V++){let Dt=T[V],{object:Tt,geometry:Ft,group:Ht}=Dt,le=Dt.material;le.allowOverride===!0&&G!==null&&(le=G),Tt.layers.test(Y.layers)&&qu(Tt,F,Y,Ft,le,Ht)}}function qu(T,F,Y,G,V,wt){D!==null&&V.isNodeMaterial&&D.setObject(T,V),T.onBeforeRender(R,F,Y,G,V,wt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,F,Y,G,T,wt),V.transparent===!0&&V.side===Xe&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,R.renderBufferDirect(Y,F,G,V,T,wt),V.side=ss,V.needsUpdate=!0,R.renderBufferDirect(Y,F,G,V,T,wt),V.side=Xe):R.renderBufferDirect(Y,F,G,V,T,wt),T.onAfterRender(R,F,Y,G,V,wt)}function ha(T,F,Y){F.isScene!==!0&&(F=Gt);let G=k.get(T),V=E.state.lights,wt=E.state.shadowsArray,Dt=V.state.version,Tt=vt.getParameters(T,V.state,wt,F,Y,E.state.lightProbeGridArray),Ft=vt.getProgramCacheKey(Tt),Ht=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ut.get(T.envMap||G.environment,le),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",ri),Ht=new Map,G.programs=Ht);let fe=Ht.get(Ft);if(fe!==void 0){if(G.currentProgram===fe&&G.lightsStateVersion===Dt)return $u(T,Tt),fe}else Tt.uniforms=vt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,Tt),T.onBeforeCompile(Tt,R),fe=vt.acquireProgram(Tt,Ft),Ht.set(Ft,fe),G.uniforms=Tt.uniforms;let Ot=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=Ut.uniform),$u(T,Tt),G.needsLights=op(T),G.lightsStateVersion=Dt,G.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.sunLights.value=V.state.sun,Ot.sunLightShadows.value=V.state.sunShadow,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.sunShadowMatrix.value=V.state.sunShadowMatrix,Ot.sunShadowCascade.value=V.state.sunShadowCascade,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=fe,G.uniformsList=null,fe}function Yu(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function $u(T,F){let Y=k.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function ip(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let Y=0,G=T.length;Y<G;Y++){let V=T[Y];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function sp(T,F,Y,G,V){F.isScene!==!0&&(F=Gt),Z.resetTextureUnits();let wt=F.fog,Dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Tt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ue.workingColorSpace,Ft=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ht=ut.get(G.envMap||Dt,Ft),le=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,fe=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!Y.morphAttributes.position,Ae=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color,Ge=ti;G.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ge=R.toneMapping);let Fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gn=Fe!==void 0?Fe.length:0,It=k.get(G),En=E.state.lights;if(at===!0&&(lt===!0||T!==K)){let He=T===K&&G.id===X;Ut.setState(G,T,He)}let Me=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==En.state.version||It.outputColorSpace!==Tt||V.isBatchedMesh&&It.batching===!1||!V.isBatchedMesh&&It.batching===!0||V.isBatchedMesh&&It.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&It.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||V.isInstancedMesh&&It.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&It.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&It.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&It.instancingMorph===!1&&V.morphTexture!==null||It.envMap!==Ht||G.fog===!0&&It.fog!==wt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Ut.numPlanes||It.numIntersection!==Ut.numIntersection)||It.vertexAlphas!==le||It.vertexTangents!==fe||It.morphTargets!==Ot||It.morphNormals!==Ae||It.morphColors!==tn||It.toneMapping!==Ge||It.morphTargetsCount!==gn||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,It.__version=G.version);let Bn=It.currentProgram;Me===!0&&(Bn=ha(G,F,V),D&&G.isNodeMaterial&&D.onUpdateProgram(G,Bn,It));let oi=!1,Wi=!1,Ls=!1,Ie=Bn.getUniforms(),Ke=It.uniforms;if(S.useProgram(Bn.program)&&(oi=!0,Wi=!0,Ls=!0),G.id!==X&&(X=G.id,Wi=!0),It.needsLights){let He=ip(E.state.lightProbeGridArray,V);It.lightProbeGrid!==He&&(It.lightProbeGrid=He,Wi=!0)}if(oi||K!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ie.setValue(U,"projectionMatrix",T.projectionMatrix),Ie.setValue(U,"viewMatrix",T.matrixWorldInverse);let qi=Ie.map.cameraPosition;qi!==void 0&&qi.setValue(U,dt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Wi=!0,Ls=!0)}if(It.needsLights&&(En.state.sunShadowMap.length>0&&Ie.setValue(U,"sunShadowMap",En.state.sunShadowMap,Z),En.state.directionalShadowMap.length>0&&Ie.setValue(U,"directionalShadowMap",En.state.directionalShadowMap,Z),En.state.spotShadowMap.length>0&&Ie.setValue(U,"spotShadowMap",En.state.spotShadowMap,Z),En.state.pointShadowMap.length>0&&Ie.setValue(U,"pointShadowMap",En.state.pointShadowMap,Z)),V.isSkinnedMesh){Ie.setOptional(U,V,"bindMatrix"),Ie.setOptional(U,V,"bindMatrixInverse");let He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ie.setValue(U,"boneTexture",He.boneTexture,Z))}V.isBatchedMesh&&(Ie.setOptional(U,V,"batchingTexture"),Ie.setValue(U,"batchingTexture",V._matricesTexture,Z),Ie.setOptional(U,V,"batchingIdTexture"),Ie.setValue(U,"batchingIdTexture",V._indirectTexture,Z),Ie.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Ie.setValue(U,"batchingColorTexture",V._colorsTexture,Z));let Xi=Y.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&O.update(V,Y,Bn),(Wi||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,Ie.setValue(U,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Ke.envMapIntensity.value=F.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=c1()),Wi){if(Ie.setValue(U,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&rp(Ke,Ls),wt&&G.fog===!0&&zt.refreshFogUniforms(Ke,wt),zt.refreshMaterialUniforms(Ke,G,Q,$,E.state.transmissionRenderTarget[T.id]),It.needsLights&&It.lightProbeGrid){let He=It.lightProbeGrid;Ke.probesSH.value=He.texture,Ke.probesMin.value.copy(He.boundingBox.min),Ke.probesMax.value.copy(He.boundingBox.max),Ke.probesResolution.value.copy(He.resolution)}Rr.upload(U,Yu(It),Ke,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rr.upload(U,Yu(It),Ke,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ie.setValue(U,"center",V.center),Ie.setValue(U,"modelViewMatrix",V.modelViewMatrix),Ie.setValue(U,"normalMatrix",V.normalMatrix),Ie.setValue(U,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let He=G.uniformsGroups;for(let qi=0,Ns=He.length;qi<Ns;qi++){let Ju=He[qi];ot.update(Ju,Bn),ot.bind(Ju,Bn)}}return Bn}function rp(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function op(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,F,Y){let G=k.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(T.texture).__webglTexture=F,k.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let Y=k.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Y=0){rt=T,W=F,q=Y;let G=null,V=!1,wt=!1;if(T){let Tt=k.get(T);if(Tt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Tt.__webglFramebuffer),tt.copy(T.viewport),Pt.copy(T.scissor),bt=T.scissorTest,S.viewport(tt),S.scissor(Pt),S.setScissorTest(bt),X=-1;return}else if(Tt.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(Tt.__hasExternalTextures)Z.rebindTextures(T,k.get(T.texture).__webglTexture,k.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let le=T.depthTexture;if(Tt.__boundDepthTexture!==le){if(le!==null&&k.has(le)&&(T.width!==le.image.width||T.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(wt=!0);let Ht=k.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?G=Ht[F][Y]:G=Ht[F],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?G=k.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[Y]:G=Ht,tt.copy(T.viewport),Pt.copy(T.scissor),bt=T.scissorTest}else tt.copy(At).multiplyScalar(Q).floor(),Pt.copy(Jt).multiplyScalar(Q).floor(),bt=ye;if(Y!==0&&(G=B),S.bindFramebuffer(U.FRAMEBUFFER,G)&&S.drawBuffers(T,G),S.viewport(tt),S.scissor(Pt),S.setScissorTest(bt),V){let Tt=k.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,Y)}else if(wt){let Tt=F;for(let Ft=0;Ft<T.textures.length;Ft++){let Ht=k.get(T.textures[Ft]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ft,Ht.__webglTexture,Y,Tt)}}else if(T!==null&&Y!==0){let Tt=k.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tt.__webglTexture,Y)}X=-1};function Zu(T){let F=k.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=C.textureFormatReadable(T.format),F.__typeReadable=C.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Y,G,V,wt,Dt,Tt=0){if(!(T&&T.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){S.bindFramebuffer(U.FRAMEBUFFER,Ft);try{let Ht=T.textures[Tt],le=Ht.format,fe=Ht.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Tt);let Ot=Zu(Ht);if(Ot.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&Y>=0&&Y<=T.height-V&&U.readPixels(F,Y,G,V,St.convert(le),St.convert(fe),wt)}finally{let Ht=rt!==null?k.get(rt).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,G,V,wt,Dt,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft)if(F>=0&&F<=T.width-G&&Y>=0&&Y<=T.height-V){S.bindFramebuffer(U.FRAMEBUFFER,Ft);let Ht=T.textures[Tt],le=Ht.format,fe=Ht.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Tt);let Ot=Zu(Ht);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,wt.byteLength,U.STREAM_READ),U.readPixels(F,Y,G,V,St.convert(le),St.convert(fe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let tn=rt!==null?k.get(rt).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,tn);let Ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ud(U,Ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,wt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ae),U.deleteSync(Ge),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Y=0){let G=Math.pow(2,-Y),V=Math.floor(T.image.width*G),wt=Math.floor(T.image.height*G),Dt=F!==null?F.x:0,Tt=F!==null?F.y:0;Z.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Dt,Tt,V,wt),S.unbindTexture()},this.copyTextureToTexture=function(T,F,Y=null,G=null,V=0,wt=0){let Dt,Tt,Ft,Ht,le,fe,Ot,Ae,tn,Ge=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(Y!==null)Dt=Y.max.x-Y.min.x,Tt=Y.max.y-Y.min.y,Ft=Y.isBox3?Y.max.z-Y.min.z:1,Ht=Y.min.x,le=Y.min.y,fe=Y.isBox3?Y.min.z:0;else{let Ke=Math.pow(2,-V);Dt=Math.floor(Ge.width*Ke),Tt=Math.floor(Ge.height*Ke),T.isDataArrayTexture?Ft=Ge.depth:T.isData3DTexture?Ft=Math.floor(Ge.depth*Ke):Ft=1,Ht=0,le=0,fe=0}G!==null?(Ot=G.x,Ae=G.y,tn=G.z):(Ot=0,Ae=0,tn=0);let Fe=St.convert(F.format),gn=St.convert(F.type),It;F.isData3DTexture?(Z.setTexture3D(F,0),It=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),It=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),It=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let En=S.getParameter(U.UNPACK_ROW_LENGTH),Me=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=S.getParameter(U.UNPACK_SKIP_PIXELS),oi=S.getParameter(U.UNPACK_SKIP_ROWS),Wi=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ge.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),S.pixelStorei(U.UNPACK_SKIP_ROWS,le),S.pixelStorei(U.UNPACK_SKIP_IMAGES,fe);let Ls=T.isDataArrayTexture||T.isData3DTexture,Ie=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let Ke=k.get(T),Xi=k.get(F),He=k.get(Ke.__renderTarget),qi=k.get(Xi.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,He.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Ns=0;Ns<Ft;Ns++)Ls&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(T).__webglTexture,V,fe+Ns),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(F).__webglTexture,wt,tn+Ns)),U.blitFramebuffer(Ht,le,Dt,Tt,Ot,Ae,Dt,Tt,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||k.has(T)){let Ke=k.get(T),Xi=k.get(F);S.bindFramebuffer(U.READ_FRAMEBUFFER,L),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let He=0;He<Ft;He++)Ls?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ke.__webglTexture,V,fe+He):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ke.__webglTexture,V),Ie?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xi.__webglTexture,wt,tn+He):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xi.__webglTexture,wt),V!==0?U.blitFramebuffer(Ht,le,Dt,Tt,Ot,Ae,Dt,Tt,U.COLOR_BUFFER_BIT,U.NEAREST):Ie?U.copyTexSubImage3D(It,wt,Ot,Ae,tn+He,Ht,le,Dt,Tt):U.copyTexSubImage2D(It,wt,Ot,Ae,Ht,le,Dt,Tt);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(It,wt,Ot,Ae,tn,Dt,Tt,Ft,Fe,gn,Ge.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(It,wt,Ot,Ae,tn,Dt,Tt,Ft,Fe,Ge.data):U.texSubImage3D(It,wt,Ot,Ae,tn,Dt,Tt,Ft,Fe,gn,Ge):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,wt,Ot,Ae,Dt,Tt,Fe,gn,Ge.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,wt,Ot,Ae,Ge.width,Ge.height,Fe,Ge.data):U.texSubImage2D(U.TEXTURE_2D,wt,Ot,Ae,Dt,Tt,Fe,gn,Ge);S.pixelStorei(U.UNPACK_ROW_LENGTH,En),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),S.pixelStorei(U.UNPACK_SKIP_ROWS,oi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Wi),wt===0&&F.generateMipmaps&&U.generateMipmap(It),S.unbindTexture()},this.initRenderTarget=function(T){k.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){W=0,q=0,rt=null,S.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};function Ir(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new xe,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Zd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let g=Zd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Zd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Le(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Jo(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let v=0,M=a.length;v<M;v++){let _=a[v],b=s.attributes[_];l[_]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let E=s.morphAttributes[_];E&&(c[_]||(c[_]=[]),E.forEach((A,y)=>{let w=new A.array.constructor(A.count*A.itemSize);c[_][y]=new A.constructor(w,A.itemSize,A.normalized)}))}let d=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=d*x;for(let v=0;v<r;v++){let M=n?n.getX(v):v,_="";for(let b=0,E=a.length;b<E;b++){let A=a[b],y=s.getAttribute(A),w=y.itemSize;for(let R=0;R<w;R++)_+=`${Math.trunc(y[f[R]](M)*x+m)},`}if(_ in e)h.push(e[_]);else{for(let b=0,E=a.length;b<E;b++){let A=a[b],y=s.getAttribute(A),w=s.morphAttributes[A],R=y.itemSize,I=l[A],D=c[A];for(let B=0;B<R;B++){let L=f[B],z=u[B];if(I[z](o,y[L](M)),w)for(let W=0,q=w.length;W<q;W++)D[W][z](o,w[W][L](M))}}e[_]=o,h.push(o),o++}}let p=s.clone();for(let v in s.attributes){let M=l[v];if(p.setAttribute(v,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),v in c)for(let _=0;_<c[v].length;_++){let b=c[v][_];p.morphAttributes[v][_]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}function pe(s){let t=1779033703^String(s).length;for(let i=0;i<String(s).length;i++)t=Math.imul(t^String(s).charCodeAt(i),3432918353),t=t<<13|t>>>19;let e=t>>>0,n=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return n.range=(i,r)=>i+(r-i)*n(),n.int=(i,r)=>Math.floor(n.range(i,r+1)),n.pick=i=>i[Math.floor(n()*i.length)],n}var Mu={};function Fn(s,t,e){if(Mu[s])return Mu[s];let n=document.createElement("canvas");n.width=n.height=t,e(n.getContext("2d"),t);let i=new un(n);return i.colorSpace=Oe,i.anisotropy=4,Mu[s]=i,i}function Ko(s,t,e,n,i,r=1,o=4){for(let a=0;a<n;a++){s.fillStyle=e[Math.floor(i()*e.length)];let l=r+i()*(o-r);s.fillRect(i()*t,i()*t,l,l*(.6+i()*.8))}}function Jd(s){return Fn("facade"+s,128,(t,e)=>{let n=pe("facade"+s),i=["#cdbb94","#c2ad85","#d6c6a2","#b59e76","#c9b48e"][s%5];t.fillStyle=i,t.fillRect(0,0,e,e),Ko(t,e,["rgba(0,0,0,0.05)","rgba(255,255,255,0.08)"],200,n,2,6);for(let r=10;r<e-10;r+=32)for(let o=10;o<e-10;o+=30){let a=n()<.18;t.fillStyle=a?"#1a1a1a":n()<.5?"#3c4d58":"#2f3c45",t.fillRect(o,r,16,18),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(o,r+18,16,3)}if(n()<.4){let r=t.createRadialGradient(64,40,4,64,40,50);r.addColorStop(0,"rgba(20,20,20,0.5)"),r.addColorStop(1,"rgba(20,20,20,0)"),t.fillStyle=r,t.fillRect(0,0,e,e)}})}function Kd(){let s=Fn("water",128,(t,e)=>{let n=pe("water");t.fillStyle="#2f7fa3",t.fillRect(0,0,e,e);for(let i=0;i<70;i++){t.strokeStyle=`rgba(200,240,255,${.15+n()*.25})`,t.lineWidth=2;let r=n()*e,o=n()*e;t.beginPath(),t.moveTo(r,o),t.quadraticCurveTo(r+6,o-3,r+12,o),t.stroke()}});return s.wrapS=s.wrapT=ve,s}function Su(){let s=Fn("grass",256,(t,e)=>{let n=pe("grass");t.fillStyle="#6f9a45",t.fillRect(0,0,e,e),Ko(t,e,["#7fab50","#628c3c","#86b257","#5a8236","#93bd62"],1600,n,1,4);for(let i=0;i<14;i++)t.fillStyle=`rgba(${n()<.5?"255,255,200":"30,60,20"},0.06)`,t.beginPath(),t.arc(n()*e,n()*e,20+n()*40,0,7),t.fill()});return s.wrapS=s.wrapT=ve,s}function jd(){let s=Fn("ghostroad",128,(t,e)=>{t.clearRect(0,0,e,e),t.fillStyle="rgba(60,210,230,0.28)",t.fillRect(8,0,e-16,e),t.fillStyle="rgba(200,255,255,0.95)",t.fillRect(4,0,8,e*.55),t.fillRect(e-12,0,8,e*.55)});return s.wrapS=s.wrapT=ve,s}function Qd(s){return Fn("apt"+s,128,(t,e)=>{let n=pe("apt"+s);t.fillStyle=["#f1efe9","#e9e6dd","#f4f2ee"][s%3],t.fillRect(0,0,e,e);for(let i=0;i<e;i+=16){t.fillStyle="#c9ccd0",t.fillRect(0,i+11,e,3);for(let r=4;r<e;r+=21)t.fillStyle=n()<.15?"#8fa9bd":"#6f8ba1",t.fillRect(r,i+3,15,8)}t.fillStyle=["#7aa3c9","#d27a5a","#7ab48a"][s%3],t.fillRect(0,0,e,3)})}function t0(s,t){return Fn("gable"+s+t,128,(e,n)=>{e.fillStyle=["#f1efe9","#e9e6dd","#f4f2ee"][t%3],e.fillRect(0,0,n,n),e.fillStyle=["#2f5f8f","#a8492f","#2f7a4f"][t%3],e.font="bold 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),n/2,n*.22),e.fillRect(n*.15,n*.38,n*.7,4)})}function bu(s){return Fn("glass"+s,128,(t,e)=>{let n=pe("glass"+s),i=["#5d7f9e","#4f6f8c","#7896ad","#6b8a8f"][s%4];t.fillStyle=i,t.fillRect(0,0,e,e);for(let r=0;r<e;r+=10)for(let o=0;o<e;o+=10)t.fillStyle=`rgba(255,255,255,${.04+n()*.16})`,t.fillRect(o+1,r+1,8,8);t.fillStyle="rgba(20,30,40,0.35)";for(let r=0;r<e;r+=10)t.fillRect(0,r,e,1)})}function Eu(){return Fn("goldglass",128,(s,t)=>{let e=pe("gold");s.fillStyle="#c99a3a",s.fillRect(0,0,t,t);for(let n=0;n<t;n+=8)for(let i=0;i<t;i+=8)s.fillStyle=`rgba(255,240,180,${.1+e()*.3})`,s.fillRect(i+1,n+1,6,6)})}function e0(){let s=Fn("camo",128,(t,e)=>{let n=pe("camo");t.fillStyle="#5f6b3c",t.fillRect(0,0,e,e);for(let i of["#4a3a26","#2b2a22","#7a7a48"])for(let r=0;r<9;r++){t.fillStyle=i,t.beginPath();let o=n()*e,a=n()*e;t.moveTo(o,a);for(let l=0;l<7;l++)t.lineTo(o+Math.cos(l)*(8+n()*16),a+Math.sin(l)*(6+n()*12));t.fill()}});return s.wrapS=s.wrapT=ve,s}function n0(){return Fn("field",128,(s,t)=>{for(let e=0;e<8;e++)s.fillStyle=e%2?"#4f9a46":"#58a64e",s.fillRect(e*16,0,16,t);s.strokeStyle="#f2f2f2",s.lineWidth=2,s.strokeRect(4,4,t-8,t-8),s.beginPath(),s.moveTo(t/2,4),s.lineTo(t/2,t-4),s.stroke(),s.beginPath(),s.arc(t/2,t/2,14,0,7),s.stroke()})}function i0(){let s=Fn("lawnstripe",256,(t,e)=>{let n=pe("lawn");for(let i=0;i<4;i++)t.fillStyle=i%2?"#86b552":"#7aaa48",t.fillRect(0,i*e/4,e,e/4);Ko(t,e,["#8fbd5c","#6f9c40","#93c264","#7da84b"],1400,n,1,3)});return s.wrapS=s.wrapT=ve,s}function s0(){let s=Fn("dirt",256,(t,e)=>{let n=pe("dirt");t.fillStyle="#c9b48a",t.fillRect(0,0,e,e),Ko(t,e,["#bda57a","#d4c19a","#b39b70","#cdb990"],1600,n,1,4)});return s.wrapS=s.wrapT=ve,s}function r0(){let s=Fn("snow",256,(t,e)=>{let n=pe("snow");t.fillStyle="#e9eef2",t.fillRect(0,0,e,e),Ko(t,e,["#dfe6ec","#f4f7f9","#d5dde4"],1200,n,1,4)});return s.wrapS=s.wrapT=ve,s}var Tu={};function Rs(s,t,e,n,i=!0){if(Tu[s])return Tu[s];let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let o=new un(r);return i&&(o.colorSpace=Oe),o.wrapS=o.wrapT=ve,o.anisotropy=8,Tu[s]=o}var h1={gray:["#3d4146","#24272b","#4f545a","#5a5f66","#2a2d31"],blue:["#24508f","#173866","#2f63ad","#3a72c0","#1b3f73"]};function o0(s="gray"){let t=h1[s];return Rs("giwa"+s,256,256,(e,n,i)=>{let r=pe("giwa");e.fillStyle=t[0],e.fillRect(0,0,n,i);let o=16,a=n/o;for(let l=0;l<o;l++){let c=l*a,h=e.createLinearGradient(c,0,c+a,0);h.addColorStop(0,t[1]),h.addColorStop(.35,t[2]),h.addColorStop(.55,t[3]),h.addColorStop(1,t[4]),e.fillStyle=h,e.fillRect(c+a*.18,0,a*.64,i);for(let f=0;f<i;f+=16)e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(c+a*.18,f,a*.64,1.5)}for(let l=0;l<900;l++)e.fillStyle=`rgba(${r()<.5?"255,255,255":"0,0,0"},${.03+r()*.05})`,e.fillRect(r()*n,r()*i,2+r()*6,2+r()*6)})}function u1(){return Rs("dancheong",256,64,(s,t,e)=>{s.fillStyle="#2f7a64",s.fillRect(0,0,t,e);let n=8,i=t/n;for(let r=0;r<n;r++){let o=r*i;s.fillStyle="#b8352a",s.fillRect(o+i*.4,0,i*.2,e),s.fillStyle="#e9e1cf",s.fillRect(o+i*.36,e*.2,i*.04,e*.6),s.fillRect(o+i*.6,e*.2,i*.04,e*.6),s.fillStyle="#2a4f9a",s.beginPath(),s.arc(o+i*.15,e*.5,e*.18,0,7),s.fill(),s.beginPath(),s.arc(o+i*.85,e*.5,e*.18,0,7),s.fill(),s.fillStyle="#e9c34a",s.beginPath(),s.arc(o+i*.15,e*.5,e*.07,0,7),s.fill(),s.beginPath(),s.arc(o+i*.85,e*.5,e*.07,0,7),s.fill()}s.fillStyle="#1f5a48",s.fillRect(0,0,t,4),s.fillRect(0,e-4,t,4)})}function f1(){return Rs("changho",128,128,(s,t,e)=>{s.fillStyle="#8b2f25",s.fillRect(0,0,t,e),s.fillStyle="#c9b48a",s.fillRect(10,10,t-20,e-20),s.strokeStyle="#7a2a20",s.lineWidth=3;for(let n=10;n<=t-10;n+=12)s.beginPath(),s.moveTo(n,10),s.lineTo(n,e-10),s.stroke();for(let n=10;n<=e-10;n+=12)s.beginPath(),s.moveTo(10,n),s.lineTo(t-10,n),s.stroke()})}function d1(){return Rs("seokchuk",256,256,(s,t,e)=>{let n=pe("seokchuk");s.fillStyle="#6e6a62",s.fillRect(0,0,t,e);let i=32;for(let r=0,o=0;r<e;r+=i,o++){let a=o%2?-24:0;for(;a<t;){let l=40+n()*30,c=150+n()*40;s.fillStyle=`rgb(${c},${c-4},${c-12})`,s.fillRect(a+2,r+2,l-3,i-3);for(let h=0;h<12;h++)s.fillStyle=`rgba(0,0,0,${n()*.08})`,s.fillRect(a+n()*l,r+n()*i,3,3);a+=l}}})}function a0(s,t,e,n={}){let i=n.lift??.22*e,r=n.sag??1.55,o=28,a=16,l=Math.max(0,(s-t)/2)*(n.ridge??1),c=s/2,h=t/2,f=(m,p)=>{let v=Math.abs(p)/h,M=Math.max(0,Math.abs(m)-l)/h,_=Math.min(1,Math.max(v,M)),b=e*Math.pow(1-_,r),E=Math.abs(m)/c,A=Math.abs(p)/h;return b+=i*Math.pow(Math.max(E,A)>.75?Math.min(E,A)*Math.max(E,A):0,3)*1.2,b+=i*.35*Math.pow(E,4)*_,{y:b,t:_}},u=[],d=[],g=[];for(let m=0;m<=a;m++)for(let p=0;p<=o;p++){let v=-c+p/o*s,M=-h+m/a*t,{y:_,t:b}=f(v,M);u.push(v,_,M),d.push(Math.abs(M)/h>(Math.abs(v)-l)/h?v*1.4:M*1.4,b*2.2)}for(let m=0;m<a;m++)for(let p=0;p<o;p++){let v=m*(o+1)+p,M=v+1,_=v+o+1,b=_+1;g.push(v,_,M,M,_,b)}let x=new xe;return x.setAttribute("position",new Zt(u,3)),x.setAttribute("uv",new Zt(d,2)),x.setIndex(g),x.computeVertexNormals(),{geo:x,hAt:f,r:l,hw:c,hd:h}}function l0(s,t){let e=[],n=r=>{let o=new Qi(r);e.push(new yo(o,24,t,6,!1))},i=s.hAt(0,0).y;s.r>.01&&n([new P(-s.r-.02,i,0),new P(0,i,0),new P(s.r+.02,i,0)]);for(let r of[-1,1])for(let o of[-1,1]){let a=[];for(let l=0;l<=10;l++){let c=l/10,h=r*(s.r+(s.hw-s.r)*c),f=o*s.hd*c;a.push(new P(h,s.hAt(h*.999,f*.999).y+t*.6,f))}n(a)}return e}function Mc(){let s=o0();return{tile:new $t({map:s,roughness:.75,side:Xe}),ridge:new $t({color:14275784,roughness:.8}),dan:new $t({map:u1(),roughness:.8}),col:new $t({color:9318180,roughness:.7}),door:new $t({map:f1(),roughness:.85}),stone:new $t({map:d1(),roughness:.95}),stoneLight:new $t({color:13617336,roughness:.9}),dark:new be({color:921104}),plinth:new $t({color:12235683,roughness:.9})}}function _c(s,t,{w:e,d:n,h:i,y:r,bays:o=5,roofW:a,roofD:l,roofH:c,walls:h=!0,lift:f}){let u=(M,_,b,E,A)=>{let y=new ft(M,_);return y.position.set(b,E,A),y.castShadow=y.receiveShadow=!0,s.add(y),y},d=Math.min(e,n)*.035,g=new ee(d,d*1.1,i,8),x=Math.max(1,Math.round(o*n/e));for(let M=0;M<=o;M++)for(let _ of[-1,1])u(g,t.col,-e/2+M/o*e,r+i/2,_*n/2);for(let M=1;M<x;M++)for(let _ of[-1,1])u(g,t.col,_*e/2,r+i/2,-n/2+M/x*n);if(h){let M=new Lt(e*.98,i*.82,n*.9),_=M.attributes.uv;for(let b=0;b<_.count;b++)_.setX(b,_.getX(b)*o);u(M,t.door,0,r+i*.41,0)}let m=new Lt(e+d*4,i*.22,n+d*4),p=m.attributes.uv;for(let M=0;M<p.count;M++)p.setX(M,p.getX(M)*o*.6);u(m,t.dan,0,r+i+i*.11,0);let v=a0(a,l,c,{lift:f});u(v.geo,t.tile,0,r+i*1.2,0);for(let M of l0(v,c*.05))u(M,t.ridge,0,r+i*1.2,0);return r+i*1.2}function p1(s,t){let e=Mc(),n=t.w,i=t.d,r=(p,v,M,_,b)=>{let E=new ft(p,v);return E.position.set(M,_,b),E.castShadow=E.receiveShadow=!0,s.add(E),E},o=n*.62,a=i*.62,l=.85,c=new ee(1,1,1,4,1);c.rotateY(Math.PI/4);let h=c.attributes.position;for(let p=0;p<h.count;p++){let v=h.getY(p)>0,M=v?.94:1;h.setXYZ(p,Math.sign(h.getX(p))*o/2*M,h.getY(p)*l+l/2,Math.sign(h.getZ(p))*a/2*M)}c.computeVertexNormals();let f=c.attributes.uv;for(let p=0;p<f.count;p++)f.setXY(p,f.getX(p)*3,f.getY(p)*1);r(c,e.stone,0,0,0);for(let p of[-1,1]){let v=new Lt((n-o)/2,l*.75,a*.55),M=v.attributes.uv;for(let _=0;_<M.count;_++)M.setX(_,M.getX(_)*1.2);r(v,e.stone,p*(o/2+(n-o)/4),l*.375,0);for(let _=0;_<3;_++)r(new Lt(.14,.14,a*.55),e.stoneLight,p*(o/2+.15+_*.27),l*.82,0)}let u=l*.34,d=new Rn;d.moveTo(-u,0),d.lineTo(-u,l*.36),d.absarc(0,l*.36,u,Math.PI,0,!0),d.lineTo(u,0),d.closePath();let g=new gi(d,{depth:a*1.02,bevelEnabled:!1});g.translate(0,0,-a*.51),r(g,e.dark,0,.001,0);let x=new Nn(u*1.12,u*.1,6,16,Math.PI);for(let p of[-1,1])r(x,e.stoneLight,0,l*.36,p*a*.505);let m=_c(s,e,{w:o*.84,d:a*.62,h:.42,y:l,bays:5,roofW:n*.9,roofD:i*.86,roofH:.38,walls:!1,lift:.12});_c(s,e,{w:o*.7,d:a*.46,h:.34,y:m+.38*.5,bays:5,roofW:n*.72,roofD:i*.66,roofH:.48,walls:!0,lift:.14}),r(new Lt(o*.86,.04,a*.64),e.plinth,0,l+.02,0)}function m1(s,t){let e=Mc(),n=t.w,i=t.d,r=(l,c,h,f,u)=>{let d=new ft(l,c);return d.position.set(h,f,u),d.castShadow=d.receiveShadow=!0,s.add(d),d},o=0;for(let[l,c,h]of[[n*.92,i*.9,.22],[n*.76,i*.72,.22]]){let f=new Lt(l,h,c),u=f.attributes.uv;for(let g=0;g<u.count;g++)u.setX(g,u.getX(g)*4);r(f,e.stone,0,o+h/2,0);let d=14;for(let g=0;g<=d;g++)for(let x of[-1,1])r(new Lt(.05,.12,.05),e.stoneLight,-l/2+g/d*l,o+h+.06,x*(c/2-.03));for(let g of[-1,1])r(new Lt(l,.025,.03),e.stoneLight,0,o+h+.1,g*(c/2-.03));o+=h}r(new Lt(.5,.44,.5),e.stoneLight,0,.22,i*.42);let a=_c(s,e,{w:n*.6,d:i*.42,h:.62,y:o,bays:5,roofW:n*.82,roofD:i*.66,roofH:.32,walls:!0,lift:.1});_c(s,e,{w:n*.48,d:i*.3,h:.32,y:a+.32*.5,bays:5,roofW:n*.68,roofD:i*.52,roofH:.52,walls:!0,lift:.12})}function yc(s,t){return Rs("win"+s,256,256,(e,n,i)=>{let r=pe(s);e.fillStyle=t.wall,e.fillRect(0,0,n,i);let o=n/t.cols,a=i/t.rows;for(let l=0;l<t.rows;l++)for(let c=0;c<t.cols;c++){let h=c*o+o*t.mx,f=l*a+a*t.my,u=o*(1-2*t.mx),d=a*(1-2*t.my),g=r()<(t.lit||0);e.fillStyle=g?"#e8d9a8":t.glass,t.arch?(e.beginPath(),e.moveTo(h,f+d),e.lineTo(h,f+u/2),e.arc(h+u/2,f+u/2,u/2,Math.PI,0),e.lineTo(h+u,f+d),e.closePath(),e.fill()):e.fillRect(h,f,u,d),t.frame&&(e.strokeStyle=t.frame,e.lineWidth=2,e.strokeRect(h,f,u,d)),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(h,f,u*.4,d)}if(t.band){e.fillStyle=t.band;for(let l=0;l<=t.rows;l++)e.fillRect(0,l*a-2,n,4)}})}function g1(){return Rs("ddp",256,256,(s,t,e)=>{let n=pe("ddp");s.fillStyle="#5d6166",s.fillRect(0,0,t,e);let i=12,r=t/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=168+n()*50;if(s.fillStyle=`rgb(${l},${l+2},${l+6})`,s.fillRect(o*r+1,a*r+1,r-2,r-2),n()<.25){s.fillStyle="rgba(40,44,50,0.35)";for(let c=0;c<9;c++)s.fillRect(o*r+3+c%3*(r/3),a*r+3+Math.floor(c/3)*(r/3),2,2)}}})}function Au(s,t,e=1){let n=t.length;if(!n)return;let i=new Gn(new Ms(.16*e,1),new $t({color:16777215,roughness:1}),n),r=new Gn(new ee(.025*e,.035*e,.18*e,5),new $t({color:5916210,roughness:1}),n),o=new te,a=new _n,l=new Yt,c=pe("trees"+n);t.forEach(([h,f,u],d)=>{let g=.75+c()*.6;o.compose(new P(h,f+.2*e*g,u),a,new P(g,g*(.9+c()*.4),g)),i.setMatrixAt(d,o),o.compose(new P(h,f+.08*e,u),a,new P(1,1,1)),r.setMatrixAt(d,o),i.setColorAt(d,l.setHSL(.24+c()*.06,.38+c()*.15,.2+c()*.1))}),i.castShadow=r.castShadow=!0,i.receiveShadow=!0,s.add(i,r)}var As=s=>(t,e,n=0,i=0,r=0)=>{let o=new ft(t,e);return o.position.set(n,i,r),o.castShadow=o.receiveShadow=!0,s.add(o),o},bn=(s,t={})=>new $t(Object.assign({color:s,roughness:.85},t));function wu(s,t,e,n,i){let r=new Lt(s,t,e),o=r.attributes.uv,a=r.attributes.normal;for(let l=0;l<o.count;l++){let c=Math.abs(a.getX(l))>.5?e:s;o.setXY(l,o.getX(l)*c/n,o.getY(l)*t/i)}return r}function x1(s,t){let e=Mc(),n=As(s),i=t.w,r=t.d,o=new $t({map:o0("blue"),roughness:.45,metalness:.1,side:Xe}),a=new $t({map:yc("cwd",{wall:"#efeae0",glass:"#5d4a3a",cols:2,rows:1,mx:.18,my:.12,frame:"#8a2f25"}),roughness:.8}),l=bn(6195772,{roughness:1}),c=new Ne(i*.92,r*.4);c.rotateX(-Math.PI/2),n(c,l,0,.065,r*.27);let h=-r*.16;n(new Lt(i*.92,.12,r*.5),e.stone,0,.06,h),n(new Lt(.5,.1,.25),e.stoneLight,0,.05,h+r*.27);let f=new ee(.035,.04,.5,8),u=(d,g,x,m,p,v,M)=>{n(wu(g,m,x,.28,m),a,d,.12+m/2,h);for(let b=0;b<=6;b++)n(f,e.stoneLight,d-g/2+b/6*g,.12+m/2,h+x/2+.06).scale.y=m/.5;n(new Lt(g+.12,.07,x+.16),e.dan,d,.12+m+.035,h);let _=a0(p,v,M,{lift:M*.3});n(_.geo,o,d,.12+m+.07,h);for(let b of l0(_,M*.05))n(b,e.ridge,d,.12+m+.07,h)};u(0,i*.42,r*.3,.5,i*.56,r*.46,.55);for(let d of[-1,1])u(d*i*.33,i*.2,r*.24,.34,i*.27,r*.36,.3);Au(s,[[-i*.44,.06,r*.42],[i*.44,.06,r*.42],[-i*.44,.06,r*.12],[i*.44,.06,r*.12]],1)}function v1(s,t){let e=As(s),n=new Pe(1,28,12,0,Math.PI*2,0,Math.PI/2),i=bn(4284719,{roughness:1});e(n,i).scale.set(1.5,.8,1.3);let o=pe("namsan"),a=[];for(let d=0;d<70;d++){let g=o()*Math.PI*2,x=.25+Math.sqrt(o())*.72,m=Math.cos(g)*x*1.5,p=Math.sin(g)*x*1.3,v=.8*Math.sqrt(Math.max(0,1-x*x))-.05;a.push([m,v,p])}Au(s,a,.9);let l=.8,c=bn(13618889,{roughness:.7}),h=new $t({map:yc("ntg",{wall:"#2b3540",glass:"#3e5263",cols:16,rows:2,mx:.06,my:.12,lit:.25}),roughness:.15,metalness:.5});e(new ee(.34,.4,.22,20),bn(13224130),0,l+.11),e(new ee(.1,.15,2.5,16),c,0,l+.22+1.25);let f=l+2.72;for(let[d,g,x,m]of[[.12,.3,.12,c],[.33,.33,.2,h],[.34,.3,.07,c],[.29,.29,.12,h],[.3,.2,.1,c],[.2,.13,.1,c]])e(new ee(g,d,x,24),m,0,f+x/2),f+=x;let u=bn(13120042,{roughness:.6});for(let d=0;d<5;d++)e(new ee(.05-d*.006,.055-d*.006,.2,8),d%2?c:u,0,f+.1+d*.2);e(new Pe(.05,8,6),new be({color:16726574}),0,f+1.05)}function _1(s,t){let e=Mc(),n=As(s),i=bn(6714970,{metalness:.55,roughness:.45}),r=bn(12038565,{roughness:.8}),o=bn(4025994,{roughness:.05,metalness:.2});n(new ee(1,1.02,.12,40),r,0,.06),n(new ee(.92,.92,.02,40),o,0,.12);let a=new be({color:15398655,transparent:!0,opacity:.55});for(let m=0;m<16;m++){let p=m/16*Math.PI*2;n(new ee(.008,.02,.3,4),a,Math.cos(p)*.78,.27,Math.sin(p)*.78).castShadow=!1}n(new Lt(.78,.12,.78),r,0,.18),n(new Lt(.6,.86,.6),e.stone,0,.67),n(new Lt(.68,.06,.68),r,0,1.13);let l=new qt;l.position.y=1.16,l.scale.setScalar(1.35),s.add(l);let c=As(l),h=0,f=1;c(new ee(.12*f,.19*f,.46*f,12),i,0,h+.23),c(new ee(.13*f,.12*f,.32*f,12),i,0,h+.62),c(new Pe(1,12,6),i,0,h+.78).scale.set(.22,.07,.14);for(let m of[-1,1]){let p=c(new ee(.035,.04,.3,8),i,m*.13,h+.64,.07);p.rotation.x=-.6,p.rotation.z=m*.35}c(new Pe(.075,12,10),i,0,h+.9),c(new Dn(.085,.14,12),i,0,h+1.02),c(new Nn(.085,.015,6,16),i,0,h+.95).rotation.x=Math.PI/2,c(new Lt(.03,.62,.014),bn(7042404,{metalness:.8,roughness:.3}),0,h+.36,.17),c(new Lt(.1,.025,.03),i,0,h+.66,.17);let u=new qt;u.position.set(0,.13,.66),u.rotation.y=Math.PI/2,s.add(u);let d=As(u),g=bn(6965806),x=bn(3817269,{roughness:.7});d(new Lt(.5,.07,.16),g,0,.035),d(new Pe(1,12,6,0,Math.PI*2,0,Math.PI/2),x,0,.07).scale.set(.24,.07,.08),d(new Pe(.035,8,6),bn(9121573),.27,.08)}function y1(s,t){let e=As(s),n=t.w,i=t.d,r=bn(6195772,{roughness:1}),o=new mi(1,40);o.rotateX(-Math.PI/2),e(o,r,0,.065,i*.44).scale.set(n*.34,1,i*.05);let a=new $t({map:yc("cho",{wall:"#cbbd9d",glass:"#3a3f44",cols:4,rows:1,mx:.22,my:.18,arch:!0,band:"#b1a283"}),roughness:.9}),l=i*.3,c=.5;e(wu(n*.56,c,i*.2,.3,c/4),a,0,.06+c/2,l),e(new Lt(n*.58,.05,i*.22),bn(12036490),0,.06+c+.025,l),e(wu(.42,.78,i*.24,.42/2,.78/4),a,0,.06+.39,l+.02),e(new Lt(.46,.05,i*.26),bn(12036490),0,.06+.8,l+.02);let h=Rs("clock",64,64,M=>{M.fillStyle="#f3efe4",M.beginPath(),M.arc(32,32,30,0,7),M.fill(),M.strokeStyle="#222",M.lineWidth=4,M.beginPath(),M.moveTo(32,32),M.lineTo(32,10),M.moveTo(32,32),M.lineTo(46,38),M.stroke()});e(new mi(.11,20),new $t({map:h}),0,.68,l+.02+i*.12+.002);let f=new $t({map:yc("chn",{wall:"#7d93a3",glass:"#a9c7da",cols:10,rows:8,mx:.04,my:.06,lit:.08,frame:"#5a6a77"}),roughness:.12,metalness:.55,side:Xe}),u=1.3,d=n*.86,g=-i*.46,x=i*.12,m=new Rn;m.moveTo(g,0),m.lineTo(g,u),m.bezierCurveTo(g+.25,u+.3,x+.25,u*1.05,x,u*.5),m.lineTo(x-.08,u*.48),m.bezierCurveTo(x-.12,u*.7,x-.55,u*.55,x-.6,0),m.closePath();let p=new gi(m,{depth:d,bevelEnabled:!1,curveSegments:20});p.rotateY(-Math.PI/2),p.translate(d/2,.06,0);let v=p.attributes.uv;for(let M=0;M<v.count;M++)v.setXY(M,v.getX(M)*2.6,v.getY(M)*3.2);e(p,f)}function M1(s,t){let e=As(s),n=t.w,i=t.d,r=n*.45,o=i*.4,a=4,l=96,c=18,h=[],f=[],u=[];for(let x=0;x<=c;x++){let m=x/c;for(let p=0;p<=l;p++){let v=p/l*Math.PI*2,M=Math.cos(v),_=Math.sin(v),b=r*Math.sign(M)*Math.pow(Math.abs(M),2/a)*m,E=o*Math.sign(_)*Math.pow(Math.abs(_),2/a)*m,y=(.62+.3*Math.cos(v-.5)+.12*Math.cos(2*v+1))*Math.pow(Math.max(0,1-Math.pow(m,7)),.42);h.push(b,y,E),f.push(p/l*14,(1-m)*3+y*2)}}for(let x=0;x<c;x++)for(let m=0;m<l;m++){let p=x*(l+1)+m,v=p+1,M=p+l+1,_=M+1;u.push(p,v,M,v,_,M)}let d=new xe;d.setAttribute("position",new Zt(h,3)),d.setAttribute("uv",new Zt(f,2)),d.setIndex(u),d.computeVertexNormals(),e(d,new $t({map:g1(),metalness:.6,roughness:.52,side:Xe}),0,.06,0);let g=new Pe(1,24,8,0,Math.PI*2,0,Math.PI/2);e(g,bn(6064698,{roughness:1}),-n*.36,.06,i*.28).scale.set(.75,.22,.42),Au(s,[[-n*.47,.06,-i*.4],[n*.47,.06,i*.42],[n*.47,.06,-i*.42],[-n*.2,.06,i*.46]],1)}var Ru={namdaemun:p1,gyeongbok:m1,cheongwadae:x1,ntower:v1,yisunsin:_1,cityhall:y1,ddp:M1};var Xn={};function S1(s,t,e,n,i){let r=new Float32Array((e+1)*(n+1));for(let l=0;l<=n;l++)for(let c=0;c<=e;c++)r[l*(e+1)+c]=i();for(let l=0;l<=n;l++)r[l*(e+1)+e]=r[l*(e+1)];for(let l=0;l<=e;l++)r[n*(e+1)+l]=r[l];let o=new Float32Array(s*t),a=l=>l*l*(3-2*l);for(let l=0;l<t;l++){let c=l/t*n,h=Math.floor(c),f=a(c-h);for(let u=0;u<s;u++){let d=u/s*e,g=Math.floor(d),x=a(d-g),m=r[h*(e+1)+g],p=r[h*(e+1)+g+1],v=r[(h+1)*(e+1)+g],M=r[(h+1)*(e+1)+g+1];o[l*s+u]=(m+(p-m)*x)*(1-f)+(v+(M-v)*x)*f}}return o}function cn(s,t,e,n,i,r=1){let o=new Float32Array(s*t),a=1,l=0;for(let c=0;c<n;c++){let h=e<<c,f=S1(s,t,Math.max(1,Math.round(h*r)),h,i);for(let u=0;u<o.length;u++)o[u]+=f[u]*a;l+=a,a*=.55}for(let c=0;c<o.length;c++)o[c]/=l;return o}var qe=s=>s<0?0:s>255?255:s;function Lr(s,t,e,n){if(Xn[s])return Xn[s];let i=()=>{let d=document.createElement("canvas");return d.width=t,d.height=e,d},r=i(),o=i(),a=r.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(t,e),h=l.createImageData(t,e);n(c.data,h.data,a,l),a.putImageData(c,0,0),l.putImageData(h,0,0),n.after&&n.after(a,l);let f=new un(r);f.colorSpace=Oe;let u=new un(o);for(let d of[f,u])d.wrapS=d.wrapT=ve,d.anisotropy=8;return Xn[s]={map:f,bump:u}}function h0(){return Lr("lawn",512,512,(t,e)=>{let n=pe("rlawn"),i=cn(512,512,2,3,n),r=cn(512,512,8,3,n),o=cn(512,512,64,2,n),a=cn(512,512,3,3,n);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=l*512+c,f=h*4,u=n(),d=Math.sin(l/512*Math.PI*4)>0?1.035:.965,g=(.72+i[h]*.32+(r[h]-.5)*.25+(o[h]-.5)*.3+(u-.5)*.22)*d,x=Math.max(0,(a[h]-.58)*3.2),m=78*g,p=104*g,v=50*g;m+=x*46,p+=x*16,v+=x*6,t[f]=qe(m),t[f+1]=qe(p),t[f+2]=qe(v),t[f+3]=255;let M=qe(110+(o[h]-.5)*120+(u-.5)*90);e[f]=e[f+1]=e[f+2]=M,e[f+3]=255}})}function u0(){let e=(i,r)=>{let o=pe("rroad-after"),a=(l,c,h)=>{for(let f=0;f<432;f+=2){let u=o();i.globalAlpha=u<.08?.35:.82+o()*.18,i.fillStyle=h,i.fillRect(l,f,c,2),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(l,f,c,2)}i.globalAlpha=1};a(14,6,"#e9e7e0"),a(236,6,"#e9e7e0"),a(120,5,"#e2b93b"),a(131,5,"#e2b93b"),i.strokeStyle="rgba(25,25,27,0.55)",r.strokeStyle="rgba(0,0,0,0.7)";for(let l=0;l<5;l++){let c=30+o()*196,h=o()*432;i.lineWidth=r.lineWidth=1+o(),i.beginPath(),r.beginPath(),i.moveTo(c,h),r.moveTo(c,h);for(let f=0;f<6;f++)c+=o()*22-11,h+=o()*26-6,i.lineTo(c,h),r.lineTo(c,h);i.stroke(),r.stroke()}},n=(i,r)=>{let o=pe("rroad"),a=cn(256,432,2,3,o,.6),l=cn(256,432,48,2,o,.6),c=cn(256,432,2,2,o,.6);for(let h=0;h<432;h++)for(let f=0;f<256;f++){let u=h*256+f,d=u*4,g=f/256,x=o(),m=g<.5?g/.5:(g-.5)/.5,p=Math.exp(-Math.pow((m-.3)/.08,2))+Math.exp(-Math.pow((m-.72)/.08,2)),v=98+(a[u]-.5)*20+(l[u]-.5)*24+(x-.5)*26-p*8;c[u]>.66&&(v-=9),x>.985&&(v+=40),i[d]=qe(v),i[d+1]=qe(v+1),i[d+2]=qe(v+4),i[d+3]=255;let M=qe(120+(l[u]-.5)*140+(x-.5)*110-p*25);r[d]=r[d+1]=r[d+2]=M,r[d+3]=255}};return n.after=e,Lr("road",256,432,n)}function f0(){return Lr("walk",256,256,(e,n)=>{let i=pe("rwalk"),r=cn(256,256,8,3,i),o=cn(256,256,64,1,i),a=32,l=64,c=[];for(let h=0;h<64;h++)c.push(.88+i()*.2);for(let h=0;h<256;h++)for(let f=0;f<256;f++){let u=h*256+f,d=u*4,g=Math.floor(h/l),x=g%2?a/2:0,m=Math.floor((f+x)/a)%(256/a),p=(g*8+m)%64,v=(f+x)%a,M=h%l,_=v<2||M<2,b=(172+(r[u]-.5)*30+(o[u]-.5)*26+(i()-.5)*18)*c[p];_&&(b*=.62),e[d]=qe(b),e[d+1]=qe(b*.985),e[d+2]=qe(b*.95),e[d+3]=255;let E=_?40:qe(170+(o[u]-.5)*70);n[d]=n[d+1]=n[d+2]=E,n[d+3]=255}})}function d0(){return Lr("concrete",256,256,(t,e)=>{let n=pe("rconc"),i=cn(256,256,4,4,n);for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=r*256+o,l=a*4,c=n(),h=o%128<2||r%128<2,f=132+(i[a]-.5)*40+(c-.5)*22;h&&(f*=.7),t[l]=qe(f),t[l+1]=qe(f+1),t[l+2]=qe(f+3),t[l+3]=255;let u=h?50:qe(140+(c-.5)*60);e[l]=e[l+1]=e[l+2]=u,e[l+3]=255}})}function p0(){let e=(n,i)=>{let r=pe("rblvd"),o=cn(512,512,2,3,r),a=cn(512,512,64,2,r),l=cn(512,512,3,2,r);for(let c=0;c<512;c++)for(let h=0;h<512;h++){let f=c*512+h,u=f*4,d=r(),g=Math.abs((c/512-.5)*8.5),x=g%.8,m=Math.exp(-Math.pow((x-.25)/.07,2))+Math.exp(-Math.pow((x-.55)/.07,2)),p=64+(o[f]-.5)*20+(a[f]-.5)*24+(d-.5)*26-(g<2.2?m*7:0);l[f]>.7&&(p-=9),d>.986&&(p+=36),n[u]=qe(p),n[u+1]=qe(p+1),n[u+2]=qe(p+4),n[u+3]=255;let v=qe(120+(a[f]-.5)*130+(d-.5)*100);i[u]=i[u+1]=i[u+2]=v,i[u+3]=255}};return e.after=(n,i)=>{let r=pe("rblvd2"),o=512/8.5,a=(l,c,h,f)=>{for(let u of l===0?[1]:[-1,1]){let d=256+u*l*o-c*o/2;for(let g=0;g<512;g+=2)f&&g/o%(8.5/2)>8.5/4||(n.globalAlpha=r()<.07?.35:.85+r()*.15,n.fillStyle=h,n.fillRect(g,d,2,c*o),i.fillStyle="rgba(255,255,255,0.3)",i.fillRect(g,d,2,c*o));n.globalAlpha=1}};a(.07,.06,"#e2b93b"),a(.8,.05,"#ebe9e2",!0),a(1.6,.05,"#ebe9e2",!0),a(2.2,.06,"#ebe9e2");for(let[l,c]of[[1.7,1.2],[6.1,-1.25]]){let h=l*o,f=512/2+c*o,u=.16*o;n.fillStyle="#2c2d2f",n.beginPath(),n.arc(h,f,u,0,7),n.fill(),n.strokeStyle="#4a4b4e",n.lineWidth=2,n.beginPath(),n.arc(h,f,u*.7,0,7),n.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(h,f,u,0,7),i.fill()}},Lr("blvd",512,512,e)}function m0(){return Lr("plaza",256,256,(t,e)=>{let n=pe("rplaza"),i=cn(256,256,3,4,n);for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=r*256+o,l=a*4,c=n(),h=o%64<1||r%64<1,f=176+(i[a]-.5)*12+(c-.5)*8;h&&(f-=14),t[l]=qe(f),t[l+1]=qe(f+1),t[l+2]=qe(f+3),t[l+3]=255;let u=h?90:qe(140+(c-.5)*30);e[l]=e[l+1]=e[l+2]=u,e[l+3]=255}})}function g0(){if(Xn.zebra)return Xn.zebra;let s=document.createElement("canvas");s.width=64,s.height=256;let t=s.getContext("2d"),e=pe("zebra");for(let i=0;i<256;i+=32)for(let r=0;r<64;r+=2)t.globalAlpha=.75+e()*.25,t.fillStyle="#ecebe6",t.fillRect(r,i+4,2,18);let n=new un(s);return n.colorSpace=Oe,n.anisotropy=8,Xn.zebra=n}var c0=["#c9b79c","#9c9a95","#b46a4f","#d8d4cb","#8a7d6b","#a7b0b5"],Dr=["#d23b2f","#1f6fc2","#f2c230","#2e9c5a","#e26c1f","#7a3fb0","#ffffff"];function x0(s){if(Xn["shop"+s])return Xn["shop"+s];let t=128,e=192,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=pe("shop"+s),o=e/5;i.fillStyle=c0[s%c0.length],i.fillRect(0,0,t,e);for(let c=0;c<500;c++)i.fillStyle=`rgba(0,0,0,${r()*.06})`,i.fillRect(r()*t,r()*e,2,2);let a=2+s%2;for(let c=0;c<4;c++){let h=c*o+o*.22;for(let f=0;f<a;f++){let u=t/a,d=f*u+u*.14,g=r()<.2;i.fillStyle=g?"#e6d6a4":r()<.5?"#3c4651":"#4d5a66",i.fillRect(d,h,u*.72,o*.55),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(d,h,u*.25,o*.55)}if(r()<.55){i.fillStyle=Dr[Math.floor(r()*Dr.length)],i.fillRect(4,h+o*.58,t-8,o*.18),i.fillStyle="rgba(255,255,255,0.85)";for(let f=0;f<5;f++)i.fillRect(12+f*20,h+o*.62,12,o*.1)}}if(r()<.7){i.fillStyle=Dr[Math.floor(r()*Dr.length)],i.fillRect(t-18,o*.3,14,o*3.2),i.fillStyle="#fff";for(let c=0;c<6;c++)i.fillRect(t-14,o*.5+c*o*.5,6,o*.28)}i.fillStyle=Dr[s%Dr.length],i.fillRect(0,4*o,t,o*.26),i.fillStyle="rgba(255,255,255,0.9)";for(let c=0;c<4;c++)i.fillRect(14+c*26,4*o+o*.07,16,o*.12);i.fillStyle="#2b3138",i.fillRect(4,4*o+o*.3,t-8,o*.7),i.fillStyle="rgba(240,226,180,0.55)",i.fillRect(8,4*o+o*.36,t*.55,o*.6),i.fillStyle="#6a6e73",i.fillRect(t*.66,4*o+o*.3,3,o*.7);let l=new un(n);return l.colorSpace=Oe,l.anisotropy=4,l.wrapS=ve,Xn["shop"+s]=l}function v0(s){if(Xn["office"+s])return Xn["office"+s];let t=128,e=128,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=pe("office"+s);i.fillStyle=["#5d6e7c","#6b7a70","#4f5b6a"][s%3],i.fillRect(0,0,t,e);for(let a=0;a<e;a+=16)for(let l=0;l<t;l+=16){let c=r()<.15;i.fillStyle=c?"#d9cfa2":`rgb(${120+r()*30},${150+r()*30},${170+r()*30})`,i.fillRect(l+1,a+1,14,13)}let o=new un(n);return o.colorSpace=Oe,o.anisotropy=4,o.wrapS=o.wrapT=ve,Xn["office"+s]=o}var jo=new P;function qn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;jo.copy(t),jo[n]=0,jo.normalize();let c=.5*o/(o+a),h=1-jo.angleTo(s)/l;return Math.sign(jo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Sc=class s extends Lt{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new P,m=.5/o;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[v+0]=qn(x,c,"z","y",r,n),d[v+1]=1-qn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[v+0]=1-qn(x,c,"z","y",r,n),d[v+1]=1-qn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[v+0]=1-qn(x,c,"x","z",r,t),d[v+1]=qn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-qn(x,c,"x","z",r,t),d[v+1]=1-qn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-qn(x,c,"x","y",r,t),d[v+1]=1-qn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[v+0]=qn(x,c,"x","y",r,t),d[v+1]=1-qn(x,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var _0={},Ei=(s,t)=>_0[s]||(_0[s]=t()),sn=s=>(+s).toFixed(3),ct=(s,t,e,n=.012)=>Ei(`rb${sn(s)},${sn(t)},${sn(e)},${n}`,()=>Jo(new Sc(s,t,e,1,Math.min(n,Math.min(s,t,e)/2-1e-4)))),Ee=(s,t,e)=>Ei(`bx${sn(s)},${sn(t)},${sn(e)}`,()=>new Lt(s,t,e)),Nt=(s,t,e,n=14)=>Ei(`cy${sn(s)},${sn(t)},${sn(e)},${n}`,()=>new ee(s,t,e,n)),Cs=(s,t=14,e=1)=>Ei(`sp${sn(s)},${t},${e}`,()=>new Pe(s,t,Math.max(6,t>>1),0,Math.PI*2,0,Math.PI*e)),Ec=(s,t)=>Ei(`ca${sn(s)},${sn(t)}`,()=>new vs(s,t,3,8));function bi(s,t,e,n=.006){return Ei("pr"+s,()=>{let i=new Rn(t.map(([o,a])=>new j(o,a))),r=new gi(i,{depth:e-n*2,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:1,curveSegments:6});return r.translate(0,0,-(e-n*2)/2),r.deleteAttribute("uv"),r=Jo(r),r.computeVertexNormals(),T0(r),r})}function Pu(s,t,e,n=.006){return Ei("sl"+s,()=>{let i=new Rn(t.map(([o,a])=>new j(o,-a))),r=new gi(i,{depth:e-n*2,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:1});return r.rotateX(-Math.PI/2),r.translate(0,n,0),r.deleteAttribute("uv"),r=Jo(r),r.computeVertexNormals(),T0(r),r})}function T0(s){let t=s.attributes.position.count;s.setAttribute("uv",new Le(new Float32Array(t*2),2))}function b1(s,t,e,n,i,r){return Ei(`tl${sn(s)},${sn(t)},${sn(e)},${sn(n)},${sn(i)},${sn(r)}`,()=>{let o=new Rn;o.absarc(t,e,n,-Math.PI/2,Math.PI/2,!1),o.absarc(s,e,n,Math.PI/2,Math.PI*1.5,!1);let a=new _s,l=n-i;a.absarc(t,e,l,-Math.PI/2,Math.PI/2,!1),a.absarc(s,e,l,Math.PI/2,Math.PI*1.5,!1),o.holes.push(a);let c=new gi(o,{depth:r,bevelEnabled:!1,curveSegments:10});c.translate(0,0,-r/2);let h=c.attributes.position,f=c.attributes.uv;for(let u=0;u<h.count;u++){let d=h.getX(u),g=h.getY(u);f.setXY(u,d*34+(Math.abs(d-(s+t)/2)>(t-s)/2?(g-e)*34:0),h.getZ(u)/r+.5)}return Jo(c)})}var ii={};function Ze(s,t){return ii[s]||(ii[s]=new $t(Object.assign({roughness:.7,metalness:.15},t)))}var nn=()=>Ze("steel",{color:3421743,roughness:.42,metalness:.65}),_t=()=>Ze("dark",{color:2039837,roughness:.6,metalness:.35}),Pc=()=>Ze("rubber",{color:1710617,roughness:.92,metalness:0}),ki=()=>Ze("glass",{color:1713969,roughness:.06,metalness:.9,envMapIntensity:2.5}),wc=()=>Ze("lamp",{color:16774358,emissive:16773320,emissiveIntensity:.6,roughness:.2}),y0=()=>Ze("skin",{color:13146740,roughness:.75,metalness:0}),ni=()=>Ze("red",{color:10819356,roughness:.55,metalness:.2}),E1=()=>Ze("redl",{color:16722464,emissive:16718352,emissiveIntensity:1.6,roughness:.3}),Qo=()=>Ze("white",{color:14277587,roughness:.5,metalness:.1}),Re=(s,t=.68,e=.25)=>Ze("p"+s+t+e,{color:s,roughness:t,metalness:e}),T1={kor:["#5b6440","#3f4a2e","#6f5a3c","#23251e"],nato:["#58603f","#363d29","#5a4a33","#1f211b"],tan:["#ad9a74","#a08d68","#b5a37c","#94825f"],jgsdf:["#5e6b45","#40472f","#6d5c3f","#2a2c22"],enemy:["#5d605b","#474a45","#6d6e67","#33352f"],uni:["#6a6e4c","#4d5236","#7d6c4c","#30321f"],euni:["#4b4f4a","#383b37","#5e5f58","#2a2c29"]};function w1(s){let t="camo_"+s;if(ii[t])return ii[t];let e=256,n=T1[s].map(g=>[1,3,5].map(x=>parseInt(g.slice(x,x+2),16))),i=pe(t),r=cn(e,e,3,4,i),o=cn(e,e,3,4,i),a=cn(e,e,4,3,i),l=cn(e,e,32,2,i),c=document.createElement("canvas");c.width=c.height=e;let h=c.getContext("2d"),f=h.createImageData(e,e),u=f.data;for(let g=0;g<e*e;g++){let x=n[0];r[g]>.56&&(x=n[1]),o[g]>.6&&(x=n[2]),a[g]>.66&&(x=n[3]);let m=.9+(l[g]-.5)*.35;u[g*4]=Math.min(255,x[0]*m),u[g*4+1]=Math.min(255,x[1]*m),u[g*4+2]=Math.min(255,x[2]*m),u[g*4+3]=255}h.putImageData(f,0,0);let d=new un(c);return d.colorSpace=Oe,d.wrapS=d.wrapT=ve,d.anisotropy=4,ii[t]=d}function On(s,t=2.2,e=.72){let n=`camoM_${s}_${t}`;if(ii[n])return ii[n];let i=new $t({map:w1(s),roughness:e,metalness:.18});return i.onBeforeCompile=r=>{r.uniforms.triScale={value:t},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position; vON = normal;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON; uniform float triScale;`).replace("#include <map_fragment>",`
        vec3 tb = pow(abs(normalize(vON)), vec3(4.0)); tb /= (tb.x + tb.y + tb.z);
        vec3 tp = vOP * triScale;
        vec4 sampledDiffuseColor = texture2D(map, tp.zy) * tb.x + texture2D(map, tp.xz + 0.37) * tb.y + texture2D(map, tp.xy + 0.71) * tb.z;
        diffuseColor *= sampledDiffuseColor;`)},i.customProgramCacheKey=()=>"tri"+t,ii[n]=i}function A1(){if(ii.track)return ii.track;let s=document.createElement("canvas");s.width=64,s.height=64;let t=s.getContext("2d");t.fillStyle="#262624",t.fillRect(0,0,64,64),t.fillStyle="#3a3a36",t.fillRect(4,3,56,40),t.fillStyle="#4a4943",t.fillRect(4,3,56,7),t.fillStyle="#151514",t.fillRect(0,46,64,18),t.fillRect(29,0,6,64);let e=new un(s);e.colorSpace=Oe,e.wrapS=e.wrapT=ve;let n=new un(s);return n.wrapS=n.wrapT=ve,ii.track=new $t({map:e,bumpMap:n,bumpScale:2,roughness:.82,metalness:.45})}var M0=()=>Ze("sandbag",{color:10982512,roughness:.95,metalness:0});function N(s,t,e,n=0,i=0,r=0,o=0,a=0,l=0){let c=new ft(t,e);return c.position.set(n,i,r),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,s.add(c),c}var Ac=s=>(s.castShadow=!1,s);function ke(s,t,e,n,i,r=!0){let o=new P(...t),a=new P(...e),l=o.distanceTo(a),c=N(s,r?Ec(n,Math.max(.001,l)):Nt(n,n,l,8),i);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new P(0,1,0),a.clone().sub(o).normalize()),c}var $n=(s,t,e,n,i,r,o=0,a=0,l=14)=>N(s,Nt(e,t,n,l),i,r+n/2,o,a,0,0,-Math.PI/2);function Rc(s,t,e,n,i,r,o){let a=Math.sign(n)||1;N(s,Nt(i,i,r,18),Pc(),t,e,n,Math.PI/2,0,0),N(s,Nt(i*.62,i*.62,r*1.04,14),o,t,e,n,Math.PI/2,0,0),N(s,Nt(i*.22,i*.3,r*.4,8),nn(),t,e,n+a*r*.6,Math.PI/2,0,0)}function R1(s,t,e,n,i,r){N(s,Nt(i,i,r,16),Pc(),t,e,n,Math.PI/2,0,0),N(s,Nt(i*.8,i*.8,r*1.08,14),nn(),t,e,n,Math.PI/2,0,0),N(s,Nt(i*.25,i*.25,r*1.3,8),_t(),t,e,n,Math.PI/2,0,0)}function w0(s,t){let{x0:e,x1:n,y:i,r,w:o,n:a,z:l,wr:c}=t;N(s,b1(e,n,i,r,.016,o),A1(),0,0,l);let h=n-e;for(let f=0;f<a;f++)R1(s,e+.06+f*(h-.12)/(a-1),i-r+.016+c,l,c,o*.82);N(s,Nt(r*.82,r*.82,o*.9,12),nn(),n,i,l,Math.PI/2,0,0),N(s,Nt(r*.78,r*.78,o*.9,12),_t(),e,i,l,Math.PI/2,0,0);for(let f=0;f<3;f++)N(s,Nt(.012,.012,o*.6,8),nn(),e+h*(.25+f*.25),i+r-.028,l,Math.PI/2,0,0)}function Cc(s,t,e,n,i,r,o){for(let a=0;a<i;a++)N(s,Nt(.011,.011,.05,8),o,t-a*.022,e+.02,n,.6*r,0,-.5)}var Hi=(s,t,e,n,i)=>Ac(N(s,Nt(.003,.005,i,4),_t(),t,e+i/2,n));function Tc(s,t){let{x:e=0,z:n=0,ry:i=0,pose:r="stand",uni:o,gear:a,helm:l,kit:c="rifle",side:h="ally"}=t,f=new qt;f.position.set(e,0,n),f.rotation.y=i,s.add(f);let u=r==="kneel",d=u?.13:.21;if(u)ke(f,[0,d,-.035],[.075,d-.01,-.04],.022,o),ke(f,[.075,d-.01,-.04],[.08,.025,-.04],.02,o),N(f,ct(.055,.025,.032,.008),_t(),.095,.013,-.04),ke(f,[0,d,.035],[0,.03,.045],.022,o),ke(f,[0,.03,.045],[-.11,.025,.045],.02,o),N(f,ct(.03,.03,.032,.008),_t(),-.13,.02,.045);else for(let M of[-1,1])ke(f,[0,d,M*.034],[M*.02,.11,M*.036],.022,o),ke(f,[M*.02,.11,M*.036],[M*-.01,.03,M*.036],.02,o),N(f,ct(.055,.026,.032,.008),_t(),M*-0+.012,.013,M*.036);let g=d,x=u?.18:.08,m=new qt;m.position.set(0,g,0),m.rotation.z=-x,f.add(m),N(m,ct(.07,.13,.1,.025),o,0,.07,0),N(m,ct(.085,.09,.108,.015),a,.002,.085,0);for(let M of[-1,0,1])N(m,ct(.022,.03,.026,.006),a,.05,.06,M*.03);N(m,ct(.05,.08,.085,.015),a,-.065,.085,0),N(m,Nt(.016,.018,.03,8),y0(),.005,.15,0),N(m,Cs(.03,12),y0(),.008,.175,0),N(m,Cs(.038,14,.5),l,0,.178,0).scale.set(1.05,.95,1),N(m,ct(.012,.012,.04,.004),_t(),.035,.192,0),h==="enemy"&&N(m,ct(.03,.02,.112,.004),ni(),0,.12,0);let v=.13;if(c==="rifle"||c==="binoc")if(ke(m,[0,v,-.05],[.05,v-.05,-.055],.017,o),ke(m,[.05,v-.05,-.055],[.1,v-.02,-.02],.015,o),ke(m,[0,v,.05],[.03,v-.06,.05],.017,o),ke(m,[.03,v-.06,.05],[.05,v-.03,.012],.015,o),c==="rifle"){let M=new qt;M.position.set(.04,v-.025,.005),M.rotation.z=x*.9,m.add(M),N(M,ct(.12,.022,.014,.004),_t(),.03,0,0),N(M,Nt(.005,.005,.09,6),nn(),.13,.004,0,0,0,Math.PI/2),N(M,ct(.016,.04,.012,.003),_t(),.04,-.025,0,0,0,h==="enemy"?.35:.1),N(M,ct(.05,.026,.012,.004),_t(),-.05,-.008,0),N(M,ct(.03,.014,.012,.003),_t(),.03,.019,0)}else N(m,ct(.03,.022,.05,.006),_t(),.06,.168,0);else c==="grip"?(ke(m,[0,v,-.05],[.06,v-.05,-.05],.017,o),ke(m,[.06,v-.05,-.05],[.11,v-.03,-.02],.015,o),ke(m,[0,v,.05],[.06,v-.05,.05],.017,o),ke(m,[.06,v-.05,.05],[.11,v-.03,.02],.015,o)):c==="shoulder"&&(ke(m,[0,v,-.05],[.04,v-.04,-.06],.017,o),ke(m,[.04,v-.04,-.06],[.06,v+.02,-.05],.015,o),ke(m,[0,v,.05],[.05,v-.03,.06],.017,o),ke(m,[.05,v-.03,.06],[.12,v+.025,.05],.015,o));return f}var S0=()=>({uni:On("uni",3.2,.9),gear:Re(4935478,.9,0),helm:On("uni",3.2,.8)}),C1=()=>({uni:On("euni",3.2,.9),gear:Re(2961196,.9,0),helm:Re(3882554,.6,.2),side:"enemy"});function b0(s,t,e,n,i){for(let r=0;r<i;r++){let o=e+(n-e)*(r+.5)/i;N(s,ct(.13,.055,.075,.025),M0(),Math.cos(o)*t,.03,Math.sin(o)*t,0,-o+Math.PI/2,0),N(s,ct(.13,.055,.075,.025),M0(),Math.cos(o+(n-e)/i/2)*(t-.01),.083,Math.sin(o+(n-e)/i/2)*(t-.01),0,-o+Math.PI/2,0)}}var Cu=null;function Yn(s,t,e){if(!Cu){let i=document.createElement("canvas");i.width=i.height=64;let r=i.getContext("2d"),o=r.createRadialGradient(32,32,4,32,32,32);o.addColorStop(0,"rgba(0,0,0,0.55)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,64,64),Cu=new be({map:new un(i),transparent:!0,depthWrite:!1})}let n=new ft(Ei("blobg",()=>new Ne(1,1).rotateX(-Math.PI/2)),Cu);return n.scale.set(t,1,e),n.position.y=.004,n.renderOrder=1,s.add(n),n.userData.keep=!0,n}function ta(s,t,e,n,i,r){for(let o of t)for(let a of[-1,1])Rc(s,o,n,a*e,n,i,r)}function bc(s,t,e,n,i,r,o,a=!1){let l=e-t,c=(t+e)/2;N(s,ct(l,i*.55,n,.02),o,c,r+i*.275,0),N(s,bi(`cab${sn(l)},${sn(i)},${a}`,[[-l/2,0],[l/2-.01,0],[l/2-(a?.07:.05),i*.45],[-l/2,i*.45]],n,.008),o,c,r+i*.55,0);let h=Math.atan2(a?.07:.05,i*.45);for(let f of[-1,1])N(s,Ee(.006,i*.32,n*.4),ki(),e-.012-(a?.035:.025),r+i*.77,f*n*.22,0,0,h);for(let f of[-1,1])N(s,Ee(l*.42,i*.25,.004),ki(),c+l*.12,r+i*.78,f*(n/2+.001));N(s,ct(.04,.035,n*1.04,.008),_t(),e+.012,r+.02,0);for(let f of[-1,1])N(s,Nt(.013,.013,.01,10),wc(),e+.002,r+i*.3,f*n*.36,0,0,Math.PI/2),N(s,ct(.015,.035,.01,.003),_t(),e-.06,r+i*.8,f*(n/2+.02));for(let f=0;f<4;f++)N(s,Ee(.004,.008,n*.4),_t(),e+.001,r+i*.12+f*.022,0)}function A0(s){s==="ewcar"&&(s="jammer");let t=new qt,e=new qt;t.add(e);let n=new qt;e.add(n);let i=new $e,r=[],o=[],a=P1[s];return a?(a({root:t,yaw:e,pitch:n,muzzle:i,spin:r,glow:o}),n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:r,glow:o}):null}var P1={browning({root:s,yaw:t,pitch:e,muzzle:n}){Yn(s,.95,.95),b0(s,.36,-1.9,1.9,9);let i=S0();for(let[r,o]of[[.16,.12],[.16,-.12],[-.2,0]])ke(t,[0,.19,0],[r,0,o],.008,_t(),!1);N(t,Nt(.02,.025,.04,10),_t(),0,.2,0),e.position.set(0,.23,0),N(e,ct(.2,.06,.055,.008),nn(),-.02,0,0),N(e,ct(.14,.012,.05,.004),_t(),0,.035,0);for(let r of[-1,1])N(e,Nt(.006,.006,.05,6),_t(),-.14,-.005,r*.018,0,0,Math.PI/2);N(e,ct(.02,.03,.05,.005),_t(),-.13,0,0),N(e,Nt(.018,.018,.12,12),_t(),.14,.004,0,0,0,Math.PI/2);for(let r=0;r<4;r++)N(e,Nt(.0185,.0185,.006,12),nn(),.1+r*.026,.004,0,0,0,Math.PI/2);$n(e,.011,.01,.33,nn(),.2,.004),N(e,Nt(.016,.016,.03,10),_t(),.54,.004,0,0,0,Math.PI/2),N(e,ct(.06,.05,.035,.005),Re(5001779),-0,-.035,.05),N(e,Ee(.02,.008,.04),Ze("brass",{color:11569726,roughness:.35,metalness:.9}),0,0,.035),n.position.set(.58,.004,0),Tc(t,Object.assign({x:-.3,z:0,pose:"kneel",kit:"grip"},i)),N(t,ct(.09,.06,.06,.008),Re(5001779),-.1,.03,.2),N(t,ct(.09,.06,.06,.008),Re(5001779),-.1,.03,.27)},k9({root:s,yaw:t,pitch:e,muzzle:n}){let i=On("kor");Yn(s,1.15,.6),N(t,bi("k9hull",[[-.43,.075],[.34,.075],[.45,.15],[.32,.235],[-.43,.235],[-.44,.16]],.3),i);for(let r of[-1,1])N(t,ct(.86,.014,.075,.004),i,-.005,.228,r*.19),N(t,ct(.66,.045,.012,.004),i,-.04,.2,r*.226),w0(t,{x0:-.37,x1:.37,y:.11,r:.075,w:.075,n:6,z:r*.185,wr:.047});for(let r=0;r<5;r++)N(t,Ee(.012,.006,.11),_t(),.2+r*.022,.24,-.07);N(t,ct(.05,.02,.06,.006),_t(),.12,.24,-.13),N(t,Nt(.032,.032,.012,14),i,.25,.242,.08);for(let r of[-1,1])N(t,Nt(.014,.014,.012,10),wc(),.42,.17,r*.12,0,0,Math.PI/2-.6),N(t,ct(.03,.03,.03,.006),_t(),.41,.17,r*.12);for(let r of[-1,1])ke(t,[.36,.2,r*.05],[.4,.3,0],.006,_t(),!1);N(t,bi("k9tur",[[-.38,0],[.09,0],[.17,.06],[.13,.165],[-.37,.165]],.36,.008),i,0,.235,0),N(t,ct(.08,.1,.34,.01),i,-.41,.31,0);for(let r=0;r<4;r++)N(t,Ee(.004,.09,.345),_t(),-.44+r*.02,.31,0);N(t,ct(.07,.04,.05,.01),Re(4869940),-.4,.38,.1),N(t,ct(.07,.04,.05,.01),Re(7233088),-.4,.38,-.08),N(t,Nt(.05,.055,.035,16),i,-.12,.418,.09),N(t,Nt(.046,.046,.01,16),i,-.12,.44,.09),$n(t,.007,.006,.13,nn(),-.12,.465,.09),N(t,ct(.06,.025,.02,.004),_t(),-.12,.465,.09),N(t,Nt(.04,.04,.01,14),i,-.2,.405,-.09),N(t,ct(.05,.04,.04,.006),i,.02,.42,-.12),N(t,Ee(.004,.022,.03),ki(),.046,.425,-.12);for(let r of[-1,1])N(t,Ee(.14,.09,.004),_t(),-.2,.32,r*.181),N(t,Ee(.06,.006,.006),nn(),-.2,.36,r*.185),Cc(t,.08,.36,r*.17,4,r,_t());Hi(t,-.33,.4,.15,.24),Hi(t,-.33,.4,-.15,.18),e.position.set(.15,.32,0),e.rotation.z=.14,N(e,ct(.09,.11,.15,.015),i,0,0,0),N(e,ct(.16,.035,.05,.008),nn(),.08,-.04,0),$n(e,.026,.021,.86,Ze("k9gun",{color:5067576,roughness:.6,metalness:.35}),.04,0),N(e,Nt(.033,.033,.09,16),Ze("k9gun",{}),.5,0,0,0,0,Math.PI/2),N(e,ct(.085,.052,.068,.012),_t(),.93,0,0);for(let r of[-1,1])N(e,Ee(.05,.03,.006),Ze("void",{color:328965,roughness:1}),.93,0,r*.035);n.position.set(.98,0,0)},type16({root:s,yaw:t,pitch:e,muzzle:n}){let i=On("jgsdf");Yn(s,1.1,.55),N(t,bi("t16hull",[[-.45,.085],[.32,.085],[.46,.17],[.38,.22],[-.45,.22]],.36),i),N(t,ct(.9,.012,.4,.004),i,-.005,.222,0);for(let r of[-.33,-.15,.1,.28])for(let o of[-1,1])Rc(t,r,.075,o*.19,.075,.06,Re(4146480));for(let r of[-1,1]){N(t,ct(.86,.03,.025,.006),i,0,.18,r*.19);for(let o of[-.24,.19])N(t,ct(.13,.05,.02,.008),i,o,.14,r*.2)}N(t,ct(.06,.03,.08,.008),i,.33,.235,.09),N(t,Ee(.004,.02,.06),ki(),.362,.24,.09);for(let r of[-1,1])N(t,Nt(.013,.013,.01,10),wc(),.45,.17,r*.13,0,0,Math.PI/2-.5);for(let r=0;r<4;r++)N(t,Ee(.1,.005,.012),_t(),-.32,.225,-.12+r*.03);N(t,Pu("t16t",[[-.2,-.15],[.06,-.16],[.17,-.08],[.17,.08],[.06,.16],[-.2,.15],[-.26,.1],[-.26,-.1]],.12,.008),i,-.06,.222,0),N(t,Nt(.04,.044,.03,14),i,-.12,.355,.07),N(t,ct(.05,.04,.04,.006),i,-.03,.36,-.08),N(t,Ee(.004,.02,.03),ki(),-.004,.365,-.08),$n(t,.006,.005,.12,nn(),-.12,.38,.07);for(let r of[-1,1])Cc(t,.07,.31,r*.15,3,r,_t());Hi(t,-.3,.33,.1,.22),e.position.set(.1,.29,0),N(e,ct(.08,.075,.13,.012),i,0,0,0),$n(e,.02,.016,.72,Ze("t16gun",{color:4937019,roughness:.55,metalness:.35}),.04,.005),N(e,Nt(.026,.026,.07,14),Ze("t16gun",{}),.42,.005,0,0,0,Math.PI/2),N(e,ct(.055,.04,.05,.01),_t(),.78,.005,0),n.position.set(.82,.005,0)},patriot({root:s,yaw:t,pitch:e,muzzle:n}){let i=On("tan",2);Yn(s,1.2,.6),N(t,ct(.34,.05,.22,.008),_t(),.3,.12,0),bc(t,.32,.5,.3,.22,.1,i),ta(t,[.42,.22,.12],.13,.06,.05,Re(8022604)),N(t,ct(.78,.04,.32,.008),i,-.17,.155,0);for(let o of[-1,1])N(t,ct(.74,.04,.02,.006),_t(),-.17,.12,o*.14);ta(t,[-.36,-.48],.15,.06,.05,Re(8022604));for(let[o,a]of[[.06,1],[.06,-1],[-.5,1],[-.5,-1]])ke(t,[o,.15,a*.15],[o,.01,a*.27],.01,_t(),!1),N(t,Nt(.025,.025,.01,10),_t(),o,.008,a*.27);N(t,ct(.14,.1,.2,.01),i,-.02,.22,0),e.position.set(-.52,.19,0),e.rotation.z=.66;let r=Re(12035453,.7,.15);for(let[o,a]of[[.06,-.085],[.06,.085],[.22,-.085],[.22,.085]]){N(e,ct(.64,.155,.155,.012),r,.32,o,a);for(let l=0;l<5;l++)N(e,ct(.012,.164,.164,.004),i,.04+l*.14,o,a);N(e,Ee(.006,.12,.12),Qo(),.643,o,a)}N(e,ct(.66,.02,.36,.006),_t(),.32,-.035,0),n.position.set(.66,.14,0)},irondome({root:s,yaw:t,pitch:e,muzzle:n,spin:i}){let r=On("tan",2);Yn(s,.95,.85),N(t,ct(.66,.05,.42,.01),_t(),0,.1,0);for(let l of[-1,1])Rc(t,-.12,.065,l*.24,.065,.05,Re(8022604));for(let[l,c]of[[.28,1],[.28,-1],[-.28,1],[-.28,-1]])ke(t,[l,.1,c*.18],[l+.03*Math.sign(l),.01,c*.3],.01,_t(),!1),N(t,Nt(.025,.025,.01,10),_t(),l+.03*Math.sign(l),.008,c*.3);N(t,ct(.1,.12,.16,.01),r,.25,.19,0),e.position.set(-.05,.16,0),e.rotation.z=.8,N(e,ct(.48,.44,.5,.02),r,0,.22,0);for(let l=0;l<4;l++)N(e,Ee(.49,.008,.51),_t(),0,.03+l*.12,0);let o=Qo();for(let l=0;l<4;l++)for(let c=0;c<5;c++)N(e,Nt(.04,.04,.012,12),_t(),.242,.05+l*.105,-.2+c*.1,0,0,Math.PI/2),N(e,Cs(.03,10,.5),o,.244,.05+l*.105,-.2+c*.1,0,0,-Math.PI/2);n.position.set(.28,.22,0),ke(s,[-.33,0,.3],[-.33,.42,.3],.018,_t(),!1);let a=new qt;a.position.set(-.33,.48,.3),s.add(a),N(a,ct(.05,.22,.3,.01),Re(13222824,.6,.15),0,0,0,0,0,.12),N(a,Ee(.006,.19,.27),Re(9407094,.5,.2),.027,.003,0,0,0,.12),N(a,ct(.06,.05,.08,.008),_t(),-.05,-.05,0),i.push([a,"y",1.4])},jammer({root:s,yaw:t,muzzle:e,spin:n,glow:i}){let r=On("nato");Yn(s,1,.55),N(t,ct(.82,.05,.24,.008),_t(),0,.12,0),ta(t,[.27,-.13,-.27],.16,.065,.055,Re(4080688)),bc(t,.17,.4,.32,.24,.13,r),N(t,ct(.5,.25,.34,.014),r,-.15,.275,0);for(let l of[-1,1])N(t,ct(.08,.05,.006,.003),_t(),-.2,.3,l*.171),N(t,Ee(.1,.17,.004),_t(),-.02,.27,l*.171);N(t,ct(.12,.06,.12,.008),Re(5264702),-.32,.43,.08);for(let l=0;l<3;l++)N(t,Ee(.1,.004,.1),_t(),-.32,.405+l*.016,.08);for(let l=0;l<3;l++)N(t,Nt(.022-l*.005,.024-l*.005,.2,10),Re(10395791,.5,.5),-.12,.5+l*.18,-.06);let o=new qt;o.position.set(-.12,.98,-.06),s.add(o),N(o,ct(.04,.05,.36,.008),Qo(),0,0,0);for(let l=0;l<7;l++)N(o,Ee(.004,.004,.06+l%3*.03),_t(),.024,0,-.15+l*.05,Math.PI/2,0,0);N(o,ct(.14,.1,.03,.01),Re(14211536,.5,.1),0,.08,0),n.push([o,"y",1.2]),Hi(t,-.36,.4,-.13,.3),Hi(t,.2,.37,.12,.2);let a=Ac(N(s,Ei("ewring",()=>new Nn(.5,.016,6,40)),Ze("ewglow",{color:7328767,emissive:4174079,emissiveIntensity:1.4}),0,.03,0,Math.PI/2,0,0));i.push(a),e.position.set(-.12,.98,-.06)},javelin({root:s,yaw:t,pitch:e,muzzle:n}){Yn(s,.9,.9),b0(s,.36,-1.5,1.5,7);let i=S0();Tc(t,Object.assign({x:-.06,z:.06,pose:"kneel",kit:"shoulder"},i)),Tc(t,Object.assign({x:-.16,z:-.18,pose:"kneel",kit:"binoc",ry:.3},i)),N(t,ct(.12,.07,.08,.015),Re(4935478,.9,0),-.28,.035,.18),e.position.set(-.04,.285,.1),e.rotation.z=.1;let r=Re(6053952,.75,.1);N(e,Nt(.034,.034,.5,14),r,.06,0,0,0,0,Math.PI/2),N(e,Nt(.042,.042,.04,14),r,.3,0,0,0,0,Math.PI/2),N(e,Nt(.042,.042,.04,14),r,-.18,0,0,0,0,Math.PI/2),N(e,Nt(.03,.03,.006,14),_t(),.322,0,0,0,0,Math.PI/2),N(e,ct(.11,.07,.09,.01),Re(4869178,.7,.15),0,0,-.075),N(e,Nt(.02,.02,.01,12),ki(),.058,.01,-.075,0,0,Math.PI/2),N(e,ct(.03,.02,.05,.006),_t(),-.06,.02,-.075),n.position.set(.34,0,0)},himars({root:s,yaw:t,pitch:e,muzzle:n}){let i=On("tan",2);Yn(s,1.15,.55),N(t,ct(.92,.06,.24,.008),_t(),-.02,.13,0),ta(t,[.3,-.17,-.34],.155,.075,.06,Re(8022604)),bc(t,.22,.48,.34,.27,.14,i,!0);for(let r of[-1,1])N(t,ct(.1,.012,.06,.004),_t(),.3,.14,r*.2);N(t,ct(.66,.04,.36,.008),i,-.12,.19,0);for(let r of[-1,1])N(t,ct(.6,.05,.014,.004),i,-.12,.17,r*.176);N(t,Nt(.12,.13,.04,18),_t(),-.2,.23,0),e.position.set(-.42,.26,0),e.rotation.z=.35,N(e,ct(.6,.2,.3,.014),i,.29,.1,0);for(let r=0;r<4;r++)N(e,Ee(.012,.205,.305),_t(),.06+r*.15,.1,0);N(e,Ee(.006,.18,.28),Re(10127974),.593,.1,0);for(let r=0;r<2;r++)for(let o=0;o<3;o++)N(e,Nt(.036,.036,.012,14),_t(),.598,.055+r*.09,-.09+o*.09,0,0,Math.PI/2),N(e,Cs(.024,10,.5),Qo(),.598,.055+r*.09,-.09+o*.09,0,0,-Math.PI/2);n.position.set(.62,.1,0)},hyunmoo({root:s,yaw:t,pitch:e,muzzle:n}){let i=On("kor",2);Yn(s,1.35,.6),N(t,ct(1.18,.07,.28,.01),_t(),0,.15,0),ta(t,[.42,.26,-.25,-.41],.18,.08,.065,Re(4080688)),bc(t,.36,.6,.42,.28,.16,i,!0),N(t,ct(.6,.06,.42,.01),i,-.25,.22,0);for(let r of[-1,1])N(t,ct(.92,.06,.016,.004),i,-.08,.2,r*.21);N(t,ct(.16,.12,.42,.01),i,.24,.27,0);for(let r=0;r<4;r++)N(t,Ee(.005,.09,.3),_t(),.17+r*.04,.27,0);for(let[r,o]of[[.32,1],[.32,-1],[-.55,1],[-.55,-1]])ke(t,[r,.17,o*.15],[r,.01,o*.24],.012,_t(),!1),N(t,Nt(.03,.03,.012,10),_t(),r,.008,o*.24);e.position.set(-.55,.26,0),e.rotation.z=.85,N(e,ct(.92,.04,.5,.008),_t(),.46,-.03,0),ke(t,[.05,.22,0],[-.2,.62,0],.025,nn(),!1);for(let[r,o]of[[.1,-.1],[.1,.1],[.3,-.1],[.3,.1]]){N(e,Nt(.092,.092,.9,18),i,.47,r,o,0,0,Math.PI/2);for(let a of[.08,.47,.86])N(e,Nt(.097,.097,.025,18),_t(),a,r,o,0,0,Math.PI/2);N(e,Nt(.082,.082,.01,18),Qo(),.922,r,o,0,0,Math.PI/2)}n.position.set(.95,.2,0)}};function R0(s){let t=new qt,e=new qt;t.add(e);let n=[],i=I1[s];if(!i)return null;let r=i({root:t,body:e,spin:n});return{root:t,body:e,spin:n,hpY:r}}function E0(s,t){let e=On("enemy",2);Yn(s,1,.55),N(s,bi("t90h",[[-.42,.07],[.32,.07],[.43,.14],[.36,.2],[-.42,.2],[-.43,.13]],.28),e),N(s,ct(.84,.012,.42,.004),e,-.005,.2,0);for(let r of[-1,1]){w0(s,{x0:-.36,x1:.35,y:.1,r:.07,w:.07,n:6,z:r*.175,wr:.045}),N(s,ct(.66,.06,.012,.004),e,.02,.165,r*.214);for(let o=0;o<6;o++)N(s,Ee(.1,.035,.008),Pc(),-.26+o*.11,.12,r*.216)}for(let r=0;r<6;r++)N(s,ct(.07,.016,.06,.003),e,.36,.188,-.15+r*.06,0,0,-.55);for(let r of[-1,1])N(s,Nt(.035,.035,.14,12),Re(3816502),-.46,.15,r*.08,Math.PI/2,0,0);N(s,Nt(.012,.012,.1,6),_t(),-.42,.21,.15,0,0,Math.PI/2);let n=new qt;n.position.set(-.05,.2,0),s.add(n),N(n,Pu("t90t",[[.16,-.06],[.16,.06],[.08,.17],[-.1,.18],[-.22,.12],[-.24,0],[-.22,-.12],[-.1,-.18],[.08,-.17]],.075,.012),e,0,0,0),N(n,Cs(.17,18,.5),e,-.04,.07,0).scale.set(1.1,.28,1),N(n,ct(.1,.06,.26,.015),e,-.25,.04,0);for(let r of[-1,1])N(n,bi("era",[[0,0],[.13,0],[.13,.03],[0,.07]],.12,.004),e,.08,.02,r*.1,0,r*.35,0),N(n,ct(.04,.025,.03,.006),E1(),.11,.09,r*.15),Cc(n,0,.07,r*.16,4,r,_t());N(n,Nt(.05,.055,.035,14),e,-.05,.11,-.07),N(n,Nt(.04,.04,.03,14),e,-.06,.1,.08),$n(n,.006,.005,.12,nn(),-.06,.135,.08),N(n,ct(.05,.02,.02,.004),_t(),-.06,.13,.08);for(let r of[-1,1])N(n,ct(.16,.018,.006,.002),ni(),-.08,.045,r*.168,0,r*.12,0);if(N(n,ct(.05,.004,.05,.002),ni(),-.15,.11,0),t){for(let r=0;r<6;r++)N(n,Ee(.004,.11,.36),nn(),-.22-r*.025,.04,0);N(n,Ee(.13,.004,.36),nn(),-.285,.095,0);for(let r of[-.055,.055])$n(n,.02,.016,.62,Ze("egun",{color:3158574,roughness:.5,metalness:.5}),.13,.05,r),N(n,Nt(.026,.026,.12,12),Ze("egun",{}),.35,.05,r,0,0,Math.PI/2);N(s,bi("dozer",[[0,0],[.05,0],[.09,.09],[.05,.1]],.42,.006),nn(),.4,.04,0),N(s,ct(.012,.02,.4,.003),ni(),.475,.11,0),Hi(n,-.15,.08,.12,.3),Hi(n,-.15,.08,-.12,.3)}else $n(n,.02,.016,.6,Ze("egun",{color:3158574,roughness:.5,metalness:.5}),.13,.05),N(n,Nt(.026,.026,.12,12),Ze("egun",{}),.33,.05,0,0,0,Math.PI/2),Hi(n,-.15,.08,.12,.26)}var I1={inf({body:s}){return Tc(s,Object.assign({pose:"stand",kit:"rifle"},C1())),Yn(s,.25,.2),.68},apc({body:s}){let t=On("enemy",2);Yn(s,.95,.45),N(s,bi("btr",[[-.4,.09],[.28,.09],[.42,.17],[.3,.25],[-.36,.25],[-.41,.2]],.32),t),N(s,ct(.66,.012,.34,.004),t,-.04,.252,0);for(let e of[-.27,-.12,.08,.23])for(let n of[-1,1])Rc(s,e,.07,n*.16,.07,.05,Re(3092781));for(let e of[-1,1])N(s,Ee(.08,.06,.004),_t(),-.02,.17,e*.162),N(s,Ee(.7,.025,.004),ni(),-.03,.225,e*.162);N(s,Ee(.004,.03,.2),ki(),.36,.22,0,0,0,.9);for(let e of[-1,1])N(s,Nt(.012,.012,.01,10),wc(),.41,.16,e*.11,0,0,Math.PI/2);N(s,Nt(.075,.09,.07,14),t,.02,.29,0),N(s,ct(.06,.04,.06,.01),t,.07,.31,0),$n(s,.009,.008,.26,nn(),.1,.31,0),$n(s,.006,.006,.09,nn(),.08,.3,.035);for(let e of[-1,1])Cc(s,.02,.3,e*.07,3,e,_t());return N(s,Nt(.035,.035,.01,12),t,-.2,.258,.08),N(s,Nt(.035,.035,.01,12),t,-.2,.258,-.08),Hi(s,-.34,.25,.12,.24),.72},tank({body:s}){return E0(s,!1),.72},boss({body:s}){let t=new qt;return t.scale.setScalar(1.55),s.add(t),E0(t,!0),1.05},drone({body:s,spin:t}){s.position.y=1.4;let e=Re(5921879,.6,.2);N(s,Pu("shahed",[[.14,0],[-.17,-.2],[-.2,-.2],[-.16,0],[-.2,.2],[-.17,.2]],.012,.004),e,0,-.006,0),N(s,Ec(.026,.3),e,0,0,0,0,0,Math.PI/2),N(s,Cs(.026,12),ni(),.175,0,0);for(let r of[-1,1])N(s,bi("sfin",[[-.04,0],[.02,0],[-.01,.05],[-.04,.05]],.006,.002),e,-.165,-.02,r*.2);N(s,Nt(.016,.022,.03,10),_t(),-.17,0,0,0,0,Math.PI/2);let n=new qt;n.position.set(-.19,0,0),s.add(n);let i=N(n,Ee(.004,.11,.012),_t(),0,0,0);return N(n,Ee(.004,.012,.11),_t(),0,0,0),i.castShadow=!1,t.push([n,"x",40]),N(s,ct(.05,.004,.08,.002),ni(),-.05,.003,.11),N(s,ct(.05,.004,.08,.002),ni(),-.05,.003,-.11),1.75},heli({body:s,spin:t}){s.position.y=1.9;let e=On("enemy",2.2);N(s,Ec(.11,.42),e,.02,0,0,0,0,Math.PI/2).scale.set(1.15,1,.9),N(s,ct(.3,.1,.16,.04),e,-.06,.08,0);for(let o of[-1,1])N(s,Nt(.03,.03,.08,10),_t(),-.02,.1,o*.09,0,0,Math.PI/2);N(s,ct(.11,.07,.12,.02),ki(),.25,.06,0),N(s,ct(.11,.06,.12,.02),ki(),.15,.09,0),N(s,Ec(.05,.06),e,.35,-.02,0,0,0,Math.PI/2),N(s,Cs(.035,12),_t(),.38,-.06,0),N(s,Nt(.025,.025,.04,10),_t(),.32,-.1,0),$n(s,.007,.006,.13,nn(),.32,-.12,0),N(s,Nt(.03,.06,.52,10),e,-.46,.03,0,0,0,Math.PI/2-.04),N(s,bi("hfin",[[-.06,0],[.06,0],[.02,.17],[-.05,.17]],.018,.004),e,-.7,.04,0),N(s,ct(.06,.008,.2,.003),e,-.62,.04,0),N(s,ct(.04,.006,.06,.002),ni(),-.68,.16,.012),N(s,ct(.1,.012,.5,.004),e,-.02,-.04,0,.12);for(let o of[-1,1]){N(s,Nt(.03,.03,.14,12),Re(4277054),-.02,-.08,o*.16,0,0,Math.PI/2),N(s,Nt(.022,.022,.006,12),ni(),.052,-.08,o*.16,0,0,Math.PI/2);for(let a of[-.02,.02])$n(s,.009,.009,.14,Re(6974822),-.08,-.07,o*.23+a);N(s,ct(.1,.04,.012,.004),ni(),-.18,.05,o*.072)}for(let o of[-1,1])ke(s,[.2,-.08,o*.06],[.2,-.15,o*.07],.006,_t(),!1),N(s,Nt(.02,.02,.012,10),Pc(),.2,-.16,o*.075,Math.PI/2,0,0);N(s,Nt(.012,.015,.08,8),_t(),0,.17,0);let i=new qt;i.position.set(0,.21,0),s.add(i),N(i,Nt(.03,.03,.025,10),_t(),0,0,0);for(let o=0;o<5;o++){let a=o/5*Math.PI*2;Ac(N(i,Ee(.6,.006,.04),Ze("blade",{color:1974044,roughness:.5,metalness:.3}),Math.cos(a)*.3,0,-Math.sin(a)*.3,0,a,-.02))}t.push([i,"y",22]);let r=new qt;r.position.set(-.72,.14,.022),s.add(r);for(let o=0;o<4;o++)Ac(N(r,Ee(.012,.14,.003),_t(),0,0,0,0,0,o*Math.PI/4));return t.push([r,"z",30]),2.3}};var Iu={};function Ct(s,t={}){let e=s+JSON.stringify(t);return Iu[e]||(Iu[e]=new $t(Object.assign({color:s,roughness:.78,metalness:.12},t))),Iu[e]}var C0={},Fr=(s,t)=>C0[s]||(C0[s]=t()),yt=(s,t,e)=>Fr(`b${s},${t},${e}`,()=>new Lt(s,t,e)),Ue=(s,t,e,n=12)=>Fr(`c${s},${t},${e},${n}`,()=>new ee(s,t,e,n)),Nr=(s,t=12)=>Fr(`s${s},${t}`,()=>new Pe(s,t,Math.max(6,t>>1))),Nu=(s,t)=>Fr(`k${s},${t}`,()=>new vs(s,t,4,8));function st(s,t,e,n=0,i=0,r=0,o=0,a=0,l=0){let c=new ft(t,typeof e=="number"?Ct(e):e);return c.position.set(n,i,r),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}var Ti=(s,t,e,n,i,r,o=0)=>st(s,Ue(t,t,e,10),n,i+e/2,r,o,0,0,Math.PI/2);function O0(s){st(s,yt(.84,.06,.84),9275515,0,.03,0);for(let t=0;t<14;t++){let e=t/14*Math.PI*2;st(s,yt(.16,.09,.1),t%2?12166522:11048298,Math.cos(e)*.38,.1,Math.sin(e)*.38,0,-e+Math.PI/2,0)}}function Ur(s,t,e,n=.1,i=.14){st(s,yt(t,i,.13),2829097,0,n,e);for(let r=0;r<4;r++)st(s,Ue(.06,.06,.14,8),3881784,-t/2+.08+r*(t-.16)/3,n-.01,e,Math.PI/2,0,0)}function Ic(s,t,e,n,i,r=0){let o=new qt;return o.position.set(t,0,e),o.rotation.y=r,s.add(o),st(o,Nu(.075,.16),n,0,.2,0),st(o,Nr(.065),13805437,.01,.39,0),st(o,Nr(.075),i,0,.42,0),o}var Dc=12757112,Ps=11047274,P0=6121284,D1=4870710,L1=6251335,rn=2895147;function N1(s){let t=new qt;O0(t);let e=new qt;t.add(e);let n=new qt;e.add(n);let i=new $e,r=[],o=[];switch(s){case"browning":{for(let a=0;a<3;a++){let l=a/3*Math.PI*2;st(e,Ue(.015,.015,.3,6),rn,Math.cos(l)*.1,.17,Math.sin(l)*.1,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),st(n,yt(.28,.1,.11),3816246,0,0,0),Ti(n,.022,.5,rn,.12,.01),st(n,yt(.1,.08,.08),P0,-.02,-.02,.1),st(n,yt(.06,.08,.08),rn,-.18,0,0),i.position.set(.62,.01,0),Ic(e,-.28,0,Ps,9075285);break}case"m777":{for(let[a,l]of[[2.7,.55],[-2.7,.55],[2.2,.35],[-2.2,.35]])st(e,yt(l,.05,.06),Dc,Math.cos(a)*l/2,.1,-Math.sin(a)*l/2,0,a,0);st(e,yt(.34,.12,.3),Dc,0,.18,0),st(e,Ue(.1,.1,.05,12),rn,0,.12,.2,Math.PI/2,0,0),st(e,Ue(.1,.1,.05,12),rn,0,.12,-.2,Math.PI/2,0,0),n.position.set(0,.3,0),n.rotation.z=.35,st(n,yt(.42,.1,.14),Ps,0,0,0),Ti(n,.04,.95,11639408,.1,.02),st(n,yt(.08,.07,.1),rn,1.06,.02,0),i.position.set(1.1,.02,0);break}case"gepard":{Ur(e,.74,.24),Ur(e,.74,-.24),st(e,yt(.74,.18,.4),5595199,0,.22,0),n.position.set(0,.42,0),st(n,yt(.38,.22,.36),6318920,0,0,0),Ti(n,.025,.62,rn,.15,.02,.22),Ti(n,.025,.62,rn,.15,.02,-.22),st(n,yt(.1,.12,.08),5595199,.12,.02,.22),st(n,yt(.1,.12,.08),5595199,.12,.02,-.22);let l=st(n,Ue(.13,.13,.025,14),13685958,-.16,.22,0,0,0,Math.PI/2-.2);r.push([l,"y",3]),i.position.set(.8,.02,0);break}case"jammer":{st(e,yt(.6,.08,.36),rn,0,.12,0);for(let c of[-.2,.18])for(let h of[-.17,.17])st(e,Ue(.07,.07,.06,10),2039583,c,.08,h,Math.PI/2,0,0);st(e,yt(.18,.2,.34),Dc,.22,.26,0),st(e,yt(.06,.08,.3),2832964,.31,.3,0),st(e,yt(.36,.26,.36),Ps,-.08,.29,0),st(e,Ue(.02,.025,.5,6),rn,-.08,.66,0);let a=st(e,Ue(.16,.05,.05,16),15198690,-.08,.9,0,0,0,.5);r.push([a,"y",1.2]);let l=st(t,Fr("ring",()=>new Nn(.46,.02,6,32)),Ct(7328767,{emissive:4174079,emissiveIntensity:1.4}),0,.08,0,Math.PI/2,0,0);l.castShadow=!1,o.push(l),i.position.set(-.08,.9,0);break}case"javelin":{Ic(e,-.05,.12,Ps,9075285),Ic(e,-.2,-.16,Ps,9075285,.4),n.position.set(-.05,.36,.12),n.rotation.z=.12,st(n,Ue(.05,.05,.55,10),7170640,.05,0,0,0,0,Math.PI/2),st(n,yt(.12,.1,.12),4868668,-.1,.06,.06),i.position.set(.34,0,0),st(e,yt(.22,.12,.14),D1,-.3,.1,.14);break}case"k9":{Ur(e,.86,.25),Ur(e,.86,-.25),st(e,yt(.86,.18,.42),L1,0,.22,0),n.position.set(-.04,.42,0),n.rotation.z=.12,st(n,yt(.46,.2,.4),7040590,0,0,0),st(n,yt(.2,.06,.14),5724735,-.1,.13,.08),Ti(n,.042,.9,5592895,.2,0),st(n,yt(.09,.08,.11),rn,1.12,0,0),i.position.set(1.16,0,0);break}case"flash":{for(let a=0;a<3;a++){let l=a/3*Math.PI*2+.5;st(e,Ue(.015,.015,.26,6),rn,Math.cos(l)*.09,.15,Math.sin(l)*.09,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),n.rotation.z=.1,st(n,yt(.42,.18,.18),P0,.06,0,0);for(let[a,l]of[[.045,.045],[.045,-.045],[-.045,.045],[-.045,-.045]])st(n,Ue(.035,.035,.02,10),1710618,.27,a,l,0,0,Math.PI/2);st(n,yt(.42,.03,.19),14251818,.06,.095,0),i.position.set(.3,0,0),Ic(e,-.28,.08,Ps,9075285);break}case"himars":{st(e,yt(.96,.1,.38),rn,0,.16,0);for(let a of[-.3,-.06,.32])for(let l of[-.19,.19])st(e,Ue(.08,.08,.07,12),2039583,a,.09,l,Math.PI/2,0,0);st(e,yt(.24,.24,.38),Dc,.34,.33,0),st(e,yt(.04,.1,.32),2832964,.465,.38,0),n.position.set(-.14,.3,0),n.rotation.z=.32,st(n,yt(.6,.24,.36),Ps,0,.12,0);for(let a=0;a<2;a++)for(let l=0;l<3;l++)st(n,Ue(.04,.04,.02,10),1907995,.305,.06+a*.12,-.11+l*.11,0,0,Math.PI/2);i.position.set(.32,.12,0);break}}return n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:r,glow:o}}var I0=7021094,Lc=2761766,cs=16726832;function U1(s){let t=new qt,e=new qt;t.add(e);let n=[],i=.7;switch(s){case"inf":{st(e,Nu(.085,.18),I0,0,.22,0),st(e,Nr(.07),13081975,.01,.43,0),st(e,Nr(.08),Lc,-.005,.46,0),st(e,yt(.1,.03,.18),cs,0,.3,0),st(e,yt(.34,.035,.035),1381653,.12,.28,.08),st(e,yt(.12,.14,.14),Lc,-.1,.25,0),i=.68;break}case"jeep":{for(let r of[-.16,.17])for(let o of[-.15,.15])st(e,Ue(.08,.08,.06,12),1447446,r,.08,o,Math.PI/2,0,0);st(e,yt(.56,.14,.3),8004648,0,.18,0),st(e,yt(.24,.12,.28),4409151,-.04,.31,0),st(e,yt(.03,.1,.26),2240826,.09,.31,0),st(e,Ue(.04,.04,.08,8),Lc,-.06,.41,0),Ti(e,.015,.28,1118481,-.06,.45),st(e,yt(.02,.1,.12),cs,-.28,.2,0),i=.7;break}case"apc":{for(let r=0;r<4;r++)for(let o of[-.17,.17])st(e,Ue(.075,.075,.06,10),1381653,-.27+r*.18,.08,o,Math.PI/2,0,0);st(e,yt(.74,.16,.32),8004648,0,.2,0),st(e,yt(.2,.1,.32),9054766,.3,.24,0,0,0,-.35),st(e,yt(.24,.1,.22),2761766,-.05,.33,0),Ti(e,.02,.32,1118481,.02,.35),st(e,yt(.03,.05,.3),cs,-.37,.24,0),st(e,yt(.1,.02,.1),cs,-.2,.29,0),i=.72;break}case"tank":case"boss":{let r=s==="boss",o=r?e.add(new qt)&&e.children[0]:e;r&&o.scale.setScalar(1.55),Ur(o,.84,.22,.09,.16),Ur(o,.84,-.22,.09,.16),st(o,yt(.8,.14,.36),r?2761252:8004648,0,.21,0),st(o,yt(.38,.14,.3),r?3811884:6167584,-.04,.35,0),Ti(o,.03,.55,2303263,.14,.36,r?.07:0),r&&Ti(o,.03,.55,2303263,.14,.36,-.07),st(o,yt(.04,.1,.32),cs,-.36,.22,0),st(o,yt(.1,.03,.1),cs,-.04,.43,0),r&&(st(o,Ue(.05,.05,.1,8),9313314,-.15,.48,.08),st(o,yt(.18,.05,.38),9313314,.28,.25,0)),i=r?1.05:.72;break}case"drone":{e.position.y=1.4,st(e,yt(.2,.07,.14),I0,0,0,0),st(e,Nr(.05),cs,.12,0,0);for(let[r,o]of[[.13,.13],[.13,-.13],[-.13,.13],[-.13,-.13]]){st(e,yt(.2,.02,.02),Lc,r/2,.02,o/2,0,Math.atan2(o,r)*-1,0);let a=st(e,Ue(.08,.08,.006,12),Ct(13159632,{transparent:!0,opacity:.45}),r,.05,o);a.castShadow=!1,n.push([a,"y",30])}i=1.75;break}case"heli":{e.position.y=1.9,st(e,Nu(.13,.36),6167584,.05,0,0,0,0,Math.PI/2),st(e,Nr(.11),2240826,.27,.03,0),st(e,Ue(.035,.05,.5,8),4080185,-.42,.04,0,0,0,Math.PI/2),st(e,yt(.06,.16,.03),4080185,-.66,.1,0),st(e,yt(.14,.03,.46),3158829,.02,-.04,0),st(e,yt(.08,.06,.05),cs,-.2,.05,.13);let r=new qt;r.position.set(.04,.2,0),e.add(r),st(r,yt(1.15,.01,.05),1842204,0,0,0),st(r,yt(.05,.01,1.15),1842204,0,0,0),n.push([r,"y",22]),i=2.3;break}}return{root:t,body:e,spin:n,hpY:i}}function B0(){let s=new qt;st(s,yt(1.2,.08,1.2),9341565,0,.04,0);for(let r=0;r<28;r++){let o=r/28*4,a=Math.floor(o),l=o-a,c=[[-.56+l*1.12,-.56],[.56,-.56+l*1.12],[.56-l*1.12,.56],[-.56,.56-l*1.12]][a];st(s,yt(.16,.1,.1),11771764,c[0],.12,c[1],0,a%2?Math.PI/2:0,0)}let t=new $t({map:Jd(2),roughness:.85}),e=new ft(yt(.62,.5,.5),[t,t,Ct(10197900),Ct(10197900),t,t]);e.position.set(-.1,.33,-.08),e.castShadow=e.receiveShadow=!0,s.add(e),st(s,yt(.66,.04,.54),7106394,-.1,.6,-.08),st(s,Ue(.02,.02,.9,6),13684944,.38,.5,.36);let n=st(s,yt(.36,.22,.01),Ct(3108816,{side:Xe}),.56,.82,.36);n.castShadow=!1,st(s,yt(.16,.03,.012),16777215,.56,.82,.367),st(s,Ue(.02,.02,.3,6),7829367,-.25,.75,-.1);let i=st(s,Ue(.16,.04,.05,16),15067106,-.25,.92,-.1,0,0,.6);return st(s,yt(.36,.01,.36),4015920,.3,.085,-.3),st(s,Fr("hring",()=>new Nn(.13,.015,4,24)),16777215,.3,.095,-.3,Math.PI/2,0,0),{root:s,spin:[[i,"y",.8]],flag:n}}var D0=null,L0=()=>D0||(D0=new $t({map:e0(),roughness:.85,metalness:.1}));function Nc(s,t,e,n=.075,i=.08){for(let r of t)for(let o of[-e,e])st(s,Ue(n,n,.07,12),1776411,r,i,o,Math.PI/2,0,0)}function F1(s){let t=A0(s);if(t)return t;if(s==="ewcar"&&(s="jammer"),!["patriot","type16","irondome","hyunmoo"].includes(s)){let c=N1(s);return["k9","himars","jammer"].includes(s)&&c.root.traverse(h=>{h.isMesh&&!Array.isArray(h.material)&&[6251335,7040590,5724735,12757112,11047274,6121284].includes(h.material.color.getHex())&&(h.material=L0())}),c}let e=new qt;O0(e);let n=new qt;e.add(n);let i=new qt;n.add(i);let r=new $e,o=[],a=[],l=L0();if(s==="patriot"){st(n,yt(1,.1,.4),rn,0,.17,0),Nc(n,[-.36,-.18,.3],.19,.08,.09),st(n,yt(.24,.24,.4),l,.38,.34,0),st(n,yt(.04,.1,.34),2832964,.5,.4,0),i.position.set(-.12,.3,0),i.rotation.z=.55;for(let[c,h]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])st(i,yt(.62,.19,.19),l,.05,c,h);for(let[c,h]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])st(i,yt(.02,.15,.15),2763304,.365,c,h);r.position.set(.4,.18,0)}else if(s==="type16")st(n,yt(.92,.2,.42),l,0,.24,0),st(n,yt(.22,.12,.42),l,.4,.26,0,0,0,-.4),Nc(n,[-.33,-.11,.11,.33],.22,.09,.1),i.position.set(-.06,.42,0),st(i,yt(.42,.16,.36),l,0,0,0),st(i,yt(.14,.06,.14),4015145,-.1,.11,.08),Ti(i,.032,.8,3817258,.18,.01),st(i,yt(.07,.06,.08),rn,1,.01,0),r.position.set(1.02,.01,0);else if(s==="hyunmoo"){st(n,yt(1.2,.12,.44),rn,0,.19,0),Nc(n,[-.44,-.24,.24,.44],.21,.09,.1),st(n,yt(.26,.28,.44),l,.47,.39,0),st(n,yt(.04,.11,.38),2832964,.6,.45,0),st(n,yt(.12,.1,.5),rn,-.55,.3,0),i.position.set(-.5,.33,0),i.rotation.z=.9;for(let[c,h]of[[.1,-.12],[.1,.12],[.33,-.12],[.33,.12]])st(i,Ue(.11,.11,.95,14),l,.47,c,h,0,0,Math.PI/2),st(i,Ue(.095,.095,.02,14),1907995,.95,c,h,0,0,Math.PI/2);st(i,yt(.9,.04,.5),rn,.45,-.03,0),r.position.set(.98,.22,0)}else if(s==="irondome"){st(n,yt(.7,.08,.5),rn,0,.1,0),Nc(n,[-.2,.2],.26,.07,.07),i.position.set(0,.22,0),i.rotation.z=.75,st(i,yt(.5,.42,.5),12567220,0,.2,0);for(let h=0;h<4;h++)for(let f=0;f<5;f++)st(i,Ue(.035,.035,.02,8),2763304,.255,.04+h*.1,-.2+f*.1,0,0,Math.PI/2);r.position.set(.28,.2,0);let c=st(e,yt(.06,.3,.32),14212303,-.3,.4,.28);st(e,Ue(.02,.02,.3,6),rn,-.3,.18,.28),o.push([c,"y",1.5])}return i.add(r),{root:e,yaw:n,pitch:i,muzzle:r,spin:o,glow:a}}var N0=new $t({vertexColors:!0,roughness:.72,metalness:.15}),U0=new $t({vertexColors:!0,roughness:.45,metalness:.6});function O1(s){return s.isMeshStandardMaterial&&!s.map&&!s.transparent&&!s.vertexColors&&!s.onBeforeCompile.toString().includes("vOP")&&(s.emissiveIntensity===0||s.emissive.getHex()===0)&&(s.envMapIntensity??1)<=1.01}function hs(s,t,e=!1){s.updateMatrixWorld(!0);let n=new te().copy(s.matrixWorld).invert(),i=new Map,r=[],o=a=>{for(let l of a.children)if(!t(l)){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&l.geometry.attributes.position){let c=new te().multiplyMatrices(n,l.matrixWorld),h=l.material,f=null;e&&O1(h)&&(f=h.color,h=h.metalness>.4?U0:N0);let u=h.uuid+(l.geometry.index?"i":"n");i.has(u)||i.set(u,{mat:h,geos:[],shadow:!1});let d=l.geometry.clone().applyMatrix4(c);for(let x of Object.keys(d.attributes))["position","normal","uv"].includes(x)||d.deleteAttribute(x);if(d.attributes.uv||d.setAttribute("uv",new Le(new Float32Array(d.attributes.position.count*2),2)),d.attributes.normal||d.computeVertexNormals(),h===N0||h===U0){let x=d.attributes.position.count,m=new Float32Array(x*3);for(let p=0;p<x;p++)m[p*3]=f.r,m[p*3+1]=f.g,m[p*3+2]=f.b;d.setAttribute("color",new Le(m,3))}let g=i.get(u);g.geos.push(d),g.shadow=g.shadow||l.castShadow,r.push(l)}o(l)}};o(s);for(let a of r)a.parent.remove(a);for(let{mat:a,geos:l,shadow:c}of i.values()){let h=Ir(l,!1);if(!h)continue;let f=new ft(h,a);f.castShadow=c,f.receiveShadow=!0,s.add(f)}}var Du={},Lu={};function z0(s){for(let[t,e,n]of s)t.userData.spin=[e,n]}function H0(s){let t=[],e=[];return s.traverse(n=>{n.userData.spin&&t.push([n,n.userData.spin[0],n.userData.spin[1]]),n.userData.glow&&e.push(n)}),{spin:t,glow:e}}function ea(s){if(!Du[s]){let r=F1(s);z0(r.spin),r.glow.forEach(a=>a.userData.glow=!0);for(let[a]of r.spin)hs(a,()=>!1,!0);r.yaw.name="yaw",r.pitch.name="pitch",r.muzzle.name="muzzle";let o=a=>a.userData.spin||a.userData.glow||a.userData.keep;hs(r.pitch,o,!0),hs(r.yaw,a=>a===r.pitch||o(a),!0),hs(r.root,a=>a===r.yaw||o(a),!0),r.root.traverse(a=>{a.castShadow=!1}),Du[s]=r.root}let t=Du[s].clone(!0),e=t.getObjectByName("yaw"),n=t.getObjectByName("pitch"),i=t.getObjectByName("muzzle");return Object.assign({root:t,yaw:e,pitch:n,muzzle:i},H0(t))}function k0(s){if(!Lu[s]){let n=R0(s)||U1(s);z0(n.spin);for(let[i]of n.spin)hs(i,()=>!1,!0);n.body.name="body",hs(n.body,i=>i.userData.spin||i.userData.keep,!0),n.root.traverse(i=>{i.castShadow=!1}),Lu[s]={root:n.root,hpY:n.hpY}}let t=Lu[s],e=t.root.clone(!0);return Object.assign({root:e,body:e.getObjectByName("body"),hpY:t.hpY},H0(e))}var F0=new be({color:7336959,transparent:!0,opacity:.45,depthWrite:!1}),B1=new be({color:16734815,transparent:!0,opacity:.45,depthWrite:!1});function G0(s){let t=ea(s);return t.root.traverse(e=>{e.userData.keep?e.visible=!1:e.isMesh&&(e.material=F0,e.castShadow=!1)}),t.setOk=e=>t.root.traverse(n=>{n.isMesh&&!n.userData.keep&&(n.material=e?F0:B1)}),t}function Or(s,t,e){let n=s.clone();return n.needsUpdate=!0,n.repeat.set(t,e),n}var z1={hangangPark:i0,grass:Su,dirt:s0,snow:r0},on=(s=0,t=0,e=0)=>new P(s,t,e),wi=1.9,H1=1.75,Gi=class{constructor(){this.map=new Map}push(t,e){this.map.has(t)||this.map.set(t,[]);for(let n of Object.keys(e.attributes))["position","normal","uv"].includes(n)||e.deleteAttribute(n);e.attributes.uv||e.setAttribute("uv",new Le(new Float32Array(e.attributes.position.count*2),2)),this.map.get(t).push(e.index?e.toNonIndexed():e)}build(t,e=!0){for(let[n,i]of this.map){let r=new ft(Ir(i,!1),n);r.castShadow=e,r.receiveShadow=!0,t.add(r)}this.map.clear()}};function Is(s,t,e,n,i,r,o,a,l,c,h=1,f=1,u){let d=[[i,0,0,o/2,0,!1],[i,Math.PI,0,-o/2,0,!1],[o,Math.PI/2,i/2,0,0,!0],[o,-Math.PI/2,-i/2,0,0,!0]],g=new te().makeRotationY(a),x=new te().makeTranslation(t,e,n);for(let[m,p,v,M,,_]of d){let b=new Ne(m,r),E=b.attributes.uv,A=_&&u?u:l;if(!(_&&u))for(let y=0;y<E.count;y++)E.setXY(y,E.getX(y)*m/h,E.getY(y)*r/f);b.rotateY(p),b.translate(v,r/2,M),b.applyMatrix4(g),b.applyMatrix4(x),s.push(A,b)}if(c){let m=new Ne(i,o);m.rotateX(-Math.PI/2),m.translate(0,r,0),m.applyMatrix4(g),m.applyMatrix4(x),s.push(c,m)}}var Uu=(s,t={})=>{let e=s.clone();return e.needsUpdate=!0,e.wrapS=e.wrapT=ve,new $t(Object.assign({map:e,roughness:.85},t))};function V0(s,t,e){let n=Math.max(.05,(s-t)/2),i=s/2,r=t/2,o=[-i,0,r,i,0,r,n,e,0,-i,0,r,n,e,0,-n,e,0,i,0,-r,-i,0,-r,-n,e,0,i,0,-r,-n,e,0,n,e,0,i,0,r,i,0,-r,n,e,0,-i,0,-r,-i,0,r,-n,e,0],a=new xe;return a.setAttribute("position",new Zt(o,3)),a.computeVertexNormals(),a}function k1(s){let t=new qt;t.position.set(s.x,0,s.z),t.rotation.y=s.ry||0;let e=(a,l,c=0,h=0,f=0)=>{let u=new ft(a,l);return u.position.set(c,h,f),u.castShadow=u.receiveShadow=!0,t.add(u),u},n=(a,l,c,h,f=0,u=0,d=0)=>e(new Lt(a,l,c),h,f,u+l/2,d),i=(a,l,c,h,f)=>e(V0(a,l,c),h,0,f,0),r={plaza:Ct(14275266),stone:Ct(12432803),granite:Ct(10131086),red:Ct(10696236),green:Ct(4098936),tile:Ct(3882821,{side:Xe}),blueTile:Ct(2907816,{side:Xe,roughness:.5}),white:Ct(15855592),dark:new be({color:1315860}),bronze:Ct(6253130,{metalness:.4,roughness:.5}),silver:Ct(13225684,{metalness:.6,roughness:.3}),glass:Ct(8829404,{metalness:.3,roughness:.2}),lawn:Ct(7317066),water:Ct(5941206,{roughness:.2}),hill:Ct(5537850,{roughness:1})},o=new ft(new Lt(s.w,.06,s.d),r.plaza);if(o.position.y=.03,o.receiveShadow=!0,t.add(o),Ru[s.id])return Ru[s.id](t,s),t;switch(s.id){case"namdaemun":{n(3.8,1,2,r.stone),n(.9,.62,2.04,r.dark),e(new ee(.45,.45,2.04,14,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),r.dark,0,.62,0),n(2.8,.5,1.3,r.red,0,1),n(2.9,.08,1.4,r.green,0,1.46),i(3.7,2.1,.45,r.tile,1.5),n(2.2,.38,.95,r.red,0,1.8),n(2.3,.07,1.05,r.green,0,2.16),i(3.1,1.8,.6,r.tile,2.2);break}case"gyeongbok":{n(4.2,.28,3,r.stone),n(3.6,.28,2.4,r.stone,0,.28),n(.7,.4,.5,r.granite,0,0,1.6),n(2.8,.85,1.4,r.red,0,.56),n(2.9,.08,1.5,r.green,0,1.38),i(3.8,2.2,.45,r.tile,1.44),n(2.2,.4,1,r.red,0,1.78),n(2.3,.07,1.1,r.green,0,2.15),i(3.3,1.9,.65,r.tile,2.2);break}case"cheongwadae":{n(s.w-.2,.04,1,r.lawn,0,.06,.8),n(3.4,.75,1.3,r.white,0,.06,-.3),n(1.3,.95,1.4,r.white,0,.06,-.3),i(3.9,1.8,.5,r.blueTile,.8),e(V0(1.7,1.8,.75),r.blueTile,0,1,-.3).position.z=-.3;break}case"ntower":{e(new Pe(1,20,10,0,Math.PI*2,0,Math.PI/2),r.hill).scale.set(1.5,.8,1.3);let a=.8;e(new ee(.28,.36,.3,14),r.granite,0,a+.15),e(new ee(.11,.15,2.6,12),r.white,0,a+1.6),e(new ee(.36,.26,.2,16),r.white,0,a+2.9),e(new ee(.4,.36,.3,16),r.glass,0,a+3.12),e(new ee(.3,.4,.16,16),r.white,0,a+3.34),e(new ee(.05,.09,.9,8),r.white,0,a+3.85),e(new Pe(.07,8,6),new be({color:16726574}),0,a+4.33);break}case"yisunsin":{e(new ee(.95,.95,.08,24),r.water,0,.1),n(.7,1.3,.7,r.granite,0,.06),e(new ee(.14,.22,.7,10),r.bronze,0,1.72),e(new Pe(.12,10,8),r.bronze,0,2.17),e(new ee(.03,.03,.75,6),r.bronze,.18,1.7);break}case"cityhall":{n(3.4,1.5,1.2,r.glass,0,.06,-.5),e(new Lt(3.5,.18,1.2),r.glass,0,1.6,.05).rotation.x=.55,n(1.8,.75,.8,r.stone,0,.06,.75),n(.45,.4,.45,r.stone,0,.8,.75),n(s.w-.4,.04,.5,r.lawn,0,.06,1.25);break}case"ddp":{e(new Pe(1,36,14,0,Math.PI*2,0,Math.PI/2),r.silver).scale.set(2.2,.85,1.35),e(new Pe(1,24,10,0,Math.PI*2,0,Math.PI/2),r.silver,1.2,0,.35).scale.set(1.1,.6,.8);break}}return t}function W0(s,t,e,n){let i=s.length,r=new Float32Array(i*6),o=new Float32Array(i*4),a=[];for(let c=0;c<i;c++){let h=s[c].p,f=s[Math.min(i-1,c+1)].p,u=s[Math.max(0,c-1)].p,d=f.x-u.x,g=f.z-u.z,x=Math.hypot(d,g)||1,m=-g/x*t/2,p=d/x*t/2;r.set([h.x+m,e,h.z+p,h.x-m,e,h.z-p],c*6);let v=s[c].cum/n;if(o.set([0,v,1,v],c*4),c<i-1){let M=c*2;a.push(M,M+2,M+1,M+1,M+2,M+3)}}let l=new xe;return l.setAttribute("position",new Le(r,3)),l.setAttribute("uv",new Le(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function G1(s,t,e,n,i){let r=[];for(let o of[1,-1]){let a=s.length,l=new Float32Array(a*6),c=new Float32Array(a*4),h=[];for(let u=0;u<a;u++){let d=s[u].p,g=s[Math.min(a-1,u+1)].p,x=s[Math.max(0,u-1)].p,m=g.x-x.x,p=g.z-x.z,v=Math.hypot(m,p)||1,M=-p/v*o,_=m/v*o;l.set([d.x+M*e,n,d.z+_*e,d.x+M*t,n,d.z+_*t],u*6);let b=s[u].cum/i;if(c.set([0,b,1,b],u*4),u<a-1){let E=u*2;h.push(...o>0?[E,E+2,E+1,E+1,E+2,E+3]:[E,E+1,E+2,E+1,E+3,E+2])}}let f=new xe;f.setAttribute("position",new Le(l,3)),f.setAttribute("uv",new Le(c,2)),f.setIndex(h),f.computeVertexNormals(),r.push(f.toNonIndexed())}return Ir(r,!1)}function X0(s,t,e,n){let i=s.length,r=new Float32Array(i*6),o=[];for(let l=0;l<i;l++){let c=s[l].p,h=s[Math.min(i-1,l+1)].p,f=s[Math.max(0,l-1)].p,u=h.x-f.x,d=h.z-f.z,g=Math.hypot(u,d)||1,x=c.x-d/g*t,m=c.z+u/g*t;if(r.set([x,n,m,x,e,m],l*6),l<i-1){let p=l*2;o.push(p,p+2,p+1,p+1,p+2,p+3)}}let a=new xe;return a.setAttribute("position",new Le(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function V1(s,t,e){let n=[];for(let r=3,o=0;r<t-2;r+=6.5,o++){let a=s.findIndex(E=>E.cum>=r);if(a<1)continue;let l=s[a].p,c=s[Math.min(s.length-1,a+1)].p,h=s[a-1].p,f=c.x-h.x,u=c.z-h.z,d=Math.hypot(f,u)||1,g=o%2?1:-1,x=-u/d*g,m=f/d*g,p=l.x+x*e,v=l.z+m*e,M=new ee(.035,.05,1.5,6);M.translate(p,.75+.1,v);let _=new Lt(.05,.05,.42);_.rotateY(Math.atan2(-x,-m)),_.translate(p-x*.2,1.58,v-m*.2);let b=new Lt(.2,.07,.12);b.rotateY(Math.atan2(-x,-m)),b.translate(p-x*.4,1.55,v-m*.4),n.push(M,_,b)}return n.length?Ir(n.map(r=>r.toNonIndexed()),!1):null}function W1(s,t=1.6){let e=s.map(([o,a])=>on(o,0,a)),n=[e[0]];for(let o=1;o<e.length-1;o++){let a=e[o-1],l=e[o],c=e[o+1],h=a.clone().sub(l).normalize(),f=c.clone().sub(l).normalize(),u=l.clone().addScaledVector(h,t),d=l.clone().addScaledVector(f,t);for(let g=0;g<=8;g++){let x=g/8;n.push(u.clone().multiplyScalar((1-x)**2).addScaledVector(l,2*x*(1-x)).addScaledVector(d,x*x))}}n.push(e[e.length-1]);let i=[],r=0;for(let o=0;o<n.length-1;o++){let a=n[o],l=n[o+1],c=a.distanceTo(l),h=Math.max(1,Math.ceil(c/.25));for(let f=0;f<h;f++)i.push({p:a.clone().lerp(l,f/h),cum:r+c*f/h});r+=c}return i.push({p:n[n.length-1].clone(),cum:r}),{samples:i,len:r}}function X1(s){let t=new Qi(s.map(([a,l])=>on(a,0,l)),!1,"centripetal"),e=t.getLength(),n=Math.max(8,Math.ceil(e/.25)),i=[],r=0,o=null;for(let a=0;a<=n;a++){let l=t.getPointAt(a/n);o&&(r+=l.distanceTo(o)),i.push({p:l,cum:r}),o=l}return{samples:i,len:r}}var Uc=class{constructor(t,e){this.scene=t,this.S=e,this.group=new qt,t.add(this.group),this.anim=[],this.shadowDirty=!0,this.labels=[],this.rnd=pe(e.seed),this.roadClear=H1,this.streetBlocks=[],this.mats(),this.buildRoute(),this.buildGround(),this.buildRiver(),this.buildCity(),this.buildLandmarks(),this.buildBattleDecor(),this.buildGateBase(),this.buildStreetFront(),this.buildTrees()}mats(){this.M={apt:[0,1,2].map(t=>Uu(Qd(t),{roughness:.8,emissive:2500134})),glass:[0,1,2,3].map(t=>Uu(bu(t),{roughness:.4,metalness:.05,color:15266040})),gold:Uu(Eu(),{roughness:.35,metalness:.1}),roof:Ct(12172480),roof2:Ct(9343640),roofG:Ct(8231530),gable:[101,102,103,104,105,106,107,108,109,110].map((t,e)=>new $t({map:t0(t,e%3),roughness:.8}))}}buildRoute(){let t=this.S;this.steps=t.route.map(f=>({opts:(f.choice||[f]).map(d=>Object.assign({id:d.id,pts:d.pts},d.sharp?W1(d.pts):X1(d.pts))),choice:!!f.choice,open:0}));let e=u0(),n=f0(),i=new $t({map:e.map,bumpMap:e.bump,bumpScale:1.2,roughness:.88,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new $t({map:n.map,bumpMap:n.bump,bumpScale:1.5,roughness:.92,side:Xe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),o=new be({map:jd(),transparent:!0,depthWrite:!1}),a=new $t({color:12170926,roughness:.9,side:Xe}),l=Ct(4212044);this.ghostM=o,this.roadM=i,this.walkM=r,this.roadGroup=new qt,this.group.add(this.roadGroup);for(let f of this.steps)f.opts.forEach((u,d)=>{u.road=new ft(W0(u.samples,wi,.03+d*.004,3.2),i),u.walk=new ft(G1(u.samples,wi/2,(wi+.9)/2,.13,2.4),r),u.road.receiveShadow=u.walk.receiveShadow=!0;for(let x of[wi/2,-wi/2])u.walk.add(new ft(X0(u.samples,x,.02,.13),a));for(let x of[(wi+.9)/2,-(wi+.9)/2]){let m=new ft(X0(u.samples,x,0,.13),a);m.castShadow=!0,u.walk.add(m)}let g=V1(u.samples,u.len,wi/2+.28);if(g){let x=new ft(g,l);x.castShadow=!0,u.walk.add(x)}u.ghost=new ft(W0(u.samples,wi,.05,1.6),o),this.roadGroup.add(u.road,u.walk,u.ghost)});let c=new Rn;c.moveTo(-.32,.36),c.lineTo(.18,0),c.lineTo(-.32,-.36),c.lineTo(-.1,-.36),c.lineTo(.4,0),c.lineTo(-.1,.36),c.closePath();let h=new _o(c);h.rotateX(-Math.PI/2),this.chevM=new be({color:14174012,transparent:!0,opacity:.5,depthWrite:!1}),this.chev=new Gn(h,this.chevM,600),this.chev.frustumCulled=!1,this.group.add(this.chev),this.barricades=new qt,this.group.add(this.barricades),this.refreshRoads()}activeOpts(){return this.steps.map(t=>t.opts[t.open])}routeLength(){return this.activeOpts().reduce((t,e)=>t+e.len,0)}refreshRoads(){for(let r of this.steps)r.opts.forEach((o,a)=>{let l=a===0||r.open===a;o.road.visible=o.walk.visible=l,o.ghost.visible=!l});this.barricades.clear();for(let r of this.steps){if(!r.choice||r.open===0)continue;let o=r.opts[0].samples,a=o[Math.floor(o.length/2)],l=o[Math.floor(o.length/2)+1],c=new qt;for(let h=-1;h<=1;h++){let f=new ft(new Lt(.26,.42,.6),Ct(h%2?14211280:14172206));f.position.set(0,.21,h*.62),f.castShadow=!0,c.add(f)}c.position.set(a.p.x,0,a.p.z),c.rotation.y=-Math.atan2(l.p.z-a.p.z,l.p.x-a.p.x),this.barricades.add(c)}this.chevPts=[];let t=0;for(let r of this.activeOpts()){let o=r.samples;for(let a=t;a<r.len;a+=2.2){let l=0;for(;l<o.length-2&&o[l+1].cum<a;)l++;let c=o[l],h=o[l+1],f=(a-c.cum)/Math.max(1e-6,h.cum-c.cum);this.chevPts.push({x:c.p.x+(h.p.x-c.p.x)*f,z:c.p.z+(h.p.z-c.p.z)*f,ang:Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x)})}t=(t-r.len)%2.2,t<0&&(t+=2.2)}let e=new te,n=new _n,i=on(1,1,1);this.chev.count=Math.min(600,this.chevPts.length);for(let r=0;r<this.chev.count;r++){let o=this.chevPts[r];n.setFromAxisAngle(on(0,1,0),-o.ang),e.compose(on(o.x,.1,o.z),n,on(1.25,1,1.25)),this.chev.setMatrixAt(r,e)}this.chev.instanceMatrix.needsUpdate=!0}openDetour(t){let e=this.steps[t];return!e||!e.choice||e.open?!1:(e.open=1,this.refreshRoads(),!0)}resetRoutes(){for(let t of this.steps)t.open=0;this.refreshRoads()}detourNear(t,e=2.2){let n=null,i=e;return this.steps.forEach((r,o)=>{if(!(!r.choice||r.open))for(let a of r.opts[1].samples){let l=Math.hypot(a.p.x-t.x,a.p.z-t.z);l<i&&(i=l,n=o)}}),n}roadDist(t,e){let n=1e9;for(let i of this.steps)for(let r of i.opts){let o=r.samples;for(let a=0;a<o.length;a+=2){let l=(o[a].p.x-t)**2+(o[a].p.z-e)**2;l<n&&(n=l)}}return Math.sqrt(n)}blockReason(t,e){let n=this.S.bounds;if(t<n.x0+.5||t>n.x1-.5||e<n.z0+.5||e>n.z1-.5)return"\uC791\uC804 \uAD6C\uC5ED \uBC16";if(this.roadDist(t,e)<this.roadClear)return"\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00";for(let i of this.streetBlocks)if(Math.abs(t-i.x)<i.hx+.45&&Math.abs(e-i.z)<i.hz+.45)return"\uAC74\uBB3C \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00";for(let i of this.S.blockers)if(i.kind==="pond"){if(((t-i.x)/(i.rx+.4))**2+((e-i.z)/(i.rz+.4))**2<1)return"\uC5F0\uBABB \uBC30\uCE58 \uBD88\uAC00"}else if(Math.abs(t-i.x)<i.w/2+.6&&Math.abs(e-i.z)<i.d/2+.6)return i.label+" \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00";return Math.hypot(t-this.base.x,e-this.base.z)<2.2?"\uC9C0\uD718\uBD80 \uBC30\uCE58 \uBD88\uAC00":null}buildGround(){let t=this.S,e=t.bounds,n=d0(),i=new ft(new Ne(520,520),new $t({map:Or(n.map,90,90),bumpMap:Or(n.bump,90,90),roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-.02,i.receiveShadow=!0,this.group.add(i);let r=e.x1-e.x0,o=e.z1-e.z0,a=t.theme||{},l;if(a.ground==="plaza"){let g=m0();l=new $t({map:Or(g.map,r/6,o/6),bumpMap:Or(g.bump,r/6,o/6),bumpScale:.6,roughness:.9})}else if(a.ground==="boulevard"){let g=p0(),x=8.5,m=a.laneCenter??4.25,p=new Ne(r,o);p.rotateX(-Math.PI/2);let v=p.attributes.position,M=p.attributes.uv;for(let b=0;b<v.count;b++){let E=v.getX(b)+(e.x0+e.x1)/2,A=v.getZ(b)+(e.z0+e.z1)/2;M.setXY(b,E/x,(A-m)/x+.5)}let _=new ft(p,new $t({map:g.map,bumpMap:g.bump,bumpScale:1.2,roughness:.86}));_.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),_.receiveShadow=!0,this.group.add(_),this.buildCrosswalks()}else if(a.ground==="hangangPark"||!a.ground){let g=h0();l=new $t({map:Or(g.map,r/14,o/14),bumpMap:Or(g.bump,r/14,o/14),bumpScale:2,roughness:.97})}else{let g=z1[a.ground]().clone();g.needsUpdate=!0,g.wrapS=g.wrapT=ve,g.repeat.set(r/8,o/8),l=new $t({map:g,roughness:1})}if(l){let g=new ft(new Ne(r,o),l);g.rotation.x=-Math.PI/2,g.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),g.receiveShadow=!0,this.group.add(g)}let c=new Gi,h=Ct(a.edge||12433580),f=Ct(a.hedge||5012020,{roughness:1}),u=(e.x0+e.x1)/2,d=(e.z0+e.z1)/2;for(let[g,x,m,p,v,M]of[[u,e.z0,r+.7,.35,0,-1],[u,e.z1,r+.7,.35,0,1],[e.x0,d,.35,o+.7,-1,0],[e.x1,d,.35,o+.7,1,0]]){let _=new Lt(m,.32,p);_.translate(g,.16,x),c.push(h,_);let b=new Lt(m+(v?0:1.2),.55,p+(M?0:1.2));b.translate(g+v*.55,.27,x+M*.55),c.push(f,b)}c.build(this.group)}buildRiver(){let t=this.S.river;if(!t)return;let e=t.z-t.w/2,n=t.z+t.w/2,i=Kd().clone();i.needsUpdate=!0,i.wrapS=i.wrapT=ve,i.repeat.set(60,2);let r=new ft(new Ne(520,t.w),new $t({map:i,color:10408176,roughness:.25,metalness:.2}));r.rotation.x=-Math.PI/2,r.position.set(0,.003,t.z),r.receiveShadow=!0,this.group.add(r),this.anim.push(p=>{i.offset.x+=p*.01,i.offset.y+=p*.004});let o=Su().clone();o.needsUpdate=!0,o.wrapS=o.wrapT=ve,o.repeat.set(80,1);let a=new $t({map:o,roughness:1});for(let[p,v]of[[e-1,2.2],[n+1,2.2]]){let M=new ft(new Ne(520,v),a);M.rotation.x=-Math.PI/2,M.position.set(0,.004,p),M.receiveShadow=!0,this.group.add(M)}let l=Ct(11118236);for(let p of[e,n]){let v=new ft(new Ne(520,.35),l);v.rotation.x=-Math.PI/2,v.position.set(0,.006,p),this.group.add(v)}let c=new ft(new Ne(520,.35),Ct(11891034));c.rotation.x=-Math.PI/2,c.position.set(0,.008,e-.9),this.group.add(c);let h=new Gi,f=Ct(9211795),u=Ct(11842218),d=Ct(13125178),g=Ct(3829685),x=Ct(15263976),m=[[-22,"arch",g],[4,"plain",null],[30,"truss",d]];for(let[p,v,M]of m){let _=t.w+2.8,b=t.z,E=new Lt(2.6,.3,_);E.translate(p,.35,b),h.push(f,E);let A=new Ne(2.2,_);A.rotateX(-Math.PI/2),A.translate(p,.505,b),h.push(Ct(5593181),A);for(let y of[-1,1]){let w=new Lt(.08,.16,_);w.translate(p+y*1.25,.58,b),h.push(x,w)}for(let y=e+.5;y<=n-.5;y+=1.75){let w=new Lt(1.6,.9,.5);w.translate(p,-.15,y),h.push(u,w)}if(v==="arch")for(let y of[-1,1])for(let w=0;w<16;w++){let R=w/16*Math.PI,I=(w+1)/16*Math.PI,D=on(p+y*1.25,.5+Math.sin(R)*2.6,b-Math.cos(R)*(t.w/2)),B=on(p+y*1.25,.5+Math.sin(I)*2.6,b-Math.cos(I)*(t.w/2)),L=new Lt(.16,.16,D.distanceTo(B)+.05);if(L.lookAt(B.clone().sub(D)),L.translate((D.x+B.x)/2,(D.y+B.y)/2,(D.z+B.z)/2),h.push(M,L),w%2===0&&w>0){let z=Math.sin(R)*2.6,W=new Lt(.05,z,.05);W.translate(p+y*1.25,.5+z/2,D.z),h.push(M,W)}}else if(v==="truss")for(let y of[-1,1]){let w=new Lt(.14,.14,_-3);w.translate(p+y*1.25,1.7,b),h.push(M,w);for(let R=b-(_-3)/2;R<b+(_-3)/2;R+=1.1){let I=new Lt(.08,1.45,.08);I.rotateX(Math.round(R*10)%2?.6:-.6),I.translate(p+y*1.25,1.05,R+.55),h.push(M,I)}}}h.build(this.group);for(let p=0;p<4;p++){let v=new qt,M=new ft(new Lt(2.2,.35,.7),Ct(16053488));M.position.y=-.15,v.add(M);let _=new ft(new Lt(1.1,.35,.55),Ct(3829685));_.position.set(-.2,.18,0),v.add(_),v.position.set(-80+p*45,0,t.z+(p%2?1.6:-1.4));let b=p%2?1:-1;this.group.add(v),this.anim.push((E,A)=>{v.position.x+=b*.9*E,v.position.x>120&&(v.position.x=-120),v.position.x<-120&&(v.position.x=120),v.rotation.z=Math.sin(A*1.3+p)*.02,v.rotation.y=b>0?0:Math.PI})}}buildCity(){let t=this.S,e=t.bounds,n=t.river,i=this.rnd,r=new Gi,o=this.M,a=[];for(let d of t.landmarks)d.id==="namsan"&&a.push([d.x,d.z,13]),d.id==="lotte"&&a.push([d.x,d.z,7]),d.id==="b63"&&a.push([d.x,d.z-3,7]);let l=t.gate,c=t.base;a.push([l[0]-2,l[1],4.5]);let h=(d,g,x)=>{if(d>e.x0-3.5&&d<e.x1+3.8&&g>e.z0-3.4&&g<e.z1+3.4||n&&g>n.z-n.w/2-2.5-x&&g<n.z+n.w/2+2.5+x)return!1;for(let[m,p,v]of a)if(Math.hypot(d-m,g-p)<v+x)return!1;return!0},f=Ct(13223613),u=0;for(let d=-150;d<150;d+=9)for(let g=-78;g<90;g+=9){let x=d+4.5,m=g+4.5,p=Math.hypot(x,m);if(p>150||!h(x,m,4))continue;let v=new Ne(7.2,7.2);v.rotateX(-Math.PI/2),v.translate(x,.006,m),r.push(f,v);let M=m<(n?n.z:-40),_=m>e.z1-6&&m<e.z1+34&&x>e.x0-30&&x<e.x1+30,b=!_&&m>e.z0-4&&m<e.z1&&(x<e.x0||x>e.x1)&&Math.min(Math.abs(x-e.x0),Math.abs(x-e.x1))<16,E=_?.45:b?.75:1,A=i();if(A<(M?.55:.68)){let y=i.int(0,2),w=Math.round(i.int(12,25)*E),R=w*.28,I=i()<.85?0:Math.PI/2;for(let D=0;D<2;D++){let B=i.range(5.2,6.4),L=1.25,z=I?D?1.7:-1.7:0,W=I?0:D?1.8:-1.8,q=p<60;Is(r,x+z,0,m+W,B,R,L,I,o.apt[y],o.roof,1.6,1.12,q?o.gable[u++%o.gable.length]:null)}}else if(A<.9){let y=i.int(1,3);for(let w=0;w<y;w++){let R=i.range(2.2,3.4),I=i.range(2.2,3.4),D=i.range(5,p<50?12:18)*E;Is(r,x+i.range(-1.6,1.6),0,m+i.range(-1.6,1.6),R,D,I,0,o.glass[i.int(0,3)],o.roof2,2,2)}}else{let y=new Ne(6.8,6.8);y.rotateX(-Math.PI/2),y.translate(x,.01,m),r.push(o.roofG,y);for(let w=0;w<6;w++)(this.cityTrees=this.cityTrees||[]).push([x+i.range(-3,3),m+i.range(-3,3),i.range(.8,1.2)])}if(i()<.5)for(let y=0;y<3;y++)(this.cityTrees=this.cityTrees||[]).push([x+(i()<.5?-3.8:3.8),m+i.range(-3.5,3.5),i.range(.7,1)])}if(n)for(let d=-150;d<150;d+=7.5){let g=n.z-n.w/2-4;if(a.some(([p,v,M])=>Math.hypot(d-p,g-v)<M+3))continue;let x=i.int(0,2),m=i.int(14,28)*.28;Is(r,d,0,g,6,m,1.25,0,o.apt[x],o.roof,1.6,1.12,Math.abs(d)<50?o.gable[u++%o.gable.length]:null)}r.build(this.group)}buildLandmarks(){let t=this.S,e=new Gi;for(let n of t.landmarks){if(n.id==="namsan"){let i=new Pe(1,28,14,0,Math.PI*2,0,Math.PI/2),r=i.attributes.position,o=pe("namsan");for(let l=0;l<r.count;l++){let c=r.getY(l);r.setXYZ(l,r.getX(l)*11,Math.pow(c,1.4)*6*(1+o.range(-.04,.04)),r.getZ(l)*8)}i.computeVertexNormals();let a=new ft(i,Ct(5208630,{roughness:1}));a.position.set(n.x,-.1,n.z),a.castShadow=a.receiveShadow=!0,this.group.add(a),this.namsan={x:n.x,z:n.z};for(let l=0;l<260;l++){let c=o()*Math.PI*2,h=Math.sqrt(o())*.95,f=Math.cos(c)*h,u=Math.sin(c)*h,d=Math.pow(Math.sqrt(Math.max(0,1-h*h)),1.4)*6;h>.18&&(this.cityTrees=this.cityTrees||[]).push([n.x+f*11,n.z+u*8,o.range(1,1.5),d-.1])}}if(n.id==="ntower"){let i=new qt;i.position.set(n.x,5.8,n.z),i.scale.setScalar(.85);let r=Ct(15921904,{roughness:.5}),o=Ct(10396584),a=(c,h,f)=>{let u=new ft(c,h);return u.position.y=f,u.castShadow=!0,i.add(u),u};a(new ee(1.1,1.4,1,16),o,.5),a(new ee(.42,.55,8.5,16),r,5.2),a(new ee(1.15,.85,.6,20),r,9.4),a(new ee(1.25,1.15,.9,20),Ct(7309984,{roughness:.3,metalness:.5}),10.1),a(new ee(.95,1.25,.5,20),r,10.8),a(new ee(.18,.3,2.6,10),r,12.4);for(let c=0;c<4;c++)a(new ee(.1,.12,.5,8),c%2?r:Ct(13777454),13.9+c*.5);let l=a(new Pe(.16,8,6),new be({color:16726574}),16);this.anim.push((c,h)=>{l.visible=Math.sin(h*3)>0}),this.group.add(i)}if(n.id==="lotte"){let i=new ee(.35,2.4,26,4,12,!1,Math.PI/4),r=i.attributes.position;for(let c=0;c<r.count;c++){let h=r.getY(c)/26+.5,f=2.4+(.35-2.4)*h,u=2.4*(1-.86*Math.pow(h,1.7));r.setX(c,r.getX(c)*u/f),r.setZ(c,r.getZ(c)*u/f)}i.computeVertexNormals();let o=bu(2).clone(),a=new ft(i,new $t({map:o,color:16777215,emissive:1911350,roughness:.35,metalness:.05}));a.position.set(n.x,13,n.z),a.castShadow=!0,this.group.add(a);let l=new ft(new Dn(.35,2,4),Ct(15331058,{metalness:.6,roughness:.3}));l.position.set(n.x,27,n.z),this.group.add(l),Is(e,n.x+4.2,0,n.z+1,4,2.2,3,0,this.M.glass[1],this.M.roof2,2,2)}if(n.id==="b63"){let i=new Lt(3.2,13,2),r=i.attributes.position;for(let l=0;l<r.count;l++){let c=r.getY(l)/13+.5;r.setX(l,r.getX(l)*(1-c*.35))}i.computeVertexNormals();let o=Eu().clone();o.needsUpdate=!0,o.wrapS=o.wrapT=ve,o.repeat.set(4,16);let a=new ft(i,new $t({map:o,emissive:2759168,roughness:.35,metalness:.1}));a.position.set(n.x,6.5,n.z),a.castShadow=!0,this.group.add(a);for(let l=0;l<4;l++)Is(e,n.x-1.2-(l>>1)*3.2,0,n.z+(l%2?4.6:-4.6),2.2,4+l*1.1,2.6,0,this.M.glass[l%4],this.M.roof2,2,2)}if(n.id==="bukhan"){let i=pe("bukhan"),r=Ct(8357240,{roughness:1,flatShading:!0}),o=Ct(5599306,{roughness:1,flatShading:!0});for(let a=0;a<16;a++){let l=-160+a*21+i.range(-6,6),c=14+i()*16*(1-Math.abs(l-n.x)/200),h=i.range(14,24),f=new Dn(h,c,9,4),u=f.attributes.position;for(let g=0;g<u.count;g++)u.getY(g)<c/2-.01&&u.setXYZ(g,u.getX(g)*i.range(.85,1.15),u.getY(g)+i.range(-1,1),u.getZ(g)*i.range(.85,1.15));f.computeVertexNormals();let d=new ft(f,a%3===0?r:o);d.position.set(l,c/2-1,n.z-i.range(0,14)),this.group.add(d)}}n.label&&n.id!=="namsan"&&this.labels.push({text:n.label,pos:on(n.x,n.y||0,n.z),kind:"landmark"}),n.id==="namsan"&&n.label&&this.labels.push({text:n.label,pos:on(n.x+8,2.5,n.z+4),kind:"landmark"})}e.build(this.group)}buildBattleDecor(){let t=new Gi,e=this.M;for(let n of this.S.blockers)if(n.kind==="pond"){let i=new mi(1,32);i.rotateX(-Math.PI/2),i.scale(n.rx,1,n.rz),i.translate(n.x,.015,n.z),t.push(Ct(5216196,{roughness:.2,metalness:.2}),i);let r=new ts(1,1.12,32);r.rotateX(-Math.PI/2),r.scale(n.rx,1,n.rz),r.translate(n.x,.02,n.z),t.push(Ct(13222573),r)}else if(n.kind==="field"){let i=new ft(new Ne(n.w+1.4,n.d+.9),Ct(11883839));i.rotation.x=-Math.PI/2,i.position.set(n.x,.012,n.z),i.receiveShadow=!0,this.group.add(i);let r=new ft(new Ne(n.w,n.d),new $t({map:n0(),roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(n.x,.016,n.z),r.receiveShadow=!0,this.group.add(r);for(let o of[-1,1]){let a=new Lt(.1,.35,.9);a.translate(n.x+o*n.w/2,.18,n.z),t.push(Ct(16777215),a)}}else if(n.kind==="landmark"){let i=k1(n);this.group.add(i),hs(i,()=>!1,!0),n.label&&this.labels.push({text:n.label,pos:on(n.x,n.y||2.6,n.z),kind:"landmark"})}else if(n.kind==="apts"){let i=Math.max(1,Math.round(n.w/3.4));for(let r=0;r<i;r++){let o=n.w/i-.5,a=n.x-n.w/2+(r+.5)*n.w/i;Is(t,a,0,n.z,o,4.2+r%2*.8,n.d-.6,0,e.apt[r%3],e.roof,1.6,1.12,e.gable[r%e.gable.length])}}t.build(this.group)}buildGateBase(){let t=this.S,[e,n]=t.gate;this.gate=on(e,0,n);let i=new qt;i.position.set(e,0,n);let r=Ct(9276035),o=new be({color:723724}),a=new ft(new Pe(1,20,10,0,Math.PI*2,0,Math.PI/2),Ct(5601852,{roughness:1}));a.scale.set(3,2.6,3.4),a.position.set(-2.4,0,0),a.castShadow=!0,i.add(a);let l=new ft(new Lt(1.2,2.4,4.2),r);l.position.set(.2,1.2,0),l.castShadow=!0,i.add(l);let c=new ft(new Ne(2.4,1.7),o);c.rotation.y=Math.PI/2,c.position.set(.81,.85,0),i.add(c);let h=new ft(new Lt(.08,.12,2.8),new be({color:16724016}));h.position.set(.84,1.85,0),i.add(h),this.anim.push((g,x)=>{h.material.color.setHSL(0,1,.45+Math.sin(x*4)*.12)}),this.group.add(i),this.labels.push({text:"\uC801 \uC9C4\uC785",pos:on(e+.5,3.2,n),kind:"enemy"});let[f,u]=t.base;this.base=on(f,0,u);let d=B0();d.root.scale.setScalar(2.4),d.root.position.set(f,0,u),d.root.rotation.y=Math.PI/2,this.group.add(d.root);for(let[g,x,m]of d.spin)this.anim.push(p=>{g.rotation[x]+=m*p});this.anim.push((g,x)=>{d.flag.rotation.y=Math.sin(x*2.2)*.25}),this.baseModel=d,this.labels.push({text:"\uC5F0\uD569 \uC9C0\uD718\uBD80",pos:on(f,3.4,u),kind:"base"})}buildCrosswalks(){let t=this.S,e=t.bounds,n=t.theme||{},i=n.laneCenter??4.25,r=4.25-this.roadClear+.55,o=new $t({map:g0(),transparent:!0,roughness:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Gi;for(let l=i-8.5*4;l<=e.z1;l+=8.5)if(!(l-r<e.z0||l+r>e.z1))for(let c of n.crosswalkX||[-21,-2,21]){if(t.blockers.some(u=>Math.abs(c-u.x)<u.w/2+.8&&Math.abs(l-u.z)<u.d/2+2))continue;let h=new Ne(.75,r*2);h.rotateX(-Math.PI/2),h.translate(c,.012,l);let f=h.attributes.uv;for(let u=0;u<f.count;u++)f.setY(u,f.getY(u)*r*2/2.2);a.push(o,h)}a.build(this.group,!1)}buildStreetFront(){let t=this.S.streetFront;if(!t)return;let e=this.S,n=e.bounds,i=pe(e.seed+"street"),r=new Gi,o=[0,1,2,3,4,5].map(g=>new $t({map:x0(g),roughness:.8})),a=[0,1,2].map(g=>new $t({map:v0(g),roughness:.25,metalness:.4})),l=Ct(9277329,{roughness:.95}),c=Ct(4165577,{roughness:.6}),h=Ct(13224908),f=(wi+.9)/2+.03,u=t.depth,d=(g,x,m)=>g-m<n.x0+.05||g+m>n.x1-.05||x-m<n.z0+.05||x+m>n.z1-.05||e.blockers.some(p=>Math.abs(g-p.x)<p.w/2+m+.2&&Math.abs(x-p.z)<p.d/2+m+.2)||this.base&&Math.hypot(g-this.base.x,x-this.base.z)<2.6||e.gate&&Math.hypot(g-e.gate[0],x-e.gate[1])<2.4?!1:this.roadDist(g,x)>f+u*.3;for(let g of e.route){let x=g.pts;for(let m=0;m<x.length-1;m++){let[p,v]=x[m],[M,_]=x[m+1],b=Math.hypot(M-p,_-v),E=(M-p)/b,A=(_-v)/b;for(let y of[-1,1]){let w=-A*y,R=E*y,I=f+u/2,D=m===0?.3:I+.3+i.range(0,3),B=i.int(1,3),L=b-(m===x.length-2?.3:I+.3);for(;D<L-.5;){let z=Math.min(L-D,i.range(.9,1.7)),W=p+E*(D+z/2)+w*I,q=v+A*(D+z/2)+R*I;if(d(W,q,Math.max(z,u)/2*.7)){let rt=R>.5,X=!rt&&i()<.15,K=X?i.range(1.6,2.4):rt?i.range(.3,.6):i.range(.5,1.3),tt=Math.atan2(-A,E)+(y>0?Math.PI:0),Pt=X?a[Math.floor(i()*3)]:o[Math.floor(i()*6)];if(Is(r,W,0,q,z-.06,K,u,tt,Pt,l,X?.8:1,X?.8:1.5),this.streetBlocks.push({x:W,z:q,hx:Math.abs(E)*z/2+Math.abs(w)*u/2,hz:Math.abs(A)*z/2+Math.abs(R)*u/2}),i()<.5){let bt=new ee(.09,.09,.14,8);bt.translate(W+w*.05,K+.07,q+R*.05),r.push(c,bt)}if(i()<.6){let bt=new Lt(.16,.1,.12);bt.translate(W-E*z*.25,K+.05,q-A*z*.25),r.push(h,bt)}}D+=z+.04,--B<=0&&(D+=i.range(t.gap?.[0]??4,t.gap?.[1]??8),B=i.int(1,3))}}}}r.build(this.group)}buildTrees(){let t=this.S,e=t.bounds,n=pe(t.seed+"trees"),i=[];for(let p=0;p<2600&&i.length<(t.parkTrees||0);p++){let v=n.range(e.x0+.6,e.x1-.6),M=n.range(e.z0+.6,e.z1-.6);this.roadDist(v,M)<1.6||this.blockReason(v,M)&&this.blockReason(v,M)!=="\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00"||i.some(_=>(_[0]-v)**2+(_[1]-M)**2<.8)||i.push([v,M,n.range(.75,1.15),n()<.12])}this.parkTrees=i;let r=new ee(.05,.07,.5,5);r.translate(0,.25,0);let o=new Ms(.42,0);o.scale(1,1.15,1),o.translate(0,.82,0);let a=Ct(7031343),l=Ct(5147194,{flatShading:!0,roughness:.9}),c=Ct(15906502,{flatShading:!0,roughness:.9}),h=Ct(4158256,{flatShading:!0,roughness:.9}),f=(p,v)=>{let M=new Gn(r,a,Math.max(1,p.length)),_=new Gn(o,v,Math.max(1,p.length));return M.castShadow=_.castShadow=!0,_.receiveShadow=!0,M.count=_.count=p.length,this.group.add(M,_),{tr:M,cr:_,list:p}};this.treeSets=[f(i.filter(p=>!p[3]),l),f(i.filter(p=>p[3]),c)],this.hiddenTrees=new Set,this.refreshTrees();let u=this.cityTrees||[],d=new Gn(r,a,u.length),g=new Gn(o,h,u.length),x=new te,m=new _n;u.forEach(([p,v,M,_=0],b)=>{x.compose(on(p,_,v),m,on(M,M,M)),d.setMatrixAt(b,x),g.setMatrixAt(b,x)}),g.castShadow=!0,this.group.add(d,g)}refreshTrees(){let t=new te,e=new _n;for(let n of this.treeSets)n.list.forEach((i,r)=>{let o=this.hiddenTrees.has(i)?1e-4:i[2];e.setFromAxisAngle(on(0,1,0),i[0]*7.3),t.compose(on(i[0],0,i[1]),e,on(o,o,o)),n.tr.setMatrixAt(r,t),n.cr.setMatrixAt(r,t)}),n.tr.instanceMatrix.needsUpdate=n.cr.instanceMatrix.needsUpdate=!0}clearTreesAt(t,e,n=.95){let i=0;for(let r of this.parkTrees)!this.hiddenTrees.has(r)&&(r[0]-t)**2+(r[1]-e)**2<n*n&&(this.hiddenTrees.add(r),i++);return i&&(this.refreshTrees(),this.shadowDirty=!0),i}resetTrees(){this.hiddenTrees.clear(),this.refreshTrees(),this.shadowDirty=!0}update(t,e){for(let n of this.anim)n(t,e);this.chevM.opacity=.42+Math.sin(e*4)*.14,this.ghostM.opacity=.65+Math.sin(e*3)*.3}};var Ce=(s=0,t=0,e=0)=>new P(s,t,e),q0=1.6,Y0=1.4,Vi={ball:new Pe(1,10,7),puff:new Pe(1,7,5),ring:new ts(.92,1,48),shell:new Pe(.06,6,4),rocket:new Dn(.045,.24,6),wreck:new Lt(1,.12,.6)},Fc=class{constructor(t){this.app=t,this.scene=t.scene,this.city=t.city,this.S=t.stage,this.fxGroup=new qt,this.scene.add(this.fxGroup),this.unitGroup=new qt,this.scene.add(this.unitGroup),this.flash=new Ao(16752704,0,8,1.6),this.scene.add(this.flash),this.rangeDisc=new qt;let e=new ft(new mi(1,64),new be({color:8382975,transparent:!0,opacity:.13,depthWrite:!1})),n=new ft(new ts(.98,1,96),new be({color:11203839,transparent:!0,opacity:.85,depthWrite:!1}));e.rotation.x=n.rotation.x=-Math.PI/2,this.rangeDisc.add(e,n),this.rangeDisc.visible=!1,this.rangeDisc.position.y=.07,this.rangeMats=[e.material,n.material],this.scene.add(this.rangeDisc),this.ghosts={},this.state="title",this.speed=1,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[]}ui(){return this.app.ui}snd(t,e){this.app.sound&&this.app.sound.play(t,e)}start(){let t=this.S,e=GF.SETTINGS;for(let n of this.towers)this.unitGroup.remove(n.model.root);for(let n of this.enemies)this.removeEnemy(n);this.fxGroup.clear(),this.city.resetRoutes(),this.city.resetTrees(),this.money=t.startMoney,this.lives=t.lives,this.cp=e.cpStart,this.cpT=0,this.speed=1,this.waveNo=0,this.kills=0,this.queue=[],this.clock=0,this.nextT=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[],this.mode=null,this.cardSel=-1,this.selected=null,this.deck=GF.CARD_DECK.slice().sort(()=>Math.random()-.5),this.hand=this.deck.splice(0,GF.HAND_SIZE),this.strat={};for(let[n,i]of Object.entries(GF.STRATEGIC))this.strat[n]={charges:this.stratOpen(n)?i.start:0};this.stratSel=null,this.computeSynergy(),this.updateRemain(),this.state="ready",this.ui().toast('\uB3C4\uB85C \uBC16 \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uACE0 "\uC791\uC804 \uAC1C\uC2DC"\uB97C \uB204\uB974\uC138\uC694',"#8FF3FF",4200)}computeSynergy(){let t=GF.LOADOUT.map(r=>GF.WEAPONS[r]),e=t.filter(r=>r.nation.indexOf("\uBBF8\uAD6D")>=0).length,n=t.filter(r=>r.hits.includes("ground")).length,i=t.filter(r=>r.hits.includes("air")).length;this.syn={usSet:e>=3,slowSplash:t.some(r=>r.slow)&&t.some(r=>r.splash),balance:n>=2&&i>=2},this.synList=[],this.syn.usSet&&this.synList.push("\uBBF8\uAD6D \uC138\uD2B8 \xB7 \uBBF8\uAD6D \uBB34\uAE30 \uACF5\uC18D +5%"),this.syn.slowSplash&&this.synList.push("\uAC10\uC18D + \uBC94\uC704 \xB7 \uAC10\uC18D\uB41C \uC801 \uBC94\uC704 \uD53C\uD574 +20%"),this.syn.balance&&this.synList.push("\uC9C0\uC0C1\xB7\uACF5\uC911 \uADE0\uD615 \xB7 \uCC98\uCE58 \uBCF4\uC0C1 +5%")}updateRemain(){let t=this.city.activeOpts();this.remainAfter=t.map((e,n)=>t.slice(n+1).reduce((i,r)=>i+r.len,0))}callNext(){if(this.isOver()||this.waveNo>=this.S.waves.length)return;if(this.state==="ready"){this.state="battle",this.launchWave(0);return}if(this.queue.length){this.ui().toast("\uC544\uC9C1 \uC774\uBC88 \uC6E8\uC774\uBE0C \uC801\uC774 \uB098\uC624\uB294 \uC911\uC785\uB2C8\uB2E4");return}let t=Math.ceil(this.nextT)*3;this.launchWave(t)}launchWave(t){this.waveNo++;let e=this.S.waves[this.waveNo-1].trim().split(/\s+/),n=this.clock+.2;for(let a=0;a<e.length;a+=2){let l=e[a],c=parseInt(e[a+1],10);for(let h=0;h<c;h++)this.queue.push({t:n,type:l,wave:this.waveNo}),n+=GF.ENEMIES[l].gap;n+=1.2}this.queue.sort((a,l)=>a.t-l.t);let i=this.waveNo>1?40+this.waveNo*8:0;this.money+=i+t;let r=e.reduce((a,l,c)=>c%2?a+parseInt(l,10):a,0),o=`\uC6E8\uC774\uBE0C ${this.waveNo} \xB7 \uC801 ${r}`;i&&(o+=` \xB7 \uBCF4\uAE09 +${i}`),t&&(o+=` \xB7 \uC870\uAE30 \uD22C\uC785 +${t}`),this.ui().toast(o,this.S.waves[this.waveNo-1].includes("boss")?"#FF8A8E":"#ffffff"),this.snd("wave");for(let[a,l]of Object.entries(GF.STRATEGIC)){let c=this.strat[a];this.stratOpen(a)&&this.waveNo%l.every===0&&c.charges<l.max&&(c.charges++,this.timers.push({t:1.2,fn:()=>{this.ui().toast(`${l.name} \uC7AC\uBCF4\uAE09 \uC644\uB8CC! (${l.key} \uD0A4)`,"#FF8A8E",3e3),this.snd("siren")}}))}this.nextT=0}finish(t){if(this.isOver())return;this.state=t?"won":"lost",this.cancelMode();let e=0;if(t){let n=this.lives/this.S.lives;e=n>=.9?3:n>=.5?2:1;try{let i=JSON.parse(localStorage.getItem("gf_progress")||"{}");i[this.S.id]=Math.max(i[this.S.id]||0,e),localStorage.setItem("gf_progress",JSON.stringify(i))}catch{}}this.ui().showResult(t,e),this.snd(t?"win":"lose")}isOver(){return this.state==="won"||this.state==="lost"||this.state==="title"}setMode(t){if(this.isOver())return;if(this.mode===t){this.cancelMode();return}if(this.cancelMode(),t==="detour"){if(!this.city.steps.some(n=>n.choice&&!n.open)){this.ui().toast("\uAC1C\uD1B5\uD560 \uC6B0\uD68C\uB85C\uAC00 \uB354 \uC5C6\uC2B5\uB2C8\uB2E4");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;return}if(this.money<GF.WEAPONS[t].cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;let e=this.ghosts[t]||(this.ghosts[t]=G0(t));e.root.scale.setScalar(q0),e.root.visible=!1,this.scene.add(e.root),this.ghost=e}pickCard(t){if(this.isOver()||!this.hand[t])return;let e=GF.CARDS[this.hand[t]];if(this.cp<e.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}if(!e.target){this.useCard(t,Ce());return}this.cancelMode(),this.mode="card",this.cardSel=t}stratOpen(t){return this.S.no>=GF.STRATEGIC[t].unlockStage}stratNext(t){let e=GF.STRATEGIC[t];return(Math.floor(this.waveNo/e.every)+1)*e.every}pickStrat(t){if(this.isOver())return;let e=GF.STRATEGIC[t];if(!this.stratOpen(t)){this.ui().toast(`${e.name}: \uC2A4\uD14C\uC774\uC9C0 ${e.unlockStage}\uBD80\uD130 \uC0AC\uC6A9 \uAC00\uB2A5`),this.snd("deny");return}if(this.state!=="battle"){this.ui().toast("\uC804\uD22C\uAC00 \uC2DC\uC791\uB41C \uB4A4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4");return}if(!this.strat[t].charges){this.ui().toast(`${e.name}: \uC6E8\uC774\uBE0C ${this.stratNext(t)}\uC5D0 \uC7AC\uBCF4\uAE09`),this.snd("deny");return}if(this.mode==="strat"&&this.stratSel===t){this.cancelMode();return}this.cancelMode(),this.mode="strat",this.stratSel=t}useStrat(t,e){let n=GF.STRATEGIC[t],i=Ce(e.x,0,e.z),r=t==="nuke";this.strat[t].charges--,this.mode=null,this.stratSel=null,this.rangeDisc.visible=!1,this.ui().toast(r?"\uC804\uB7B5\uD575\uBBF8\uC0AC\uC77C \uBC1C\uC0AC!":"ICBM \uBC1C\uC0AC!","#FF8A8E",2500),this.snd("siren"),this.spawnRing(i,n.radius,16726832,2.2);let o=new qt,a=new ft(new ee(.22,.22,2.2,12),Ct(15263970));o.add(a);let l=new ft(new Dn(.22,.7,12),Ct(r?14200874:10103332));l.position.y=-1.45,l.rotation.x=Math.PI,o.add(l),o.scale.setScalar(r?1.6:1.1);let c=i.clone().add(Ce(-6,40,-10)),h=r?2.2:1.6;o.position.copy(c),o.lookAt(i),o.rotateX(Math.PI/2),this.pushFx(o,h,(f,u)=>{f.position.copy(c).lerp(i,u*u),Math.random()<.6&&this.fx.length<450&&this.spawnPuff(f.position.clone(),15658734,1,.3,1.2)}),this.timers.push({t:h,fn:()=>this.detonate(i,n,r)})}detonate(t,e,n){this.explode(t,e.radius,e.power,null,!1,!1),this.explode(t,e.radius,e.power,null,!1,!0),this.snd(n?"nuke":"bigboom",1.6),this.app.shake(n?1.4:.7),n&&this.ui().whiteFlash();let i=new ft(Vi.ball,new be({color:16773552,transparent:!0}));i.position.copy(t);let r=e.radius;this.pushFx(i,n?2.5:1.2,(o,a)=>{o.scale.setScalar(r*(.2+.7*Math.sqrt(a))),o.material.opacity=1-a,o.material.color.setHSL(.12-a*.1,1,.75-a*.4)});for(let o=0;o<(n?3:1);o++)this.timers.push({t:o*.25,fn:()=>this.spawnRing(t,r*1.1,16769184,1.2)});for(let o=0;o<(n?40:16);o++){let a=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*r*.9;this.spawnPuff(t.clone().add(Ce(Math.cos(a)*l,.2,Math.sin(a)*l)),4866104,1,.5+Math.random()*.8,3)}if(n){let o=new qt;o.position.copy(t);let a=new $t({color:14191178,emissive:6957568,transparent:!0,roughness:1}),l=new ft(new ee(.6,1.4,1,16),a);o.add(l);let c=new ft(new Pe(1,20,12),a);c.scale.set(1,.55,1),o.add(c);let h=new ft(new Nn(1,.35,10,24),a);h.rotation.x=Math.PI/2,o.add(h),this.pushFx(o,7,(f,u)=>{let d=2+12*Math.min(1,u*2.2),g=2+5*Math.min(1,u*1.8);l.scale.set(1+u,d,1+u),l.position.y=d/2,c.position.y=d,c.scale.set(g,g*.55,g),h.position.y=d*.62,h.scale.setScalar(g*.7),a.opacity=u<.7?.95:.95*(1-(u-.7)/.3),a.color.setHSL(.07,.6-u*.5,.55-u*.15),a.emissiveIntensity=1-u})}}cancelMode(){this.mode=null,this.cardSel=-1,this.stratSel=null,this.select(null),this.rangeDisc.visible=!1,this.ghost&&(this.scene.remove(this.ghost.root),this.ghost=null),this.tip=null}placeReason(t,e){let n=this.city.blockReason(t,e);if(n)return n;for(let i of this.towers)if((i.pos.x-t)**2+(i.pos.z-e)**2<Y0*Y0)return"\uB2E4\uB978 \uBB34\uAE30\uC640 \uB108\uBB34 \uAC00\uAE4C\uC6C0";return null}hoverAt(t){if(this.hoverP=t,this.tip=null,this.mode==="card"){this.showRange(Ce(t.x,0,t.z),GF.CARDS[this.hand[this.cardSel]].radius,9421823);return}if(this.mode==="strat"){this.showRange(Ce(t.x,0,t.z),GF.STRATEGIC[this.stratSel].radius,16734794);return}if(this.mode==="detour"){let i=this.city.detourNear(t);this.tip=i!=null?{ok:!0,text:`\uC6B0\uD68C\uB85C \uAC1C\uD1B5 (${this.S.detourCost}) \xB7 \uC801\uC774 \uB354 \uC624\uB798 \uBA38\uBB45\uB2C8\uB2E4`}:{ok:!1,text:"\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694"};return}if(!this.mode){this.selected||(this.rangeDisc.visible=!1);return}let e=this.placeReason(t.x,t.z),n=!e;this.ghost.root.visible=!0,this.ghost.root.position.set(t.x,0,t.z),this.ghost.setOk(n),this.showRange(Ce(t.x,0,t.z),GF.WEAPONS[this.mode].range,n?8382975:16743034),this.tip=n?{ok:!0,text:"\uC790\uC720 \uBC30\uCE58 \uAC00\uB2A5"}:{ok:!1,text:e}}showRange(t,e,n){this.rangeDisc.position.set(t.x,.07,t.z),this.rangeDisc.scale.setScalar(e),this.rangeMats.forEach(i=>i.color.set(n)),this.rangeDisc.visible=!0}click(t){if(this.isOver())return;if(this.mode==="card"){this.useCard(this.cardSel,t);return}if(this.mode==="strat"){this.useStrat(this.stratSel,t);return}if(this.mode==="detour"){this.clickDetour(t);return}if(this.mode){this.clickPlace(t);return}let e=null,n=1.2;for(let i of this.towers){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<n&&(n=r,e=i)}this.select(e)}clickDetour(t){let e=this.city.detourNear(t);if(e==null){this.ui().toast("\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}let n=this.city.steps[e].opts[1];for(let i of this.towers)for(let r of n.samples)if(Math.hypot(r.p.x-i.pos.x,r.p.z-i.pos.z)<1.3){this.ui().toast("\uC6B0\uD68C\uB85C \uC790\uB9AC\uC5D0 \uBB34\uAE30\uAC00 \uC788\uC5B4 \uAC1C\uD1B5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");return}this.money-=this.S.detourCost,this.city.openDetour(e),this.updateRemain();for(let i of n.samples)Math.random()<.12&&this.spawnPuff(i.p.clone().setY(.1),13157560,1,.3);this.ui().toast(`\uC6B0\uD68C\uB85C \uAC1C\uD1B5! \uC801 \uC774\uB3D9 \uAC70\uB9AC +${Math.round(n.len-this.city.steps[e].opts[0].len)}`,"#8FF3FF"),this.cancelMode()}clickPlace(t){let e=GF.WEAPONS[this.mode],n=this.placeReason(t.x,t.z);if(n){this.ui().toast(n);return}if(this.money<e.cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}this.money-=e.cost,this.addTower(this.mode,t.x,t.z),this.money<e.cost&&this.cancelMode()}select(t){this.selected=t,t?this.showRange(t.pos,this.stats(t).range,15909198):this.mode||(this.rangeDisc.visible=!1)}addTower(t,e,n){let i=ea(t),r=Ce(e,0,n);i.root.position.copy(r),i.root.scale.setScalar(q0);let o=-Math.PI/2;i.yaw.rotation.y=-o,this.unitGroup.add(i.root);let a={type:t,W:GF.WEAPONS[t],pos:r,model:i,level:1,invested:GF.WEAPONS[t].cost,cd:.3,dmgTotal:0,kills:0,ang:o,pulse:0,marks:[]};return this.towers.push(a),this.city.clearTreesAt(e,n),this.spawnPuff(r,13481610,6),this.snd("place"),a}stats(t){return this.statsAt(t,t.level)}statsAt(t,e){let n=GF.SETTINGS.upgrade,i=Math.min(e,n.dmg.length)-1,r=t.W.rate;this.syn.usSet&&t.W.nation.indexOf("\uBBF8\uAD6D")>=0&&(r*=1.05);let o=t.W.dmg*n.dmg[i],a=r*n.rate[i];return{dmg:o,range:t.W.range*n.range[i],rate:a,dps:(o||0)*a*(t.W.salvo||1),mul:n.dmg[i]}}upgradeCost(t){return Math.round(t.W.cost*.75*t.level)}upgradeTower(t,e){if(!t||t.level>=GF.SETTINGS.maxTowerLevel)return!1;let n=this.upgradeCost(t);if(this.money<n)return e||(this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.snd("deny")),!1;this.money-=n,t.invested+=n,t.level++;let i=new ft(new Lt(.16,.03,.05),Ct(15909198,{emissive:8018432}));return i.position.set(.3,.09,.3-t.marks.length*.08),t.model.root.add(i),t.marks.push(i),t.model.yaw.scale.setScalar(1+.07*(t.level-1)),this.selected===t&&this.select(t),this.spawnRing(t.pos,.8,15909198),this.snd("upgrade"),!0}bulkList(t){return this.towers.filter(e=>e.type===t&&e.level<GF.SETTINGS.maxTowerLevel)}bulkCost(t){return this.bulkList(t).reduce((e,n)=>e+this.upgradeCost(n),0)}upgradeAll(t){let e=this.bulkList(t),n=this.bulkCost(t);if(e.length){if(this.money<n){this.ui().toast("\uC77C\uAD04 \uAC15\uD654\uC5D0 \uBCF4\uAE09 "+n+" \uD544\uC694");return}e.forEach(i=>this.upgradeTower(i,!0)),this.ui().toast(GF.wname(t)+" "+e.length+"\uB300 \uAC15\uD654 \uC644\uB8CC","#F2C14E")}}sellTower(t){this.money+=Math.round(t.invested*GF.SETTINGS.sellRefund),this.unitGroup.remove(t.model.root),this.towers.splice(this.towers.indexOf(t),1),this.select(null),this.snd("sell")}spawnEnemy(t,e){let n=GF.ENEMIES[t],i=n.hp*(1+this.S.hpScale*(e-1)+(this.S.hpQuad||0)*(e-1)**2),r=k0(t),o=n.boss?2.4:t==="inf"?1.6:1.85;r.root.scale.setScalar(o);let a={type:t,E:n,hp:i,maxHp:i,d:0,air:!!n.air,off:n.boss?0:(Math.random()-.5)*.9,wob:Math.random()*10,stun:0,slowMul:1,dead:!1,model:r,pos:Ce(),sc:o,si:0,k:0,rem:1e9};if(a.air){let c=this.airPath();a.fly={pts:c,segs:[]},a.len=0;for(let h=0;h<c.length-1;h++){let f=c[h].distanceTo(c[h+1]);a.fly.segs.push({a:c[h],b:c[h+1],l:f,c:a.len}),a.len+=f}}else a.opt=this.city.steps[0].opts[this.city.steps[0].open];let l=n.boss?1.6:.7;a.hpBg=new cr(this.hpBgMat||(this.hpBgMat=new xs({color:1703936,depthTest:!1}))),a.hpFg=new cr(new xs({color:n.boss?16747150:16730685,depthTest:!1})),a.hpBg.scale.set(l+.05,.11,1),a.hpFg.scale.set(l,.07,1),a.bw=l,a.hpBg.renderOrder=10,a.hpFg.renderOrder=11,a.hpBg.visible=a.hpFg.visible=!1,this.unitGroup.add(r.root,a.hpBg,a.hpFg),this.enemies.push(a),this.placeEnemy(a,0)}airPath(){let t=this.S,e=t.bounds,n=this.city.base.clone().add(Ce(-1.5,0,0)),i=()=>(Math.random()-.5)*1.6;if((t.airEntry||"withGround")==="allSides"){let o=Math.floor(Math.random()*4),a=3,l=e.x0+Math.random()*(e.x1-e.x0),c=e.z0+Math.random()*(e.z1-e.z0),h=[Ce(l,0,e.z0-a),Ce(e.x1+a,0,c),Ce(l,0,e.z1+a),Ce(e.x0-a,0,c)][o],f=h.clone().lerp(n,.5).add(Ce(i()*4,0,i()*4));return[h,f,n]}let r=[];for(let o of t.route)for(let[a,l]of(o.choice?o.choice[0]:o).pts){let c=Ce(a+i(),0,l+i());(!r.length||r[r.length-1].distanceTo(c)>1)&&r.push(c)}return r[0].x-=2,r.push(n),r}removeEnemy(t){this.unitGroup.remove(t.model.root,t.hpBg,t.hpFg),t.hpFg.material.dispose()}advanceGround(t){for(;t.d>=t.opt.len;){t.d-=t.opt.len,t.si++,t.k=0;let e=this.city.steps[t.si];if(!e)return!0;t.opt=e.opts[e.open]}return!1}placeEnemy(t,e){let n,i,r;if(t.air){let l=t.fly.segs,c=l[l.length-1];for(let u of l)if(t.d<=u.c+u.l){c=u;break}let h=Math.min(1,(t.d-c.c)/c.l),f=Math.sin(t.d*.6+t.wob)*1.2;r=Math.atan2(c.b.z-c.a.z,c.b.x-c.a.x),n=c.a.x+(c.b.x-c.a.x)*h-Math.sin(r)*f,i=c.a.z+(c.b.z-c.a.z)*h+Math.cos(r)*f,t.rem=t.len-t.d}else{let l=t.opt.samples;for(;t.k<l.length-2&&l[t.k+1].cum<t.d;)t.k++;let c=l[t.k],h=l[t.k+1],f=Math.min(1,Math.max(0,(t.d-c.cum)/Math.max(1e-6,h.cum-c.cum)));r=Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x),n=c.p.x+(h.p.x-c.p.x)*f-Math.sin(r)*t.off,i=c.p.z+(h.p.z-c.p.z)*f+Math.cos(r)*t.off,t.rem=t.opt.len-t.d+this.remainAfter[t.si]}t.pos.set(n,0,i);let o=t.model.root;o.position.set(n,0,i);let a=-r-o.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),o.rotation.y+=e?a*Math.min(1,e*8):a,t.type==="inf"&&(t.model.body.position.y=Math.abs(Math.sin(t.d*9))*.04),t.hp<t.maxHp){let l=t.model.hpY*t.sc+.1;t.hpBg.visible=t.hpFg.visible=!0,t.hpBg.position.set(n,l,i),t.hpFg.position.set(n,l,i);let c=Math.max(.001,t.hp/t.maxHp);t.hpFg.scale.x=t.bw*c,t.hpFg.center.set(.5/c,.5)}}update(t,e){for(let n of this.enemies)for(let[i,r,o]of n.model.spin)i.rotation[r]+=o*t;for(let n of this.towers){for(let[i,r,o]of n.model.spin)i.rotation[r]+=o*t;for(let i of n.model.glow)i.material.emissiveIntensity=1+Math.sin(e*3)*.5}if(this.updateFx(t),!this.isOver()){if(this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.endCombo()),this.state==="battle"){for(this.clock+=t;this.queue.length&&this.queue[0].t<=this.clock;){let n=this.queue.shift();this.spawnEnemy(n.type,n.wave)}for(this.cpT+=t;this.cpT>=GF.SETTINGS.cpEverySec;)this.cpT-=GF.SETTINGS.cpEverySec,this.cp=Math.min(GF.SETTINGS.cpMax,this.cp+1);this.cp>=GF.SETTINGS.cpMax&&(this.cpT=0),!this.queue.length&&this.waveNo<this.S.waves.length&&(this.nextT<=0?this.nextT=this.S.autoNextSec:(this.nextT-=t,this.nextT<=.001&&(this.nextT=0,this.launchWave(0))))}for(let n of this.timers)n.t-=t,n.t<=0&&(n.fn(),n.done=!0);this.timers=this.timers.filter(n=>!n.done);for(let n of this.enemies)n.slowMul=1;for(let n of this.towers){if(n.W.shot!=="aura")continue;let i=this.stats(n),r=i.range,o=i.mul;n.pulse-=t;let a=!1;for(let l of this.enemies)l.dead||l.pos.distanceToSquared(n.pos)>r*r||(a=!0,l.slowMul=Math.min(l.slowMul,1-n.W.slow*(l.type==="drone"?1.35:1)),l.air&&n.W.airDps&&this.hurt(l,n.W.airDps*o*t,n,{pierce:!0}));n.pulse<=0&&a&&(n.pulse=1.3,this.spawnRing(n.pos,r,7328767,.9))}for(let n of this.zones){n.t-=t;for(let i of this.enemies)!i.air&&i.pos.distanceTo(n.pos)<=n.r&&(i.slowMul=Math.min(i.slowMul,.5));n.mesh.material.opacity=Math.min(.45,n.t/2)}this.zones=this.zones.filter(n=>n.t<=0?(this.fxGroup.remove(n.mesh),!1):!0);for(let n of this.enemies)if(!n.dead){if(n.stun>0?n.stun-=t:n.d+=n.E.speed*n.slowMul*t,n.air?n.d>=n.len:this.advanceGround(n)){this.leak(n);continue}this.placeEnemy(n,t)}this.enemies=this.enemies.filter(n=>!n.dead);for(let n of this.towers){if(n.W.shot==="aura")continue;let i=this.stats(n);if(n.cd-=t,n.cd>.25&&n.lastT&&!n.lastT.dead){this.aim(n,n.lastT,t);continue}let r=this.findTarget(n,i.range);if(n.lastT=r,!r)continue;let o=this.aim(n,r,t);n.cd<=0&&Math.abs(o)<.5&&(n.cd=1/i.rate,this.fire(n,r,i))}for(let n of this.shots)this.moveShot(n,t);this.shots=this.shots.filter(n=>!n.done),this.state==="battle"&&this.waveNo>=this.S.waves.length&&!this.queue.length&&!this.enemies.length&&this.finish(!0)}}aim(t,e,n){let r=Math.atan2(e.pos.z-t.pos.z,e.pos.x-t.pos.x)-t.ang;return r=Math.atan2(Math.sin(r),Math.cos(r)),t.ang+=Math.sign(r)*Math.min(Math.abs(r),7*n),t.model.yaw.rotation.y=-t.ang,r}findTarget(t,e){let n=null,i=1e9,r=e*e,o=t.W.hits;for(let a of this.enemies)a.dead||!o.includes(a.air?"air":"ground")||a.pos.distanceToSquared(t.pos)>r||a.rem<i&&(i=a.rem,n=a);return n}targetPoint(t){return t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.3)}fire(t,e,n){let i=t.W;t.model.root.updateMatrixWorld(!0);let r=t.model.muzzle.getWorldPosition(Ce()),o=this.targetPoint(e);if(this.snd(i.heavy?"cruise":i.pierce?"javelin":i.shot),i.shot==="bullet")this.hurt(e,n.dmg,t),this.tracer(r,o.add(Ce((Math.random()-.5)*.2,0,(Math.random()-.5)*.2))),this.spawnSpark(r,16769162,.1);else if(i.shot==="cannon")this.tracer(r,o,16761962),this.explode(o.clone().setY(0),i.splash,n.dmg,t,!0),this.spawnSpark(r,16765562,.3),this.spawnPuff(r,10130570,2,.15);else if(i.shot==="shell")this.addShot("shell",r,{to:o.setY(0),speed:9,arc:1.5+r.distanceTo(o)*.18,dmg:n.dmg,splash:i.splash,tw:t}),this.spawnSpark(r,16765562,.3),this.spawnPuff(r,10130570,2,.15);else if(i.shot==="missile")this.addShot("missile",r,{target:e,speed:e.air?10:7,dmg:n.dmg,tw:t,pierce:!!i.pierce,splash:i.splash||0,heavy:!!i.heavy});else if(i.shot==="intercept")this.addShot("missile",r,{target:e,speed:12,dmg:n.dmg,tw:t,pierce:!0,splash:0,small:!0});else if(i.shot==="rockets")for(let a=0;a<i.salvo;a++){let l=Ce((Math.random()-.5)*2.2,0,(Math.random()-.5)*2.2);this.timers.push({t:a*.12,fn:()=>this.addShot("rocket",r,{to:o.clone().setY(0).add(l),speed:11,arc:3,dmg:n.dmg,splash:i.splash,tw:t})})}}addShot(t,e,n){let i=Object.assign({kind:t,done:!1,t:0,from:e.clone(),pos:e.clone()},n);i.mesh=new ft(t==="shell"?Vi.shell:Vi.rocket,t==="shell"?this.shellM||(this.shellM=Ct(16769162,{emissive:16751104})):this.rocketM||(this.rocketM=Ct(14672870))),n.small&&i.mesh.scale.setScalar(.7),n.heavy&&i.mesh.scale.setScalar(2.2),i.mesh.position.copy(e),this.fxGroup.add(i.mesh),i.to&&(i.dur=Math.max(.25,e.distanceTo(i.to)/i.speed)),this.shots.push(i)}moveShot(t,e){let n=t.pos.clone();if(t.kind==="missile"){t.target.dead||(t.aim=this.targetPoint(t.target));let i=t.aim||this.targetPoint(t.target),r=i.clone().sub(t.pos),o=r.length(),a=t.speed*e;if(t.t+=e,o<=a+.08){t.done=!0,this.fxGroup.remove(t.mesh),t.splash&&this.explode(i,t.splash,t.dmg,t.tw,!1,t.target.air),t.heavy?(this.snd("bigboom",1),this.app.shake(.18),this.explodeFx(i.clone().setY(.3),1.6)):(t.target.dead||this.hurt(t.target,t.dmg,t.tw,{pierce:t.pierce}),this.explodeFx(i,t.small?.3:.55));return}t.pos.add(r.multiplyScalar(a/o)),t.pos.y+=Math.sin(Math.min(1,t.t*2)*Math.PI)*e*(t.heavy?7:2)}else{t.t+=e;let i=Math.min(1,t.t/t.dur);if(t.pos.copy(t.from).lerp(t.to,i),t.pos.y=t.from.y*(1-i)+t.to.y*i+t.arc*4*i*(1-i),i>=1){t.done=!0,this.fxGroup.remove(t.mesh),this.explode(t.to,t.splash,t.dmg,t.tw);return}}if(t.mesh.position.copy(t.pos),t.kind!=="shell"){let i=t.pos.clone().sub(n);i.lengthSq()>0&&t.mesh.quaternion.setFromUnitVectors(Ce(0,1,0),i.normalize()),Math.random()<.5&&this.fx.length<400&&this.spawnPuff(t.pos,14211288,1,.08,.5)}}explode(t,e,n,i,r,o=!1){let a=e*e;for(let l of this.enemies){if(l.dead||l.air!==o)continue;let c=(l.pos.x-t.x)**2+(l.pos.z-t.z)**2;c<=a&&this.hurt(l,n*(c<a*.16?1:.65),i,{splash:!0})}this.explodeFx(t,r?e*.6:e),this.snd("boom",r?.5:.8)}hurt(t,e,n,i={}){if(t.dead)return;let r=i.pierce?1:1-t.E.armor;i.splash&&this.syn.slowSplash&&t.slowMul<1&&(r*=1.2);let o=Math.min(t.hp,e*r);t.hp-=o,n&&n.dmgTotal!==void 0&&(n.dmgTotal+=o),t.hp<=.001&&this.kill(t,n)}kill(t,e){t.dead=!0,this.kills++,e&&e.kills!==void 0&&e.kills++;let n=Math.round(t.E.reward*(this.syn.balance?1.05:1));this.money+=n,this.removeEnemy(t);let i=t.E.boss?2:t.type==="tank"||t.type==="heli"?.9:.5;this.explodeFx(t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.25),i),i>=.9?this.snd("bigboom",t.E.boss?1.4:.8):t.type!=="inf"&&this.snd("boom",.45),!t.air&&t.type!=="inf"&&this.wreck(t),t.air&&this.fallDebris(t),n>=10&&this.ui().floatText(t.pos.clone().setY(1),"+"+n,"#F2C14E"),t.E.boss&&(this.app.shake(.5),this.ui().toast('\uBCF4\uC2A4 "\uD2F0\uD0C4" \uACA9\uD30C!',"#7FE0A8")),this.combo++,this.comboT=GF.SETTINGS.comboWindow,this.combo>=10&&this.combo%10===0&&(this.ui().combo(this.combo),this.snd("combo"))}endCombo(){if(this.combo>=10){let t=Math.round(this.combo*1.5);this.money+=t,this.ui().toast(`\uC5F0\uC1C4 \uACA9\uD30C ${this.combo}! \uBCF4\uB108\uC2A4 \uBCF4\uAE09 +${t}`,"#FFD45A")}this.bestCombo=Math.max(this.bestCombo,this.combo),this.combo=0}leak(t){t.dead=!0,this.removeEnemy(t),this.lives=Math.max(0,this.lives-t.E.leak),this.app.shake(.2),this.ui().flashDamage(),this.snd("leak"),this.explodeFx(this.city.base.clone().add(Ce(-1,.6,0)),.7),this.lives<=0&&this.finish(!1)}useCard(t,e){let n=this.hand[t],i=GF.CARDS[n];if(this.cp<i.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.cp-=i.cost,this.hand[t]=this.deck.shift(),this.deck.push(n),this.mode=null,this.cardSel=-1,this.rangeDisc.visible=!1,this.snd({airstrike:"airstrike",emp:"emp",supply:"coin",barrage:"airstrike",smoke:"missile"}[n]||"click");let r=Ce(e.x,0,e.z);if(n==="supply"&&(this.money+=i.power,this.ui().toast("\uAE34\uAE09 \uBCF4\uAE09 \uB3C4\uCC29 \xB7 \uBCF4\uAE09 +"+i.power,"#7FE0A8")),n==="airstrike"&&(this.flyJet(r),this.spawnRing(r,i.radius,15026253),this.timers.push({t:.9,fn:()=>{this.explode(r,i.radius,i.power,null),this.explodeFx(r.clone().add(Ce(1,0,.5)),1.4),this.explodeFx(r.clone().add(Ce(-.9,0,-.6)),1.4),this.app.shake(.35)}})),n==="emp"){this.spawnRing(r,i.radius,9421823,.8),this.spawnSpark(r.clone().setY(.5),12575743,i.radius*.6,.5);for(let o of this.enemies)o.pos.distanceTo(r)<=i.radius&&(o.stun=i.power)}if(n==="barrage"){this.spawnRing(r,i.radius,15901498);for(let o=0;o<12;o++){let a=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*i.radius,c=r.clone().add(Ce(Math.cos(a)*l,0,Math.sin(a)*l));this.timers.push({t:.4+o*.13,fn:()=>this.explode(c,1.5,i.power,null)})}}if(n==="smoke"){let o=new ft(new ee(i.radius,i.radius,.7,32),new $t({color:13685976,transparent:!0,opacity:.45,depthWrite:!1}));o.position.set(r.x,.35,r.z),this.fxGroup.add(o),this.zones.push({pos:r,r:i.radius,t:i.power,mesh:o});for(let a=0;a<16;a++)this.spawnPuff(r.clone().add(Ce((Math.random()-.5)*i.radius*1.6,.3,(Math.random()-.5)*i.radius*1.6)),15132906,1,.6,2.5)}}pushFx(t,e,n){this.fxGroup.add(t),this.fx.push({obj:t,t:0,life:e,fn:n})}updateFx(t){for(let e of this.fx){e.t+=t;let n=Math.min(1,e.t/e.life);e.fn(e.obj,n,t),n>=1&&(this.fxGroup.remove(e.obj),e.obj.material&&e.obj.material.dispose&&!e.obj.material.shared&&e.obj.material.dispose(),e.done=!0)}this.fx=this.fx.filter(e=>!e.done),this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-t*60))}explodeFx(t,e){let n=new ft(Vi.ball,new be({color:16757575,transparent:!0}));if(n.position.copy(t).setY(Math.max(.15,t.y)),this.pushFx(n,.35,(i,r)=>{i.scale.setScalar(.1+e*.9*r),i.material.opacity=1-r,i.material.color.setHSL(.09-r*.07,1,.6-r*.3)}),this.fx.length<450)for(let i=0;i<Math.ceil(1+e*3);i++)this.spawnPuff(t.clone().add(Ce((Math.random()-.5)*e,.1,(Math.random()-.5)*e)),4867392,1,.15+e*.25,1.3);this.flash.position.copy(t).setY(1),this.flash.intensity=8+e*10,this.flash.distance=3+e*4}spawnPuff(t,e,n=1,i=.18,r=.9){for(let o=0;o<n;o++){let a=new ft(Vi.puff,new So({color:e,transparent:!0,opacity:.7,depthWrite:!1}));a.position.copy(t).add(Ce((Math.random()-.5)*.2,0,(Math.random()-.5)*.2));let l=.3+Math.random()*.4;this.pushFx(a,r,(c,h,f)=>{c.scale.setScalar(i*(.6+h*1.4)),c.position.y+=l*f,c.material.opacity=.7*(1-h)})}}spawnSpark(t,e,n,i=.12){let r=new ft(Vi.puff,new be({color:e,transparent:!0}));r.position.copy(t),this.pushFx(r,i,(o,a)=>{o.scale.setScalar(n*(1+a)),o.material.opacity=1-a})}spawnRing(t,e,n,i=.6){let r=new ft(Vi.ring,new be({color:n,transparent:!0,depthWrite:!1,side:Xe}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.08,t.z),this.pushFx(r,i,(o,a)=>{o.scale.setScalar(e*(.3+.7*a)),o.material.opacity=.9*(1-a)})}tracer(t,e,n=16769162){let i=new xe().setFromPoints([t,e]),r=new ao(i,new dr({color:n,transparent:!0}));this.pushFx(r,.07,(o,a)=>{o.material.opacity=1-a,a>=1&&o.geometry.dispose()})}wreck(t){let e=new ft(Vi.wreck,this.wreckM||(this.wreckM=Ct(1907738)));e.material.shared=!0;let n=t.E.boss?1.8:t.type==="tank"?1.1:.8;e.scale.set(n,1,n),e.position.copy(t.pos).setY(.06),e.rotation.y=t.model.root.rotation.y,this.pushFx(e,5,(i,r)=>{r>.8&&(i.position.y=.06-(r-.8)*.6),Math.random()<.04&&this.fx.length<400&&this.spawnPuff(i.position.clone().setY(.2),3091497,1,.14,1.6)})}fallDebris(t){let e=new ft(Vi.puff,new be({color:3815994,transparent:!0}));e.position.copy(t.pos).setY(t.model.body.position.y*t.sc),e.scale.setScalar(.12),this.pushFx(e,.6,(n,i,r)=>{n.position.y=Math.max(0,n.position.y-r*4),n.material.opacity=1-i})}flyJet(t){let e=new qt,n=new ft(new Dn(.22,1.5,6),Ct(9080983));n.rotation.z=-Math.PI/2,e.add(n);let i=new ft(new Lt(.55,.04,1.5),Ct(8028295));i.position.x=-.15,e.add(i);let r=new ft(new Lt(.28,.34,.04),Ct(8028295));r.position.set(-.6,.16,0),e.add(r);let o=t.clone().add(Ce(-18,6,9)),a=t.clone().add(Ce(18,6,-9));e.position.copy(o),e.lookAt(a),e.rotateY(-Math.PI/2),e.traverse(l=>{l.material&&(l.material.shared=!0)}),this.pushFx(e,1.8,(l,c)=>{l.position.copy(o).lerp(a,c)})}};var $0="gf_profile",si={data:{name:"",credits:0,purchases:[]},load(){try{Object.assign(this.data,JSON.parse(localStorage.getItem($0)||"{}"))}catch{}return this},save(){try{localStorage.setItem($0,JSON.stringify(this.data))}catch{}},get name(){return this.data.name||"\uC9C0\uD718\uAD00"},setName(s){this.data.name=String(s||"").trim().slice(0,12),this.save()},get credits(){return this.data.credits||0},addCredits(s,t){this.data.credits=this.credits+s,t&&this.data.purchases.push({t:Date.now(),memo:t,n:s}),this.save()},spend(s){return this.credits<s?!1:(this.data.credits-=s,this.save(),!0)}};var Fu=()=>(navigator.maxTouchPoints||0)>0||"ontouchstart"in window;function Oc(){let s=window.innerWidth,t=window.innerHeight,e=Math.min(s,t*16/9),n=e*9/16,i=Fu()&&n<620,r=i?{w:1280,h:720,top:58,bottom:598}:{w:1920,h:1080,top:84,bottom:900};return{x:Math.round((s-e)/2),y:Math.round((t-n)/2),w:Math.round(e),h:Math.round(n),portrait:t>s,mobile:i,base:r,k:e/r.w}}var Z0=new WeakMap;function me(s,t,e){let n=Z0.get(s);n||Z0.set(s,n={}),n[t]!==e&&(n[t]=e,s[t]=e)}var Ou=s=>"\u20A9"+s.toLocaleString("ko-KR"),oe=(s,t,e,n)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),n&&n.appendChild(i),i},Bc=class{constructor(t){this.app=t,this.root=document.getElementById("hud"),this.fit(),window.addEventListener("resize",()=>this.fit()),this.floats=[],this.labelLayer=oe("div","labels",null,this.root),this.labelEls=[]}get g(){return this.app.game}cityName(){let t=this.app.stage;return GF.SETTINGS.useCityAlias?t.alias:t.name}fit(){let t=this.L=Oc();this.scale=t.k,this.BW=t.base.w,this.BH=t.base.h,this.root.style.width=t.base.w+"px",this.root.style.height=t.base.h+"px",this.root.classList.toggle("mobile",t.mobile),document.body.classList.toggle("touch",t.mobile),this.root.style.transform=`translate(${t.x}px, ${t.y}px) scale(${t.k})`}showTitle(t){this.icons=t;let e=this.app.stage,n=this.best(),i=this.title=oe("div","title-screen",null,this.root);i.innerHTML=`
      <div class="brand"><span>MODERN WAR TOWER DEFENSE</span><h1>2030 Warfare 1</h1><p>2030\uB144, \uC544\uCF00\uB860 \uC5F0\uBC29\uC774 \uC138\uACC4 50\uAC1C \uB3C4\uC2DC\uB97C \uCE68\uACF5\uD588\uB2E4. \uC5F0\uD569 \uBC29\uC704\uAD70 \uC9C0\uD718\uAD00\uC73C\uB85C\uC11C \uB3C4\uC2DC\uB97C \uC9C0\uCF1C\uB77C.</p></div>
      <div class="profile-card">
        <div class="pc-title">\uC9C0\uD718\uAD00 \uD504\uB85C\uD544</div>
        <div class="pc-row"><input class="pc-name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC815\uD558\uC138\uC694" value=""><button class="pc-save">\uC800\uC7A5</button></div>
        <div class="pc-stat"><span>\uBCF4\uAE09\uCC3D</span><b class="pc-cred"></b></div>
        <div class="pc-stat"><span>\uC11C\uC6B8 \uCD5C\uACE0 \uAE30\uB85D</span><b>${"\u2605".repeat(n)}${"\u2606".repeat(3-n)}</b></div>
        <button class="pc-shop">\u{1F6D2} \uC0C1\uC810 \xB7 \uBCF4\uAE09 \uCDA9\uC804</button>
        <button class="pc-fs">\u26F6 \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uD558\uAE30</button>
        <button class="pc-install">\u{1F4F2} \uC571\uC73C\uB85C \uC124\uCE58\uD558\uAE30</button>
      </div>
      <div class="brief">
        <div class="stage-no">STAGE ${e.no} \xB7 2030 \uC5F0\uD569\uBC29\uC704\uC804\uC120</div>
        <div class="city">${this.cityName()}${GF.SETTINGS.useCityAlias?"":`<small>${e.nameEn}</small>`}<em>${e.title}</em></div>
        <p>${e.briefing}</p>
        <div class="meta">\uC6E8\uC774\uBE0C ${e.waves.length} \xB7 \uAE30\uC9C0 \uCCB4\uB825 ${e.lives} \xB7 \uCD5C\uACE0 \uAE30\uB85D <b>${"\u2605".repeat(n)}${"\u2606".repeat(3-n)}</b></div>
        <div class="label">\uC7A5\uCC29 \uBB34\uAE30 ${GF.LOADOUT.length} <small>\uB3C4\uB85C\xB7\uB79C\uB4DC\uB9C8\uD06C\uB9CC \uBE7C\uACE0 \uC5B4\uB514\uB4E0 \uBC30\uCE58</small> \xB7 \uC804\uB7B5 \uBB34\uAE30 <small>ICBM \xB7 \uC804\uB7B5\uD575\uBBF8\uC0AC\uC77C (\uC6E8\uC774\uBE0C\uB9C8\uB2E4 \uC7AC\uBCF4\uAE09)</small></div>
        <div class="loadout">${GF.LOADOUT.map(a=>`<div class="lo"><img src="${t[a]}"><b>${GF.wname(a)}</b><span>${GF.WEAPONS[a].role}</span></div>`).join("")}</div>
        <button class="go">\uCD9C\uACA9</button>
        <div class="help">\uC870\uC791: \uB9C8\uC6B0\uC2A4 \uB04C\uAE30\xB7\uBC29\uD5A5\uD0A4 \uC9C0\uB3C4 \uC774\uB3D9 \xB7 \uD720 \uD655\uB300\xB7\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uBC84\uD2BC \uB04C\uAE30 \uB610\uB294 [ ] \uD0A4 \uC2DC\uC810 \uD68C\uC804 \xB7 R \uAE30\uBCF8 \uC2DC\uC810 \xB7 1~9 \uBB34\uAE30 \xB7 Q W E \uC791\uC804 \uCE74\uB4DC \xB7 Z ICBM \xB7 X \uC804\uB7B5\uD575 \xB7 \uC2A4\uD398\uC774\uC2A4 \uC77C\uC2DC\uC815\uC9C0 \xB7 N \uB2E4\uC74C \uC6E8\uC774\uBE0C</div>
        <div class="disc">\uC774 \uAC8C\uC784\uC740 \uAC00\uC0C1\uC758 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uAD6D\uAC00\xB7\uB2E8\uCCB4\xB7\uC0AC\uAC74\uACFC \uAD00\uACC4\uC5C6\uC2B5\uB2C8\uB2E4. \xB7 v${GF.SETTINGS.version}</div>
      </div>`,i.querySelector(".go").onclick=()=>this.app.startGame();let r=i.querySelector(".pc-name");r.value=si.data.name||"";let o=()=>{si.setName(r.value),this.toastAny("\uC9C0\uD718\uAD00 \uC774\uB984 \uC800\uC7A5: "+si.name)};i.querySelector(".pc-save").onclick=o,r.onkeydown=a=>{a.key==="Enter"&&o()},i.querySelector(".pc-shop").onclick=()=>this.openShop(),i.querySelector(".pc-fs").onclick=()=>this.fullscreen(),i.querySelector(".pc-install").onclick=()=>{let a=window.__installPrompt;a&&(a.prompt(),a.userChoice.then(()=>{window.__installPrompt=null,document.body.classList.remove("can-install")}))},this.L.mobile&&(i.querySelector(".help").textContent="\uC870\uC791: \uBB34\uAE30 \uCE74\uB4DC \uD130\uCE58 \u2192 \uD68C\uC0C9 \uACF5\uAC04 \uD130\uCE58\uB85C \uBC30\uCE58 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30 \uC774\uB3D9 \xB7 \uB450 \uC190\uAC00\uB77D \uBC8C\uB9AC\uAE30 \uD655\uB300 \xB7 \uB450 \uC190\uAC00\uB77D \uBE44\uD2C0\uAE30 \uD68C\uC804 \xB7 \uBB34\uAE30 \uD130\uCE58\uB85C \uAC15\uD654 \xB7 \uAC19\uC740 \uCE74\uB4DC \uB2E4\uC2DC \uD130\uCE58\uD558\uBA74 \uCDE8\uC18C"),this.refreshProfile()}hideTitle(){this.title&&(this.title.remove(),this.title=null)}best(){try{return JSON.parse(localStorage.getItem("gf_progress")||"{}")[this.app.stage.id]||0}catch{return 0}}buildHud(){this.hud&&this.hud.remove();let t=this.app.stage,e=this.g,n=this.hud=oe("div","hud-layer",null,this.root);oe("div","tl",`<div class="logo">2030 Warfare 1</div><div class="sub">${GF.SETTINGS.useCityAlias?this.cityName()+" \uBC29\uC5B4\uC804":t.nameEn+" \xB7 "+t.title}</div>`,n);let i=oe("div","pbar",'<span class="pb-ava"></span><b class="pb-name"></b><span class="pb-cred"></span><button class="pb-shop">\uFF0B \uCDA9\uC804</button>',n);i.querySelector(".pb-shop").onclick=()=>this.openShop(),this.eKills=oe("div","kills","",n);let r=oe("div","tr",null,n);this.eLives=oe("div","pill lives","",r),this.eMoney=oe("div","pill money","",r),this.eWave=oe("div","pill wave","",r),this.bSpeed=oe("button","sq speed","",r),this.bSpeed.onclick=()=>{e.speed=e.speed>=3?1:e.speed+1},this.bPause=oe("button","sq","",r),this.bPause.onclick=()=>this.app.togglePause(),oe("button","sq fs-btn","\u26F6",r).onclick=()=>this.fullscreen(),oe("button","sq gear","\u2699",r).onclick=()=>this.toggleSettings();let o=oe("div","rotv",null,n),a=(d,g,x)=>{let m=oe("button","sq",d,o);m.title=x;let p=()=>{this.app.cam.spin=0};m.onpointerdown=v=>{v.preventDefault(),this.app.cam.spin=g},m.onpointerup=p,m.onpointerleave=p,m.onpointercancel=p};a("\u27F2",-1,"\uC67C\uCABD\uC73C\uB85C \uB3CC\uB9AC\uAE30 ([ \uD0A4)");let l=oe("button","sq home-v","\u2302",o);l.title="\uAE30\uBCF8 \uC2DC\uC810 (R \uD0A4)",l.onclick=()=>this.app.resetView(),a("\u27F3",1,"\uC624\uB978\uCABD\uC73C\uB85C \uB3CC\uB9AC\uAE30 (] \uD0A4)");let c=oe("div","bar",null,n);this.cards=GF.LOADOUT.map((d,g)=>{let x=oe("div","card",`<img src="${this.icons[d]}"><div class="txt"><b class="wn"></b><span>${GF.WEAPONS[d].role}</span></div><div class="cost">${GF.WEAPONS[d].cost}</div><i>${g+1}</i>`,c);return x.onclick=()=>e.setMode(d),{id:d,c:x,n:x.querySelector(".wn")}}),this.bNext=oe("button","nextwave","",n),this.bNext.onclick=()=>e.callNext();let h=oe("div","ops",'<div class="ops-title">\uC791\uC804 \uCE74\uB4DC <small>CP\uB294 \uC804\uD22C \uC911\uC5D0 \uCC38</small></div>',c);this.ops=[0,1,2].map(d=>{let g=oe("div","op","",h);return g.onclick=()=>e.pickCard(d),g}),this.eNext=oe("div","op-next","",h);let f=oe("div","strat","",n);this.strats=Object.entries(GF.STRATEGIC).map(([d,g])=>{let x=oe("div","sb "+d,"",f);return x.onclick=()=>e.pickStrat(d),{id:d,C:g,o:x}});let u=oe("div","cpbar","",h);this.cpSegs=[];for(let d=0;d<GF.SETTINGS.cpMax;d++)this.cpSegs.push(oe("div","seg","<div></div>",u));this.eCp=oe("div","cp-num","",h),this.panel=oe("div","tpanel","",n),this.panel.innerHTML='<b class="pt"></b><div class="pi"></div><button class="up"></button><button class="all"></button><div class="row"><button class="sell"></button><button class="close">\uB2EB\uAE30</button></div>',this.panel.querySelector(".up").onclick=()=>e.upgradeTower(e.selected),this.panel.querySelector(".all").onclick=()=>e.upgradeAll(e.selected.type),this.panel.querySelector(".sell").onclick=()=>e.sellTower(e.selected),this.panel.querySelector(".close").onclick=()=>e.select(null),this.settings=oe("div","settings","",n),this.renderSettings(),this.eTip=oe("div","tip","",n),this.eToast=oe("div","toast","",n),this.eCombo=oe("div","combo","",n),this.eHint=oe("div","hint","",n),this.eDmg=oe("div","dmgflash","",n),this.ePaused=oe("div","paused","\uC77C\uC2DC\uC815\uC9C0",n),this.refreshProfile()}renderSettings(){let t=GF.SETTINGS,e=this.settings;e.innerHTML=`<b>\uC124\uC815</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${t.showLandmarkLabels?"checked":""}> \uB79C\uB4DC\uB9C8\uD06C \uC774\uB984\uD45C</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${t.useRealWeaponNames?"checked":""}> \uBB34\uAE30 \uC2E4\uC81C \uC774\uB984 <small>(\uB044\uBA74 \uC0B4\uC9DD \uBC14\uAFBC \uC774\uB984)</small></label>
      <label><input type="checkbox" data-k="sound" ${t.sound?"checked":""}> \uD6A8\uACFC\uC74C</label>
      <label><input type="checkbox" data-k="shadows" ${t.shadows?"checked":""}> \uADF8\uB9BC\uC790 <small>(\uB290\uB9AC\uBA74 \uB044\uAE30)</small></label>
      <label>\uADF8\uB798\uD53D <select class="gq">${[["auto","\uC790\uB3D9 (\uCD94\uCC9C)"],["ultra","\uCD5C\uACE0 (\uACE0\uC0AC\uC591 PC)"],["high","\uB192\uC74C"],["medium","\uBCF4\uD1B5"],["low","\uB0AE\uC74C (\uB290\uB9B0 \uAE30\uAE30)"]].map(([n,i])=>`<option value="${n}" ${(t.graphics==="auto"?"auto":this.app.look.q)===n?"selected":""}>${i}</option>`).join("")}</select></label>
      <div class="row"><button class="home">\uCC98\uC74C \uD654\uBA74</button><button class="close">\uB2EB\uAE30</button></div>`,e.querySelectorAll("input").forEach(n=>{n.onchange=()=>{t[n.dataset.k]=n.checked,this.app.applySettings()}}),e.querySelector(".gq").onchange=n=>{t.graphics=n.target.value,this.app.applySettings()},e.querySelector(".home").onclick=()=>{this.toggleSettings(!1),this.app.toTitle()},e.querySelector(".close").onclick=()=>this.toggleSettings(!1)}toggleSettings(t){let e=t??this.settings.style.display!=="block";this.settings.style.display=e?"block":"none"}toast(t,e,n=2100){this.eToast&&(this.eToast.textContent=t,this.eToast.style.color=e||"#fff",this.eToast.classList.add("on"),clearTimeout(this.toastT),this.toastT=setTimeout(()=>this.eToast.classList.remove("on"),n))}combo(t){this.eCombo&&(this.eCombo.innerHTML=`<b>${t}</b> \uC5F0\uC1C4 \uACA9\uD30C!`,this.eCombo.classList.remove("on"),this.eCombo.offsetWidth,this.eCombo.classList.add("on"))}flashDamage(){this.eDmg&&(this.eDmg.classList.remove("on"),this.eDmg.offsetWidth,this.eDmg.classList.add("on"))}project(t){let e=t.clone().project(this.app.camera);if(e.z>1)return null;let n=this.app.renderer.domElement.getBoundingClientRect(),i=(e.x+1)/2*n.width+n.left,r=(1-e.y)/2*n.height+n.top,o=this.root.getBoundingClientRect();return{x:(i-o.left)/this.scale,y:(r-o.top)/this.scale}}floatText(t,e,n){if(!this.hud||this.floats.length>30)return;let i=oe("div","float",e,this.hud);i.style.color=n,this.floats.push({e:i,v:t.clone(),t:0})}updateLabels(){let t=this.app.city;if(!this.labelEls.length)for(let n of t.labels)this.labelEls.push({L:n,e:oe("div","lm "+n.kind,n.text,this.labelLayer)});let e=this.g&&this.g.state!=="title";for(let{L:n,e:i}of this.labelEls){let o=e&&(n.kind!=="landmark"||GF.SETTINGS.showLandmarkLabels)?this.project(n.pos):null;if(!o||o.x<-100||o.x>2020||o.y<-50||o.y>1130){me(i.style,"display","none");continue}me(i.style,"display","block"),me(i.style,"left",Math.max(70,Math.min(this.BW-70,o.x))+"px"),me(i.style,"top",Math.max(40,o.y)+"px")}}update(t){this.updateLabels();let e=this.g;if(!this.hud||!e)return;let n=this.app.stage;me(this.eLives,"innerHTML",`<i class="shield"></i><span>\uAE30\uC9C0</span>${e.lives}/${n.lives}`),me(this.eMoney,"innerHTML",`<i class="box"></i><span>\uBCF4\uAE09</span>${Math.floor(e.money)}`),me(this.eWave,"innerHTML",`<span>\uC6E8\uC774\uBE0C</span>${Math.max(1,e.waveNo)}/${n.waves.length}`),me(this.eKills,"innerHTML",`\uACA9\uD30C <b>${e.kills}</b>${e.combo>=5?` <em>\uC5F0\uC1C4 ${e.combo}</em>`:""} \xB7 \uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}`),me(this.bSpeed,"innerHTML",`\u25B6\u25B6<small>${e.speed}x</small>`),me(this.bPause,"textContent",this.app.paused?"\u25B6":"\u275A\u275A"),me(this.ePaused.style,"display",this.app.paused?"block":"none"),this.cards.forEach(({id:u,c:d,n:g})=>{me(g,"textContent",GF.wname(u)),d.classList.toggle("sel",e.mode===u),d.classList.toggle("off",e.money<GF.WEAPONS[u].cost)});let i="",r="nextwave";e.state==="ready"?i="<b>\uC791\uC804 \uAC1C\uC2DC \u226B</b><small>\uCCAB \uC6E8\uC774\uBE0C \uCD9C\uACA9</small>":e.waveNo>=n.waves.length?(i=`<b>\uB9C8\uC9C0\uB9C9 \uC6E8\uC774\uBE0C</b><small>\uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}</small>`,r+=" busy"):e.queue.length?(i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>\uC801 \uCD9C\uD604 \uC911 \xB7 ${e.queue.length}</small>`,r+=" busy"):i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>${Math.ceil(e.nextT)}\uCD08 \uD6C4 \uC790\uB3D9 \xB7 \uC9C0\uAE08 \uB204\uB974\uBA74 +${Math.ceil(e.nextT)*3}</small>`,me(this.bNext,"innerHTML",i),me(this.bNext,"className",r),this.ops.forEach((u,d)=>{let g=e.hand[d],x=GF.CARDS[g],m=`<i>${"QWE"[d]}</i><b>${x.name}</b><span>${x.desc}</span><em>${x.cost}</em>`;me(u,"innerHTML",m),u.classList.toggle("off",e.cp<x.cost),u.classList.toggle("sel",e.cardSel===d)}),me(this.eNext,"textContent","\uB2E4\uC74C \uCE74\uB4DC: "+GF.CARDS[e.deck[0]].name);for(let{id:u,C:d,o:g}of this.strats){let x=e.strat[u],m=e.stratOpen(u),p=m?x.charges?`\uC0AC\uC6A9 \uAC00\uB2A5 ${x.charges}/${d.max}`:`\uC6E8\uC774\uBE0C ${e.stratNext(u)}\uC5D0 \uC7AC\uBCF4\uAE09`:`\uC2A4\uD14C\uC774\uC9C0 ${d.unlockStage}\uBD80\uD130`,v=`<i>${d.key}</i><b>${u==="nuke"?"\u2622 ":"\u{1F680} "}${d.name}</b><span>${p}</span>`;me(g,"innerHTML",v),g.classList.toggle("ready",m&&x.charges>0),g.classList.toggle("sel",e.mode==="strat"&&e.stratSel===u)}let o=e.cp<GF.SETTINGS.cpMax?e.cpT/GF.SETTINGS.cpEverySec:0;this.cpSegs.forEach((u,d)=>{me(u.firstChild.style,"width",(d<e.cp?100:d===e.cp?o*100:0)+"%")}),me(this.eCp,"textContent","CP "+e.cp+" / "+GF.SETTINGS.cpMax);let a=e.selected;if(me(this.panel.style,"display",a?"block":"none"),a){let u=e.stats(a),d=a.level>=GF.SETTINGS.maxTowerLevel,g=this.project(a.pos.clone().setY(.6))||{x:900,y:500};me(this.panel.style,"left",Math.max(20,Math.min(this.BW-420,g.x+60))+"px"),me(this.panel.style,"top",Math.max(this.L.mobile?60:110,Math.min(this.BH-(this.L.mobile?400:520),g.y-160))+"px"),me(this.panel.querySelector(".pt"),"textContent",GF.wname(a.type)+"  Lv."+a.level),me(this.panel.querySelector(".pi"),"innerHTML",`${a.W.nation} \xB7 ${a.W.role}<br>${this.upLine(e,a,u,d)}\uB204\uC801 \uD53C\uD574 <b>${q1(a.dmgTotal)}</b> \xB7 \uACA9\uD30C <b>${a.kills}</b><br><small>${a.W.desc}</small>`);let x=this.panel.querySelector(".up"),m=this.panel.querySelector(".all");me(x,"textContent",d?"\uCD5C\uB300 \uAC15\uD654 (Lv.4)":`\uAC15\uD654 Lv.${a.level+1}/4  (${e.upgradeCost(a)})`),x.disabled=d||e.money<e.upgradeCost(a);let p=e.bulkList(a.type).length,v=e.bulkCost(a.type);me(m,"textContent",p?`\uAC19\uC740 \uBB34\uAE30 ${p}\uB300 \uBAA8\uB450 \uAC15\uD654  (${v})`:"\uAC19\uC740 \uBB34\uAE30 \uBAA8\uB450 \uCD5C\uB300 \uAC15\uD654"),m.disabled=!p||e.money<v,me(this.panel.querySelector(".sell"),"textContent","\uD310\uB9E4 +"+Math.round(a.invested*GF.SETTINGS.sellRefund))}if(e.tip&&this.app.mouse){let u=this.app.mouse,d=this.root.getBoundingClientRect();me(this.eTip.style,"display","block"),me(this.eTip,"className","tip "+(e.tip.ok?"ok":"bad")),me(this.eTip,"textContent",(e.tip.ok?"\u2713 ":"\u2715 ")+e.tip.text),me(this.eTip.style,"left",(u.x-d.left)/this.scale+24+"px"),me(this.eTip.style,"top",(u.y-d.top)/this.scale+18+"px")}else me(this.eTip.style,"display","none");for(let u of this.floats){u.t+=t;let d=this.project(u.v);d&&(me(u.e.style,"left",d.x+"px"),me(u.e.style,"top",d.y-u.t*50+"px")),me(u.e.style,"opacity",1-u.t/.9),u.t>.9&&(u.e.remove(),u.done=!0)}this.floats=this.floats.filter(u=>!u.done);let l="",c=this.L.mobile,h=c?"\uD130\uCE58":"\uD074\uB9AD",f=c?"\uBC84\uD2BC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"ESC \uCDE8\uC18C";e.mode==="strat"?l=GF.STRATEGIC[e.stratSel].name+`: \uB5A8\uC5B4\uB728\uB9B4 \uACF3\uC744 ${h} \xB7 ${f}`:e.mode==="card"?l=GF.CARDS[e.hand[e.cardSel]].name+`: \uC9C0\uB3C4\uC5D0\uC11C \uC704\uCE58 ${h} \xB7 ${f}`:e.mode?l=GF.wname(e.mode)+` \uC124\uCE58: \uD68C\uC0C9 \uACF5\uAC04 \uC544\uBB34 \uACF3\uC774\uB098 ${h} \xB7 ${c?"\uCE74\uB4DC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"\uC624\uB978\uCABD \uD074\uB9AD/ESC \uCDE8\uC18C"}`:e.state==="ready"&&(l=this.L.mobile?"\uBB34\uAE30 \uCE74\uB4DC\uB97C \uB204\uB974\uACE0 \uD68C\uC0C9 \uACF5\uAC04\uC744 \uD130\uCE58\uD574 \uBC30\uCE58 \xB7 \uB450 \uC190\uAC00\uB77D \uBC8C\uB9AC\uAE30 \uD655\uB300\xB7\uBE44\uD2C0\uAE30 \uD68C\uC804 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30\uB85C \uC774\uB3D9":"\uC801\uC774 \uC624\uB294 \uB3C4\uC2EC \uAC70\uB9AC\xB7\uAC74\uBB3C\xB7\uB79C\uB4DC\uB9C8\uD06C\uB9CC \uBE7C\uACE0 \uD68C\uC0C9 \uACF5\uAC04 \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uC73C\uC138\uC694. \uAC70\uB9AC \uC0AC\uC774 \uD68C\uC0C9 \uACF5\uAC04\uC5D0 \uB193\uC73C\uBA74 \uC704\uC544\uB798 \uAC70\uB9AC\uB97C \uB3D9\uC2DC\uC5D0 \uACF5\uACA9\uD569\uB2C8\uB2E4 \xB7 \uD720: \uD655\uB300 \xB7 \uC624\uB978\uCABD \uBC84\uD2BC \uB04C\uAE30: \uC2DC\uC810 \uD68C\uC804 \xB7 R: \uAE30\uBCF8 \uC2DC\uC810"),me(this.eHint,"textContent",l)}upLine(t,e,n,i){let r=l=>Math.round(e.W.shot==="aura"?(e.W.airDps||0)*l.mul:l.dps),a=`\uAC15\uD654 ${[1,2,3,4].map(l=>`<span style="display:inline-block;width:18px;height:7px;margin-right:3px;border-radius:2px;background:${l<=e.level?"#f2c14e":"rgba(255,255,255,.18)"}"></span>`).join("")} Lv.${e.level}/4<br>DPS <b>${r(n)}</b> \xB7 \uC0AC\uAC70\uB9AC <b>${n.range.toFixed(1)}</b>`;if(!i){let l=t.statsAt(e,e.level+1);a+=` <span style="color:#7ff0a0">\u2192 DPS ${r(l)} \xB7 \uC0AC\uAC70\uB9AC ${l.range.toFixed(1)}</span>`}return a+"<br>"}refreshProfile(){let t=this.root;t.querySelectorAll(".pc-cred").forEach(e=>{e.textContent=si.credits.toLocaleString("ko-KR")}),t.querySelectorAll(".pb-name").forEach(e=>{e.textContent=si.name}),t.querySelectorAll(".pb-ava").forEach(e=>{e.textContent=si.name.slice(0,1)}),t.querySelectorAll(".pb-cred").forEach(e=>{e.textContent="\uBCF4\uAE09\uCC3D "+si.credits.toLocaleString("ko-KR")}),this.shopEl&&(this.shopEl.querySelector(".sh-cred").textContent=si.credits.toLocaleString("ko-KR"))}toastAny(t,e){if(this.hud&&this.eToast)this.toast(t,e);else{let n=oe("div","toast lobby",t,this.root);n.style.opacity=1,setTimeout(()=>n.remove(),1800)}}openShop(){if(this.shopEl)return;let t=this.g,e=t&&(t.state==="ready"||t.state==="battle");e&&!this.app.paused&&t.state==="battle"&&(this.app.togglePause(),this.shopPaused=!0);let n=this.shopEl=oe("div","shop","",this.root);n.innerHTML=`<div class="sh-box">
      <div class="sh-head"><b>\uBCF4\uAE09 \uC0C1\uC810</b><span>\uBCF4\uAE09\uCC3D <b class="sh-cred"></b></span><button class="sh-x">\u2715</button></div>
      <div class="sh-packs">${GF.SHOP.packs.map(i=>`<div class="pk" data-id="${i.id}">${i.tag?`<em>${i.tag}</em>`:""}<div class="pk-ico">\u{1F4E6}</div><b>\uBCF4\uAE09 ${i.amount.toLocaleString("ko-KR")}</b><small>${i.bonus?"\uBCF4\uB108\uC2A4 "+i.bonus:"\uAE30\uBCF8"}</small><button>${Ou(i.price)}</button></div>`).join("")}</div>
      ${e?`<div class="sh-wd"><span>\uBCF4\uAE09\uCC3D \u2192 \uC774\uBC88 \uC804\uD22C \uBCF4\uAE09\uC73C\uB85C \uAEBC\uB0B4\uAE30</span>${GF.SHOP.withdrawSteps.map(i=>`<button data-n="${i}">+${i.toLocaleString("ko-KR")}</button>`).join("")}</div>`:""}
      <div class="sh-note">${GF.SHOP.testMode?"\u26A0 \uD14C\uC2A4\uD2B8 \uBAA8\uB4DC: \uC2E4\uC81C \uACB0\uC81C\uB294 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uACE0 \uBCF4\uAE09\uC774 \uBC14\uB85C \uC9C0\uAE09\uB429\uB2C8\uB2E4. \uCD9C\uC2DC \uB54C Google Play\xB7Steam \uACB0\uC81C\uB85C \uC5F0\uACB0\uD569\uB2C8\uB2E4.":"\uACB0\uC81C\uB294 \uC2A4\uD1A0\uC5B4 \uACC4\uC815\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4."}</div>
    </div>`,n.querySelector(".sh-x").onclick=()=>this.closeShop(),n.onclick=i=>{i.target===n&&this.closeShop()},n.querySelectorAll(".pk button").forEach(i=>{i.onclick=()=>{let r=GF.SHOP.packs.find(o=>o.id===i.parentElement.dataset.id);GF.SHOP.testMode&&(si.addCredits(r.amount,Ou(r.price)+" \uCDA9\uC804(\uD14C\uC2A4\uD2B8)"),this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),i.textContent="\uCDA9\uC804 \uC644\uB8CC \u2713",setTimeout(()=>{i.textContent=Ou(r.price)},900))}}),n.querySelectorAll(".sh-wd button").forEach(i=>{i.onclick=()=>{let r=+i.dataset.n;if(!si.spend(r)){i.textContent="\uBCF4\uAE09\uCC3D \uBD80\uC871",setTimeout(()=>{i.textContent="+"+r.toLocaleString("ko-KR")},900);return}t.money+=r,this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),this.toast(`\uBCF4\uAE09\uCC3D\uC5D0\uC11C \uBCF4\uAE09 +${r} \uD22C\uC785`,"#F2C14E")}}),this.refreshProfile()}closeShop(){this.shopEl&&(this.shopEl.remove(),this.shopEl=null,this.shopPaused&&(this.shopPaused=!1,this.app.paused&&this.app.togglePause()))}fullscreen(){let t=document.documentElement;if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let n=t.requestFullscreen||t.webkitRequestFullscreen;if(!n){this.toastAny("\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC804\uCCB4 \uD654\uBA74\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544\uC694. \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uB85C \uC5F4\uC5B4 \uC8FC\uC138\uC694");return}Promise.resolve(n.call(t,{navigationUI:"hide"})).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}whiteFlash(){let t=oe("div","wflash","",this.root);setTimeout(()=>t.classList.add("go"),30),setTimeout(()=>t.remove(),2600)}showResult(t,e){let n=this.g,i=this.result=oe("div","result",`
      <div class="box ${t?"win":"lose"}">
        <h2>${t?this.cityName()+" \uBC29\uC5B4 \uC131\uACF5":"\uBC29\uC5B4\uC120 \uBD95\uAD34"}</h2>
        <div class="stars">${t?"\u2605".repeat(e)+"\u2606".repeat(3-e):""}</div>
        <p>\uACA9\uD30C ${n.kills} \xB7 \uCD5C\uB300 \uC5F0\uC1C4 ${Math.max(n.bestCombo,n.combo)} \xB7 \uC6E8\uC774\uBE0C ${n.waveNo}/${this.app.stage.waves.length} \xB7 \uB0A8\uC740 \uAE30\uC9C0 ${n.lives}</p>
        <p class="s">${t?"\uBCF4\uAE09 \uC0C1\uC790 \uD68D\uB4DD! (\uC0C1\uC790 \uC5F4\uAE30\uB294 \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uCD94\uAC00\uB429\uB2C8\uB2E4)":"\uAD7D\uC774 \uC0AC\uC774 \uACF5\uC6D0\uC5D0 \uBB34\uAE30\uB97C \uBAA8\uC73C\uACE0, \uC6B0\uD68C\uB85C\uB97C \uC5F4\uC5B4 \uC801\uC744 \uB354 \uC624\uB798 \uBD99\uC7A1\uC544 \uBCF4\uC138\uC694"}</p>
        <div class="row"><button class="again">\uB2E4\uC2DC \uD558\uAE30</button><button class="home">\uCC98\uC74C \uD654\uBA74</button></div>
      </div>`,this.root);i.querySelector(".again").onclick=()=>{i.remove(),this.result=null,this.app.startGame()},i.querySelector(".home").onclick=()=>{i.remove(),this.result=null,this.app.toTitle()}}clearResult(){this.result&&(this.result.remove(),this.result=null)}clearHud(){this.hud&&(this.hud.remove(),this.hud=null,this.floats=[])}},q1=s=>s>=1e4?(s/1e3).toFixed(1)+"k":String(Math.round(s));var zc=class{constructor(){this.ctx=null,this.last={},this.musicOn=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.bgm=e.createGain(),this.bgm.connect(this.master);let n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;this.noise=i,this.apply()}apply(){if(!this.ctx)return;let t=GF.SETTINGS;this.sfx.gain.value=t.sound?t.sfxVolume:0,this.bgm.gain.value=t.music?t.musicVolume:0,t.music&&!this.musicOn&&this.startMusic()}env(t,e,n,i,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}noiseHit(t,{dur:e=.2,f:n=1200,q:i=.8,type:r="lowpass",vol:o=.5,fEnd:a,out:l=this.sfx}){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noise;let f=c.createBiquadFilter();f.type=r,f.frequency.setValueAtTime(n,t),f.Q.value=i,a&&f.frequency.exponentialRampToValueAtTime(a,t+e);let u=c.createGain();this.env(u,t,.004,o,e),h.connect(f),f.connect(u),u.connect(l),h.start(t,Math.random()*1,e+.05)}tone(t,{f:e=440,fEnd:n,dur:i=.2,type:r="sine",vol:o=.3,a=.005,out:l=this.sfx}){let c=this.ctx,h=c.createOscillator();h.type=r,h.frequency.setValueAtTime(e,t),n&&h.frequency.exponentialRampToValueAtTime(n,t+i);let f=c.createGain();this.env(f,t,a,o,i),h.connect(f),f.connect(l),h.start(t),h.stop(t+a+i+.05)}play(t,e=1){if(!this.ctx||!GF.SETTINGS.sound)return;let n=this.ctx,i=n.currentTime,r={bullet:.07,cannon:.09,shell:.12,missile:.15,intercept:.08,rockets:.2,boom:.06,bigboom:.15,kill:.05,hit:.05};if(i-(this.last[t]||-9)<(r[t]||.03))return;this.last[t]=i;let o=e;switch(t){case"bullet":for(let a=0;a<3;a++)this.noiseHit(i+a*.045,{dur:.05,f:3200,type:"bandpass",q:1.2,vol:.22*o});break;case"cannon":this.noiseHit(i,{dur:.35,f:900,fEnd:120,vol:.55*o}),this.tone(i,{f:110,fEnd:45,dur:.3,vol:.4*o});break;case"shell":this.noiseHit(i,{dur:.6,f:500,fEnd:80,vol:.6*o}),this.tone(i,{f:70,fEnd:35,dur:.5,vol:.5*o});break;case"missile":this.noiseHit(i,{dur:.7,f:600,fEnd:3500,type:"bandpass",q:2,vol:.35*o});break;case"rockets":for(let a=0;a<6;a++)this.noiseHit(i+a*.09,{dur:.35,f:700,fEnd:2600,type:"bandpass",q:1.5,vol:.22*o});break;case"intercept":this.tone(i,{f:1400,fEnd:500,dur:.18,type:"triangle",vol:.14*o}),this.noiseHit(i,{dur:.25,f:2500,type:"bandpass",q:3,vol:.15*o});break;case"cruise":this.tone(i,{f:80,fEnd:40,dur:.6,vol:.5*o}),this.noiseHit(i,{dur:1.4,f:300,fEnd:2500,type:"bandpass",q:.8,vol:.5*o});break;case"nuke":this.tone(i,{f:50,fEnd:22,dur:3.5,vol:.9*o,a:.02}),this.noiseHit(i,{dur:3.2,f:2500,fEnd:50,vol:.9*o}),this.noiseHit(i+.4,{dur:2.8,f:400,fEnd:60,vol:.6*o});break;case"siren":this.tone(i,{f:500,fEnd:900,dur:.6,type:"sawtooth",vol:.1*o,a:.05}),this.tone(i+.65,{f:900,fEnd:500,dur:.6,type:"sawtooth",vol:.1*o,a:.05});break;case"javelin":this.noiseHit(i,{dur:.4,f:400,fEnd:2e3,type:"bandpass",q:1.5,vol:.4*o}),this.tone(i,{f:220,fEnd:90,dur:.15,vol:.2*o});break;case"boom":this.noiseHit(i,{dur:.45,f:1400,fEnd:150,vol:.4*o});break;case"bigboom":this.noiseHit(i,{dur:1.1,f:900,fEnd:60,vol:.75*o}),this.tone(i,{f:60,fEnd:28,dur:.9,vol:.6*o});break;case"airstrike":this.noiseHit(i,{dur:1.2,f:300,fEnd:4e3,type:"bandpass",q:.7,vol:.4*o});for(let a=0;a<5;a++)this.noiseHit(i+.9+a*.13,{dur:.8,f:800,fEnd:70,vol:.6*o});break;case"emp":this.tone(i,{f:90,fEnd:1800,dur:.5,type:"sawtooth",vol:.18*o}),this.tone(i+.1,{f:1800,fEnd:60,dur:.6,type:"square",vol:.08*o});break;case"place":this.noiseHit(i,{dur:.06,f:2500,type:"bandpass",q:2,vol:.4*o}),this.tone(i+.07,{f:180,fEnd:120,dur:.12,type:"square",vol:.12*o});break;case"upgrade":[523,659,784,1046].forEach((a,l)=>this.tone(i+l*.06,{f:a,dur:.18,type:"triangle",vol:.18*o}));break;case"sell":[784,523].forEach((a,l)=>this.tone(i+l*.08,{f:a,dur:.15,type:"triangle",vol:.15*o}));break;case"coin":this.tone(i,{f:1318,dur:.08,type:"square",vol:.06*o}),this.tone(i+.06,{f:1760,dur:.12,type:"square",vol:.06*o});break;case"click":this.tone(i,{f:900,dur:.04,type:"square",vol:.06*o});break;case"deny":this.tone(i,{f:180,dur:.15,type:"square",vol:.08*o});break;case"wave":[0,.35].forEach(a=>{this.tone(i+a,{f:392,dur:.25,type:"sawtooth",vol:.12*o,a:.02}),this.tone(i+a+.12,{f:523,dur:.22,type:"sawtooth",vol:.12*o,a:.02})});break;case"leak":for(let a=0;a<2;a++)this.tone(i+a*.22,{f:880,fEnd:660,dur:.18,type:"square",vol:.12*o});break;case"combo":[659,784,988,1318].forEach((a,l)=>this.tone(i+l*.05,{f:a,dur:.14,type:"square",vol:.07*o}));break;case"win":[523,659,784,1046,784,1046].forEach((a,l)=>this.tone(i+l*.16,{f:a,dur:.3,type:"triangle",vol:.2*o}));break;case"lose":[392,349,311,262].forEach((a,l)=>this.tone(i+l*.28,{f:a,dur:.4,type:"sawtooth",vol:.12*o}));break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx,e=96,n=60/e;[55,82.4,110].forEach((l,c)=>{let h=t.createOscillator();h.type=c?"triangle":"sawtooth",h.frequency.value=l;let f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=260;let u=t.createGain();u.gain.value=c?.05:.04;let d=t.createOscillator();d.frequency.value=.07+c*.03;let g=t.createGain();g.gain.value=.025,d.connect(g),g.connect(u.gain),d.start(),h.connect(f),f.connect(u),u.connect(this.bgm),h.start()});let i="K.s.K.ssK.s.KKs.",r=t.currentTime+.1,o=0,a=()=>{for(;r<t.currentTime+.6;){let l=i[o%i.length];l==="K"&&this.tone(r,{f:120,fEnd:45,dur:.22,vol:.35,out:this.bgm}),l==="s"&&this.noiseHit(r,{dur:.09,f:1800,type:"bandpass",q:.9,vol:.12,out:this.bgm}),r+=n/2,o++}};this.musicTimer=setInterval(a,150)}};var na=class s extends ft{constructor(){let t=s.SkyShader,e=new Te({name:t.name,uniforms:mn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:pn,depthWrite:!1});super(new Lt(1,1,1),e),this.isSky=!0}};na.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Y1=new xi(-1,1,1,-1,0,1),Bu=class extends xe{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},$1=new Bu,Ri=class{constructor(t){this._mesh=new ft($1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Y1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ds=class extends wn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mn.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ri(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ia=class extends wn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Hc=class extends wn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var kc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ds(Ai),this.copyPass.material.blending=Qe,this.timer=new Ro}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ia!==void 0&&(o instanceof ia?n=!0:o instanceof Hc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gc=class extends wn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Yt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var J0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Br=class s extends wn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,o,{type:Je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Be(r,o,{type:Je,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Be(r,o,{type:Je,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=J0;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(Ai.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,premultipliedAlpha:!0,blending:Co,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new be,this._fsQuad=new Ri(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Te({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Br.BlurDirectionX=new j(1,0);Br.BlurDirectionY=new j(0,1);var sa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new te},cameraProjectionMatrixInverse:{value:new te},cameraWorldMatrix:{value:new te},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ra={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Vc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function K0(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Z1(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Bi(i,t,t);return r.wrapS=ve,r.wrapT=ve,r.needsUpdate=!0,r}function Z1(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var oa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:zu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraProjectionMatrixInverse:{value:new te},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function zu(s,t,e){let n=J1(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function J1(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new P(Math.cos(r),Math.sin(r),o))}return n}var Wc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,g=t-u,x=e-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let v=g-m+h,M=x-p+h,_=g-1+2*h,b=x-1+2*h,E=l&255,A=c&255,y=this.perm[E+this.perm[A]]%12,w=this.perm[E+m+this.perm[A+p]]%12,R=this.perm[E+1+this.perm[A+1]]%12,I=.5-g*g-x*x;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[y],g,x));let D=.5-v*v-M*M;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[w],v,M));let B=.5-_*_-b*b;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[R],_,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,g=(h+f+u)*d,x=h-g,m=f-g,p=u-g,v=t-x,M=e-m,_=n-p,b,E,A,y,w,R;v>=M?M>=_?(b=1,E=0,A=0,y=1,w=1,R=0):v>=_?(b=1,E=0,A=0,y=1,w=0,R=1):(b=0,E=0,A=1,y=1,w=0,R=1):M<_?(b=0,E=0,A=1,y=0,w=1,R=1):v<_?(b=0,E=1,A=0,y=0,w=1,R=1):(b=0,E=1,A=0,y=1,w=1,R=0);let I=v-b+d,D=M-E+d,B=_-A+d,L=v-y+2*d,z=M-w+2*d,W=_-R+2*d,q=v-1+3*d,rt=M-1+3*d,X=_-1+3*d,K=h&255,tt=f&255,Pt=u&255,bt=this.perm[K+this.perm[tt+this.perm[Pt]]]%12,ge=this.perm[K+b+this.perm[tt+E+this.perm[Pt+A]]]%12,re=this.perm[K+y+this.perm[tt+w+this.perm[Pt+R]]]%12,he=this.perm[K+1+this.perm[tt+1+this.perm[Pt+1]]]%12,$=.6-v*v-M*M-_*_;$<0?i=0:($*=$,i=$*$*this._dot3(this.grad3[bt],v,M,_));let Q=.6-I*I-D*D-B*B;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[ge],I,D,B));let pt=.6-L*L-z*z-W*W;pt<0?o=0:(pt*=pt,o=pt*pt*this._dot3(this.grad3[re],L,z,W));let kt=.6-q*q-rt*rt-X*X;return kt<0?a=0:(kt*=kt,a=kt*kt*this._dot3(this.grad3[he],q,rt,X)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,g,x=(t+e+n+i)*l,m=Math.floor(t+x),p=Math.floor(e+x),v=Math.floor(n+x),M=Math.floor(i+x),_=(m+p+v+M)*c,b=m-_,E=p-_,A=v-_,y=M-_,w=t-b,R=e-E,I=n-A,D=i-y,B=w>R?32:0,L=w>I?16:0,z=R>I?8:0,W=w>D?4:0,q=R>D?2:0,rt=I>D?1:0,X=B+L+z+W+q+rt,K=o[X][0]>=3?1:0,tt=o[X][1]>=3?1:0,Pt=o[X][2]>=3?1:0,bt=o[X][3]>=3?1:0,ge=o[X][0]>=2?1:0,re=o[X][1]>=2?1:0,he=o[X][2]>=2?1:0,$=o[X][3]>=2?1:0,Q=o[X][0]>=1?1:0,pt=o[X][1]>=1?1:0,kt=o[X][2]>=1?1:0,At=o[X][3]>=1?1:0,Jt=w-K+c,ye=R-tt+c,nt=I-Pt+c,at=D-bt+c,lt=w-ge+2*c,ht=R-re+2*c,dt=I-he+2*c,Xt=D-$+2*c,Gt=w-Q+3*c,Kt=R-pt+3*c,ne=I-kt+3*c,U=D-At+3*c,_e=w-1+4*c,ae=R-1+4*c,C=I-1+4*c,S=D-1+4*c,H=m&255,k=p&255,Z=v&255,ut=M&255,mt=a[H+a[k+a[Z+a[ut]]]]%32,J=a[H+K+a[k+tt+a[Z+Pt+a[ut+bt]]]]%32,it=a[H+ge+a[k+re+a[Z+he+a[ut+$]]]]%32,vt=a[H+Q+a[k+pt+a[Z+kt+a[ut+At]]]]%32,zt=a[H+1+a[k+1+a[Z+1+a[ut+1]]]]%32,xt=.6-w*w-R*R-I*I-D*D;xt<0?h=0:(xt*=xt,h=xt*xt*this._dot4(r[mt],w,R,I,D));let gt=.6-Jt*Jt-ye*ye-nt*nt-at*at;gt<0?f=0:(gt*=gt,f=gt*gt*this._dot4(r[J],Jt,ye,nt,at));let Ut=.6-lt*lt-ht*ht-dt*dt-Xt*Xt;Ut<0?u=0:(Ut*=Ut,u=Ut*Ut*this._dot4(r[it],lt,ht,dt,Xt));let Vt=.6-Gt*Gt-Kt*Kt-ne*ne-U*U;Vt<0?d=0:(Vt*=Vt,d=Vt*Vt*this._dot4(r[vt],Gt,Kt,ne,U));let ie=.6-_e*_e-ae*ae-C*C-S*S;return ie<0?g=0:(ie*=ie,g=ie*ie*this._dot4(r[zt],_e,ae,C,S)),27*(h+f+u+d+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var aa=class s extends wn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=K0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Be(this.width,this.height,{type:Je,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Te({defines:Object.assign({},sa.defines),uniforms:mn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:Qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Mo,this.normalMaterial.blending=Qe,this.pdMaterial=new Te({defines:Object.assign({},oa.defines),uniforms:mn.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Te({defines:Object.assign({},ra.defines),uniforms:mn.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,blending:Qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Te({uniforms:mn.clone(Ai.uniforms),vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Io,blendDst:bs,blendEquation:Vn,blendSrcAlpha:Po,blendDstAlpha:bs,blendEquationAlpha:Vn}),this.blendMaterial=new Te({uniforms:mn.clone(Vc.uniforms),vertexShader:Vc.vertexShader,fragmentShader:Vc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:El,blendSrc:Io,blendDst:bs,blendEquation:Vn,blendSrcAlpha:Po,blendDstAlpha:bs,blendEquationAlpha:Vn}),this._fsQuad=new Ri(null),this._originalClearColor=new Yt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new pi,this.depthTexture.format=_i,this.depthTexture.type=as,this.normalRenderTarget=new Be(this.width,this.height,{minFilter:je,magFilter:je,type:Je,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Wc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Bi(i,t,t,Cn,Mn);return r.wrapS=ve,r.wrapT=ve,r.needsUpdate=!0,r}};aa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xc=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=mn.clone(la.uniforms),this.material=new gr({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Do?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===No?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var j0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new j(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var K1={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},saturation:{value:.86},shadowTint:{value:new P(.94,.98,1.06)},lightTint:{value:new P(1.04,1,.95)},vignette:{value:.28},aspect:{value:16/9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float contrast, saturation, vignette, aspect;
    uniform vec3 shadowTint, lightTint; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.5) * contrast + 0.5;
      col *= mix(shadowTint, lightTint, smoothstep(0.15, 0.75, l));
      float rv = length(vUv - 0.5);
      col *= 1.0 - vignette * smoothstep(0.38, 0.78, rv);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a);
    }`};function j1(){let s=GF.SETTINGS.graphics;return s&&s!=="auto"?s:matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1?"medium":"high"}var qc=class{constructor(t,e,n,i){this.r=t,this.scene=e,this.camera=n,this.sun=i,this.haze=new Yt(12569555),e.background=this.haze.clone(),e.fog=new io(this.haze,120,320),this.makeEnvironment(),this.setQuality(j1())}makeEnvironment(){let t=new na;t.scale.setScalar(1e3);let e=t.material.uniforms;e.turbidity.value=7,e.rayleigh.value=1.4,e.mieCoefficient.value=.006,e.mieDirectionalG.value=.82,e.cloudCoverage&&(e.cloudCoverage.value=0),e.sunPosition.value.copy(this.sun.position).normalize();let n=new ji;n.add(t);let i=new Cr(this.r);this.env=i.fromScene(n,.03).texture,i.dispose(),t.geometry.dispose(),t.material.dispose(),this.scene.environment=this.env,this.scene.environmentIntensity=GF.SETTINGS.envLight??.12}setQuality(t){this.q=t,this.composer&&(this.composer.dispose(),this.composer=null);let e=this.r;e.setPixelRatio(Math.min(window.devicePixelRatio,{ultra:2,high:1.5,medium:1.25,low:1}[t]||1));let n={ultra:4096,high:4096,medium:2048,low:1024}[t]||2048;if(this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),t==="low")return;let i=e.getDrawingBufferSize(new j),r=t==="ultra"?4:t==="high"?2:0,o=new Be(i.x,i.y,{type:Je,samples:r}),a=this.composer=new kc(e,o);if(a.addPass(new Gc(this.scene,this.camera)),t==="ultra"){let l=this.ao=new aa(this.scene,this.camera,i.x,i.y);l.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),l.blendIntensity=.85,a.addPass(l)}else this.ao=null;this.bloom=new Br(new j(i.x/2,i.y/2),.38,.45,.96),a.addPass(this.bloom),a.addPass(new Xc),this.grade=new Ds(K1),a.addPass(this.grade),r?this.fxaa=null:(this.fxaa=new Ds(j0),a.addPass(this.fxaa)),this.resize()}resize(){let t=this.r,e=t.getSize(new j);if(!this.composer)return;this.composer.setPixelRatio(t.getPixelRatio()),this.composer.setSize(e.x,e.y);let n=t.getPixelRatio();this.fxaa&&this.fxaa.material.uniforms.resolution.value.set(1/(e.x*n),1/(e.y*n)),this.grade.uniforms.aspect.value=e.x/e.y}update(t){this.scene.fog.near=t*1.05,this.scene.fog.far=t*3.4}render(){this.composer?this.composer.render():this.r.render(this.scene,this.camera)}};var Yc=class{constructor(t,e){this.app=t;let n=new te().fromArray(e.projView),i=new Eo().load(e.image,()=>{this.ready=!0,t.city.group.visible=!1});i.colorSpace=Oe,i.anisotropy=8,i.wrapS=i.wrapT=Hn,i.generateMipmaps=!0,i.minFilter=vi,this.mat=new Te({uniforms:{map:{value:i},projView:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D map; uniform mat4 projView; varying vec3 vW;
        void main(){ vec4 c = projView * vec4(vW, 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;
          gl_FragColor = texture2D(map, clamp(uv, 0.001, 0.999));
          #include <colorspace_fragment>
        }`,depthWrite:!0,toneMapped:!1});let r=new Ne(400,400);r.rotateX(-Math.PI/2),this.mesh=new ft(r,this.mat),this.mesh.position.y=-.01,this.mesh.renderOrder=-1,t.scene.add(this.mesh)}};function Q0(s,t=3840,e=2160){let n=s.renderer,i=s.camera.clone();i.aspect=16/9,i.updateProjectionMatrix();let r=s.fit,o=Math.cos(s.EL)*r.d;i.position.set(r.t.x+Math.sin(s.AZ)*o,r.t.y+Math.sin(s.EL)*r.d,r.t.z+Math.cos(s.AZ)*o),i.lookAt(r.t),i.updateMatrixWorld(!0);let a=[];for(let m of[s.game.unitGroup,s.game.fxGroup,s.game.rangeDisc,s.city.chev].filter(Boolean))m.visible&&(m.visible=!1,a.push(m));let l=new Be(t,e,{samples:4}),c=n.getSize(new j),h=n.getPixelRatio();n.setRenderTarget(l),n.render(s.scene,i);let f=new Uint8Array(t*e*4);n.readRenderTargetPixels(l,0,0,t,e,f),n.setRenderTarget(null),l.dispose(),n.setPixelRatio(h),n.setSize(c.x,c.y),a.forEach(m=>{m.visible=!0});let u=document.createElement("canvas");u.width=t,u.height=e;let d=u.getContext("2d"),g=d.createImageData(t,e);for(let m=0;m<e;m++)g.data.set(f.subarray((e-1-m)*t*4,(e-m)*t*4),m*t*4);d.putImageData(g,0,0);let x=new te().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).toArray();return{png:u.toDataURL("image/png"),projView:x}}var Hu=class{constructor(){this.stage=GF.STAGES.seoul;let t=this.renderer=new Zo({antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=GF.SETTINGS.shadows,t.shadowMap.type=Ss,t.shadowMap.autoUpdate=!1,t.toneMapping=rs,t.toneMappingExposure=.82,document.getElementById("view").appendChild(t.domElement),this.scene=new ji,this.camera=new fn(34,16/9,.5,900),this.EL=.6,this.AZ=GF.SETTINGS.camAzimuth??-.32,this.cam={target:new P(0,0,0),zoom:1,zoomGoal:1,shake:0,anchor:null,az:this.AZ,el:this.EL,spin:0},this.scene.add(new _r(14085119,7038032,.4));let e=this.sun=new yr(16770756,2.3);e.position.set(-34,40,18),e.target.position.set(0,0,0),this.scene.add(e.target),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-48,right:48,top:40,bottom:-40,near:1,far:180}),e.shadow.mapSize.set(2048,2048),e.shadow.bias=-5e-4,e.shadow.normalBias=.04,e.shadow.radius=2.5,this.scene.add(e),this.look=new qc(t,this.scene,this.camera,e),this.city=new Uc(this.scene,this.stage),this.sound=new zc,this.ui=new Bc(this),this.game=new Fc(this),this.paused=!1,this.stage.backdrop&&GF.SETTINGS.useBackdrop!==!1&&(this.backdrop=new Yc(this,this.stage.backdrop)),this.exportGuide=(n,i)=>Q0(this,n,i),this.icons=this.makeIcons(),this.ui.showTitle(this.icons),this.setupInput(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.last=performance.now(),this.time=0,this.renderer.setAnimationLoop(()=>this.frame()),window.__GF=this}makeIcons(){let t={},e=new Zo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(160,160),e.toneMapping=rs;let n=new ji;n.add(new _r(16777215,8022608,1.6));let i=new yr(16777215,2.2);i.position.set(-3,5,4),n.add(i);let r=new xi(-.75,.75,.75,-.75,.1,20);r.position.set(2.2,2.2,2.6),r.lookAt(.1,.25,0);for(let o of GF.LOADOUT){let a=ea(o);a.yaw.rotation.y=.5,n.add(a.root),e.render(n,r),t[o]=e.domElement.toDataURL(),n.remove(a.root)}return e.dispose(),e.forceContextLoss(),t}startGame(){this.ui.hideTitle(),this.ui.clearResult(),this.paused=!1,this.cam.zoom=this.cam.zoomGoal=1,this.fitView(),this.game.start(),this.ui.buildHud()}toTitle(){this.game.state="title",this.game.cancelMode(),this.ui.clearHud(),this.ui.clearResult(),this.ui.showTitle(this.icons)}applySettings(){this.sound.apply();let t=GF.SETTINGS.graphics==="auto"?this.look.q:GF.SETTINGS.graphics;t&&t!==this.look.q&&(this.look.setQuality(t),this.resize(),this.city.shadowDirty=!0);let e=GF.SETTINGS.shadows;this.renderer.shadowMap.enabled!==e&&(this.renderer.shadowMap.enabled=e,this.scene.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})}),this.city.shadowDirty=!0)}togglePause(){this.game.isOver()||(this.paused=!this.paused)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}resize(){let t=this.L=Oc(),e=t.w,n=t.h,i=document.getElementById("view");Object.assign(i.style,{left:t.x+"px",top:t.y+"px",width:e+"px",height:n+"px"}),document.body.classList.toggle("portrait",t.portrait&&Fu()),this.renderer.setSize(e,n),this.look.resize(),this.W=e,this.H=n,this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.fitView()}fieldRect(){let t=this.L;return{top:t.base.top*t.k,bottom:t.base.bottom*t.k}}pose(t=this.cam.target,e=this.cam.dist,n=this.cam.az,i=this.cam.el){let r=this.camera,o=Math.cos(i)*e;r.position.set(t.x+Math.sin(n)*o,t.y+Math.sin(i)*e,t.z+Math.cos(n)*o),r.lookAt(t),r.updateMatrixWorld(!0)}toPx(t,e,n){let i=new P(t,e,n).project(this.camera);return{x:(i.x+1)/2*this.W,y:(1-i.y)/2*this.H}}groundAt(t,e){let n=new Mr;n.setFromCamera(new j((t-this.L.x)/this.W*2-1,-((e-this.L.y)/this.H)*2+1),this.camera);let i=new P;return n.ray.intersectPlane(new An(new P(0,1,0),0),i)?i:null}fitView(){if(!this.W)return;let t=this.stage.bounds,e=this.fieldRect(),n=(t.x0+t.x1)/2,i=(t.z0+t.z1)/2,r={top:e.top+(e.bottom-e.top)*.1,bottom:e.bottom},o=this.AZ,a=this.EL,l=new P(-Math.sin(o),0,-Math.cos(o)),c=new P(Math.cos(o),0,-Math.sin(o)),h=new P(n,0,i),f=[[t.x0,t.z0],[t.x1,t.z0],[t.x0,t.z1],[t.x1,t.z1]],u=70;for(let d=0;d<80;d++){this.pose(h,u,o,a);let g=f.map(([A,y])=>this.toPx(A,0,y)),x=Math.min(...g.map(A=>A.y)),m=Math.max(...g.map(A=>A.y)),p=Math.min(...g.map(A=>A.x)),v=Math.max(...g.map(A=>A.x)),M=v-p,_=m-x,b=r.bottom-r.top;u*=Math.max(_/b,M/(this.W*1.12));let E=((x+m)/2-(r.top+r.bottom)/2)*(t.z1-t.z0)/_;h.addScaledVector(l,-E),h.addScaledVector(c,((p+v)/2-this.W/2)*(t.x1-t.x0)/M*.5)}this.fit={d:u,t:h.clone()},this.cam.target.copy(h),this.cam.dist=this.cam.distGoal=u/this.cam.zoom,this.pose()}rotateView(t,e=0){let n=this.cam;n.az+=t,n.el=Math.max(.42,Math.min(1.35,n.el+e)),n.anchor=null}resetView(){this.cam.az=this.AZ,this.cam.el=this.EL,this.cam.zoomGoal=1,this.cam.anchor=null}zoomAt(t,e,n){let i=this.cam,r=Math.min(3,Math.max(.7,i.zoomGoal*n));r!==i.zoomGoal&&(i.zoomGoal=r,i.anchor={px:t,py:e,g:this.groundAt(t,e)})}updateCamera(t){let e=this.cam;if(!this.fit)return;let n=e.zoom;if(e.zoom+=(e.zoomGoal-e.zoom)*Math.min(1,t*10),Math.abs(e.zoom-e.zoomGoal)<.001&&(e.zoom=e.zoomGoal),e.dist=this.fit.d/e.zoom,this.pose(),e.anchor&&e.anchor.g&&n!==e.zoom){let r=this.groundAt(e.anchor.px,e.anchor.py);r&&(e.target.x+=e.anchor.g.x-r.x,e.target.z+=e.anchor.g.z-r.z)}e.zoom===e.zoomGoal&&(e.anchor=null),this.clampTarget();let i=e.shake>0?(Math.random()-.5)*e.shake:0;e.shake=Math.max(0,e.shake-t),this.pose(e.target.clone().add(new P(i,0,i)))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),i=new j((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Mr;r.setFromCamera(i,this.camera);let o=new P;return r.ray.intersectPlane(new An(new P(0,1,0),0),o)?o:null}setupInput(){let t=this.renderer.domElement,e=null,n=new Map;t.addEventListener("pointerdown",r=>{if(this.sound.unlock(),r.button===2){e={rot:!0,x:r.clientX,y:r.clientY,moved:!1},t.setPointerCapture(r.pointerId);return}if(n.set(r.pointerId,{x:r.clientX,y:r.clientY}),n.size===2){let[o,a]=[...n.values()];e={pinch:Math.hypot(o.x-a.x,o.y-a.y),z0:this.cam.zoomGoal,ang:Math.atan2(a.y-o.y,a.x-o.x),my:(o.y+a.y)/2,moved:!0};return}e={x:r.clientX,y:r.clientY,moved:!1,touch:r.pointerType==="touch"},r.pointerType==="touch"&&(this.mouse={x:r.clientX,y:r.clientY}),t.setPointerCapture(r.pointerId)}),t.addEventListener("pointermove",r=>{this.mouse={x:r.clientX,y:r.clientY},n.has(r.pointerId)&&n.set(r.pointerId,{x:r.clientX,y:r.clientY});let o=this.pick(r.clientX,r.clientY);if(o&&this.game.state!=="title"&&this.game.hoverAt(o),!e)return;if(e.rot){let c=r.clientX-e.x,h=r.clientY-e.y;!e.moved&&Math.abs(c)+Math.abs(h)>5&&(e.moved=!0),e.moved&&(this.rotateView(-(r.clientX-(e.lx??e.x))*.006,(r.clientY-(e.ly??e.y))*.004),e.lx=r.clientX,e.ly=r.clientY);return}if(e.pinch){let[c,h]=[...n.values()];if(c&&h){let f=e.z0*Math.hypot(c.x-h.x,c.y-h.y)/Math.max(20,e.pinch);this.zoomAt((c.x+h.x)/2,(c.y+h.y)/2,f/this.cam.zoomGoal);let u=Math.atan2(h.y-c.y,h.x-c.x)-e.ang;u=Math.atan2(Math.sin(u),Math.cos(u));let d=(c.y+h.y)/2;this.rotateView(-u,(d-e.my)*.004),e.ang+=u,e.my=d}return}let a=r.clientX-e.x,l=r.clientY-e.y;if(!e.moved&&Math.abs(a)+Math.abs(l)>(e.touch?14:7)&&(e.moved=!0),e.moved){let c=this.groundAt(e.lx??e.x,e.ly??e.y),h=this.groundAt(r.clientX,r.clientY);c&&h&&(this.cam.target.x+=c.x-h.x,this.cam.target.z+=c.z-h.z),this.cam.anchor=null,this.clampTarget(),this.pose(),e.lx=r.clientX,e.ly=r.clientY}});let i=r=>{n.delete(r.pointerId);let o=e;if(n.size||(e=null),o&&o.rot){o.moved||this.game.cancelMode();return}if(!o||o.moved||r.button!==0)return;let a=this.pick(r.clientX,r.clientY);a&&this.game.state!=="title"&&(r.pointerType==="touch"&&(this.mouse={x:r.clientX,y:r.clientY},this.game.hoverAt(a)),this.game.click(a))};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",r=>{n.delete(r.pointerId),e=null}),t.addEventListener("pointerleave",()=>{this.mouse=null}),t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("wheel",r=>{r.preventDefault(),this.zoomAt(r.clientX,r.clientY,r.deltaY>0?1/1.15:1.15)},{passive:!1}),this.keys={},window.addEventListener("pointerdown",()=>this.sound.unlock()),window.addEventListener("keydown",r=>{if(this.sound.unlock(),r.target&&r.target.tagName==="INPUT")return;if(this.ui.shopEl&&r.code==="Escape"){this.ui.closeShop();return}this.keys[r.code]=!0;let o=this.game;if(o.state==="title"){r.code==="Enter"&&this.startGame();return}let a=parseInt(r.key,10);a>=1&&a<=GF.LOADOUT.length&&o.setMode(GF.LOADOUT[a-1]),r.code==="KeyZ"&&o.pickStrat("icbm"),r.code==="KeyX"&&o.pickStrat("nuke"),r.code==="KeyQ"&&o.pickCard(0),r.code==="KeyW"&&o.pickCard(1),r.code==="KeyE"&&o.pickCard(2),r.code==="Escape"&&o.cancelMode(),r.code==="Space"&&(r.preventDefault(),this.togglePause()),(r.code==="KeyN"||r.code==="Enter")&&o.callNext(),(r.code==="Equal"||r.code==="NumpadAdd")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,1.25),(r.code==="Minus"||r.code==="NumpadSubtract")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,.8),(r.code==="Digit0"||r.code==="Home"||r.code==="KeyR")&&this.resetView()}),window.addEventListener("keyup",r=>{this.keys[r.code]=!1})}clampTarget(){let t=this.cam,e=t.target,n=this.fit;if(!n)return;let i=Math.max(0,Math.min(1,(t.zoom-1)/.05)),r=this.stage.bounds,o=t.zoom,a=(r.x1-r.x0)/2*(1-1/o),l=(r.z1-r.z0)/2*(1-1/o),c=n.t.x,h=n.t.z;e.x=Math.max(c-a,Math.min(c+a,e.x)),e.z=Math.max(h-l,Math.min(h+l,e.z)),i===0&&(e.x=c,e.z=h)}autoQuality(t){if(GF.SETTINGS.graphics!=="auto"||document.hidden||(this.fpsT=(this.fpsT||0)+t,this.fpsN=(this.fpsN||0)+1,this.fpsT<4))return;let e=this.fpsT/this.fpsN;this.fpsT=0,this.fpsN=0;let n={ultra:"high",high:"medium",medium:"low"}[this.look.q];e>1/40&&n&&(this.look.setQuality(n),this.resize(),this.city.shadowDirty=!0)}frame(){let t=performance.now(),e=Math.min((t-this.last)/1e3,.1);this.last=t,this.time+=e;let n=this.keys||{},i=30*e/this.cam.zoom,r=this.cam.az,o=(n.ArrowRight?1:0)-(n.ArrowLeft?1:0),a=(n.ArrowDown?1:0)-(n.ArrowUp?1:0);this.cam.target.x+=(o*Math.cos(r)+a*Math.sin(r))*i,this.cam.target.z+=(-o*Math.sin(r)+a*Math.cos(r))*i;let l=(n.BracketRight||n.Period?1:0)-(n.BracketLeft||n.Comma?1:0)+this.cam.spin;l&&this.rotateView(l*1.4*e),this.clampTarget();let c=this.paused?0:e*this.game.speed;this.city.update(e,this.time),this.game.update(c,this.time),this.updateCamera(e),this.look.update(this.cam.dist),this.city.shadowDirty&&(this.renderer.shadowMap.needsUpdate=!0,this.city.shadowDirty=!1),this.look.render(),this.autoQuality(e),this.ui.update(c||0)}};new Hu;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
