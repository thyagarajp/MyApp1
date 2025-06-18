import React, {createContext, useState, ReactNode} from 'react';

export const ThemeContext = createContext('light');
export const ThemeProvider = ThemeContext.Provider;

// Cart context
export interface CartItem {
  productId: number;
  productName: string;
  productImage: string;
  productStock: number;
  productPrice: string;
  productSalePrice: string;
  rating: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
  };
  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(i => i.productId !== productId));
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
