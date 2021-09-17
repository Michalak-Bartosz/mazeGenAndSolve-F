import React from 'react';
import { Router, Route, Switch } from "react-router";

import SettingsPage from "./components/Pages/SettingsPage/SettingsPage"
import MazePage from './components/Pages/MazePage/MazePage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MazePage />
    </div>
  );
}

export default App;
