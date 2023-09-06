'use client'

import { AiFillStar } from 'react-icons/ai'
import Header from './components/Header'
import CheckBox from './components/CheckBox'
import { useEffect, useState } from 'react'

export default function Home() {
  const [storedItems, setStoredItems] = useState<any[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("items")
    if (data) {
      const parsedData = JSON.parse(data);
      setStoredItems(parsedData);
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <div className='flex flex-col gap-2 py-4 px-1'>
        {storedItems.map((item, index) => (
          <CheckBox key={index} name={item.produto} qtt={item.quantidade} />
        ))}
        <CheckBox name='pão' qtt='6' />
        <CheckBox name='presunto' qtt='300g' />
        <CheckBox name='Queijo' qtt='300g' />
      </div>
      <span className='text-[var(--orange)] text-6xl'><AiFillStar /></span>
    </main>
  )
}
