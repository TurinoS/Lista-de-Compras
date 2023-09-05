import { AiFillStar } from 'react-icons/ai'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      Hello World!! 
      <span className='text-[var(--orange)] text-6xl'><AiFillStar /></span>
    </main>
  )
}
