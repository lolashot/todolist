"use strict";(self.webpackChunkwebpacktask=self.webpackChunkwebpacktask||[]).push([[179],{426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([n.id,"body {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  box-sizing: border-box;\r\n  background: rgba(229, 229, 229, 0.2);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.topmost {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 3rem;\r\n  padding-top: 1rem;\r\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\r\n  border-radius: 3px;\r\n  width: 40%;\r\n  background: #fff;\r\n}\r\n\r\n.title {\r\n  font-size: 0.9rem;\r\n  font-weight: bold;\r\n  padding-left: 0.9rem;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  color: #545862;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\ni .head {\r\n  font-size: 0.9rem;\r\n  padding-top: 0.8rem;\r\n}\r\n\r\n.tasks {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.guide {\r\n  outline: none;\r\n  border: none;\r\n  padding: 20px 0 20px 20px;\r\n  width: 100%;\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n  color: #7a7575;\r\n}\r\n\r\n.delete {\r\n  cursor: pointer;\r\n}\r\n\r\n.delete:hover {\r\n  color: #f00;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  list-style-type: none;\r\n  padding: 20px 0 20px 20px;\r\n  margin-left: 0;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\ni {\r\n  margin-right: 1rem;\r\n  color: #827f7f;\r\n}\r\n\r\n.completed {\r\n  background: transparent;\r\n  margin: 1rem auto;\r\n  padding-top: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 0.9rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.clear-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background: rgba(229, 229, 229, 0.3);\r\n  width: 100%;\r\n}\r\n\r\n.list-input {\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  cursor: text;\r\n  font-size: 0.8rem;\r\n  color: #7a7575;\r\n}\r\n\r\n.tick {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: block;\r\n}\r\n\r\n.move {\r\n  cursor: all-scroll;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=t(n,a),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},339:(n,e,r)=>{var t=r(379),a=r.n(t),o=r(795),i=r.n(o),s=r(569),c=r.n(s),l=r(565),d=r.n(l),u=r(216),p=r.n(u),f=r(589),m=r.n(f),v=r(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const h=document.querySelector(".guide"),y=document.querySelector(".list"),b=document.querySelectorAll(".fa-ellipsis-vertical"),x=JSON.parse(localStorage.getItem("data"))||[];class k{constructor(n,e,r){this.task=n,this.done=e,this.index=r}static createEvent=()=>{const n=x.map(((n,e)=>`<li><input type="checkbox" class="tick"><input type="text" class="list-input" id="edit" value="${n.task}" >\n    <i class="fa-solid fa-ellipsis-vertical"></i><i id="${e}" class="fa-solid fa-trash-can delete"></i></li>`)).join("");y.innerHTML=n;const e=document.querySelectorAll(".delete");e.forEach(((n,e)=>{n.addEventListener("click",(()=>{k.delEvent(e)}))}));const r=document.querySelectorAll(".tick");document.querySelectorAll(".list-input").forEach(((n,e)=>{n.addEventListener("change",(()=>{x[e].task=n.value,localStorage.setItem("data",JSON.stringify(x))}))}));for(let n=0;n<b.length;n+=1)b[n].addEventListener("click",(()=>{e[n].style.display="inline",b[n].style.display="none"}));r.forEach(((n,e)=>{n.addEventListener("change",(()=>{!0===n.checked?x[e].done=!0:x[e].done=!1,localStorage.setItem("data",JSON.stringify(x))}))}))};static addList=()=>{const n=new k(h.value,!1,x.length+1);""!==h.value&&(x.push(n),localStorage.setItem("data",JSON.stringify(x)))};static delEvent=n=>{x.splice(n,1),x.forEach(((n,e)=>{n.index=e+1})),localStorage.setItem("data",JSON.stringify(x)),k.createEvent()}}const S=k,E=document.querySelector("#save");window.onload=S.createEvent(),h.addEventListener("keypress",(n=>{"Enter"===n.key&&(S.addList(),S.createEvent(),h.value="")})),E.addEventListener("click",(()=>{S.addList(),S.createEvent(),h.value=""})),document.addEventListener("click",(n=>{n.target.classList.contains("to-do")&&n.target.parentElement.classList.add("#ff0")})),document.querySelector(".completed").addEventListener("click",(()=>{const n=x.filter((n=>!0!==n.done));localStorage.setItem("data",JSON.stringify(n)),S.createEvent(),window.location.reload()}))}},n=>{n(n.s=339)}]);