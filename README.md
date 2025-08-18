# mc.css
mc.css lets you use Minecraft's design system in pure CSS, with extra features included with React.

## Installation
For just CSS, you can use a CDN:
```css
@import url("https://unpkg.com/@klashdevelopment/mc.css/styles/index.css");
```
```html
<link rel="stylesheet" href="https://unpkg.com/@klashdevelopment/mc.css/styles/index.css" />
```

For CSS or React, you can use the NPM package:
```sh
npm install @klashdevelopment/mc.css
```

Then, import the react components:
```tsx
import { ... } from "@klashdevelopment/mc.css";
```

## Icons
A lot of the assets here come from CCLeaf, which Klash provides a node package for interfacing with for HD & SD minecraft icons, 3d renders of mobs/structures, icons, effects, particles, etc.
You can find it here: [npm:@klashdevelopment/mcicons](https://www.npmjs.com/package/@klashdevelopment/mcicons)

## Contributions
Feel free to contribute! You can build the React package with `npm run build`, or the CSS in styles/index.css.