import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/MazeGen&SolveLogo.svg"
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav className="navbar-items">
                <Link className="navbar-logo" to="/">
                    <Logo className="navbar-logo-image" />
                    MazeGen&Solve
                </Link>
                <div className="navbar-menu">
                    <Link className="generate-link" to="/">
                        Generate Maze
                    </Link>
                    <Link className="solve-link" to="/solutions">
                        All Solutions
                    </Link>
                    <Link className="info-link" to="/info">
                        Info
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar