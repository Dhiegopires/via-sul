# Step 7: Migração para o Design System

Após a entrega, componentes reutilizáveis do site do cliente migram para `Github/design-system/`. O objetivo é construir uma biblioteca que reduza o contexto necessário em projetos futuros.

**Documentação técnica completa fica no próprio design-system:**
- Processo de migração: `docs/legacy-migration-process.md`
- Como escrever um componente: `docs/component-authoring-guide.md`
- Quando criar v2 vs. variante: `docs/versioning-policy.md`
- Arquitetura de tokens: `docs/tokens-architecture.md`

---

## Fluxo em 2 prompts

**Passo 1 — Inventário** (`7.1-inventory-prompt.md`)
Cole o HTML/CSS/JS bruto do componente. A IA devolve a tabela de valores hardcoded e os comandos `grep` exatos para buscar os tokens semânticos relevantes em `dist/css/tokens/brand-vellumwire.css`. Rode os greps. Isso torna o próximo passo barato.

**Passo 2 — Migração** (`7.2-migration-prompt.md`)
Cole o componente + a saída dos greps (apenas as linhas relevantes). A IA entrega o HTML/CSS migrado e o `.spec.md` prontos para salvar em `design-system/components/<nome>/`.

Após salvar: `npm run specs:extract` registra o componente no showcase automaticamente.

---

## O que não migrar

Elementos hiper-específicos de uma campanha pontual ficam no site do cliente. Migre só o que se repetiria em outro projeto — ver `docs/legacy-migration-process.md` § "Quando não migrar".

---

> ✅ **CHECKPOINT — antes de considerar um componente migrado**
> - [ ] `grep -E '#|rgb\(' <nome>.css` retorna vazio (zero cor hardcoded, só tokens)
> - [ ] `npm run tokens:validate` passa
> - [ ] O componente se repetiria em outro projeto (não é hiper-específico da campanha deste cliente)
>
> Se os 3 itens acima estão OK → salva e roda `npm run specs:extract`.

## Step completion checklist

- [ ] Candidatos identificados e triados
- [ ] HTML + CSS + spec.md salvos em `design-system/components/<nome>/`
- [ ] `grep -E '#|rgb\(' <nome>.css` retorna vazio
- [ ] `npm run tokens:validate` passa
- [ ] `npm run specs:extract` rodado
- [ ] Repositório do projeto arquivado

---

## Files in this step

| File | O que faz |
|---|---|
| `7.1-inventory-prompt.md` | Analisa o componente e gera os comandos grep — contexto mínimo |
| `7.2-migration-prompt.md` | Migra código + gera spec.md a partir do grep direcionado |
