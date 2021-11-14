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
                <div className="navbar-menu-icon" onClick={handleMenuClicked}>
                    <i className={menuClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={menuClicked ? "navbar-menu active" : "navbar-menu"}>
                    {MenuItems.map((item, index) => {
                        return (<li key={index}>
                            <Link to={item.url} className={item.cName}>
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
                    <li>
                        <Link className="generate-link" to="/generate">
                            Generate
                        </Link>
                    </li>
                    <li>
                        <Link className="solve-link" to="/solve">
                            Solve
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar