export interface ArtPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Pricing {
  service: string;
  price: string;
  description: string;
}

export interface Artist {
  id: string;
  name: string;
  shortDescription: string;
  fullInformation: string;
  styleDescription: string;
  theme: {
    bgClass: string;
    textClass: string;
    accentClass: string;
    cardBgClass: string;
    fontClass: string;
  };
  portfolio: ArtPiece[];
  pricing: Pricing[];
}

export const ARTISTS: Record<string, Artist> = {
  female: {
    id: 'female',
    name: 'Elena Rose',
    shortDescription: 'Abstract & Floral Compositions',
    fullInformation: 'Elena Rose is a contemporary artist who explores the delicate balance between nature and human emotion. Based in Barcelona, her work has been featured in numerous galleries across Europe. She uses a mix of watercolors, acrylics, and digital mediums to craft pieces that evoke a sense of calm and introspection.',
    styleDescription: 'Vibrant, soft, and fluid. Elena\'s style heavily features pastel tones, dominated by various shades of pink and rose gold. Her abstract floral arrangements are recognized by their sweeping, gentle curves and intentional use of negative space.',
    theme: {
      bgClass: 'bg-pink-50',
      textClass: 'text-pink-950',
      accentClass: 'text-pink-600',
      cardBgClass: 'bg-pink-100',
      fontClass: 'font-serif',
    },
    portfolio: [
      { id: 'f1', title: 'Spring Bloom', description: 'Watercolor on canvas, exploring early spring.', imageUrl: 'https://images.unsplash.com/photo-1557053964-937650b63311?auto=format&fit=crop&q=80&w=1000' },
      { id: 'f2', title: 'Petal Dance', description: 'Abstract interpretation of cherry blossoms.', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000' },
      { id: 'f3', title: 'Roseate Dreams', description: 'A surreal dive into floral dreamscapes.', imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000' },
      { id: 'f4', title: 'Quiet Dawn', description: 'Morning light capturing a solitary bloom.', imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1000' }
    ],
    pricing: [
      { service: 'Custom Watercolor Portrait', price: 'from $250', description: 'A bespoke portrait incorporating your favorite floral elements.' },
      { service: 'Large Canvas Original', price: 'from $800', description: 'Large-scale abstract floral artwork for interior spaces.' },
      { service: 'Digital License', price: '$150', description: 'Commercial use license for digital artworks.' }
    ]
  },
  male: {
    id: 'male',
    name: 'Marcus Vance',
    shortDescription: 'Dark Geometric & Surrealism',
    fullInformation: 'Marcus Vance is an industrial designer and digital artist from Berlin. His aesthetic is heavily influenced by brutalist architecture, cyberpunk culture, and dark surrealism. He creates immersive, high-contrast pieces that challenge perspective and form.',
    styleDescription: 'Sharp, structural, and intense. Marcus primarily works with deep blacks, crimson reds, and stark whites. His style employs hard geometric shapes mixed with surreal, impossible structures, delivering a commanding and dramatic visual experience.',
    theme: {
      bgClass: 'bg-neutral-950',
      textClass: 'text-red-100',
      accentClass: 'text-red-600',
      cardBgClass: 'bg-neutral-900 border border-red-900/30',
      fontClass: 'font-mono',
    },
    portfolio: [
      { id: 'm1', title: 'Crimson Monolith', description: 'A towering structure in a void.', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000' },
      { id: 'm2', title: 'Neon Pulse', description: 'Abstract interpretation of city energy.', imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000' },
      { id: 'm3', title: 'Shattered Dimension', description: 'Geometric fragmentation in red and black.', imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000' },
      { id: 'm4', title: 'The Red Void', description: 'Minimalist brutalism.', imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=1000' }
    ],
    pricing: [
      { service: 'Custom 3D Render', price: 'from $400', description: 'A bespoke geometric landscape or surreal structure.' },
      { service: 'Brand Identity (Dark Theme)', price: 'from $1200', description: 'Full visual identity package for bold brands.' },
      { service: 'Exclusive High-Res Print', price: '$200', description: 'Limited edition archival print of selected works.' }
    ]
  }
};
