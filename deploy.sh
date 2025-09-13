#!/bin/bash

# Portfolio Deployment Script
# This script automates the deployment process to Vercel

set -e  # Exit on any error

echo "🚀 Starting Portfolio Deployment Process..."
echo "============================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is available
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx not found. Please install Node.js and npm."
    exit 1
fi

echo "✅ Environment checks passed"

# Run pre-deployment checks
echo ""
echo "🔍 Running pre-deployment checks..."

# Check TypeScript
echo "Checking TypeScript..."
npm run type-check
echo "✅ TypeScript check passed"

# Run build
echo "Building application..."
npm run build
echo "✅ Build successful"

# Check git status
echo "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Consider committing them first."
    echo "Uncommitted files:"
    git status --porcelain
    echo ""
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled."
        exit 1
    fi
fi

echo "✅ Pre-deployment checks completed"

# Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
echo "If this is your first deployment, you'll need to:"
echo "1. Login to Vercel (npx vercel login)"
echo "2. Follow the setup prompts"
echo ""

# Check if user is logged in to Vercel
if ! npx vercel whoami &> /dev/null; then
    echo "🔐 You need to login to Vercel first."
    echo "Running: npx vercel login"
    npx vercel login
fi

echo "Deploying to production..."
npx vercel --prod

echo ""
echo "🎉 Deployment completed!"
echo "Your portfolio should now be live on Vercel."
echo ""
echo "Next steps:"
echo "1. Test your deployed site"
echo "2. Set up a custom domain (optional)"
echo "3. Configure analytics (optional)"
echo "4. Update your content with real information"
echo ""
echo "For more information, see DEPLOYMENT.md"
