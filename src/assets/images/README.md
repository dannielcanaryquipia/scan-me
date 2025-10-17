# Assets Folder

## Structure

```
assets/
├── images/
│   ├── products/       # Product images
│   ├── icons/          # Icon files
│   └── backgrounds/    # Background images
```

## Usage

Place your image assets in the appropriate folders:

- **products/** - Product images for the product cards and detail pages
- **icons/** - SVG icons and logo files
- **backgrounds/** - Hero section backgrounds and decorative images

## Importing Images

To use images from this folder in your components:

```javascript
import productImage from '../assets/images/products/product-1.jpg';

// Then use in your component
<img src={productImage} alt="Product" />
```

## Current Setup

Currently, the project uses Unsplash URLs for product images. You can replace these with local images by:

1. Adding your images to the appropriate folder
2. Updating the `src/data/products.js` file to import and use local images
3. Ensuring images are optimized for web (WebP format recommended)

## Image Optimization Tips

- Use WebP format for better compression
- Provide multiple sizes for responsive images
- Use lazy loading for better performance
- Keep file sizes under 200KB when possible
