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