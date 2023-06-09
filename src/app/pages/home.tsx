import React from 'react'

import Hero from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how_it_works'

const Home = () => {
  return (
    <>
    <Hero />
    <HowItWorks />
    <div className='h-[100vh] bg-gradient-linear border border-black'></div>
    </>
  )
}

export default Home