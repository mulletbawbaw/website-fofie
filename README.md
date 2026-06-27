# fofie — Comissões de Arte

Site de comissões da artista **fofie**: portfólio, tabela de preços, galeria com lightbox e contato via Discord.

**Stack:** Next.js 15 · React 19 · TypeScript 5 · CSS Variables · Vercel

---

## Rodando localmente (npm)

**Pré-requisito:** Node.js 22+

```bash
npm install
npm run dev          # http://localhost:3000
```

Outros comandos:

```bash
npm run build        # build de produção
npm run start        # serve o build de produção localmente
npm run lint         # ESLint
```

---

## Rodando com Docker Compose

**Pré-requisito:** Docker 24+ com Compose v2

### Produção

Constrói a imagem multi-stage e sobe com `node server.js` (imagem mínima via standalone output):

```bash
docker compose up --build          # sobe em foreground
docker compose up --build -d       # sobe em background
docker compose down                # derruba
```

Acesse em `http://localhost:3000`.

### Desenvolvimento (hot reload)

Monta o código-fonte no container e usa `npm run dev`:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Edições nos arquivos de `src/` e `public/` refletem automaticamente no browser.

---

## Deploy na Vercel

1. Faça push do repositório para o GitHub
2. Importe o projeto em [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (detectado automaticamente)
4. Clique em **Deploy**

> Nenhuma variável de ambiente é obrigatória para o deploy básico.

---

## Estrutura do projeto

```
├── public/
│   └── images/          # Imagens estáticas (servidas como WebP pelo Next.js)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout + metadata
│   │   ├── page.tsx     # Página principal (composição das seções)
│   │   └── globals.css  # Design tokens, animações, classes utilitárias
│   ├── components/
│   │   ├── Background   # Canvas de partículas + blobs CSS
│   │   ├── Header       # Nav sticky com troca de idioma (PT/EN)
│   │   ├── Hero         # Título animado + mascote
│   │   ├── Commissions  # Tabela de preços
│   │   ├── HowToOrder   # Passo a passo
│   │   ├── Gallery      # Grid masonry com hover effect
│   │   ├── GalleryModal # Lightbox (abre ao clicar, fecha com Esc)
│   │   ├── Contact      # Card Discord + redes sociais
│   │   ├── Terms        # Termos de serviço
│   │   ├── Footer       # Rodapé
│   │   ├── RevealDiv    # Wrapper com IntersectionObserver (animação de entrada)
│   │   └── Icons        # SVGs Discord e X
│   ├── hooks/
│   │   ├── useLanguage  # Toggle PT ↔ EN
│   │   └── useReveal    # Reveal ao scroll
│   ├── lib/
│   │   └── i18n.ts      # Todas as traduções + constantes (links, imagens, preços)
│   └── types/
│       └── index.ts     # Interfaces TypeScript
├── Dockerfile
├── docker-compose.yml        # Produção
├── docker-compose.dev.yml    # Desenvolvimento (hot reload)
├── next.config.ts
└── tsconfig.json
```

---

## Links

| | |
|---|---|
| Discord (servidor) | [𝙵𝙴𝚂𝚃𝙰 𝙽𝙾𝚃𝚄𝚁𝙽𝙰🦇🥀](https://discord.gg/HNdCkXmvE) |
| X / Twitter | [@fofiexp](https://x.com/fofiexp?s=11) |
