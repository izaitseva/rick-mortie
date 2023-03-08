import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import logo from "../images/logo.png"

const Header = () => {

    return (
        <nav>
            <header>
                <NavLink to={paths.main}>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </NavLink>
            </header>
        </nav>
    )
}

export default Header;