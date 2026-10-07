(()=>{var xf=0,m0=1,vf=2;var Ys=1,yf=2,Xr=3,Ts=0,un=1,Ue=2,fn=0,ws=1,$s=2,g0=3,x0=4,Jl=5;var ei=100,_f=101,Sf=102,Mf=103,bf=104,Zs=200,Ef=201,Tf=202,wf=203,v0=204,y0=205,jo=206,Rf=207,Qo=208,Af=209,Cf=210,Pf=211,If=212,Df=213,Lf=214,gl=0,xl=1,vl=2,Cr=3,yl=4,_l=5,Sl=6,Ml=7,_0=0,Nf=1,Uf=2,gi=0,ta=1,ea=2,na=3,Rs=4,ia=5,sa=6,ra=7;var S0=300,As=301,Js=302,Kl=303,jl=304,oa=306,de=1e3,Vn=1001,bl=1002,hn=1003,Ff=1004;var aa=1005;var Rn=1006,Ql=1007;var Oi=1008;var Un=1009,M0=1010,b0=1011,qr=1012,tc=1013,xi=1014,ni=1015,ln=1016,ec=1017,nc=1018,Cs=1020,E0=35902,T0=35899,w0=1021,R0=1022,Xn=1023,Pi=1026,zi=1027,ic=1028,sc=1029,Ps=1030,rc=1031;var oc=1033,la=33776,ca=33777,ha=33778,ua=33779,ac=35840,lc=35841,cc=35842,hc=35843,uc=36196,fc=37492,dc=37496,pc=37488,mc=37489,fa=37490,gc=37491,xc=37808,vc=37809,yc=37810,_c=37811,Sc=37812,Mc=37813,bc=37814,Ec=37815,Tc=37816,wc=37817,Rc=37818,Ac=37819,Cc=37820,Pc=37821,Ic=36492,Dc=36494,Lc=36495,Nc=36283,Uc=36284,da=36285,Fc=36286;var Mo=2300,El=2301,dl=2302,i0=2303,s0=2400,r0=2401,o0=2402;var Bf=3200;var pa=0,Of=1,vi="",we="srgb",bo="srgb-linear",Eo="linear",Le="srgb";var pl=7680;var zf=519,Hf=512,Gf=513,kf=514,Bc=515,Vf=516,Wf=517,Oc=518,Xf=519,A0=35044,C0=35048;var P0="300 es",pi=2e3,Pr=2001;function fm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qf(){let r=Ir("canvas");return r.style.display="block",r}var Fu={},Dr=null;function To(...r){let t="THREE."+r.shift();Dr?Dr("log",t,...r):console.log(t,...r)}function Yf(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function re(...r){r=Yf(r);let t="THREE."+r.shift();if(Dr)Dr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function se(...r){r=Yf(r);let t="THREE."+r.shift();if(Dr)Dr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Hs(...r){let t=r.join(" ");t in Fu||(Fu[t]=!0,re(...r))}function $f(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Zf={[gl]:xl,[vl]:Sl,[yl]:Ml,[Cr]:_l,[xl]:gl,[Sl]:vl,[Ml]:yl,[_l]:Cr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ph=Math.PI/180,Tl=180/Math.PI;function ts(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function Se(r,t,e){return Math.max(t,Math.min(e,r))}function pm(r,t){return(r%t+t)%t}function Ih(r,t,e){return(1-e)*r+e*t}function Ai(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var F0=class F0{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};F0.prototype.isVector2=!0;var J=F0,rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],g=s[o+3];if(u!==g||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*g;m<0&&(f=-f,d=-d,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),_=Math.sin(v);x=Math.sin(x*v)/_,a=Math.sin(a*v)/_,l=l*x+f*a,c=c*x+d*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+f*a,c=c*x+d*a,h=h*x+p*a,u=u*x+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B0=class B0{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};B0.prototype.isVector3=!0;var I=B0,Dh=new I,Bu=new rn,O0=class O0{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=i[0],m=i[3],x=i[6],v=i[1],_=i[4],y=i[7],M=i[2],b=i[5],w=i[8];return s[0]=o*g+a*v+l*M,s[3]=o*m+a*_+l*b,s[6]=o*x+a*y+l*w,s[1]=c*g+h*v+u*M,s[4]=c*m+h*_+u*b,s[7]=c*x+h*y+u*w,s[2]=f*g+d*v+p*M,s[5]=f*m+d*_+p*b,s[8]=f*x+d*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(t,e)),this}rotate(t){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-t)),this}translate(t,e){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};O0.prototype.isMatrix3=!0;var ue=O0,Lh=new ue,Ou=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){let r={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Le&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Eo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[bo]:{primaries:t,whitePoint:n,transfer:Eo,toXYZ:Ou,fromXYZ:zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:Ou,fromXYZ:zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),r}var _e=mm();function es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var cr,wl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=Ir("canvas")),cr.width=t.width,cr.height=t.height;let i=cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=es(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gm=0,Lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nh(i[o].image)):s.push(Nh(i[o]))}else s=Nh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var xm=0,Uh=new I,Ln=class r extends Ii{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vn,i=Vn,s=Rn,o=Oi,a=Xn,l=Un,c=r.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ts(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==S0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case de:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case de:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=S0;Ln.DEFAULT_ANISOTROPY=1;var z0=class z0{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,M=(x+1)/2,b=(h+f)/4,w=(u+g)/4,S=(p+m)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=b/n,s=w/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=S/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=S/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};z0.prototype.isVector4=!0;var je=z0,Rl=class extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ln(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Al=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Zl=class Zl{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,g,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,g,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/hr.setFromMatrixColumn(t,0).length(),s=1/hr.setFromMatrixColumn(t,1).length(),o=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f+g*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,ym)}lookAt(t,e,n){let i=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),fs.crossVectors(n,Yn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),fs.crossVectors(n,Yn)),fs.normalize(),ka.crossVectors(Yn,fs),i[0]=fs.x,i[4]=ka.x,i[8]=Yn.x,i[1]=fs.y,i[5]=ka.y,i[9]=Yn.y,i[2]=fs.z,i[6]=ka.z,i[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],m=n[10],x=n[14],v=n[3],_=n[7],y=n[11],M=n[15],b=i[0],w=i[4],S=i[8],T=i[12],A=i[1],C=i[5],D=i[9],N=i[13],L=i[2],B=i[6],G=i[10],q=i[14],rt=i[3],X=i[7],Q=i[11],tt=i[15];return s[0]=o*b+a*A+l*L+c*rt,s[4]=o*w+a*C+l*B+c*X,s[8]=o*S+a*D+l*G+c*Q,s[12]=o*T+a*N+l*q+c*tt,s[1]=h*b+u*A+f*L+d*rt,s[5]=h*w+u*C+f*B+d*X,s[9]=h*S+u*D+f*G+d*Q,s[13]=h*T+u*N+f*q+d*tt,s[2]=p*b+g*A+m*L+x*rt,s[6]=p*w+g*C+m*B+x*X,s[10]=p*S+g*D+m*G+x*Q,s[14]=p*T+g*N+m*q+x*tt,s[3]=v*b+_*A+y*L+M*rt,s[7]=v*w+_*C+y*B+M*X,s[11]=v*S+_*D+y*G+M*Q,s[15]=v*T+_*N+y*q+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],g=t[7],m=t[11],x=t[15],v=l*d-c*f,_=a*d-c*u,y=a*f-l*u,M=o*d-c*h,b=o*f-l*h,w=o*u-a*h;return e*(g*v-m*_+x*y)-n*(p*v-m*M+x*b)+i*(p*_-g*M+x*w)-s*(p*y-g*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],g=t[13],m=t[14],x=t[15],v=e*a-n*o,_=e*l-i*o,y=e*c-s*o,M=n*l-i*a,b=n*c-s*a,w=i*c-s*l,S=h*g-u*p,T=h*m-f*p,A=h*x-d*p,C=u*m-f*g,D=u*x-d*g,N=f*x-d*m,L=v*N-_*D+y*C+M*A-b*T+w*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(a*N-l*D+c*C)*B,t[1]=(i*D-n*N-s*C)*B,t[2]=(g*w-m*b+x*M)*B,t[3]=(f*b-u*w-d*M)*B,t[4]=(l*A-o*N-c*T)*B,t[5]=(e*N-i*A+s*T)*B,t[6]=(m*y-p*w-x*_)*B,t[7]=(h*w-f*y+d*_)*B,t[8]=(o*D-a*A+c*S)*B,t[9]=(n*A-e*D-s*S)*B,t[10]=(p*b-g*y+x*v)*B,t[11]=(u*y-h*b-d*v)*B,t[12]=(a*T-o*C-l*S)*B,t[13]=(e*C-n*T+i*S)*B,t[14]=(g*_-p*M-m*v)*B,t[15]=(h*M-u*_+f*v)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,g=o*h,m=o*u,x=a*u,v=l*c,_=l*h,y=l*u,M=n.x,b=n.y,w=n.z;return i[0]=(1-(g+x))*M,i[1]=(d+y)*M,i[2]=(p-_)*M,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(f+x))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+_)*w,i[9]=(m-v)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=hr.set(i[0],i[1],i[2]).length(),a=hr.set(i[4],i[5],i[6]).length(),l=hr.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ui.copy(this);let c=1/o,h=1/a,u=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=pi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===pi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=pi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===pi)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===Pr)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Zl.prototype.isMatrix4=!0;var $t=Zl,hr=new I,ui=new $t,vm=new I(0,0,0),ym=new I(1,1,1),fs=new I,ka=new I,Yn=new I,Hu=new $t,Gu=new rn,mi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_m=0,ku=new I,ur=new rn,$i=new $t,Va=new I,co=new I,Sm=new I,Mm=new rn,Vu=new I(1,0,0),Wu=new I(0,1,0),Xu=new I(0,0,1),qu={type:"added"},bm={type:"removed"},fr={type:"childadded",child:null},Fh={type:"childremoved",child:null},on=class r extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new mi,n=new rn,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new ue}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Va.copy(t):Va.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(co,Va,this.up):$i.lookAt(Va,co,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),ur.setFromRotationMatrix($i),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),fr.child=t,this.dispatchEvent(fr),fr.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bm),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new I(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Bh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=pm(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Bh(o,s,t+1/3),this.g=Bh(o,s,t),this.b=Bh(o,s,t-1/3)}return _e.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(s){s!==void 0&&parseFloat(s)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return _e.workingToColorSpace(Dn.copy(this),t),Math.round(Se(Dn.r*255,0,255))*65536+Math.round(Se(Dn.g*255,0,255))*256+Math.round(Se(Dn.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Dn.copy(this),e);let n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=we){_e.workingToColorSpace(Dn.copy(this),t);let e=Dn.r,n=Dn.g,i=Dn.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(Wa);let n=Ih(ds.h,Wa.h,e),i=Ih(ds.s,Wa.s,e),s=Ih(ds.l,Wa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Xt;Xt.NAMES=Jf;var Gs=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fi=new I,Zi=new I,Oh=new I,Ji=new I,dr=new I,pr=new I,Yu=new I,zh=new I,Hh=new I,Gh=new I,kh=new je,Vh=new je,Wh=new je,Qi=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fi.subVectors(t,e),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fi.subVectors(i,e),Zi.subVectors(n,e),Oh.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Zi),l=fi.dot(Oh),c=Zi.dot(Zi),h=Zi.dot(Oh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return kh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,e),Vh.fromBufferAttribute(t,n),Wh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(kh,s.x),o.addScaledVector(Vh,s.y),o.addScaledVector(Wh,s.z),o}static isFrontFacing(t,e,n,i){return fi.subVectors(n,e),Zi.subVectors(t,e),fi.cross(Zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),fi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;dr.subVectors(i,n),pr.subVectors(s,n),zh.subVectors(t,n);let l=dr.dot(zh),c=pr.dot(zh);if(l<=0&&c<=0)return e.copy(n);Hh.subVectors(t,i);let h=dr.dot(Hh),u=pr.dot(Hh);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(dr,o);Gh.subVectors(t,s);let d=dr.dot(Gh),p=pr.dot(Gh);if(p>=0&&d<=p)return e.copy(s);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(pr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Yu.subVectors(s,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Yu,a);let x=1/(m+g+f);return o=g*x,a=f*x,e.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Li=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(t.matrixWorld),this.union(Xa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),qa.subVectors(this.max,ho),mr.subVectors(t.a,ho),gr.subVectors(t.b,ho),xr.subVectors(t.c,ho),ps.subVectors(gr,mr),ms.subVectors(xr,gr),Fs.subVectors(mr,xr);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Fs.z,Fs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Fs.z,0,-Fs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Fs.y,Fs.x,0];return!Xh(e,mr,gr,xr,qa)||(e=[1,0,0,0,1,0,0,0,1],!Xh(e,mr,gr,xr,qa))?!1:(Ya.crossVectors(ps,ms),e=[Ya.x,Ya.y,Ya.z],Xh(e,mr,gr,xr,qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new I,new I,new I,new I,new I,new I,new I,new I],di=new I,Xa=new Li,mr=new I,gr=new I,xr=new I,ps=new I,ms=new I,Fs=new I,ho=new I,qa=new I,Ya=new I,Bs=new I;function Xh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bs.fromArray(r,s);let a=i.x*Math.abs(Bs.x)+i.y*Math.abs(Bs.y)+i.z*Math.abs(Bs.z),l=t.dot(Bs),c=e.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pn=new I,$a=new J,Tm=0,ke=class extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=A0,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$a.fromBufferAttribute(this,e),$a.applyMatrix3(t),this.setXY(e,$a.x,$a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ro=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ao=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},wm=new Li,uo=new I,qh=new I,xs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);let e=uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(qh)),this.expandByPoint(uo.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rm=0,ti=new $t,Yh=new on,vr=new I,$n=new Li,fo=new Li,Tn=new I,ve=class r extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fm(t)?Ao:Ro)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ue().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors($n.min,fo.min),$n.expandByPoint(Tn),Tn.addVectors($n.max,fo.max),$n.expandByPoint(Tn)):($n.expandByPoint(fo.min),$n.expandByPoint(fo.max))}$n.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Tn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Tn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tn.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),Tn.add(vr)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new I,l[S]=new I;let c=new I,h=new I,u=new I,f=new J,d=new J,p=new J,g=new I,m=new I;function x(S,T,A){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[S].add(g),a[T].add(g),a[A].add(g),l[S].add(m),l[T].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,T=v.length;S<T;++S){let A=v[S],C=A.start,D=A.count;for(let N=C,L=C+D;N<L;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new I,y=new I,M=new I,b=new I;function w(S){M.fromBufferAttribute(i,S),b.copy(M);let T=a[S];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(b,T);let C=y.dot(l[S])<0?-1:1;o.setXYZW(S,_.x,_.y,_.z,C)}for(let S=0,T=v.length;S<T;++S){let A=v[S],C=A.start,D=A.count;for(let N=C,L=C+D;N<L;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let x=0;x<h;x++)f[p++]=c[d++]}return new ke(f,h,u)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=A0,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new I,Fr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$h=new I,Am=new I,Cm=new ue,kn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$h.subVectors(n,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta($h),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cm.getNormalMatrix(t),i=this.coplanarPoint($h).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pm=0,Ni=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=ws,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=v0,this.blendDst=y0,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pl,this.stencilZFail=pl,this.stencilZPass=pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ks=class extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yr,po=new I,_r=new I,Sr=new I,Mr=new J,mo=new J,Kf=new $t,Za=new I,go=new I,Ja=new I,$u=new J,Zh=new J,Zu=new J,Br=class extends on{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Co(e,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Fr(n,3,0,!1)),yr.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=yr,this.material=t,this.center=new J(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Kf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-Sr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Ka(Za.set(-.5,-.5,0),Sr,o,_r,i,s),Ka(go.set(.5,-.5,0),Sr,o,_r,i,s),Ka(Ja.set(.5,.5,0),Sr,o,_r,i,s),$u.set(0,0),Zh.set(1,0),Zu.set(1,1);let a=t.ray.intersectTriangle(Za,go,Ja,!1,po);if(a===null&&(Ka(go.set(-.5,.5,0),Sr,o,_r,i,s),Zh.set(0,1),a=t.ray.intersectTriangle(Za,Ja,go,!1,po),a===null))return;let l=t.ray.origin.distanceTo(po);l<t.near||l>t.far||e.push({distance:l,point:po.clone(),uv:Qi.getInterpolation(po,Za,go,Ja,$u,Zh,Zu,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ka(r,t,e,n,i,s){Mr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(mo.x=s*Mr.x-i*Mr.y,mo.y=i*Mr.x+s*Mr.y):mo.copy(Mr),r.copy(t),r.x+=mo.x,r.y+=mo.y,r.applyMatrix4(Kf)}var ji=new I,Jh=new I,ja=new I,Qa=new I,Po=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jh.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),Qa.copy(this.origin).sub(Jh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ja),a=Qa.dot(this.direction),l=-Qa.dot(ja),c=Qa.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Jh).addScaledVector(ja,f),d}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),i=ji.dot(ji)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,x=n.x-o.x,v=n.y-o.y,_=n.z-o.z,y=Math.abs(l),M=Math.abs(c),b=Math.abs(h),w,S,T,A,C,D,N,L,B,G,q,rt;if(y>=M&&y>=b?(T=l,D=u,B=p,rt=x,l>=0?(w=c,S=h,A=f,C=d,N=g,L=m,G=v,q=_):(w=h,S=c,A=d,C=f,N=m,L=g,G=_,q=v)):M>=b?(T=c,D=f,B=g,rt=v,c>=0?(w=h,S=l,A=d,C=u,N=m,L=p,G=_,q=x):(w=l,S=h,A=u,C=d,N=p,L=m,G=x,q=_)):(T=h,D=d,B=m,rt=_,h>=0?(w=l,S=c,A=u,C=f,N=p,L=g,G=x,q=v):(w=c,S=l,A=f,C=u,N=g,L=p,G=v,q=x)),T===0)return null;let X=w/T,Q=S/T,tt=1/T,Ft=A-X*D,Nt=C-Q*D,Ee=N-X*B,fe=L-Q*B,ye=G-X*rt,$=q-Q*rt,et=ye*fe-$*Ee,vt=Ft*$-Nt*ye,Jt=Ee*Nt-fe*Ft;if(i){if(et<0||vt<0||Jt<0)return null}else if((et<0||vt<0||Jt<0)&&(et>0||vt>0||Jt>0))return null;let It=et+vt+Jt;if(It===0)return null;let ne=tt*(et*D+vt*B+Jt*rt);return(It>0?ne<0:ne>0)?null:this.at(ne/It,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ju=new $t,Os=new Po,tl=new xs,Ku=new I,el=new I,nl=new I,il=new I,Kh=new I,sl=new I,ju=new I,rl=new I,lt=class extends on{constructor(t=new ve,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Kh.fromBufferAttribute(u,t),o?sl.addScaledVector(Kh,h):sl.addScaledVector(Kh.sub(e),h))}e.add(sl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),Os.copy(t.ray).recast(t.near),!(tl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(tl,Ku)===null||Os.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(Ju.copy(s).invert(),Os.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Os)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],x=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,M=_;y<M;y+=3){let b=a.getX(y),w=a.getX(y+1),S=a.getX(y+2);i=ol(this,x,t,n,c,h,u,b,w,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=p,x=g;m<x;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=ol(this,o,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],x=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,M=_;y<M;y+=3){let b=y,w=y+1,S=y+2;i=ol(this,x,t,n,c,h,u,b,w,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=p,x=g;m<x;m+=3){let v=m,_=m+1,y=m+2;i=ol(this,o,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Im(r,t,e,n,i,s,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ts,a),l===null)return null;rl.copy(a),rl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(rl);return c<e.near||c>e.far?null:{distance:c,point:rl.clone(),object:r}}function ol(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,el),r.getVertexPosition(l,nl),r.getVertexPosition(c,il);let h=Im(r,t,e,n,el,nl,il,ju);if(h){let u=new I;Qi.getBarycoord(ju,el,nl,il,u),i&&(h.uv=Qi.getInterpolatedAttribute(i,a,l,c,u,new J)),s&&(h.uv1=Qi.getInterpolatedAttribute(s,a,l,c,u,new J)),o&&(h.normal=Qi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Qi.getNormal(el,nl,il,f.normal),h.face=f,h.barycoord=u}return h}var ns=class extends Ln{constructor(t=null,e=1,n=1,i,s,o,a,l,c=hn,h=hn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},br=new $t,Qu=new $t,al=[],tf=new Li,Dm=new $t,xo=new lt,vo=new xs,yn=class extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),tf.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(tf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),vo.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(vo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),t.ray.intersectsSphere(vo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,br),Qu.multiplyMatrices(n,br),xo.matrixWorld=Qu,xo.raycast(t,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=s,l.object=this,e.push(l)}al.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,ic,ni));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new xs,Lm=new J(.5,.5),ll=new I,Or=class{constructor(t=new kn,e=new kn,n=new kn,i=new kn,s=new kn,o=new kn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],m=s[10],x=s[11],v=s[12],_=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,x-p,M-v).normalize(),i[1].setComponents(c+o,d+h,x+p,M+v).normalize(),i[2].setComponents(c+a,d+u,x+g,M+_).normalize(),i[3].setComponents(c-a,d-u,x-g,M-_).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,x-m,M-y).normalize();else if(i[4].setComponents(c-l,d-f,x-m,M-y).normalize(),e===pi)i[5].setComponents(c+l,d+f,x+m,M+y).normalize();else if(e===Pr)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);let e=Lm.distanceTo(t.center);return zs.radius=.7071067811865476+e,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ll.x=i.normal.x>0?t.max.x:t.min.x,ll.y=i.normal.y>0?t.max.y:t.min.y,ll.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ll)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Io=class extends Ln{constructor(t=[],e=As,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qe=class extends Ln{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends Ln{constructor(t,e,n=xi,i,s,o,a=hn,l=hn,c,h=Pi,u=1){if(h!==Pi&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cl=class extends Ui{constructor(t,e=xi,n=As,i,s,o=hn,a=hn,l,c=Pi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Do=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},j=class r extends ve{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function p(g,m,x,v,_,y,M,b,w,S,T){let A=y/w,C=M/S,D=y/2,N=M/2,L=b/2,B=w+1,G=S+1,q=0,rt=0,X=new I;for(let Q=0;Q<G;Q++){let tt=Q*C-N;for(let Ft=0;Ft<B;Ft++){let Nt=Ft*A-D;X[g]=Nt*v,X[m]=tt*_,X[x]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[x]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ft/w),u.push(1-Q/S),q+=1}}for(let Q=0;Q<S;Q++)for(let tt=0;tt<w;tt++){let Ft=f+tt+B*Q,Nt=f+tt+B*(Q+1),Ee=f+(tt+1)+B*(Q+1),fe=f+(tt+1)+B*Q;l.push(Ft,Nt,fe),l.push(Nt,Ee,fe),rt+=6}a.addGroup(d,rt,T),d+=rt,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vs=class r extends ve{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+s,g=i+1,m=new I,x=new I;for(let v=0;v<=p;v++){let _=0,y=0,M=0,b=0;if(v<=n){let T=v/n,A=T*Math.PI/2;y=-h-t*Math.cos(A),M=t*Math.sin(A),b=-t*Math.cos(A),_=T*u}else if(v<=n+s){let T=(v-n)/s;y=-h+T*e,M=t,b=0,_=u+T*f}else{let T=(v-n-s)/n,A=T*Math.PI/2;y=h+t*Math.sin(A),M=t*Math.cos(A),b=t*Math.sin(A),_=u+f+T*u}let w=Math.max(0,Math.min(1,_/d)),S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let T=0;T<=i;T++){let A=T/i,C=A*Math.PI*2,D=Math.sin(C),N=Math.cos(C);x.x=-M*N,x.y=y,x.z=M*D,a.push(x.x,x.y,x.z),m.set(-M*N,b,M*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,w)}if(v>0){let T=(v-1)*g;for(let A=0;A<i;A++){let C=T+A,D=T+A+1,N=v*g+A,L=v*g+A+1;o.push(C,D,N),o.push(D,L,N)}}}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Wn=class r extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ut=class r extends ve{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,g=[],m=n/2,x=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function v(){let y=new I,M=new I,b=0,w=(e-t)/n;for(let S=0;S<=s;S++){let T=[],A=S/s,C=A*(e-t)+t;for(let D=0;D<=i;D++){let N=D/i,L=N*l+a,B=Math.sin(L),G=Math.cos(L);M.x=C*B,M.y=-A*n+m,M.z=C*G,u.push(M.x,M.y,M.z),y.set(B,w,G).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-A),T.push(p++)}g.push(T)}for(let S=0;S<i;S++)for(let T=0;T<s;T++){let A=g[T][S],C=g[T+1][S],D=g[T+1][S+1],N=g[T][S+1];(t>0||T!==0)&&(h.push(A,C,N),b+=3),(e>0||T!==s-1)&&(h.push(C,D,N),b+=3)}c.addGroup(x,b,0),x+=b}function _(y){let M=p,b=new J,w=new I,S=0,T=y===!0?t:e,A=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let C=p;for(let D=0;D<=i;D++){let L=D/i*l+a,B=Math.cos(L),G=Math.sin(L);w.x=T*G,w.y=m*A,w.z=T*B,u.push(w.x,w.y,w.z),f.push(0,A,0),b.x=B*.5+.5,b.y=G*.5*A+.5,d.push(b.x,b.y),p++}for(let D=0;D<i;D++){let N=M+D,L=C+D;y===!0?h.push(L,L+1,N):h.push(L+1,L,N),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ze=class r extends ut{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lo=class r extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,M=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],y),d(e[b+2],M),l(_,y,M,v)}function l(v,_,y,M){let b=M+1,w=[];for(let S=0;S<=b;S++){w[S]=[];let T=v.clone().lerp(y,S/b),A=_.clone().lerp(y,S/b),C=b-S;for(let D=0;D<=C;D++)D===0&&S===b?w[S][D]=T:w[S][D]=T.clone().lerp(A,D/C)}for(let S=0;S<b;S++)for(let T=0;T<2*(b-S)-1;T++){let A=Math.floor(T/2);T%2===0?(f(w[S][A+1]),f(w[S+1][A]),f(w[S][A])):(f(w[S][A+1]),f(w[S+1][A+1]),f(w[S+1][A]))}}function c(v){let _=new I;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){let v=new I;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];let y=m(v)/2/Math.PI+.5,M=x(v)/Math.PI+.5;o.push(y,1-M)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],M=o[v+4],b=Math.max(_,y,M),w=Math.min(_,y,M);b>.9&&w<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function p(){let v=new I,_=new I,y=new I,M=new I,b=new J,w=new J,S=new J;for(let T=0,A=0;T<s.length;T+=9,A+=6){v.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),b.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),M.copy(v).add(_).add(y).divideScalar(3);let C=m(M);g(b,A+0,v,C),g(w,A+2,_,C),g(S,A+4,y,C)}}function g(v,_,y,M){M<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}},No=class r extends Lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new J:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],s=[],o=[],a=new I,l=new $t;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Se(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Se(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends Zn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pl=class extends zr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function I0(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var ef=new I,nf=new I,jh=new I0,Qh=new I0,t0=new I0,ys=class extends Zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(nf.subVectors(i[0],i[1]).add(i[0]),c=nf);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ef.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ef),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),jh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,g,m),Qh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,g,m),t0.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Qh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),t0.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(jh.calc(l),Qh.calc(l),t0.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sf(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Nm(r,t){let e=1-r;return e*e*t}function Um(r,t){return 2*(1-r)*r*t}function Fm(r,t){return r*r*t}function _o(r,t,e,n){return Nm(r,t)+Um(r,e)+Fm(r,n)}function Bm(r,t){let e=1-r;return e*e*e*t}function Om(r,t){let e=1-r;return 3*e*e*r*t}function zm(r,t){return 3*(1-r)*r*r*t}function Hm(r,t){return r*r*r*t}function So(r,t,e,n,i){return Bm(r,t)+Om(r,e)+zm(r,n)+Hm(r,i)}var Uo=class extends Zn{constructor(t=new J,e=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new J){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends Zn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y),So(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends Zn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends Zn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends Zn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_o(t,i.x,s.x,o.x),_o(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Zn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_o(t,i.x,s.x,o.x),_o(t,i.y,s.y,o.y),_o(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(sf(a,l.x,c.x,h.x,u.x),sf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new J().fromArray(i))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:ys,CubicBezierCurve:Uo,CubicBezierCurve3:Il,EllipseCurve:zr,LineCurve:Fo,LineCurve3:Dl,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:Oo,SplineCurve:zo}),Nl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ll[i.type]().fromJSON(i))}return this}},Ws=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fo(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Bo(this.currentPoint.clone(),new J(t,e),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Uo(this.currentPoint.clone(),new J(t,e),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new zr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},an=class extends Ws{constructor(t){super(t),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ws().fromJSON(i))}return this}};function Gm(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=jf(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=qm(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,u=l;for(let f=e;f<i;f+=e){let d=r[f],p=r[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ho(s,o,e,a,l,c,0),o}function jf(r,t,e,n,i){let s;if(i===ig(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=rf(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=rf(o/n|0,r[o],r[o+1],s);return s&&Hr(s,s.next)&&(ko(s),s=s.next),s}function Xs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||tn(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ho(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Km(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Vm(r,n,i,s):km(r)){t.push(l.i,r.i,c.i),ko(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Wm(Xs(r),t),Ho(r,t,e,n,i,s,2)):o===2&&Xm(r,t,e,n,i,s):Ho(Xs(r),t,e,n,i,s,1);break}}}function km(r){let t=r.prev,e=r,n=r.next;if(tn(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&yo(i,a,s,l,o,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vm(r,t,e,n){let i=r.prev,s=r,o=r.next;if(tn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),m=Math.max(h,u,f),x=a0(d,p,t,e,n),v=a0(g,m,t,e,n),_=r.prevZ,y=r.nextZ;for(;_&&_.z>=x&&y&&y.z<=v;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&yo(a,h,l,u,c,f,_.x,_.y)&&tn(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&yo(a,h,l,u,c,f,y.x,y.y)&&tn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=x;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&yo(a,h,l,u,c,f,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&yo(a,h,l,u,c,f,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wm(r,t){let e=r;do{let n=e.prev,i=e.next.next;!Hr(n,i)&&td(n,e,e.next,i)&&Go(n,i)&&Go(i,n)&&(t.push(n.i,e.i,i.i),ko(e),ko(e.next),e=r=i),e=e.next}while(e!==r);return Xs(e)}function Xm(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let l=ed(o,a);o=Xs(o,o.next),l=Xs(l,l.next),Ho(o,t,e,n,i,s,0),Ho(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function qm(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=jf(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Qm(c))}i.sort(Ym);for(let s=0;s<i.length;s++)e=$m(i[s],e);return e}function Ym(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function $m(r,t){let e=Zm(r,t);if(!e)return t;let n=ed(e,r);return Xs(n,n.next),Xs(e,e.next)}function Zm(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(Hr(r,e))return e;do{if(Hr(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qf(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Go(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Jm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Jm(r,t){return tn(r.prev,r,t.prev)<0&&tn(t.next,r,r.next)<0}function Km(r,t,e,n){let i=r;do i.z===0&&(i.z=a0(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,jm(i)}function jm(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function a0(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Qm(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qf(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function yo(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Qf(r,t,e,n,i,s,o,a)}function tg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!eg(r,t)&&(Go(r,t)&&Go(t,r)&&ng(r,t)&&(tn(r.prev,r,t.prev)||tn(r,t.prev,t))||Hr(r,t)&&tn(r.prev,r,r.next)>0&&tn(t.prev,t,t.next)>0)}function tn(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Hr(r,t){return r.x===t.x&&r.y===t.y}function td(r,t,e,n){let i=hl(tn(r,t,e)),s=hl(tn(r,t,n)),o=hl(tn(e,n,r)),a=hl(tn(e,n,t));return!!(i!==s&&o!==a||i===0&&cl(r,e,t)||s===0&&cl(r,n,t)||o===0&&cl(e,r,n)||a===0&&cl(e,t,n))}function cl(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function hl(r){return r>0?1:r<0?-1:0}function eg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Go(r,t){return tn(r.prev,r,r.next)<0?tn(r,t,r.next)>=0&&tn(r,r.prev,t)>=0:tn(r,t,r.prev)<0||tn(r,r.next,t)<0}function ng(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ed(r,t){let e=l0(r.i,r.x,r.y),n=l0(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function rf(r,t,e,n){let i=l0(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ko(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function l0(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ig(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var c0=class{static triangulate(t,e,n=2){return Gm(t,e,n)}},Ci=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];of(t),af(n,t);let o=t.length;e.forEach(of);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,af(n,e[l]);let a=c0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function of(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function af(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Nn=class r extends ve{constructor(t=new an([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new kt(i,3)),this.setAttribute("uv",new kt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:sg,_,y=!1,M,b,w,S;if(x){_=x.getSpacedPoints(h),y=!0,f=!1;let it=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(h,it),b=new I,w=new I,S=new I}f||(m=0,d=0,p=0,g=0);let T=a.extractPoints(c),A=T.shape,C=T.holes;if(!Ci.isClockWise(A)){A=A.reverse();for(let it=0,ct=C.length;it<ct;it++){let ft=C[it];Ci.isClockWise(ft)&&(C[it]=ft.reverse())}}function N(it){let ft=10000000000000001e-36,pt=it[0];for(let xt=1;xt<=it.length;xt++){let te=xt%it.length,Kt=it[te],ie=Kt.x-pt.x,oe=Kt.y-pt.y,F=ie*ie+oe*oe,Ae=Math.max(Math.abs(Kt.x),Math.abs(Kt.y),Math.abs(pt.x),Math.abs(pt.y)),me=ft*Ae*Ae;if(F<=me){it.splice(te,1),xt--;continue}pt=Kt}}N(A),C.forEach(N);let L=C.length,B=A;for(let it=0;it<L;it++){let ct=C[it];A=A.concat(ct)}function G(it,ct,ft){return ct||se("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,ft)}let q=A.length;function rt(it,ct,ft){let pt,xt,te,Kt=it.x-ct.x,ie=it.y-ct.y,oe=ft.x-it.x,F=ft.y-it.y,Ae=Kt*Kt+ie*ie,me=Kt*F-ie*oe;if(Math.abs(me)>Number.EPSILON){let P=Math.sqrt(Ae),E=Math.sqrt(oe*oe+F*F),H=ct.x-ie/P,k=ct.y+Kt/P,Z=ft.x-F/E,mt=ft.y+oe/E,yt=((Z-H)*F-(mt-k)*oe)/(Kt*F-ie*oe);pt=H+Kt*yt-it.x,xt=k+ie*yt-it.y;let K=pt*pt+xt*xt;if(K<=2)return new J(pt,xt);te=Math.sqrt(K/2)}else{let P=!1;Kt>Number.EPSILON?oe>Number.EPSILON&&(P=!0):Kt<-Number.EPSILON?oe<-Number.EPSILON&&(P=!0):Math.sign(ie)===Math.sign(F)&&(P=!0),P?(pt=-ie,xt=Kt,te=Math.sqrt(Ae)):(pt=Kt,xt=ie,te=Math.sqrt(Ae/2))}return new J(pt/te,xt/te)}let X=[];for(let it=0,ct=B.length,ft=ct-1,pt=it+1;it<ct;it++,ft++,pt++)ft===ct&&(ft=0),pt===ct&&(pt=0),X[it]=rt(B[it],B[ft],B[pt]);let Q=[],tt,Ft=X.concat();for(let it=0,ct=L;it<ct;it++){let ft=C[it];tt=[];for(let pt=0,xt=ft.length,te=xt-1,Kt=pt+1;pt<xt;pt++,te++,Kt++)te===xt&&(te=0),Kt===xt&&(Kt=0),tt[pt]=rt(ft[pt],ft[te],ft[Kt]);Q.push(tt),Ft=Ft.concat(tt)}let Nt;if(m===0)Nt=Ci.triangulateShape(B,C);else{let it=[],ct=[];for(let ft=0;ft<m;ft++){let pt=ft/m,xt=d*Math.cos(pt*Math.PI/2),te=p*Math.sin(pt*Math.PI/2)+g;for(let Kt=0,ie=B.length;Kt<ie;Kt++){let oe=G(B[Kt],X[Kt],te);vt(oe.x,oe.y,-xt),pt===0&&it.push(oe)}for(let Kt=0,ie=L;Kt<ie;Kt++){let oe=C[Kt];tt=Q[Kt];let F=[];for(let Ae=0,me=oe.length;Ae<me;Ae++){let P=G(oe[Ae],tt[Ae],te);vt(P.x,P.y,-xt),pt===0&&F.push(P)}pt===0&&ct.push(F)}}Nt=Ci.triangulateShape(it,ct)}let Ee=Nt.length,fe=p+g;for(let it=0;it<q;it++){let ct=f?G(A[it],Ft[it],fe):A[it];y?(w.copy(M.normals[0]).multiplyScalar(ct.x),b.copy(M.binormals[0]).multiplyScalar(ct.y),S.copy(_[0]).add(w).add(b),vt(S.x,S.y,S.z)):vt(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<q;ct++){let ft=f?G(A[ct],Ft[ct],fe):A[ct];y?(w.copy(M.normals[it]).multiplyScalar(ft.x),b.copy(M.binormals[it]).multiplyScalar(ft.y),S.copy(_[it]).add(w).add(b),vt(S.x,S.y,S.z)):vt(ft.x,ft.y,u/h*it)}for(let it=m-1;it>=0;it--){let ct=it/m,ft=d*Math.cos(ct*Math.PI/2),pt=p*Math.sin(ct*Math.PI/2)+g;for(let xt=0,te=B.length;xt<te;xt++){let Kt=G(B[xt],X[xt],pt);vt(Kt.x,Kt.y,u+ft)}for(let xt=0,te=C.length;xt<te;xt++){let Kt=C[xt];tt=Q[xt];for(let ie=0,oe=Kt.length;ie<oe;ie++){let F=G(Kt[ie],tt[ie],pt);y?vt(F.x,F.y+_[h-1].y,_[h-1].x+ft):vt(F.x,F.y,u+ft)}}}ye(),$();function ye(){let it=i.length/3;if(f){let ct=0,ft=q*ct;for(let pt=0;pt<Ee;pt++){let xt=Nt[pt];Jt(xt[2]+ft,xt[1]+ft,xt[0]+ft)}ct=h+m*2,ft=q*ct;for(let pt=0;pt<Ee;pt++){let xt=Nt[pt];Jt(xt[0]+ft,xt[1]+ft,xt[2]+ft)}}else{for(let ct=0;ct<Ee;ct++){let ft=Nt[ct];Jt(ft[2],ft[1],ft[0])}for(let ct=0;ct<Ee;ct++){let ft=Nt[ct];Jt(ft[0]+q*h,ft[1]+q*h,ft[2]+q*h)}}n.addGroup(it,i.length/3-it,0)}function $(){let it=i.length/3,ct=0;et(B,ct),ct+=B.length;for(let ft=0,pt=C.length;ft<pt;ft++){let xt=C[ft];et(xt,ct),ct+=xt.length}n.addGroup(it,i.length/3-it,1)}function et(it,ct){let ft=it.length;for(;--ft>=0;){let pt=ft,xt=ft-1;xt<0&&(xt=it.length-1);for(let te=0,Kt=h+m*2;te<Kt;te++){let ie=q*te,oe=q*(te+1),F=ct+pt+ie,Ae=ct+xt+ie,me=ct+xt+oe,P=ct+pt+oe;It(F,Ae,me,P)}}}function vt(it,ct,ft){l.push(it),l.push(ct),l.push(ft)}function Jt(it,ct,ft){ne(it),ne(ct),ne(ft);let pt=i.length/3,xt=v.generateTopUV(n,i,pt-3,pt-2,pt-1);Ce(xt[0]),Ce(xt[1]),Ce(xt[2])}function It(it,ct,ft,pt){ne(it),ne(ct),ne(pt),ne(ct),ne(ft),ne(pt);let xt=i.length/3,te=v.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);Ce(te[0]),Ce(te[1]),Ce(te[3]),Ce(te[1]),Ce(te[2]),Ce(te[3])}function ne(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function Ce(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rg(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ll[i.type]().fromJSON(i)),new r(n,t.options)}},sg={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new J(s,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],g=t[s*3],m=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(f,1-p),new J(g,1-x)]:[new J(a,1-l),new J(h,1-u),new J(d,1-p),new J(m,1-x)]}};function rg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var is=class r extends Lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Vo=class r extends ve{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Se(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new J,d=new I,p=new I,g=new I,m=0,x=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,x=t[v+1].y-t[v].y,d.x=x*1,d.y=-m,d.z=x*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[v+1].x-t[v].x,x=t[v+1].y-t[v].y,d.x=x*1,d.y=-m,d.z=x*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let v=0;v<=e;v++){let _=n+v*h*i,y=Math.sin(_),M=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*y,u.y=t[b].y,u.z=t[b].x*M,o.push(u.x,u.y,u.z),f.x=v/e,f.y=b/(t.length-1),a.push(f.x,f.y);let w=l[3*b+0]*y,S=l[3*b+1],T=l[3*b+0]*M;c.push(w,S,T)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,M=y,b=y+t.length,w=y+t.length+1,S=y+1;s.push(M,b,S),s.push(w,S,b)}this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("uv",new kt(a,2)),this.setAttribute("normal",new kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var le=class r extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let v=x*f-o;for(let _=0;_<c;_++){let y=_*u-s;p.push(y,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let _=v+c*x,y=v+c*(x+1),M=v+1+c*(x+1),b=v+1+c*x;d.push(_,y,b),d.push(y,M,b)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Fi=class r extends ve{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new I,p=new J;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let x=s+m/n*o;d.x=u*Math.cos(x),d.y=u*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<i;g++){let m=g*(n+1);for(let x=0;x<n;x++){let v=x+m,_=v,y=v+n+1,M=v+n+2,b=v+1;a.push(_,y,b),a.push(y,M,b)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_s=class r extends ve{constructor(t=new an([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new kt(i,3)),this.setAttribute("normal",new kt(s,3)),this.setAttribute("uv",new kt(o,2));function c(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Ci.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,x=p.length;m<x;m++){let v=p[m];Ci.isClockWise(v)===!0&&(p[m]=v.reverse())}let g=Ci.triangulateShape(d,p);for(let m=0,x=p.length;m<x;m++){let v=p[m];d=d.concat(v)}for(let m=0,x=d.length;m<x;m++){let v=d[m];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,x=g.length;m<x;m++){let v=g[m],_=v[0]+u,y=v[1]+u,M=v[2]+u;n.push(_,y,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return og(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let o=e[t.shapes[i]];n.push(o)}return new r(n,t.curveSegments)}};function og(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var ce=class r extends ve{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],p=[],g=[],m=[];for(let x=0;x<=n;x++){let v=[],_=x/n,y=o+_*a,M=t*Math.cos(y),b=Math.sqrt(t*t-M*M),w=0;x===0&&o===0?w=.5/e:x===n&&l===Math.PI&&(w=-.5/e);for(let S=0;S<=e;S++){let T=S/e,A=i+T*s;u.x=-b*Math.cos(A),u.y=M,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(T+w,1-_),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<e;v++){let _=h[x][v+1],y=h[x][v],M=h[x+1][v],b=h[x+1][v+1];(x!==0||o>0)&&d.push(_,y,b),(x!==n-1||l<Math.PI)&&d.push(y,M,b)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _n=class r extends ve{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new I,d=new I,p=new I;for(let g=0;g<=n;g++){let m=o+g/n*a;for(let x=0;x<=i;x++){let v=x/i*s;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(x/i),u.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=i;m++){let x=(i+1)*g+m-1,v=(i+1)*(g-1)+m-1,_=(i+1)*(g-1)+m,y=(i+1)*g+m;l.push(x,v,y),l.push(v,_,y)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Wo=class r extends ve{constructor(t=new Oo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new J,h=new I,u=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function g(){for(let _=0;_<e;_++)m(_);m(s===!1?e:0),v(),x()}function m(_){h=t.getPointAt(_/e,h);let y=o.normals[_],M=o.binormals[_];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,S=Math.sin(w),T=-Math.cos(w);l.x=T*y.x+S*M.x,l.y=T*y.y+S*M.y,l.z=T*y.z+S*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){let M=(i+1)*(_-1)+(y-1),b=(i+1)*_+(y-1),w=(i+1)*_+y,S=(i+1)*(_-1)+y;p.push(M,b,S),p.push(b,w,S)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)c.x=_/e,c.y=y/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Ll[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ks(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(lf(i))i.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(lf(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Fn(r){let t={};for(let e=0;e<r.length;e++){let n=Ks(r[e]);for(let i in n)t[i]=n[i]}return t}function lf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ag(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function D0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var An={clone:Ks,merge:Fn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new J().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gr=class extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ht=class extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xo=class extends Ni{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Ul=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fl=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Er(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function e0(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Ss=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bl=class extends Ss{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s0,endingEnd:s0}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case r0:s=t,a=2*e-n;break;case o0:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case r0:o=t,l=2*n-e;break;case o0:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),g=p*p,m=g*p,x=-f*m+2*f*g-f*p,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*p+1,_=(-1-d)*m+(1.5+d)*g+.5*p,y=d*m-d*g;for(let M=0;M!==a;++M)s[M]=x*o[h+M]+v*o[c+M]+_*o[l+M]+y*o[u+M];return s}},Ol=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},zl=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends Ss{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),g=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*g+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=d*f+p*2,v=u[x],_=u[x+1],y=t*f+p*2,M=h[y],b=h[y+1],w=ug(n,e,v,M,i);s[p]=nd(w,g,_,b,m)}return s}};function nd(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function hg(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function ug(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=nd(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=hg(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Jn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Er(e,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Er(t.times,Array),values:Er(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),e0(t.settings)&&(n.settings={inTangents:Er(t.settings.inTangents,Array),outTangents:Er(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case El:e=this.InterpolantFactoryMethodLinear;break;case dl:e=this.InterpolantFactoryMethodSmooth;break;case i0:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return dl;case this.InterpolantFactoryMethodBezier:return i0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;e0(this.settings)&&(cf(this.settings.inTangents,t),cf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=e[u+p];if(g!==e[f+p]||g!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,e0(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function cf(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=El;var Ms=class extends Jn{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Mo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};Gl.prototype.ValueTypeName="color";var kl=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};kl.prototype.ValueTypeName="number";var Vl=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(s,0,o,c-a,o,c,l);return s}},qo=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Jn{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Mo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};Wl.prototype.ValueTypeName="vector";var ml={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(hf(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!hf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function hf(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Xl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Xl,kr=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=new WeakMap,ql=class extends kr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ml.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Tr.get(o);u===void 0&&(u=[],Tr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=Ir("img");function l(){h(),e&&e(this);let u=Tr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Tr.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),ml.remove(`image:${t}`);let f=Tr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Tr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ml.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Yo=class extends kr{constructor(t){super(t)}load(t,e,n,i){let s=new Ln,o=new ql(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Vr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Es=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},n0=new $t,uf=new I,ff=new I,$o=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){n0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(n0,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(n0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ul=new I,fl=new rn,Ri=new I,Zo=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ul,fl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,fl,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ul,fl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,fl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new I,df=new J,pf=new J,vn=class extends Zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gs.x,gs.y).multiplyScalar(-t/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-t/gs.z)}getViewSize(t,e){return this.getViewBounds(t,df,pf),e.subVectors(pf,df)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ph*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var h0=class extends $o{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}},qs=class extends Vr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Bi=class extends Zo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},u0=class extends $o{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new u0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Jo=class extends ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var wr=-90,Rr=1,Yl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vn(wr,Rr,t,e);i.layers=this.layers,this.add(i);let s=new vn(wr,Rr,t,e);s.layers=this.layers,this.add(s);let o=new vn(wr,Rr,t,e);o.layers=this.layers,this.add(o);let a=new vn(wr,Rr,t,e);a.layers=this.layers,this.add(a);let l=new vn(wr,Rr,t,e);l.layers=this.layers,this.add(l);let c=new vn(wr,Rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$l=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ko=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=fg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function fg(){this._document.hidden===!1&&this.reset()}var L0="\\[\\]\\.:\\/",dg=new RegExp("["+L0+"]","g"),N0="[^"+L0+"]",pg="[^"+L0.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",N0),gg=/(WCOD+)?/.source.replace("WCOD",pg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",N0),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",N0),yg=new RegExp("^"+mg+gg+xg+vg+"$"),_g=["material","materials","bones","map"],f0=class{constructor(t,e,n){let i=n||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ke=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dg,"")}static parseTrackName(t){let e=yg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_g.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=f0;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);var mf=new $t,Wr=class{constructor(t,e,n=0,i=1/0){this.ray=new Po(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(t,e=!0,n=[]){return d0(t,this,n,e),n.sort(gf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)d0(t[i],this,n,e);return n.sort(gf),n}};function gf(r,t){return r.distance-t.distance}function d0(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)d0(s[o],t,e,!0)}}var H0=class H0{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};H0.prototype.isMatrix2=!0;var p0=H0;function U0(r,t,e,n){let i=Sg(n);switch(e){case w0:return r*t;case ic:return r*t/i.components*i.byteLength;case sc:return r*t/i.components*i.byteLength;case Ps:return r*t*2/i.components*i.byteLength;case rc:return r*t*2/i.components*i.byteLength;case R0:return r*t*3/i.components*i.byteLength;case Xn:return r*t*4/i.components*i.byteLength;case oc:return r*t*4/i.components*i.byteLength;case la:case ca:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lc:case hc:return Math.max(r,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(r,8)*Math.max(t,8)/2;case uc:case fc:case pc:case mc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dc:case fa:case gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ic:case Dc:case Lc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nc:case Uc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case da:case Fc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(r){switch(r){case Un:case M0:return{byteLength:1,components:1};case qr:case b0:case ln:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case xi:case tc:case ni:return{byteLength:4,components:1};case E0:case T0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function wg(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let g=u[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
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
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
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
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`uniform sampler2D dfgLUT;
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
}`,wx=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,U1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,j1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,tv=`#define TOON
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
}`,ev=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 color;
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
}`,rv=`uniform float rotation;
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
}`,ov=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Rg,alphahash_pars_fragment:Ag,alphamap_fragment:Cg,alphamap_pars_fragment:Pg,alphatest_fragment:Ig,alphatest_pars_fragment:Dg,aomap_fragment:Lg,aomap_pars_fragment:Ng,batching_pars_vertex:Ug,batching_vertex:Fg,begin_vertex:Bg,beginnormal_vertex:Og,bsdfs:zg,iridescence_fragment:Hg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:Yg,color_pars_vertex:$g,color_vertex:Zg,common:Jg,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:tx,emissivemap_fragment:ex,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ox,envmap_pars_fragment:ax,envmap_pars_vertex:lx,envmap_physical_pars_fragment:yx,envmap_vertex:cx,fog_vertex:hx,fog_pars_vertex:ux,fog_fragment:fx,fog_pars_fragment:dx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:xx,lights_pars_begin:vx,lights_toon_fragment:_x,lights_toon_pars_fragment:Sx,lights_phong_fragment:Mx,lights_phong_pars_fragment:bx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:wx,lights_fragment_maps:Rx,lights_fragment_end:Ax,lightprobes_pars_fragment:Cx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Lx,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Bx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Gx,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:$x,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:t1,opaque_fragment:e1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:h1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:d1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:x1,specularmap_pars_fragment:v1,tonemapping_fragment:y1,tonemapping_pars_fragment:_1,transmission_fragment:S1,transmission_pars_fragment:M1,uv_pars_fragment:b1,uv_pars_vertex:E1,uv_vertex:T1,worldpos_vertex:w1,background_vert:R1,background_frag:A1,backgroundCube_vert:C1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:D1,depth_vert:L1,depth_frag:N1,distance_vert:U1,distance_frag:F1,equirect_vert:B1,equirect_frag:O1,linedashed_vert:z1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:k1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:q1,meshnormal_vert:Y1,meshnormal_frag:$1,meshphong_vert:Z1,meshphong_frag:J1,meshphysical_vert:K1,meshphysical_frag:j1,meshtoon_vert:Q1,meshtoon_frag:tv,points_vert:ev,points_frag:nv,shadow_vert:iv,shadow_frag:sv,sprite_vert:rv,sprite_frag:ov},Rt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Gi={basic:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Fn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Fn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Fn([Rt.points,Rt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Fn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Fn([Rt.common,Rt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Fn([Rt.sprite,Rt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Fn([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Fn([Rt.lights,Rt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Gi.physical={uniforms:Fn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var zc={r:0,b:0,g:0},av=new $t,wd=new ue;wd.set(-1,0,0,0,1,0,0,0,1);function lv(r,t,e,n,i,s){let o=new Xt(0),a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let y=v.backgroundBlurriness>0;_=t.get(_,y)}return _}function p(v){let _=!1,y=d(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),_=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,_){let y=d(_);y&&(y.isCubeTexture||y.mapping===oa)?(c===void 0&&(c=new lt(new j(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Ks(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wd),c.material.toneMapped=_e.getTransfer(y.colorSpace)!==Le,(h!==y||u!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new le(2,2),new Re({name:"BackgroundMaterial",uniforms:Ks(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=_e.getTransfer(y.colorSpace)!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(zc,D0(r)),e.buffers.color.setClear(zc.r,zc.g,zc.b,_,s)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:x}}function cv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(C,D,N,L,B){let G=!1,q=u(C,L,N,D);s!==q&&(s=q,c(s.object)),G=d(C,L,N,B),G&&p(C,L,N,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(C,D,N,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(C){return r.bindVertexArray(C)}function h(C){return r.deleteVertexArray(C)}function u(C,D,N,L){let B=L.wireframe===!0,G=n[D.id];G===void 0&&(G={},n[D.id]=G);let q=C.isInstancedMesh===!0?C.id:0,rt=G[q];rt===void 0&&(rt={},G[q]=rt);let X=rt[N.id];X===void 0&&(X={},rt[N.id]=X);let Q=X[B];return Q===void 0&&(Q=f(l()),X[B]=Q),Q}function f(C){let D=[],N=[],L=[];for(let B=0;B<e;B++)D[B]=0,N[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:C,attributes:{},index:null}}function d(C,D,N,L){let B=s.attributes,G=D.attributes,q=0,rt=N.getAttributes();for(let X in rt)if(rt[X].location>=0){let tt=B[X],Ft=G[X];if(Ft===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Ft=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Ft=C.instanceColor)),tt===void 0||tt.attribute!==Ft||Ft&&tt.data!==Ft.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function p(C,D,N,L){let B={},G=D.attributes,q=0,rt=N.getAttributes();for(let X in rt)if(rt[X].location>=0){let tt=G[X];tt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));let Ft={};Ft.attribute=tt,tt&&tt.data&&(Ft.data=tt.data),B[X]=Ft,q++}s.attributes=B,s.attributesNum=q,s.index=L}function g(){let C=s.newAttributes;for(let D=0,N=C.length;D<N;D++)C[D]=0}function m(C){x(C,0)}function x(C,D){let N=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;N[C]=1,L[C]===0&&(r.enableVertexAttribArray(C),L[C]=1),B[C]!==D&&(r.vertexAttribDivisor(C,D),B[C]=D)}function v(){let C=s.newAttributes,D=s.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==C[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function _(C,D,N,L,B,G,q){q===!0?r.vertexAttribIPointer(C,D,N,B,G):r.vertexAttribPointer(C,D,N,L,B,G)}function y(C,D,N,L){g();let B=L.attributes,G=N.getAttributes(),q=D.defaultAttributeValues;for(let rt in G){let X=G[rt];if(X.location>=0){let Q=B[rt];if(Q===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){let tt=Q.normalized,Ft=Q.itemSize,Nt=t.get(Q);if(Nt===void 0)continue;let Ee=Nt.buffer,fe=Nt.type,ye=Nt.bytesPerElement,$=fe===r.INT||fe===r.UNSIGNED_INT||Q.gpuType===tc;if(Q.isInterleavedBufferAttribute){let et=Q.data,vt=et.stride,Jt=Q.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<X.locationSize;It++)x(X.location+It,et.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<X.locationSize;It++)m(X.location+It);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let It=0;It<X.locationSize;It++)_(X.location+It,Ft/X.locationSize,fe,tt,vt*ye,(Jt+Ft/X.locationSize*It)*ye,$)}else{if(Q.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)x(X.location+et,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let et=0;et<X.locationSize;et++)_(X.location+et,Ft/X.locationSize,fe,tt,Ft*ye,Ft/X.locationSize*et*ye,$)}}else if(q!==void 0){let tt=q[rt];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(X.location,tt);break;case 3:r.vertexAttrib3fv(X.location,tt);break;case 4:r.vertexAttrib4fv(X.location,tt);break;default:r.vertexAttrib1fv(X.location,tt)}}}}v()}function M(){T();for(let C in n){let D=n[C];for(let N in D){let L=D[N];for(let B in L){let G=L[B];for(let q in G)h(G[q].object),delete G[q];delete L[B]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let N in D){let L=D[N];for(let B in L){let G=L[B];for(let q in G)h(G[q].object),delete G[q];delete L[B]}}delete n[C.id]}function w(C){for(let D in n){let N=n[D];for(let L in N){let B=N[L];if(B[C.id]===void 0)continue;let G=B[C.id];for(let q in G)h(G[q].object),delete G[q];delete B[C.id]}}}function S(C){for(let D in n){let N=n[D],L=C.isInstancedMesh===!0?C.id:0,B=N[L];if(B!==void 0){for(let G in B){let q=B[G];for(let rt in q)h(q[rt].object),delete q[rt];delete B[G]}delete N[L],Object.keys(N).length===0&&delete n[D]}}}function T(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function hv(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function uv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Xn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let S=w===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Un&&w!==ni&&!S&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:M,samples:b}}function fv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new kn,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,_=v*4,y=x.clippingState||null;l.value=y,y=h(p,f,_,d);for(let M=0;M!==_;++M)y[M]=e[M];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let _=0,y=d;_!==g;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var $r=4,dv=6,pv=20,mv=256,ma=new Bi,sd=new Xt,G0=null,k0=0,V0=0,W0=!1,gv=new I,js=new I,Jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=gv}=s;G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),V0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(G0,k0,V0),this._renderer.xr.enabled=W0,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),V0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ln,format:Xn,colorSpace:bo,depthBuffer:!1},i=rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xv(s)),this._blurMaterial=yv(s,t,e),this._ggxMaterial=vv(s,t,e)}return i}_compileMaterial(t){let e=new lt(new ve,t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,i,s){let l=new vn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new j,new Ie({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,x=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,x=!0):(m.color.copy(sd),x=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let M=this._cubeSize;Yr(i,y*M,_>2?M:0,M,M),u.setRenderTarget(i),x&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===As||t.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-$r?n-p+$r:0),x=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Yr(s,m,x,3*g,2*g),i.setRenderTarget(s),i.render(a,ma),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Yr(t,m,x,3*g,2*g),i.setRenderTarget(t),i.render(a,ma)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-$r?i-this._lodMax+$r:0),f=4*(this._cubeSize-h);Yr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,ma)}};function xv(r){let t=[],e=[],n=r,i=r-$r+1+dv;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let x=0;x<u;x++){let v=x%3*2/3-1,_=x>2?0:-1,y=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];p.set(y,d*f*x);for(let M=0;M<f;M++){let b=h[M*2]*2-1,w=h[M*2+1]*2-1;x===0?js.set(1,w,b):x===1?js.set(-b,1,-w):x===2?js.set(-b,w,1):x===3?js.set(-1,w,-b):x===4?js.set(-b,-1,w):js.set(b,w,-1),js.toArray(g,(x*f+M)*d)}}let m=new ve;m.setAttribute("position",new ke(p,d)),m.setAttribute("outputDirection",new ke(g,d)),e.push(new lt(m,null)),n>$r&&n--}return{lodMeshes:e,sizeLods:t}}function rd(r,t,e){let n=new Xe(r,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function vv(r,t,e){return new Re({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function yv(r,t,e){return new Re({name:"SphericalGaussianBlur",defines:{SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function od(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ad(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gc=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Io(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new j(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:fn});s.uniforms.tEquirect.value=e;let o=new lt(i,s),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Rn),new Yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function _v(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Kl||d===jl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let g=new Gc(p.height);return g.fromEquirectangularTexture(r,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Kl||d===jl,g=d===As||d===Js;if(p||g){let m=e.get(f),x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Jr(r)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new Jr(r)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Kl?f.mapping=As:d===jl&&(f.mapping=Js),f}function l(f){let d=0,p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Sv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Hs("WebGLRenderer: "+n+" extension not supported."),i}}}function Mv(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(d!==null){let v=d.array;g=d.version;for(let _=0,y=v.length;_<y;_+=3){let M=v[_+0],b=v[_+1],w=v[_+2];f.push(M,b,b,w,w,M)}}else{let v=p.array;g=p.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let M=_+0,b=_+1,w=_+2;f.push(M,b,b,w,w,M)}}let m=new(p.count>=65535?Ao:Ro)(f,1);m.version=g;let x=s.get(u);x&&t.remove(x),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bv(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let g=0;for(let m=0;m<d;m++)g+=f[m];e.update(g,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ev(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tv(r,t,e){let n=new WeakMap,i=new je;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),g===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*M*4*u),w=new wo(b,y,M,u);w.type=ni,w.needsUpdate=!0;let S=_*4;for(let A=0;A<u;A++){let C=m[A],D=x[A],N=v[A],L=y*M*4*A;for(let B=0;B<C.count;B++){let G=B*S;d===!0&&(i.fromBufferAttribute(C,B),b[L+G+0]=i.x,b[L+G+1]=i.y,b[L+G+2]=i.z,b[L+G+3]=0),p===!0&&(i.fromBufferAttribute(D,B),b[L+G+4]=i.x,b[L+G+5]=i.y,b[L+G+6]=i.z,b[L+G+7]=0),g===!0&&(i.fromBufferAttribute(N,B),b[L+G+8]=i.x,b[L+G+9]=i.y,b[L+G+10]=i.z,b[L+G+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new J(y,M)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wv(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Rv={[ta]:"LINEAR_TONE_MAPPING",[ea]:"REINHARD_TONE_MAPPING",[na]:"CINEON_TONE_MAPPING",[Rs]:"ACES_FILMIC_TONE_MAPPING",[sa]:"AGX_TONE_MAPPING",[ra]:"NEUTRAL_TONE_MAPPING",[ia]:"CUSTOM_TONE_MAPPING"};function Av(r,t,e,n,i,s){let o=new Xe(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ve;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));let h=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new lt(c,h),f=new Bi(-1,1,1,-1,0,1),d=null,p=null,g=!1,m,x=null,v=[],_=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let b=0;b<v.length;b++){let w=v[b];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){v=y,_=v.length>0&&v[0].isRenderPass===!0;let M=o.width,b=o.height;v.length>0&&a===null&&(a=new Xe(M,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(M,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let S=v[w];S.setSize&&S.setSize(M,b)}},this.begin=function(y,M){if(g||y.toneMapping===gi&&v.length===0)return!1;if(x=M,M!==null){let b=M.width,w=M.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return _===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=gi,!0},this.hasRenderPass=function(){return _},this.end=function(y,M){y.toneMapping=m,g=!0;let b=o,w=a;for(let S=0;S<v.length;S++){let T=v[S];T.enabled!==!1&&(T.render(y,w,b,M),T.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},_e.getTransfer(d)===Le&&(h.defines.SRGB_TRANSFER="");let S=Rv[p];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(x),y.render(u,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rd=new Ln,Y0=new Ui(1,1),Ad=new wo,Cd=new Al,Pd=new Io,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function Kr(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=ld[i];if(s===void 0&&(s=new Float32Array(i),ld[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Sn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Mn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Vc(r,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Cv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2fv(this.addr,t),Mn(e,t)}}function Iv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;r.uniform3fv(this.addr,t),Mn(e,t)}}function Dv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4fv(this.addr,t),Mn(e,t)}}function Lv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;fd.set(n),r.uniformMatrix2fv(this.addr,!1,fd),Mn(e,n)}}function Nv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;ud.set(n),r.uniformMatrix3fv(this.addr,!1,ud),Mn(e,n)}}function Uv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,n))return;hd.set(n),r.uniformMatrix4fv(this.addr,!1,hd),Mn(e,n)}}function Fv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2iv(this.addr,t),Mn(e,t)}}function Ov(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;r.uniform3iv(this.addr,t),Mn(e,t)}}function zv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4iv(this.addr,t),Mn(e,t)}}function Hv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2uiv(this.addr,t),Mn(e,t)}}function kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;r.uniform3uiv(this.addr,t),Mn(e,t)}}function Vv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4uiv(this.addr,t),Mn(e,t)}}function Wv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Y0.compareFunction=e.isReversedDepthBuffer()?Oc:Bc,s=Y0):s=Rd,e.setTexture2D(t||s,i)}function Xv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cd,i)}function qv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pd,i)}function Yv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ad,i)}function $v(r){switch(r){case 5126:return Cv;case 35664:return Pv;case 35665:return Iv;case 35666:return Dv;case 35674:return Lv;case 35675:return Nv;case 35676:return Uv;case 5124:case 35670:return Fv;case 35667:case 35671:return Bv;case 35668:case 35672:return Ov;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Gv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Zv(r,t){r.uniform1fv(this.addr,t)}function Jv(r,t){let e=Kr(t,this.size,2);r.uniform2fv(this.addr,e)}function Kv(r,t){let e=Kr(t,this.size,3);r.uniform3fv(this.addr,e)}function jv(r,t){let e=Kr(t,this.size,4);r.uniform4fv(this.addr,e)}function Qv(r,t){let e=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ty(r,t){let e=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ey(r,t){let e=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ny(r,t){r.uniform1iv(this.addr,t)}function iy(r,t){r.uniform2iv(this.addr,t)}function sy(r,t){r.uniform3iv(this.addr,t)}function ry(r,t){r.uniform4iv(this.addr,t)}function oy(r,t){r.uniform1uiv(this.addr,t)}function ay(r,t){r.uniform2uiv(this.addr,t)}function ly(r,t){r.uniform3uiv(this.addr,t)}function cy(r,t){r.uniform4uiv(this.addr,t)}function hy(r,t,e){let n=this.cache,i=t.length,s=Vc(e,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Mn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Y0:o=Rd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function uy(r,t,e){let n=this.cache,i=t.length,s=Vc(e,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Mn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Cd,s[o])}function fy(r,t,e){let n=this.cache,i=t.length,s=Vc(e,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Mn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pd,s[o])}function dy(r,t,e){let n=this.cache,i=t.length,s=Vc(e,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Mn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ad,s[o])}function py(r){switch(r){case 5126:return Zv;case 35664:return Jv;case 35665:return Kv;case 35666:return jv;case 35674:return Qv;case 35675:return ty;case 35676:return ey;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return dy}}var $0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$v(e.type)}},Z0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=py(e.type)}},J0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},X0=/(\w+)(\])?(\[|\.)?/g;function dd(r,t){r.seq.push(t),r.map[t.id]=t}function my(r,t,e){let n=r.name,i=n.length;for(X0.lastIndex=0;;){let s=X0.exec(n),o=X0.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){dd(e,c===void 0?new $0(a,r,t):new Z0(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new J0(a),dd(e,u)),e=u}}}var Zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);my(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function pd(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var gy=37297,xy=0;function vy(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var md=new ue;function yy(r){_e._getMatrix(md,_e.workingColorSpace,r);let t=`mat3( ${md.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(r)){case Eo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gd(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+vy(r.getShaderSource(t),a)}else return s}function _y(r,t){let e=yy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sy={[ta]:"Linear",[ea]:"Reinhard",[na]:"Cineon",[Rs]:"ACESFilmic",[sa]:"AgX",[ra]:"Neutral",[ia]:"Custom"};function My(r,t){let e=Sy[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hc=new I;function by(){_e.getLuminanceCoefficients(Hc);let r=Hc.x.toFixed(4),t=Hc.y.toFixed(4),e=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Ty(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xa(r){return r!==""}function xd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function K0(r){return r.replace(Ry,Cy)}var Ay=new Map;function Cy(r,t){let e=xe[t];if(e===void 0){let n=Ay.get(t);if(n!==void 0)e=xe[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return K0(e)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(r){return r.replace(Py,Iy)}function Iy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _d(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dy={[Ys]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function Ly(r){return Dy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ny={[As]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function Uy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ny[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fy={[Js]:"ENVMAP_MODE_REFRACTION"};function By(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Fy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Oy={[_0]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function zy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Oy[r.combine]||"ENVMAP_BLENDING_NONE"}function Hy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gy(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ly(e),c=Uy(e),h=By(e),u=zy(e),f=Hy(e),d=Ey(e),p=Ty(s),g=i.createProgram(),m,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xa).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xa).join(`
`),x.length>0&&(x+=`
`)):(m=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),x=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?xe.tonemapping_pars_fragment:"",e.toneMapping!==gi?My("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,_y("linearToOutputTexel",e.outputColorSpace),by(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),o=K0(o),o=xd(o,e),o=vd(o,e),a=K0(a),a=xd(a,e),a=vd(a,e),o=yd(o),a=yd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",e.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=v+m+o,y=v+x+a,M=pd(i,i.VERTEX_SHADER,_),b=pd(i,i.FRAGMENT_SHADER,y);i.attachShader(g,M),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(C){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(b)||"",B=D.trim(),G=N.trim(),q=L.trim(),rt=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,b);else{let Q=gd(i,M,"vertex"),tt=gd(i,b,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+Q+`
`+tt)}else B!==""?re("WebGLProgram: Program Info Log:",B):(G===""||q==="")&&(X=!1);X&&(C.diagnostics={runnable:rt,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:x}})}i.deleteShader(M),i.deleteShader(b),S=new Zr(i,g),T=wy(i,g)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,gy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}var ky=0,j0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Q0(t),e.set(t,n)),n}},Q0=class{constructor(t){this.id=ky++,this.code=t,this.usedTimes=0}};function Vy(r){return r===Ps||r===fa||r===da}function Wy(r,t,e,n,i,s){let o=new Nr,a=new j0,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,T,A,C,D,N){let L=C.fog,B=D.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,rt=t.get(S.envMap||G,q),X=rt&&rt.mapping===oa?rt.image.height:null,Q=d[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&re("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ft=tt!==void 0?tt.length:0,Nt=0;B.morphAttributes.position!==void 0&&(Nt=1),B.morphAttributes.normal!==void 0&&(Nt=2),B.morphAttributes.color!==void 0&&(Nt=3);let Ee,fe,ye,$;if(Q){let Ye=Gi[Q];Ee=Ye.vertexShader,fe=Ye.fragmentShader}else{Ee=S.vertexShader,fe=S.fragmentShader;let Ye=a.getVertexShaderStage(S),Fe=a.getFragmentShaderStage(S);a.update(S,Ye,Fe),ye=Ye.id,$=Fe.id}let et=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Jt=D.isInstancedMesh===!0,It=D.isBatchedMesh===!0,ne=!!S.map,Ce=!!S.matcap,it=!!rt,ct=!!S.aoMap,ft=!!S.lightMap,pt=!!S.bumpMap&&S.wireframe===!1,xt=!!S.normalMap,te=!!S.displacementMap,Kt=!!S.emissiveMap,ie=!!S.metalnessMap,oe=!!S.roughnessMap,F=S.anisotropy>0,Ae=S.clearcoat>0,me=S.dispersion>0,P=S.retroreflectivity>0,E=S.iridescence>0,H=S.sheen>0,k=S.transmission>0,Z=F&&!!S.anisotropyMap,mt=Ae&&!!S.clearcoatMap,yt=Ae&&!!S.clearcoatNormalMap,K=Ae&&!!S.clearcoatRoughnessMap,st=E&&!!S.iridescenceMap,Mt=E&&!!S.iridescenceThicknessMap,qt=H&&!!S.sheenColorMap,St=H&&!!S.sheenRoughnessMap,_t=!!S.specularMap,zt=!!S.specularColorMap,jt=!!S.specularIntensityMap,ae=k&&!!S.transmissionMap,z=k&&!!S.thicknessMap,Tt=!!S.gradientMap,nt=!!S.alphaMap,wt=S.alphaTest>0,Dt=!!S.alphaHash,at=!!S.extensions,Qt=gi;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Qt=r.toneMapping);let Wt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ee,fragmentShader:fe,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:It,batchingColor:It&&D._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&D.instanceColor!==null,instancingMorph:Jt&&D.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:Ce,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:X,aoMap:ct,lightMap:ft,bumpMap:pt,normalMap:xt,displacementMap:te,emissiveMap:Kt,normalMapObjectSpace:xt&&S.normalMapType===Of,normalMapTangentSpace:xt&&S.normalMapType===pa,packedNormalMap:xt&&S.normalMapType===pa&&Vy(S.normalMap.format),metalnessMap:ie,roughnessMap:oe,anisotropy:F,anisotropyMap:Z,clearcoat:Ae,clearcoatMap:mt,clearcoatNormalMap:yt,clearcoatRoughnessMap:K,dispersion:me,retroreflection:P,iridescence:E,iridescenceMap:st,iridescenceThicknessMap:Mt,sheen:H,sheenColorMap:qt,sheenRoughnessMap:St,specularMap:_t,specularColorMap:zt,specularIntensityMap:jt,transmission:k,transmissionMap:ae,thicknessMap:z,gradientMap:Tt,opaque:S.transparent===!1&&S.blending===ws&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:Dt,combine:S.combine,mapUv:ne&&p(S.map.channel),aoMapUv:ct&&p(S.aoMap.channel),lightMapUv:ft&&p(S.lightMap.channel),bumpMapUv:pt&&p(S.bumpMap.channel),normalMapUv:xt&&p(S.normalMap.channel),displacementMapUv:te&&p(S.displacementMap.channel),emissiveMapUv:Kt&&p(S.emissiveMap.channel),metalnessMapUv:ie&&p(S.metalnessMap.channel),roughnessMapUv:oe&&p(S.roughnessMap.channel),anisotropyMapUv:Z&&p(S.anisotropyMap.channel),clearcoatMapUv:mt&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:yt&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(S.sheenRoughnessMap.channel),specularMapUv:_t&&p(S.specularMap.channel),specularColorMapUv:zt&&p(S.specularColorMap.channel),specularIntensityMapUv:jt&&p(S.specularIntensityMap.channel),transmissionMapUv:ae&&p(S.transmissionMap.channel),thicknessMapUv:z&&p(S.thicknessMap.channel),alphaMapUv:nt&&p(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||F),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ne||nt),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Nt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Le,decodeVideoTextureEmissive:Kt&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:at&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&S.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)T.push(A),T.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function _(S){let T=d[S.type],A;if(T){let C=Gi[T];A=An.clone(C.uniforms)}else A=S.uniforms;return A}function y(S,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new Gy(r,T,S,i),c.push(A),h.set(T,A)),A}function M(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function Xy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function qy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Sd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Md(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,g,m,x){let v=r[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:x},r[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=x),t++,v}function l(f,d,p,g,m,x,v){v.reversedDepth===!0&&(m=-m);let _=a(f,d,p,g,m,x);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):e.push(_)}function c(f,d,p,g,m,x){let v=a(f,d,p,g,m,x);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||qy),n.length>1&&n.sort(d||Sd),i.length>1&&i.sort(d||Sd)}function u(){for(let f=t,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function Yy(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Md,r.set(n,[o])):i>=s.length?(o=new Md,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function $y(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Zy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Jy=0;function Ky(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jy(r){let t=new $y,e=Zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new $t,o=new $t;function a(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,g=0,m=0,x=0,v=0,_=0,y=0,M=0,b=0,w=0,S=0,T=0,A=0;c.sort(Ky);for(let D=0,N=c.length;D<N;D++){let L=c[D],B=L.color,G=L.intensity,q=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ps?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],G);A++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,tt=e.get(L);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=rt;let Ft=Q.getViewportCount();for(let Nt=0;Nt<Ft;Nt++)n.sunShadowMatrix[g+Nt]=Q.getMatrix(Nt),n.sunShadowCascade[g+Nt]=Q._cascadeData[Nt];g+=Ft,p++}n.sun[d]=X,d++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,tt=e.get(L);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(G),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;let Q=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=rt,w++}v++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=X,_++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Q=L.shadow,tt=e.get(L);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[x]=tt,n.pointShadowMap[x]=rt,n.pointShadowMatrix[x]=L.shadow.matrix,b++}n.point[x]=X,x++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(G),X.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[y]=X,y++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==x||C.spotLength!==v||C.rectAreaLength!==_||C.hemiLength!==y||C.numSunShadows!==p||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==S||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=_,n.point.length=x,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.sunLength=d,C.directionalLength=m,C.pointLength=x,C.spotLength=v,C.rectAreaLength=_,C.hemiLength=y,C.numSunShadows=p,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=S,C.numLightProbes=A,n.version=Jy++)}function l(c,h){let u=0,f=0,d=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let y=c[v];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),f++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),d++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function bd(r){let t=new jy(r),e=[],n=[],i=[];function s(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Qy(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new bd(r),t.set(i,[a])):s>=o.length?(a=new bd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`,n2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ed=new $t,ga=new I,q0=new I;function s2(r,t,e){let n=new Or,i=new J,s=new J,o=new je,a=new Ul,l=new Fl,c={},h=e.maxTextureSize,u={[Ts]:un,[un]:Ts,[Ue]:Ue},f=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:t2,fragmentShader:e2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ve;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let x=this.type;this.render=function(b,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===yf&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let T=r.getRenderTarget(),A=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),D=r.state;D.setBlending(fn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=x!==this.type;N&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let G=b[L],q=G.shadow;if(q===void 0){re("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let rt=q.getFrameExtents();i.multiply(rt),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,q.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||N===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Xr){if(G.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xe(i.x,i.y,{format:Ps,type:ln,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new Ui(i.x,i.y,ni),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=Pi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn}else G.isPointLight?(q.map=new Gc(i.x),q.map.depthTexture=new Cl(i.x,xi)):(q.map=new Xe(i.x,i.y),q.map.depthTexture=new Ui(i.x,i.y,xi)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=Pi,this.type===Ys?(q.map.depthTexture.compareFunction=X?Oc:Bc,q.map.depthTexture.minFilter=Rn,q.map.depthTexture.magFilter=Rn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();G.isPointLight!==!0&&q.updateMatrices(G,S);for(let tt=0;tt<Q;tt++){let Ft=q.getCamera(tt);if(G.isPointLight){let Nt=q.camera,Ee=q.matrix,fe=G.distance||Nt.far;fe!==Nt.far&&(Nt.far=fe,Nt.updateProjectionMatrix()),ga.setFromMatrixPosition(G.matrixWorld),Nt.position.copy(ga),q0.copy(Nt.position),q0.add(n2[tt]),Nt.up.copy(i2[tt]),Nt.lookAt(q0),Nt.updateMatrixWorld(),Ee.makeTranslation(-ga.x,-ga.y,-ga.z),Ed.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ed,Nt.coordinateSystem,Nt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(q.map),r.clear());let Nt=q.getViewport(tt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),D.viewport(o)}n=q.getFrustum(tt),y(w,S,Ft,G,this.type)}q.isPointLightShadow!==!0&&this.type===Xr&&v(q,S),q.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(T,A,C)};function v(b,w){let S=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xe(i.x,i.y,{format:Ps,type:ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,S,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,S,d,g,null)}function _(b,w,S,T){let A=null,C=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)A=C;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=A.uuid,N=w.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let B=L[N];B===void 0&&(B=A.clone(),L[N]=B,w.addEventListener("dispose",M)),A=B}if(A.visible=w.visible,A.wireframe=w.wireframe,T===Xr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=S}return A}function y(b,w,S,T,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Xr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let N=t.update(b),L=b.material;if(Array.isArray(L)){let B=N.groups;for(let G=0,q=B.length;G<q;G++){let rt=B[G],X=L[rt.materialIndex];if(X&&X.visible){let Q=_(b,X,T,A);b.onBeforeShadow(r,b,w,S,N,Q,rt),r.renderBufferDirect(S,null,N,Q,b,rt),b.onAfterShadow(r,b,w,S,N,Q,rt)}}}else if(L.visible){let B=_(b,L,T,A);b.onBeforeShadow(r,b,w,S,N,B,null),r.renderBufferDirect(S,null,N,B,b,null),b.onAfterShadow(r,b,w,S,N,B,null)}}let D=b.children;for(let N=0,L=D.length;N<L;N++)y(D[N],w,S,T,A)}function M(b){b.target.removeEventListener("dispose",M);for(let S in c){let T=c[S],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function r2(r,t){function e(){let z=!1,Tt=new je,nt=null,wt=new je(0,0,0,0);return{setMask:function(Dt){nt!==Dt&&!z&&(r.colorMask(Dt,Dt,Dt,Dt),nt=Dt)},setLocked:function(Dt){z=Dt},setClear:function(Dt,at,Qt,Wt,Ye){Ye===!0&&(Dt*=Wt,at*=Wt,Qt*=Wt),Tt.set(Dt,at,Qt,Wt),wt.equals(Tt)===!1&&(r.clearColor(Dt,at,Qt,Wt),wt.copy(Tt))},reset:function(){z=!1,nt=null,wt.set(-1,0,0,0)}}}function n(){let z=!1,Tt=!1,nt=null,wt=null,Dt=null;return{setReversed:function(at){if(Tt!==at){let Qt=t.get("EXT_clip_control");at?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=at;let Wt=Dt;Dt=null,this.setClear(Wt)}},getReversed:function(){return Tt},setTest:function(at){at?et(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function(at){nt!==at&&!z&&(r.depthMask(at),nt=at)},setFunc:function(at){if(Tt&&(at=Zf[at]),wt!==at){switch(at){case gl:r.depthFunc(r.NEVER);break;case xl:r.depthFunc(r.ALWAYS);break;case vl:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case yl:r.depthFunc(r.EQUAL);break;case _l:r.depthFunc(r.GEQUAL);break;case Sl:r.depthFunc(r.GREATER);break;case Ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=at}},setLocked:function(at){z=at},setClear:function(at){Dt!==at&&(Dt=at,Tt&&(at=1-at),r.clearDepth(at))},reset:function(){z=!1,nt=null,wt=null,Dt=null,Tt=!1}}}function i(){let z=!1,Tt=null,nt=null,wt=null,Dt=null,at=null,Qt=null,Wt=null,Ye=null;return{setTest:function(Fe){z||(Fe?et(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(Fe){Tt!==Fe&&!z&&(r.stencilMask(Fe),Tt=Fe)},setFunc:function(Fe,hi,Ti){(nt!==Fe||wt!==hi||Dt!==Ti)&&(r.stencilFunc(Fe,hi,Ti),nt=Fe,wt=hi,Dt=Ti)},setOp:function(Fe,hi,Ti){(at!==Fe||Qt!==hi||Wt!==Ti)&&(r.stencilOp(Fe,hi,Ti),at=Fe,Qt=hi,Wt=Ti)},setLocked:function(Fe){z=Fe},setClear:function(Fe){Ye!==Fe&&(r.clearStencil(Fe),Ye=Fe)},reset:function(){z=!1,Tt=null,nt=null,wt=null,Dt=null,at=null,Qt=null,Wt=null,Ye=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],g=null,m=!1,x=null,v=null,_=null,y=null,M=null,b=null,w=null,S=new Xt(0,0,0),T=0,A=!1,C=null,D=null,N=null,L=null,B=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,rt=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=rt>=2);let Q=null,tt={},Ft=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),Ee=new je().fromArray(Ft),fe=new je().fromArray(Nt);function ye(z,Tt,nt,wt){let Dt=new Uint8Array(4),at=r.createTexture();r.bindTexture(z,at),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<nt;Qt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Tt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return at}let $={};$[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(r.DEPTH_TEST),o.setFunc(Cr),pt(!1),xt(m0),et(r.CULL_FACE),ct(fn);function et(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function vt(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Jt(z,Tt){return f[z]!==Tt?(r.bindFramebuffer(z,Tt),f[z]=Tt,z===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Tt),z===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function It(z,Tt){let nt=p,wt=!1;if(z){nt=d.get(Tt),nt===void 0&&(nt=[],d.set(Tt,nt));let Dt=z.textures;if(nt.length!==Dt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let at=0,Qt=Dt.length;at<Qt;at++)nt[at]=r.COLOR_ATTACHMENT0+at;nt.length=Dt.length,wt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,wt=!0);wt&&r.drawBuffers(nt)}function ne(z){return g!==z?(r.useProgram(z),g=z,!0):!1}let Ce={[ei]:r.FUNC_ADD,[_f]:r.FUNC_SUBTRACT,[Sf]:r.FUNC_REVERSE_SUBTRACT};Ce[Mf]=r.MIN,Ce[bf]=r.MAX;let it={[Zs]:r.ZERO,[Ef]:r.ONE,[Tf]:r.SRC_COLOR,[v0]:r.SRC_ALPHA,[Cf]:r.SRC_ALPHA_SATURATE,[Qo]:r.DST_COLOR,[jo]:r.DST_ALPHA,[wf]:r.ONE_MINUS_SRC_COLOR,[y0]:r.ONE_MINUS_SRC_ALPHA,[Af]:r.ONE_MINUS_DST_COLOR,[Rf]:r.ONE_MINUS_DST_ALPHA,[Pf]:r.CONSTANT_COLOR,[If]:r.ONE_MINUS_CONSTANT_COLOR,[Df]:r.CONSTANT_ALPHA,[Lf]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(z,Tt,nt,wt,Dt,at,Qt,Wt,Ye,Fe){if(z===fn){m===!0&&(vt(r.BLEND),m=!1);return}if(m===!1&&(et(r.BLEND),m=!0),z!==Jl){if(z!==x||Fe!==A){if((v!==ei||M!==ei)&&(r.blendEquation(r.FUNC_ADD),v=ei,M=ei),Fe)switch(z){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $s:r.blendFunc(r.ONE,r.ONE);break;case g0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case x0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:se("WebGLState: Invalid blending: ",z);break}else switch(z){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case g0:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x0:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",z);break}_=null,y=null,b=null,w=null,S.set(0,0,0),T=0,x=z,A=Fe}return}Dt=Dt||Tt,at=at||nt,Qt=Qt||wt,(Tt!==v||Dt!==M)&&(r.blendEquationSeparate(Ce[Tt],Ce[Dt]),v=Tt,M=Dt),(nt!==_||wt!==y||at!==b||Qt!==w)&&(r.blendFuncSeparate(it[nt],it[wt],it[at],it[Qt]),_=nt,y=wt,b=at,w=Qt),(Wt.equals(S)===!1||Ye!==T)&&(r.blendColor(Wt.r,Wt.g,Wt.b,Ye),S.copy(Wt),T=Ye),x=z,A=!1}function ft(z,Tt){z.side===Ue?vt(r.CULL_FACE):et(r.CULL_FACE);let nt=z.side===un;Tt&&(nt=!nt),pt(nt),z.blending===ws&&z.transparent===!1?ct(fn):ct(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let wt=z.stencilWrite;a.setTest(wt),wt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(z){C!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),C=z)}function xt(z){z!==xf?(et(r.CULL_FACE),z!==D&&(z===m0?r.cullFace(r.BACK):z===vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),D=z}function te(z){z!==N&&(q&&r.lineWidth(z),N=z)}function Kt(z,Tt,nt){z?(et(r.POLYGON_OFFSET_FILL),(L!==Tt||B!==nt)&&(L=Tt,B=nt,o.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,nt))):vt(r.POLYGON_OFFSET_FILL)}function ie(z){z?et(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function oe(z){z===void 0&&(z=r.TEXTURE0+G-1),Q!==z&&(r.activeTexture(z),Q=z)}function F(z,Tt,nt){nt===void 0&&(Q===null?nt=r.TEXTURE0+G-1:nt=Q);let wt=tt[nt];wt===void 0&&(wt={type:void 0,texture:void 0},tt[nt]=wt),(wt.type!==z||wt.texture!==Tt)&&(Q!==nt&&(r.activeTexture(nt),Q=nt),r.bindTexture(z,Tt||$[z]),wt.type=z,wt.texture=Tt)}function Ae(){let z=tt[Q];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function me(){try{r.compressedTexImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function E(){try{r.texSubImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function H(){try{r.texSubImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function k(){try{r.compressedTexSubImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function mt(){try{r.texStorage2D(...arguments)}catch(z){se("WebGLState:",z)}}function yt(){try{r.texStorage3D(...arguments)}catch(z){se("WebGLState:",z)}}function K(){try{r.texImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function st(){try{r.texImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function Mt(z){return u[z]!==void 0?u[z]:r.getParameter(z)}function qt(z,Tt){u[z]!==Tt&&(r.pixelStorei(z,Tt),u[z]=Tt)}function St(z){Ee.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function _t(z){fe.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function zt(z,Tt){let nt=c.get(Tt);nt===void 0&&(nt=new WeakMap,c.set(Tt,nt));let wt=nt.get(z);wt===void 0&&(wt=r.getUniformBlockIndex(Tt,z.name),nt.set(z,wt))}function jt(z,Tt){let wt=c.get(Tt).get(z);l.get(Tt)!==wt&&(r.uniformBlockBinding(Tt,wt,z.__bindingPointIndex),l.set(Tt,wt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,tt={},f={},d=new WeakMap,p=[],g=null,m=!1,x=null,v=null,_=null,y=null,M=null,b=null,w=null,S=new Xt(0,0,0),T=0,A=!1,C=null,D=null,N=null,L=null,B=null,Ee.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:vt,bindFramebuffer:Jt,drawBuffers:It,useProgram:ne,setBlending:ct,setMaterial:ft,setFlipSided:pt,setCullFace:xt,setLineWidth:te,setPolygonOffset:Kt,setScissorTest:ie,activeTexture:oe,bindTexture:F,unbindTexture:Ae,compressedTexImage2D:me,compressedTexImage3D:P,texImage2D:K,texImage3D:st,pixelStorei:qt,getParameter:Mt,updateUBOMapping:zt,uniformBlockBinding:jt,texStorage2D:mt,texStorage3D:yt,texSubImage2D:E,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:St,viewport:_t,reset:ae}}function o2(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Ir("canvas")}function m(P,E,H){let k=1,Z=me(P);if((Z.width>H||Z.height>H)&&(k=H/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let mt=Math.floor(k*Z.width),yt=Math.floor(k*Z.height);f===void 0&&(f=g(mt,yt));let K=E?g(mt,yt):f;return K.width=mt,K.height=yt,K.getContext("2d").drawImage(P,0,0,mt,yt),re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+mt+"x"+yt+")."),K}else return"data"in P&&re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function x(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,E,H,k,Z,mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let yt;k&&(yt=t.get("EXT_texture_norm16"),yt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===r.RED&&(H===r.FLOAT&&(K=r.R32F),H===r.HALF_FLOAT&&(K=r.R16F),H===r.UNSIGNED_BYTE&&(K=r.R8),H===r.UNSIGNED_SHORT&&yt&&(K=yt.R16_EXT),H===r.SHORT&&yt&&(K=yt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.R8UI),H===r.UNSIGNED_SHORT&&(K=r.R16UI),H===r.UNSIGNED_INT&&(K=r.R32UI),H===r.BYTE&&(K=r.R8I),H===r.SHORT&&(K=r.R16I),H===r.INT&&(K=r.R32I)),E===r.RG&&(H===r.FLOAT&&(K=r.RG32F),H===r.HALF_FLOAT&&(K=r.RG16F),H===r.UNSIGNED_BYTE&&(K=r.RG8),H===r.UNSIGNED_SHORT&&yt&&(K=yt.RG16_EXT),H===r.SHORT&&yt&&(K=yt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RG8UI),H===r.UNSIGNED_SHORT&&(K=r.RG16UI),H===r.UNSIGNED_INT&&(K=r.RG32UI),H===r.BYTE&&(K=r.RG8I),H===r.SHORT&&(K=r.RG16I),H===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGB8UI),H===r.UNSIGNED_SHORT&&(K=r.RGB16UI),H===r.UNSIGNED_INT&&(K=r.RGB32UI),H===r.BYTE&&(K=r.RGB8I),H===r.SHORT&&(K=r.RGB16I),H===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),H===r.UNSIGNED_INT&&(K=r.RGBA32UI),H===r.BYTE&&(K=r.RGBA8I),H===r.SHORT&&(K=r.RGBA16I),H===r.INT&&(K=r.RGBA32I)),E===r.RGB&&(H===r.UNSIGNED_SHORT&&yt&&(K=yt.RGB16_EXT),H===r.SHORT&&yt&&(K=yt.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),E===r.RGBA){let st=mt?Eo:_e.getTransfer(Z);H===r.FLOAT&&(K=r.RGBA32F),H===r.HALF_FLOAT&&(K=r.RGBA16F),H===r.UNSIGNED_BYTE&&(K=st===Le?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&yt&&(K=yt.RGBA16_EXT),H===r.SHORT&&yt&&(K=yt.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(P,E){let H;return P?E===null||E===xi||E===Cs?H=r.DEPTH24_STENCIL8:E===ni?H=r.DEPTH32F_STENCIL8:E===qr&&(H=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xi||E===Cs?H=r.DEPTH_COMPONENT24:E===ni?H=r.DEPTH_COMPONENT32F:E===qr&&(H=r.DEPTH_COMPONENT16),H}function b(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){let E=P.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function S(P){let E=P.target;E.removeEventListener("dispose",S),C(E)}function T(P){let E=n.get(P);if(E.__webglInit===void 0)return;let H=P.source,k=d.get(H);if(k){let Z=k[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(P),Object.keys(k).length===0&&d.delete(H)}n.remove(P)}function A(P){let E=n.get(P);r.deleteTexture(E.__webglTexture);let H=P.source,k=d.get(H);delete k[E.__cacheKey],o.memory.textures--}function C(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(E.__webglFramebuffer[k]))for(let Z=0;Z<E.__webglFramebuffer[k].length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[k][Z]);else r.deleteFramebuffer(E.__webglFramebuffer[k]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[k])}else{if(Array.isArray(E.__webglFramebuffer))for(let k=0;k<E.__webglFramebuffer.length;k++)r.deleteFramebuffer(E.__webglFramebuffer[k]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let k=0;k<E.__webglColorRenderbuffer.length;k++)E.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[k]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=P.textures;for(let k=0,Z=H.length;k<Z;k++){let mt=n.get(H[k]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(H[k])}n.remove(P)}let D=0;function N(){D=0}function L(){return D}function B(P){D=P}function G(){let P=D;return P>=i.maxTextures&&re("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function q(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function rt(P,E){let H=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let k=P.image;if(k===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(H,P,E);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function X(P,E){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){vt(H,P,E);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function Q(P,E){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){vt(H,P,E);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function tt(P,E){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Jt(H,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}let Ft={[de]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[bl]:r.MIRRORED_REPEAT},Nt={[hn]:r.NEAREST,[Ff]:r.NEAREST_MIPMAP_NEAREST,[aa]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Ql]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},Ee={[Hf]:r.NEVER,[Xf]:r.ALWAYS,[Gf]:r.LESS,[Bc]:r.LEQUAL,[kf]:r.EQUAL,[Oc]:r.GEQUAL,[Vf]:r.GREATER,[Wf]:r.NOTEQUAL};function fe(P,E){if(E.type===ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Ql||E.magFilter===aa||E.magFilter===Oi||E.minFilter===Rn||E.minFilter===Ql||E.minFilter===aa||E.minFilter===Oi)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Ft[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Ft[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Ft[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Nt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Nt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==aa&&E.minFilter!==Oi||E.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ye(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let k=E.source,Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));let mt=q(E);if(mt!==P.__cacheKey){Z[mt]===void 0&&(Z[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[mt].usedTimes++;let yt=Z[P.__cacheKey];yt!==void 0&&(Z[P.__cacheKey].usedTimes--,yt.usedTimes===0&&A(E)),P.__cacheKey=mt,P.__webglTexture=Z[mt].texture}return H}function $(P,E,H){return Math.floor(Math.floor(P/H)/E)}function et(P,E,H,k){let mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,H,k,E.data);else{mt.sort((qt,St)=>qt.start-St.start);let yt=0;for(let qt=1;qt<mt.length;qt++){let St=mt[yt],_t=mt[qt],zt=St.start+St.count,jt=$(_t.start,E.width,4),ae=$(St.start,E.width,4);_t.start<=zt+1&&jt===ae&&$(_t.start+_t.count-1,E.width,4)===jt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++yt,mt[yt]=_t)}mt.length=yt+1;let K=e.getParameter(r.UNPACK_ROW_LENGTH),st=e.getParameter(r.UNPACK_SKIP_PIXELS),Mt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let qt=0,St=mt.length;qt<St;qt++){let _t=mt[qt],zt=Math.floor(_t.start/4),jt=Math.ceil(_t.count/4),ae=zt%E.width,z=Math.floor(zt/E.width),Tt=jt,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,ae,z,Tt,nt,H,k,E.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,K),e.pixelStorei(r.UNPACK_SKIP_PIXELS,st),e.pixelStorei(r.UNPACK_SKIP_ROWS,Mt)}}function vt(P,E,H){let k=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(k=r.TEXTURE_3D);let Z=ye(P,E),mt=E.source;e.bindTexture(k,P.__webglTexture,r.TEXTURE0+H);let yt=n.get(mt);if(mt.version!==yt.__version||Z===!0){if(e.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let nt=_e.getPrimaries(_e.workingColorSpace),wt=E.colorSpace===vi?null:_e.getPrimaries(E.colorSpace),Dt=E.colorSpace===vi||nt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let st=m(E.image,!1,i.maxTextureSize);st=Ae(E,st);let Mt=s.convert(E.format,E.colorSpace),qt=s.convert(E.type),St=y(E.internalFormat,Mt,qt,E.normalized,E.colorSpace,E.isVideoTexture);fe(k,E);let _t,zt=E.mipmaps,jt=E.isVideoTexture!==!0,ae=yt.__version===void 0||Z===!0,z=mt.dataReady,Tt=b(E,st);if(E.isDepthTexture)St=M(E.format===zi,E.type),ae&&(jt?e.texStorage2D(r.TEXTURE_2D,1,St,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,St,st.width,st.height,0,Mt,qt,null));else if(E.isDataTexture)if(zt.length>0){jt&&ae&&e.texStorage2D(r.TEXTURE_2D,Tt,St,zt[0].width,zt[0].height);for(let nt=0,wt=zt.length;nt<wt;nt++)_t=zt[nt],jt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,_t.width,_t.height,Mt,qt,_t.data):e.texImage2D(r.TEXTURE_2D,nt,St,_t.width,_t.height,0,Mt,qt,_t.data);E.generateMipmaps=!1}else jt?(ae&&e.texStorage2D(r.TEXTURE_2D,Tt,St,st.width,st.height),z&&et(E,st,Mt,qt)):e.texImage2D(r.TEXTURE_2D,0,St,st.width,st.height,0,Mt,qt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,St,zt[0].width,zt[0].height,st.depth);for(let nt=0,wt=zt.length;nt<wt;nt++)if(_t=zt[nt],E.format!==Xn)if(Mt!==null)if(jt){if(z)if(E.layerUpdates.size>0){let Dt=U0(_t.width,_t.height,E.format,E.type);for(let at of E.layerUpdates){let Qt=_t.data.subarray(at*Dt/_t.data.BYTES_PER_ELEMENT,(at+1)*Dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,at,_t.width,_t.height,1,Mt,Qt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,Mt,_t.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,St,_t.width,_t.height,st.depth,0,_t.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,Mt,qt,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,St,_t.width,_t.height,st.depth,0,Mt,qt,_t.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{jt&&ae&&e.texStorage2D(r.TEXTURE_2D,Tt,St,zt[0].width,zt[0].height);for(let nt=0,wt=zt.length;nt<wt;nt++)_t=zt[nt],E.format!==Xn?Mt!==null?jt?z&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,St,_t.width,_t.height,0,_t.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,_t.width,_t.height,Mt,qt,_t.data):e.texImage2D(r.TEXTURE_2D,nt,St,_t.width,_t.height,0,Mt,qt,_t.data)}else if(E.isDataArrayTexture)if(jt){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,St,st.width,st.height,st.depth),z)if(E.layerUpdates.size>0){let nt=U0(st.width,st.height,E.format,E.type);for(let wt of E.layerUpdates){let Dt=st.data.subarray(wt*nt/st.data.BYTES_PER_ELEMENT,(wt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,wt,st.width,st.height,1,Mt,qt,Dt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,qt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,st.width,st.height,st.depth,0,Mt,qt,st.data);else if(E.isData3DTexture)jt?(ae&&e.texStorage3D(r.TEXTURE_3D,Tt,St,st.width,st.height,st.depth),z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,qt,st.data)):e.texImage3D(r.TEXTURE_3D,0,St,st.width,st.height,st.depth,0,Mt,qt,st.data);else if(E.isFramebufferTexture){if(ae)if(jt)e.texStorage2D(r.TEXTURE_2D,Tt,St,st.width,st.height);else{let nt=st.width,wt=st.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,St,nt,wt,0,Mt,qt,null),nt>>=1,wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),u.add(E),nt.onpaint=wt=>{let Dt=wt.changedElements;for(let at of u)Dt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,st);else{let Dt=r.RGBA,at=r.RGBA,Qt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Dt,at,Qt,st)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(zt.length>0){if(jt&&ae){let nt=me(zt[0]);e.texStorage2D(r.TEXTURE_2D,Tt,St,nt.width,nt.height)}for(let nt=0,wt=zt.length;nt<wt;nt++)_t=zt[nt],jt?z&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Mt,qt,_t):e.texImage2D(r.TEXTURE_2D,nt,St,Mt,qt,_t);E.generateMipmaps=!1}else if(jt){if(ae){let nt=me(st);e.texStorage2D(r.TEXTURE_2D,Tt,St,nt.width,nt.height)}z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,qt,st)}else e.texImage2D(r.TEXTURE_2D,0,St,Mt,qt,st);x(E)&&v(k),yt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Jt(P,E,H){if(E.image.length!==6)return;let k=ye(P,E),Z=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);let mt=n.get(Z);if(Z.version!==mt.__version||k===!0){e.activeTexture(r.TEXTURE0+H);let yt=_e.getPrimaries(_e.workingColorSpace),K=E.colorSpace===vi?null:_e.getPrimaries(E.colorSpace),st=E.colorSpace===vi||yt===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let at=0;at<6;at++)!Mt&&!qt?St[at]=m(E.image[at],!0,i.maxCubemapSize):St[at]=qt?E.image[at].image:E.image[at],St[at]=Ae(E,St[at]);let _t=St[0],zt=s.convert(E.format,E.colorSpace),jt=s.convert(E.type),ae=y(E.internalFormat,zt,jt,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,Tt=mt.__version===void 0||k===!0,nt=Z.dataReady,wt=b(E,_t);fe(r.TEXTURE_CUBE_MAP,E);let Dt;if(Mt){z&&Tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ae,_t.width,_t.height);for(let at=0;at<6;at++){Dt=St[at].mipmaps;for(let Qt=0;Qt<Dt.length;Qt++){let Wt=Dt[Qt];E.format!==Xn?zt!==null?z?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt,0,0,Wt.width,Wt.height,zt,Wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt,ae,Wt.width,Wt.height,0,Wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt,0,0,Wt.width,Wt.height,zt,jt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt,ae,Wt.width,Wt.height,0,zt,jt,Wt.data)}}}else{if(Dt=E.mipmaps,z&&Tt){Dt.length>0&&wt++;let at=me(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ae,at.width,at.height)}for(let at=0;at<6;at++)if(qt){z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,St[at].width,St[at].height,zt,jt,St[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ae,St[at].width,St[at].height,0,zt,jt,St[at].data);for(let Qt=0;Qt<Dt.length;Qt++){let Ye=Dt[Qt].image[at].image;z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt+1,0,0,Ye.width,Ye.height,zt,jt,Ye.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt+1,ae,Ye.width,Ye.height,0,zt,jt,Ye.data)}}else{z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,zt,jt,St[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ae,zt,jt,St[at]);for(let Qt=0;Qt<Dt.length;Qt++){let Wt=Dt[Qt];z?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt+1,0,0,zt,jt,Wt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Qt+1,ae,zt,jt,Wt.image[at])}}}x(E)&&v(r.TEXTURE_CUBE_MAP),mt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function It(P,E,H,k,Z,mt){let yt=s.convert(H.format,H.colorSpace),K=s.convert(H.type),st=y(H.internalFormat,yt,K,H.normalized,H.colorSpace),Mt=n.get(E),qt=n.get(H);if(qt.__renderTarget=E,!Mt.__hasExternalTextures){let St=Math.max(1,E.width>>mt),_t=Math.max(1,E.height>>mt);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,mt,st,St,_t,E.depth,0,yt,K,null):e.texImage2D(Z,mt,st,St,_t,0,yt,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),oe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,Z,qt.__webglTexture,0,ie(E)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,Z,qt.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(P,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){let k=E.depthTexture,Z=k&&k.isDepthTexture?k.type:null,mt=M(E.stencilBuffer,Z),yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie(E),mt,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie(E),mt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,P)}else{let k=E.textures;for(let Z=0;Z<k.length;Z++){let mt=k[Z],yt=s.convert(mt.format,mt.colorSpace),K=s.convert(mt.type),st=y(mt.internalFormat,yt,K,mt.normalized,mt.colorSpace);oe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie(E),st,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie(E),st,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,st,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,E,H){let k=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(E.depthTexture);if(Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(r.TEXTURE_CUBE_MAP,E.depthTexture);let Mt=s.convert(E.depthTexture.format),qt=s.convert(E.depthTexture.type),St;E.depthTexture.format===Pi?St=r.DEPTH_COMPONENT24:E.depthTexture.format===zi&&(St=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,E.width,E.height,0,Mt,qt,null)}}else rt(E.depthTexture,0);let mt=Z.__webglTexture,yt=ie(E),K=k?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,st=E.depthTexture.format===zi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pi)oe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,K,mt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,st,K,mt,0);else if(E.depthTexture.format===zi)oe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,K,mt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,st,K,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){let E=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let k=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),k){let Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=k}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let k=0;k<6;k++)Ce(E.__webglFramebuffer[k],P,k);else{let k=P.texture.mipmaps;k&&k.length>0?Ce(E.__webglFramebuffer[0],P,0):Ce(E.__webglFramebuffer,P,0)}else if(H){E.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[k]),E.__webglDepthbuffer[k]===void 0)E.__webglDepthbuffer[k]=r.createRenderbuffer(),ne(E.__webglDepthbuffer[k],P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,mt)}}else{let k=P.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ne(E.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,mt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(P,E,H){let k=n.get(P);E!==void 0&&It(k.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&it(P)}function ft(P){let E=P.texture,H=n.get(P),k=n.get(E);P.addEventListener("dispose",S);let Z=P.textures,mt=P.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=E.version,o.memory.textures++),mt){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let st=0;st<E.mipmaps.length;st++)H.__webglFramebuffer[K][st]=r.createFramebuffer()}else H.__webglFramebuffer[K]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)H.__webglFramebuffer[K]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(yt)for(let K=0,st=Z.length;K<st;K++){let Mt=n.get(Z[K]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&oe(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let st=Z[K];H.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let Mt=s.convert(st.format,st.colorSpace),qt=s.convert(st.type),St=y(st.internalFormat,Mt,qt,st.normalized,st.colorSpace,P.isXRRenderTarget===!0),_t=ie(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,St,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,H.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),fe(r.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)It(H.__webglFramebuffer[K][st],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,st);else It(H.__webglFramebuffer[K],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);x(E)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let K=0,st=Z.length;K<st;K++){let Mt=Z[K],qt=n.get(Mt),St=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(St,qt.__webglTexture),fe(St,Mt),It(H.__webglFramebuffer,P,Mt,r.COLOR_ATTACHMENT0+K,St,0),x(Mt)&&v(St)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),fe(K,E),E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)It(H.__webglFramebuffer[st],P,E,r.COLOR_ATTACHMENT0,K,st);else It(H.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,K,0);x(E)&&v(K),e.unbindTexture()}P.depthBuffer&&it(P)}function pt(P){let E=P.textures;for(let H=0,k=E.length;H<k;H++){let Z=E[H];if(x(Z)){let mt=_(P),yt=n.get(Z).__webglTexture;e.bindTexture(mt,yt),v(mt),e.unbindTexture()}}}let xt=[],te=[];function Kt(P){if(P.samples>0){if(oe(P)===!1){let E=P.textures,H=P.width,k=P.height,Z=r.COLOR_BUFFER_BIT,mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(P),K=E.length>1;if(K)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let st=P.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);let qt=n.get(E[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,H,k,0,0,H,k,Z,r.NEAREST),l===!0&&(xt.length=0,te.length=0,xt.push(r.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(mt),te.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);let qt=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ie(P){return Math.min(i.maxSamples,P.samples)}function oe(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ae(P,E){let H=P.colorSpace,k=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==bo&&H!==vi&&(_e.getTransfer(H)===Le?(k!==Xn||Z!==Un)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",H)),E}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=It,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function a2(r,t){function e(n,i=vi){let s,o=_e.getTransfer(i);if(n===Un)return r.UNSIGNED_BYTE;if(n===ec)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===E0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===T0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===M0)return r.BYTE;if(n===b0)return r.SHORT;if(n===qr)return r.UNSIGNED_SHORT;if(n===tc)return r.INT;if(n===xi)return r.UNSIGNED_INT;if(n===ni)return r.FLOAT;if(n===ln)return r.HALF_FLOAT;if(n===w0)return r.ALPHA;if(n===R0)return r.RGB;if(n===Xn)return r.RGBA;if(n===Pi)return r.DEPTH_COMPONENT;if(n===zi)return r.DEPTH_STENCIL;if(n===ic)return r.RED;if(n===sc)return r.RED_INTEGER;if(n===Ps)return r.RG;if(n===rc)return r.RG_INTEGER;if(n===oc)return r.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===Le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===dc||n===pc||n===mc||n===fa||n===gc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uc||n===fc)return o===Le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return s.COMPRESSED_R11_EAC;if(n===mc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fa)return s.COMPRESSED_RG11_EAC;if(n===gc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===vc||n===yc||n===_c||n===Sc||n===Mc||n===bc||n===Ec||n===Tc||n===wc||n===Rc||n===Ac||n===Cc||n===Pc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Dc||n===Lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ic)return o===Le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===da||n===Fc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Do(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:l2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends Ii{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",m=new tu,x={},v=e.getContextAttributes(),_=null,y=null,M=[],b=[],w=new J,S=null,T=null,A=new vn;A.viewport=new je;let C=new vn;C.viewport=new je;let D=[A,C],N=new $l,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new Ur,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new Ur,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new Ur,M[$]=et),et.getHandSpace()};function G($){let et=b.indexOf($.inputSource);if(et===-1)return;let vt=M[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||o),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",rt);for(let $=0;$<M.length;$++){let et=b[$];et!==null&&(b[$]=null,M[$].disconnect(et))}L=null,B=null,m.reset();for(let $ in x)delete x[$];if(t.setRenderTarget(_),d=null,f=null,u=null,i=null,y=null,ye.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Jt=null,It=null;v.depth&&(It=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?zi:Pi,Jt=v.stencil?Cs:xi);let ne={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ne),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Xe(f.textureWidth,f.textureHeight,{format:Xn,type:Un,depthTexture:new Ui(f.textureWidth,f.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xe(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt($){for(let et=0;et<$.removed.length;et++){let vt=$.removed[et],Jt=b.indexOf(vt);Jt>=0&&(b[Jt]=null,M[Jt].disconnect(vt))}for(let et=0;et<$.added.length;et++){let vt=$.added[et],Jt=b.indexOf(vt);if(Jt===-1){for(let ne=0;ne<M.length;ne++)if(ne>=b.length){b.push(vt),Jt=ne;break}else if(b[ne]===null){b[ne]=vt,Jt=ne;break}if(Jt===-1)break}let It=M[Jt];It&&It.connect(vt)}}let X=new I,Q=new I;function tt($,et,vt){X.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);let Jt=X.distanceTo(Q),It=et.projectionMatrix.elements,ne=vt.projectionMatrix.elements,Ce=It[14]/(It[10]-1),it=It[14]/(It[10]+1),ct=(It[9]+1)/It[5],ft=(It[9]-1)/It[5],pt=(It[8]-1)/It[0],xt=(ne[8]+1)/ne[0],te=Ce*pt,Kt=Ce*xt,ie=Jt/(-pt+xt),oe=ie*-pt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(oe),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let F=Ce+ie,Ae=it+ie,me=te-oe,P=Kt+(Jt-oe),E=ct*it/Ae*F,H=ft*it/Ae*F;$.projectionMatrix.makePerspective(me,P,E,H,F,Ae),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ft($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),N.near=C.near=A.near=et,N.far=C.far=A.far=vt,(L!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,B=N.far),N.layers.mask=$.layers.mask|6,A.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Jt=$.parent,It=N.cameras;Ft(N,Jt);for(let ne=0;ne<It.length;ne++)Ft(It[ne],Jt);It.length===2?tt(N,A,C):N.projectionMatrix.copy(A.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Nt($,N,Jt)};function Nt($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function($){return x[$]};let Ee=null;function fe($,et){if(h=et.getViewerPose(c||o),p=et,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Jt=!1;vt.length!==N.cameras.length&&(N.cameras.length=0,Jt=!0);for(let it=0;it<vt.length;it++){let ct=vt[it],ft=null;if(d!==null)ft=d.getViewport(ct);else{let xt=u.getViewSubImage(f,ct);ft=xt.viewport,it===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let pt=D[it];pt===void 0&&(pt=new vn,pt.layers.enable(it),pt.viewport=new je,D[it]=pt),pt.matrix.fromArray(ct.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ct.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ft.x,ft.y,ft.width,ft.height),it===0&&(N.matrix.copy(pt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Jt===!0&&N.cameras.push(pt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let it=u.getDepthInformation(vt[0]);it&&it.isValid&&it.texture&&m.init(it,i.renderState)}if(It&&It.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<vt.length;it++){let ct=vt[it].camera;if(ct){let ft=x[ct];ft||(ft=new Do,x[ct]=ft);let pt=u.getCameraImage(ct);ft.sourceTexture=pt}}}}for(let vt=0;vt<M.length;vt++){let Jt=b[vt],It=M[vt];Jt!==null&&It!==void 0&&It.update(Jt,et,c||o)}Ee&&Ee($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let ye=new Td;ye.setAnimationLoop(fe),this.setAnimationLoop=function($){Ee=$},this.dispose=function(){}}},h2=new $t,Id=new ue;Id.set(-1,0,0,0,1,0,0,0,1);function u2(r,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,D0(r)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,v,_,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(m,x):x.isMeshLambertMaterial?(s(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(m,x),u(m,x)):x.isMeshPhongMaterial?(s(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(m,x),f(m,x),x.isMeshPhysicalMaterial&&d(m,x,y)):x.isMeshMatcapMaterial?(s(m,x),p(m,x)):x.isMeshDepthMaterial?s(m,x):x.isMeshDistanceMaterial?(s(m,x),g(m,x)):x.isMeshNormalMaterial?s(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,_):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===un&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===un&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=t.get(x),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(h2.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Id),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,_){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=_*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function d(m,x,v){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===un&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let v=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function f2(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let b=M.program;n.uniformBlockBinding(y,b)}function c(y,M){let b=i[y.id];b===void 0&&(m(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",v));let w=M.program;n.updateUBOMapping(y,w);let S=t.render.frame;s[y.id]!==S&&(f(y),s[y.id]=S)}function h(y){let M=u();y.__bindingPointIndex=M;let b=r.createBuffer(),w=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,w,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=i[y.id],b=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let S=0,T=b.length;S<T;S++){let A=b[S];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)d(A[C],S,C,w);else d(A,S,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,M,b,w){if(g(y,M,b,w)===!0){let S=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let C=0;C<T.length;C++){let D=T[C],N=x(D);p(D,y.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,S,y.__data)}}function p(y,M,b){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,b)}function g(y,M,b,w){let S=y.value,T=M+"_"+b;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:ArrayBuffer.isView(S)?w[T]=S.slice():w[T]=S.clone(),!0;{let A=w[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function m(y){let M=y.uniforms,b=0,w=16;for(let T=0,A=M.length;T<A;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let D=0,N=C.length;D<N;D++){let L=C[D],B=Array.isArray(L.value)?L.value:[L.value];for(let G=0,q=B.length;G<q;G++){let rt=B[G],X=x(rt),Q=b%w,tt=Q%X.boundary,Ft=Q+tt;b+=tt,Ft!==0&&w-Ft<X.storage&&(b+=w-Ft),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=X.storage}}}let S=b%w;return S>0&&(b+=w-S),y.__size=b,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):re("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}var d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function p2(){return Hi===null&&(Hi=new ns(d2,16,16,Ps,ln),Hi.name="DFG_LUT",Hi.minFilter=Rn,Hi.magFilter=Rn,Hi.wrapS=Vn,Hi.wrapT=Vn,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var va=class{constructor(t={}){let{canvas:e=qf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=d,m=new Set([oc,rc,sc]),x=new Set([Un,xi,qr,Cs,ec,nc]),v=new Uint32Array(4),_=new Int32Array(4),y=new I,M=null,b=null,w=[],S=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,D=null,N=null,L=null,B=null;this._outputColorSpace=we;let G=0,q=0,rt=null,X=-1,Q=null,tt=new je,Ft=new je,Nt=null,Ee=new Xt(0),fe=0,ye=e.width,$=e.height,et=1,vt=null,Jt=null,It=new je(0,0,ye,$),ne=new je(0,0,ye,$),Ce=!1,it=new Or,ct=!1,ft=!1,pt=new $t,xt=new I,te=new je,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function oe(){return rt===null?et:1}let F=n;function Ae(R,O){return e.getContext(R,O)}let me,P,E,H,k,Z,mt,yt,K,st,Mt,qt,St,_t,zt,jt,ae,z,Tt,nt,wt,Dt,at;try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ye,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",hi,!1),F===null){let O="webgl2";if(F=Ae(O,R),F===null)throw Ae(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(R){throw e.removeEventListener("webglcontextlost",Ye,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),se("WebGLRenderer: "+R.message),R}function Qt(){me=new Sv(F),me.init(),wt=new a2(F,me),P=new uv(F,me,t,wt),E=new r2(F,me),P.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),N=F.createFramebuffer(),L=F.createFramebuffer(),B=F.createFramebuffer(),H=new Ev(F),k=new Xy,Z=new o2(F,me,E,k,P,wt,H),mt=new _v(A),yt=new wg(F),Dt=new cv(F,yt),K=new Mv(F,yt,H,Dt),st=new wv(F,K,yt,Dt,H),z=new Tv(F,P,Z),zt=new fv(k),Mt=new Wy(A,mt,me,P,Dt,zt),qt=new u2(A,k),St=new Yy,_t=new Qy(me),ae=new lv(A,mt,E,st,p,l),jt=new s2(A,st,P),at=new f2(F,H,P,E),Tt=new hv(F,me,H),nt=new bv(F,me,H),H.programs=Mt.programs,A.capabilities=P,A.extensions=me,A.properties=k,A.renderLists=St,A.shadowMap=jt,A.state=E,A.info=H}g!==Un&&(T=new Av(g,e.width,e.height,a,i,s));let Wt=new eu(A,F);this.xr=Wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(R){R!==void 0&&(et=R,this.setSize(ye,$,!1))},this.getSize=function(R){return R.set(ye,$)},this.setSize=function(R,O,Y=!0){if(Wt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,$=O,e.width=Math.floor(R*et),e.height=Math.floor(O*et),Y===!0&&(e.style.width=R+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(ye*et,$*et).floor()},this.setDrawingBufferSize=function(R,O,Y){ye=R,$=O,et=Y,e.width=Math.floor(R*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,R,O)},this.setEffects=function(R){if(g===Un){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let O=0;O<R.length;O++)if(R[O].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(tt)},this.getViewport=function(R){return R.copy(It)},this.setViewport=function(R,O,Y,V){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,O,Y,V),E.viewport(tt.copy(It).multiplyScalar(et).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,O,Y,V){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,O,Y,V),E.scissor(Ft.copy(ne).multiplyScalar(et).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){E.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){Jt=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,Y=!0){let V=0;if(R){let W=!1;if(rt!==null){let Ct=rt.texture.format;W=m.has(Ct)}if(W){let Ct=rt.texture.type,Bt=x.has(Ct),At=ae.getClearColor(),Ht=ae.getClearAlpha(),Yt=At.r,ge=At.g,Me=At.b;Bt?(v[0]=Yt,v[1]=ge,v[2]=Me,v[3]=Ht,F.clearBufferuiv(F.COLOR,0,v)):(_[0]=Yt,_[1]=ge,_[2]=Me,_[3]=Ht,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}O&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ye,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),ae.dispose(),St.dispose(),_t.dispose(),k.dispose(),mt.dispose(),st.dispose(),Dt.dispose(),at.dispose(),Mt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Ru),Wt.removeEventListener("sessionend",Au),Us.stop()};function Ye(R){R.preventDefault(),To("WebGLRenderer: Context Lost."),C=!0}function Fe(){To("WebGLRenderer: Context Restored."),C=!1;let R=H.autoReset,O=jt.enabled,Y=jt.autoUpdate,V=jt.needsUpdate,W=jt.type;Qt(),H.autoReset=R,jt.enabled=O,jt.autoUpdate=Y,jt.needsUpdate=V,jt.type=W}function hi(R){se("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ti(R){let O=R.target;O.removeEventListener("dispose",Ti),rm(O)}function rm(R){om(R),k.remove(R)}function om(R){let O=k.get(R).programs;O!==void 0&&(O.forEach(function(Y){Mt.releaseProgram(Y)}),R.isShaderMaterial&&Mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,Y,V,W,Ct){O===null&&(O=Kt);let Bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,At=cm(R,O,Y,V,W);E.setMaterial(V,Bt);let Ht=Y.index,Yt=1;if(V.wireframe===!0){if(Ht=K.getWireframeAttribute(Y),Ht===void 0)return;Yt=2}let ge=Y.drawRange,Me=Y.attributes.position,Gt=ge.start*Yt,Be=(ge.start+ge.count)*Yt;Ct!==null&&(Gt=Math.max(Gt,Ct.start*Yt),Be=Math.min(Be,(Ct.start+Ct.count)*Yt)),Ht!==null?(Gt=Math.max(Gt,0),Be=Math.min(Be,Ht.count)):Me!=null&&(Gt=Math.max(Gt,0),Be=Math.min(Be,Me.count));let dn=Be-Gt;if(dn<0||dn===1/0)return;Dt.setup(W,V,At,Y,Ht);let Je,We=Tt;if(Ht!==null&&(Je=yt.get(Ht),We=nt,We.setIndex(Je)),W.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*oe()),We.setMode(F.LINES)):We.setMode(F.TRIANGLES);else if(W.isLine){let Pn=V.linewidth;Pn===void 0&&(Pn=1),E.setLineWidth(Pn*oe()),W.isLineSegments?We.setMode(F.LINES):W.isLineLoop?We.setMode(F.LINE_LOOP):We.setMode(F.LINE_STRIP)}else W.isPoints?We.setMode(F.POINTS):W.isSprite&&We.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(me.get("WEBGL_multi_draw"))We.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Pn=W._multiDrawStarts,Ut=W._multiDrawCounts,zn=W._multiDrawCount,Pe=Ht?yt.get(Ht).bytesPerElement:1,Qn=k.get(V).currentProgram.getUniforms();for(let wi=0;wi<zn;wi++)Qn.setValue(F,"_gl_DrawID",wi),We.render(Pn[wi]/Pe,Ut[wi])}else if(W.isInstancedMesh)We.renderInstances(Gt,dn,W.count);else if(Y.isInstancedBufferGeometry){let Pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ut=Math.min(Y.instanceCount,Pn);We.renderInstances(Gt,dn,Ut)}else We.render(Gt,dn)};function wu(R,O,Y,V){D!==null&&R.isNodeMaterial&&D.setObject(V,R),ct===!0&&zt.setState(R,Y,!1),R.transparent===!0&&R.side===Ue&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,Ga(R,O,V),R.side=Ts,R.needsUpdate=!0,Ga(R,O,V),R.side=Ue):Ga(R,O,V)}this.compile=function(R,O,Y=null){Y===null&&(Y=R),D!==null&&D.renderStart(R,O,Y),b=_t.get(Y),b.init(O),S.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),R!==Y&&R.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),ft=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ft),ct===!0&&zt.setGlobalState(this.clippingPlanes,O),D!==null&&jt.render(b.state.shadowsArray,Y,O);let V=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ct=W.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){let At=Ct[Bt];wu(At,Y,O,W),V.add(At)}else wu(Ct,Y,O,W),V.add(Ct)}),b=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(R,O,Y=null){let V=this.compile(R,O,Y);return new Promise(W=>{function Ct(){if(V.forEach(function(Bt){let Ht=k.get(Bt).currentProgram;(Ht===void 0||Ht.isReady())&&V.delete(Bt)}),V.size===0){W(R);return}setTimeout(Ct,10)}me.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ah=null;function am(R){Ah&&Ah(R)}function Ru(){Us.stop()}function Au(){Us.start()}let Us=new Td;Us.setAnimationLoop(am),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(R){Ah=R,Wt.setAnimationLoop(R),R===null?Us.stop():Us.start()},Wt.addEventListener("sessionstart",Ru),Wt.addEventListener("sessionend",Au),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,O);let Y=Wt.enabled===!0&&Wt.isPresenting===!0,V=T!==null&&(rt===null||Y)&&T.begin(A,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(O),O=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,O,rt),b=_t.get(R,S.length),b.init(O),b.state.textureUnits=Z.getTextureUnits(),S.push(b),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(pt,pi,O.reversedDepth),ft=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ft),M=St.get(R,w.length),M.init(),w.push(M),Wt.enabled===!0&&Wt.isPresenting===!0){let Bt=A.xr.getDepthSensingMesh();Bt!==null&&Ch(Bt,O,-1/0,A.sortObjects)}Ch(R,O,0,A.sortObjects),M.finish(),D!==null&&D.updateLights(b.state.lightsArray),A.sortObjects===!0&&M.sort(vt,Jt),ie=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,ie&&ae.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&zt.beginShadows();let W=b.state.shadowsArray;if(jt.render(W,R,O),ct===!0&&zt.endShadows(),(V&&T.hasRenderPass())===!1){let Bt=M.opaque,At=M.transmissive;if(b.setupLights(),O.isArrayCamera){let Ht=O.cameras;if(At.length>0)for(let Yt=0,ge=Ht.length;Yt<ge;Yt++){let Me=Ht[Yt];Pu(Bt,At,R,Me)}ie&&ae.render(R);for(let Yt=0,ge=Ht.length;Yt<ge;Yt++){let Me=Ht[Yt];Cu(M,R,Me,Me.viewport)}}else At.length>0&&Pu(Bt,At,R,O),ie&&ae.render(R),Cu(M,R,O)}rt!==null&&q===0&&(Z.updateMultisampleRenderTarget(rt),Z.updateRenderTargetMipmap(rt)),V&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,O),Dt.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(b=S[S.length-1],Z.setTextureUnits(b.state.textureUnits),ct===!0&&zt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function Ch(R,O,Y,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(it)){V&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);let Bt=st.update(R),At=R.material;At.visible&&M.push(R,Bt,At,Y,te.z,null,O)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(it))){let Bt=st.update(R),At=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),te.copy(Bt.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){let Ht=Bt.groups;for(let Yt=0,ge=Ht.length;Yt<ge;Yt++){let Me=Ht[Yt],Gt=At[Me.materialIndex];Gt&&Gt.visible&&M.push(R,Bt,Gt,Y,te.z,Me,O)}}else At.visible&&M.push(R,Bt,At,Y,te.z,null,O)}}let Ct=R.children;for(let Bt=0,At=Ct.length;Bt<At;Bt++)Ch(Ct[Bt],O,Y,V)}function Cu(R,O,Y,V){let{opaque:W,transmissive:Ct,transparent:Bt}=R;b.setupLightsView(Y),ct===!0&&zt.setGlobalState(A.clippingPlanes,Y),V&&E.viewport(tt.copy(V)),W.length>0&&Ha(W,O,Y),Ct.length>0&&Ha(Ct,O,Y),Bt.length>0&&Ha(Bt,O,Y),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Pu(R,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Gt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Xe(1,1,{generateMipmaps:!0,type:Gt?ln:Un,minFilter:Oi,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Ct=b.state.transmissionRenderTarget[V.id],Bt=V.viewport||tt;Ct.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);let At=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Yt=A.getActiveMipmapLevel();A.setRenderTarget(Ct),A.getClearColor(Ee),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),ie&&ae.render(Y);let ge=A.toneMapping;A.toneMapping=gi;let Me=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ct===!0&&zt.setGlobalState(A.clippingPlanes,V),Ha(R,Y,V),Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct),me.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Be=0,dn=O.length;Be<dn;Be++){let Je=O[Be],{object:We,geometry:Pn,material:Ut,group:zn}=Je;if(Ut.side===Ue&&We.layers.test(V.layers)){let Pe=Ut.side;Ut.side=un,Ut.needsUpdate=!0,Iu(We,Y,V,Pn,Ut,zn),Ut.side=Pe,Ut.needsUpdate=!0,Gt=!0}}Gt===!0&&(Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct))}A.setRenderTarget(At,Ht,Yt),A.setClearColor(Ee,fe),Me!==void 0&&(V.viewport=Me),A.toneMapping=ge}function Ha(R,O,Y){let V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ct=R.length;W<Ct;W++){let Bt=R[W],{object:At,geometry:Ht,group:Yt}=Bt,ge=Bt.material;ge.allowOverride===!0&&V!==null&&(ge=V),At.layers.test(Y.layers)&&Iu(At,O,Y,Ht,ge,Yt)}}function Iu(R,O,Y,V,W,Ct){D!==null&&W.isNodeMaterial&&D.setObject(R,W),R.onBeforeRender(A,O,Y,V,W,Ct),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(A,O,Y,V,R,Ct),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,A.renderBufferDirect(Y,O,V,W,R,Ct),W.side=Ts,W.needsUpdate=!0,A.renderBufferDirect(Y,O,V,W,R,Ct),W.side=Ue):A.renderBufferDirect(Y,O,V,W,R,Ct),R.onAfterRender(A,O,Y,V,W,Ct)}function Ga(R,O,Y){O.isScene!==!0&&(O=Kt);let V=k.get(R),W=b.state.lights,Ct=b.state.shadowsArray,Bt=W.state.version,At=Mt.getParameters(R,W.state,Ct,O,Y,b.state.lightProbeGridArray),Ht=Mt.getProgramCacheKey(At),Yt=V.programs;V.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let ge=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;V.envMap=mt.get(R.envMap||V.environment,ge),V.envMapRotation=V.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Ti),Yt=new Map,V.programs=Yt);let Me=Yt.get(Ht);if(Me!==void 0){if(V.currentProgram===Me&&V.lightsStateVersion===Bt)return Lu(R,At),Me}else At.uniforms=Mt.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,Y,At),R.onBeforeCompile(At,A),Me=Mt.acquireProgram(At,Ht),Yt.set(Ht,Me),V.uniforms=At.uniforms;let Gt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=zt.uniform),Lu(R,At),V.needsLights=um(R),V.lightsStateVersion=Bt,V.needsLights&&(Gt.ambientLightColor.value=W.state.ambient,Gt.lightProbe.value=W.state.probe,Gt.sunLights.value=W.state.sun,Gt.sunLightShadows.value=W.state.sunShadow,Gt.directionalLights.value=W.state.directional,Gt.directionalLightShadows.value=W.state.directionalShadow,Gt.spotLights.value=W.state.spot,Gt.spotLightShadows.value=W.state.spotShadow,Gt.rectAreaLights.value=W.state.rectArea,Gt.ltc_1.value=W.state.rectAreaLTC1,Gt.ltc_2.value=W.state.rectAreaLTC2,Gt.pointLights.value=W.state.point,Gt.pointLightShadows.value=W.state.pointShadow,Gt.hemisphereLights.value=W.state.hemi,Gt.sunShadowMatrix.value=W.state.sunShadowMatrix,Gt.sunShadowCascade.value=W.state.sunShadowCascade,Gt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Gt.spotLightMatrix.value=W.state.spotLightMatrix,Gt.spotLightMap.value=W.state.spotLightMap,Gt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Me,V.uniformsList=null,Me}function Du(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Zr.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Lu(R,O){let Y=k.get(R);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function lm(R,O){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let Y=0,V=R.length;Y<V;Y++){let W=R[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function cm(R,O,Y,V,W){O.isScene!==!0&&(O=Kt),Z.resetTextureUnits();let Ct=O.fog,Bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,At=rt===null?A.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_e.workingColorSpace,Ht=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Yt=mt.get(V.envMap||Bt,Ht),ge=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Me=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!Y.morphAttributes.position,Be=!!Y.morphAttributes.normal,dn=!!Y.morphAttributes.color,Je=gi;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Je=A.toneMapping);let We=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pn=We!==void 0?We.length:0,Ut=k.get(V),zn=b.state.lights;if(ct===!0&&(ft===!0||R!==Q)){let $e=R===Q&&V.id===X;zt.setState(V,R,$e)}let Pe=!1;V.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==zn.state.version||Ut.outputColorSpace!==At||W.isBatchedMesh&&Ut.batching===!1||!W.isBatchedMesh&&Ut.batching===!0||W.isBatchedMesh&&Ut.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ut.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ut.instancing===!1||!W.isInstancedMesh&&Ut.instancing===!0||W.isSkinnedMesh&&Ut.skinning===!1||!W.isSkinnedMesh&&Ut.skinning===!0||W.isInstancedMesh&&Ut.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ut.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ut.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ut.instancingMorph===!1&&W.morphTexture!==null||Ut.envMap!==Yt||V.fog===!0&&Ut.fog!==Ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==zt.numPlanes||Ut.numIntersection!==zt.numIntersection)||Ut.vertexAlphas!==ge||Ut.vertexTangents!==Me||Ut.morphTargets!==Gt||Ut.morphNormals!==Be||Ut.morphColors!==dn||Ut.toneMapping!==Je||Ut.morphTargetsCount!==Pn||!!Ut.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Ut.__version=V.version);let Qn=Ut.currentProgram;Pe===!0&&(Qn=Ga(V,O,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Qn,Ut));let wi=!1,cs=!1,ar=!1,He=Qn.getUniforms(),cn=Ut.uniforms;if(E.useProgram(Qn.program)&&(wi=!0,cs=!0,ar=!0),V.id!==X&&(X=V.id,cs=!0),Ut.needsLights){let $e=lm(b.state.lightProbeGridArray,W);Ut.lightProbeGrid!==$e&&(Ut.lightProbeGrid=$e,cs=!0)}if(wi||Q!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(F,"projectionMatrix",R.projectionMatrix),He.setValue(F,"viewMatrix",R.matrixWorldInverse);let us=He.map.cameraPosition;us!==void 0&&us.setValue(F,xt.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&He.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,cs=!0,ar=!0)}if(Ut.needsLights&&(zn.state.sunShadowMap.length>0&&He.setValue(F,"sunShadowMap",zn.state.sunShadowMap,Z),zn.state.directionalShadowMap.length>0&&He.setValue(F,"directionalShadowMap",zn.state.directionalShadowMap,Z),zn.state.spotShadowMap.length>0&&He.setValue(F,"spotShadowMap",zn.state.spotShadowMap,Z),zn.state.pointShadowMap.length>0&&He.setValue(F,"pointShadowMap",zn.state.pointShadowMap,Z)),W.isSkinnedMesh){He.setOptional(F,W,"bindMatrix"),He.setOptional(F,W,"bindMatrixInverse");let $e=W.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),He.setValue(F,"boneTexture",$e.boneTexture,Z))}W.isBatchedMesh&&(He.setOptional(F,W,"batchingTexture"),He.setValue(F,"batchingTexture",W._matricesTexture,Z),He.setOptional(F,W,"batchingIdTexture"),He.setValue(F,"batchingIdTexture",W._indirectTexture,Z),He.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&He.setValue(F,"batchingColorTexture",W._colorsTexture,Z));let hs=Y.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&z.update(W,Y,Qn),(cs||Ut.receiveShadow!==W.receiveShadow)&&(Ut.receiveShadow=W.receiveShadow,He.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(cn.envMapIntensity.value=O.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=p2()),cs){if(He.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&hm(cn,ar),Ct&&V.fog===!0&&qt.refreshFogUniforms(cn,Ct),qt.refreshMaterialUniforms(cn,V,et,$,b.state.transmissionRenderTarget[R.id]),Ut.needsLights&&Ut.lightProbeGrid){let $e=Ut.lightProbeGrid;cn.probesSH.value=$e.texture,cn.probesMin.value.copy($e.boundingBox.min),cn.probesMax.value.copy($e.boundingBox.max),cn.probesResolution.value.copy($e.resolution)}Zr.upload(F,Du(Ut),cn,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zr.upload(F,Du(Ut),cn,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&He.setValue(F,"center",W.center),He.setValue(F,"modelViewMatrix",W.modelViewMatrix),He.setValue(F,"normalMatrix",W.normalMatrix),He.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let $e=V.uniformsGroups;for(let us=0,lr=$e.length;us<lr;us++){let Uu=$e[us];at.update(Uu,Qn),at.bind(Uu,Qn)}}return Qn}function hm(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.sunLights.needsUpdate=O,R.sunLightShadows.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function um(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,O,Y){let V=k.get(R);V.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(R.texture).__webglTexture=O,k.get(R.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){let Y=k.get(R);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,Y=0){rt=R,G=O,q=Y;let V=null,W=!1,Ct=!1;if(R){let At=k.get(R);if(At.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(F.FRAMEBUFFER,At.__webglFramebuffer),tt.copy(R.viewport),Ft.copy(R.scissor),Nt=R.scissorTest,E.viewport(tt),E.scissor(Ft),E.setScissorTest(Nt),X=-1;return}else if(At.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(At.__hasExternalTextures)Z.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ge=R.depthTexture;if(At.__boundDepthTexture!==ge){if(ge!==null&&k.has(ge)&&(R.width!==ge.image.width||R.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}let Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);let Yt=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[O])?V=Yt[O][Y]:V=Yt[O],W=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?V=k.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?V=Yt[Y]:V=Yt,tt.copy(R.viewport),Ft.copy(R.scissor),Nt=R.scissorTest}else tt.copy(It).multiplyScalar(et).floor(),Ft.copy(ne).multiplyScalar(et).floor(),Nt=Ce;if(Y!==0&&(V=N),E.bindFramebuffer(F.FRAMEBUFFER,V)&&E.drawBuffers(R,V),E.viewport(tt),E.scissor(Ft),E.setScissorTest(Nt),W){let At=k.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,Y)}else if(Ct){let At=O;for(let Ht=0;Ht<R.textures.length;Ht++){let Yt=k.get(R.textures[Ht]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ht,Yt.__webglTexture,Y,At)}}else if(R!==null&&Y!==0){let At=k.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,Y)}X=-1};function Nu(R){let O=k.get(R);return(O.__readFormat!==R.format||O.__readType!==R.type)&&(O.__readFormat=R.format,O.__readType=R.type,O.__formatReadable=P.textureFormatReadable(R.format),O.__typeReadable=P.textureTypeReadable(R.type)),O}this.readRenderTargetPixels=function(R,O,Y,V,W,Ct,Bt,At=0){if(!(R&&R.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){E.bindFramebuffer(F.FRAMEBUFFER,Ht);try{let Yt=R.textures[At],ge=Yt.format,Me=Yt.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+At);let Gt=Nu(Yt);if(Gt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&Y>=0&&Y<=R.height-W&&F.readPixels(O,Y,V,W,wt.convert(ge),wt.convert(Me),Ct)}finally{let Yt=rt!==null?k.get(rt).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,O,Y,V,W,Ct,Bt,At=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(O>=0&&O<=R.width-V&&Y>=0&&Y<=R.height-W){E.bindFramebuffer(F.FRAMEBUFFER,Ht);let Yt=R.textures[At],ge=Yt.format,Me=Yt.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+At);let Gt=Nu(Yt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.bufferData(F.PIXEL_PACK_BUFFER,Ct.byteLength,F.STREAM_READ),F.readPixels(O,Y,V,W,wt.convert(ge),wt.convert(Me),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let dn=rt!==null?k.get(rt).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,dn);let Je=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $f(F,Je,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ct),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Be),F.deleteSync(Je),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(R.image.width*V),Ct=Math.floor(R.image.height*V),Bt=O!==null?O.x:0,At=O!==null?O.y:0;Z.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Bt,At,W,Ct),E.unbindTexture()},this.copyTextureToTexture=function(R,O,Y=null,V=null,W=0,Ct=0){let Bt,At,Ht,Yt,ge,Me,Gt,Be,dn,Je=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(Y!==null)Bt=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Ht=Y.isBox3?Y.max.z-Y.min.z:1,Yt=Y.min.x,ge=Y.min.y,Me=Y.isBox3?Y.min.z:0;else{let cn=Math.pow(2,-W);Bt=Math.floor(Je.width*cn),At=Math.floor(Je.height*cn),R.isDataArrayTexture?Ht=Je.depth:R.isData3DTexture?Ht=Math.floor(Je.depth*cn):Ht=1,Yt=0,ge=0,Me=0}V!==null?(Gt=V.x,Be=V.y,dn=V.z):(Gt=0,Be=0,dn=0);let We=wt.convert(O.format),Pn=wt.convert(O.type),Ut;O.isData3DTexture?(Z.setTexture3D(O,0),Ut=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),Ut=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),Ut=F.TEXTURE_2D),E.activeTexture(F.TEXTURE0),E.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let zn=E.getParameter(F.UNPACK_ROW_LENGTH),Pe=E.getParameter(F.UNPACK_IMAGE_HEIGHT),Qn=E.getParameter(F.UNPACK_SKIP_PIXELS),wi=E.getParameter(F.UNPACK_SKIP_ROWS),cs=E.getParameter(F.UNPACK_SKIP_IMAGES);E.pixelStorei(F.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),E.pixelStorei(F.UNPACK_SKIP_ROWS,ge),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Me);let ar=R.isDataArrayTexture||R.isData3DTexture,He=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){let cn=k.get(R),hs=k.get(O),$e=k.get(cn.__renderTarget),us=k.get(hs.__renderTarget);E.bindFramebuffer(F.READ_FRAMEBUFFER,$e.__webglFramebuffer),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let lr=0;lr<Ht;lr++)ar&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(R).__webglTexture,W,Me+lr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(O).__webglTexture,Ct,dn+lr)),F.blitFramebuffer(Yt,ge,Bt,At,Gt,Be,Bt,At,F.DEPTH_BUFFER_BIT,F.NEAREST);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||k.has(R)){let cn=k.get(R),hs=k.get(O);E.bindFramebuffer(F.READ_FRAMEBUFFER,L),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let $e=0;$e<Ht;$e++)ar?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,cn.__webglTexture,W,Me+$e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,cn.__webglTexture,W),He?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hs.__webglTexture,Ct,dn+$e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hs.__webglTexture,Ct),W!==0?F.blitFramebuffer(Yt,ge,Bt,At,Gt,Be,Bt,At,F.COLOR_BUFFER_BIT,F.NEAREST):He?F.copyTexSubImage3D(Ut,Ct,Gt,Be,dn+$e,Yt,ge,Bt,At):F.copyTexSubImage2D(Ut,Ct,Gt,Be,Yt,ge,Bt,At);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else He?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ut,Ct,Gt,Be,dn,Bt,At,Ht,We,Pn,Je.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,Ct,Gt,Be,dn,Bt,At,Ht,We,Je.data):F.texSubImage3D(Ut,Ct,Gt,Be,dn,Bt,At,Ht,We,Pn,Je):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ct,Gt,Be,Bt,At,We,Pn,Je.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ct,Gt,Be,Je.width,Je.height,We,Je.data):F.texSubImage2D(F.TEXTURE_2D,Ct,Gt,Be,Bt,At,We,Pn,Je);E.pixelStorei(F.UNPACK_ROW_LENGTH,zn),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Qn),E.pixelStorei(F.UNPACK_SKIP_ROWS,wi),E.pixelStorei(F.UNPACK_SKIP_IMAGES,cs),Ct===0&&O.generateMipmaps&&F.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){G=0,q=0,rt=null,E.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};function jr(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ve,c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Dd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][f]);let p=Dd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Dd(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new ke(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let g=h.getComponent(f,p);a.setComponent(f+u,p,g)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function ya(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,o=0,a=Object.keys(r.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,_=a.length;v<_;v++){let y=a[v],M=r.attributes[y];l[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let b=r.morphAttributes[y];b&&(c[y]||(c[y]=[]),b.forEach((w,S)=>{let T=new w.array.constructor(w.count*w.itemSize);c[y][S]=new w.constructor(T,w.itemSize,w.normalized)}))}let d=t*.5,p=Math.log10(1/t),g=Math.pow(10,p),m=d*g;for(let v=0;v<s;v++){let _=n?n.getX(v):v,y="";for(let M=0,b=a.length;M<b;M++){let w=a[M],S=r.getAttribute(w),T=S.itemSize;for(let A=0;A<T;A++)y+=`${Math.trunc(S[u[A]](_)*g+m)},`}if(y in e)h.push(e[y]);else{for(let M=0,b=a.length;M<b;M++){let w=a[M],S=r.getAttribute(w),T=r.morphAttributes[w],A=S.itemSize,C=l[w],D=c[w];for(let N=0;N<A;N++){let L=u[N],B=f[N];if(C[B](o,S[L](_)),T)for(let G=0,q=T.length;G<q;G++)D[G][B](o,T[G][L](_))}}e[y]=o,h.push(o),o++}}let x=r.clone();for(let v in r.attributes){let _=l[v];if(x.setAttribute(v,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),v in c)for(let y=0;y<c[v].length;y++){let M=c[v][y];x.morphAttributes[v][y]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return x.setIndex(h),x}function Zt(r){let t=1779033703^String(r).length;for(let i=0;i<String(r).length;i++)t=Math.imul(t^String(r).charCodeAt(i),3432918353),t=t<<13|t>>>19;let e=t>>>0,n=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return n.range=(i,s)=>i+(s-i)*n(),n.int=(i,s)=>Math.floor(n.range(i,s+1)),n.pick=i=>i[Math.floor(n()*i.length)],n}var nu={};function ii(r,t,e){if(nu[r])return nu[r];let n=document.createElement("canvas");n.width=n.height=t,e(n.getContext("2d"),t);let i=new qe(n);return i.colorSpace=we,i.anisotropy=4,nu[r]=i,i}function _a(r,t,e,n,i,s=1,o=4){for(let a=0;a<n;a++){r.fillStyle=e[Math.floor(i()*e.length)];let l=s+i()*(o-s);r.fillRect(i()*t,i()*t,l,l*(.6+i()*.8))}}function Ld(r){return ii("facade"+r,128,(t,e)=>{let n=Zt("facade"+r),i=["#cdbb94","#c2ad85","#d6c6a2","#b59e76","#c9b48e"][r%5];t.fillStyle=i,t.fillRect(0,0,e,e),_a(t,e,["rgba(0,0,0,0.05)","rgba(255,255,255,0.08)"],200,n,2,6);for(let s=10;s<e-10;s+=32)for(let o=10;o<e-10;o+=30){let a=n()<.18;t.fillStyle=a?"#1a1a1a":n()<.5?"#3c4d58":"#2f3c45",t.fillRect(o,s,16,18),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(o,s+18,16,3)}if(n()<.4){let s=t.createRadialGradient(64,40,4,64,40,50);s.addColorStop(0,"rgba(20,20,20,0.5)"),s.addColorStop(1,"rgba(20,20,20,0)"),t.fillStyle=s,t.fillRect(0,0,e,e)}})}function Nd(){let r=ii("water",128,(t,e)=>{let n=Zt("water");t.fillStyle="#2f7fa3",t.fillRect(0,0,e,e);for(let i=0;i<70;i++){t.strokeStyle=`rgba(200,240,255,${.15+n()*.25})`,t.lineWidth=2;let s=n()*e,o=n()*e;t.beginPath(),t.moveTo(s,o),t.quadraticCurveTo(s+6,o-3,s+12,o),t.stroke()}});return r.wrapS=r.wrapT=de,r}function iu(){let r=ii("grass",256,(t,e)=>{let n=Zt("grass");t.fillStyle="#6f9a45",t.fillRect(0,0,e,e),_a(t,e,["#7fab50","#628c3c","#86b257","#5a8236","#93bd62"],1600,n,1,4);for(let i=0;i<14;i++)t.fillStyle=`rgba(${n()<.5?"255,255,200":"30,60,20"},0.06)`,t.beginPath(),t.arc(n()*e,n()*e,20+n()*40,0,7),t.fill()});return r.wrapS=r.wrapT=de,r}function Ud(){let r=ii("ghostroad",128,(t,e)=>{t.clearRect(0,0,e,e),t.fillStyle="rgba(60,210,230,0.28)",t.fillRect(8,0,e-16,e),t.fillStyle="rgba(200,255,255,0.95)",t.fillRect(4,0,8,e*.55),t.fillRect(e-12,0,8,e*.55)});return r.wrapS=r.wrapT=de,r}function Fd(r,t){return ii("gable"+r+t,128,(e,n)=>{e.fillStyle=["#f1efe9","#e9e6dd","#f4f2ee"][t%3],e.fillRect(0,0,n,n),e.fillStyle=["#2f5f8f","#a8492f","#2f7a4f"][t%3],e.font="bold 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(r),n/2,n*.22),e.fillRect(n*.15,n*.38,n*.7,4)})}function Bd(r){return ii("glass"+r,128,(t,e)=>{let n=Zt("glass"+r),i=["#5d7f9e","#4f6f8c","#7896ad","#6b8a8f"][r%4];t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<e;s+=10)for(let o=0;o<e;o+=10)t.fillStyle=`rgba(255,255,255,${.04+n()*.16})`,t.fillRect(o+1,s+1,8,8);t.fillStyle="rgba(20,30,40,0.35)";for(let s=0;s<e;s+=10)t.fillRect(0,s,e,1)})}function su(){return ii("goldglass",128,(r,t)=>{let e=Zt("gold");r.fillStyle="#c99a3a",r.fillRect(0,0,t,t);for(let n=0;n<t;n+=8)for(let i=0;i<t;i+=8)r.fillStyle=`rgba(255,240,180,${.1+e()*.3})`,r.fillRect(i+1,n+1,6,6)})}function Od(){let r=ii("camo",128,(t,e)=>{let n=Zt("camo");t.fillStyle="#5f6b3c",t.fillRect(0,0,e,e);for(let i of["#4a3a26","#2b2a22","#7a7a48"])for(let s=0;s<9;s++){t.fillStyle=i,t.beginPath();let o=n()*e,a=n()*e;t.moveTo(o,a);for(let l=0;l<7;l++)t.lineTo(o+Math.cos(l)*(8+n()*16),a+Math.sin(l)*(6+n()*12));t.fill()}});return r.wrapS=r.wrapT=de,r}function zd(){return ii("field",128,(r,t)=>{for(let e=0;e<8;e++)r.fillStyle=e%2?"#4f9a46":"#58a64e",r.fillRect(e*16,0,16,t);r.strokeStyle="#f2f2f2",r.lineWidth=2,r.strokeRect(4,4,t-8,t-8),r.beginPath(),r.moveTo(t/2,4),r.lineTo(t/2,t-4),r.stroke(),r.beginPath(),r.arc(t/2,t/2,14,0,7),r.stroke()})}function Hd(){let r=ii("lawnstripe",256,(t,e)=>{let n=Zt("lawn");for(let i=0;i<4;i++)t.fillStyle=i%2?"#86b552":"#7aaa48",t.fillRect(0,i*e/4,e,e/4);_a(t,e,["#8fbd5c","#6f9c40","#93c264","#7da84b"],1400,n,1,3)});return r.wrapS=r.wrapT=de,r}function Gd(){let r=ii("dirt",256,(t,e)=>{let n=Zt("dirt");t.fillStyle="#c9b48a",t.fillRect(0,0,e,e),_a(t,e,["#bda57a","#d4c19a","#b39b70","#cdb990"],1600,n,1,4)});return r.wrapS=r.wrapT=de,r}function kd(){let r=ii("snow",256,(t,e)=>{let n=Zt("snow");t.fillStyle="#e9eef2",t.fillRect(0,0,e,e),_a(t,e,["#dfe6ec","#f4f7f9","#d5dde4"],1200,n,1,4)});return r.wrapS=r.wrapT=de,r}var ru={};function tr(r,t,e,n,i=!0){if(ru[r])return ru[r];let s=document.createElement("canvas");s.width=t,s.height=e,n(s.getContext("2d"),t,e);let o=new qe(s);return i&&(o.colorSpace=we),o.wrapS=o.wrapT=de,o.anisotropy=8,ru[r]=o}var m2={gray:["#3d4146","#24272b","#4f545a","#5a5f66","#2a2d31"],blue:["#24508f","#173866","#2f63ad","#3a72c0","#1b3f73"]};function Vd(r="gray"){let t=m2[r];return tr("giwa"+r,256,256,(e,n,i)=>{let s=Zt("giwa");e.fillStyle=t[0],e.fillRect(0,0,n,i);let o=16,a=n/o;for(let l=0;l<o;l++){let c=l*a,h=e.createLinearGradient(c,0,c+a,0);h.addColorStop(0,t[1]),h.addColorStop(.35,t[2]),h.addColorStop(.55,t[3]),h.addColorStop(1,t[4]),e.fillStyle=h,e.fillRect(c+a*.18,0,a*.64,i);for(let u=0;u<i;u+=16)e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(c+a*.18,u,a*.64,1.5)}for(let l=0;l<900;l++)e.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${.03+s()*.05})`,e.fillRect(s()*n,s()*i,2+s()*6,2+s()*6)})}function g2(){return tr("dancheong",256,64,(r,t,e)=>{r.fillStyle="#2f7a64",r.fillRect(0,0,t,e);let n=8,i=t/n;for(let s=0;s<n;s++){let o=s*i;r.fillStyle="#b8352a",r.fillRect(o+i*.4,0,i*.2,e),r.fillStyle="#e9e1cf",r.fillRect(o+i*.36,e*.2,i*.04,e*.6),r.fillRect(o+i*.6,e*.2,i*.04,e*.6),r.fillStyle="#2a4f9a",r.beginPath(),r.arc(o+i*.15,e*.5,e*.18,0,7),r.fill(),r.beginPath(),r.arc(o+i*.85,e*.5,e*.18,0,7),r.fill(),r.fillStyle="#e9c34a",r.beginPath(),r.arc(o+i*.15,e*.5,e*.07,0,7),r.fill(),r.beginPath(),r.arc(o+i*.85,e*.5,e*.07,0,7),r.fill()}r.fillStyle="#1f5a48",r.fillRect(0,0,t,4),r.fillRect(0,e-4,t,4)})}function x2(){return tr("changho",128,128,(r,t,e)=>{r.fillStyle="#8b2f25",r.fillRect(0,0,t,e),r.fillStyle="#c9b48a",r.fillRect(10,10,t-20,e-20),r.strokeStyle="#7a2a20",r.lineWidth=3;for(let n=10;n<=t-10;n+=12)r.beginPath(),r.moveTo(n,10),r.lineTo(n,e-10),r.stroke();for(let n=10;n<=e-10;n+=12)r.beginPath(),r.moveTo(10,n),r.lineTo(t-10,n),r.stroke()})}function v2(){return tr("seokchuk",256,256,(r,t,e)=>{let n=Zt("seokchuk");r.fillStyle="#6e6a62",r.fillRect(0,0,t,e);let i=32;for(let s=0,o=0;s<e;s+=i,o++){let a=o%2?-24:0;for(;a<t;){let l=40+n()*30,c=150+n()*40;r.fillStyle=`rgb(${c},${c-4},${c-12})`,r.fillRect(a+2,s+2,l-3,i-3);for(let h=0;h<12;h++)r.fillStyle=`rgba(0,0,0,${n()*.08})`,r.fillRect(a+n()*l,s+n()*i,3,3);a+=l}}})}function Wd(r,t,e,n={}){let i=n.lift??.22*e,s=n.sag??1.55,o=28,a=16,l=Math.max(0,(r-t)/2)*(n.ridge??1),c=r/2,h=t/2,u=(m,x)=>{let v=Math.abs(x)/h,_=Math.max(0,Math.abs(m)-l)/h,y=Math.min(1,Math.max(v,_)),M=e*Math.pow(1-y,s),b=Math.abs(m)/c,w=Math.abs(x)/h;return M+=i*Math.pow(Math.max(b,w)>.75?Math.min(b,w)*Math.max(b,w):0,3)*1.2,M+=i*.35*Math.pow(b,4)*y,{y:M,t:y}},f=[],d=[],p=[];for(let m=0;m<=a;m++)for(let x=0;x<=o;x++){let v=-c+x/o*r,_=-h+m/a*t,{y,t:M}=u(v,_);f.push(v,y,_),d.push(Math.abs(_)/h>(Math.abs(v)-l)/h?v*1.4:_*1.4,M*2.2)}for(let m=0;m<a;m++)for(let x=0;x<o;x++){let v=m*(o+1)+x,_=v+1,y=v+o+1,M=y+1;p.push(v,y,_,_,y,M)}let g=new ve;return g.setAttribute("position",new kt(f,3)),g.setAttribute("uv",new kt(d,2)),g.setIndex(p),g.computeVertexNormals(),{geo:g,hAt:u,r:l,hw:c,hd:h}}function Xd(r,t){let e=[],n=s=>{let o=new ys(s);e.push(new Wo(o,24,t,6,!1))},i=r.hAt(0,0).y;r.r>.01&&n([new I(-r.r-.02,i,0),new I(0,i,0),new I(r.r+.02,i,0)]);for(let s of[-1,1])for(let o of[-1,1]){let a=[];for(let l=0;l<=10;l++){let c=l/10,h=s*(r.r+(r.hw-r.r)*c),u=o*r.hd*c;a.push(new I(h,r.hAt(h*.999,u*.999).y+t*.6,u))}n(a)}return e}function qc(){let r=Vd();return{tile:new ht({map:r,roughness:.75,side:Ue}),ridge:new ht({color:14275784,roughness:.8}),dan:new ht({map:g2(),roughness:.8}),col:new ht({color:9318180,roughness:.7}),door:new ht({map:x2(),roughness:.85}),stone:new ht({map:v2(),roughness:.95}),stoneLight:new ht({color:13617336,roughness:.9}),dark:new Ie({color:921104}),plinth:new ht({color:12235683,roughness:.9})}}function Wc(r,t,{w:e,d:n,h:i,y:s,bays:o=5,roofW:a,roofD:l,roofH:c,walls:h=!0,lift:u}){let f=(_,y,M,b,w)=>{let S=new lt(_,y);return S.position.set(M,b,w),S.castShadow=S.receiveShadow=!0,r.add(S),S},d=Math.min(e,n)*.035,p=new ut(d,d*1.1,i,8),g=Math.max(1,Math.round(o*n/e));for(let _=0;_<=o;_++)for(let y of[-1,1])f(p,t.col,-e/2+_/o*e,s+i/2,y*n/2);for(let _=1;_<g;_++)for(let y of[-1,1])f(p,t.col,y*e/2,s+i/2,-n/2+_/g*n);if(h){let _=new j(e*.98,i*.82,n*.9),y=_.attributes.uv;for(let M=0;M<y.count;M++)y.setX(M,y.getX(M)*o);f(_,t.door,0,s+i*.41,0)}let m=new j(e+d*4,i*.22,n+d*4),x=m.attributes.uv;for(let _=0;_<x.count;_++)x.setX(_,x.getX(_)*o*.6);f(m,t.dan,0,s+i+i*.11,0);let v=Wd(a,l,c,{lift:u});f(v.geo,t.tile,0,s+i*1.2,0);for(let _ of Xd(v,c*.05))f(_,t.ridge,0,s+i*1.2,0);return s+i*1.2}function y2(r,t){let e=qc(),n=t.w,i=t.d,s=(x,v,_,y,M)=>{let b=new lt(x,v);return b.position.set(_,y,M),b.castShadow=b.receiveShadow=!0,r.add(b),b},o=n*.62,a=i*.62,l=.85,c=new ut(1,1,1,4,1);c.rotateY(Math.PI/4);let h=c.attributes.position;for(let x=0;x<h.count;x++){let v=h.getY(x)>0,_=v?.94:1;h.setXYZ(x,Math.sign(h.getX(x))*o/2*_,h.getY(x)*l+l/2,Math.sign(h.getZ(x))*a/2*_)}c.computeVertexNormals();let u=c.attributes.uv;for(let x=0;x<u.count;x++)u.setXY(x,u.getX(x)*3,u.getY(x)*1);s(c,e.stone,0,0,0);for(let x of[-1,1]){let v=new j((n-o)/2,l*.75,a*.55),_=v.attributes.uv;for(let y=0;y<_.count;y++)_.setX(y,_.getX(y)*1.2);s(v,e.stone,x*(o/2+(n-o)/4),l*.375,0);for(let y=0;y<3;y++)s(new j(.14,.14,a*.55),e.stoneLight,x*(o/2+.15+y*.27),l*.82,0)}let f=l*.34,d=new an;d.moveTo(-f,0),d.lineTo(-f,l*.36),d.absarc(0,l*.36,f,Math.PI,0,!0),d.lineTo(f,0),d.closePath();let p=new Nn(d,{depth:a*1.02,bevelEnabled:!1});p.translate(0,0,-a*.51),s(p,e.dark,0,.001,0);let g=new _n(f*1.12,f*.1,6,16,Math.PI);for(let x of[-1,1])s(g,e.stoneLight,0,l*.36,x*a*.505);let m=Wc(r,e,{w:o*.84,d:a*.62,h:.42,y:l,bays:5,roofW:n*.9,roofD:i*.86,roofH:.38,walls:!1,lift:.12});Wc(r,e,{w:o*.7,d:a*.46,h:.34,y:m+.38*.5,bays:5,roofW:n*.72,roofD:i*.66,roofH:.48,walls:!0,lift:.14}),s(new j(o*.86,.04,a*.64),e.plinth,0,l+.02,0)}function _2(r,t){let e=qc(),n=t.w,i=t.d,s=(l,c,h,u,f)=>{let d=new lt(l,c);return d.position.set(h,u,f),d.castShadow=d.receiveShadow=!0,r.add(d),d},o=0;for(let[l,c,h]of[[n*.92,i*.9,.22],[n*.76,i*.72,.22]]){let u=new j(l,h,c),f=u.attributes.uv;for(let p=0;p<f.count;p++)f.setX(p,f.getX(p)*4);s(u,e.stone,0,o+h/2,0);let d=14;for(let p=0;p<=d;p++)for(let g of[-1,1])s(new j(.05,.12,.05),e.stoneLight,-l/2+p/d*l,o+h+.06,g*(c/2-.03));for(let p of[-1,1])s(new j(l,.025,.03),e.stoneLight,0,o+h+.1,p*(c/2-.03));o+=h}s(new j(.5,.44,.5),e.stoneLight,0,.22,i*.42);let a=Wc(r,e,{w:n*.6,d:i*.42,h:.62,y:o,bays:5,roofW:n*.82,roofD:i*.66,roofH:.32,walls:!0,lift:.1});Wc(r,e,{w:n*.48,d:i*.3,h:.32,y:a+.32*.5,bays:5,roofW:n*.68,roofD:i*.52,roofH:.52,walls:!0,lift:.12})}function Xc(r,t){return tr("win"+r,256,256,(e,n,i)=>{let s=Zt(r);e.fillStyle=t.wall,e.fillRect(0,0,n,i);let o=n/t.cols,a=i/t.rows;for(let l=0;l<t.rows;l++)for(let c=0;c<t.cols;c++){let h=c*o+o*t.mx,u=l*a+a*t.my,f=o*(1-2*t.mx),d=a*(1-2*t.my),p=s()<(t.lit||0);e.fillStyle=p?"#e8d9a8":t.glass,t.arch?(e.beginPath(),e.moveTo(h,u+d),e.lineTo(h,u+f/2),e.arc(h+f/2,u+f/2,f/2,Math.PI,0),e.lineTo(h+f,u+d),e.closePath(),e.fill()):e.fillRect(h,u,f,d),t.frame&&(e.strokeStyle=t.frame,e.lineWidth=2,e.strokeRect(h,u,f,d)),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(h,u,f*.4,d)}if(t.band){e.fillStyle=t.band;for(let l=0;l<=t.rows;l++)e.fillRect(0,l*a-2,n,4)}})}function S2(){return tr("ddp",256,256,(r,t,e)=>{let n=Zt("ddp");r.fillStyle="#5d6166",r.fillRect(0,0,t,e);let i=12,s=t/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=168+n()*50;if(r.fillStyle=`rgb(${l},${l+2},${l+6})`,r.fillRect(o*s+1,a*s+1,s-2,s-2),n()<.25){r.fillStyle="rgba(40,44,50,0.35)";for(let c=0;c<9;c++)r.fillRect(o*s+3+c%3*(s/3),a*s+3+Math.floor(c/3)*(s/3),2,2)}}})}function au(r,t,e=1){let n=t.length;if(!n)return;let i=new yn(new is(.16*e,1),new ht({color:16777215,roughness:1}),n),s=new yn(new ut(.025*e,.035*e,.18*e,5),new ht({color:5916210,roughness:1}),n),o=new $t,a=new rn,l=new Xt,c=Zt("trees"+n);t.forEach(([h,u,f],d)=>{let p=.75+c()*.6;o.compose(new I(h,u+.2*e*p,f),a,new I(p,p*(.9+c()*.4),p)),i.setMatrixAt(d,o),o.compose(new I(h,u+.08*e,f),a,new I(1,1,1)),s.setMatrixAt(d,o),i.setColorAt(d,l.setHSL(.24+c()*.06,.38+c()*.15,.2+c()*.1))}),i.castShadow=s.castShadow=!0,i.receiveShadow=!0,r.add(i,s)}var Qs=r=>(t,e,n=0,i=0,s=0)=>{let o=new lt(t,e);return o.position.set(n,i,s),o.castShadow=o.receiveShadow=!0,r.add(o),o},On=(r,t={})=>new ht(Object.assign({color:r,roughness:.85},t));function ou(r,t,e,n,i){let s=new j(r,t,e),o=s.attributes.uv,a=s.attributes.normal;for(let l=0;l<o.count;l++){let c=Math.abs(a.getX(l))>.5?e:r;o.setXY(l,o.getX(l)*c/n,o.getY(l)*t/i)}return s}function M2(r,t){let e=qc(),n=Qs(r),i=t.w,s=t.d,o=new ht({map:Vd("blue"),roughness:.45,metalness:.1,side:Ue}),a=new ht({map:Xc("cwd",{wall:"#efeae0",glass:"#5d4a3a",cols:2,rows:1,mx:.18,my:.12,frame:"#8a2f25"}),roughness:.8}),l=On(6195772,{roughness:1}),c=new le(i*.92,s*.4);c.rotateX(-Math.PI/2),n(c,l,0,.065,s*.27);let h=-s*.16;n(new j(i*.92,.12,s*.5),e.stone,0,.06,h),n(new j(.5,.1,.25),e.stoneLight,0,.05,h+s*.27);let u=new ut(.035,.04,.5,8),f=(d,p,g,m,x,v,_)=>{n(ou(p,m,g,.28,m),a,d,.12+m/2,h);for(let M=0;M<=6;M++)n(u,e.stoneLight,d-p/2+M/6*p,.12+m/2,h+g/2+.06).scale.y=m/.5;n(new j(p+.12,.07,g+.16),e.dan,d,.12+m+.035,h);let y=Wd(x,v,_,{lift:_*.3});n(y.geo,o,d,.12+m+.07,h);for(let M of Xd(y,_*.05))n(M,e.ridge,d,.12+m+.07,h)};f(0,i*.42,s*.3,.5,i*.56,s*.46,.55);for(let d of[-1,1])f(d*i*.33,i*.2,s*.24,.34,i*.27,s*.36,.3);au(r,[[-i*.44,.06,s*.42],[i*.44,.06,s*.42],[-i*.44,.06,s*.12],[i*.44,.06,s*.12]],1)}function b2(r,t){let e=Qs(r),n=new ce(1,28,12,0,Math.PI*2,0,Math.PI/2),i=On(4284719,{roughness:1});e(n,i).scale.set(1.5,.8,1.3);let o=Zt("namsan"),a=[];for(let d=0;d<70;d++){let p=o()*Math.PI*2,g=.25+Math.sqrt(o())*.72,m=Math.cos(p)*g*1.5,x=Math.sin(p)*g*1.3,v=.8*Math.sqrt(Math.max(0,1-g*g))-.05;a.push([m,v,x])}au(r,a,.9);let l=.8,c=On(13618889,{roughness:.7}),h=new ht({map:Xc("ntg",{wall:"#2b3540",glass:"#3e5263",cols:16,rows:2,mx:.06,my:.12,lit:.25}),roughness:.15,metalness:.5});e(new ut(.34,.4,.22,20),On(13224130),0,l+.11),e(new ut(.1,.15,2.5,16),c,0,l+.22+1.25);let u=l+2.72;for(let[d,p,g,m]of[[.12,.3,.12,c],[.33,.33,.2,h],[.34,.3,.07,c],[.29,.29,.12,h],[.3,.2,.1,c],[.2,.13,.1,c]])e(new ut(p,d,g,24),m,0,u+g/2),u+=g;let f=On(13120042,{roughness:.6});for(let d=0;d<5;d++)e(new ut(.05-d*.006,.055-d*.006,.2,8),d%2?c:f,0,u+.1+d*.2);e(new ce(.05,8,6),new Ie({color:16726574}),0,u+1.05)}function E2(r,t){let e=qc(),n=Qs(r),i=On(6714970,{metalness:.55,roughness:.45}),s=On(12038565,{roughness:.8}),o=On(4025994,{roughness:.05,metalness:.2});n(new ut(1,1.02,.12,40),s,0,.06),n(new ut(.92,.92,.02,40),o,0,.12);let a=new Ie({color:15398655,transparent:!0,opacity:.55});for(let m=0;m<16;m++){let x=m/16*Math.PI*2;n(new ut(.008,.02,.3,4),a,Math.cos(x)*.78,.27,Math.sin(x)*.78).castShadow=!1}n(new j(.78,.12,.78),s,0,.18),n(new j(.6,.86,.6),e.stone,0,.67),n(new j(.68,.06,.68),s,0,1.13);let l=new Lt;l.position.y=1.16,l.scale.setScalar(1.35),r.add(l);let c=Qs(l),h=0,u=1;c(new ut(.12*u,.19*u,.46*u,12),i,0,h+.23),c(new ut(.13*u,.12*u,.32*u,12),i,0,h+.62),c(new ce(1,12,6),i,0,h+.78).scale.set(.22,.07,.14);for(let m of[-1,1]){let x=c(new ut(.035,.04,.3,8),i,m*.13,h+.64,.07);x.rotation.x=-.6,x.rotation.z=m*.35}c(new ce(.075,12,10),i,0,h+.9),c(new ze(.085,.14,12),i,0,h+1.02),c(new _n(.085,.015,6,16),i,0,h+.95).rotation.x=Math.PI/2,c(new j(.03,.62,.014),On(7042404,{metalness:.8,roughness:.3}),0,h+.36,.17),c(new j(.1,.025,.03),i,0,h+.66,.17);let f=new Lt;f.position.set(0,.13,.66),f.rotation.y=Math.PI/2,r.add(f);let d=Qs(f),p=On(6965806),g=On(3817269,{roughness:.7});d(new j(.5,.07,.16),p,0,.035),d(new ce(1,12,6,0,Math.PI*2,0,Math.PI/2),g,0,.07).scale.set(.24,.07,.08),d(new ce(.035,8,6),On(9121573),.27,.08)}function T2(r,t){let e=Qs(r),n=t.w,i=t.d,s=On(6195772,{roughness:1}),o=new Wn(1,40);o.rotateX(-Math.PI/2),e(o,s,0,.065,i*.44).scale.set(n*.34,1,i*.05);let a=new ht({map:Xc("cho",{wall:"#cbbd9d",glass:"#3a3f44",cols:4,rows:1,mx:.22,my:.18,arch:!0,band:"#b1a283"}),roughness:.9}),l=i*.3,c=.5;e(ou(n*.56,c,i*.2,.3,c/4),a,0,.06+c/2,l),e(new j(n*.58,.05,i*.22),On(12036490),0,.06+c+.025,l),e(ou(.42,.78,i*.24,.42/2,.78/4),a,0,.06+.39,l+.02),e(new j(.46,.05,i*.26),On(12036490),0,.06+.8,l+.02);let h=tr("clock",64,64,_=>{_.fillStyle="#f3efe4",_.beginPath(),_.arc(32,32,30,0,7),_.fill(),_.strokeStyle="#222",_.lineWidth=4,_.beginPath(),_.moveTo(32,32),_.lineTo(32,10),_.moveTo(32,32),_.lineTo(46,38),_.stroke()});e(new Wn(.11,20),new ht({map:h}),0,.68,l+.02+i*.12+.002);let u=new ht({map:Xc("chn",{wall:"#7d93a3",glass:"#a9c7da",cols:10,rows:8,mx:.04,my:.06,lit:.08,frame:"#5a6a77"}),roughness:.12,metalness:.55,side:Ue}),f=1.3,d=n*.86,p=-i*.46,g=i*.12,m=new an;m.moveTo(p,0),m.lineTo(p,f),m.bezierCurveTo(p+.25,f+.3,g+.25,f*1.05,g,f*.5),m.lineTo(g-.08,f*.48),m.bezierCurveTo(g-.12,f*.7,g-.55,f*.55,g-.6,0),m.closePath();let x=new Nn(m,{depth:d,bevelEnabled:!1,curveSegments:20});x.rotateY(-Math.PI/2),x.translate(d/2,.06,0);let v=x.attributes.uv;for(let _=0;_<v.count;_++)v.setXY(_,v.getX(_)*2.6,v.getY(_)*3.2);e(x,u)}function w2(r,t){let e=Qs(r),n=t.w,i=t.d,s=n*.45,o=i*.4,a=4,l=96,c=18,h=[],u=[],f=[];for(let g=0;g<=c;g++){let m=g/c;for(let x=0;x<=l;x++){let v=x/l*Math.PI*2,_=Math.cos(v),y=Math.sin(v),M=s*Math.sign(_)*Math.pow(Math.abs(_),2/a)*m,b=o*Math.sign(y)*Math.pow(Math.abs(y),2/a)*m,S=(.62+.3*Math.cos(v-.5)+.12*Math.cos(2*v+1))*Math.pow(Math.max(0,1-Math.pow(m,7)),.42);h.push(M,S,b),u.push(x/l*14,(1-m)*3+S*2)}}for(let g=0;g<c;g++)for(let m=0;m<l;m++){let x=g*(l+1)+m,v=x+1,_=x+l+1,y=_+1;f.push(x,v,_,v,y,_)}let d=new ve;d.setAttribute("position",new kt(h,3)),d.setAttribute("uv",new kt(u,2)),d.setIndex(f),d.computeVertexNormals(),e(d,new ht({map:S2(),metalness:.6,roughness:.52,side:Ue}),0,.06,0);let p=new ce(1,24,8,0,Math.PI*2,0,Math.PI/2);e(p,On(6064698,{roughness:1}),-n*.36,.06,i*.28).scale.set(.75,.22,.42),au(r,[[-n*.47,.06,-i*.4],[n*.47,.06,i*.42],[n*.47,.06,-i*.42],[-n*.2,.06,i*.46]],1)}var lu={namdaemun:y2,gyeongbok:_2,cheongwadae:M2,ntower:b2,yisunsin:E2,cityhall:T2,ddp:w2};var si={},er=(r,t=!0)=>{let e=new qe(r);return e.colorSpace=we,e.anisotropy=8,t&&(e.wrapS=e.wrapT=de),e},nr=(r,t)=>{let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]};function hu(r,t,e,n,i,s,o,a={}){let l=o()<(a.lit??.18),c=!l&&o()<.3;r.fillStyle=a.frame||"#d9d6cf",r.fillRect(e-2,n-2,i+4,s+4);let h=r.createLinearGradient(e,n,e,n+s);if(l?(h.addColorStop(0,"#f3dfa8"),h.addColorStop(1,"#c9a868")):(h.addColorStop(0,"#a9c3d6"),h.addColorStop(.45,"#6c8396"),h.addColorStop(1,"#3a4652")),r.fillStyle=h,r.fillRect(e,n,i,s),c){r.fillStyle="rgba(235,232,222,0.75)",r.fillRect(e,n,i,s*(.3+o()*.5)),r.fillStyle="rgba(0,0,0,0.12)";for(let u=n+3;u<n+s*.7;u+=3)r.fillRect(e,u,i,1)}r.fillStyle="rgba(255,255,255,0.22)",r.beginPath(),r.moveTo(e,n),r.lineTo(e+i*.45,n),r.lineTo(e,n+s*.6),r.fill(),r.fillStyle=a.frame||"#d9d6cf",r.fillRect(e+i/2-1,n,2,s),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(e-2,n+s+2,i+4,3),l&&t&&(t.fillStyle="#b08840",t.fillRect(e,n,i,s))}var qd=["\uCE58\uD0A8","\uCE74\uD398","\uC57D\uAD6D","\uD3B8\uC758\uC810","\uD559\uC6D0","PC\uBC29","\uB178\uB798\uBC29","\uBD80\uB3D9\uC0B0","\uBCD1\uC6D0","\uCE58\uACFC","\uBBF8\uC6A9\uC2E4","\uBD84\uC2DD","\uC740\uD589","\uC548\uACBD","\uD53C\uC790","\uC815\uD615\uC678\uACFC","\uC218\uD559\uD559\uC6D0","\uD5EC\uC2A4","\uAD6D\uBC25","\uB9C8\uD2B8"],Yd=["#d23b2f","#1f6fc2","#f2b630","#2e9c5a","#e26c1f","#6a3fb0","#1d2a3a","#ffffff","#c41f5a"];function cu(r,t,e,n,i,s,o,a=!1){let l=Yd[Math.floor(o()*Yd.length)],c=l==="#ffffff"||l==="#f2b630";r.fillStyle=l,r.fillRect(e,n,i,s),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(e,n+s-2,i,2);let h=qd[Math.floor(o()*qd.length)];if(r.fillStyle=c?"#1a1a1a":"#ffffff",r.textAlign="center",r.textBaseline="middle",a){let u=[...h],f=Math.min(i*.8,s/(u.length+.5));r.font=`bold ${f}px "Noto Sans KR","Malgun Gothic",sans-serif`,u.forEach((d,p)=>r.fillText(d,e+i/2,n+f*(p+.85)))}else r.font=`bold ${Math.floor(s*.68)}px "Noto Sans KR","Malgun Gothic",sans-serif`,r.fillText(h,e+i/2,n+s/2+1,i*.9);t&&(t.fillStyle=l,t.globalAlpha=.85,t.fillRect(e,n,i,s),t.globalAlpha=1)}var $d=["#cdbb9e","#a19f99","#a85f45","#dcd7cc","#8d806d","#a9b2b7"];function Zd(r){if(si["shop"+r])return si["shop"+r];let t=256,e=384,n=e/5,[i,s]=nr(t,e),[o,a]=nr(t,e),l=Zt("shopHD"+r);if(a.fillStyle="#000",a.fillRect(0,0,t,e),s.fillStyle=$d[r%$d.length],s.fillRect(0,0,t,e),r%6===2){for(let g=0;g<e;g+=6)for(let m=g/6%2?-6:0;m<t;m+=12)s.fillStyle=`rgba(${l()<.5?"0,0,0":"255,240,220"},${.04+l()*.08})`,s.fillRect(m,g,11,5);s.fillStyle="rgba(60,40,30,0.25)";for(let g=0;g<e;g+=6)s.fillRect(0,g+5,t,1)}else{s.strokeStyle="rgba(0,0,0,0.08)",s.lineWidth=1;let g=r%3?16:32;for(let m=0;m<e;m+=g)s.beginPath(),s.moveTo(0,m+.5),s.lineTo(t,m+.5),s.stroke();for(let m=0;m<t;m+=g*2)s.beginPath(),s.moveTo(m+.5,0),s.lineTo(m+.5,e),s.stroke()}for(let g=0;g<1500;g++)s.fillStyle=`rgba(0,0,0,${l()*.05})`,s.fillRect(l()*t,l()*e,2,2);for(let g=0;g<10;g++){let m=l()*t,x=s.createLinearGradient(0,0,0,e);x.addColorStop(0,"rgba(0,0,0,0.08)"),x.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=x,s.fillRect(m,0,2+l()*5,e*l())}for(let g=1;g<=4;g++)s.fillStyle="rgba(0,0,0,0.16)",s.fillRect(0,g*n-3,t,3),s.fillStyle="rgba(255,255,255,0.18)",s.fillRect(0,g*n-5,t,2);let c=2+r%2,h=r%2?"#e4e1da":"#3b4046";for(let g=0;g<4;g++){let m=g*n+n*.16,x=t/c,v=l()<.5;for(let _=0;_<c;_++)hu(s,a,_*x+x*.14,m,x*.72,n*(v?.46:.6),l,{frame:h});v&&cu(s,a,8,m+n*.53,t-40,n*.26,l)}l()<.75&&cu(s,a,t-28,n*.2,22,n*3.4,l,!0);let u=4*n;s.fillStyle="#2a2f35",s.fillRect(0,u,t,n),cu(s,a,0,u+2,t,n*.26,l);let f=s.createLinearGradient(0,u+n*.3,0,e);f.addColorStop(0,"#f6e6b8"),f.addColorStop(1,"#b89a62"),s.fillStyle=f,s.fillRect(6,u+n*.32,t*.62,n*.64),a.fillStyle="#7a6033",a.fillRect(6,u+n*.32,t*.62,n*.64),s.fillStyle="rgba(80,60,40,0.55)";for(let g=0;g<6;g++)s.fillRect(14+g*26,u+n*.62,16,n*.34);s.fillStyle="rgba(255,255,255,0.25)",s.fillRect(6,u+n*.32,t*.62,4),s.fillStyle="#5b6168";for(let g=1;g<4;g++)s.fillRect(6+g*t*.155,u+n*.32,3,n*.64);s.fillStyle="#444b52",s.fillRect(t*.7,u+n*.32,t*.2,n*.68),s.fillStyle="rgba(200,220,235,0.45)",s.fillRect(t*.71,u+n*.36,t*.08,n*.6),s.fillRect(t*.81,u+n*.36,t*.08,n*.6);let d=er(i);d.wrapT=Vn,d.wrapT=de;let p=er(o);return si["shop"+r]={map:d,emissiveMap:p}}function Jd(r){if(si["apt"+r])return si["apt"+r];let t=256,[e,n]=nr(t,t),[i,s]=nr(t,t),o=Zt("aptHD"+r),a=t/4;s.fillStyle="#000",s.fillRect(0,0,t,t),n.fillStyle=["#f0eee8","#e8e4da","#f3f1ec"][r%3],n.fillRect(0,0,t,t);for(let h=0;h<900;h++)n.fillStyle=`rgba(0,0,0,${o()*.035})`,n.fillRect(o()*t,o()*t,2,2);let l=3,c=t/l;for(let h=0;h<4;h++){let u=h*a;for(let f=0;f<l;f++){let d=f*c;if(hu(n,s,d+c*.08,u+a*.14,c*.56,a*.56,o,{frame:"#cfd3d6",lit:.12}),hu(n,s,d+c*.72,u+a*.2,c*.2,a*.42,o,{frame:"#cfd3d6",lit:.1}),o()<.45){n.fillStyle="#b8bcbf",n.fillRect(d+c*.7,u+a*.66,c*.24,a*.12),n.fillStyle="rgba(0,0,0,0.25)";for(let p=0;p<5;p++)n.fillRect(d+c*.71+p*c*.045,u+a*.67,2,a*.1)}n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(d,u,3,a)}n.fillStyle="rgba(150,175,195,0.45)",n.fillRect(0,u+a*.7,t,a*.16),n.fillStyle="#d0d3d6",n.fillRect(0,u+a*.86,t,a*.14),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,u+a*.98,t,2),n.fillStyle="rgba(255,255,255,0.6)",n.fillRect(0,u+a*.7,t,1)}return n.fillStyle=["rgba(90,140,190,0.35)","rgba(200,110,80,0.3)","rgba(100,160,120,0.3)"][r%3],n.fillRect(t-10,0,10,t),si["apt"+r]={map:er(e),emissiveMap:er(i)}}function ir(r){if(si["glass"+r])return si["glass"+r];let t=256,[e,n]=nr(t,t),[i,s]=nr(t,t),o=Zt("glassHD"+r);s.fillStyle="#000",s.fillRect(0,0,t,t);let a=[["#9fc0d8","#4c6a84","#2b3c4c"],["#a8c4c8","#55747a","#2c3e42"],["#c3d2de","#6e869a","#3a4a58"],["#b9c8b0","#5f7560","#33402f"]][r%4],l=8,c=t/l,h=8,u=t/h;for(let d=0;d<l;d++){let p=d*c,g=n.createLinearGradient(0,p,0,p+c);g.addColorStop(0,a[0]),g.addColorStop(.6,a[1]),g.addColorStop(1,a[2]),n.fillStyle=g,n.fillRect(0,p,t,c);for(let m=0;m<3;m++)n.fillStyle=`rgba(255,255,255,${.04+o()*.1})`,n.fillRect(o()*t,p,20+o()*60,c*.75);for(let m=0;m<h;m++)o()<.05&&(n.fillStyle="rgba(235,220,180,0.45)",n.fillRect(m*u+2,p+2,u-4,c*.72),s.fillStyle="#4a3c22",s.fillRect(m*u+2,p+2,u-4,c*.72));n.fillStyle="rgba(30,40,50,0.55)",n.fillRect(0,p+c*.78,t,c*.22),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(0,p+c*.78,t,1)}n.fillStyle="rgba(20,26,32,0.7)";for(let d=0;d<h;d++)n.fillRect(d*u,0,2,t);let f=n.createLinearGradient(0,0,t,t);return f.addColorStop(0,"rgba(255,255,255,0)"),f.addColorStop(.45,"rgba(255,255,255,0.12)"),f.addColorStop(.55,"rgba(255,255,255,0)"),n.fillStyle=f,n.fillRect(0,0,t,t),si["glass"+r]={map:er(e),emissiveMap:er(i)}}function Yc(r){if(si["roof"+r])return si["roof"+r];let t=128,[e,n]=nr(t,t),i=Zt("roofHD"+r);n.fillStyle=["#7f9a86","#9a9d9f","#8c8f93"][r%3],n.fillRect(0,0,t,t);for(let s=0;s<600;s++)n.fillStyle=`rgba(0,0,0,${i()*.08})`,n.fillRect(i()*t,i()*t,3,3);n.strokeStyle="rgba(0,0,0,0.12)";for(let s=0;s<t;s+=32)n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();return si["roof"+r]=er(e)}var Qr={};function R2(r,t,e,n,i){let s=new Float32Array((e+1)*(n+1));for(let l=0;l<=n;l++)for(let c=0;c<=e;c++)s[l*(e+1)+c]=i();for(let l=0;l<=n;l++)s[l*(e+1)+e]=s[l*(e+1)];for(let l=0;l<=e;l++)s[n*(e+1)+l]=s[l];let o=new Float32Array(r*t),a=l=>l*l*(3-2*l);for(let l=0;l<t;l++){let c=l/t*n,h=Math.floor(c),u=a(c-h);for(let f=0;f<r;f++){let d=f/r*e,p=Math.floor(d),g=a(d-p),m=s[h*(e+1)+p],x=s[h*(e+1)+p+1],v=s[(h+1)*(e+1)+p],_=s[(h+1)*(e+1)+p+1];o[l*r+f]=(m+(x-m)*g)*(1-u)+(v+(_-v)*g)*u}}return o}function bn(r,t,e,n,i,s=1){let o=new Float32Array(r*t),a=1,l=0;for(let c=0;c<n;c++){let h=e<<c,u=R2(r,t,Math.max(1,Math.round(h*s)),h,i);for(let f=0;f<o.length;f++)o[f]+=u[f]*a;l+=a,a*=.55}for(let c=0;c<o.length;c++)o[c]/=l;return o}var Qe=r=>r<0?0:r>255?255:r;function to(r,t,e,n){if(Qr[r])return Qr[r];let i=()=>{let d=document.createElement("canvas");return d.width=t,d.height=e,d},s=i(),o=i(),a=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(t,e),h=l.createImageData(t,e);n(c.data,h.data,a,l),a.putImageData(c,0,0),l.putImageData(h,0,0),n.after&&n.after(a,l);let u=new qe(s);u.colorSpace=we;let f=new qe(o);for(let d of[u,f])d.wrapS=d.wrapT=de,d.anisotropy=8;return Qr[r]={map:u,bump:f}}function Kd(){return to("lawn",512,512,(t,e)=>{let n=Zt("rlawn"),i=bn(512,512,2,3,n),s=bn(512,512,8,3,n),o=bn(512,512,64,2,n),a=bn(512,512,3,3,n);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=l*512+c,u=h*4,f=n(),d=Math.sin(l/512*Math.PI*4)>0?1.035:.965,p=(.72+i[h]*.32+(s[h]-.5)*.25+(o[h]-.5)*.3+(f-.5)*.22)*d,g=Math.max(0,(a[h]-.58)*3.2),m=78*p,x=104*p,v=50*p;m+=g*46,x+=g*16,v+=g*6,t[u]=Qe(m),t[u+1]=Qe(x),t[u+2]=Qe(v),t[u+3]=255;let _=Qe(110+(o[h]-.5)*120+(f-.5)*90);e[u]=e[u+1]=e[u+2]=_,e[u+3]=255}})}function jd(){let e=(i,s)=>{let o=Zt("rroad-after"),a=(l,c,h)=>{for(let u=0;u<432;u+=2){let f=o();i.globalAlpha=f<.08?.35:.82+o()*.18,i.fillStyle=h,i.fillRect(l,u,c,2),s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(l,u,c,2)}i.globalAlpha=1};a(14,6,"#e9e7e0"),a(236,6,"#e9e7e0"),a(120,5,"#e2b93b"),a(131,5,"#e2b93b"),i.strokeStyle="rgba(25,25,27,0.55)",s.strokeStyle="rgba(0,0,0,0.7)";for(let l=0;l<5;l++){let c=30+o()*196,h=o()*432;i.lineWidth=s.lineWidth=1+o(),i.beginPath(),s.beginPath(),i.moveTo(c,h),s.moveTo(c,h);for(let u=0;u<6;u++)c+=o()*22-11,h+=o()*26-6,i.lineTo(c,h),s.lineTo(c,h);i.stroke(),s.stroke()}},n=(i,s)=>{let o=Zt("rroad"),a=bn(256,432,2,3,o,.6),l=bn(256,432,48,2,o,.6),c=bn(256,432,2,2,o,.6);for(let h=0;h<432;h++)for(let u=0;u<256;u++){let f=h*256+u,d=f*4,p=u/256,g=o(),m=p<.5?p/.5:(p-.5)/.5,x=Math.exp(-Math.pow((m-.3)/.08,2))+Math.exp(-Math.pow((m-.72)/.08,2)),v=98+(a[f]-.5)*20+(l[f]-.5)*24+(g-.5)*26-x*8;c[f]>.66&&(v-=9),g>.985&&(v+=40),i[d]=Qe(v),i[d+1]=Qe(v+1),i[d+2]=Qe(v+4),i[d+3]=255;let _=Qe(120+(l[f]-.5)*140+(g-.5)*110-x*25);s[d]=s[d+1]=s[d+2]=_,s[d+3]=255}};return n.after=e,to("road",256,432,n)}function Qd(){return to("walk",256,256,(e,n)=>{let i=Zt("rwalk"),s=bn(256,256,8,3,i),o=bn(256,256,64,1,i),a=32,l=64,c=[];for(let h=0;h<64;h++)c.push(.88+i()*.2);for(let h=0;h<256;h++)for(let u=0;u<256;u++){let f=h*256+u,d=f*4,p=Math.floor(h/l),g=p%2?a/2:0,m=Math.floor((u+g)/a)%(256/a),x=(p*8+m)%64,v=(u+g)%a,_=h%l,y=v<2||_<2,M=(172+(s[f]-.5)*30+(o[f]-.5)*26+(i()-.5)*18)*c[x];y&&(M*=.62),e[d]=Qe(M),e[d+1]=Qe(M*.985),e[d+2]=Qe(M*.95),e[d+3]=255;let b=y?40:Qe(170+(o[f]-.5)*70);n[d]=n[d+1]=n[d+2]=b,n[d+3]=255}})}function tp(){return to("concrete",256,256,(t,e)=>{let n=Zt("rconc"),i=bn(256,256,4,4,n);for(let s=0;s<256;s++)for(let o=0;o<256;o++){let a=s*256+o,l=a*4,c=n(),h=o%128<2||s%128<2,u=132+(i[a]-.5)*40+(c-.5)*22;h&&(u*=.7),t[l]=Qe(u),t[l+1]=Qe(u+1),t[l+2]=Qe(u+3),t[l+3]=255;let f=h?50:Qe(140+(c-.5)*60);e[l]=e[l+1]=e[l+2]=f,e[l+3]=255}})}function ep(){let e=(n,i)=>{let s=Zt("rblvd"),o=bn(512,512,2,3,s),a=bn(512,512,64,2,s),l=bn(512,512,3,2,s);for(let c=0;c<512;c++)for(let h=0;h<512;h++){let u=c*512+h,f=u*4,d=s(),p=Math.abs((c/512-.5)*8.5),g=p%.8,m=Math.exp(-Math.pow((g-.25)/.07,2))+Math.exp(-Math.pow((g-.55)/.07,2)),x=64+(o[u]-.5)*20+(a[u]-.5)*24+(d-.5)*26-(p<2.2?m*7:0);l[u]>.7&&(x-=9),d>.986&&(x+=36),n[f]=Qe(x),n[f+1]=Qe(x+1),n[f+2]=Qe(x+4),n[f+3]=255;let v=Qe(120+(a[u]-.5)*130+(d-.5)*100);i[f]=i[f+1]=i[f+2]=v,i[f+3]=255}};return e.after=(n,i)=>{let s=Zt("rblvd2"),o=512/8.5,a=(l,c,h,u)=>{for(let f of l===0?[1]:[-1,1]){let d=256+f*l*o-c*o/2;for(let p=0;p<512;p+=2)u&&p/o%(8.5/2)>8.5/4||(n.globalAlpha=s()<.07?.35:.85+s()*.15,n.fillStyle=h,n.fillRect(p,d,2,c*o),i.fillStyle="rgba(255,255,255,0.3)",i.fillRect(p,d,2,c*o));n.globalAlpha=1}};a(.07,.06,"#e2b93b"),a(.8,.05,"#ebe9e2",!0),a(1.6,.05,"#ebe9e2",!0),a(2.2,.06,"#ebe9e2");for(let[l,c]of[[1.7,1.2],[6.1,-1.25]]){let h=l*o,u=512/2+c*o,f=.16*o;n.fillStyle="#2c2d2f",n.beginPath(),n.arc(h,u,f,0,7),n.fill(),n.strokeStyle="#4a4b4e",n.lineWidth=2,n.beginPath(),n.arc(h,u,f*.7,0,7),n.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(h,u,f,0,7),i.fill()}},to("blvd",512,512,e)}function np(){return to("plaza",256,256,(t,e)=>{let n=Zt("rplaza"),i=bn(256,256,3,4,n);for(let s=0;s<256;s++)for(let o=0;o<256;o++){let a=s*256+o,l=a*4,c=n(),h=o%64<1||s%64<1,u=176+(i[a]-.5)*12+(c-.5)*8;h&&(u-=14),t[l]=Qe(u),t[l+1]=Qe(u+1),t[l+2]=Qe(u+3),t[l+3]=255;let f=h?90:Qe(140+(c-.5)*30);e[l]=e[l+1]=e[l+2]=f,e[l+3]=255}})}function ip(){if(Qr.zebra)return Qr.zebra;let r=document.createElement("canvas");r.width=64,r.height=256;let t=r.getContext("2d"),e=Zt("zebra");for(let i=0;i<256;i+=32)for(let s=0;s<64;s+=2)t.globalAlpha=.75+e()*.25,t.fillStyle="#ecebe6",t.fillRect(s,i+4,2,18);let n=new qe(r);return n.colorSpace=we,n.anisotropy=8,Qr.zebra=n}var Sa=new I;function ri(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Sa.copy(t),Sa[n]=0,Sa.normalize();let c=.5*o/(o+a),h=1-Sa.angleTo(r)/l;return Math.sign(Sa[e])===1?h*c:a/(o+a)+c+c*(1-h)}var $c=class r extends j{constructor(t=1,e=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new I,m=.5/o;for(let x=0,v=0;x<u.length;x+=3,v+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[x+0]=h.x*Math.sign(l.x)+c.x*s,u[x+1]=h.y*Math.sign(l.y)+c.y*s,u[x+2]=h.z*Math.sign(l.z)+c.z*s,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),d[v+0]=ri(g,c,"z","y",s,n),d[v+1]=1-ri(g,c,"y","z",s,e);break;case 1:g.set(-1,0,0),d[v+0]=1-ri(g,c,"z","y",s,n),d[v+1]=1-ri(g,c,"y","z",s,e);break;case 2:g.set(0,1,0),d[v+0]=1-ri(g,c,"x","z",s,t),d[v+1]=ri(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),d[v+0]=1-ri(g,c,"x","z",s,t),d[v+1]=1-ri(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),d[v+0]=1-ri(g,c,"x","y",s,t),d[v+1]=1-ri(g,c,"y","x",s,e);break;case 5:g.set(0,0,-1),d[v+0]=ri(g,c,"x","y",s,t),d[v+1]=1-ri(g,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var sp={},Vi=(r,t)=>sp[r]||(sp[r]=t()),gn=r=>(+r).toFixed(3),dt=(r,t,e,n=.012)=>Vi(`rb${gn(r)},${gn(t)},${gn(e)},${n}`,()=>ya(new $c(r,t,e,1,Math.min(n,Math.min(r,t,e)/2-1e-4)))),Ne=(r,t,e)=>Vi(`bx${gn(r)},${gn(t)},${gn(e)}`,()=>new j(r,t,e)),Ot=(r,t,e,n=14)=>Vi(`cy${gn(r)},${gn(t)},${gn(e)},${n}`,()=>new ut(r,t,e,n)),sr=(r,t=14,e=1)=>Vi(`sp${gn(r)},${t},${e}`,()=>new ce(r,t,Math.max(6,t>>1),0,Math.PI*2,0,Math.PI*e)),Jc=(r,t)=>Vi(`ca${gn(r)},${gn(t)}`,()=>new Vs(r,t,3,8));function ki(r,t,e,n=.006){return Vi("pr"+r,()=>{let i=new an(t.map(([o,a])=>new J(o,a))),s=new Nn(i,{depth:e-n*2,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:1,curveSegments:6});return s.translate(0,0,-(e-n*2)/2),s.deleteAttribute("uv"),s=ya(s),s.computeVertexNormals(),hp(s),s})}function fu(r,t,e,n=.006){return Vi("sl"+r,()=>{let i=new an(t.map(([o,a])=>new J(o,-a))),s=new Nn(i,{depth:e-n*2,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:1});return s.rotateX(-Math.PI/2),s.translate(0,n,0),s.deleteAttribute("uv"),s=ya(s),s.computeVertexNormals(),hp(s),s})}function hp(r){let t=r.attributes.position.count;r.setAttribute("uv",new ke(new Float32Array(t*2),2))}function A2(r,t,e,n,i,s){return Vi(`tl${gn(r)},${gn(t)},${gn(e)},${gn(n)},${gn(i)},${gn(s)}`,()=>{let o=new an;o.absarc(t,e,n,-Math.PI/2,Math.PI/2,!1),o.absarc(r,e,n,Math.PI/2,Math.PI*1.5,!1);let a=new Ws,l=n-i;a.absarc(t,e,l,-Math.PI/2,Math.PI/2,!1),a.absarc(r,e,l,Math.PI/2,Math.PI*1.5,!1),o.holes.push(a);let c=new Nn(o,{depth:s,bevelEnabled:!1,curveSegments:10});c.translate(0,0,-s/2);let h=c.attributes.position,u=c.attributes.uv;for(let f=0;f<h.count;f++){let d=h.getX(f),p=h.getY(f);u.setXY(f,d*34+(Math.abs(d-(r+t)/2)>(t-r)/2?(p-e)*34:0),h.getZ(f)/s+.5)}return ya(c)})}var _i={};function en(r,t){return _i[r]||(_i[r]=new ht(Object.assign({roughness:.7,metalness:.15},t)))}var mn=()=>en("steel",{color:3421743,roughness:.42,metalness:.65}),bt=()=>en("dark",{color:2039837,roughness:.6,metalness:.35}),nh=()=>en("rubber",{color:1710617,roughness:.92,metalness:0}),os=()=>en("glass",{color:1713969,roughness:.06,metalness:.9,envMapIntensity:2.5}),jc=()=>en("lamp",{color:16774358,emissive:16773320,emissiveIntensity:.6,roughness:.2}),rp=()=>en("skin",{color:13146740,roughness:.75,metalness:0}),yi=()=>en("red",{color:10819356,roughness:.55,metalness:.2}),C2=()=>en("redl",{color:16722464,emissive:16718352,emissiveIntensity:1.6,roughness:.3}),Ma=()=>en("white",{color:14277587,roughness:.5,metalness:.1}),Oe=(r,t=.68,e=.25)=>en("p"+r+t+e,{color:r,roughness:t,metalness:e}),P2={kor:["#5b6440","#3f4a2e","#6f5a3c","#23251e"],nato:["#58603f","#363d29","#5a4a33","#1f211b"],tan:["#ad9a74","#a08d68","#b5a37c","#94825f"],jgsdf:["#5e6b45","#40472f","#6d5c3f","#2a2c22"],enemy:["#5d605b","#474a45","#6d6e67","#33352f"],uni:["#6a6e4c","#4d5236","#7d6c4c","#30321f"],euni:["#4b4f4a","#383b37","#5e5f58","#2a2c29"]};function I2(r){let t="camo_"+r;if(_i[t])return _i[t];let e=256,n=P2[r].map(p=>[1,3,5].map(g=>parseInt(p.slice(g,g+2),16))),i=Zt(t),s=bn(e,e,3,4,i),o=bn(e,e,3,4,i),a=bn(e,e,4,3,i),l=bn(e,e,32,2,i),c=document.createElement("canvas");c.width=c.height=e;let h=c.getContext("2d"),u=h.createImageData(e,e),f=u.data;for(let p=0;p<e*e;p++){let g=n[0];s[p]>.56&&(g=n[1]),o[p]>.6&&(g=n[2]),a[p]>.66&&(g=n[3]);let m=.9+(l[p]-.5)*.35;f[p*4]=Math.min(255,g[0]*m),f[p*4+1]=Math.min(255,g[1]*m),f[p*4+2]=Math.min(255,g[2]*m),f[p*4+3]=255}h.putImageData(u,0,0);let d=new qe(c);return d.colorSpace=we,d.wrapS=d.wrapT=de,d.anisotropy=4,_i[t]=d}function Kn(r,t=2.2,e=.72){let n=`camoM_${r}_${t}`;if(_i[n])return _i[n];let i=new ht({map:I2(r),roughness:e,metalness:.18});return i.onBeforeCompile=s=>{s.uniforms.triScale={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position; vON = normal;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON; uniform float triScale;`).replace("#include <map_fragment>",`
        vec3 tb = pow(abs(normalize(vON)), vec3(4.0)); tb /= (tb.x + tb.y + tb.z);
        vec3 tp = vOP * triScale;
        vec4 sampledDiffuseColor = texture2D(map, tp.zy) * tb.x + texture2D(map, tp.xz + 0.37) * tb.y + texture2D(map, tp.xy + 0.71) * tb.z;
        diffuseColor *= sampledDiffuseColor;`)},i.customProgramCacheKey=()=>"tri"+t,_i[n]=i}function D2(){if(_i.track)return _i.track;let r=document.createElement("canvas");r.width=64,r.height=64;let t=r.getContext("2d");t.fillStyle="#262624",t.fillRect(0,0,64,64),t.fillStyle="#3a3a36",t.fillRect(4,3,56,40),t.fillStyle="#4a4943",t.fillRect(4,3,56,7),t.fillStyle="#151514",t.fillRect(0,46,64,18),t.fillRect(29,0,6,64);let e=new qe(r);e.colorSpace=we,e.wrapS=e.wrapT=de;let n=new qe(r);return n.wrapS=n.wrapT=de,_i.track=new ht({map:e,bumpMap:n,bumpScale:2,roughness:.82,metalness:.45})}var op=()=>en("sandbag",{color:10982512,roughness:.95,metalness:0});function U(r,t,e,n=0,i=0,s=0,o=0,a=0,l=0){let c=new lt(t,e);return c.position.set(n,i,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,r.add(c),c}var Qc=r=>(r.castShadow=!1,r);function Ze(r,t,e,n,i,s=!0){let o=new I(...t),a=new I(...e),l=o.distanceTo(a),c=U(r,s?Jc(n,Math.max(.001,l)):Ot(n,n,l,8),i);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new I(0,1,0),a.clone().sub(o).normalize()),c}var ai=(r,t,e,n,i,s,o=0,a=0,l=14)=>U(r,Ot(e,t,n,l),i,s+n/2,o,a,0,0,-Math.PI/2);function th(r,t,e,n,i,s,o){let a=Math.sign(n)||1;U(r,Ot(i,i,s,18),nh(),t,e,n,Math.PI/2,0,0),U(r,Ot(i*.62,i*.62,s*1.04,14),o,t,e,n,Math.PI/2,0,0),U(r,Ot(i*.22,i*.3,s*.4,8),mn(),t,e,n+a*s*.6,Math.PI/2,0,0)}function L2(r,t,e,n,i,s){U(r,Ot(i,i,s,16),nh(),t,e,n,Math.PI/2,0,0),U(r,Ot(i*.8,i*.8,s*1.08,14),mn(),t,e,n,Math.PI/2,0,0),U(r,Ot(i*.25,i*.25,s*1.3,8),bt(),t,e,n,Math.PI/2,0,0)}function up(r,t){let{x0:e,x1:n,y:i,r:s,w:o,n:a,z:l,wr:c}=t;U(r,A2(e,n,i,s,.016,o),D2(),0,0,l);let h=n-e;for(let u=0;u<a;u++)L2(r,e+.06+u*(h-.12)/(a-1),i-s+.016+c,l,c,o*.82);U(r,Ot(s*.82,s*.82,o*.9,12),mn(),n,i,l,Math.PI/2,0,0),U(r,Ot(s*.78,s*.78,o*.9,12),bt(),e,i,l,Math.PI/2,0,0);for(let u=0;u<3;u++)U(r,Ot(.012,.012,o*.6,8),mn(),e+h*(.25+u*.25),i+s-.028,l,Math.PI/2,0,0)}function eh(r,t,e,n,i,s,o){for(let a=0;a<i;a++)U(r,Ot(.011,.011,.05,8),o,t-a*.022,e+.02,n,.6*s,0,-.5)}var rs=(r,t,e,n,i)=>Qc(U(r,Ot(.003,.005,i,4),bt(),t,e+i/2,n));function Kc(r,t){let{x:e=0,z:n=0,ry:i=0,pose:s="stand",uni:o,gear:a,helm:l,kit:c="rifle",side:h="ally"}=t,u=new Lt;u.position.set(e,0,n),u.rotation.y=i,r.add(u);let f=s==="kneel",d=f?.13:.21;if(f)Ze(u,[0,d,-.035],[.075,d-.01,-.04],.022,o),Ze(u,[.075,d-.01,-.04],[.08,.025,-.04],.02,o),U(u,dt(.055,.025,.032,.008),bt(),.095,.013,-.04),Ze(u,[0,d,.035],[0,.03,.045],.022,o),Ze(u,[0,.03,.045],[-.11,.025,.045],.02,o),U(u,dt(.03,.03,.032,.008),bt(),-.13,.02,.045);else for(let _ of[-1,1])Ze(u,[0,d,_*.034],[_*.02,.11,_*.036],.022,o),Ze(u,[_*.02,.11,_*.036],[_*-.01,.03,_*.036],.02,o),U(u,dt(.055,.026,.032,.008),bt(),_*-0+.012,.013,_*.036);let p=d,g=f?.18:.08,m=new Lt;m.position.set(0,p,0),m.rotation.z=-g,u.add(m),U(m,dt(.07,.13,.1,.025),o,0,.07,0),U(m,dt(.085,.09,.108,.015),a,.002,.085,0);for(let _ of[-1,0,1])U(m,dt(.022,.03,.026,.006),a,.05,.06,_*.03);U(m,dt(.05,.08,.085,.015),a,-.065,.085,0),U(m,Ot(.016,.018,.03,8),rp(),.005,.15,0),U(m,sr(.03,12),rp(),.008,.175,0),U(m,sr(.038,14,.5),l,0,.178,0).scale.set(1.05,.95,1),U(m,dt(.012,.012,.04,.004),bt(),.035,.192,0),h==="enemy"&&U(m,dt(.03,.02,.112,.004),yi(),0,.12,0);let v=.13;if(c==="rifle"||c==="binoc")if(Ze(m,[0,v,-.05],[.05,v-.05,-.055],.017,o),Ze(m,[.05,v-.05,-.055],[.1,v-.02,-.02],.015,o),Ze(m,[0,v,.05],[.03,v-.06,.05],.017,o),Ze(m,[.03,v-.06,.05],[.05,v-.03,.012],.015,o),c==="rifle"){let _=new Lt;_.position.set(.04,v-.025,.005),_.rotation.z=g*.9,m.add(_),U(_,dt(.12,.022,.014,.004),bt(),.03,0,0),U(_,Ot(.005,.005,.09,6),mn(),.13,.004,0,0,0,Math.PI/2),U(_,dt(.016,.04,.012,.003),bt(),.04,-.025,0,0,0,h==="enemy"?.35:.1),U(_,dt(.05,.026,.012,.004),bt(),-.05,-.008,0),U(_,dt(.03,.014,.012,.003),bt(),.03,.019,0)}else U(m,dt(.03,.022,.05,.006),bt(),.06,.168,0);else c==="grip"?(Ze(m,[0,v,-.05],[.06,v-.05,-.05],.017,o),Ze(m,[.06,v-.05,-.05],[.11,v-.03,-.02],.015,o),Ze(m,[0,v,.05],[.06,v-.05,.05],.017,o),Ze(m,[.06,v-.05,.05],[.11,v-.03,.02],.015,o)):c==="shoulder"&&(Ze(m,[0,v,-.05],[.04,v-.04,-.06],.017,o),Ze(m,[.04,v-.04,-.06],[.06,v+.02,-.05],.015,o),Ze(m,[0,v,.05],[.05,v-.03,.06],.017,o),Ze(m,[.05,v-.03,.06],[.12,v+.025,.05],.015,o));return u}var ap=()=>({uni:Kn("uni",3.2,.9),gear:Oe(4935478,.9,0),helm:Kn("uni",3.2,.8)}),N2=()=>({uni:Kn("euni",3.2,.9),gear:Oe(2961196,.9,0),helm:Oe(3882554,.6,.2),side:"enemy"});function lp(r,t,e,n,i){for(let s=0;s<i;s++){let o=e+(n-e)*(s+.5)/i;U(r,dt(.13,.055,.075,.025),op(),Math.cos(o)*t,.03,Math.sin(o)*t,0,-o+Math.PI/2,0),U(r,dt(.13,.055,.075,.025),op(),Math.cos(o+(n-e)/i/2)*(t-.01),.083,Math.sin(o+(n-e)/i/2)*(t-.01),0,-o+Math.PI/2,0)}}var uu=null;function oi(r,t,e){if(!uu){let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,4,32,32,32);o.addColorStop(0,"rgba(0,0,0,0.55)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),uu=new Ie({map:new qe(i),transparent:!0,depthWrite:!1})}let n=new lt(Vi("blobg",()=>new le(1,1).rotateX(-Math.PI/2)),uu);return n.scale.set(t,1,e),n.position.y=.004,n.renderOrder=1,r.add(n),n.userData.keep=!0,n}function ba(r,t,e,n,i,s){for(let o of t)for(let a of[-1,1])th(r,o,n,a*e,n,i,s)}function Zc(r,t,e,n,i,s,o,a=!1){let l=e-t,c=(t+e)/2;U(r,dt(l,i*.55,n,.02),o,c,s+i*.275,0),U(r,ki(`cab${gn(l)},${gn(i)},${a}`,[[-l/2,0],[l/2-.01,0],[l/2-(a?.07:.05),i*.45],[-l/2,i*.45]],n,.008),o,c,s+i*.55,0);let h=Math.atan2(a?.07:.05,i*.45);for(let u of[-1,1])U(r,Ne(.006,i*.32,n*.4),os(),e-.012-(a?.035:.025),s+i*.77,u*n*.22,0,0,h);for(let u of[-1,1])U(r,Ne(l*.42,i*.25,.004),os(),c+l*.12,s+i*.78,u*(n/2+.001));U(r,dt(.04,.035,n*1.04,.008),bt(),e+.012,s+.02,0);for(let u of[-1,1])U(r,Ot(.013,.013,.01,10),jc(),e+.002,s+i*.3,u*n*.36,0,0,Math.PI/2),U(r,dt(.015,.035,.01,.003),bt(),e-.06,s+i*.8,u*(n/2+.02));for(let u=0;u<4;u++)U(r,Ne(.004,.008,n*.4),bt(),e+.001,s+i*.12+u*.022,0)}function fp(r){r==="ewcar"&&(r="jammer");let t=new Lt,e=new Lt;t.add(e);let n=new Lt;e.add(n);let i=new on,s=[],o=[],a=U2[r];return a?(a({root:t,yaw:e,pitch:n,muzzle:i,spin:s,glow:o}),n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:s,glow:o}):null}var U2={browning({root:r,yaw:t,pitch:e,muzzle:n}){oi(r,.95,.95),lp(r,.36,-1.9,1.9,9);let i=ap();for(let[s,o]of[[.16,.12],[.16,-.12],[-.2,0]])Ze(t,[0,.19,0],[s,0,o],.008,bt(),!1);U(t,Ot(.02,.025,.04,10),bt(),0,.2,0),e.position.set(0,.23,0),U(e,dt(.2,.06,.055,.008),mn(),-.02,0,0),U(e,dt(.14,.012,.05,.004),bt(),0,.035,0);for(let s of[-1,1])U(e,Ot(.006,.006,.05,6),bt(),-.14,-.005,s*.018,0,0,Math.PI/2);U(e,dt(.02,.03,.05,.005),bt(),-.13,0,0),U(e,Ot(.018,.018,.12,12),bt(),.14,.004,0,0,0,Math.PI/2);for(let s=0;s<4;s++)U(e,Ot(.0185,.0185,.006,12),mn(),.1+s*.026,.004,0,0,0,Math.PI/2);ai(e,.011,.01,.33,mn(),.2,.004),U(e,Ot(.016,.016,.03,10),bt(),.54,.004,0,0,0,Math.PI/2),U(e,dt(.06,.05,.035,.005),Oe(5001779),-0,-.035,.05),U(e,Ne(.02,.008,.04),en("brass",{color:11569726,roughness:.35,metalness:.9}),0,0,.035),n.position.set(.58,.004,0),Kc(t,Object.assign({x:-.3,z:0,pose:"kneel",kit:"grip"},i)),U(t,dt(.09,.06,.06,.008),Oe(5001779),-.1,.03,.2),U(t,dt(.09,.06,.06,.008),Oe(5001779),-.1,.03,.27)},k9({root:r,yaw:t,pitch:e,muzzle:n}){let i=Kn("kor");oi(r,1.15,.6),U(t,ki("k9hull",[[-.43,.075],[.34,.075],[.45,.15],[.32,.235],[-.43,.235],[-.44,.16]],.3),i);for(let s of[-1,1])U(t,dt(.86,.014,.075,.004),i,-.005,.228,s*.19),U(t,dt(.66,.045,.012,.004),i,-.04,.2,s*.226),up(t,{x0:-.37,x1:.37,y:.11,r:.075,w:.075,n:6,z:s*.185,wr:.047});for(let s=0;s<5;s++)U(t,Ne(.012,.006,.11),bt(),.2+s*.022,.24,-.07);U(t,dt(.05,.02,.06,.006),bt(),.12,.24,-.13),U(t,Ot(.032,.032,.012,14),i,.25,.242,.08);for(let s of[-1,1])U(t,Ot(.014,.014,.012,10),jc(),.42,.17,s*.12,0,0,Math.PI/2-.6),U(t,dt(.03,.03,.03,.006),bt(),.41,.17,s*.12);for(let s of[-1,1])Ze(t,[.36,.2,s*.05],[.4,.3,0],.006,bt(),!1);U(t,ki("k9tur",[[-.38,0],[.09,0],[.17,.06],[.13,.165],[-.37,.165]],.36,.008),i,0,.235,0),U(t,dt(.08,.1,.34,.01),i,-.41,.31,0);for(let s=0;s<4;s++)U(t,Ne(.004,.09,.345),bt(),-.44+s*.02,.31,0);U(t,dt(.07,.04,.05,.01),Oe(4869940),-.4,.38,.1),U(t,dt(.07,.04,.05,.01),Oe(7233088),-.4,.38,-.08),U(t,Ot(.05,.055,.035,16),i,-.12,.418,.09),U(t,Ot(.046,.046,.01,16),i,-.12,.44,.09),ai(t,.007,.006,.13,mn(),-.12,.465,.09),U(t,dt(.06,.025,.02,.004),bt(),-.12,.465,.09),U(t,Ot(.04,.04,.01,14),i,-.2,.405,-.09),U(t,dt(.05,.04,.04,.006),i,.02,.42,-.12),U(t,Ne(.004,.022,.03),os(),.046,.425,-.12);for(let s of[-1,1])U(t,Ne(.14,.09,.004),bt(),-.2,.32,s*.181),U(t,Ne(.06,.006,.006),mn(),-.2,.36,s*.185),eh(t,.08,.36,s*.17,4,s,bt());rs(t,-.33,.4,.15,.24),rs(t,-.33,.4,-.15,.18),e.position.set(.15,.32,0),e.rotation.z=.14,U(e,dt(.09,.11,.15,.015),i,0,0,0),U(e,dt(.16,.035,.05,.008),mn(),.08,-.04,0),ai(e,.026,.021,.86,en("k9gun",{color:5067576,roughness:.6,metalness:.35}),.04,0),U(e,Ot(.033,.033,.09,16),en("k9gun",{}),.5,0,0,0,0,Math.PI/2),U(e,dt(.085,.052,.068,.012),bt(),.93,0,0);for(let s of[-1,1])U(e,Ne(.05,.03,.006),en("void",{color:328965,roughness:1}),.93,0,s*.035);n.position.set(.98,0,0)},type16({root:r,yaw:t,pitch:e,muzzle:n}){let i=Kn("jgsdf");oi(r,1.1,.55),U(t,ki("t16hull",[[-.45,.085],[.32,.085],[.46,.17],[.38,.22],[-.45,.22]],.36),i),U(t,dt(.9,.012,.4,.004),i,-.005,.222,0);for(let s of[-.33,-.15,.1,.28])for(let o of[-1,1])th(t,s,.075,o*.19,.075,.06,Oe(4146480));for(let s of[-1,1]){U(t,dt(.86,.03,.025,.006),i,0,.18,s*.19);for(let o of[-.24,.19])U(t,dt(.13,.05,.02,.008),i,o,.14,s*.2)}U(t,dt(.06,.03,.08,.008),i,.33,.235,.09),U(t,Ne(.004,.02,.06),os(),.362,.24,.09);for(let s of[-1,1])U(t,Ot(.013,.013,.01,10),jc(),.45,.17,s*.13,0,0,Math.PI/2-.5);for(let s=0;s<4;s++)U(t,Ne(.1,.005,.012),bt(),-.32,.225,-.12+s*.03);U(t,fu("t16t",[[-.2,-.15],[.06,-.16],[.17,-.08],[.17,.08],[.06,.16],[-.2,.15],[-.26,.1],[-.26,-.1]],.12,.008),i,-.06,.222,0),U(t,Ot(.04,.044,.03,14),i,-.12,.355,.07),U(t,dt(.05,.04,.04,.006),i,-.03,.36,-.08),U(t,Ne(.004,.02,.03),os(),-.004,.365,-.08),ai(t,.006,.005,.12,mn(),-.12,.38,.07);for(let s of[-1,1])eh(t,.07,.31,s*.15,3,s,bt());rs(t,-.3,.33,.1,.22),e.position.set(.1,.29,0),U(e,dt(.08,.075,.13,.012),i,0,0,0),ai(e,.02,.016,.72,en("t16gun",{color:4937019,roughness:.55,metalness:.35}),.04,.005),U(e,Ot(.026,.026,.07,14),en("t16gun",{}),.42,.005,0,0,0,Math.PI/2),U(e,dt(.055,.04,.05,.01),bt(),.78,.005,0),n.position.set(.82,.005,0)},patriot({root:r,yaw:t,pitch:e,muzzle:n}){let i=Kn("tan",2);oi(r,1.2,.6),U(t,dt(.34,.05,.22,.008),bt(),.3,.12,0),Zc(t,.32,.5,.3,.22,.1,i),ba(t,[.42,.22,.12],.13,.06,.05,Oe(8022604)),U(t,dt(.78,.04,.32,.008),i,-.17,.155,0);for(let o of[-1,1])U(t,dt(.74,.04,.02,.006),bt(),-.17,.12,o*.14);ba(t,[-.36,-.48],.15,.06,.05,Oe(8022604));for(let[o,a]of[[.06,1],[.06,-1],[-.5,1],[-.5,-1]])Ze(t,[o,.15,a*.15],[o,.01,a*.27],.01,bt(),!1),U(t,Ot(.025,.025,.01,10),bt(),o,.008,a*.27);U(t,dt(.14,.1,.2,.01),i,-.02,.22,0),e.position.set(-.52,.19,0),e.rotation.z=.66;let s=Oe(12035453,.7,.15);for(let[o,a]of[[.06,-.085],[.06,.085],[.22,-.085],[.22,.085]]){U(e,dt(.64,.155,.155,.012),s,.32,o,a);for(let l=0;l<5;l++)U(e,dt(.012,.164,.164,.004),i,.04+l*.14,o,a);U(e,Ne(.006,.12,.12),Ma(),.643,o,a)}U(e,dt(.66,.02,.36,.006),bt(),.32,-.035,0),n.position.set(.66,.14,0)},irondome({root:r,yaw:t,pitch:e,muzzle:n,spin:i}){let s=Kn("tan",2);oi(r,.95,.85),U(t,dt(.66,.05,.42,.01),bt(),0,.1,0);for(let l of[-1,1])th(t,-.12,.065,l*.24,.065,.05,Oe(8022604));for(let[l,c]of[[.28,1],[.28,-1],[-.28,1],[-.28,-1]])Ze(t,[l,.1,c*.18],[l+.03*Math.sign(l),.01,c*.3],.01,bt(),!1),U(t,Ot(.025,.025,.01,10),bt(),l+.03*Math.sign(l),.008,c*.3);U(t,dt(.1,.12,.16,.01),s,.25,.19,0),e.position.set(-.05,.16,0),e.rotation.z=.8,U(e,dt(.48,.44,.5,.02),s,0,.22,0);for(let l=0;l<4;l++)U(e,Ne(.49,.008,.51),bt(),0,.03+l*.12,0);let o=Ma();for(let l=0;l<4;l++)for(let c=0;c<5;c++)U(e,Ot(.04,.04,.012,12),bt(),.242,.05+l*.105,-.2+c*.1,0,0,Math.PI/2),U(e,sr(.03,10,.5),o,.244,.05+l*.105,-.2+c*.1,0,0,-Math.PI/2);n.position.set(.28,.22,0),Ze(r,[-.33,0,.3],[-.33,.42,.3],.018,bt(),!1);let a=new Lt;a.position.set(-.33,.48,.3),r.add(a),U(a,dt(.05,.22,.3,.01),Oe(13222824,.6,.15),0,0,0,0,0,.12),U(a,Ne(.006,.19,.27),Oe(9407094,.5,.2),.027,.003,0,0,0,.12),U(a,dt(.06,.05,.08,.008),bt(),-.05,-.05,0),i.push([a,"y",1.4])},jammer({root:r,yaw:t,muzzle:e,spin:n,glow:i}){let s=Kn("nato");oi(r,1,.55),U(t,dt(.82,.05,.24,.008),bt(),0,.12,0),ba(t,[.27,-.13,-.27],.16,.065,.055,Oe(4080688)),Zc(t,.17,.4,.32,.24,.13,s),U(t,dt(.5,.25,.34,.014),s,-.15,.275,0);for(let l of[-1,1])U(t,dt(.08,.05,.006,.003),bt(),-.2,.3,l*.171),U(t,Ne(.1,.17,.004),bt(),-.02,.27,l*.171);U(t,dt(.12,.06,.12,.008),Oe(5264702),-.32,.43,.08);for(let l=0;l<3;l++)U(t,Ne(.1,.004,.1),bt(),-.32,.405+l*.016,.08);for(let l=0;l<3;l++)U(t,Ot(.022-l*.005,.024-l*.005,.2,10),Oe(10395791,.5,.5),-.12,.5+l*.18,-.06);let o=new Lt;o.position.set(-.12,.98,-.06),r.add(o),U(o,dt(.04,.05,.36,.008),Ma(),0,0,0);for(let l=0;l<7;l++)U(o,Ne(.004,.004,.06+l%3*.03),bt(),.024,0,-.15+l*.05,Math.PI/2,0,0);U(o,dt(.14,.1,.03,.01),Oe(14211536,.5,.1),0,.08,0),n.push([o,"y",1.2]),rs(t,-.36,.4,-.13,.3),rs(t,.2,.37,.12,.2);let a=Qc(U(r,Vi("ewring",()=>new _n(.5,.016,6,40)),en("ewglow",{color:7328767,emissive:4174079,emissiveIntensity:1.4}),0,.03,0,Math.PI/2,0,0));i.push(a),e.position.set(-.12,.98,-.06)},javelin({root:r,yaw:t,pitch:e,muzzle:n}){oi(r,.9,.9),lp(r,.36,-1.5,1.5,7);let i=ap();Kc(t,Object.assign({x:-.06,z:.06,pose:"kneel",kit:"shoulder"},i)),Kc(t,Object.assign({x:-.16,z:-.18,pose:"kneel",kit:"binoc",ry:.3},i)),U(t,dt(.12,.07,.08,.015),Oe(4935478,.9,0),-.28,.035,.18),e.position.set(-.04,.285,.1),e.rotation.z=.1;let s=Oe(6053952,.75,.1);U(e,Ot(.034,.034,.5,14),s,.06,0,0,0,0,Math.PI/2),U(e,Ot(.042,.042,.04,14),s,.3,0,0,0,0,Math.PI/2),U(e,Ot(.042,.042,.04,14),s,-.18,0,0,0,0,Math.PI/2),U(e,Ot(.03,.03,.006,14),bt(),.322,0,0,0,0,Math.PI/2),U(e,dt(.11,.07,.09,.01),Oe(4869178,.7,.15),0,0,-.075),U(e,Ot(.02,.02,.01,12),os(),.058,.01,-.075,0,0,Math.PI/2),U(e,dt(.03,.02,.05,.006),bt(),-.06,.02,-.075),n.position.set(.34,0,0)},himars({root:r,yaw:t,pitch:e,muzzle:n}){let i=Kn("tan",2);oi(r,1.15,.55),U(t,dt(.92,.06,.24,.008),bt(),-.02,.13,0),ba(t,[.3,-.17,-.34],.155,.075,.06,Oe(8022604)),Zc(t,.22,.48,.34,.27,.14,i,!0);for(let s of[-1,1])U(t,dt(.1,.012,.06,.004),bt(),.3,.14,s*.2);U(t,dt(.66,.04,.36,.008),i,-.12,.19,0);for(let s of[-1,1])U(t,dt(.6,.05,.014,.004),i,-.12,.17,s*.176);U(t,Ot(.12,.13,.04,18),bt(),-.2,.23,0),e.position.set(-.42,.26,0),e.rotation.z=.35,U(e,dt(.6,.2,.3,.014),i,.29,.1,0);for(let s=0;s<4;s++)U(e,Ne(.012,.205,.305),bt(),.06+s*.15,.1,0);U(e,Ne(.006,.18,.28),Oe(10127974),.593,.1,0);for(let s=0;s<2;s++)for(let o=0;o<3;o++)U(e,Ot(.036,.036,.012,14),bt(),.598,.055+s*.09,-.09+o*.09,0,0,Math.PI/2),U(e,sr(.024,10,.5),Ma(),.598,.055+s*.09,-.09+o*.09,0,0,-Math.PI/2);n.position.set(.62,.1,0)},hyunmoo({root:r,yaw:t,pitch:e,muzzle:n}){let i=Kn("kor",2);oi(r,1.35,.6),U(t,dt(1.18,.07,.28,.01),bt(),0,.15,0),ba(t,[.42,.26,-.25,-.41],.18,.08,.065,Oe(4080688)),Zc(t,.36,.6,.42,.28,.16,i,!0),U(t,dt(.6,.06,.42,.01),i,-.25,.22,0);for(let s of[-1,1])U(t,dt(.92,.06,.016,.004),i,-.08,.2,s*.21);U(t,dt(.16,.12,.42,.01),i,.24,.27,0);for(let s=0;s<4;s++)U(t,Ne(.005,.09,.3),bt(),.17+s*.04,.27,0);for(let[s,o]of[[.32,1],[.32,-1],[-.55,1],[-.55,-1]])Ze(t,[s,.17,o*.15],[s,.01,o*.24],.012,bt(),!1),U(t,Ot(.03,.03,.012,10),bt(),s,.008,o*.24);e.position.set(-.55,.26,0),e.rotation.z=.85,U(e,dt(.92,.04,.5,.008),bt(),.46,-.03,0),Ze(t,[.05,.22,0],[-.2,.62,0],.025,mn(),!1);for(let[s,o]of[[.1,-.1],[.1,.1],[.3,-.1],[.3,.1]]){U(e,Ot(.092,.092,.9,18),i,.47,s,o,0,0,Math.PI/2);for(let a of[.08,.47,.86])U(e,Ot(.097,.097,.025,18),bt(),a,s,o,0,0,Math.PI/2);U(e,Ot(.082,.082,.01,18),Ma(),.922,s,o,0,0,Math.PI/2)}n.position.set(.95,.2,0)}};function dp(r){let t=new Lt,e=new Lt;t.add(e);let n=[],i=F2[r];if(!i)return null;let s=i({root:t,body:e,spin:n});return{root:t,body:e,spin:n,hpY:s}}function cp(r,t){let e=Kn("enemy",2);oi(r,1,.55),U(r,ki("t90h",[[-.42,.07],[.32,.07],[.43,.14],[.36,.2],[-.42,.2],[-.43,.13]],.28),e),U(r,dt(.84,.012,.42,.004),e,-.005,.2,0);for(let s of[-1,1]){up(r,{x0:-.36,x1:.35,y:.1,r:.07,w:.07,n:6,z:s*.175,wr:.045}),U(r,dt(.66,.06,.012,.004),e,.02,.165,s*.214);for(let o=0;o<6;o++)U(r,Ne(.1,.035,.008),nh(),-.26+o*.11,.12,s*.216)}for(let s=0;s<6;s++)U(r,dt(.07,.016,.06,.003),e,.36,.188,-.15+s*.06,0,0,-.55);for(let s of[-1,1])U(r,Ot(.035,.035,.14,12),Oe(3816502),-.46,.15,s*.08,Math.PI/2,0,0);U(r,Ot(.012,.012,.1,6),bt(),-.42,.21,.15,0,0,Math.PI/2);let n=new Lt;n.position.set(-.05,.2,0),r.add(n),U(n,fu("t90t",[[.16,-.06],[.16,.06],[.08,.17],[-.1,.18],[-.22,.12],[-.24,0],[-.22,-.12],[-.1,-.18],[.08,-.17]],.075,.012),e,0,0,0),U(n,sr(.17,18,.5),e,-.04,.07,0).scale.set(1.1,.28,1),U(n,dt(.1,.06,.26,.015),e,-.25,.04,0);for(let s of[-1,1])U(n,ki("era",[[0,0],[.13,0],[.13,.03],[0,.07]],.12,.004),e,.08,.02,s*.1,0,s*.35,0),U(n,dt(.04,.025,.03,.006),C2(),.11,.09,s*.15),eh(n,0,.07,s*.16,4,s,bt());U(n,Ot(.05,.055,.035,14),e,-.05,.11,-.07),U(n,Ot(.04,.04,.03,14),e,-.06,.1,.08),ai(n,.006,.005,.12,mn(),-.06,.135,.08),U(n,dt(.05,.02,.02,.004),bt(),-.06,.13,.08);for(let s of[-1,1])U(n,dt(.16,.018,.006,.002),yi(),-.08,.045,s*.168,0,s*.12,0);if(U(n,dt(.05,.004,.05,.002),yi(),-.15,.11,0),t){for(let s=0;s<6;s++)U(n,Ne(.004,.11,.36),mn(),-.22-s*.025,.04,0);U(n,Ne(.13,.004,.36),mn(),-.285,.095,0);for(let s of[-.055,.055])ai(n,.02,.016,.62,en("egun",{color:3158574,roughness:.5,metalness:.5}),.13,.05,s),U(n,Ot(.026,.026,.12,12),en("egun",{}),.35,.05,s,0,0,Math.PI/2);U(r,ki("dozer",[[0,0],[.05,0],[.09,.09],[.05,.1]],.42,.006),mn(),.4,.04,0),U(r,dt(.012,.02,.4,.003),yi(),.475,.11,0),rs(n,-.15,.08,.12,.3),rs(n,-.15,.08,-.12,.3)}else ai(n,.02,.016,.6,en("egun",{color:3158574,roughness:.5,metalness:.5}),.13,.05),U(n,Ot(.026,.026,.12,12),en("egun",{}),.33,.05,0,0,0,Math.PI/2),rs(n,-.15,.08,.12,.26)}var F2={inf({body:r}){return Kc(r,Object.assign({pose:"stand",kit:"rifle"},N2())),oi(r,.25,.2),.68},apc({body:r}){let t=Kn("enemy",2);oi(r,.95,.45),U(r,ki("btr",[[-.4,.09],[.28,.09],[.42,.17],[.3,.25],[-.36,.25],[-.41,.2]],.32),t),U(r,dt(.66,.012,.34,.004),t,-.04,.252,0);for(let e of[-.27,-.12,.08,.23])for(let n of[-1,1])th(r,e,.07,n*.16,.07,.05,Oe(3092781));for(let e of[-1,1])U(r,Ne(.08,.06,.004),bt(),-.02,.17,e*.162),U(r,Ne(.7,.025,.004),yi(),-.03,.225,e*.162);U(r,Ne(.004,.03,.2),os(),.36,.22,0,0,0,.9);for(let e of[-1,1])U(r,Ot(.012,.012,.01,10),jc(),.41,.16,e*.11,0,0,Math.PI/2);U(r,Ot(.075,.09,.07,14),t,.02,.29,0),U(r,dt(.06,.04,.06,.01),t,.07,.31,0),ai(r,.009,.008,.26,mn(),.1,.31,0),ai(r,.006,.006,.09,mn(),.08,.3,.035);for(let e of[-1,1])eh(r,.02,.3,e*.07,3,e,bt());return U(r,Ot(.035,.035,.01,12),t,-.2,.258,.08),U(r,Ot(.035,.035,.01,12),t,-.2,.258,-.08),rs(r,-.34,.25,.12,.24),.72},tank({body:r}){return cp(r,!1),.72},boss({body:r}){let t=new Lt;return t.scale.setScalar(1.55),r.add(t),cp(t,!0),1.05},drone({body:r,spin:t}){r.position.y=1.4;let e=Oe(5921879,.6,.2);U(r,fu("shahed",[[.14,0],[-.17,-.2],[-.2,-.2],[-.16,0],[-.2,.2],[-.17,.2]],.012,.004),e,0,-.006,0),U(r,Jc(.026,.3),e,0,0,0,0,0,Math.PI/2),U(r,sr(.026,12),yi(),.175,0,0);for(let s of[-1,1])U(r,ki("sfin",[[-.04,0],[.02,0],[-.01,.05],[-.04,.05]],.006,.002),e,-.165,-.02,s*.2);U(r,Ot(.016,.022,.03,10),bt(),-.17,0,0,0,0,Math.PI/2);let n=new Lt;n.position.set(-.19,0,0),r.add(n);let i=U(n,Ne(.004,.11,.012),bt(),0,0,0);return U(n,Ne(.004,.012,.11),bt(),0,0,0),i.castShadow=!1,t.push([n,"x",40]),U(r,dt(.05,.004,.08,.002),yi(),-.05,.003,.11),U(r,dt(.05,.004,.08,.002),yi(),-.05,.003,-.11),1.75},heli({body:r,spin:t}){r.position.y=1.9;let e=Kn("enemy",2.2);U(r,Jc(.11,.42),e,.02,0,0,0,0,Math.PI/2).scale.set(1.15,1,.9),U(r,dt(.3,.1,.16,.04),e,-.06,.08,0);for(let o of[-1,1])U(r,Ot(.03,.03,.08,10),bt(),-.02,.1,o*.09,0,0,Math.PI/2);U(r,dt(.11,.07,.12,.02),os(),.25,.06,0),U(r,dt(.11,.06,.12,.02),os(),.15,.09,0),U(r,Jc(.05,.06),e,.35,-.02,0,0,0,Math.PI/2),U(r,sr(.035,12),bt(),.38,-.06,0),U(r,Ot(.025,.025,.04,10),bt(),.32,-.1,0),ai(r,.007,.006,.13,mn(),.32,-.12,0),U(r,Ot(.03,.06,.52,10),e,-.46,.03,0,0,0,Math.PI/2-.04),U(r,ki("hfin",[[-.06,0],[.06,0],[.02,.17],[-.05,.17]],.018,.004),e,-.7,.04,0),U(r,dt(.06,.008,.2,.003),e,-.62,.04,0),U(r,dt(.04,.006,.06,.002),yi(),-.68,.16,.012),U(r,dt(.1,.012,.5,.004),e,-.02,-.04,0,.12);for(let o of[-1,1]){U(r,Ot(.03,.03,.14,12),Oe(4277054),-.02,-.08,o*.16,0,0,Math.PI/2),U(r,Ot(.022,.022,.006,12),yi(),.052,-.08,o*.16,0,0,Math.PI/2);for(let a of[-.02,.02])ai(r,.009,.009,.14,Oe(6974822),-.08,-.07,o*.23+a);U(r,dt(.1,.04,.012,.004),yi(),-.18,.05,o*.072)}for(let o of[-1,1])Ze(r,[.2,-.08,o*.06],[.2,-.15,o*.07],.006,bt(),!1),U(r,Ot(.02,.02,.012,10),nh(),.2,-.16,o*.075,Math.PI/2,0,0);U(r,Ot(.012,.015,.08,8),bt(),0,.17,0);let i=new Lt;i.position.set(0,.21,0),r.add(i),U(i,Ot(.03,.03,.025,10),bt(),0,0,0);for(let o=0;o<5;o++){let a=o/5*Math.PI*2;Qc(U(i,Ne(.6,.006,.04),en("blade",{color:1974044,roughness:.5,metalness:.3}),Math.cos(a)*.3,0,-Math.sin(a)*.3,0,a,-.02))}t.push([i,"y",22]);let s=new Lt;s.position.set(-.72,.14,.022),r.add(s);for(let o=0;o<4;o++)Qc(U(s,Ne(.012,.14,.003),bt(),0,0,0,0,0,o*Math.PI/4));return t.push([s,"z",30]),2.3}};var du={};function gt(r,t={}){let e=r+JSON.stringify(t);return du[e]||(du[e]=new ht(Object.assign({color:r,roughness:.78,metalness:.12},t))),du[e]}var pp={},io=(r,t)=>pp[r]||(pp[r]=t()),Et=(r,t,e)=>io(`b${r},${t},${e}`,()=>new j(r,t,e)),Ve=(r,t,e,n=12)=>io(`c${r},${t},${e},${n}`,()=>new ut(r,t,e,n)),eo=(r,t=12)=>io(`s${r},${t}`,()=>new ce(r,t,Math.max(6,t>>1))),gu=(r,t)=>io(`k${r},${t}`,()=>new Vs(r,t,4,8));function ot(r,t,e,n=0,i=0,s=0,o=0,a=0,l=0){let c=new lt(t,typeof e=="number"?gt(e):e);return c.position.set(n,i,s),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}var Wi=(r,t,e,n,i,s,o=0)=>ot(r,Ve(t,t,e,10),n,i+e/2,s,o,0,0,Math.PI/2);function Mp(r){ot(r,Et(.84,.06,.84),9275515,0,.03,0);for(let t=0;t<14;t++){let e=t/14*Math.PI*2;ot(r,Et(.16,.09,.1),t%2?12166522:11048298,Math.cos(e)*.38,.1,Math.sin(e)*.38,0,-e+Math.PI/2,0)}}function no(r,t,e,n=.1,i=.14){ot(r,Et(t,i,.13),2829097,0,n,e);for(let s=0;s<4;s++)ot(r,Ve(.06,.06,.14,8),3881784,-t/2+.08+s*(t-.16)/3,n-.01,e,Math.PI/2,0,0)}function ih(r,t,e,n,i,s=0){let o=new Lt;return o.position.set(t,0,e),o.rotation.y=s,r.add(o),ot(o,gu(.075,.16),n,0,.2,0),ot(o,eo(.065),13805437,.01,.39,0),ot(o,eo(.075),i,0,.42,0),o}var sh=12757112,rr=11047274,mp=6121284,B2=4870710,O2=6251335,xn=2895147;function z2(r){let t=new Lt;Mp(t);let e=new Lt;t.add(e);let n=new Lt;e.add(n);let i=new on,s=[],o=[];switch(r){case"browning":{for(let a=0;a<3;a++){let l=a/3*Math.PI*2;ot(e,Ve(.015,.015,.3,6),xn,Math.cos(l)*.1,.17,Math.sin(l)*.1,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),ot(n,Et(.28,.1,.11),3816246,0,0,0),Wi(n,.022,.5,xn,.12,.01),ot(n,Et(.1,.08,.08),mp,-.02,-.02,.1),ot(n,Et(.06,.08,.08),xn,-.18,0,0),i.position.set(.62,.01,0),ih(e,-.28,0,rr,9075285);break}case"m777":{for(let[a,l]of[[2.7,.55],[-2.7,.55],[2.2,.35],[-2.2,.35]])ot(e,Et(l,.05,.06),sh,Math.cos(a)*l/2,.1,-Math.sin(a)*l/2,0,a,0);ot(e,Et(.34,.12,.3),sh,0,.18,0),ot(e,Ve(.1,.1,.05,12),xn,0,.12,.2,Math.PI/2,0,0),ot(e,Ve(.1,.1,.05,12),xn,0,.12,-.2,Math.PI/2,0,0),n.position.set(0,.3,0),n.rotation.z=.35,ot(n,Et(.42,.1,.14),rr,0,0,0),Wi(n,.04,.95,11639408,.1,.02),ot(n,Et(.08,.07,.1),xn,1.06,.02,0),i.position.set(1.1,.02,0);break}case"gepard":{no(e,.74,.24),no(e,.74,-.24),ot(e,Et(.74,.18,.4),5595199,0,.22,0),n.position.set(0,.42,0),ot(n,Et(.38,.22,.36),6318920,0,0,0),Wi(n,.025,.62,xn,.15,.02,.22),Wi(n,.025,.62,xn,.15,.02,-.22),ot(n,Et(.1,.12,.08),5595199,.12,.02,.22),ot(n,Et(.1,.12,.08),5595199,.12,.02,-.22);let l=ot(n,Ve(.13,.13,.025,14),13685958,-.16,.22,0,0,0,Math.PI/2-.2);s.push([l,"y",3]),i.position.set(.8,.02,0);break}case"jammer":{ot(e,Et(.6,.08,.36),xn,0,.12,0);for(let c of[-.2,.18])for(let h of[-.17,.17])ot(e,Ve(.07,.07,.06,10),2039583,c,.08,h,Math.PI/2,0,0);ot(e,Et(.18,.2,.34),sh,.22,.26,0),ot(e,Et(.06,.08,.3),2832964,.31,.3,0),ot(e,Et(.36,.26,.36),rr,-.08,.29,0),ot(e,Ve(.02,.025,.5,6),xn,-.08,.66,0);let a=ot(e,Ve(.16,.05,.05,16),15198690,-.08,.9,0,0,0,.5);s.push([a,"y",1.2]);let l=ot(t,io("ring",()=>new _n(.46,.02,6,32)),gt(7328767,{emissive:4174079,emissiveIntensity:1.4}),0,.08,0,Math.PI/2,0,0);l.castShadow=!1,o.push(l),i.position.set(-.08,.9,0);break}case"javelin":{ih(e,-.05,.12,rr,9075285),ih(e,-.2,-.16,rr,9075285,.4),n.position.set(-.05,.36,.12),n.rotation.z=.12,ot(n,Ve(.05,.05,.55,10),7170640,.05,0,0,0,0,Math.PI/2),ot(n,Et(.12,.1,.12),4868668,-.1,.06,.06),i.position.set(.34,0,0),ot(e,Et(.22,.12,.14),B2,-.3,.1,.14);break}case"k9":{no(e,.86,.25),no(e,.86,-.25),ot(e,Et(.86,.18,.42),O2,0,.22,0),n.position.set(-.04,.42,0),n.rotation.z=.12,ot(n,Et(.46,.2,.4),7040590,0,0,0),ot(n,Et(.2,.06,.14),5724735,-.1,.13,.08),Wi(n,.042,.9,5592895,.2,0),ot(n,Et(.09,.08,.11),xn,1.12,0,0),i.position.set(1.16,0,0);break}case"flash":{for(let a=0;a<3;a++){let l=a/3*Math.PI*2+.5;ot(e,Ve(.015,.015,.26,6),xn,Math.cos(l)*.09,.15,Math.sin(l)*.09,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),n.rotation.z=.1,ot(n,Et(.42,.18,.18),mp,.06,0,0);for(let[a,l]of[[.045,.045],[.045,-.045],[-.045,.045],[-.045,-.045]])ot(n,Ve(.035,.035,.02,10),1710618,.27,a,l,0,0,Math.PI/2);ot(n,Et(.42,.03,.19),14251818,.06,.095,0),i.position.set(.3,0,0),ih(e,-.28,.08,rr,9075285);break}case"himars":{ot(e,Et(.96,.1,.38),xn,0,.16,0);for(let a of[-.3,-.06,.32])for(let l of[-.19,.19])ot(e,Ve(.08,.08,.07,12),2039583,a,.09,l,Math.PI/2,0,0);ot(e,Et(.24,.24,.38),sh,.34,.33,0),ot(e,Et(.04,.1,.32),2832964,.465,.38,0),n.position.set(-.14,.3,0),n.rotation.z=.32,ot(n,Et(.6,.24,.36),rr,0,.12,0);for(let a=0;a<2;a++)for(let l=0;l<3;l++)ot(n,Ve(.04,.04,.02,10),1907995,.305,.06+a*.12,-.11+l*.11,0,0,Math.PI/2);i.position.set(.32,.12,0);break}}return n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:s,glow:o}}var gp=7021094,rh=2761766,Is=16726832;function H2(r){let t=new Lt,e=new Lt;t.add(e);let n=[],i=.7;switch(r){case"inf":{ot(e,gu(.085,.18),gp,0,.22,0),ot(e,eo(.07),13081975,.01,.43,0),ot(e,eo(.08),rh,-.005,.46,0),ot(e,Et(.1,.03,.18),Is,0,.3,0),ot(e,Et(.34,.035,.035),1381653,.12,.28,.08),ot(e,Et(.12,.14,.14),rh,-.1,.25,0),i=.68;break}case"jeep":{for(let s of[-.16,.17])for(let o of[-.15,.15])ot(e,Ve(.08,.08,.06,12),1447446,s,.08,o,Math.PI/2,0,0);ot(e,Et(.56,.14,.3),8004648,0,.18,0),ot(e,Et(.24,.12,.28),4409151,-.04,.31,0),ot(e,Et(.03,.1,.26),2240826,.09,.31,0),ot(e,Ve(.04,.04,.08,8),rh,-.06,.41,0),Wi(e,.015,.28,1118481,-.06,.45),ot(e,Et(.02,.1,.12),Is,-.28,.2,0),i=.7;break}case"apc":{for(let s=0;s<4;s++)for(let o of[-.17,.17])ot(e,Ve(.075,.075,.06,10),1381653,-.27+s*.18,.08,o,Math.PI/2,0,0);ot(e,Et(.74,.16,.32),8004648,0,.2,0),ot(e,Et(.2,.1,.32),9054766,.3,.24,0,0,0,-.35),ot(e,Et(.24,.1,.22),2761766,-.05,.33,0),Wi(e,.02,.32,1118481,.02,.35),ot(e,Et(.03,.05,.3),Is,-.37,.24,0),ot(e,Et(.1,.02,.1),Is,-.2,.29,0),i=.72;break}case"tank":case"boss":{let s=r==="boss",o=s?e.add(new Lt)&&e.children[0]:e;s&&o.scale.setScalar(1.55),no(o,.84,.22,.09,.16),no(o,.84,-.22,.09,.16),ot(o,Et(.8,.14,.36),s?2761252:8004648,0,.21,0),ot(o,Et(.38,.14,.3),s?3811884:6167584,-.04,.35,0),Wi(o,.03,.55,2303263,.14,.36,s?.07:0),s&&Wi(o,.03,.55,2303263,.14,.36,-.07),ot(o,Et(.04,.1,.32),Is,-.36,.22,0),ot(o,Et(.1,.03,.1),Is,-.04,.43,0),s&&(ot(o,Ve(.05,.05,.1,8),9313314,-.15,.48,.08),ot(o,Et(.18,.05,.38),9313314,.28,.25,0)),i=s?1.05:.72;break}case"drone":{e.position.y=1.4,ot(e,Et(.2,.07,.14),gp,0,0,0),ot(e,eo(.05),Is,.12,0,0);for(let[s,o]of[[.13,.13],[.13,-.13],[-.13,.13],[-.13,-.13]]){ot(e,Et(.2,.02,.02),rh,s/2,.02,o/2,0,Math.atan2(o,s)*-1,0);let a=ot(e,Ve(.08,.08,.006,12),gt(13159632,{transparent:!0,opacity:.45}),s,.05,o);a.castShadow=!1,n.push([a,"y",30])}i=1.75;break}case"heli":{e.position.y=1.9,ot(e,gu(.13,.36),6167584,.05,0,0,0,0,Math.PI/2),ot(e,eo(.11),2240826,.27,.03,0),ot(e,Ve(.035,.05,.5,8),4080185,-.42,.04,0,0,0,Math.PI/2),ot(e,Et(.06,.16,.03),4080185,-.66,.1,0),ot(e,Et(.14,.03,.46),3158829,.02,-.04,0),ot(e,Et(.08,.06,.05),Is,-.2,.05,.13);let s=new Lt;s.position.set(.04,.2,0),e.add(s),ot(s,Et(1.15,.01,.05),1842204,0,0,0),ot(s,Et(.05,.01,1.15),1842204,0,0,0),n.push([s,"y",22]),i=2.3;break}}return{root:t,body:e,spin:n,hpY:i}}function bp(){let r=new Lt;ot(r,Et(1.2,.08,1.2),9341565,0,.04,0);for(let s=0;s<28;s++){let o=s/28*4,a=Math.floor(o),l=o-a,c=[[-.56+l*1.12,-.56],[.56,-.56+l*1.12],[.56-l*1.12,.56],[-.56,.56-l*1.12]][a];ot(r,Et(.16,.1,.1),11771764,c[0],.12,c[1],0,a%2?Math.PI/2:0,0)}let t=new ht({map:Ld(2),roughness:.85}),e=new lt(Et(.62,.5,.5),[t,t,gt(10197900),gt(10197900),t,t]);e.position.set(-.1,.33,-.08),e.castShadow=e.receiveShadow=!0,r.add(e),ot(r,Et(.66,.04,.54),7106394,-.1,.6,-.08),ot(r,Ve(.02,.02,.9,6),13684944,.38,.5,.36);let n=ot(r,Et(.36,.22,.01),gt(3108816,{side:Ue}),.56,.82,.36);n.castShadow=!1,ot(r,Et(.16,.03,.012),16777215,.56,.82,.367),ot(r,Ve(.02,.02,.3,6),7829367,-.25,.75,-.1);let i=ot(r,Ve(.16,.04,.05,16),15067106,-.25,.92,-.1,0,0,.6);return ot(r,Et(.36,.01,.36),4015920,.3,.085,-.3),ot(r,io("hring",()=>new _n(.13,.015,4,24)),16777215,.3,.095,-.3,Math.PI/2,0,0),{root:r,spin:[[i,"y",.8]],flag:n}}var xp=null,vp=()=>xp||(xp=new ht({map:Od(),roughness:.85,metalness:.1}));function oh(r,t,e,n=.075,i=.08){for(let s of t)for(let o of[-e,e])ot(r,Ve(n,n,.07,12),1776411,s,i,o,Math.PI/2,0,0)}function G2(r){let t=fp(r);if(t)return t;if(r==="ewcar"&&(r="jammer"),!["patriot","type16","irondome","hyunmoo"].includes(r)){let c=z2(r);return["k9","himars","jammer"].includes(r)&&c.root.traverse(h=>{h.isMesh&&!Array.isArray(h.material)&&[6251335,7040590,5724735,12757112,11047274,6121284].includes(h.material.color.getHex())&&(h.material=vp())}),c}let e=new Lt;Mp(e);let n=new Lt;e.add(n);let i=new Lt;n.add(i);let s=new on,o=[],a=[],l=vp();if(r==="patriot"){ot(n,Et(1,.1,.4),xn,0,.17,0),oh(n,[-.36,-.18,.3],.19,.08,.09),ot(n,Et(.24,.24,.4),l,.38,.34,0),ot(n,Et(.04,.1,.34),2832964,.5,.4,0),i.position.set(-.12,.3,0),i.rotation.z=.55;for(let[c,h]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])ot(i,Et(.62,.19,.19),l,.05,c,h);for(let[c,h]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])ot(i,Et(.02,.15,.15),2763304,.365,c,h);s.position.set(.4,.18,0)}else if(r==="type16")ot(n,Et(.92,.2,.42),l,0,.24,0),ot(n,Et(.22,.12,.42),l,.4,.26,0,0,0,-.4),oh(n,[-.33,-.11,.11,.33],.22,.09,.1),i.position.set(-.06,.42,0),ot(i,Et(.42,.16,.36),l,0,0,0),ot(i,Et(.14,.06,.14),4015145,-.1,.11,.08),Wi(i,.032,.8,3817258,.18,.01),ot(i,Et(.07,.06,.08),xn,1,.01,0),s.position.set(1.02,.01,0);else if(r==="hyunmoo"){ot(n,Et(1.2,.12,.44),xn,0,.19,0),oh(n,[-.44,-.24,.24,.44],.21,.09,.1),ot(n,Et(.26,.28,.44),l,.47,.39,0),ot(n,Et(.04,.11,.38),2832964,.6,.45,0),ot(n,Et(.12,.1,.5),xn,-.55,.3,0),i.position.set(-.5,.33,0),i.rotation.z=.9;for(let[c,h]of[[.1,-.12],[.1,.12],[.33,-.12],[.33,.12]])ot(i,Ve(.11,.11,.95,14),l,.47,c,h,0,0,Math.PI/2),ot(i,Ve(.095,.095,.02,14),1907995,.95,c,h,0,0,Math.PI/2);ot(i,Et(.9,.04,.5),xn,.45,-.03,0),s.position.set(.98,.22,0)}else if(r==="irondome"){ot(n,Et(.7,.08,.5),xn,0,.1,0),oh(n,[-.2,.2],.26,.07,.07),i.position.set(0,.22,0),i.rotation.z=.75,ot(i,Et(.5,.42,.5),12567220,0,.2,0);for(let h=0;h<4;h++)for(let u=0;u<5;u++)ot(i,Ve(.035,.035,.02,8),2763304,.255,.04+h*.1,-.2+u*.1,0,0,Math.PI/2);s.position.set(.28,.2,0);let c=ot(e,Et(.06,.3,.32),14212303,-.3,.4,.28);ot(e,Ve(.02,.02,.3,6),xn,-.3,.18,.28),o.push([c,"y",1.5])}return i.add(s),{root:e,yaw:n,pitch:i,muzzle:s,spin:o,glow:a}}var yp=new ht({vertexColors:!0,roughness:.72,metalness:.15}),_p=new ht({vertexColors:!0,roughness:.45,metalness:.6});function k2(r){return r.isMeshStandardMaterial&&!r.map&&!r.transparent&&!r.vertexColors&&!r.onBeforeCompile.toString().includes("vOP")&&(r.emissiveIntensity===0||r.emissive.getHex()===0)&&(r.envMapIntensity??1)<=1.01}function as(r,t,e=!1){r.updateMatrixWorld(!0);let n=new $t().copy(r.matrixWorld).invert(),i=new Map,s=[],o=a=>{for(let l of a.children)if(!t(l)){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&l.geometry.attributes.position){let c=new $t().multiplyMatrices(n,l.matrixWorld),h=l.material,u=null;e&&k2(h)&&(u=h.color,h=h.metalness>.4?_p:yp);let f=h.uuid+(l.geometry.index?"i":"n");i.has(f)||i.set(f,{mat:h,geos:[],shadow:!1});let d=l.geometry.clone().applyMatrix4(c);for(let g of Object.keys(d.attributes))["position","normal","uv"].includes(g)||d.deleteAttribute(g);if(d.attributes.uv||d.setAttribute("uv",new ke(new Float32Array(d.attributes.position.count*2),2)),d.attributes.normal||d.computeVertexNormals(),h===yp||h===_p){let g=d.attributes.position.count,m=new Float32Array(g*3);for(let x=0;x<g;x++)m[x*3]=u.r,m[x*3+1]=u.g,m[x*3+2]=u.b;d.setAttribute("color",new ke(m,3))}let p=i.get(f);p.geos.push(d),p.shadow=p.shadow||l.castShadow,s.push(l)}o(l)}};o(r);for(let a of s)a.parent.remove(a);for(let{mat:a,geos:l,shadow:c}of i.values()){let h=jr(l,!1);if(!h)continue;let u=new lt(h,a);u.castShadow=c,u.receiveShadow=!0,r.add(u)}}var pu={},mu={};function Ep(r){for(let[t,e,n]of r)t.userData.spin=[e,n]}function Tp(r){let t=[],e=[];return r.traverse(n=>{n.userData.spin&&t.push([n,n.userData.spin[0],n.userData.spin[1]]),n.userData.glow&&e.push(n)}),{spin:t,glow:e}}function Xi(r){if(!pu[r]){let s=G2(r);Ep(s.spin),s.glow.forEach(a=>a.userData.glow=!0);for(let[a]of s.spin)as(a,()=>!1,!0);s.yaw.name="yaw",s.pitch.name="pitch",s.muzzle.name="muzzle";let o=a=>a.userData.spin||a.userData.glow||a.userData.keep;as(s.pitch,o,!0),as(s.yaw,a=>a===s.pitch||o(a),!0),as(s.root,a=>a===s.yaw||o(a),!0),s.root.traverse(a=>{a.castShadow=!1}),pu[r]=s.root}let t=pu[r].clone(!0),e=t.getObjectByName("yaw"),n=t.getObjectByName("pitch"),i=t.getObjectByName("muzzle");return Object.assign({root:t,yaw:e,pitch:n,muzzle:i},Tp(t))}function so(r){if(!mu[r]){let n=dp(r)||H2(r);Ep(n.spin);for(let[i]of n.spin)as(i,()=>!1,!0);n.body.name="body",as(n.body,i=>i.userData.spin||i.userData.keep,!0),n.root.traverse(i=>{i.castShadow=!1}),mu[r]={root:n.root,hpY:n.hpY}}let t=mu[r],e=t.root.clone(!0);return Object.assign({root:e,body:e.getObjectByName("body"),hpY:t.hpY},Tp(e))}var Sp=new Ie({color:7336959,transparent:!0,opacity:.45,depthWrite:!1}),V2=new Ie({color:16734815,transparent:!0,opacity:.45,depthWrite:!1});function wp(r){let t=Xi(r);return t.root.traverse(e=>{e.userData.keep?e.visible=!1:e.isMesh&&(e.material=Sp,e.castShadow=!1)}),t.setOk=e=>t.root.traverse(n=>{n.isMesh&&!n.userData.keep&&(n.material=e?Sp:V2)}),t}var Rp={},Si=r=>{let t=new qe(r);return t.colorSpace=we,t.anisotropy=8,t.wrapS=t.wrapT=de,t},Mi=(r,t)=>{let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]},ro=(r,t)=>Rp[r]||(Rp[r]=t());function Ea(r,t,e,n,i,s,o,a={}){let l=o()<(a.lit??.15);a.frame&&(r.fillStyle=a.frame,r.fillRect(e-2,n-2,i+4,s+4));let c=r.createLinearGradient(e,n,e,n+s);l?(c.addColorStop(0,"#f2dca0"),c.addColorStop(1,"#c49c58")):(c.addColorStop(0,a.sky||"#8fa9bd"),c.addColorStop(.5,"#56687a"),c.addColorStop(1,"#2b3540")),r.fillStyle=c,r.fillRect(e,n,i,s),r.fillStyle="rgba(255,255,255,0.18)",r.beginPath(),r.moveTo(e,n),r.lineTo(e+i*.5,n),r.lineTo(e,n+s*.55),r.fill(),a.mull!==!1&&(r.fillStyle=a.frame||"#e8e4da",r.fillRect(e,n+s*.45,i,2),r.fillRect(e+i/2-1,n,2,s)),l&&t&&(t.fillStyle="#a07a38",t.fillRect(e,n,i,s))}function Ta(r,t,e,n,i=1200,s=.05){for(let o=0;o<i;o++)r.fillStyle=`rgba(0,0,0,${n()*s})`,r.fillRect(n()*t,n()*e,2,2);for(let o=0;o<8;o++){let a=n()*t,l=r.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(0,0,0,0.07)"),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(a,0,2+n()*5,e*n())}}function Np(r,t,e,n,i){r.fillStyle=n,r.fillRect(0,0,t,e);for(let s=0;s<e;s+=5)for(let o=s/5%2?-5:0;o<t;o+=10)r.fillStyle=`rgba(${i()<.5?"0,0,0":"255,230,210"},${.03+i()*.08})`,r.fillRect(o,s,9,4);r.fillStyle="rgba(40,25,20,0.22)";for(let s=4;s<e;s+=5)r.fillRect(0,s,t,1)}function Up(r,t,e,n,i,s,o,a,l,c){r.fillStyle=a,r.fillRect(e,n,i,s),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(e,n+s-2,i,2),r.fillStyle=l,r.textAlign="center",r.textBaseline="middle",r.font=`bold ${Math.floor(s*.62)}px ${c}`,r.fillText(o,e+i/2,n+s/2+1,i*.9),t&&(t.fillStyle=a,t.globalAlpha=.7,t.fillRect(e,n,i,s),t.globalAlpha=1)}function Fp(r,t,e,n,i,s){r.strokeStyle="#1c1d1f",r.fillStyle="#1c1d1f";for(let o=0;o<s;o++){let a=n+o*i+i*.78;r.fillRect(t,a,e,3),r.lineWidth=1.5,r.strokeRect(t,a-i*.28,e,i*.28);for(let l=t;l<t+e;l+=6)r.beginPath(),r.moveTo(l,a-i*.28),r.lineTo(l,a),r.stroke();o<s-1&&(r.lineWidth=2.5,r.beginPath(),r.moveTo(t+e*.15,a),r.lineTo(t+e*.85,a+i),r.stroke())}}var ah=["#8a4a36","#9c6a4c","#6e3b2c","#b08a68","#7d5a48"],Ap=["DELI","PIZZA","CAFE","BAGELS","PHARMACY","NAILS","DINER","LAUNDRY","BOOKS","TACOS","BANK","HOTEL","MARKET","BAR","SHOES","NOODLES"],Cp=[["#1d2a3a","#f4d35e"],["#b8312f","#ffffff"],["#0f5c4a","#f1e7c8"],["#f2f0ea","#1a1a1a"],["#2a4f8f","#ffffff"],["#111111","#ff5a7a"]];function Bp(r){return ro("nyshop"+r,()=>{let[i,s]=Mi(256,384),[o,a]=Mi(256,384),l=Zt("nyshop"+r);a.fillStyle="#000",a.fillRect(0,0,256,384),Np(s,256,384,ah[r%ah.length],l),Ta(s,256,384,l),s.fillStyle="#d8d0c0",s.fillRect(0,0,256,8),s.fillStyle="rgba(0,0,0,0.3)",s.fillRect(0,8,256,3);let c=3,h=256/c;for(let g=0;g<4;g++)for(let m=0;m<c;m++){let x=m*h+h*.2,v=g*76.8+76.8*.18;s.fillStyle="#d9d1c1",s.fillRect(x-4,v-7,h*.6+8,6),Ea(s,a,x,v,h*.6,76.8*.62,l,{frame:r%2?"#f0ece4":"#2a2b2e"})}r%3!==2&&Fp(s,h*1.05,h*.9,0,76.8,4);let u=4*76.8,[f,d]=Cp[Math.floor(l()*Cp.length)];s.fillStyle="#2b2d30",s.fillRect(0,u,256,76.8),Up(s,a,0,u+2,256,76.8*.26,Ap[Math.floor(l()*Ap.length)],f,d,'"Arial Black","Helvetica",sans-serif');let p=s.createLinearGradient(0,u+76.8*.3,0,384);p.addColorStop(0,"#f6e2b0"),p.addColorStop(1,"#a8885a"),s.fillStyle=p,s.fillRect(8,u+76.8*.32,256*.6,76.8*.64),a.fillStyle="#6e5430",a.fillRect(8,u+76.8*.32,256*.6,76.8*.64),s.fillStyle="#4a4d52";for(let g=1;g<3;g++)s.fillRect(8+g*256*.2,u+76.8*.32,3,76.8*.64);return s.fillStyle="#3a3d42",s.fillRect(256*.72,u+76.8*.32,256*.2,76.8*.68),s.fillStyle="rgba(200,220,235,0.4)",s.fillRect(256*.74,u+76.8*.37,256*.16,76.8*.56),{map:Si(i),emissiveMap:Si(o)}})}function Op(r){return ro("nybrick"+r,()=>{let[n,i]=Mi(256,256),[s,o]=Mi(256,256),a=Zt("nybrick"+r);o.fillStyle="#000",o.fillRect(0,0,256,256),Np(i,256,256,ah[(r+2)%ah.length],a),Ta(i,256,256,a,800);let l=4,c=256/l;for(let h=0;h<4;h++){for(let u=0;u<l;u++){let f=u*c+c*.2;i.fillStyle="#cfc6b4",i.fillRect(f-3,h*64+64*.12,c*.6+6,5),Ea(i,o,f,h*64+64*.2,c*.6,64*.6,a,{frame:"#efe9dd",lit:.2})}i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(0,h*64+64-2,256,2)}return r%2===0&&Fp(i,c*1.1,c*1.8,0,64,4),{map:Si(n),emissiveMap:Si(s)}})}function Ds(r){return ro("nytower"+r,()=>{let[e,n]=Mi(256,256),[i,s]=Mi(256,256),o=Zt("nytower"+r);s.fillStyle="#000",s.fillRect(0,0,256,256);let a=["#d8cdb6","#c9bda4","#bfb7aa","#a99c88"][r%4];n.fillStyle=a,n.fillRect(0,0,256,256),Ta(n,256,256,o,900,.06);let l=8,c=256/l,h=8,u=256/h;for(let f=0;f<l;f++){let d=f*c+c*.22,p=c*.56;n.fillStyle="#4a4f55",n.fillRect(d,0,p,256);for(let g=0;g<h;g++)Ea(n,s,d,g*u+u*.1,p,u*.62,o,{mull:!1,lit:.2,sky:"#93aabb"});n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(f*c,0,3,256),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(d-2,0,2,256)}return{map:Si(e),emissiveMap:Si(i)}})}function zp(r){return ro("brown"+r,()=>{let[n,i]=Mi(256,256),[s,o]=Mi(256,256),a=Zt("brown"+r);o.fillStyle="#000",o.fillRect(0,0,256,256),i.fillStyle=["#6b4a3a","#7a5642","#5e4234"][r%3],i.fillRect(0,0,256,256),Ta(i,256,256,a,1400,.07),i.fillStyle="rgba(0,0,0,0.2)";for(let l=0;l<256;l+=16)i.fillRect(0,l,256,1);i.fillStyle="#3d2a20",i.fillRect(0,0,256,10);for(let l=0;l<4;l++)for(let c=0;c<3;c++){let h=c*256/3+20.479999999999997,u=l*64+64*.2;i.fillStyle="#4a3226",i.fillRect(h-5,u-8,256/3*.52+10,7),Ea(i,o,h,u,256/3*.52,64*.62,a,{frame:"#2d201a",lit:.22})}i.fillStyle="#4f382c",i.fillRect(256*.05,256-64*.5,256*.3,64*.5),i.fillStyle="rgba(0,0,0,0.25)";for(let l=0;l<5;l++)i.fillRect(256*.05,256-64*.5+l*64*.1,256*.3,2);return{map:Si(n),emissiveMap:Si(s)}})}var Pp=["#e6dcc6","#ddd1b6","#ece3cf","#d9ccb0"],Ip=["CAF\xC9","BOULANGERIE","PHARMACIE","BRASSERIE","TABAC","LIBRAIRIE","FROMAGERIE","P\xC2TISSERIE","BISTROT","FLEURISTE","H\xD4TEL","CR\xCAPERIE"],Dp=[["#1f3b2d","#e9d9a8"],["#7a1f24","#f3e6c4"],["#1e2f4f","#efe2bd"],["#2b2b2b","#e8c46a"],["#5b2a4a","#f2e4c6"]];function Lp(r,t,e,n,i){r.strokeStyle="#25282b",r.lineWidth=2,r.strokeRect(t,e,n,i),r.lineWidth=1.2;for(let s=t+3;s<t+n-2;s+=7)r.beginPath(),r.moveTo(s,e),r.lineTo(s,e+i),r.stroke(),r.beginPath(),r.arc(s+3.5,e+i/2,2.2,0,7),r.stroke()}function lh(r,t=!0){return ro("haus"+r+t,()=>{let i=76.66666666666667,[s,o]=Mi(256,460),[a,l]=Mi(256,460),c=Zt("haus"+r);l.fillStyle="#000",l.fillRect(0,0,256,460),o.fillStyle=Pp[r%Pp.length],o.fillRect(0,0,256,460),o.fillStyle="rgba(120,100,70,0.18)";for(let d=0;d<460;d+=12)o.fillRect(0,d,256,1);for(let d=0;d<460;d+=12)for(let p=d/12%2?20:0;p<256;p+=40)o.fillRect(p,d,1,12);Ta(o,256,460,c,1e3,.04);let h=3,u=256/h;for(let d=0;d<5;d++){let p=d*i+i*.16,g=i*(d===3?.72:.66);for(let m=0;m<h;m++){let x=m*u+u*.27,v=u*.46;o.fillStyle="rgba(255,250,235,0.6)",o.fillRect(x-5,p-6,v+10,5),d===3&&(o.fillStyle="rgba(160,140,110,0.5)",o.beginPath(),o.moveTo(x-6,p-6),o.lineTo(x+v/2,p-16),o.lineTo(x+v+6,p-6),o.fill()),Ea(o,l,x,p,v,g,c,{frame:"#f4efe4",lit:.16,sky:"#9fb1bf"}),d!==0&&d!==3&&Lp(o,x-3,p+g*.62,v+6,g*.36)}(d===0||d===3)&&(o.fillStyle="rgba(80,70,55,0.35)",o.fillRect(0,p+g+2,256,4),Lp(o,0,p+g*.62,256,g*.38)),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(0,d*i+i-4,256,2)}let f=5*i;o.fillStyle="#cbbd9f",o.fillRect(0,f,256,i),o.fillStyle="rgba(90,75,55,0.3)";for(let d=f;d<460;d+=10)o.fillRect(0,d,256,2);if(t){let[d,p]=Dp[Math.floor(c()*Dp.length)];o.fillStyle=d,o.fillRect(4,f+i*.12,248,i*.84),Up(o,l,4,f+i*.12,248,i*.22,Ip[Math.floor(c()*Ip.length)],d,p,'Georgia,"Times New Roman",serif');let g=o.createLinearGradient(0,f+i*.36,0,460);g.addColorStop(0,"#f4dca4"),g.addColorStop(1,"#a07c4a");for(let m=0;m<3;m++)o.fillStyle=g,o.fillRect(14+m*228/3,f+i*.38,228/3-10,i*.6),l.fillStyle="#6a5028",l.fillRect(14+m*228/3,f+i*.38,228/3-10,i*.6)}else for(let d=0;d<3;d++){let p=d*u+u*.2,g=u*.6;o.fillStyle="#3c3a36",o.beginPath(),o.moveTo(p,460),o.lineTo(p,f+i*.45),o.arc(p+g/2,f+i*.45,g/2,Math.PI,0),o.lineTo(p+g,460),o.fill()}return{map:Si(s),emissiveMap:Si(a)}})}function ch(){return ro("zinc",()=>{let[e,n]=Mi(256,128),i=Zt("zinc");n.fillStyle="#6f7a85",n.fillRect(0,0,256,128);for(let s=0;s<256;s+=8)n.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${.05+i()*.08})`,n.fillRect(s,0,7,128),n.fillStyle="rgba(30,35,40,0.45)",n.fillRect(s+7,0,1,128);for(let s=0;s<3;s++){let o=s*256/3+27.306666666666665,a=256/3*.36,l=128*.3;n.fillStyle="#ece5d6",n.fillRect(o-4,l-8,a+8,128*.5+8),n.fillStyle="#3d4852",n.fillRect(o,l,a,128*.5),n.fillStyle="#ece5d6",n.fillRect(o+a/2-1,l,2,128*.5),n.fillStyle="#5c6670",n.beginPath(),n.moveTo(o-6,l-8),n.lineTo(o+a/2,l-20),n.lineTo(o+a+6,l-8),n.fill()}return Si(e)})}var hh=(r,t={})=>new ht(Object.assign({map:r.map,emissiveMap:r.emissiveMap,emissive:16777215,emissiveIntensity:.35,roughness:.8},t));function uh(r,t,e,n,i,s,o,a=.42){let l=Math.min(s*a,n*.3,i*.3),c=n/2,h=i/2,u=c-l,f=h-l,d=t+s,p=[],g=[],m=(_,y,M,b,w)=>{p.push(..._,...y,...M,..._,...M,...b),g.push(0,0,w,0,w,1,0,0,w,1,0,1)};m([-c,t,h],[c,t,h],[u,d,f],[-u,d,f],n),m([c,t,-h],[-c,t,-h],[-u,d,-f],[u,d,-f],n),m([c,t,h],[c,t,-h],[u,d,-f],[u,d,f],i),m([-c,t,-h],[-c,t,h],[-u,d,f],[-u,d,-f],i);let x=[[-u,d,f],[u,d,f],[u,d,-f],[-u,d,-f]];p.push(...x[0],...x[1],...x[2],...x[0],...x[2],...x[3]),g.push(0,0,0,0,0,0,0,0,0,0,0,0);let v=new ve;return v.setAttribute("position",new kt(p,3)),v.setAttribute("uv",new kt(g,2)),v.computeVertexNormals(),v.applyMatrix4(new $t().makeRotationY(o)),v.translate(r,0,e),v}function W2(r,t,e,n,i,s,o){let a=new ut(.17*i,.17*i,.32*i,10);a.translate(t,e+.2*i+.16*i,n),r.push(s,a);let l=new ze(.19*i,.14*i,10);l.translate(t,e+.52*i+.07*i,n),r.push(o,l);for(let[c,h]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let u=new j(.03*i,.2*i,.03*i);u.translate(t+c*.11*i,e+.1*i,n+h*.11*i),r.push(o,u)}}function Hp(r,t){let{free:e,B:n,rnd:i,boxWalls:s,roofKit:o,mat:a}=t,l=r.S,c=l.bounds,h=l.river,u={tower:[0,1,2,3].map(p=>hh(Ds(p),{roughness:.7})),brick:[0,1,2].map(p=>hh(Op(p))),brown:[0,1,2].map(p=>hh(zp(p))),glass:r.M.glass,roof:a(5658716,{roughness:.95}),rim:r.M.rim,rimDark:r.M.rimDark,mech:r.M.mech,wood:a(7031344,{roughness:.95}),leg:a(2895152),cornice:a(14077369,{roughness:.9})},f=a(12170926),d=(p,g,m,x,v,_,y,M)=>{let b=0,w=m,S=x,T=v>14?3:v>8?2:1;for(let A=0;A<T;A++){let C=A===T-1?v-b:v*(A===0?.55:.28);s(n,p,b,g,w,C,S,0,_,u.roof,y,M),o(n,p,g,w,S,b+C,0,u.rimDark,{t:.08,rh:.15}),b+=C,w*=.74,S*=.74}if(o(n,p,g,w/.74,S/.74,b,0,u.rimDark,{house:[w*.5,.5,S*.5],houseM:u.mech,mech:[[w*.2,S*.2,.3,.3,.3]],mechM:u.mech}),v>20&&i()<.5){let A=new ut(.04,.09,2.5,6);A.translate(p,b+1.3,g),n.push(u.mech,A)}};for(let p=-150;p<150;p+=9)for(let g=-90;g<90;g+=9){let m=p+4.5,x=g+4.5,v=Math.hypot(m,x);if(v>150||!e(m,x,4))continue;let _=new le(7.4,7.4);_.rotateX(-Math.PI/2),_.translate(m,.006,x),n.push(f,_);let y=x>c.z1-6&&x<c.z1+34&&m>c.x0-30&&m<c.x1+30,M=!y&&x>c.z0-4&&x<c.z1&&(m<c.x0||m>c.x1)&&Math.min(Math.abs(m-c.x0),Math.abs(m-c.x1))<16,b=h&&x<h.z,w=i();if(y||!b&&w<.25&&v<70){for(let S of[-1,1])for(let T=0;T<5;T++){let C=m-2.9+T*1.45,D=x+S*2.6,N=i.int(3,4)*.3+(y?0:.3);s(n,C,0,D,1.36,N,1.9,S>0?0:Math.PI,u.brown[((T+p)%3+3)%3],u.roof,1.2,1.2),o(n,C,D,1.36,1.9,N,0,u.cornice,{t:.06,rh:.1})}for(let S=0;S<5;S++)(r.cityTrees=r.cityTrees||[]).push([m-3+S*1.5,x+(i()<.5?-3.8:3.8),i.range(.6,.85)])}else if(!b&&(M||w<.62)){let S=i.int(2,4),T=M?.6:1;for(let A=0;A<S;A++){let C=7/S-.15,D=m-3.5+(A+.5)*7/S,N=i.range(5,7),L=i.int(6,14)*.3*T;s(n,D,0,x,C,L,N,0,u.brick[i.int(0,2)],u.roof,1.6,1.2),o(n,D,x,C,N,L,0,u.cornice,{t:.1,rh:.16}),i()<.7&&W2(n,D+i.range(-C*.25,C*.25),L,x+i.range(-1.5,1.5),1.6,u.wood,u.leg)}}else{let S=i.int(1,2),T=b?i.range(14,34):i.range(8,18);for(let A=0;A<S;A++){let C=i.range(3,4.6),D=i.range(3,4.6),N=T*i.range(.7,1),L=m+(S>1?A?1.8:-1.8:i.range(-1,1)),B=x+i.range(-1,1);i()<.55?d(L,B,C,D,N,u.tower[i.int(0,3)],2,2.4):d(L,B,C,D,N,u.glass[i.int(0,3)],2,2)}}}if(h)for(let p=-150;p<150;p+=6){let g=h.z-h.w/2-4.5;if(!e(p,g,3))continue;let m=i.range(6,16),x=i.range(3.4,5);s(n,p,0,g,x,m,4,0,i()<.5?u.tower[i.int(0,3)]:u.glass[i.int(0,3)],u.roof,2,2.4),o(n,p,g,x,4,m,0,u.rimDark,{t:.08,rh:.15})}}function Gp(r,t){let{free:e,B:n,rnd:i,boxWalls:s,roofKit:o,mat:a}=t,l=r.S,c=l.bounds,h=l.river,u={haus:[0,1,2,3].map(m=>hh(lh(m,m%2===0),{emissiveIntensity:.3,roughness:.85})),zinc:new ht({map:ch(),roughness:.55,metalness:.35}),flat:a(5857642,{roughness:.7}),chim:a(11564634,{roughness:.9}),rim:a(14998212,{roughness:.9})},f=a(13616818),d=a(14273706,{roughness:1}),p=a(7182922,{roughness:1}),g=(m,x,v,_,y,M)=>{let b=M*.3,w=u.haus[i.int(0,3)];s(n,m,0,x,v,b,_,y,w,null,1,1.8),o(n,m,x,v+.06,_+.06,b,y,u.rim,{t:.05,rh:.05}),n.push(u.zinc,uh(m,b+.05,x,v,_,.5,y));let S=Math.max(1,Math.round(v/1.6));for(let T=0;T<S;T++){let A=(T+.5)/S*v-v/2,C=new j(.12,.22,.4);C.rotateY(y),C.translate(m+Math.cos(y)*A,b+.6,x-Math.sin(y)*A),n.push(u.chim,C)}};for(let m=-150;m<150;m+=9)for(let x=-90;x<90;x+=9){let v=m+4.5,_=x+4.5;if(Math.hypot(v,_)>150||!e(v,_,4))continue;let M=new le(7.6,7.6);M.rotateX(-Math.PI/2),M.translate(v,.006,_),n.push(f,M);let b=_>c.z1-6&&_<c.z1+34&&v>c.x0-30&&v<c.x1+30,w=b?4:6+(i()<.3?1:0);if(i()<.1&&!b){let A=new le(7,7);A.rotateX(-Math.PI/2),A.translate(v,.01,_),n.push(d,A);for(let[C,D]of[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8]]){let N=new le(2.8,2.8);N.rotateX(-Math.PI/2),N.translate(v+C,.014,_+D),n.push(p,N)}for(let C=0;C<10;C++)(r.cityTrees=r.cityTrees||[]).push([v+(C%2?-3.3:3.3),_-3.3+Math.floor(C/2)*1.6,i.range(.7,.9)]);continue}let S=1.7,T=7.2;for(let[A,C,D,N]of[[0,T/2-S/2,0,T],[0,-T/2+S/2,Math.PI,T],[T/2-S/2,0,Math.PI/2,T-S*2],[-T/2+S/2,0,-Math.PI/2,T-S*2]]){let L=N>5?3:2;for(let B=0;B<L;B++){let G=N/L,q=(B+.5)*G-N/2;g(v+A+Math.cos(D)*q,_+C-Math.sin(D)*q,G-.04,S,D,w-(i()<.25?1:0))}}if(i()<.7)for(let A=0;A<4;A++)(r.cityTrees=r.cityTrees||[]).push([v-3+A*2,_+4.25,i.range(.7,.85)])}if(h)for(let m=-150;m<150;m+=5){let x=h.z-h.w/2-3.2;e(m,x,2.4)&&g(m,x,4.8,2,Math.PI,6)}}var xu={};function En(r,t,e,n){if(xu[r])return xu[r];let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new qe(i);return s.colorSpace=we,s.wrapS=s.wrapT=de,s.anisotropy=8,xu[r]=s}var Vt=(r,t={})=>new ht(Object.assign({color:r,roughness:.85},t)),nn=r=>(t,e,n=0,i=0,s=0)=>{let o=new lt(t,e);return o.position.set(n,i,s),o.castShadow=o.receiveShadow=!0,r.add(o),o};function he(r,t,e,n,i){let s=new j(r,t,e),o=s.attributes.uv,a=s.attributes.normal;for(let l=0;l<o.count;l++){let c=Math.abs(a.getY(l))>.5,h=Math.abs(a.getX(l))>.5?e:r;o.setXY(l,o.getX(l)*h/n,o.getY(l)*(c?e:t)/i)}return s}var li=(r,t,e)=>{let n=r.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*t,n.getY(i)*e);return r},Aa=(r,t={})=>new ht(Object.assign({map:r.map,emissiveMap:r.emissiveMap,emissive:16777215,emissiveIntensity:.35,roughness:.75},t));function X2(r,t){return En("w"+r,256,256,(e,n,i)=>{let s=Zt(r);e.fillStyle=t.wall,e.fillRect(0,0,n,i);let o=n/t.cols,a=i/t.rows;for(let l=0;l<t.rows;l++)for(let c=0;c<t.cols;c++){let h=c*o+o*t.mx,u=l*a+a*t.my,f=o*(1-2*t.mx),d=a*(1-2*t.my);e.fillStyle=s()<(t.lit||0)?"#e8d6a0":t.glass,t.arch?(e.beginPath(),e.moveTo(h,u+d),e.lineTo(h,u+f/2),e.arc(h+f/2,u+f/2,f/2,Math.PI,0),e.lineTo(h+f,u+d),e.closePath(),e.fill()):e.fillRect(h,u,f,d),e.fillStyle="rgba(255,255,255,0.1)",e.fillRect(h,u,f*.35,d)}if(t.band){e.fillStyle=t.band;for(let l=0;l<=t.rows;l++)e.fillRect(0,l*a-2,n,3)}})}var q2=r=>"#"+r.toString(16).padStart(6,"0"),Cn=(r,t)=>{let e=Math.min(255,Math.max(0,(r>>16&255)*t)),n=Math.min(255,Math.max(0,(r>>8&255)*t)),i=Math.min(255,Math.max(0,(r&255)*t));return`rgb(${e|0},${n|0},${i|0})`};function qn(r,t,e={}){let n=En("ash"+r,256,256,(i,s,o)=>{let a=Zt("ash"+r),l=e.rh||26;i.fillStyle=Cn(t,.82),i.fillRect(0,0,s,o);for(let c=0,h=0;c<o;c+=l,h++){let u=h%2?-30:0;for(;u<s;){let f=48+a()*34,d=.93+a()*.12;i.fillStyle=Cn(t,d),i.fillRect(u+1.5,c+1.5,f-3,l-3),i.fillStyle="rgba(255,255,255,0.13)",i.fillRect(u+1.5,c+1.5,f-3,2),i.fillStyle="rgba(0,0,0,0.10)",i.fillRect(u+1.5,c+l-4,f-3,2.5);for(let p=0;p<10;p++)i.fillStyle=`rgba(0,0,0,${a()*.06})`,i.fillRect(u+a()*f,c+a()*l,2,2);u+=f}}for(let c=0;c<9;c++){let h=a()*s,u=i.createLinearGradient(0,0,0,o);u.addColorStop(0,"rgba(60,50,40,0.10)"),u.addColorStop(1,"rgba(60,50,40,0)"),i.fillStyle=u,i.fillRect(h,0,3+a()*8,o*(.3+a()*.7))}});return new ht({map:n,bumpMap:n,bumpScale:.6,roughness:e.rough??.88})}function bi(r,t){let e=En("fac"+r,256,256,(i,s,o)=>{let a=Zt("fac"+r),l=s/t.cols,c=o/t.rows,h=t.wall;i.fillStyle=Cn(h,1),i.fillRect(0,0,s,o),i.fillStyle="rgba(0,0,0,0.06)";for(let u=0;u<o;u+=12)i.fillRect(0,u,s,1);for(let u=0;u<400;u++)i.fillStyle=`rgba(0,0,0,${a()*.05})`,i.fillRect(a()*s,a()*o,2,2);if(t.pilaster)for(let u=0;u<=t.cols;u++){let f=u*l;i.fillStyle=Cn(h,1.06),i.fillRect(f-5,0,10,o),i.fillStyle="rgba(0,0,0,0.16)",i.fillRect(f+5,0,2,o)}for(let u=0;u<t.rows;u++)for(let f=0;f<t.cols;f++){let d=l*(t.ww||.5),p=c*(t.wh||.62),g=f*l+(l-d)/2,m=u*c+c*(t.wy||.16),x=a()<(t.lit||0),v=()=>{i.beginPath(),t.win==="arch"?(i.moveTo(g,m+p),i.lineTo(g,m+d/2),i.arc(g+d/2,m+d/2,d/2,Math.PI,0),i.lineTo(g+d,m+p)):t.win==="gothic"?(i.moveTo(g,m+p),i.lineTo(g,m+d*.6),i.quadraticCurveTo(g,m,g+d/2,m-d*.15),i.quadraticCurveTo(g+d,m,g+d,m+d*.6),i.lineTo(g+d,m+p)):i.rect(g,m,d,p),i.closePath()};i.save(),i.translate(-3,-3),i.fillStyle=Cn(h,1.12),v(),i.fill(),i.restore(),i.fillStyle="rgba(0,0,0,0.35)",i.save(),i.translate(2,2),v(),i.fill(),i.restore();let _=i.createLinearGradient(g,m,g,m+p);x?(_.addColorStop(0,"#f3dda0"),_.addColorStop(1,"#b88f50")):(_.addColorStop(0,t.glassTop||"#8fa7ba"),_.addColorStop(.55,t.glass||"#4a5866"),_.addColorStop(1,"#262d35")),i.fillStyle=_,v(),i.fill(),i.save(),v(),i.clip(),i.fillStyle="rgba(255,255,255,0.16)",i.beginPath(),i.moveTo(g,m),i.lineTo(g+d*.6,m),i.lineTo(g,m+p*.5),i.fill(),i.fillStyle=t.frame||Cn(h,1.15),i.fillRect(g+d/2-1,m-d,2,p+d);for(let y=1;y<3;y++)i.fillRect(g,m+p*y/3,d,1.5);if(i.restore(),i.fillStyle=Cn(h,1.1),i.fillRect(g-4,m+p,d+8,4),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(g-4,m+p+4,d+8,2),t.key&&t.win!=="gothic"&&(i.fillStyle=Cn(h,1.12),i.fillRect(g+d/2-5,m-(t.win==="arch"?4:9),10,9)),t.balcony&&u%2===0){i.strokeStyle="#2a2c2e",i.lineWidth=1.4,i.strokeRect(g-3,m+p*.7,d+6,p*.3);for(let y=g;y<g+d;y+=5)i.beginPath(),i.moveTo(y,m+p*.7),i.lineTo(y,m+p),i.stroke()}}if(t.band!==!1)for(let u=0;u<=t.rows;u++){let f=u*c;i.fillStyle=Cn(h,1.1),i.fillRect(0,f-3,s,4),i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,f+1,s,2)}}),n=new ht({map:e,bumpMap:e,bumpScale:.5,roughness:.82});return t.lit&&(n.emissiveMap=e,n.emissive=new Xt(2234892)),n}function fh(r){let t=En("flute"+r,128,32,(e,n,i)=>{for(let s=0;s<16;s++){let o=e.createLinearGradient(s*8,0,s*8+8,0);o.addColorStop(0,Cn(r,.78)),o.addColorStop(.5,Cn(r,1.08)),o.addColorStop(1,Cn(r,.9)),e.fillStyle=o,e.fillRect(s*8,0,8,i)}});return new ht({map:t,bumpMap:t,bumpScale:.8,roughness:.7})}function vu(r){let t=En("roof"+r,128,128,(e,n,i)=>{let s=Zt("roof"+r),o=r==="copper"?6265992:6120555;e.fillStyle=q2(o),e.fillRect(0,0,n,i);for(let a=0;a<n;a+=8)e.fillStyle=Cn(o,.9+s()*.2),e.fillRect(a,0,7,i),e.fillStyle=Cn(o,r==="copper"?.7:.6),e.fillRect(a+7,0,1,i),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(a,0,1,i);for(let a=0;a<30;a++)e.fillStyle=r==="copper"?"rgba(120,200,170,0.18)":"rgba(0,0,0,0.08)",e.fillRect(s()*n,s()*i,2+s()*3,10+s()*30)});return new ht({map:t,bumpMap:t,bumpScale:.5,roughness:r==="copper"?.5:.6,metalness:.35,side:Ue})}var Vp=()=>Vt(14199365,{metalness:.9,roughness:.28,emissive:2759680}),Y2=()=>Vt(5204568,{metalness:.6,roughness:.45});function wa(r,t,e){let n=new an;n.moveTo(-r/2,0),n.lineTo(r/2,0),n.lineTo(0,t),n.closePath();let i=new Nn(n,{depth:e,bevelEnabled:!1});return i.translate(0,0,-e/2),li(i,1.2,1.2)}function ci(r,t,e,n,i,s=0,o=0,a=.08){r(new j(e+.08,a,n+.08),t,s,i+a/2,o),r(new j(e+.16,a*.6,n+.16),t,s,i+a+a*.3,o)}function Ra(r,t,e,n,i,s,o,a,l,c=.06){for(let h=0;h<n;h++){let u=i+(s-i)*(n>1?h/(n-1):.5);r(new j(c*2.6,c*.8,c*2.6),e,u,a+c*.4,o),r(li(new ut(c*.9,c,l-c*1.8,12),2,1),t,u,a+l/2,o),r(new j(c*2.8,c,c*2.8),e,u,a+l-c*.5,o)}}function Ca(r,t,e=1){let n=t.length;if(!n)return;let i=new yn(new is(.17*e,1),new ht({color:16777215,roughness:1}),n),s=new yn(new ut(.022*e,.03*e,.22*e,5),new ht({color:5916210,roughness:1}),n),o=new $t,a=new rn,l=new Xt,c=Zt("wtrees"+n);t.forEach(([h,u],f)=>{let d=.8+c()*.5;o.compose(new I(h,.06+.28*e*d,u),a,new I(d,d*1.1,d)),i.setMatrixAt(f,o),o.compose(new I(h,.06+.11*e,u),a,new I(1,1,1)),s.setMatrixAt(f,o),i.setColorAt(f,l.setHSL(.24+c()*.06,.4+c()*.15,.22+c()*.08))}),i.castShadow=s.castShadow=!0,r.add(i,s)}function yu(r,t){let e=Vt(2369322,{metalness:.5,roughness:.5}),n=new ht({color:16773832,emissive:16767120,emissiveIntensity:.6});for(let[i,s]of t)r(new ut(.015,.025,.55,6),e,i,.06+.275,s),r(new ce(.04,8,6),n,i,.06+.58,s).castShadow=!1}function Wp(r){return En("flag"+r,128,80,(t,e,n)=>{if(r==="fr"){["#1f3d8f","#f4f4f4","#d0312d"].forEach((i,s)=>{t.fillStyle=i,t.fillRect(s*e/3,0,e/3+1,n)});return}for(let i=0;i<13;i++)t.fillStyle=i%2?"#f4f4f4":"#b8262e",t.fillRect(0,i*n/13,e,n/13+1);t.fillStyle="#2b3a78",t.fillRect(0,0,e*.42,n*7/13),t.fillStyle="#fff";for(let i=0;i<5;i++)for(let s=0;s<6;s++)t.fillRect(4+s*8.5,4+i*8,2,2)})}function _u(r,t){let e=En("relief"+r,128,128,(n,i,s)=>{let o=Zt("relief"+r);n.fillStyle=Cn(t,.95),n.fillRect(0,0,i,s),n.strokeStyle=Cn(t,1.15),n.lineWidth=4,n.strokeRect(3,3,i-6,s-6);for(let a=0;a<7;a++){let l=14+a*16+o()*4,c=40+o()*20;n.fillStyle="rgba(0,0,0,0.22)",n.beginPath(),n.arc(l+2,c+2,6,0,7),n.fill(),n.fillRect(l-4,c+6,12,40+o()*20),n.fillStyle=Cn(t,1.12),n.beginPath(),n.arc(l,c,6,0,7),n.fill(),n.fillRect(l-6,c+5,12,40+o()*20)}});return new ht({map:e,bumpMap:e,bumpScale:1.2,roughness:.85})}function $2(){return En("timesq",256,512,(r,t,e)=>{let n=Zt("timesq");r.fillStyle="#16181c",r.fillRect(0,0,t,e);let i=["NEWS","LIVE","SALE","SHOW","2030","MUSICAL","TOUR","CINEMA","SODA","PHONE","JEANS","TV"],s=["#e63946","#f1c40f","#2ecc71","#3498db","#ff6bd6","#ff8c1a","#ffffff","#00d1d1"],o=4;for(;o<e-10;){let a=40+n()*70,l=4;for(;l<t-10;){let c=Math.min(t-4-l,60+n()*140),h=s[Math.floor(n()*s.length)],u=r.createLinearGradient(l,o,l+c,o+a);u.addColorStop(0,h),u.addColorStop(1,s[Math.floor(n()*s.length)]),r.fillStyle=u,r.fillRect(l,o,c-4,a-4),r.fillStyle="rgba(0,0,0,0.18)";for(let f=o;f<o+a-4;f+=3)r.fillRect(l,f,c-4,1);r.fillStyle=n()<.5?"#111":"#fff",r.font=`bold ${Math.floor(a*.42)}px "Arial Black",sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i[Math.floor(n()*i.length)],l+c/2-2,o+a/2,c-12),l+=c}o+=a}})}function Z2(r,t){let e=nn(r),n=t.w,i=t.d,s=$2(),o=new ht({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.95,roughness:.35}),a=Aa(Ds(1)),l=qn("nyt",10130828);e(he(1,3.6,1,1,1.8),o,0,.06+1.8,-i*.1),e(he(.8,.5,.8,1,1),a,0,.06+3.85,-i*.1),e(new ut(.02,.03,.6,6),Vt(13421772),0,.06+4.4,-i*.1);for(let f of[-1,1]){let d=f*n*.32,p=f<0?1.4:1.7,g=f<0?1.4:1.9;e(he(n*.32,p,i*.82,n*.32,1.4),o,d,.06+p/2,-i*.04),e(he(n*.28,g,i*.72,2,2.4),a,d,.06+p+g/2,-i*.08),ci(e,l,n*.28,i*.72,.06+p+g,d,-i*.08,.06)}let c=Vt(13116974,{emissive:5244936,roughness:.4});for(let f=0;f<5;f++)e(new j(.85,.06,.15),c,0,.09+f*.06,i*.32-f*.13);let h=Vt(15909424,{roughness:.45,metalness:.2}),u=Vt(2766144,{roughness:.2});for(let[f,d,p]of[[-.85,i*.42,0],[.9,i*.36,.1],[.3,i*.46,0]])e(new j(.34,.1,.16),h,f,.13,d).rotation.y=p,e(new j(.18,.07,.14),u,f-.02,.21,d).rotation.y=p;yu(e,[[-n*.45,i*.45],[n*.45,i*.45]])}function J2(r,t){let e=nn(r),n=t.w,i=t.d,s=3.6,o=bi("flat",{wall:14207400,cols:3,rows:3,ww:.42,wh:.6,key:!0,glass:"#45525e",lit:.12});o.map=o.map.clone(),o.map.needsUpdate=!0,o.map.repeat.set(1/.6,1/.5),o.bumpMap=o.map;let a=qn("flatb",12102544),l=Vt(13615264),c=new an;c.moveTo(-n*.46,i*.44),c.lineTo(n*.46,i*.44),c.lineTo(.14,-i*.44),c.quadraticCurveTo(0,-i*.47,-.14,-i*.44),c.closePath();let h=(u,f,d,p)=>{let g=new Nn(c,{depth:u,bevelEnabled:!1,curveSegments:6});g.rotateX(-Math.PI/2),g.scale(f,1,f),e(g,p,0,d,0)};h(.5,1,.06,a),h(s-.5,.97,.56,o);for(let[u,f]of[[1.6,1],[2.6,1]])h(.04,f,.06+u,l);h(.1,1.04,.06+s,l),h(.06,1.07,.16+s,l),h(.3,.9,.22+s,o)}function K2(r,t){let e=nn(r),n=t.w,i=t.d,s=qn("gct",13945264),o=bi("gctf",{wall:13945264,cols:3,rows:1,ww:.6,wh:.78,wy:.12,win:"arch",glass:"#3b4652",key:!0,band:!1}),a=new lt(he(n*.86,1.3,i*.42,.8,.8),[s,s,s,s,o,s]);o.map.repeat.set(1/(n*.86),1/1.3),a.position.set(0,.06+.65,i*.22),a.castShadow=a.receiveShadow=!0,r.add(a);let l=fh(14471869),c=Vt(14866884);for(let d of[-.42,.42].flatMap(p=>[p*n-.12,p*n+.12]))Ra(e,l,c,1,d,d,i*.44,.06,1.05,.05);for(let d of[-n*.14,n*.14])Ra(e,l,c,1,d,d,i*.44,.06,1.05,.05);ci(e,c,n*.88,i*.44,.06+1.3,0,i*.22),e(he(1.1,.42,.3,.8,.8),s,0,.06+1.62,i*.4);let h=En("gclock",64,64,d=>{d.fillStyle="#f3e7b8",d.beginPath(),d.arc(32,32,30,0,7),d.fill(),d.strokeStyle="#7a5a20",d.lineWidth=3,d.stroke(),d.strokeStyle="#222",d.lineWidth=3,d.beginPath(),d.moveTo(32,32),d.lineTo(32,12),d.moveTo(32,32),d.lineTo(44,40),d.stroke()});e(new Wn(.16,24),new ht({map:h,emissiveMap:h,emissive:8413232}),0,.06+1.6,i*.4+.152);let u=Y2();for(let d of[-.3,0,.3])e(new ut(.05,.08,.36,8),u,d,.06+2.01,i*.4),e(new ce(.05,8,6),u,d,.06+2.23,i*.4);let f=Aa(Ds(3));e(he(n*.62,4.4,i*.36,2,2.4),f,0,.06+2.2,-i*.24),ci(e,Vt(7106936,{metalness:.3}),n*.62,i*.36,.06+4.4,0,-i*.24,.07),e(new j(n*.3,.3,i*.18),Vt(8028296,{metalness:.4}),0,.06+4.7,-i*.24),yu(e,[[-n*.46,i*.46],[n*.46,i*.46]])}function j2(r,t){let e=nn(r),n=t.w,i=t.d,s=qn("nyse",15130834,{rough:.6}),o=bi("nysef",{wall:14867661,cols:3,rows:2,ww:.42,wh:.6,key:!0});e(he(n*.86,1.75,i*.58,n*.86/3,1.75/2),o,0,.06+.875,-i*.14);for(let c=0;c<3;c++)e(he(n*.88-c*.12,.07,i*.36-c*.07,.8,.8),s,0,.06+.035+c*.07,i*.28+c*.035);let a=Vt(15657178);Ra(e,fh(15262420),a,6,-n*.33,n*.33,i*.3,.27,1.25,.085),e(he(n*.8,.22,i*.3,.8,.8),s,0,.27+1.25+.11,i*.25),e(wa(n*.84,.5,i*.3),_u("nyse",15130834),0,.27+1.47,i*.25),ci(e,a,n*.86,i*.6,.06+1.75,0,-i*.14,.06);let l=new lt(new le(n*.62,.86),new ht({map:Wp("us"),side:Ue,roughness:.8}));l.position.set(0,.27+.72,i*.16),r.add(l)}function Q2(r,t){let e=nn(r),n=t.w,i=t.d,s=Aa(Ds(0)),o=qn("rock",12037532),a=.06;for(let[c,h]of[[n*.74,1.6],[n*.56,2.6],[n*.42,1.4],[n*.3,.8]])e(he(c,h,i*.4,2,2.4),s,0,a+h/2,-i*.22),ci(e,o,c,i*.4,a+h,0,-i*.22,.05),a+=h+.08;e(he(n*.52,.05,i*.3,1,1),o,0,.085,i*.25),e(new j(n*.44,.02,i*.24),Vt(15003381,{roughness:.15,metalness:.1}),0,.12,i*.25),e(new ce(.14,12,8),Vp(),0,.32,i*.12),e(new j(.5,.18,.12),o,0,.15,i*.12);let l=[13116974,2772890,15909424,3050327,16777215];for(let c=0;c<9;c++){let h=-n*.44+c*n*.11;e(new ut(.01,.012,.8,4),Vt(13619924,{metalness:.6}),h,.46,i*.45),e(new le(.15,.09),new ht({color:l[c%l.length],side:Ue}),h+.075,.8,i*.45)}}function t_(r,t){let e=nn(r),n=t.w,i=t.d,s=Math.min(n,i)*.42,o=En("msg",256,64,(c,h,u)=>{c.fillStyle="#c9c4ba",c.fillRect(0,0,h,u);for(let f=0;f<h;f+=16)c.fillStyle="#3d4650",c.fillRect(f+4,6,8,u-12),c.fillStyle="rgba(255,255,255,0.3)",c.fillRect(f+1,0,2,u)}),a=new ht({map:o,bumpMap:o,bumpScale:.6,roughness:.6});o.repeat.set(4,1),e(new ut(s,s*1.04,1,40),a,0,.06+.5,-i*.04),e(new ut(s*1.06,s*1.06,.1,40),Vt(9344412,{metalness:.5}),0,.06+1.05,-i*.04),e(new ut(s*.75,s*1,.25,40),Vt(12041408,{metalness:.3,roughness:.4}),0,.06+1.22,-i*.04);let l=En("msgsign",256,48,(c,h,u)=>{c.fillStyle="#10151c",c.fillRect(0,0,h,u),c.fillStyle="#ff4757",c.font='bold 30px "Arial Black",sans-serif',c.textAlign="center",c.textBaseline="middle",c.fillText("THE GARDEN",h/2,u/2+1)});e(new le(n*.5,.2),new ht({map:l,emissiveMap:l,emissive:16777215,emissiveIntensity:.9}),0,.06+.55,-i*.04+s*1.03+.02),Ca(r,[[-n*.45,i*.42],[n*.45,i*.42],[-n*.45,-i*.42],[n*.45,-i*.42]],1)}var kp=14734262;function e_(r,t){let e=nn(r),n=qn("arc",kp),i=Vt(13878694,{roughness:.8}),s=Vt(2236187),o=Math.min(t.w*.85,2.5),a=Math.min(t.d*.55,1.5),l=2.2,c=.5,h=1.15,u=new an;u.moveTo(-o/2,0),u.lineTo(-c,0),u.lineTo(-c,h),u.absarc(0,h,c,Math.PI,0,!0),u.lineTo(c,0),u.lineTo(o/2,0),u.lineTo(o/2,l),u.lineTo(-o/2,l),u.closePath();let f=new Nn(u,{depth:a,bevelEnabled:!1,curveSegments:16});f.translate(0,0,-a/2),li(f,1.3,1.3),e(f,n,0,.06,0);let d=new ut(c,c,a-.02,16,1,!0,-Math.PI/2,Math.PI);d.rotateX(Math.PI/2),e(d,Vt(12168594,{side:un}),0,.06+h,0);for(let g of[.32,h+c+.06])e(new j(o+.05,.06,a+.05),i,0,.06+g,0);ci(e,i,o,a,.06+l,0,0,.08),e(he(o,.34,a,.8,.8),n,0,.06+l+.2+.17,0),e(new j(o+.1,.06,a+.1),i,0,.06+l+.56,0);let p=_u("arc",kp);for(let g of[-1,1])for(let m of[-1,1]){let x=e(new j(o/2-c-.18,.72,.04),p,g*(c+(o/2-c)/2),.8400000000000001,m*(a/2+.02));m<0&&(x.rotation.y=Math.PI),e(new ut(.1,.1,.03,16).rotateX(Math.PI/2),i,g*.62,.06+h+c+.28,m*(a/2+.015))}for(let g of[-1,1]){let m=new an;m.moveTo(-.22,0),m.lineTo(-.22,.55),m.absarc(0,.55,.22,Math.PI,0,!0),m.lineTo(.22,0),m.closePath();let x=new _s(m,10),v=e(x,s,g*(o/2+.006),.06+.12,0);v.rotation.y=g*Math.PI/2}if(!t.noFlag){let g=new lt(new le(.62,.9),new ht({map:Wp("fr"),side:Ue}));g.position.set(0,.06+.95,0),r.add(g)}e(new Fi(1.25,1.42,40).rotateX(-Math.PI/2),Vt(10196362),0,.065,0)}function n_(r,t){let e=nn(r),n=t.w,i=t.d,s=bi("louvre",{wall:14734262,cols:4,rows:2,ww:.42,wh:.66,win:"arch",key:!0,pilaster:!0,lit:.08}),o=new ht({map:ch(),roughness:.55,metalness:.35}),a=Vt(13812900),l=[[0,-i*.38,n*.96,i*.22,0],[-n*.4,.05,i*.62,n*.16,Math.PI/2],[n*.4,.05,i*.62,n*.16,-Math.PI/2]];for(let[p,g,m,x,v]of l){let _=he(m,1,x,.9,.9);_.rotateY(v),e(_,s,p,.06+.5,g);let y=new j(m+.08,.06,x+.08);y.rotateY(v),e(y,a,p,.06+1.03,g),e(uh(0,0,0,m,x,.38,v),o,p,.06+1.06,g)}e(he(1,1.25,i*.26,.9,.9),s,0,.06+.625,-i*.38),e(uh(0,0,0,1,i*.26,.6,0,.3),o,0,.06+1.28,-i*.38);let c=En("pyr",128,128,(p,g,m)=>{p.fillStyle="#7fa8c2",p.fillRect(0,0,g,m);let x=p.createLinearGradient(0,0,g,m);x.addColorStop(0,"rgba(255,255,255,0.35)"),x.addColorStop(.5,"rgba(255,255,255,0)"),p.fillStyle=x,p.fillRect(0,0,g,m),p.strokeStyle="#3a4650",p.lineWidth=2;for(let v=-g;v<g*2;v+=12)p.beginPath(),p.moveTo(v,0),p.lineTo(v+m,m),p.moveTo(v,0),p.lineTo(v-m,m),p.stroke()}),h=new ht({map:c,metalness:.5,roughness:.12,transparent:!0,opacity:.9}),u=new ze(.95,1.05,4,1);u.rotateY(Math.PI/4),li(u,3,3),e(u,h,0,.06+.525,i*.12);for(let[p,g]of[[-.95,i*.3],[.95,i*.3],[0,i*.44]]){let m=new ze(.2,.22,4,1);m.rotateY(Math.PI/4),e(m,h,p,.06+.11,g)}let f=Vt(4158354,{roughness:.05,metalness:.3}),d=Vt(10130570);for(let p of[-1,1])e(new j(.76,.05,.54),d,p*1.08,.085,i*.08),e(new j(.68,.03,.46),f,p*1.08,.105,i*.08)}function i_(r,t){let e=nn(r),n=t.w,i=t.d,s=qn("nd",13682091),o=vu("lead"),a=Vt(2236188),l=Vt(12892313),c=bi("ndw",{wall:13682091,cols:2,rows:1,ww:.36,wh:.7,wy:.2,win:"gothic",glass:"#2f3f63",glassTop:"#5d6f96",band:!1}),h=n*.4,u=-i*.45,f=i*.18,d=1.25;e(he(h,d,f-u,.5,d),c,0,.06+d/2,(u+f)/2),e(wa(h+.08,.75,f-u),o,0,.06+d,(u+f)/2),e(he(n*.86,d,.7,.5,d),c,0,.06+d/2,-i*.12);let p=wa(.78,.75,n*.86);p.rotateY(Math.PI/2),e(p,o,0,.06+d,-i*.12),e(new ut(.1,.14,.45,8),o,0,.06+d+.95,-i*.12),e(new ze(.11,1.6,8),o,0,.06+d+1.95,-i*.12);for(let y of[-1,1])for(let M=0;M<5;M++){let b=u+.3+M*(f-u-.5)/4;e(he(.12,.95,.14,.5,.5),s,y*(h/2+.36),.06+.475,b),e(new ze(.06,.2,4),s,y*(h/2+.36),.06+1.05,b);let w=e(new j(.05,.52,.07),s,y*(h/2+.18),.06+1.02,b);w.rotation.z=y*.95}let g=f+.35,m=2.2,x=n*.64,v=bi("ndf",{wall:13879470,cols:4,rows:3,ww:.36,wh:.62,win:"gothic",glass:"#2d2a28",glassTop:"#3e3a36",band:!0});e(he(x,m,.7,x/4,m/3),v,0,.06+m/2,g);for(let y of[-1,1]){e(he(x*.36,1.05,.66,x*.18,1.05),bi("ndt",{wall:13879470,cols:2,rows:1,ww:.3,wh:.78,win:"gothic",glass:"#1e1c1a",glassTop:"#2e2a26",band:!1}),y*x*.32,.06+m+.525,g),ci(e,l,x*.36,.66,.06+m+1.05,y*x*.32,g,.05);for(let M of[-1,1])for(let b of[-1,1])e(new ze(.03,.14,4),s,y*x*.32+M*x*.16,.06+m+1.2,g+b*.3)}let _=En("rose",128,128,(y,M)=>{y.fillStyle="#d3c8ae",y.fillRect(0,0,M,M);let b=M/2;y.fillStyle="#26365e",y.beginPath(),y.arc(b,b,b*.92,0,7),y.fill();let w=["#b8352a","#2f63ad","#e0b84a","#3b8f6a"];for(let S=0;S<24;S++)y.fillStyle=w[S%4],y.beginPath(),y.moveTo(b,b),y.arc(b,b,b*.85,S/24*6.283,(S+.5)/24*6.283),y.fill();y.strokeStyle="#d3c8ae",y.lineWidth=3,y.beginPath(),y.arc(b,b,b*.4,0,7),y.stroke(),y.beginPath(),y.arc(b,b,b*.92,0,7),y.stroke()});e(new Wn(.34,28),new ht({map:_,emissiveMap:_,emissive:5592405}),0,.06+1.45,g+.352),e(new _n(.35,.03,6,28),l,0,.06+1.45,g+.36);for(let y of[-x*.3,0,x*.3]){let M=new an;M.moveTo(-.15,0),M.lineTo(-.15,.36),M.quadraticCurveTo(-.15,.6,0,.66),M.quadraticCurveTo(.15,.6,.15,.36),M.lineTo(.15,0),M.closePath(),e(new _s(M,8),a,y,.06,g+.352)}e(new j(x*.92,.12,.06),l,0,.06+1,g+.37),Ca(r,[[-n*.46,i*.1],[n*.46,i*.1],[-n*.46,-i*.3],[n*.46,-i*.3]],1)}function s_(r,t){let e=nn(r),n=t.w,i=t.d,s=qn("op",14338992),o=vu("copper"),a=Vp(),l=Vt(13483420),c=bi("opf",{wall:14338992,cols:7,rows:2,ww:.5,wh:.66,win:"arch",key:!0,pilaster:!0,glass:"#2f2b28",glassTop:"#4a4238"});e(he(n*.86,1.3,i*.46,n*.86/7,.65),c,0,.06+.65,i*.18);let h=Vt(15129798);for(let f=0;f<7;f++){let d=-n*.37+f*n*.74/6;Ra(e,fh(14866109),h,2,d-.05,d+.05,i*.42,.68,.58,.035)}ci(e,l,n*.88,i*.48,.06+1.3,0,i*.18),e(he(n*.86,.22,i*.46,.8,.8),s,0,.06+1.5,i*.18);for(let f of[-1,1])e(he(.5,.36,.5,.8,.8),s,f*n*.36,.06+1.78,i*.3),e(new ut(.06,.1,.32,8),a,f*n*.36,.06+2.12,i*.3),e(new ce(.07,8,6),a,f*n*.36,.06+2.32,i*.3),e(new j(.22,.05,.08),a,f*n*.36,.06+2.26,i*.3);e(new ut(.78,.8,.36,28),s,0,.06+1.6,-i*.06);let u=e(li(new ce(.76,28,12,0,Math.PI*2,0,Math.PI/2),6,1),o,0,.06+1.78,-i*.06);u.scale.y=.6,e(new ut(.08,.1,.18,10),a,0,.06+2.3,-i*.06),e(new ze(.07,.2,10),a,0,.06+2.48,-i*.06),e(he(n*.6,2,i*.36,.8,.8),s,0,.06+1,-i*.3),e(wa(n*.64,.56,i*.38),o,0,.06+2,-i*.3),e(new ut(.04,.07,.36,6),a,0,.06+2.75,-i*.12),yu(e,[[-n*.46,i*.47],[n*.46,i*.47],[-n*.2,i*.48],[n*.2,i*.48]])}function r_(r,t){let e=nn(r),n=t.w,i=t.d,s=qn("pan",14668730),o=Vt(15261900),a=vu("lead"),l=fh(14998470);e(he(n*.62,1.2,i*.62,.8,.8),s,0,.06+.6,-i*.05),e(he(n*.9,1,i*.3,.8,.8),s,0,.06+.5,-i*.05),ci(e,o,n*.62,i*.62,.06+1.2,0,-i*.05,.06),ci(e,o,n*.9,i*.3,.06+1,0,-i*.05,.05);for(let f=0;f<3;f++)e(he(n*.7-f*.08,.06,i*.22-f*.05,.8,.8),s,0,.06+.03+f*.06,i*.36+f*.025);Ra(e,l,o,6,-n*.28,n*.28,i*.38,.24,.92,.07),e(he(n*.66,.16,i*.22,.8,.8),s,0,.24+1,i*.33),e(wa(n*.68,.42,i*.22),_u("pan",14668730),0,.24+1.08,i*.33);let c=.06+1.2,h=-i*.05;e(new ut(.64,.68,.3,28),s,0,c+.15,h),e(new ut(.55,.55,.9,28),bi("pand",{wall:14668730,cols:8,rows:1,ww:.4,wh:.6,win:"arch",band:!1}),0,c+.75,h);for(let f=0;f<16;f++){let d=f/16*Math.PI*2;e(new ut(.028,.03,.8,8),l,Math.cos(d)*.64,c+.7,h+Math.sin(d)*.64)}e(new ut(.71,.71,.07,28),o,0,c+1.13,h),e(new ut(.5,.55,.16,28),s,0,c+1.24,h);let u=e(li(new ce(.5,28,12,0,Math.PI*2,0,Math.PI/2),6,1),a,0,c+1.3,h);u.scale.y=1.2,e(new ut(.1,.12,.3,10),s,0,c+2,h),e(new ze(.11,.24,10),a,0,c+2.27,h),Ca(r,[[-n*.45,i*.45],[n*.45,i*.45],[-n*.45,-i*.42],[n*.45,-i*.42]],1)}function o_(r,t){let e=nn(r),n=t.w,i=t.d,s=Vt(11739691,{roughness:.5,emissive:3145728}),o=En("moulin",256,64,(d,p,g)=>{d.fillStyle="#3b0b10",d.fillRect(0,0,p,g),d.fillStyle="#ffd9a8",d.font="bold 34px Georgia,serif",d.textAlign="center",d.textBaseline="middle",d.fillText("MOULIN ROUGE",p/2,g/2+2);for(let m=6;m<p;m+=12)d.fillStyle="#ffd36a",d.beginPath(),d.arc(m,5,2.4,0,7),d.arc(m,g-5,2.4,0,7),d.fill()}),a=bi("mr",{wall:11018282,cols:6,rows:2,ww:.5,wh:.6,win:"arch",lit:.6,glass:"#5a3020",band:!0});e(he(n*.86,1,i*.5,n*.86/6,.5),a,n*.05,.06+.5,-i*.05),ci(e,Vt(8002080),n*.86,i*.5,.06+1,n*.05,-i*.05,.05),e(new le(n*.6,.22),new ht({map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:.9}),n*.12,.06+.82,i*.2+.01);let l=-n*.3,c=i*.05,h=En("mill",64,64,(d,p,g)=>{d.fillStyle="#b3222b",d.fillRect(0,0,p,g),d.fillStyle="rgba(0,0,0,0.25)";for(let m=0;m<g;m+=8)d.fillRect(0,m,p,2);d.fillStyle="#ffd36a",d.fillRect(26,20,12,16)});e(new ut(.28,.36,1.1,10),new ht({map:h,roughness:.6,emissive:2097152}),l,.06+1+.55,c),e(new ze(.34,.4,10),Vt(7214620),l,.06+2.3,c);let u=Vt(14169148,{emissive:5246992}),f=Vt(15786176);for(let d=0;d<4;d++){let p=e(new j(.16,1.15,.03),u,l,1.96,c+.38);p.geometry.translate(0,.6,0),p.rotation.z=d*Math.PI/2+.4;let g=e(new j(.02,1.1,.035),f,l,.06+1.9,c+.39);g.geometry.translate(0,.6,0),g.rotation.z=d*Math.PI/2+.4}e(new ce(.06,8,6),Vt(16765802,{emissive:8413216}),l,.06+1.9,c+.4)}function a_(r,t){let e=nn(r),n=Xp();n.scale.setScalar(Math.min(t.w,t.d)/15.5),r.add(n);let i=Vt(7315020,{roughness:1});for(let s of[-1,1])e(new j(t.w*.3,.02,t.d*.3),i,s*t.w*.3,.07,t.d*.3);Ca(r,[[-t.w*.46,-t.d*.46],[t.w*.46,-t.d*.46],[-t.w*.46,t.d*.46],[t.w*.46,t.d*.46],[-t.w*.46,0],[t.w*.46,0]],1.1)}var dh={timesq:Z2,flatiron:J2,grandcentral:K2,nyse:j2,rockefeller:Q2,msg:t_,arc:e_,louvre:n_,notredame:i_,opera:s_,pantheon:r_,moulinrouge:o_,eiffel:a_};function l_(){let r=new Lt,t=nn(r),e=Vt(7910306,{roughness:.55,metalness:.25}),n=Vt(12037788),i=Vt(6261317,{roughness:1});t(new ut(7.4,7.4,.06,40),Vt(3104636,{roughness:.1,metalness:.35}),0,.05).castShadow=!1,t(new ut(5.6,5.9,.3,32),qn("libwall",10130826),0,.12),t(new ut(5.2,5.6,.5,32),i,0,.1);let s=new an;for(let h=0;h<22;h++){let u=h/22*Math.PI*2,f=h%2?2.2:3.2;h?s.lineTo(Math.cos(u)*f,Math.sin(u)*f):s.moveTo(Math.cos(u)*f,Math.sin(u)*f)}let o=new Nn(s,{depth:.7,bevelEnabled:!1});o.rotateX(-Math.PI/2),t(o,n,0,.35),t(new j(2,.6,2),n,0,1.35),t(new j(1.5,2.6,1.5),n,0,2.95),t(new j(1.7,.2,1.7),n,0,4.3);let a=4.4;t(new ut(.42,.72,2.7,14),e,0,a+1.35),t(new ce(.5,14,8),e,0,a+2.7).scale.set(1,.6,.85),t(new ut(.13,.17,.3,10),e,0,a+3),t(new ce(.28,14,10),e,0,a+3.3);for(let h=0;h<7;h++){let u=(h/6-.5)*2.2,f=t(new ze(.05,.42,5),e,Math.sin(u)*.3,a+3.55,Math.cos(u)*.12+.05);f.rotation.z=-Math.sin(u)*.9,f.rotation.x=.5}let l=t(new ut(.1,.12,1.5,8),e,.42,a+3.55,0);l.rotation.z=-.32,t(new ut(.13,.08,.3,8),Vt(14200906,{metalness:.8,roughness:.3}),.66,a+4.35,0),t(new ze(.12,.34,8),new ht({color:16760906,emissive:16751136,emissiveIntensity:1.2}),.66,a+4.65,0);let c=t(new j(.34,.5,.1),e,-.45,a+2.2,.2);return c.rotation.z=.25,r}function c_(){let r=new Lt,t=nn(r),e=Aa(Ds(0),{roughness:.7}),n=0;for(let[s,o]of[[6.4,3],[4.8,12.5],[3.9,3.5],[3,1.6],[2.2,1.2],[1.5,1.2]])t(he(s,o,s,2,2.4),e,0,n+o/2,0),t(new j(s+.12,.14,s+.12),Vt(9210500),0,n+o,0),n+=o;t(new ut(.45,.65,2.6,8),Vt(12567753,{metalness:.6,roughness:.3}),0,n+1.3,0),t(new ut(.06,.1,3.2,6),Vt(14540253),0,n+2.6+1.6,0);let i=t(new ce(.14,8,6),new Ie({color:16726574}),0,n+5.9,0);return i.castShadow=!1,r}function h_(){let r=new Lt,t=nn(r),e=Aa(Ds(2),{roughness:.7});t(he(4.2,3,4.2,2,2.4),e,0,1.5,0),t(he(3.2,15,3.2,2,2.4),e,0,3+7.5,0);let n=En("chrysler",128,128,(o,a,l)=>{o.fillStyle="#c9ced4",o.fillRect(0,0,a,l);for(let c=0;c<4;c++)o.fillStyle="#2a3038",o.beginPath(),o.moveTo(c*32+6,l),o.lineTo(c*32+16,l*.25),o.lineTo(c*32+26,l),o.fill();o.strokeStyle="#f2f2f2",o.lineWidth=3,o.beginPath();for(let c=0;c<4;c++)o.arc(c*32+16,l,15,Math.PI,0);o.stroke()}),i=new ht({map:n,metalness:.75,roughness:.25}),s=18;for(let o=0;o<6;o++){let a=1.55-o*.24,l=a-.16,c=.85,h=new ut(l,a,c,16,1,!0);li(h,4,1),t(h,i,0,s+c/2,0),s+=c}return t(new ze(.2,3.2,8),Vt(15265007,{metalness:.9,roughness:.2}),0,s+1.6,0),r}function u_(){let r=new Lt,t=nn(r),e=ir(2),n=new ht({map:e.map,emissiveMap:e.emissiveMap,emissive:16777215,emissiveIntensity:.35,roughness:.1,metalness:.6});t(he(4.8,3,4.8,2,2),Vt(12568268,{metalness:.5,roughness:.3}),0,1.5,0);let i=26,s=3.4,o=2,a=[],l=[],c=f=>{let d=Math.PI/4+f*Math.PI/2;return[Math.cos(d)*s,0,Math.sin(d)*s]},h=f=>{let d=f*Math.PI/2;return[Math.cos(d)*o,i,Math.sin(d)*o]};for(let f=0;f<4;f++){let d=c(f),p=c(f+1),g=h(f+1),m=h(f);a.push(...d,...g,...p),l.push(0,0,1.2,i/2,2.4,0),a.push(...m,...g,...d),l.push(-1.2,i/2,1.2,i/2,0,0)}let u=new ve;return u.setAttribute("position",new kt(a,3)),u.setAttribute("uv",new kt(l,2)),u.computeVertexNormals(),t(u,n,0,3,0),t(new j(o*1.42,.5,o*1.42),Vt(13949405,{metalness:.5}),0,3+i+.25,0).rotation.y=Math.PI/4,t(new ut(.08,.16,7,8),Vt(15790320),0,3+i+3.9,0),r}function f_(){return En("lattice",128,128,(r,t,e)=>{r.clearRect(0,0,t,e),r.strokeStyle="#7a5f45",r.lineCap="square",r.lineWidth=9,r.strokeRect(4,0,t-8,e),r.lineWidth=5,r.beginPath(),r.moveTo(4,0),r.lineTo(t-4,e),r.moveTo(t-4,0),r.lineTo(4,e),r.stroke(),r.lineWidth=4,r.beginPath(),r.moveTo(0,e/2),r.lineTo(t,e/2),r.stroke()})}function Xp(){let r=new Lt,t=nn(r),e=new ht({map:f_(),alphaTest:.4,side:Ue,roughness:.8,color:12624e3}),n=Vt(7165504,{roughness:.8}),i=(o,a,l)=>{let c=new I(...o),h=new I(...a),u=c.distanceTo(h),f=li(new j(l,u,l),1,u/1.6),d=t(f,e,(c.x+h.x)/2,(c.y+h.y)/2,(c.z+h.z)/2);d.quaternion.setFromUnitVectors(new I(0,1,0),h.clone().sub(c).normalize()),t(new j(l*.45,u,l*.45),n,d.position.x,d.position.y,d.position.z).quaternion.copy(d.quaternion)};for(let[o,a]of[[1,1],[1,-1],[-1,1],[-1,-1]])i([o*6.6,0,a*6.6],[o*3.9,6,a*3.9],1.7),i([o*3.9,6,a*3.9],[o*2.1,12.6,a*2.1],1.2);for(let o=0;o<4;o++){let a=new _n(4.6,.18,6,28,Math.PI),l=t(a,n,0,.6,0);l.rotation.y=o*Math.PI/2,l.position.set(Math.sin(o*Math.PI/2)*5.4,.6,Math.cos(o*Math.PI/2)*5.4)}t(li(new j(9.6,.8,9.6),6,.5),e,0,6.1,0),t(new j(8.6,.25,8.6),n,0,6.1,0),t(li(new j(5.4,.6,5.4),3,.4),e,0,12.7,0),t(new j(4.8,.2,4.8),n,0,12.7,0);let s=new ut(.75,2.8,11,4,1,!0);return s.rotateY(Math.PI/4),li(s,4,7),t(s,e,0,13+5.5,0),t(new ut(.35,1.3,11,4).rotateY(Math.PI/4),n,0,13+5.5,0),t(new j(1.2,.9,1.2),n,0,24.4,0),t(new ut(.08,.14,2.6,6),n,0,26.1,0),r}function d_(r,t){let e=new Lt,n=nn(e),i=Vt(15986662,{roughness:.7}),s=new ce(1,28,12,0,Math.PI*2,0,Math.PI/2),o=n(s,Vt(5601850,{roughness:1}));o.scale.set(15,7,11),o.position.y=-.2;let a=Zt("montmartre");for(let c=0;c<160;c++){let h=a()*Math.PI*2,u=.3+Math.sqrt(a())*.65,f=Math.cos(h)*u*15,d=Math.sin(h)*u*11,p=7*Math.sqrt(Math.max(0,1-u*u))-.3;(t.cityTrees=t.cityTrees||[]).push([r.x+f,r.z+d,a.range(.9,1.3),p])}let l=6.6;n(new j(5,2.2,3.2),i,0,l+1.1,0),n(new j(3.2,1.6,.8),i,0,l+.8,1.9);for(let c of[-.9,0,.9])n(new le(.55,1),Vt(2893858),c,l+.5,2.31);n(new ut(1.15,1.2,1.5,24),i,0,l+2.2+.75,0),n(new ce(1.15,24,12,0,Math.PI*2,0,Math.PI/2),i,0,l+3.7,0).scale.y=1.5,n(new ut(.22,.26,.7,10),i,0,l+5.7,0),n(new ze(.24,.5,10),i,0,l+6.3,0);for(let[c,h]of[[-1.9,1],[1.9,1],[-1.9,-1],[1.9,-1]])n(new ut(.45,.45,.6,14),i,c,l+2.5,h),n(new ce(.45,14,8,0,Math.PI*2,0,Math.PI/2),i,c,l+2.8,h).scale.y=1.5;return n(new j(1,4.6,1),i,0,l+2.3,-2.3),n(new ce(.5,12,8,0,Math.PI*2,0,Math.PI/2),i,0,l+4.6,-2.3).scale.y=1.4,e}function p_(){let r=new Lt,t=nn(r),e=En("mtp",128,128,(o,a,l)=>{o.fillStyle="#2a2622",o.fillRect(0,0,a,l);let c=Zt("mtp");for(let h=0;h<l;h+=8){o.fillStyle="#4a4540",o.fillRect(0,h,a,5);for(let u=0;u<a;u+=8)c()<.12&&(o.fillStyle="#c9a866",o.fillRect(u,h,6,5))}}),n=new ht({map:e,emissiveMap:e,emissive:5592405,roughness:.25,metalness:.5});t(he(6,2,4,2,2),Vt(3814962),0,1,0);let i=new an;i.moveTo(-2.4,-1.2),i.lineTo(2.4,-1.2),i.absarc(2.4,0,1.2,-Math.PI/2,Math.PI/2),i.lineTo(-2.4,1.2),i.absarc(-2.4,0,1.2,Math.PI/2,Math.PI*1.5);let s=new Nn(i,{depth:19,bevelEnabled:!1,curveSegments:10});return s.rotateX(-Math.PI/2),li(s,.4,.5),t(s,n,0,2,0),t(new j(3,.8,1.6),Vt(5591114),0,21.4,0),r}function m_(r,t){let e=new Lt,n=nn(e),i=new ht({map:X2("arche",{wall:"#eef0f0",glass:"#c9d2d6",cols:8,rows:8,mx:.08,my:.08}),roughness:.4}),s=8,o=1.2,a=6.5;n(he(o,s,a,1,1),i,-s/2+o/2,s/2,0),n(he(o,s,a,1,1),i,s/2-o/2,s/2,0),n(he(s,o,a,1,1),i,0,s-o/2,0),n(he(s,.5,a,1,1),i,0,.25,0),n(new le(s-2*o,.6),Vt(16185078,{transparent:!0,opacity:.6,side:Ue}),0,s*.45,0).rotation.x=-Math.PI/2;let l=Zt("defense");for(let c=0;c<8;c++){let h=c/8*Math.PI*2+.3,u=10+l()*4,f=10+l()*14,d=2.6+l()*1.6,p=ir(c%4),g=new ht({map:p.map,emissiveMap:p.emissiveMap,emissive:16777215,emissiveIntensity:.35,roughness:.12,metalness:.55});n(he(d,f,d,2,2),g,Math.cos(h)*u,f/2,Math.sin(h)*u)}return e}function g_(r,t){let e=new Lt,n=nn(e),i=34,s=13,o=En("cpark",512,256,(p,g,m)=>{let x=Zt("cpark");p.fillStyle="#5f8f45",p.fillRect(0,0,g,m);for(let v=0;v<g;v+=16)p.fillStyle=v/16%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",p.fillRect(v,0,16,m);for(let v=0;v<900;v++)p.fillStyle=`rgba(${x()<.5?"40,70,30":"140,170,90"},${x()*.25})`,p.fillRect(x()*g,x()*m,3,3);p.strokeStyle="#cdbf9c",p.lineWidth=5,p.lineCap="round";for(let v=0;v<6;v++)p.beginPath(),p.moveTo(x()*g,0),p.bezierCurveTo(x()*g,m*.3,x()*g,m*.7,x()*g,m),p.stroke();p.beginPath(),p.moveTo(0,m*.75),p.bezierCurveTo(g*.3,m*.6,g*.6,m*.9,g,m*.72),p.stroke(),p.fillStyle="#c9ae6a",p.beginPath(),p.ellipse(g*.8,m*.4,40,26,0,0,7),p.fill()});n(new j(i,.06,s),new ht({map:o,roughness:1}),0,.03,0).castShadow=!1;let a=qn("cpwall",10262154);for(let[p,g,m,x]of[[0,s/2,i,.25],[0,-s/2,i,.25],[i/2,0,.25,s],[-i/2,0,.25,s]])n(he(m,.3,x,.8,.4),a,p,.15,g);let l=Vt(4026252,{roughness:.08,metalness:.35}),c=n(new ut(1,1,.05,40),l,2,.07,-.8);c.scale.set(6,1,3.2),c.castShadow=!1,n(new ut(1,1,.04,40),Vt(9407102),2,.055,-.8).scale.set(6.3,1,3.5);let u=n(new ut(1,1,.05,30),l,-11,.07,2.4);u.scale.set(2.6,1,1.6),u.castShadow=!1;let f=n(new _n(.9,.08,6,16,Math.PI),Vt(15262938),-11,.06,2.4);f.rotation.y=Math.PI/2;let d=Zt("cptrees");for(let p=0;p<200;p++){let g=(d()-.5)*(i-1.2),m=(d()-.5)*(s-1.2);((g-2)/6.8)**2+((m+.8)/4)**2<1||((g+11)/3.2)**2+((m-2.4)/2.2)**2<1||g>9&&g<15&&m>-2&&m<2.5||(t.cityTrees=t.cityTrees||[]).push([r.x+g,r.z+m,.9+d()*.5,.06])}return e}function x_(r,t){let e=new Lt,n=nn(e),i=bi("chaillot",{wall:15129796,cols:6,rows:2,ww:.42,wh:.7,key:!1,pilaster:!0}),s=qn("chaillot",15129796),o=Vt(15525072),a=7.5,l=-1.5;for(let d of[-1,1]){let p=n(he(3.2,2.6,2.2,1.2,1.3),i,d*3.4,1.3,-3.6);ci(n,o,3.2,2.2,2.6,d*3.4,-3.6,.1);for(let g=0;g<7;g++){let m=(d>0?.55:Math.PI-.55)+d*(-g*.2),x=m-d*.2,v=Math.cos((m+x)/2)*a,_=Math.sin((m+x)/2)*a*.75+l,y=a*.2*1.02,M=n(he(y,1.6,1.4,1.2,.8),i,v,.8,_);M.rotation.y=-Math.atan2(Math.cos((m+x)/2)*.75,-Math.sin((m+x)/2)),n(new j(y+.1,.1,1.5),o,v,1.65,_).rotation.y=M.rotation.y}}n(he(4.2,.9,3,.8,.8),s,0,.45,-3.6);for(let d=0;d<4;d++)n(he(4-d*.2,.2,.7,.8,.8),s,0,.8-d*.2,-1.8+d*.7);let c=Vt(5211816,{roughness:.05,metalness:.3}),h=Vt(12367010),u=new ht({color:15398655,transparent:!0,opacity:.7,emissive:3364198});n(new j(3.4,.12,5),h,0,.06,3),n(new j(3.1,.06,4.7),c,0,.12,3).castShadow=!1;for(let d=0;d<6;d++)for(let p of[-1,0,1])n(new ze(.08,.6+(p?0:.4),6),u,p*1.1,.15+(p?.3:.5),1+d*.75).castShadow=!1;let f=Vt(7117386,{roughness:1});for(let d of[-1,1])n(new j(3,.04,5.4),f,d*3.6,.04,3);return Ca(e,[[-5.6,1],[-5.6,3],[-5.6,5],[5.6,1],[5.6,3],[5.6,5],[-2,5.8],[2,5.8]],3),e}var Pa={liberty:{r:7,build:l_},empire:{r:6,build:c_},chrysler:{r:5,build:h_},wtc:{r:6,build:u_},eiffel:{r:10,build:Xp},sacrecoeur:{r:15,build:d_},montparnasse:{r:6,build:p_},defense:{r:16,build:m_},centralpark:{r:18.5,build:g_},trocadero:{r:9,build:x_}};function oo(r,t,e){let n=r.clone();return n.needsUpdate=!0,n.repeat.set(t,e),n}var v_={hangangPark:Hd,grass:iu,dirt:Gd,snow:kd},sn=(r=0,t=0,e=0)=>new I(r,t,e),jn=1.9,y_=1.75,ls=class{constructor(){this.map=new Map}push(t,e){this.map.has(t)||this.map.set(t,[]);for(let n of Object.keys(e.attributes))["position","normal","uv"].includes(n)||e.deleteAttribute(n);e.attributes.uv||e.setAttribute("uv",new ke(new Float32Array(e.attributes.position.count*2),2)),this.map.get(t).push(e.index?e.toNonIndexed():e)}build(t,e=!0){for(let[n,i]of this.map){let s=new lt(jr(i,!1),n);s.castShadow=e,s.receiveShadow=!0,t.add(s)}this.map.clear()}};function Ls(r,t,e,n,i,s,o,a,l,c,h=1,u=1,f){let d=[[i,0,0,o/2,0,!1],[i,Math.PI,0,-o/2,0,!1],[o,Math.PI/2,i/2,0,0,!0],[o,-Math.PI/2,-i/2,0,0,!0]],p=new $t().makeRotationY(a),g=new $t().makeTranslation(t,e,n);for(let[m,x,v,_,,y]of d){let M=new le(m,s),b=M.attributes.uv,w=y&&f?f:l;if(!(y&&f))for(let S=0;S<b.count;S++)b.setXY(S,b.getX(S)*m/h,b.getY(S)*s/u);M.rotateY(x),M.translate(v,s/2,_),M.applyMatrix4(p),M.applyMatrix4(g),r.push(w,M)}if(c){let m=new le(i,o);m.rotateX(-Math.PI/2),m.translate(0,s,0),m.applyMatrix4(p),m.applyMatrix4(g),r.push(c,m)}}function Ia(r,t,e,n,i,s,o,a,l={}){let c=new $t().makeRotationY(o).premultiply(new $t().makeTranslation(t,0,e)),h=(d,p)=>{d.applyMatrix4(c),r.push(p,d)},u=l.t??.03,f=l.rh??.06;if(h(new j(n+u,f,u).translate(0,s+f/2,i/2),a),h(new j(n+u,f,u).translate(0,s+f/2,-i/2),a),h(new j(u,f,i).translate(n/2,s+f/2,0),a),h(new j(u,f,i).translate(-n/2,s+f/2,0),a),l.house&&h(new j(l.house[0],l.house[1],l.house[2]).translate(l.hx||0,s+l.house[1]/2,l.hz||0),l.houseM||a),l.awning&&h(new j(n*.9,.018,.13).rotateX(.32).translate(0,l.awning[0],i/2+.06),l.awning[1]),l.mech)for(let[d,p,g,m,x]of l.mech)h(new j(g,m,x).translate(d,s+m/2,p),l.mechM||a)}var __=(r,t={})=>{let e=r.clone();return e.needsUpdate=!0,e.wrapS=e.wrapT=de,new ht(Object.assign({map:e,roughness:.85},t))};function qp(r,t,e){let n=Math.max(.05,(r-t)/2),i=r/2,s=t/2,o=[-i,0,s,i,0,s,n,e,0,-i,0,s,n,e,0,-n,e,0,i,0,-s,-i,0,-s,-n,e,0,i,0,-s,-n,e,0,n,e,0,i,0,s,i,0,-s,n,e,0,-i,0,-s,-i,0,s,-n,e,0],a=new ve;return a.setAttribute("position",new kt(o,3)),a.computeVertexNormals(),a}function S_(r){let t=new Lt;t.position.set(r.x,0,r.z),t.rotation.y=r.ry||0;let e=(a,l,c=0,h=0,u=0)=>{let f=new lt(a,l);return f.position.set(c,h,u),f.castShadow=f.receiveShadow=!0,t.add(f),f},n=(a,l,c,h,u=0,f=0,d=0)=>e(new j(a,l,c),h,u,f+l/2,d),i=(a,l,c,h,u)=>e(qp(a,l,c),h,0,u,0),s={plaza:gt(14275266),stone:gt(12432803),granite:gt(10131086),red:gt(10696236),green:gt(4098936),tile:gt(3882821,{side:Ue}),blueTile:gt(2907816,{side:Ue,roughness:.5}),white:gt(15855592),dark:new Ie({color:1315860}),bronze:gt(6253130,{metalness:.4,roughness:.5}),silver:gt(13225684,{metalness:.6,roughness:.3}),glass:gt(8829404,{metalness:.3,roughness:.2}),lawn:gt(7317066),water:gt(5941206,{roughness:.2}),hill:gt(5537850,{roughness:1})},o=new lt(new j(r.w,.06,r.d),s.plaza);if(o.position.y=.03,o.receiveShadow=!0,t.add(o),lu[r.id])return lu[r.id](t,r),t;if(dh[r.id])return dh[r.id](t,r),t;switch(r.id){case"namdaemun":{n(3.8,1,2,s.stone),n(.9,.62,2.04,s.dark),e(new ut(.45,.45,2.04,14,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),s.dark,0,.62,0),n(2.8,.5,1.3,s.red,0,1),n(2.9,.08,1.4,s.green,0,1.46),i(3.7,2.1,.45,s.tile,1.5),n(2.2,.38,.95,s.red,0,1.8),n(2.3,.07,1.05,s.green,0,2.16),i(3.1,1.8,.6,s.tile,2.2);break}case"gyeongbok":{n(4.2,.28,3,s.stone),n(3.6,.28,2.4,s.stone,0,.28),n(.7,.4,.5,s.granite,0,0,1.6),n(2.8,.85,1.4,s.red,0,.56),n(2.9,.08,1.5,s.green,0,1.38),i(3.8,2.2,.45,s.tile,1.44),n(2.2,.4,1,s.red,0,1.78),n(2.3,.07,1.1,s.green,0,2.15),i(3.3,1.9,.65,s.tile,2.2);break}case"cheongwadae":{n(r.w-.2,.04,1,s.lawn,0,.06,.8),n(3.4,.75,1.3,s.white,0,.06,-.3),n(1.3,.95,1.4,s.white,0,.06,-.3),i(3.9,1.8,.5,s.blueTile,.8),e(qp(1.7,1.8,.75),s.blueTile,0,1,-.3).position.z=-.3;break}case"ntower":{e(new ce(1,20,10,0,Math.PI*2,0,Math.PI/2),s.hill).scale.set(1.5,.8,1.3);let a=.8;e(new ut(.28,.36,.3,14),s.granite,0,a+.15),e(new ut(.11,.15,2.6,12),s.white,0,a+1.6),e(new ut(.36,.26,.2,16),s.white,0,a+2.9),e(new ut(.4,.36,.3,16),s.glass,0,a+3.12),e(new ut(.3,.4,.16,16),s.white,0,a+3.34),e(new ut(.05,.09,.9,8),s.white,0,a+3.85),e(new ce(.07,8,6),new Ie({color:16726574}),0,a+4.33);break}case"yisunsin":{e(new ut(.95,.95,.08,24),s.water,0,.1),n(.7,1.3,.7,s.granite,0,.06),e(new ut(.14,.22,.7,10),s.bronze,0,1.72),e(new ce(.12,10,8),s.bronze,0,2.17),e(new ut(.03,.03,.75,6),s.bronze,.18,1.7);break}case"cityhall":{n(3.4,1.5,1.2,s.glass,0,.06,-.5),e(new j(3.5,.18,1.2),s.glass,0,1.6,.05).rotation.x=.55,n(1.8,.75,.8,s.stone,0,.06,.75),n(.45,.4,.45,s.stone,0,.8,.75),n(r.w-.4,.04,.5,s.lawn,0,.06,1.25);break}case"ddp":{e(new ce(1,36,14,0,Math.PI*2,0,Math.PI/2),s.silver).scale.set(2.2,.85,1.35),e(new ce(1,24,10,0,Math.PI*2,0,Math.PI/2),s.silver,1.2,0,.35).scale.set(1.1,.6,.8);break}}return t}function Yp(r,t,e,n){let i=r.length,s=new Float32Array(i*6),o=new Float32Array(i*4),a=[];for(let c=0;c<i;c++){let h=r[c].p,u=r[Math.min(i-1,c+1)].p,f=r[Math.max(0,c-1)].p,d=u.x-f.x,p=u.z-f.z,g=Math.hypot(d,p)||1,m=-p/g*t/2,x=d/g*t/2;s.set([h.x+m,e,h.z+x,h.x-m,e,h.z-x],c*6);let v=r[c].cum/n;if(o.set([0,v,1,v],c*4),c<i-1){let _=c*2;a.push(_,_+2,_+1,_+1,_+2,_+3)}}let l=new ve;return l.setAttribute("position",new ke(s,3)),l.setAttribute("uv",new ke(o,2)),l.setIndex(a),l.computeVertexNormals(),l}var $p=(r,t,e)=>{let n=r.length,i=r[t].p,s=r[Math.min(n-1,t+1)].p,o=r[Math.max(0,t-1)].p,a=s.x-o.x,l=s.z-o.z,c=Math.hypot(a,l)||1;return[i.x-l/c*e,i.z+a/c*e]},Jp=(r,t,e,n)=>r&&(r(...$p(t,e,n))||r(...$p(t,e+1,n)));function M_(r,t,e,n,i,s){let o=[];for(let a of[1,-1]){let l=r.length,c=new Float32Array(l*6),h=new Float32Array(l*4),u=[];for(let d=0;d<l;d++){let p=r[d].p,g=r[Math.min(l-1,d+1)].p,m=r[Math.max(0,d-1)].p,x=g.x-m.x,v=g.z-m.z,_=Math.hypot(x,v)||1,y=-v/_*a,M=x/_*a;c.set([p.x+y*e,n,p.z+M*e,p.x+y*t,n,p.z+M*t],d*6);let b=r[d].cum/i;if(h.set([0,b,1,b],d*4),d<l-1&&!Jp(s,r,d,a*(t+e)/2)){let w=d*2;u.push(...a>0?[w,w+2,w+1,w+1,w+2,w+3]:[w,w+1,w+2,w+1,w+3,w+2])}}let f=new ve;f.setAttribute("position",new ke(c,3)),f.setAttribute("uv",new ke(h,2)),f.setIndex(u),f.computeVertexNormals(),o.push(f.toNonIndexed())}return jr(o,!1)}function Zp(r,t,e,n,i){let s=r.length,o=new Float32Array(s*6),a=[];for(let c=0;c<s;c++){let h=r[c].p,u=r[Math.min(s-1,c+1)].p,f=r[Math.max(0,c-1)].p,d=u.x-f.x,p=u.z-f.z,g=Math.hypot(d,p)||1,m=h.x-p/g*t,x=h.z+d/g*t;if(o.set([m,n,x,m,e,x],c*6),c<s-1&&!Jp(i,r,c,t)){let v=c*2;a.push(v,v+2,v+1,v+1,v+2,v+3)}}let l=new ve;return l.setAttribute("position",new ke(o,3)),l.setIndex(a),l.computeVertexNormals(),l}function b_(r,t,e,n){let i=[];for(let o=3,a=0;o<t-2;o+=6.5,a++){let l=r.findIndex(w=>w.cum>=o);if(l<1)continue;let c=r[l].p,h=r[Math.min(r.length-1,l+1)].p,u=r[l-1].p,f=h.x-u.x,d=h.z-u.z,p=Math.hypot(f,d)||1,g=a%2?1:-1,m=-d/p*g,x=f/p*g,v=c.x+m*e,_=c.z+x*e;if(n&&n(v,_,.5))continue;let y=new ut(.035,.05,1.5,6);y.translate(v,.75+.1,_);let M=new j(.05,.05,.42);M.rotateY(Math.atan2(-m,-x)),M.translate(v-m*.2,1.58,_-x*.2);let b=new j(.2,.07,.12);b.rotateY(Math.atan2(-m,-x)),b.translate(v-m*.4,1.55,_-x*.4),i.push(y,M,b)}return i.length?jr(i.map(o=>o.toNonIndexed()),!1):null}function E_(r,t=1.6){let e=r.map(([o,a])=>sn(o,0,a)),n=[e[0]];for(let o=1;o<e.length-1;o++){let a=e[o-1],l=e[o],c=e[o+1],h=a.clone().sub(l).normalize(),u=c.clone().sub(l).normalize(),f=l.clone().addScaledVector(h,t),d=l.clone().addScaledVector(u,t);for(let p=0;p<=8;p++){let g=p/8;n.push(f.clone().multiplyScalar((1-g)**2).addScaledVector(l,2*g*(1-g)).addScaledVector(d,g*g))}}n.push(e[e.length-1]);let i=[],s=0;for(let o=0;o<n.length-1;o++){let a=n[o],l=n[o+1],c=a.distanceTo(l),h=Math.max(1,Math.ceil(c/.25));for(let u=0;u<h;u++)i.push({p:a.clone().lerp(l,u/h),cum:s+c*u/h});s+=c}return i.push({p:n[n.length-1].clone(),cum:s}),{samples:i,len:s}}function T_(r){let t=new ys(r.map(([a,l])=>sn(a,0,l)),!1,"centripetal"),e=t.getLength(),n=Math.max(8,Math.ceil(e/.25)),i=[],s=0,o=null;for(let a=0;a<=n;a++){let l=t.getPointAt(a/n);o&&(s+=l.distanceTo(o)),i.push({p:l,cum:s}),o=l}return{samples:i,len:s}}var Da=class{constructor(t,e){this.scene=t,this.S=e,this.group=new Lt,t.add(this.group),this.anim=[],this.shadowDirty=!0,this.labels=[],this.rnd=Zt(e.seed),this.roadClear=y_,this.streetBlocks=[],this.mats(),this.buildRoute(),this.buildGround(),this.buildRiver(),this.buildCity(),this.buildLandmarks(),this.buildBattleDecor(),this.buildGateBase(),this.buildStreetFront(),this.buildTrees()}mats(){this.M={apt:[0,1,2].map(t=>{let e=Jd(t);return new ht({map:e.map,emissiveMap:e.emissiveMap,emissive:16777215,emissiveIntensity:.35,roughness:.78})}),glass:[0,1,2,3].map(t=>{let e=ir(t);return new ht({map:e.map,emissiveMap:e.emissiveMap,emissive:16777215,emissiveIntensity:.4,roughness:.12,metalness:.55})}),rim:gt(14079183,{roughness:.9}),rimDark:gt(7106677,{roughness:.7,metalness:.3}),mech:gt(10133670,{roughness:.6,metalness:.4}),gold:__(su(),{roughness:.35,metalness:.1}),roof:new ht({map:Yc(0),roughness:.95}),roof2:new ht({map:Yc(2),roughness:.9}),roofG:gt(8231530),gable:[101,102,103,104,105,106,107,108,109,110].map((t,e)=>new ht({map:Fd(t,e%3),roughness:.8}))}}buildRoute(){let t=this.S,e=g=>g.sharp?E_(g.pts):T_(g.pts);this.steps=t.route.map(g=>({opts:(g.choice||[g]).map(x=>Object.assign({id:x.id,pts:x.pts},e(x))),choice:!!g.choice,open:0})),this.branches=(t.branches||[]).map(g=>Object.assign({id:g.id,name:g.name||g.id,pts:g.pts,sharp:!!g.sharp,fromWave:g.fromWave||1,gate:g.gate||g.pts[0],join:g.join},e(g)));for(let g of this.branches){let m=g.samples[g.samples.length-1].p,x=null,v=(y,M)=>{for(let b of y.samples){let w=b.p.distanceTo(m);(!x||w<x.d)&&(x={d:w,cum:b.cum,ref:M})}},_=g.join&&this.branches.find(y=>y.id===g.join&&y!==g);_?v(_,{branch:_}):this.steps.forEach((y,M)=>v(y.opts[0],{step:M})),g.joinCum=x.cum,g.joinRef=x.ref}this.gateDirs=[this.steps[0].opts[0].pts,...this.branches.map(g=>g.pts)].map(([[g,m],[x,v]])=>{let _=Math.hypot(x-g,v-m);return[g,m,(x-g)/_,(v-m)/_]});let n=jd(),i=Qd(),s=new ht({map:n.map,bumpMap:n.bump,bumpScale:1.2,roughness:.88,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),o=new ht({map:i.map,bumpMap:i.bump,bumpScale:1.5,roughness:.92,side:Ue,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Ie({map:Ud(),transparent:!0,depthWrite:!1}),l=new ht({color:12170926,roughness:.9,side:Ue}),c=gt(4212044);this.ghostM=a,this.roadM=s,this.walkM=o,this.roadGroup=new Lt,this.group.add(this.roadGroup);let h=[];for(let g of this.steps)for(let m of g.opts)h.push({o:m,pts:m.samples.filter((x,v)=>v%2===0).map(x=>x.p)});for(let g of this.branches){let m=g.samples[g.samples.length-1].p;h.push({o:g,pts:g.samples.filter((x,v)=>v%2===0&&x.p.distanceTo(m)>jn/2+.05).map(x=>x.p)})}let u=g=>{let m=h.filter(x=>x.o!==g);return m.length?(x,v,_=0)=>{let y=(jn/2+.42+_)**2;for(let M of m)for(let b of M.pts)if((b.x-x)**2+(b.z-v)**2<y)return!0;return!1}:null},f=(g,m,x)=>{let v=u(g);g.road=new lt(Yp(g.samples,jn,x,3.2),s),g.walk=new lt(M_(g.samples,jn/2,(jn+.9)/2,.13,2.4,v),o),g.road.receiveShadow=g.walk.receiveShadow=!0;for(let y of[jn/2,-jn/2])g.walk.add(new lt(Zp(g.samples,y,.02,.13,v),l));for(let y of[(jn+.9)/2,-(jn+.9)/2]){let M=new lt(Zp(g.samples,y,0,.13,v),l);M.castShadow=!0,g.walk.add(M)}let _=b_(g.samples,g.len,jn/2+.28,v);if(_){let y=new lt(_,c);y.castShadow=!0,g.walk.add(y)}this.roadGroup.add(g.road,g.walk)};for(let g of this.steps)g.opts.forEach((m,x)=>{f(m,x,.03+x*.004),m.ghost=new lt(Yp(m.samples,jn,.05,1.6),a),this.roadGroup.add(m.ghost)});this.branches.forEach((g,m)=>f(g,m,.034+m*.003));let d=new an;d.moveTo(-.32,.36),d.lineTo(.18,0),d.lineTo(-.32,-.36),d.lineTo(-.1,-.36),d.lineTo(.4,0),d.lineTo(-.1,.36),d.closePath();let p=new _s(d);p.rotateX(-Math.PI/2),this.chevM=new Ie({color:14174012,transparent:!0,opacity:.5,depthWrite:!1}),this.chev=new yn(p,this.chevM,600),this.chev.frustumCulled=!1,this.group.add(this.chev),this.barricades=new Lt,this.group.add(this.barricades),this.refreshRoads()}allRoads(){let t=[];for(let e of this.steps)t.push(...e.opts);return t.concat(this.branches||[])}activeOpts(){return this.steps.map(t=>t.opts[t.open])}routeLength(){return this.activeOpts().reduce((t,e)=>t+e.len,0)}refreshRoads(){for(let s of this.steps)s.opts.forEach((o,a)=>{let l=a===0||s.open===a;o.road.visible=o.walk.visible=l,o.ghost.visible=!l});this.barricades.clear();for(let s of this.steps){if(!s.choice||s.open===0)continue;let o=s.opts[0].samples,a=o[Math.floor(o.length/2)],l=o[Math.floor(o.length/2)+1],c=new Lt;for(let h=-1;h<=1;h++){let u=new lt(new j(.26,.42,.6),gt(h%2?14211280:14172206));u.position.set(0,.21,h*.62),u.castShadow=!0,c.add(u)}c.position.set(a.p.x,0,a.p.z),c.rotation.y=-Math.atan2(l.p.z-a.p.z,l.p.x-a.p.x),this.barricades.add(c)}this.chevPts=[];let t=0;for(let s of this.activeOpts()){let o=s.samples;for(let a=t;a<s.len;a+=2.2){let l=0;for(;l<o.length-2&&o[l+1].cum<a;)l++;let c=o[l],h=o[l+1],u=(a-c.cum)/Math.max(1e-6,h.cum-c.cum);this.chevPts.push({x:c.p.x+(h.p.x-c.p.x)*u,z:c.p.z+(h.p.z-c.p.z)*u,ang:Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x)})}t=(t-s.len)%2.2,t<0&&(t+=2.2)}for(let s of this.branches||[]){let o=s.samples,a=o[o.length-1].p;for(let l=.6;l<s.len;l+=2.2){let c=0;for(;c<o.length-2&&o[c+1].cum<l;)c++;let h=o[c],u=o[c+1],f=(l-h.cum)/Math.max(1e-6,u.cum-h.cum),d=h.p.x+(u.p.x-h.p.x)*f,p=h.p.z+(u.p.z-h.p.z)*f;if(Math.hypot(d-a.x,p-a.z)<jn*.7)break;this.chevPts.push({x:d,z:p,ang:Math.atan2(u.p.z-h.p.z,u.p.x-h.p.x)})}}let e=new $t,n=new rn,i=sn(1,1,1);this.chev.count=Math.min(600,this.chevPts.length);for(let s=0;s<this.chev.count;s++){let o=this.chevPts[s];n.setFromAxisAngle(sn(0,1,0),-o.ang),e.compose(sn(o.x,.1,o.z),n,sn(1.25,1,1.25)),this.chev.setMatrixAt(s,e)}this.chev.instanceMatrix.needsUpdate=!0}openDetour(t){let e=this.steps[t];return!e||!e.choice||e.open?!1:(e.open=1,this.refreshRoads(),!0)}resetRoutes(){for(let t of this.steps)t.open=0;this.refreshRoads()}detourNear(t,e=2.2){let n=null,i=e;return this.steps.forEach((s,o)=>{if(!(!s.choice||s.open))for(let a of s.opts[1].samples){let l=Math.hypot(a.p.x-t.x,a.p.z-t.z);l<i&&(i=l,n=o)}}),n}roadDist(t,e){let n=1e9;for(let i of this.allRoads()){let s=i.samples;for(let o=0;o<s.length;o+=2){let a=(s[o].p.x-t)**2+(s[o].p.z-e)**2;a<n&&(n=a)}}return Math.sqrt(n)}blockReason(t,e){let n=this.S.bounds;if(t<n.x0+.5||t>n.x1-.5||e<n.z0+.5||e>n.z1-.5)return"\uC791\uC804 \uAD6C\uC5ED \uBC16";let i=this.S.round;if(i&&Math.hypot(t-i.x,e-i.z)>i.r-.6)return"\uC791\uC804 \uAD6C\uC5ED \uBC16";if(this.roadDist(t,e)<this.roadClear)return"\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00";for(let s of this.streetBlocks)if(Math.abs(t-s.x)<s.hx+.45&&Math.abs(e-s.z)<s.hz+.45)return"\uAC74\uBB3C \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00";for(let s of this.S.blockers)if(s.kind==="pond"){if(((t-s.x)/(s.rx+.4))**2+((e-s.z)/(s.rz+.4))**2<1)return"\uC5F0\uBABB \uBC30\uCE58 \uBD88\uAC00"}else if(Math.abs(t-s.x)<s.w/2+.6&&Math.abs(e-s.z)<s.d/2+.6)return s.label+" \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00";return this.S.baseArc&&Math.abs(t-this.base.x)<4.4&&Math.abs(e-this.base.z)<3?"\uAC1C\uC120\uBB38 \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00":Math.hypot(t-this.base.x,e-this.base.z)<2.2?"\uC9C0\uD718\uBD80 \uBC30\uCE58 \uBD88\uAC00":null}buildGround(){let t=this.S,e=t.bounds,n=tp(),i=new lt(new le(520,520),new ht({map:oo(n.map,90,90),bumpMap:oo(n.bump,90,90),roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-.02,i.receiveShadow=!0,this.group.add(i);let s=e.x1-e.x0,o=e.z1-e.z0,a=t.theme||{},l;if(a.ground==="plaza"){let g=np();l=new ht({map:oo(g.map,s/6,o/6),bumpMap:oo(g.bump,s/6,o/6),bumpScale:.6,roughness:.9,color:a.groundTint??16777215})}else if(a.ground==="boulevard"){let g=ep(),m=8.5,x=a.laneCenter??4.25,v=new le(s,o);v.rotateX(-Math.PI/2);let _=v.attributes.position,y=v.attributes.uv;for(let b=0;b<_.count;b++){let w=_.getX(b)+(e.x0+e.x1)/2,S=_.getZ(b)+(e.z0+e.z1)/2;y.setXY(b,w/m,(S-x)/m+.5)}let M=new lt(v,new ht({map:g.map,bumpMap:g.bump,bumpScale:1.2,roughness:.86}));M.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),M.receiveShadow=!0,this.group.add(M),this.buildCrosswalks()}else if(a.ground==="hangangPark"||!a.ground){let g=Kd();l=new ht({map:oo(g.map,s/14,o/14),bumpMap:oo(g.bump,s/14,o/14),bumpScale:2,roughness:.97})}else{let g=v_[a.ground]().clone();g.needsUpdate=!0,g.wrapS=g.wrapT=de,g.repeat.set(s/8,o/8),l=new ht({map:g,roughness:1})}let c=t.round;if(l&&c){let g=new lt(new Wn(c.r,96),l);g.rotation.x=-Math.PI/2,g.position.set(c.x,.005,c.z),g.receiveShadow=!0,this.group.add(g);let m=(_,y,M)=>new Vo([new J(_,0),new J(y,0),new J(y,M),new J(_,M),new J(_,0)],128),x=new lt(m(c.r,c.r+.35,.32),gt(a.edge||12433580));x.position.set(c.x,0,c.z),x.castShadow=x.receiveShadow=!0;let v=new lt(m(c.r+.35,c.r+1.25,.55),gt(a.hedge||5012020,{roughness:1}));v.position.set(c.x,0,c.z),v.castShadow=!0,this.group.add(x,v);return}if(l){let g=new lt(new le(s,o),l);g.rotation.x=-Math.PI/2,g.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),g.receiveShadow=!0,this.group.add(g)}let h=new ls,u=gt(a.edge||12433580),f=gt(a.hedge||5012020,{roughness:1}),d=(e.x0+e.x1)/2,p=(e.z0+e.z1)/2;for(let[g,m,x,v,_,y]of[[d,e.z0,s+.7,.35,0,-1],[d,e.z1,s+.7,.35,0,1],[e.x0,p,.35,o+.7,-1,0],[e.x1,p,.35,o+.7,1,0]]){let M=new j(x,.32,v);M.translate(g,.16,m),h.push(u,M);let b=new j(x+(_?0:1.2),.55,v+(y?0:1.2));b.translate(g+_*.55,.27,m+y*.55),h.push(f,b)}h.build(this.group)}buildRiver(){let t=this.S.river;if(!t)return;let e=t.z-t.w/2,n=t.z+t.w/2,i=Nd().clone();i.needsUpdate=!0,i.wrapS=i.wrapT=de,i.repeat.set(60,2);let s=new lt(new le(520,t.w),new ht({map:i,color:{paris:10273972,newyork:8826568}[t.kind]||10408176,roughness:.25,metalness:.2}));s.rotation.x=-Math.PI/2,s.position.set(0,.003,t.z),s.receiveShadow=!0,this.group.add(s),this.anim.push(p=>{i.offset.x+=p*.01,i.offset.y+=p*.004});let o=t.kind||"seoul";if(o==="seoul"){let p=iu().clone();p.needsUpdate=!0,p.wrapS=p.wrapT=de,p.repeat.set(80,1);let g=new ht({map:p,roughness:1});for(let[v,_]of[[e-1,2.2],[n+1,2.2]]){let y=new lt(new le(520,_),g);y.rotation.x=-Math.PI/2,y.position.set(0,.004,v),y.receiveShadow=!0,this.group.add(y)}let m=gt(11118236);for(let v of[e,n]){let _=new lt(new le(520,.35),m);_.rotation.x=-Math.PI/2,_.position.set(0,.006,v),this.group.add(_)}let x=new lt(new le(520,.35),gt(11891034));x.rotation.x=-Math.PI/2,x.position.set(0,.008,e-.9),this.group.add(x)}else{let p=gt(o==="paris"?14076328:9409173,{roughness:.95}),g=gt(o==="paris"?13352344:7829884);for(let[m,x]of[[e,-1],[n,1]]){let v=new lt(new j(520,.9,.3),p);v.position.set(0,-.15,m),this.group.add(v);let _=new lt(new le(520,2.2),g);if(_.rotation.x=-Math.PI/2,_.position.set(0,.004,m+x*1.1),_.receiveShadow=!0,this.group.add(_),o==="paris")for(let y=-120;y<120;y+=3)(this.cityTrees=this.cityTrees||[]).push([y,m+x*1.6,.8])}}let a=new ls,l=gt(9211795),c=gt(11842218),h=gt(13125178),u=gt(3829685),f=gt(15263976),d={seoul:[[-22,"arch",u],[4,"plain",null],[30,"truss",h]],newyork:[[-18,"suspension",gt(11901560)],[18,"truss",u],[52,"plain",null]],paris:[[-14,"stone",gt(14273448)],[10,"stone",gt(14273448)],[34,"stone",gt(14273448)]]}[o];for(let[p,g,m]of d){let x=g,v=t.w+2.8,_=t.z,y=new j(2.6,.3,v);y.translate(p,.35,_),a.push(l,y);let M=new le(2.2,v);M.rotateX(-Math.PI/2),M.translate(p,.505,_),a.push(gt(5593181),M);for(let b of[-1,1]){let w=new j(.08,.16,v);w.translate(p+b*1.25,.58,_),a.push(f,w)}for(let b=e+.5;b<=n-.5;b+=1.75){let w=new j(1.6,.9,.5);w.translate(p,-.15,b),a.push(x==="stone"?m:c,w)}if(x==="suspension"){for(let w of[_-t.w/2+.6,_+t.w/2-.6]){for(let T of[-1,1]){let A=new j(.5,4.4,.8);A.translate(p+T*.95,2.4,w),a.push(m,A)}let S=new j(2.4,.7,.8);S.translate(p,4.25,w),a.push(m,S)}let b=gt(3882562);for(let w of[-1,1])for(let S=0;S<20;S++){let T=S/20,A=(S+1)/20,C=_-v/2+T*v,D=_-v/2+A*v,N=.6+4*(2*T-1)**2,L=.6+4*(2*A-1)**2,B=sn(p+w*1.15,N,C),G=sn(p+w*1.15,L,D),q=new j(.05,.05,B.distanceTo(G)+.02);if(q.lookAt(G.clone().sub(B)),q.translate((B.x+G.x)/2,(B.y+G.y)/2,(B.z+G.z)/2),a.push(b,q),S%2){let rt=N-.5,X=new j(.02,rt,.02);X.translate(p+w*1.15,.5+rt/2,C),a.push(b,X)}}}else if(x==="stone"){for(let b=0;b<3;b++){let w=e+(b+.5)*t.w/3,S=new _n(t.w/6-.15,.22,6,16,Math.PI);S.rotateY(Math.PI/2),S.scale(1,.8,1);for(let T of[-1,1]){let A=S.clone();A.translate(p+T*1.2,.05,w),a.push(m,A)}}for(let b of[-1,1]){let w=new j(.16,.3,v);w.translate(p+b*1.25,.65,_),a.push(m,w)}}else if(x==="arch")for(let b of[-1,1])for(let w=0;w<16;w++){let S=w/16*Math.PI,T=(w+1)/16*Math.PI,A=sn(p+b*1.25,.5+Math.sin(S)*2.6,_-Math.cos(S)*(t.w/2)),C=sn(p+b*1.25,.5+Math.sin(T)*2.6,_-Math.cos(T)*(t.w/2)),D=new j(.16,.16,A.distanceTo(C)+.05);if(D.lookAt(C.clone().sub(A)),D.translate((A.x+C.x)/2,(A.y+C.y)/2,(A.z+C.z)/2),a.push(m,D),w%2===0&&w>0){let N=Math.sin(S)*2.6,L=new j(.05,N,.05);L.translate(p+b*1.25,.5+N/2,A.z),a.push(m,L)}}else if(x==="truss")for(let b of[-1,1]){let w=new j(.14,.14,v-3);w.translate(p+b*1.25,1.7,_),a.push(m,w);for(let S=_-(v-3)/2;S<_+(v-3)/2;S+=1.1){let T=new j(.08,1.45,.08);T.rotateX(Math.round(S*10)%2?.6:-.6),T.translate(p+b*1.25,1.05,S+.55),a.push(m,T)}}}a.build(this.group);for(let p=0;p<4;p++){let g=new Lt,m=new lt(new j(2.2,.35,.7),gt(16053488));m.position.y=-.15,g.add(m);let x=new lt(new j(1.1,.35,.55),gt(3829685));x.position.set(-.2,.18,0),g.add(x),g.position.set(-80+p*45,0,t.z+(p%2?1.6:-1.4));let v=p%2?1:-1;this.group.add(g),this.anim.push((_,y)=>{g.position.x+=v*.9*_,g.position.x>120&&(g.position.x=-120),g.position.x<-120&&(g.position.x=120),g.rotation.z=Math.sin(y*1.3+p)*.02,g.rotation.y=v>0?0:Math.PI})}}buildCity(){let t=this.S,e=t.bounds,n=t.river,i=this.rnd,s=new ls,o=this.M,a=[];for(let f of t.landmarks)f.id==="namsan"&&a.push([f.x,f.z,13]),f.id==="lotte"&&a.push([f.x,f.z,7]),f.id==="b63"&&a.push([f.x,f.z-3,7]);for(let f of t.landmarks)Pa[f.id]&&a.push([f.x,f.z,Pa[f.id].r]);for(let[f,d,p,g]of this.gateDirs||[[t.gate[0],t.gate[1],1,0]])a.push([f-p*2,d-g*2,4.5]);let l=(f,d,p)=>{if(t.round){if(Math.hypot(f-t.round.x,d-t.round.z)<t.round.r+3.6+p)return!1}else if(f>e.x0-3.5&&f<e.x1+3.8&&d>e.z0-3.4&&d<e.z1+3.4)return!1;if(n&&d>n.z-n.w/2-2.5-p&&d<n.z+n.w/2+2.5+p)return!1;for(let[g,m,x]of a)if(Math.hypot(f-g,d-m)<x+p)return!1;return!0},c=(t.theme||{}).city;if(c==="newyork"||c==="paris"){(c==="newyork"?Hp:Gp)(this,{free:l,B:s,rnd:i,boxWalls:Ls,roofKit:Ia,mat:gt}),s.build(this.group);return}let h=gt(13223613),u=0;for(let f=-150;f<150;f+=9)for(let d=-78;d<90;d+=9){let p=f+4.5,g=d+4.5,m=Math.hypot(p,g);if(m>150||!l(p,g,4))continue;let x=new le(7.2,7.2);x.rotateX(-Math.PI/2),x.translate(p,.006,g),s.push(h,x);let v=g<(n?n.z:-40),_=g>e.z1-6&&g<e.z1+34&&p>e.x0-30&&p<e.x1+30,y=!_&&g>e.z0-4&&g<e.z1&&(p<e.x0||p>e.x1)&&Math.min(Math.abs(p-e.x0),Math.abs(p-e.x1))<16,M=_?.45:y?.75:1,b=i();if(b<(v?.55:.68)){let w=i.int(0,2),S=Math.round(i.int(12,25)*M),T=S*.28,A=i()<.85?0:Math.PI/2;for(let C=0;C<2;C++){let D=i.range(5.2,6.4),N=1.25,L=A?C?1.7:-1.7:0,B=A?0:C?1.8:-1.8,G=m<60;Ls(s,p+L,0,g+B,D,T,N,A,o.apt[w],o.roof,1.6,1.12,G?o.gable[u++%o.gable.length]:null),Ia(s,p+L,g+B,D,N,T,A,o.rim,{t:.06,rh:.12,house:[.9,.42,N*.6],hx:D*.2,houseM:o.rim,mech:G?[[-D*.25,0,.5,.16,.4]]:null,mechM:o.mech})}}else if(b<.9){let w=i.int(1,3);for(let S=0;S<w;S++){let T=i.range(2.2,3.4),A=i.range(2.2,3.4),C=i.range(5,m<50?12:18)*M,D=p+i.range(-1.6,1.6),N=g+i.range(-1.6,1.6);Ls(s,D,0,N,T,C,A,0,o.glass[i.int(0,3)],o.roof2,2,2),Ia(s,D,N,T,A,C,0,o.rimDark,{t:.08,rh:.2,house:[T*.5,.5,A*.45],houseM:o.mech,mech:[[T*.3,A*.3,.4,.25,.3]],mechM:o.mech})}}else{let w=new le(6.8,6.8);w.rotateX(-Math.PI/2),w.translate(p,.01,g),s.push(o.roofG,w);for(let S=0;S<6;S++)(this.cityTrees=this.cityTrees||[]).push([p+i.range(-3,3),g+i.range(-3,3),i.range(.8,1.2)])}if(i()<.5)for(let w=0;w<3;w++)(this.cityTrees=this.cityTrees||[]).push([p+(i()<.5?-3.8:3.8),g+i.range(-3.5,3.5),i.range(.7,1)])}if(n)for(let f=-150;f<150;f+=7.5){let d=n.z-n.w/2-4;if(a.some(([m,x,v])=>Math.hypot(f-m,d-x)<v+3))continue;let p=i.int(0,2),g=i.int(14,28)*.28;Ls(s,f,0,d,6,g,1.25,0,o.apt[p],o.roof,1.6,1.12,Math.abs(f)<50?o.gable[u++%o.gable.length]:null),Ia(s,f,d,6,1.25,g,0,o.rim,{t:.06,rh:.12,house:[.9,.42,.75],hx:1.2})}s.build(this.group)}buildLandmarks(){let t=this.S,e=new ls;for(let n of t.landmarks){if(Pa[n.id]){let i=Pa[n.id].build(n,this);i.position.set(n.x,0,n.z),this.group.add(i),i.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)})}if(n.id==="namsan"){let i=new ce(1,28,14,0,Math.PI*2,0,Math.PI/2),s=i.attributes.position,o=Zt("namsan");for(let l=0;l<s.count;l++){let c=s.getY(l);s.setXYZ(l,s.getX(l)*11,Math.pow(c,1.4)*6*(1+o.range(-.04,.04)),s.getZ(l)*8)}i.computeVertexNormals();let a=new lt(i,gt(5208630,{roughness:1}));a.position.set(n.x,-.1,n.z),a.castShadow=a.receiveShadow=!0,this.group.add(a),this.namsan={x:n.x,z:n.z};for(let l=0;l<260;l++){let c=o()*Math.PI*2,h=Math.sqrt(o())*.95,u=Math.cos(c)*h,f=Math.sin(c)*h,d=Math.pow(Math.sqrt(Math.max(0,1-h*h)),1.4)*6;h>.18&&(this.cityTrees=this.cityTrees||[]).push([n.x+u*11,n.z+f*8,o.range(1,1.5),d-.1])}}if(n.id==="ntower"){let i=new Lt;i.position.set(n.x,5.8,n.z),i.scale.setScalar(.85);let s=gt(15921904,{roughness:.5}),o=gt(10396584),a=(c,h,u)=>{let f=new lt(c,h);return f.position.y=u,f.castShadow=!0,i.add(f),f};a(new ut(1.1,1.4,1,16),o,.5),a(new ut(.42,.55,8.5,16),s,5.2),a(new ut(1.15,.85,.6,20),s,9.4),a(new ut(1.25,1.15,.9,20),gt(7309984,{roughness:.3,metalness:.5}),10.1),a(new ut(.95,1.25,.5,20),s,10.8),a(new ut(.18,.3,2.6,10),s,12.4);for(let c=0;c<4;c++)a(new ut(.1,.12,.5,8),c%2?s:gt(13777454),13.9+c*.5);let l=a(new ce(.16,8,6),new Ie({color:16726574}),16);this.anim.push((c,h)=>{l.visible=Math.sin(h*3)>0}),this.group.add(i)}if(n.id==="lotte"){let i=new ut(.35,2.4,26,4,12,!1,Math.PI/4),s=i.attributes.position;for(let c=0;c<s.count;c++){let h=s.getY(c)/26+.5,u=2.4+(.35-2.4)*h,f=2.4*(1-.86*Math.pow(h,1.7));s.setX(c,s.getX(c)*f/u),s.setZ(c,s.getZ(c)*f/u)}i.computeVertexNormals();let o=Bd(2).clone(),a=new lt(i,new ht({map:o,color:16777215,emissive:1911350,roughness:.35,metalness:.05}));a.position.set(n.x,13,n.z),a.castShadow=!0,this.group.add(a);let l=new lt(new ze(.35,2,4),gt(15331058,{metalness:.6,roughness:.3}));l.position.set(n.x,27,n.z),this.group.add(l),Ls(e,n.x+4.2,0,n.z+1,4,2.2,3,0,this.M.glass[1],this.M.roof2,2,2)}if(n.id==="b63"){let i=new j(3.2,13,2),s=i.attributes.position;for(let l=0;l<s.count;l++){let c=s.getY(l)/13+.5;s.setX(l,s.getX(l)*(1-c*.35))}i.computeVertexNormals();let o=su().clone();o.needsUpdate=!0,o.wrapS=o.wrapT=de,o.repeat.set(4,16);let a=new lt(i,new ht({map:o,emissive:2759168,roughness:.35,metalness:.1}));a.position.set(n.x,6.5,n.z),a.castShadow=!0,this.group.add(a);for(let l=0;l<4;l++)Ls(e,n.x-1.2-(l>>1)*3.2,0,n.z+(l%2?4.6:-4.6),2.2,4+l*1.1,2.6,0,this.M.glass[l%4],this.M.roof2,2,2)}if(n.id==="bukhan"){let i=Zt("bukhan"),s=gt(8357240,{roughness:1,flatShading:!0}),o=gt(5599306,{roughness:1,flatShading:!0});for(let a=0;a<16;a++){let l=-160+a*21+i.range(-6,6),c=14+i()*16*(1-Math.abs(l-n.x)/200),h=i.range(14,24),u=new ze(h,c,9,4),f=u.attributes.position;for(let p=0;p<f.count;p++)f.getY(p)<c/2-.01&&f.setXYZ(p,f.getX(p)*i.range(.85,1.15),f.getY(p)+i.range(-1,1),f.getZ(p)*i.range(.85,1.15));u.computeVertexNormals();let d=new lt(u,a%3===0?s:o);d.position.set(l,c/2-1,n.z-i.range(0,14)),this.group.add(d)}}n.label&&n.id!=="namsan"&&this.labels.push({text:n.label,pos:sn(n.x,n.y||0,n.z),kind:"landmark"}),n.id==="namsan"&&n.label&&this.labels.push({text:n.label,pos:sn(n.x+8,2.5,n.z+4),kind:"landmark"})}e.build(this.group)}buildBattleDecor(){let t=new ls,e=this.M;for(let n of this.S.blockers)if(n.kind==="pond"){let i=new Wn(1,32);i.rotateX(-Math.PI/2),i.scale(n.rx,1,n.rz),i.translate(n.x,.015,n.z),t.push(gt(5216196,{roughness:.2,metalness:.2}),i);let s=new Fi(1,1.12,32);s.rotateX(-Math.PI/2),s.scale(n.rx,1,n.rz),s.translate(n.x,.02,n.z),t.push(gt(13222573),s)}else if(n.kind==="field"){let i=new lt(new le(n.w+1.4,n.d+.9),gt(11883839));i.rotation.x=-Math.PI/2,i.position.set(n.x,.012,n.z),i.receiveShadow=!0,this.group.add(i);let s=new lt(new le(n.w,n.d),new ht({map:zd(),roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.016,n.z),s.receiveShadow=!0,this.group.add(s);for(let o of[-1,1]){let a=new j(.1,.35,.9);a.translate(n.x+o*n.w/2,.18,n.z),t.push(gt(16777215),a)}}else if(n.kind==="landmark"){let i=S_(n);this.group.add(i),as(i,()=>!1,!0),n.label&&this.labels.push({text:n.label,pos:sn(n.x,n.y||2.6,n.z),kind:"landmark"})}else if(n.kind==="apts"){let i=Math.max(1,Math.round(n.w/3.4));for(let s=0;s<i;s++){let o=n.w/i-.5,a=n.x-n.w/2+(s+.5)*n.w/i;Ls(t,a,0,n.z,o,4.2+s%2*.8,n.d-.6,0,e.apt[s%3],e.roof,1.6,1.12,e.gable[s%e.gable.length])}}t.build(this.group)}buildGateBase(){let t=this.S;this.gate=sn(t.gate[0],0,t.gate[1]);let e=[{pts:this.steps[0].opts[0].pts,label:"\uC801 \uC9C4\uC785"+(t.route[0].name?" \xB7 "+t.route[0].name:"")}].concat(this.branches.map(p=>({pts:p.pts,label:"\uC801 \uC9C4\uC785 \xB7 "+p.name,br:p}))),n=gt(9276035),i=new Ie({color:723724}),s=gt(5601852,{roughness:1}),o=new Ie({color:16724016}),a=(t.theme||{}).city,l=a&&qn("gate"+a,a==="paris"?13352350:9075306),c=gt(a==="paris"?14734520:10261898),h=gt(2763822,{metalness:.5});this.anim.push((p,g)=>{o.color.setHSL(0,1,.45+Math.sin(g*4)*.12)});for(let p of e){let[g,m]=p.pts[0],[x,v]=p.pts[1],_=Math.atan2(v-m,x-g),y=new Lt;if(y.position.set(g,0,m),y.rotation.y=-_,a){let T=t.round?.7:1,A=new lt(he(4.4*T,2.2,6.4*T,.8,.55),l);A.position.set(-2*T,1.1,0),A.castShadow=A.receiveShadow=!0,y.add(A);let C=new lt(new j(4.6*T,.16,6.6*T),c);C.position.set(-2*T,2.28,0),y.add(C);for(let D of[-1,1]){let N=new lt(new j(4.4*T,.32,.08),h);N.position.set(-2*T,2.52,D*3.2*T),y.add(N)}}else{let T=new lt(new ce(1,20,10,0,Math.PI*2,0,Math.PI/2),s);T.scale.set(3,2.6,3.4),T.position.set(-2.4,0,0),T.castShadow=!0,y.add(T)}let M=new lt(new j(1.2,2.4,4.2),n);M.position.set(.2,1.2,0),M.castShadow=!0,y.add(M);let b=new lt(new le(2.4,1.7),i);b.rotation.y=Math.PI/2,b.position.set(.81,.85,0),y.add(b);let w=new lt(new j(.08,.12,2.8),o);w.position.set(.84,1.85,0),y.add(w),Math.sin(_)<-.7&&y.scale.set(1,.55,1),this.group.add(y);let S={text:p.label,pos:sn(g+Math.cos(_)*.5,3.2,m+Math.sin(_)*.5),kind:"enemy"};p.br&&(p.br.label=S),this.labels.push(S)}let[u,f]=t.base;this.base=sn(u,0,f);let d=bp();if(d.root.scale.setScalar(t.baseArc?2:2.4),d.root.position.set(u,0,f),d.root.rotation.y=Math.PI/2,t.baseArc){let p=new Lt;dh.arc(p,{w:3,d:3,noFlag:!0}),p.scale.setScalar(3),p.position.set(u,0,f),this.group.add(p),as(p,()=>!1,!0)}this.group.add(d.root);for(let[p,g,m]of d.spin)this.anim.push(x=>{p.rotation[g]+=m*x});this.anim.push((p,g)=>{d.flag.rotation.y=Math.sin(g*2.2)*.25}),this.baseModel=d,t.baseArc&&this.labels.push({text:"\uAC1C\uC120\uBB38",pos:sn(u,9.6,f),kind:"landmark"}),this.labels.push({text:"\uC5F0\uD569 \uC9C0\uD718\uBD80",pos:sn(u,t.baseArc?6.2:3.4,f),kind:"base"})}buildCrosswalks(){let t=this.S,e=t.bounds,n=t.theme||{},i=n.laneCenter??4.25,s=4.25-this.roadClear+.55,o=new ht({map:ip(),transparent:!0,roughness:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new ls;for(let l=i-8.5*4;l<=e.z1;l+=8.5)if(!(l-s<e.z0||l+s>e.z1))for(let c of n.crosswalkX||[-21,-2,21]){if(t.blockers.some(f=>Math.abs(c-f.x)<f.w/2+.8&&Math.abs(l-f.z)<f.d/2+2))continue;let h=new le(.75,s*2);h.rotateX(-Math.PI/2),h.translate(c,.012,l);let u=h.attributes.uv;for(let f=0;f<u.count;f++)u.setY(f,u.getY(f)*s*2/2.2);a.push(o,h)}a.build(this.group,!1)}buildStreetFront(){let t=this.S.streetFront;if(!t)return;let e=(this.S.theme||{}).city;e==="newyork"&&(this.shopFacade=Bp,this.shopVariants=[0,1,2,3,4,5]),e==="paris"&&(this.shopFacade=v=>lh(v,!0),this.shopVariants=[0,1,2,3,5,7],this.shopTV=1.8);let n=this.S,i=n.bounds,s=Zt(n.seed+"street"),o=new ls,a=(this.shopVariants||[0,1,2,3,4,5]).map(v=>{let _=(this.shopFacade||Zd)(v);return new ht({map:_.map,emissiveMap:_.emissiveMap,emissive:16777215,emissiveIntensity:.45,roughness:.8})}),l=e==="paris"?a:this.M.glass,c=new ht({map:Yc(0),roughness:.95}),h=gt(4165577,{roughness:.6}),u=gt(13224908),f=gt(13618372,{roughness:.9}),d=[12597547,2781104,3050327,14256668,6119526].map(v=>gt(v,{roughness:.7})),p=(jn+.9)/2+.03,g=t.depth,m=(v,_,y)=>v-y<i.x0+.05||v+y>i.x1-.05||_-y<i.z0+.05||_+y>i.z1-.05||n.blockers.some(M=>Math.abs(v-M.x)<M.w/2+y+.2&&Math.abs(_-M.z)<M.d/2+y+.2)||this.base&&Math.hypot(v-this.base.x,_-this.base.z)<2.6||this.gateDirs.some(([M,b])=>Math.hypot(v-M,_-b)<2.4)?!1:this.roadDist(v,_)>p+g*.3,x=(v,_,y,M,b,w,S,T)=>{let A=w>.5,C=!A&&s()<.15,D=C?s.range(1.6,2.4):(A?s.int(1,2):s.int(2,4))*.3,N=Math.atan2(-M,y)+(T>0?Math.PI:0),L=C?l[Math.floor(s()*3)]:a[Math.floor(s()*a.length)];if(Ls(o,v,0,_,S-.06,D,g,N,L,c,C?1.6:1,C?1.6:this.shopTV||1.5),Ia(o,v,_,S-.06,g,D,N,C?this.M.rimDark:f,{t:.035,rh:C?.1:.06,awning:C?null:[.26,d[Math.floor(s()*d.length)]],house:!C&&s()<.35?[.22,.16,.2]:C?[.5,.2,.4]:null,hx:-S*.2,houseM:f}),this.streetBlocks.push({x:v,z:_,hx:Math.abs(y)*S/2+Math.abs(b)*g/2,hz:Math.abs(M)*S/2+Math.abs(w)*g/2}),s()<.5){let B=new ut(.09,.09,.14,8);B.translate(v+b*.05,D+.07,_+w*.05),o.push(h,B)}if(s()<.6){let B=new j(.16,.1,.12);B.translate(v-y*S*.25,D+.05,_-M*S*.25),o.push(u,B)}};for(let v of this.allRoads().filter(_=>!n.route.concat(n.branches||[]).find(y=>y.pts===_.pts)?.sharp)){let _=v.samples,y=p+g/2;for(let M of[-1,1]){let b=.6,w=s.int(1,3);for(;b<v.len-.6;){let S=s.range(.9,1.5),T=0;for(;T<_.length-2&&_[T+1].cum<b+S/2;)T++;let A=_[T].p,C=_[T+1].p,D=Math.hypot(C.x-A.x,C.z-A.z)||1,N=(C.x-A.x)/D,L=(C.z-A.z)/D,B=-L*M,G=N*M,q=A.x+B*y,rt=A.z+G*y;m(q,rt,Math.max(S,g)/2*.7)&&x(q,rt,N,L,B,G,S,M),b+=S+.08,--w<=0&&(b+=s.range(t.gap?.[0]??4,t.gap?.[1]??8),w=s.int(1,3))}}}for(let v of n.route.concat(n.branches||[]).filter(_=>_.sharp)){let _=v.pts;for(let y=0;y<_.length-1;y++){let[M,b]=_[y],[w,S]=_[y+1],T=Math.hypot(w-M,S-b),A=(w-M)/T,C=(S-b)/T;for(let D of[-1,1]){let N=-C*D,L=A*D,B=p+g/2,G=y===0?.3:B+.3+s.range(0,3),q=s.int(1,3),rt=T-(y===_.length-2?.3:B+.3);for(;G<rt-.5;){let X=Math.min(rt-G,s.range(.9,1.7)),Q=M+A*(G+X/2)+N*B,tt=b+C*(G+X/2)+L*B;m(Q,tt,Math.max(X,g)/2*.7)&&x(Q,tt,A,C,N,L,X,D),G+=X+.04,--q<=0&&(G+=s.range(t.gap?.[0]??4,t.gap?.[1]??8),q=s.int(1,3))}}}}o.build(this.group)}buildTrees(){let t=this.S,e=t.bounds,n=Zt(t.seed+"trees"),i=[];for(let x=0;x<2600&&i.length<(t.parkTrees||0);x++){let v=n.range(e.x0+.6,e.x1-.6),_=n.range(e.z0+.6,e.z1-.6);this.roadDist(v,_)<1.6||this.blockReason(v,_)&&this.blockReason(v,_)!=="\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00"||i.some(y=>(y[0]-v)**2+(y[1]-_)**2<.8)||i.push([v,_,n.range(.75,1.15),n()<.12])}this.parkTrees=i;let s=new ut(.05,.07,.5,5);s.translate(0,.25,0);let o=new is(.42,0);o.scale(1,1.15,1),o.translate(0,.82,0);let a=gt(7031343),l=gt(5147194,{flatShading:!0,roughness:.9}),c=gt(15906502,{flatShading:!0,roughness:.9}),h=gt(4158256,{flatShading:!0,roughness:.9}),u=(x,v)=>{let _=new yn(s,a,Math.max(1,x.length)),y=new yn(o,v,Math.max(1,x.length));return _.castShadow=y.castShadow=!0,y.receiveShadow=!0,_.count=y.count=x.length,this.group.add(_,y),{tr:_,cr:y,list:x}};this.treeSets=[u(i.filter(x=>!x[3]),l),u(i.filter(x=>x[3]),c)],this.hiddenTrees=new Set,this.refreshTrees();let f=this.cityTrees||[],d=new yn(s,a,f.length),p=new yn(o,h,f.length),g=new $t,m=new rn;f.forEach(([x,v,_,y=0],M)=>{g.compose(sn(x,y,v),m,sn(_,_,_)),d.setMatrixAt(M,g),p.setMatrixAt(M,g)}),p.castShadow=!0,this.group.add(d,p)}refreshTrees(){let t=new $t,e=new rn;for(let n of this.treeSets)n.list.forEach((i,s)=>{let o=this.hiddenTrees.has(i)?1e-4:i[2];e.setFromAxisAngle(sn(0,1,0),i[0]*7.3),t.compose(sn(i[0],0,i[1]),e,sn(o,o,o)),n.tr.setMatrixAt(s,t),n.cr.setMatrixAt(s,t)}),n.tr.instanceMatrix.needsUpdate=n.cr.instanceMatrix.needsUpdate=!0}clearTreesAt(t,e,n=.95){let i=0;for(let s of this.parkTrees)!this.hiddenTrees.has(s)&&(s[0]-t)**2+(s[1]-e)**2<n*n&&(this.hiddenTrees.add(s),i++);return i&&(this.refreshTrees(),this.shadowDirty=!0),i}resetTrees(){this.hiddenTrees.clear(),this.refreshTrees(),this.shadowDirty=!0}update(t,e){for(let n of this.anim)n(t,e);this.chevM.opacity=.42+Math.sin(e*4)*.14,this.ghostM.opacity=.65+Math.sin(e*3)*.3}};function w_(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=c=>[c%2*128,(1-Math.floor(c/2))*128],i=(c,h,u)=>{let f=Math.sin(c*12.9898*u+h*78.233*u)*43758.5453;return f-Math.floor(f)},s=(c,h,u)=>{let f=Math.floor(c),d=Math.floor(h),p=c-f,g=h-d,m=p*p*(3-2*p),x=g*g*(3-2*g),v=i(f,d,u),_=i(f+1,d,u),y=i(f,d+1,u),M=i(f+1,d+1,u);return v+(_-v)*m+(y-v)*x+(v-_-y+M)*m*x},o=(c,h,u)=>{let f=0,d=.5,p=1;for(let g=0;g<5;g++)f+=d*s(c*p,h*p,u+g),p*=2,d*=.5;return f},a=(c,h,u,f)=>{let[d,p]=n(c),g=e.createImageData(128,128);for(let m=0;m<128;m++)for(let x=0;x<128;x++){let v=(x+.5)/128*2-1,_=(m+.5)/128*2-1,y=Math.hypot(v,_),M=o(x/128*4,m/128*4,u),b=Math.max(0,1-y/(.55+M*.45)),w=Math.pow(b,h)*(.55+M*.6),[S,T,A]=f(M,y),C=(m*128+x)*4;g.data[C]=S,g.data[C+1]=T,g.data[C+2]=A,g.data[C+3]=Math.min(255,w*255)}e.putImageData(g,d,p)};{let[c,h]=n(0),u=c+128/2,f=h+128/2;e.save(),e.beginPath(),e.rect(c,h,128,128),e.clip();let d=[];for(let g=0;g<16;g++){let m=g*2.39996,x=Math.sqrt(g/16)*128*.24;d.push([u+Math.cos(m)*x,f+Math.sin(m)*x*.9,128*(.2-g*.004)+g%3*2])}for(let[g,m,x]of d){let v=e.createRadialGradient(g,m,0,g,m,x);v.addColorStop(0,"rgba(120,120,120,0.9)"),v.addColorStop(.7,"rgba(110,110,110,0.55)"),v.addColorStop(1,"rgba(100,100,100,0)"),e.fillStyle=v,e.beginPath(),e.arc(g,m,x,0,7),e.fill()}for(let[g,m,x]of d){let v=g-x*.3,_=m-x*.35,y=e.createRadialGradient(v,_,0,v,_,x*.8);y.addColorStop(0,"rgba(255,255,255,0.55)"),y.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=y,e.beginPath(),e.arc(g,m,x,0,7),e.fill()}e.globalCompositeOperation="destination-in";let p=e.createRadialGradient(u,f,128*.3,u,f,128*.5);p.addColorStop(0,"rgba(0,0,0,1)"),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.fillRect(c,h,128,128),e.restore()}a(1,.9,7,(c,h)=>{let u=255*Math.min(1,1.25-h*.6+c*.3);return[u,u*.92,u*.8]});{let[c,h]=n(2),u=e.createRadialGradient(c+128/2,h+128/2,0,c+128/2,h+128/2,128/2);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.25,"rgba(255,255,255,0.75)"),u.addColorStop(.6,"rgba(255,255,255,0.18)"),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.fillRect(c,h,128,128)}{let[c,h]=n(3),u=c+128/2,f=h+128/2;e.save(),e.beginPath(),e.rect(c,h,128,128),e.clip();let d=e.createRadialGradient(u,f,0,u,f,128*.3);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=d,e.fillRect(c,h,128,128),e.translate(u,f);for(let p=0;p<6;p++){e.rotate(Math.PI/3+p%2*.2);let g=128*(p%2?.32:.48),m=e.createLinearGradient(0,0,g,0);m.addColorStop(0,"rgba(255,255,255,0.95)"),m.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=m,e.beginPath(),e.moveTo(0,-128*.035),e.lineTo(g,0),e.lineTo(0,128*.035),e.fill()}e.restore()}let l=new qe(t);return l.colorSpace=vi,l}function R_(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");for(let i=0;i<26;i++){let s=Math.random()*Math.PI*2,o=Math.random()*128*.22,a=128/2+Math.cos(s)*o,l=128/2+Math.sin(s)*o,c=128*(.12+Math.random()*.2),h=e.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(18,15,12,0.32)"),h.addColorStop(1,"rgba(18,15,12,0)"),e.fillStyle=h,e.fillRect(0,0,128,128)}e.strokeStyle="rgba(20,16,12,0.25)";for(let i=0;i<18;i++){let s=Math.random()*Math.PI*2,o=128*.18,a=128*(.32+Math.random()*.16);e.lineWidth=1+Math.random()*3,e.beginPath(),e.moveTo(128/2+Math.cos(s)*o,128/2+Math.sin(s)*o),e.lineTo(128/2+Math.cos(s)*a,128/2+Math.sin(s)*a),e.stroke()}let n=new qe(t);return n.colorSpace=we,n}var A_=`
attribute vec3 iPos; attribute vec4 iCol; attribute vec4 iMisc; attribute vec3 iVel;
varying vec2 vUv; varying vec4 vCol;
void main() {
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  vec2 c = position.xy; float size = iMisc.x;
  if (iMisc.w > 0.0) {                      // \uC18D\uB3C4 \uBC29\uD5A5\uC73C\uB85C \uB298\uB9B0 \uD310 (\uBD88\uAF43 \uC904\uAE30\xB7\uC608\uAD11\uD0C4)
    vec2 d = (modelViewMatrix * vec4(iVel, 0.0)).xy; float L = length(d);
    vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0), nrm = vec2(-dir.y, dir.x);
    mv.xy += dir * c.x * (size + L * iMisc.w) + nrm * c.y * size;
  } else {
    float cs = cos(iMisc.y), sn = sin(iMisc.y);
    mv.xy += vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs) * size;
  }
  gl_Position = projectionMatrix * mv;
  float t = iMisc.z;
  vUv = (uv + vec2(mod(t, 2.0), floor(t / 2.0))) * 0.5;
  vCol = iCol;
}`,C_=`
uniform sampler2D map; varying vec2 vUv; varying vec4 vCol;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vCol.rgb * t.rgb, vCol.a * t.a);
  #include <colorspace_fragment>
}`,ph=class{constructor(t,e,n){this.max=t,this.n=0;let i=new le(1,1),s=new Jo;s.index=i.index,s.setAttribute("position",i.attributes.position),s.setAttribute("uv",i.attributes.uv);let o=(a,l)=>{let c=new vs(new Float32Array(t*l),l);return c.setUsage(C0),s.setAttribute(a,c),c};this.aPos=o("iPos",3),this.aCol=o("iCol",4),this.aMisc=o("iMisc",4),this.aVel=o("iVel",3),s.instanceCount=0,this.mat=new Re({uniforms:{map:{value:e}},vertexShader:A_,fragmentShader:C_,transparent:!0,depthWrite:!1,blending:n?$s:ws}),this.mesh=new lt(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?3:2,this.geo=s,this.P=[]}add(t){return this.P.length>=this.max?!1:(this.P.push(t),!0)}update(t){let e=this.P,n=0,i=this.aPos.array,s=this.aCol.array,o=this.aMisc.array,a=this.aVel.array;for(let l=0;l<e.length;l++){let c=e[l];if(c.age+=t,c.age>=c.life)continue;let h=c.age/c.life,u=Math.exp(-c.drag*t);c.vx*=u,c.vy=c.vy*u-c.grav*t,c.vz*=u,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.y<c.floor&&(c.y=c.floor,c.vy=-c.vy*.3,c.vx*=.6,c.vz*=.6),c.rot+=c.rv*t;let f=1-(1-h)*(1-h),d=c.s0+(c.s1-c.s0)*f,p,g,m;if(c.c2&&h>.5){let v=(h-.5)*2;p=c.c1[0]+(c.c2[0]-c.c1[0])*v,g=c.c1[1]+(c.c2[1]-c.c1[1])*v,m=c.c1[2]+(c.c2[2]-c.c1[2])*v}else{let v=c.c2?h*2:h;p=c.c0[0]+(c.c1[0]-c.c0[0])*v,g=c.c0[1]+(c.c1[1]-c.c0[1])*v,m=c.c0[2]+(c.c1[2]-c.c0[2])*v}let x=c.a*Math.min(1,h/c.fin)*Math.pow(1-h,c.fout);i[n*3]=c.x,i[n*3+1]=c.y,i[n*3+2]=c.z,s[n*4]=p,s[n*4+1]=g,s[n*4+2]=m,s[n*4+3]=x,o[n*4]=d,o[n*4+1]=c.rot,o[n*4+2]=c.tile,o[n*4+3]=c.stretch,a[n*3]=c.vx,a[n*3+1]=c.vy,a[n*3+2]=c.vz,e[n++]=c}if(e.length=n,this.geo.instanceCount=n,n)for(let l of[this.aPos,this.aCol,this.aMisc,this.aVel])l.clearUpdateRanges(),l.addUpdateRange(0,n*l.itemSize),l.needsUpdate=!0}clear(){this.P.length=0,this.geo.instanceCount=0}},Te=(r,t=1)=>{let e=new Xt(r);return[e.r*t,e.g*t,e.b*t]},Pt=(r,t)=>r+Math.random()*(t-r),ao=class{constructor(t,e=1){this.q=e;let n=w_();this.glow=new ph(2600,n,!0),this.smoke=new ph(2600,n,!1),this.group=new Lt,this.group.add(this.smoke.mesh,this.glow.mesh),this.decalMax=80,this.decal=new yn(new le(1,1).rotateX(-Math.PI/2),new Ie({map:R_(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalMax),this.decal.count=0,this.decal.renderOrder=1,this.decal.frustumCulled=!1,this.decals=[],this.group.add(this.decal),t.add(this.group),this._m=new $t,this._q=new rn,this._s=new I,this._p=new I}setQuality(t){this.q=t}clear(){this.glow.clear(),this.smoke.clear(),this.decals.length=0,this.decal.count=0}get load(){return(this.glow.P.length+this.smoke.P.length)/5200}emit(t,e){return t.add({x:e.x,y:e.y,z:e.z,vx:e.v?e.v[0]:0,vy:e.v?e.v[1]:0,vz:e.v?e.v[2]:0,age:0,life:e.life||1,s0:e.s0??.2,s1:e.s1??e.s0??.2,c0:e.c0||[1,1,1],c1:e.c1||e.c0||[1,1,1],c2:e.c2||null,a:e.a??1,tile:e.tile??0,rot:e.rot??Math.random()*6.28,rv:e.rv??Pt(-1,1),drag:e.drag??1,grav:e.grav??0,stretch:e.stretch??0,floor:e.floor??-10,fin:e.fin??.05,fout:e.fout??1})}n(t){return Math.max(1,Math.round(t*this.q))}update(t){this.glow.update(t),this.smoke.update(t);let e=0;for(let n of this.decals){if(n.t+=t,n.t>=n.life)continue;let i=n.t/n.life,s=n.s*(i>.75?1-(i-.75)*4:Math.min(1,n.t*8));this._q.setFromAxisAngle(new I(0,1,0),n.r),this._s.set(s,1,s),this._p.set(n.x,.035+e*2e-4,n.z),this._m.compose(this._p,this._q,this._s),this.decal.setMatrixAt(e,this._m),this.decals[e++]=n}this.decals.length=e,this.decal.count=e,e&&(this.decal.instanceMatrix.needsUpdate=!0)}scorch(t,e,n){this.decals.length>=this.decalMax&&this.decals.shift(),this.decals.push({x:t,z:e,s:n,r:Math.random()*6.28,t:0,life:14})}explosion(t,e,n={}){let{x:i,y:s,z:o}=t,a=e>=1.2;this.emit(this.glow,{x:i,y:s+.15,z:o,life:.1,s0:e*1.4,s1:e*2.2,c0:Te(16774096,1.6),a:.8,tile:3,fout:1.5}),this.emit(this.glow,{x:i,y:s+.1,z:o,life:.22,s0:e*2,s1:e*3,c0:Te(16751168,1),a:.4,tile:2});for(let l=0;l<this.n(4+e*6);l++){let c=Math.random()*6.28,h=Pt(.6,2.2)*e,u=Pt(.4,1.4)*e;this.emit(this.glow,{x:i+Pt(-.15,.15)*e,y:s+Pt(0,.25)*e,z:o+Pt(-.15,.15)*e,v:[Math.cos(c)*h,u,Math.sin(c)*h],life:Pt(.35,.65)*(a?1.4:1),s0:e*Pt(.35,.6),s1:e*Pt(.8,1.2),c0:Te(16765562,1.3),c1:Te(16738832,1),c2:Te(5248004,.5),a:.55,tile:1,drag:3.2,fout:1.2})}for(let l=0;l<this.n(3+e*5);l++){let c=Math.random()*6.28,h=Pt(.3,1.2)*e;this.emit(this.smoke,{x:i+Pt(-.2,.2)*e,y:s+Pt(.1,.4)*e,z:o+Pt(-.2,.2)*e,v:[Math.cos(c)*h,Pt(.8,1.6)*(a?1.6:1),Math.sin(c)*h],life:Pt(1.6,2.8)*(a?1.5:1),s0:e*.6,s1:e*Pt(1.4,2),c0:Te(2761760),c1:Te(5920079),c2:Te(10525589),a:.9,tile:0,drag:1.8,fin:.06,fout:1.6,rv:Pt(-.4,.4)})}for(let l=0;l<this.n(5+e*10);l++){let c=Math.random()*6.28,h=Pt(.2,1.2),u=Pt(3,8)*Math.sqrt(e);this.emit(this.glow,{x:i,y:s+.1,z:o,v:[Math.cos(c)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(c)*Math.cos(h)*u],life:Pt(.3,.7),s0:.03,s1:.015,c0:Te(16769696,2),c1:Te(16742944,1.4),tile:2,drag:1.2,grav:9,stretch:.05,floor:.02})}if(!n.air||a)for(let l=0;l<this.n(3+e*5);l++){let c=Math.random()*6.28,h=Pt(1.5,4)*Math.sqrt(e);this.emit(this.smoke,{x:i,y:s+.15,z:o,v:[Math.cos(c)*h,Pt(2,5)*Math.sqrt(e),Math.sin(c)*h],life:Pt(.8,1.4),s0:Pt(.04,.08)*(a?1.6:1),c0:Te(1973016),tile:2,grav:12,drag:.4,floor:.03,fout:.3,rv:Pt(-8,8),a:1})}if(!n.air&&s<.8){for(let l=0;l<this.n(6+e*4);l++){let c=l/(6+e*4)*6.28+Pt(-.2,.2),h=Pt(2,3.5)*e;this.emit(this.smoke,{x:i,y:.12,z:o,v:[Math.cos(c)*h,Pt(.05,.3),Math.sin(c)*h],life:Pt(.9,1.5),s0:e*.25,s1:e*.8,c0:Te(9076592),c1:Te(11577496),a:.5,tile:0,drag:3.5,fin:.1})}this.scorch(i,o,e*1.9)}if(a){for(let l=0;l<this.n(10);l++)this.emit(this.smoke,{x:i+Pt(-.3,.3)*e,y:s+.3,z:o+Pt(-.3,.3)*e,v:[Pt(-.3,.3),Pt(1.6,3.2),Pt(-.3,.3)],life:Pt(2.5,4),s0:e*.5,s1:e*Pt(1.6,2.4),c0:Te(2893346),c1:Te(4867135),c2:Te(8156784),a:.8,tile:0,drag:1.1,fin:.1,rv:Pt(-.3,.3)});for(let l=0;l<this.n(6);l++)this.emit(this.glow,{x:i+Pt(-.4,.4)*e,y:s+.2,z:o+Pt(-.4,.4)*e,v:[0,Pt(1,2.2),0],life:Pt(.8,1.3),s0:e*.6,s1:e*.9,c0:Te(16760944,1.5),c1:Te(16734736,1),c2:Te(4198408,.4),tile:1,drag:1.4})}}muzzle(t,e,n=!1){let i=n?.55:.22;if(this.emit(this.glow,{x:t.x,y:t.y,z:t.z,life:n?.09:.05,s0:i,s1:i*1.3,c0:Te(16773824,2.2),tile:3}),e&&this.emit(this.glow,{x:t.x,y:t.y,z:t.z,v:[e.x*6,e.y*6,e.z*6],life:n?.08:.05,s0:i*.35,c0:Te(16760928,2),tile:2,stretch:.03,drag:8}),n)for(let s=0;s<this.n(5);s++)this.emit(this.smoke,{x:t.x,y:t.y,z:t.z,v:e?[e.x*Pt(.8,2)+Pt(-.3,.3),e.y*Pt(.8,2)+Pt(.1,.4),e.z*Pt(.8,2)+Pt(-.3,.3)]:[0,.4,0],life:Pt(.9,1.6),s0:.12,s1:Pt(.45,.7),c0:Te(10130572),c1:Te(12894394),a:.55,tile:0,drag:2.2,fin:.08});else Math.random()<.3&&this.emit(this.smoke,{x:t.x,y:t.y,z:t.z,v:[0,.3,0],life:.6,s0:.05,s1:.18,c0:Te(12104878),a:.35,tile:0})}trail(t,e,n=!1,i=1/60){let s=n?1.8:1;this.emit(this.glow,{x:t.x,y:t.y,z:t.z,life:.06,s0:.14*s,c0:Te(16767120,2),tile:2});let o=Math.max(1,Math.min(n?10:5,Math.ceil(t.distanceTo(e)/.12)));for(let a=0;a<o;a++){if(Math.random()>.9*this.q+.1)continue;let l=a/o,c=e.x+(t.x-e.x)*l,h=e.y+(t.y-e.y)*l,u=e.z+(t.z-e.z)*l;this.emit(this.smoke,{x:c,y:h,z:u,v:[Pt(-.08,.08),Pt(.05,.2),Pt(-.08,.08)],life:Pt(1.2,2)*(n?1.6:1),s0:.12*s,s1:Pt(.4,.6)*s,c0:Te(15000286),c1:Te(13158082),a:.5,tile:0,drag:1.5,fin:.04,rv:Pt(-.5,.5)})}}tracer(t,e,n=16767120){let i=e.clone().sub(t),s=i.length(),o=60,a=Math.max(.03,s/o);i.multiplyScalar(o/Math.max(s,.001)),this.emit(this.glow,{x:t.x,y:t.y,z:t.z,v:[i.x,i.y,i.z],life:a,s0:.035,c0:Te(n,2.2),tile:2,stretch:.012,drag:0,fin:.01,fout:.2})}impact(t,e){for(let n=0;n<this.n(3);n++){let i=Math.random()*6.28;this.emit(this.glow,{x:t.x,y:t.y,z:t.z,v:[Math.cos(i)*Pt(1,3),Pt(.5,2.5),Math.sin(i)*Pt(1,3)],life:Pt(.12,.25),s0:.025,c0:Te(16769184,2),tile:2,stretch:.04,grav:8,drag:1})}!e&&Math.random()<.5&&this.emit(this.smoke,{x:t.x,y:.1,z:t.z,v:[0,.25,0],life:.7,s0:.06,s1:.22,c0:Te(10261124),a:.4,tile:0})}burn(t,e,n,i=1){Math.random()<n*14*i*this.q&&this.emit(this.glow,{x:t.x+Pt(-.15,.15)*e,y:t.y+.05,z:t.z+Pt(-.15,.15)*e,v:[Pt(-.1,.1),Pt(.5,1.1),Pt(-.1,.1)],life:Pt(.35,.6),s0:.16*e,s1:.05*e,c0:Te(16765040,1.7),c1:Te(16736272,1.2),tile:1,drag:1}),Math.random()<n*6*i*this.q&&this.emit(this.smoke,{x:t.x+Pt(-.1,.1)*e,y:t.y+.25,z:t.z+Pt(-.1,.1)*e,v:[Pt(-.05,.15),Pt(.6,1),Pt(-.1,.05)],life:Pt(2,3.2),s0:.15*e,s1:Pt(.7,1.1)*e,c0:Te(2762018),c1:Te(5591115),c2:Te(8157299),a:.6,tile:0,drag:.6,fin:.1,rv:Pt(-.3,.3)})}fallTrail(t,e){this.burn(t,.9,e,2)}pulse(t,e,n){this.emit(this.glow,{x:t.x,y:t.y,z:t.z,life:.5,s0:e*.5,s1:e*2.4,c0:Te(n,1.6),tile:2,fout:1.5})}};var De=(r=0,t=0,e=0)=>new I(r,t,e),Kp=1.6,jp=1.4,Ns={ball:new ce(1,10,7),puff:new ce(1,7,5),ring:new Fi(.92,1,48),shell:new ce(.06,6,4),rocket:new ze(.045,.24,6),wreck:new j(1,.12,.6)},mh=class{constructor(t){this.app=t,this.scene=t.scene,this.city=t.city,this.S=t.stage,this.fxGroup=new Lt,this.scene.add(this.fxGroup),this.unitGroup=new Lt,this.scene.add(this.unitGroup),this.flash=new qs(16752704,0,8,1.6),this.scene.add(this.flash),this.vfx=new ao(this.scene),this.rangeDisc=new Lt;let e=new lt(new Wn(1,64),new Ie({color:8382975,transparent:!0,opacity:.13,depthWrite:!1})),n=new lt(new Fi(.98,1,96),new Ie({color:11203839,transparent:!0,opacity:.85,depthWrite:!1}));e.rotation.x=n.rotation.x=-Math.PI/2,this.rangeDisc.add(e,n),this.rangeDisc.visible=!1,this.rangeDisc.position.y=.07,this.rangeMats=[e.material,n.material],this.scene.add(this.rangeDisc),this.ghosts={},this.state="title",this.speed=1,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[]}ui(){return this.app.ui}snd(t,e){this.app.sound&&this.app.sound.play(t,e)}start(){let t=this.S,e=GF.SETTINGS;for(let n of this.towers)this.unitGroup.remove(n.model.root);for(let n of this.enemies)this.removeEnemy(n);this.fxGroup.clear(),this.vfx.clear(),this.city.resetRoutes(),this.city.resetTrees(),this.money=t.startMoney,this.lives=t.lives,this.cp=e.cpStart,this.cpT=0,this.speed=1,this.waveNo=0,this.kills=0,this.queue=[],this.clock=0,this.nextT=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[],this.mode=null,this.cardSel=-1,this.selected=null,this.deck=GF.CARD_DECK.slice().sort(()=>Math.random()-.5),this.hand=this.deck.splice(0,GF.HAND_SIZE),this.strat={};for(let[n,i]of Object.entries(GF.STRATEGIC))this.strat[n]={charges:this.stratOpen(n)?i.start:0};this.stratSel=null,this.computeSynergy(),this.updateRemain(),this.state="ready",this.ui().toast('\uB3C4\uB85C \uBC16 \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uACE0 "\uC791\uC804 \uAC1C\uC2DC"\uB97C \uB204\uB974\uC138\uC694',"#8FF3FF",4200)}computeSynergy(){let t=GF.LOADOUT.map(s=>GF.WEAPONS[s]),e=t.filter(s=>s.nation.indexOf("\uBBF8\uAD6D")>=0).length,n=t.filter(s=>s.hits.includes("ground")).length,i=t.filter(s=>s.hits.includes("air")).length;this.syn={usSet:e>=3,slowSplash:t.some(s=>s.slow)&&t.some(s=>s.splash),balance:n>=2&&i>=2},this.synList=[],this.syn.usSet&&this.synList.push("\uBBF8\uAD6D \uC138\uD2B8 \xB7 \uBBF8\uAD6D \uBB34\uAE30 \uACF5\uC18D +5%"),this.syn.slowSplash&&this.synList.push("\uAC10\uC18D + \uBC94\uC704 \xB7 \uAC10\uC18D\uB41C \uC801 \uBC94\uC704 \uD53C\uD574 +20%"),this.syn.balance&&this.synList.push("\uC9C0\uC0C1\xB7\uACF5\uC911 \uADE0\uD615 \xB7 \uCC98\uCE58 \uBCF4\uC0C1 +5%")}updateRemain(){let t=this.city.activeOpts();this.remainAfter=t.map((n,i)=>t.slice(i+1).reduce((s,o)=>s+o.len,0));let e=n=>{let i=n.joinRef;return i.branch?i.branch.len-n.joinCum+e(i.branch):t[i.step].len-n.joinCum+this.remainAfter[i.step]};for(let n of this.city.branches)n.after=e(n)}openLanes(t){return[null].concat(this.city.branches.filter(e=>e.fromWave<=t))}callNext(){if(this.isOver()||this.waveNo>=this.S.waves.length)return;if(this.state==="ready"){this.state="battle",this.launchWave(0);return}if(this.queue.length){this.ui().toast("\uC544\uC9C1 \uC774\uBC88 \uC6E8\uC774\uBE0C \uC801\uC774 \uB098\uC624\uB294 \uC911\uC785\uB2C8\uB2E4");return}let t=Math.ceil(this.nextT)*3;this.launchWave(t)}launchWave(t){this.waveNo++;let e=this.S.waves[this.waveNo-1].trim().split(/\s+/),n=this.clock+.2,i=this.openLanes(this.waveNo);for(let l=0;l<e.length;l+=2){let c=e[l],h=parseInt(e[l+1],10);for(let u=0;u<h;u++)this.queue.push({t:n,type:c,wave:this.waveNo,lane:GF.ENEMIES[c].boss?null:i[(u+l/2)%i.length]}),n+=GF.ENEMIES[c].gap;n+=1.2}for(let l of this.city.branches)l.fromWave===this.waveNo&&l.fromWave>1&&this.timers.push({t:1.6,fn:()=>{this.ui().toast(`\uC0C8 \uC9C4\uC785\uB85C \uAC1C\uBC29! ${l.name} \uBC29\uBA74\uC5D0\uC11C\uB3C4 \uC801\uC774 \uC635\uB2C8\uB2E4`,"#FF8A8E",3600),this.snd("siren")}});this.queue.sort((l,c)=>l.t-c.t);let s=this.waveNo>1?40+this.waveNo*8:0;this.money+=s+t;let o=e.reduce((l,c,h)=>h%2?l+parseInt(c,10):l,0),a=`\uC6E8\uC774\uBE0C ${this.waveNo} \xB7 \uC801 ${o}`;s&&(a+=` \xB7 \uBCF4\uAE09 +${s}`),t&&(a+=` \xB7 \uC870\uAE30 \uD22C\uC785 +${t}`),this.ui().toast(a,this.S.waves[this.waveNo-1].includes("boss")?"#FF8A8E":"#ffffff"),this.snd("wave");for(let[l,c]of Object.entries(GF.STRATEGIC)){let h=this.strat[l];this.stratOpen(l)&&this.waveNo%c.every===0&&h.charges<c.max&&(h.charges++,this.timers.push({t:1.2,fn:()=>{this.ui().toast(`${c.name} \uC7AC\uBCF4\uAE09 \uC644\uB8CC! (${c.key} \uD0A4)`,"#FF8A8E",3e3),this.snd("siren")}}))}this.nextT=0}finish(t){if(this.isOver())return;this.state=t?"won":"lost",this.cancelMode();let e=0;if(t){let n=this.lives/this.S.lives;e=n>=.9?3:n>=.5?2:1;try{let i=JSON.parse(localStorage.getItem("gf_progress")||"{}");i[this.S.id]=Math.max(i[this.S.id]||0,e),localStorage.setItem("gf_progress",JSON.stringify(i))}catch{}}this.ui().showResult(t,e),this.snd(t?"win":"lose")}isOver(){return this.state==="won"||this.state==="lost"||this.state==="title"}setMode(t){if(this.isOver())return;if(this.mode===t){this.cancelMode();return}if(this.cancelMode(),t==="detour"){if(!this.city.steps.some(n=>n.choice&&!n.open)){this.ui().toast("\uAC1C\uD1B5\uD560 \uC6B0\uD68C\uB85C\uAC00 \uB354 \uC5C6\uC2B5\uB2C8\uB2E4");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;return}if(this.money<GF.WEAPONS[t].cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;let e=this.ghosts[t]||(this.ghosts[t]=wp(t));e.root.scale.setScalar(Kp),e.root.visible=!1,this.scene.add(e.root),this.ghost=e}pickCard(t){if(this.isOver()||!this.hand[t])return;let e=GF.CARDS[this.hand[t]];if(this.cp<e.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}if(!e.target){this.useCard(t,De());return}this.cancelMode(),this.mode="card",this.cardSel=t}stratOpen(t){return this.S.no>=GF.STRATEGIC[t].unlockStage}stratNext(t){let e=GF.STRATEGIC[t];return(Math.floor(this.waveNo/e.every)+1)*e.every}pickStrat(t){if(this.isOver())return;let e=GF.STRATEGIC[t];if(!this.stratOpen(t)){this.ui().toast(`${e.name}: \uC2A4\uD14C\uC774\uC9C0 ${e.unlockStage}\uBD80\uD130 \uC0AC\uC6A9 \uAC00\uB2A5`),this.snd("deny");return}if(this.state!=="battle"){this.ui().toast("\uC804\uD22C\uAC00 \uC2DC\uC791\uB41C \uB4A4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4");return}if(!this.strat[t].charges){this.ui().toast(`${e.name}: \uC6E8\uC774\uBE0C ${this.stratNext(t)}\uC5D0 \uC7AC\uBCF4\uAE09`),this.snd("deny");return}if(this.mode==="strat"&&this.stratSel===t){this.cancelMode();return}this.cancelMode(),this.mode="strat",this.stratSel=t}useStrat(t,e){let n=GF.STRATEGIC[t],i=De(e.x,0,e.z),s=t==="nuke";this.strat[t].charges--,this.mode=null,this.stratSel=null,this.rangeDisc.visible=!1,this.ui().toast(s?"\uC804\uB7B5\uD575\uBBF8\uC0AC\uC77C \uBC1C\uC0AC!":"ICBM \uBC1C\uC0AC!","#FF8A8E",2500),this.snd("siren"),this.spawnRing(i,n.radius,16726832,2.2);let o=new Lt,a=new lt(new ut(.22,.22,2.2,12),gt(15263970));o.add(a);let l=new lt(new ze(.22,.7,12),gt(s?14200874:10103332));l.position.y=-1.45,l.rotation.x=Math.PI,o.add(l),o.scale.setScalar(s?1.6:1.1);let c=i.clone().add(De(-6,40,-10)),h=s?2.2:1.6;o.position.copy(c),o.lookAt(i),o.rotateX(Math.PI/2),this.pushFx(o,h,(u,f)=>{var d;u.position.copy(c).lerp(i,f*f),this.vfx.trail(u.position,u.userData.prev||u.position,!0),((d=u.userData).prev||(d.prev=De())).copy(u.position)}),this.timers.push({t:h,fn:()=>this.detonate(i,n,s)})}detonate(t,e,n){this.explode(t,e.radius,e.power,null,!1,!1),this.explode(t,e.radius,e.power,null,!1,!0),this.snd(n?"nuke":"bigboom",1.6),this.app.shake(n?1.4:.7),n&&this.ui().whiteFlash();let i=new lt(Ns.ball,new Ie({color:16773552,transparent:!0}));i.position.copy(t);let s=e.radius;this.pushFx(i,n?2.5:1.2,(o,a)=>{o.scale.setScalar(s*(.2+.7*Math.sqrt(a))),o.material.opacity=1-a,o.material.color.setHSL(.12-a*.1,1,.75-a*.4)});for(let o=0;o<(n?3:1);o++)this.timers.push({t:o*.25,fn:()=>this.spawnRing(t,s*1.1,16769184,1.2)});for(let o=0;o<(n?40:16);o++){let a=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*s*.9;this.spawnPuff(t.clone().add(De(Math.cos(a)*l,.2,Math.sin(a)*l)),4866104,1,.5+Math.random()*.8,3)}if(n){let o=new Lt;o.position.copy(t);let a=new ht({color:14191178,emissive:6957568,transparent:!0,roughness:1}),l=new lt(new ut(.6,1.4,1,16),a);o.add(l);let c=new lt(new ce(1,20,12),a);c.scale.set(1,.55,1),o.add(c);let h=new lt(new _n(1,.35,10,24),a);h.rotation.x=Math.PI/2,o.add(h),this.pushFx(o,7,(u,f)=>{let d=2+12*Math.min(1,f*2.2),p=2+5*Math.min(1,f*1.8);l.scale.set(1+f,d,1+f),l.position.y=d/2,c.position.y=d,c.scale.set(p,p*.55,p),h.position.y=d*.62,h.scale.setScalar(p*.7),a.opacity=f<.7?.95:.95*(1-(f-.7)/.3),a.color.setHSL(.07,.6-f*.5,.55-f*.15),a.emissiveIntensity=1-f})}}cancelMode(){this.mode=null,this.cardSel=-1,this.stratSel=null,this.select(null),this.rangeDisc.visible=!1,this.ghost&&(this.scene.remove(this.ghost.root),this.ghost=null),this.tip=null}placeReason(t,e){let n=this.city.blockReason(t,e);if(n)return n;for(let i of this.towers)if((i.pos.x-t)**2+(i.pos.z-e)**2<jp*jp)return"\uB2E4\uB978 \uBB34\uAE30\uC640 \uB108\uBB34 \uAC00\uAE4C\uC6C0";return null}hoverAt(t){if(this.hoverP=t,this.tip=null,this.mode==="card"){this.showRange(De(t.x,0,t.z),GF.CARDS[this.hand[this.cardSel]].radius,9421823);return}if(this.mode==="strat"){this.showRange(De(t.x,0,t.z),GF.STRATEGIC[this.stratSel].radius,16734794);return}if(this.mode==="detour"){let i=this.city.detourNear(t);this.tip=i!=null?{ok:!0,text:`\uC6B0\uD68C\uB85C \uAC1C\uD1B5 (${this.S.detourCost}) \xB7 \uC801\uC774 \uB354 \uC624\uB798 \uBA38\uBB45\uB2C8\uB2E4`}:{ok:!1,text:"\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694"};return}if(!this.mode){this.selected||(this.rangeDisc.visible=!1);return}let e=this.placeReason(t.x,t.z),n=!e;this.ghost.root.visible=!0,this.ghost.root.position.set(t.x,0,t.z),this.ghost.setOk(n),this.showRange(De(t.x,0,t.z),GF.WEAPONS[this.mode].range,n?8382975:16743034),this.tip=n?{ok:!0,text:"\uC790\uC720 \uBC30\uCE58 \uAC00\uB2A5"}:{ok:!1,text:e}}showRange(t,e,n){this.rangeDisc.position.set(t.x,.07,t.z),this.rangeDisc.scale.setScalar(e),this.rangeMats.forEach(i=>i.color.set(n)),this.rangeDisc.visible=!0}click(t){if(this.isOver())return;if(this.mode==="card"){this.useCard(this.cardSel,t);return}if(this.mode==="strat"){this.useStrat(this.stratSel,t);return}if(this.mode==="detour"){this.clickDetour(t);return}if(this.mode){this.clickPlace(t);return}let e=null,n=1.2;for(let i of this.towers){let s=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);s<n&&(n=s,e=i)}this.select(e)}clickDetour(t){let e=this.city.detourNear(t);if(e==null){this.ui().toast("\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}let n=this.city.steps[e].opts[1];for(let i of this.towers)for(let s of n.samples)if(Math.hypot(s.p.x-i.pos.x,s.p.z-i.pos.z)<1.3){this.ui().toast("\uC6B0\uD68C\uB85C \uC790\uB9AC\uC5D0 \uBB34\uAE30\uAC00 \uC788\uC5B4 \uAC1C\uD1B5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");return}this.money-=this.S.detourCost,this.city.openDetour(e),this.updateRemain();for(let i of n.samples)Math.random()<.12&&this.spawnPuff(i.p.clone().setY(.1),13157560,1,.3);this.ui().toast(`\uC6B0\uD68C\uB85C \uAC1C\uD1B5! \uC801 \uC774\uB3D9 \uAC70\uB9AC +${Math.round(n.len-this.city.steps[e].opts[0].len)}`,"#8FF3FF"),this.cancelMode()}clickPlace(t){let e=GF.WEAPONS[this.mode],n=this.placeReason(t.x,t.z);if(n){this.ui().toast(n);return}if(this.money<e.cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}this.money-=e.cost,this.addTower(this.mode,t.x,t.z),this.money<e.cost&&this.cancelMode()}select(t){this.selected=t,t?this.showRange(t.pos,this.stats(t).range,15909198):this.mode||(this.rangeDisc.visible=!1)}addTower(t,e,n){let i=Xi(t),s=De(e,0,n);i.root.position.copy(s),i.root.scale.setScalar(Kp);let o=-Math.PI/2;i.yaw.rotation.y=-o,this.unitGroup.add(i.root);let a={type:t,W:GF.WEAPONS[t],pos:s,model:i,level:1,invested:GF.WEAPONS[t].cost,cd:.3,dmgTotal:0,kills:0,ang:o,pulse:0,marks:[]};return this.towers.push(a),this.city.clearTreesAt(e,n),this.spawnPuff(s,13481610,6),this.snd("place"),a}stats(t){return this.statsAt(t,t.level)}statsAt(t,e){let n=GF.SETTINGS.upgrade,i=Math.min(e,n.dmg.length)-1,s=t.W.rate;this.syn.usSet&&t.W.nation.indexOf("\uBBF8\uAD6D")>=0&&(s*=1.05);let o=t.W.dmg*n.dmg[i],a=s*n.rate[i];return{dmg:o,range:t.W.range*n.range[i],rate:a,dps:(o||0)*a*(t.W.salvo||1),mul:n.dmg[i]}}upgradeCost(t){return Math.round(t.W.cost*.75*t.level)}upgradeTower(t,e){if(!t||t.level>=GF.SETTINGS.maxTowerLevel)return!1;let n=this.upgradeCost(t);if(this.money<n)return e||(this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.snd("deny")),!1;this.money-=n,t.invested+=n,t.level++;let i=new lt(new j(.16,.03,.05),gt(15909198,{emissive:8018432}));return i.position.set(.3,.09,.3-t.marks.length*.08),t.model.root.add(i),t.marks.push(i),t.model.yaw.scale.setScalar(1+.07*(t.level-1)),this.selected===t&&this.select(t),this.spawnRing(t.pos,.8,15909198),this.snd("upgrade"),!0}bulkList(t){return this.towers.filter(e=>e.type===t&&e.level<GF.SETTINGS.maxTowerLevel)}bulkCost(t){return this.bulkList(t).reduce((e,n)=>e+this.upgradeCost(n),0)}upgradeAll(t){let e=this.bulkList(t),n=this.bulkCost(t);if(e.length){if(this.money<n){this.ui().toast("\uC77C\uAD04 \uAC15\uD654\uC5D0 \uBCF4\uAE09 "+n+" \uD544\uC694");return}e.forEach(i=>this.upgradeTower(i,!0)),this.ui().toast(GF.wname(t)+" "+e.length+"\uB300 \uAC15\uD654 \uC644\uB8CC","#F2C14E")}}sellTower(t){this.money+=Math.round(t.invested*GF.SETTINGS.sellRefund),this.unitGroup.remove(t.model.root),this.towers.splice(this.towers.indexOf(t),1),this.select(null),this.snd("sell")}spawnEnemy(t,e,n=null){let i=GF.ENEMIES[t],s=i.hp*(1+this.S.hpScale*(e-1)+(this.S.hpQuad||0)*(e-1)**2)*(i.boss?this.S.bossHp??1:1),o=so(t),a=i.boss?2.4:t==="inf"?1.6:1.85;o.root.scale.setScalar(a);let l={type:t,E:i,hp:s,maxHp:s,d:0,air:!!i.air,off:i.boss?0:(Math.random()-.5)*.9,wob:Math.random()*10,stun:0,slowMul:1,dead:!1,model:o,pos:De(),sc:a,si:0,k:0,rem:1e9};if(l.air){let h=this.airPath(n);l.fly={pts:h,segs:[]},l.len=0;for(let u=0;u<h.length-1;u++){let f=h[u].distanceTo(h[u+1]);l.fly.segs.push({a:h[u],b:h[u+1],l:f,c:l.len}),l.len+=f}}else n?(l.br=n,l.opt=n):l.opt=this.city.steps[0].opts[this.city.steps[0].open];let c=i.boss?1.6:.7;l.hpBg=new Br(this.hpBgMat||(this.hpBgMat=new ks({color:1703936,depthTest:!1}))),l.hpFg=new Br(new ks({color:i.boss?16747150:16730685,depthTest:!1})),l.hpBg.scale.set(c+.05,.11,1),l.hpFg.scale.set(c,.07,1),l.bw=c,l.hpBg.renderOrder=10,l.hpFg.renderOrder=11,l.hpBg.visible=l.hpFg.visible=!1,this.unitGroup.add(o.root,l.hpBg,l.hpFg),this.enemies.push(l),this.placeEnemy(l,0)}airPath(t){let e=this.S,n=e.bounds,i=this.city.base.clone().add(De(-1.5,0,0)),s=()=>(Math.random()-.5)*1.6;if((e.airEntry||"withGround")==="allSides"){let a=Math.floor(Math.random()*4),l=3,c=n.x0+Math.random()*(n.x1-n.x0),h=n.z0+Math.random()*(n.z1-n.z0),u=[De(c,0,n.z0-l),De(n.x1+l,0,h),De(c,0,n.z1+l),De(n.x0-l,0,h)][a],f=u.clone().lerp(i,.5).add(De(s()*4,0,s()*4));return[u,f,i]}if(t){let a=[],l=(m,x)=>{for(let v=x;v<m.len;v+=5){let _=m.samples.find(y=>y.cum>=v)||m.samples[m.samples.length-1];a.push(De(_.p.x+s(),0,_.p.z+s()))}},c=t,h=0;for(;;){l(c,h);let m=c.joinRef;if(!m)break;if(h=c.joinCum,m.branch){c=m.branch;continue}for(let x=m.step;x<this.city.steps.length;x++){let v=this.city.steps[x];l(v.opts[v.open],x===m.step?h:0)}break}let[u,f]=t.pts[0],[d,p]=t.pts[1],g=Math.hypot(d-u,p-f);return a[0].x-=(d-u)/g*2,a[0].z-=(p-f)/g*2,a.push(i),a}let o=[];for(let a of e.route)for(let[l,c]of(a.choice?a.choice[0]:a).pts){let h=De(l+s(),0,c+s());(!o.length||o[o.length-1].distanceTo(h)>1)&&o.push(h)}return o[0].x-=2,o.push(i),o}removeEnemy(t){this.unitGroup.remove(t.model.root,t.hpBg,t.hpFg),t.hpFg.material.dispose()}advanceGround(t){for(;t.d>=t.opt.len;){if(t.br){let n=t.br,i=n.joinRef;if(t.d=t.d-n.len+n.joinCum,t.k=0,i.branch){t.br=t.opt=i.branch;continue}t.br=null,t.si=i.step;let s=this.city.steps[t.si];t.opt=s.opts[s.open];continue}t.d-=t.opt.len,t.si++,t.k=0;let e=this.city.steps[t.si];if(!e)return!0;t.opt=e.opts[e.open]}return!1}placeEnemy(t,e){let n,i,s;if(t.air){let l=t.fly.segs,c=l[l.length-1];for(let f of l)if(t.d<=f.c+f.l){c=f;break}let h=Math.min(1,(t.d-c.c)/c.l),u=Math.sin(t.d*.6+t.wob)*1.2;s=Math.atan2(c.b.z-c.a.z,c.b.x-c.a.x),n=c.a.x+(c.b.x-c.a.x)*h-Math.sin(s)*u,i=c.a.z+(c.b.z-c.a.z)*h+Math.cos(s)*u,t.rem=t.len-t.d}else{let l=t.opt.samples;for(;t.k<l.length-2&&l[t.k+1].cum<t.d;)t.k++;let c=l[t.k],h=l[t.k+1],u=Math.min(1,Math.max(0,(t.d-c.cum)/Math.max(1e-6,h.cum-c.cum)));s=Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x),n=c.p.x+(h.p.x-c.p.x)*u-Math.sin(s)*t.off,i=c.p.z+(h.p.z-c.p.z)*u+Math.cos(s)*t.off,t.rem=t.opt.len-t.d+(t.br?t.br.after:this.remainAfter[t.si])}t.pos.set(n,0,i);let o=t.model.root;o.position.set(n,0,i);let a=-s-o.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),o.rotation.y+=e?a*Math.min(1,e*8):a,t.type==="inf"&&(t.model.body.position.y=Math.abs(Math.sin(t.d*9))*.04),t.hp<t.maxHp){let l=t.model.hpY*t.sc+.1;t.hpBg.visible=t.hpFg.visible=!0,t.hpBg.position.set(n,l,i),t.hpFg.position.set(n,l,i);let c=Math.max(.001,t.hp/t.maxHp);t.hpFg.scale.x=t.bw*c,t.hpFg.center.set(.5/c,.5)}}update(t,e){for(let n of this.enemies)for(let[i,s,o]of n.model.spin)i.rotation[s]+=o*t;for(let n of this.towers){for(let[i,s,o]of n.model.spin)i.rotation[s]+=o*t;for(let i of n.model.glow)i.material.emissiveIntensity=1+Math.sin(e*3)*.5}if(this.updateFx(t),!this.isOver()){if(this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.endCombo()),this.state==="battle"){for(this.clock+=t;this.queue.length&&this.queue[0].t<=this.clock;){let n=this.queue.shift();this.spawnEnemy(n.type,n.wave,n.lane)}for(this.cpT+=t;this.cpT>=GF.SETTINGS.cpEverySec;)this.cpT-=GF.SETTINGS.cpEverySec,this.cp=Math.min(GF.SETTINGS.cpMax,this.cp+1);this.cp>=GF.SETTINGS.cpMax&&(this.cpT=0),!this.queue.length&&this.waveNo<this.S.waves.length&&(this.nextT<=0?this.nextT=this.S.autoNextSec:(this.nextT-=t,this.nextT<=.001&&(this.nextT=0,this.launchWave(0))))}for(let n of this.timers)n.t-=t,n.t<=0&&(n.fn(),n.done=!0);this.timers=this.timers.filter(n=>!n.done);for(let n of this.enemies)n.slowMul=1;for(let n of this.towers){if(n.W.shot!=="aura")continue;let i=this.stats(n),s=i.range,o=i.mul;n.pulse-=t;let a=!1;for(let l of this.enemies)l.dead||l.pos.distanceToSquared(n.pos)>s*s||(a=!0,l.slowMul=Math.min(l.slowMul,1-n.W.slow*(l.type==="drone"?1.35:1)),l.air&&n.W.airDps&&this.hurt(l,n.W.airDps*o*t,n,{pierce:!0}));n.pulse<=0&&a&&(n.pulse=1.3,this.spawnRing(n.pos,s,7328767,.9))}for(let n of this.zones){n.t-=t;for(let i of this.enemies)!i.air&&i.pos.distanceTo(n.pos)<=n.r&&(i.slowMul=Math.min(i.slowMul,.5));n.mesh.material.opacity=Math.min(.45,n.t/2)}this.zones=this.zones.filter(n=>n.t<=0?(this.fxGroup.remove(n.mesh),!1):!0);for(let n of this.enemies)if(!n.dead){if(n.stun>0?n.stun-=t:n.d+=n.E.speed*n.slowMul*t,n.air?n.d>=n.len:this.advanceGround(n)){this.leak(n);continue}this.placeEnemy(n,t)}this.enemies=this.enemies.filter(n=>!n.dead);for(let n of this.towers){if(n.W.shot==="aura")continue;let i=this.stats(n);if(n.cd-=t,n.cd>.25&&n.lastT&&!n.lastT.dead){this.aim(n,n.lastT,t);continue}let s=this.findTarget(n,i.range);if(n.lastT=s,!s)continue;let o=this.aim(n,s,t);n.cd<=0&&Math.abs(o)<.5&&(n.cd=1/i.rate,this.fire(n,s,i))}for(let n of this.shots)this.moveShot(n,t);this.shots=this.shots.filter(n=>!n.done),this.state==="battle"&&this.waveNo>=this.S.waves.length&&!this.queue.length&&!this.enemies.length&&this.finish(!0)}}aim(t,e,n){let s=Math.atan2(e.pos.z-t.pos.z,e.pos.x-t.pos.x)-t.ang;return s=Math.atan2(Math.sin(s),Math.cos(s)),t.ang+=Math.sign(s)*Math.min(Math.abs(s),7*n),t.model.yaw.rotation.y=-t.ang,s}findTarget(t,e){let n=null,i=1e9,s=e*e,o=t.W.hits;for(let a of this.enemies)a.dead||!o.includes(a.air?"air":"ground")||a.pos.distanceToSquared(t.pos)>s||a.rem<i&&(i=a.rem,n=a);return n}targetPoint(t){return t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.3)}fire(t,e,n){let i=t.W;t.model.root.updateMatrixWorld(!0);let s=t.model.muzzle.getWorldPosition(De()),o=this.targetPoint(e);if(this.snd(i.heavy?"cruise":i.pierce?"javelin":i.shot),i.shot==="bullet"){this.hurt(e,n.dmg,t);let a=o.add(De((Math.random()-.5)*.2,0,(Math.random()-.5)*.2));this.vfx.muzzle(s,a.clone().sub(s).normalize(),!1),this.tracer(s,a),this.vfx.impact(a,e.air)}else if(i.shot==="cannon")this.vfx.muzzle(s,o.clone().sub(s).normalize(),!0),this.tracer(s,o,16761962),this.explode(o.clone().setY(0),i.splash,n.dmg,t,!0);else if(i.shot==="shell")this.addShot("shell",s,{to:o.setY(0),speed:9,arc:1.5+s.distanceTo(o)*.18,dmg:n.dmg,splash:i.splash,tw:t}),this.vfx.muzzle(s,De(0,1,0),!0);else if(i.shot==="missile")this.vfx.muzzle(s,De(0,1,0),!!i.heavy),this.addShot("missile",s,{target:e,speed:e.air?10:7,dmg:n.dmg,tw:t,pierce:!!i.pierce,splash:i.splash||0,heavy:!!i.heavy});else if(i.shot==="intercept")this.addShot("missile",s,{target:e,speed:12,dmg:n.dmg,tw:t,pierce:!0,splash:0,small:!0});else if(i.shot==="rockets")for(let a=0;a<i.salvo;a++){let l=De((Math.random()-.5)*2.2,0,(Math.random()-.5)*2.2);this.timers.push({t:a*.12,fn:()=>this.addShot("rocket",s,{to:o.clone().setY(0).add(l),speed:11,arc:3,dmg:n.dmg,splash:i.splash,tw:t})})}}addShot(t,e,n){let i=Object.assign({kind:t,done:!1,t:0,from:e.clone(),pos:e.clone()},n);i.mesh=new lt(t==="shell"?Ns.shell:Ns.rocket,t==="shell"?this.shellM||(this.shellM=gt(16769162,{emissive:16751104})):this.rocketM||(this.rocketM=gt(14672870))),n.small&&i.mesh.scale.setScalar(.7),n.heavy&&i.mesh.scale.setScalar(2.2),i.mesh.position.copy(e),this.fxGroup.add(i.mesh),i.to&&(i.dur=Math.max(.25,e.distanceTo(i.to)/i.speed)),this.shots.push(i)}moveShot(t,e){let n=t.pos.clone();if(t.kind==="missile"){t.target.dead||(t.aim=this.targetPoint(t.target));let i=t.aim||this.targetPoint(t.target),s=i.clone().sub(t.pos),o=s.length(),a=t.speed*e;if(t.t+=e,o<=a+.08){t.done=!0,this.fxGroup.remove(t.mesh),t.splash&&this.explode(i,t.splash,t.dmg,t.tw,!1,t.target.air),t.heavy?(this.snd("bigboom",1),this.app.shake(.18),this.explodeFx(i.clone().setY(.3),1.6)):(t.target.dead||this.hurt(t.target,t.dmg,t.tw,{pierce:t.pierce}),this.explodeFx(i,t.small?.3:.55));return}t.pos.add(s.multiplyScalar(a/o)),t.pos.y+=Math.sin(Math.min(1,t.t*2)*Math.PI)*e*(t.heavy?7:2)}else{t.t+=e;let i=Math.min(1,t.t/t.dur);if(t.pos.copy(t.from).lerp(t.to,i),t.pos.y=t.from.y*(1-i)+t.to.y*i+t.arc*4*i*(1-i),i>=1){t.done=!0,this.fxGroup.remove(t.mesh),this.explode(t.to,t.splash,t.dmg,t.tw);return}}if(t.mesh.position.copy(t.pos),t.kind!=="shell"){let i=t.pos.clone().sub(n);i.lengthSq()>0&&t.mesh.quaternion.setFromUnitVectors(De(0,1,0),i.normalize()),this.vfx.trail(t.pos,n,!!t.heavy,e)}else this.vfx.emit(this.vfx.glow,{x:t.pos.x,y:t.pos.y,z:t.pos.z,life:.08,s0:.12,c0:[2,1.4,.6],tile:2})}explode(t,e,n,i,s,o=!1){let a=e*e;for(let l of this.enemies){if(l.dead||l.air!==o)continue;let c=(l.pos.x-t.x)**2+(l.pos.z-t.z)**2;c<=a&&this.hurt(l,n*(c<a*.16?1:.65),i,{splash:!0})}this.explodeFx(t,s?e*.6:e),this.snd("boom",s?.5:.8)}hurt(t,e,n,i={}){if(t.dead)return;let s=i.pierce?1:1-t.E.armor;i.splash&&this.syn.slowSplash&&t.slowMul<1&&(s*=1.2);let o=Math.min(t.hp,e*s);t.hp-=o,n&&n.dmgTotal!==void 0&&(n.dmgTotal+=o),t.hp<=.001&&this.kill(t,n)}kill(t,e){t.dead=!0,this.kills++,e&&e.kills!==void 0&&e.kills++;let n=Math.round(t.E.reward*(this.syn.balance?1.05:1));this.money+=n,this.removeEnemy(t);let i=t.E.boss?2:t.type==="tank"||t.type==="heli"?.9:.5;this.explodeFx(t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.25),i),i>=.9?this.snd("bigboom",t.E.boss?1.4:.8):t.type!=="inf"&&this.snd("boom",.45),!t.air&&t.type!=="inf"&&this.wreck(t),t.air&&this.fallDebris(t),n>=10&&this.ui().floatText(t.pos.clone().setY(1),"+"+n,"#F2C14E"),t.E.boss&&(this.app.shake(.5),this.ui().toast('\uBCF4\uC2A4 "\uD2F0\uD0C4" \uACA9\uD30C!',"#7FE0A8")),this.combo++,this.comboT=GF.SETTINGS.comboWindow,this.combo>=10&&this.combo%10===0&&(this.ui().combo(this.combo),this.snd("combo"))}endCombo(){if(this.combo>=10){let t=Math.round(this.combo*1.5);this.money+=t,this.ui().toast(`\uC5F0\uC1C4 \uACA9\uD30C ${this.combo}! \uBCF4\uB108\uC2A4 \uBCF4\uAE09 +${t}`,"#FFD45A")}this.bestCombo=Math.max(this.bestCombo,this.combo),this.combo=0}leak(t){t.dead=!0,this.removeEnemy(t),this.lives=Math.max(0,this.lives-t.E.leak),this.app.shake(.2),this.ui().flashDamage(),this.snd("leak"),this.explodeFx(this.city.base.clone().add(De(-1,.6,0)),.7),this.lives<=0&&this.finish(!1)}useCard(t,e){let n=this.hand[t],i=GF.CARDS[n];if(this.cp<i.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.cp-=i.cost,this.hand[t]=this.deck.shift(),this.deck.push(n),this.mode=null,this.cardSel=-1,this.rangeDisc.visible=!1,this.snd({airstrike:"airstrike",emp:"emp",supply:"coin",barrage:"airstrike",smoke:"missile"}[n]||"click");let s=De(e.x,0,e.z);if(n==="supply"&&(this.money+=i.power,this.ui().toast("\uAE34\uAE09 \uBCF4\uAE09 \uB3C4\uCC29 \xB7 \uBCF4\uAE09 +"+i.power,"#7FE0A8")),n==="airstrike"&&(this.flyJet(s),this.spawnRing(s,i.radius,15026253),this.timers.push({t:.9,fn:()=>{this.explode(s,i.radius,i.power,null),this.explodeFx(s.clone().add(De(1,0,.5)),1.4),this.explodeFx(s.clone().add(De(-.9,0,-.6)),1.4),this.app.shake(.35)}})),n==="emp"){this.spawnRing(s,i.radius,9421823,.8),this.vfx.pulse(s.clone().setY(.5),i.radius,9421823);for(let o of this.enemies)o.pos.distanceTo(s)<=i.radius&&(o.stun=i.power)}if(n==="barrage"){this.spawnRing(s,i.radius,15901498);for(let o=0;o<12;o++){let a=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*i.radius,c=s.clone().add(De(Math.cos(a)*l,0,Math.sin(a)*l));this.timers.push({t:.4+o*.13,fn:()=>this.explode(c,1.5,i.power,null)})}}if(n==="smoke"){let o=new lt(new ut(i.radius,i.radius,.7,32),new ht({color:13685976,transparent:!0,opacity:.45,depthWrite:!1}));o.position.set(s.x,.35,s.z),this.fxGroup.add(o),this.zones.push({pos:s,r:i.radius,t:i.power,mesh:o});for(let a=0;a<16;a++)this.spawnPuff(s.clone().add(De((Math.random()-.5)*i.radius*1.6,.3,(Math.random()-.5)*i.radius*1.6)),15132906,1,.6,2.5)}}pushFx(t,e,n){this.fxGroup.add(t),this.fx.push({obj:t,t:0,life:e,fn:n})}updateFx(t){for(let e of this.fx){e.t+=t;let n=Math.min(1,e.t/e.life);e.fn(e.obj,n,t),n>=1&&(this.fxGroup.remove(e.obj),e.obj.material&&e.obj.material.dispose&&!e.obj.material.shared&&e.obj.material.dispose(),e.done=!0)}this.fx=this.fx.filter(e=>!e.done),this.vfx.q={ultra:1,high:1,medium:.7,low:.45}[this.app.look&&this.app.look.q]||1,this.vfx.update(t),this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-t*70))}explodeFx(t,e){this.vfx.explosion(t.clone().setY(Math.max(.1,t.y)),e,{air:t.y>.8}),this.flash.position.copy(t).setY(Math.max(1,t.y+.6)),this.flash.intensity=Math.max(this.flash.intensity,10+e*14),this.flash.distance=4+e*5}spawnPuff(t,e,n=1,i=.18,s=.9){let o=new Xt(e);for(let a=0;a<n;a++)this.vfx.emit(this.vfx.smoke,{x:t.x+(Math.random()-.5)*.2,y:t.y,z:t.z+(Math.random()-.5)*.2,v:[0,.3+Math.random()*.4,0],life:s,s0:i*1.2,s1:i*4,c0:[o.r,o.g,o.b],a:.6,tile:0,fin:.08})}spawnSpark(t,e,n,i=.12){let s=new Xt(e);this.vfx.emit(this.vfx.glow,{x:t.x,y:t.y,z:t.z,life:i,s0:n*2,s1:n*4,c0:[s.r*1.8,s.g*1.8,s.b*1.8],tile:2})}spawnRing(t,e,n,i=.6){let s=new lt(Ns.ring,new Ie({color:n,transparent:!0,depthWrite:!1,side:Ue}));s.rotation.x=-Math.PI/2,s.position.set(t.x,.08,t.z),this.pushFx(s,i,(o,a)=>{o.scale.setScalar(e*(.3+.7*a)),o.material.opacity=.9*(1-a)})}tracer(t,e,n=16769162){this.vfx.tracer(t,e,n)}wreck(t){let e=t.model.root,n=t.E.boss?1.8:t.type==="tank"?1.1:.8,i=new Lt,s=new lt(Ns.wreck,this.wreckM||(this.wreckM=gt(1907738,{roughness:1})));s.scale.set(n,1.4,n),s.position.y=.08,i.add(s);let o=new lt(Ns.wreck,this.wreckM2||(this.wreckM2=gt(2827808,{roughness:1})));o.scale.set(n*.5,1.2,n*.6),o.position.set(-.05*n,.22,0),o.rotation.set(.15,.4,-.2),i.add(o);let a=new lt(Ns.wreck,this.emberM||(this.emberM=gt(1707784,{emissive:16730640,emissiveIntensity:1.4})));a.scale.set(n*.7,.3,n*.4),a.position.y=.17,i.add(a),i.traverse(h=>{h.material&&(h.material.shared=!0)}),i.position.copy(t.pos).setY(0),i.rotation.y=e.rotation.y+(Math.random()-.5)*.5;let l=t.E.boss?9:6,c=De();this.pushFx(i,l,(h,u,f)=>{a.visible=u<.6,u>.85&&(h.position.y=-(u-.85)*2),c.copy(h.position).setY(.25),this.vfx.burn(c,n,f,u<.5?1:1.6*(1-u))})}fallDebris(t){let e=new lt(Ns.wreck,this.wreckM||(this.wreckM=gt(1907738,{roughness:1})));e.material.shared=!0;let n=t.type==="heli"?.7:.4;e.scale.set(n,2,n),e.position.copy(t.pos).setY(t.model.body.position.y*t.sc);let i=(Math.random()-.5)*2,s=(Math.random()-.5)*2,o=e.position.y,a=Math.max(.5,Math.sqrt(o/4.5)),l=!1;this.pushFx(e,a,(c,h,u)=>{c.position.x+=i*u,c.position.z+=s*u,c.position.y=Math.max(.05,o*(1-h*h)),c.rotation.x+=u*6,c.rotation.z+=u*4,this.vfx.fallTrail(c.position,u),h>=.99&&!l&&(l=!0,this.vfx.explosion(c.position.clone().setY(.15),t.type==="heli"?.9:.5,{}))})}flyJet(t){let e=new Lt,n=new lt(new ze(.22,1.5,6),gt(9080983));n.rotation.z=-Math.PI/2,e.add(n);let i=new lt(new j(.55,.04,1.5),gt(8028295));i.position.x=-.15,e.add(i);let s=new lt(new j(.28,.34,.04),gt(8028295));s.position.set(-.6,.16,0),e.add(s);let o=t.clone().add(De(-18,6,9)),a=t.clone().add(De(18,6,-9));e.position.copy(o),e.lookAt(a),e.rotateY(-Math.PI/2),e.traverse(l=>{l.material&&(l.material.shared=!0)}),this.pushFx(e,1.8,(l,c)=>{l.position.copy(o).lerp(a,c)})}};var Qp="gf_profile",Ei={data:{name:"",credits:0,purchases:[]},load(){try{Object.assign(this.data,JSON.parse(localStorage.getItem(Qp)||"{}"))}catch{}return this},save(){try{localStorage.setItem(Qp,JSON.stringify(this.data))}catch{}},get name(){return this.data.name||"\uC9C0\uD718\uAD00"},setName(r){this.data.name=String(r||"").trim().slice(0,12),this.save()},get credits(){return this.data.credits||0},addCredits(r,t){this.data.credits=this.credits+r,t&&this.data.purchases.push({t:Date.now(),memo:t,n:r}),this.save()},spend(r){return this.credits<r?!1:(this.data.credits-=r,this.save(),!0)}};var Su=()=>(navigator.maxTouchPoints||0)>0||"ontouchstart"in window;function gh(){let r=window.innerWidth,t=window.innerHeight,e=Math.min(r,t*16/9),n=e*9/16,i=Su()&&n<620,s=i?{w:1280,h:720,top:58,bottom:598}:{w:1920,h:1080,top:84,bottom:900};return{x:Math.round((r-e)/2),y:Math.round((t-n)/2),w:Math.round(e),h:Math.round(n),portrait:t>r,mobile:i,base:s,k:e/s.w}}var tm=new WeakMap;function be(r,t,e){let n=tm.get(r);n||tm.set(r,n={}),n[t]!==e&&(n[t]=e,r[t]=e)}var Mu=r=>"\u20A9"+r.toLocaleString("ko-KR"),pe=(r,t,e,n)=>{let i=document.createElement(r);return t&&(i.className=t),e!=null&&(i.innerHTML=e),n&&n.appendChild(i),i},xh=class{constructor(t){this.app=t,this.root=document.getElementById("hud"),this.fit(),window.addEventListener("resize",()=>this.fit()),this.floats=[],this.labelLayer=pe("div","labels",null,this.root),this.labelEls=[]}get g(){return this.app.game}cityName(){let t=this.app.stage;return GF.SETTINGS.useCityAlias?t.alias:t.name}fit(){let t=this.L=gh();this.scale=t.k,this.BW=t.base.w,this.BH=t.base.h,this.root.style.width=t.base.w+"px",this.root.style.height=t.base.h+"px",this.root.classList.toggle("mobile",t.mobile),document.body.classList.toggle("touch",t.mobile),this.root.style.transform=`translate(${t.x}px, ${t.y}px) scale(${t.k})`}showTitle(t){this.icons=t;let e=this.app.stage,n=this.best(),i=this.title=pe("div","title-screen",null,this.root);i.innerHTML=`
      <div class="brand"><span>MODERN WAR TOWER DEFENSE</span><h1>2030 Warfare 1</h1><p>\uBD80\uCE74\uB2C8\uC2A4\uD0C4\uC774 \uC138\uACC4 50\uAC1C \uB3C4\uC2DC\uB97C \uCE68\uACF5\uD588\uB2E4. \uC5F0\uD569\uAD70 \uC9C0\uD718\uAD00\uC73C\uB85C\uC11C \uB3C4\uC2DC\uB97C \uC9C0\uCF1C\uB77C.</p></div>
      <div class="profile-card">
        <div class="pc-title">\uC9C0\uD718\uAD00 \uD504\uB85C\uD544</div>
        <div class="pc-row"><input class="pc-name" maxlength="12" placeholder="\uC774\uB984\uC744 \uC815\uD558\uC138\uC694" value=""><button class="pc-save">\uC800\uC7A5</button></div>
        <div class="pc-stat"><span>\uBCF4\uAE09\uCC3D</span><b class="pc-cred"></b></div>
        <div class="pc-stat"><span>${e.name} \uCD5C\uACE0 \uAE30\uB85D</span><b>${"\u2605".repeat(n)}${"\u2606".repeat(3-n)}</b></div>
        <button class="pc-shop">\u{1F6D2} \uC0C1\uC810 \xB7 \uBCF4\uAE09 \uCDA9\uC804</button>
        <button class="pc-fs">\u26F6 \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uD558\uAE30</button>
        <button class="pc-install">\u{1F4F2} \uC571\uC73C\uB85C \uC124\uCE58\uD558\uAE30</button>
      </div>
      <div class="brief">
        <div class="stages">${this.stageList().map(a=>`<button class="st${a===e?" on":""}" data-id="${a.id}"><small>STAGE ${a.no}</small>${a.name}<i>${"\u2605".repeat(this.best(a.id))}${"\u2606".repeat(3-this.best(a.id))}</i></button>`).join("")}</div>
        <div class="stage-no">STAGE ${e.no} \xB7 2030 \uC5F0\uD569\uBC29\uC704\uC804\uC120</div>
        <div class="city">${this.cityName()}${GF.SETTINGS.useCityAlias?"":`<small>${e.nameEn}</small>`}<em>${e.title}</em></div>
        <p>${e.briefing}</p>
        <div class="meta">\uC6E8\uC774\uBE0C ${e.waves.length} \xB7 \uAE30\uC9C0 \uCCB4\uB825 ${e.lives} \xB7 \uC801 \uC9C4\uC785\uB85C ${1+(e.branches||[]).length}\uACF3 \xB7 \uCD5C\uACE0 \uAE30\uB85D <b>${"\u2605".repeat(n)}${"\u2606".repeat(3-n)}</b></div>
        <div class="label">\uC7A5\uCC29 \uBB34\uAE30 ${GF.LOADOUT.length} <small>\uB3C4\uB85C\xB7\uB79C\uB4DC\uB9C8\uD06C\uB9CC \uBE7C\uACE0 \uC5B4\uB514\uB4E0 \uBC30\uCE58</small> \xB7 \uC804\uB7B5 \uBB34\uAE30 <small>ICBM \xB7 \uC804\uB7B5\uD575\uBBF8\uC0AC\uC77C (\uC6E8\uC774\uBE0C\uB9C8\uB2E4 \uC7AC\uBCF4\uAE09)</small></div>
        <div class="loadout">${GF.LOADOUT.map(a=>`<div class="lo"><img src="${t[a]}"><b>${GF.wname(a)}</b><span>${GF.WEAPONS[a].role}</span></div>`).join("")}</div>
        <button class="go">\uCD9C\uACA9</button>
        <div class="help">\uC870\uC791: \uB9C8\uC6B0\uC2A4 \uB04C\uAE30\xB7\uBC29\uD5A5\uD0A4 \uC9C0\uB3C4 \uC774\uB3D9 \xB7 \uD720 \uD655\uB300\xB7\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uBC84\uD2BC \uB04C\uAE30 \uB610\uB294 [ ] \uD0A4 \uC2DC\uC810 \uD68C\uC804 \xB7 R \uAE30\uBCF8 \uC2DC\uC810 \xB7 1~9 \uBB34\uAE30 \xB7 Q W E \uC791\uC804 \uCE74\uB4DC \xB7 Z ICBM \xB7 X \uC804\uB7B5\uD575 \xB7 \uC2A4\uD398\uC774\uC2A4 \uC77C\uC2DC\uC815\uC9C0 \xB7 N \uB2E4\uC74C \uC6E8\uC774\uBE0C</div>
        <div class="disc">\uC774 \uAC8C\uC784\uC740 \uAC00\uC0C1\uC758 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uAD6D\uAC00\xB7\uB2E8\uCCB4\xB7\uC0AC\uAC74\uACFC \uAD00\uACC4\uC5C6\uC2B5\uB2C8\uB2E4. \xB7 v${GF.SETTINGS.version}</div>
      </div>`,i.querySelector(".go").onclick=()=>this.app.startGame(),i.querySelectorAll(".stages .st").forEach(a=>{a.onclick=()=>this.app.selectStage(a.dataset.id)});let s=i.querySelector(".pc-name");s.value=Ei.data.name||"";let o=()=>{Ei.setName(s.value),this.toastAny("\uC9C0\uD718\uAD00 \uC774\uB984 \uC800\uC7A5: "+Ei.name)};i.querySelector(".pc-save").onclick=o,s.onkeydown=a=>{a.key==="Enter"&&o()},i.querySelector(".pc-shop").onclick=()=>this.openShop(),i.querySelector(".pc-fs").onclick=()=>this.fullscreen(),i.querySelector(".pc-install").onclick=()=>{let a=window.__installPrompt;a&&(a.prompt(),a.userChoice.then(()=>{window.__installPrompt=null,document.body.classList.remove("can-install")}))},this.L.mobile&&(i.querySelector(".help").textContent="\uC870\uC791: \uBB34\uAE30 \uCE74\uB4DC \uD130\uCE58 \u2192 \uD68C\uC0C9 \uACF5\uAC04 \uD130\uCE58\uB85C \uBC30\uCE58 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30 \uC774\uB3D9 \xB7 \uB450 \uC190\uAC00\uB77D \uBC8C\uB9AC\uAE30 \uD655\uB300 \xB7 \uB450 \uC190\uAC00\uB77D \uBE44\uD2C0\uAE30 \uD68C\uC804 \xB7 \uBB34\uAE30 \uD130\uCE58\uB85C \uAC15\uD654 \xB7 \uAC19\uC740 \uCE74\uB4DC \uB2E4\uC2DC \uD130\uCE58\uD558\uBA74 \uCDE8\uC18C"),this.refreshProfile()}hideTitle(){this.title&&(this.title.remove(),this.title=null)}best(t=this.app.stage.id){try{return JSON.parse(localStorage.getItem("gf_progress")||"{}")[t]||0}catch{return 0}}stageList(){return Object.values(GF.STAGES).sort((t,e)=>t.no-e.no)}resetLabels(){for(let{e:t}of this.labelEls)t.remove();this.labelEls=[]}buildHud(){this.hud&&this.hud.remove();let t=this.app.stage,e=this.g,n=this.hud=pe("div","hud-layer",null,this.root);pe("div","tl",`<div class="logo">2030 Warfare 1</div><div class="sub">${GF.SETTINGS.useCityAlias?this.cityName()+" \uBC29\uC5B4\uC804":t.nameEn+" \xB7 "+t.title}</div>`,n);let i=pe("div","pbar",'<span class="pb-ava"></span><b class="pb-name"></b><span class="pb-cred"></span><button class="pb-shop">\uFF0B \uCDA9\uC804</button>',n);i.querySelector(".pb-shop").onclick=()=>this.openShop(),this.eKills=pe("div","kills","",n);let s=pe("div","tr",null,n);this.eLives=pe("div","pill lives","",s),this.eMoney=pe("div","pill money","",s),this.eWave=pe("div","pill wave","",s),this.bSpeed=pe("button","sq speed","",s),this.bSpeed.onclick=()=>{e.speed=e.speed>=3?1:e.speed+1},this.bPause=pe("button","sq","",s),this.bPause.onclick=()=>this.app.togglePause(),pe("button","sq fs-btn","\u26F6",s).onclick=()=>this.fullscreen(),pe("button","sq gear","\u2699",s).onclick=()=>this.toggleSettings();let o=pe("div","rotv",null,n),a=(d,p,g)=>{let m=pe("button","sq",d,o);m.title=g;let x=()=>{this.app.cam.spin=0};m.onpointerdown=v=>{v.preventDefault(),this.app.cam.spin=p},m.onpointerup=x,m.onpointerleave=x,m.onpointercancel=x};a("\u27F2",-1,"\uC67C\uCABD\uC73C\uB85C \uB3CC\uB9AC\uAE30 ([ \uD0A4)");let l=pe("button","sq home-v","\u2302",o);l.title="\uAE30\uBCF8 \uC2DC\uC810 (R \uD0A4)",l.onclick=()=>this.app.resetView(),a("\u27F3",1,"\uC624\uB978\uCABD\uC73C\uB85C \uB3CC\uB9AC\uAE30 (] \uD0A4)");let c=pe("div","bar",null,n);this.cards=GF.LOADOUT.map((d,p)=>{let g=pe("div","card",`<img src="${this.icons[d]}"><div class="txt"><b class="wn"></b><span>${GF.WEAPONS[d].role}</span></div><div class="cost">${GF.WEAPONS[d].cost}</div><i>${p+1}</i>`,c);return g.onclick=()=>e.setMode(d),{id:d,c:g,n:g.querySelector(".wn")}}),this.bNext=pe("button","nextwave","",n),this.bNext.onclick=()=>e.callNext();let h=pe("div","ops",'<div class="ops-title">\uC791\uC804 \uCE74\uB4DC <small>CP\uB294 \uC804\uD22C \uC911\uC5D0 \uCC38</small></div>',c);this.ops=[0,1,2].map(d=>{let p=pe("div","op","",h);return p.onclick=()=>e.pickCard(d),p}),this.eNext=pe("div","op-next","",h);let u=pe("div","strat","",n);this.strats=Object.entries(GF.STRATEGIC).map(([d,p])=>{let g=pe("div","sb "+d,"",u);return g.onclick=()=>e.pickStrat(d),{id:d,C:p,o:g}});let f=pe("div","cpbar","",h);this.cpSegs=[];for(let d=0;d<GF.SETTINGS.cpMax;d++)this.cpSegs.push(pe("div","seg","<div></div>",f));this.eCp=pe("div","cp-num","",h),this.panel=pe("div","tpanel","",n),this.panel.innerHTML='<b class="pt"></b><div class="pi"></div><button class="up"></button><button class="all"></button><div class="row"><button class="sell"></button><button class="close">\uB2EB\uAE30</button></div>',this.panel.querySelector(".up").onclick=()=>e.upgradeTower(e.selected),this.panel.querySelector(".all").onclick=()=>e.upgradeAll(e.selected.type),this.panel.querySelector(".sell").onclick=()=>e.sellTower(e.selected),this.panel.querySelector(".close").onclick=()=>e.select(null),this.settings=pe("div","settings","",n),this.renderSettings(),this.eTip=pe("div","tip","",n),this.eToast=pe("div","toast","",n),this.eCombo=pe("div","combo","",n),this.eHint=pe("div","hint","",n),this.eDmg=pe("div","dmgflash","",n),this.ePaused=pe("div","paused","\uC77C\uC2DC\uC815\uC9C0",n),this.refreshProfile()}renderSettings(){let t=GF.SETTINGS,e=this.settings;e.innerHTML=`<b>\uC124\uC815</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${t.showLandmarkLabels?"checked":""}> \uB79C\uB4DC\uB9C8\uD06C \uC774\uB984\uD45C</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${t.useRealWeaponNames?"checked":""}> \uBB34\uAE30 \uC2E4\uC81C \uC774\uB984 <small>(\uB044\uBA74 \uC0B4\uC9DD \uBC14\uAFBC \uC774\uB984)</small></label>
      <label><input type="checkbox" data-k="sound" ${t.sound?"checked":""}> \uD6A8\uACFC\uC74C</label>
      <label><input type="checkbox" data-k="shadows" ${t.shadows?"checked":""}> \uADF8\uB9BC\uC790 <small>(\uB290\uB9AC\uBA74 \uB044\uAE30)</small></label>
      <label>\uADF8\uB798\uD53D <select class="gq">${[["auto","\uC790\uB3D9 (\uCD94\uCC9C)"],["ultra","\uCD5C\uACE0 (\uACE0\uC0AC\uC591 PC)"],["high","\uB192\uC74C"],["medium","\uBCF4\uD1B5"],["low","\uB0AE\uC74C (\uB290\uB9B0 \uAE30\uAE30)"]].map(([n,i])=>`<option value="${n}" ${(t.graphics==="auto"?"auto":this.app.look.q)===n?"selected":""}>${i}</option>`).join("")}</select></label>
      <div class="row"><button class="home">\uCC98\uC74C \uD654\uBA74</button><button class="close">\uB2EB\uAE30</button></div>`,e.querySelectorAll("input").forEach(n=>{n.onchange=()=>{t[n.dataset.k]=n.checked,this.app.applySettings()}}),e.querySelector(".gq").onchange=n=>{t.graphics=n.target.value,this.app.applySettings()},e.querySelector(".home").onclick=()=>{this.toggleSettings(!1),this.app.toTitle()},e.querySelector(".close").onclick=()=>this.toggleSettings(!1)}toggleSettings(t){let e=t??this.settings.style.display!=="block";this.settings.style.display=e?"block":"none"}toast(t,e,n=2100){this.eToast&&(this.eToast.textContent=t,this.eToast.style.color=e||"#fff",this.eToast.classList.add("on"),clearTimeout(this.toastT),this.toastT=setTimeout(()=>this.eToast.classList.remove("on"),n))}combo(t){this.eCombo&&(this.eCombo.innerHTML=`<b>${t}</b> \uC5F0\uC1C4 \uACA9\uD30C!`,this.eCombo.classList.remove("on"),this.eCombo.offsetWidth,this.eCombo.classList.add("on"))}flashDamage(){this.eDmg&&(this.eDmg.classList.remove("on"),this.eDmg.offsetWidth,this.eDmg.classList.add("on"))}project(t){let e=t.clone().project(this.app.camera);if(e.z>1)return null;let n=this.app.renderer.domElement.getBoundingClientRect(),i=(e.x+1)/2*n.width+n.left,s=(1-e.y)/2*n.height+n.top,o=this.root.getBoundingClientRect();return{x:(i-o.left)/this.scale,y:(s-o.top)/this.scale}}floatText(t,e,n){if(!this.hud||this.floats.length>30)return;let i=pe("div","float",e,this.hud);i.style.color=n,this.floats.push({e:i,v:t.clone(),t:0})}updateLabels(){let t=this.app.city;if(!this.labelEls.length)for(let n of t.labels)this.labelEls.push({L:n,e:pe("div","lm "+n.kind,n.text,this.labelLayer)});let e=this.g&&this.g.state!=="title";for(let{L:n,e:i}of this.labelEls){let o=e&&(n.kind!=="landmark"||GF.SETTINGS.showLandmarkLabels)?this.project(n.pos):null;if(!o||o.x<-100||o.x>2020||o.y<-50||o.y>1130){be(i.style,"display","none");continue}be(i.style,"display","block"),be(i.style,"left",Math.max(70,Math.min(this.BW-70,o.x))+"px"),be(i.style,"top",Math.max(40,o.y)+"px")}}update(t){this.updateLabels();let e=this.g;if(!this.hud||!e)return;let n=this.app.stage;be(this.eLives,"innerHTML",`<i class="shield"></i><span>\uAE30\uC9C0</span>${e.lives}/${n.lives}`),be(this.eMoney,"innerHTML",`<i class="box"></i><span>\uBCF4\uAE09</span>${Math.floor(e.money)}`),be(this.eWave,"innerHTML",`<span>\uC6E8\uC774\uBE0C</span>${Math.max(1,e.waveNo)}/${n.waves.length}`),be(this.eKills,"innerHTML",`\uACA9\uD30C <b>${e.kills}</b>${e.combo>=5?` <em>\uC5F0\uC1C4 ${e.combo}</em>`:""} \xB7 \uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}`),be(this.bSpeed,"innerHTML",`\u25B6\u25B6<small>${e.speed}x</small>`),be(this.bPause,"textContent",this.app.paused?"\u25B6":"\u275A\u275A"),be(this.ePaused.style,"display",this.app.paused?"block":"none"),this.cards.forEach(({id:f,c:d,n:p})=>{be(p,"textContent",GF.wname(f)),d.classList.toggle("sel",e.mode===f),d.classList.toggle("off",e.money<GF.WEAPONS[f].cost)});let i="",s="nextwave";e.state==="ready"?i="<b>\uC791\uC804 \uAC1C\uC2DC \u226B</b><small>\uCCAB \uC6E8\uC774\uBE0C \uCD9C\uACA9</small>":e.waveNo>=n.waves.length?(i=`<b>\uB9C8\uC9C0\uB9C9 \uC6E8\uC774\uBE0C</b><small>\uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}</small>`,s+=" busy"):e.queue.length?(i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>\uC801 \uCD9C\uD604 \uC911 \xB7 ${e.queue.length}</small>`,s+=" busy"):i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>${Math.ceil(e.nextT)}\uCD08 \uD6C4 \uC790\uB3D9 \xB7 \uC9C0\uAE08 \uB204\uB974\uBA74 +${Math.ceil(e.nextT)*3}</small>`,be(this.bNext,"innerHTML",i),be(this.bNext,"className",s),this.ops.forEach((f,d)=>{let p=e.hand[d],g=GF.CARDS[p],m=`<i>${"QWE"[d]}</i><b>${g.name}</b><span>${g.desc}</span><em>${g.cost}</em>`;be(f,"innerHTML",m),f.classList.toggle("off",e.cp<g.cost),f.classList.toggle("sel",e.cardSel===d)}),be(this.eNext,"textContent","\uB2E4\uC74C \uCE74\uB4DC: "+GF.CARDS[e.deck[0]].name);for(let{id:f,C:d,o:p}of this.strats){let g=e.strat[f],m=e.stratOpen(f),x=m?g.charges?`\uC0AC\uC6A9 \uAC00\uB2A5 ${g.charges}/${d.max}`:`\uC6E8\uC774\uBE0C ${e.stratNext(f)}\uC5D0 \uC7AC\uBCF4\uAE09`:`\uC2A4\uD14C\uC774\uC9C0 ${d.unlockStage}\uBD80\uD130`,v=`<i>${d.key}</i><b>${f==="nuke"?"\u2622 ":"\u{1F680} "}${d.name}</b><span>${x}</span>`;be(p,"innerHTML",v),p.classList.toggle("ready",m&&g.charges>0),p.classList.toggle("sel",e.mode==="strat"&&e.stratSel===f)}let o=e.cp<GF.SETTINGS.cpMax?e.cpT/GF.SETTINGS.cpEverySec:0;this.cpSegs.forEach((f,d)=>{be(f.firstChild.style,"width",(d<e.cp?100:d===e.cp?o*100:0)+"%")}),be(this.eCp,"textContent","CP "+e.cp+" / "+GF.SETTINGS.cpMax);let a=e.selected;if(be(this.panel.style,"display",a?"block":"none"),a){let f=e.stats(a),d=a.level>=GF.SETTINGS.maxTowerLevel,p=this.project(a.pos.clone().setY(.6))||{x:900,y:500};be(this.panel.style,"left",Math.max(20,Math.min(this.BW-420,p.x+60))+"px"),be(this.panel.style,"top",Math.max(this.L.mobile?60:110,Math.min(this.BH-(this.L.mobile?400:520),p.y-160))+"px"),be(this.panel.querySelector(".pt"),"textContent",GF.wname(a.type)+"  Lv."+a.level),be(this.panel.querySelector(".pi"),"innerHTML",`${a.W.nation} \xB7 ${a.W.role}<br>${this.upLine(e,a,f,d)}\uB204\uC801 \uD53C\uD574 <b>${P_(a.dmgTotal)}</b> \xB7 \uACA9\uD30C <b>${a.kills}</b><br><small>${a.W.desc}</small>`);let g=this.panel.querySelector(".up"),m=this.panel.querySelector(".all");be(g,"textContent",d?"\uCD5C\uB300 \uAC15\uD654 (Lv.4)":`\uAC15\uD654 Lv.${a.level+1}/4  (${e.upgradeCost(a)})`),g.disabled=d||e.money<e.upgradeCost(a);let x=e.bulkList(a.type).length,v=e.bulkCost(a.type);be(m,"textContent",x?`\uAC19\uC740 \uBB34\uAE30 ${x}\uB300 \uBAA8\uB450 \uAC15\uD654  (${v})`:"\uAC19\uC740 \uBB34\uAE30 \uBAA8\uB450 \uCD5C\uB300 \uAC15\uD654"),m.disabled=!x||e.money<v,be(this.panel.querySelector(".sell"),"textContent","\uD310\uB9E4 +"+Math.round(a.invested*GF.SETTINGS.sellRefund))}if(e.tip&&this.app.mouse){let f=this.app.mouse,d=this.root.getBoundingClientRect();be(this.eTip.style,"display","block"),be(this.eTip,"className","tip "+(e.tip.ok?"ok":"bad")),be(this.eTip,"textContent",(e.tip.ok?"\u2713 ":"\u2715 ")+e.tip.text),be(this.eTip.style,"left",(f.x-d.left)/this.scale+24+"px"),be(this.eTip.style,"top",(f.y-d.top)/this.scale+18+"px")}else be(this.eTip.style,"display","none");for(let f of this.floats){f.t+=t;let d=this.project(f.v);d&&(be(f.e.style,"left",d.x+"px"),be(f.e.style,"top",d.y-f.t*50+"px")),be(f.e.style,"opacity",1-f.t/.9),f.t>.9&&(f.e.remove(),f.done=!0)}this.floats=this.floats.filter(f=>!f.done);let l="",c=this.L.mobile,h=c?"\uD130\uCE58":"\uD074\uB9AD",u=c?"\uBC84\uD2BC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"ESC \uCDE8\uC18C";e.mode==="strat"?l=GF.STRATEGIC[e.stratSel].name+`: \uB5A8\uC5B4\uB728\uB9B4 \uACF3\uC744 ${h} \xB7 ${u}`:e.mode==="card"?l=GF.CARDS[e.hand[e.cardSel]].name+`: \uC9C0\uB3C4\uC5D0\uC11C \uC704\uCE58 ${h} \xB7 ${u}`:e.mode?l=GF.wname(e.mode)+` \uC124\uCE58: \uD68C\uC0C9 \uACF5\uAC04 \uC544\uBB34 \uACF3\uC774\uB098 ${h} \xB7 ${c?"\uCE74\uB4DC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"\uC624\uB978\uCABD \uD074\uB9AD/ESC \uCDE8\uC18C"}`:e.state==="ready"&&(l=this.L.mobile?"\uBB34\uAE30 \uCE74\uB4DC\uB97C \uB204\uB974\uACE0 \uD68C\uC0C9 \uACF5\uAC04\uC744 \uD130\uCE58\uD574 \uBC30\uCE58 \xB7 \uB450 \uC190\uAC00\uB77D \uBC8C\uB9AC\uAE30 \uD655\uB300\xB7\uBE44\uD2C0\uAE30 \uD68C\uC804 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30\uB85C \uC774\uB3D9":"\uC801\uC774 \uC624\uB294 \uB3C4\uC2EC \uAC70\uB9AC\xB7\uAC74\uBB3C\xB7\uB79C\uB4DC\uB9C8\uD06C\uB9CC \uBE7C\uACE0 \uD68C\uC0C9 \uACF5\uAC04 \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uC73C\uC138\uC694. \uAC70\uB9AC \uC0AC\uC774 \uD68C\uC0C9 \uACF5\uAC04\uC5D0 \uB193\uC73C\uBA74 \uC704\uC544\uB798 \uAC70\uB9AC\uB97C \uB3D9\uC2DC\uC5D0 \uACF5\uACA9\uD569\uB2C8\uB2E4 \xB7 \uD720: \uD655\uB300 \xB7 \uC624\uB978\uCABD \uBC84\uD2BC \uB04C\uAE30: \uC2DC\uC810 \uD68C\uC804 \xB7 R: \uAE30\uBCF8 \uC2DC\uC810"),be(this.eHint,"textContent",l)}upLine(t,e,n,i){let s=l=>Math.round(e.W.shot==="aura"?(e.W.airDps||0)*l.mul:l.dps),a=`\uAC15\uD654 ${[1,2,3,4].map(l=>`<span style="display:inline-block;width:18px;height:7px;margin-right:3px;border-radius:2px;background:${l<=e.level?"#f2c14e":"rgba(255,255,255,.18)"}"></span>`).join("")} Lv.${e.level}/4<br>DPS <b>${s(n)}</b> \xB7 \uC0AC\uAC70\uB9AC <b>${n.range.toFixed(1)}</b>`;if(!i){let l=t.statsAt(e,e.level+1);a+=` <span style="color:#7ff0a0">\u2192 DPS ${s(l)} \xB7 \uC0AC\uAC70\uB9AC ${l.range.toFixed(1)}</span>`}return a+"<br>"}refreshProfile(){let t=this.root;t.querySelectorAll(".pc-cred").forEach(e=>{e.textContent=Ei.credits.toLocaleString("ko-KR")}),t.querySelectorAll(".pb-name").forEach(e=>{e.textContent=Ei.name}),t.querySelectorAll(".pb-ava").forEach(e=>{e.textContent=Ei.name.slice(0,1)}),t.querySelectorAll(".pb-cred").forEach(e=>{e.textContent="\uBCF4\uAE09\uCC3D "+Ei.credits.toLocaleString("ko-KR")}),this.shopEl&&(this.shopEl.querySelector(".sh-cred").textContent=Ei.credits.toLocaleString("ko-KR"))}toastAny(t,e){if(this.hud&&this.eToast)this.toast(t,e);else{let n=pe("div","toast lobby",t,this.root);n.style.opacity=1,setTimeout(()=>n.remove(),1800)}}openShop(){if(this.shopEl)return;let t=this.g,e=t&&(t.state==="ready"||t.state==="battle");e&&!this.app.paused&&t.state==="battle"&&(this.app.togglePause(),this.shopPaused=!0);let n=this.shopEl=pe("div","shop","",this.root);n.innerHTML=`<div class="sh-box">
      <div class="sh-head"><b>\uBCF4\uAE09 \uC0C1\uC810</b><span>\uBCF4\uAE09\uCC3D <b class="sh-cred"></b></span><button class="sh-x">\u2715</button></div>
      <div class="sh-packs">${GF.SHOP.packs.map(i=>`<div class="pk" data-id="${i.id}">${i.tag?`<em>${i.tag}</em>`:""}<div class="pk-ico">\u{1F4E6}</div><b>\uBCF4\uAE09 ${i.amount.toLocaleString("ko-KR")}</b><small>${i.bonus?"\uBCF4\uB108\uC2A4 "+i.bonus:"\uAE30\uBCF8"}</small><button>${Mu(i.price)}</button></div>`).join("")}</div>
      ${e?`<div class="sh-wd"><span>\uBCF4\uAE09\uCC3D \u2192 \uC774\uBC88 \uC804\uD22C \uBCF4\uAE09\uC73C\uB85C \uAEBC\uB0B4\uAE30</span>${GF.SHOP.withdrawSteps.map(i=>`<button data-n="${i}">+${i.toLocaleString("ko-KR")}</button>`).join("")}</div>`:""}
      <div class="sh-note">${GF.SHOP.testMode?"\u26A0 \uD14C\uC2A4\uD2B8 \uBAA8\uB4DC: \uC2E4\uC81C \uACB0\uC81C\uB294 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uACE0 \uBCF4\uAE09\uC774 \uBC14\uB85C \uC9C0\uAE09\uB429\uB2C8\uB2E4. \uCD9C\uC2DC \uB54C Google Play\xB7Steam \uACB0\uC81C\uB85C \uC5F0\uACB0\uD569\uB2C8\uB2E4.":"\uACB0\uC81C\uB294 \uC2A4\uD1A0\uC5B4 \uACC4\uC815\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4."}</div>
    </div>`,n.querySelector(".sh-x").onclick=()=>this.closeShop(),n.onclick=i=>{i.target===n&&this.closeShop()},n.querySelectorAll(".pk button").forEach(i=>{i.onclick=()=>{let s=GF.SHOP.packs.find(o=>o.id===i.parentElement.dataset.id);GF.SHOP.testMode&&(Ei.addCredits(s.amount,Mu(s.price)+" \uCDA9\uC804(\uD14C\uC2A4\uD2B8)"),this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),i.textContent="\uCDA9\uC804 \uC644\uB8CC \u2713",setTimeout(()=>{i.textContent=Mu(s.price)},900))}}),n.querySelectorAll(".sh-wd button").forEach(i=>{i.onclick=()=>{let s=+i.dataset.n;if(!Ei.spend(s)){i.textContent="\uBCF4\uAE09\uCC3D \uBD80\uC871",setTimeout(()=>{i.textContent="+"+s.toLocaleString("ko-KR")},900);return}t.money+=s,this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),this.toast(`\uBCF4\uAE09\uCC3D\uC5D0\uC11C \uBCF4\uAE09 +${s} \uD22C\uC785`,"#F2C14E")}}),this.refreshProfile()}closeShop(){this.shopEl&&(this.shopEl.remove(),this.shopEl=null,this.shopPaused&&(this.shopPaused=!1,this.app.paused&&this.app.togglePause()))}fullscreen(){let t=document.documentElement;if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let n=t.requestFullscreen||t.webkitRequestFullscreen;if(!n){this.toastAny("\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC804\uCCB4 \uD654\uBA74\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544\uC694. \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uB85C \uC5F4\uC5B4 \uC8FC\uC138\uC694");return}Promise.resolve(n.call(t,{navigationUI:"hide"})).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}whiteFlash(){let t=pe("div","wflash","",this.root);setTimeout(()=>t.classList.add("go"),30),setTimeout(()=>t.remove(),2600)}showResult(t,e){let n=this.g,i=this.result=pe("div","result",`
      <div class="box ${t?"win":"lose"}">
        <h2>${t?this.cityName()+" \uBC29\uC5B4 \uC131\uACF5":"\uBC29\uC5B4\uC120 \uBD95\uAD34"}</h2>
        <div class="stars">${t?"\u2605".repeat(e)+"\u2606".repeat(3-e):""}</div>
        <p>\uACA9\uD30C ${n.kills} \xB7 \uCD5C\uB300 \uC5F0\uC1C4 ${Math.max(n.bestCombo,n.combo)} \xB7 \uC6E8\uC774\uBE0C ${n.waveNo}/${this.app.stage.waves.length} \xB7 \uB0A8\uC740 \uAE30\uC9C0 ${n.lives}</p>
        <p class="s">${t?"\uBCF4\uAE09 \uC0C1\uC790 \uD68D\uB4DD! (\uC0C1\uC790 \uC5F4\uAE30\uB294 \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uCD94\uAC00\uB429\uB2C8\uB2E4)":"\uAD7D\uC774 \uC0AC\uC774 \uACF5\uC6D0\uC5D0 \uBB34\uAE30\uB97C \uBAA8\uC73C\uACE0, \uC6B0\uD68C\uB85C\uB97C \uC5F4\uC5B4 \uC801\uC744 \uB354 \uC624\uB798 \uBD99\uC7A1\uC544 \uBCF4\uC138\uC694"}</p>
        <div class="row"><button class="again">\uB2E4\uC2DC \uD558\uAE30</button><button class="home">\uCC98\uC74C \uD654\uBA74</button></div>
      </div>`,this.root);i.querySelector(".again").onclick=()=>{i.remove(),this.result=null,this.app.startGame()},i.querySelector(".home").onclick=()=>{i.remove(),this.result=null,this.app.toTitle()}}clearResult(){this.result&&(this.result.remove(),this.result=null)}clearHud(){this.hud&&(this.hud.remove(),this.hud=null,this.floats=[])}},P_=r=>r>=1e4?(r/1e3).toFixed(1)+"k":String(Math.round(r));var vh=class{constructor(){this.ctx=null,this.last={},this.musicOn=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.bgm=e.createGain(),this.bgm.connect(this.master);let n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let o=0;o<n;o++)s[o]=Math.random()*2-1;this.noise=i,this.apply()}apply(){if(!this.ctx)return;let t=GF.SETTINGS;this.sfx.gain.value=t.sound?t.sfxVolume:0,this.bgm.gain.value=t.music?t.musicVolume:0,t.music&&!this.musicOn&&this.startMusic()}env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+s)}noiseHit(t,{dur:e=.2,f:n=1200,q:i=.8,type:s="lowpass",vol:o=.5,fEnd:a,out:l=this.sfx}){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noise;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(n,t),u.Q.value=i,a&&u.frequency.exponentialRampToValueAtTime(a,t+e);let f=c.createGain();this.env(f,t,.004,o,e),h.connect(u),u.connect(f),f.connect(l),h.start(t,Math.random()*1,e+.05)}tone(t,{f:e=440,fEnd:n,dur:i=.2,type:s="sine",vol:o=.3,a=.005,out:l=this.sfx}){let c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(e,t),n&&h.frequency.exponentialRampToValueAtTime(n,t+i);let u=c.createGain();this.env(u,t,a,o,i),h.connect(u),u.connect(l),h.start(t),h.stop(t+a+i+.05)}play(t,e=1){if(!this.ctx||!GF.SETTINGS.sound)return;let n=this.ctx,i=n.currentTime,s={bullet:.07,cannon:.09,shell:.12,missile:.15,intercept:.08,rockets:.2,boom:.06,bigboom:.15,kill:.05,hit:.05};if(i-(this.last[t]||-9)<(s[t]||.03))return;this.last[t]=i;let o=e;switch(t){case"bullet":for(let a=0;a<3;a++)this.noiseHit(i+a*.045,{dur:.05,f:3200,type:"bandpass",q:1.2,vol:.22*o});break;case"cannon":this.noiseHit(i,{dur:.35,f:900,fEnd:120,vol:.55*o}),this.tone(i,{f:110,fEnd:45,dur:.3,vol:.4*o});break;case"shell":this.noiseHit(i,{dur:.6,f:500,fEnd:80,vol:.6*o}),this.tone(i,{f:70,fEnd:35,dur:.5,vol:.5*o});break;case"missile":this.noiseHit(i,{dur:.7,f:600,fEnd:3500,type:"bandpass",q:2,vol:.35*o});break;case"rockets":for(let a=0;a<6;a++)this.noiseHit(i+a*.09,{dur:.35,f:700,fEnd:2600,type:"bandpass",q:1.5,vol:.22*o});break;case"intercept":this.tone(i,{f:1400,fEnd:500,dur:.18,type:"triangle",vol:.14*o}),this.noiseHit(i,{dur:.25,f:2500,type:"bandpass",q:3,vol:.15*o});break;case"cruise":this.tone(i,{f:80,fEnd:40,dur:.6,vol:.5*o}),this.noiseHit(i,{dur:1.4,f:300,fEnd:2500,type:"bandpass",q:.8,vol:.5*o});break;case"nuke":this.tone(i,{f:50,fEnd:22,dur:3.5,vol:.9*o,a:.02}),this.noiseHit(i,{dur:3.2,f:2500,fEnd:50,vol:.9*o}),this.noiseHit(i+.4,{dur:2.8,f:400,fEnd:60,vol:.6*o});break;case"siren":this.tone(i,{f:500,fEnd:900,dur:.6,type:"sawtooth",vol:.1*o,a:.05}),this.tone(i+.65,{f:900,fEnd:500,dur:.6,type:"sawtooth",vol:.1*o,a:.05});break;case"javelin":this.noiseHit(i,{dur:.4,f:400,fEnd:2e3,type:"bandpass",q:1.5,vol:.4*o}),this.tone(i,{f:220,fEnd:90,dur:.15,vol:.2*o});break;case"boom":this.noiseHit(i,{dur:.45,f:1400,fEnd:150,vol:.4*o});break;case"bigboom":this.noiseHit(i,{dur:1.1,f:900,fEnd:60,vol:.75*o}),this.tone(i,{f:60,fEnd:28,dur:.9,vol:.6*o});break;case"airstrike":this.noiseHit(i,{dur:1.2,f:300,fEnd:4e3,type:"bandpass",q:.7,vol:.4*o});for(let a=0;a<5;a++)this.noiseHit(i+.9+a*.13,{dur:.8,f:800,fEnd:70,vol:.6*o});break;case"emp":this.tone(i,{f:90,fEnd:1800,dur:.5,type:"sawtooth",vol:.18*o}),this.tone(i+.1,{f:1800,fEnd:60,dur:.6,type:"square",vol:.08*o});break;case"place":this.noiseHit(i,{dur:.06,f:2500,type:"bandpass",q:2,vol:.4*o}),this.tone(i+.07,{f:180,fEnd:120,dur:.12,type:"square",vol:.12*o});break;case"upgrade":[523,659,784,1046].forEach((a,l)=>this.tone(i+l*.06,{f:a,dur:.18,type:"triangle",vol:.18*o}));break;case"sell":[784,523].forEach((a,l)=>this.tone(i+l*.08,{f:a,dur:.15,type:"triangle",vol:.15*o}));break;case"coin":this.tone(i,{f:1318,dur:.08,type:"square",vol:.06*o}),this.tone(i+.06,{f:1760,dur:.12,type:"square",vol:.06*o});break;case"click":this.tone(i,{f:900,dur:.04,type:"square",vol:.06*o});break;case"deny":this.tone(i,{f:180,dur:.15,type:"square",vol:.08*o});break;case"wave":[0,.35].forEach(a=>{this.tone(i+a,{f:392,dur:.25,type:"sawtooth",vol:.12*o,a:.02}),this.tone(i+a+.12,{f:523,dur:.22,type:"sawtooth",vol:.12*o,a:.02})});break;case"leak":for(let a=0;a<2;a++)this.tone(i+a*.22,{f:880,fEnd:660,dur:.18,type:"square",vol:.12*o});break;case"combo":[659,784,988,1318].forEach((a,l)=>this.tone(i+l*.05,{f:a,dur:.14,type:"square",vol:.07*o}));break;case"win":[523,659,784,1046,784,1046].forEach((a,l)=>this.tone(i+l*.16,{f:a,dur:.3,type:"triangle",vol:.2*o}));break;case"lose":[392,349,311,262].forEach((a,l)=>this.tone(i+l*.28,{f:a,dur:.4,type:"sawtooth",vol:.12*o}));break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx,e=96,n=60/e;[55,82.4,110].forEach((l,c)=>{let h=t.createOscillator();h.type=c?"triangle":"sawtooth",h.frequency.value=l;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=260;let f=t.createGain();f.gain.value=c?.05:.04;let d=t.createOscillator();d.frequency.value=.07+c*.03;let p=t.createGain();p.gain.value=.025,d.connect(p),p.connect(f.gain),d.start(),h.connect(u),u.connect(f),f.connect(this.bgm),h.start()});let i="K.s.K.ssK.s.KKs.",s=t.currentTime+.1,o=0,a=()=>{for(;s<t.currentTime+.6;){let l=i[o%i.length];l==="K"&&this.tone(s,{f:120,fEnd:45,dur:.22,vol:.35,out:this.bgm}),l==="s"&&this.noiseHit(s,{dur:.09,f:1800,type:"bandpass",q:.9,vol:.12,out:this.bgm}),s+=n/2,o++}};this.musicTimer=setInterval(a,150)}};var La=class r extends lt{constructor(){let t=r.SkyShader,e=new Re({name:t.name,uniforms:An.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:un,depthWrite:!1});super(new j(1,1,1),e),this.isSky=!0}};La.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var qi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},I_=new Bi(-1,1,1,-1,0,1),bu=class extends ve{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},D_=new bu,Yi=class{constructor(t){this._mesh=new lt(D_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,I_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var or=class extends Gn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=An.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends Gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},yh=class extends Gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _h=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new or(qi),this.copyPass.material.blending=fn,this.timer=new Ko}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(o instanceof Na?n=!0:o instanceof yh&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sh=class extends Gn{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var em={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var lo=class r extends Gn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new Xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(s,o,{type:ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Xe(s,o,{type:ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Xe(s,o,{type:ln,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=em;this.highPassUniforms=An.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new J(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=An.clone(qi.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:qi.vertexShader,fragmentShader:qi.fragmentShader,premultipliedAlpha:!0,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xt,this._oldClearAlpha=1,this._basic=new Ie,this._fsQuad=new Yi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new J(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),s.push(c)}return new Re({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};lo.BlurDirectionX=new J(1,0);lo.BlurDirectionY=new J(0,1);var Ua={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new J},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $t},cameraProjectionMatrixInverse:{value:new $t},cameraWorldMatrix:{value:new $t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Fa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Mh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function nm(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=L_(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let s=new ns(i,t,t);return s.wrapS=de,s.wrapT=de,s.needsUpdate=!0,s}function L_(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=o++;s++,i--}return n}var Ba={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Eu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new J},cameraProjectionMatrixInverse:{value:new $t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Eu(r,t,e){let n=N_(r,t,e),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function N_(r,t,e){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*t*i/r,o=Math.pow(i/(r-1),e);n.push(new I(Math.cos(s),Math.sin(s),o))}return n}var bh=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=t-f,g=e-d,m,x;p>g?(m=1,x=0):(m=0,x=1);let v=p-m+h,_=g-x+h,y=p-1+2*h,M=g-1+2*h,b=l&255,w=c&255,S=this.perm[b+this.perm[w]]%12,T=this.perm[b+m+this.perm[w+x]]%12,A=this.perm[b+1+this.perm[w+1]]%12,C=.5-p*p-g*g;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[S],p,g));let D=.5-v*v-_*_;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[T],v,_));let N=.5-y*y-M*M;return N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[A],y,M)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,p=(h+u+f)*d,g=h-p,m=u-p,x=f-p,v=t-g,_=e-m,y=n-x,M,b,w,S,T,A;v>=_?_>=y?(M=1,b=0,w=0,S=1,T=1,A=0):v>=y?(M=1,b=0,w=0,S=1,T=0,A=1):(M=0,b=0,w=1,S=1,T=0,A=1):_<y?(M=0,b=0,w=1,S=0,T=1,A=1):v<y?(M=0,b=1,w=0,S=0,T=1,A=1):(M=0,b=1,w=0,S=1,T=1,A=0);let C=v-M+d,D=_-b+d,N=y-w+d,L=v-S+2*d,B=_-T+2*d,G=y-A+2*d,q=v-1+3*d,rt=_-1+3*d,X=y-1+3*d,Q=h&255,tt=u&255,Ft=f&255,Nt=this.perm[Q+this.perm[tt+this.perm[Ft]]]%12,Ee=this.perm[Q+M+this.perm[tt+b+this.perm[Ft+w]]]%12,fe=this.perm[Q+S+this.perm[tt+T+this.perm[Ft+A]]]%12,ye=this.perm[Q+1+this.perm[tt+1+this.perm[Ft+1]]]%12,$=.6-v*v-_*_-y*y;$<0?i=0:($*=$,i=$*$*this._dot3(this.grad3[Nt],v,_,y));let et=.6-C*C-D*D-N*N;et<0?s=0:(et*=et,s=et*et*this._dot3(this.grad3[Ee],C,D,N));let vt=.6-L*L-B*B-G*G;vt<0?o=0:(vt*=vt,o=vt*vt*this._dot3(this.grad3[fe],L,B,G));let Jt=.6-q*q-rt*rt-X*X;return Jt<0?a=0:(Jt*=Jt,a=Jt*Jt*this._dot3(this.grad3[ye],q,rt,X)),32*(i+s+o+a)}noise4d(t,e,n,i){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,g=(t+e+n+i)*l,m=Math.floor(t+g),x=Math.floor(e+g),v=Math.floor(n+g),_=Math.floor(i+g),y=(m+x+v+_)*c,M=m-y,b=x-y,w=v-y,S=_-y,T=t-M,A=e-b,C=n-w,D=i-S,N=T>A?32:0,L=T>C?16:0,B=A>C?8:0,G=T>D?4:0,q=A>D?2:0,rt=C>D?1:0,X=N+L+B+G+q+rt,Q=o[X][0]>=3?1:0,tt=o[X][1]>=3?1:0,Ft=o[X][2]>=3?1:0,Nt=o[X][3]>=3?1:0,Ee=o[X][0]>=2?1:0,fe=o[X][1]>=2?1:0,ye=o[X][2]>=2?1:0,$=o[X][3]>=2?1:0,et=o[X][0]>=1?1:0,vt=o[X][1]>=1?1:0,Jt=o[X][2]>=1?1:0,It=o[X][3]>=1?1:0,ne=T-Q+c,Ce=A-tt+c,it=C-Ft+c,ct=D-Nt+c,ft=T-Ee+2*c,pt=A-fe+2*c,xt=C-ye+2*c,te=D-$+2*c,Kt=T-et+3*c,ie=A-vt+3*c,oe=C-Jt+3*c,F=D-It+3*c,Ae=T-1+4*c,me=A-1+4*c,P=C-1+4*c,E=D-1+4*c,H=m&255,k=x&255,Z=v&255,mt=_&255,yt=a[H+a[k+a[Z+a[mt]]]]%32,K=a[H+Q+a[k+tt+a[Z+Ft+a[mt+Nt]]]]%32,st=a[H+Ee+a[k+fe+a[Z+ye+a[mt+$]]]]%32,Mt=a[H+et+a[k+vt+a[Z+Jt+a[mt+It]]]]%32,qt=a[H+1+a[k+1+a[Z+1+a[mt+1]]]]%32,St=.6-T*T-A*A-C*C-D*D;St<0?h=0:(St*=St,h=St*St*this._dot4(s[yt],T,A,C,D));let _t=.6-ne*ne-Ce*Ce-it*it-ct*ct;_t<0?u=0:(_t*=_t,u=_t*_t*this._dot4(s[K],ne,Ce,it,ct));let zt=.6-ft*ft-pt*pt-xt*xt-te*te;zt<0?f=0:(zt*=zt,f=zt*zt*this._dot4(s[st],ft,pt,xt,te));let jt=.6-Kt*Kt-ie*ie-oe*oe-F*F;jt<0?d=0:(jt*=jt,d=jt*jt*this._dot4(s[Mt],Kt,ie,oe,F));let ae=.6-Ae*Ae-me*me-P*P-E*E;return ae<0?p=0:(ae*=ae,p=ae*ae*this._dot4(s[qt],Ae,me,P,E)),27*(h+u+f+d+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}};var Oa=class r extends Gn{constructor(t,e,n=512,i=512,s,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=nm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xe(this.width,this.height,{type:ln,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Re({defines:Object.assign({},Ua.defines),uniforms:An.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xo,this.normalMaterial.blending=fn,this.pdMaterial=new Re({defines:Object.assign({},Ba.defines),uniforms:An.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Re({defines:Object.assign({},Fa.defines),uniforms:An.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,blending:fn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Re({uniforms:An.clone(qi.uniforms),vertexShader:qi.vertexShader,fragmentShader:qi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qo,blendDst:Zs,blendEquation:ei,blendSrcAlpha:jo,blendDstAlpha:Zs,blendEquationAlpha:ei}),this.blendMaterial=new Re({uniforms:An.clone(Mh.uniforms),vertexShader:Mh.vertexShader,fragmentShader:Mh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jl,blendSrc:Qo,blendDst:Zs,blendEquation:ei,blendSrcAlpha:jo,blendDstAlpha:Zs,blendEquationAlpha:ei}),this._fsQuad=new Yi(null),this._originalClearColor=new Xt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ui,this.depthTexture.format=zi,this.depthTexture.type=Cs,this.normalRenderTarget=new Xe(this.width,this.height,{minFilter:hn,magFilter:hn,type:ln,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Eu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new bh,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new ns(i,t,t,Xn,Un);return s.wrapS=de,s.wrapT=de,s.needsUpdate=!0,s}};Oa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Eh=class extends Gn{constructor(){super(),this.isOutputPass=!0,this.uniforms=An.clone(za.uniforms),this.material=new Gr({name:za.name,uniforms:this.uniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},_e.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ta?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===na?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ia&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var im={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

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

		}`};var U_={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},saturation:{value:.86},shadowTint:{value:new I(.94,.98,1.06)},lightTint:{value:new I(1.04,1,.95)},vignette:{value:.28},aspect:{value:16/9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function F_(){let r=GF.SETTINGS.graphics;return r&&r!=="auto"?r:matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1?"medium":"high"}var Th=class{constructor(t,e,n,i){this.r=t,this.scene=e,this.camera=n,this.sun=i,this.haze=new Xt(12569555),e.background=this.haze.clone(),e.fog=new Gs(this.haze,120,320),this.makeEnvironment(),this.setQuality(F_())}makeEnvironment(){let t=new La;t.scale.setScalar(1e3);let e=t.material.uniforms;e.turbidity.value=7,e.rayleigh.value=1.4,e.mieCoefficient.value=.006,e.mieDirectionalG.value=.82,e.cloudCoverage&&(e.cloudCoverage.value=0),e.sunPosition.value.copy(this.sun.position).normalize();let n=new Di;n.add(t);let i=new Jr(this.r);this.env=i.fromScene(n,.03).texture,i.dispose(),t.geometry.dispose(),t.material.dispose(),this.scene.environment=this.env,this.scene.environmentIntensity=GF.SETTINGS.envLight??.12}setQuality(t){this.q=t,this.composer&&(this.composer.dispose(),this.composer=null);let e=this.r;e.setPixelRatio(Math.min(window.devicePixelRatio,{ultra:2,high:1.5,medium:1.25,low:1}[t]||1));let n={ultra:4096,high:4096,medium:2048,low:1024}[t]||2048;if(this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),t==="low")return;let i=e.getDrawingBufferSize(new J),s=t==="ultra"?4:t==="high"?2:0,o=new Xe(i.x,i.y,{type:ln,samples:s}),a=this.composer=new _h(e,o);if(a.addPass(new Sh(this.scene,this.camera)),t==="ultra"){let l=this.ao=new Oa(this.scene,this.camera,i.x,i.y);l.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),l.blendIntensity=.85,a.addPass(l)}else this.ao=null;this.bloom=new lo(new J(i.x/2,i.y/2),.38,.45,.96),a.addPass(this.bloom),a.addPass(new Eh),this.grade=new or(U_),a.addPass(this.grade),s?this.fxaa=null:(this.fxaa=new or(im),a.addPass(this.fxaa)),this.resize()}resize(){let t=this.r,e=t.getSize(new J);if(!this.composer)return;this.composer.setPixelRatio(t.getPixelRatio()),this.composer.setSize(e.x,e.y);let n=t.getPixelRatio();this.fxaa&&this.fxaa.material.uniforms.resolution.value.set(1/(e.x*n),1/(e.y*n)),this.grade.uniforms.aspect.value=e.x/e.y}update(t){this.scene.fog.near=t*1.05,this.scene.fog.far=t*3.4}render(){this.composer?this.composer.render():this.r.render(this.scene,this.camera)}};var wh=class{constructor(t,e){this.app=t;let n=new $t().fromArray(e.projView),i=new Yo().load(e.image,()=>{this.ready=!0,t.city.group.visible=!1});i.colorSpace=we,i.anisotropy=8,i.wrapS=i.wrapT=Vn,i.generateMipmaps=!0,i.minFilter=Oi,this.mat=new Re({uniforms:{map:{value:i},projView:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D map; uniform mat4 projView; varying vec3 vW;
        void main(){ vec4 c = projView * vec4(vW, 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;
          gl_FragColor = texture2D(map, clamp(uv, 0.001, 0.999));
          #include <colorspace_fragment>
        }`,depthWrite:!0,toneMapped:!1});let s=new le(400,400);s.rotateX(-Math.PI/2),this.mesh=new lt(s,this.mat),this.mesh.position.y=-.01,this.mesh.renderOrder=-1,t.scene.add(this.mesh)}};function sm(r,t=3840,e=2160){let n=r.renderer,i=r.camera.clone();i.aspect=16/9,i.updateProjectionMatrix();let s=r.fit,o=Math.cos(r.EL)*s.d;i.position.set(s.t.x+Math.sin(r.AZ)*o,s.t.y+Math.sin(r.EL)*s.d,s.t.z+Math.cos(r.AZ)*o),i.lookAt(s.t),i.updateMatrixWorld(!0);let a=[];for(let m of[r.game.unitGroup,r.game.fxGroup,r.game.rangeDisc,r.city.chev].filter(Boolean))m.visible&&(m.visible=!1,a.push(m));let l=new Xe(t,e,{samples:4}),c=n.getSize(new J),h=n.getPixelRatio();n.setRenderTarget(l),n.render(r.scene,i);let u=new Uint8Array(t*e*4);n.readRenderTargetPixels(l,0,0,t,e,u),n.setRenderTarget(null),l.dispose(),n.setPixelRatio(h),n.setSize(c.x,c.y),a.forEach(m=>{m.visible=!0});let f=document.createElement("canvas");f.width=t,f.height=e;let d=f.getContext("2d"),p=d.createImageData(t,e);for(let m=0;m<e;m++)p.data.set(u.subarray((e-1-m)*t*4,(e-m)*t*4),m*t*4);d.putImageData(p,0,0);let g=new $t().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).toArray();return{png:f.toDataURL("image/png"),projView:g}}var wn=(r=0,t=0,e=0)=>new I(r,t,e),ee=(r,t)=>r+Math.random()*(t-r);function B_(){let r=new Re({side:un,depthWrite:!1,fog:!1,uniforms:{sun:{value:wn(-.35,.06,-1).normalize()}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 sun; varying vec3 vD;
      void main(){
        float h = clamp(vD.y, -0.1, 1.0);
        vec3 top = vec3(0.10, 0.09, 0.13), mid = vec3(0.55, 0.24, 0.12), hor = vec3(1.0, 0.55, 0.24);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.18, h)); c = mix(c, top, smoothstep(0.15, 0.6, h));
        float s = max(dot(vD, sun), 0.0);
        c += vec3(1.0, 0.6, 0.3) * pow(s, 60.0) * 2.5 + vec3(1.0, 0.45, 0.2) * pow(s, 6.0) * 0.45;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`});return new lt(new ce(400,32,16),r)}function O_(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.fillStyle="#2e2a25",e.fillRect(0,0,512,512);for(let i=0;i<9e3;i++){let s=30+Math.random()*50;e.fillStyle=`rgba(${s+10},${s},${s-8},${Math.random()*.5})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*4,1+Math.random()*3)}for(let i=0;i<30;i++){let s=Math.random()*512,o=Math.random()*512,a=10+Math.random()*40,l=e.createRadialGradient(s,o,0,s,o,a);l.addColorStop(0,"rgba(12,10,8,0.6)"),l.addColorStop(1,"rgba(12,10,8,0)"),e.fillStyle=l,e.fillRect(s-a,o-a,a*2,a*2)}let n=new qe(t);return n.wrapS=n.wrapT=de,n.repeat.set(42,42),n.colorSpace=we,n.anisotropy=8,n}var Rh=class{constructor(t){this.r=t;let e=this.scene=new Di;e.fog=new Gs(5911588,40,420),e.add(B_()),this.cam=new vn(38,16/9,.1,900);let n=new ss(16752736,2.6);n.position.set(-30,8,-80),e.add(n),e.add(new Es(6969968,2760214,.9));let i=new ss(16763034,.7);i.position.set(20,15,30),e.add(i),this.fireL=[];for(let[p,g]of[[2,-14],[-6,-26],[10,-30]]){let m=new qs(16742954,30,22,1.5);m.position.set(p,1.5,g),e.add(m),this.fireL.push(m)}let s=new lt(new le(1200,1200),new ht({map:O_(),roughness:1}));s.rotation.x=-Math.PI/2,e.add(s);let o=new yn(new No(.5,0),new ht({color:6971994,roughness:1,flatShading:!0}),260),a=new $t,l=new rn,c=new mi;for(let p=0;p<260;p++){let g=p<120?ee(-30,30):ee(-4,30),m=p<120?ee(-40,10):ee(-6,14),x=ee(.1,p%12===0?.8:.35);l.setFromEuler(c.set(ee(0,3),ee(0,3),ee(0,3))),a.compose(wn(g,x*.2,m),l,wn(x*ee(.8,1.6),x*ee(.5,1),x)),o.setMatrixAt(p,a)}e.add(o);let h=[0,1,2].map(p=>{let g=ir(p);return new ht({map:g.map,emissiveMap:g.emissiveMap,emissive:16777215,emissiveIntensity:1.2,color:4867664,roughness:.5,metalness:.3})}),u=new ht({color:1972768,roughness:.9});this.burnPts=[];for(let p=0;p<120;p++){let g=ee(-260,240),m=ee(-340,-170),x=ee(8,20),v=ee(8,16),_=ee(16,80),y=new j(x,_,v);y.translate(0,_/2,0);let M=y.attributes.uv;for(let w=0;w<M.count;w++)M.setXY(w,M.getX(w)*x/6,M.getY(w)*_/6);let b=new lt(y,Math.random()<.75?h[p%3]:u);b.position.set(g,0,m),b.rotation.y=ee(-.3,.3),e.add(b),Math.random()<.12&&this.burnPts.length<8&&this.burnPts.push(wn(g,_*ee(.4,1),m+v/2)),Math.random()<.12&&(b.rotation.z=ee(-.12,.12))}let f=(p,g,m,x,v=1)=>(p.root.position.set(g,0,m),p.root.rotation.y=x,p.root.scale.setScalar(v),e.add(p.root),p);this.k9=f(Xi("k9"),9,3,-2.6,2.6),this.mgs=f(Xi("type16"),.5,-2.5,-2.75,2.4),this.pat=f(Xi("patriot"),17,-5,-2.3,2.4),this.gun=f(Xi("browning"),5,7.5,-2.9,2.6);for(let p of[this.k9,this.mgs,this.pat,this.gun])p.pitch&&(p.pitch.rotation.x=-.12);this.enemies=[];for(let p=0;p<7;p++){let g=f(so(p%3?"apc":"tank"),-12+p*3.4+ee(-1,1),-20-p*3.6,.35+ee(-.1,.1),2.3);g.base=g.root.position.clone(),this.enemies.push(g)}this.helis=[];for(let p=0;p<3;p++){let g=f(so("heli"),-18+p*13,-30-p*8,.4,2.2);g.root.position.y=0,g.body&&(g.body.position.y=3+p*1.2),g.ph=Math.random()*6,this.helis.push(g)}this.spins=[];for(let p of[...this.enemies,...this.helis,this.k9,this.mgs,this.pat,this.gun])p.spin&&this.spins.push(...p.spin);this.wrecks=[wn(-5,.3,-10),wn(6,.3,-15),wn(-12,.3,-16),wn(12,.3,-22),wn(20,.3,-12)];let d=new ht({color:1315344,roughness:1});for(let p of this.wrecks){let g=so("tank");g.root.traverse(m=>{m.isMesh&&(m.material=d)}),g.root.position.copy(p).setY(0),g.root.rotation.set(ee(-.08,.08),ee(0,6),ee(-.12,.12)),g.root.scale.setScalar(2.2),e.add(g.root)}this.vfx=new ao(e,1);for(let p=0;p<26;p++)this.vfx.decals.push({x:ee(-25,25),z:ee(-30,10),s:ee(2,6),r:ee(0,6),t:0,life:1e9});this.t=0,this.next={boom:.5,shell:1.2,missile:2.5,tracer:0};for(let p=0;p<300;p++)this.update(1/30,!0)}resize(t,e){this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t,e=!1){this.t+=t;let n=this.t,i=this.vfx,s=Math.sin(n*.05)*.12;this.cam.position.set(19+Math.sin(s)*4,2.2+Math.sin(n*.13)*.15,15+s*3),this.cam.lookAt(1,4.2,-18);for(let[a,l,c]of this.spins)a.rotation[l]+=c*t;for(let a of this.enemies)a.root.position.z=a.base.z+n*.6%6;for(let a of this.helis)a.root.position.x+=Math.sin(n*.3+a.ph)*t*.8,a.body&&(a.body.position.y+=Math.sin(n*.8+a.ph)*t*.3);for(let a of this.wrecks)i.burn(a,2.4,t,1.4);for(let a of this.burnPts)Math.random()<t*9&&i.emit(i.smoke,{x:a.x+ee(-1,1),y:a.y,z:a.z,v:[ee(1.5,3),ee(5,8),ee(-.3,.3)],life:ee(9,13),s0:3,s1:ee(30,45),c0:[.03,.025,.02],c1:[.07,.06,.055],c2:[.13,.11,.1],a:.85,tile:0,drag:.3,fin:.05,rv:ee(-.2,.2)}),Math.random()<t*8&&i.emit(i.glow,{x:a.x+ee(-1.5,1.5),y:a.y,z:a.z,v:[0,ee(1,2.5),0],life:ee(.5,.9),s0:ee(2,3.5),s1:1,c0:[2,1.1,.4],c1:[1.2,.35,.08],tile:1,a:.8});if(Math.random()<t*25&&i.emit(i.glow,{x:ee(-15,20),y:ee(0,3),z:ee(-20,8),v:[ee(.2,.8),ee(.4,1.2),ee(-.2,.2)],life:ee(2,4),s0:.06,s1:.03,c0:[2.2,1.2,.4],c1:[1.4,.4,.1],tile:2,drag:.2,fout:.5}),e){i.update(t);return}let o=this.next;if(n>o.boom){let a=this.enemies[Math.floor(Math.random()*this.enemies.length)],l=a.root.position;i.explosion(wn(l.x+ee(-3,3),.4,l.z+ee(-2,2)),ee(1.6,3.2),{}),o.boom=n+ee(.7,1.8)}if(n>o.shell){for(let a of[this.k9,this.mgs])if(a.muzzle&&Math.random()<.7){a.root.updateMatrixWorld(!0);let l=a.muzzle.getWorldPosition(wn());i.muzzle(l,wn(-.5,.2,-1).normalize(),!0)}o.shell=n+ee(1.6,2.8)}if(n>o.missile&&this.pat.muzzle){this.pat.root.updateMatrixWorld(!0);let a=this.pat.muzzle.getWorldPosition(wn()),l=this.helis[Math.floor(Math.random()*this.helis.length)];l.root.updateMatrixWorld(!0);let c=(l.body||l.root).getWorldPosition(wn());this.missiles=this.missiles||[],this.missiles.push({p:a.clone(),prev:a.clone(),from:a,to:c,k:0}),i.muzzle(a,wn(0,1,0),!0),o.missile=n+ee(2.5,4.5)}if(n>o.tracer&&this.gun.muzzle){this.gun.root.updateMatrixWorld(!0);let a=this.gun.muzzle.getWorldPosition(wn()),l=this.helis[0],c=(l.body||l.root).getWorldPosition(wn()).add(wn(ee(-2,2),ee(-1,1),ee(-2,2)));i.tracer(a,c,16762992),i.muzzle(a,c.clone().sub(a).normalize(),!1),o.tracer=n+(Math.sin(n*.7)>0?.09:.6)}for(let a of this.missiles||[])a.k+=t*.6,a.prev.copy(a.p),a.p.lerpVectors(a.from,a.to,a.k),a.p.y+=Math.sin(a.k*Math.PI)*6,i.trail(a.p,a.prev,!0,t),a.k>=1&&(i.explosion(a.to.clone(),1.8,{air:!0}),a.done=!0);this.missiles&&(this.missiles=this.missiles.filter(a=>!a.done));for(let a of this.fireL)a.intensity=24+Math.sin(n*13+a.position.x)*6+Math.random()*6;i.update(t)}render(){this.r.render(this.scene,this.cam)}};var Tu=class{constructor(){let t=new URLSearchParams(location.search).get("stage");if(!t)try{t=localStorage.getItem("gf_stage")}catch{}this.stage=GF.STAGES[t]||GF.STAGES.seoul;let e=this.renderer=new va({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=GF.SETTINGS.shadows,e.shadowMap.type=Ys,e.shadowMap.autoUpdate=!1,e.toneMapping=Rs,e.toneMappingExposure=.82,document.getElementById("view").appendChild(e.domElement),this.scene=new Di,this.camera=new vn(34,16/9,.5,900),this.EL=.6,this.AZ=GF.SETTINGS.camAzimuth??-.32,this.cam={target:new I(0,0,0),zoom:1,zoomGoal:1,shake:0,anchor:null,az:this.AZ,el:this.EL,spin:0},this.scene.add(new Es(14085119,7038032,.4));let n=this.sun=new ss(16770756,2.3);n.position.set(-34,40,18),n.target.position.set(0,0,0),this.scene.add(n.target),n.castShadow=!0,Object.assign(n.shadow.camera,{left:-48,right:48,top:40,bottom:-40,near:1,far:180}),n.shadow.mapSize.set(2048,2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.04,n.shadow.radius=2.5,this.scene.add(n),this.look=new Th(e,this.scene,this.camera,n),this.city=new Da(this.scene,this.stage),this.sound=new vh,this.ui=new xh(this),this.game=new mh(this),this.paused=!1,this.stage.backdrop&&GF.SETTINGS.useBackdrop!==!1&&(this.backdrop=new wh(this,this.stage.backdrop)),this.exportGuide=(i,s)=>sm(this,i,s),this.icons=this.makeIcons(),this.ui.showTitle(this.icons),this.setupInput(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.last=performance.now(),this.time=0,this.renderer.setAnimationLoop(()=>this.frame()),window.__GF=this}makeIcons(){let t={},e=new va({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(160,160),e.toneMapping=Rs;let n=new Di;n.add(new Es(16777215,8022608,1.6));let i=new ss(16777215,2.2);i.position.set(-3,5,4),n.add(i);let s=new Bi(-.75,.75,.75,-.75,.1,20);s.position.set(2.2,2.2,2.6),s.lookAt(.1,.25,0);for(let o of GF.LOADOUT){let a=Xi(o);a.yaw.rotation.y=.5,n.add(a.root),e.render(n,s),t[o]=e.domElement.toDataURL(),n.remove(a.root)}return e.dispose(),e.forceContextLoss(),t}startGame(){this.ui.hideTitle(),this.ui.clearResult(),this.paused=!1,this.cam.zoom=this.cam.zoomGoal=1,this.fitView(),this.game.start(),this.ui.buildHud()}selectStage(t){let e=GF.STAGES[t];if(!(!e||e===this.stage||this.game.state!=="title")){this.stage=e;try{localStorage.setItem("gf_stage",t)}catch{}this.scene.remove(this.city.group),this.city.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),this.city=new Da(this.scene,e),this.game.city=this.city,this.game.S=e,this.ui.resetLabels(),this.city.shadowDirty=!0,this.fitView(),this.ui.hideTitle(),this.ui.showTitle(this.icons)}}toTitle(){this.game.state="title",this.game.cancelMode(),this.ui.clearHud(),this.ui.clearResult(),this.ui.showTitle(this.icons)}applySettings(){this.sound.apply();let t=GF.SETTINGS.graphics==="auto"?this.look.q:GF.SETTINGS.graphics;t&&t!==this.look.q&&(this.look.setQuality(t),this.resize(),this.city.shadowDirty=!0);let e=GF.SETTINGS.shadows;this.renderer.shadowMap.enabled!==e&&(this.renderer.shadowMap.enabled=e,this.scene.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})}),this.city.shadowDirty=!0)}togglePause(){this.game.isOver()||(this.paused=!this.paused)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}resize(){let t=this.L=gh(),e=t.w,n=t.h,i=document.getElementById("view");Object.assign(i.style,{left:t.x+"px",top:t.y+"px",width:e+"px",height:n+"px"}),document.body.classList.toggle("portrait",t.portrait&&Su()),this.renderer.setSize(e,n),this.look.resize(),this.W=e,this.H=n,this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.title&&this.title.resize(e,n),this.fitView()}fieldRect(){let t=this.L;return{top:t.base.top*t.k,bottom:t.base.bottom*t.k}}pose(t=this.cam.target,e=this.cam.dist,n=this.cam.az,i=this.cam.el){let s=this.camera,o=Math.cos(i)*e;s.position.set(t.x+Math.sin(n)*o,t.y+Math.sin(i)*e,t.z+Math.cos(n)*o),s.lookAt(t),s.updateMatrixWorld(!0)}toPx(t,e,n){let i=new I(t,e,n).project(this.camera);return{x:(i.x+1)/2*this.W,y:(1-i.y)/2*this.H}}groundAt(t,e){let n=new Wr;n.setFromCamera(new J((t-this.L.x)/this.W*2-1,-((e-this.L.y)/this.H)*2+1),this.camera);let i=new I;return n.ray.intersectPlane(new kn(new I(0,1,0),0),i)?i:null}fitView(){if(!this.W)return;let t=this.stage.bounds,e=this.fieldRect(),n=(t.x0+t.x1)/2,i=(t.z0+t.z1)/2,s={top:e.top+(e.bottom-e.top)*.1,bottom:e.bottom},o=this.AZ,a=this.EL,l=new I(-Math.sin(o),0,-Math.cos(o)),c=new I(Math.cos(o),0,-Math.sin(o)),h=new I(n,0,i),u=[[t.x0,t.z0],[t.x1,t.z0],[t.x0,t.z1],[t.x1,t.z1]],f=70;for(let d=0;d<80;d++){this.pose(h,f,o,a);let p=u.map(([w,S])=>this.toPx(w,0,S)),g=Math.min(...p.map(w=>w.y)),m=Math.max(...p.map(w=>w.y)),x=Math.min(...p.map(w=>w.x)),v=Math.max(...p.map(w=>w.x)),_=v-x,y=m-g,M=s.bottom-s.top;f*=Math.max(y/M,_/(this.W*1.12));let b=((g+m)/2-(s.top+s.bottom)/2)*(t.z1-t.z0)/y;h.addScaledVector(l,-b),h.addScaledVector(c,((x+v)/2-this.W/2)*(t.x1-t.x0)/_*.5)}this.fit={d:f,t:h.clone()},this.cam.target.copy(h),this.cam.dist=this.cam.distGoal=f/this.cam.zoom,this.pose()}rotateView(t,e=0){let n=this.cam;n.az+=t,n.el=Math.max(.42,Math.min(1.35,n.el+e)),n.anchor=null}resetView(){this.cam.az=this.AZ,this.cam.el=this.EL,this.cam.zoomGoal=1,this.cam.anchor=null}zoomAt(t,e,n){let i=this.cam,s=Math.min(3,Math.max(.7,i.zoomGoal*n));s!==i.zoomGoal&&(i.zoomGoal=s,i.anchor={px:t,py:e,g:this.groundAt(t,e)})}updateCamera(t){let e=this.cam;if(!this.fit)return;let n=e.zoom;if(e.zoom+=(e.zoomGoal-e.zoom)*Math.min(1,t*10),Math.abs(e.zoom-e.zoomGoal)<.001&&(e.zoom=e.zoomGoal),e.dist=this.fit.d/e.zoom,this.pose(),e.anchor&&e.anchor.g&&n!==e.zoom){let s=this.groundAt(e.anchor.px,e.anchor.py);s&&(e.target.x+=e.anchor.g.x-s.x,e.target.z+=e.anchor.g.z-s.z)}e.zoom===e.zoomGoal&&(e.anchor=null),this.clampTarget();let i=e.shake>0?(Math.random()-.5)*e.shake:0;e.shake=Math.max(0,e.shake-t),this.pose(e.target.clone().add(new I(i,0,i)))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),i=new J((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),s=new Wr;s.setFromCamera(i,this.camera);let o=new I;return s.ray.intersectPlane(new kn(new I(0,1,0),0),o)?o:null}setupInput(){let t=this.renderer.domElement,e=null,n=new Map;t.addEventListener("pointerdown",s=>{if(this.sound.unlock(),s.button===2){e={rot:!0,x:s.clientX,y:s.clientY,moved:!1},t.setPointerCapture(s.pointerId);return}if(n.set(s.pointerId,{x:s.clientX,y:s.clientY}),n.size===2){let[o,a]=[...n.values()];e={pinch:Math.hypot(o.x-a.x,o.y-a.y),z0:this.cam.zoomGoal,ang:Math.atan2(a.y-o.y,a.x-o.x),my:(o.y+a.y)/2,moved:!0};return}e={x:s.clientX,y:s.clientY,moved:!1,touch:s.pointerType==="touch"},s.pointerType==="touch"&&(this.mouse={x:s.clientX,y:s.clientY}),t.setPointerCapture(s.pointerId)}),t.addEventListener("pointermove",s=>{this.mouse={x:s.clientX,y:s.clientY},n.has(s.pointerId)&&n.set(s.pointerId,{x:s.clientX,y:s.clientY});let o=this.pick(s.clientX,s.clientY);if(o&&this.game.state!=="title"&&this.game.hoverAt(o),!e)return;if(e.rot){let c=s.clientX-e.x,h=s.clientY-e.y;!e.moved&&Math.abs(c)+Math.abs(h)>5&&(e.moved=!0),e.moved&&(this.rotateView(-(s.clientX-(e.lx??e.x))*.006,(s.clientY-(e.ly??e.y))*.004),e.lx=s.clientX,e.ly=s.clientY);return}if(e.pinch){let[c,h]=[...n.values()];if(c&&h){let u=e.z0*Math.hypot(c.x-h.x,c.y-h.y)/Math.max(20,e.pinch);this.zoomAt((c.x+h.x)/2,(c.y+h.y)/2,u/this.cam.zoomGoal);let f=Math.atan2(h.y-c.y,h.x-c.x)-e.ang;f=Math.atan2(Math.sin(f),Math.cos(f));let d=(c.y+h.y)/2;this.rotateView(-f,(d-e.my)*.004),e.ang+=f,e.my=d}return}let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.abs(a)+Math.abs(l)>(e.touch?14:7)&&(e.moved=!0),e.moved){let c=this.groundAt(e.lx??e.x,e.ly??e.y),h=this.groundAt(s.clientX,s.clientY);c&&h&&(this.cam.target.x+=c.x-h.x,this.cam.target.z+=c.z-h.z),this.cam.anchor=null,this.clampTarget(),this.pose(),e.lx=s.clientX,e.ly=s.clientY}});let i=s=>{n.delete(s.pointerId);let o=e;if(n.size||(e=null),o&&o.rot){o.moved||this.game.cancelMode();return}if(!o||o.moved||s.button!==0)return;let a=this.pick(s.clientX,s.clientY);a&&this.game.state!=="title"&&(s.pointerType==="touch"&&(this.mouse={x:s.clientX,y:s.clientY},this.game.hoverAt(a)),this.game.click(a))};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",s=>{n.delete(s.pointerId),e=null}),t.addEventListener("pointerleave",()=>{this.mouse=null}),t.addEventListener("contextmenu",s=>s.preventDefault()),t.addEventListener("wheel",s=>{s.preventDefault(),this.zoomAt(s.clientX,s.clientY,s.deltaY>0?1/1.15:1.15)},{passive:!1}),this.keys={},window.addEventListener("pointerdown",()=>this.sound.unlock()),window.addEventListener("keydown",s=>{if(this.sound.unlock(),s.target&&s.target.tagName==="INPUT")return;if(this.ui.shopEl&&s.code==="Escape"){this.ui.closeShop();return}this.keys[s.code]=!0;let o=this.game;if(o.state==="title"){s.code==="Enter"&&this.startGame();return}let a=parseInt(s.key,10);a>=1&&a<=GF.LOADOUT.length&&o.setMode(GF.LOADOUT[a-1]),s.code==="KeyZ"&&o.pickStrat("icbm"),s.code==="KeyX"&&o.pickStrat("nuke"),s.code==="KeyQ"&&o.pickCard(0),s.code==="KeyW"&&o.pickCard(1),s.code==="KeyE"&&o.pickCard(2),s.code==="Escape"&&o.cancelMode(),s.code==="Space"&&(s.preventDefault(),this.togglePause()),(s.code==="KeyN"||s.code==="Enter")&&o.callNext(),(s.code==="Equal"||s.code==="NumpadAdd")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,1.25),(s.code==="Minus"||s.code==="NumpadSubtract")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,.8),(s.code==="Digit0"||s.code==="Home"||s.code==="KeyR")&&this.resetView()}),window.addEventListener("keyup",s=>{this.keys[s.code]=!1})}clampTarget(){let t=this.cam,e=t.target,n=this.fit;if(!n)return;let i=Math.max(0,Math.min(1,(t.zoom-1)/.05)),s=this.stage.bounds,o=t.zoom,a=(s.x1-s.x0)/2*(1-1/o),l=(s.z1-s.z0)/2*(1-1/o),c=n.t.x,h=n.t.z;e.x=Math.max(c-a,Math.min(c+a,e.x)),e.z=Math.max(h-l,Math.min(h+l,e.z)),i===0&&(e.x=c,e.z=h)}autoQuality(t){if(GF.SETTINGS.graphics!=="auto"||document.hidden||(this.fpsT=(this.fpsT||0)+t,this.fpsN=(this.fpsN||0)+1,this.fpsT<4))return;let e=this.fpsT/this.fpsN;this.fpsT=0,this.fpsN=0;let n={ultra:"high",high:"medium",medium:"low"}[this.look.q];e>1/40&&n&&(this.look.setQuality(n),this.resize(),this.city.shadowDirty=!0)}frame(){let t=performance.now(),e=Math.min((t-this.last)/1e3,.1);this.last=t,this.time+=e;let n=this.keys||{},i=30*e/this.cam.zoom,s=this.cam.az,o=(n.ArrowRight?1:0)-(n.ArrowLeft?1:0),a=(n.ArrowDown?1:0)-(n.ArrowUp?1:0);this.cam.target.x+=(o*Math.cos(s)+a*Math.sin(s))*i,this.cam.target.z+=(-o*Math.sin(s)+a*Math.cos(s))*i;let l=(n.BracketRight||n.Period?1:0)-(n.BracketLeft||n.Comma?1:0)+this.cam.spin;l&&this.rotateView(l*1.4*e),this.clampTarget();let c=this.paused?0:e*this.game.speed;this.city.update(e,this.time),this.game.update(c,this.time),this.updateCamera(e),this.look.update(this.cam.dist),this.game.state==="title"?(this.title||(this.title=new Rh(this.renderer),this.title.resize(this.W,this.H)),this.title.update(e),this.title.render()):(this.city.shadowDirty&&(this.renderer.shadowMap.needsUpdate=!0,this.city.shadowDirty=!1),this.look.render()),this.autoQuality(e),this.ui.update(c||0)}};new Tu;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
