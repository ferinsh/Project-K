import { useState } from "react"
import './LandingPageContentStyle.css'

const LPContent = () => {
    const [contentExpanded, setContentExpanded] = useState(false)

    const handleExpand = () => {
    setContentExpanded(!contentExpanded)
    }
    const handleCatFormSubmit = (e) => {
      e.preventDefault()
      console.log(e.body);
    }

    return (
        <div className={`landingpage_content ${contentExpanded ? 'active' : ''}`}>
        <section className={`landingcontent_section landingcontent_left ${!contentExpanded ? 'active' : ''}`}>
          {!contentExpanded && <button className="landingcontent_expand_button to_left" onClick={handleExpand}>←</button>}
          {!contentExpanded && <>
            <div className="lc_categories"></div>
            <div className="lc_categories_search">
              <form className="lc_cat_form" onSubmit={handleCatFormSubmit}>
                <label htmlFor="category_name"><b>Find Category</b></label>
                <input type="text" name="category_name" id="category_name_search_input"/>
              </form>
              <section className="lc_cat_search_results"></section>
            </div>
          </>}

        </section>
        <section className={`landingcontent_section landingcontent_right ${contentExpanded ? 'active' : ''}`}>
          {contentExpanded && <button className="landingcontent_expand_button to_right" onClick={handleExpand}>→</button>}
        
        </section>
      </div>
    )
}

export default LPContent