import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Launchpad from '@/components/launchpad'
import MainnetSection from '@/components/mainnet'
import { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  launchpadRef?: React.RefObject<HTMLDivElement>;
}

const Home: NextPage<HomeProps> = ({ launchpadRef }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div ref={launchpadRef}>
        <Launchpad />
      </div>
      <MainnetSection />
    </main>
  )
}

export default Home

