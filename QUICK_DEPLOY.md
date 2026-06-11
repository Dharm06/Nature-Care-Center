# Quick Deployment Guide for Nature Care Center

## 🚀 Deployment Platforms

### 1. Vercel (Recommended - Easiest)

**Setup Time**: ~2 minutes

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Benefits**:

- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Auto-deployment on git push
- ✅ Free tier available
- ✅ Environment variables support

---

### 2. Netlify

**Setup Time**: ~3 minutes

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

**Netlify UI Method**:

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

---

### 3. GitHub Pages

**Setup Time**: ~5 minutes

```bash
# Build
npm run build

# Deploy (using gh-pages package)
npm install --save-dev gh-pages
npx gh-pages -d dist
```

**Or manually**:

1. Push `dist/` folder to `gh-pages` branch
2. Enable GitHub Pages in settings
3. Site will be available at: `https://yourusername.github.io/repo-name`

---

### 4. Traditional Server (Nginx/Apache/cPanel)

**Setup Time**: ~10 minutes

```bash
# Build the project
npm run build

# Copy dist folder to server
scp -r dist/* user@server:/var/www/html/
```

**Nginx Configuration**:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache Configuration** (.htaccess):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 5. Docker Container

**Dockerfile**:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and Run**:

```bash
docker build -t nature-care-center .
docker run -p 80:80 nature-care-center
```

---

### 6. AWS S3 + CloudFront

**Setup Time**: ~15 minutes

```bash
# Build
npm run build

# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 7. Firebase Hosting

**Setup Time**: ~5 minutes

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase
firebase init hosting

# Deploy
npm run build
firebase deploy --only hosting
```

---

### 8. Heroku (Legacy - Not Recommended)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

---

## 📋 Pre-Deployment Checklist

Before deploying to ANY platform:

```bash
# 1. Install dependencies
npm install

# 2. Run type checking
npm run typecheck

# 3. Run linting
npm run lint

# 4. Build for production
npm run build

# 5. Test production build locally
npm run preview
```

If all commands pass without errors, you're ready to deploy! ✅

---

## 🔗 DNS Configuration

After deploying, point your domain to the hosting platform:

1. **Vercel**: Use nameservers provided by Vercel
2. **Netlify**: Use nameservers provided by Netlify
3. **GitHub Pages**: Create CNAME record → `yourusername.github.io`
4. **Other**: Create A record pointing to server IP

---

## 📞 Contact Information (Embedded in App)

- **Phone**: +91 98259 00012
- **WhatsApp**: wa.me/919825900012
- **Address**: Landmark Complex, Tagore Road, Astron Chowk, Sardarnagar, Rajkot, Gujarat 360001
- **Hours**: Monday – Sunday, 9:00 AM – 8:00 PM

---

## ✅ Recommended Deployment

**For this project, we recommend:**

1. **Development/Testing**: Vercel or Netlify (easiest)
2. **Production**: Vercel + Custom Domain
3. **Backup**: GitHub Pages

All three are free and require minimal configuration!

---

## 🆘 Troubleshooting

### Build Fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Maps Not Loading

- Check browser console for errors
- Verify Google Maps embed URL
- Check referrerPolicy attribute

### Pages Not Loading Correctly

- Ensure SPA routing is configured (index.html fallback)
- Clear browser cache
- Test in incognito mode

### Performance Issues

- Check bundle size: `npm run build -- --analyze`
- Enable gzip compression on server
- Use CDN for assets

---

**Questions?** Refer to `DEPLOYMENT.md` for detailed information.

**Last Updated**: June 2026
