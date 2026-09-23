const screens=[...document.querySelectorAll('.screen')];
function go(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
document.querySelectorAll('.back').forEach(b=>b.addEventListener('click',()=>go('home')));

const names=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const mysteryByDay=['Gloriosos','Gozosos','Dolorosos','Gloriosos','Luminosos','Dolorosos','Gozosos'];
const today=new Date(); document.querySelector('#dayMystery').textContent='Mistérios '+mysteryByDay[today.getDay()];
document.querySelector('#dayName').textContent=names[today.getDay()];
document.querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#dayMystery').textContent='Mistérios '+b.dataset.m));

const decade=document.querySelector('#decade'); let count=0;
for(let i=1;i<=10;i++){const b=document.createElement('button');b.className='bead';b.setAttribute('aria-label','Ave-Maria '+i);b.addEventListener('click',()=>{b.classList.toggle('done');count=[...decade.children].filter(x=>x.classList.contains('done')).length;document.querySelector('#countLabel').textContent=count+' de 10 Ave-Marias';});decade.appendChild(b)}

let timerHandle=null,remaining=180;const timer=document.querySelector('#timer');
document.querySelector('#startSilence').addEventListener('click',e=>{if(timerHandle){clearInterval(timerHandle);timerHandle=null;e.target.textContent='Continuar silêncio';return}e.target.textContent='Pausar silêncio';timerHandle=setInterval(()=>{remaining=Math.max(0,remaining-1);timer.textContent=String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0');if(!remaining){clearInterval(timerHandle);timerHandle=null;e.target.textContent='Silêncio concluído';}},1000)});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');