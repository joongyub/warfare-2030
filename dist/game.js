(()=>{var Ju=0,eh=1,Ku=2;var Ki=1,ju=2,Ks=3,Fi=0,tn=1,Fe=2,Ve=0,js=1,ia=2,nh=3,ih=4,Jo=5;var Cn=100,Qu=101,td=102,ed=103,nd=104,ji=200,id=201,sd=202,rd=203,sh=204,rh=205,sa=206,ad=207,ra=208,od=209,ld=210,cd=211,hd=212,ud=213,dd=214,fo=0,po=1,mo=2,Cs=3,go=4,xo=5,vo=6,_o=7,Ko=0,fd=1,pd=2,Bn=0,aa=1,oa=2,la=3,Oi=4,ca=5,ha=6,ua=7;var ah=300,Bi=301,Qi=302,jo=303,Qo=304,da=306,xe=1e3,wn=1001,yo=1002,ke=1003,md=1004;var fa=1005;var Qe=1006,tl=1007;var ti=1008;var ln=1009,oh=1010,lh=1011,Qs=1012,el=1013,zn=1014,Pn=1015,ze=1016,nl=1017,il=1018,zi=1020,ch=35902,hh=35899,uh=1021,dh=1022,mn=1023,qn=1026,ei=1027,sl=1028,rl=1029,Hi=1030,al=1031;var ol=1033,pa=33776,ma=33777,ga=33778,xa=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37488,gl=37489,va=37490,xl=37491,vl=37808,_l=37809,yl=37810,Sl=37811,Ml=37812,bl=37813,El=37814,Tl=37815,wl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Dl=36492,Ll=36494,Nl=36495,Ul=36283,Fl=36284,_a=36285,Ol=36286;var Tr=2300,So=2301,co=2302,Vc=2303,Wc=2400,Xc=2401,qc=2402;var gd=3200;var tr=0,xd=1,vi="",Ne="srgb",wr="srgb-linear",Ar="linear",ge="srgb";var ho=7680;var vd=519,_d=512,yd=513,Sd=514,Bl=515,Md=516,bd=517,zl=518,Ed=519,fh=35044;var ph="300 es",Fn=2e3,Ps=2001;function hp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function up(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Td(){let s=Is("canvas");return s.style.display="block",s}var pu={},Ds=null;function Rr(...s){let t="THREE."+s.shift();Ds?Ds("log",t,...s):console.log(t,...s)}function wd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Yt(...s){s=wd(s);let t="THREE."+s.shift();if(Ds)Ds("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=wd(s);let t="THREE."+s.shift();if(Ds)Ds("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Yi(...s){let t=s.join(" ");t in pu||(pu[t]=!0,Yt(...s))}function Ad(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rd={[fo]:po,[mo]:vo,[go]:_o,[Cs]:xo,[po]:fo,[vo]:mo,[_o]:go,[xo]:Cs},Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mc=Math.PI/180,Mo=180/Math.PI;function pi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function dp(s,t){return(s%t+t)%t}function gc(s,t,e){return(1-e)*s+e*t}function Wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yh=class yh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;var Q=yh,an=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,o=Math.sin(o*_)/S,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sh=class Sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;var P=Sh,xc=new P,mu=new an,Mh=class Mh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],S=i[4],v=i[7],b=i[2],E=i[5],C=i[8];return r[0]=a*x+o*_+l*b,r[3]=a*g+o*S+l*E,r[6]=a*p+o*v+l*C,r[1]=c*x+h*_+d*b,r[4]=c*g+h*S+d*E,r[7]=c*p+h*v+d*C,r[2]=u*x+f*_+m*b,r[5]=u*g+f*S+m*E,r[8]=u*p+f*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var Qt=Mh,vc=new Qt,gu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){let s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Ar:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:n,transfer:Ar,toXYZ:gu,fromXYZ:xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:gu,fromXYZ:xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}var oe=fp();function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,bo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=Is("canvas")),cs.width=t.width,cs.height=t.height;let i=cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_c(i[a].image)):r.push(_c(i[a]))}else r=_c(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var mp=0,yc=new P,on=class s extends Yn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=wn,i=wn,r=Qe,a=ti,o=mn,l=ln,c=s.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=pi(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xe:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xe:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ah;on.DEFAULT_ANISOTROPY=1;var bh=class bh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,b=(p+1)/2,E=(h+u)/4,C=(d+x)/4,y=(m+g)/4;return S>v&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=C/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bh.prototype.isVector4=!0;var Ue=bh,Eo=class extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new on(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ae=class extends Eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Zo=class Zo{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,xp)}lookAt(t,e,n){let i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ti.crossVectors(n,gn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ti.crossVectors(n,gn)),Ti.normalize(),Fa.crossVectors(gn,Ti),i[0]=Ti.x,i[4]=Fa.x,i[8]=gn.x,i[1]=Ti.y,i[5]=Fa.y,i[9]=gn.y,i[2]=Ti.z,i[6]=Fa.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],S=n[7],v=n[11],b=n[15],E=i[0],C=i[4],y=i[8],w=i[12],A=i[1],I=i[5],D=i[9],O=i[13],N=i[2],B=i[6],W=i[10],X=i[14],st=i[3],V=i[7],J=i[11],j=i[15];return r[0]=a*E+o*A+l*N+c*st,r[4]=a*C+o*I+l*B+c*V,r[8]=a*y+o*D+l*W+c*J,r[12]=a*w+o*O+l*X+c*j,r[1]=h*E+d*A+u*N+f*st,r[5]=h*C+d*I+u*B+f*V,r[9]=h*y+d*D+u*W+f*J,r[13]=h*w+d*O+u*X+f*j,r[2]=m*E+x*A+g*N+p*st,r[6]=m*C+x*I+g*B+p*V,r[10]=m*y+x*D+g*W+p*J,r[14]=m*w+x*O+g*X+p*j,r[3]=_*E+S*A+v*N+b*st,r[7]=_*C+S*I+v*B+b*V,r[11]=_*y+S*D+v*W+b*J,r[15]=_*w+S*O+v*X+b*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*f-c*u,S=o*f-c*d,v=o*u-l*d,b=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return e*(x*_-g*S+p*v)-n*(m*_-g*b+p*E)+i*(m*S-x*b+p*C)-r*(m*v-x*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*o-n*a,S=e*l-i*a,v=e*c-r*a,b=n*l-i*o,E=n*c-r*o,C=i*c-r*l,y=h*x-d*m,w=h*g-u*m,A=h*p-f*m,I=d*g-u*x,D=d*p-f*x,O=u*p-f*g,N=_*O-S*D+v*I+b*A-E*w+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return t[0]=(o*O-l*D+c*I)*B,t[1]=(i*D-n*O-r*I)*B,t[2]=(x*C-g*E+p*b)*B,t[3]=(u*E-d*C-f*b)*B,t[4]=(l*A-a*O-c*w)*B,t[5]=(e*O-i*A+r*w)*B,t[6]=(g*v-m*C-p*S)*B,t[7]=(h*C-u*v+f*S)*B,t[8]=(a*D-o*A+c*y)*B,t[9]=(n*A-e*D-r*y)*B,t[10]=(m*E-x*v+p*_)*B,t[11]=(d*v-h*E-f*_)*B,t[12]=(o*w-a*I-l*y)*B,t[13]=(e*I-n*w+i*y)*B,t[14]=(x*S-m*b-g*_)*B,t[15]=(h*b-d*S+u*_)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,x=a*h,g=a*d,p=o*d,_=l*c,S=l*h,v=l*d,b=n.x,E=n.y,C=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+v)*b,i[2]=(m-S)*b,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+p))*E,i[6]=(g+_)*E,i[7]=0,i[8]=(m+S)*C,i[9]=(g-_)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hs.set(i[0],i[1],i[2]).length(),o=hs.set(i[4],i[5],i[6]).length(),l=hs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,e.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ps)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Fn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ps)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Zo.prototype.isMatrix4=!0;var $t=Zo,hs=new P,Ln=new $t,gp=new P(0,0,0),xp=new P(1,1,1),Ti=new P,Fa=new P,gn=new P,vu=new $t,_u=new an,$n=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,yu=new P,us=new an,li=new $t,Oa=new P,dr=new P,_p=new P,yp=new an,Su=new P(1,0,0),Mu=new P(0,1,0),bu=new P(0,0,1),Eu={type:"added"},Sp={type:"removed"},ds={type:"childadded",child:null},Sc={type:"childremoved",child:null},Ge=class s extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new $n,n=new an,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Qt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(dr,Oa,this.up):li.lookAt(Oa,dr,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),us.setFromRotationMatrix(li),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),ds.child=t,this.dispatchEvent(ds),ds.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new P(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Mc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=dp(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mc(a,r,t+1/3),this.g=Mc(a,r,t),this.b=Mc(a,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return oe.workingToColorSpace(rn.copy(this),t),Math.round(ce(rn.r*255,0,255))*65536+Math.round(ce(rn.g*255,0,255))*256+Math.round(ce(rn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,r=rn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ne){oe.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,i=rn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Ba);let n=gc(wi.h,Ba.h,e),i=gc(wi.s,Ba.s,e),r=gc(wi.l,Ba.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Gt;Gt.NAMES=Cd;var Pr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pi=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new P,ci=new P,bc=new P,hi=new P,fs=new P,ps=new P,Tu=new P,Ec=new P,Tc=new P,wc=new P,Ac=new Ue,Rc=new Ue,Cc=new Ue,fi=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nn.subVectors(i,e),ci.subVectors(n,e),bc.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(ci),l=Nn.dot(bc),c=ci.dot(ci),h=ci.dot(bc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,n),Cc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ac,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Cc,r.z),a}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),ci.subVectors(t,e),Nn.cross(ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;fs.subVectors(i,n),ps.subVectors(r,n),Ec.subVectors(t,n);let l=fs.dot(Ec),c=ps.dot(Ec);if(l<=0&&c<=0)return e.copy(n);Tc.subVectors(t,i);let h=fs.dot(Tc),d=ps.dot(Tc);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fs,a);wc.subVectors(t,r);let f=fs.dot(wc),m=ps.dot(wc);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ps,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Tu.subVectors(r,i),o=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Tu,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Ha.subVectors(this.max,fr),ms.subVectors(t.a,fr),gs.subVectors(t.b,fr),xs.subVectors(t.c,fr),Ai.subVectors(gs,ms),Ri.subVectors(xs,gs),Vi.subVectors(ms,xs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Vi.y,Vi.x,0];return!Pc(e,ms,gs,xs,Ha)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,ms,gs,xs,Ha))?!1:(ka.crossVectors(Ai,Ri),e=[ka.x,ka.y,ka.z],Pc(e,ms,gs,xs,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,za=new Zn,ms=new P,gs=new P,xs=new P,Ai=new P,Ri=new P,Vi=new P,fr=new P,Ha=new P,ka=new P,Wi=new P;function Pc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wi.fromArray(s,r);let o=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xe=new P,Ga=new Q,bp=0,Be=class extends Yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ga.fromBufferAttribute(this,e),Ga.applyMatrix3(t),this.setXY(e,Ga.x,Ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ir=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ep=new Zn,pr=new P,Ic=new P,gi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Ic)),this.expandByPoint(pr.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tp=0,Tn=new $t,Dc=new Ge,vs=new P,xn=new Zn,mr=new Zn,Ke=new P,ue=class s extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?Dr:Ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(xn.min,mr.min),xn.expandByPoint(Ke),Ke.addVectors(xn.max,mr.max),xn.expandByPoint(Ke)):(xn.expandByPoint(mr.min),xn.expandByPoint(mr.max))}xn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),Ke.add(vs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new Q,f=new Q,m=new Q,x=new P,g=new P;function p(y,w,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[y].add(x),o[w].add(x),o[A].add(x),l[y].add(g),l[w].add(g),l[A].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,w=_.length;y<w;++y){let A=_[y],I=A.start,D=A.count;for(let O=I,N=I+D;O<N;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new P,v=new P,b=new P,E=new P;function C(y){b.fromBufferAttribute(i,y),E.copy(b);let w=o[y];S.copy(w),S.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(E,w);let I=v.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,I)}for(let y=0,w=_.length;y<w;++y){let A=_[y],I=A.start,D=A.count;for(let O=I,N=I+D;O<N;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},dn=new P,Fs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lc=new P,wp=new P,Ap=new Qt,pn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lc.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ap.getNormalMatrix(t),i=this.coplanarPoint(Lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rp=0,An=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=js,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$i=class extends An{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,gr=new P,ys=new P,Ss=new P,Ms=new Q,xr=new Q,Pd=new $t,Va=new P,vr=new P,Wa=new P,wu=new Q,Nc=new Q,Au=new Q,Os=class extends Ge{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Fs(n,3,0,!1)),_s.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Xa(Va.set(-.5,-.5,0),Ss,a,ys,i,r),Xa(vr.set(.5,-.5,0),Ss,a,ys,i,r),Xa(Wa.set(.5,.5,0),Ss,a,ys,i,r),wu.set(0,0),Nc.set(1,0),Au.set(1,1);let o=t.ray.intersectTriangle(Va,vr,Wa,!1,gr);if(o===null&&(Xa(vr.set(-.5,.5,0),Ss,a,ys,i,r),Nc.set(0,1),o=t.ray.intersectTriangle(Va,Wa,vr,!1,gr),o===null))return;let l=t.ray.origin.distanceTo(gr);l<t.near||l>t.far||e.push({distance:l,point:gr.clone(),uv:fi.getInterpolation(gr,Va,vr,Wa,wu,Nc,Au,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xa(s,t,e,n,i,r){Ms.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(xr.x=r*Ms.x-i*Ms.y,xr.y=i*Ms.x+r*Ms.y):xr.copy(Ms),s.copy(t),s.x+=xr.x,s.y+=xr.y,s.applyMatrix4(Pd)}var di=new P,Uc=new P,qa=new P,Ya=new P,Bs=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uc.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(Uc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Uc).addScaledVector(qa,u),f}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let n=di.dot(this.direction),i=di.dot(di)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,_=n.y-a.y,S=n.z-a.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h),C,y,w,A,I,D,O,N,B,W,X,st;if(v>=b&&v>=E?(w=l,D=d,B=m,st=p,l>=0?(C=c,y=h,A=u,I=f,O=x,N=g,W=_,X=S):(C=h,y=c,A=f,I=u,O=g,N=x,W=S,X=_)):b>=E?(w=c,D=u,B=x,st=_,c>=0?(C=h,y=l,A=f,I=d,O=g,N=m,W=S,X=p):(C=l,y=h,A=d,I=f,O=m,N=g,W=p,X=S)):(w=h,D=f,B=g,st=S,h>=0?(C=l,y=c,A=d,I=u,O=m,N=x,W=p,X=_):(C=c,y=l,A=u,I=d,O=x,N=m,W=_,X=p)),w===0)return null;let V=C/w,J=y/w,j=1/w,At=A-V*D,yt=I-J*D,he=O-V*B,te=N-J*B,ae=W-V*st,Y=X-J*st,K=ae*te-Y*he,ut=At*Y-yt*ae,Ot=he*yt-te*At;if(i){if(K<0||ut<0||Ot<0)return null}else if((K<0||ut<0||Ot<0)&&(K>0||ut>0||Ot>0))return null;let Et=K+ut+Ot;if(Et===0)return null;let Wt=j*(K*D+ut*B+Ot*st);return(Et>0?Wt<0:Wt>0)?null:this.at(Wt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ru=new $t,Xi=new Bs,$a=new gi,Cu=new P,Za=new P,Ja=new P,Ka=new P,Fc=new P,ja=new P,Pu=new P,Qa=new P,pt=class extends Ge{constructor(t=new ue,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Fc.fromBufferAttribute(d,t),a?ja.addScaledVector(Fc,h):ja.addScaledVector(Fc.sub(e),h))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!($a.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere($a,Cu)===null||Xi.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=S;v<b;v+=3){let E=o.getX(v),C=o.getX(v+1),y=o.getX(v+2);i=to(this,p,t,n,c,h,d,E,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);i=to(this,a,t,n,c,h,d,_,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=S;v<b;v+=3){let E=v,C=v+1,y=v+2;i=to(this,p,t,n,c,h,d,E,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,S=g+1,v=g+2;i=to(this,a,t,n,c,h,d,_,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Cp(s,t,e,n,i,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Fi,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:s}}function to(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Za),s.getVertexPosition(l,Ja),s.getVertexPosition(c,Ka);let h=Cp(s,t,e,n,Za,Ja,Ka,Pu);if(h){let d=new P;fi.getBarycoord(Pu,Za,Ja,Ka,d),i&&(h.uv=fi.getInterpolatedAttribute(i,o,l,c,d,new Q)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,d,new Q)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};fi.getNormal(Za,Ja,Ka,u.normal),h.face=u,h.barycoord=d}return h}var xi=class extends on{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ke,h=ke,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends Be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new $t,Iu=new $t,eo=[],Du=new Zn,Pp=new $t,_r=new pt,yr=new gi,Rn=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Du.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),yr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),Iu.multiplyMatrices(n,bs),_r.matrixWorld=Iu,_r.raycast(t,eo);for(let a=0,o=eo.length;a<o;a++){let l=eo[a];l.instanceId=r,l.object=this,e.push(l)}eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(i*this.count),i,this.count,sl,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new gi,Ip=new Q(.5,.5),no=new P,Hs=class{constructor(t=new pn,e=new pn,n=new pn,i=new pn,r=new pn,a=new pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],_=r[12],S=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,p-m,b-_).normalize(),i[1].setComponents(c+a,f+h,p+m,b+_).normalize(),i[2].setComponents(c+o,f+d,p+x,b+S).normalize(),i[3].setComponents(c-o,f-d,p-x,b-S).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,p-g,b-v).normalize();else if(i[4].setComponents(c-l,f-u,p-g,b-v).normalize(),e===Fn)i[5].setComponents(c+l,f+u,p+g,b+v).normalize();else if(e===Ps)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=Ip.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(no.x=i.normal.x>0?t.max.x:t.min.x,no.y=i.normal.y>0?t.max.y:t.min.y,no.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends An{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wo=new P,Ao=new P,Lu=new $t,Sr=new Bs,io=new gi,Oc=new P,Nu=new P,Nr=class extends Ge{constructor(t=new ue,e=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)wo.fromBufferAttribute(e,i-1),Ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wo.distanceTo(Ao);t.setAttribute("lineDistance",new Vt(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;Lu.copy(i).invert(),Sr.copy(t.ray).applyMatrix4(Lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),_=h.getX(x+1),S=so(this,t,Sr,l,p,_,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=so(this,t,Sr,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=so(this,t,Sr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=so(this,t,Sr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function so(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(wo.fromBufferAttribute(o,i),Ao.fromBufferAttribute(o,r),e.distanceSqToSegment(wo,Ao,Oc,Nu)>n)return;Oc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:Nu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Ur=class extends on{constructor(t=[],e=Bi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends on{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends on{constructor(t,e,n=zn,i,r,a,o=ke,l=ke,c,h=qn,d=1){if(h!==qn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ro=class extends Jn{constructor(t,e=zn,n=Bi,i,r,a=ke,o=ke,l,c=qn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fr=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nt=class s extends ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function m(x,g,p,_,S,v,b,E,C,y,w){let A=v/C,I=b/y,D=v/2,O=b/2,N=E/2,B=C+1,W=y+1,X=0,st=0,V=new P;for(let J=0;J<W;J++){let j=J*I-O;for(let At=0;At<B;At++){let yt=At*A-D;V[x]=yt*_,V[g]=j*S,V[p]=N,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(At/C),d.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let j=0;j<C;j++){let At=u+j+B*J,yt=u+j+B*(J+1),he=u+(j+1)+B*(J+1),te=u+(j+1)+B*J;l.push(At,yt,te),l.push(yt,he,te),st+=6}o.addGroup(f,st,w),f+=st,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Or=class s extends ue{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+r,x=i+1,g=new P,p=new P;for(let _=0;_<=m;_++){let S=0,v=0,b=0,E=0;if(_<=n){let w=_/n,A=w*Math.PI/2;v=-h-t*Math.cos(A),b=t*Math.sin(A),E=-t*Math.cos(A),S=w*d}else if(_<=n+r){let w=(_-n)/r;v=-h+w*e,b=t,E=0,S=d+w*u}else{let w=(_-n-r)/n,A=w*Math.PI/2;v=h+t*Math.sin(A),b=t*Math.cos(A),E=t*Math.sin(A),S=d+u+w*d}let C=Math.max(0,Math.min(1,S/f)),y=0;_===0?y=.5/i:_===m&&(y=-.5/i);for(let w=0;w<=i;w++){let A=w/i,I=A*Math.PI*2,D=Math.sin(I),O=Math.cos(I);p.x=-b*O,p.y=v,p.z=b*D,o.push(p.x,p.y,p.z),g.set(-b*O,E,b*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+y,C)}if(_>0){let w=(_-1)*x;for(let A=0;A<i;A++){let I=w+A,D=w+A+1,O=_*x+A,N=_*x+A+1;a.push(I,D,O),a.push(D,N,O)}}}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Kn=class s extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kt=class s extends ue{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;_(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function _(){let v=new P,b=new P,E=0,C=(e-t)/n;for(let y=0;y<=r;y++){let w=[],A=y/r,I=A*(e-t)+t;for(let D=0;D<=i;D++){let O=D/i,N=O*l+o,B=Math.sin(N),W=Math.cos(N);b.x=I*B,b.y=-A*n+g,b.z=I*W,d.push(b.x,b.y,b.z),v.set(B,C,W).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-A),w.push(m++)}x.push(w)}for(let y=0;y<i;y++)for(let w=0;w<r;w++){let A=x[w][y],I=x[w+1][y],D=x[w+1][y+1],O=x[w][y+1];(t>0||w!==0)&&(h.push(A,I,O),E+=3),(e>0||w!==r-1)&&(h.push(I,D,O),E+=3)}c.addGroup(p,E,0),p+=E}function S(v){let b=m,E=new Q,C=new P,y=0,w=v===!0?t:e,A=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),m++;let I=m;for(let D=0;D<=i;D++){let N=D/i*l+o,B=Math.cos(N),W=Math.sin(N);C.x=w*W,C.y=g*A,C.z=w*B,d.push(C.x,C.y,C.z),u.push(0,A,0),E.x=B*.5+.5,E.y=W*.5*A+.5,f.push(E.x,E.y),m++}for(let D=0;D<i;D++){let O=b+D,N=I+D;v===!0?h.push(N,N+1,O):h.push(N+1,N,O),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_n=class s extends Kt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Co=class s extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new P,v=new P,b=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],v),f(e[E+2],b),l(S,v,b,_)}function l(_,S,v,b){let E=b+1,C=[];for(let y=0;y<=E;y++){C[y]=[];let w=_.clone().lerp(v,y/E),A=S.clone().lerp(v,y/E),I=E-y;for(let D=0;D<=I;D++)D===0&&y===E?C[y][D]=w:C[y][D]=w.clone().lerp(A,D/I)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let A=Math.floor(w/2);w%2===0?(u(C[y][A+1]),u(C[y+1][A]),u(C[y][A])):(u(C[y][A+1]),u(C[y+1][A+1]),u(C[y+1][A]))}}function c(_){let S=new P;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(_),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let _=new P;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let v=g(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;a.push(v,1-b)}m(),d()}function d(){for(let _=0;_<a.length;_+=6){let S=a[_+0],v=a[_+2],b=a[_+4],E=Math.max(S,v,b),C=Math.min(S,v,b);E>.9&&C<.1&&(S<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,S){let v=_*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function m(){let _=new P,S=new P,v=new P,b=new P,E=new Q,C=new Q,y=new Q;for(let w=0,A=0;w<r.length;w+=9,A+=6){_.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[A+0],a[A+1]),C.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),b.copy(_).add(S).add(v).divideScalar(3);let I=g(b);x(E,A+0,_,I),x(C,A+2,S,I),x(y,A+4,v,I)}}function x(_,S,v,b){b<0&&_.x===1&&(a[S]=_.x-1),v.x===0&&v.z===0&&(a[S]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Q:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],a=[],o=new P,l=new $t;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ce(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends yn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Po=class extends Gs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Uu=new P,Fu=new P,Bc=new mh,zc=new mh,Hc=new mh,Ii=class extends yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Fu.subVectors(i[0],i[1]).add(i[0]),c=Fu);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Uu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Bc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),Hc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),Hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ou(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Dp(s,t){let e=1-s;return e*e*t}function Lp(s,t){return 2*(1-s)*s*t}function Np(s,t){return s*s*t}function br(s,t,e,n){return Dp(s,t)+Lp(s,e)+Np(s,n)}function Up(s,t){let e=1-s;return e*e*e*t}function Fp(s,t){let e=1-s;return 3*e*e*s*t}function Op(s,t){return 3*(1-s)*s*s*t}function Bp(s,t){return s*s*s*t}function Er(s,t,e,n,i){return Up(s,t)+Fp(s,e)+Op(s,n)+Bp(s,i)}var Br=class extends yn{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,i.x,r.x,a.x,o.x),Er(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends yn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,i.x,r.x,a.x,o.x),Er(t,i.y,r.y,a.y,o.y),Er(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zr=class extends yn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends yn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends yn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(br(t,i.x,r.x,a.x),br(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends yn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(br(t,i.x,r.x,a.x),br(t,i.y,r.y,a.y),br(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ou(o,l.x,c.x,h.x,d.x),Ou(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Q().fromArray(i))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Ii,CubicBezierCurve:Br,CubicBezierCurve3:Io,EllipseCurve:Gs,LineCurve:zr,LineCurve3:Do,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:kr,SplineCurve:Gr}),No=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lo[i.type]().fromJSON(i))}return this}},Vr=class extends No{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zr(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Hr(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Br(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Gs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jn=class extends Vr{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Vr().fromJSON(i))}return this}};function zp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Id(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Wp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){let f=s[u],m=s[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Wr(r,a,e,o,l,c,0),a}function Id(s,t,e,n,i){let r;if(i===e0(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bu(a/n|0,s[a],s[a+1],r);return r&&Vs(r,r.next)&&(qr(r),r=r.next),r}function Zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Oe(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Zp(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?kp(s,n,i,r):Hp(s)){t.push(l.i,s.i,c.i),qr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Gp(Zi(s),t),Wr(s,t,e,n,i,r,2)):a===2&&Vp(s,t,e,n,i,r):Wr(Zi(s),t,e,n,i,r,1);break}}}function Hp(s){let t=s.prev,e=s,n=s.next;if(Oe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Mr(i,o,r,l,a,c,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function kp(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Oe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),p=Yc(f,m,t,e,n),_=Yc(x,g,t,e,n),S=s.prevZ,v=s.nextZ;for(;S&&S.z>=p&&v&&v.z<=_;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&Mr(o,h,l,d,c,u,S.x,S.y)&&Oe(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Mr(o,h,l,d,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&Mr(o,h,l,d,c,u,S.x,S.y)&&Oe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Mr(o,h,l,d,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Vs(n,i)&&Ld(n,e,e.next,i)&&Xr(n,i)&&Xr(i,n)&&(t.push(n.i,e.i,i.i),qr(e),qr(e.next),e=s=i),e=e.next}while(e!==s);return Zi(e)}function Vp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jp(a,o)){let l=Nd(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Wr(a,t,e,n,i,r,0),Wr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Wp(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Id(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Kp(c))}i.sort(Xp);for(let r=0;r<i.length;r++)e=qp(i[r],e);return e}function Xp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function qp(s,t){let e=Yp(s,t);if(!e)return t;let n=Nd(e,s);return Zi(n,n.next),Zi(e,e.next)}function Yp(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Vs(s,e))return e;do{if(Vs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Xr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&$p(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function $p(s,t){return Oe(s.prev,s,t.prev)<0&&Oe(t.next,s,s.next)<0}function Zp(s,t,e,n){let i=s;do i.z===0&&(i.z=Yc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jp(i)}function Jp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Yc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Dd(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Mr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Dd(s,t,e,n,i,r,a,o)}function jp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Qp(s,t)&&(Xr(s,t)&&Xr(t,s)&&t0(s,t)&&(Oe(s.prev,s,t.prev)||Oe(s,t.prev,t))||Vs(s,t)&&Oe(s.prev,s,s.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Vs(s,t){return s.x===t.x&&s.y===t.y}function Ld(s,t,e,n){let i=ao(Oe(s,t,e)),r=ao(Oe(s,t,n)),a=ao(Oe(e,n,s)),o=ao(Oe(e,n,t));return!!(i!==r&&a!==o||i===0&&ro(s,e,t)||r===0&&ro(s,n,t)||a===0&&ro(e,s,n)||o===0&&ro(e,t,n))}function ro(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ao(s){return s>0?1:s<0?-1:0}function Qp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xr(s,t){return Oe(s.prev,s,s.next)<0?Oe(s,t,s.next)>=0&&Oe(s,s.prev,t)>=0:Oe(s,t,s.prev)<0||Oe(s,s.next,t)<0}function t0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nd(s,t){let e=$c(s.i,s.x,s.y),n=$c(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(s,t,e,n){let i=$c(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function $c(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function e0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Zc=class{static triangulate(t,e,n=2){return zp(t,e,n)}},Xn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];zu(t),Hu(n,t);let a=t.length;e.forEach(zu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Hu(n,e[l]);let o=Zc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Hu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ws=class s extends ue{constructor(t=new jn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:n0,S,v=!1,b,E,C,y;if(p){S=p.getSpacedPoints(h),v=!0,u=!1;let et=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,et),E=new P,C=new P,y=new P}u||(g=0,f=0,m=0,x=0);let w=o.extractPoints(c),A=w.shape,I=w.holes;if(!Xn.isClockWise(A)){A=A.reverse();for(let et=0,at=I.length;et<at;et++){let ot=I[et];Xn.isClockWise(ot)&&(I[et]=ot.reverse())}}function O(et){let ot=10000000000000001e-36,lt=et[0];for(let ht=1;ht<=et.length;ht++){let kt=ht%et.length,Bt=et[kt],Xt=Bt.x-lt.x,Zt=Bt.y-lt.y,L=Xt*Xt+Zt*Zt,de=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(lt.x),Math.abs(lt.y)),ee=ot*de*de;if(L<=ee){et.splice(kt,1),ht--;continue}lt=Bt}}O(A),I.forEach(O);let N=I.length,B=A;for(let et=0;et<N;et++){let at=I[et];A=A.concat(at)}function W(et,at,ot){return at||qt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(at,ot)}let X=A.length;function st(et,at,ot){let lt,ht,kt,Bt=et.x-at.x,Xt=et.y-at.y,Zt=ot.x-et.x,L=ot.y-et.y,de=Bt*Bt+Xt*Xt,ee=Bt*L-Xt*Zt;if(Math.abs(ee)>Number.EPSILON){let R=Math.sqrt(de),M=Math.sqrt(Zt*Zt+L*L),z=at.x-Xt/R,H=at.y+Bt/R,$=ot.x-L/M,ct=ot.y+Zt/M,dt=(($-z)*L-(ct-H)*Zt)/(Bt*L-Xt*Zt);lt=z+Bt*dt-et.x,ht=H+Xt*dt-et.y;let Z=lt*lt+ht*ht;if(Z<=2)return new Q(lt,ht);kt=Math.sqrt(Z/2)}else{let R=!1;Bt>Number.EPSILON?Zt>Number.EPSILON&&(R=!0):Bt<-Number.EPSILON?Zt<-Number.EPSILON&&(R=!0):Math.sign(Xt)===Math.sign(L)&&(R=!0),R?(lt=-Xt,ht=Bt,kt=Math.sqrt(de)):(lt=Bt,ht=Xt,kt=Math.sqrt(de/2))}return new Q(lt/kt,ht/kt)}let V=[];for(let et=0,at=B.length,ot=at-1,lt=et+1;et<at;et++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),V[et]=st(B[et],B[ot],B[lt]);let J=[],j,At=V.concat();for(let et=0,at=N;et<at;et++){let ot=I[et];j=[];for(let lt=0,ht=ot.length,kt=ht-1,Bt=lt+1;lt<ht;lt++,kt++,Bt++)kt===ht&&(kt=0),Bt===ht&&(Bt=0),j[lt]=st(ot[lt],ot[kt],ot[Bt]);J.push(j),At=At.concat(j)}let yt;if(g===0)yt=Xn.triangulateShape(B,I);else{let et=[],at=[];for(let ot=0;ot<g;ot++){let lt=ot/g,ht=f*Math.cos(lt*Math.PI/2),kt=m*Math.sin(lt*Math.PI/2)+x;for(let Bt=0,Xt=B.length;Bt<Xt;Bt++){let Zt=W(B[Bt],V[Bt],kt);ut(Zt.x,Zt.y,-ht),lt===0&&et.push(Zt)}for(let Bt=0,Xt=N;Bt<Xt;Bt++){let Zt=I[Bt];j=J[Bt];let L=[];for(let de=0,ee=Zt.length;de<ee;de++){let R=W(Zt[de],j[de],kt);ut(R.x,R.y,-ht),lt===0&&L.push(R)}lt===0&&at.push(L)}}yt=Xn.triangulateShape(et,at)}let he=yt.length,te=m+x;for(let et=0;et<X;et++){let at=u?W(A[et],At[et],te):A[et];v?(C.copy(b.normals[0]).multiplyScalar(at.x),E.copy(b.binormals[0]).multiplyScalar(at.y),y.copy(S[0]).add(C).add(E),ut(y.x,y.y,y.z)):ut(at.x,at.y,0)}for(let et=1;et<=h;et++)for(let at=0;at<X;at++){let ot=u?W(A[at],At[at],te):A[at];v?(C.copy(b.normals[et]).multiplyScalar(ot.x),E.copy(b.binormals[et]).multiplyScalar(ot.y),y.copy(S[et]).add(C).add(E),ut(y.x,y.y,y.z)):ut(ot.x,ot.y,d/h*et)}for(let et=g-1;et>=0;et--){let at=et/g,ot=f*Math.cos(at*Math.PI/2),lt=m*Math.sin(at*Math.PI/2)+x;for(let ht=0,kt=B.length;ht<kt;ht++){let Bt=W(B[ht],V[ht],lt);ut(Bt.x,Bt.y,d+ot)}for(let ht=0,kt=I.length;ht<kt;ht++){let Bt=I[ht];j=J[ht];for(let Xt=0,Zt=Bt.length;Xt<Zt;Xt++){let L=W(Bt[Xt],j[Xt],lt);v?ut(L.x,L.y+S[h-1].y,S[h-1].x+ot):ut(L.x,L.y,d+ot)}}}ae(),Y();function ae(){let et=i.length/3;if(u){let at=0,ot=X*at;for(let lt=0;lt<he;lt++){let ht=yt[lt];Ot(ht[2]+ot,ht[1]+ot,ht[0]+ot)}at=h+g*2,ot=X*at;for(let lt=0;lt<he;lt++){let ht=yt[lt];Ot(ht[0]+ot,ht[1]+ot,ht[2]+ot)}}else{for(let at=0;at<he;at++){let ot=yt[at];Ot(ot[2],ot[1],ot[0])}for(let at=0;at<he;at++){let ot=yt[at];Ot(ot[0]+X*h,ot[1]+X*h,ot[2]+X*h)}}n.addGroup(et,i.length/3-et,0)}function Y(){let et=i.length/3,at=0;K(B,at),at+=B.length;for(let ot=0,lt=I.length;ot<lt;ot++){let ht=I[ot];K(ht,at),at+=ht.length}n.addGroup(et,i.length/3-et,1)}function K(et,at){let ot=et.length;for(;--ot>=0;){let lt=ot,ht=ot-1;ht<0&&(ht=et.length-1);for(let kt=0,Bt=h+g*2;kt<Bt;kt++){let Xt=X*kt,Zt=X*(kt+1),L=at+lt+Xt,de=at+ht+Xt,ee=at+ht+Zt,R=at+lt+Zt;Et(L,de,ee,R)}}}function ut(et,at,ot){l.push(et),l.push(at),l.push(ot)}function Ot(et,at,ot){Wt(et),Wt(at),Wt(ot);let lt=i.length/3,ht=_.generateTopUV(n,i,lt-3,lt-2,lt-1);pe(ht[0]),pe(ht[1]),pe(ht[2])}function Et(et,at,ot,lt){Wt(et),Wt(at),Wt(lt),Wt(at),Wt(ot),Wt(lt);let ht=i.length/3,kt=_.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);pe(kt[0]),pe(kt[1]),pe(kt[3]),pe(kt[1]),pe(kt[2]),pe(kt[3])}function Wt(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function pe(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return i0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lo[i.type]().fromJSON(i)),new s(n,t.options)}},n0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-d),new Q(u,1-m),new Q(x,1-p)]:[new Q(o,1-l),new Q(h,1-d),new Q(f,1-m),new Q(g,1-p)]}};function i0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ji=class s extends Co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ie=class s extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*u-a;for(let S=0;S<c;S++){let v=S*d-r;m.push(v,-_,0),x.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let S=_+c*p,v=_+c*(p+1),b=_+1+c*(p+1),E=_+1+c*p;f.push(S,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Di=class s extends ue{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new P,m=new Q;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,S=_,v=_+n+1,b=_+n+2,E=_+1;o.push(S,v,E),o.push(v,b,E)}}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Yr=class s extends ue{constructor(t=new jn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2));function c(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;Xn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let _=m[g];Xn.isClockWise(_)===!0&&(m[g]=_.reverse())}let x=Xn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let _=m[g];f=f.concat(_)}for(let g=0,p=f.length;g<p;g++){let _=f[g];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,p=x.length;g<p;g++){let _=x[g],S=_[0]+d,v=_[1]+d,b=_[2]+d;n.push(S,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return s0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function s0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Re=class s extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],S=p/n,v=a+S*o,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b),C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let w=y/e,A=i+w*r;d.x=-E*Math.cos(A),d.y=b,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(w+C,1-S),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let S=h[p][_+1],v=h[p][_],b=h[p+1][_],E=h[p+1][_+1];(p!==0||a>0)&&f.push(S,v,E),(p!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class s extends ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new P,f=new P,m=new P;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=i;p++){let _=p/i*r;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let p=(i+1)*x+g-1,_=(i+1)*(x-1)+g-1,S=(i+1)*(x-1)+g,v=(i+1)*x+g;l.push(p,_,v),l.push(_,S,v)}this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var $r=class s extends ue{constructor(t=new kr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Q,h=new P,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),_(),p()}function g(S){h=t.getPointAt(S/e,h);let v=a.normals[S],b=a.binormals[S];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,y=Math.sin(C),w=-Math.cos(C);l.x=w*v.x+y*b.x,l.y=w*v.y+y*b.y,l.z=w*v.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let v=1;v<=i;v++){let b=(i+1)*(S-1)+(v-1),E=(i+1)*S+(v-1),C=(i+1)*S+v,y=(i+1)*(S-1)+v;m.push(b,E,y),m.push(E,C,y)}}function _(){for(let S=0;S<=e;S++)for(let v=0;v<=i;v++)c.x=S/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Lo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ku(i))i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ku(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function ku(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function r0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var en={clone:ts,merge:cn},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xs=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zr=class extends An{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Jr=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Uo=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fo=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Es(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function kc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Li=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Li{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,o=2*e-n;break;case qc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=t,l=2*n-e;break;case qc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+_*a[c+b]+S*a[l+b]+v*a[d+b];return r}},Bo=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},zo=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Li{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*u+m*2,_=d[p],S=d[p+1],v=t*u+m*2,b=h[v],E=h[v+1],C=c0(n,e,_,b,i);r[m]=Ud(C,x,S,E,g)}return r}};function Ud(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function l0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function c0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Ud(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=l0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),kc(t.settings)&&(n.settings={inTangents:Es(t.settings.inTangents,Array),outTangents:Es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tr:e=this.InterpolantFactoryMethodDiscrete;break;case So:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break;case Vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;kc(this.settings)&&(Gu(this.settings.inTangents,t),Gu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&up(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===co,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,kc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Gu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=So;var Ni=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Tr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};ko.prototype.ValueTypeName="color";var Go=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Go.prototype.ValueTypeName="number";var Vo=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Kr=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Tr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Wo.prototype.ValueTypeName="vector";var uo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Vu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Vu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Vu(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Xo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new Xo,qs=class{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=new WeakMap,qo=class extends qs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ts.get(a);d===void 0&&(d=[],Ts.set(a,d)),d.push({onLoad:e,onError:i})}return a}let o=Is("img");function l(){h(),e&&e(this);let d=Ts.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ts.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),uo.remove(`image:${t}`);let u=Ts.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}Ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),uo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var jr=class extends qs{constructor(t){super(t)}load(t,e,n,i){let r=new on,a=new qo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Ys=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new $t,Wu=new P,Xu=new P,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oo=new P,lo=new an,Vn=new P,ta=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oo,lo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oo,lo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new P,qu=new Q,Yu=new Q,je=class extends ta{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jc=class extends Qr{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}},ea=class extends Ys{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qn=class extends ta{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kc=class extends Qr{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ws=-90,As=1,Yo=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new je(ws,As,t,e);i.layers=this.layers,this.add(i);let r=new je(ws,As,t,e);r.layers=this.layers,this.add(r);let a=new je(ws,As,t,e);a.layers=this.layers,this.add(a);let o=new je(ws,As,t,e);o.layers=this.layers,this.add(o);let l=new je(ws,As,t,e);l.layers=this.layers,this.add(l);let c=new je(ws,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$o=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},na=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=h0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function h0(){this._document.hidden===!1&&this.reset()}var xh="\\[\\]\\.:\\/",u0=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",d0="[^"+xh.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",vh),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),x0=new RegExp("^"+f0+p0+m0+g0+"$"),v0=["material","materials","bones","map"],jc=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=jc;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var $u=new $t,Js=class{constructor(t,e,n=0,i=1/0){this.ray=new Bs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(t,e=!0,n=[]){return Qc(t,this,n,e),n.sort(Zu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Qc(t[i],this,n,e);return n.sort(Zu),n}};function Zu(s,t){return s.distance-t.distance}function Qc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Qc(r[a],t,e,!0)}}var Eh=class Eh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Eh.prototype.isMatrix2=!0;var th=Eh;function _h(s,t,e,n){let i=_0(n);switch(e){case uh:return s*t;case sl:return s*t/i.components*i.byteLength;case rl:return s*t/i.components*i.byteLength;case Hi:return s*t*2/i.components*i.byteLength;case al:return s*t*2/i.components*i.byteLength;case dh:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case ol:return s*t*4/i.components*i.byteLength;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ga:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(s,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(s,8)*Math.max(t,8)/2;case dl:case fl:case ml:case gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pl:case va:case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Ll:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ul:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _a:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(s){switch(s){case ln:case oh:return{byteLength:1,components:1};case Qs:case lh:case ze:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case zn:case el:case Pn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function E0(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Em=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:D0,batching_pars_vertex:L0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:$0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:vm,lights_toon_pars_fragment:_m,lights_phong_fragment:ym,lights_phong_pars_fragment:Sm,lights_physical_fragment:Mm,lights_physical_pars_fragment:bm,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:wm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Lm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:Hm,morphtarget_pars_vertex:km,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:_g,transmission_pars_fragment:yg,uv_pars_fragment:Sg,uv_pars_vertex:Mg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Dg,distance_vert:Lg,distance_frag:Ng,equirect_vert:Ug,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:Hg,meshlambert_vert:kg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:$g,meshphysical_vert:Zg,meshphysical_frag:Jg,meshtoon_vert:Kg,meshtoon_frag:jg,points_vert:Qg,points_frag:tx,shadow_vert:ex,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ii={basic:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:cn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:cn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:cn([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:cn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:cn([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:cn([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:cn([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:cn([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Hl={r:0,b:0,g:0},rx=new $t,af=new Qt;af.set(-1,0,0,0,1,0,0,0,1);function ax(s,t,e,n,i,r){let a=new Gt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(_){let S=!1,v=f(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===da)?(c===void 0&&(c=new pt(new Nt(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:ts(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pt(new Ie(2,2),new ve({name:"BackgroundMaterial",uniforms:ts(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(Hl,gh(s)),e.buffers.color.setClear(Hl.r,Hl.g,Hl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:x,dispose:p}}function ox(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(I,D,O,N,B){let W=!1,X=d(I,N,O,D);r!==X&&(r=X,c(r.object)),W=f(I,N,O,B),W&&m(I,N,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(I,D,O,N),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,D,O,N){let B=N.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let X=I.isInstancedMesh===!0?I.id:0,st=W[X];st===void 0&&(st={},W[X]=st);let V=st[O.id];V===void 0&&(V={},st[O.id]=V);let J=V[B];return J===void 0&&(J=u(l()),V[B]=J),J}function u(I){let D=[],O=[],N=[];for(let B=0;B<e;B++)D[B]=0,O[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,D,O,N){let B=r.attributes,W=D.attributes,X=0,st=O.getAttributes();for(let V in st)if(st[V].location>=0){let j=B[V],At=W[V];if(At===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),j===void 0||j.attribute!==At||At&&j.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function m(I,D,O,N){let B={},W=D.attributes,X=0,st=O.getAttributes();for(let V in st)if(st[V].location>=0){let j=W[V];j===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let At={};At.attribute=j,j&&j.data&&(At.data=j.data),B[V]=At,X++}r.attributes=B,r.attributesNum=X,r.index=N}function x(){let I=r.newAttributes;for(let D=0,O=I.length;D<O;D++)I[D]=0}function g(I){p(I,0)}function p(I,D){let O=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),B[I]!==D&&(s.vertexAttribDivisor(I,D),B[I]=D)}function _(){let I=r.newAttributes,D=r.enabledAttributes;for(let O=0,N=D.length;O<N;O++)D[O]!==I[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function S(I,D,O,N,B,W,X){X===!0?s.vertexAttribIPointer(I,D,O,B,W):s.vertexAttribPointer(I,D,O,N,B,W)}function v(I,D,O,N){x();let B=N.attributes,W=O.getAttributes(),X=D.defaultAttributeValues;for(let st in W){let V=W[st];if(V.location>=0){let J=B[st];if(J===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let j=J.normalized,At=J.itemSize,yt=t.get(J);if(yt===void 0)continue;let he=yt.buffer,te=yt.type,ae=yt.bytesPerElement,Y=te===s.INT||te===s.UNSIGNED_INT||J.gpuType===el;if(J.isInterleavedBufferAttribute){let K=J.data,ut=K.stride,Ot=J.offset;if(K.isInstancedInterleavedBuffer){for(let Et=0;Et<V.locationSize;Et++)p(V.location+Et,K.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Et=0;Et<V.locationSize;Et++)g(V.location+Et);s.bindBuffer(s.ARRAY_BUFFER,he);for(let Et=0;Et<V.locationSize;Et++)S(V.location+Et,At/V.locationSize,te,j,ut*ae,(Ot+At/V.locationSize*Et)*ae,Y)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,J.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<V.locationSize;K++)g(V.location+K);s.bindBuffer(s.ARRAY_BUFFER,he);for(let K=0;K<V.locationSize;K++)S(V.location+K,At/V.locationSize,te,j,At*ae,At/V.locationSize*K*ae,Y)}}else if(X!==void 0){let j=X[st];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}_()}function b(){w();for(let I in n){let D=n[I];for(let O in D){let N=D[O];for(let B in N){let W=N[B];for(let X in W)h(W[X].object),delete W[X];delete N[B]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let O in D){let N=D[O];for(let B in N){let W=N[B];for(let X in W)h(W[X].object),delete W[X];delete N[B]}}delete n[I.id]}function C(I){for(let D in n){let O=n[D];for(let N in O){let B=O[N];if(B[I.id]===void 0)continue;let W=B[I.id];for(let X in W)h(W[X].object),delete W[X];delete B[I.id]}}}function y(I){for(let D in n){let O=n[D],N=I.isInstancedMesh===!0?I.id:0,B=O[N];if(B!==void 0){for(let W in B){let X=B[W];for(let st in X)h(X[st].object),delete X[st];delete B[W]}delete O[N],Object.keys(O).length===0&&delete n[D]}}}function w(){A(),a=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function lx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===ze&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ln&&C!==Pn&&!y&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:E}}function hx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new pn,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,S=_*4,v=p.clippingState||null;l.value=v,v=h(m,u,S,f);for(let b=0;b!==S;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var nr=4,ux=6,dx=20,fx=256,ya=new Qn,Od=new Gt,Th=null,wh=0,Ah=0,Rh=!1,px=new P,es=new P,sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=px}=r;Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Th,wh,Ah),this._renderer.xr.enabled=Rh,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:ze,format:mn,colorSpace:wr,depthBuffer:!1},i=Bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(r)),this._blurMaterial=xx(r,t,e),this._ggxMaterial=gx(r,t,e)}return i}_compileMaterial(t){let e=new pt(new ue,t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,i,r){let l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Od),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Nt,new Se({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(Od),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;er(i,v*b,S>2?b:0,b,b),d.setRenderTarget(i),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Bi||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-nr?n-m+nr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,er(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(o,ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,er(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(o,ya)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-nr?i-this._lodMax+nr:0),u=4*(this._cubeSize-h);er(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ya)}};function mx(s){let t=[],e=[],n=s,i=s-nr+1+ux;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let _=p%3*2/3-1,S=p>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];m.set(v,f*u*p);for(let b=0;b<u;b++){let E=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?es.set(1,C,E):p===1?es.set(-E,1,-C):p===2?es.set(-E,C,1):p===3?es.set(-1,C,-E):p===4?es.set(-E,-1,C):es.set(E,C,-1),es.toArray(x,(p*u+b)*f)}}let g=new ue;g.setAttribute("position",new Be(m,f)),g.setAttribute("outputDirection",new Be(x,f)),e.push(new pt(g,null)),n>nr&&n--}return{lodMeshes:e,sizeLods:t}}function Bd(s,t,e){let n=new Ae(s,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function gx(s,t,e){return new ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function xx(s,t,e){return new ve({name:"SphericalGaussianBlur",defines:{SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function zd(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function Hd(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gl=class extends Ae{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nt(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ve});r.uniforms.tEquirect.value=e;let a=new pt(i,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=Qe),new Yo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function vx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===jo||f===Qo)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Gl(m.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===jo||f===Qo,x=f===Bi||f===Qi;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new sr(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new sr(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===jo?u.mapping=Bi:f===Qo&&(u.mapping=Qi),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function _x(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Yi("WebGLRenderer: "+n+" extension not supported."),i}}}function yx(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let S=0,v=_.length;S<v;S+=3){let b=_[S+0],E=_[S+1],C=_[S+2];u.push(b,E,E,C,C,b)}}else{let _=m.array;x=m.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let b=S+0,E=S+1,C=S+2;u.push(b,E,E,C,C,b)}}let g=new(m.count>=65535?Dr:Ir)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Sx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bx(s,t,e){let n=new WeakMap,i=new Ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*d),C=new Cr(E,v,b,d);C.type=Pn,C.needsUpdate=!0;let y=S*4;for(let A=0;A<d;A++){let I=g[A],D=p[A],O=_[A],N=v*b*4*A;for(let B=0;B<I.count;B++){let W=B*y;f===!0&&(i.fromBufferAttribute(I,B),E[N+W+0]=i.x,E[N+W+1]=i.y,E[N+W+2]=i.z,E[N+W+3]=0),m===!0&&(i.fromBufferAttribute(D,B),E[N+W+4]=i.x,E[N+W+5]=i.y,E[N+W+6]=i.z,E[N+W+7]=0),x===!0&&(i.fromBufferAttribute(O,B),E[N+W+8]=i.x,E[N+W+9]=i.y,E[N+W+10]=i.z,E[N+W+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Q(v,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Ex(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Tx={[aa]:"LINEAR_TONE_MAPPING",[oa]:"REINHARD_TONE_MAPPING",[la]:"CINEON_TONE_MAPPING",[Oi]:"ACES_FILMIC_TONE_MAPPING",[ha]:"AGX_TONE_MAPPING",[ua]:"NEUTRAL_TONE_MAPPING",[ca]:"CUSTOM_TONE_MAPPING"};function wx(s,t,e,n,i,r){let a=new Ae(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ue;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new Xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pt(c,h),u=new Qn(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,_=[],S=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<_.length;E++){let C=_[E];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let b=a.width,E=a.height;_.length>0&&o===null&&(o=new Ae(b,E,{type:ze,depthBuffer:!1,stencilBuffer:!1}),l=new Ae(b,E,{type:ze,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let y=_[C];y.setSize&&y.setSize(b,E)}},this.begin=function(v,b){if(x||v.toneMapping===Bn&&_.length===0)return!1;if(p=b,b!==null){let E=b.width,C=b.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return S===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Bn,!0},this.hasRenderPass=function(){return S},this.end=function(v,b){v.toneMapping=g,x=!0;let E=a,C=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(v,C,E,b),w.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},oe.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let y=Tx[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var of=new on,Ih=new Jn(1,1),lf=new Cr,cf=new To,hf=new Ur,kd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function rr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=kd[i];if(r===void 0&&(r=new Float32Array(i),kd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wl(s,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function Ix(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Xd.set(n),s.uniformMatrix2fv(this.addr,!1,Xd),Je(e,n)}}function Dx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Wd.set(n),s.uniformMatrix3fv(this.addr,!1,Wd),Je(e,n)}}function Lx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Vd.set(n),s.uniformMatrix4fv(this.addr,!1,Vd),Je(e,n)}}function Nx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function Bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function Gx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ih.compareFunction=e.isReversedDepthBuffer()?zl:Bl,r=Ih):r=of,e.setTexture2D(t||r,i)}function Vx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cf,i)}function Wx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hf,i)}function Xx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lf,i)}function qx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(s,t){s.uniform1fv(this.addr,t)}function $x(s,t){let e=rr(t,this.size,2);s.uniform2fv(this.addr,e)}function Zx(s,t){let e=rr(t,this.size,3);s.uniform3fv(this.addr,e)}function Jx(s,t){let e=rr(t,this.size,4);s.uniform4fv(this.addr,e)}function Kx(s,t){let e=rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jx(s,t){let e=rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qx(s,t){let e=rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tv(s,t){s.uniform1iv(this.addr,t)}function ev(s,t){s.uniform2iv(this.addr,t)}function nv(s,t){s.uniform3iv(this.addr,t)}function iv(s,t){s.uniform4iv(this.addr,t)}function sv(s,t){s.uniform1uiv(this.addr,t)}function rv(s,t){s.uniform2uiv(this.addr,t)}function av(s,t){s.uniform3uiv(this.addr,t)}function ov(s,t){s.uniform4uiv(this.addr,t)}function lv(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ih:a=of;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function cv(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cf,r[a])}function hv(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hf,r[a])}function uv(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lf,r[a])}function dv(s){switch(s){case 5126:return Yx;case 35664:return $x;case 35665:return Zx;case 35666:return Jx;case 35674:return Kx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}var Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dv(e.type)}},Nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function qd(s,t){s.seq.push(t),s.map[t.id]=t}function fv(s,t,e){let n=s.name,i=n.length;for(Ch.lastIndex=0;;){let r=Ch.exec(n),a=Ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qd(e,c===void 0?new Dh(o,s,t):new Lh(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Nh(o),qd(e,d)),e=d}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);fv(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Yd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var pv=37297,mv=0;function gv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $d=new Qt;function xv(s){oe._getMatrix($d,oe.workingColorSpace,s);let t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Ar:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+gv(s.getShaderSource(t),o)}else return r}function vv(s,t){let e=xv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var _v={[aa]:"Linear",[oa]:"Reinhard",[la]:"Cineon",[Oi]:"ACESFilmic",[ha]:"AgX",[ua]:"Neutral",[ca]:"Custom"};function yv(s,t){let e=_v[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kl=new P;function Sv(){oe.getLuminanceCoefficients(kl);let s=kl.x.toFixed(4),t=kl.y.toFixed(4),e=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function bv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ev(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ma(s){return s!==""}function Jd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(s){return s.replace(Tv,Av)}var wv=new Map;function Av(s,t){let e=ie[t];if(e===void 0){let n=wv.get(t);if(n!==void 0)e=ie[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uh(e)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(s){return s.replace(Rv,Cv)}function Cv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Pv={[Ki]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Iv(s){return Pv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dv={[Bi]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function Lv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Dv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nv={[Qi]:"ENVMAP_MODE_REFRACTION"};function Uv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fv={[Ko]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function Ov(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[s.combine]||"ENVMAP_BLENDING_NONE"}function Bv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Iv(e),c=Lv(e),h=Uv(e),d=Ov(e),u=Bv(e),f=Mv(e),m=bv(r),x=i.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Bn?yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Uh(a),a=Jd(a,e),a=Kd(a,e),o=Uh(o),o=Jd(o,e),o=Kd(o,e),a=jd(a),o=jd(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+a,v=_+p+o,b=Yd(i,i.VERTEX_SHADER,S),E=Yd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,b),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",O=i.getShaderInfoLog(b)||"",N=i.getShaderInfoLog(E)||"",B=D.trim(),W=O.trim(),X=N.trim(),st=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,E);else{let J=Zd(i,b,"vertex"),j=Zd(i,E,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+J+`
`+j)}else B!==""?Yt("WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(V=!1);V&&(I.diagnostics={runnable:st,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(b),i.deleteShader(E),y=new ir(i,x),w=Ev(i,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(x,pv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var Hv=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oh(t),e.set(t,n)),n}},Oh=class{constructor(t){this.id=Hv++,this.code=t,this.usedTimes=0}};function kv(s){return s===Hi||s===va||s===_a}function Gv(s,t,e,n,i,r){let a=new Ns,o=new Fh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,A,I,D,O){let N=I.fog,B=D.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||W,X),V=st&&st.mapping===da?st.image.height:null,J=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Yt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,At=j!==void 0?j.length:0,yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let he,te,ae,Y;if(J){let Ce=ii[J];he=Ce.vertexShader,te=Ce.fragmentShader}else{he=y.vertexShader,te=y.fragmentShader;let Ce=o.getVertexShaderStage(y),_e=o.getFragmentShaderStage(y);o.update(y,Ce,_e),ae=Ce.id,Y=_e.id}let K=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,Et=D.isBatchedMesh===!0,Wt=!!y.map,pe=!!y.matcap,et=!!st,at=!!y.aoMap,ot=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,ht=!!y.normalMap,kt=!!y.displacementMap,Bt=!!y.emissiveMap,Xt=!!y.metalnessMap,Zt=!!y.roughnessMap,L=y.anisotropy>0,de=y.clearcoat>0,ee=y.dispersion>0,R=y.retroreflectivity>0,M=y.iridescence>0,z=y.sheen>0,H=y.transmission>0,$=L&&!!y.anisotropyMap,ct=de&&!!y.clearcoatMap,dt=de&&!!y.clearcoatNormalMap,Z=de&&!!y.clearcoatRoughnessMap,nt=M&&!!y.iridescenceMap,gt=M&&!!y.iridescenceThicknessMap,Ut=z&&!!y.sheenColorMap,mt=z&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Pt=!!y.specularColorMap,zt=!!y.specularIntensityMap,Jt=H&&!!y.transmissionMap,F=H&&!!y.thicknessMap,vt=!!y.gradientMap,tt=!!y.alphaMap,_t=y.alphaTest>0,Tt=!!y.alphaHash,rt=!!y.extensions,Ht=Bn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=s.toneMapping);let Lt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:he,fragmentShader:te,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Et,batchingColor:Et&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:pe,envMap:et,envMapMode:et&&st.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:ht,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:ht&&y.normalMapType===xd,normalMapTangentSpace:ht&&y.normalMapType===tr,packedNormalMap:ht&&y.normalMapType===tr&&kv(y.normalMap.format),metalnessMap:Xt,roughnessMap:Zt,anisotropy:L,anisotropyMap:$,clearcoat:de,clearcoatMap:ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:Z,dispersion:ee,retroreflection:R,iridescence:M,iridescenceMap:nt,iridescenceThicknessMap:gt,sheen:z,sheenColorMap:Ut,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:Pt,specularIntensityMap:zt,transmission:H,transmissionMap:Jt,thicknessMap:F,gradientMap:vt,opaque:y.transparent===!1&&y.blending===js&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:Tt,combine:y.combine,mapUv:Wt&&m(y.map.channel),aoMapUv:at&&m(y.aoMap.channel),lightMapUv:ot&&m(y.lightMap.channel),bumpMapUv:lt&&m(y.bumpMap.channel),normalMapUv:ht&&m(y.normalMap.channel),displacementMapUv:kt&&m(y.displacementMap.channel),emissiveMapUv:Bt&&m(y.emissiveMap.channel),metalnessMapUv:Xt&&m(y.metalnessMap.channel),roughnessMapUv:Zt&&m(y.roughnessMap.channel),anisotropyMapUv:$&&m(y.anisotropyMap.channel),clearcoatMapUv:ct&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&m(y.sheenRoughnessMap.channel),specularMapUv:ft&&m(y.specularMap.channel),specularColorMapUv:Pt&&m(y.specularColorMap.channel),specularIntensityMapUv:zt&&m(y.specularIntensityMap.channel),transmissionMapUv:Jt&&m(y.transmissionMap.channel),thicknessMapUv:F&&m(y.thicknessMap.channel),alphaMapUv:tt&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||L),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Wt||tt),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){let w=f[y.type],A;if(w){let I=ii[w];A=en.clone(I.uniforms)}else A=y.uniforms;return A}function v(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new zv(s,w,y,i),c.push(A),h.set(w,A)),A}function b(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:C}}function Vv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Wv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function tf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ef(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=p),t++,_}function l(u,f,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let S=o(u,f,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):e.push(S)}function c(u,f,m,x,g,p){let _=o(u,f,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||Wv),n.length>1&&n.sort(f||tf),i.length>1&&i.sort(f||tf)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Xv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ef,s.set(n,[a])):i>=r.length?(a=new ef,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function qv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Yv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var $v=0;function Zv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jv(s){let t=new qv,e=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new $t,a=new $t;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,S=0,v=0,b=0,E=0,C=0,y=0,w=0,A=0;c.sort(Zv);for(let D=0,O=c.length;D<O;D++){let N=c[D],B=N.color,W=N.intensity,X=N.distance,st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Hi?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*W,d+=B.g*W,u+=B.b*W;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],W);A++}else if(N.isSunLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=st;let At=J.getViewportCount();for(let yt=0;yt<At;yt++)n.sunShadowMatrix[x+yt]=J.getMatrix(yt),n.sunShadowCascade[x+yt]=J._cascadeData[yt];x+=At,m++}n.sun[f]=V,f++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=N.shadow.matrix,b++}n.directional[g]=V,g++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(B).multiplyScalar(W),V.distance=X,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[_]=V;let J=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,J.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,N.castShadow){let j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=st,C++}_++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(B).multiplyScalar(W),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=V,S++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=V,p++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(W),V.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[v]=V,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==C||I.numSpotMaps!==y||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=C,I.numSpotMaps=y,I.numLightProbes=A,n.version=$v++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function nf(s){let t=new Jv(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Kv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new nf(s),t.set(i,[o])):r>=a.length?(o=new nf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,t_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],e_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sf=new $t,Sa=new P,Ph=new P;function n_(s,t,e){let n=new Hs,i=new Q,r=new Q,a=new Ue,o=new Uo,l=new Fo,c={},h=e.maxTextureSize,d={[Fi]:tn,[tn]:Fi,[Fe]:Fe},u=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:jv,fragmentShader:Qv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let p=this.type;this.render=function(E,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ju&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);let w=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ve),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=E.length;N<B;N++){let W=E[N],X=W.shadow;if(X===void 0){Yt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let st=X.getFrameExtents();i.multiply(st),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,X.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=V,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ks){if(W.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ae(i.x,i.y,{format:Hi,type:ze,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Jn(i.x,i.y,Pn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=qn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke}else W.isPointLight?(X.map=new Gl(i.x),X.map.depthTexture=new Ro(i.x,zn)):(X.map=new Ae(i.x,i.y),X.map.depthTexture=new Jn(i.x,i.y,zn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=qn,this.type===Ki?(X.map.depthTexture.compareFunction=V?zl:Bl,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,y);for(let j=0;j<J;j++){let At=X.getCamera(j);if(W.isPointLight){let yt=X.camera,he=X.matrix,te=W.distance||yt.far;te!==yt.far&&(yt.far=te,yt.updateProjectionMatrix()),Sa.setFromMatrixPosition(W.matrixWorld),yt.position.copy(Sa),Ph.copy(yt.position),Ph.add(t_[j]),yt.up.copy(e_[j]),yt.lookAt(Ph),yt.updateMatrixWorld(),he.makeTranslation(-Sa.x,-Sa.y,-Sa.z),sf.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(sf,yt.coordinateSystem,yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,j),s.clear();else{j===0&&(s.setRenderTarget(X.map),s.clear());let yt=X.getViewport(j);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),D.viewport(a)}n=X.getFrustum(j),v(C,y,At,W,this.type)}X.isPointLightShadow!==!0&&this.type===Ks&&_(X,y),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,A,I)};function _(E,C){let y=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ae(i.x,i.y,{format:Hi,type:ze}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,y,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,y,f,x,null)}function S(E,C,y,w){let A=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=y.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=A.uuid,O=C.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let B=N[O];B===void 0&&(B=A.clone(),N[O]=B,C.addEventListener("dispose",b)),A=B}if(A.visible=C.visible,A.wireframe=C.wireframe,w===Ks?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:d[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=y}return A}function v(E,C,y,w,A){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Ks)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let O=t.update(E),N=E.material;if(Array.isArray(N)){let B=O.groups;for(let W=0,X=B.length;W<X;W++){let st=B[W],V=N[st.materialIndex];if(V&&V.visible){let J=S(E,V,w,A);E.onBeforeShadow(s,E,C,y,O,J,st),s.renderBufferDirect(y,null,O,J,E,st),E.onAfterShadow(s,E,C,y,O,J,st)}}}else if(N.visible){let B=S(E,N,w,A);E.onBeforeShadow(s,E,C,y,O,B,null),s.renderBufferDirect(y,null,O,B,E,null),E.onAfterShadow(s,E,C,y,O,B,null)}}let D=E.children;for(let O=0,N=D.length;O<N;O++)v(D[O],C,y,w,A)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let w=c[y],A=E.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function i_(s,t){function e(){let F=!1,vt=new Ue,tt=null,_t=new Ue(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!F&&(s.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,rt,Ht,Lt,Ce){Ce===!0&&(Tt*=Lt,rt*=Lt,Ht*=Lt),vt.set(Tt,rt,Ht,Lt),_t.equals(vt)===!1&&(s.clearColor(Tt,rt,Ht,Lt),_t.copy(vt))},reset:function(){F=!1,tt=null,_t.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,tt=null,_t=null,Tt=null;return{setReversed:function(rt){if(vt!==rt){let Ht=t.get("EXT_clip_control");rt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),vt=rt;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(rt){rt?K(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!F&&(s.depthMask(rt),tt=rt)},setFunc:function(rt){if(vt&&(rt=Rd[rt]),_t!==rt){switch(rt){case fo:s.depthFunc(s.NEVER);break;case po:s.depthFunc(s.ALWAYS);break;case mo:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case go:s.depthFunc(s.EQUAL);break;case xo:s.depthFunc(s.GEQUAL);break;case vo:s.depthFunc(s.GREATER);break;case _o:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=rt}},setLocked:function(rt){F=rt},setClear:function(rt){Tt!==rt&&(Tt=rt,vt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){F=!1,tt=null,_t=null,Tt=null,vt=!1}}}function i(){let F=!1,vt=null,tt=null,_t=null,Tt=null,rt=null,Ht=null,Lt=null,Ce=null;return{setTest:function(_e){F||(_e?K(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(_e){vt!==_e&&!F&&(s.stencilMask(_e),vt=_e)},setFunc:function(_e,Dn,kn){(tt!==_e||_t!==Dn||Tt!==kn)&&(s.stencilFunc(_e,Dn,kn),tt=_e,_t=Dn,Tt=kn)},setOp:function(_e,Dn,kn){(rt!==_e||Ht!==Dn||Lt!==kn)&&(s.stencilOp(_e,Dn,kn),rt=_e,Ht=Dn,Lt=kn)},setLocked:function(_e){F=_e},setClear:function(_e){Ce!==_e&&(s.clearStencil(_e),Ce=_e)},reset:function(){F=!1,vt=null,tt=null,_t=null,Tt=null,rt=null,Ht=null,Lt=null,Ce=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,b=null,E=null,C=null,y=new Gt(0,0,0),w=0,A=!1,I=null,D=null,O=null,N=null,B=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=st>=1):V.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=st>=2);let J=null,j={},At=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),he=new Ue().fromArray(At),te=new Ue().fromArray(yt);function ae(F,vt,tt,_t){let Tt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(F,rt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<tt;Ht++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(vt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return rt}let Y={};Y[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Cs),lt(!1),ht(eh),K(s.CULL_FACE),at(Ve);function K(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function ut(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Ot(F,vt){return u[F]!==vt?(s.bindFramebuffer(F,vt),u[F]=vt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=vt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function Et(F,vt){let tt=m,_t=!1;if(F){tt=f.get(vt),tt===void 0&&(tt=[],f.set(vt,tt));let Tt=F.textures;if(tt.length!==Tt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Ht=Tt.length;rt<Ht;rt++)tt[rt]=s.COLOR_ATTACHMENT0+rt;tt.length=Tt.length,_t=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(tt)}function Wt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let pe={[Cn]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[td]:s.FUNC_REVERSE_SUBTRACT};pe[ed]=s.MIN,pe[nd]=s.MAX;let et={[ji]:s.ZERO,[id]:s.ONE,[sd]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[ra]:s.DST_COLOR,[sa]:s.DST_ALPHA,[rd]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[od]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[hd]:s.ONE_MINUS_CONSTANT_COLOR,[ud]:s.CONSTANT_ALPHA,[dd]:s.ONE_MINUS_CONSTANT_ALPHA};function at(F,vt,tt,_t,Tt,rt,Ht,Lt,Ce,_e){if(F===Ve){g===!0&&(ut(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),F!==Jo){if(F!==p||_e!==A){if((_!==Cn||b!==Cn)&&(s.blendEquation(s.FUNC_ADD),_=Cn,b=Cn),_e)switch(F){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFunc(s.ONE,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ih:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",F);break}else switch(F){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nh:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",F);break}S=null,v=null,E=null,C=null,y.set(0,0,0),w=0,p=F,A=_e}return}Tt=Tt||vt,rt=rt||tt,Ht=Ht||_t,(vt!==_||Tt!==b)&&(s.blendEquationSeparate(pe[vt],pe[Tt]),_=vt,b=Tt),(tt!==S||_t!==v||rt!==E||Ht!==C)&&(s.blendFuncSeparate(et[tt],et[_t],et[rt],et[Ht]),S=tt,v=_t,E=rt,C=Ht),(Lt.equals(y)===!1||Ce!==w)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Ce),y.copy(Lt),w=Ce),p=F,A=!1}function ot(F,vt){F.side===Fe?ut(s.CULL_FACE):K(s.CULL_FACE);let tt=F.side===tn;vt&&(tt=!tt),lt(tt),F.blending===js&&F.transparent===!1?at(Ve):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _t=F.stencilWrite;o.setTest(_t),_t&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function ht(F){F!==Ju?(K(s.CULL_FACE),F!==D&&(F===eh?s.cullFace(s.BACK):F===Ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),D=F}function kt(F){F!==O&&(X&&s.lineWidth(F),O=F)}function Bt(F,vt,tt){F?(K(s.POLYGON_OFFSET_FILL),(N!==vt||B!==tt)&&(N=vt,B=tt,a.getReversed()&&(vt=-vt),s.polygonOffset(vt,tt))):ut(s.POLYGON_OFFSET_FILL)}function Xt(F){F?K(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=s.TEXTURE0+W-1),J!==F&&(s.activeTexture(F),J=F)}function L(F,vt,tt){tt===void 0&&(J===null?tt=s.TEXTURE0+W-1:tt=J);let _t=j[tt];_t===void 0&&(_t={type:void 0,texture:void 0},j[tt]=_t),(_t.type!==F||_t.texture!==vt)&&(J!==tt&&(s.activeTexture(tt),J=tt),s.bindTexture(F,vt||Y[F]),_t.type=F,_t.texture=vt)}function de(){let F=j[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function M(){try{s.texSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function z(){try{s.texSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function ct(){try{s.texStorage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function dt(){try{s.texStorage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function Z(){try{s.texImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function nt(){try{s.texImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function gt(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function Ut(F,vt){d[F]!==vt&&(s.pixelStorei(F,vt),d[F]=vt)}function mt(F){he.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),he.copy(F))}function ft(F){te.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Pt(F,vt){let tt=c.get(vt);tt===void 0&&(tt=new WeakMap,c.set(vt,tt));let _t=tt.get(F);_t===void 0&&(_t=s.getUniformBlockIndex(vt,F.name),tt.set(F,_t))}function zt(F,vt){let _t=c.get(vt).get(F);l.get(vt)!==_t&&(s.uniformBlockBinding(vt,_t,F.__bindingPointIndex),l.set(vt,_t))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,j={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,b=null,E=null,C=null,y=new Gt(0,0,0),w=0,A=!1,I=null,D=null,O=null,N=null,B=null,he.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ut,bindFramebuffer:Ot,drawBuffers:Et,useProgram:Wt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:ht,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:Xt,activeTexture:Zt,bindTexture:L,unbindTexture:de,compressedTexImage2D:ee,compressedTexImage3D:R,texImage2D:Z,texImage3D:nt,pixelStorei:Ut,getParameter:gt,updateUBOMapping:Pt,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:dt,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:mt,viewport:ft,reset:Jt}}function s_(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return m?new OffscreenCanvas(R,M):Is("canvas")}function g(R,M,z){let H=1,$=ee(R);if(($.width>z||$.height>z)&&(H=z/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(H*$.width),dt=Math.floor(H*$.height);u===void 0&&(u=x(ct,dt));let Z=M?x(ct,dt):u;return Z.width=ct,Z.height=dt,Z.getContext("2d").drawImage(R,0,0,ct,dt),Yt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+dt+")."),Z}else return"data"in R&&Yt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function _(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,M,z,H,$,ct=!1){if(R!==null){if(s[R]!==void 0)return s[R];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;H&&(dt=t.get("EXT_texture_norm16"),dt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),z===s.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),M===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),z===s.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),z===s.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){let nt=ct?Ar:oe.getTransfer($);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=nt===ge?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),z===s.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(R,M){let z;return R?M===null||M===zn||M===zi?z=s.DEPTH24_STENCIL8:M===Pn?z=s.DEPTH32F_STENCIL8:M===Qs&&(z=s.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zn||M===zi?z=s.DEPTH_COMPONENT24:M===Pn?z=s.DEPTH_COMPONENT32F:M===Qs&&(z=s.DEPTH_COMPONENT16),z}function E(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function y(R){let M=R.target;M.removeEventListener("dispose",y),I(M)}function w(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,H=f.get(z);if(H){let $=H[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(R),Object.keys(H).length===0&&f.delete(z)}n.remove(R)}function A(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let z=R.source,H=f.get(z);delete H[M.__cacheKey],a.memory.textures--}function I(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let $=0;$<M.__webglFramebuffer[H].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[H][$]);else s.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)s.deleteFramebuffer(M.__webglFramebuffer[H]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let H=0,$=z.length;H<$;H++){let ct=n.get(z[H]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(R)}let D=0;function O(){D=0}function N(){return D}function B(R){D=R}function W(){let R=D;return R>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function X(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function st(R,M){let z=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let H=R.image;if(H===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function V(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ut(z,R,M);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function J(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ut(z,R,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function j(R,M){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ot(z,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let At={[xe]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},yt={[ke]:s.NEAREST,[md]:s.NEAREST_MIPMAP_NEAREST,[fa]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},he={[_d]:s.NEVER,[Ed]:s.ALWAYS,[yd]:s.LESS,[Bl]:s.LEQUAL,[Sd]:s.EQUAL,[zl]:s.GEQUAL,[Md]:s.GREATER,[bd]:s.NOTEQUAL};function te(R,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===tl||M.magFilter===fa||M.magFilter===ti||M.minFilter===Qe||M.minFilter===tl||M.minFilter===fa||M.minFilter===ti)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,At[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,At[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,At[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,yt[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ke||M.minFilter!==fa&&M.minFilter!==ti||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let H=M.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ct=X(M);if(ct!==R.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[ct].usedTimes++;let dt=$[R.__cacheKey];dt!==void 0&&($[R.__cacheKey].usedTimes--,dt.usedTimes===0&&A(M)),R.__cacheKey=ct,R.__webglTexture=$[ct].texture}return z}function Y(R,M,z){return Math.floor(Math.floor(R/z)/M)}function K(R,M,z,H){let ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,H,M.data);else{ct.sort((Ut,mt)=>Ut.start-mt.start);let dt=0;for(let Ut=1;Ut<ct.length;Ut++){let mt=ct[dt],ft=ct[Ut],Pt=mt.start+mt.count,zt=Y(ft.start,M.width,4),Jt=Y(mt.start,M.width,4);ft.start<=Pt+1&&zt===Jt&&Y(ft.start+ft.count-1,M.width,4)===zt?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++dt,ct[dt]=ft)}ct.length=dt+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ut=0,mt=ct.length;Ut<mt;Ut++){let ft=ct[Ut],Pt=Math.floor(ft.start/4),zt=Math.ceil(ft.count/4),Jt=Pt%M.width,F=Math.floor(Pt/M.width),vt=zt,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Jt,F,vt,tt,z,H,M.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function ut(R,M,z){let H=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=s.TEXTURE_3D);let $=ae(R,M),ct=M.source;e.bindTexture(H,R.__webglTexture,s.TEXTURE0+z);let dt=n.get(ct);if(ct.version!==dt.__version||$===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let tt=oe.getPrimaries(oe.workingColorSpace),_t=M.colorSpace===vi?null:oe.getPrimaries(M.colorSpace),Tt=M.colorSpace===vi||tt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let nt=g(M.image,!1,i.maxTextureSize);nt=de(M,nt);let gt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),mt=v(M.internalFormat,gt,Ut,M.normalized,M.colorSpace,M.isVideoTexture);te(H,M);let ft,Pt=M.mipmaps,zt=M.isVideoTexture!==!0,Jt=dt.__version===void 0||$===!0,F=ct.dataReady,vt=E(M,nt);if(M.isDepthTexture)mt=b(M.format===ei,M.type),Jt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,mt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,mt,nt.width,nt.height,0,gt,Ut,null));else if(M.isDataTexture)if(Pt.length>0){zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,vt,mt,Pt[0].width,Pt[0].height);for(let tt=0,_t=Pt.length;tt<_t;tt++)ft=Pt[tt],zt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Ut,ft.data):e.texImage2D(s.TEXTURE_2D,tt,mt,ft.width,ft.height,0,gt,Ut,ft.data);M.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(s.TEXTURE_2D,vt,mt,nt.width,nt.height),F&&K(M,nt,gt,Ut)):e.texImage2D(s.TEXTURE_2D,0,mt,nt.width,nt.height,0,gt,Ut,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,mt,Pt[0].width,Pt[0].height,nt.depth);for(let tt=0,_t=Pt.length;tt<_t;tt++)if(ft=Pt[tt],M.format!==mn)if(gt!==null)if(zt){if(F)if(M.layerUpdates.size>0){let Tt=_h(ft.width,ft.height,M.format,M.type);for(let rt of M.layerUpdates){let Ht=ft.data.subarray(rt*Tt/ft.data.BYTES_PER_ELEMENT,(rt+1)*Tt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,rt,ft.width,ft.height,1,gt,Ht)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,mt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,Ut,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,mt,ft.width,ft.height,nt.depth,0,gt,Ut,ft.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,vt,mt,Pt[0].width,Pt[0].height);for(let tt=0,_t=Pt.length;tt<_t;tt++)ft=Pt[tt],M.format!==mn?gt!==null?zt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,mt,ft.width,ft.height,0,ft.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Ut,ft.data):e.texImage2D(s.TEXTURE_2D,tt,mt,ft.width,ft.height,0,gt,Ut,ft.data)}else if(M.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,mt,nt.width,nt.height,nt.depth),F)if(M.layerUpdates.size>0){let tt=_h(nt.width,nt.height,M.format,M.type);for(let _t of M.layerUpdates){let Tt=nt.data.subarray(_t*tt/nt.data.BYTES_PER_ELEMENT,(_t+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,nt.width,nt.height,1,gt,Ut,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ut,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,nt.width,nt.height,nt.depth,0,gt,Ut,nt.data);else if(M.isData3DTexture)zt?(Jt&&e.texStorage3D(s.TEXTURE_3D,vt,mt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ut,nt.data)):e.texImage3D(s.TEXTURE_3D,0,mt,nt.width,nt.height,nt.depth,0,gt,Ut,nt.data);else if(M.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(s.TEXTURE_2D,vt,mt,nt.width,nt.height);else{let tt=nt.width,_t=nt.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,mt,tt,_t,0,gt,Ut,null),tt>>=1,_t>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(M),tt.onpaint=_t=>{let Tt=_t.changedElements;for(let rt of d)Tt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Tt=s.RGBA,rt=s.RGBA,Ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,rt,Ht,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(zt&&Jt){let tt=ee(Pt[0]);e.texStorage2D(s.TEXTURE_2D,vt,mt,tt.width,tt.height)}for(let tt=0,_t=Pt.length;tt<_t;tt++)ft=Pt[tt],zt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,gt,Ut,ft):e.texImage2D(s.TEXTURE_2D,tt,mt,gt,Ut,ft);M.generateMipmaps=!1}else if(zt){if(Jt){let tt=ee(nt);e.texStorage2D(s.TEXTURE_2D,vt,mt,tt.width,tt.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ut,nt)}else e.texImage2D(s.TEXTURE_2D,0,mt,gt,Ut,nt);p(M)&&_(H),dt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ot(R,M,z){if(M.image.length!==6)return;let H=ae(R,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let ct=n.get($);if($.version!==ct.__version||H===!0){e.activeTexture(s.TEXTURE0+z);let dt=oe.getPrimaries(oe.workingColorSpace),Z=M.colorSpace===vi?null:oe.getPrimaries(M.colorSpace),nt=M.colorSpace===vi||dt===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let gt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ut=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let rt=0;rt<6;rt++)!gt&&!Ut?mt[rt]=g(M.image[rt],!0,i.maxCubemapSize):mt[rt]=Ut?M.image[rt].image:M.image[rt],mt[rt]=de(M,mt[rt]);let ft=mt[0],Pt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type),Jt=v(M.internalFormat,Pt,zt,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,vt=ct.__version===void 0||H===!0,tt=$.dataReady,_t=E(M,ft);te(s.TEXTURE_CUBE_MAP,M);let Tt;if(gt){F&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Jt,ft.width,ft.height);for(let rt=0;rt<6;rt++){Tt=mt[rt].mipmaps;for(let Ht=0;Ht<Tt.length;Ht++){let Lt=Tt[Ht];M.format!==mn?Pt!==null?F?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht,Jt,Lt.width,Lt.height,0,Lt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht,0,0,Lt.width,Lt.height,Pt,zt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht,Jt,Lt.width,Lt.height,0,Pt,zt,Lt.data)}}}else{if(Tt=M.mipmaps,F&&vt){Tt.length>0&&_t++;let rt=ee(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,mt[rt].width,mt[rt].height,Pt,zt,mt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,mt[rt].width,mt[rt].height,0,Pt,zt,mt[rt].data);for(let Ht=0;Ht<Tt.length;Ht++){let Ce=Tt[Ht].image[rt].image;F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht+1,0,0,Ce.width,Ce.height,Pt,zt,Ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht+1,Jt,Ce.width,Ce.height,0,Pt,zt,Ce.data)}}else{F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,zt,mt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,Pt,zt,mt[rt]);for(let Ht=0;Ht<Tt.length;Ht++){let Lt=Tt[Ht];F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht+1,0,0,Pt,zt,Lt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht+1,Jt,Pt,zt,Lt.image[rt])}}}p(M)&&_(s.TEXTURE_CUBE_MAP),ct.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Et(R,M,z,H,$,ct){let dt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),nt=v(z.internalFormat,dt,Z,z.normalized,z.colorSpace),gt=n.get(M),Ut=n.get(z);if(Ut.__renderTarget=M,!gt.__hasExternalTextures){let mt=Math.max(1,M.width>>ct),ft=Math.max(1,M.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,mt,ft,M.depth,0,dt,Z,null):e.texImage2D($,ct,nt,mt,ft,0,dt,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Zt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,$,Ut.__webglTexture,0,Xt(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,$,Ut.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(R,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let H=M.depthTexture,$=H&&H.isDepthTexture?H.type:null,ct=b(M.stencilBuffer,$),dt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(M),ct,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(M),ct,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ct,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,R)}else{let H=M.textures;for(let $=0;$<H.length;$++){let ct=H[$],dt=r.convert(ct.format,ct.colorSpace),Z=r.convert(ct.type),nt=v(ct.internalFormat,dt,Z,ct.normalized,ct.colorSpace);Zt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(M),nt,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(M),nt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,nt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(R,M,z){let H=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(M.depthTexture);if($.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),te(s.TEXTURE_CUBE_MAP,M.depthTexture);let gt=r.convert(M.depthTexture.format),Ut=r.convert(M.depthTexture.type),mt;M.depthTexture.format===qn?mt=s.DEPTH_COMPONENT24:M.depthTexture.format===ei&&(mt=s.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,M.width,M.height,0,gt,Ut,null)}}else st(M.depthTexture,0);let ct=$.__webglTexture,dt=Xt(M),Z=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,nt=M.depthTexture.format===ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===qn)Zt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Z,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,Z,ct,0);else if(M.depthTexture.format===ei)Zt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Z,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){let $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=H}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)pe(M.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?pe(M.__webglFramebuffer[0],R,0):pe(M.__webglFramebuffer,R,0)}else if(z){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=s.createRenderbuffer(),Wt(M.__webglDepthbuffer[H],R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Wt(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(R,M,z){let H=n.get(R);M!==void 0&&Et(H.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&et(R)}function ot(R){let M=R.texture,z=n.get(R),H=n.get(M);R.addEventListener("dispose",y);let $=R.textures,ct=R.isWebGLCubeRenderTarget===!0,dt=$.length>1;if(dt||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=M.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let nt=0;nt<M.mipmaps.length;nt++)z.__webglFramebuffer[Z][nt]=s.createFramebuffer()}else z.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[Z]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(dt)for(let Z=0,nt=$.length;Z<nt;Z++){let gt=n.get($[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Zt(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){let nt=$[Z];z.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let gt=r.convert(nt.format,nt.colorSpace),Ut=r.convert(nt.type),mt=v(nt.internalFormat,gt,Ut,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),ft=Xt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),te(s.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)Et(z.__webglFramebuffer[Z][nt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,nt);else Et(z.__webglFramebuffer[Z],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let Z=0,nt=$.length;Z<nt;Z++){let gt=$[Z],Ut=n.get(gt),mt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ut.__webglTexture),te(mt,gt),Et(z.__webglFramebuffer,R,gt,s.COLOR_ATTACHMENT0+Z,mt,0),p(gt)&&_(mt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),te(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)Et(z.__webglFramebuffer[nt],R,M,s.COLOR_ATTACHMENT0,Z,nt);else Et(z.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,Z,0);p(M)&&_(Z),e.unbindTexture()}R.depthBuffer&&et(R)}function lt(R){let M=R.textures;for(let z=0,H=M.length;z<H;z++){let $=M[z];if(p($)){let ct=S(R),dt=n.get($).__webglTexture;e.bindTexture(ct,dt),_(ct),e.unbindTexture()}}}let ht=[],kt=[];function Bt(R){if(R.samples>0){if(Zt(R)===!1){let M=R.textures,z=R.width,H=R.height,$=s.COLOR_BUFFER_BIT,ct=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=n.get(R),Z=M.length>1;if(Z)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let nt=R.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ut=n.get(M[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,z,H,0,0,z,H,$,s.NEAREST),l===!0&&(ht.length=0,kt.length=0,ht.push(s.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ht.push(ct),kt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let Ut=n.get(M[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Xt(R){return Math.min(i.maxSamples,R.samples)}function Zt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function de(R,M){let z=R.colorSpace,H=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==wr&&z!==vi&&(oe.getTransfer(z)===ge?(H!==mn||$!==ln)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",z)),M}function ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function r_(s,t){function e(n,i=vi){let r,a=oe.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===lh)return s.SHORT;if(n===Qs)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===ze)return s.HALF_FLOAT;if(n===uh)return s.ALPHA;if(n===dh)return s.RGB;if(n===mn)return s.RGBA;if(n===qn)return s.DEPTH_COMPONENT;if(n===ei)return s.DEPTH_STENCIL;if(n===sl)return s.RED;if(n===rl)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===al)return s.RG_INTEGER;if(n===ol)return s.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===xa)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===va||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vl||n===_l||n===yl||n===Sl||n===Ml||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ll||n===Nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Fl||n===_a||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:a_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Yn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Bh,p={},_=e.getContextAttributes(),S=null,v=null,b=[],E=[],C=new Q,y=null,w=null,A=new je;A.viewport=new Ue;let I=new je;I.viewport=new Ue;let D=[A,I],O=new $o,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=b[Y];return K===void 0&&(K=new Us,b[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=b[Y];return K===void 0&&(K=new Us,b[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=b[Y];return K===void 0&&(K=new Us,b[Y]=K),K.getHandSpace()};function W(Y){let K=E.indexOf(Y.inputSource);if(K===-1)return;let ut=b[K];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,c||a),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",st);for(let Y=0;Y<b.length;Y++){let K=E[Y];K!==null&&(E[Y]=null,b[Y].disconnect(K))}N=null,B=null,g.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",X),i.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ot=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?ei:qn,Ot=_.stencil?zi:zn);let Wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Wt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ae(u.textureWidth,u.textureHeight,{format:mn,type:ln,depthTexture:new Jn(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ae(f.framebufferWidth,f.framebufferHeight,{format:mn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(Y){for(let K=0;K<Y.removed.length;K++){let ut=Y.removed[K],Ot=E.indexOf(ut);Ot>=0&&(E[Ot]=null,b[Ot].disconnect(ut))}for(let K=0;K<Y.added.length;K++){let ut=Y.added[K],Ot=E.indexOf(ut);if(Ot===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=E.length){E.push(ut),Ot=Wt;break}else if(E[Wt]===null){E[Wt]=ut,Ot=Wt;break}if(Ot===-1)break}let Et=b[Ot];Et&&Et.connect(ut)}}let V=new P,J=new P;function j(Y,K,ut){V.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(ut.matrixWorld);let Ot=V.distanceTo(J),Et=K.projectionMatrix.elements,Wt=ut.projectionMatrix.elements,pe=Et[14]/(Et[10]-1),et=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],ot=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ht=(Wt[8]+1)/Wt[0],kt=pe*lt,Bt=pe*ht,Xt=Ot/(-lt+ht),Zt=Xt*-lt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Zt),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let L=pe+Xt,de=et+Xt,ee=kt-Zt,R=Bt+(Ot-Zt),M=at*et/de*L,z=ot*et/de*L;Y.projectionMatrix.makePerspective(ee,R,M,z,L,de),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function At(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,ut=Y.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),O.near=I.near=A.near=K,O.far=I.far=A.far=ut,(N!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,B=O.far),O.layers.mask=Y.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Ot=Y.parent,Et=O.cameras;At(O,Ot);for(let Wt=0;Wt<Et.length;Wt++)At(Et[Wt],Ot);Et.length===2?j(O,A,I):O.projectionMatrix.copy(A.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),yt(Y,O,Ot)};function yt(Y,K,ut){ut===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let he=null;function te(Y,K){if(h=K.getViewerPose(c||a),m=K,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;ut.length!==O.cameras.length&&(O.cameras.length=0,Ot=!0);for(let et=0;et<ut.length;et++){let at=ut[et],ot=null;if(f!==null)ot=f.getViewport(at);else{let ht=d.getViewSubImage(u,at);ot=ht.viewport,et===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let lt=D[et];lt===void 0&&(lt=new je,lt.layers.enable(et),lt.viewport=new Ue,D[et]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),et===0&&(O.matrix.copy(lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ot===!0&&O.cameras.push(lt)}let Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let et=d.getDepthInformation(ut[0]);et&&et.isValid&&et.texture&&g.init(et,i.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let et=0;et<ut.length;et++){let at=ut[et].camera;if(at){let ot=p[at];ot||(ot=new Fr,p[at]=ot);let lt=d.getCameraImage(at);ot.sourceTexture=lt}}}}for(let ut=0;ut<b.length;ut++){let Ot=E[ut],Et=b[ut];Ot!==null&&Et!==void 0&&Et.update(Ot,K,c||a)}he&&he(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let ae=new rf;ae.setAnimationLoop(te),this.setAnimationLoop=function(Y){he=Y},this.dispose=function(){}}},l_=new $t,uf=new Qt;uf.set(-1,0,0,0,1,0,0,0,1);function c_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,gh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(uf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h_(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let E=b.program;n.uniformBlockBinding(v,E)}function c(v,b){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",_));let C=b.program;n.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let b=d();v.__bindingPointIndex=b;let E=s.createBuffer(),C=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=i[v.id],E=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,w=E.length;y<w;y++){let A=E[y];if(Array.isArray(A))for(let I=0,D=A.length;I<D;I++)f(A[I],y,I,C);else f(A,y,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,E,C){if(x(v,b,E,C)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let A=0;for(let I=0;I<w.length;I++){let D=w[I],O=p(D);m(D,v.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function m(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function x(v,b,E,C){let y=v.value,w=b+"_"+E;if(C[w]===void 0)return typeof y=="number"||typeof y=="boolean"?C[w]=y:ArrayBuffer.isView(y)?C[w]=y.slice():C[w]=y.clone(),!0;{let A=C[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return C[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(v){let b=v.uniforms,E=0,C=16;for(let w=0,A=b.length;w<A;w++){let I=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,O=I.length;D<O;D++){let N=I[D],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=B.length;W<X;W++){let st=B[W],V=p(st),J=E%C,j=J%V.boundary,At=J+j;E+=j,At!==0&&C-At<V.storage&&(E+=C-At),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=V.storage}}}let y=E%C;return y>0&&(E+=C-y),v.__size=E,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){let b=v.target;b.removeEventListener("dispose",_);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function S(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:S}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function d_(){return ni===null&&(ni=new xi(u_,16,16,Hi,ze),ni.name="DFG_LUT",ni.minFilter=Qe,ni.magFilter=Qe,ni.wrapS=wn,ni.wrapT=wn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var ba=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([ol,al,rl]),p=new Set([ln,zn,Qs,zi,nl,il]),_=new Uint32Array(4),S=new Int32Array(4),v=new P,b=null,E=null,C=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,D=null,O=null,N=null,B=null;this._outputColorSpace=Ne;let W=0,X=0,st=null,V=-1,J=null,j=new Ue,At=new Ue,yt=null,he=new Gt(0),te=0,ae=e.width,Y=e.height,K=1,ut=null,Ot=null,Et=new Ue(0,0,ae,Y),Wt=new Ue(0,0,ae,Y),pe=!1,et=new Hs,at=!1,ot=!1,lt=new $t,ht=new P,kt=new Ue,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Zt(){return st===null?K:1}let L=n;function de(T,U){return e.getContext(T,U)}let ee,R,M,z,H,$,ct,dt,Z,nt,gt,Ut,mt,ft,Pt,zt,Jt,F,vt,tt,_t,Tt,rt;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),L===null){let U="webgl2";if(L=de(U,T),L===null)throw de(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(T){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),qt("WebGLRenderer: "+T.message),T}function Ht(){ee=new _x(L),ee.init(),_t=new r_(L,ee),R=new cx(L,ee,t,_t),M=new i_(L,ee),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=L.createFramebuffer(),N=L.createFramebuffer(),B=L.createFramebuffer(),z=new Mx(L),H=new Vv,$=new s_(L,ee,M,H,R,_t,z),ct=new vx(A),dt=new E0(L),Tt=new ox(L,dt),Z=new yx(L,dt,z,Tt),nt=new Ex(L,Z,dt,Tt,z),F=new bx(L,R,$),Pt=new hx(H),gt=new Gv(A,ct,ee,R,Tt,Pt),Ut=new c_(A,H),mt=new Xv,ft=new Kv(ee),Jt=new ax(A,ct,M,nt,m,l),zt=new n_(A,nt,R),rt=new h_(L,z,R,M),vt=new lx(L,ee,z),tt=new Sx(L,ee,z),z.programs=gt.programs,A.capabilities=R,A.extensions=ee,A.properties=H,A.renderLists=mt,A.shadowMap=zt,A.state=M,A.info=z}x!==ln&&(w=new wx(x,e.width,e.height,o,i,r));let Lt=new zh(A,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(ae,Y,!1))},this.getSize=function(T){return T.set(ae,Y)},this.setSize=function(T,U,q=!0){if(Lt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,Y=U,e.width=Math.floor(T*K),e.height=Math.floor(U*K),q===!0&&(e.style.width=T+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ae*K,Y*K).floor()},this.setDrawingBufferSize=function(T,U,q){ae=T,Y=U,K=q,e.width=Math.floor(T*q),e.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===ln){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,U,q,k){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,U,q,k),M.viewport(j.copy(Et).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,U,q,k){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,U,q,k),M.scissor(At.copy(Wt).multiplyScalar(K).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){M.setScissorTest(pe=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){Ot=T},this.getClearColor=function(T){return T.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let k=0;if(T){let G=!1;if(st!==null){let bt=st.texture.format;G=g.has(bt)}if(G){let bt=st.texture.type,Ct=p.has(bt),Mt=Jt.getClearColor(),It=Jt.getClearAlpha(),Ft=Mt.r,ne=Mt.g,le=Mt.b;Ct?(_[0]=Ft,_[1]=ne,_[2]=le,_[3]=It,L.clearBufferuiv(L.COLOR,0,_)):(S[0]=Ft,S[1]=ne,S[2]=le,S[3]=It,L.clearBufferiv(L.COLOR,0,S))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Jt.dispose(),mt.dispose(),ft.dispose(),H.dispose(),ct.dispose(),nt.dispose(),Tt.dispose(),rt.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ru),Lt.removeEventListener("sessionend",au),Gi.stop()};function Ce(T){T.preventDefault(),Rr("WebGLRenderer: Context Lost."),I=!0}function _e(){Rr("WebGLRenderer: Context Restored."),I=!1;let T=z.autoReset,U=zt.enabled,q=zt.autoUpdate,k=zt.needsUpdate,G=zt.type;Ht(),z.autoReset=T,zt.enabled=U,zt.autoUpdate=q,zt.needsUpdate=k,zt.type=G}function Dn(T){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kn(T){let U=T.target;U.removeEventListener("dispose",kn),ip(U)}function ip(T){sp(T),H.remove(T)}function sp(T){let U=H.get(T).programs;U!==void 0&&(U.forEach(function(q){gt.releaseProgram(q)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,k,G,bt){U===null&&(U=Bt);let Ct=G.isMesh&&G.matrixWorld.determinantAffine()<0,Mt=op(T,U,q,k,G);M.setMaterial(k,Ct);let It=q.index,Ft=1;if(k.wireframe===!0){if(It=Z.getWireframeAttribute(q),It===void 0)return;Ft=2}let ne=q.drawRange,le=q.attributes.position,Dt=ne.start*Ft,ye=(ne.start+ne.count)*Ft;bt!==null&&(Dt=Math.max(Dt,bt.start*Ft),ye=Math.min(ye,(bt.start+bt.count)*Ft)),It!==null?(Dt=Math.max(Dt,0),ye=Math.min(ye,It.count)):le!=null&&(Dt=Math.max(Dt,0),ye=Math.min(ye,le.count));let We=ye-Dt;if(We<0||We===1/0)return;Tt.setup(G,k,Mt,q,It);let De,we=vt;if(It!==null&&(De=dt.get(It),we=tt,we.setIndex(De)),G.isMesh)k.wireframe===!0?(M.setLineWidth(k.wireframeLinewidth*Zt()),we.setMode(L.LINES)):we.setMode(L.TRIANGLES);else if(G.isLine){let nn=k.linewidth;nn===void 0&&(nn=1),M.setLineWidth(nn*Zt()),G.isLineSegments?we.setMode(L.LINES):G.isLineLoop?we.setMode(L.LINE_LOOP):we.setMode(L.LINE_STRIP)}else G.isPoints?we.setMode(L.POINTS):G.isSprite&&we.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))we.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Rt=G._multiDrawCounts,un=G._multiDrawCount,me=It?dt.get(It).bytesPerElement:1,En=H.get(k).currentProgram.getUniforms();for(let Gn=0;Gn<un;Gn++)En.setValue(L,"_gl_DrawID",Gn),we.render(nn[Gn]/me,Rt[Gn])}else if(G.isInstancedMesh)we.renderInstances(Dt,We,G.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,nn);we.renderInstances(Dt,We,Rt)}else we.render(Dt,We)};function su(T,U,q,k){D!==null&&T.isNodeMaterial&&D.setObject(k,T),at===!0&&Pt.setState(T,q,!1),T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Ua(T,U,k),T.side=Fi,T.needsUpdate=!0,Ua(T,U,k),T.side=Fe):Ua(T,U,k)}this.compile=function(T,U,q=null){q===null&&(q=T),D!==null&&D.renderStart(T,U,q),E=ft.get(q),E.init(U),y.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,at=Pt.init(this.clippingPlanes,ot),at===!0&&Pt.setGlobalState(this.clippingPlanes,U),D!==null&&zt.render(E.state.shadowsArray,q,U);let k=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){let Mt=bt[Ct];su(Mt,q,U,G),k.add(Mt)}else su(bt,q,U,G),k.add(bt)}),E=y.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(T,U,q=null){let k=this.compile(T,U,q);return new Promise(G=>{function bt(){if(k.forEach(function(Ct){let It=H.get(Ct).currentProgram;(It===void 0||It.isReady())&&k.delete(Ct)}),k.size===0){G(T);return}setTimeout(bt,10)}ee.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let fc=null;function rp(T){fc&&fc(T)}function ru(){Gi.stop()}function au(){Gi.start()}let Gi=new rf;Gi.setAnimationLoop(rp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){fc=T,Lt.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},Lt.addEventListener("sessionstart",ru),Lt.addEventListener("sessionend",au),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,U);let q=Lt.enabled===!0&&Lt.isPresenting===!0,k=w!==null&&(st===null||q)&&w.begin(A,st);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,st),E=ft.get(T,y.length),E.init(U),E.state.textureUnits=$.getTextureUnits(),y.push(E),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(lt,Fn,U.reversedDepth),ot=this.localClippingEnabled,at=Pt.init(this.clippingPlanes,ot),b=mt.get(T,C.length),b.init(),C.push(b),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&pc(Ct,U,-1/0,A.sortObjects)}pc(T,U,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(ut,Ot),Xt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Xt&&Jt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Pt.beginShadows();let G=E.state.shadowsArray;if(zt.render(G,T,U),at===!0&&Pt.endShadows(),(k&&w.hasRenderPass())===!1){let Ct=b.opaque,Mt=b.transmissive;if(E.setupLights(),U.isArrayCamera){let It=U.cameras;if(Mt.length>0)for(let Ft=0,ne=It.length;Ft<ne;Ft++){let le=It[Ft];lu(Ct,Mt,T,le)}Xt&&Jt.render(T);for(let Ft=0,ne=It.length;Ft<ne;Ft++){let le=It[Ft];ou(b,T,le,le.viewport)}}else Mt.length>0&&lu(Ct,Mt,T,U),Xt&&Jt.render(T),ou(b,T,U)}st!==null&&X===0&&($.updateMultisampleRenderTarget(st),$.updateRenderTargetMipmap(st)),k&&w.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),Tt.resetDefaultState(),V=-1,J=null,y.pop(),y.length>0?(E=y[y.length-1],$.setTextureUnits(E.state.textureUnits),at===!0&&Pt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,D!==null&&D.renderEnd()};function pc(T,U,q,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(et)){k&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);let Ct=nt.update(T),Mt=T.material;Mt.visible&&b.push(T,Ct,Mt,q,kt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(et))){let Ct=nt.update(T),Mt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),kt.copy(Ct.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){let It=Ct.groups;for(let Ft=0,ne=It.length;Ft<ne;Ft++){let le=It[Ft],Dt=Mt[le.materialIndex];Dt&&Dt.visible&&b.push(T,Ct,Dt,q,kt.z,le,U)}}else Mt.visible&&b.push(T,Ct,Mt,q,kt.z,null,U)}}let bt=T.children;for(let Ct=0,Mt=bt.length;Ct<Mt;Ct++)pc(bt[Ct],U,q,k)}function ou(T,U,q,k){let{opaque:G,transmissive:bt,transparent:Ct}=T;E.setupLightsView(q),at===!0&&Pt.setGlobalState(A.clippingPlanes,q),k&&M.viewport(j.copy(k)),G.length>0&&Na(G,U,q),bt.length>0&&Na(bt,U,q),Ct.length>0&&Na(Ct,U,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function lu(T,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Dt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Ae(1,1,{generateMipmaps:!0,type:Dt?ze:ln,minFilter:ti,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let bt=E.state.transmissionRenderTarget[k.id],Ct=k.viewport||j;bt.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let Mt=A.getRenderTarget(),It=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(he),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),Xt&&Jt.render(q);let ne=A.toneMapping;A.toneMapping=Bn;let le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),at===!0&&Pt.setGlobalState(A.clippingPlanes,k),Na(T,q,k),$.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ye=0,We=U.length;ye<We;ye++){let De=U[ye],{object:we,geometry:nn,material:Rt,group:un}=De;if(Rt.side===Fe&&we.layers.test(k.layers)){let me=Rt.side;Rt.side=tn,Rt.needsUpdate=!0,cu(we,q,k,nn,Rt,un),Rt.side=me,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&($.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt))}A.setRenderTarget(Mt,It,Ft),A.setClearColor(he,te),le!==void 0&&(k.viewport=le),A.toneMapping=ne}function Na(T,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,bt=T.length;G<bt;G++){let Ct=T[G],{object:Mt,geometry:It,group:Ft}=Ct,ne=Ct.material;ne.allowOverride===!0&&k!==null&&(ne=k),Mt.layers.test(q.layers)&&cu(Mt,U,q,It,ne,Ft)}}function cu(T,U,q,k,G,bt){D!==null&&G.isNodeMaterial&&D.setObject(T,G),T.onBeforeRender(A,U,q,k,G,bt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(A,U,q,k,T,bt),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,A.renderBufferDirect(q,U,k,G,T,bt),G.side=Fi,G.needsUpdate=!0,A.renderBufferDirect(q,U,k,G,T,bt),G.side=Fe):A.renderBufferDirect(q,U,k,G,T,bt),T.onAfterRender(A,U,q,k,G,bt)}function Ua(T,U,q){U.isScene!==!0&&(U=Bt);let k=H.get(T),G=E.state.lights,bt=E.state.shadowsArray,Ct=G.state.version,Mt=gt.getParameters(T,G.state,bt,U,q,E.state.lightProbeGridArray),It=gt.getProgramCacheKey(Mt),Ft=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=ct.get(T.envMap||k.environment,ne),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",kn),Ft=new Map,k.programs=Ft);let le=Ft.get(It);if(le!==void 0){if(k.currentProgram===le&&k.lightsStateVersion===Ct)return uu(T,Mt),le}else Mt.uniforms=gt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,q,Mt),T.onBeforeCompile(Mt,A),le=gt.acquireProgram(Mt,It),Ft.set(It,le),k.uniforms=Mt.uniforms;let Dt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=Pt.uniform),uu(T,Mt),k.needsLights=cp(T),k.lightsStateVersion=Ct,k.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.sunLights.value=G.state.sun,Dt.sunLightShadows.value=G.state.sunShadow,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.sunShadowMatrix.value=G.state.sunShadowMatrix,Dt.sunShadowCascade.value=G.state.sunShadowCascade,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=le,k.uniformsList=null,le}function hu(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ir.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function uu(T,U){let q=H.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function ap(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let q=0,k=T.length;q<k;q++){let G=T[q];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function op(T,U,q,k,G){U.isScene!==!0&&(U=Bt),$.resetTextureUnits();let bt=U.fog,Ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,Mt=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:oe.workingColorSpace,It=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ft=ct.get(k.envMap||Ct,It),ne=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,le=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Dt=!!q.morphAttributes.position,ye=!!q.morphAttributes.normal,We=!!q.morphAttributes.color,De=Bn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=A.toneMapping);let we=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=we!==void 0?we.length:0,Rt=H.get(k),un=E.state.lights;if(at===!0&&(ot===!0||T!==J)){let Pe=T===J&&k.id===V;Pt.setState(k,T,Pe)}let me=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==Mt||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==Ft||k.fog===!0&&Rt.fog!==bt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Pt.numPlanes||Rt.numIntersection!==Pt.numIntersection)||Rt.vertexAlphas!==ne||Rt.vertexTangents!==le||Rt.morphTargets!==Dt||Rt.morphNormals!==ye||Rt.morphColors!==We||Rt.toneMapping!==De||Rt.morphTargetsCount!==nn||!!Rt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Rt.__version=k.version);let En=Rt.currentProgram;me===!0&&(En=Ua(k,U,G),D&&k.isNodeMaterial&&D.onUpdateProgram(k,En,Rt));let Gn=!1,Mi=!1,os=!1,be=En.getUniforms(),He=Rt.uniforms;if(M.useProgram(En.program)&&(Gn=!0,Mi=!0,os=!0),k.id!==V&&(V=k.id,Mi=!0),Rt.needsLights){let Pe=ap(E.state.lightProbeGridArray,G);Rt.lightProbeGrid!==Pe&&(Rt.lightProbeGrid=Pe,Mi=!0)}if(Gn||J!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),be.setValue(L,"projectionMatrix",T.projectionMatrix),be.setValue(L,"viewMatrix",T.matrixWorldInverse);let Ei=be.map.cameraPosition;Ei!==void 0&&Ei.setValue(L,ht.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&be.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Mi=!0,os=!0)}if(Rt.needsLights&&(un.state.sunShadowMap.length>0&&be.setValue(L,"sunShadowMap",un.state.sunShadowMap,$),un.state.directionalShadowMap.length>0&&be.setValue(L,"directionalShadowMap",un.state.directionalShadowMap,$),un.state.spotShadowMap.length>0&&be.setValue(L,"spotShadowMap",un.state.spotShadowMap,$),un.state.pointShadowMap.length>0&&be.setValue(L,"pointShadowMap",un.state.pointShadowMap,$)),G.isSkinnedMesh){be.setOptional(L,G,"bindMatrix"),be.setOptional(L,G,"bindMatrixInverse");let Pe=G.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),be.setValue(L,"boneTexture",Pe.boneTexture,$))}G.isBatchedMesh&&(be.setOptional(L,G,"batchingTexture"),be.setValue(L,"batchingTexture",G._matricesTexture,$),be.setOptional(L,G,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",G._indirectTexture,$),be.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",G._colorsTexture,$));let bi=q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&F.update(G,q,En),(Mi||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,be.setValue(L,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=d_()),Mi){if(be.setValue(L,"toneMappingExposure",A.toneMappingExposure),Rt.needsLights&&lp(He,os),bt&&k.fog===!0&&Ut.refreshFogUniforms(He,bt),Ut.refreshMaterialUniforms(He,k,K,Y,E.state.transmissionRenderTarget[T.id]),Rt.needsLights&&Rt.lightProbeGrid){let Pe=Rt.lightProbeGrid;He.probesSH.value=Pe.texture,He.probesMin.value.copy(Pe.boundingBox.min),He.probesMax.value.copy(Pe.boundingBox.max),He.probesResolution.value.copy(Pe.resolution)}ir.upload(L,hu(Rt),He,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ir.upload(L,hu(Rt),He,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&be.setValue(L,"center",G.center),be.setValue(L,"modelViewMatrix",G.modelViewMatrix),be.setValue(L,"normalMatrix",G.normalMatrix),be.setValue(L,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Pe=k.uniformsGroups;for(let Ei=0,ls=Pe.length;Ei<ls;Ei++){let fu=Pe[Ei];rt.update(fu,En),rt.bind(fu,En)}}return En}function lp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function cp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(T,U,q){let k=H.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=U,H.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let q=H.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){st=T,W=U,X=q;let k=null,G=!1,bt=!1;if(T){let Mt=H.get(T);if(Mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,Mt.__webglFramebuffer),j.copy(T.viewport),At.copy(T.scissor),yt=T.scissorTest,M.viewport(j),M.scissor(At),M.setScissorTest(yt),V=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(Mt.__hasExternalTextures)$.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(Mt.__boundDepthTexture!==ne){if(ne!==null&&H.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let Ft=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?k=Ft[U][q]:k=Ft[U],G=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?k=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[q]:k=Ft,j.copy(T.viewport),At.copy(T.scissor),yt=T.scissorTest}else j.copy(Et).multiplyScalar(K).floor(),At.copy(Wt).multiplyScalar(K).floor(),yt=pe;if(q!==0&&(k=O),M.bindFramebuffer(L.FRAMEBUFFER,k)&&M.drawBuffers(T,k),M.viewport(j),M.scissor(At),M.setScissorTest(yt),G){let Mt=H.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,q)}else if(bt){let Mt=U;for(let It=0;It<T.textures.length;It++){let Ft=H.get(T.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Ft.__webglTexture,q,Mt)}}else if(T!==null&&q!==0){let Mt=H.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,q)}V=-1};function du(T){let U=H.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=R.textureFormatReadable(T.format),U.__typeReadable=R.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,k,G,bt,Ct,Mt=0){if(!(T&&T.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){M.bindFramebuffer(L.FRAMEBUFFER,It);try{let Ft=T.textures[Mt],ne=Ft.format,le=Ft.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Dt=du(Ft);if(Dt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&q>=0&&q<=T.height-G&&L.readPixels(U,q,k,G,_t.convert(ne),_t.convert(le),bt)}finally{let Ft=st!==null?H.get(st).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,k,G,bt,Ct,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(U>=0&&U<=T.width-k&&q>=0&&q<=T.height-G){M.bindFramebuffer(L.FRAMEBUFFER,It);let Ft=T.textures[Mt],ne=Ft.format,le=Ft.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Dt=du(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),L.readPixels(U,q,k,G,_t.convert(ne),_t.convert(le),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let We=st!==null?H.get(st).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,We);let De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ad(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ye),L.deleteSync(De),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){let k=Math.pow(2,-q),G=Math.floor(T.image.width*k),bt=Math.floor(T.image.height*k),Ct=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ct,Mt,G,bt),M.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,k=null,G=0,bt=0){let Ct,Mt,It,Ft,ne,le,Dt,ye,We,De=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(q!==null)Ct=q.max.x-q.min.x,Mt=q.max.y-q.min.y,It=q.isBox3?q.max.z-q.min.z:1,Ft=q.min.x,ne=q.min.y,le=q.isBox3?q.min.z:0;else{let He=Math.pow(2,-G);Ct=Math.floor(De.width*He),Mt=Math.floor(De.height*He),T.isDataArrayTexture?It=De.depth:T.isData3DTexture?It=Math.floor(De.depth*He):It=1,Ft=0,ne=0,le=0}k!==null?(Dt=k.x,ye=k.y,We=k.z):(Dt=0,ye=0,We=0);let we=_t.convert(U.format),nn=_t.convert(U.type),Rt;U.isData3DTexture?($.setTexture3D(U,0),Rt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Rt=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Rt=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let un=M.getParameter(L.UNPACK_ROW_LENGTH),me=M.getParameter(L.UNPACK_IMAGE_HEIGHT),En=M.getParameter(L.UNPACK_SKIP_PIXELS),Gn=M.getParameter(L.UNPACK_SKIP_ROWS),Mi=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),M.pixelStorei(L.UNPACK_SKIP_ROWS,ne),M.pixelStorei(L.UNPACK_SKIP_IMAGES,le);let os=T.isDataArrayTexture||T.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let He=H.get(T),bi=H.get(U),Pe=H.get(He.__renderTarget),Ei=H.get(bi.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let ls=0;ls<It;ls++)os&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(T).__webglTexture,G,le+ls),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(U).__webglTexture,bt,We+ls)),L.blitFramebuffer(Ft,ne,Ct,Mt,Dt,ye,Ct,Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||H.has(T)){let He=H.get(T),bi=H.get(U);M.bindFramebuffer(L.READ_FRAMEBUFFER,N),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Pe=0;Pe<It;Pe++)os?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,G,le+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,G),be?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bi.__webglTexture,bt,We+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bi.__webglTexture,bt),G!==0?L.blitFramebuffer(Ft,ne,Ct,Mt,Dt,ye,Ct,Mt,L.COLOR_BUFFER_BIT,L.NEAREST):be?L.copyTexSubImage3D(Rt,bt,Dt,ye,We+Pe,Ft,ne,Ct,Mt):L.copyTexSubImage2D(Rt,bt,Dt,ye,Ft,ne,Ct,Mt);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Rt,bt,Dt,ye,We,Ct,Mt,It,we,nn,De.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,bt,Dt,ye,We,Ct,Mt,It,we,De.data):L.texSubImage3D(Rt,bt,Dt,ye,We,Ct,Mt,It,we,nn,De):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,Dt,ye,Ct,Mt,we,nn,De.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,Dt,ye,De.width,De.height,we,De.data):L.texSubImage2D(L.TEXTURE_2D,bt,Dt,ye,Ct,Mt,we,nn,De);M.pixelStorei(L.UNPACK_ROW_LENGTH,un),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),M.pixelStorei(L.UNPACK_SKIP_PIXELS,En),M.pixelStorei(L.UNPACK_SKIP_ROWS,Gn),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Mi),bt===0&&U.generateMipmaps&&L.generateMipmap(Rt),M.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){W=0,X=0,st=null,M.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function ar(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=df(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let m=df(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function df(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Be(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);o.setComponent(u+d,m,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function fe(s){let t=1779033703^String(s).length;for(let i=0;i<String(s).length;i++)t=Math.imul(t^String(s).charCodeAt(i),3432918353),t=t<<13|t>>>19;let e=t>>>0,n=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return n.range=(i,r)=>i+(r-i)*n(),n.int=(i,r)=>Math.floor(n.range(i,r+1)),n.pick=i=>i[Math.floor(n()*i.length)],n}var Hh={};function Mn(s,t,e){if(Hh[s])return Hh[s];let n=document.createElement("canvas");n.width=n.height=t,e(n.getContext("2d"),t);let i=new vn(n);return i.colorSpace=Ne,i.anisotropy=4,Hh[s]=i,i}function Ea(s,t,e,n,i,r=1,a=4){for(let o=0;o<n;o++){s.fillStyle=e[Math.floor(i()*e.length)];let l=r+i()*(a-r);s.fillRect(i()*t,i()*t,l,l*(.6+i()*.8))}}function ff(s){return Mn("facade"+s,128,(t,e)=>{let n=fe("facade"+s),i=["#cdbb94","#c2ad85","#d6c6a2","#b59e76","#c9b48e"][s%5];t.fillStyle=i,t.fillRect(0,0,e,e),Ea(t,e,["rgba(0,0,0,0.05)","rgba(255,255,255,0.08)"],200,n,2,6);for(let r=10;r<e-10;r+=32)for(let a=10;a<e-10;a+=30){let o=n()<.18;t.fillStyle=o?"#1a1a1a":n()<.5?"#3c4d58":"#2f3c45",t.fillRect(a,r,16,18),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(a,r+18,16,3)}if(n()<.4){let r=t.createRadialGradient(64,40,4,64,40,50);r.addColorStop(0,"rgba(20,20,20,0.5)"),r.addColorStop(1,"rgba(20,20,20,0)"),t.fillStyle=r,t.fillRect(0,0,e,e)}})}function pf(){let s=Mn("water",128,(t,e)=>{let n=fe("water");t.fillStyle="#2f7fa3",t.fillRect(0,0,e,e);for(let i=0;i<70;i++){t.strokeStyle=`rgba(200,240,255,${.15+n()*.25})`,t.lineWidth=2;let r=n()*e,a=n()*e;t.beginPath(),t.moveTo(r,a),t.quadraticCurveTo(r+6,a-3,r+12,a),t.stroke()}});return s.wrapS=s.wrapT=xe,s}function kh(){let s=Mn("grass",256,(t,e)=>{let n=fe("grass");t.fillStyle="#6f9a45",t.fillRect(0,0,e,e),Ea(t,e,["#7fab50","#628c3c","#86b257","#5a8236","#93bd62"],1600,n,1,4);for(let i=0;i<14;i++)t.fillStyle=`rgba(${n()<.5?"255,255,200":"30,60,20"},0.06)`,t.beginPath(),t.arc(n()*e,n()*e,20+n()*40,0,7),t.fill()});return s.wrapS=s.wrapT=xe,s}function mf(){let s=Mn("ghostroad",128,(t,e)=>{t.clearRect(0,0,e,e),t.fillStyle="rgba(60,210,230,0.28)",t.fillRect(8,0,e-16,e),t.fillStyle="rgba(200,255,255,0.95)",t.fillRect(4,0,8,e*.55),t.fillRect(e-12,0,8,e*.55)});return s.wrapS=s.wrapT=xe,s}function gf(s){return Mn("apt"+s,128,(t,e)=>{let n=fe("apt"+s);t.fillStyle=["#f1efe9","#e9e6dd","#f4f2ee"][s%3],t.fillRect(0,0,e,e);for(let i=0;i<e;i+=16){t.fillStyle="#c9ccd0",t.fillRect(0,i+11,e,3);for(let r=4;r<e;r+=21)t.fillStyle=n()<.15?"#8fa9bd":"#6f8ba1",t.fillRect(r,i+3,15,8)}t.fillStyle=["#7aa3c9","#d27a5a","#7ab48a"][s%3],t.fillRect(0,0,e,3)})}function xf(s,t){return Mn("gable"+s+t,128,(e,n)=>{e.fillStyle=["#f1efe9","#e9e6dd","#f4f2ee"][t%3],e.fillRect(0,0,n,n),e.fillStyle=["#2f5f8f","#a8492f","#2f7a4f"][t%3],e.font="bold 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),n/2,n*.22),e.fillRect(n*.15,n*.38,n*.7,4)})}function Gh(s){return Mn("glass"+s,128,(t,e)=>{let n=fe("glass"+s),i=["#5d7f9e","#4f6f8c","#7896ad","#6b8a8f"][s%4];t.fillStyle=i,t.fillRect(0,0,e,e);for(let r=0;r<e;r+=10)for(let a=0;a<e;a+=10)t.fillStyle=`rgba(255,255,255,${.04+n()*.16})`,t.fillRect(a+1,r+1,8,8);t.fillStyle="rgba(20,30,40,0.35)";for(let r=0;r<e;r+=10)t.fillRect(0,r,e,1)})}function Vh(){return Mn("goldglass",128,(s,t)=>{let e=fe("gold");s.fillStyle="#c99a3a",s.fillRect(0,0,t,t);for(let n=0;n<t;n+=8)for(let i=0;i<t;i+=8)s.fillStyle=`rgba(255,240,180,${.1+e()*.3})`,s.fillRect(i+1,n+1,6,6)})}function vf(){let s=Mn("camo",128,(t,e)=>{let n=fe("camo");t.fillStyle="#5f6b3c",t.fillRect(0,0,e,e);for(let i of["#4a3a26","#2b2a22","#7a7a48"])for(let r=0;r<9;r++){t.fillStyle=i,t.beginPath();let a=n()*e,o=n()*e;t.moveTo(a,o);for(let l=0;l<7;l++)t.lineTo(a+Math.cos(l)*(8+n()*16),o+Math.sin(l)*(6+n()*12));t.fill()}});return s.wrapS=s.wrapT=xe,s}function _f(){return Mn("field",128,(s,t)=>{for(let e=0;e<8;e++)s.fillStyle=e%2?"#4f9a46":"#58a64e",s.fillRect(e*16,0,16,t);s.strokeStyle="#f2f2f2",s.lineWidth=2,s.strokeRect(4,4,t-8,t-8),s.beginPath(),s.moveTo(t/2,4),s.lineTo(t/2,t-4),s.stroke(),s.beginPath(),s.arc(t/2,t/2,14,0,7),s.stroke()})}function yf(){let s=Mn("lawnstripe",256,(t,e)=>{let n=fe("lawn");for(let i=0;i<4;i++)t.fillStyle=i%2?"#86b552":"#7aaa48",t.fillRect(0,i*e/4,e,e/4);Ea(t,e,["#8fbd5c","#6f9c40","#93c264","#7da84b"],1400,n,1,3)});return s.wrapS=s.wrapT=xe,s}function Sf(){let s=Mn("dirt",256,(t,e)=>{let n=fe("dirt");t.fillStyle="#c9b48a",t.fillRect(0,0,e,e),Ea(t,e,["#bda57a","#d4c19a","#b39b70","#cdb990"],1600,n,1,4)});return s.wrapS=s.wrapT=xe,s}function Mf(){let s=Mn("snow",256,(t,e)=>{let n=fe("snow");t.fillStyle="#e9eef2",t.fillRect(0,0,e,e),Ea(t,e,["#dfe6ec","#f4f7f9","#d5dde4"],1200,n,1,4)});return s.wrapS=s.wrapT=xe,s}var Wh={};function is(s,t,e,n,i=!0){if(Wh[s])return Wh[s];let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let a=new vn(r);return i&&(a.colorSpace=Ne),a.wrapS=a.wrapT=xe,a.anisotropy=8,Wh[s]=a}var f_={gray:["#3d4146","#24272b","#4f545a","#5a5f66","#2a2d31"],blue:["#24508f","#173866","#2f63ad","#3a72c0","#1b3f73"]};function bf(s="gray"){let t=f_[s];return is("giwa"+s,256,256,(e,n,i)=>{let r=fe("giwa");e.fillStyle=t[0],e.fillRect(0,0,n,i);let a=16,o=n/a;for(let l=0;l<a;l++){let c=l*o,h=e.createLinearGradient(c,0,c+o,0);h.addColorStop(0,t[1]),h.addColorStop(.35,t[2]),h.addColorStop(.55,t[3]),h.addColorStop(1,t[4]),e.fillStyle=h,e.fillRect(c+o*.18,0,o*.64,i);for(let d=0;d<i;d+=16)e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(c+o*.18,d,o*.64,1.5)}for(let l=0;l<900;l++)e.fillStyle=`rgba(${r()<.5?"255,255,255":"0,0,0"},${.03+r()*.05})`,e.fillRect(r()*n,r()*i,2+r()*6,2+r()*6)})}function p_(){return is("dancheong",256,64,(s,t,e)=>{s.fillStyle="#2f7a64",s.fillRect(0,0,t,e);let n=8,i=t/n;for(let r=0;r<n;r++){let a=r*i;s.fillStyle="#b8352a",s.fillRect(a+i*.4,0,i*.2,e),s.fillStyle="#e9e1cf",s.fillRect(a+i*.36,e*.2,i*.04,e*.6),s.fillRect(a+i*.6,e*.2,i*.04,e*.6),s.fillStyle="#2a4f9a",s.beginPath(),s.arc(a+i*.15,e*.5,e*.18,0,7),s.fill(),s.beginPath(),s.arc(a+i*.85,e*.5,e*.18,0,7),s.fill(),s.fillStyle="#e9c34a",s.beginPath(),s.arc(a+i*.15,e*.5,e*.07,0,7),s.fill(),s.beginPath(),s.arc(a+i*.85,e*.5,e*.07,0,7),s.fill()}s.fillStyle="#1f5a48",s.fillRect(0,0,t,4),s.fillRect(0,e-4,t,4)})}function m_(){return is("changho",128,128,(s,t,e)=>{s.fillStyle="#8b2f25",s.fillRect(0,0,t,e),s.fillStyle="#c9b48a",s.fillRect(10,10,t-20,e-20),s.strokeStyle="#7a2a20",s.lineWidth=3;for(let n=10;n<=t-10;n+=12)s.beginPath(),s.moveTo(n,10),s.lineTo(n,e-10),s.stroke();for(let n=10;n<=e-10;n+=12)s.beginPath(),s.moveTo(10,n),s.lineTo(t-10,n),s.stroke()})}function g_(){return is("seokchuk",256,256,(s,t,e)=>{let n=fe("seokchuk");s.fillStyle="#6e6a62",s.fillRect(0,0,t,e);let i=32;for(let r=0,a=0;r<e;r+=i,a++){let o=a%2?-24:0;for(;o<t;){let l=40+n()*30,c=150+n()*40;s.fillStyle=`rgb(${c},${c-4},${c-12})`,s.fillRect(o+2,r+2,l-3,i-3);for(let h=0;h<12;h++)s.fillStyle=`rgba(0,0,0,${n()*.08})`,s.fillRect(o+n()*l,r+n()*i,3,3);o+=l}}})}function Ef(s,t,e,n={}){let i=n.lift??.22*e,r=n.sag??1.55,a=28,o=16,l=Math.max(0,(s-t)/2)*(n.ridge??1),c=s/2,h=t/2,d=(g,p)=>{let _=Math.abs(p)/h,S=Math.max(0,Math.abs(g)-l)/h,v=Math.min(1,Math.max(_,S)),b=e*Math.pow(1-v,r),E=Math.abs(g)/c,C=Math.abs(p)/h;return b+=i*Math.pow(Math.max(E,C)>.75?Math.min(E,C)*Math.max(E,C):0,3)*1.2,b+=i*.35*Math.pow(E,4)*v,{y:b,t:v}},u=[],f=[],m=[];for(let g=0;g<=o;g++)for(let p=0;p<=a;p++){let _=-c+p/a*s,S=-h+g/o*t,{y:v,t:b}=d(_,S);u.push(_,v,S),f.push(Math.abs(S)/h>(Math.abs(_)-l)/h?_*1.4:S*1.4,b*2.2)}for(let g=0;g<o;g++)for(let p=0;p<a;p++){let _=g*(a+1)+p,S=_+1,v=_+a+1,b=v+1;m.push(_,v,S,S,v,b)}let x=new ue;return x.setAttribute("position",new Vt(u,3)),x.setAttribute("uv",new Vt(f,2)),x.setIndex(m),x.computeVertexNormals(),{geo:x,hAt:d,r:l,hw:c,hd:h}}function Tf(s,t){let e=[],n=r=>{let a=new Ii(r);e.push(new $r(a,24,t,6,!1))},i=s.hAt(0,0).y;s.r>.01&&n([new P(-s.r-.02,i,0),new P(0,i,0),new P(s.r+.02,i,0)]);for(let r of[-1,1])for(let a of[-1,1]){let o=[];for(let l=0;l<=10;l++){let c=l/10,h=r*(s.r+(s.hw-s.r)*c),d=a*s.hd*c;o.push(new P(h,s.hAt(h*.999,d*.999).y+t*.6,d))}n(o)}return e}function Yl(){let s=bf();return{tile:new jt({map:s,roughness:.75,side:Fe}),ridge:new jt({color:14275784,roughness:.8}),dan:new jt({map:p_(),roughness:.8}),col:new jt({color:9318180,roughness:.7}),door:new jt({map:m_(),roughness:.85}),stone:new jt({map:g_(),roughness:.95}),stoneLight:new jt({color:13617336,roughness:.9}),dark:new Se({color:921104}),plinth:new jt({color:12235683,roughness:.9})}}function Xl(s,t,{w:e,d:n,h:i,y:r,bays:a=5,roofW:o,roofD:l,roofH:c,walls:h=!0,lift:d}){let u=(S,v,b,E,C)=>{let y=new pt(S,v);return y.position.set(b,E,C),y.castShadow=y.receiveShadow=!0,s.add(y),y},f=Math.min(e,n)*.035,m=new Kt(f,f*1.1,i,8),x=Math.max(1,Math.round(a*n/e));for(let S=0;S<=a;S++)for(let v of[-1,1])u(m,t.col,-e/2+S/a*e,r+i/2,v*n/2);for(let S=1;S<x;S++)for(let v of[-1,1])u(m,t.col,v*e/2,r+i/2,-n/2+S/x*n);if(h){let S=new Nt(e*.98,i*.82,n*.9),v=S.attributes.uv;for(let b=0;b<v.count;b++)v.setX(b,v.getX(b)*a);u(S,t.door,0,r+i*.41,0)}let g=new Nt(e+f*4,i*.22,n+f*4),p=g.attributes.uv;for(let S=0;S<p.count;S++)p.setX(S,p.getX(S)*a*.6);u(g,t.dan,0,r+i+i*.11,0);let _=Ef(o,l,c,{lift:d});u(_.geo,t.tile,0,r+i*1.2,0);for(let S of Tf(_,c*.05))u(S,t.ridge,0,r+i*1.2,0);return r+i*1.2}function x_(s,t){let e=Yl(),n=t.w,i=t.d,r=(p,_,S,v,b)=>{let E=new pt(p,_);return E.position.set(S,v,b),E.castShadow=E.receiveShadow=!0,s.add(E),E},a=n*.62,o=i*.62,l=.85,c=new Kt(1,1,1,4,1);c.rotateY(Math.PI/4);let h=c.attributes.position;for(let p=0;p<h.count;p++){let _=h.getY(p)>0,S=_?.94:1;h.setXYZ(p,Math.sign(h.getX(p))*a/2*S,h.getY(p)*l+l/2,Math.sign(h.getZ(p))*o/2*S)}c.computeVertexNormals();let d=c.attributes.uv;for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*3,d.getY(p)*1);r(c,e.stone,0,0,0);for(let p of[-1,1]){let _=new Nt((n-a)/2,l*.75,o*.55),S=_.attributes.uv;for(let v=0;v<S.count;v++)S.setX(v,S.getX(v)*1.2);r(_,e.stone,p*(a/2+(n-a)/4),l*.375,0);for(let v=0;v<3;v++)r(new Nt(.14,.14,o*.55),e.stoneLight,p*(a/2+.15+v*.27),l*.82,0)}let u=l*.34,f=new jn;f.moveTo(-u,0),f.lineTo(-u,l*.36),f.absarc(0,l*.36,u,Math.PI,0,!0),f.lineTo(u,0),f.closePath();let m=new Ws(f,{depth:o*1.02,bevelEnabled:!1});m.translate(0,0,-o*.51),r(m,e.dark,0,.001,0);let x=new On(u*1.12,u*.1,6,16,Math.PI);for(let p of[-1,1])r(x,e.stoneLight,0,l*.36,p*o*.505);let g=Xl(s,e,{w:a*.84,d:o*.62,h:.42,y:l,bays:5,roofW:n*.9,roofD:i*.86,roofH:.38,walls:!1,lift:.12});Xl(s,e,{w:a*.7,d:o*.46,h:.34,y:g+.38*.5,bays:5,roofW:n*.72,roofD:i*.66,roofH:.48,walls:!0,lift:.14}),r(new Nt(a*.86,.04,o*.64),e.plinth,0,l+.02,0)}function v_(s,t){let e=Yl(),n=t.w,i=t.d,r=(l,c,h,d,u)=>{let f=new pt(l,c);return f.position.set(h,d,u),f.castShadow=f.receiveShadow=!0,s.add(f),f},a=0;for(let[l,c,h]of[[n*.92,i*.9,.22],[n*.76,i*.72,.22]]){let d=new Nt(l,h,c),u=d.attributes.uv;for(let m=0;m<u.count;m++)u.setX(m,u.getX(m)*4);r(d,e.stone,0,a+h/2,0);let f=14;for(let m=0;m<=f;m++)for(let x of[-1,1])r(new Nt(.05,.12,.05),e.stoneLight,-l/2+m/f*l,a+h+.06,x*(c/2-.03));for(let m of[-1,1])r(new Nt(l,.025,.03),e.stoneLight,0,a+h+.1,m*(c/2-.03));a+=h}r(new Nt(.5,.44,.5),e.stoneLight,0,.22,i*.42);let o=Xl(s,e,{w:n*.6,d:i*.42,h:.62,y:a,bays:5,roofW:n*.82,roofD:i*.66,roofH:.32,walls:!0,lift:.1});Xl(s,e,{w:n*.48,d:i*.3,h:.32,y:o+.32*.5,bays:5,roofW:n*.68,roofD:i*.52,roofH:.52,walls:!0,lift:.12})}function ql(s,t){return is("win"+s,256,256,(e,n,i)=>{let r=fe(s);e.fillStyle=t.wall,e.fillRect(0,0,n,i);let a=n/t.cols,o=i/t.rows;for(let l=0;l<t.rows;l++)for(let c=0;c<t.cols;c++){let h=c*a+a*t.mx,d=l*o+o*t.my,u=a*(1-2*t.mx),f=o*(1-2*t.my),m=r()<(t.lit||0);e.fillStyle=m?"#e8d9a8":t.glass,t.arch?(e.beginPath(),e.moveTo(h,d+f),e.lineTo(h,d+u/2),e.arc(h+u/2,d+u/2,u/2,Math.PI,0),e.lineTo(h+u,d+f),e.closePath(),e.fill()):e.fillRect(h,d,u,f),t.frame&&(e.strokeStyle=t.frame,e.lineWidth=2,e.strokeRect(h,d,u,f)),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(h,d,u*.4,f)}if(t.band){e.fillStyle=t.band;for(let l=0;l<=t.rows;l++)e.fillRect(0,l*o-2,n,4)}})}function __(){return is("ddp",256,256,(s,t,e)=>{let n=fe("ddp");s.fillStyle="#5d6166",s.fillRect(0,0,t,e);let i=12,r=t/i;for(let a=0;a<i;a++)for(let o=0;o<i;o++){let l=168+n()*50;if(s.fillStyle=`rgb(${l},${l+2},${l+6})`,s.fillRect(a*r+1,o*r+1,r-2,r-2),n()<.25){s.fillStyle="rgba(40,44,50,0.35)";for(let c=0;c<9;c++)s.fillRect(a*r+3+c%3*(r/3),o*r+3+Math.floor(c/3)*(r/3),2,2)}}})}function qh(s,t,e=1){let n=t.length;if(!n)return;let i=new Rn(new Ji(.16*e,1),new jt({color:16777215,roughness:1}),n),r=new Rn(new Kt(.025*e,.035*e,.18*e,5),new jt({color:5916210,roughness:1}),n),a=new $t,o=new an,l=new Gt,c=fe("trees"+n);t.forEach(([h,d,u],f)=>{let m=.75+c()*.6;a.compose(new P(h,d+.2*e*m,u),o,new P(m,m*(.9+c()*.4),m)),i.setMatrixAt(f,a),a.compose(new P(h,d+.08*e,u),o,new P(1,1,1)),r.setMatrixAt(f,a),i.setColorAt(f,l.setHSL(.24+c()*.06,.38+c()*.15,.2+c()*.1))}),i.castShadow=r.castShadow=!0,i.receiveShadow=!0,s.add(i,r)}var ns=s=>(t,e,n=0,i=0,r=0)=>{let a=new pt(t,e);return a.position.set(n,i,r),a.castShadow=a.receiveShadow=!0,s.add(a),a},hn=(s,t={})=>new jt(Object.assign({color:s,roughness:.85},t));function Xh(s,t,e,n,i){let r=new Nt(s,t,e),a=r.attributes.uv,o=r.attributes.normal;for(let l=0;l<a.count;l++){let c=Math.abs(o.getX(l))>.5?e:s;a.setXY(l,a.getX(l)*c/n,a.getY(l)*t/i)}return r}function y_(s,t){let e=Yl(),n=ns(s),i=t.w,r=t.d,a=new jt({map:bf("blue"),roughness:.45,metalness:.1,side:Fe}),o=new jt({map:ql("cwd",{wall:"#efeae0",glass:"#5d4a3a",cols:2,rows:1,mx:.18,my:.12,frame:"#8a2f25"}),roughness:.8}),l=hn(6195772,{roughness:1}),c=new Ie(i*.92,r*.4);c.rotateX(-Math.PI/2),n(c,l,0,.065,r*.27);let h=-r*.16;n(new Nt(i*.92,.12,r*.5),e.stone,0,.06,h),n(new Nt(.5,.1,.25),e.stoneLight,0,.05,h+r*.27);let d=new Kt(.035,.04,.5,8),u=(f,m,x,g,p,_,S)=>{n(Xh(m,g,x,.28,g),o,f,.12+g/2,h);for(let b=0;b<=6;b++)n(d,e.stoneLight,f-m/2+b/6*m,.12+g/2,h+x/2+.06).scale.y=g/.5;n(new Nt(m+.12,.07,x+.16),e.dan,f,.12+g+.035,h);let v=Ef(p,_,S,{lift:S*.3});n(v.geo,a,f,.12+g+.07,h);for(let b of Tf(v,S*.05))n(b,e.ridge,f,.12+g+.07,h)};u(0,i*.42,r*.3,.5,i*.56,r*.46,.55);for(let f of[-1,1])u(f*i*.33,i*.2,r*.24,.34,i*.27,r*.36,.3);qh(s,[[-i*.44,.06,r*.42],[i*.44,.06,r*.42],[-i*.44,.06,r*.12],[i*.44,.06,r*.12]],1)}function S_(s,t){let e=ns(s),n=new Re(1,28,12,0,Math.PI*2,0,Math.PI/2),i=hn(4284719,{roughness:1});e(n,i).scale.set(1.5,.8,1.3);let a=fe("namsan"),o=[];for(let f=0;f<70;f++){let m=a()*Math.PI*2,x=.25+Math.sqrt(a())*.72,g=Math.cos(m)*x*1.5,p=Math.sin(m)*x*1.3,_=.8*Math.sqrt(Math.max(0,1-x*x))-.05;o.push([g,_,p])}qh(s,o,.9);let l=.8,c=hn(13618889,{roughness:.7}),h=new jt({map:ql("ntg",{wall:"#2b3540",glass:"#3e5263",cols:16,rows:2,mx:.06,my:.12,lit:.25}),roughness:.15,metalness:.5});e(new Kt(.34,.4,.22,20),hn(13224130),0,l+.11),e(new Kt(.1,.15,2.5,16),c,0,l+.22+1.25);let d=l+2.72;for(let[f,m,x,g]of[[.12,.3,.12,c],[.33,.33,.2,h],[.34,.3,.07,c],[.29,.29,.12,h],[.3,.2,.1,c],[.2,.13,.1,c]])e(new Kt(m,f,x,24),g,0,d+x/2),d+=x;let u=hn(13120042,{roughness:.6});for(let f=0;f<5;f++)e(new Kt(.05-f*.006,.055-f*.006,.2,8),f%2?c:u,0,d+.1+f*.2);e(new Re(.05,8,6),new Se({color:16726574}),0,d+1.05)}function M_(s,t){let e=Yl(),n=ns(s),i=hn(6714970,{metalness:.55,roughness:.45}),r=hn(12038565,{roughness:.8}),a=hn(4025994,{roughness:.05,metalness:.2});n(new Kt(1,1.02,.12,40),r,0,.06),n(new Kt(.92,.92,.02,40),a,0,.12);let o=new Se({color:15398655,transparent:!0,opacity:.55});for(let g=0;g<16;g++){let p=g/16*Math.PI*2;n(new Kt(.008,.02,.3,4),o,Math.cos(p)*.78,.27,Math.sin(p)*.78).castShadow=!1}n(new Nt(.78,.12,.78),r,0,.18),n(new Nt(.6,.86,.6),e.stone,0,.67),n(new Nt(.68,.06,.68),r,0,1.13);let l=new se;l.position.y=1.16,l.scale.setScalar(1.35),s.add(l);let c=ns(l),h=0,d=1;c(new Kt(.12*d,.19*d,.46*d,12),i,0,h+.23),c(new Kt(.13*d,.12*d,.32*d,12),i,0,h+.62),c(new Re(1,12,6),i,0,h+.78).scale.set(.22,.07,.14);for(let g of[-1,1]){let p=c(new Kt(.035,.04,.3,8),i,g*.13,h+.64,.07);p.rotation.x=-.6,p.rotation.z=g*.35}c(new Re(.075,12,10),i,0,h+.9),c(new _n(.085,.14,12),i,0,h+1.02),c(new On(.085,.015,6,16),i,0,h+.95).rotation.x=Math.PI/2,c(new Nt(.03,.62,.014),hn(7042404,{metalness:.8,roughness:.3}),0,h+.36,.17),c(new Nt(.1,.025,.03),i,0,h+.66,.17);let u=new se;u.position.set(0,.13,.66),u.rotation.y=Math.PI/2,s.add(u);let f=ns(u),m=hn(6965806),x=hn(3817269,{roughness:.7});f(new Nt(.5,.07,.16),m,0,.035),f(new Re(1,12,6,0,Math.PI*2,0,Math.PI/2),x,0,.07).scale.set(.24,.07,.08),f(new Re(.035,8,6),hn(9121573),.27,.08)}function b_(s,t){let e=ns(s),n=t.w,i=t.d,r=hn(6195772,{roughness:1}),a=new Kn(1,40);a.rotateX(-Math.PI/2),e(a,r,0,.065,i*.44).scale.set(n*.34,1,i*.05);let o=new jt({map:ql("cho",{wall:"#cbbd9d",glass:"#3a3f44",cols:4,rows:1,mx:.22,my:.18,arch:!0,band:"#b1a283"}),roughness:.9}),l=i*.3,c=.5;e(Xh(n*.56,c,i*.2,.3,c/4),o,0,.06+c/2,l),e(new Nt(n*.58,.05,i*.22),hn(12036490),0,.06+c+.025,l),e(Xh(.42,.78,i*.24,.42/2,.78/4),o,0,.06+.39,l+.02),e(new Nt(.46,.05,i*.26),hn(12036490),0,.06+.8,l+.02);let h=is("clock",64,64,S=>{S.fillStyle="#f3efe4",S.beginPath(),S.arc(32,32,30,0,7),S.fill(),S.strokeStyle="#222",S.lineWidth=4,S.beginPath(),S.moveTo(32,32),S.lineTo(32,10),S.moveTo(32,32),S.lineTo(46,38),S.stroke()});e(new Kn(.11,20),new jt({map:h}),0,.68,l+.02+i*.12+.002);let d=new jt({map:ql("chn",{wall:"#7d93a3",glass:"#a9c7da",cols:10,rows:8,mx:.04,my:.06,lit:.08,frame:"#5a6a77"}),roughness:.12,metalness:.55,side:Fe}),u=1.3,f=n*.86,m=-i*.46,x=i*.12,g=new jn;g.moveTo(m,0),g.lineTo(m,u),g.bezierCurveTo(m+.25,u+.3,x+.25,u*1.05,x,u*.5),g.lineTo(x-.08,u*.48),g.bezierCurveTo(x-.12,u*.7,x-.55,u*.55,x-.6,0),g.closePath();let p=new Ws(g,{depth:f,bevelEnabled:!1,curveSegments:20});p.rotateY(-Math.PI/2),p.translate(f/2,.06,0);let _=p.attributes.uv;for(let S=0;S<_.count;S++)_.setXY(S,_.getX(S)*2.6,_.getY(S)*3.2);e(p,d)}function E_(s,t){let e=ns(s),n=t.w,i=t.d,r=n*.45,a=i*.4,o=4,l=96,c=18,h=[],d=[],u=[];for(let x=0;x<=c;x++){let g=x/c;for(let p=0;p<=l;p++){let _=p/l*Math.PI*2,S=Math.cos(_),v=Math.sin(_),b=r*Math.sign(S)*Math.pow(Math.abs(S),2/o)*g,E=a*Math.sign(v)*Math.pow(Math.abs(v),2/o)*g,y=(.62+.3*Math.cos(_-.5)+.12*Math.cos(2*_+1))*Math.pow(Math.max(0,1-Math.pow(g,7)),.42);h.push(b,y,E),d.push(p/l*14,(1-g)*3+y*2)}}for(let x=0;x<c;x++)for(let g=0;g<l;g++){let p=x*(l+1)+g,_=p+1,S=p+l+1,v=S+1;u.push(p,_,S,_,v,S)}let f=new ue;f.setAttribute("position",new Vt(h,3)),f.setAttribute("uv",new Vt(d,2)),f.setIndex(u),f.computeVertexNormals(),e(f,new jt({map:__(),metalness:.6,roughness:.52,side:Fe}),0,.06,0);let m=new Re(1,24,8,0,Math.PI*2,0,Math.PI/2);e(m,hn(6064698,{roughness:1}),-n*.36,.06,i*.28).scale.set(.75,.22,.42),qh(s,[[-n*.47,.06,-i*.4],[n*.47,.06,i*.42],[n*.47,.06,-i*.42],[-n*.2,.06,i*.46]],1)}var Yh={namdaemun:x_,gyeongbok:v_,cheongwadae:y_,ntower:S_,yisunsin:M_,cityhall:b_,ddp:E_};var In={};function T_(s,t,e,n,i){let r=new Float32Array((e+1)*(n+1));for(let l=0;l<=n;l++)for(let c=0;c<=e;c++)r[l*(e+1)+c]=i();for(let l=0;l<=n;l++)r[l*(e+1)+e]=r[l*(e+1)];for(let l=0;l<=e;l++)r[n*(e+1)+l]=r[l];let a=new Float32Array(s*t),o=l=>l*l*(3-2*l);for(let l=0;l<t;l++){let c=l/t*n,h=Math.floor(c),d=o(c-h);for(let u=0;u<s;u++){let f=u/s*e,m=Math.floor(f),x=o(f-m),g=r[h*(e+1)+m],p=r[h*(e+1)+m+1],_=r[(h+1)*(e+1)+m],S=r[(h+1)*(e+1)+m+1];a[l*s+u]=(g+(p-g)*x)*(1-d)+(_+(S-_)*x)*d}}return a}function bn(s,t,e,n,i,r=1){let a=new Float32Array(s*t),o=1,l=0;for(let c=0;c<n;c++){let h=e<<c,d=T_(s,t,Math.max(1,Math.round(h*r)),h,i);for(let u=0;u<a.length;u++)a[u]+=d[u]*o;l+=o,o*=.55}for(let c=0;c<a.length;c++)a[c]/=l;return a}var qe=s=>s<0?0:s>255?255:s;function Ta(s,t,e,n){if(In[s])return In[s];let i=()=>{let f=document.createElement("canvas");return f.width=t,f.height=e,f},r=i(),a=i(),o=r.getContext("2d"),l=a.getContext("2d"),c=o.createImageData(t,e),h=l.createImageData(t,e);n(c.data,h.data,o,l),o.putImageData(c,0,0),l.putImageData(h,0,0),n.after&&n.after(o,l);let d=new vn(r);d.colorSpace=Ne;let u=new vn(a);for(let f of[d,u])f.wrapS=f.wrapT=xe,f.anisotropy=8;return In[s]={map:d,bump:u}}function Af(){return Ta("lawn",512,512,(t,e)=>{let n=fe("rlawn"),i=bn(512,512,2,3,n),r=bn(512,512,8,3,n),a=bn(512,512,64,2,n),o=bn(512,512,3,3,n);for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=l*512+c,d=h*4,u=n(),f=Math.sin(l/512*Math.PI*4)>0?1.035:.965,m=(.72+i[h]*.32+(r[h]-.5)*.25+(a[h]-.5)*.3+(u-.5)*.22)*f,x=Math.max(0,(o[h]-.58)*3.2),g=78*m,p=104*m,_=50*m;g+=x*46,p+=x*16,_+=x*6,t[d]=qe(g),t[d+1]=qe(p),t[d+2]=qe(_),t[d+3]=255;let S=qe(110+(a[h]-.5)*120+(u-.5)*90);e[d]=e[d+1]=e[d+2]=S,e[d+3]=255}})}function Rf(){let e=(i,r)=>{let a=fe("rroad-after"),o=(l,c,h)=>{for(let d=0;d<432;d+=2){let u=a();i.globalAlpha=u<.08?.35:.82+a()*.18,i.fillStyle=h,i.fillRect(l,d,c,2),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(l,d,c,2)}i.globalAlpha=1};o(14,6,"#e9e7e0"),o(236,6,"#e9e7e0"),o(120,5,"#e2b93b"),o(131,5,"#e2b93b"),i.strokeStyle="rgba(25,25,27,0.55)",r.strokeStyle="rgba(0,0,0,0.7)";for(let l=0;l<5;l++){let c=30+a()*196,h=a()*432;i.lineWidth=r.lineWidth=1+a(),i.beginPath(),r.beginPath(),i.moveTo(c,h),r.moveTo(c,h);for(let d=0;d<6;d++)c+=a()*22-11,h+=a()*26-6,i.lineTo(c,h),r.lineTo(c,h);i.stroke(),r.stroke()}},n=(i,r)=>{let a=fe("rroad"),o=bn(256,432,2,3,a,.6),l=bn(256,432,48,2,a,.6),c=bn(256,432,2,2,a,.6);for(let h=0;h<432;h++)for(let d=0;d<256;d++){let u=h*256+d,f=u*4,m=d/256,x=a(),g=m<.5?m/.5:(m-.5)/.5,p=Math.exp(-Math.pow((g-.3)/.08,2))+Math.exp(-Math.pow((g-.72)/.08,2)),_=66+(o[u]-.5)*22+(l[u]-.5)*26+(x-.5)*30-p*9;c[u]>.66&&(_-=10),x>.985&&(_+=40),i[f]=qe(_),i[f+1]=qe(_+1),i[f+2]=qe(_+4),i[f+3]=255;let S=qe(120+(l[u]-.5)*140+(x-.5)*110-p*25);r[f]=r[f+1]=r[f+2]=S,r[f+3]=255}};return n.after=e,Ta("road",256,432,n)}function Cf(){return Ta("walk",256,256,(e,n)=>{let i=fe("rwalk"),r=bn(256,256,8,3,i),a=bn(256,256,64,1,i),o=32,l=64,c=[];for(let h=0;h<64;h++)c.push(.88+i()*.2);for(let h=0;h<256;h++)for(let d=0;d<256;d++){let u=h*256+d,f=u*4,m=Math.floor(h/l),x=m%2?o/2:0,g=Math.floor((d+x)/o)%(256/o),p=(m*8+g)%64,_=(d+x)%o,S=h%l,v=_<2||S<2,b=(172+(r[u]-.5)*30+(a[u]-.5)*26+(i()-.5)*18)*c[p];v&&(b*=.62),e[f]=qe(b),e[f+1]=qe(b*.985),e[f+2]=qe(b*.95),e[f+3]=255;let E=v?40:qe(170+(a[u]-.5)*70);n[f]=n[f+1]=n[f+2]=E,n[f+3]=255}})}function Pf(){return Ta("concrete",256,256,(t,e)=>{let n=fe("rconc"),i=bn(256,256,4,4,n);for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=r*256+a,l=o*4,c=n(),h=a%128<2||r%128<2,d=132+(i[o]-.5)*40+(c-.5)*22;h&&(d*=.7),t[l]=qe(d),t[l+1]=qe(d+1),t[l+2]=qe(d+3),t[l+3]=255;let u=h?50:qe(140+(c-.5)*60);e[l]=e[l+1]=e[l+2]=u,e[l+3]=255}})}function If(){let e=(n,i)=>{let r=fe("rblvd"),a=bn(512,512,2,3,r),o=bn(512,512,64,2,r),l=bn(512,512,3,2,r);for(let c=0;c<512;c++)for(let h=0;h<512;h++){let d=c*512+h,u=d*4,f=r(),m=Math.abs((c/512-.5)*8.5),x=m%.8,g=Math.exp(-Math.pow((x-.25)/.07,2))+Math.exp(-Math.pow((x-.55)/.07,2)),p=64+(a[d]-.5)*20+(o[d]-.5)*24+(f-.5)*26-(m<2.2?g*7:0);l[d]>.7&&(p-=9),f>.986&&(p+=36),n[u]=qe(p),n[u+1]=qe(p+1),n[u+2]=qe(p+4),n[u+3]=255;let _=qe(120+(o[d]-.5)*130+(f-.5)*100);i[u]=i[u+1]=i[u+2]=_,i[u+3]=255}};return e.after=(n,i)=>{let r=fe("rblvd2"),a=512/8.5,o=(l,c,h,d)=>{for(let u of l===0?[1]:[-1,1]){let f=256+u*l*a-c*a/2;for(let m=0;m<512;m+=2)d&&m/a%(8.5/2)>8.5/4||(n.globalAlpha=r()<.07?.35:.85+r()*.15,n.fillStyle=h,n.fillRect(m,f,2,c*a),i.fillStyle="rgba(255,255,255,0.3)",i.fillRect(m,f,2,c*a));n.globalAlpha=1}};o(.07,.06,"#e2b93b"),o(.8,.05,"#ebe9e2",!0),o(1.6,.05,"#ebe9e2",!0),o(2.2,.06,"#ebe9e2");for(let[l,c]of[[1.7,1.2],[6.1,-1.25]]){let h=l*a,d=512/2+c*a,u=.16*a;n.fillStyle="#2c2d2f",n.beginPath(),n.arc(h,d,u,0,7),n.fill(),n.strokeStyle="#4a4b4e",n.lineWidth=2,n.beginPath(),n.arc(h,d,u*.7,0,7),n.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(h,d,u,0,7),i.fill()}},Ta("blvd",512,512,e)}function Df(){if(In.zebra)return In.zebra;let s=document.createElement("canvas");s.width=64,s.height=256;let t=s.getContext("2d"),e=fe("zebra");for(let i=0;i<256;i+=32)for(let r=0;r<64;r+=2)t.globalAlpha=.75+e()*.25,t.fillStyle="#ecebe6",t.fillRect(r,i+4,2,18);let n=new vn(s);return n.colorSpace=Ne,n.anisotropy=8,In.zebra=n}var wf=["#c9b79c","#9c9a95","#b46a4f","#d8d4cb","#8a7d6b","#a7b0b5"],or=["#d23b2f","#1f6fc2","#f2c230","#2e9c5a","#e26c1f","#7a3fb0","#ffffff"];function Lf(s){if(In["shop"+s])return In["shop"+s];let t=128,e=192,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=fe("shop"+s),a=e/5;i.fillStyle=wf[s%wf.length],i.fillRect(0,0,t,e);for(let c=0;c<500;c++)i.fillStyle=`rgba(0,0,0,${r()*.06})`,i.fillRect(r()*t,r()*e,2,2);let o=2+s%2;for(let c=0;c<4;c++){let h=c*a+a*.22;for(let d=0;d<o;d++){let u=t/o,f=d*u+u*.14,m=r()<.2;i.fillStyle=m?"#e6d6a4":r()<.5?"#3c4651":"#4d5a66",i.fillRect(f,h,u*.72,a*.55),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(f,h,u*.25,a*.55)}if(r()<.55){i.fillStyle=or[Math.floor(r()*or.length)],i.fillRect(4,h+a*.58,t-8,a*.18),i.fillStyle="rgba(255,255,255,0.85)";for(let d=0;d<5;d++)i.fillRect(12+d*20,h+a*.62,12,a*.1)}}if(r()<.7){i.fillStyle=or[Math.floor(r()*or.length)],i.fillRect(t-18,a*.3,14,a*3.2),i.fillStyle="#fff";for(let c=0;c<6;c++)i.fillRect(t-14,a*.5+c*a*.5,6,a*.28)}i.fillStyle=or[s%or.length],i.fillRect(0,4*a,t,a*.26),i.fillStyle="rgba(255,255,255,0.9)";for(let c=0;c<4;c++)i.fillRect(14+c*26,4*a+a*.07,16,a*.12);i.fillStyle="#2b3138",i.fillRect(4,4*a+a*.3,t-8,a*.7),i.fillStyle="rgba(240,226,180,0.55)",i.fillRect(8,4*a+a*.36,t*.55,a*.6),i.fillStyle="#6a6e73",i.fillRect(t*.66,4*a+a*.3,3,a*.7);let l=new vn(n);return l.colorSpace=Ne,l.anisotropy=4,l.wrapS=xe,In["shop"+s]=l}function Nf(s){if(In["office"+s])return In["office"+s];let t=128,e=128,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=fe("office"+s);i.fillStyle=["#5d6e7c","#6b7a70","#4f5b6a"][s%3],i.fillRect(0,0,t,e);for(let o=0;o<e;o+=16)for(let l=0;l<t;l+=16){let c=r()<.15;i.fillStyle=c?"#d9cfa2":`rgb(${120+r()*30},${150+r()*30},${170+r()*30})`,i.fillRect(l+1,o+1,14,13)}let a=new vn(n);return a.colorSpace=Ne,a.anisotropy=4,a.wrapS=a.wrapT=xe,In["office"+s]=a}var $h={};function wt(s,t={}){let e=s+JSON.stringify(t);return $h[e]||($h[e]=new jt(Object.assign({color:s,roughness:.78,metalness:.12},t))),$h[e]}var Uf={},hr=(s,t)=>Uf[s]||(Uf[s]=t()),xt=(s,t,e)=>hr(`b${s},${t},${e}`,()=>new Nt(s,t,e)),Te=(s,t,e,n=12)=>hr(`c${s},${t},${e},${n}`,()=>new Kt(s,t,e,n)),lr=(s,t=12)=>hr(`s${s},${t}`,()=>new Re(s,t,Math.max(6,t>>1))),Kh=(s,t)=>hr(`k${s},${t}`,()=>new Or(s,t,4,8));function it(s,t,e,n=0,i=0,r=0,a=0,o=0,l=0){let c=new pt(t,typeof e=="number"?wt(e):e);return c.position.set(n,i,r),c.rotation.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}var si=(s,t,e,n,i,r,a=0)=>it(s,Te(t,t,e,10),n,i+e/2,r,a,0,0,Math.PI/2);function kf(s){it(s,xt(.84,.06,.84),9275515,0,.03,0);for(let t=0;t<14;t++){let e=t/14*Math.PI*2;it(s,xt(.16,.09,.1),t%2?12166522:11048298,Math.cos(e)*.38,.1,Math.sin(e)*.38,0,-e+Math.PI/2,0)}}function cr(s,t,e,n=.1,i=.14){it(s,xt(t,i,.13),2829097,0,n,e);for(let r=0;r<4;r++)it(s,Te(.06,.06,.14,8),3881784,-t/2+.08+r*(t-.16)/3,n-.01,e,Math.PI/2,0,0)}function $l(s,t,e,n,i,r=0){let a=new se;return a.position.set(t,0,e),a.rotation.y=r,s.add(a),it(a,Kh(.075,.16),n,0,.2,0),it(a,lr(.065),13805437,.01,.39,0),it(a,lr(.075),i,0,.42,0),a}var Zl=12757112,ss=11047274,Ff=6121284,w_=4870710,A_=6251335,Ye=2895147;function R_(s){let t=new se;kf(t);let e=new se;t.add(e);let n=new se;e.add(n);let i=new Ge,r=[],a=[];switch(s){case"browning":{for(let o=0;o<3;o++){let l=o/3*Math.PI*2;it(e,Te(.015,.015,.3,6),Ye,Math.cos(l)*.1,.17,Math.sin(l)*.1,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),it(n,xt(.28,.1,.11),3816246,0,0,0),si(n,.022,.5,Ye,.12,.01),it(n,xt(.1,.08,.08),Ff,-.02,-.02,.1),it(n,xt(.06,.08,.08),Ye,-.18,0,0),i.position.set(.62,.01,0),$l(e,-.28,0,ss,9075285);break}case"m777":{for(let[o,l]of[[2.7,.55],[-2.7,.55],[2.2,.35],[-2.2,.35]])it(e,xt(l,.05,.06),Zl,Math.cos(o)*l/2,.1,-Math.sin(o)*l/2,0,o,0);it(e,xt(.34,.12,.3),Zl,0,.18,0),it(e,Te(.1,.1,.05,12),Ye,0,.12,.2,Math.PI/2,0,0),it(e,Te(.1,.1,.05,12),Ye,0,.12,-.2,Math.PI/2,0,0),n.position.set(0,.3,0),n.rotation.z=.35,it(n,xt(.42,.1,.14),ss,0,0,0),si(n,.04,.95,11639408,.1,.02),it(n,xt(.08,.07,.1),Ye,1.06,.02,0),i.position.set(1.1,.02,0);break}case"gepard":{cr(e,.74,.24),cr(e,.74,-.24),it(e,xt(.74,.18,.4),5595199,0,.22,0),n.position.set(0,.42,0),it(n,xt(.38,.22,.36),6318920,0,0,0),si(n,.025,.62,Ye,.15,.02,.22),si(n,.025,.62,Ye,.15,.02,-.22),it(n,xt(.1,.12,.08),5595199,.12,.02,.22),it(n,xt(.1,.12,.08),5595199,.12,.02,-.22);let l=it(n,Te(.13,.13,.025,14),13685958,-.16,.22,0,0,0,Math.PI/2-.2);r.push([l,"y",3]),i.position.set(.8,.02,0);break}case"jammer":{it(e,xt(.6,.08,.36),Ye,0,.12,0);for(let c of[-.2,.18])for(let h of[-.17,.17])it(e,Te(.07,.07,.06,10),2039583,c,.08,h,Math.PI/2,0,0);it(e,xt(.18,.2,.34),Zl,.22,.26,0),it(e,xt(.06,.08,.3),2832964,.31,.3,0),it(e,xt(.36,.26,.36),ss,-.08,.29,0),it(e,Te(.02,.025,.5,6),Ye,-.08,.66,0);let o=it(e,Te(.16,.05,.05,16),15198690,-.08,.9,0,0,0,.5);r.push([o,"y",1.2]);let l=it(t,hr("ring",()=>new On(.46,.02,6,32)),wt(7328767,{emissive:4174079,emissiveIntensity:1.4}),0,.08,0,Math.PI/2,0,0);l.castShadow=!1,a.push(l),i.position.set(-.08,.9,0);break}case"javelin":{$l(e,-.05,.12,ss,9075285),$l(e,-.2,-.16,ss,9075285,.4),n.position.set(-.05,.36,.12),n.rotation.z=.12,it(n,Te(.05,.05,.55,10),7170640,.05,0,0,0,0,Math.PI/2),it(n,xt(.12,.1,.12),4868668,-.1,.06,.06),i.position.set(.34,0,0),it(e,xt(.22,.12,.14),w_,-.3,.1,.14);break}case"k9":{cr(e,.86,.25),cr(e,.86,-.25),it(e,xt(.86,.18,.42),A_,0,.22,0),n.position.set(-.04,.42,0),n.rotation.z=.12,it(n,xt(.46,.2,.4),7040590,0,0,0),it(n,xt(.2,.06,.14),5724735,-.1,.13,.08),si(n,.042,.9,5592895,.2,0),it(n,xt(.09,.08,.11),Ye,1.12,0,0),i.position.set(1.16,0,0);break}case"flash":{for(let o=0;o<3;o++){let l=o/3*Math.PI*2+.5;it(e,Te(.015,.015,.26,6),Ye,Math.cos(l)*.09,.15,Math.sin(l)*.09,Math.sin(l)*.4,0,-Math.cos(l)*.4)}n.position.set(0,.32,0),n.rotation.z=.1,it(n,xt(.42,.18,.18),Ff,.06,0,0);for(let[o,l]of[[.045,.045],[.045,-.045],[-.045,.045],[-.045,-.045]])it(n,Te(.035,.035,.02,10),1710618,.27,o,l,0,0,Math.PI/2);it(n,xt(.42,.03,.19),14251818,.06,.095,0),i.position.set(.3,0,0),$l(e,-.28,.08,ss,9075285);break}case"himars":{it(e,xt(.96,.1,.38),Ye,0,.16,0);for(let o of[-.3,-.06,.32])for(let l of[-.19,.19])it(e,Te(.08,.08,.07,12),2039583,o,.09,l,Math.PI/2,0,0);it(e,xt(.24,.24,.38),Zl,.34,.33,0),it(e,xt(.04,.1,.32),2832964,.465,.38,0),n.position.set(-.14,.3,0),n.rotation.z=.32,it(n,xt(.6,.24,.36),ss,0,.12,0);for(let o=0;o<2;o++)for(let l=0;l<3;l++)it(n,Te(.04,.04,.02,10),1907995,.305,.06+o*.12,-.11+l*.11,0,0,Math.PI/2);i.position.set(.32,.12,0);break}}return n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:r,glow:a}}var Of=7021094,Jl=2761766,ki=16726832;function C_(s){let t=new se,e=new se;t.add(e);let n=[],i=.7;switch(s){case"inf":{it(e,Kh(.085,.18),Of,0,.22,0),it(e,lr(.07),13081975,.01,.43,0),it(e,lr(.08),Jl,-.005,.46,0),it(e,xt(.1,.03,.18),ki,0,.3,0),it(e,xt(.34,.035,.035),1381653,.12,.28,.08),it(e,xt(.12,.14,.14),Jl,-.1,.25,0),i=.68;break}case"jeep":{for(let r of[-.16,.17])for(let a of[-.15,.15])it(e,Te(.08,.08,.06,12),1447446,r,.08,a,Math.PI/2,0,0);it(e,xt(.56,.14,.3),8004648,0,.18,0),it(e,xt(.24,.12,.28),4409151,-.04,.31,0),it(e,xt(.03,.1,.26),2240826,.09,.31,0),it(e,Te(.04,.04,.08,8),Jl,-.06,.41,0),si(e,.015,.28,1118481,-.06,.45),it(e,xt(.02,.1,.12),ki,-.28,.2,0),i=.7;break}case"apc":{for(let r=0;r<4;r++)for(let a of[-.17,.17])it(e,Te(.075,.075,.06,10),1381653,-.27+r*.18,.08,a,Math.PI/2,0,0);it(e,xt(.74,.16,.32),8004648,0,.2,0),it(e,xt(.2,.1,.32),9054766,.3,.24,0,0,0,-.35),it(e,xt(.24,.1,.22),2761766,-.05,.33,0),si(e,.02,.32,1118481,.02,.35),it(e,xt(.03,.05,.3),ki,-.37,.24,0),it(e,xt(.1,.02,.1),ki,-.2,.29,0),i=.72;break}case"tank":case"boss":{let r=s==="boss",a=r?e.add(new se)&&e.children[0]:e;r&&a.scale.setScalar(1.55),cr(a,.84,.22,.09,.16),cr(a,.84,-.22,.09,.16),it(a,xt(.8,.14,.36),r?2761252:8004648,0,.21,0),it(a,xt(.38,.14,.3),r?3811884:6167584,-.04,.35,0),si(a,.03,.55,2303263,.14,.36,r?.07:0),r&&si(a,.03,.55,2303263,.14,.36,-.07),it(a,xt(.04,.1,.32),ki,-.36,.22,0),it(a,xt(.1,.03,.1),ki,-.04,.43,0),r&&(it(a,Te(.05,.05,.1,8),9313314,-.15,.48,.08),it(a,xt(.18,.05,.38),9313314,.28,.25,0)),i=r?1.05:.72;break}case"drone":{e.position.y=1.4,it(e,xt(.2,.07,.14),Of,0,0,0),it(e,lr(.05),ki,.12,0,0);for(let[r,a]of[[.13,.13],[.13,-.13],[-.13,.13],[-.13,-.13]]){it(e,xt(.2,.02,.02),Jl,r/2,.02,a/2,0,Math.atan2(a,r)*-1,0);let o=it(e,Te(.08,.08,.006,12),wt(13159632,{transparent:!0,opacity:.45}),r,.05,a);o.castShadow=!1,n.push([o,"y",30])}i=1.75;break}case"heli":{e.position.y=1.9,it(e,Kh(.13,.36),6167584,.05,0,0,0,0,Math.PI/2),it(e,lr(.11),2240826,.27,.03,0),it(e,Te(.035,.05,.5,8),4080185,-.42,.04,0,0,0,Math.PI/2),it(e,xt(.06,.16,.03),4080185,-.66,.1,0),it(e,xt(.14,.03,.46),3158829,.02,-.04,0),it(e,xt(.08,.06,.05),ki,-.2,.05,.13);let r=new se;r.position.set(.04,.2,0),e.add(r),it(r,xt(1.15,.01,.05),1842204,0,0,0),it(r,xt(.05,.01,1.15),1842204,0,0,0),n.push([r,"y",22]),i=2.3;break}}return{root:t,body:e,spin:n,hpY:i}}function Gf(){let s=new se;it(s,xt(1.2,.08,1.2),9341565,0,.04,0);for(let r=0;r<28;r++){let a=r/28*4,o=Math.floor(a),l=a-o,c=[[-.56+l*1.12,-.56],[.56,-.56+l*1.12],[.56-l*1.12,.56],[-.56,.56-l*1.12]][o];it(s,xt(.16,.1,.1),11771764,c[0],.12,c[1],0,o%2?Math.PI/2:0,0)}let t=new jt({map:ff(2),roughness:.85}),e=new pt(xt(.62,.5,.5),[t,t,wt(10197900),wt(10197900),t,t]);e.position.set(-.1,.33,-.08),e.castShadow=e.receiveShadow=!0,s.add(e),it(s,xt(.66,.04,.54),7106394,-.1,.6,-.08),it(s,Te(.02,.02,.9,6),13684944,.38,.5,.36);let n=it(s,xt(.36,.22,.01),wt(3108816,{side:Fe}),.56,.82,.36);n.castShadow=!1,it(s,xt(.16,.03,.012),16777215,.56,.82,.367),it(s,Te(.02,.02,.3,6),7829367,-.25,.75,-.1);let i=it(s,Te(.16,.04,.05,16),15067106,-.25,.92,-.1,0,0,.6);return it(s,xt(.36,.01,.36),4015920,.3,.085,-.3),it(s,hr("hring",()=>new On(.13,.015,4,24)),16777215,.3,.095,-.3,Math.PI/2,0,0),{root:s,spin:[[i,"y",.8]],flag:n}}var Bf=null,zf=()=>Bf||(Bf=new jt({map:vf(),roughness:.85,metalness:.1}));function Kl(s,t,e,n=.075,i=.08){for(let r of t)for(let a of[-e,e])it(s,Te(n,n,.07,12),1776411,r,i,a,Math.PI/2,0,0)}function P_(s){if(s==="ewcar"&&(s="jammer"),!["patriot","type16","irondome","hyunmoo"].includes(s)){let l=R_(s);return["k9","himars","jammer"].includes(s)&&l.root.traverse(c=>{c.isMesh&&!Array.isArray(c.material)&&[6251335,7040590,5724735,12757112,11047274,6121284].includes(c.material.color.getHex())&&(c.material=zf())}),l}let t=new se;kf(t);let e=new se;t.add(e);let n=new se;e.add(n);let i=new Ge,r=[],a=[],o=zf();if(s==="patriot"){it(e,xt(1,.1,.4),Ye,0,.17,0),Kl(e,[-.36,-.18,.3],.19,.08,.09),it(e,xt(.24,.24,.4),o,.38,.34,0),it(e,xt(.04,.1,.34),2832964,.5,.4,0),n.position.set(-.12,.3,0),n.rotation.z=.55;for(let[l,c]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])it(n,xt(.62,.19,.19),o,.05,l,c);for(let[l,c]of[[.08,-.1],[.08,.1],[.28,-.1],[.28,.1]])it(n,xt(.02,.15,.15),2763304,.365,l,c);i.position.set(.4,.18,0)}else if(s==="type16")it(e,xt(.92,.2,.42),o,0,.24,0),it(e,xt(.22,.12,.42),o,.4,.26,0,0,0,-.4),Kl(e,[-.33,-.11,.11,.33],.22,.09,.1),n.position.set(-.06,.42,0),it(n,xt(.42,.16,.36),o,0,0,0),it(n,xt(.14,.06,.14),4015145,-.1,.11,.08),si(n,.032,.8,3817258,.18,.01),it(n,xt(.07,.06,.08),Ye,1,.01,0),i.position.set(1.02,.01,0);else if(s==="hyunmoo"){it(e,xt(1.2,.12,.44),Ye,0,.19,0),Kl(e,[-.44,-.24,.24,.44],.21,.09,.1),it(e,xt(.26,.28,.44),o,.47,.39,0),it(e,xt(.04,.11,.38),2832964,.6,.45,0),it(e,xt(.12,.1,.5),Ye,-.55,.3,0),n.position.set(-.5,.33,0),n.rotation.z=.9;for(let[l,c]of[[.1,-.12],[.1,.12],[.33,-.12],[.33,.12]])it(n,Te(.11,.11,.95,14),o,.47,l,c,0,0,Math.PI/2),it(n,Te(.095,.095,.02,14),1907995,.95,l,c,0,0,Math.PI/2);it(n,xt(.9,.04,.5),Ye,.45,-.03,0),i.position.set(.98,.22,0)}else if(s==="irondome"){it(e,xt(.7,.08,.5),Ye,0,.1,0),Kl(e,[-.2,.2],.26,.07,.07),n.position.set(0,.22,0),n.rotation.z=.75,it(n,xt(.5,.42,.5),12567220,0,.2,0);for(let c=0;c<4;c++)for(let h=0;h<5;h++)it(n,Te(.035,.035,.02,8),2763304,.255,.04+c*.1,-.2+h*.1,0,0,Math.PI/2);i.position.set(.28,.2,0);let l=it(t,xt(.06,.3,.32),14212303,-.3,.4,.28);it(t,Te(.02,.02,.3,6),Ye,-.3,.18,.28),r.push([l,"y",1.5])}return n.add(i),{root:t,yaw:e,pitch:n,muzzle:i,spin:r,glow:a}}function jl(s,t){s.updateMatrixWorld(!0);let e=new $t().copy(s.matrixWorld).invert(),n=new Map,i=[],r=a=>{for(let o of a.children)if(!t(o)){if(o.isMesh&&!Array.isArray(o.material)&&o.geometry.index){let l=new $t().multiplyMatrices(e,o.matrixWorld),c=o.material.uuid;n.has(c)||n.set(c,{mat:o.material,geos:[]});let h=o.geometry.clone().applyMatrix4(l);for(let d of Object.keys(h.attributes))["position","normal","uv"].includes(d)||h.deleteAttribute(d);n.get(c).geos.push(h),i.push(o)}r(o)}};r(s);for(let a of i)a.parent.remove(a);for(let{mat:a,geos:o}of n.values()){let l=new pt(ar(o,!1),a);l.castShadow=l.receiveShadow=!0,s.add(l)}}var Zh={},Jh={};function Vf(s){for(let[t,e,n]of s)t.userData.spin=[e,n]}function Wf(s){let t=[],e=[];return s.traverse(n=>{n.userData.spin&&t.push([n,n.userData.spin[0],n.userData.spin[1]]),n.userData.glow&&e.push(n)}),{spin:t,glow:e}}function wa(s){if(!Zh[s]){let r=P_(s);Vf(r.spin),r.glow.forEach(o=>o.userData.glow=!0),r.yaw.name="yaw",r.pitch.name="pitch",r.muzzle.name="muzzle";let a=o=>o.userData.spin||o.userData.glow;jl(r.pitch,a),jl(r.yaw,o=>o===r.pitch||a(o)),jl(r.root,o=>o===r.yaw||a(o)),Zh[s]=r.root}let t=Zh[s].clone(!0),e=t.getObjectByName("yaw"),n=t.getObjectByName("pitch"),i=t.getObjectByName("muzzle");return Object.assign({root:t,yaw:e,pitch:n,muzzle:i},Wf(t))}function Xf(s){if(!Jh[s]){let n=C_(s);Vf(n.spin),n.body.name="body",jl(n.body,i=>i.userData.spin),Jh[s]={root:n.root,hpY:n.hpY}}let t=Jh[s],e=t.root.clone(!0);return Object.assign({root:e,body:e.getObjectByName("body"),hpY:t.hpY},Wf(e))}var Hf=new Se({color:7336959,transparent:!0,opacity:.45,depthWrite:!1}),I_=new Se({color:16734815,transparent:!0,opacity:.45,depthWrite:!1});function qf(s){let t=wa(s);return t.root.traverse(e=>{e.isMesh&&(e.material=Hf,e.castShadow=!1)}),t.setOk=e=>t.root.traverse(n=>{n.isMesh&&(n.material=e?Hf:I_)}),t}function Ql(s,t,e){let n=s.clone();return n.needsUpdate=!0,n.repeat.set(t,e),n}var D_={hangangPark:yf,grass:kh,dirt:Sf,snow:Mf},$e=(s=0,t=0,e=0)=>new P(s,t,e),ri=1.9,L_=1.75,yi=class{constructor(){this.map=new Map}push(t,e){this.map.has(t)||this.map.set(t,[]);for(let n of Object.keys(e.attributes))["position","normal","uv"].includes(n)||e.deleteAttribute(n);e.attributes.uv||e.setAttribute("uv",new Be(new Float32Array(e.attributes.position.count*2),2)),this.map.get(t).push(e.index?e.toNonIndexed():e)}build(t,e=!0){for(let[n,i]of this.map){let r=new pt(ar(i,!1),n);r.castShadow=e,r.receiveShadow=!0,t.add(r)}this.map.clear()}};function rs(s,t,e,n,i,r,a,o,l,c,h=1,d=1,u){let f=[[i,0,0,a/2,0,!1],[i,Math.PI,0,-a/2,0,!1],[a,Math.PI/2,i/2,0,0,!0],[a,-Math.PI/2,-i/2,0,0,!0]],m=new $t().makeRotationY(o),x=new $t().makeTranslation(t,e,n);for(let[g,p,_,S,,v]of f){let b=new Ie(g,r),E=b.attributes.uv,C=v&&u?u:l;if(!(v&&u))for(let y=0;y<E.count;y++)E.setXY(y,E.getX(y)*g/h,E.getY(y)*r/d);b.rotateY(p),b.translate(_,r/2,S),b.applyMatrix4(m),b.applyMatrix4(x),s.push(C,b)}if(c){let g=new Ie(i,a);g.rotateX(-Math.PI/2),g.translate(0,r,0),g.applyMatrix4(m),g.applyMatrix4(x),s.push(c,g)}}var jh=(s,t={})=>{let e=s.clone();return e.needsUpdate=!0,e.wrapS=e.wrapT=xe,new jt(Object.assign({map:e,roughness:.85},t))};function Yf(s,t,e){let n=Math.max(.05,(s-t)/2),i=s/2,r=t/2,a=[-i,0,r,i,0,r,n,e,0,-i,0,r,n,e,0,-n,e,0,i,0,-r,-i,0,-r,-n,e,0,i,0,-r,-n,e,0,n,e,0,i,0,r,i,0,-r,n,e,0,-i,0,-r,-i,0,r,-n,e,0],o=new ue;return o.setAttribute("position",new Vt(a,3)),o.computeVertexNormals(),o}function N_(s){let t=new se;t.position.set(s.x,0,s.z),t.rotation.y=s.ry||0;let e=(o,l,c=0,h=0,d=0)=>{let u=new pt(o,l);return u.position.set(c,h,d),u.castShadow=u.receiveShadow=!0,t.add(u),u},n=(o,l,c,h,d=0,u=0,f=0)=>e(new Nt(o,l,c),h,d,u+l/2,f),i=(o,l,c,h,d)=>e(Yf(o,l,c),h,0,d,0),r={plaza:wt(14275266),stone:wt(12432803),granite:wt(10131086),red:wt(10696236),green:wt(4098936),tile:wt(3882821,{side:Fe}),blueTile:wt(2907816,{side:Fe,roughness:.5}),white:wt(15855592),dark:new Se({color:1315860}),bronze:wt(6253130,{metalness:.4,roughness:.5}),silver:wt(13225684,{metalness:.6,roughness:.3}),glass:wt(8829404,{metalness:.3,roughness:.2}),lawn:wt(7317066),water:wt(5941206,{roughness:.2}),hill:wt(5537850,{roughness:1})},a=new pt(new Nt(s.w,.06,s.d),r.plaza);if(a.position.y=.03,a.receiveShadow=!0,t.add(a),Yh[s.id])return Yh[s.id](t,s),t;switch(s.id){case"namdaemun":{n(3.8,1,2,r.stone),n(.9,.62,2.04,r.dark),e(new Kt(.45,.45,2.04,14,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),r.dark,0,.62,0),n(2.8,.5,1.3,r.red,0,1),n(2.9,.08,1.4,r.green,0,1.46),i(3.7,2.1,.45,r.tile,1.5),n(2.2,.38,.95,r.red,0,1.8),n(2.3,.07,1.05,r.green,0,2.16),i(3.1,1.8,.6,r.tile,2.2);break}case"gyeongbok":{n(4.2,.28,3,r.stone),n(3.6,.28,2.4,r.stone,0,.28),n(.7,.4,.5,r.granite,0,0,1.6),n(2.8,.85,1.4,r.red,0,.56),n(2.9,.08,1.5,r.green,0,1.38),i(3.8,2.2,.45,r.tile,1.44),n(2.2,.4,1,r.red,0,1.78),n(2.3,.07,1.1,r.green,0,2.15),i(3.3,1.9,.65,r.tile,2.2);break}case"cheongwadae":{n(s.w-.2,.04,1,r.lawn,0,.06,.8),n(3.4,.75,1.3,r.white,0,.06,-.3),n(1.3,.95,1.4,r.white,0,.06,-.3),i(3.9,1.8,.5,r.blueTile,.8),e(Yf(1.7,1.8,.75),r.blueTile,0,1,-.3).position.z=-.3;break}case"ntower":{e(new Re(1,20,10,0,Math.PI*2,0,Math.PI/2),r.hill).scale.set(1.5,.8,1.3);let o=.8;e(new Kt(.28,.36,.3,14),r.granite,0,o+.15),e(new Kt(.11,.15,2.6,12),r.white,0,o+1.6),e(new Kt(.36,.26,.2,16),r.white,0,o+2.9),e(new Kt(.4,.36,.3,16),r.glass,0,o+3.12),e(new Kt(.3,.4,.16,16),r.white,0,o+3.34),e(new Kt(.05,.09,.9,8),r.white,0,o+3.85),e(new Re(.07,8,6),new Se({color:16726574}),0,o+4.33);break}case"yisunsin":{e(new Kt(.95,.95,.08,24),r.water,0,.1),n(.7,1.3,.7,r.granite,0,.06),e(new Kt(.14,.22,.7,10),r.bronze,0,1.72),e(new Re(.12,10,8),r.bronze,0,2.17),e(new Kt(.03,.03,.75,6),r.bronze,.18,1.7);break}case"cityhall":{n(3.4,1.5,1.2,r.glass,0,.06,-.5),e(new Nt(3.5,.18,1.2),r.glass,0,1.6,.05).rotation.x=.55,n(1.8,.75,.8,r.stone,0,.06,.75),n(.45,.4,.45,r.stone,0,.8,.75),n(s.w-.4,.04,.5,r.lawn,0,.06,1.25);break}case"ddp":{e(new Re(1,36,14,0,Math.PI*2,0,Math.PI/2),r.silver).scale.set(2.2,.85,1.35),e(new Re(1,24,10,0,Math.PI*2,0,Math.PI/2),r.silver,1.2,0,.35).scale.set(1.1,.6,.8);break}}return t}function $f(s,t,e,n){let i=s.length,r=new Float32Array(i*6),a=new Float32Array(i*4),o=[];for(let c=0;c<i;c++){let h=s[c].p,d=s[Math.min(i-1,c+1)].p,u=s[Math.max(0,c-1)].p,f=d.x-u.x,m=d.z-u.z,x=Math.hypot(f,m)||1,g=-m/x*t/2,p=f/x*t/2;r.set([h.x+g,e,h.z+p,h.x-g,e,h.z-p],c*6);let _=s[c].cum/n;if(a.set([0,_,1,_],c*4),c<i-1){let S=c*2;o.push(S,S+2,S+1,S+1,S+2,S+3)}}let l=new ue;return l.setAttribute("position",new Be(r,3)),l.setAttribute("uv",new Be(a,2)),l.setIndex(o),l.computeVertexNormals(),l}function U_(s,t,e,n,i){let r=[];for(let a of[1,-1]){let o=s.length,l=new Float32Array(o*6),c=new Float32Array(o*4),h=[];for(let u=0;u<o;u++){let f=s[u].p,m=s[Math.min(o-1,u+1)].p,x=s[Math.max(0,u-1)].p,g=m.x-x.x,p=m.z-x.z,_=Math.hypot(g,p)||1,S=-p/_*a,v=g/_*a;l.set([f.x+S*e,n,f.z+v*e,f.x+S*t,n,f.z+v*t],u*6);let b=s[u].cum/i;if(c.set([0,b,1,b],u*4),u<o-1){let E=u*2;h.push(...a>0?[E,E+2,E+1,E+1,E+2,E+3]:[E,E+1,E+2,E+1,E+3,E+2])}}let d=new ue;d.setAttribute("position",new Be(l,3)),d.setAttribute("uv",new Be(c,2)),d.setIndex(h),d.computeVertexNormals(),r.push(d.toNonIndexed())}return ar(r,!1)}function Zf(s,t,e,n){let i=s.length,r=new Float32Array(i*6),a=[];for(let l=0;l<i;l++){let c=s[l].p,h=s[Math.min(i-1,l+1)].p,d=s[Math.max(0,l-1)].p,u=h.x-d.x,f=h.z-d.z,m=Math.hypot(u,f)||1,x=c.x-f/m*t,g=c.z+u/m*t;if(r.set([x,n,g,x,e,g],l*6),l<i-1){let p=l*2;a.push(p,p+2,p+1,p+1,p+2,p+3)}}let o=new ue;return o.setAttribute("position",new Be(r,3)),o.setIndex(a),o.computeVertexNormals(),o}function F_(s,t,e){let n=[];for(let r=3,a=0;r<t-2;r+=6.5,a++){let o=s.findIndex(E=>E.cum>=r);if(o<1)continue;let l=s[o].p,c=s[Math.min(s.length-1,o+1)].p,h=s[o-1].p,d=c.x-h.x,u=c.z-h.z,f=Math.hypot(d,u)||1,m=a%2?1:-1,x=-u/f*m,g=d/f*m,p=l.x+x*e,_=l.z+g*e,S=new Kt(.035,.05,1.5,6);S.translate(p,.75+.1,_);let v=new Nt(.05,.05,.42);v.rotateY(Math.atan2(-x,-g)),v.translate(p-x*.2,1.58,_-g*.2);let b=new Nt(.2,.07,.12);b.rotateY(Math.atan2(-x,-g)),b.translate(p-x*.4,1.55,_-g*.4),n.push(S,v,b)}return n.length?ar(n.map(r=>r.toNonIndexed()),!1):null}function O_(s,t=1.6){let e=s.map(([a,o])=>$e(a,0,o)),n=[e[0]];for(let a=1;a<e.length-1;a++){let o=e[a-1],l=e[a],c=e[a+1],h=o.clone().sub(l).normalize(),d=c.clone().sub(l).normalize(),u=l.clone().addScaledVector(h,t),f=l.clone().addScaledVector(d,t);for(let m=0;m<=8;m++){let x=m/8;n.push(u.clone().multiplyScalar((1-x)**2).addScaledVector(l,2*x*(1-x)).addScaledVector(f,x*x))}}n.push(e[e.length-1]);let i=[],r=0;for(let a=0;a<n.length-1;a++){let o=n[a],l=n[a+1],c=o.distanceTo(l),h=Math.max(1,Math.ceil(c/.25));for(let d=0;d<h;d++)i.push({p:o.clone().lerp(l,d/h),cum:r+c*d/h});r+=c}return i.push({p:n[n.length-1].clone(),cum:r}),{samples:i,len:r}}function B_(s){let t=new Ii(s.map(([o,l])=>$e(o,0,l)),!1,"centripetal"),e=t.getLength(),n=Math.max(8,Math.ceil(e/.25)),i=[],r=0,a=null;for(let o=0;o<=n;o++){let l=t.getPointAt(o/n);a&&(r+=l.distanceTo(a)),i.push({p:l,cum:r}),a=l}return{samples:i,len:r}}var tc=class{constructor(t,e){this.scene=t,this.S=e,this.group=new se,t.add(this.group),this.anim=[],this.labels=[],this.rnd=fe(e.seed),this.roadClear=L_+(e.streetFront?e.streetFront.depth:0),this.mats(),this.buildRoute(),this.buildGround(),this.buildRiver(),this.buildCity(),this.buildLandmarks(),this.buildBattleDecor(),this.buildGateBase(),this.buildStreetFront(),this.buildTrees()}mats(){this.M={apt:[0,1,2].map(t=>jh(gf(t),{roughness:.8,emissive:2500134})),glass:[0,1,2,3].map(t=>jh(Gh(t),{roughness:.4,metalness:.05,color:15266040})),gold:jh(Vh(),{roughness:.35,metalness:.1}),roof:wt(12172480),roof2:wt(9343640),roofG:wt(8231530),gable:[101,102,103,104,105,106,107,108,109,110].map((t,e)=>new jt({map:xf(t,e%3),roughness:.8}))}}buildRoute(){let t=this.S;this.steps=t.route.map(d=>({opts:(d.choice||[d]).map(f=>Object.assign({id:f.id,pts:f.pts},f.sharp?O_(f.pts):B_(f.pts))),choice:!!d.choice,open:0}));let e=Rf(),n=Cf(),i=new jt({map:e.map,bumpMap:e.bump,bumpScale:1.2,roughness:.88,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new jt({map:n.map,bumpMap:n.bump,bumpScale:1.5,roughness:.92,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Se({map:mf(),transparent:!0,depthWrite:!1}),o=new jt({color:12170926,roughness:.9,side:Fe}),l=wt(4212044);this.ghostM=a,this.roadM=i,this.walkM=r,this.roadGroup=new se,this.group.add(this.roadGroup);for(let d of this.steps)d.opts.forEach((u,f)=>{u.road=new pt($f(u.samples,ri,.03+f*.004,3.2),i),u.walk=new pt(U_(u.samples,ri/2,(ri+.9)/2,.13,2.4),r),u.road.receiveShadow=u.walk.receiveShadow=!0;for(let x of[ri/2,-ri/2])u.walk.add(new pt(Zf(u.samples,x,.02,.13),o));for(let x of[(ri+.9)/2,-(ri+.9)/2]){let g=new pt(Zf(u.samples,x,0,.13),o);g.castShadow=!0,u.walk.add(g)}let m=F_(u.samples,u.len,ri/2+.28);if(m){let x=new pt(m,l);x.castShadow=!0,u.walk.add(x)}u.ghost=new pt($f(u.samples,ri,.05,1.6),a),this.roadGroup.add(u.road,u.walk,u.ghost)});let c=new jn;c.moveTo(-.32,.36),c.lineTo(.18,0),c.lineTo(-.32,-.36),c.lineTo(-.1,-.36),c.lineTo(.4,0),c.lineTo(-.1,.36),c.closePath();let h=new Yr(c);h.rotateX(-Math.PI/2),this.chevM=new Se({color:14174012,transparent:!0,opacity:.5,depthWrite:!1}),this.chev=new Rn(h,this.chevM,600),this.chev.frustumCulled=!1,this.group.add(this.chev),this.barricades=new se,this.group.add(this.barricades),this.refreshRoads()}activeOpts(){return this.steps.map(t=>t.opts[t.open])}routeLength(){return this.activeOpts().reduce((t,e)=>t+e.len,0)}refreshRoads(){for(let r of this.steps)r.opts.forEach((a,o)=>{let l=o===0||r.open===o;a.road.visible=a.walk.visible=l,a.ghost.visible=!l});this.barricades.clear();for(let r of this.steps){if(!r.choice||r.open===0)continue;let a=r.opts[0].samples,o=a[Math.floor(a.length/2)],l=a[Math.floor(a.length/2)+1],c=new se;for(let h=-1;h<=1;h++){let d=new pt(new Nt(.26,.42,.6),wt(h%2?14211280:14172206));d.position.set(0,.21,h*.62),d.castShadow=!0,c.add(d)}c.position.set(o.p.x,0,o.p.z),c.rotation.y=-Math.atan2(l.p.z-o.p.z,l.p.x-o.p.x),this.barricades.add(c)}this.chevPts=[];let t=0;for(let r of this.activeOpts()){let a=r.samples;for(let o=t;o<r.len;o+=2.2){let l=0;for(;l<a.length-2&&a[l+1].cum<o;)l++;let c=a[l],h=a[l+1],d=(o-c.cum)/Math.max(1e-6,h.cum-c.cum);this.chevPts.push({x:c.p.x+(h.p.x-c.p.x)*d,z:c.p.z+(h.p.z-c.p.z)*d,ang:Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x)})}t=(t-r.len)%2.2,t<0&&(t+=2.2)}let e=new $t,n=new an,i=$e(1,1,1);this.chev.count=Math.min(600,this.chevPts.length);for(let r=0;r<this.chev.count;r++){let a=this.chevPts[r];n.setFromAxisAngle($e(0,1,0),-a.ang),e.compose($e(a.x,.1,a.z),n,$e(1.25,1,1.25)),this.chev.setMatrixAt(r,e)}this.chev.instanceMatrix.needsUpdate=!0}openDetour(t){let e=this.steps[t];return!e||!e.choice||e.open?!1:(e.open=1,this.refreshRoads(),!0)}resetRoutes(){for(let t of this.steps)t.open=0;this.refreshRoads()}detourNear(t,e=2.2){let n=null,i=e;return this.steps.forEach((r,a)=>{if(!(!r.choice||r.open))for(let o of r.opts[1].samples){let l=Math.hypot(o.p.x-t.x,o.p.z-t.z);l<i&&(i=l,n=a)}}),n}roadDist(t,e){let n=1e9;for(let i of this.steps)for(let r of i.opts){let a=r.samples;for(let o=0;o<a.length;o+=2){let l=(a[o].p.x-t)**2+(a[o].p.z-e)**2;l<n&&(n=l)}}return Math.sqrt(n)}blockReason(t,e){let n=this.S.bounds;if(t<n.x0+.5||t>n.x1-.5||e<n.z0+.5||e>n.z1-.5)return"\uC791\uC804 \uAD6C\uC5ED \uBC16";if(this.roadDist(t,e)<this.roadClear)return"\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00";for(let i of this.S.blockers)if(i.kind==="pond"){if(((t-i.x)/(i.rx+.4))**2+((e-i.z)/(i.rz+.4))**2<1)return"\uC5F0\uBABB \uBC30\uCE58 \uBD88\uAC00"}else if(Math.abs(t-i.x)<i.w/2+.6&&Math.abs(e-i.z)<i.d/2+.6)return i.label+" \uC790\uB9AC \uBC30\uCE58 \uBD88\uAC00";return Math.hypot(t-this.base.x,e-this.base.z)<2.2?"\uC9C0\uD718\uBD80 \uBC30\uCE58 \uBD88\uAC00":null}buildGround(){let t=this.S,e=t.bounds,n=Pf(),i=new pt(new Ie(520,520),new jt({map:Ql(n.map,90,90),bumpMap:Ql(n.bump,90,90),roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-.02,i.receiveShadow=!0,this.group.add(i);let r=e.x1-e.x0,a=e.z1-e.z0,o=t.theme||{},l;if(o.ground==="boulevard"){let m=If(),x=8.5,g=o.laneCenter??4.25,p=new Ie(r,a);p.rotateX(-Math.PI/2);let _=p.attributes.position,S=p.attributes.uv;for(let b=0;b<_.count;b++){let E=_.getX(b)+(e.x0+e.x1)/2,C=_.getZ(b)+(e.z0+e.z1)/2;S.setXY(b,E/x,(C-g)/x+.5)}let v=new pt(p,new jt({map:m.map,bumpMap:m.bump,bumpScale:1.2,roughness:.86}));v.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),v.receiveShadow=!0,this.group.add(v),this.buildCrosswalks()}else if(o.ground==="hangangPark"||!o.ground){let m=Af();l=new jt({map:Ql(m.map,r/14,a/14),bumpMap:Ql(m.bump,r/14,a/14),bumpScale:2,roughness:.97})}else{let m=D_[o.ground]().clone();m.needsUpdate=!0,m.wrapS=m.wrapT=xe,m.repeat.set(r/8,a/8),l=new jt({map:m,roughness:1})}if(l){let m=new pt(new Ie(r,a),l);m.rotation.x=-Math.PI/2,m.position.set((e.x0+e.x1)/2,.005,(e.z0+e.z1)/2),m.receiveShadow=!0,this.group.add(m)}let c=new yi,h=wt(o.edge||12433580),d=wt(o.hedge||5012020,{roughness:1}),u=(e.x0+e.x1)/2,f=(e.z0+e.z1)/2;for(let[m,x,g,p,_,S]of[[u,e.z0,r+.7,.35,0,-1],[u,e.z1,r+.7,.35,0,1],[e.x0,f,.35,a+.7,-1,0],[e.x1,f,.35,a+.7,1,0]]){let v=new Nt(g,.32,p);v.translate(m,.16,x),c.push(h,v);let b=new Nt(g+(_?0:1.2),.55,p+(S?0:1.2));b.translate(m+_*.55,.27,x+S*.55),c.push(d,b)}c.build(this.group)}buildRiver(){let t=this.S.river;if(!t)return;let e=t.z-t.w/2,n=t.z+t.w/2,i=pf().clone();i.needsUpdate=!0,i.wrapS=i.wrapT=xe,i.repeat.set(60,2);let r=new pt(new Ie(520,t.w),new jt({map:i,color:10408176,roughness:.25,metalness:.2}));r.rotation.x=-Math.PI/2,r.position.set(0,.003,t.z),r.receiveShadow=!0,this.group.add(r),this.anim.push(p=>{i.offset.x+=p*.01,i.offset.y+=p*.004});let a=kh().clone();a.needsUpdate=!0,a.wrapS=a.wrapT=xe,a.repeat.set(80,1);let o=new jt({map:a,roughness:1});for(let[p,_]of[[e-1,2.2],[n+1,2.2]]){let S=new pt(new Ie(520,_),o);S.rotation.x=-Math.PI/2,S.position.set(0,.004,p),S.receiveShadow=!0,this.group.add(S)}let l=wt(11118236);for(let p of[e,n]){let _=new pt(new Ie(520,.35),l);_.rotation.x=-Math.PI/2,_.position.set(0,.006,p),this.group.add(_)}let c=new pt(new Ie(520,.35),wt(11891034));c.rotation.x=-Math.PI/2,c.position.set(0,.008,e-.9),this.group.add(c);let h=new yi,d=wt(9211795),u=wt(11842218),f=wt(13125178),m=wt(3829685),x=wt(15263976),g=[[-22,"arch",m],[4,"plain",null],[30,"truss",f]];for(let[p,_,S]of g){let v=t.w+2.8,b=t.z,E=new Nt(2.6,.3,v);E.translate(p,.35,b),h.push(d,E);let C=new Ie(2.2,v);C.rotateX(-Math.PI/2),C.translate(p,.505,b),h.push(wt(5593181),C);for(let y of[-1,1]){let w=new Nt(.08,.16,v);w.translate(p+y*1.25,.58,b),h.push(x,w)}for(let y=e+.5;y<=n-.5;y+=1.75){let w=new Nt(1.6,.9,.5);w.translate(p,-.15,y),h.push(u,w)}if(_==="arch")for(let y of[-1,1])for(let w=0;w<16;w++){let A=w/16*Math.PI,I=(w+1)/16*Math.PI,D=$e(p+y*1.25,.5+Math.sin(A)*2.6,b-Math.cos(A)*(t.w/2)),O=$e(p+y*1.25,.5+Math.sin(I)*2.6,b-Math.cos(I)*(t.w/2)),N=new Nt(.16,.16,D.distanceTo(O)+.05);if(N.lookAt(O.clone().sub(D)),N.translate((D.x+O.x)/2,(D.y+O.y)/2,(D.z+O.z)/2),h.push(S,N),w%2===0&&w>0){let B=Math.sin(A)*2.6,W=new Nt(.05,B,.05);W.translate(p+y*1.25,.5+B/2,D.z),h.push(S,W)}}else if(_==="truss")for(let y of[-1,1]){let w=new Nt(.14,.14,v-3);w.translate(p+y*1.25,1.7,b),h.push(S,w);for(let A=b-(v-3)/2;A<b+(v-3)/2;A+=1.1){let I=new Nt(.08,1.45,.08);I.rotateX(Math.round(A*10)%2?.6:-.6),I.translate(p+y*1.25,1.05,A+.55),h.push(S,I)}}}h.build(this.group);for(let p=0;p<4;p++){let _=new se,S=new pt(new Nt(2.2,.35,.7),wt(16053488));S.position.y=-.15,_.add(S);let v=new pt(new Nt(1.1,.35,.55),wt(3829685));v.position.set(-.2,.18,0),_.add(v),_.position.set(-80+p*45,0,t.z+(p%2?1.6:-1.4));let b=p%2?1:-1;this.group.add(_),this.anim.push((E,C)=>{_.position.x+=b*.9*E,_.position.x>120&&(_.position.x=-120),_.position.x<-120&&(_.position.x=120),_.rotation.z=Math.sin(C*1.3+p)*.02,_.rotation.y=b>0?0:Math.PI})}}buildCity(){let t=this.S,e=t.bounds,n=t.river,i=this.rnd,r=new yi,a=this.M,o=[];for(let f of t.landmarks)f.id==="namsan"&&o.push([f.x,f.z,13]),f.id==="lotte"&&o.push([f.x,f.z,7]),f.id==="b63"&&o.push([f.x,f.z-3,7]);let l=t.gate,c=t.base;o.push([l[0]-2,l[1],4.5]);let h=(f,m,x)=>{if(f>e.x0-3.5&&f<e.x1+3.8&&m>e.z0-3.4&&m<e.z1+3.4||n&&m>n.z-n.w/2-2.5-x&&m<n.z+n.w/2+2.5+x)return!1;for(let[g,p,_]of o)if(Math.hypot(f-g,m-p)<_+x)return!1;return!0},d=wt(13223613),u=0;for(let f=-150;f<150;f+=9)for(let m=-78;m<90;m+=9){let x=f+4.5,g=m+4.5,p=Math.hypot(x,g);if(p>150||!h(x,g,4))continue;let _=new Ie(7.2,7.2);_.rotateX(-Math.PI/2),_.translate(x,.006,g),r.push(d,_);let S=g<(n?n.z:-40),v=g>e.z1-6&&g<e.z1+34&&x>e.x0-30&&x<e.x1+30,b=!v&&g>e.z0-4&&g<e.z1&&(x<e.x0||x>e.x1)&&Math.min(Math.abs(x-e.x0),Math.abs(x-e.x1))<16,E=v?.45:b?.75:1,C=i();if(C<(S?.55:.68)){let y=i.int(0,2),w=Math.round(i.int(12,25)*E),A=w*.28,I=i()<.85?0:Math.PI/2;for(let D=0;D<2;D++){let O=i.range(5.2,6.4),N=1.25,B=I?D?1.7:-1.7:0,W=I?0:D?1.8:-1.8,X=p<60;rs(r,x+B,0,g+W,O,A,N,I,a.apt[y],a.roof,1.6,1.12,X?a.gable[u++%a.gable.length]:null)}}else if(C<.9){let y=i.int(1,3);for(let w=0;w<y;w++){let A=i.range(2.2,3.4),I=i.range(2.2,3.4),D=i.range(5,p<50?12:18)*E;rs(r,x+i.range(-1.6,1.6),0,g+i.range(-1.6,1.6),A,D,I,0,a.glass[i.int(0,3)],a.roof2,2,2)}}else{let y=new Ie(6.8,6.8);y.rotateX(-Math.PI/2),y.translate(x,.01,g),r.push(a.roofG,y);for(let w=0;w<6;w++)(this.cityTrees=this.cityTrees||[]).push([x+i.range(-3,3),g+i.range(-3,3),i.range(.8,1.2)])}if(i()<.5)for(let y=0;y<3;y++)(this.cityTrees=this.cityTrees||[]).push([x+(i()<.5?-3.8:3.8),g+i.range(-3.5,3.5),i.range(.7,1)])}if(n)for(let f=-150;f<150;f+=7.5){let m=n.z-n.w/2-4;if(o.some(([p,_,S])=>Math.hypot(f-p,m-_)<S+3))continue;let x=i.int(0,2),g=i.int(14,28)*.28;rs(r,f,0,m,6,g,1.25,0,a.apt[x],a.roof,1.6,1.12,Math.abs(f)<50?a.gable[u++%a.gable.length]:null)}r.build(this.group)}buildLandmarks(){let t=this.S,e=new yi;for(let n of t.landmarks){if(n.id==="namsan"){let i=new Re(1,28,14,0,Math.PI*2,0,Math.PI/2),r=i.attributes.position,a=fe("namsan");for(let l=0;l<r.count;l++){let c=r.getY(l);r.setXYZ(l,r.getX(l)*11,Math.pow(c,1.4)*6*(1+a.range(-.04,.04)),r.getZ(l)*8)}i.computeVertexNormals();let o=new pt(i,wt(5208630,{roughness:1}));o.position.set(n.x,-.1,n.z),o.castShadow=o.receiveShadow=!0,this.group.add(o),this.namsan={x:n.x,z:n.z};for(let l=0;l<260;l++){let c=a()*Math.PI*2,h=Math.sqrt(a())*.95,d=Math.cos(c)*h,u=Math.sin(c)*h,f=Math.pow(Math.sqrt(Math.max(0,1-h*h)),1.4)*6;h>.18&&(this.cityTrees=this.cityTrees||[]).push([n.x+d*11,n.z+u*8,a.range(1,1.5),f-.1])}}if(n.id==="ntower"){let i=new se;i.position.set(n.x,5.8,n.z),i.scale.setScalar(.85);let r=wt(15921904,{roughness:.5}),a=wt(10396584),o=(c,h,d)=>{let u=new pt(c,h);return u.position.y=d,u.castShadow=!0,i.add(u),u};o(new Kt(1.1,1.4,1,16),a,.5),o(new Kt(.42,.55,8.5,16),r,5.2),o(new Kt(1.15,.85,.6,20),r,9.4),o(new Kt(1.25,1.15,.9,20),wt(7309984,{roughness:.3,metalness:.5}),10.1),o(new Kt(.95,1.25,.5,20),r,10.8),o(new Kt(.18,.3,2.6,10),r,12.4);for(let c=0;c<4;c++)o(new Kt(.1,.12,.5,8),c%2?r:wt(13777454),13.9+c*.5);let l=o(new Re(.16,8,6),new Se({color:16726574}),16);this.anim.push((c,h)=>{l.visible=Math.sin(h*3)>0}),this.group.add(i)}if(n.id==="lotte"){let i=new Kt(.35,2.4,26,4,12,!1,Math.PI/4),r=i.attributes.position;for(let c=0;c<r.count;c++){let h=r.getY(c)/26+.5,d=2.4+(.35-2.4)*h,u=2.4*(1-.86*Math.pow(h,1.7));r.setX(c,r.getX(c)*u/d),r.setZ(c,r.getZ(c)*u/d)}i.computeVertexNormals();let a=Gh(2).clone(),o=new pt(i,new jt({map:a,color:16777215,emissive:1911350,roughness:.35,metalness:.05}));o.position.set(n.x,13,n.z),o.castShadow=!0,this.group.add(o);let l=new pt(new _n(.35,2,4),wt(15331058,{metalness:.6,roughness:.3}));l.position.set(n.x,27,n.z),this.group.add(l),rs(e,n.x+4.2,0,n.z+1,4,2.2,3,0,this.M.glass[1],this.M.roof2,2,2)}if(n.id==="b63"){let i=new Nt(3.2,13,2),r=i.attributes.position;for(let l=0;l<r.count;l++){let c=r.getY(l)/13+.5;r.setX(l,r.getX(l)*(1-c*.35))}i.computeVertexNormals();let a=Vh().clone();a.needsUpdate=!0,a.wrapS=a.wrapT=xe,a.repeat.set(4,16);let o=new pt(i,new jt({map:a,emissive:2759168,roughness:.35,metalness:.1}));o.position.set(n.x,6.5,n.z),o.castShadow=!0,this.group.add(o);for(let l=0;l<4;l++)rs(e,n.x-1.2-(l>>1)*3.2,0,n.z+(l%2?4.6:-4.6),2.2,4+l*1.1,2.6,0,this.M.glass[l%4],this.M.roof2,2,2)}if(n.id==="bukhan"){let i=fe("bukhan"),r=wt(8357240,{roughness:1,flatShading:!0}),a=wt(5599306,{roughness:1,flatShading:!0});for(let o=0;o<16;o++){let l=-160+o*21+i.range(-6,6),c=14+i()*16*(1-Math.abs(l-n.x)/200),h=i.range(14,24),d=new _n(h,c,9,4),u=d.attributes.position;for(let m=0;m<u.count;m++)u.getY(m)<c/2-.01&&u.setXYZ(m,u.getX(m)*i.range(.85,1.15),u.getY(m)+i.range(-1,1),u.getZ(m)*i.range(.85,1.15));d.computeVertexNormals();let f=new pt(d,o%3===0?r:a);f.position.set(l,c/2-1,n.z-i.range(0,14)),this.group.add(f)}}n.label&&n.id!=="namsan"&&this.labels.push({text:n.label,pos:$e(n.x,n.y||0,n.z),kind:"landmark"}),n.id==="namsan"&&n.label&&this.labels.push({text:n.label,pos:$e(n.x+8,2.5,n.z+4),kind:"landmark"})}e.build(this.group)}buildBattleDecor(){let t=new yi,e=this.M;for(let n of this.S.blockers)if(n.kind==="pond"){let i=new Kn(1,32);i.rotateX(-Math.PI/2),i.scale(n.rx,1,n.rz),i.translate(n.x,.015,n.z),t.push(wt(5216196,{roughness:.2,metalness:.2}),i);let r=new Di(1,1.12,32);r.rotateX(-Math.PI/2),r.scale(n.rx,1,n.rz),r.translate(n.x,.02,n.z),t.push(wt(13222573),r)}else if(n.kind==="field"){let i=new pt(new Ie(n.w+1.4,n.d+.9),wt(11883839));i.rotation.x=-Math.PI/2,i.position.set(n.x,.012,n.z),i.receiveShadow=!0,this.group.add(i);let r=new pt(new Ie(n.w,n.d),new jt({map:_f(),roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(n.x,.016,n.z),r.receiveShadow=!0,this.group.add(r);for(let a of[-1,1]){let o=new Nt(.1,.35,.9);o.translate(n.x+a*n.w/2,.18,n.z),t.push(wt(16777215),o)}}else if(n.kind==="landmark")this.group.add(N_(n)),n.label&&this.labels.push({text:n.label,pos:$e(n.x,n.y||2.6,n.z),kind:"landmark"});else if(n.kind==="apts"){let i=Math.max(1,Math.round(n.w/3.4));for(let r=0;r<i;r++){let a=n.w/i-.5,o=n.x-n.w/2+(r+.5)*n.w/i;rs(t,o,0,n.z,a,4.2+r%2*.8,n.d-.6,0,e.apt[r%3],e.roof,1.6,1.12,e.gable[r%e.gable.length])}}t.build(this.group)}buildGateBase(){let t=this.S,[e,n]=t.gate;this.gate=$e(e,0,n);let i=new se;i.position.set(e,0,n);let r=wt(9276035),a=new Se({color:723724}),o=new pt(new Re(1,20,10,0,Math.PI*2,0,Math.PI/2),wt(5601852,{roughness:1}));o.scale.set(3,2.6,3.4),o.position.set(-2.4,0,0),o.castShadow=!0,i.add(o);let l=new pt(new Nt(1.2,2.4,4.2),r);l.position.set(.2,1.2,0),l.castShadow=!0,i.add(l);let c=new pt(new Ie(2.4,1.7),a);c.rotation.y=Math.PI/2,c.position.set(.81,.85,0),i.add(c);let h=new pt(new Nt(.08,.12,2.8),new Se({color:16724016}));h.position.set(.84,1.85,0),i.add(h),this.anim.push((m,x)=>{h.material.color.setHSL(0,1,.45+Math.sin(x*4)*.12)}),this.group.add(i),this.labels.push({text:"\uC801 \uC9C4\uC785",pos:$e(e+.5,3.2,n),kind:"enemy"});let[d,u]=t.base;this.base=$e(d,0,u);let f=Gf();f.root.scale.setScalar(2.4),f.root.position.set(d,0,u),f.root.rotation.y=Math.PI/2,this.group.add(f.root);for(let[m,x,g]of f.spin)this.anim.push(p=>{m.rotation[x]+=g*p});this.anim.push((m,x)=>{f.flag.rotation.y=Math.sin(x*2.2)*.25}),this.baseModel=f,this.labels.push({text:"\uC5F0\uD569 \uC9C0\uD718\uBD80",pos:$e(d,3.4,u),kind:"base"})}buildCrosswalks(){let t=this.S,e=t.bounds,n=t.theme||{},i=n.laneCenter??4.25,r=4.25-this.roadClear+.55,a=new jt({map:Df(),transparent:!0,roughness:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),o=new yi;for(let l=i-8.5*4;l<=e.z1;l+=8.5)if(!(l-r<e.z0||l+r>e.z1))for(let c of n.crosswalkX||[-21,-2,21]){if(t.blockers.some(u=>Math.abs(c-u.x)<u.w/2+.8&&Math.abs(l-u.z)<u.d/2+2))continue;let h=new Ie(.75,r*2);h.rotateX(-Math.PI/2),h.translate(c,.012,l);let d=h.attributes.uv;for(let u=0;u<d.count;u++)d.setY(u,d.getY(u)*r*2/2.2);o.push(a,h)}o.build(this.group,!1)}buildStreetFront(){let t=this.S.streetFront;if(!t)return;let e=this.S,n=e.bounds,i=fe(e.seed+"street"),r=new yi,a=[0,1,2,3,4,5].map(m=>new jt({map:Lf(m),roughness:.8})),o=[0,1,2].map(m=>new jt({map:Nf(m),roughness:.25,metalness:.4})),l=wt(9277329,{roughness:.95}),c=wt(4165577,{roughness:.6}),h=wt(13224908),d=(ri+.9)/2+.03,u=t.depth,f=(m,x,g)=>m-g<n.x0+.05||m+g>n.x1-.05||x-g<n.z0+.05||x+g>n.z1-.05||e.blockers.some(p=>Math.abs(m-p.x)<p.w/2+g+.2&&Math.abs(x-p.z)<p.d/2+g+.2)||this.base&&Math.hypot(m-this.base.x,x-this.base.z)<2.6||e.gate&&Math.hypot(m-e.gate[0],x-e.gate[1])<2.4?!1:this.roadDist(m,x)>d+u*.3;for(let m of e.route){let x=m.pts;for(let g=0;g<x.length-1;g++){let[p,_]=x[g],[S,v]=x[g+1],b=Math.hypot(S-p,v-_),E=(S-p)/b,C=(v-_)/b;for(let y of[-1,1]){let w=-C*y,A=E*y,I=d+u/2,D=g===0?.3:I+.3,O=0,N=b-(g===x.length-2?.3:I+.3);for(;D<N-.5;){let B=Math.min(N-D,i.range(.9,1.9)),W=p+E*(D+B/2)+w*I,X=_+C*(D+B/2)+A*I;if(f(W,X,Math.max(B,u)/2*.7)){let st=A>.5,V=!st&&i()<.1,J=V?i.range(1.6,2.4):st?i.range(.3,.6):i.range(.5,1.3),j=Math.atan2(-C,E)+(y>0?Math.PI:0),At=V?o[Math.floor(i()*3)]:a[Math.floor(i()*6)];if(rs(r,W,0,X,B-.06,J,u,j,At,l,V?.8:1,V?.8:1.5),i()<.5){let yt=new Kt(.09,.09,.14,8);yt.translate(W+w*.05,J+.07,X+A*.05),r.push(c,yt)}if(i()<.6){let yt=new Nt(.16,.1,.12);yt.translate(W-E*B*.25,J+.05,X-C*B*.25),r.push(h,yt)}}D+=B+(++O%5===0?.45:.04)}}}}r.build(this.group)}buildTrees(){let t=this.S,e=t.bounds,n=fe(t.seed+"trees"),i=[];for(let p=0;p<2600&&i.length<(t.parkTrees||0);p++){let _=n.range(e.x0+.6,e.x1-.6),S=n.range(e.z0+.6,e.z1-.6);this.roadDist(_,S)<1.6||this.blockReason(_,S)&&this.blockReason(_,S)!=="\uC801 \uCE68\uD22C\uB85C \uBC30\uCE58 \uBD88\uAC00"||i.some(v=>(v[0]-_)**2+(v[1]-S)**2<.8)||i.push([_,S,n.range(.75,1.15),n()<.12])}this.parkTrees=i;let r=new Kt(.05,.07,.5,5);r.translate(0,.25,0);let a=new Ji(.42,0);a.scale(1,1.15,1),a.translate(0,.82,0);let o=wt(7031343),l=wt(5147194,{flatShading:!0,roughness:.9}),c=wt(15906502,{flatShading:!0,roughness:.9}),h=wt(4158256,{flatShading:!0,roughness:.9}),d=(p,_)=>{let S=new Rn(r,o,Math.max(1,p.length)),v=new Rn(a,_,Math.max(1,p.length));return S.castShadow=v.castShadow=!0,v.receiveShadow=!0,S.count=v.count=p.length,this.group.add(S,v),{tr:S,cr:v,list:p}};this.treeSets=[d(i.filter(p=>!p[3]),l),d(i.filter(p=>p[3]),c)],this.hiddenTrees=new Set,this.refreshTrees();let u=this.cityTrees||[],f=new Rn(r,o,u.length),m=new Rn(a,h,u.length),x=new $t,g=new an;u.forEach(([p,_,S,v=0],b)=>{x.compose($e(p,v,_),g,$e(S,S,S)),f.setMatrixAt(b,x),m.setMatrixAt(b,x)}),m.castShadow=!0,this.group.add(f,m)}refreshTrees(){let t=new $t,e=new an;for(let n of this.treeSets)n.list.forEach((i,r)=>{let a=this.hiddenTrees.has(i)?1e-4:i[2];e.setFromAxisAngle($e(0,1,0),i[0]*7.3),t.compose($e(i[0],0,i[1]),e,$e(a,a,a)),n.tr.setMatrixAt(r,t),n.cr.setMatrixAt(r,t)}),n.tr.instanceMatrix.needsUpdate=n.cr.instanceMatrix.needsUpdate=!0}clearTreesAt(t,e,n=.95){let i=0;for(let r of this.parkTrees)!this.hiddenTrees.has(r)&&(r[0]-t)**2+(r[1]-e)**2<n*n&&(this.hiddenTrees.add(r),i++);return i&&this.refreshTrees(),i}resetTrees(){this.hiddenTrees.clear(),this.refreshTrees()}update(t,e){for(let n of this.anim)n(t,e);this.chevM.opacity=.42+Math.sin(e*4)*.14,this.ghostM.opacity=.65+Math.sin(e*3)*.3}};var Me=(s=0,t=0,e=0)=>new P(s,t,e),Jf=1.6,Kf=1.4,Si={ball:new Re(1,10,7),puff:new Re(1,7,5),ring:new Di(.92,1,48),shell:new Re(.06,6,4),rocket:new _n(.045,.24,6),wreck:new Nt(1,.12,.6)},ec=class{constructor(t){this.app=t,this.scene=t.scene,this.city=t.city,this.S=t.stage,this.fxGroup=new se,this.scene.add(this.fxGroup),this.unitGroup=new se,this.scene.add(this.unitGroup),this.flash=new ea(16752704,0,8,1.6),this.scene.add(this.flash),this.rangeDisc=new se;let e=new pt(new Kn(1,64),new Se({color:8382975,transparent:!0,opacity:.13,depthWrite:!1})),n=new pt(new Di(.98,1,96),new Se({color:11203839,transparent:!0,opacity:.85,depthWrite:!1}));e.rotation.x=n.rotation.x=-Math.PI/2,this.rangeDisc.add(e,n),this.rangeDisc.visible=!1,this.rangeDisc.position.y=.07,this.rangeMats=[e.material,n.material],this.scene.add(this.rangeDisc),this.ghosts={},this.state="title",this.speed=1,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[]}ui(){return this.app.ui}snd(t,e){this.app.sound&&this.app.sound.play(t,e)}start(){let t=this.S,e=GF.SETTINGS;for(let n of this.towers)this.unitGroup.remove(n.model.root);for(let n of this.enemies)this.removeEnemy(n);this.fxGroup.clear(),this.city.resetRoutes(),this.city.resetTrees(),this.money=t.startMoney,this.lives=t.lives,this.cp=e.cpStart,this.cpT=0,this.speed=1,this.waveNo=0,this.kills=0,this.queue=[],this.clock=0,this.nextT=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.enemies=[],this.towers=[],this.shots=[],this.fx=[],this.zones=[],this.timers=[],this.mode=null,this.cardSel=-1,this.selected=null,this.deck=GF.CARD_DECK.slice().sort(()=>Math.random()-.5),this.hand=this.deck.splice(0,GF.HAND_SIZE),this.strat={};for(let[n,i]of Object.entries(GF.STRATEGIC))this.strat[n]={charges:this.stratOpen(n)?i.start:0};this.stratSel=null,this.computeSynergy(),this.updateRemain(),this.state="ready",this.ui().toast('\uB3C4\uB85C \uBC16 \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uACE0 "\uC791\uC804 \uAC1C\uC2DC"\uB97C \uB204\uB974\uC138\uC694',"#8FF3FF",4200)}computeSynergy(){let t=GF.LOADOUT.map(r=>GF.WEAPONS[r]),e=t.filter(r=>r.nation.indexOf("\uBBF8\uAD6D")>=0).length,n=t.filter(r=>r.hits.includes("ground")).length,i=t.filter(r=>r.hits.includes("air")).length;this.syn={usSet:e>=3,slowSplash:t.some(r=>r.slow)&&t.some(r=>r.splash),balance:n>=2&&i>=2},this.synList=[],this.syn.usSet&&this.synList.push("\uBBF8\uAD6D \uC138\uD2B8 \xB7 \uBBF8\uAD6D \uBB34\uAE30 \uACF5\uC18D +5%"),this.syn.slowSplash&&this.synList.push("\uAC10\uC18D + \uBC94\uC704 \xB7 \uAC10\uC18D\uB41C \uC801 \uBC94\uC704 \uD53C\uD574 +20%"),this.syn.balance&&this.synList.push("\uC9C0\uC0C1\xB7\uACF5\uC911 \uADE0\uD615 \xB7 \uCC98\uCE58 \uBCF4\uC0C1 +5%")}updateRemain(){let t=this.city.activeOpts();this.remainAfter=t.map((e,n)=>t.slice(n+1).reduce((i,r)=>i+r.len,0))}callNext(){if(this.isOver()||this.waveNo>=this.S.waves.length)return;if(this.state==="ready"){this.state="battle",this.launchWave(0);return}if(this.queue.length){this.ui().toast("\uC544\uC9C1 \uC774\uBC88 \uC6E8\uC774\uBE0C \uC801\uC774 \uB098\uC624\uB294 \uC911\uC785\uB2C8\uB2E4");return}let t=Math.ceil(this.nextT)*3;this.launchWave(t)}launchWave(t){this.waveNo++;let e=this.S.waves[this.waveNo-1].trim().split(/\s+/),n=this.clock+.2;for(let o=0;o<e.length;o+=2){let l=e[o],c=parseInt(e[o+1],10);for(let h=0;h<c;h++)this.queue.push({t:n,type:l,wave:this.waveNo}),n+=GF.ENEMIES[l].gap;n+=1.2}this.queue.sort((o,l)=>o.t-l.t);let i=this.waveNo>1?40+this.waveNo*8:0;this.money+=i+t;let r=e.reduce((o,l,c)=>c%2?o+parseInt(l,10):o,0),a=`\uC6E8\uC774\uBE0C ${this.waveNo} \xB7 \uC801 ${r}`;i&&(a+=` \xB7 \uBCF4\uAE09 +${i}`),t&&(a+=` \xB7 \uC870\uAE30 \uD22C\uC785 +${t}`),this.ui().toast(a,this.S.waves[this.waveNo-1].includes("boss")?"#FF8A8E":"#ffffff"),this.snd("wave");for(let[o,l]of Object.entries(GF.STRATEGIC)){let c=this.strat[o];this.stratOpen(o)&&this.waveNo%l.every===0&&c.charges<l.max&&(c.charges++,this.timers.push({t:1.2,fn:()=>{this.ui().toast(`${l.name} \uC7AC\uBCF4\uAE09 \uC644\uB8CC! (${l.key} \uD0A4)`,"#FF8A8E",3e3),this.snd("siren")}}))}this.nextT=0}finish(t){if(this.isOver())return;this.state=t?"won":"lost",this.cancelMode();let e=0;if(t){let n=this.lives/this.S.lives;e=n>=.9?3:n>=.5?2:1;try{let i=JSON.parse(localStorage.getItem("gf_progress")||"{}");i[this.S.id]=Math.max(i[this.S.id]||0,e),localStorage.setItem("gf_progress",JSON.stringify(i))}catch{}}this.ui().showResult(t,e),this.snd(t?"win":"lose")}isOver(){return this.state==="won"||this.state==="lost"||this.state==="title"}setMode(t){if(this.isOver())return;if(this.mode===t){this.cancelMode();return}if(this.cancelMode(),t==="detour"){if(!this.city.steps.some(n=>n.choice&&!n.open)){this.ui().toast("\uAC1C\uD1B5\uD560 \uC6B0\uD68C\uB85C\uAC00 \uB354 \uC5C6\uC2B5\uB2C8\uB2E4");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;return}if(this.money<GF.WEAPONS[t].cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.mode=t;let e=this.ghosts[t]||(this.ghosts[t]=qf(t));e.root.scale.setScalar(Jf),e.root.visible=!1,this.scene.add(e.root),this.ghost=e}pickCard(t){if(this.isOver()||!this.hand[t])return;let e=GF.CARDS[this.hand[t]];if(this.cp<e.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}if(!e.target){this.useCard(t,Me());return}this.cancelMode(),this.mode="card",this.cardSel=t}stratOpen(t){return this.S.no>=GF.STRATEGIC[t].unlockStage}stratNext(t){let e=GF.STRATEGIC[t];return(Math.floor(this.waveNo/e.every)+1)*e.every}pickStrat(t){if(this.isOver())return;let e=GF.STRATEGIC[t];if(!this.stratOpen(t)){this.ui().toast(`${e.name}: \uC2A4\uD14C\uC774\uC9C0 ${e.unlockStage}\uBD80\uD130 \uC0AC\uC6A9 \uAC00\uB2A5`),this.snd("deny");return}if(this.state!=="battle"){this.ui().toast("\uC804\uD22C\uAC00 \uC2DC\uC791\uB41C \uB4A4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4");return}if(!this.strat[t].charges){this.ui().toast(`${e.name}: \uC6E8\uC774\uBE0C ${this.stratNext(t)}\uC5D0 \uC7AC\uBCF4\uAE09`),this.snd("deny");return}if(this.mode==="strat"&&this.stratSel===t){this.cancelMode();return}this.cancelMode(),this.mode="strat",this.stratSel=t}useStrat(t,e){let n=GF.STRATEGIC[t],i=Me(e.x,0,e.z),r=t==="nuke";this.strat[t].charges--,this.mode=null,this.stratSel=null,this.rangeDisc.visible=!1,this.ui().toast(r?"\uC804\uB7B5\uD575\uBBF8\uC0AC\uC77C \uBC1C\uC0AC!":"ICBM \uBC1C\uC0AC!","#FF8A8E",2500),this.snd("siren"),this.spawnRing(i,n.radius,16726832,2.2);let a=new se,o=new pt(new Kt(.22,.22,2.2,12),wt(15263970));a.add(o);let l=new pt(new _n(.22,.7,12),wt(r?14200874:10103332));l.position.y=-1.45,l.rotation.x=Math.PI,a.add(l),a.scale.setScalar(r?1.6:1.1);let c=i.clone().add(Me(-6,40,-10)),h=r?2.2:1.6;a.position.copy(c),a.lookAt(i),a.rotateX(Math.PI/2),this.pushFx(a,h,(d,u)=>{d.position.copy(c).lerp(i,u*u),Math.random()<.6&&this.fx.length<450&&this.spawnPuff(d.position.clone(),15658734,1,.3,1.2)}),this.timers.push({t:h,fn:()=>this.detonate(i,n,r)})}detonate(t,e,n){this.explode(t,e.radius,e.power,null,!1,!1),this.explode(t,e.radius,e.power,null,!1,!0),this.snd(n?"nuke":"bigboom",1.6),this.app.shake(n?1.4:.7),n&&this.ui().whiteFlash();let i=new pt(Si.ball,new Se({color:16773552,transparent:!0}));i.position.copy(t);let r=e.radius;this.pushFx(i,n?2.5:1.2,(a,o)=>{a.scale.setScalar(r*(.2+.7*Math.sqrt(o))),a.material.opacity=1-o,a.material.color.setHSL(.12-o*.1,1,.75-o*.4)});for(let a=0;a<(n?3:1);a++)this.timers.push({t:a*.25,fn:()=>this.spawnRing(t,r*1.1,16769184,1.2)});for(let a=0;a<(n?40:16);a++){let o=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*r*.9;this.spawnPuff(t.clone().add(Me(Math.cos(o)*l,.2,Math.sin(o)*l)),4866104,1,.5+Math.random()*.8,3)}if(n){let a=new se;a.position.copy(t);let o=new jt({color:14191178,emissive:6957568,transparent:!0,roughness:1}),l=new pt(new Kt(.6,1.4,1,16),o);a.add(l);let c=new pt(new Re(1,20,12),o);c.scale.set(1,.55,1),a.add(c);let h=new pt(new On(1,.35,10,24),o);h.rotation.x=Math.PI/2,a.add(h),this.pushFx(a,7,(d,u)=>{let f=2+12*Math.min(1,u*2.2),m=2+5*Math.min(1,u*1.8);l.scale.set(1+u,f,1+u),l.position.y=f/2,c.position.y=f,c.scale.set(m,m*.55,m),h.position.y=f*.62,h.scale.setScalar(m*.7),o.opacity=u<.7?.95:.95*(1-(u-.7)/.3),o.color.setHSL(.07,.6-u*.5,.55-u*.15),o.emissiveIntensity=1-u})}}cancelMode(){this.mode=null,this.cardSel=-1,this.stratSel=null,this.select(null),this.rangeDisc.visible=!1,this.ghost&&(this.scene.remove(this.ghost.root),this.ghost=null),this.tip=null}placeReason(t,e){let n=this.city.blockReason(t,e);if(n)return n;for(let i of this.towers)if((i.pos.x-t)**2+(i.pos.z-e)**2<Kf*Kf)return"\uB2E4\uB978 \uBB34\uAE30\uC640 \uB108\uBB34 \uAC00\uAE4C\uC6C0";return null}hoverAt(t){if(this.hoverP=t,this.tip=null,this.mode==="card"){this.showRange(Me(t.x,0,t.z),GF.CARDS[this.hand[this.cardSel]].radius,9421823);return}if(this.mode==="strat"){this.showRange(Me(t.x,0,t.z),GF.STRATEGIC[this.stratSel].radius,16734794);return}if(this.mode==="detour"){let i=this.city.detourNear(t);this.tip=i!=null?{ok:!0,text:`\uC6B0\uD68C\uB85C \uAC1C\uD1B5 (${this.S.detourCost}) \xB7 \uC801\uC774 \uB354 \uC624\uB798 \uBA38\uBB45\uB2C8\uB2E4`}:{ok:!1,text:"\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694"};return}if(!this.mode){this.selected||(this.rangeDisc.visible=!1);return}let e=this.placeReason(t.x,t.z),n=!e;this.ghost.root.visible=!0,this.ghost.root.position.set(t.x,0,t.z),this.ghost.setOk(n),this.showRange(Me(t.x,0,t.z),GF.WEAPONS[this.mode].range,n?8382975:16743034),this.tip=n?{ok:!0,text:"\uC790\uC720 \uBC30\uCE58 \uAC00\uB2A5"}:{ok:!1,text:e}}showRange(t,e,n){this.rangeDisc.position.set(t.x,.07,t.z),this.rangeDisc.scale.setScalar(e),this.rangeMats.forEach(i=>i.color.set(n)),this.rangeDisc.visible=!0}click(t){if(this.isOver())return;if(this.mode==="card"){this.useCard(this.cardSel,t);return}if(this.mode==="strat"){this.useStrat(this.stratSel,t);return}if(this.mode==="detour"){this.clickDetour(t);return}if(this.mode){this.clickPlace(t);return}let e=null,n=1.2;for(let i of this.towers){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<n&&(n=r,e=i)}this.select(e)}clickDetour(t){let e=this.city.detourNear(t);if(e==null){this.ui().toast("\uBE5B\uB098\uB294 \uC810\uC120 \uC6B0\uD68C\uB85C\uB97C \uD074\uB9AD\uD558\uC138\uC694");return}if(this.money<this.S.detourCost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}let n=this.city.steps[e].opts[1];for(let i of this.towers)for(let r of n.samples)if(Math.hypot(r.p.x-i.pos.x,r.p.z-i.pos.z)<1.3){this.ui().toast("\uC6B0\uD68C\uB85C \uC790\uB9AC\uC5D0 \uBB34\uAE30\uAC00 \uC788\uC5B4 \uAC1C\uD1B5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");return}this.money-=this.S.detourCost,this.city.openDetour(e),this.updateRemain();for(let i of n.samples)Math.random()<.12&&this.spawnPuff(i.p.clone().setY(.1),13157560,1,.3);this.ui().toast(`\uC6B0\uD68C\uB85C \uAC1C\uD1B5! \uC801 \uC774\uB3D9 \uAC70\uB9AC +${Math.round(n.len-this.city.steps[e].opts[0].len)}`,"#8FF3FF"),this.cancelMode()}clickPlace(t){let e=GF.WEAPONS[this.mode],n=this.placeReason(t.x,t.z);if(n){this.ui().toast(n);return}if(this.money<e.cost){this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.cancelMode();return}this.money-=e.cost,this.addTower(this.mode,t.x,t.z),this.money<e.cost&&this.cancelMode()}select(t){this.selected=t,t?this.showRange(t.pos,this.stats(t).range,15909198):this.mode||(this.rangeDisc.visible=!1)}addTower(t,e,n){let i=wa(t),r=Me(e,0,n);i.root.position.copy(r),i.root.scale.setScalar(Jf);let a=-Math.PI/2;i.yaw.rotation.y=-a,this.unitGroup.add(i.root);let o={type:t,W:GF.WEAPONS[t],pos:r,model:i,level:1,invested:GF.WEAPONS[t].cost,cd:.3,dmgTotal:0,kills:0,ang:a,pulse:0,marks:[]};return this.towers.push(o),this.city.clearTreesAt(e,n),this.spawnPuff(r,13481610,6),this.snd("place"),o}stats(t){return this.statsAt(t,t.level)}statsAt(t,e){let n=GF.SETTINGS.upgrade,i=Math.min(e,n.dmg.length)-1,r=t.W.rate;this.syn.usSet&&t.W.nation.indexOf("\uBBF8\uAD6D")>=0&&(r*=1.05);let a=t.W.dmg*n.dmg[i],o=r*n.rate[i];return{dmg:a,range:t.W.range*n.range[i],rate:o,dps:(a||0)*o*(t.W.salvo||1),mul:n.dmg[i]}}upgradeCost(t){return Math.round(t.W.cost*.75*t.level)}upgradeTower(t,e){if(!t||t.level>=GF.SETTINGS.maxTowerLevel)return!1;let n=this.upgradeCost(t);if(this.money<n)return e||(this.ui().toast("\uBCF4\uAE09\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4"),this.snd("deny")),!1;this.money-=n,t.invested+=n,t.level++;let i=new pt(new Nt(.16,.03,.05),wt(15909198,{emissive:8018432}));return i.position.set(.3,.09,.3-t.marks.length*.08),t.model.root.add(i),t.marks.push(i),t.model.yaw.scale.setScalar(1+.07*(t.level-1)),this.selected===t&&this.select(t),this.spawnRing(t.pos,.8,15909198),this.snd("upgrade"),!0}bulkList(t){return this.towers.filter(e=>e.type===t&&e.level<GF.SETTINGS.maxTowerLevel)}bulkCost(t){return this.bulkList(t).reduce((e,n)=>e+this.upgradeCost(n),0)}upgradeAll(t){let e=this.bulkList(t),n=this.bulkCost(t);if(e.length){if(this.money<n){this.ui().toast("\uC77C\uAD04 \uAC15\uD654\uC5D0 \uBCF4\uAE09 "+n+" \uD544\uC694");return}e.forEach(i=>this.upgradeTower(i,!0)),this.ui().toast(GF.wname(t)+" "+e.length+"\uB300 \uAC15\uD654 \uC644\uB8CC","#F2C14E")}}sellTower(t){this.money+=Math.round(t.invested*GF.SETTINGS.sellRefund),this.unitGroup.remove(t.model.root),this.towers.splice(this.towers.indexOf(t),1),this.select(null),this.snd("sell")}spawnEnemy(t,e){let n=GF.ENEMIES[t],i=n.hp*(1+this.S.hpScale*(e-1)+(this.S.hpQuad||0)*(e-1)**2),r=Xf(t),a=n.boss?2.4:t==="inf"?1.6:1.85;r.root.scale.setScalar(a);let o={type:t,E:n,hp:i,maxHp:i,d:0,air:!!n.air,off:n.boss?0:(Math.random()-.5)*.9,wob:Math.random()*10,stun:0,slowMul:1,dead:!1,model:r,pos:Me(),sc:a,si:0,k:0,rem:1e9};if(o.air){let c=this.airPath();o.fly={pts:c,segs:[]},o.len=0;for(let h=0;h<c.length-1;h++){let d=c[h].distanceTo(c[h+1]);o.fly.segs.push({a:c[h],b:c[h+1],l:d,c:o.len}),o.len+=d}}else o.opt=this.city.steps[0].opts[this.city.steps[0].open];let l=n.boss?1.6:.7;o.hpBg=new Os(this.hpBgMat||(this.hpBgMat=new $i({color:1703936,depthTest:!1}))),o.hpFg=new Os(new $i({color:n.boss?16747150:16730685,depthTest:!1})),o.hpBg.scale.set(l+.05,.11,1),o.hpFg.scale.set(l,.07,1),o.bw=l,o.hpBg.renderOrder=10,o.hpFg.renderOrder=11,o.hpBg.visible=o.hpFg.visible=!1,this.unitGroup.add(r.root,o.hpBg,o.hpFg),this.enemies.push(o),this.placeEnemy(o,0)}airPath(){let t=this.S,e=t.bounds,n=this.city.base.clone().add(Me(-1.5,0,0)),i=()=>(Math.random()-.5)*1.6;if((t.airEntry||"withGround")==="allSides"){let a=Math.floor(Math.random()*4),o=3,l=e.x0+Math.random()*(e.x1-e.x0),c=e.z0+Math.random()*(e.z1-e.z0),h=[Me(l,0,e.z0-o),Me(e.x1+o,0,c),Me(l,0,e.z1+o),Me(e.x0-o,0,c)][a],d=h.clone().lerp(n,.5).add(Me(i()*4,0,i()*4));return[h,d,n]}let r=[];for(let a of t.route)for(let[o,l]of(a.choice?a.choice[0]:a).pts){let c=Me(o+i(),0,l+i());(!r.length||r[r.length-1].distanceTo(c)>1)&&r.push(c)}return r[0].x-=2,r.push(n),r}removeEnemy(t){this.unitGroup.remove(t.model.root,t.hpBg,t.hpFg),t.hpFg.material.dispose()}advanceGround(t){for(;t.d>=t.opt.len;){t.d-=t.opt.len,t.si++,t.k=0;let e=this.city.steps[t.si];if(!e)return!0;t.opt=e.opts[e.open]}return!1}placeEnemy(t,e){let n,i,r;if(t.air){let l=t.fly.segs,c=l[l.length-1];for(let u of l)if(t.d<=u.c+u.l){c=u;break}let h=Math.min(1,(t.d-c.c)/c.l),d=Math.sin(t.d*.6+t.wob)*1.2;r=Math.atan2(c.b.z-c.a.z,c.b.x-c.a.x),n=c.a.x+(c.b.x-c.a.x)*h-Math.sin(r)*d,i=c.a.z+(c.b.z-c.a.z)*h+Math.cos(r)*d,t.rem=t.len-t.d}else{let l=t.opt.samples;for(;t.k<l.length-2&&l[t.k+1].cum<t.d;)t.k++;let c=l[t.k],h=l[t.k+1],d=Math.min(1,Math.max(0,(t.d-c.cum)/Math.max(1e-6,h.cum-c.cum)));r=Math.atan2(h.p.z-c.p.z,h.p.x-c.p.x),n=c.p.x+(h.p.x-c.p.x)*d-Math.sin(r)*t.off,i=c.p.z+(h.p.z-c.p.z)*d+Math.cos(r)*t.off,t.rem=t.opt.len-t.d+this.remainAfter[t.si]}t.pos.set(n,0,i);let a=t.model.root;a.position.set(n,0,i);let o=-r-a.rotation.y;if(o=Math.atan2(Math.sin(o),Math.cos(o)),a.rotation.y+=e?o*Math.min(1,e*8):o,t.type==="inf"&&(t.model.body.position.y=Math.abs(Math.sin(t.d*9))*.04),t.hp<t.maxHp){let l=t.model.hpY*t.sc+.1;t.hpBg.visible=t.hpFg.visible=!0,t.hpBg.position.set(n,l,i),t.hpFg.position.set(n,l,i);let c=Math.max(.001,t.hp/t.maxHp);t.hpFg.scale.x=t.bw*c,t.hpFg.center.set(.5/c,.5)}}update(t,e){for(let n of this.enemies)for(let[i,r,a]of n.model.spin)i.rotation[r]+=a*t;for(let n of this.towers){for(let[i,r,a]of n.model.spin)i.rotation[r]+=a*t;for(let i of n.model.glow)i.material.emissiveIntensity=1+Math.sin(e*3)*.5}if(this.updateFx(t),!this.isOver()){if(this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.endCombo()),this.state==="battle"){for(this.clock+=t;this.queue.length&&this.queue[0].t<=this.clock;){let n=this.queue.shift();this.spawnEnemy(n.type,n.wave)}for(this.cpT+=t;this.cpT>=GF.SETTINGS.cpEverySec;)this.cpT-=GF.SETTINGS.cpEverySec,this.cp=Math.min(GF.SETTINGS.cpMax,this.cp+1);this.cp>=GF.SETTINGS.cpMax&&(this.cpT=0),!this.queue.length&&this.waveNo<this.S.waves.length&&(this.nextT<=0?this.nextT=this.S.autoNextSec:(this.nextT-=t,this.nextT<=.001&&(this.nextT=0,this.launchWave(0))))}for(let n of this.timers)n.t-=t,n.t<=0&&(n.fn(),n.done=!0);this.timers=this.timers.filter(n=>!n.done);for(let n of this.enemies)n.slowMul=1;for(let n of this.towers){if(n.W.shot!=="aura")continue;let i=this.stats(n),r=i.range,a=i.mul;n.pulse-=t;let o=!1;for(let l of this.enemies)l.dead||l.pos.distanceToSquared(n.pos)>r*r||(o=!0,l.slowMul=Math.min(l.slowMul,1-n.W.slow*(l.type==="drone"?1.35:1)),l.air&&n.W.airDps&&this.hurt(l,n.W.airDps*a*t,n,{pierce:!0}));n.pulse<=0&&o&&(n.pulse=1.3,this.spawnRing(n.pos,r,7328767,.9))}for(let n of this.zones){n.t-=t;for(let i of this.enemies)!i.air&&i.pos.distanceTo(n.pos)<=n.r&&(i.slowMul=Math.min(i.slowMul,.5));n.mesh.material.opacity=Math.min(.45,n.t/2)}this.zones=this.zones.filter(n=>n.t<=0?(this.fxGroup.remove(n.mesh),!1):!0);for(let n of this.enemies)if(!n.dead){if(n.stun>0?n.stun-=t:n.d+=n.E.speed*n.slowMul*t,n.air?n.d>=n.len:this.advanceGround(n)){this.leak(n);continue}this.placeEnemy(n,t)}this.enemies=this.enemies.filter(n=>!n.dead);for(let n of this.towers){if(n.W.shot==="aura")continue;let i=this.stats(n);if(n.cd-=t,n.cd>.25&&n.lastT&&!n.lastT.dead){this.aim(n,n.lastT,t);continue}let r=this.findTarget(n,i.range);if(n.lastT=r,!r)continue;let a=this.aim(n,r,t);n.cd<=0&&Math.abs(a)<.5&&(n.cd=1/i.rate,this.fire(n,r,i))}for(let n of this.shots)this.moveShot(n,t);this.shots=this.shots.filter(n=>!n.done),this.state==="battle"&&this.waveNo>=this.S.waves.length&&!this.queue.length&&!this.enemies.length&&this.finish(!0)}}aim(t,e,n){let r=Math.atan2(e.pos.z-t.pos.z,e.pos.x-t.pos.x)-t.ang;return r=Math.atan2(Math.sin(r),Math.cos(r)),t.ang+=Math.sign(r)*Math.min(Math.abs(r),7*n),t.model.yaw.rotation.y=-t.ang,r}findTarget(t,e){let n=null,i=1e9,r=e*e,a=t.W.hits;for(let o of this.enemies)o.dead||!a.includes(o.air?"air":"ground")||o.pos.distanceToSquared(t.pos)>r||o.rem<i&&(i=o.rem,n=o);return n}targetPoint(t){return t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.3)}fire(t,e,n){let i=t.W;t.model.root.updateMatrixWorld(!0);let r=t.model.muzzle.getWorldPosition(Me()),a=this.targetPoint(e);if(this.snd(i.heavy?"cruise":i.pierce?"javelin":i.shot),i.shot==="bullet")this.hurt(e,n.dmg,t),this.tracer(r,a.add(Me((Math.random()-.5)*.2,0,(Math.random()-.5)*.2))),this.spawnSpark(r,16769162,.1);else if(i.shot==="cannon")this.tracer(r,a,16761962),this.explode(a.clone().setY(0),i.splash,n.dmg,t,!0),this.spawnSpark(r,16765562,.3),this.spawnPuff(r,10130570,2,.15);else if(i.shot==="shell")this.addShot("shell",r,{to:a.setY(0),speed:9,arc:1.5+r.distanceTo(a)*.18,dmg:n.dmg,splash:i.splash,tw:t}),this.spawnSpark(r,16765562,.3),this.spawnPuff(r,10130570,2,.15);else if(i.shot==="missile")this.addShot("missile",r,{target:e,speed:e.air?10:7,dmg:n.dmg,tw:t,pierce:!!i.pierce,splash:i.splash||0,heavy:!!i.heavy});else if(i.shot==="intercept")this.addShot("missile",r,{target:e,speed:12,dmg:n.dmg,tw:t,pierce:!0,splash:0,small:!0});else if(i.shot==="rockets")for(let o=0;o<i.salvo;o++){let l=Me((Math.random()-.5)*2.2,0,(Math.random()-.5)*2.2);this.timers.push({t:o*.12,fn:()=>this.addShot("rocket",r,{to:a.clone().setY(0).add(l),speed:11,arc:3,dmg:n.dmg,splash:i.splash,tw:t})})}}addShot(t,e,n){let i=Object.assign({kind:t,done:!1,t:0,from:e.clone(),pos:e.clone()},n);i.mesh=new pt(t==="shell"?Si.shell:Si.rocket,t==="shell"?this.shellM||(this.shellM=wt(16769162,{emissive:16751104})):this.rocketM||(this.rocketM=wt(14672870))),n.small&&i.mesh.scale.setScalar(.7),n.heavy&&i.mesh.scale.setScalar(2.2),i.mesh.position.copy(e),this.fxGroup.add(i.mesh),i.to&&(i.dur=Math.max(.25,e.distanceTo(i.to)/i.speed)),this.shots.push(i)}moveShot(t,e){let n=t.pos.clone();if(t.kind==="missile"){t.target.dead||(t.aim=this.targetPoint(t.target));let i=t.aim||this.targetPoint(t.target),r=i.clone().sub(t.pos),a=r.length(),o=t.speed*e;if(t.t+=e,a<=o+.08){t.done=!0,this.fxGroup.remove(t.mesh),t.splash&&this.explode(i,t.splash,t.dmg,t.tw,!1,t.target.air),t.heavy?(this.snd("bigboom",1),this.app.shake(.18),this.explodeFx(i.clone().setY(.3),1.6)):(t.target.dead||this.hurt(t.target,t.dmg,t.tw,{pierce:t.pierce}),this.explodeFx(i,t.small?.3:.55));return}t.pos.add(r.multiplyScalar(o/a)),t.pos.y+=Math.sin(Math.min(1,t.t*2)*Math.PI)*e*(t.heavy?7:2)}else{t.t+=e;let i=Math.min(1,t.t/t.dur);if(t.pos.copy(t.from).lerp(t.to,i),t.pos.y=t.from.y*(1-i)+t.to.y*i+t.arc*4*i*(1-i),i>=1){t.done=!0,this.fxGroup.remove(t.mesh),this.explode(t.to,t.splash,t.dmg,t.tw);return}}if(t.mesh.position.copy(t.pos),t.kind!=="shell"){let i=t.pos.clone().sub(n);i.lengthSq()>0&&t.mesh.quaternion.setFromUnitVectors(Me(0,1,0),i.normalize()),Math.random()<.5&&this.fx.length<400&&this.spawnPuff(t.pos,14211288,1,.08,.5)}}explode(t,e,n,i,r,a=!1){let o=e*e;for(let l of this.enemies){if(l.dead||l.air!==a)continue;let c=(l.pos.x-t.x)**2+(l.pos.z-t.z)**2;c<=o&&this.hurt(l,n*(c<o*.16?1:.65),i,{splash:!0})}this.explodeFx(t,r?e*.6:e),this.snd("boom",r?.5:.8)}hurt(t,e,n,i={}){if(t.dead)return;let r=i.pierce?1:1-t.E.armor;i.splash&&this.syn.slowSplash&&t.slowMul<1&&(r*=1.2);let a=Math.min(t.hp,e*r);t.hp-=a,n&&n.dmgTotal!==void 0&&(n.dmgTotal+=a),t.hp<=.001&&this.kill(t,n)}kill(t,e){t.dead=!0,this.kills++,e&&e.kills!==void 0&&e.kills++;let n=Math.round(t.E.reward*(this.syn.balance?1.05:1));this.money+=n,this.removeEnemy(t);let i=t.E.boss?2:t.type==="tank"||t.type==="heli"?.9:.5;this.explodeFx(t.pos.clone().setY(t.air?t.model.body.position.y*t.sc:.25),i),i>=.9?this.snd("bigboom",t.E.boss?1.4:.8):t.type!=="inf"&&this.snd("boom",.45),!t.air&&t.type!=="inf"&&this.wreck(t),t.air&&this.fallDebris(t),n>=10&&this.ui().floatText(t.pos.clone().setY(1),"+"+n,"#F2C14E"),t.E.boss&&(this.app.shake(.5),this.ui().toast('\uBCF4\uC2A4 "\uD2F0\uD0C4" \uACA9\uD30C!',"#7FE0A8")),this.combo++,this.comboT=GF.SETTINGS.comboWindow,this.combo>=10&&this.combo%10===0&&(this.ui().combo(this.combo),this.snd("combo"))}endCombo(){if(this.combo>=10){let t=Math.round(this.combo*1.5);this.money+=t,this.ui().toast(`\uC5F0\uC1C4 \uACA9\uD30C ${this.combo}! \uBCF4\uB108\uC2A4 \uBCF4\uAE09 +${t}`,"#FFD45A")}this.bestCombo=Math.max(this.bestCombo,this.combo),this.combo=0}leak(t){t.dead=!0,this.removeEnemy(t),this.lives=Math.max(0,this.lives-t.E.leak),this.app.shake(.2),this.ui().flashDamage(),this.snd("leak"),this.explodeFx(this.city.base.clone().add(Me(-1,.6,0)),.7),this.lives<=0&&this.finish(!1)}useCard(t,e){let n=this.hand[t],i=GF.CARDS[n];if(this.cp<i.cost){this.ui().toast("\uC9C0\uD718 \uD3EC\uC778\uD2B8(CP)\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4");return}this.cp-=i.cost,this.hand[t]=this.deck.shift(),this.deck.push(n),this.mode=null,this.cardSel=-1,this.rangeDisc.visible=!1,this.snd({airstrike:"airstrike",emp:"emp",supply:"coin",barrage:"airstrike",smoke:"missile"}[n]||"click");let r=Me(e.x,0,e.z);if(n==="supply"&&(this.money+=i.power,this.ui().toast("\uAE34\uAE09 \uBCF4\uAE09 \uB3C4\uCC29 \xB7 \uBCF4\uAE09 +"+i.power,"#7FE0A8")),n==="airstrike"&&(this.flyJet(r),this.spawnRing(r,i.radius,15026253),this.timers.push({t:.9,fn:()=>{this.explode(r,i.radius,i.power,null),this.explodeFx(r.clone().add(Me(1,0,.5)),1.4),this.explodeFx(r.clone().add(Me(-.9,0,-.6)),1.4),this.app.shake(.35)}})),n==="emp"){this.spawnRing(r,i.radius,9421823,.8),this.spawnSpark(r.clone().setY(.5),12575743,i.radius*.6,.5);for(let a of this.enemies)a.pos.distanceTo(r)<=i.radius&&(a.stun=i.power)}if(n==="barrage"){this.spawnRing(r,i.radius,15901498);for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*i.radius,c=r.clone().add(Me(Math.cos(o)*l,0,Math.sin(o)*l));this.timers.push({t:.4+a*.13,fn:()=>this.explode(c,1.5,i.power,null)})}}if(n==="smoke"){let a=new pt(new Kt(i.radius,i.radius,.7,32),new jt({color:13685976,transparent:!0,opacity:.45,depthWrite:!1}));a.position.set(r.x,.35,r.z),this.fxGroup.add(a),this.zones.push({pos:r,r:i.radius,t:i.power,mesh:a});for(let o=0;o<16;o++)this.spawnPuff(r.clone().add(Me((Math.random()-.5)*i.radius*1.6,.3,(Math.random()-.5)*i.radius*1.6)),15132906,1,.6,2.5)}}pushFx(t,e,n){this.fxGroup.add(t),this.fx.push({obj:t,t:0,life:e,fn:n})}updateFx(t){for(let e of this.fx){e.t+=t;let n=Math.min(1,e.t/e.life);e.fn(e.obj,n,t),n>=1&&(this.fxGroup.remove(e.obj),e.obj.material&&e.obj.material.dispose&&!e.obj.material.shared&&e.obj.material.dispose(),e.done=!0)}this.fx=this.fx.filter(e=>!e.done),this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-t*60))}explodeFx(t,e){let n=new pt(Si.ball,new Se({color:16757575,transparent:!0}));if(n.position.copy(t).setY(Math.max(.15,t.y)),this.pushFx(n,.35,(i,r)=>{i.scale.setScalar(.1+e*.9*r),i.material.opacity=1-r,i.material.color.setHSL(.09-r*.07,1,.6-r*.3)}),this.fx.length<450)for(let i=0;i<Math.ceil(1+e*3);i++)this.spawnPuff(t.clone().add(Me((Math.random()-.5)*e,.1,(Math.random()-.5)*e)),4867392,1,.15+e*.25,1.3);this.flash.position.copy(t).setY(1),this.flash.intensity=8+e*10,this.flash.distance=3+e*4}spawnPuff(t,e,n=1,i=.18,r=.9){for(let a=0;a<n;a++){let o=new pt(Si.puff,new Jr({color:e,transparent:!0,opacity:.7,depthWrite:!1}));o.position.copy(t).add(Me((Math.random()-.5)*.2,0,(Math.random()-.5)*.2));let l=.3+Math.random()*.4;this.pushFx(o,r,(c,h,d)=>{c.scale.setScalar(i*(.6+h*1.4)),c.position.y+=l*d,c.material.opacity=.7*(1-h)})}}spawnSpark(t,e,n,i=.12){let r=new pt(Si.puff,new Se({color:e,transparent:!0}));r.position.copy(t),this.pushFx(r,i,(a,o)=>{a.scale.setScalar(n*(1+o)),a.material.opacity=1-o})}spawnRing(t,e,n,i=.6){let r=new pt(Si.ring,new Se({color:n,transparent:!0,depthWrite:!1,side:Fe}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.08,t.z),this.pushFx(r,i,(a,o)=>{a.scale.setScalar(e*(.3+.7*o)),a.material.opacity=.9*(1-o)})}tracer(t,e,n=16769162){let i=new ue().setFromPoints([t,e]),r=new Nr(i,new ks({color:n,transparent:!0}));this.pushFx(r,.07,(a,o)=>{a.material.opacity=1-o,o>=1&&a.geometry.dispose()})}wreck(t){let e=new pt(Si.wreck,this.wreckM||(this.wreckM=wt(1907738)));e.material.shared=!0;let n=t.E.boss?1.8:t.type==="tank"?1.1:.8;e.scale.set(n,1,n),e.position.copy(t.pos).setY(.06),e.rotation.y=t.model.root.rotation.y,this.pushFx(e,5,(i,r)=>{r>.8&&(i.position.y=.06-(r-.8)*.6),Math.random()<.04&&this.fx.length<400&&this.spawnPuff(i.position.clone().setY(.2),3091497,1,.14,1.6)})}fallDebris(t){let e=new pt(Si.puff,new Se({color:3815994,transparent:!0}));e.position.copy(t.pos).setY(t.model.body.position.y*t.sc),e.scale.setScalar(.12),this.pushFx(e,.6,(n,i,r)=>{n.position.y=Math.max(0,n.position.y-r*4),n.material.opacity=1-i})}flyJet(t){let e=new se,n=new pt(new _n(.22,1.5,6),wt(9080983));n.rotation.z=-Math.PI/2,e.add(n);let i=new pt(new Nt(.55,.04,1.5),wt(8028295));i.position.x=-.15,e.add(i);let r=new pt(new Nt(.28,.34,.04),wt(8028295));r.position.set(-.6,.16,0),e.add(r);let a=t.clone().add(Me(-18,6,9)),o=t.clone().add(Me(18,6,-9));e.position.copy(a),e.lookAt(o),e.rotateY(-Math.PI/2),e.traverse(l=>{l.material&&(l.material.shared=!0)}),this.pushFx(e,1.8,(l,c)=>{l.position.copy(a).lerp(o,c)})}};var jf="gf_profile",Hn={data:{name:"",credits:0,purchases:[]},load(){try{Object.assign(this.data,JSON.parse(localStorage.getItem(jf)||"{}"))}catch{}return this},save(){try{localStorage.setItem(jf,JSON.stringify(this.data))}catch{}},get name(){return this.data.name||"\uC9C0\uD718\uAD00"},setName(s){this.data.name=String(s||"").trim().slice(0,12),this.save()},get credits(){return this.data.credits||0},addCredits(s,t){this.data.credits=this.credits+s,t&&this.data.purchases.push({t:Date.now(),memo:t,n:s}),this.save()},spend(s){return this.credits<s?!1:(this.data.credits-=s,this.save(),!0)}};var Qh=()=>(navigator.maxTouchPoints||0)>0||"ontouchstart"in window;function nc(){let s=window.innerWidth,t=window.innerHeight,e=Math.min(s,t*16/9),n=e*9/16,i=Qh()&&n<620,r=i?{w:1280,h:720,top:58,bottom:598}:{w:1920,h:1080,top:84,bottom:900};return{x:Math.round((s-e)/2),y:Math.round((t-n)/2),w:Math.round(e),h:Math.round(n),portrait:t>s,mobile:i,base:r,k:e/r.w}}var tu=s=>"\u20A9"+s.toLocaleString("ko-KR"),re=(s,t,e,n)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),n&&n.appendChild(i),i},ic=class{constructor(t){this.app=t,this.root=document.getElementById("hud"),this.fit(),window.addEventListener("resize",()=>this.fit()),this.floats=[],this.labelLayer=re("div","labels",null,this.root),this.labelEls=[]}get g(){return this.app.game}cityName(){let t=this.app.stage;return GF.SETTINGS.useCityAlias?t.alias:t.name}fit(){let t=this.L=nc();this.scale=t.k,this.BW=t.base.w,this.BH=t.base.h,this.root.style.width=t.base.w+"px",this.root.style.height=t.base.h+"px",this.root.classList.toggle("mobile",t.mobile),document.body.classList.toggle("touch",t.mobile),this.root.style.transform=`translate(${t.x}px, ${t.y}px) scale(${t.k})`}showTitle(t){this.icons=t;let e=this.app.stage,n=this.best(),i=this.title=re("div","title-screen",null,this.root);i.innerHTML=`
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
        <div class="loadout">${GF.LOADOUT.map(o=>`<div class="lo"><img src="${t[o]}"><b>${GF.wname(o)}</b><span>${GF.WEAPONS[o].role}</span></div>`).join("")}</div>
        <button class="go">\uCD9C\uACA9</button>
        <div class="help">\uC870\uC791: \uB9C8\uC6B0\uC2A4 \uB04C\uAE30\xB7\uBC29\uD5A5\uD0A4 \uC9C0\uB3C4 \uC774\uB3D9 \xB7 \uD720 \uD655\uB300\xB7\uCD95\uC18C(\uCEE4\uC11C \uCABD\uC73C\uB85C, \uAC19\uC740 \uAC01\uB3C4) \xB7 0 \uC804\uCCB4 \uBCF4\uAE30 \xB7 1~9 \uBB34\uAE30 \xB7 Q W E \uC791\uC804 \uCE74\uB4DC \xB7 Z ICBM \xB7 X \uC804\uB7B5\uD575 \xB7 \uC2A4\uD398\uC774\uC2A4 \uC77C\uC2DC\uC815\uC9C0 \xB7 N \uB2E4\uC74C \uC6E8\uC774\uBE0C</div>
        <div class="disc">\uC774 \uAC8C\uC784\uC740 \uAC00\uC0C1\uC758 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uAD6D\uAC00\xB7\uB2E8\uCCB4\xB7\uC0AC\uAC74\uACFC \uAD00\uACC4\uC5C6\uC2B5\uB2C8\uB2E4. \xB7 v${GF.SETTINGS.version}</div>
      </div>`,i.querySelector(".go").onclick=()=>this.app.startGame();let r=i.querySelector(".pc-name");r.value=Hn.data.name||"";let a=()=>{Hn.setName(r.value),this.toastAny("\uC9C0\uD718\uAD00 \uC774\uB984 \uC800\uC7A5: "+Hn.name)};i.querySelector(".pc-save").onclick=a,r.onkeydown=o=>{o.key==="Enter"&&a()},i.querySelector(".pc-shop").onclick=()=>this.openShop(),i.querySelector(".pc-fs").onclick=()=>this.fullscreen(),i.querySelector(".pc-install").onclick=()=>{let o=window.__installPrompt;o&&(o.prompt(),o.userChoice.then(()=>{window.__installPrompt=null,document.body.classList.remove("can-install")}))},this.L.mobile&&(i.querySelector(".help").textContent="\uC870\uC791: \uBB34\uAE30 \uCE74\uB4DC \uD130\uCE58 \u2192 \uB300\uB85C \uD130\uCE58\uB85C \uBC30\uCE58 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30 \uC774\uB3D9 \xB7 \uB450 \uC190\uAC00\uB77D \uD655\uB300 \xB7 \uBB34\uAE30 \uD130\uCE58\uB85C \uAC15\uD654 \xB7 \uAC19\uC740 \uCE74\uB4DC \uB2E4\uC2DC \uD130\uCE58\uD558\uBA74 \uCDE8\uC18C"),this.refreshProfile()}hideTitle(){this.title&&(this.title.remove(),this.title=null)}best(){try{return JSON.parse(localStorage.getItem("gf_progress")||"{}")[this.app.stage.id]||0}catch{return 0}}buildHud(){this.hud&&this.hud.remove();let t=this.app.stage,e=this.g,n=this.hud=re("div","hud-layer",null,this.root);re("div","tl",`<div class="logo">2030 Warfare 1</div><div class="sub">${GF.SETTINGS.useCityAlias?this.cityName()+" \uBC29\uC5B4\uC804":t.nameEn+" \xB7 "+t.title}</div>`,n);let i=re("div","pbar",'<span class="pb-ava"></span><b class="pb-name"></b><span class="pb-cred"></span><button class="pb-shop">\uFF0B \uCDA9\uC804</button>',n);i.querySelector(".pb-shop").onclick=()=>this.openShop(),this.eKills=re("div","kills","",n);let r=re("div","tr",null,n);this.eLives=re("div","pill lives","",r),this.eMoney=re("div","pill money","",r),this.eWave=re("div","pill wave","",r),this.bSpeed=re("button","sq speed","",r),this.bSpeed.onclick=()=>{e.speed=e.speed>=3?1:e.speed+1},this.bPause=re("button","sq","",r),this.bPause.onclick=()=>this.app.togglePause(),re("button","sq fs-btn","\u26F6",r).onclick=()=>this.fullscreen(),re("button","sq gear","\u2699",r).onclick=()=>this.toggleSettings();let a=re("div","bar",null,n);this.cards=GF.LOADOUT.map((h,d)=>{let u=re("div","card",`<img src="${this.icons[h]}"><div class="txt"><b class="wn"></b><span>${GF.WEAPONS[h].role}</span></div><div class="cost">${GF.WEAPONS[h].cost}</div><i>${d+1}</i>`,a);return u.onclick=()=>e.setMode(h),{id:h,c:u,n:u.querySelector(".wn")}}),this.bNext=re("button","nextwave","",n),this.bNext.onclick=()=>e.callNext();let o=re("div","ops",'<div class="ops-title">\uC791\uC804 \uCE74\uB4DC <small>CP\uB294 \uC804\uD22C \uC911\uC5D0 \uCC38</small></div>',a);this.ops=[0,1,2].map(h=>{let d=re("div","op","",o);return d.onclick=()=>e.pickCard(h),d}),this.eNext=re("div","op-next","",o);let l=re("div","strat","",n);this.strats=Object.entries(GF.STRATEGIC).map(([h,d])=>{let u=re("div","sb "+h,"",l);return u.onclick=()=>e.pickStrat(h),{id:h,C:d,o:u}});let c=re("div","cpbar","",o);this.cpSegs=[];for(let h=0;h<GF.SETTINGS.cpMax;h++)this.cpSegs.push(re("div","seg","<div></div>",c));this.eCp=re("div","cp-num","",o),this.panel=re("div","tpanel","",n),this.panel.innerHTML='<b class="pt"></b><div class="pi"></div><button class="up"></button><button class="all"></button><div class="row"><button class="sell"></button><button class="close">\uB2EB\uAE30</button></div>',this.panel.querySelector(".up").onclick=()=>e.upgradeTower(e.selected),this.panel.querySelector(".all").onclick=()=>e.upgradeAll(e.selected.type),this.panel.querySelector(".sell").onclick=()=>e.sellTower(e.selected),this.panel.querySelector(".close").onclick=()=>e.select(null),this.settings=re("div","settings","",n),this.renderSettings(),this.eTip=re("div","tip","",n),this.eToast=re("div","toast","",n),this.eCombo=re("div","combo","",n),this.eHint=re("div","hint","",n),this.eDmg=re("div","dmgflash","",n),this.ePaused=re("div","paused","\uC77C\uC2DC\uC815\uC9C0",n),this.refreshProfile()}renderSettings(){let t=GF.SETTINGS,e=this.settings;e.innerHTML=`<b>\uC124\uC815</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${t.showLandmarkLabels?"checked":""}> \uB79C\uB4DC\uB9C8\uD06C \uC774\uB984\uD45C</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${t.useRealWeaponNames?"checked":""}> \uBB34\uAE30 \uC2E4\uC81C \uC774\uB984 <small>(\uB044\uBA74 \uC0B4\uC9DD \uBC14\uAFBC \uC774\uB984)</small></label>
      <label><input type="checkbox" data-k="sound" ${t.sound?"checked":""}> \uD6A8\uACFC\uC74C</label>
      <label><input type="checkbox" data-k="music" ${t.music?"checked":""}> \uBC30\uACBD \uC74C\uC545</label>
      <label><input type="checkbox" data-k="shadows" ${t.shadows?"checked":""}> \uADF8\uB9BC\uC790 <small>(\uB290\uB9AC\uBA74 \uB044\uAE30)</small></label>
      <label>\uADF8\uB798\uD53D <select class="gq">${[["high","\uB192\uC74C"],["medium","\uBCF4\uD1B5"],["low","\uB0AE\uC74C (\uB290\uB9B0 \uAE30\uAE30)"]].map(([n,i])=>`<option value="${n}" ${this.app.look.q===n?"selected":""}>${i}</option>`).join("")}</select></label>
      <div class="row"><button class="home">\uCC98\uC74C \uD654\uBA74</button><button class="close">\uB2EB\uAE30</button></div>`,e.querySelectorAll("input").forEach(n=>{n.onchange=()=>{t[n.dataset.k]=n.checked,this.app.applySettings()}}),e.querySelector(".gq").onchange=n=>{t.graphics=n.target.value,this.app.applySettings()},e.querySelector(".home").onclick=()=>{this.toggleSettings(!1),this.app.toTitle()},e.querySelector(".close").onclick=()=>this.toggleSettings(!1)}toggleSettings(t){let e=t??this.settings.style.display!=="block";this.settings.style.display=e?"block":"none"}toast(t,e,n=2100){this.eToast&&(this.eToast.textContent=t,this.eToast.style.color=e||"#fff",this.eToast.classList.add("on"),clearTimeout(this.toastT),this.toastT=setTimeout(()=>this.eToast.classList.remove("on"),n))}combo(t){this.eCombo&&(this.eCombo.innerHTML=`<b>${t}</b> \uC5F0\uC1C4 \uACA9\uD30C!`,this.eCombo.classList.remove("on"),this.eCombo.offsetWidth,this.eCombo.classList.add("on"))}flashDamage(){this.eDmg&&(this.eDmg.classList.remove("on"),this.eDmg.offsetWidth,this.eDmg.classList.add("on"))}project(t){let e=t.clone().project(this.app.camera);if(e.z>1)return null;let n=this.app.renderer.domElement.getBoundingClientRect(),i=(e.x+1)/2*n.width+n.left,r=(1-e.y)/2*n.height+n.top,a=this.root.getBoundingClientRect();return{x:(i-a.left)/this.scale,y:(r-a.top)/this.scale}}floatText(t,e,n){if(!this.hud||this.floats.length>30)return;let i=re("div","float",e,this.hud);i.style.color=n,this.floats.push({e:i,v:t.clone(),t:0})}updateLabels(){let t=this.app.city;if(!this.labelEls.length)for(let n of t.labels)this.labelEls.push({L:n,e:re("div","lm "+n.kind,n.text,this.labelLayer)});let e=this.g&&this.g.state!=="title";for(let{L:n,e:i}of this.labelEls){let a=e&&(n.kind!=="landmark"||GF.SETTINGS.showLandmarkLabels)?this.project(n.pos):null;if(!a||a.x<-100||a.x>2020||a.y<-50||a.y>1130){i.style.display="none";continue}i.style.display="block",i.style.left=Math.max(70,Math.min(this.BW-70,a.x))+"px",i.style.top=Math.max(40,a.y)+"px"}}update(t){this.updateLabels();let e=this.g;if(!this.hud||!e)return;let n=this.app.stage;this.eLives.innerHTML=`<i class="shield"></i><span>\uAE30\uC9C0</span>${e.lives}/${n.lives}`,this.eMoney.innerHTML=`<i class="box"></i><span>\uBCF4\uAE09</span>${Math.floor(e.money)}`,this.eWave.innerHTML=`<span>\uC6E8\uC774\uBE0C</span>${Math.max(1,e.waveNo)}/${n.waves.length}`,this.eKills.innerHTML=`\uACA9\uD30C <b>${e.kills}</b>${e.combo>=5?` <em>\uC5F0\uC1C4 ${e.combo}</em>`:""} \xB7 \uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}`,this.bSpeed.innerHTML=`\u25B6\u25B6<small>${e.speed}x</small>`,this.bPause.textContent=this.app.paused?"\u25B6":"\u275A\u275A",this.ePaused.style.display=this.app.paused?"block":"none",this.cards.forEach(({id:u,c:f,n:m})=>{m.textContent=GF.wname(u),f.classList.toggle("sel",e.mode===u),f.classList.toggle("off",e.money<GF.WEAPONS[u].cost)});let i="",r="nextwave";e.state==="ready"?i="<b>\uC791\uC804 \uAC1C\uC2DC \u226B</b><small>\uCCAB \uC6E8\uC774\uBE0C \uCD9C\uACA9</small>":e.waveNo>=n.waves.length?(i=`<b>\uB9C8\uC9C0\uB9C9 \uC6E8\uC774\uBE0C</b><small>\uB0A8\uC740 \uC801 ${e.enemies.length+e.queue.length}</small>`,r+=" busy"):e.queue.length?(i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>\uC801 \uCD9C\uD604 \uC911 \xB7 ${e.queue.length}</small>`,r+=" busy"):i=`<b>\uB2E4\uC74C \uC6E8\uC774\uBE0C \u226B</b><small>${Math.ceil(e.nextT)}\uCD08 \uD6C4 \uC790\uB3D9 \xB7 \uC9C0\uAE08 \uB204\uB974\uBA74 +${Math.ceil(e.nextT)*3}</small>`,this.bNext.innerHTML!==i&&(this.bNext.innerHTML=i),this.bNext.className=r,this.ops.forEach((u,f)=>{let m=e.hand[f],x=GF.CARDS[m],g=`<i>${"QWE"[f]}</i><b>${x.name}</b><span>${x.desc}</span><em>${x.cost}</em>`;u.innerHTML!==g&&(u.innerHTML=g),u.classList.toggle("off",e.cp<x.cost),u.classList.toggle("sel",e.cardSel===f)}),this.eNext.textContent="\uB2E4\uC74C \uCE74\uB4DC: "+GF.CARDS[e.deck[0]].name;for(let{id:u,C:f,o:m}of this.strats){let x=e.strat[u],g=e.stratOpen(u),p=g?x.charges?`\uC0AC\uC6A9 \uAC00\uB2A5 ${x.charges}/${f.max}`:`\uC6E8\uC774\uBE0C ${e.stratNext(u)}\uC5D0 \uC7AC\uBCF4\uAE09`:`\uC2A4\uD14C\uC774\uC9C0 ${f.unlockStage}\uBD80\uD130`,_=`<i>${f.key}</i><b>${u==="nuke"?"\u2622 ":"\u{1F680} "}${f.name}</b><span>${p}</span>`;m.innerHTML!==_&&(m.innerHTML=_),m.classList.toggle("ready",g&&x.charges>0),m.classList.toggle("sel",e.mode==="strat"&&e.stratSel===u)}let a=e.cp<GF.SETTINGS.cpMax?e.cpT/GF.SETTINGS.cpEverySec:0;this.cpSegs.forEach((u,f)=>{u.firstChild.style.width=(f<e.cp?100:f===e.cp?a*100:0)+"%"}),this.eCp.textContent="CP "+e.cp+" / "+GF.SETTINGS.cpMax;let o=e.selected;if(this.panel.style.display=o?"block":"none",o){let u=e.stats(o),f=o.level>=GF.SETTINGS.maxTowerLevel,m=this.project(o.pos.clone().setY(.6))||{x:900,y:500};this.panel.style.left=Math.max(20,Math.min(this.BW-420,m.x+60))+"px",this.panel.style.top=Math.max(this.L.mobile?60:110,Math.min(this.BH-(this.L.mobile?400:520),m.y-160))+"px",this.panel.querySelector(".pt").textContent=GF.wname(o.type)+"  Lv."+o.level,this.panel.querySelector(".pi").innerHTML=`${o.W.nation} \xB7 ${o.W.role}<br>${this.upLine(e,o,u,f)}\uB204\uC801 \uD53C\uD574 <b>${z_(o.dmgTotal)}</b> \xB7 \uACA9\uD30C <b>${o.kills}</b><br><small>${o.W.desc}</small>`;let x=this.panel.querySelector(".up"),g=this.panel.querySelector(".all");x.textContent=f?"\uCD5C\uB300 \uAC15\uD654 (Lv.4)":`\uAC15\uD654 Lv.${o.level+1}/4  (${e.upgradeCost(o)})`,x.disabled=f||e.money<e.upgradeCost(o);let p=e.bulkList(o.type).length,_=e.bulkCost(o.type);g.textContent=p?`\uAC19\uC740 \uBB34\uAE30 ${p}\uB300 \uBAA8\uB450 \uAC15\uD654  (${_})`:"\uAC19\uC740 \uBB34\uAE30 \uBAA8\uB450 \uCD5C\uB300 \uAC15\uD654",g.disabled=!p||e.money<_,this.panel.querySelector(".sell").textContent="\uD310\uB9E4 +"+Math.round(o.invested*GF.SETTINGS.sellRefund)}if(e.tip&&this.app.mouse){let u=this.app.mouse,f=this.root.getBoundingClientRect();this.eTip.style.display="block",this.eTip.className="tip "+(e.tip.ok?"ok":"bad"),this.eTip.textContent=(e.tip.ok?"\u2713 ":"\u2715 ")+e.tip.text,this.eTip.style.left=(u.x-f.left)/this.scale+24+"px",this.eTip.style.top=(u.y-f.top)/this.scale+18+"px"}else this.eTip.style.display="none";for(let u of this.floats){u.t+=t;let f=this.project(u.v);f&&(u.e.style.left=f.x+"px",u.e.style.top=f.y-u.t*50+"px"),u.e.style.opacity=1-u.t/.9,u.t>.9&&(u.e.remove(),u.done=!0)}this.floats=this.floats.filter(u=>!u.done);let l="",c=this.L.mobile,h=c?"\uD130\uCE58":"\uD074\uB9AD",d=c?"\uBC84\uD2BC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"ESC \uCDE8\uC18C";e.mode==="strat"?l=GF.STRATEGIC[e.stratSel].name+`: \uB5A8\uC5B4\uB728\uB9B4 \uACF3\uC744 ${h} \xB7 ${d}`:e.mode==="card"?l=GF.CARDS[e.hand[e.cardSel]].name+`: \uC9C0\uB3C4\uC5D0\uC11C \uC704\uCE58 ${h} \xB7 ${d}`:e.mode?l=GF.wname(e.mode)+` \uC124\uCE58: \uB300\uB85C \uC544\uBB34 \uACF3\uC774\uB098 ${h} \xB7 ${c?"\uCE74\uB4DC \uB2E4\uC2DC \uB204\uB974\uBA74 \uCDE8\uC18C":"\uC624\uB978\uCABD \uD074\uB9AD/ESC \uCDE8\uC18C"}`:e.state==="ready"&&(l=this.L.mobile?"\uBB34\uAE30 \uCE74\uB4DC\uB97C \uB204\uB974\uACE0 \uB300\uB85C\uB97C \uD130\uCE58\uD574 \uBC30\uCE58 \xB7 \uB450 \uC190\uAC00\uB77D\uC73C\uB85C \uD655\uB300 \xB7 \uD55C \uC190\uAC00\uB77D \uB04C\uAE30\uB85C \uC774\uB3D9":"\uC801\uC774 \uC624\uB294 \uB3C4\uC2EC \uAC70\uB9AC\xB7\uAC74\uBB3C\xB7\uB79C\uB4DC\uB9C8\uD06C\uB9CC \uBE7C\uACE0 \uB300\uB85C \uC5B4\uB514\uB4E0 \uBB34\uAE30\uB97C \uB193\uC73C\uC138\uC694. \uAC70\uB9AC \uC0AC\uC774 \uB300\uB85C\uC5D0 \uB193\uC73C\uBA74 \uC704\uC544\uB798 \uAC70\uB9AC\uB97C \uB3D9\uC2DC\uC5D0 \uACF5\uACA9\uD569\uB2C8\uB2E4 \xB7 \uD720: \uCEE4\uC11C \uCABD \uD655\uB300 \xB7 0: \uC804\uCCB4 \uBCF4\uAE30"),this.eHint.textContent=l}upLine(t,e,n,i){let r=l=>Math.round(e.W.shot==="aura"?(e.W.airDps||0)*l.mul:l.dps),o=`\uAC15\uD654 ${[1,2,3,4].map(l=>`<span style="display:inline-block;width:18px;height:7px;margin-right:3px;border-radius:2px;background:${l<=e.level?"#f2c14e":"rgba(255,255,255,.18)"}"></span>`).join("")} Lv.${e.level}/4<br>DPS <b>${r(n)}</b> \xB7 \uC0AC\uAC70\uB9AC <b>${n.range.toFixed(1)}</b>`;if(!i){let l=t.statsAt(e,e.level+1);o+=` <span style="color:#7ff0a0">\u2192 DPS ${r(l)} \xB7 \uC0AC\uAC70\uB9AC ${l.range.toFixed(1)}</span>`}return o+"<br>"}refreshProfile(){let t=this.root;t.querySelectorAll(".pc-cred").forEach(e=>{e.textContent=Hn.credits.toLocaleString("ko-KR")}),t.querySelectorAll(".pb-name").forEach(e=>{e.textContent=Hn.name}),t.querySelectorAll(".pb-ava").forEach(e=>{e.textContent=Hn.name.slice(0,1)}),t.querySelectorAll(".pb-cred").forEach(e=>{e.textContent="\uBCF4\uAE09\uCC3D "+Hn.credits.toLocaleString("ko-KR")}),this.shopEl&&(this.shopEl.querySelector(".sh-cred").textContent=Hn.credits.toLocaleString("ko-KR"))}toastAny(t,e){if(this.hud&&this.eToast)this.toast(t,e);else{let n=re("div","toast lobby",t,this.root);n.style.opacity=1,setTimeout(()=>n.remove(),1800)}}openShop(){if(this.shopEl)return;let t=this.g,e=t&&(t.state==="ready"||t.state==="battle");e&&!this.app.paused&&t.state==="battle"&&(this.app.togglePause(),this.shopPaused=!0);let n=this.shopEl=re("div","shop","",this.root);n.innerHTML=`<div class="sh-box">
      <div class="sh-head"><b>\uBCF4\uAE09 \uC0C1\uC810</b><span>\uBCF4\uAE09\uCC3D <b class="sh-cred"></b></span><button class="sh-x">\u2715</button></div>
      <div class="sh-packs">${GF.SHOP.packs.map(i=>`<div class="pk" data-id="${i.id}">${i.tag?`<em>${i.tag}</em>`:""}<div class="pk-ico">\u{1F4E6}</div><b>\uBCF4\uAE09 ${i.amount.toLocaleString("ko-KR")}</b><small>${i.bonus?"\uBCF4\uB108\uC2A4 "+i.bonus:"\uAE30\uBCF8"}</small><button>${tu(i.price)}</button></div>`).join("")}</div>
      ${e?`<div class="sh-wd"><span>\uBCF4\uAE09\uCC3D \u2192 \uC774\uBC88 \uC804\uD22C \uBCF4\uAE09\uC73C\uB85C \uAEBC\uB0B4\uAE30</span>${GF.SHOP.withdrawSteps.map(i=>`<button data-n="${i}">+${i.toLocaleString("ko-KR")}</button>`).join("")}</div>`:""}
      <div class="sh-note">${GF.SHOP.testMode?"\u26A0 \uD14C\uC2A4\uD2B8 \uBAA8\uB4DC: \uC2E4\uC81C \uACB0\uC81C\uB294 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uACE0 \uBCF4\uAE09\uC774 \uBC14\uB85C \uC9C0\uAE09\uB429\uB2C8\uB2E4. \uCD9C\uC2DC \uB54C Google Play\xB7Steam \uACB0\uC81C\uB85C \uC5F0\uACB0\uD569\uB2C8\uB2E4.":"\uACB0\uC81C\uB294 \uC2A4\uD1A0\uC5B4 \uACC4\uC815\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4."}</div>
    </div>`,n.querySelector(".sh-x").onclick=()=>this.closeShop(),n.onclick=i=>{i.target===n&&this.closeShop()},n.querySelectorAll(".pk button").forEach(i=>{i.onclick=()=>{let r=GF.SHOP.packs.find(a=>a.id===i.parentElement.dataset.id);GF.SHOP.testMode&&(Hn.addCredits(r.amount,tu(r.price)+" \uCDA9\uC804(\uD14C\uC2A4\uD2B8)"),this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),i.textContent="\uCDA9\uC804 \uC644\uB8CC \u2713",setTimeout(()=>{i.textContent=tu(r.price)},900))}}),n.querySelectorAll(".sh-wd button").forEach(i=>{i.onclick=()=>{let r=+i.dataset.n;if(!Hn.spend(r)){i.textContent="\uBCF4\uAE09\uCC3D \uBD80\uC871",setTimeout(()=>{i.textContent="+"+r.toLocaleString("ko-KR")},900);return}t.money+=r,this.refreshProfile(),this.app.sound&&this.app.sound.play("coin"),this.toast(`\uBCF4\uAE09\uCC3D\uC5D0\uC11C \uBCF4\uAE09 +${r} \uD22C\uC785`,"#F2C14E")}}),this.refreshProfile()}closeShop(){this.shopEl&&(this.shopEl.remove(),this.shopEl=null,this.shopPaused&&(this.shopPaused=!1,this.app.paused&&this.app.togglePause()))}fullscreen(){let t=document.documentElement;if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let n=t.requestFullscreen||t.webkitRequestFullscreen;if(!n){this.toastAny("\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC804\uCCB4 \uD654\uBA74\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544\uC694. \uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uB85C \uC5F4\uC5B4 \uC8FC\uC138\uC694");return}Promise.resolve(n.call(t,{navigationUI:"hide"})).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}whiteFlash(){let t=re("div","wflash","",this.root);setTimeout(()=>t.classList.add("go"),30),setTimeout(()=>t.remove(),2600)}showResult(t,e){let n=this.g,i=this.result=re("div","result",`
      <div class="box ${t?"win":"lose"}">
        <h2>${t?this.cityName()+" \uBC29\uC5B4 \uC131\uACF5":"\uBC29\uC5B4\uC120 \uBD95\uAD34"}</h2>
        <div class="stars">${t?"\u2605".repeat(e)+"\u2606".repeat(3-e):""}</div>
        <p>\uACA9\uD30C ${n.kills} \xB7 \uCD5C\uB300 \uC5F0\uC1C4 ${Math.max(n.bestCombo,n.combo)} \xB7 \uC6E8\uC774\uBE0C ${n.waveNo}/${this.app.stage.waves.length} \xB7 \uB0A8\uC740 \uAE30\uC9C0 ${n.lives}</p>
        <p class="s">${t?"\uBCF4\uAE09 \uC0C1\uC790 \uD68D\uB4DD! (\uC0C1\uC790 \uC5F4\uAE30\uB294 \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uCD94\uAC00\uB429\uB2C8\uB2E4)":"\uAD7D\uC774 \uC0AC\uC774 \uACF5\uC6D0\uC5D0 \uBB34\uAE30\uB97C \uBAA8\uC73C\uACE0, \uC6B0\uD68C\uB85C\uB97C \uC5F4\uC5B4 \uC801\uC744 \uB354 \uC624\uB798 \uBD99\uC7A1\uC544 \uBCF4\uC138\uC694"}</p>
        <div class="row"><button class="again">\uB2E4\uC2DC \uD558\uAE30</button><button class="home">\uCC98\uC74C \uD654\uBA74</button></div>
      </div>`,this.root);i.querySelector(".again").onclick=()=>{i.remove(),this.result=null,this.app.startGame()},i.querySelector(".home").onclick=()=>{i.remove(),this.result=null,this.app.toTitle()}}clearResult(){this.result&&(this.result.remove(),this.result=null)}clearHud(){this.hud&&(this.hud.remove(),this.hud=null,this.floats=[])}},z_=s=>s>=1e4?(s/1e3).toFixed(1)+"k":String(Math.round(s));var sc=class{constructor(){this.ctx=null,this.last={},this.musicOn=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.bgm=e.createGain(),this.bgm.connect(this.master);let n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;this.noise=i,this.apply()}apply(){if(!this.ctx)return;let t=GF.SETTINGS;this.sfx.gain.value=t.sound?t.sfxVolume:0,this.bgm.gain.value=t.music?t.musicVolume:0,t.music&&!this.musicOn&&this.startMusic()}env(t,e,n,i,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}noiseHit(t,{dur:e=.2,f:n=1200,q:i=.8,type:r="lowpass",vol:a=.5,fEnd:o,out:l=this.sfx}){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noise;let d=c.createBiquadFilter();d.type=r,d.frequency.setValueAtTime(n,t),d.Q.value=i,o&&d.frequency.exponentialRampToValueAtTime(o,t+e);let u=c.createGain();this.env(u,t,.004,a,e),h.connect(d),d.connect(u),u.connect(l),h.start(t,Math.random()*1,e+.05)}tone(t,{f:e=440,fEnd:n,dur:i=.2,type:r="sine",vol:a=.3,a:o=.005,out:l=this.sfx}){let c=this.ctx,h=c.createOscillator();h.type=r,h.frequency.setValueAtTime(e,t),n&&h.frequency.exponentialRampToValueAtTime(n,t+i);let d=c.createGain();this.env(d,t,o,a,i),h.connect(d),d.connect(l),h.start(t),h.stop(t+o+i+.05)}play(t,e=1){if(!this.ctx||!GF.SETTINGS.sound)return;let n=this.ctx,i=n.currentTime,r={bullet:.07,cannon:.09,shell:.12,missile:.15,intercept:.08,rockets:.2,boom:.06,bigboom:.15,kill:.05,hit:.05};if(i-(this.last[t]||-9)<(r[t]||.03))return;this.last[t]=i;let a=e;switch(t){case"bullet":for(let o=0;o<3;o++)this.noiseHit(i+o*.045,{dur:.05,f:3200,type:"bandpass",q:1.2,vol:.22*a});break;case"cannon":this.noiseHit(i,{dur:.35,f:900,fEnd:120,vol:.55*a}),this.tone(i,{f:110,fEnd:45,dur:.3,vol:.4*a});break;case"shell":this.noiseHit(i,{dur:.6,f:500,fEnd:80,vol:.6*a}),this.tone(i,{f:70,fEnd:35,dur:.5,vol:.5*a});break;case"missile":this.noiseHit(i,{dur:.7,f:600,fEnd:3500,type:"bandpass",q:2,vol:.35*a});break;case"rockets":for(let o=0;o<6;o++)this.noiseHit(i+o*.09,{dur:.35,f:700,fEnd:2600,type:"bandpass",q:1.5,vol:.22*a});break;case"intercept":this.tone(i,{f:1400,fEnd:500,dur:.18,type:"triangle",vol:.14*a}),this.noiseHit(i,{dur:.25,f:2500,type:"bandpass",q:3,vol:.15*a});break;case"cruise":this.tone(i,{f:80,fEnd:40,dur:.6,vol:.5*a}),this.noiseHit(i,{dur:1.4,f:300,fEnd:2500,type:"bandpass",q:.8,vol:.5*a});break;case"nuke":this.tone(i,{f:50,fEnd:22,dur:3.5,vol:.9*a,a:.02}),this.noiseHit(i,{dur:3.2,f:2500,fEnd:50,vol:.9*a}),this.noiseHit(i+.4,{dur:2.8,f:400,fEnd:60,vol:.6*a});break;case"siren":this.tone(i,{f:500,fEnd:900,dur:.6,type:"sawtooth",vol:.1*a,a:.05}),this.tone(i+.65,{f:900,fEnd:500,dur:.6,type:"sawtooth",vol:.1*a,a:.05});break;case"javelin":this.noiseHit(i,{dur:.4,f:400,fEnd:2e3,type:"bandpass",q:1.5,vol:.4*a}),this.tone(i,{f:220,fEnd:90,dur:.15,vol:.2*a});break;case"boom":this.noiseHit(i,{dur:.45,f:1400,fEnd:150,vol:.4*a});break;case"bigboom":this.noiseHit(i,{dur:1.1,f:900,fEnd:60,vol:.75*a}),this.tone(i,{f:60,fEnd:28,dur:.9,vol:.6*a});break;case"airstrike":this.noiseHit(i,{dur:1.2,f:300,fEnd:4e3,type:"bandpass",q:.7,vol:.4*a});for(let o=0;o<5;o++)this.noiseHit(i+.9+o*.13,{dur:.8,f:800,fEnd:70,vol:.6*a});break;case"emp":this.tone(i,{f:90,fEnd:1800,dur:.5,type:"sawtooth",vol:.18*a}),this.tone(i+.1,{f:1800,fEnd:60,dur:.6,type:"square",vol:.08*a});break;case"place":this.noiseHit(i,{dur:.06,f:2500,type:"bandpass",q:2,vol:.4*a}),this.tone(i+.07,{f:180,fEnd:120,dur:.12,type:"square",vol:.12*a});break;case"upgrade":[523,659,784,1046].forEach((o,l)=>this.tone(i+l*.06,{f:o,dur:.18,type:"triangle",vol:.18*a}));break;case"sell":[784,523].forEach((o,l)=>this.tone(i+l*.08,{f:o,dur:.15,type:"triangle",vol:.15*a}));break;case"coin":this.tone(i,{f:1318,dur:.08,type:"square",vol:.06*a}),this.tone(i+.06,{f:1760,dur:.12,type:"square",vol:.06*a});break;case"click":this.tone(i,{f:900,dur:.04,type:"square",vol:.06*a});break;case"deny":this.tone(i,{f:180,dur:.15,type:"square",vol:.08*a});break;case"wave":[0,.35].forEach(o=>{this.tone(i+o,{f:392,dur:.25,type:"sawtooth",vol:.12*a,a:.02}),this.tone(i+o+.12,{f:523,dur:.22,type:"sawtooth",vol:.12*a,a:.02})});break;case"leak":for(let o=0;o<2;o++)this.tone(i+o*.22,{f:880,fEnd:660,dur:.18,type:"square",vol:.12*a});break;case"combo":[659,784,988,1318].forEach((o,l)=>this.tone(i+l*.05,{f:o,dur:.14,type:"square",vol:.07*a}));break;case"win":[523,659,784,1046,784,1046].forEach((o,l)=>this.tone(i+l*.16,{f:o,dur:.3,type:"triangle",vol:.2*a}));break;case"lose":[392,349,311,262].forEach((o,l)=>this.tone(i+l*.28,{f:o,dur:.4,type:"sawtooth",vol:.12*a}));break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx,e=96,n=60/e;[55,82.4,110].forEach((l,c)=>{let h=t.createOscillator();h.type=c?"triangle":"sawtooth",h.frequency.value=l;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=260;let u=t.createGain();u.gain.value=c?.05:.04;let f=t.createOscillator();f.frequency.value=.07+c*.03;let m=t.createGain();m.gain.value=.025,f.connect(m),m.connect(u.gain),f.start(),h.connect(d),d.connect(u),u.connect(this.bgm),h.start()});let i="K.s.K.ssK.s.KKs.",r=t.currentTime+.1,a=0,o=()=>{for(;r<t.currentTime+.6;){let l=i[a%i.length];l==="K"&&this.tone(r,{f:120,fEnd:45,dur:.22,vol:.35,out:this.bgm}),l==="s"&&this.noiseHit(r,{dur:.09,f:1800,type:"bandpass",q:.9,vol:.12,out:this.bgm}),r+=n/2,a++}};this.musicTimer=setInterval(o,150)}};var Aa=class s extends pt{constructor(){let t=s.SkyShader,e=new ve({name:t.name,uniforms:en.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:tn,depthWrite:!1});super(new Nt(1,1,1),e),this.isSky=!0}};Aa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},H_=new Qn(-1,1,1,-1,0,1),eu=class extends ue{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},k_=new eu,oi=class{constructor(t){this._mesh=new pt(k_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var as=class extends fn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=en.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new oi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ra=class extends fn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},rc=class extends fn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ac=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Ae(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ze}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new as(ai),this.copyPass.material.blending=Ve,this.timer=new na}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ra!==void 0&&(a instanceof Ra?n=!0:a instanceof rc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oc=class extends fn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Gt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var Qf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ur=class s extends fn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ae(r,a,{type:ze,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ae(r,a,{type:ze,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ae(r,a,{type:ze,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Qf;this.highPassUniforms=en.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=en.clone(ai.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:ai.vertexShader,fragmentShader:ai.fragmentShader,premultipliedAlpha:!0,blending:ia,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Gt,this._oldClearAlpha=1,this._basic=new Se,this._fsQuad=new oi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new ve({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ur.BlurDirectionX=new Q(1,0);ur.BlurDirectionY=new Q(0,1);var Ca={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $t},cameraProjectionMatrixInverse:{value:new $t},cameraWorldMatrix:{value:new $t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},Pa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function tp(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=G_(t),n=e.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new xi(i,t,t);return r.wrapS=xe,r.wrapT=xe,r.needsUpdate=!0,r}function G_(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=a++;r++,i--}return n}var Ia={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraProjectionMatrixInverse:{value:new $t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function nu(s,t,e){let n=V_(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function V_(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,a=Math.pow(i/(s-1),e);n.push(new P(Math.cos(r),Math.sin(r),a))}return n}var cc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,m=t-u,x=e-f,g,p;m>x?(g=1,p=0):(g=0,p=1);let _=m-g+h,S=x-p+h,v=m-1+2*h,b=x-1+2*h,E=l&255,C=c&255,y=this.perm[E+this.perm[C]]%12,w=this.perm[E+g+this.perm[C+p]]%12,A=this.perm[E+1+this.perm[C+1]]%12,I=.5-m*m-x*x;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[y],m,x));let D=.5-_*_-S*S;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[w],_,S));let O=.5-v*v-b*b;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],v,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,m=(h+d+u)*f,x=h-m,g=d-m,p=u-m,_=t-x,S=e-g,v=n-p,b,E,C,y,w,A;_>=S?S>=v?(b=1,E=0,C=0,y=1,w=1,A=0):_>=v?(b=1,E=0,C=0,y=1,w=0,A=1):(b=0,E=0,C=1,y=1,w=0,A=1):S<v?(b=0,E=0,C=1,y=0,w=1,A=1):_<v?(b=0,E=1,C=0,y=0,w=1,A=1):(b=0,E=1,C=0,y=1,w=1,A=0);let I=_-b+f,D=S-E+f,O=v-C+f,N=_-y+2*f,B=S-w+2*f,W=v-A+2*f,X=_-1+3*f,st=S-1+3*f,V=v-1+3*f,J=h&255,j=d&255,At=u&255,yt=this.perm[J+this.perm[j+this.perm[At]]]%12,he=this.perm[J+b+this.perm[j+E+this.perm[At+C]]]%12,te=this.perm[J+y+this.perm[j+w+this.perm[At+A]]]%12,ae=this.perm[J+1+this.perm[j+1+this.perm[At+1]]]%12,Y=.6-_*_-S*S-v*v;Y<0?i=0:(Y*=Y,i=Y*Y*this._dot3(this.grad3[yt],_,S,v));let K=.6-I*I-D*D-O*O;K<0?r=0:(K*=K,r=K*K*this._dot3(this.grad3[he],I,D,O));let ut=.6-N*N-B*B-W*W;ut<0?a=0:(ut*=ut,a=ut*ut*this._dot3(this.grad3[te],N,B,W));let Ot=.6-X*X-st*st-V*V;return Ot<0?o=0:(Ot*=Ot,o=Ot*Ot*this._dot3(this.grad3[ae],X,st,V)),32*(i+r+a+o)}noise4d(t,e,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,m,x=(t+e+n+i)*l,g=Math.floor(t+x),p=Math.floor(e+x),_=Math.floor(n+x),S=Math.floor(i+x),v=(g+p+_+S)*c,b=g-v,E=p-v,C=_-v,y=S-v,w=t-b,A=e-E,I=n-C,D=i-y,O=w>A?32:0,N=w>I?16:0,B=A>I?8:0,W=w>D?4:0,X=A>D?2:0,st=I>D?1:0,V=O+N+B+W+X+st,J=a[V][0]>=3?1:0,j=a[V][1]>=3?1:0,At=a[V][2]>=3?1:0,yt=a[V][3]>=3?1:0,he=a[V][0]>=2?1:0,te=a[V][1]>=2?1:0,ae=a[V][2]>=2?1:0,Y=a[V][3]>=2?1:0,K=a[V][0]>=1?1:0,ut=a[V][1]>=1?1:0,Ot=a[V][2]>=1?1:0,Et=a[V][3]>=1?1:0,Wt=w-J+c,pe=A-j+c,et=I-At+c,at=D-yt+c,ot=w-he+2*c,lt=A-te+2*c,ht=I-ae+2*c,kt=D-Y+2*c,Bt=w-K+3*c,Xt=A-ut+3*c,Zt=I-Ot+3*c,L=D-Et+3*c,de=w-1+4*c,ee=A-1+4*c,R=I-1+4*c,M=D-1+4*c,z=g&255,H=p&255,$=_&255,ct=S&255,dt=o[z+o[H+o[$+o[ct]]]]%32,Z=o[z+J+o[H+j+o[$+At+o[ct+yt]]]]%32,nt=o[z+he+o[H+te+o[$+ae+o[ct+Y]]]]%32,gt=o[z+K+o[H+ut+o[$+Ot+o[ct+Et]]]]%32,Ut=o[z+1+o[H+1+o[$+1+o[ct+1]]]]%32,mt=.6-w*w-A*A-I*I-D*D;mt<0?h=0:(mt*=mt,h=mt*mt*this._dot4(r[dt],w,A,I,D));let ft=.6-Wt*Wt-pe*pe-et*et-at*at;ft<0?d=0:(ft*=ft,d=ft*ft*this._dot4(r[Z],Wt,pe,et,at));let Pt=.6-ot*ot-lt*lt-ht*ht-kt*kt;Pt<0?u=0:(Pt*=Pt,u=Pt*Pt*this._dot4(r[nt],ot,lt,ht,kt));let zt=.6-Bt*Bt-Xt*Xt-Zt*Zt-L*L;zt<0?f=0:(zt*=zt,f=zt*zt*this._dot4(r[gt],Bt,Xt,Zt,L));let Jt=.6-de*de-ee*ee-R*R-M*M;return Jt<0?m=0:(Jt*=Jt,m=Jt*Jt*this._dot4(r[Ut],de,ee,R,M)),27*(h+d+u+f+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Da=class s extends fn{constructor(t,e,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=tp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ae(this.width,this.height,{type:ze,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ve({defines:Object.assign({},Ca.defines),uniforms:en.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:Ve,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Zr,this.normalMaterial.blending=Ve,this.pdMaterial=new ve({defines:Object.assign({},Ia.defines),uniforms:en.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ve({defines:Object.assign({},Pa.defines),uniforms:en.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:Ve}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ve({uniforms:en.clone(ai.uniforms),vertexShader:ai.vertexShader,fragmentShader:ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ra,blendDst:ji,blendEquation:Cn,blendSrcAlpha:sa,blendDstAlpha:ji,blendEquationAlpha:Cn}),this.blendMaterial=new ve({uniforms:en.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jo,blendSrc:ra,blendDst:ji,blendEquation:Cn,blendSrcAlpha:sa,blendDstAlpha:ji,blendEquationAlpha:Cn}),this._fsQuad=new oi(null),this._originalClearColor=new Gt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Jn,this.depthTexture.format=ei,this.depthTexture.type=zi,this.normalRenderTarget=new Ae(this.width,this.height,{minFilter:ke,magFilter:ke,type:ze,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ve,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ve,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ve,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ve,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ve,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new cc,n=t*t*4,i=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;i[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,i[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new xi(i,t,t,mn,ln);return r.wrapS=xe,r.wrapT=xe,r.needsUpdate=!0,r}};Da.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var La={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hc=class extends fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=en.clone(La.uniforms),this.material=new Xs({name:La.name,uniforms:this.uniforms,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this._fsQuad=new oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===aa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===la?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ca&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ep={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

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

		}`};var W_={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},saturation:{value:.86},shadowTint:{value:new P(.94,.98,1.06)},lightTint:{value:new P(1.04,1,.95)},vignette:{value:.28},aspect:{value:16/9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function X_(){let s=GF.SETTINGS.graphics;return s&&s!=="auto"?s:matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1?"medium":"high"}var uc=class{constructor(t,e,n,i){this.r=t,this.scene=e,this.camera=n,this.sun=i,this.haze=new Gt(12569555),e.background=this.haze.clone(),e.fog=new Pr(this.haze,120,320),this.makeEnvironment(),this.setQuality(X_())}makeEnvironment(){let t=new Aa;t.scale.setScalar(1e3);let e=t.material.uniforms;e.turbidity.value=7,e.rayleigh.value=1.4,e.mieCoefficient.value=.006,e.mieDirectionalG.value=.82,e.cloudCoverage&&(e.cloudCoverage.value=0),e.sunPosition.value.copy(this.sun.position).normalize();let n=new Pi;n.add(t);let i=new sr(this.r);this.env=i.fromScene(n,.03).texture,i.dispose(),t.geometry.dispose(),t.material.dispose(),this.scene.environment=this.env,this.scene.environmentIntensity=GF.SETTINGS.envLight??.12}setQuality(t){this.q=t,this.composer&&(this.composer.dispose(),this.composer=null);let e=this.r;if(e.setPixelRatio(Math.min(window.devicePixelRatio,t==="high"?2:1.5)),t==="low")return;let n=e.getDrawingBufferSize(new Q),i=new Ae(n.x,n.y,{type:ze,samples:t==="high"?4:0}),r=this.composer=new ac(e,i);if(r.addPass(new oc(this.scene,this.camera)),t==="high"){let a=this.ao=new Da(this.scene,this.camera,n.x,n.y);a.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),a.blendIntensity=.85,r.addPass(a)}else this.ao=null;this.bloom=new ur(new Q(n.x/2,n.y/2),.38,.45,.96),r.addPass(this.bloom),r.addPass(new hc),this.grade=new as(W_),r.addPass(this.grade),t!=="high"?(this.fxaa=new as(ep),r.addPass(this.fxaa)):this.fxaa=null,this.resize()}resize(){let t=this.r,e=t.getSize(new Q);if(!this.composer)return;this.composer.setPixelRatio(t.getPixelRatio()),this.composer.setSize(e.x,e.y);let n=t.getPixelRatio();this.fxaa&&this.fxaa.material.uniforms.resolution.value.set(1/(e.x*n),1/(e.y*n)),this.grade.uniforms.aspect.value=e.x/e.y}update(t){this.scene.fog.near=t*1.05,this.scene.fog.far=t*3.4}render(){this.composer?this.composer.render():this.r.render(this.scene,this.camera)}};var dc=class{constructor(t,e){this.app=t;let n=new $t().fromArray(e.projView),i=new jr().load(e.image,()=>{this.ready=!0,t.city.group.visible=!1});i.colorSpace=Ne,i.anisotropy=8,i.wrapS=i.wrapT=wn,i.generateMipmaps=!0,i.minFilter=ti,this.mat=new ve({uniforms:{map:{value:i},projView:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D map; uniform mat4 projView; varying vec3 vW;
        void main(){ vec4 c = projView * vec4(vW, 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;
          gl_FragColor = texture2D(map, clamp(uv, 0.001, 0.999));
          #include <colorspace_fragment>
        }`,depthWrite:!0,toneMapped:!1});let r=new Ie(400,400);r.rotateX(-Math.PI/2),this.mesh=new pt(r,this.mat),this.mesh.position.y=-.01,this.mesh.renderOrder=-1,t.scene.add(this.mesh)}};function np(s,t=3840,e=2160){let n=s.renderer,i=s.camera.clone();i.aspect=16/9,i.updateProjectionMatrix();let r=s.fit;i.position.set(r.t.x,r.t.y+Math.sin(s.EL)*r.d,r.t.z+Math.cos(s.EL)*r.d),i.lookAt(r.t),i.updateMatrixWorld(!0);let a=[];for(let x of[s.game.unitGroup,s.game.fxGroup,s.game.rangeDisc,s.city.chev].filter(Boolean))x.visible&&(x.visible=!1,a.push(x));let o=new Ae(t,e,{samples:4}),l=n.getSize(new Q),c=n.getPixelRatio();n.setRenderTarget(o),n.render(s.scene,i);let h=new Uint8Array(t*e*4);n.readRenderTargetPixels(o,0,0,t,e,h),n.setRenderTarget(null),o.dispose(),n.setPixelRatio(c),n.setSize(l.x,l.y),a.forEach(x=>{x.visible=!0});let d=document.createElement("canvas");d.width=t,d.height=e;let u=d.getContext("2d"),f=u.createImageData(t,e);for(let x=0;x<e;x++)f.data.set(h.subarray((e-1-x)*t*4,(e-x)*t*4),x*t*4);u.putImageData(f,0,0);let m=new $t().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).toArray();return{png:d.toDataURL("image/png"),projView:m}}var iu=class{constructor(){this.stage=GF.STAGES.seoul;let t=this.renderer=new ba({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=GF.SETTINGS.shadows,t.shadowMap.type=Ki,t.toneMapping=Oi,t.toneMappingExposure=.82,document.getElementById("view").appendChild(t.domElement),this.scene=new Pi,this.camera=new je(32,16/9,.5,900),this.EL=.84,this.cam={target:new P(0,0,0),zoom:1,zoomGoal:1,shake:0,anchor:null},this.scene.add(new $s(14085119,7038032,.4));let e=this.sun=new Zs(16770756,2.3);e.position.set(-34,40,18),e.target.position.set(0,0,0),this.scene.add(e.target),e.castShadow=!0,Object.assign(e.shadow.camera,{left:-48,right:48,top:40,bottom:-40,near:1,far:180}),e.shadow.mapSize.set(4096,4096),e.shadow.bias=-5e-4,e.shadow.normalBias=.04,e.shadow.radius=2.5,this.scene.add(e),this.look=new uc(t,this.scene,this.camera,e),this.city=new tc(this.scene,this.stage),this.sound=new sc,this.ui=new ic(this),this.game=new ec(this),this.paused=!1,this.stage.backdrop&&GF.SETTINGS.useBackdrop!==!1&&(this.backdrop=new dc(this,this.stage.backdrop)),this.exportGuide=(n,i)=>np(this,n,i),this.icons=this.makeIcons(),this.ui.showTitle(this.icons),this.setupInput(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.last=performance.now(),this.time=0,this.renderer.setAnimationLoop(()=>this.frame()),window.__GF=this}makeIcons(){let t={},e=new ba({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(160,160),e.toneMapping=Oi;let n=new Pi;n.add(new $s(16777215,8022608,1.6));let i=new Zs(16777215,2.2);i.position.set(-3,5,4),n.add(i);let r=new Qn(-.75,.75,.75,-.75,.1,20);r.position.set(2.2,2.2,2.6),r.lookAt(.1,.25,0);for(let a of GF.LOADOUT){let o=wa(a);o.yaw.rotation.y=.5,n.add(o.root),e.render(n,r),t[a]=e.domElement.toDataURL(),n.remove(o.root)}return e.dispose(),e.forceContextLoss(),t}startGame(){this.ui.hideTitle(),this.ui.clearResult(),this.paused=!1,this.cam.zoom=this.cam.zoomGoal=1,this.fitView(),this.game.start(),this.ui.buildHud()}toTitle(){this.game.state="title",this.game.cancelMode(),this.ui.clearHud(),this.ui.clearResult(),this.ui.showTitle(this.icons)}applySettings(){this.sound.apply();let t=GF.SETTINGS.graphics==="auto"?this.look.q:GF.SETTINGS.graphics;t&&t!==this.look.q&&this.look.setQuality(t);let e=GF.SETTINGS.shadows;this.renderer.shadowMap.enabled!==e&&(this.renderer.shadowMap.enabled=e,this.scene.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})}))}togglePause(){this.game.isOver()||(this.paused=!this.paused)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}resize(){let t=this.L=nc(),e=t.w,n=t.h,i=document.getElementById("view");Object.assign(i.style,{left:t.x+"px",top:t.y+"px",width:e+"px",height:n+"px"}),document.body.classList.toggle("portrait",t.portrait&&Qh()),this.renderer.setSize(e,n),this.look.resize(),this.W=e,this.H=n,this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.fitView()}fieldRect(){let t=this.L;return{top:t.base.top*t.k,bottom:t.base.bottom*t.k}}pose(t=this.cam.target,e=this.cam.dist){let n=this.camera;n.position.set(t.x,t.y+Math.sin(this.EL)*e,t.z+Math.cos(this.EL)*e),n.lookAt(t),n.updateMatrixWorld(!0)}toPx(t,e,n){let i=new P(t,e,n).project(this.camera);return{x:(i.x+1)/2*this.W,y:(1-i.y)/2*this.H}}groundAt(t,e){let n=new Js;n.setFromCamera(new Q((t-this.L.x)/this.W*2-1,-((e-this.L.y)/this.H)*2+1),this.camera);let i=new P;return n.ray.intersectPlane(new pn(new P(0,1,0),0),i)?i:null}fitView(){if(!this.W)return;let t=this.stage.bounds,e=this.fieldRect(),n=(t.x0+t.x1)/2,i=new P(n,0,(t.z0+t.z1)/2),r=70;for(let a=0;a<80;a++){this.pose(i,r);let o=this.toPx(n,0,t.z0).y,l=this.toPx(n,0,t.z1).y,c=this.toPx(t.x1,0,t.z1).x-this.toPx(t.x0,0,t.z1).x,h=l-o,d=e.bottom-e.top;r*=Math.max(h/d,c/(this.W*.995)),i.z+=((o+l)/2-(e.top+e.bottom)/2)*(t.z1-t.z0)/h}this.fit={d:r,t:i.clone()},this.cam.target.copy(i),this.cam.dist=this.cam.distGoal=r/this.cam.zoom,this.pose()}zoomAt(t,e,n){let i=this.cam,r=Math.min(3,Math.max(1,i.zoomGoal*n));r!==i.zoomGoal&&(i.zoomGoal=r,i.anchor={px:t,py:e,g:this.groundAt(t,e)})}updateCamera(t){let e=this.cam;if(!this.fit)return;let n=e.zoom;if(e.zoom+=(e.zoomGoal-e.zoom)*Math.min(1,t*10),Math.abs(e.zoom-e.zoomGoal)<.001&&(e.zoom=e.zoomGoal),e.dist=this.fit.d/e.zoom,this.pose(),e.anchor&&e.anchor.g&&n!==e.zoom){let r=this.groundAt(e.anchor.px,e.anchor.py);r&&(e.target.x+=e.anchor.g.x-r.x,e.target.z+=e.anchor.g.z-r.z)}e.zoom===e.zoomGoal&&(e.anchor=null),this.clampTarget();let i=e.shake>0?(Math.random()-.5)*e.shake:0;e.shake=Math.max(0,e.shake-t),this.pose(e.target.clone().add(new P(i,0,i)))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),i=new Q((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Js;r.setFromCamera(i,this.camera);let a=new P;return r.ray.intersectPlane(new pn(new P(0,1,0),0),a)?a:null}setupInput(){let t=this.renderer.domElement,e=null,n=new Map;t.addEventListener("pointerdown",r=>{if(this.sound.unlock(),r.button===2){this.game.cancelMode();return}if(n.set(r.pointerId,{x:r.clientX,y:r.clientY}),n.size===2){let[a,o]=[...n.values()];e={pinch:Math.hypot(a.x-o.x,a.y-o.y),z0:this.cam.zoomGoal,moved:!0};return}e={x:r.clientX,y:r.clientY,moved:!1,touch:r.pointerType==="touch"},r.pointerType==="touch"&&(this.mouse={x:r.clientX,y:r.clientY}),t.setPointerCapture(r.pointerId)}),t.addEventListener("pointermove",r=>{this.mouse={x:r.clientX,y:r.clientY},n.has(r.pointerId)&&n.set(r.pointerId,{x:r.clientX,y:r.clientY});let a=this.pick(r.clientX,r.clientY);if(a&&this.game.state!=="title"&&this.game.hoverAt(a),!e)return;if(e.pinch){let[c,h]=[...n.values()];if(c&&h){let d=e.z0*Math.hypot(c.x-h.x,c.y-h.y)/Math.max(20,e.pinch);this.zoomAt((c.x+h.x)/2,(c.y+h.y)/2,d/this.cam.zoomGoal)}return}let o=r.clientX-e.x,l=r.clientY-e.y;if(!e.moved&&Math.abs(o)+Math.abs(l)>(e.touch?14:7)&&(e.moved=!0),e.moved){let c=this.groundAt(e.lx??e.x,e.ly??e.y),h=this.groundAt(r.clientX,r.clientY);c&&h&&(this.cam.target.x+=c.x-h.x,this.cam.target.z+=c.z-h.z),this.cam.anchor=null,this.clampTarget(),this.pose(),e.lx=r.clientX,e.ly=r.clientY}});let i=r=>{n.delete(r.pointerId);let a=e;if(n.size||(e=null),!a||a.moved||r.button!==0)return;let o=this.pick(r.clientX,r.clientY);o&&this.game.state!=="title"&&(r.pointerType==="touch"&&(this.mouse={x:r.clientX,y:r.clientY},this.game.hoverAt(o)),this.game.click(o))};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",r=>{n.delete(r.pointerId),e=null}),t.addEventListener("pointerleave",()=>{this.mouse=null}),t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("wheel",r=>{r.preventDefault(),this.zoomAt(r.clientX,r.clientY,r.deltaY>0?1/1.15:1.15)},{passive:!1}),this.keys={},window.addEventListener("pointerdown",()=>this.sound.unlock()),window.addEventListener("keydown",r=>{if(this.sound.unlock(),r.target&&r.target.tagName==="INPUT")return;if(this.ui.shopEl&&r.code==="Escape"){this.ui.closeShop();return}this.keys[r.code]=!0;let a=this.game;if(a.state==="title"){r.code==="Enter"&&this.startGame();return}let o=parseInt(r.key,10);o>=1&&o<=GF.LOADOUT.length&&a.setMode(GF.LOADOUT[o-1]),r.code==="KeyZ"&&a.pickStrat("icbm"),r.code==="KeyX"&&a.pickStrat("nuke"),r.code==="KeyQ"&&a.pickCard(0),r.code==="KeyW"&&a.pickCard(1),r.code==="KeyE"&&a.pickCard(2),r.code==="Escape"&&a.cancelMode(),r.code==="Space"&&(r.preventDefault(),this.togglePause()),(r.code==="KeyN"||r.code==="Enter")&&a.callNext(),(r.code==="Equal"||r.code==="NumpadAdd")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,1.25),(r.code==="Minus"||r.code==="NumpadSubtract")&&this.zoomAt(this.L.x+this.W/2,this.L.y+this.H/2,.8),(r.code==="Digit0"||r.code==="Home")&&(this.cam.zoomGoal=1,this.cam.anchor=null)}),window.addEventListener("keyup",r=>{this.keys[r.code]=!1})}clampTarget(){let t=this.cam,e=t.target,n=this.fit;if(!n)return;let i=Math.max(0,Math.min(1,(t.zoom-1)/.05)),r=this.stage.bounds,a=t.zoom,o=(r.x1-r.x0)/2*(1-1/a),l=(r.z1-r.z0)/2*(1-1/a),c=n.t.x,h=n.t.z;e.x=Math.max(c-o,Math.min(c+o,e.x)),e.z=Math.max(h-l,Math.min(h+l,e.z)),i===0&&(e.x=c,e.z=h)}frame(){let t=performance.now(),e=Math.min((t-this.last)/1e3,.1);this.last=t,this.time+=e;let n=this.keys||{},i=30*e/this.cam.zoom;n.ArrowLeft&&(this.cam.target.x-=i),n.ArrowRight&&(this.cam.target.x+=i),n.ArrowUp&&(this.cam.target.z-=i),n.ArrowDown&&(this.cam.target.z+=i),this.clampTarget();let r=this.paused?0:e*this.game.speed;this.city.update(e,this.time),this.game.update(r,this.time),this.updateCamera(e),this.look.update(this.cam.dist),this.look.render(),this.ui.update(r||0)}};new iu;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
