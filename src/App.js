import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import List from './components/general/List';
import Listee from './components/eee/Listee';

import Index from "./components/Index";
import Days from "./components/Schedule/Days";

<<<<<<< HEAD
=======
// import Tabs from "./components/general/workshops/PrisonBreak/Tab";
>>>>>>> refs/remotes/origin/master
import Listcomp from "./components/Competitions/Listcomp";

import Set1 from "./components/Competitions/Set/Set1";
import Set2 from "./components/Competitions/Set/Set2";
import Set3 from "./components/Competitions/Set/Set3";
import Set4 from "./components/Competitions/Set/Set4";
import Set5 from "./components/Competitions/Set/Set5";
import Set6 from "./components/Competitions/Set/Set6";
import Set7 from "./components/Competitions/Set/Set7";
import Set8 from "./components/Competitions/Set/Set8";
import Set9 from "./components/Competitions/Set/Set9";
import Set10 from "./components/Competitions/Set/Set10";
import Set11 from "./components/Competitions/Set/Set11";
import Set12 from "./components/Competitions/Set/Set12";
import Set13 from "./components/Competitions/Set/Set13";
import Set14 from "./components/Competitions/Set/Set14";
import Set15 from "./components/Competitions/Set/Set15";


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
<<<<<<< HEAD
      
=======
      {/* <Route path="/prisonbreak" element={<Tabs />} /> */}
>>>>>>> refs/remotes/origin/master
      <Route path="/racezilla" element={<Set1 />} />
      <Route path="/TurnARound" element={<Set2 />} />
      <Route path="/MindZoneInvaders" element={<Set3 />} />
      <Route path="/ShortCircuit" element={<Set4 />} />
      <Route path="/PrisonBreak" element={<Set5 />} />
      <Route path="/Credorian" element={<Set6 />} />
      <Route path="/PERSONA" element={<Set7 />} />
      <Route path="/DIG-THE-BUG" element={<Set8 />} />
      <Route path="/Crypto-Busters" element={<Set9 />} />
      <Route path="/ZEA-MAD" element={<Set10 />} />
      <Route path="/Mindspark" element={<Set11 />} />
      <Route path="/OHM-DECODER" element={<Set12 />} />
      <Route path="/RAINBOW" element={<Set13 />} />
      <Route path="/TECH-TODAY" element={<Set14 />} />
      <Route path="/QUIZ–O–PHILE" element={<Set15 />} />

    </Routes>
  </Router>
    </div>
    
    
    
  );
}

export default App;
