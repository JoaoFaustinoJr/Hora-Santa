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

const guideSteps=[
{kind:'rubric',title:'Antes de começar',time:'Preparação',body:'Confirme com a paróquia quem fará a exposição e a reposição. Se o Santíssimo já estiver exposto, inicie o roteiro em clima de silêncio. A condutora não realiza a bênção eucarística.'},
{kind:'read',title:'Acolhida',time:'2 min',body:'Irmãos e irmãs, estamos reunidos diante de Jesus Cristo presente no Santíssimo Sacramento. Em silêncio, coloquemos diante dele nossa vida, nossas famílias, nossas alegrias, necessidades e intenções.'},
{kind:'rubric',title:'Canto de adoração',time:'4 min',body:'Escolha um canto apropriado de adoração. Ao terminar, não tenha pressa em falar: deixe a assembleia recolher-se.'},
{kind:'silence',title:'Silêncio',time:'5 min',body:'Não é necessário dizer nada. Permaneçamos diante de Jesus presente no Santíssimo Sacramento.',seconds:300},
{kind:'read',title:'Palavra de Deus',time:'6 min',body:'Leitura sugerida: João 15,1-11. Leia a passagem diretamente da Bíblia. Ao final, permaneça alguns instantes em silêncio antes da meditação.'},
{kind:'read',title:'Meditação',time:'6 min',body:'Jesus nos chama a permanecer nele. A adoração não é preencher o tempo com palavras, mas consentir que sua presença alcance nossa vida. Apresentemos ao Senhor aquilo que precisa permanecer unido a Ele e aquilo que precisa ser transformado.'},
{kind:'silence',title:'Silêncio de contemplação',time:'7 min',body:'Permaneçamos em silêncio, acolhendo a Palavra e deixando que ela desça ao coração.',seconds:420},
{kind:'read',title:'Louvor e ação de graças',time:'5 min',body:'Senhor Jesus, nós vos adoramos e vos damos graças. Obrigado pelo dom da Eucaristia, pela Igreja, por nossas famílias e por todas as graças recebidas. Recebei nosso louvor e nossa gratidão.'},
{kind:'read',title:'Intercessões',time:'8 min',body:'Apresentemos ao Senhor a Igreja, o Papa, os bispos, sacerdotes e diáconos; as vocações; nossas famílias; os enfermos; os que sofrem; os falecidos; e as intenções que cada pessoa traz no coração. Após cada intenção, pode-se responder: Senhor, escutai a nossa prece.'},
{kind:'rubric',title:'Devoção opcional',time:'10 min',body:'Se for oportuno, reze o Santo Rosário ou outra devoção aprovada. Diante do Santíssimo, mantenha sempre o caráter cristocêntrico da oração.'},
{kind:'silence',title:'Silêncio prolongado',time:'7 min',body:'Agora, apenas permaneçamos com o Senhor.',seconds:420},
{kind:'read',title:'Conclusão',time:'5 min',body:'Senhor Jesus, agradecemos por este tempo em vossa presença. Guardai em nós aquilo que hoje recebemos e fazei de nossa vida uma resposta de amor. Permanecei conosco e conduzi-nos à comunhão cada vez mais profunda convosco.'},
{kind:'rubric',title:'Encerramento',time:'Conforme o ministro',body:'Se houver sacerdote ou diácono, siga-se o rito próprio para a bênção eucarística. Se a condução for por leigo, não se simule nem substitua a bênção sacramental. A reposição somente deve ser feita por quem esteja autorizado segundo as normas da Igreja e da diocese.'}
];
let guideIndex=0,timerHandle=null,remaining=0;
function renderGuide(){
 const s=guideSteps[guideIndex],stage=document.querySelector('#guideStage'),progress=document.querySelector('#guideProgress');
 progress.innerHTML=guideSteps.map((_,i)=>'<i class="'+(i<=guideIndex?'done':'')+'"></i>').join('');
 const label=s.kind==='rubric'?'ORIENTAÇÃO À CONDUTORA':s.kind==='silence'?'SILÊNCIO':'TEXTO PARA LER';
 stage.innerHTML='<article class="guide-card '+s.kind+'"><div class="stage-head"><em>'+label+'</em><span>'+s.time+'</span></div><h3>'+s.title+'</h3><p>'+s.body+'</p>'+(s.kind==='silence'?'<div id="timer" class="timer">'+String(Math.floor(s.seconds/60)).padStart(2,'0')+':00</div><button class="silence-btn" id="startSilence">Iniciar silêncio</button>':'')+'</article>';
 document.querySelector('#guidePrev').disabled=guideIndex===0;
 document.querySelector('#guideNext').textContent=guideIndex===guideSteps.length-1?'Concluir':'Próximo ›';
 if(s.kind==='silence') document.querySelector('#startSilence').onclick=startGuideTimer;
}
function startGuideTimer(e){
 if(timerHandle){clearInterval(timerHandle);timerHandle=null;e.target.textContent='Continuar silêncio';return}
 const s=guideSteps[guideIndex]; if(!remaining) remaining=s.seconds;e.target.textContent='Pausar';
 timerHandle=setInterval(()=>{remaining=Math.max(0,remaining-1);const t=document.querySelector('#timer');if(t)t.textContent=String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0');if(!remaining){clearInterval(timerHandle);timerHandle=null;e.target.textContent='Silêncio concluído';}},1000);
}
document.querySelector('#guidePrev').onclick=()=>{if(guideIndex){if(timerHandle)clearInterval(timerHandle);timerHandle=null;remaining=0;guideIndex--;renderGuide()}};
document.querySelector('#guideNext').onclick=()=>{if(guideIndex<guideSteps.length-1){if(timerHandle)clearInterval(timerHandle);timerHandle=null;remaining=0;guideIndex++;renderGuide()}else go('home')};
renderGuide();
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
const prayers={
spirit:{title:'Vinde, Espírito Santo',text:'Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra.'},
adoration:{title:'Ato de adoração',text:'Senhor Jesus, presente na Santíssima Eucaristia, nós vos adoramos. Reconhecemos em vós nosso Senhor e Salvador. Recebei nossa fé, nossa esperança e nosso amor; ensinai-nos a permanecer em vossa presença com coração humilde e agradecido.'},
thanks:{title:'Ação de graças',text:'Senhor Jesus, nós vos damos graças por vossa presença, por vossa Palavra, pela Igreja e por todos os dons que recebemos. Fazei que a gratidão se transforme em caridade e que levemos aos irmãos aquilo que recebemos em vossa presença.'},
family:{title:'Pelas famílias',text:'Senhor Jesus, olhai por nossas famílias. Fortalecei os esposos, protegei as crianças e os jovens, consolai os idosos e enfermos, reconciliai os que estão divididos e fazei de nossos lares lugares de fé, perdão e amor.'},
vocations:{title:'Pelas vocações',text:'Senhor da messe, suscitai vocações santas para o sacerdócio, a vida consagrada, o matrimônio e o serviço generoso na Igreja. Dai aos jovens coragem para escutar e responder ao vosso chamado.'}
};
document.querySelectorAll('[data-prayer]').forEach(b=>b.addEventListener('click',()=>{const p=prayers[b.dataset.prayer],r=document.querySelector('#prayerReader');r.innerHTML='<em>ORAÇÃO</em><h3>'+p.title+'</h3><p>'+p.text+'</p>';r.classList.remove('hidden');r.scrollIntoView({behavior:'smooth',block:'center'})}));
