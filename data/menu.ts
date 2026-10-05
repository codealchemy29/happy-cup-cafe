import type { MenuCategory, MenuItem } from "@/types";

export const menuCategories: MenuCategory[] = [
  "All",
  "Croissants",
  "Coffee",
  "Hot Chocolate",
  "Pasta",
  "Pizza",
  "Panini",
  "Desserts",
  "Beverages",
];

export const menuItems: MenuItem[] = [
  {
    id: "chocolate-overload-croissant",
    name: "Chocolate Overload Croissant",
    category: "Croissants",
    description: "Flaky buttery croissant layered with rich chocolate ganache.",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "hazelnut-cream-croissant",
    name: "Hazelnut Cream Croissant",
    category: "Croissants",
    description: "Buttery layers with a smooth hazelnut cream finish.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
  {
    id: "nutella-cold-coffee",
    name: "Nutella Cold Coffee",
    category: "Coffee",
    description: "Creamy cold coffee blended with Nutella for a sweet, rich sip.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "vanilla-bean-latte",
    name: "Vanilla Bean Latte",
    category: "Coffee",
    description: "Silky espresso with vanilla bean foam and a mellow finish.",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
  {
    id: "classic-hot-chocolate",
    name: "Classic Hot Chocolate",
    category: "Hot Chocolate",
    description: "Rich, smooth and comforting with a deep cocoa finish.",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
  {
    id: "cinnamon-hot-chocolate",
    name: "Cinnamon Hot Chocolate",
    category: "Hot Chocolate",
    description: "A warm, spiced cocoa topped with whipped cream and cinnamon.",
    price: 230,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "creamy-mac-cheese-pasta",
    name: "Mac & Cheese Pasta",
    category: "Pasta",
    description: "Creamy cheesy pasta made for comfort and cosy evenings.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "truffle-pesto-pasta",
    name: "Truffle Pesto Pasta",
    category: "Pasta",
    description: "Fresh pasta tossed in pesto, cream and a hint of truffle.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Wood-fired pizza with tomato, basil and melted mozzarella.",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
  {
    id: "paneer-tikka-panini",
    name: "Paneer Tikka Panini",
    category: "Panini",
    description: "Grilled paneer, peppers and herbs in a toasted golden panini.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "brownie-sundae",
    name: "Brownie Sundae",
    category: "Desserts",
    description: "Warm brownie topped with vanilla ice cream and chocolate sauce.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    popular: true,
    vegetarian: true,
  },
  {
    id: "mango-basil-cooler",
    name: "Mango Basil Cooler",
    category: "Beverages",
    description: "A juicy, refreshing cooler with ripe mango and basil notes.",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    popular: false,
    vegetarian: true,
  },
];
