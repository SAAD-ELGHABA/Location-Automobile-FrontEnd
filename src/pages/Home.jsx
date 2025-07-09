import React from 'react'
import HeroSection from '@components/HeroSection'
import VehicleList from '@components/VehicleList'
import InfoSection from "@components/InfoSection";
function Home() {
  return (
    <div>
        <section>
            <HeroSection/>
        </section>
        <section className='min-h-screen bg-white'>
            <VehicleList/>
        </section>
        <section>
          <InfoSection/>
        </section>
    </div>
  )
}

export default Home