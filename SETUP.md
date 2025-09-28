# Louis Ellis Tutoring Website - Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration (for contact form)
EMAIL_FROM=noreply@louisellis.com
EMAIL_TO=louis@example.com

# Calendly Configuration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-link
```

## Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. Create products and prices for your tutoring sessions:
   - Single Session: £45
   - 5-Session Package: £200
   - 10-Session Package: £380
4. Update the price IDs in the services page

## Calendly Setup

1. Create a Calendly account at https://calendly.com
2. Set up your availability and session types
3. Update the Calendly URL in the booking page and environment variables

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is configured for deployment on Render.com:

1. Connect your GitHub repository to Render
2. Set the build command: `npm install && npm run build`
3. Set the start command: `npm start`
4. Add your environment variables in the Render dashboard

## Features Implemented

- ✅ Next.js 13 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom theme
- ✅ shadcn/ui components
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Contact form
- ✅ Blog system
- ✅ Calendly integration
- ✅ Stripe payment integration
- ✅ Professional branding

## Pages

- Home: Hero section, value proposition, testimonials
- About: Louis's background and qualifications
- Services: Subjects and pricing
- Testimonials: Student reviews
- Blog: Educational content
- Contact: Contact form and information
- Book: Calendly scheduling integration

## Next Steps

1. Add real content and images
2. Set up email service for contact form
3. Configure Stripe products and prices
4. Set up Calendly account
5. Add analytics (Google Analytics)
6. Set up domain and SSL
7. Add more blog content
8. Implement CMS for content management
