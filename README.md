# 🚀 Bahar Türksoy - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS. Features smooth animations, dark theme with gold accents, and a professional design showcasing my development skills and projects.

## ✨ Features

- **🎨 Modern Design**: Dark theme with gold accents inspired by the Dune universe
- **📱 Responsive**: Fully responsive design that works on all devices
- **⚡ Performance**: Optimized with Next.js 15 and modern web technologies
- **🎭 Animations**: Smooth animations powered by Framer Motion
- **🔍 SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **♿ Accessibility**: Semantic HTML and proper ARIA labels
- **🎯 Interactive**: Contact form, smooth scrolling, and hover effects

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **VS Code** - Development environment

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar with mobile menu
│   ├── Hero.tsx           # Hero section with parallax effects
│   ├── About.tsx          # About section with story and interests
│   ├── Tech.tsx           # Technologies showcase
│   ├── Portfolio.tsx      # Projects showcase with images
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer with social links
│   └── ScrollToTop.tsx    # Scroll to top button
└── utils/
    └── styles.ts          # Common styles and utilities
```

## 🎬 Demo

### Live Demo

Visit the live website: [https://baharturksoy.com](https://baharturksoy.com)

### Screenshots & GIFs

#### 🏠 Hero Section

![Hero Section](./public/demo/hero-demo.gif)
_Parallax effects and atmospheric animations_

#### 💼 Portfolio Section

![Portfolio](./public/demo/portfolio-demo.gif)
_Interactive project cards with hover effects_

#### 🎯 Technologies Section

![Technologies](./public/demo/tech-demo.gif)
_Animated technology categories_

#### 📞 Contact Form

![Contact](./public/demo/contact-demo.gif)
_Functional contact form with validation_

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zbaharyilmaz/bahar-portfolio.git
   cd bahar-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

- **Primary**: Dune Gold (`#FF9E00`)
- **Background**: Dark (`#000000`)
- **Text**: Sand (`#F5F5DC`)

### Content

- **Personal Info**: Update `src/components/Hero.tsx`
- **About Text**: Modify `src/components/About.tsx`
- **Projects**: Edit `src/components/Portfolio.tsx`
- **Technologies**: Update `src/components/Tech.tsx`

### Images

Add your project images to `public/projects/` directory and update the image paths in the Portfolio component.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/zbaharyilmaz/bahar-portfolio/issues).

## 📞 Contact

- **LinkedIn**: [zbaharyilmaz](https://www.linkedin.com/in/zbaharyilmaz/)
- **GitHub**: [zbaharyilmaz](https://github.com/zbaharyilmaz)
- **Portfolio**: [baharturksoy.com](https://baharturksoy.com)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Next.js** team for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
