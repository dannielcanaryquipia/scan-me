# ScanMe - Local Product Showcase

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

## 📋 Overview

ScanMe is a modern web application that showcases local products from Gubat, Sorsogon. The platform allows users to browse through a curated selection of handcrafted snacks and treats, with detailed product pages and an intuitive user interface.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Product Showcase**: Beautiful display of local products with detailed information
- **Interactive UI**: Smooth animations and transitions for better user experience
- **Dark/Light Theme**: Built-in theme support with context API
- **Product Details**: Comprehensive product pages with image galleries and specifications
- **Modern Stack**: Built with the latest React and Vite for optimal performance
- **Accessibility**: WCAG compliant with proper focus management and screen reader support
- **Performance**: Optimized assets and efficient code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **State Management**: React Context API
- **Styling**: CSS Modules with custom theming
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Package Manager**: npm

## 🏗️ Project Structure

```
scan-me/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar/      # Navigation component
│   │   ├── Footer/      # Footer component
│   │   ├── ImageCarousel/  # Image carousel for product display
│   │   ├── ImageSlider/  # Product image slider
│   │   ├── ProductCard/  # Product card component
│   │   ├── ProductLabelCard/  # Product label display
│   │   └── ProductContentCard/  # Product details content
│   │
│   ├── contexts/        # React context providers
│   │   └── ThemeContext/  # Theme management
│   │
│   ├── data/            # Static data files
│   │   └── products.js  # Product data
│   │
│   ├── pages/           # Page components
│   │   ├── Home/        # Home page component
│   │   └── ProductDetails/  # Product details page
│   │
│   ├── styles/          # Global styles and themes
│   │   ├── base.css     # Base styles
│   │   ├── components/  # Component-specific styles
│   │   └── utils/       # Utility classes and mixins
│   │
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
│
├── .gitignore
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/scan-me.git
   cd scan-me
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Theming

The application supports light and dark themes, managed through React Context. The theme can be toggled using the theme switcher in the navigation bar.

### Key Features:
- Theme persistence using localStorage
- Smooth transitions between themes
- System preference detection
- Accessible color contrast ratios

## 🧪 Testing

Run the linter:
```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Local producers of Gubat, Sorsogon for their amazing products
- Open source community for the amazing tools and libraries that made this project possible
│   ├── ImageSlider.jsx # Image carousel component
│   ├── ProductLabelCard.jsx # Product label display
│   └── ProductContentCard.jsx # Product information display
├── pages/              # Page components
│   ├── Products.jsx    # Products listing page
│   └── ProductDetails.jsx # Individual product page
├── data/               # Data files
│   └── products.js     # Product data and images
├── styles/             # CSS files
│   └── constants.css   # CSS variables and utilities
└── assets/             # Static assets
    └── images/         # Product images
```

## Technologies Used

- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Pure CSS** - Custom CSS with modern features
- **CSS Grid & Flexbox** - Modern layout systems

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Optimized CSS with minimal redundancy
- Efficient component re-rendering
- Smooth animations with hardware acceleration
- Responsive images with proper sizing

## Future Enhancements

- Google Forms integration for reviews
- Search and filtering functionality
- Product categories
- Shopping cart functionality
- User authentication
- Admin dashboard for product management