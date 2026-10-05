export type MenuCategory =
  | "All"
  | "Croissants"
  | "Coffee"
  | "Hot Chocolate"
  | "Pasta"
  | "Pizza"
  | "Panini"
  | "Desserts"
  | "Beverages";

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, "All">;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  vegetarian: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
