# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.

## Overview

This portfolio is inspired by the clean, minimalist design of [edh.dev](https://edh.dev/) while carrying over the content and personality from my original site [qdjr.dev](https://qdjr.dev/).

## Features

- **Home Page**: Brief introduction and featured projects
- **Blog**: Collection of technical articles and personal insights
- **About Me**: Personal background, skills, and interests
- **Projects**: Showcase of professional and personal work
- **Contact**: Ways to get in touch

## Tech Stack

- **Frontend**: React with Next.js
- **Styling**: Tailwind CSS
- **Content Management**: MDX for blog posts
- **Deployment**: Vercel
- **Analytics**: Simple Analytics (privacy-focused)

## Project Structure

```
├── components/          # Reusable UI components
├── pages/               # Next.js pages
│   ├── index.js         # Home page
│   ├── blog/            # Blog posts
│   ├── about/           # About me
│   ├── projects/        # Projects showcase
│   └── contact/         # Contact information
├── public/              # Static assets
├── styles/              # Global styles and Tailwind config
├── lib/                 # Utility functions
├── content/             # MDX content for blog posts
└── data/                # JSON data for projects and other content
```

## Design Principles

- **Minimalist**: Clean interface with focus on content
- **Typography-driven**: Strong typography as a design element
- **Performance**: Fast load times and optimized assets
- **Accessibility**: WCAG compliance for all users
- **Dark/Light Mode**: Theme toggle for user preference

## Content Migration

Content will be migrated from the original [qdjr.dev](https://qdjr.dev/) site, including:

- Personal introduction and background
- Blog posts with their original publication dates
- Project descriptions and details
- Contact information and social links

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The site is configured for seamless deployment on Vercel:

1. Push to your GitHub repository
2. Connect the repository to Vercel
3. Configure your custom domain

## License

MIT

## Acknowledgements

- Design inspiration from [edh.dev](https://edh.dev/)
- Original content from [qdjr.dev](https://qdjr.dev/)
