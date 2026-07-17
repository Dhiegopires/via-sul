# DESIGN_SYSTEM.md — Via Sul

> Lido pelo Claude Code em toda sessão de desenvolvimento (Step 5). Contexto: restaurante/bar de
> bairro, comida caseira, 25+ anos, Capão Raso, Curitiba. Público 89% mobile. Ver
> `.claude/via-sul-brief-site.md` e `docs/arquitetura-via-sul.md`.
>
> **v2 — revisão de direção visual.** A v1 usava creme + vermelho-telha ("apetite de comida") em
> cards brancos com borda arredondada. Feedback direto do cliente: aquilo lia como template
> genérico de restaurante, não como a identidade real do Via Sul (que é essencialmente preto e
> branco) nem como o registro pedido: **rústico e premium**. Esta versão substitui a paleta e o
> vocabulário de componente inteiro — não é ajuste de cor, é mudança de sistema.

---

## 1. Direção visual e por quê

**Rústico + premium, não rústico + caseiro-fofo.** A diferença: rústico-fofo usa cor quente em
tudo, cantos arredondados em tudo, caixa com borda em tudo — é a fórmula "template de restaurante
de bairro" que qualquer gerador de site usa por padrão (é literalmente o que o concorrente direto,
O Portão Bar, tem, ver `docs/arquitetura-via-sul.md` Seção 0). Rústico-premium usa **preto e osso
(bone), quase sem cor**, tipografia grande e confiante fazendo o trabalho que a cor fazia antes, e
um único metal (latão/bronze) como acento — usado com extrema economia, nunca como fundo de bloco
inteiro. Restrição é o que sinaliza premium; fartura de cor é o que sinaliza template.

A identidade do próprio Via Sul já é monocromática (logo preto e branco). O site segue essa pista
em vez de inventar uma paleta quente por cima. Comida ainda precisa de luz para parecer apetitosa
— isso continua sendo verdade — mas isso é resolvido com fotografia bem exposta sobre fundo escuro
(tratamento editorial, tipo revista), não com um fundo inteiro pintado de laranja.

Tipografia: um serif de alto contraste e presença forte no título (faz o papel que erroneamente a
cor fazia na v1), um sans neutro e discreto no corpo (não compete, só entrega legibilidade).

Evitar deliberadamente: Inter/Space Grotesk/Plus Jakarta Sans (SaaS genérico); qualquer card
branco com borda arredondada e sombra leve (é exatamente o "template 2015" que estava errado);
gradiente decorativo; paleta multicolor tentando parecer "caseira e alegre"; qualquer elemento que
pareça ter saído de um gerador automático de site de restaurante.

---

## 2. Tokens de cor

```css
:root {
  /* Base — quase monocromática, rústico-premium */
  --color-ink:           #14110E;   /* preto quente, fundo de alto impacto (hero, happy hour, footer) */
  --color-ink-soft:      #221C16;   /* variação do preto pra profundidade sutil (cards sobre ink) */
  --color-bone:          #F1ECE2;   /* osso/creme claro, fundo principal de leitura */
  --color-bone-dim:      #E4DCCB;   /* osso mais escuro, hairlines e seções alternadas */
  --color-paper:         #FAF8F3;   /* quase branco, usado só em blocos de texto longo (cardápio) */

  --color-text:          #1C1712;   /* texto sobre osso — quase preto, não #000 puro */
  --color-text-muted:    #5B5346;   /* texto secundário sobre osso */
  --color-text-on-ink:       #F1ECE2;   /* texto sobre preto */
  --color-text-on-ink-muted: #A79C8A;   /* texto secundário sobre preto */

  /* Acento único — latão/bronze. Uso restrito: linha fina, label, ícone, borda de foco de marca. */
  --color-brass:         #A9793F;
  --color-brass-bright:  #C4995F;   /* hover/estado ativo do latão, só em texto/borda, nunca em fundo grande */

  /* Suporte funcional */
  --color-success:       #4B7A52;   /* aberto agora — único verde do sistema, uso pontual */
  --color-border:        #D8CEB8;   /* hairline sobre osso */
  --color-border-on-ink: #3A342B;   /* hairline sobre preto */
  --color-focus:         #1B5FA8;   /* azul, só para outline de foco de teclado — nunca decorativo */
}
```

Regra dura: **nenhum bloco de fundo usa `--color-brass` inteiro.** Latão é linha, texto, ícone ou
borda — nunca preenchimento de botão ou seção. Se um elemento "precisa" de um fundo colorido
chamativo, a resposta é usar `--color-ink`, não latão.

Contraste: `--color-text` sobre `--color-bone` = 14.9:1. `--color-text-on-ink` sobre `--color-ink`
= 15.6:1. `--color-brass` sobre `--color-bone` = 3.3:1 — **abaixo de AA para texto pequeno**, por
isso latão só é usado em texto a partir de `--text-lg`/600 de peso, ou como elemento gráfico não
textual (linha, ícone com `aria-hidden`), nunca como cor de texto de corpo corrido.

---

## 3. Tipografia

- **Títulos (h1-h3) e citações de destaque:** `Fraunces` (Google Fonts, variable, serif de alto
  contraste). Peso 600-680 em títulos, **itálico óptico (`font-style: italic`, peso 400-500) para
  citações/depoimentos e para a assinatura de "25 anos"** — o itálico é o toque editorial que
  substitui a cor quente que a v1 usava para dar personalidade.
- **Corpo, UI, labels:** `Libre Franklin` (Google Fonts, sans humanista neutro). Peso 400 corpo,
  600 para labels/botões, **tracking levemente aberto (`letter-spacing: 0.04em`) e caixa alta em
  labels pequenos** (eyebrow, categorias do cardápio) — é o vocabulário tipográfico "editorial
  premium", não decoração aleatória.
- Fallback: `font-family: 'Fraunces', Georgia, serif;` / `font-family: 'Libre Franklin',
  -apple-system, sans-serif;`

```css
:root {
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Libre Franklin', -apple-system, BlinkMacSystemFont, sans-serif;

  --text-xs:   0.8125rem;  /* 13px */
  --text-sm:   0.9375rem;  /* 15px */
  --text-base: 1.0625rem;  /* 17px — corpo, mobile não usa 16px "pequeno demais" */
  --text-lg:   1.25rem;
  --text-xl:   1.75rem;
  --text-2xl:  2.25rem;
  --text-3xl:  3rem;      /* hero, mobile */
  --text-hero-desktop: 5rem;   /* mais confiante que a v1 — tipografia grande é o novo "acento de cor" */
}
```

---

## 4. Espaçamento e grid

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  --radius-sm: 4px;   /* uso restrito: botão, badge */
  --radius-md: 4px;   /* propositalmente igual ao sm — este sistema não usa cantos muito
                          arredondados; "pill" e radius-lg grande é o vocabulário do template
                          que estamos deixando pra trás */

  --container-max: 1200px;
  --container-padding: var(--space-4);
}
```

Mobile-first: base sem media query pensada pra 375px. `min-width: 640px` (tablet), `min-width:
1024px` (desktop) como camadas adicionais, nunca o contrário.

**Assimetria deliberada:** a v1 empilhava tudo centralizado. Esta versão usa grid de 12 colunas no
desktop com composições assimétricas (texto ocupando 5-7 colunas, imagem sangrando até a borda da
viewport, não contida dentro do container) — é o que separa "editorial" de "template". Mobile
continua simples e empilhado (não dá pra ter assimetria útil em 375px), a assimetria é um
tratamento de desktop.

---

## 5. Componentes

### Botão primário (CTA — rota, WhatsApp)
- Fundo `--color-ink`, texto `--color-text-on-ink`, `radius-sm`, padding `var(--space-4)
  var(--space-8)`, peso 600, `font-body`, `letter-spacing: 0.02em`.
- **Nunca fundo latão ou vermelho.** O botão primário é sempre preto sólido — é o "peso" da
  hierarquia, não a cor.
- Estado hover: leve clareamento (`--color-ink-soft`) + a borda inferior de 2px vira
  `--color-brass` — o único lugar onde o latão aparece "acendendo", como um detalhe de acabamento.
- Estado focus: outline 2px `--color-focus`, offset 2px.
- Botão secundário: sem fundo, borda 1px `--color-text` (ou `--color-text-on-ink` sobre fundo
  escuro), texto na cor do texto local. Nunca borda latão grossa — fica "botão de banner".

### Barra fixa mobile (contato)
- Fixa no rodapé da viewport, só `max-width: 1023px`. Dois botões: WhatsApp e Ligar, 50/50,
  altura mínima 56px. Fundo `--color-ink`, texto `--color-text-on-ink`, separador central 1px
  `--color-border-on-ink`. Sem verde de WhatsApp aqui — a barra é monocromática como o resto do
  sistema; o ícone é o que comunica qual é qual, não a cor de fundo.
- `position: fixed; bottom: 0;` com `padding-bottom: env(safe-area-inset-bottom)`. Página tem
  `padding-bottom` compensando a altura da barra, nunca cobre conteúdo real.

### Badge de nota (trust signal — novo, não existia na v1)
- Compacto, no header e repetido na seção de prova social. Formato: estrela + número + link
  ("4,0 no Google"). Fundo transparente, borda 1px `--color-border` (ou `--color-border-on-ink`
  sobre preto), texto `--color-text`/`--color-text-on-ink`. Ícone de estrela em `--color-brass`
  (único uso de latão em elemento gráfico pequeno é aceitável).
- Nunca fabricar o número. Vem de `assets/data/google-rating.json` (ver `scripts/`) ou, na
  ausência do arquivo, do valor confirmado manualmente em `docs/arquitetura-via-sul.md`.

### Lista de prato / item de cardápio (substitui os "cards" da v1)
- **Não é mais card com borda e fundo branco.** É lista editorial: nome do prato (serif, peso
  600) + preço alinhado à direita na mesma linha, descrição em corpo abaixo, separado do próximo
  item por **hairline** (`border-bottom: 1px solid var(--color-border)`), sem fundo, sem borda ao
  redor, sem sombra. Pensa em cardápio impresso de restaurante, não em grid de produto de
  e-commerce.
- O prato-herói (Prato Via Sul) na home é a única exceção com tratamento de destaque: ocupa mais
  espaço, título maior, mas ainda sem caixa fechada — o destaque vem de escala tipográfica, não de
  fundo colorido.

### Depoimento (prova social)
- Aspas grandes decorativas em `Fraunces` itálico como elemento gráfico (não emoji, não ícone de
  aspas de biblioteca de ícone genérica). Texto do depoimento em itálico serif, atribuição em sans
  pequeno caps com tracking aberto. Sem card branco com borda — depoimento vive direto sobre o
  fundo da seção, separado por espaço generoso, não por caixa.

### Seção Happy Hour e Hero (fundo escuro)
- `background: var(--color-ink)`, texto `--color-text-on-ink`. O latão aparece só como linha fina
  (`border-top: 1px solid var(--color-brass)`) separando o eyebrow do título, nunca como bloco.
- Agora **duas seções** usam fundo escuro (hero + happy hour), não uma só — isso é intencional na
  v2: o preto é a assinatura visual do site (reforça "identidade preto e branco" pedida), não uma
  exceção pontual. As seções de leitura longa (proposta, cardápio destaque, localização) continuam
  em `--color-bone` para não cansar o olho em texto corrido.

---

## 6. Regras anti-padrão (não fazer)

- Nunca card branco com borda arredondada + sombra leve — é o padrão exato que estamos deixando
  pra trás (ver Seção 0 do doc de arquitetura: é como o concorrente direto faz).
- Nunca latão como cor de fundo de bloco grande. Latão é linha, texto de destaque ou ícone.
- Nunca gradiente, nunca glassmorphism, nunca ícone de "estrelinha" decorativa tipo IA.
- Nunca emoji no corpo do texto ou títulos.
- Nunca em dash (—) em copy de marketing (pode em documentação técnica como este arquivo).
- Nunca cardápio como PDF escaneado ou imagem — sempre HTML real, editável, indexável.
- Nunca ocultar telefone/WhatsApp atrás de scroll — sempre acessível em 1 toque, qualquer seção.
- Nunca inventar ou arredondar a nota do Google. É dado real ou não aparece.
