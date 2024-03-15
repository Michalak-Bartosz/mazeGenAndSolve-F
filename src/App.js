import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RaportPage from "./components/Pages/RaportPage";
import GeneratePage from "./components/Pages/GeneratePage";
import SolvePage from "./components/Pages/SolvePage";
import SolutionsPage from "./components/Pages/SolutionsPage";
import HomePage from "./components/Pages/HomePage";
import MazeList from "./components/MazeList/MazeList";
import InfoPage from "./components/Pages/InfoPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MazeList />
      <Route path="/" component={HomePage} />
      <Route path="/raports" component={RaportPage} />
      <Route path="/generate" component={GeneratePage} />
      <Route path="/solve" component={SolvePage} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/info" component={InfoPage} />
    </Router>
  );
};

export default App;
