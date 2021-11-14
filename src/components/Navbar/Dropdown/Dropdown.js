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
                {props.title} {isActive ? <i class="fas fa-level-up-alt"/> : <i class="fas fa-level-down-alt"/>}
            </div>
            {isActive && <div className="dropdown-items">
                <ul className="dropdown-list">
                    {props.items.map((item, index) => {
                        return (<li key={index}
                            className={item.isSelected ? "selected-algorithms-name" : item.cName}
                            onClick={changeSelectionAlhorithm(item)}>
                            {item.title}
                        </li>)
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default Dropdown