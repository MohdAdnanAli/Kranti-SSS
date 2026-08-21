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

  (function(){
    var rowA = [
      { name:'AWS', role:'Cloud & storage', sw:'#FF9900' },
      { name:'PostgreSQL', role:'Primary database', sw:'#336791' },
      { name:'Redis', role:'OTP & link expiry', sw:'#DC382D' },
      { name:'NestJS', role:'Backend engine', sw:'#E0234E' },
      { name:'Next.js', role:'Seller dashboard', sw:'#111111' },
      { name:'Docker', role:'Deployment', sw:'#2496ED' },
      { name:'Prisma', role:'Data layer', sw:'#16A394' }
    ];
    var rowB = [
      { name:'Razorpay', role:'Subscription billing', sw:'#0C4B93' },
      { name:'MSG91', role:'DLT-verified OTP SMS', sw:'#00A99D' },
      { name:'Amazon SES', role:'Receipt delivery', sw:'#E8830A' },
      { name:'Google Cloud Vision', role:'Invoice OCR', sw:'#4285F4' },
      { name:'Datadog', role:'Uptime monitoring', sw:'#632CA6' },
      { name:'GitHub Actions', role:'Deploy pipeline', sw:'#24292F' },
      { name:'bcrypt + JWT', role:'Account security', sw:'#A32638' }
    ];
    function chip(item){
      var el = document.createElement('span');
      el.className = 'partner-chip';
      el.innerHTML =
        '<span class="swatch" style="--sw:' + item.sw + '"></span>' +
        '<span class="pc-text"><span class="pc-name">' + item.name + '</span>' +
        '<span class="pc-role">' + item.role + '</span></span>';
      return el;
    }
    function fill(trackId, items){
      var track = document.getElementById(trackId);
      if(!track) return;
      var doubled = items.concat(items);
      doubled.forEach(function(item){ track.appendChild(chip(item)); });
    }
    fill('mq-a', rowA);
    fill('mq-b', rowB);
  })();
