# Luxe Hotel - 5 Star Luxury Web Application

A modern, responsive 5-star hotel website built with Next.js, featuring smooth animations, multiple pages, and a professional design using Tailwind CSS.

## Features

- **Home Page**: Hero section with booking CTA and feature highlights
- **Rooms Page**: Showcase of different room types with pricing and features
- **Dining Page**: Multiple restaurants and dining experiences
- **Amenities Page**: Complete list of hotel amenities and services
- **Contact Page**: Contact form and hotel information
- **Booking Page**: Advanced booking form with date and guest selection
- **Smooth Animations**: All pages feature smooth transitions using Framer Motion
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Modern UI**: Clean, luxurious design with gold accents

## Tech Stack

- **Framework**: Next.js 16.2.1 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Development**: ESLint, Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

From the `hotel-app` directory:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Run Production Build

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Home page with hero and features
│   ├── globals.css        # Global styles and Tailwind config
│   ├── rooms/
│   │   └── page.tsx       # Rooms showcase page
│   ├── dining/
│   │   └── page.tsx       # Dining experiences page
│   ├── amenities/
│   │   └── page.tsx       # Hotel amenities page
│   ├── contact/
│   │   └── page.tsx       # Contact form page
│   └── booking/
│       └── page.tsx       # Booking form page
└── components/
    └── Header.tsx         # Navigation header component
```

## Navigation

- **Home**: `/`
- **Rooms**: `/rooms`
- **Dining**: `/dining`
- **Amenities**: `/amenities`
- **Contact**: `/contact`
- **Booking**: `/booking`

## Customization

### Colors

To customize the gold color scheme, edit `src/app/globals.css`:

```css
--color-gold-500: #d4af37;
--color-gold-600: #b8860b;
```

### Content

All page content can be easily modified in their respective `page.tsx` files in the `src/app` directory.

### Images

Replace placeholder image paths in components with actual image assets in the `public/` directory.

## Performance

- Static site generation for all pages
- Optimized images with Next.js Image component
- Minified CSS and JavaScript
- Fast refresh during development with Turbopack

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is open source and available under the MIT License.

## Author

Created with Next.js and modern web technologies for a luxury hotel experience.

