# Portfolio Website

A modern, dual-design portfolio website built with Next.js 14, featuring two distinct UI/UX experiences (V1 and V2) with dynamic content management, PDF CV generation, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Dual Design System

- **V1 Design**: Classic portfolio layout with smooth scrolling and spotlight cursor effect
- **V2 Design**: Modern full-screen scroll-snap sections with fade-in/out transitions
- Seamless navigation between both designs
- Shared data source for consistent content

### Dynamic Content Management

- **JSON-based content**: All portfolio data managed through a single `portfolio.json` file
- **Type-safe**: Full TypeScript support with defined interfaces
- **Easy updates**: Modify content without touching code

### PDF CV Generation

- **On-demand PDF creation**: Generate professional CVs with a single click
- **Custom design**: Professionally styled PDF with profile image
- **React-PDF integration**: Server-side PDF generation using `@react-pdf/renderer`

### Advanced Animations

- **Framer Motion**: Smooth, performant animations throughout
- **Intersection Observer**: Scroll-triggered animations that replay on each view
- **Typewriter effect**: Dynamic text animation for titles
- **Cursor spotlight**: Interactive glow effect following mouse movement

### Developer Experience

- **Pre-commit hooks**: Automated linting and formatting with Husky
- **Lint-staged**: Only lint changed files for faster commits
- **ESLint + Prettier**: Code quality and consistency
- **GitHub Actions**: Automated deployment to GitHub Pages

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Libraries

- **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### Development Tools

- **Package Manager**: [pnpm](https://pnpm.io/)
- **Linting**: [ESLint 9](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)
- **Staged Files**: [lint-staged](https://github.com/okonet/lint-staged)

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── generate-cv/         # PDF generation endpoint
│   │       └── route.tsx
│   ├── v1/                      # V1 design route
│   │   └── page.tsx
│   ├── v2/                      # V2 design route
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/
│   ├── sections/                # V1 section components
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── hero-section.tsx
│   │   └── projects-section.tsx
│   ├── v2/                      # V2 section components
│   │   ├── about-section-v2.tsx
│   │   ├── contact-section-v2.tsx
│   │   ├── experience-section-v2.tsx
│   │   ├── hero-section-v2.tsx
│   │   ├── navigation-dots-v2.tsx
│   │   └── projects-section-v2.tsx
│   ├── cv-generator.tsx         # CV download button
│   ├── navigation.tsx           # V1 navigation
│   ├── spotlight.tsx            # Cursor glow effect
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── typewriter.tsx           # Typewriter animation
├── data/
│   └── portfolio.json           # All portfolio content
├── lib/
│   ├── data.ts                  # Data fetching utilities
│   └── utils.ts                 # Helper functions
├── types/
│   └── portfolio.ts             # TypeScript interfaces
├── public/
│   └── images/                  # Static assets
├── .github/
│   └── workflows/
│       └── nextjs.yml           # CI/CD pipeline
├── .husky/                      # Git hooks
│   └── pre-commit
├── .lintstagedrc.js            # Lint-staged config
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

## 🛠️ Installation

### Prerequisites

- Node.js 20.x or higher
- pnpm 10.x or higher

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/fahadtanim/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Configuration

### Update Portfolio Content

Edit `data/portfolio.json` to customize your portfolio:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "summary": "Your professional summary...",
  "experience": [...],
  "projects": [...],
  "education": [...],
  "skills": {...}
}
```

### Customize Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Component styles**: Individual component files

### Environment Variables

No environment variables required for basic setup. The project works out of the box.

## 🎨 Design Variants

### V1 Design (`/v1`)

- **Layout**: Sidebar navigation with scrollable content
- **Navigation**: Fixed sidebar with jump links
- **Animations**: Smooth scroll with spotlight cursor effect
- **Best for**: Traditional portfolio presentation

### V2 Design (`/v2`)

- **Layout**: Full-screen scroll-snap sections
- **Navigation**: Navigation dots for section jumping
- **Animations**: Fade-in/out transitions on scroll
- **Best for**: Modern, immersive experience

## 🚢 Deployment

### GitHub Pages (Automated)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

**Setup:**

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to `main` branch
4. Site will be available at `https://yourusername.github.io/portfolio`

### Manual Deployment

```bash
# Build for production
pnpm build

# The output will be in the `out` directory
# Deploy the `out` directory to your hosting provider
```

### Other Platforms

- **Vercel**: Connect your GitHub repository
- **Netlify**: Connect your GitHub repository
- **Cloudflare Pages**: Connect your GitHub repository

## 🧪 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Fix linting issues
pnpm lint --fix
```

### Code Quality

**Pre-commit hooks** automatically run:

- ESLint on TypeScript/JavaScript files
- Prettier on all supported files

**Manual checks:**

```bash
# Lint code
pnpm lint

# Format code
pnpm prettier --write .
```

## 📦 Key Features Explained

### PDF CV Generation

The CV generation feature uses `@react-pdf/renderer` to create professional PDFs on-demand:

1. User clicks "Download Resume"
2. Request sent to `/api/generate-cv`
3. Server generates PDF with portfolio data
4. PDF automatically downloads

**Customize PDF template**: Edit `app/api/generate-cv/route.tsx`

### Scroll-Snap (V2)

V2 uses CSS scroll-snap for smooth section navigation:

- Each section is full viewport height
- Scrolling automatically snaps to sections
- Sections with overflow allow internal scrolling
- Navigation dots show current section

### Fade Animations (V2)

Sections fade in/out using Framer Motion + Intersection Observer:

- Animations trigger when section enters viewport
- Animations replay every time section is viewed
- Staggered animations for child elements

### Cursor Spotlight

Interactive glow effect that follows cursor:

- Tracks mouse position with event listeners
- Radial gradient centered at cursor
- Subtle blue glow for premium feel

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Fahad Tanim**

- GitHub: [@fahadtanim](https://github.com/fahadtanim)
- LinkedIn: [Fahad Tanim](https://linkedin.com/in/fahadtanim)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React PDF](https://react-pdf.org/) - PDF generation
- [Lucide](https://lucide.dev/) - Beautiful icons

---

**Built with ❤️ using Next.js and TypeScript**
