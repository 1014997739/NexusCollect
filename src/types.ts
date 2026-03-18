export interface Product {
  id: string;
  name: string;
  series: string;
  scale: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  specs: {
    material: string;
    height: string;
    releaseDate: string;
    manufacturer: string;
  };
  features: string[];
  inStock: boolean;
}
