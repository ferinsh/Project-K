import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPageContent from './components/LandingPageContent/LandingPageContent.jsx'

function LandingPage() {
  

  return (
    <>
      <Navbar />
      <section className="landingpage_hero">

      </section>
      <LandingPageContent />
      
    </>
  )
}

export default LandingPage
