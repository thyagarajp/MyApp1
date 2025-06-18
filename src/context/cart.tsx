import React, {createContext, useState, ReactNode} from 'react';

export interface CartItem {
  productId: number;
  productName: string;
  productImage: string;
  productStock: number;
  productPrice: string;
  productSalePrice: string;
  rating: number;
  count: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  incrementCount: (productId: number) => void;
  decrementCount: (productId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementCount: () => {},
  decrementCount: () => {},
});

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const found = prev.find(i => i.productId === item.productId);
      if (found) {
        return prev.map(i =>
          i.productId === item.productId ? {...i, count: i.count + 1} : i
        );
      }
      return [...prev, {...item, count: 1}];
    });
  };
  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(i => i.productId !== productId));
  };

  const incrementCount = (productId: number) => {
    setCart(prev => prev.map(i =>
      i.productId === productId ? {...i, count: i.count + 1} : i
    ));
  };

  const decrementCount = (productId: number) => {
    setCart(prev => prev.flatMap(i => {
      if (i.productId === productId) {
        if (i.count > 1) return [{...i, count: i.count - 1}];
        return [];
      }
      return [i];
    }));
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, incrementCount, decrementCount}}>
      {children}
    </CartContext.Provider>
  );
};
