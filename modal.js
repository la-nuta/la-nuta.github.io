!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}({106:function(e,t){},122:function(e,t){},2:function(e,t,n){"use strict";n(122);var r=n(4),o=n.n(r);const s={initDialog:["Hello Monster! Could you help me? I’m looking for magical Tramontania!","Get out here baby! Nobody should come to Tramontania!","But there are my friends! I should find the way. Elves have told me that magical doorpoints the way to Tramontania!","Woow! This is the magical door!!!","Get out here!!! Rrrrrr!","Let’s see who is stronger…"],winMonsterDialog:["Hey baby! What are you doing here?","I’m going to magical Tramontania!","Rrrrrr! Nobody will come to Tramontania!"],winTaskDialog:[["Hubba-Hubba! So now I may go to Tramontania?","It was a mistake, baby! Rrrrrr! You will never stop me!"],["Forget about Tramontania!","Let’s see who is stronger… May the force be with me!"]],wastedDialog:[["I told you baby! You will never stop me!"],["Just a second  and yoy will see who is stronger…"]]};class i{constructor(e,t){this.form=null,this.wrapper=e,this.name=t,this.submitBtn=null,this.phrases=this.choosePhrases(t,s),this.phraseIndex=0,this.init(o.a),this.phrasesWrapper=document.getElementById("phrasesWrapper"),this.showNewPhrase()}init(e){this.wrapper.innerHTML=e,this.form=document.querySelector('[data-id="modal"]'),this.submitBtn=this.form.querySelector('[type="submit"]'),this.form.addEventListener("click",this),this.form.addEventListener("submit",this),this.wrapper.addEventListener("keydown",this),this.submitBtn.focus()}choosePhrases(e,t){if(Array.isArray(t[e][0])){let n=i.getRandomInteger(0,t[e].length);return t[e][n]}return t[e]}showNewPhrase(){const e=this.phrases.length;this.phrasesWrapper.textContent=this.phrases[this.phraseIndex],this.phraseIndex<e?this.phraseIndex++:this.destroy()}handleEvent(e){switch(e.type){case"click":return this.onClick(e);case"submit":return this.onSubmit(e);case"keydown":return this.onKeydown(e)}}onSubmit(e){e.preventDefault(),this.showNewPhrase()}onClick(e){this.submitBtn.focus()}onKeydown(e){switch(e.key){case"ArrowRight":this.showNewPhrase();break;case"Escape":this.destroy()}}static getRandomInteger(e,t){return Math.floor(Math.random()*(t-e))+e}destroy(){let e=this.name,t=new CustomEvent("dialog-finished",{bubbles:!0,detail:e});this.form.dispatchEvent(t),this.form.removeEventListener("click",this),this.form.removeEventListener("submit",this),this.wrapper.removeEventListener("keydown",this),this.form.remove()}}n.d(t,"a",function(){return i})},30:function(e,t,n){"use strict";n.r(t);n(106);var r=n(2);let o=document.getElementById("example1"),s=document.getElementById("example2"),i=document.getElementById("example3"),a=document.getElementById("example4"),h=document.getElementById("modalWrapper1"),l=document.getElementById("modalWrapper2"),d=document.getElementById("modalWrapper3"),u=document.getElementById("modalWrapper4");function c(e,t){new r.a(e,t)}function m(){h.textContent="",l.textContent="",d.textContent="",u.textContent=""}o.addEventListener("click",function(e){m(),c(h,"initDialog")}),s.addEventListener("click",function(e){m(),c(l,"winTaskDialog")}),i.addEventListener("click",function(e){m(),c(d,"wastedDialog")}),a.addEventListener("click",function(e){m(),c(u,"winMonsterDialog")})},4:function(e,t){e.exports='<form id = "dialogWrapper"  class = "dialog-wrapper" data-id="modal">\n    <p id = "phrasesWrapper"  class = "phrases-wrapper"></p>\n    <button type="submit" class="dialog-button" tabindex="1">Next</button>\n</form>\n'}});