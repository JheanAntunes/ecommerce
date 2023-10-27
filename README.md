## Projeto de ecommerce para praticar
> uma listinha resumida que pratiquei.
- git / github
    - git add
    - git commit
    - padrão de git
    - git branch
    - git checkout
    - git merge
    - git  $outros

- React
    - State
    - useEffect
    - ContextApi
    - useRef
    - Hooks Personalizados
    - useCallback
    - memo
- Nextjs
    - Streaming Suspense em componentes servidores que são async.
    - Metadata _básico_
    - Roteamento / Página estática
    - Roteamento dinâmico / Página dinâmica (é possível gerar página estática em segmento dinâmico)
    - Manipulador de Roteamento
    - Manipulador de Roteamento Dinâmico
    - Next Font
    - Componentes Client / Server
    - Error
- Figma 
   - [projeto](https://www.figma.com/file/F3L5y9LhTba3u1u0sdW2OS/Projeto-Ecommerce?type=design&node-id=0%3A1&mode=design&t=WpXyV82ACMpRTKdX-1)
   
> Tem coisas que o projeto tem e o figma não porque quando eu estava programando tive algumas ideias.

- zod
   - z.object
   - z.[.safeParse](https://github.com/colinhacks/zod#safeparse) para validar os dados da api
   - z.string e outros...
   
- Tailwind
     - Font nexts com tailwind
     - Tailwind animate
     - Tailwind merge
     - Tailwind clsx
     - Tailwind cva
     - Responsividade com telas e uma formula de limitar o layout.
         - xs (min-width: 20rem /* 320px */)
         - sm  (min-width: 24rem /* 384px */)
         - md  (min-width: 28rem /* 448px */)
         - lg  (min-width: 32rem /* 512px */)
         - xl  (min-width: 36rem /* 576px */)
         - 2xl  (min-width: 42rem /* 672px */)
         - 3xl  (min-width: 48rem /* 768px */)
         - 4xl  (min-width: 56rem /* 896px */)
         - 5xl  (min-width: 64rem /* 1024px */)
         - 6xl  (min-width: 72rem /* 1152px */)
         - 7xl  (min-width: 80rem /* 1280px */)
> //Formula:
grid-template-colums: calc(50vw - tela/2) 1fr calc(50vw - tela/2); vídeo explicando [Layout com Largura Máxima sem max-width](https://www.youtube.com/watch?v=Kj2L78BHvKw&t=264s)

- Framer
     - AnimatePresence
     - Variant
     - NextImage com Motion
     
> [Blog](https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/) para fazer um Slider com framer (Eu não gosto de escrever um código que não entendo! Então fiz um [curso no youtube](https://www.youtube.com/watch?v=znbCa4Rr054&t=896s) de framer motion básico para entender o que aquele código estava fazendo e estudei um pouco o framer. Implementei slider automático a cada 3s vai para outra image no carrossel)

- Shadcn-ui components
     - Dialog
     - toast
     - separator
     - button
     -  outros components
- LocalStorage
> Criei a lógica de gostei do produto com localStorage + context Api

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

- [x] clonar repositório.
- [x] npm install para instalar as dependências do projeto.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
