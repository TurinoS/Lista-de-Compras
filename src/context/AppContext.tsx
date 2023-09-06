'use client'

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type Item = {
    id: string;
    produto: string;
    quantidade: string;
  };  

type AppContextType = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    product: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    quantity: string;
    setQuantity: React.Dispatch<React.SetStateAction<string>>;
    items: Item[];
    handleDeleteItem: (idToDelete: string) => void;
};

export const AppContext = createContext<AppContextType>({
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
    product: "",
    setProduct: () => {},
    quantity: "",
    setQuantity: () => {},
    items: [],
    handleDeleteItem: (idToDelete: string) => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    let storedItemsString = localStorage.getItem("items");
    if (storedItemsString) {
      const storedItems = JSON.parse(storedItemsString);
      setItems(storedItems);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.trim() === "" || quantity.trim() === "") {
      alert("Por favor, preencha os campos corretamente.");
      return;
    }

    const newItem = {
      id: uuidv4(),
      produto: product,
      quantidade: quantity,
    };

    const updatedItems = [...items, newItem];

    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));

    setProduct("");
    setQuantity("");
  };

  const handleDeleteItem = (idToDelete: string) => {
    const updatedItems = items.filter((item) => item.id !== idToDelete);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

    return (
        <AppContext.Provider value={{ handleSubmit, product, setProduct, quantity, setQuantity, items, handleDeleteItem }}>
            {children}
        </AppContext.Provider>
    );
}
