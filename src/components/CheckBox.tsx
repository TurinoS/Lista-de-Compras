"use client";

import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

interface CheckBoxProps {
  name: string;
  qtt: string;
  id: string;
}

export default function CheckBox({ name, qtt, id }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleDeleteItem } = useContext(AppContext);

  return (
    <div className="rounded bg-[var(--black)] flex justify-between items-center px-2 py-1 text-lg md:w-6/12 md:scale-95 md:my-1">
      <div className="flex gap-2">
        <input
          type="checkbox"
          name="name"
          id="name"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="name" className="capitalize">
          {name}
        </label>
      </div>
      <div className="flex gap-4 items-center">
        <p className={isChecked ? "quantity" : ""}>{qtt}</p>
        <div
          className="text-2xl hover:scale-110 cursor-pointer border-l pl-2"
          onClick={() => handleDeleteItem(id)}
        >
          <TiDeleteOutline />
        </div>
      </div>
    </div>
  );
}
