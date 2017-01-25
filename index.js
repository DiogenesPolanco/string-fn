const R=require("rambda"),c=/[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g,d=/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g,e=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g,f=/<[^>]*>/g;function between(g,h,k){return R.last(R.split(h,R.head(R.split(k,g)))).trim();}function camelCase(l,m=!1){const n=R.join("",R.map(o=>`${R.toUpper(R.head(o))}${R.toLower(R.tail(o))}`,words(l,m)));return`${R.toLower(R.head(n))}${R.tail(n)}`;}function capitalize(p,q=3,r=!1){const s=R.join(" ",R.map(t=>{if(t.length>=q){return`${R.toUpper(R.head(t))}${R.toLower(R.tail(t))}`;}return t;},words(p,r)));return`${R.toUpper(R.head(s))}${R.tail(s)}`;}function clean(u){return R.replace(/\s+/g," ",u).trim();}function count(v,w){return R.length(R.split(w,v))-1;}function distance(a,b){if(a.length===0){return b.length;}if(b.length===0){return a.length;}let i,j,x,y,z;if(a.length>b.length){z=a;a=b;b=z;}row=Array(a.length+1);for(i=0;i<=a.length;i++){row[i]=i;}for(i=1;i<=b.length;i++){x=i;for(j=1;j<=a.length;j++){if(b[i-1]===a[j-1]){y=row[j-1];}else{y=Math.min(row[j-1]+1,Math.min(x+1,row[j]+1));}row[j-1]=x;x=y;}row[a.length]=x;}return row[a.length];}const normalizeGermanChar=A=>{const B=["ä","ö","ü","ß"],C=["a","o","u","ss"],D=B.indexOf(A);if(D===-1){return A;}return C[D];},normalizeGermanWord=E=>R.join("",R.map(F=>normalizeGermanChar(F),R.split("",R.toLower(E))));function distanceGerman(a,b){return distance(normalizeGermanWord(a),normalizeGermanWord(b));}function glob(G,H){const I=count(H,"*");if(I===1){if(R.head(H)==="*"){return G.endsWith(R.tail(H));}else if(R.last(H)==="*"){return G.startsWith(R.init(H));}}else if(I===2&&R.head(H)==="*"&&R.last(H)==="*"){H=R.init(R.tail(H));const J=G.indexOf(H);return J>0&&J+H.length<G.length;}return G.includes(H);}function kebabCase(K,L=!1){return R.toLower(R.join("-",words(K,L)));}function replaceLast(M,N=""){return`${R.init(M)}${N}`;}function replaceFirst(O,P=""){return`${P}${R.tail(O)}`;}function reverse(Q){return Q.split("").reverse().join("");}const shuffleArr=S=>{let T=S.length;while(T>0){const U=Math.floor(Math.random()*T);T--;const V=S[T];S[T]=S[U];S[U]=V;}return S;};function shuffle(W){return R.join("",shuffleArr(R.split("",W)));}function snakeCase(X,Y=!1){return R.toLower(R.join("_",words(X,Y)));}function stripPunctuation(Z){return R.replace(e,"",Z);}function stripTags(a1){return R.replace(/\s+/g," ",R.replace(f," ",a1)).trim();}function surround(b1,c1,d1){if(d1===void 0){d1=c1;}return`${c1}${b1}${d1}`;}function titleCase(e1,f1=!1){return R.join(" ",R.map(g1=>`${R.toUpper(R.head(g1))}${R.toLower(R.tail(g1))}`,words(e1,f1)));}function truncate(h1,i1,j1="..."){if(h1.length>i1){i1=i1-j1.length;return`${h1.substr(0,i1)}${j1}`;}return h1;}function words(k1,l1=!1){const m1=l1?d:c;return R.match(m1,k1);}function wrap(n1,o1,p1=!1){o1=o1<=0?1:o1;const q1=n1.split(""),r1=[];let s1=0;Array(n1.length).fill().map((t1,u1)=>{if(u1===s1){const v1=u1+o1;if(v1>q1.length){r1.push(n1.substr(u1));}else{const w1=n1.substr(u1,o1);if(q1[v1]===" "){r1.push(w1);s1=v1+1;}else{let x1=w1.lastIndexOf(" ");if(x1>-1){r1.push(w1.substring(0,x1));s1=x1+u1+1;}else{const y1=n1.substr(u1);x1=y1.indexOf(" ");if(x1>-1){if(p1){r1.push(y1.substring(0,x1));}s1=x1+u1+1;}else{if(p1){r1.push(y1);}s1=n1.length;}}}}}});return r1;}module.exports.between=between;module.exports.camelCase=camelCase;module.exports.capitalize=capitalize;module.exports.clean=clean;module.exports.count=count;module.exports.distance=distance;module.exports.distanceGerman=distanceGerman;module.exports.glob=glob;module.exports.kebabCase=kebabCase;module.exports.replaceFirst=replaceFirst;module.exports.replaceLast=replaceLast;module.exports.reverse=reverse;module.exports.shuffle=shuffle;module.exports.snakeCase=snakeCase;module.exports.stripPunctuation=stripPunctuation;module.exports.stripTags=stripTags;module.exports.surround=surround;module.exports.titleCase=titleCase;module.exports.truncate=truncate;module.exports.words=words;module.exports.wrap=wrap;