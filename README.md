This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It's includes :
- [Trpc API](https://trpc.io/), implementation based on [this repo](https://github.com/devietti/trpc-next13-app)
- [Flowbite](https://flowbite.com/) & [flowbite-react](https://www.flowbite-react.com/)
- Prettier & ESlint

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Trpc usage

#### On client components
See exemple in ```/app/components/client```
```ts
const { data, error } = trpc.userById.useQuery(1);
```

#### On server components
See exemple in ```/app/components/server```
```ts
  const caller = appRouter.createCaller({});
  const result = await caller.userById(2);
```

### Flowbite-react
import component from ```@/lib/flowbite-components```
