# Peças para Toyota — vitrine independente

Site estático e responsivo para vendas e consultas de peças e acessórios destinados à linha Toyota. Esta vitrine é independente; não é o site oficial nem um concessionário autorizado da Toyota.

## Catálogo e consultas

A página reúne as principais famílias de peças: motor e manutenção, filtros, freios, suspensão e direção, transmissão, elétrica e ignição, carroceria, interior e proteção, rodas e pneus, acessórios e lubrificantes. A busca filtra os exemplos por nome, referência, modelo e categoria; famílias/itens sem produto demonstrativo podem ser solicitados pelo WhatsApp.

Os três cards, suas referências, fotos e aplicações são ilustrativos. Não representam estoque real, código OEM verificado ou compatibilidade garantida. Confirme a aplicação pelo modelo/ano/versão, o valor, as parcelas, a quitação e a disponibilidade com a loja. A página não coleta nem guarda CPF, documentos ou dados de pagamento. Antes de divulgar, cadastre os dados comerciais confirmados e substitua as ilustrações de fallback por fotos próprias ou licenciadas.

## Desenvolvimento

Requer Node.js 22 e usa `npx` para instalar a versão de pnpm fixada pelo projeto:

```bash
npx --yes pnpm@10.18.0 install --frozen-lockfile
npx --yes pnpm@10.18.0 dev:render
npx --yes pnpm@10.18.0 build:render
```

A saída compilada fica em `dist/public`. `vite.render.config.ts` compila o frontend sem depender do backend do Manus.

## Publicação na Render (quando você vincular o repositório)

O repositório contém `render.yaml`. Ao conectar esse repositório na Render, escolha criar um serviço Blueprint a partir desse arquivo. Ele define um Static Site, a pasta de publicação e a regra de rewrite para rotas do app. Este projeto não configura domínio, cobrança, banco de dados, autenticação ou serviço Render por conta própria.

Se preferir criar o serviço manualmente, defina:

- **Build command:** `npx --yes pnpm@10.18.0 install --frozen-lockfile && npx --yes pnpm@10.18.0 build:render`
- **Publish directory:** `dist/public`
- **Rewrite:** `/*` → `/index.html`

Configure `VITE_WHATSAPP_NUMBER` no serviço da Render, antes do build, usando o telefone comercial público em formato internacional e somente dígitos (`55` + DDD + número). O Blueprint pede esse valor durante a conexão; ele é incorporado ao JavaScript do site e ficará visível aos visitantes, como se espera para um contato comercial. Sem um valor válido, os botões explicam que o WhatsApp precisa ser configurado.

## Personalização antes de vender

Configure o telefone comercial; cadastre produtos, referências, compatibilidades e categorias reais em `client/src/data/products.ts`; substitua as ilustrações de fallback por ativos próprios/licenciados; e revise o nome da loja, região, entrega, política de troca, preços, parcelamento e quitação antes da divulgação.

## Documentação oficial da Render

- [Blueprint specification — Static Site](https://render.com/docs/blueprint-spec)
- [Static Site redirects and rewrites](https://render.com/docs/redirects-rewrites)
- [Static Sites](https://render.com/docs/static-sites)
