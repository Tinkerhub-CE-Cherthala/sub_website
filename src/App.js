import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import List from './components/general/List';
import Listee from './components/eee/Listee';

import Index from "./components/Index";
import Days from "./components/Schedule/Days";

import Tabs from "./components/general/workshops/PrisonBreak/Tab";


function App() {
  return (
    <div className="background">

    <Router>
    <Routes>

      <Route path="/" element={<Index />} exact/>

      
      <Route path="/workshops" element={<List />} />
      <Route path="/schedule" element={<Days />} />
      <Route path="/prisonbreak" element={<Tabs />} />

    </Routes>
  </Router>
    </div>
    
    
    
  );
}

export default App;
