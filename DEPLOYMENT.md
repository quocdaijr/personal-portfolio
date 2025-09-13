# Deployment Guide

This guide will help you deploy your portfolio website to Vercel and configure it for production.

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Repository**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `quocdaijr/personal-portfolio`

3. **Configure Project**
   - **Project Name**: `personal-portfolio` (or your preferred name)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=your-google-analytics-id (if using)
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)

### Method 2: Deploy via Vercel CLI

1. **Vercel CLI is already installed locally**
   ```bash
   # CLI is installed as dev dependency
   npx vercel --version
   ```

2. **Login to Vercel**
   ```bash
   npx vercel login
   ```
   - Choose your preferred login method (GitHub recommended)
   - Follow the authentication prompts

3. **Deploy from Project Directory**
   ```bash
   # For production deployment
   npx vercel --prod

   # For preview deployment (optional)
   npx vercel
   ```

4. **Follow CLI Prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **personal-portfolio**
   - In which directory is your code located? **./**
   - Want to override settings? **N** (uses vercel.json)

## 🔧 Post-Deployment Configuration

### 1. Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Site URLs**
   - Update `metadataBase` in `src/app/layout.tsx`
   - Update sitemap URLs in `src/app/sitemap.ts`
   - Update robots.txt sitemap URL

### 2. Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SIMPLE_ANALYTICS_ID=your-id

# Contact Form (Optional - for future implementation)
CONTACT_EMAIL=your-email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3. Performance Optimization

The site is already optimized with:
- ✅ Static generation for all pages
- ✅ Optimized images and fonts
- ✅ Minimal JavaScript bundles
- ✅ Proper caching headers

### 4. SEO Configuration

After deployment:

1. **Google Search Console**
   - Add your site to Google Search Console
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google Analytics** (Optional)
   - Create GA4 property
   - Add tracking ID to environment variables

3. **Social Media Meta Tags**
   - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📊 Monitoring and Analytics

### Built-in Analytics
The site includes privacy-focused analytics setup. To enable:

1. **Simple Analytics** (Recommended)
   - Sign up at [simpleanalytics.com](https://simpleanalytics.com)
   - Add script to `src/app/layout.tsx`

2. **Vercel Analytics**
   - Enable in Vercel Dashboard → Analytics
   - Automatically tracks Core Web Vitals

### Performance Monitoring

Monitor your site with:
- **Vercel Analytics**: Built-in performance monitoring
- **Google PageSpeed Insights**: Test performance scores
- **Lighthouse**: Audit accessibility and SEO

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Push to main branch** → Production deployment
2. **Push to other branches** → Preview deployments
3. **Pull requests** → Automatic preview deployments

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Test build locally
   npm run build
   
   # Check for TypeScript errors
   npm run type-check
   
   # Check for linting issues
   npm run lint
   ```

2. **Environment Variables Not Working**
   - Ensure variables start with `NEXT_PUBLIC_` for client-side access
   - Redeploy after adding new environment variables

3. **404 Errors**
   - Check file paths and routing
   - Ensure all pages export default components

### Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Create issues in your repository

## ✅ Deployment Checklist

Before going live:

- [ ] Test build locally (`npm run build`)
- [ ] Update personal information in components
- [ ] Replace placeholder content with real data
- [ ] Add real project images and descriptions
- [ ] Update social links and contact information
- [ ] Configure custom domain
- [ ] Set up analytics
- [ ] Submit sitemap to search engines
- [ ] Test on multiple devices and browsers

Your portfolio is now live and ready to showcase your work! 🎉
