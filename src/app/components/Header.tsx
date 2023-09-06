"use client";

import { useEffect, useState } from "react";
import { ImMenu, ImPlus } from "react-icons/im";

type Item = {
  produto: string;
  quantidade: string;
};


export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
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
      produto: product,
      quantidade: quantity,
    };

    const updatedItems = [...items, newItem];

    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));

    setProduct("");
    setQuantity("");
  };

  return (
    <header className="bg-[var(--purple)] sticky top-0 p-3 rounded-b">
      <div className={`flex items-center ${openMenu && "mb-2 pb-1 border-b"}`}>
        <button onClick={() => setOpenMenu(!openMenu)} className="text-3xl">
          <ImMenu />
        </button>
        <h1 className="text-xl font-bold m-auto">Lista de Compras</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`flex gap-2 text-sm justify-between ${
          openMenu ? "visible" : "hidden"
        }`}
      >
        <input
          type="text"
          name="product"
          id="product"
          placeholder="Produto"
          className="w-3/5 p-2 rounded text-[var(--black)]"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantidade"
          className="w-2/5 p-2 rounded text-[var(--black)]"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 border rounded hover:text-[var(--orange)] hover:border-[var(--orange)]"
        >
          <ImPlus />
        </button>
      </form>
    </header>
  );
}
