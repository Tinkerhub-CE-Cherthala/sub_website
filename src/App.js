import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import List from './components/general/List';
import Listee from './components/eee/Listee';

import Index from "./components/Index";
import Days from "./components/Schedule/Days";

import Tabs from "./components/general/workshops/PrisonBreak/Tab";
import Listcomp from "./components/Competitions/Listcomp";
import Set1 from "./components/Competitions/Set/Set1";


function App() {
  return (
    <div className="background">

    <Router>
    <Routes>

      <Route path="/" element={<Index />} exact/>\
      <Route path="/error" element={<Listee/>} />

      
      <Route path="/workshops" element={<List />} />
      <Route path="/competitions" element={<Listcomp />} />
      <Route path="/schedule" element={<Days />} />
      <Route path="/prisonbreak" element={<Tabs />} />
      <Route path="/racezilla" element={<Set1 />} />

    </Routes>
  </Router>
    </div>
    
    
    
  );
}

export default App;
