import { React, useState } from "react";

function Dropdown(props) {

    const [isActive, setActive] = useState(false)

    const handleClick = () => { setActive(!isActive) }
    const changeSelectionAlhorithm = (item) => {
        // item.isSelected=!item.isSelected
        console.log(item.title)
    }

    return (
        <div className="navbar-links">
            <div className="dropdown-title" onClick={handleClick}>
                {props.title}
                <div className="dropdown-icon">
                    {isActive ? <i className="fas fa-level-up-alt" /> : <i className="fas fa-level-down-alt" />}
                </div>
            </div>
            {isActive && <ul className="dropdown-list">
                {props.items.map((item, index) => {
                    return (<li key={index}
                        className={item.isSelected ? "selected-dropdown-item" : item.cName}
                        onClick={changeSelectionAlhorithm(item)}>
                        {item.title}
                    </li>)
                })}
            </ul>}
        </div>
    )
}

export default Dropdown