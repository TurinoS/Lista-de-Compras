"use client";

import Header from "../components/Header";
import CheckBox from "../components/CheckBox";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { items } = useContext(AppContext);
  const [storedItems, setStoredItems] = useState<any[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("items");
    if (data) {
      const parsedData = JSON.parse(data);
      setStoredItems(parsedData);
    }
  }, [items]);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-col gap-2 py-4 px-1 md:flex-row md:flex-wrap md:gap-0 md:px-0">
        {storedItems.map((item) => (
          <CheckBox
            key={item.id}
            id={item.id}
            name={item.produto}
            qtt={item.quantidade}
          />
        ))}
      </div>
    </main>
  );
}
