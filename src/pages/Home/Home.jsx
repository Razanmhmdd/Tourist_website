import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/Hero/HeroSection'
import Welcome from '../../Components/Welcome/Welcome'
import BookingForm from '../../Components/BookingForm/BookingForm'
import Youtube from '../../Components/Youtube/Youtube'
import CardCarousel from '../../Components/Cards/Cards'
import Cards2 from '../../Components/Cards/Cards2'
import Cards3 from '../../Components/Cards/Cards3'
import Cards4 from '../../Components/Cards/Cards4'
import Gallery from '../../Components/Gallery/Gallery'
import LogoCarousel from '../../Components/LogoCarousel/LogoCarousel'
import Footer from '../../Components/Footer/Footer'
import Footer1 from '../../Components/Footer/Footer1'


const Home = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full z-10'>
          <Navbar />
        </div>
        <HeroSection />
        <div className='absolute top-60 left-10 w-full z-10 pt-11 py-11'>
        
        </div>
      </div>
      <div>
        <Welcome/>
      </div>
      <div>
      <Youtube/>
      </div>
      <div>
      <CardCarousel/>
      </div>
      <div>
        <Cards2/>
        <Cards3/>
        <Cards4/>
      </div>
      <div>
        <Gallery/>
      </div>
      <div>
       <LogoCarousel/>
      </div>
      <div>
        <Footer/>
        <Footer1/>
      </div>
    </div>

  )
}

export default Home