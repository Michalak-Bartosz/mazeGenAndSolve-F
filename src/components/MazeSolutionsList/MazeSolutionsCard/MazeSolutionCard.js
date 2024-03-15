import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "./MazeSolutionCard.css";

const MazeSolutionCard = (props) => {
  let history = useHistory();
  const [checkedSoluton, setCheckedSolution] = useState(true);

  const handleItemClicked = (event) => {
    event.preventDefault();
    history.push(
      "/solve/?mazeId=" + props.mazeId + "&solveId=" + props.solveId
    );
  };

  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    if (checkedSoluton) {
      props.handleCheckSolution(props.mazeId, props.solveId, "add");
    } else {
      props.handleCheckSolution(props.mazeId, props.solveId, "remove");
    }
    setCheckedSolution(!checkedSoluton);
  };

  const handleDeleteClicked = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.deleteSolve(props.solveId);
  };

  return (
    <li className="maze-solution-card" onClick={handleItemClicked}>
      <h3>{props.solveId}</h3>
      <h3>{props.solvAlgorithmType}</h3>
      <div className="compare-checkbox-wrapper">
        <input
          className="compare-checkbox"
          id="compare-checkbox-maze-solution-id"
          type="checkbox"
          onClick={handleCheckboxChange}
        />
      </div>
      <div
        className="maze-delete-solution-button"
        onClick={handleDeleteClicked}
      >
        <i className="fas fa-trash"></i>
      </div>
    </li>
  );
};

export default MazeSolutionCard;
