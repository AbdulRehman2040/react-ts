import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Appointment from "./components/Appointment/Appointment"
import Steps from "./components/Steps/Steps"
import PremiumService from "./components/PremiumService/PremiumService"
import ExpertService from "./components/ExpertService/ExpertService"
import Testimonial from "./components/Testimonial/Testimonial"
import LatestProjects from "./components/LatestProjects/LatestProjects"
import InsideStory from "./components/InsideStory/InsideStory"
import ContactForm from "./components/ContactForm/ContactForm"
import Footer from "./components/Footer/Footer"
import Stats from "./components/Stats/Stats"
import ServicesSection from "./components/services/services"
import ScrollToTop from "./components/Scrooltop/scrool"

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Stats/>
     <Contact/>
     <About/>
     <ServicesSection/>
     <Appointment/>
     <Steps/>
     <PremiumService/>
     <ExpertService/>
     <Testimonial/>
     <LatestProjects/>
     <InsideStory/>
     <ContactForm/>
     <Footer/>
     
     <ScrollToTop/>
    </>
  )
}

export default App

