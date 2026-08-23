/* Kranti — Landing Page Behavior
   Modal system (signup + legal pages) and scroll-reveal for the process,
   product-in-action, and stack sections. */

'use strict';

(function(){
    var overlays = document.querySelectorAll('.modal-overlay');
    document.querySelectorAll('[data-open]').forEach(function(el){
      el.addEventListener('click', function(e){
        e.preventDefault();
        var id = 'modal-' + el.getAttribute('data-open');
        var target = document.getElementById(id);
        if(target){ target.classList.add('open'); document.body.style.overflow = 'hidden'; }
      });
    });
    function closeAll(){
      overlays.forEach(function(o){ o.classList.remove('open'); });
      document.body.style.overflow = '';
    }
    document.querySelectorAll('[data-close]').forEach(function(el){
      el.addEventListener('click', closeAll);
    });
    overlays.forEach(function(o){
      o.addEventListener('click', function(e){ if(e.target === o){ closeAll(); } });
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeAll(); } });
  })();

  (function(){
    var targets = document.querySelectorAll('.reveal');
    if(!targets.length) return;
    if(!('IntersectionObserver' in window)){
      targets.forEach(function(el){ el.classList.add('in-view'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function(el){ observer.observe(el); });
  })();
