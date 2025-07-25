# Boudoir Shoot Ellen - SSR Website

A modern, server-side rendered website for "Boudoir Shoot Ellen" built with Next.js, featuring elegant boudoir photography services with optimized SEO and responsive design.

## 🌟 Features

- **Server-Side Rendering (SSR)** with Next.js 15 for optimal SEO and performance
- **Three Main Pages**: Home, FAQ, and Contact with dynamic meta tags
- **Responsive Design** using Tailwind CSS for all device sizes
- **SEO Optimized** with dynamic meta keywords and descriptions
- **Lazy Loading** for client-side gallery images to improve performance
- **Modern UI/UX** with clean, elegant design focused on boudoir photography
- **Contact Form** with session type selection and detailed information
- **FAQ Section** with expandable questions and answers
- **Professional Gallery** with placeholder images and smooth loading

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify ready
- **Package Manager**: npm

## 📁 Project Structure

```
bse-ssr-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes (placeholder images)
│   │   ├── contact/           # Contact page
│   │   ├── faq/              # FAQ page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout with SEO
│   │   └── page.tsx          # Home page
│   ├── components/            # Reusable React components
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── ContactInfo.tsx   # Contact information display
│   │   ├── FAQSection.tsx    # FAQ accordion component
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Gallery.tsx       # Image gallery with lazy loading
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navigation.tsx    # Main navigation
│   │   └── Services.tsx      # Services showcase
│   ├── lib/                  # Utility functions (future use)
│   └── types/                # TypeScript type definitions (future use)
├── client/                   # Client-side specific code (future use)
├── server/                   # Server-side specific code (future use)
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RickDenKhoxen/bse-ssr-app.git
   cd bse-ssr-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design Features

### SEO Optimization
- Dynamic meta titles, descriptions, and keywords for each page
- Open Graph tags for social media sharing
- Proper semantic HTML structure
- Server-side rendering for search engine crawling

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with mobile menu
- Flexible grid layouts that adapt to all screen sizes
- Optimized images and typography scaling

### Performance
- Server-side rendering for initial page load
- Lazy loading for gallery images
- Optimized bundle size with Next.js
- Custom placeholder API for development images

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action buttons
- Services showcase with three main offerings
- Gallery section with lazy-loaded images
- Professional footer with contact information

### FAQ Page (`/faq`)
- Comprehensive FAQ section with expandable answers
- Common questions about boudoir photography sessions
- SEO-optimized content for search visibility

### Contact Page (`/contact`)
- Contact form with session type selection
- Contact information with email, phone, and location
- Session information with pricing and duration
- Social media links for portfolio viewing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy your site

### Manual Deployment
1. Run `npm run build` to create production build
2. Upload the `.next` folder and other necessary files to your hosting provider
3. Ensure Node.js runtime is available on your server

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization
- **Colors**: Modify Tailwind CSS configuration in `tailwind.config.ts`
- **Content**: Update component files in `src/components/`
- **SEO**: Modify meta tags in page files and `layout.tsx`
- **Images**: Replace placeholder images with actual photography

## 📞 Contact Information

For questions about this project or boudoir photography services:

- **Email**: hello@boudoirshootellen.com
- **Phone**: (555) 123-4567
- **Website**: [Boudoir Shoot Ellen](https://your-domain.com)

## 📝 License

This project is created for Boudoir Shoot Ellen. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies.
