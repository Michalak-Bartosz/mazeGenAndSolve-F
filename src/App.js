import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RaportPage from './components/Pages/RaportPage';
import GeneratePage from './components/Pages/GeneratePage';
import SolvePage from './components/Pages/SolvePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/raports" component={RaportPage}/>
      <Route path="/generate" component={GeneratePage}/>
      <Route path="/solve" component={SolvePage}/>
    </Router>
  );
}

export default App;
