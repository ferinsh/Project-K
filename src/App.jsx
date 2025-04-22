import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function LandingPage() {

  return (
    <>
      <Navbar />
      <div className='landingpage_content'>
        <section className='landingpage_hero'></section>
      </div>
    </>
  )
}

export default LandingPage
