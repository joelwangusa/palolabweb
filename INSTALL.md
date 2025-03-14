### Change 20250314

Fix Error: Could not load the "sharp" module using the linux-x64 runtime

```bash
# separate upstream and development remotes in a GitHub project
git remote add development  git@github.com:marcoleung/palolabweb.git

# Force reinstall dependencies
rm -rf node_modules yarn.lock
yarn install

# Use @vercel/build-utils to include sharp
# Using sharp for image processing, you might need to include it explicitly for Vercel
yarn add sharp @vercel/build-utils
```

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