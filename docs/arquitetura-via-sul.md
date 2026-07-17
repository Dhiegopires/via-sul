# Via Sul — Arquitetura do Site (Steps 2.1–2.3 condensados)

> Adaptado da metodologia VellumWire para o porte real do projeto: negócio local de 1 endereço,
> sem funil B2B, decisão de compra em minutos. Sitemap enxuto (2 páginas) em vez do template de
> 6 páginas — "sitemap apertado de 2 páginas reais bate sitemap inflado de 6 ocas".
> Fonte dos dados: `.claude/via-sul-brief-site.md` (GBP real + pesquisa) + pesquisa de mercado
> rodada em 2026-07-07 (ver Seção 0 abaixo — isso preenche o que a v1 deste documento tinha
> deixado como `[DATA NEEDED: concorrente]`, correção de retrabalho registrada aqui, não escondida).

---

## 0. Pesquisa de mercado real (preenchendo o gap da v1)

A v1 deste documento pulou a pesquisa de concorrente do Step 1.3 assumindo dado ausente. Isso
estava errado: existe concorrente real e localizável. Rodado via busca em 2026-07-07.

**Concorrente direto 1 — O Portão Bar** (boteco tradicional, 20+ anos, mesma região do Terminal
Pinheirinho/Portão, perfil de negócio comparável ao Via Sul):
- Site real existe: `baroportao.wixsite.com` — template Wix genérico, ar de "início dos anos 2010".
- Estrutura observada: carrossel de fotos → CTA de aniversário → destaques (música ao vivo,
  happy hour, pratos) → história do local → horário/endereço → telefone.
- **CTA principal está morto**: o texto diz "Faça sua reserva e venha se divertir" mas não existe
  link ou botão de reserva nenhum. Cadê o clique? Não tem.
- **Zero trust signal**: nenhuma nota, nenhuma avaliação, nenhum selo de confiança em lugar nenhum
  do site.
- **Sem cardápio, sem preço, sem pedido online.**
- **Oportunidade estrutural direta para o Via Sul:** exatamente os 3 pontos que esse concorrente
  real erra (CTA morto, zero prova social, zero cardápio) são os 3 pontos que a arquitetura da
  Seção 3 abaixo trava como obrigatórios. Não é escolha estética, é diferença competitiva
  documentada contra um concorrente real da mesma esquina.

**Concorrentes indiretos (achados via busca, sem site próprio, só perfil Google/diretório):**
Bar e Mercearia Capão Raso (nota 4,3), Assados Almeida Capão Raso (nota 4,4), Monde Hop. Nenhum
tem site. Isso é, por si só, dado relevante: **nenhum concorrente direto no raio imediato do
Terminal Pinheirinho tem um site profissional de verdade.** A régua de comparação real não é "o
site mais bonito do bairro", é "o único negócio da região com presença digital que não parece
abandonada ou morta em 2013".

**Dado real sobre o próprio Via Sul — primeira passada (via agregador de reviews, 2026-07-07):**
- Nota reportada: 4,0 estrelas. **Essa fonte era secundária e estava errada** (ver correção
  abaixo) — registrado aqui pra deixar claro o que foi checado e o que não foi, não apagado.
- Prato citado como carro-chefe adicional: **costela assada**. **Essa informação também estava
  errada.** Veio de um agregador de terceiro que descreve o estabelecimento, nunca foi conferida
  contra o cardápio real. O cliente confirmou que o cardápio oficial (usado no próprio Google
  Business Profile) **não tem costela assada em lugar nenhum**. Removido do site inteiro. Fica
  registrado aqui como lição: fonte secundária não confere, cardápio oficial do cliente sim.

**Correção — dados reais direto do Google Maps (renderizado via Chrome headless, 2026-07-07,
mesma URL de busca que o cliente mandou: `Choperia Via Sul`, Capão Raso, Curitiba):**
- **Nota real: 3,9 estrelas** (não 4,0 — o agregador da primeira passada estava desatualizado ou
  errado). Contagem exata de avaliações não aparece na visualização pública sem login do Maps;
  precisa da Places API com credencial pra pegar esse número, ou conferir manualmente no painel
  do Google Business Profile.
- **Endereço confirmado, batendo exatamente com o que já estava no site: Av. Winston Churchill,
  1734 - Lj 09, Capão Raso, Curitiba - PR, 81130-000.** O número 1734 (que na v1 deste doc estava
  marcado como "provável, fonte secundária") está correto — confirmado contra o Google Maps
  diretamente, não mais `[DATA NEEDED]`.
- Horário confirmado: aberto, fecha 22h (bate com o brief).
- Telefone confirmado: (41) 3026-4252 (bate com o brief).
- **Achado novo, não estava em nenhum documento anterior: o Google Business Profile já lista um
  site — `via-sul.com`.** Esse domínio existe de verdade (hospedado na HostGator), mas hoje
  retorna erro 403 (Acesso Negado, problema de permissão de arquivo — o site não está
  funcionando, não é só "não publicado ainda"). **O domínio que este projeto vinha usando como
  canônico, `viasul.com.br`, é de uma concessionária Fiat sem relação nenhuma com o restaurante**
  — erro meu, inventado sem checar disponibilidade/propriedade. Todos os arquivos do projeto
  foram corrigidos pra usar `via-sul.com`, que é o domínio real já associado ao negócio no Google.
  ✅ **Confirmado pelo cliente: `via-sul.com` é deles.** Continua pendente resolver o erro 403 na
  HostGator antes de apontar o site novo pra lá — não é código deste projeto, é configuração de
  hosting do lado de fora.

---

---

## 1. Sitemap

| URL | Objetivo | Keyword primária | CTA primário | Prioridade |
|---|---|---|---|---|
| `/` | Converter (ir ao local / pedir) | bar, restaurante Capão Raso, almoço Capão Raso | Ver rota no mapa | Alta |
| `/cardapio/` | Ranquear + apoiar decisão | cardápio Via Sul, almoço executivo Capão Raso | WhatsApp para pedir | Alta |

Só 2 páginas porque só há 2 objetivos reais: decidir ir (resolvido na home) e ver o que tem pra comer
em detalhe (resolvido no cardápio, que tem itens demais pra caber como seção da home sem enterrar o CTA).
`/politica-de-privacidade/` **não entra na v1**: não há formulário nem coleta de dado pessoal (só
links `tel:` e `wa.me`, que não passam dado nenhum pelo site). Se um form for adicionado depois, essa
página entra junto, não depois.

### Internal linking
- `/` → `/cardapio/` (anchor: "ver cardápio completo", na seção de destaque e no nav)
- `/cardapio/` → `/` (anchor: "voltar" / logo, e CTA final "traçar rota")
- Ambas → WhatsApp (`wa.me/554130264252`) e `tel:` fixos, sempre visíveis

---

## 2. Persona e jornada (condensado do Step 2.2)

**Persona única prioritária: "Almoço rápido"**
Trabalhador da região do Capão Raso/Terminal Pinheirinho, decisão em janela de minutos no
horário de almoço. Chega no Google digitando algo como "restaurante perto de mim" ou "almoço
Capão Raso". Estado emocional: fome + pressa, não tem tempo pra explorar site bonito, quer
resposta em 3 segundos: "serve o que eu quero, fica perto, abre agora".

- **Gatilho:** fome no horário de almoço, ou já ouviu falar do Via Sul e busca o nome direto.
- **Primeiro contato:** cai na home vindo da busca ou do link do Google Business Profile.
- **Exploração:** olha o prato em destaque → quer ver mais opções → clica em "ver cardápio".
- **Objeção:** "será que abre agora, será que fica perto o suficiente pra eu voltar a tempo".
- **Conversão:** clica em rota (Google Maps) ou manda WhatsApp perguntando se está aberto/fazendo pedido.
- **Risco de drop-off:** se o endereço/horário não estiver óbvio e o site demorar a carregar no
  4G do celular, ela sai e escolhe a opção mais visível no mapa do Google.

**Persona secundária: "Happy hour"**
Sai do trabalho fim de tarde, quer chopp e petisco com colegas. Awareness mais alto sobre "quero
um bar", decisão social (vai se o grupo topar). Objeção: "tem onde sentar, tem sinuca/TV, é
gostoso ficar". Entra pela mesma home, mas reage ao bloco secundário (happy hour / petiscos).

---

## 3. Conversion Architecture

### `/` — Home

- **Nível de consciência:** Most-aware / Product-aware para quem busca "via sul" direto;
  Problem-aware para quem busca "bar"/"restaurante Capão Raso" sem saber que o Via Sul existe.
  Como a maioria do volume de busca real (513+353+166 vs 91 buscas diretas) é categoria, não marca,
  a home trata o visitante como **problem-aware por padrão** e deixa o CTA de alto compromisso
  (rota) sempre visível, mas não força texto agressivo de venda — a agitação aqui é "terminal
  Pinheirinho esvaziou o fluxo", não dor emocional forçada.
- **Fórmula:** ~~PAS leve (Problem: "o point ficou escondido")~~ **corrigido.** A v-anterior deste
  doc puxava o "Problem" do PAS do lado errado: agitava um problema do *negócio* ("pouca gente nota
  a gente") em vez de um problema do *visitante*. Isso vazou pra copy real (`index.html`) como uma
  citação admitindo fraqueza bem no fundo de funil — exatamente onde o visitante precisa de
  confiança, não de vulnerabilidade. O diagnóstico do atacadão esvaziando o fluxo (Seção 1 do brief)
  é contexto de estratégia interna sobre *por que* o site precisa gerar destino próprio — não é
  frase pra botar na cara do visitante. Fórmula corrigida: **AIDA de confiança** — Attention (H1:
  posicionamento claro) → Interest (consistência: "25 anos na mesma esquina", sinal de confiança,
  não confissão) → Desire (prova social + cardápio real) → Action (rota/WhatsApp). Nenhuma seção
  agita um problema do negócio pro visitante; a única agitação aceitável aqui é do lado do
  visitante (fome, decisão rápida, "será que abre agora" — resolvido pela seção de horário ao vivo).
  Concorrente real analisado (O Portão Bar, Seção 0): estrutura parecida (destaque → prato → local
  → horário) mas com CTA morto e zero prova social. O Via Sul segue uma sequência parecida porque
  o padrão da categoria já é esse (não precisa reinventar), mas corrige os dois furos exatos que
  o concorrente deixa: CTA sempre funcional (rota/WhatsApp reais, nunca texto sem link) e prova
  social com nota real do Google, não ausente.
- **Sequência de seções obrigatória:**

| # | Seção | Estágio da fórmula | Alavanca (MECLABS) | Link interno |
|---|---|---|---|---|
| 1 | Header fixo: logo + badge de nota real do Google + tel/WhatsApp sempre visível | Solve (prova imediata) | Ansiedade (reduz) | WhatsApp / tel / perfil Google |
| 2 | Hero: Prato Via Sul + frase-núcleo + CTA rota (visível a 375px) | Solve (abertura) | Valor | → Google Maps |
| 3 | Proposta: "comida caseira, 25 anos, Capão Raso" | Problem (contexto, implícito) | Motivação (nomeia) | — |
| 4 | Cardápio em destaque (2-3 pratos, almoço primeiro) + link cardápio completo | Solve | Valor | → `/cardapio/` |
| 5 | Prova social: nota real do Google + reviews reais (texto) | Solve (remove dúvida) | Ansiedade (reduz) | → perfil Google |
| 6 | Localização: mapa + referência Terminal Pinheirinho + horário | Solve (remove fricção) | Fricção (reduz) | → Google Maps |
| 7 | Happy hour (secundário, abaixo do essencial) | Solve (persona 2) | Valor (persona 2) | — |
| 8 | Footer: horário completo, endereço, telefone, WhatsApp | — | Fricção (reduz) | tel / WhatsApp |

**Trust signal, não-negociável (o exato ponto onde o concorrente real falha):** a nota do Google
(3,9, confirmada ao vivo no Maps, ver Seção 0) aparece em pelo menos dois lugares: badge compacto no header (sempre visível,
todas as páginas) e a seção de prova social completa com nota + reviews reais em texto. Nunca é
"decoração" — é o levantador de ansiedade (MECLABS) que o concorrente direto simplesmente não tem.
A nota vem de fonte real (Google, via script `scripts/fetch-google-rating.js` ou confirmação
manual no Google Business Profile), nunca inventada ou arredondada pra cima.

- **Regras de CTA:**
  - Primário visível a 375px sem rolar: botão "Traçar rota" no hero.
  - Secundário sempre fixo (mobile): barra fixa inferior com ligar + WhatsApp (persona com fome
    não vai procurar — o contato tem que perseguir ela, não o contrário).
  - Cadência: nenhuma seção passa sem pelo menos um CTA visível (rota, WhatsApp ou tel) a cada
    no máximo 2 seções — mais rígido que o default de 3, porque a decisão dessa persona é rápida
    e por impulso.
  - Link honesto: "ver cardápio completo" → `/cardapio/` de verdade, nunca âncora vazia.
- **Attention ratio:** nav (logo, 1 link "cardápio") + hero CTA + barra fixa (rota, tel, WhatsApp)
  = 4 ações concorrendo além do primário no viewport inicial. Aceitável porque 3 das 4 são o
  *mesmo* objetivo final (contato/ir), não ações concorrentes de fato. `[DATA NEEDED: ratio dos
  concorrentes não coletado]`.
- **Cruzamento com drop-off:** risco = "não achar endereço/horário rápido" → resolvido na seção 2
  (CTA de rota já no hero) e reforçado na seção 6 e no footer, não só uma vez.

### `/cardapio/` — Cardápio

- **Nível de consciência:** Product-aware — quem chega aqui já decidiu que quer ver o que tem,
  falta só escolher o prato.
- **Fórmula:** **AIDA** (Attention: nome das categorias já mostra "tem o que eu quero" → Interest:
  itens organizados por categoria, almoço primeiro → Desire: descrição apetitosa curta →
  Action: WhatsApp pra pedir/confirmar).
- **Sequência de seções obrigatória:**

| # | Seção | Estágio | Alavanca | Link interno |
|---|---|---|---|---|
| 1 | Header fixo (igual home) | — | Fricção | tel / WhatsApp |
| 2 | Título + nota "preços sujeitos a confirmação/atualização" | Attention | Ansiedade (reduz) | — |
| 3 | Categorias: Executivo/Almoço primeiro, depois Petiscos, Bebidas/Chopp, Porções | Interest/Desire | Valor | — |
| 4 | CTA final: WhatsApp "peça pelo WhatsApp" + rota | Action | Fricção (reduz) | wa.me / Maps |
| 5 | Footer (igual home) | — | Fricção | tel / WhatsApp |

- **Regras de CTA:** barra fixa mobile igual à home (WhatsApp + tel sempre acessível enquanto rola
  o cardápio, que pode ser longo).
- **Attention ratio:** só nav + barra fixa, sem ações concorrentes extras — página é de consulta,
  não precisa competir por atenção.
- **Cruzamento com drop-off:** risco = página de cardápio longa sem preço definitivo gera dúvida →
  mitigado com nota explícita de que preço é confirmado por telefone/WhatsApp (honestidade, não
  esconde que os dados ainda não são finais).

---

## 4. Tabela-resumo

| Página | Consciência | Fórmula | CTA primário | 1ª aparição | Attention ratio |
|---|---|---|---|---|---|
| `/` | Problem/Product-aware | AIDA de confiança | Traçar rota | Seção 2 (hero) | 4 ações, 3 convergentes |
| `/cardapio/` | Product-aware | AIDA | WhatsApp | Seção 4 (+ barra fixa) | 2 ações, ambas convergentes |

---

## 5. Pendências reais (flag honesto, não bloqueia v1)

- ✅ **Resolvido** — Endereço: **Av. Winston Churchill, 1734, Lj 09**, confirmado direto no Google
  Maps ao vivo (não mais fonte secundária).
- ✅ **Resolvido, com correção** — Nota do Google: **3,9** (não 4,0 — o valor anterior vinha de um
  agregador desatualizado, corrigido depois de checar o Maps direto). Contagem exata de avaliações
  ainda não disponível na visualização pública sem login; precisa da Places API com credencial ou
  conferência manual no painel do Google Business Profile.
- ✅ **Resolvido** — Cardápio completo com preços recebido do cliente
  (`via-sul-cardapio-final-copiar.md`, o mesmo usado no Google Business Profile). Site reconstruído
  com os itens e preços reais, 15 categorias. **Costela assada removida** — não existe no cardápio
  real, era erro de pesquisa de mercado com fonte não verificada (ver Seção 0).
- `[DATA NEEDED]` 2-3 reviews reais do Google (texto + primeiro nome) para a seção de prova social.
  Tentado via scraping do Maps sem login (mesma técnica que confirmou nota/endereço/telefone) —
  o Google bloqueia especificamente texto de avaliação e contagem na visualização sem login
  ("Esta é uma visualização limitada... Faça login"). Login automatizado pra contornar isso foi
  descartado de propósito: contorna controle de acesso do próprio Google, não é técnica válida
  mesmo com autorização do dono da conta. Caminho real: `assets/js/main.js` já busca `reviews` na
  Places API no mesmo request que busca nota/contagem/horário — assim que `google-config.js` tiver
  a chave, popula sozinho. Sem chave, o slot fica marcado, não inventa depoimento.
- `[DATA NEEDED]` Fotos profissionais (semana que vem) — v1 sobe com placeholder de imagem visível
  e honesto no lugar do herói, não uma foto de banco de imagens genérica fingindo ser o prato real.
- `[DATA NEEDED]` Confirmar com a cliente: nome oficial do carro-chefe (o cardápio real chama de
  "Via Sul Bife" — bate com o que o site usa como prato de abertura?) e se o prato vem com feijão
  de verdade ou se feijão é sempre adicional pago (R$3) como o cardápio atual lista — o GBP antigo
  descrevia com feijão incluso, o cardápio novo não. Site está seguindo o cardápio novo (fonte mais
  recente e mais confiável) até confirmação.
- ✅ **Resolvido** — `via-sul.com` confirmado como domínio do cliente. `[DATA NEEDED]` resolver o
  erro 403 na HostGator antes do lançamento (configuração de hosting, fora do escopo deste
  projeto de código).
- ✅ **Resolvido** — Badge de nota do Google: em vez do script de build isolado, `assets/js/main.js`
  agora tenta buscar a nota (e a contagem de avaliações) ao vivo direto no navegador via Places
  API (New), usando a chave e o Place ID configurados em `assets/js/google-config.js`. A chave
  fica exposta no código-fonte da página — isso é seguro **somente se** restrita por HTTP referrer
  no Google Cloud Console a `https://via-sul.com/*` (mesma proteção que qualquer Google Maps
  incorporado usa). Sem chave configurada, cai automaticamente pro valor estático conhecido
  (3,9). `[DATA NEEDED]` cliente criar a chave e preencher `google-config.js` — instruções estão
  nos comentários do próprio arquivo.

Este documento supera a lista livre de seções do brief original onde houver conflito, por ser a
versão travada antes do build (regra do Step 2.3).
