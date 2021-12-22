import React from "react";
import "./Page.css"
import GenMenu from "../GenMenu/GenMenu";

function HomePage() {

    return (
        <div className="page-backgroud">
            <div className="page">
                <GenMenu />
            </div>
        </div>
    )
}

export default HomePage