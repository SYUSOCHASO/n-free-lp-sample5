(function(){
  var d=document; d.documentElement.classList.add('js');
  var b=d.querySelector('.hd__burger'), nav=d.getElementById('spnav');
  if(b&&nav){
    b.addEventListener('click',function(){
      var o=b.getAttribute('aria-expanded')==='true';
      b.setAttribute('aria-expanded',String(!o));
      b.setAttribute('aria-label',o?'メニューを開く':'メニューを閉じる');
      nav.classList.toggle('open',!o);
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){b.setAttribute('aria-expanded','false');nav.classList.remove('open');});});
  }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{rootMargin:'0px 0px -10% 0px'});
  d.querySelectorAll('.sh,.fade,.statement .ln').forEach(function(el){io.observe(el);});
  d.querySelectorAll('.exp__toggle').forEach(function(t){
    t.addEventListener('click',function(){
      var el=d.getElementById(t.getAttribute('aria-controls'));
      var o=t.getAttribute('aria-expanded')==='true';
      t.setAttribute('aria-expanded',String(!o)); el.hidden=o;
    });
  });
})();
