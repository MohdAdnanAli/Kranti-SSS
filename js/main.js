/* Kranti — Landing Page Behavior
   Modal system (signup + legal pages) and, where present, partner marquee. */

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
