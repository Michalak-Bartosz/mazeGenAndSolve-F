import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RaportPage from './components/Pages/RaportPage';
import GeneratePage from './components/Pages/GeneratePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/raports" component={RaportPage}/>
      <Route path="/generate" component={GeneratePage}/>
    </Router>
  );
}

export default App;
