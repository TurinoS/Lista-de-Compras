'use client'

import { AppContext } from '@/context/AppContext';
import { useContext, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai'

interface CheckBoxProps {
    name: string
    qtt: string
    id: string
}

export default function CheckBox({ name, qtt, id }: CheckBoxProps) {
    const [isChecked, setIsChecked] = useState(false);
    const { handleDeleteItem } = useContext(AppContext)

    return(
        <div className="rounded bg-[var(--black)] flex justify-between items-center px-2 py-1 text-lg">
            <div className='flex gap-2'>
                <input type="checkbox" name="name" id="name" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <label htmlFor="name" className="capitalize">{name}</label>
            </div>
            <div className='flex gap-4 items-center'>
                <p className={isChecked ? "quantity" : ""}>{qtt}</p>
                <div 
                    className='rounded border border-[var(--gray)] p-1 hover:scale-110 hover:border-[var(--white)] cursor-pointer'
                    onClick={() => handleDeleteItem(id)}
                >
                    <AiFillEdit />
                </div>
                
            </div>
            
        </div>
    )
}