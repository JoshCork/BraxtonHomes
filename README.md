# Braxton Homes

A modern Next.js website for Braxton Custom Homes, converted from WordPress.

## Features

- **Next.js 14+** with TypeScript
- **Tailwind CSS v3.4.1** for styling
- **Responsive Design** with mobile-first approach
- **Contact Form** with API route (email integration ready)
- **Optimized Images** using Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about-us/          # About Us page
│   ├── contact-us/        # Contact Us page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handler
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Header.tsx         # Sidebar header with navigation
│   ├── Navigation.tsx     # Desktop navigation
│   ├── MobileMenu.tsx     # Mobile navigation
│   ├── Footer.tsx        # Footer component
│   └── Layout.tsx         # Page layout wrapper
├── public/
│   └── images/            # Static images
│       ├── logo/         # Logo files
│       ├── hero/         # Hero/banner images
│       ├── about/        # About page images
│       └── projects/     # Project images
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Pages

- **Home** (`/`) - Hero image, welcome text, architectural rendering
- **About Us** (`/about-us`) - Company information and values
- **Contact Us** (`/contact-us`) - Contact form
- **Projects** - Project portfolio pages (placeholder pages created)

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

The project is configured for Vercel's automatic deployments.

## Contact Form

The contact form is set up with an API route at `/api/contact`. To enable email functionality, add your email service provider (Resend, SendGrid, etc.) in `app/api/contact/route.ts`.

## License

© Copyright 2025 | Braxton Builders, LLC | All Rights Reserved | AZ Res. Lic. No. ROC0143138
