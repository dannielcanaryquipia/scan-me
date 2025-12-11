# ScanMe - Local Product Showcase

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

## 📋 Overview

ScanMe is a modern web application that showcases local products from Gubat, Sorsogon. The platform allows users to browse through a curated selection of handcrafted snacks and treats, with detailed product pages and an intuitive user interface.

## 🚀 Key Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: Smooth animations and transitions for better user experience
- **Dark/Light Theme**: Built-in theme support with context API
- **Product Showcase**: Beautiful display of local products with detailed information
- **Product Details**: Comprehensive pages with image galleries and specifications
- **Accessibility**: WCAG compliant with proper focus management and screen reader support
- **Performance**: Optimized assets and efficient code splitting

## 🛠️ Tech Stack

### Core Technologies
- **Frontend**: React 19 with modern hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel for CI/CD and global CDN
- **Version Control**: Git with Git LFS for large file management

### Key Dependencies

- **Frontend**: React 19 with modern hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router v7 for seamless navigation
- **State Management**: React Context API for theme and global state
- **Styling**: CSS Modules with custom theming support
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Package Manager**: npm

## 🏗️ Project Structure

```
scan-me/
├── public/              # Static files and assets
├── src/
│   ├── assets/          # Images, fonts, and static assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar/      # Responsive navigation
│   │   ├── Footer/      # Site footer with links
│   │   ├── ImageCarousel/  # Interactive product image carousel
│   │   ├── ImageSlider/  # Smooth image slider component
│   │   ├── ProductCard/  # Product preview cards
│   │   ├── ProductLabelCard/  # Product information labels
│   │   └── ProductContentCard/  # Detailed product information
│   │
│   ├── contexts/        # React context providers
│   │   └── ThemeContext/  # Theme and UI state management
│   │
│   ├── data/            # Application data
│   │   └── products.js  # Product catalog and metadata
│   │
│   ├── pages/           # Route components
│   │   ├── Home/        # Landing page with featured products
│   │   └── ProductDetails/  # Detailed product view
│   │
│   ├── styles/          # Global styles and theming
│   │   ├── base.css     # CSS reset and base styles
│   │   ├── components/  # Component-specific styles
│   │   └── utils/       # Utility classes and mixins
│   │
│   ├── App.jsx          # Root application component
│   └── main.jsx         # Application entry point
│
├── .gitignore           # Git ignore rules
├── package.json         # Project configuration and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🚀 Deployment

The application is deployed on Vercel for seamless CI/CD and global CDN distribution.

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

### Git LFS Setup

This project uses Git LFS (Large File Storage) to manage large media files like the background video. Follow these steps to set up Git LFS:

1. Install Git LFS if you haven't already:
   ```bash
   # For macOS using Homebrew
   brew install git-lfs
   
   # For Windows using Chocolatey
   choco install git-lfs
   
   # For Debian/Ubuntu
   sudo apt-get install git-lfs
   ```

2. Initialize Git LFS in your repository (only needed once per repository):
   ```bash
   git lfs install
   ```

3. Track large files (already configured in `.gitattributes`):
   ```bash
   # Example for tracking video files
   git lfs track "*.mp4"
   git add .gitattributes
   git commit -m "Add LFS tracking for video files"
   ```

4. Push your changes as usual. Large files will be handled by Git LFS:
   ```bash
   git add .
   git commit -m "Add large video file"
   git push
   ```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/scan-me.git
   cd scan-me
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist/` directory.

## 🎨 Theming & UI

The application features a sophisticated theming system with:

- **Theme Persistence**: Saves user preference in localStorage
- **System Preference**: Automatically detects system color scheme
- **Smooth Transitions**: Elegant theme switching animations
- **Accessibility**: WCAG 2.1 AA compliant color contrast
- **Responsive Design**: Optimized for all screen sizes

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Compressed and properly sized images
- **Efficient Rendering**: Memoized components for better performance
- **Critical CSS**: Inlined critical styles for faster initial render

## 🧪 Development

Run the linter:
```bash
npm run lint
# or
yarn lint
```

Start development server with hot reload:
```bash
npm run dev
# or
yarn dev
```

## 🌍 Browser Support

The application is tested and works on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

- **User Experience**
  - Advanced product filtering and search
  - Product categories and collections
  - User reviews and ratings
  - Wishlist functionality

- **E-commerce Features**
  - Shopping cart integration
  - Checkout process
  - Order tracking
  - User accounts and profiles

- **Content Management**
  - Admin dashboard
  - Product management
  - Inventory tracking
  - Sales analytics

- **Integration**
  - Google Forms for reviews
  - Social media sharing
  - Email subscription
  - Payment gateway integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Local producers of Gubat, Sorsogon for their amazing products
- Open source community for the amazing tools and libraries
- All contributors who helped improve this project