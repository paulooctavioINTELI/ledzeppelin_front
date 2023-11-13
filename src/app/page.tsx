import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LedZeppelinArt from "../assets/LedZeppelinArt.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24 bg-gray-950">
      <Image className='max-md:blur-lg' src={LedZeppelinArt} alt=''/>
      <div className='flex flex-col text-slate-100 text-xl font-semibold w-[50%] gap-14 items-center max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:bg-black max-md:bg-opacity-70 rounded-md p-10'>
        <p className='text-3xl max-md:text-lg'>
          <label className='text-4xl text-red-700 font-bold max-md:text-xl'>Led Zeppelin</label>
          , uma aplicação para análize de construção civil a distancia, feita especialmente para o ipt
        </p>
        <Link href={"/pages/login"} className='bg-gray-700 rounded-md px-20 py-2'>Login</Link>
      </div>
    </main>
  )
}
