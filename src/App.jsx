import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPageContent from './components/LandingPageComponents/LandingPageContent.jsx'
import LPHero from './components/LandingPageComponents/LPHero.jsx'

function LandingPage() {
  

  return (
    <>
      <Navbar />
      <LPHero />
      <LandingPageContent />
    </>
  )
}

export default LandingPage
