// Shared navigation: loaded once per page from navigation.html.
(async function loadCoreNavigation(){
 const mount=document.getElementById('core-navigation');if(!mount)return;
 const root=mount.dataset.root||'./';
 try{
  const response=await fetch(root+'navigation.html');if(!response.ok)throw new Error('Navigation HTTP '+response.status);
  mount.innerHTML=await response.text();
  mount.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href');if(href.startsWith('#'))a.setAttribute('href',root+'index.html'+href);else if(!/^(?:[a-z]+:|\/|\/\/)/i.test(href))a.setAttribute('href',root+href)});
  const menu=mount.querySelector('.menu-toggle'),nav=mount.querySelector('.nav-links'),host=mount.querySelector('.mega-host'),trigger=mount.querySelector('.mega-trigger'),panel=mount.querySelector('.mega-panel');
  const desktop=()=>window.matchMedia('(min-width:1201px)').matches;
  const setMega=open=>{panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open))};
  const closeMobile=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';if(!open)setMega(false)});
  // Desktop: hover and keyboard focus. Touch/mobile: click to toggle.
  host.addEventListener('pointerenter',e=>{if(desktop()&&e.pointerType==='mouse')setMega(true)});
  host.addEventListener('pointerleave',e=>{if(desktop()&&e.pointerType==='mouse')setMega(false)});
  host.addEventListener('focusin',()=>{if(desktop())setMega(true)});
  host.addEventListener('focusout',e=>{if(!host.contains(e.relatedTarget))setMega(false)});
  trigger.addEventListener('click',e=>{e.stopPropagation();setMega(panel.hidden)});
  document.addEventListener('click',e=>{if(!host.contains(e.target))setMega(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){const wasOpen=!panel.hidden;setMega(false);if(wasOpen)trigger.focus();else closeMobile()}});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{setMega(false);closeMobile()}));
  window.addEventListener('resize',()=>{setMega(false);closeMobile()});
 }catch(error){console.error('Unable to load CORE navigation:',error);mount.innerHTML='<div class="wrap" style="padding:20px"><a href="'+root+'index.html">CORE by fibodo — Home</a></div>'}
})();
