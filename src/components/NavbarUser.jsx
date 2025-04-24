import { useState } from "react"
import loginlogo from '/public/icons/reshot-icon-user-login-D4UHRM9E5G.svg'
import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

    const navigate = useNavigate()


    

    if (!loggedIn) {
        const handleloginSignup = (e) => {
            if(e.target.className === "logintext_h2_login") {
                navigate("/login")
            }
            else if(e.target.className === "logintext_h2_signup") {
                navigate("/signup")
            }
        }
        return (
            <div className="hamburger_userspace">
                <section className="loginicon_holder">
                    <img src={loginlogo} alt="" />
                </section>
                <section className="logintext_holder">
                    <h2 className="logintext_h2_login" onClick={handleloginSignup}>Login</h2>
                    <h2 className="logintext_h2_signup" onClick={handleloginSignup}>Signup</h2>

                </section>
            </div>
        )
    }

}

export default NavbarUser