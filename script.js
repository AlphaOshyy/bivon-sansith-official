const enhancement=document.createElement('link');enhancement.rel='stylesheet';enhancement.href='enhancements.css';document.head.appendChild(enhancement);

const loader=document.getElementById('loader');
const cursorDot=document.querySelector('.cursor-dot');
const cursorRing=document.querySelector('.cursor-ring');

window.addEventListener('DOMContentLoaded',()=>setTimeout(()=>loader.classList.add('done'),900));
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('done'),300));
setTimeout(()=>loader.classList.add('done'),3500);

if(window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('mousemove',e=>{
    cursorDot.style.left=e.clientX+'px'; cursorDot.style.top=e.clientY+'px';
    cursorRing.style.left=e.clientX+'px'; cursorRing.style.top=e.clientY+'px';
  });
  document.querySelectorAll('a,button,.release,.visual,.btn').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursorRing.style.width='65px';cursorRing.style.height='65px';cursorRing.style.background='#ccff0015'});
    el.addEventListener('mouseleave',()=>{cursorRing.style.width='38px';cursorRing.style.height='38px';cursorRing.style.background='transparent'});
  });
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const hero=document.querySelector('.hero');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(hero && y<window.innerHeight){
    hero.querySelector('.hero-copy').style.transform=`translateY(${y*.13}px)`;
    hero.querySelector('.hero-tag').style.transform=`translateY(${y*.18}px)`;
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});

const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{
  document.body.classList.toggle('menu-open');
  if(document.body.classList.contains('menu-open')){
    document.querySelector('.nav-links').style.display='flex';
    document.querySelector('.nav-links').style.position='fixed';
    document.querySelector('.nav-links').style.inset='68px 0 auto';
    document.querySelector('.nav-links').style.padding='35px 6vw';
    document.querySelector('.nav-links').style.background='#09090b';
    document.querySelector('.nav-links').style.flexDirection='column';
    document.querySelector('.nav-links').style.fontSize='18px';
  }else document.querySelector('.nav-links').removeAttribute('style');
});