import { useState } from "react"
import './LandingPageStyle.css'

const LPContent = () => {
    const [contentExpanded, setContentExpanded] = useState(false)

    const handleExpand = () => {
    setContentExpanded(!contentExpanded)
    }

    return (
        <div className={`landingpage_content ${contentExpanded ? 'active' : ''}`}>
        <section className='landingcontent_left'>
          {!contentExpanded && <button className="landingcontent_expand_button to_left" onClick={handleExpand}>←</button>}

        </section>
        <section className='landingcontent_right'>
          {contentExpanded && <button className="landingcontent_expand_button to_right" onClick={handleExpand}>→</button>}
        
        </section>
      </div>
    )
}

export default LPContent