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

Use Node.js 20.9 ou superior. A validação deste pacote foi feita com Node.js 24.

```bash
npm ci
npm run build
npm run start
```

Na Vercel, importe o repositório e mantenha o Framework como **Next.js** e Root Directory como `./`.

Extraia o ZIP e envie os arquivos extraídos para o GitHub, incluindo `package.json`,
`package-lock.json`, `.gitignore`, `src/` e `public/`. O `package.json` deve estar
na raiz do repositório. Não envie o ZIP como único arquivo do repositório.

Na Vercel, use Build Command `npm run build`, Install Command `npm ci` e deixe
Output Directory no padrão do Next.js. Se estiver substituindo o projeto antigo,
substitua também `package.json` e `package-lock.json` e faça um novo deploy sem
reutilizar o cache antigo.

## Correção de segurança

O projeto original compilava, mas usava Next.js 15.5.2, afetado por vulnerabilidades
de segurança. A Vercel bloqueia novos deploys de versões vulneráveis.
Esta versão usa Next.js 15.5.27 e React/React DOM 19.1.9, mantendo as mesmas linhas
de versões principais. O `package-lock.json` fixa as dependências instaladas.
Também foram fixadas versões corrigidas das dependências indiretas PostCSS
(8.5.29) e sharp (0.35.5) por meio de `overrides` no `package.json`.

Referências oficiais:
- https://vercel.com/kb/bulletin/react2shell
- https://nextjs.org/blog/september-2026-security-release

## Imagens e independência da página original

Todos os visuais usados pela landing page estão salvos localmente dentro de `public/images/`.
A página não faz nenhuma requisição de imagem para a LP original.

Arquivos principais:
- `public/images/mockup-chaveiros.png` (mockup transparente; no celular, entre a apresentação e os selos)
- `public/images/local/library-app.webp`
- `public/images/local/gallery-01.webp` até `gallery-07.webp`
- `public/images/local/course-card.webp`
- `public/images/local/pricing-card.webp`
- `public/images/local/sales-card.webp`
- `public/images/local/palette-card.webp`
- `public/images/local/antiopen-card.webp`
