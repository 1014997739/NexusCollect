import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'im-mk85',
    name: 'Iron Man Mark LXXXV',
    series: 'Marvel Studios: The Infinity Saga',
    scale: '1/6 Scale',
    price: 425.00,
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The ultimate Iron Man armor. Features diecast material, LED light-up functions across the upper body, back and chest arc reactor, and a meticulously crafted Tony Stark head sculpt.',
    specs: {
      material: 'Diecast, PVC, ABS',
      height: '32.5 cm',
      releaseDate: 'Q4 2023',
      manufacturer: 'Stark Industries / HT'
    },
    features: [
      'Authentic and detailed likeness of Iron Man Mark LXXXV',
      'One (1) newly painted head sculpt with authentic likeness of Robert Downey Jr.',
      '16 LED light-up points throughout parts of the armor',
      'Articulated air flaps at back of the armor'
    ],
    inStock: true
  },
  {
    id: 'rx-78-2',
    name: 'RX-78-2 Gundam PG Unleashed',
    series: 'Mobile Suit Gundam',
    scale: '1/60 Scale',
    price: 275.00,
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The culmination of 40 years of Gunpla evolution. Features the largest insert-molded frame in Gunpla history, metallic 3D stickers, and a multi-layer structure for unprecedented detail.',
    specs: {
      material: 'PS, ABS, PP, PE, PUR',
      height: '30 cm',
      releaseDate: 'Available Now',
      manufacturer: 'Bandai Spirits'
    },
    features: [
      'Phase 1-5 assembly process simulating real mobile suit construction',
      'Over 90 points of articulation',
      'LED light-up beam saber and chest vents',
      'Metallic 3D stickers and etching seals'
    ],
    inStock: true
  },
  {
    id: 'sm-adv',
    name: 'Spider-Man (Advanced Suit 2.0)',
    series: 'Marvel\'s Spider-Man 2',
    scale: '1/6 Scale',
    price: 290.00,
    image: 'https://images.unsplash.com/photo-1512138664757-360e0aad5132?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512138664757-360e0aad5132?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Peter Parker returns in his upgraded Advanced Suit. Features newly developed web wings, articulated pincers, and a highly detailed tailored suit with emblem.',
    specs: {
      material: 'Fabric, PVC, ABS',
      height: '30 cm',
      releaseDate: 'Q1 2024',
      manufacturer: 'HT'
    },
    features: [
      'Newly developed masked head sculpt with interchangeable eye pieces',
      'Newly designed Advanced Suit 2.0',
      'Attachable web wings with magnetic function',
      'Four (4) articulated silver pincers'
    ],
    inStock: false
  },
  {
    id: 'eva-01',
    name: 'Evangelion Test Type-01',
    series: 'Neon Genesis Evangelion',
    scale: 'Non-Scale Metal Build',
    price: 320.00,
    image: 'https://images.unsplash.com/photo-1580436541340-986fcfa5a901?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580436541340-986fcfa5a901?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'A stunning re-imagining of the EVA-01 by original designer Ikuto Yamashita. Features diecast metal joints for incredible posability and weight.',
    specs: {
      material: 'Diecast, ABS, PVC',
      height: '22 cm',
      releaseDate: 'Available Now',
      manufacturer: 'Tamashii Nations'
    },
    features: [
      'Original design by Ikuto Yamashita',
      'Diecast metal joints',
      'Pallet Rifle, Progressive Knife, Magoroku Exterminate Sword',
      'Detailed display stand resembling the cage'
    ],
    inStock: true
  }
];
