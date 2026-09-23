const screens=[...document.querySelectorAll('.screen')];
function go(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
document.querySelectorAll('.back').forEach(b=>b.addEventListener('click',()=>go('home')));

const names=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const mysteryByDay=['Gloriosos','Gozosos','Dolorosos','Gloriosos','Luminosos','Dolorosos','Gozosos'];
const rosaryMysteries={
Gozosos:[
['A Anunciação do Senhor','Lc 1,26-38','Contemplemos o sim de Santa Maria, que acolhe a Palavra de Deus e se entrega à sua vontade. Peçamos a graça de responder ao Senhor com fé, humildade e disponibilidade.'],
['A Visitação de Santa Maria a Isabel','Lc 1,39-56','Santa Maria leva Jesus consigo e sua presença se torna serviço e alegria. Contemplemos uma fé que não se fecha em si mesma, mas se põe a caminho para servir.'],
['O Nascimento de Jesus','Lc 2,1-20','Em Belém, Deus se aproxima na pobreza e na simplicidade. Contemplemos o Menino Jesus e peçamos um coração capaz de reconhecer a grandeza de Deus nas coisas pequenas.'],
['A Apresentação de Jesus no Templo','Lc 2,22-35','Santa Maria e São José apresentam Jesus ao Pai. Contemplemos a vida recebida como dom e aprendamos a oferecer ao Senhor tudo o que somos e temos.'],
['O encontro do Menino Jesus no Templo','Lc 2,41-52','Depois da procura angustiada, Santa Maria e São José encontram Jesus na casa do Pai. Peçamos perseverança para buscar Cristo e sabedoria para guardar sua Palavra no coração.']],
Luminosos:[
['O Batismo de Jesus no Jordão','Mt 3,13-17','Contemplemos Jesus no Jordão, revelado como Filho amado do Pai. Recordemos a graça do nosso Batismo e o chamado a viver como filhos de Deus.'],
['Jesus nas Bodas de Caná','Jo 2,1-11','Santa Maria percebe a necessidade e conduz os serventes a Jesus: “Fazei o que Ele vos disser”. Contemplemos a confiança que escuta Cristo e se deixa transformar por Ele.'],
['O anúncio do Reino e o convite à conversão','Mc 1,14-15','Jesus anuncia que o Reino está próximo e chama à conversão. Coloquemos diante dele aquilo que precisa mudar em nossa vida para acolher mais plenamente o Evangelho.'],
['A Transfiguração de Jesus','Mt 17,1-8','No monte, os discípulos contemplam por um instante a glória de Cristo. Escutemos o Filho amado e peçamos fidelidade também quando o caminho passar pela cruz.'],
['A instituição da Eucaristia','Mt 26,26-29','Contemplemos Jesus que se entrega e permanece conosco na Eucaristia. Diante do Santíssimo Sacramento, adoremos com gratidão o Senhor que nos amou até o fim.']],
Dolorosos:[
['A agonia de Jesus no Horto','Mt 26,36-46','Contemplemos Jesus em oração no Getsêmani. Em sua angústia, Ele se entrega à vontade do Pai. Confiemos ao Senhor nossos medos e aprendamos com Cristo a permanecer fiéis.'],
['A flagelação de Jesus','Jo 19,1-3','Contemplemos Cristo ferido e humilhado. Apresentemos-lhe o sofrimento humano e peçamos um coração que reconheça, respeite e defenda a dignidade de cada pessoa.'],
['A coroação de espinhos','Mt 27,27-31','O verdadeiro Rei é ridicularizado e coroado de espinhos. Contemplemos a mansidão de Cristo e peçamos libertação do orgulho, da vaidade e do desejo de dominar.'],
['Jesus carrega a cruz','Mc 15,21-22','No caminho do Calvário, Jesus assume a cruz. Peçamos força para carregar com amor nossas responsabilidades e sensibilidade para ajudar quem sofre ao nosso lado.'],
['A crucifixão e morte de Jesus','Lc 23,33-46','Aos pés da cruz, contemplemos o amor levado até o fim. Entreguemos a Cristo nossa vida e aprendamos com Ele o perdão, a confiança no Pai e o dom de nós mesmos.']],
Gloriosos:[
['A Ressurreição de Jesus','Lc 24,1-8','Cristo ressuscitou. Contemplemos a vitória da vida sobre a morte e peçamos uma esperança que nenhuma escuridão possa apagar.'],
['A Ascensão de Jesus','At 1,6-11','Jesus volta ao Pai e confia aos discípulos a missão. Contemplemos nosso destino junto de Deus e a responsabilidade de testemunhar o Evangelho no mundo.'],
['A vinda do Espírito Santo','At 2,1-13','O Espírito Santo desce sobre a Igreja reunida em oração. Peçamos seus dons para viver a fé com coragem, unidade e caridade.'],
['A Assunção de Santa Maria','Ap 12,1; cf. CIC 966','Contemplemos em Santa Maria elevada à glória a esperança destinada aos que pertencem a Cristo. Peçamos que ela nos ajude a caminhar sempre para seu Filho.'],
['A coroação de Santa Maria na glória','Ap 12,1; cf. CIC 966–972','Contemplemos Santa Maria junto de Cristo na glória, mãe e discípula fiel. Confiemos à sua intercessão a Igreja, nossas famílias e nossa perseverança no caminho de Jesus.']]
};
let selectedMystery=mysteryByDay[new Date().getDay()],mysteryIndex=0;
const today=new Date();document.querySelector('#dayName').textContent=names[today.getDay()];
function bibleLink(ref){return 'https://www.bibliacatolica.com.br/biblia-ave-maria/busca/?q='+encodeURIComponent(ref.replace(/;.*$/,''))}
function renderMystery(){
 document.querySelector('#dayMystery').textContent='Mistérios '+selectedMystery;
 const m=rosaryMysteries[selectedMystery][mysteryIndex];
 document.querySelector('#mysteryMeditation').innerHTML='<article class="mystery-card"><div class="mystery-number">'+(mysteryIndex+1)+'º MISTÉRIO</div><h3>'+m[0]+'</h3><a class="scripture-ref scripture-link" href="'+bibleLink(m[1])+'" target="_blank" rel="noopener">'+m[1]+' · Ler o texto bíblico ↗</a><p>'+m[2]+'</p><div class="decade-order">1 Pai-Nosso · 10 Ave-Marias · 1 Glória ao Pai · Jaculatória</div><small>Meditação editorial baseada no mistério e na referência bíblica indicada.</small></article>';
 document.querySelector('#mysteryPrev').disabled=mysteryIndex===0;document.querySelector('#mysteryNext').disabled=mysteryIndex===4;
}
document.querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>{selectedMystery=b.dataset.m;mysteryIndex=0;resetBeads();renderMystery()}));
document.querySelector('#mysteryPrev').onclick=()=>{if(mysteryIndex){mysteryIndex--;resetBeads();renderMystery()}};
document.querySelector('#mysteryNext').onclick=()=>{if(mysteryIndex<4){mysteryIndex++;resetBeads();renderMystery()}};
const finishRosary=document.querySelector('#finishRosary'),rosaryClosing=document.querySelector('#rosaryClosing');
function updateRosaryFinish(){if(mysteryIndex===4&&count===10)finishRosary.classList.remove('hidden');else finishRosary.classList.add('hidden')}
finishRosary.onclick=()=>{rosaryClosing.classList.remove('hidden');finishRosary.classList.add('hidden');rosaryClosing.scrollIntoView({behavior:'smooth',block:'start'})};
document.querySelector('#closeRosary').onclick=()=>{rosaryClosing.classList.add('hidden');document.querySelector('#rosaryOpening').classList.remove('hidden');document.querySelector('#rosaryContemplation').classList.add('hidden');mysteryIndex=0;resetBeads();renderMystery();go('home')};
const decade=document.querySelector('#decade');let count=0;
function resetBeads(){count=0;[...decade.children].forEach(x=>x.classList.remove('done'));document.querySelector('#countLabel').textContent='Toque nas contas conforme reza.';if(typeof updateRosaryFinish==='function')updateRosaryFinish()}
for(let i=1;i<=10;i++){const b=document.createElement('button');b.className='bead';b.setAttribute('aria-label','Ave-Maria '+i);b.addEventListener('click',()=>{b.classList.toggle('done');count=[...decade.children].filter(x=>x.classList.contains('done')).length;document.querySelector('#countLabel').textContent=count+' de 10 Ave-Marias';updateRosaryFinish();});decade.appendChild(b)}
renderMystery();
document.querySelector('#beginMysteries').onclick=()=>{document.querySelector('#rosaryOpening').classList.add('hidden');document.querySelector('#rosaryContemplation').classList.remove('hidden');document.querySelector('#mysteryMeditation').scrollIntoView({behavior:'smooth',block:'start'})};

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
rosaryInitial:{title:'Orações iniciais do Santo Rosário',text:'<b>Pai-Nosso</b><br>Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.<br><br><b>Ave-Maria — rezar 3 vezes</b><br>Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.<br><br><b>Glória ao Pai</b><br>Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.'},
spirit:{title:'Vinde, Espírito Santo',text:'Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra.'},
adoration:{title:'Ato de adoração',text:'Senhor Jesus, presente na Santíssima Eucaristia, nós vos adoramos. Reconhecemos em vós nosso Senhor e Salvador. Recebei nossa fé, nossa esperança e nosso amor; ensinai-nos a permanecer em vossa presença com coração humilde e agradecido.'},
thanks:{title:'Ação de graças',text:'Senhor Jesus, nós vos damos graças por vossa presença, por vossa Palavra, pela Igreja e por todos os dons que recebemos. Fazei que a gratidão se transforme em caridade e que levemos aos irmãos aquilo que recebemos em vossa presença.'},
family:{title:'Pelas famílias',text:'Senhor Jesus, olhai por nossas famílias. Fortalecei os esposos, protegei as crianças e os jovens, consolai os idosos e enfermos, reconciliai os que estão divididos e fazei de nossos lares lugares de fé, perdão e amor.'},
vocations:{title:'Pelas vocações',text:'Senhor da messe, suscitai vocações santas para o sacerdócio, a vida consagrada, o matrimônio e o serviço generoso na Igreja. Dai aos jovens coragem para escutar e responder ao vosso chamado.'}
};
document.querySelectorAll('[data-prayer]').forEach(b=>b.addEventListener('click',()=>{const p=prayers[b.dataset.prayer];const r=b.dataset.prayer==='rosaryInitial'?document.querySelector('#rosaryInitialReader'):document.querySelector('#prayerReader');if(!p||!r)return;r.innerHTML='<em>ORAÇÃO</em><h3>'+p.title+'</h3><p>'+p.text+'</p>';r.classList.remove('hidden');r.scrollIntoView({behavior:'smooth',block:'center'})}));

document.querySelectorAll('.scripture[data-ref]').forEach(b=>{b.addEventListener('click',()=>window.open(bibleLink(b.dataset.ref),'_blank','noopener'))});

function nextThursday(from=new Date()){const d=new Date(from);d.setHours(0,0,0,0);let add=(4-d.getDay()+7)%7;if(add===0&&from.getHours()>=23)add=7;d.setDate(d.getDate()+add);return d}
function fmtDate(d){return d.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long'})}
function isoLocal(d){const p=n=>String(n).padStart(2,'0');return d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+'T'+p(d.getHours())+p(d.getMinutes())+'00'}
function renderAdorationCalendar(){const now=new Date(),box=document.querySelector('#adorationCalendar'),status=document.querySelector('#thursdayStatus');if(!box||!status)return;const isThu=now.getDay()===4,next=nextThursday(now);status.innerHTML=isThu?'<strong>✦ Hoje é dia de Adoração</strong><span>Quinta-feira · prepare o coração para a Hora Santa.</span>':'<strong>Próxima Adoração</strong><span>'+fmtDate(next)+'</span>';let d=next,rows='';for(let i=0;i<6;i++){rows+='<div><b>'+d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})+'</b><span>'+d.toLocaleDateString('pt-BR',{weekday:'long'})+'</span></div>';d=new Date(d);d.setDate(d.getDate()+7)}box.innerHTML=rows}
renderAdorationCalendar();
document.querySelector('#calendarAdd').onclick=()=>{const d=nextThursday(new Date());d.setHours(19,0,0,0);const end=new Date(d);end.setHours(20,0,0,0);const url='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('Adoração Eucarística')+'&dates='+isoLocal(d)+'/'+isoLocal(end)+'&recur='+encodeURIComponent('RRULE:FREQ=WEEKLY;BYDAY=TH')+'&details='+encodeURIComponent('Hora Santa — Adoração Eucarística às quintas-feiras.');window.open(url,'_blank','noopener')};
document.querySelector('#notifyAdoration').onclick=async e=>{if(!('Notification'in window)){e.target.textContent='Use o alerta do calendário';return}const p=await Notification.requestPermission();if(p==='granted'){localStorage.setItem('adorationAlerts','on');e.target.textContent='Alertas autorizados ✓';new Notification('Hora Santa',{body:'Alertas autorizados. Para lembretes semanais com o app fechado, use também o calendário.'})}else e.target.textContent='Permissão de alerta não concedida'};
