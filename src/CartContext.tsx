import { ReactNode, createContext, useState } from "react";
import { Product } from "./data";

interface ContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
});

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
