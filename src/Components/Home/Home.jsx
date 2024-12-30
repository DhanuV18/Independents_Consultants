import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Cards from '../Cards/Cards'
import ContactForm from '../ContactForm/ContactForm'
import Testimonials from '../Testimonials/Testimonials'
import Founder from '../Founder/Founder'
import Mission from '../Mission/Mission'
import NewHero from '../NewHero/NewHero'
import NewNavbar from '../NewNavbar/NewNavbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        {/* <NewNavbar /> */}
        <NewHero />
        {/* <Hero /> */}
        <Cards />
        {/* <Founder/> */}
        {/* <Testimonials/> */}
        {/* <Mission /> */}
        {/* <ContactForm /> */}

    </div>
  )
}

export default Home


