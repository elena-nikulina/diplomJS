(()=>{"use strict";(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let l of e)l.addEventListener("click",(function(e){e.preventDefault();const o=l.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelectorAll(".callback-btn"),t=e.querySelector(".modal-close");console.log(t);for(let t of o)t.classList.contains("fancyboxModal")&&t.classList.remove("fancyboxModal"),t.addEventListener("click",(()=>{console.log("click"),e.style.display="block",l.style.display="block"}));t.addEventListener("click",(()=>{console.log("none1"),e.style.display="none",l.style.display="none"})),l.addEventListener("click",(()=>{e.style.display="none",l.style.display="none"}))})()})();