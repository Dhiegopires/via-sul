// Preencha as duas linhas abaixo e o site passa a buscar, ao vivo, direto do
// Google: nota, contagem de avaliações, até 5 avaliações reais (texto +
// nome) pra seção "Quem já foi, conta", e o status aberto/fechado
// considerando feriado e horário especial (o que o Google souber, pelo que
// estiver configurado no Google Business Profile). Deixando em branco, o
// site usa o último valor conhecido salvo em assets/data/google-rating.json
// e o cálculo de horário fixo (não quebra, só não sabe de feriado).
//
// Como conseguir os dois valores:
//   1. apiKey: Google Cloud Console > APIs e Serviços > Credenciais > Criar
//      chave de API. Depois ative "Places API (New)" pro projeto.
//      OBRIGATÓRIO: em "Restrições do aplicativo", escolha "Sites" e cadastre
//      https://via-sul.com/* (e http://localhost:8781/* se quiser testar
//      local). Isso impede que outro site use sua chave e gaste sua cota —
//      é a mesma proteção que qualquer mapa do Google incorporado usa.
//   2. placeId: https://developers.google.com/maps/documentation/places/web-service/place-id-finder
//      busque "Choperia Via Sul" + o endereço, copie o Place ID que aparecer.
window.GOOGLE_PLACES_CONFIG = {
  apiKey: '',
  placeId: '',
};
