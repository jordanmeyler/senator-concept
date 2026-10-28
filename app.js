document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',function(){
  var $=function(id){return document.getElementById(id)};
  var bg=$('burger'),nav=$('nav');
  if(bg){bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)})}
  var card=$('resCard'); if(!card) return;
  var meal='dinner',time='6:30 pm';
  var party=$('party'),date=$('date');
  var dinner=['5:00 pm','5:30 pm','6:00 pm','6:30 pm','7:00 pm','7:30 pm'],brunch=['9:30 am','10:00 am','10:30 am','11:00 am','12:00 pm','1:00 pm'];
  var dd=['Friday, Oct 30','Saturday, Oct 31','Tuesday, Nov 3'],bd=['Saturday, Oct 31','Sunday, Nov 1','Saturday, Nov 7'];
  function fillTimes(){var arr=meal==='dinner'?dinner:brunch;var t=$('times');t.innerHTML='';arr.forEach(function(x,i){var b=document.createElement('button');b.type='button';b.textContent=x;if(i===3){b.className='t-on';time=x}b.addEventListener('click',function(){[].forEach.call(t.children,function(c){c.className=''});b.className='t-on';time=x});t.appendChild(b)});
    var ds=meal==='dinner'?dd:bd;date.innerHTML='';ds.forEach(function(x){var o=document.createElement('option');o.textContent=x;date.appendChild(o)})}
  [].forEach.call(document.querySelectorAll('#times button'),function(b){b.addEventListener('click',function(){[].forEach.call($('times').children,function(c){c.className=''});b.className='t-on';time=b.getAttribute('data-t')})});
  [].forEach.call(document.querySelectorAll('#mealSeg button'),function(b){b.addEventListener('click',function(){[].forEach.call($('mealSeg').children,function(c){c.className=''});b.className='seg-on';meal=b.getAttribute('data-meal');fillTimes();grp()})});
  function grp(){var big=parseInt(party.value,10)>=5;$('groupNote').classList.toggle('hide',!big);document.querySelector('.grp-only').classList.toggle('hide',!big)}
  party.addEventListener('change',grp);grp();
  function sum(){var n=party.options[party.selectedIndex].text;var s=(meal==='dinner'?'Dinner':'Brunch')+', '+date.value+' at '+time+', '+n;$('sum1').textContent=s;$('sum2').textContent=s}
  function step(n){card.className='res-card'+(n>1?' s'+n:'');['st1','st2','st3'].forEach(function(id,i){$(id).classList.toggle('on',i<n)})}
  $('toStep2').addEventListener('click',function(){sum();step(2)});
  $('resForm').addEventListener('submit',function(e){e.preventDefault();sum();step(3)});
  $('resAgain').addEventListener('click',function(){step(1)});
  $('evForm').addEventListener('submit',function(e){e.preventDefault();$('evCard').classList.add('sent')});
  var chat=$('chat'),log=$('chatLog');
  $('chatBtn').addEventListener('click',function(){chat.classList.toggle('open')});
  $('chatClose').addEventListener('click',function(){chat.classList.remove('open')});
  var A={
    hours:['What are your hours?','Dinner is Tuesday to Saturday, 5pm to 8pm. Brunch is Saturday and Sunday, 9:30am to 2pm.'],
    brunch:['Can I reserve for brunch?','Brunch reservations are for groups of 5 or more. Otherwise brunch is first-come, first-served.'],
    diet:['Do you have dietary options?','Yes. Many menu options are gluten-free, and our staff are well-versed in modifying dishes for dietary restrictions.'],
    kids:['Do you have a kids menu?','We do not have a kids menu, but our kitchen does its best to accommodate younger diners.'],
    access:['Is it wheelchair accessible?','Wheelchairs can enter and be seated at a table on the main floor. Our bathroom is downstairs and is not wheelchair accessible.'],
    events:['How do I book a private event?','Upstairs is used solely for private events. Send us the event inquiry form on this page, call 416-364-7517 or email senatorrestaurant@rogers.com.'],
    bottle:['Do you have a Bottle Shop?','Yes. Our Bottle Shop is full of unique and rare bottles, with fair pricing in the restaurant and in the shop.']
  };
  [].forEach.call(document.querySelectorAll('#chips button'),function(b){b.addEventListener('click',function(){var a=A[b.getAttribute('data-q')];
    var m=document.createElement('p');m.className='bub me';m.textContent=a[0];log.appendChild(m);
    var r=document.createElement('p');r.className='bub bot';r.textContent=a[1];log.appendChild(r);log.scrollTop=log.scrollHeight})});
});
