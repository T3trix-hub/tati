const b=document.querySelector('.burger'),n=document.querySelector('nav');
if(b){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
(()=>{
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const sel='main section:not(.hero) h2, main section:not(.hero) .lead, .tile, .step, .quote, .photo, .item, .note, .map, .cards>div, .stats>div, details';
  const els=[...document.querySelectorAll(sel)].filter(e=>!e.closest('.hero'));
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.1,rootMargin:'0px 0px -6% 0px'});
  els.forEach(e=>{e.classList.add('reveal');const s=[...e.parentElement.children].filter(c=>els.includes(c));const i=s.indexOf(e);if(i>0)e.style.transitionDelay=Math.min(i,4)*.1+'s';io.observe(e)});
})();
