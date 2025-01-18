import React from 'react'
import Hero from '../Sections/Hero'
import Features from '../Sections/Features'
import Testimonials from '../Sections/Testimonials'
import Functions from '../Sections/Functions'
import Subscribe from '../Sections/Subscribe'
import FAQs from '../Sections/FAQs'

function Home() {
  return (
    <div>
        <Hero />
        <Features />
        <div className='bg-[#1b1e29] h-6'></div>
        <Testimonials />
        <Functions />
        <Subscribe />
        <FAQs />
    </div>
  )
}

export default Home