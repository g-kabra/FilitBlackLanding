import React from 'react'

import Hero from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how_it_works'
import InfoBlock from '@/components/sections/info_block'
import TailorMade from '@/components/sections/tailor_made'
import CTA from '@/components/sections/cta'
import InteractiveGraph from '@/components/sections/interactive_graph'

const Home = () => {
  return (
    <>
    <Hero />
    <HowItWorks />
    <InfoBlock />
    <TailorMade />
    <InteractiveGraph />
    <CTA />
    </>
  )
}

export default Home