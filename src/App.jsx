import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function LandingPage() {
  const [contentExpanded, setContentExpanded] = useState(false)

  const handleExpand = () => {
    setContentExpanded(!contentExpanded)
  }

  return (
    <>
      <Navbar />
      <section className="landingpage_hero"></section>
      <div className={`landingpage_content ${contentExpanded ? 'active' : ''}`}>
        <section className='landingcontent_left'>
          {!contentExpanded && <button className="landingcontent_expand_button to_left" onClick={handleExpand}>←</button>}
        </section>
        <section className='landingcontent_right'>
          {contentExpanded && <button className="landingcontent_expand_button to_right" onClick={handleExpand}>→</button>}
        </section>
      </div>
    </>
  )
}

export default LandingPage
