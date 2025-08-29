# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a complete blog system, dark/light mode, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 13+ with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Blog System**: MDX-powered blog with frontmatter support and syntax highlighting
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized images, lazy loading, and Core Web Vitals tracking
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Analytics**: Privacy-focused analytics integration ready

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog pages
│   │   ├── contact/         # Contact page
│   │   └── projects/        # Projects page
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Basic UI components
│   │   └── ...              # Feature components
│   ├── lib/                 # Utility functions
│   │   ├── mdx.ts           # MDX processing
│   │   ├── utils.ts         # General utilities
│   │   └── analytics.ts     # Analytics setup
│   ├── styles/              # Global styles
│   ├── data/                # JSON data files
│   └── content/             # MDX blog posts
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── vercel.json             # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/quocdaijr/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `src/content/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Post Title"
description: "Post description for SEO"
publishedAt: "2024-01-15"
tags: ["React", "Next.js"]
category: "Development"
featured: false
readTime: "5 min read"
author: "Your Name"
---

# Your Post Content

Write your blog post content here using MDX syntax.
```

### Updating Projects

Edit `src/data/projects.json` to add or modify project information.

### Customizing Content

- **Personal Info**: Update `src/components/hero.tsx` and `src/app/about/page.tsx`
- **Contact Info**: Modify `src/components/contact-info.tsx`
- **Social Links**: Update links in `src/components/footer.tsx` and navigation

## 🎨 Customization

### Theme Colors

Modify CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  /* ... other variables */
}
```

### Typography

Update font configuration in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
},
```

## 📊 Analytics

The project includes privacy-focused analytics setup. To enable:

1. Add your analytics script to `src/app/layout.tsx`
2. Configure tracking in `src/lib/analytics.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

Built with ❤️ by [Your Name](https://github.com/quocdaijr)
