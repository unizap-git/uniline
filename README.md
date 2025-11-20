# Uniline - Customizable Icon Library

A comprehensive icon library with 660+ beautifully crafted icons. Available as React components, CSS icon font, or via CDN. Fully customizable with support for size, color, stroke width, and filled variants.

## Features

- **660+ Icons** across multiple categories
- **Line & Fill Variants** - Toggle between outline and filled versions
- **Tree-shakeable** - Import only the icons you need
- **TypeScript Support** - Full type definitions with autocomplete
- **Multiple Formats** - React components or CSS icon font
- **Fully Customizable** - Size, color, stroke width, and fill variants

## Installation

### NPM

```bash
npm install @unizap/uniline
```

```bash
yarn add @unizap/uniline
```

```bash
pnpm add @unizap/uniline
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css">
```

## Usage

### CSS Icon Font

The simplest way to use Uniline - just include the CSS and use `<i>` tags:

```html
<!-- Include CSS -->
<link rel="stylesheet" href="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css">

<!-- Outline icons -->
<i class="uni-heart" style="color: #e74c3c;"></i>
<i class="uni-star"></i>
<i class="uni-home"></i>

<!-- Filled icons -->
<i class="uni-heart-fill" style="color: #e74c3c;"></i>
<i class="uni-star-fill"></i>
<i class="uni-home-fill"></i>
```

### React Components

Import and use icons as React components with full TypeScript support:

```jsx
import { Heart, Star, Home } from '@unizap/uniline';

function App() {
  return (
    <div>
      <Heart size={24} color="red" />
      <Star size={24} fill={true} />
      <Home size={32} strokeWidth={1.5} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | `24` | Size of the icon in pixels |
| `color` | string | `currentColor` | Color of the icon |
| `strokeWidth` | number | `2` | Stroke width for outline icons |
| `fill` | boolean | `false` | Use filled variant |
| `className` | string | - | Additional CSS classes |

## Icon Categories

- System
- Business
- Communication
- Editor
- Media
- Development
- Weather
- Currency
- E-commerce
- Files & Folders
- Food
- Brands
- User
- Others
- And more...

## License

ISC

## Credits

Made with love by [Unizap](https://unizap.ai) Team
