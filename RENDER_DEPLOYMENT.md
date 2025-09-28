# Render Deployment Guide for Louis Ellis Tutoring Website

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to host your code
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Stripe Account**: For payment processing (optional initially)
4. **Calendly Account**: For booking system (optional initially)

## Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com) and click "New repository"
   - Name it `louis-tutoring-website` or similar
   - Make it public or private (your choice)
   - Don't initialize with README (we already have files)

2. **Push your local code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/louis-tutoring-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy on Render

1. **Go to Render Dashboard**:
   - Visit [dashboard.render.com](https://dashboard.render.com)
   - Sign in or create an account

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your `louis-tutoring-website` repository

3. **Configure the Service**:
   - **Name**: `louis-tutoring-website` (or your preferred name)
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Root Directory**: Leave empty (uses root)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

4. **Environment Variables**:
   Add these in the Render dashboard under "Environment":
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-app-name.onrender.com
   ```

## Step 3: Optional Integrations

### Stripe Setup (for payments)
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add to Render environment variables:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   ```

### Calendly Setup (for booking)
1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Set up your availability and session types
3. Add to Render environment variables:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-link
   ```

## Step 4: Deploy

1. **Click "Create Web Service"** in Render
2. **Wait for deployment** (usually 2-5 minutes)
3. **Your site will be live** at `https://your-app-name.onrender.com`

## Step 5: Custom Domain (Optional)

1. **In Render dashboard**:
   - Go to your service settings
   - Click "Custom Domains"
   - Add your domain (e.g., `louisellis.com`)

2. **Update DNS**:
   - Point your domain to Render's servers
   - Render will provide the CNAME record

## Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check the build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify build command is correct

2. **Environment Variables**:
   - Make sure all required env vars are set in Render
   - Check that variable names match exactly

3. **Stripe/Calendly Not Working**:
   - Verify API keys are correct
   - Check that URLs are properly configured
   - Test in development first

### Render Free Tier Limitations:
- Services sleep after 15 minutes of inactivity
- Cold starts can take 30-60 seconds
- 750 hours per month limit

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Contact form works (if email service configured)
- [ ] Calendly integration works (if configured)
- [ ] Stripe payments work (if configured)
- [ ] Mobile responsiveness
- [ ] SEO meta tags are working

## Monitoring

- **Render Dashboard**: Monitor service health and logs
- **Analytics**: Consider adding Google Analytics
- **Uptime**: Monitor with services like UptimeRobot

## Updates

To update your site:
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
3. Render will automatically redeploy

## Support

- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)
- **Calendly Docs**: [help.calendly.com](https://help.calendly.com)
