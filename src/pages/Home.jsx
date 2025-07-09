import React from 'react'
import HeroSection from '@components/HeroSection'
import VehicleList from '@components/VehicleList'
function Home() {
  return (
    <div>
        <section>
            <HeroSection/>
        </section>
        <section className='min-h-screen bg-white'>
            <VehicleList/>
        </section>
    </div>
  )
}

export default Home