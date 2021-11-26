import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from './MenuItems'
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";
import { SolvAlgorithmsItems } from "../ItemLists/SolvAlgorithmsItems";
import Dropdown from './Dropdown/Dropdown'
import { ReactComponent as Logo } from "../../images/MazeGen&SolveLogo.svg"
import './Navbar.css'

function Navbar() {

    const [menuClicked, setMenuClicked] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleMenuClicked = () => setMenuClicked(!menuClicked)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 1600) {
            setIsMobile(true)
            if (menuClicked === true)
                setMenuClicked(false)
        } else {
            setIsMobile(false)
            if (menuClicked === false)
                setMenuClicked(true)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <nav className="navbar-items">
                <Link className="navbar-logo" to="/">
                    <Logo className="navbar-logo-image" />
                    MazeGen&Solve
                </Link>
                <div className="navbar-menu">
                    <div className={menuClicked ? "navbar-menu-active" : "navbar-menu-hide"}>
                        <ul className={isMobile ? "navbar-menu-mobile" : "navbar-menu-full"}>
                            {MenuItems.map((item, index) => {
                                return (<li key={index} className="navbar-links-li">
                                    <Link to={item.url} className={item.cName} >
                                        {item.title}
                                    </Link>
                                </li>)
                            })}
                            {/* <li>
                                <Dropdown
                                    title="Generate Algorithms"
                                    items={GenAlgorithmsItems} />
                            </li>
                            <li>
                                <Dropdown
                                    title="Solve Algorithms"
                                    items={SolvAlgorithmsItems} />
                            </li> */}
                        </ul>
                    </div>
                    <div className={isMobile ? "navbar-menu-icon" : "navbar-menu-icon-hide"}
                        onClick={handleMenuClicked}>
                        <i className={menuClicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <Link className="generate-link" to="/generate">
                        Generate
                    </Link>
                    <Link className="solve-link" to="/solve">
                        Solve
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar