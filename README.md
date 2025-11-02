# Kitchen One - Restaurant Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

## 📋 Overview

Kitchen One is a modern restaurant website showcasing delicious pizzas, pastas, and sides. Located in San Vicente, Bulan, Sorsogon, Kitchen One serves high-quality, flavorful meals made with fresh ingredients and passion.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Product Showcase**: Beautiful display of menu items with detailed information, prices, and sizes
- **Interactive UI**: Smooth animations and transitions for better user experience
- **Dark/Light Theme**: Built-in theme support with elegant dark yellow (#D4AF37) accent color
- **Product Details**: Comprehensive product pages with image galleries, descriptions, and customization options
- **Contact Form**: Easy way for customers to get in touch
- **Performance Optimized**: Intersection Observer API for smooth scrolling and lazy loading
- **Modern Stack**: Built with the latest React and Vite for optimal performance
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

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
kitchen-one-website/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   │   └── images/      # Product and logo images
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx  # Navigation component
│   │   ├── Footer.jsx  # Footer component
│   │   ├── ImageCarousel.jsx  # Image carousel for homepage
│   │   ├── ImageSlider.jsx  # Product image slider
│   │   ├── ProductCard.jsx  # Product card component
│   │   ├── ProductContentCard.jsx  # Product details content
│   │   ├── ContactForm.jsx  # Contact form component
│   │   └── ...
│   │
│   ├── contexts/        # React context providers
│   │   └── ThemeContext.jsx  # Theme management
│   │
│   ├── data/            # Static data files
│   │   └── products.js  # Product/menu data
│   │
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Home page component
│   │   ├── Products.jsx # Products listing component
│   │   └── ProductDetails.jsx  # Product details page
│   │
│   ├── styles/          # Global styles and themes
│   │   └── constants.css  # CSS variables and theme definitions
│   │
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css       # Global styles
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
   git clone https://github.com/your-username/kitchen-one-website.git
   cd kitchen-one-website
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

## 🍕 Menu Features

- **Pizza Products**: Multiple sizes (Small, Medium, Large) with different crust types (Regular, Thin, Superthin) and slice options (8 Regular Cut, 16 Regular Cut, 32 Square Cut)
- **Pasta Dishes**: Various delicious pasta options with detailed descriptions
- **Sides**: Additional menu items to complement your meal

## 🎨 Theming

The application supports light and dark themes, managed through React Context. The theme can be toggled using the theme switcher in the navigation bar.

### Theme Colors:
- **Light Mode**: Black primary color (#000000)
- **Dark Mode**: Dark yellow primary color (#D4AF37) with elegant gold accents

### Key Features:
- Theme persistence using localStorage
- Smooth transitions between themes
- System preference detection
- Accessible color contrast ratios

## 📞 Contact Information

- **Address**: San Vicente, Bulan, Sorsogon
- **Phone**: 0909-474-4215
- **Facebook**: [Kitchen One](https://www.facebook.com/profile.php?id=100076165180445)

## 🧪 Testing

Run the linter:
```bash
npm run lint
```

## 🎯 Performance Optimizations

- **Intersection Observer API**: Smooth scroll-triggered animations
- **React.memo**: Optimized component re-rendering
- **GPU Acceleration**: Hardware-accelerated transforms and animations
- **Lazy Loading**: Images load only when visible
- **Staggered Animations**: Sequential product card animations for smooth entrance
- **Will-change Hints**: Browser optimization hints for better performance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

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

- Kitchen One team for the amazing menu and service
- Open source community for the amazing tools and libraries that made this project possible

## 🔮 Future Enhancements

- Online ordering system
- Shopping cart functionality
- User reviews and ratings
- Order tracking
- Admin dashboard for menu management
- Payment integration
- Delivery tracking
