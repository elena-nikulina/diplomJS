(()=>{"use strict";(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const l=t.getAttribute("href").substr(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelectorAll(".callback-btn"),c=e.querySelector(".modal-close");for(let c of l)c.classList.contains("fancyboxModal")&&c.classList.remove("fancyboxModal"),c.addEventListener("click",(()=>{console.log("click"),e.style.display="block",t.style.display="block"}));c.addEventListener("click",(()=>{console.log("none1"),e.style.display="none",t.style.display="none"})),t.addEventListener("click",(()=>{e.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.querySelector(".top-slider"),t=e.querySelectorAll(".item"),l=e.querySelectorAll(".table");let c,o=0;const s=(e,t,l)=>{e[t].classList.remove(l)},n=(e,t,l)=>{e[t].classList.add(l)},a=()=>{s(t,o,"item-active"),s(l,o,"active"),o++,o>=t.length&&(o=0),n(t,o,"item-active"),n(l,o,"active")};((e=1500)=>{c=setInterval(a,e)})(3e3)})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");t.forEach(((e,c)=>{e.addEventListener("click",(()=>{t.forEach(((e,t)=>{e.classList.contains("active")&&(e.classList.remove("active"),l[t].style.display="none")})),e.classList.add("active"),l[c].style.display="block"}))}))})()})();