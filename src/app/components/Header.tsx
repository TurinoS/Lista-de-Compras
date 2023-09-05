"use client";

import { useState } from "react";
import { ImMenu, ImPlus } from "react-icons/im";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <header className="bg-[var(--purple)] sticky top-0 text-3xl p-2">
      <button onClick={() => setOpenMenu(!openMenu)}>
        <ImMenu />
      </button>
      {openMenu && (
        <form className="flex gap-2 text-sm justify-between">
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
      )}
    </header>
  );
}
