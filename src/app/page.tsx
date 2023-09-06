import { AiFillStar } from 'react-icons/ai'
import Header from './components/Header'
import CheckBox from './components/CheckBox'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className='flex flex-col gap-2 py-4 px-1'>
        <CheckBox name='pão' qtt='6' />
        <CheckBox name='presunto' qtt='300g' />
        <CheckBox name='Queijo' qtt='300g' />
      </div>
      <span className='text-[var(--orange)] text-6xl'><AiFillStar /></span>
    </main>
  )
}
