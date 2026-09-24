/* Complemento v53 — abertura devocional da Hora Santa.
   Mantém explícita a distinção entre prática devocional e rito litúrgico. */
(function(){
  if(typeof guideSteps==='undefined' || !Array.isArray(guideSteps)) return;
  const opening=[
    {kind:'read',title:'Persignação',time:'1 min',body:'<div class="guide-prayer"><b>Pelo sinal da Santa Cruz</b><br>Pelo sinal da Santa Cruz, livrai-nos, Deus, nosso Senhor, dos nossos inimigos. Em nome do Pai, do Filho e do Espírito Santo. Amém.</div>'},
    {kind:'read',title:'Oração inicial',time:'1 min',body:'Irmãos e irmãs, estamos reunidos diante de Jesus Cristo presente no Santíssimo Sacramento. Recolhamos o coração e apresentemos ao Senhor nossas famílias, necessidades, agradecimentos e intenções.'},
    {kind:'read',title:'Vinde, Espírito Santo',time:'2 min',body:'<div class="guide-prayer"><b>Vinde, Espírito Santo</b><br>Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra.<br><br><b>Oremos.</b> Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo, Senhor nosso. Amém.</div>'},
    {kind:'read',title:'Ato de adoração',time:'2 min',body:'<div class="guide-prayer"><b>Ato de adoração</b><br>Senhor Jesus, presente na Santíssima Eucaristia, nós vos adoramos. Reconhecemos em vós nosso Senhor e Salvador. Recebei nossa fé, nossa esperança e nosso amor; ensinai-nos a permanecer em vossa presença com coração humilde e agradecido.</div>'}
  ];
  const acolhida=guideSteps.findIndex(s=>s && s.title==='Acolhida');
  if(acolhida>=0) guideSteps.splice(acolhida,1,...opening);
  guideIndex=0;
  if(typeof renderGuide==='function') renderGuide();
})();
