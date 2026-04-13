// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Alaa Luxury Parfumes | Extrait de Parfum",
  description: "Discover the art of luxury fragrance. Alaa Luxury Parfumes creates exquisite extraits de parfum using the world's finest ingredients. Experience scents that define elegance and sophistication.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  logoImage: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Alaa Luxury Parfumes",
  logoImage: "/images/logo.png",
  menuLinks: [
    { label: "Collections", href: "#products" },
    { label: "Our Story", href: "#about" },
    { label: "Journal", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
  ],
  searchPlaceholder: "Search fragrances...",
  cartEmptyText: "Your cart is empty",
  cartCheckoutText: "Proceed to Checkout",
  continueShoppingText: "Continue Shopping",
  menuBackgroundImage: "/images/hero-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "EXTRAIT DE PARFUM",
  title: "The Art of\nLuxury Fragrance",
  ctaPrimaryText: "Explore Collection",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Our Story",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "OUR PHILOSOPHY",
  heading: "Crafted with Passion,\nWorn with Distinction",
  bodyParagraphs: [
    "At Alaa Luxury Parfumes, we believe that fragrance is more than a scent—it is an expression of identity, a signature that lingers in memory long after you have departed.",
    "Each of our extraits de parfum is meticulously crafted using the world's most precious ingredients, sourced from the farthest corners of the globe. From the rarest ouds of Southeast Asia to the finest roses of Grasse, every element is chosen with uncompromising standards.",
    "Our master perfumers spend years perfecting each composition, ensuring that every drop tells a story of elegance, sophistication, and timeless luxury."
  ],
  linkText: "Discover Our Craft",
  linkTarget: "#about",
  image1: "/images/subhero-1.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 100, suffix: "%", label: "Natural Ingredients" },
    { value: 12, suffix: "", label: "Master Perfumers" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "THE COLLECTION",
  heading: "Where Tradition\nMeets Innovation",
  bodyParagraphs: [
    "Our collection represents the pinnacle of perfumery artistry. Each fragrance is an extrait de parfum—the most concentrated and luxurious form of fragrance, containing up to 40% pure perfume oils.",
    "This exceptional concentration ensures that our scents evolve beautifully throughout the day, revealing new layers of complexity with every hour that passes. From the first spritz to the final whisper, experience a journey of olfactory excellence."
  ],
  ctaText: "View All Fragrances",
  ctaTarget: "#products",
  backgroundImage: "/images/about-1.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  topNotes?: string[];
  heartNotes?: string[];
  baseNotes?: string[];
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "THE COLLECTION",
  heading: "Signature Fragrances",
  description: "Discover our curated collection of extraits de parfum, each a masterpiece of olfactory artistry crafted with the world's finest ingredients.",
  viewAllText: "View Full Collection",
  addToCartText: "Add to Cart",
  addedToCartText: "Added to Cart",
  categories: ["All", "Oriental", "Floral", "Woody", "Fresh"],
  products: [
    {
      id: 1,
      name: "Aurum Noir",
      price: 485,
      category: "Oriental",
      image: "/images/perfume-1.jpg",
      description: "A captivating blend of rare oud and golden amber, wrapped in velvet vanilla.",
      topNotes: ["Saffron", "Bergamot", "Pink Pepper"],
      heartNotes: ["Oud Wood", "Rose de Mai", "Jasmine"],
      baseNotes: ["Amber", "Vanilla", "Sandalwood"],
    },
    {
      id: 2,
      name: "Rose d'Or",
      price: 420,
      category: "Floral",
      image: "/images/perfume-2.jpg",
      description: "The essence of thousand roses at dawn, enriched with golden honey.",
      topNotes: ["Bulgarian Rose", "Damask Rose", "Lychee"],
      heartNotes: ["Peony", "Magnolia", "Honey"],
      baseNotes: ["Musk", "Cashmere Wood", "White Amber"],
    },
    {
      id: 3,
      name: "Lumière Éternelle",
      price: 395,
      category: "Fresh",
      image: "/images/perfume-3.jpg",
      description: "Eternal light captured in a bottle—citrus brilliance meets white florals.",
      topNotes: ["Italian Lemon", "Bergamot", "Neroli"],
      heartNotes: ["Orange Blossom", "Tuberose", "Ylang-Ylang"],
      baseNotes: ["White Musk", "Cedarwood", "Vetiver"],
    },
    {
      id: 4,
      name: "Bois Précieux",
      price: 450,
      category: "Woody",
      image: "/images/perfume-4.jpg",
      description: "Precious woods from ancient forests, distilled into liquid elegance.",
      topNotes: ["Cedar Leaf", "Black Pepper", "Cardamom"],
      heartNotes: ["Sandalwood", "Patchouli", "Violet Leaf"],
      baseNotes: ["Agarwood", "Tonka Bean", "Labdanum"],
    },
    {
      id: 5,
      name: "Velours Impérial",
      price: 520,
      category: "Oriental",
      image: "/images/perfume-5.jpg",
      description: "Imperial velvet—luxurious iris and precious resins in perfect harmony.",
      topNotes: ["Iris Butter", "Almond", "Bergamot"],
      heartNotes: ["Tonka Bean", "Benzoin", "Heliotrope"],
      baseNotes: ["Ambergris", "Musk", "Leather"],
    },
    {
      id: 6,
      name: "Règne Suprême",
      price: 580,
      category: "Oriental",
      image: "/images/perfume-6.jpg",
      description: "Supreme reign—an opulent masterpiece of rare ingredients.",
      topNotes: ["Truffle", "Ylang-Ylang", "Black Currant"],
      heartNotes: ["Orchid", "Lotus Wood", "Spices"],
      baseNotes: ["Patchouli", "Incense", "Madagascar Vanilla"],
    },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart" | "Sparkles" | "Gift";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "Pure Ingredients",
      description: "100% natural and sustainably sourced ingredients from around the world.",
    },
    {
      icon: "Sparkles",
      title: "Extrait Concentration",
      description: "Up to 40% pure perfume oils for exceptional longevity and sillage.",
    },
    {
      icon: "Truck",
      title: "Complimentary Shipping",
      description: "Free worldwide delivery on all orders over $300.",
    },
    {
      icon: "Gift",
      title: "Luxury Gifting",
      description: "Elegant packaging with personalized engraving available.",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "JOURNAL",
  heading: "The Art of Fragrance",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  posts: [
    {
      id: 1,
      title: "The Art of Layering Fragrances",
      date: "December 15, 2024",
      image: "/images/blog-1.jpg",
      excerpt: "Discover the secrets of creating your unique signature scent by masterfully combining different fragrances.",
    },
    {
      id: 2,
      title: "Understanding Oud: Liquid Gold",
      date: "December 8, 2024",
      image: "/images/blog-2.jpg",
      excerpt: "Explore the fascinating world of oud, one of the most precious and coveted ingredients in perfumery.",
    },
    {
      id: 3,
      title: "The Perfect Gift: A Guide",
      date: "November 28, 2024",
      image: "/images/blog-3.jpg",
      excerpt: "How to choose the ideal fragrance gift for your loved ones, from selection to presentation.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "SUPPORT",
  heading: "Frequently Asked Questions",
  ctaText: "Contact Our Concierge",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "What is an Extrait de Parfum?",
      answer: "An Extrait de Parfum is the most concentrated form of fragrance, containing between 20-40% pure perfume oils. This high concentration ensures exceptional longevity, typically lasting 8-12 hours or more on the skin, and creates a more intimate, luxurious scent experience.",
    },
    {
      id: 2,
      question: "How should I store my fragrance?",
      answer: "To preserve the integrity of your fragrance, store it in a cool, dark place away from direct sunlight and temperature fluctuations. Avoid storing in bathrooms due to humidity. Properly stored, your extrait de parfum will maintain its quality for many years.",
    },
    {
      id: 3,
      question: "Do you offer sample sizes?",
      answer: "Yes, we offer 5ml discovery samples of our entire collection. Sample sets are also available, curated by our perfumers to help you explore different fragrance families and find your perfect match.",
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee on all unopened products. For opened fragrances, we provide exchanges within 14 days if the scent does not suit you. Please contact our customer concierge for assistance with returns.",
    },
    {
      id: 5,
      question: "Do you provide personalized engraving?",
      answer: "Yes, we offer complimentary engraving on all 100ml bottles. You can personalize your fragrance with up to 15 characters, making it the perfect gift for special occasions. Engraving is available at checkout.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "HERITAGE",
      heading: "A Legacy of Excellence",
      paragraphs: [
        "Founded in 1999, Alaa Luxury Parfumes began with a singular vision: to create fragrances that transcend time and trends. Our journey started in the heart of Grasse, France—the world's perfume capital—where our founder trained under master perfumers who had perfected their craft over generations.",
        "Today, we continue this tradition of excellence, combining time-honored techniques with innovative approaches to create scents that are both classic and contemporary."
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#111111",
      textColor: "#FFFFFF",
    },
    {
      tag: "CRAFTSMANSHIP",
      heading: "The Master Perfumer's Touch",
      paragraphs: [],
      quote: "A fragrance should tell a story—of places visited, memories cherished, and dreams yet to be realized. Each bottle we create is a chapter in that story.",
      attribution: "— Jean-Pierre Alaa, Founder",
      image: "/images/about-2.jpg",
      backgroundColor: "#0a0a0a",
      textColor: "#FFFFFF",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Get in Touch",
  description: "Our fragrance concierge is available to assist you with personalized recommendations, gift services, and any inquiries about our collection.",
  locationLabel: "Boutique",
  location: "Place de la Parfumerie, 06130 Grasse, France",
  emailLabel: "Email",
  email: "concierge@alaaparfumes.com",
  phoneLabel: "Phone",
  phone: "+33 4 93 00 00 00",
  formFields: {
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "How may we assist you?",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Sent",
  successMessage: "Thank you for reaching out. Our concierge will respond within 24 hours.",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  logoImage: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Alaa Luxury Parfumes",
  logoImage: "/images/logo.png",
  brandDescription: "Exquisite extraits de parfum, crafted with passion and worn with distinction. Experience the art of luxury fragrance.",
  newsletterHeading: "Join the Inner Circle",
  newsletterDescription: "Subscribe to receive exclusive access to new releases, private events, and fragrance insights.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Welcome to the Alaa inner circle.",
  linkGroups: [
    {
      title: "Collections",
      links: [
        { label: "Oriental", href: "#products" },
        { label: "Floral", href: "#products" },
        { label: "Woody", href: "#products" },
        { label: "Fresh", href: "#products" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Bespoke Fragrances", href: "#contact" },
        { label: "Gift Concierge", href: "#contact" },
        { label: "Engraving", href: "#contact" },
        { label: "Corporate Gifting", href: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Our Story", href: "#about" },
        { label: "Journal", href: "#blog" },
        { label: "Careers", href: "#contact" },
        { label: "Press", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping & Returns", href: "#" },
  ],
  copyrightText: "© 2024 Alaa Luxury Parfumes. All rights reserved.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
  ],
};
