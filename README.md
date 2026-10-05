# Chaveiros Amigurumi Pro — Vercel/GitHub

Landing page Next.js em dark premium + rosa, adaptada ao mecanismo:

**ESCOLHA → APRENDA → FAÇA → PRECIFIQUE → VENDA**

## Antes de publicar

Edite `src/config/offer.ts`:

- `starter.price`: preço do plano reduzido
- `starter.checkout`: checkout do plano Starter (está vazio por segurança)
- `premium.price`: preço do plano completo
- `premium.checkout`: checkout principal

As UTMs e `fbclid` são propagadas para o checkout automaticamente.

## Oferta usada nesta versão

Plano Starter:
- 30 receitas selecionadas
- sem curso
- sem ferramentas/bonificações premium

Plano Premium:
- +160 receitas
- biblioteca organizada
- 21 aulas para iniciantes
- planilha de precificação
- guia de divulgação e vendas
- paleta de cores
- técnica anti-abertura
- atualizações futuras

## Deploy

```bash
npm install
npm run build
npm run start
```

Na Vercel, importe o repositório e mantenha o Framework como **Next.js** e Root Directory como `./`.

## Imagens e independência da página original

Todos os visuais usados pela landing page estão salvos localmente dentro de `public/images/`.
A página não faz nenhuma requisição de imagem para a LP original.

Arquivos principais:
- `public/images/hero-amigurumi.png`
- `public/images/local/library-app.webp`
- `public/images/local/gallery-01.webp` até `gallery-07.webp`
- `public/images/local/course-card.webp`
- `public/images/local/pricing-card.webp`
- `public/images/local/sales-card.webp`
- `public/images/local/palette-card.webp`
- `public/images/local/antiopen-card.webp`
