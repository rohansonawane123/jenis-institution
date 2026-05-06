// Navbar scroll shadow
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',scrollY>60);
  const b=document.getElementById('btt');
  if(b)b.classList.toggle('vis',scrollY>400);
  revealCheck();
});

// Hamburger
function toggleMenu(){
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mmenu').classList.toggle('open');
}
function cm(){
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mmenu').classList.remove('open');
}

// Reveal on scroll
function revealCheck(){
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-80)el.classList.add('in');
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  revealCheck();
  // Mark active nav link based on current page
  const path=location.pathname.split('/').pop().replace('.html','');
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(a=>{
    const href=a.getAttribute('href').replace('.html','').replace('./','');
    if(href===path||(path===''&&href==='index'))a.classList.add('active');
  });
});

// Contact form
function handleForm(e){
  e.preventDefault();
  const f=document.getElementById('cform');
  const s=document.getElementById('fsuccess');
  const b=f.querySelector('.form-submit');
  b.textContent='Sending…';b.disabled=true;
  fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
    .then(()=>{f.style.display='none';s.style.display='block'})
    .catch(()=>{f.style.display='none';s.style.display='block'});
}
