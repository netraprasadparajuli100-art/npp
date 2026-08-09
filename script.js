const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),500));

const navbar=document.getElementById("navbar");
const topButton=document.getElementById("topButton");
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",window.scrollY>40);
  topButton.classList.toggle("show",window.scrollY>500);
});

document.getElementById("topButton").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".section,.skill-card,.work-card,.edu-card,.timeline-item").forEach(el=>{
  el.classList.add("reveal");
  observer.observe(el);
});

document.getElementById("themeToggle").addEventListener("click",()=>{
  document.body.classList.toggle("light-alt");
});

document.getElementById("year").textContent=new Date().getFullYear();
