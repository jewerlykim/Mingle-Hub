import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Launchpad from '@/components/launchpad'
import MainnetSection from '@/components/mainnet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Launchpad />
      <MainnetSection />
    </main>
  )
}
