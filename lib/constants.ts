// Brand Information
export const BRAND_INFO = {
  name: "unique optique",
  tagline: "WHERE LEGENDS SEE CLEARLY",
  phone: "212-581-2020",
  address: "3268 Broadway, Manhattan, NY",
  email: "info@uniqueoptique.com",
  instagram: "@uniqueoptique",
  hours: {
    weekday: "10:00 AM - 7:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "12:00 PM - 5:00 PM",
  },
};

// Celebrity Data
export interface Celebrity {
  id: string;
  name: string;
  image: string;
  date: string;
  quote?: string;
  product?: string;
  category: "hip-hop" | "hollywood" | "sports" | "fashion";
}

export const CELEBRITIES: Celebrity[] = [
  {
    id: "danny-devito",
    name: "Danny DeVito",
    image: "/images/celebrities/danny-devito.jpg",
    date: "2024",
    quote: "These frames are legendary!",
    category: "hollywood",
  },
  {
    id: "jim-jones",
    name: "Jim Jones",
    image: "/images/celebrities/jim-jones.jpg",
    date: "2024",
    quote: "Dipset vision, baby!",
    category: "hip-hop",
  },
  {
    id: "king-combs",
    name: "King Combs",
    image: "/images/celebrities/king-combs.jpg",
    date: "2023",
    quote: "Legacy vision.",
    category: "hip-hop",
  },
  {
    id: "celebrity-4",
    name: "Artist Name",
    image: "/images/celebrities/placeholder-4.jpg",
    date: "2023",
    category: "fashion",
  },
];

// Product Data
export interface Product {
  id: string;
  name: string;
  designer: string;
  price: number;
  category: "sunglasses" | "optical" | "reading";
  collection: string;
  images: string[];
  colors: string[];
  material: string;
  size: string;
  description: string;
  celebrityFavorite?: boolean;
  celebrity?: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "cartier-santos-1",
    name: "Cartier Santos Sunglasses",
    designer: "Cartier",
    price: 1250,
    category: "sunglasses",
    collection: "Classic Hollywood",
    images: [
      "/images/products/cartier-santos-1.jpg",
      "/images/products/cartier-santos-2.jpg",
      "/images/products/cartier-santos-3.jpg",
    ],
    colors: ["Gold", "Silver", "Black"],
    material: "Metal with precious metal plating",
    size: "52-20-140",
    description: "Iconic Cartier design with refined elegance and superior craftsmanship.",
    celebrityFavorite: true,
    celebrity: "Jim Jones",
    tags: ["luxury", "designer", "iconic"],
  },
  {
    id: "dita-mach-one",
    name: "DITA Mach-One",
    designer: "DITA",
    price: 895,
    category: "sunglasses",
    collection: "Hip-Hop Legends",
    images: [
      "/images/products/dita-mach-1.jpg",
      "/images/products/dita-mach-2.jpg",
    ],
    colors: ["Matte Black", "Titanium"],
    material: "Titanium",
    size: "56-19-145",
    description: "Bold aviator design favored by hip-hop royalty.",
    celebrityFavorite: true,
    tags: ["aviator", "titanium", "bold"],
  },
  {
    id: "jacques-marie-mage",
    name: "Jacques Marie Mage Molino",
    designer: "Jacques Marie Mage",
    price: 1595,
    category: "sunglasses",
    collection: "NYC Streets",
    images: ["/images/products/jmm-molino.jpg"],
    colors: ["Havana", "Black"],
    material: "Acetate",
    size: "48-24-145",
    description: "Limited edition handcrafted acetate frames.",
    tags: ["limited", "handcrafted", "acetate"],
  },
  {
    id: "oliver-peoples-1",
    name: "Oliver Peoples Gregory Peck",
    designer: "Oliver Peoples",
    price: 495,
    category: "optical",
    collection: "Classic Hollywood",
    images: ["/images/products/op-gregory-peck.jpg"],
    colors: ["Cocobolo", "Black"],
    material: "Acetate",
    size: "47-23-150",
    description: "Timeless elegance inspired by Hollywood's golden age.",
    tags: ["classic", "timeless", "iconic"],
  },
];

// Collections
export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  theme: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "hip-hop-legends",
    name: "Hip-Hop Legends",
    description: "Bold frames for bold personalities",
    image: "/images/collections/hip-hop.jpg",
    theme: "street",
  },
  {
    id: "classic-hollywood",
    name: "Classic Hollywood",
    description: "Timeless elegance meets modern luxury",
    image: "/images/collections/hollywood.jpg",
    theme: "luxury",
  },
  {
    id: "nyc-streets",
    name: "NYC Streets",
    description: "Where urban energy meets optical precision",
    image: "/images/collections/nyc.jpg",
    theme: "urban",
  },
  {
    id: "artistic-vision",
    name: "Artistic Vision",
    description: "Limited edition collaborations with contemporary artists",
    image: "/images/collections/artistic.jpg",
    theme: "artistic",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Collections", href: "/collections" },
  { name: "Celebrities", href: "/celebrities" },
  { name: "Lookbook", href: "/lookbook" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Visit", href: "/visit" },
];

// Filter Options
export const FILTER_OPTIONS = {
  categories: ["All", "Sunglasses", "Optical", "Reading"],
  designers: ["All", "Cartier", "DITA", "Oliver Peoples", "Jacques Marie Mage"],
  priceRanges: [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under $500", min: 0, max: 500 },
    { label: "$500 - $1000", min: 500, max: 1000 },
    { label: "$1000 - $1500", min: 1000, max: 1500 },
    { label: "$1500+", min: 1500, max: Infinity },
  ],
  colors: ["All", "Black", "Gold", "Silver", "Havana", "Tortoise"],
};

// Social Media
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/uniqueoptique",
  facebook: "https://facebook.com/uniqueoptique",
  twitter: "https://twitter.com/uniqueoptique",
};

// Testimonials
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  title: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    text: "The best optical boutique in Manhattan. Period.",
    author: "Jim Jones",
    title: "Hip-Hop Artist",
  },
  {
    id: "2",
    text: "They understand eyewear as an art form.",
    author: "Danny DeVito",
    title: "Actor",
  },
  {
    id: "3",
    text: "Where legends come to see clearly.",
    author: "King Combs",
    title: "Artist & Entrepreneur",
  },
];
