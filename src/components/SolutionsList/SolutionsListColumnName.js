import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router";

const SolutionsListColumnName = (props) => {
    let history = useHistory()
    const [enebleCompare, setEnebleCompare] = useState(false)

    useEffect(() => {
        handleChangeCompareButton(props.changeCheckCount)
    }, [props.changeCheckCount])

    const handleCompareClick = () => {
        if (props.changeCheckCount >= 2) {
            var newPath = "/raports?solveCount=" + props.changeCheckCount
            for (var i = 0; i < props.changeCheckCount; i++) {
                newPath += "&solveId" + i + "=" + props.checkedSolutionsList[i]
                console.log(props.checkedSolutionsList[i])
            }
            history.push(newPath)
        }
    }

    const handleChangeCompareButton = (checkedSolutionsCount) => {
        if (checkedSolutionsCount >= 2)
            setEnebleCompare(true)
        else
            setEnebleCompare(false)
    }

    const compareTip = "Choose minimum 2 solution<br/>to enable compare."
    return (
        <li className="solution-list-column-name">
            <h3>
                Solution ID
            </h3>
            <h3>
                Maze ID
            </h3>
            <h3>
                Width
            </h3>
            <h3>
                Height
            </h3>
            <h3>
                Type of Generating Algorithm
            </h3>
            <h3>
                Type of Solving Algorithm
            </h3>
            <div className="compare-container">
                {<i className="fas fa-question-circle fa-2x compare-info"
                    data-html="true"
                    data-tip={compareTip}
                    data-for='toolTip' data-place='top' />}
                <ReactTooltip id="toolTip" />
                <div className={enebleCompare ? "compare-button" : "compare-button-disiabled"}
                    onClick={handleCompareClick}>
                    <h3 className="compare-title">
                        Compare
                    </h3>
                    <i className="fas fa-greater-than-equal fa-1x compare-icon"></i>
                </div>
            </div>
            <h3 className="delete-label">
                Delete
            </h3>
        </li>
    )
}

export default SolutionsListColumnName