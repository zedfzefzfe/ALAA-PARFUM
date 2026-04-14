// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Alaa Parfums de Luxe | Extrait de Parfum",
  description: "Découvrez l'art du parfum de luxe. Alaa Parfums de Luxe crée des extraits de parfum exquis en utilisant les meilleures ingrédients du monde. Expérimentez des scents qui définissent l'élégance et la sophistication.",
  language: "fr",
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
  brandName: "Alaa Parfums de Luxe",
  logoImage: "/images/logo.png",
  menuLinks: [
    { label: "Collections", href: "#products" },
    { label: "Notre Histoire", href: "#about" },
    { label: "Journal", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
  ],
  searchPlaceholder: "Rechercher des parfums...",
  cartEmptyText: "Votre panier est vide",
  cartCheckoutText: "Procéder au paiement",
  continueShoppingText: "Continuer les achats",
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
  title: "L'Art du\nParfum de Luxe",
  ctaPrimaryText: "Explorer la Collection",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Notre Histoire",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero.png",
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
  tag: "NOTRE PHILOSOPHIE",
  heading: "Créé avec Passion,\nPorté avec Distinction",
  bodyParagraphs: [
    "Chez Alaa Parfums de Luxe, nous croyons que le parfum est plus qu'une senteur - c'est une expression de l'identité, une signature qui persiste dans la mémoire longtemps après votre départ.",
    "Chacun de nos extraits de parfum est minutieusement créé en utilisant les ingrédients les plus précieux du monde, provenant des coins les plus éloignés du globe. Des oud les plus rares d'Asie du Sud-Est aux plus belles roses de Grasse, chaque élément est choisi selon les normes les plus exigeantes.",
    "Nos maîtres parfumeurs passent des années à perfectionner chaque composition, s'assurant que chaque goutte raconte une histoire d'élégance, de sophistication et de luxe intemporel."
  ],
  linkText: "Découvrir Notre Savoir-Faire",
  linkTarget: "#about",
  image1: "/images/subhero-1.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 25, suffix: "+", label: "Ans d'Excellence" },
    { value: 100, suffix: "%", label: "Ingrédients Naturels" },
    { value: 12, suffix: "", label: "Maîtres Parfumeurs" },
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
  tag: "LA COLLECTION",
  heading: "Là où la Tradition\nRencontre l'Innovation",
  bodyParagraphs: [
    "Notre collection représente l'apogée de l'art de la parfumerie. Chaque parfum est un extrait de parfum - la forme la plus concentrée et luxueuse de parfum, contenant jusqu'à 40% d'huiles de parfum pures.",
    "Cette concentration exceptionnelle garantit que nos senteurs évoluent magnifiquement tout au long de la journée, révélant de nouvelles couches de complexité à chaque heure qui passe. De la première pulvérisation au dernier murmure, vivez un voyage d'excellence olfactive."
  ],
  ctaText: "Voir Tous les Parfums",
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
  tag: "LA COLLECTION",
  heading: "Parfums Signature",
  description: "Découvrez notre collection sélectionnée d'extraits de parfum, chacun un chef-d'œuvre de l'art olfactif créé avec les meilleures ingrédients du monde.",
  viewAllText: "Voir la Collection Complète",
  addToCartText: "Ajouter au Panier",
  addedToCartText: "Ajouté au Panier",
  categories: ["Tous", "Oriental", "Floral", "Boisé", "Frais"],
  products: [
    {
      id: 1,
      name: "Aurum Noir",
      price: 485,
      category: "Oriental",
      image: "/images/perfume-1.jpg",
      description: "Un mélange captivant d'oud rare et d'ambre doré, enveloppé dans de la vanille veloutée.",
      topNotes: ["Safran", "Bergamote", "Poivre Rose"],
      heartNotes: ["Bois d'Oud", "Rose de Mai", "Jasmin"],
      baseNotes: ["Ambre", "Vanille", "Bois de Santal"],
    },
    {
      id: 2,
      name: "Rose d'Or",
      price: 420,
      category: "Floral",
      image: "/images/perfume-2.jpg",
      description: "L'essence de mille roses à l'aube, enrichie de miel doré.",
      topNotes: ["Rose de Bulgarie", "Rose de Damas", "Litchi"],
      heartNotes: ["Pivoine", "Magnolia", "Miel"],
      baseNotes: ["Musc", "Bois de Cachemire", "Ambre Blanc"],
    },
    {
      id: 3,
      name: "Lumière Éternelle",
      price: 395,
      category: "Frais",
      image: "/images/perfume-3.jpg",
      description: "La lumière éternelle capturée dans une bouteille - la brillance des agrumes rencontre les fleurs blanches.",
      topNotes: ["Citron d'Italie", "Bergamote", "Néroli"],
      heartNotes: ["Fleur d'Oranger", "Tuberose", "Ylang-Ylang"],
      baseNotes: ["Musc Blanc", "Bois de Cèdre", "Vétiver"],
    },
    {
      id: 4,
      name: "Bois Précieux",
      price: 450,
      category: "Boisé",
      image: "/images/perfume-4.jpg",
      description: "Les bois précieux des forêts anciennes, distillés en élégance liquide.",
      topNotes: ["Feuille de Cèdre", "Poivre Noir", "Cardamome"],
      heartNotes: ["Bois de Santal", "Patchouli", "Feuille de Violette"],
      baseNotes: ["Bois d'Agar", "Fève Tonka", "Labdanum"],
    },
    {
      id: 5,
      name: "Velours Impérial",
      price: 520,
      category: "Oriental",
      image: "/images/perfume-5.jpg",
      description: "Velours impérial - iris luxueux et résines précieuses en parfaite harmonie.",
      topNotes: ["Beurre d'Iris", "Amande", "Bergamote"],
      heartNotes: ["Fève Tonka", "Benjoin", "Héliotrope"],
      baseNotes: ["Ambergris", "Musc", "Cuir"],
    },
    {
      id: 6,
      name: "Règne Suprême",
      price: 580,
      category: "Oriental",
      image: "/images/perfume-6.jpg",
      description: "Règne suprême - un chef-d'œuvre opulent d'ingrédients rares.",
      topNotes: ["Truffe", "Ylang-Ylang", "Cassis"],
      heartNotes: ["Orchidée", "Bois de Lotus", "Épices"],
      baseNotes: ["Patchouli", "Encens", "Vanille de Madagascar"],
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
      title: "Ingrédients Purs",
      description: "100% d'ingrédients naturels et durables provenant du monde entier.",
    },
    {
      icon: "Sparkles",
      title: "Concentration d'Extrait",
      description: "Jusqu'à 40% d'huiles de parfum pures pour une tenue et une diffusion exceptionnelles.",
    },
    {
      icon: "Truck",
      title: "Livraison Gratuite",
      description: "Livraison gratuite dans le monde entier pour toutes les commandes supérieures à 300€.",
    },
    {
      icon: "Gift",
      title: "Cadeaux de Luxe",
      description: "Emballage élégant avec gravure personnalisée disponible.",
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
  heading: "L'Art du Parfum",
  viewAllText: "Voir Tous les Articles",
  readMoreText: "Lire la Suite",
  posts: [
    {
      id: 1,
      title: "L'Art de Superposer les Parfums",
      date: "15 décembre 2024",
      image: "/images/blog-1.jpg",
      excerpt: "Découvrez les secrets de la création de votre signature olfactive unique en combinant magistralement différents parfums.",
    },
    {
      id: 2,
      title: "Comprendre l'Oud : L'Or Liquide",
      date: "8 décembre 2024",
      image: "/images/blog-2.jpg",
      excerpt: "Explorez le monde fascinant de l'oud, l'un des ingrédients les plus précieux et les plus convoités en parfumerie.",
    },
    {
      id: 3,
      title: "Le Cadeau Parfait : Un Guide",
      date: "28 novembre 2024",
      image: "/images/blog-3.jpg",
      excerpt: "Comment choisir le parfum idéal à offrir à vos proches, de la sélection à la présentation.",
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
  heading: "Questions Fréquemment Posées",
  ctaText: "Contacter Notre Concierge",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "Qu'est-ce qu'un Extrait de Parfum ?",
      answer: "Un Extrait de Parfum est la forme la plus concentrée de parfum, contenant entre 20-40% d'huiles de parfum pures. Cette concentration élevée assure une tenue exceptionnelle, de 8 à 12 heures ou plus sur la peau, et crée une expérience olfactive plus intime et luxueuse.",
    },
    {
      id: 2,
      question: "Comment devrais-je conserver mon parfum ?",
      answer: "Pour préserver l'intégrité de votre parfum, conservez-le dans un endroit frais et sombre, à l'abri de la lumière directe du soleil et des fluctuations de température. Évitez de stocker dans des salles de bain en raison de l'humidité. Correctement conservé, votre extrait de parfum conservera sa qualité pendant de nombreuses années.",
    },
    {
      id: 3,
      question: "Proposez-vous des formats échantillon ?",
      answer: "Oui, nous proposons des échantillons de découverte de 5ml de toute notre collection. Des ensembles d'échantillons sont également disponibles, sélectionnés par nos parfumeurs pour vous aider à explorer différentes familles olfactives et trouver votre parfum parfait.",
    },
    {
      id: 4,
      question: "Quelle est votre politique de retour ?",
      answer: "Nous offrons une garantie de satisfaction de 30 jours sur tous les produits non ouverts. Pour les parfums ouverts, nous proposons des échanges dans les 14 jours si la senteur ne vous convient pas. Veuillez contacter notre concierge client pour l'assistance avec les retours.",
    },
    {
      id: 5,
      question: "Proposez-vous une gravure personnalisée ?",
      answer: "Oui, nous offrons une gravure gratuite sur tous les flacons de 100ml. Vous pouvez personnaliser votre parfum avec jusqu'à 15 caractères, ce qui en fait le cadeau parfait pour les occasions spéciales. La gravure est disponible à la caisse.",
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
      tag: "HÉRITAGE",
      heading: "Un Héritage d'Excellence",
      paragraphs: [
        "Fondée en 1999, Alaa Parfums de Luxe a commencé avec une vision unique : créer des parfums qui transcendent le temps et les tendances. Notre voyage a commencé au cœur de Grasse, en France - la capitale mondiale du parfum - où notre fondatrice s'est formée auprès de maîtres parfumeurs qui avaient perfectionné leur art au fil des générations.",
        "Aujourd'hui, nous continuons cette tradition d'excellence, combinant les techniques intemporelles avec des approches innovantes pour créer des senteurs qui sont à la fois classiques et contemporaines."
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#111111",
      textColor: "#FFFFFF",
    },
    {
      tag: "SAVOIR-FAIRE",
      heading: "La Touche du Maître Parfumeur",
      paragraphs: [],
      quote: "Un parfum devrait raconter une histoire - des lieux visités, des souvenirs chéris et des rêves à réaliser. Chaque bouteille que nous créons est un chapitre de cette histoire.",
      attribution: "— Jean-Pierre Alaa, Fondateur",
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
  heading: "Contactez-Nous",
  description: "Notre concierge parfumerie est disponible pour vous aider avec des recommandations personnalisées, des services cadeaux et toute question concernant notre collection.",
  locationLabel: "Boutique",
  location: "Place de la Parfumerie, 06130 Grasse, France",
  emailLabel: "Email",
  email: "concierge@alaaparfumes.com",
  phoneLabel: "Téléphone",
  phone: "+33 4 93 00 00 00",
  formFields: {
    nameLabel: "Nom",
    namePlaceholder: "Votre nom complet",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
  },
  submitText: "Envoyer le Message",
  submittingText: "Envoi...",
  submittedText: "Envoyé",
  successMessage: "Merci de nous avoir contactés. Notre concierge répondra dans les 24 heures.",
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
  brandName: "Alaa Parfums de Luxe",
  logoImage: "/images/logo.png",
  brandDescription: "Des extraits de parfum exquis, créés avec passion et portés avec distinction. Expérimentez l'art du parfum de luxe.",
  newsletterHeading: "Rejoignez le Cercle Intérieur",
  newsletterDescription: "Abonnez-vous pour accéder exclusivement aux nouvelles sorties, aux événements privés et aux conseils parfumerie.",
  newsletterPlaceholder: "Entrez votre email",
  newsletterButtonText: "S'abonner",
  newsletterSuccessText: "Bienvenue au cercle intérieur d'Alaa.",
  linkGroups: [
    {
      title: "Collections",
      links: [
        { label: "Oriental", href: "#products" },
        { label: "Floral", href: "#products" },
        { label: "Boisé", href: "#products" },
        { label: "Frais", href: "#products" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Parfums sur Mesure", href: "#contact" },
        { label: "Concierge Cadeaux", href: "#contact" },
        { label: "Gravure", href: "#contact" },
        { label: "Cadeaux Entreprise", href: "#contact" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Notre Histoire", href: "#about" },
        { label: "Journal", href: "#blog" },
        { label: "Carrières", href: "#contact" },
        { label: "Presse", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Politique de Confidentialité", href: "#" },
    { label: "Conditions d'Utilisation", href: "#" },
    { label: "Livraison & Retours", href: "#" },
  ],
  copyrightText: "© 2024 Alaa Parfums de Luxe. Tous droits réservés.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
  ],
};
