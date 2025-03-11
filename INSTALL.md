### Change 20250310

```bash
# error: could not load the "sharp" module using the linux-x64 runtime
yarn add sharp
```

> Sharp Missing In Production:
> https://nextjs.org/docs/messages/sharp-missing-in-production

### Changed 20250309

#### Modified files

- public/placeholder-XXX
- public/portfolio-XXX
- public/team-XXX
- app/about/page.tsx
- app/contact/page.tsx
- app/protfolio/page.tsx
- app/team/page.tsx
- app/layout.tsx
- app/pages.tsx
- next.config.js

```bash
# To import an SVG file as a React component in Next.js
yarn add -D @svgr/webpack
vi next.config.js
```

```js
const nextConfig: NextConfig = {
  ...
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
```

#### Deployment

```bash
# development
yarn && yarn dev

# production
yarn build #or yarn build:prod # recommend
yarn start #or next start 
```