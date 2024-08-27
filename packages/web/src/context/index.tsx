import React, { createContext, useContext, useState } from "react";


interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageKey: string;
  description: string;
  quantity: number;
  price: number;
  taxable: boolean;
  isActive: boolean;
}

type AuthContextD = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
};

const MyContext = createContext({} as AuthContextD);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <MyContext.Provider value={{ cart, setCart }
    }>
      {children}
    </MyContext.Provider>
  );
};

export const useCart = () => useContext(MyContext);

export default CartProvider;
