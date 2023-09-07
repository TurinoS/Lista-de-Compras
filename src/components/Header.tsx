"use client";

import { AppContext } from "@/context/AppContext";
import { useContext, useState, useEffect } from "react";
import { ImMenu, ImPlus } from "react-icons/im";

export default function Header() {
  const { handleSubmit, product, setProduct, quantity, setQuantity } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);

  const checkScreenWidth = () => {
    if (window.innerWidth >= 768) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <header className="bg-[var(--purple)] sticky top-0 p-3 rounded-b md:flex md:justify-between md:px-8">
      <div className={`flex items-center ${openMenu && "mb-2 pb-1 md:m-0 border-b"}`}>
        <button onClick={() => setOpenMenu(!openMenu)} className="text-3xl md:hidden">
          <ImMenu />
        </button>
        <h1 className="text-xl font-bold m-auto md:text-3xl">Lista de Compras</h1>
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
