# Step 6: Final Checklist

Before the site goes live, every page passes an audit covering copy, design, layout, UX, code, and accessibility. It catches AI-generated patterns that survived the review process: the kind that looks fine in isolation but signals "bot" to any reader paying attention.

**Este step não é onde a arquitetura de conversão é decidida.** Formula de persuasão, sequência de seções, posição do CTA e attention ratio são decisões do Step 2.3, validadas no Step 4.3 antes do development começar. O `6.8-conversion-signals.md` deste step existe só para confirmar que o build não se desviou do que foi aprovado — é um check de regressão, não a primeira linha de defesa. Se um problema desses chegar até aqui sem nunca ter sido decidido antes, o processo quebrou lá atrás, não aqui.

**Três modos:**
- **Fast mode:** rode só `6.2-audit-prompt.md` — a IA faz a varredura automática, você revisa e corrige.
- **Thorough mode:** rode o prompt, corrija, depois use `6.3`–`6.5` como referência manual e rode os greps de `6.6`.
- **Sempre, independente do modo:** rode `6.8-conversion-signals.md` com os documentos aprovados do Step 2.3 e 4.3 em mãos.

**Tempo:** 30–60 minutos por página.

---

## Seu trabalho neste step

### Passo 1 — AI self-audit (`6.2-audit-prompt.md`)

Abra `6.2-audit-prompt.md`. Cole o HTML completo de uma página no campo indicado. Rode em **chat novo** — não na sessão Claude Code que construiu a página. Contexto fresco pega o que a sessão de construção normalizou.

Revise cada flag. Não é tudo fix obrigatório — alguns são julgamento. Use a tabela de severity de `6.6-quick-scan.md`: Blocker, Cut, Rewrite, Limit, Add.

**Blockers primeiro.** Não mostre a página ao cliente com um Blocker aberto.

### Passo 2 — Grep scan (`6.6-quick-scan.md`)

Rode os grep targets de `6.6-quick-scan.md` contra os arquivos do projeto. Cada hit é uma flag, não uma garantia de fix — confira o contexto antes de cortar.

### Passo 3 — Structural checks (manual)

Siga os structural checks no final de `6.6-quick-scan.md`. Os checks de contraste e touch target são os mais críticos — se reprovarem, a página lê como IA independente do resto.

### Passo 4 — Reference manual (thorough mode only)

Se um flag do AI audit não ficou claro, consulte a referência correspondente:
- `6.3-copy-signals.md` — C1–C20: copy patterns com explicação e fix
- `6.4-design-signals.md` — D1–D8 + layout: visual/CSS + estrutura com fix
- `6.5-ux-code-signals.md` — U1–U3, K1–K2, H1: UX, código, sinal humano

### Passo 5 — Leia como estranho

Feche o editor. Abra a página no browser. Leia de cima a baixo sem parar para corrigir. Uma intuição: isso foi feito por uma pessoa que entende o negócio do cliente, ou por uma máquina competente que leu o briefing?

Se a resposta for a segunda: algo de `6.5` (Missing Human Signal) está faltando. Adicione antes de lançar.

### Passo 6 — Conversion architecture regression check (`6.8-conversion-signals.md`)

Abra `conversion-architecture-[cliente].md` (Step 2.3) e `layout-preview-[cliente].md` (Step 4.3) ao lado da página construída. Rode os checks CV1–CV7: ordem das seções, CTA visível na dobra (375px primeiro, depois desktop, no browser real), attention ratio, cadência de CTA, cobertura do objection/drop-off, honestidade de link, e conclusão real da conversão (CV7). Todos são Blocker. Isso não é uma segunda chance de decidir a arquitetura — é confirmar que o que foi aprovado antes do development sobreviveu ao development.

### Passo 7 — Teste com um estranho de verdade

Conhecido na literatura de UX como "hallway testing" (teste de corredor — origem disputada entre o livro *The Design of Everyday Things* de Don Norman e *Sense and Respond* de Gothelf/Seiden, não um termo específico de um único autor). Steve Krug defende a mesma lógica em *Rocket Surgery Made Easy*, recomendando teste com 3 usuários por mês, sem orçamento nem equipe grande — a ideia central que embasa esse passo. Na prática: pega 2-3 pessoas que não trabalharam no projeto — um amigo, alguém do time do cliente que não viu o site ainda, qualquer um — e dá uma tarefa só: "ache como marcar uma demonstração" ou "descubra o que essa empresa faz e como falar com eles". Não ajuda, não aponta, só observa. Onde a pessoa hesita, clica no lugar errado, ou pergunta "e agora?" é exatamente o tipo de atrito que nenhum grep, nenhuma auditoria de IA, e nenhum checklist manual pega — porque quem construiu a página já sabe onde o CTA está. Quem nunca viu, não sabe. Isso custa 10 minutos e pega o tipo de problema que só aparece depois com dados reais (e um mês de tráfego já gasto), se não for pego agora.

Se 2 das 3 pessoas hesitarem no mesmo ponto: isso é um Blocker de UX, mesmo que já tenha passado em tudo mais.

> ✅ **CHECKPOINT — decisão de ir ao ar (go/no-go)**
> Antes de apertar o botão de lançar, confirme só isto — não precisa reler os 7 passos acima de novo:
> - [ ] Zero Blockers abertos no `6.2` (copy/design/UX/código/a11y)
> - [ ] CV1–CV7 do `6.8` todos passaram, incluindo CV2 (CTA visível no estado padrão em 375px primeiro, depois desktop, testado no browser real, não só no HTML), CV6 (todo link vai pro destino que o texto promete) e CV7 (conversão completada de verdade — booking real no Calendly, form real enviado — e confirmada do lado do cliente)
> - [ ] GA4 disparando, e se o CTA principal depende de ferramenta externa (Calendly etc.): evento de lead confirmado bate na conclusão real, não no clique
> - [ ] Teste com estranho (Passo 7) feito, sem hesitação repetida no mesmo ponto
> - [ ] Launch Week Check (abaixo) já está agendado no calendário — não "vou lembrar depois"
>
> Se os 5 itens acima estão OK → lança. Se qualquer um falhar → é Blocker, não lança até resolver.

---

## Recursos de referência

- [The A11Y Project](https://www.a11yproject.com) — checklist de acessibilidade da comunidade.
- [WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist) — checklist verificável com link para cada critério do WCAG 2.2.
- [Deceptive Patterns](https://www.deceptive.design/) — catálogo de dark patterns a evitar antes do launch.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## Step completion checklist

- [ ] AI audit rodado e todos os Blockers corrigidos
- [ ] Grep scan rodado: todos os hits revisados
- [ ] Auditoria de teclado rodada (`6.7-a11y-keyboard.md`): skip link presente, tab order lógico, sem keyboard traps, ARIA labels nos botões de ícone
- [ ] Sem placeholder text em nenhuma página
- [ ] Sem console.log em JS
- [ ] Sem body text abaixo de 16px, sem texto abaixo de 12px em lugar nenhum
- [ ] Todo par texto/fundo e ícone/borda verificado: ≥4.5:1 texto normal, ≥3:1 texto grande e UI não-textual
- [ ] Todo clickable target ≥24×24px, CTAs principais ≥44×44px, focus state visível em cada elemento interativo
- [ ] Todo link de navegação vai para destino real
- [ ] Todo formulário tem estados de erro e sucesso
- [ ] Todo formulário que coleta nome/e-mail/telefone linka pra uma página de política de privacidade real (não 404) — e se usa cookies/analytics além do estritamente necessário, tem banner de consentimento
- [ ] Toda imagem tem alt text descritivo
- [ ] Meta title ≤60 chars em toda página
- [ ] Meta description ≤155 chars em toda página
- [ ] Canonical tag em toda página
- [ ] Schema JSON-LD válido
- [ ] sitemap.xml submetido ao Google Search Console
- [ ] GA4 verificado disparando em toda página (instalação é Step 5 — se não foi feito lá, volte antes de continuar)
- [ ] Se o CTA principal depende de uma ferramenta externa (Calendly, Typeform, WhatsApp): confirmado que o evento `generate_lead` dispara na conclusão real (embed inline + `calendly.event_scheduled`, ou página de obrigado), não no clique do link — ver `6.6-quick-scan.md` grep de `generate_lead`
- [ ] Baseline de launch registrado no briefing master (sessões, taxa de conversão, top landing page na primeira semana)
- [ ] Hotjar instalado — recomendado em todo projeto; obrigatório no plano Build
- [ ] Lighthouse ≥90 em Performance, Accessibility, Best Practices, SEO no mobile
- [ ] Página lê como feita por uma pessoa que entende o negócio do cliente
- [ ] `6.8-conversion-signals.md` rodado: ordem de seções bate com o layout preview, CTA visível na dobra em 375px primeiro e depois desktop no browser real, attention ratio dentro do orçamento aprovado, cadência de CTA respeitada, objeção de drop-off coberta
- [ ] Launch Week Check agendado (ver seção abaixo) — independente de o cliente ter comprado Hold/Build

---

## Launch Week Check — obrigatório para todo cliente, com ou sem plano mensal

**Por que isso existe:** o monitoramento contínuo (`After launch/Hold/` ou `Build/`) só roda para quem comprou o plano mensal. Um cliente de audit-only ou rebuild avulso sai do Step 6 e não tem mais nenhum checkpoint depois disso — a não ser que ele mesmo perceba um problema e reclame. Foi exatamente assim que 500 acessos viraram 0 leads sem ninguém notar por um mês inteiro. Esta checagem existe para fechar esse buraco, de graça, para todo projeto, com ou sem contrato de manutenção.

**Quando:** dias 5–7 após o go-live. Uma vez só — isso não é o início de um monitoramento recorrente (aquilo é o `After launch/Hold/` e continua vendido separadamente).

**Onde achar os números:** seção "GA4 + Hotjar: where to find things and what they mean" em `../../After launch/Hold/README.md` — bounce rate e taxa de conversão não aparecem por padrão no GA4, tem que customizar o relatório. A seção mostra exatamente onde clicar.

**O que checar (leva ~15 minutos):**
- Sessions desde o lançamento: tráfego está de fato chegando?
- Pelo menos um evento de lead confirmado (`generate_lead` ou equivalente) disparou? Ou o volume de sessões ainda é baixo demais pra esperar um estatisticamente? Fontes independentes divergem bastante no "baseline" (Unbounce, que vende software de landing page, reporta ~6,6%; HubSpot reporta ~1,7%; Ruler Analytics ~5,1%; WordStream ~2,35% cross-industry) — a metodologia de cada uma é diferente (tipo de tráfego, o que conta como conversão, B2B vs. B2C). Não trave numa fonte só. O ponto que importa: mesmo pegando o número MAIS baixo entre essas fontes (1,7%), zero conversões com tráfego real chegando ainda é estatisticamente anômalo, não "só baixo".
- Se Hotjar/Contentsquare estiver instalado: profundidade de scroll até o CTA principal, taxa de clique no CTA.

**Se tráfego está chegando e zero leads confirmados depois de um volume razoável de sessões:** trate como incidente ativo, não como "vamos esperar mais um pouco". Rode `6.8-conversion-signals.md` de novo — desta vez contra o site AO VIVO, não contra o build pré-lançamento. Um redeploy, um cache de CDN, um ajuste de última hora depois da auditoria do Step 6 podem introduzir exatamente o tipo de regressão que esse arquivo existe para pegar. Avise o cliente imediatamente — não espere o próximo ciclo mensal (que pode nem existir, se ele não comprou o plano) nem que o cliente perceba primeiro.

**Se o cliente tem `0-briefing-master/lead-guarantee-terms.md` assinado:** este é exatamente o momento que determina se a garantia foi acionada. Confirme as três condições do documento (checklist do Step 6 limpo, sessions acima do combinado, zero leads confirmados) antes de declarar gatilho — não assuma automaticamente. Se as três baterem, o rebuild gratuito combinado entra em ação; se não baterem (por exemplo, sessions abaixo do volume combinado), ainda não é hora de acionar, mas continue monitorando.

---

## Files in this step

| File | O que é |
|---|---|
| `6.2-audit-prompt.md` | Prompt para rodar em chat novo — varredura automática de C1–C19, D1–D8, U1–U3, K1–K2, H1, A1–A6 |
| `6.3-copy-signals.md` | Referência copy C1–C20 com explicação e fix |
| `6.4-design-signals.md` | Referência visual/CSS + layout D1–D8 com fix |
| `6.5-ux-code-signals.md` | Referência UX/código/sinal humano U1–U3, K1–K2, H1 |
| `6.6-quick-scan.md` | Grep targets (copy/CSS/a11y/code) + severity table + structural checks |
| `6.7-a11y-keyboard.md` | Auditoria de acessibilidade por teclado — skip link, tab order, keyboard traps, ARIA, form labels |
| `6.8-conversion-signals.md` | Check de regressão CV1–CV7 — confirma que o build não se desviou da arquitetura de conversão aprovada nos Steps 2.3 e 4.3 |
