import { useState } from "react"

const NavbarUser = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

    if (!loggedIn) {
        return (
            <div className="hamburger_userspace"><h2>Login / Signup</h2></div>
        )
    }

}

export default NavbarUser