# Nature Care Center - Deployment Guide

## Project Overview

A luxury wellness website for Nature Care Center Rajkot, featuring organic products and natural health solutions.

## Fixed Issues

✅ Fixed JSX attribute error in `Contact.tsx` - Changed `allowFullScreen` to `allowFullscreen` (React standard)

## Pre-Deployment Checklist

### 1. Local Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run type checking
npm run typecheck

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. Environment Configuration

- No environment variables required for basic deployment
- All endpoints are external (Google Maps API, Pexels images, Supabase optional)
- Google Fonts loaded from CDN

### 3. Build Output

- **Output Directory**: `dist/`
- **Entry Point**: `index.html`
- **Build Time**: ~1-2 minutes
- **Bundle Size**: Optimized for production

### 4. Deployment Options

#### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages

- Configure `vite.config.ts` with correct base path
- Push to `gh-pages` branch

#### Traditional Server (Nginx/Apache)

1. Run `npm run build`
2. Copy `dist/` contents to web server root
3. Configure server to serve `index.html` for all routes (SPA)

### 5. Production Checklist

- [ ] Dependencies installed: `npm install`
- [ ] Type checking passes: `npm run typecheck`
- [ ] Linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in build
- [ ] Test Google Maps embed loads correctly
- [ ] Test all navigation links work
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test WhatsApp integration with correct number
- [ ] Verify contact information is accurate
- [ ] Test smooth scrolling on all browsers
- [ ] Verify custom cursor works on desktop
- [ ] Check loading screen animation

### 6. Performance Optimization

- ✅ Tree-shaking enabled
- ✅ Code splitting configured
- ✅ Image lazy loading enabled
- ✅ Responsive images from Pexels CDN
- ✅ CSS/JS minification automatic
- ✅ Tailwind CSS purging enabled

### 7. SEO Configuration

- ✅ Meta tags configured in `index.html`
- ✅ Open Graph tags for social sharing
- ✅ Schema markup (LocalBusiness) included
- ✅ Canonical URL set
- ✅ Mobile viewport configured
- ✅ Robots meta tag configured

### 8. Analytics & Monitoring (Optional)

Consider adding:

- Google Analytics (GA4)
- Sentry error tracking
- Vercel Analytics

### 9. Security

- ✅ No console logs in production code
- ✅ External images from trusted CDN
- ✅ No sensitive data in code
- ✅ HTTPS required for deployment
- ✅ Content Security Policy ready

### 10. Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies

- **React 18.3** - UI Framework
- **TypeScript 5.5** - Type Safety
- **Vite 5.4** - Build Tool
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 11** - Animations
- **GSAP 3.12** - Advanced animations
- **Lucide React 0.344** - Icons
- **Supabase JS 2.57** - Optional backend

## Deployment Commands

### Build for Production

```bash
npm run build
```

### Test Production Build Locally

```bash
npm run preview
```

### Check for TypeScript Errors

```bash
npm run typecheck
```

### Lint Code

```bash
npm run lint
```

## Troubleshooting

### Build Fails

- Clear `node_modules/` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist/`
- Check Node version: `node --version` (v18+ recommended)

### Maps Not Loading

- Verify Google Maps embed URL is correct
- Check browser console for CORS errors
- Ensure `referrerPolicy="no-referrer-when-downgrade"` is present

### Animation Issues

- Clear browser cache
- Test in incognito/private mode
- Check Framer Motion and GSAP versions in package.json

## Support

For issues or questions about deployment, contact the development team.

## Last Updated

June 2026

## Status

✅ Production Ready
