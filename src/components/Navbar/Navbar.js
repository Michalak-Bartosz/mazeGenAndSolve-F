import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from './MenuItems'
import { GenAlgorithmsItems } from "./GenDropdown/GenAlgorithmsItems";
import { SolvAlgorithmsItems } from "./SolvDropdown/SolvAlgorithmsItems";
import Dropdown from './Dropdown/Dropdown'
import { ReactComponent as Logo } from "../../images/MazeGen&SolveLogo.svg"
import './Navbar.css'

function Navbar() {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleMenuClicked = () => setMenuClicked(!menuClicked)
    return (
        <>
            <nav className="navbar-items">
                <Link className="navbar-logo" to="/">
                    <Logo className="navbar-logo-image" />
                    MazeGen&Solve
                </Link>
                <ul className={menuClicked ? "navbar-menu-hide" : "navbar-menu-active"}>
                    {MenuItems.map((item, index) => {
                        return (<li key={index} className="navbar-links-li">
                            <Link to={item.url} className={item.cName} >
                                {item.title}
                            </Link>
                        </li>)
                    })}
                    <li>
                        <Dropdown
                            title="Generate Algorithms"
                            items={GenAlgorithmsItems} />
                    </li>
                    <li>
                        <Dropdown
                            title="Solve Algorithms"
                            items={SolvAlgorithmsItems} />
                    </li>
                </ul>
                <div className="navbar-menu-icon" onClick={handleMenuClicked}>
                    <i className={menuClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <Link className="generate-link" to="/generate">
                    Generate
                </Link>
                <Link className="solve-link" to="/solve">
                    Solve
                </Link>
            </nav>
        </>
    );
}

export default Navbar