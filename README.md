# Peças Toyota — vitrine independente

Site estático e responsivo para encontrar famílias de peças/acessórios destinados à linha Toyota e solicitar confirmação pelo atendimento. É uma vitrine independente, não o site oficial nem uma concessionária autorizada da Toyota.

## Catálogo e fotografias

A página reúne onze famílias para consulta. Somente itens que têm uma fotografia Toyota real e reutilizável aparecem como cards; neste momento são referências visuais de um Land Cruiser J60 com tenda no teto e de uma roda de Prius 2004 (versão dos Estados Unidos). A foto da Hilux com tendas é editorial, no hero. Não há estoque, preço, código OEM ou compatibilidade verificados: confirme todos esses dados com a loja. As famílias sem card podem ser consultadas pelo atendimento, sem produtos nem imagens genéricas inventados.

As três fotos foram verificadas em páginas do Wikimedia Commons e são usadas sob CC BY-SA. Cada foto tem crédito próximo a ela e o rodapé informa autor, origem e link da licença. Os arquivos estão em `client/public/images/`; o inventário completo de atribuições e as condições de cada imagem estão em [IMAGE-CREDITS.md](IMAGE-CREDITS.md). Não remova as atribuições nem distribua as fotos como se fossem propriedade da loja.

## Atendimento e informações comerciais

Os botões preparam conversas de compra, parcelas, quitação e atendimento. O telefone comercial não foi fornecido; por isso, sem `VITE_WHATSAPP_NUMBER` válido os botões mostram um aviso e não abrem uma conversa. Configure essa variável no ambiente de build do serviço Render com o telefone público em formato internacional e somente dígitos (`55` + DDD + número). Ela aparecerá no código público do site, como esperado para um contato comercial. A página não coleta nem armazena CPF, documentos ou dados de pagamento.

Antes de divulgar vendas, cadastre dados comerciais confirmados, políticas e produtos reais. Não declare compatibilidade, estoque ou preço sem verificação.

## Projeto e build estático

Requer Node.js 22. Instalação e comandos usam a versão pnpm fixada pelo projeto:

```bash
npx --yes pnpm@10.18.0 install --frozen-lockfile
npx --yes pnpm@10.18.0 dev:render
npx --yes pnpm@10.18.0 build:render
```

A compilação produz `dist/public`. `vite.render.config.ts` constrói apenas o frontend, sem backend, banco de dados ou integração tRPC.

## Render e atualização

O repositório está ligado ao Static Site Render Toyota já existente, na branch `main`. Pushes aprovados à branch acionam o auto-deploy daquele serviço. O serviço permanece no plano e domínio existentes; não crie um segundo serviço ao atualizar esta loja. O `render.yaml` documenta a configuração estática/rewrite para facilitar a manutenção, mas alterações no domínio ou no plano não fazem parte deste projeto.

Build e publicação manual equivalentes:

- **Build command:** `npx --yes pnpm@10.18.0 install --frozen-lockfile && npx --yes pnpm@10.18.0 build:render`
- **Publish directory:** `dist/public`
- **Rewrite SPA:** `/*` → `/index.html`

## Estrutura principal

- `client/src/data/products.ts`: famílias de peças e cards fotográficos verificados.
- `client/src/data/photoCredits.ts`: autor, origem e licenças usadas pela interface.
- `client/src/pages/Home.tsx`: vitrine, filtros, consultas de parcelas/quitação, modal e créditos visíveis.
- `client/src/lib/whatsapp.ts`: mensagens de atendimento e validação do número público configurado.
- `client/public/images/`: arquivos fotográficos licenciados; use fotos próprias ou licenças comerciais compatíveis ao acrescentar cards.
- `IMAGE-CREDITS.md`: atribuições e notas de licença completas.

## Fontes consultadas

- [Wikimedia Commons — Toyota Hilux com tendas no teto](https://commons.wikimedia.org/wiki/File:Toyota_hilux_with_roof_tents.jpg)
- [Wikimedia Commons — Toyota Land Cruiser J60 com tenda no teto](https://commons.wikimedia.org/wiki/File:Side_view_of_Toyota_Land_Cruiser_J60_with_roof_tent.jpg)
- [Wikimedia Commons — roda do Toyota Prius 2004](https://commons.wikimedia.org/wiki/File:Prius2004Wheel.JPG)
- [Render Blueprints](https://render.com/docs/blueprint-spec) · [Static Site rewrites](https://render.com/docs/redirects-rewrites)
