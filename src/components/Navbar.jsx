
import {useState} from "react"

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    let hamburgerOptions  = [
        {id: 1, name: "Home", link: "/home"},
        {id: 2, name: "Menu", link: "/menu"},
        {id: 3, name: "About Us", link: "/about"},
        {id: 4, name: "Contact Us", link: "/contact"},
        {id: 5, name: "Order Now", link: "/order"},
    ]
    
    let hamburgerClassName = 'hamburger'
    if (menuVisible) {
        hamburgerClassName = 'hamburger active'
    }
    if(isAnimatingOut) {
        hamburgerClassName = 'hamburger out'
    }

    const handleMenuClick = () => {
        // setMenuVisible(!menuVisible)

        if (menuVisible) {
            setIsAnimatingOut(true);
            setTimeout(() => {
                setMenuVisible(false);
                setIsAnimatingOut(false);
            }, 250); // match the animation duration
        } else {
            setMenuVisible(true);
        }


    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">Kannur Kitchen</div>
                {/* {menuVisible && "YES"} */}
                <button  className = {!menuVisible ? "navmenu-btn" : "active"} onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            
            <section className={hamburgerClassName}>
            {menuVisible && hamburgerOptions.map((option) => {
                return (
                    <div key={option.id} className="hamburger__option">
                        {option.name}
                    </div>
                )
            })}
            {menuVisible && <div className="hamburger_userspace">X</div>}

            </section>
            
        </>
    )
}

export default Navbar