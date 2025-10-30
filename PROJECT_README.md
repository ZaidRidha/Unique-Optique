# unique optique - Luxury Eyewear E-Commerce Website

A bold, artistic luxury eyewear e-commerce website for **unique optique**, a Manhattan-based celebrity optical boutique where hip-hop meets high fashion.

## 🎨 Design Concept

This website blends **luxury optical** meets **urban street culture** with:
- High-energy sections with graffiti elements
- Minimal clean sections for product focus
- Youth culture and contemporary art influences
- Gold signage elegance meets spray paint energy
- Professional boutique meets art gallery aesthetic

## 🌟 Features

### Pages Built
- ✅ **Home Page** - High-energy hero, celebrity ticker, brand manifesto, featured collections
- ✅ **Collections** - Product grid with all eyewear
- ✅ **Celebrity Gallery** - Wall of fame with polaroid-style celebrity photos
- ✅ **About** - Brand story and mission
- ✅ **Visit** - Store location, hours, contact information
- ✅ **Lookbook** - Coming soon placeholder
- ✅ **Journal** - Coming soon placeholder
- ✅ **Cart** - Coming soon placeholder

### Key Components
- **Artistic Elements**: GraffitiText, SprayPaintReveal, BrushStroke, PaintDrip, StickerBadge, HandwrittenNote
- **Layout**: Header with navigation, Footer, Custom Cursor, Smooth Scrolling (Lenis)
- **Product**: ProductCard with graffiti-style price tags and spray paint borders
- **Celebrity**: CelebrityPolaroid with handwritten notes and tape effects
- **UI**: Button (gold, spray, neon variants), Card, Badge, Modal

## 🎨 Color Palette

```css
/* Base Colors */
--color-black: #000000
--color-offwhite: #F5F5F0
--color-concrete: #A8A8A8

/* Luxury */
--color-gold: #D4AF37
--color-gold-light: #E5C158
--color-gold-dark: #B89530

/* Street Art */
--color-neon-pink: #FF1493
--color-electric-blue: #00D9FF
--color-lime-green: #39FF14
```

## 📝 Typography

- **Display/Logo**: Playfair Display (luxury)
- **Street Headers**: Bebas Neue (bold, uppercase)
- **Body**: Inter & Space Grotesk (clean, readable)
- **Handwritten**: Permanent Marker (artistic accents)

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis
- **UI Components**: Radix UI
- **Carousel**: Swiper

## 📦 Installation

```bash
cd uniqueoptiqueweb
npm install
```

## 🚀 Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000` (or 3001 if 3000 is in use).

## 📁 Project Structure

```
uniqueoptiqueweb/
├── src/app/              # Next.js app router pages
│   ├── layout.tsx        # Root layout with Header/Footer
│   ├── page.tsx          # Home page
│   ├── collections/      # Collections pages
│   ├── celebrities/      # Celebrity gallery
│   ├── about/           # About page
│   ├── visit/           # Visit/contact page
│   ├── lookbook/        # Lookbook (placeholder)
│   ├── journal/         # Journal (placeholder)
│   └── cart/            # Shopping cart (placeholder)
├── components/
│   ├── layout/          # Header, Footer, Navigation, CustomCursor
│   ├── home/            # HeroCarousel, CelebrityTicker, BrandManifesto
│   ├── products/        # ProductCard and related
│   ├── celebrities/     # CelebrityPolaroid
│   ├── artistic/        # GraffitiText, BrushStroke, etc.
│   └── ui/              # Button, Card, Badge, Modal
├── lib/
│   ├── animations.ts    # Framer Motion variants
│   ├── gsap-animations.ts # GSAP animation functions
│   ├── constants.ts     # Brand info, mock data
│   └── utils.ts         # Utility functions
├── public/
│   └── svg/             # Graffiti SVG assets
└── styles/
    └── fonts.css        # Font imports (in globals.css)
```

## 🎯 Brand Context

**unique optique** is a premium eyewear boutique in Manhattan:
- **Location**: 3268 Broadway, Manhattan
- **Phone**: 212-581-2020
- **Celebrity Clientele**: Danny DeVito, Jim Jones, King Combs
- **Specialty**: Mix of luxury optical meets urban street culture
- **Vibe**: Where high fashion intersects with hip-hop and contemporary art

## 🎨 Design System

### Button Variants
- `gold` - Luxury gold gradient with shimmer
- `spray` - Graffiti-style with neon pink border
- `neon` - Electric blue with glow effect
- `outline` - Minimal outlined button
- `ghost` - Subtle hover effect

### Badge Variants
- `sticker` - Rotated sticker with marker font
- `celebrity` - Gold outlined for celebrity tags
- `neon` - Electric blue with glow
- `tag` - Lime green tag style

### Animation Styles
- **High-Energy**: Chaotic entrance, polaroid shuffle, glitch effects
- **Minimal**: Smooth fades, clean slides
- **Artistic**: Brush stroke reveals, paint drips, spray paint animations

## 📝 Mock Data

The site currently uses mock data defined in `lib/constants.ts`:
- **Products**: Sample luxury eyewear (Cartier, DITA, Oliver Peoples, etc.)
- **Celebrities**: Danny DeVito, Jim Jones, King Combs
- **Collections**: Hip-Hop Legends, Classic Hollywood, NYC Streets

To add real products or celebrities, update the arrays in `lib/constants.ts`.

## 🎭 Customization

### Changing Colors
Edit the CSS custom properties in `src/app/globals.css`:

```css
:root {
  --color-gold: #D4AF37;
  --color-neon-pink: #FF1493;
  /* etc. */
}
```

### Adding New Products
Update `PRODUCTS` array in `lib/constants.ts`:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  designer: "Designer Name",
  price: 1250,
  category: "sunglasses" | "optical" | "reading",
  // ... other fields
}
```

### Adding Celebrities
Update `CELEBRITIES` array in `lib/constants.ts`:

```typescript
{
  id: "unique-id",
  name: "Celebrity Name",
  image: "/images/celebrities/photo.jpg",
  date: "2024",
  quote: "Optional quote",
  category: "hip-hop" | "hollywood" | "sports" | "fashion"
}
```

## 🚧 Future Enhancements

- [ ] E-commerce functionality (cart, checkout)
- [ ] Product detail pages with full specs
- [ ] Real celebrity images and content
- [ ] Lookbook visual storytelling
- [ ] Journal/blog system
- [ ] Virtual try-on feature
- [ ] Appointment booking system
- [ ] Admin dashboard for content management

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Custom cursor is desktop-only for optimal experience.

## 🎨 Performance Notes

- Uses Next.js 16 with Turbopack for fast development
- Smooth scrolling with Lenis
- Optimized animations with Framer Motion and GSAP
- SVG graphics for crisp graffiti elements
- Lazy loading for images

## 📄 License

This is a custom project for unique optique. All rights reserved.

## 🤝 Support

For questions or support, contact unique optique:
- Phone: 212-581-2020
- Address: 3268 Broadway, Manhattan, NY

---

**Built with ❤️ for unique optique - Where Legends See Clearly**
