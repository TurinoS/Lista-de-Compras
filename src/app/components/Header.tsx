"use client";

import { useState } from "react";
import { ImMenu, ImPlus } from "react-icons/im";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-[var(--purple)] sticky top-0 p-2">
        <div className={`flex items-center ${openMenu && "pb-2"}`}>
            <button onClick={() => setOpenMenu(!openMenu)} className="text-3xl">
                <ImMenu />
            </button>
            <h1 className="text-xl font-bold justify-self-center">Lista de Compras</h1>
        </div>
     
        <form 
        className={`flex gap-2 text-sm justify-between ${openMenu ? "visible" : "hidden"}`}
        style={{
          opacity: openMenu ? 1 : 0,
          maxHeight: openMenu ? "1000px" : "0",
          transition: "max-height 400ms ease-in-out, opacity 400ms ease-in-out",
        }}
      >
          <input
            type="text"
            name="product"
            id="product"
            placeholder="Produto"
            className="w-3/5 p-2 rounded"
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Quantidade"
            className="w-2/5 p-2 rounded"
          />
          <button type="submit" className="p-2 border rounded hover:text-[var(--orange)] hover:border-[var(--orange)]">
            <ImPlus />
          </button>
        </form>
    </header>
  );
}
