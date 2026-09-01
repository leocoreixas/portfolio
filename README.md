# D.V.M.S · Environmental Solutions — Portfólio

Portfólio pessoal de Danilo Vieira Mendes dos Santos, Cientista Ambiental especializado em
Geoprocessamento e SIG. Construído com React + Vite + TypeScript.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (estilo `base-nova`, sobre [Base UI](https://base-ui.com/))
- [Framer Motion](https://motion.dev/) para animações
- [react-i18next](https://react.i18next.com/) para suporte PT/EN
- [MapLibre GL](https://maplibre.org/) + [react-map-gl](https://visgl.github.io/react-map-gl/) para o mapa interativo

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (tsc -b && vite build)
npm run lint      # oxlint
```

## Estrutura

- `src/components/sections` — seções da landing page (Hero, About, Skills, Services, Projects, MapSection, ImpactMarket, Contact)
- `src/components/ui` — componentes shadcn/ui
- `src/lib/projects.ts` — dados dos projetos/mapas exibidos na galeria
- `src/i18n` — traduções PT/EN
- `docs/danilomaps` — imagens de referência originais (mapas/portfólio fornecidos)


See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
