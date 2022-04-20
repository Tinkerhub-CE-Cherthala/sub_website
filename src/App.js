import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import List from './components/general/List';
import Listee from './components/eee/Listee';

import Index from "./components/Index";
import Days from "./components/Schedule/Days";

import Listcomp from "./components/Competitions/Listcomp";

import Set1 from "./components/Competitions/Set/Set1";
import Set2 from "./components/Competitions/Set/Set2";
import Set3 from "./components/Competitions/Set/Set3";
import Set4 from "./components/Competitions/Set/Set4";
import Set5 from "./components/Competitions/Set/Set5";
import Set6 from "./components/Competitions/Set/Set6";
import Set8 from "./components/Competitions/Set/Set8";
import Set9 from "./components/Competitions/Set/Set9";
import Set10 from "./components/Competitions/Set/Set10";
import Set11 from "./components/Competitions/Set/Set11";
import Set12 from "./components/Competitions/Set/Set12";
import Set13 from "./components/Competitions/Set/Set13";
import Set16 from "./components/Competitions/Set/Set16";

import Other1 from "./components/Others/genevent/Other1";
import Other2 from "./components/Others/genevent/Other2";
import Other3 from "./components/Others/genevent/Other3";
import Other4 from "./components/Others/genevent/Other4";
import Other5 from "./components/Others/genevent/Other5";
import Other6 from "./components/Others/genevent/Other6";

import Ws1 from "./components/general/workshops/Ws1";
import Ws2 from "./components/general/workshops/Ws2";
import Ws3 from "./components/general/workshops/Ws3";
import Ws4 from "./components/general/workshops/Ws4";
import Ws5 from "./components/general/workshops/Ws5";

import Listothers from "./components/Others/Listothers";


function App() {
  return (
    <div className="background">

    <Router>
    <Routes>

      <Route path="/" element={<Index />} exact/>\
      <Route path="/error" element={<Listee/>} />

      
      <Route path="/workshops" element={<List />} />
      <Route path="/competitions" element={<Listcomp />} />
      <Route path="/general" element={<Listothers />} />
      <Route path="/schedule" element={<Days />} />
      
      <Route path="/racezilla" element={<Set1 />} />
      <Route path="/TurnARound" element={<Set2 />} />
      <Route path="/MindZoneInvaders" element={<Set3 />} />
      <Route path="/ShortCircuit" element={<Set4 />} />
      <Route path="/PrisonBreak" element={<Set5 />} />
      <Route path="/Credorian" element={<Set6 />} />
      <Route path="/DIG-THE-BUG" element={<Set8 />} />
      <Route path="/Crypto-Busters" element={<Set9 />} />
      <Route path="/ZEA-MAD" element={<Set10 />} />
      <Route path="/Mindspark" element={<Set11 />} />
      <Route path="/OHM-DECODER" element={<Set12 />} />
      <Route path="/RAINBOW" element={<Set13 />} />
      <Route path="/WAVE-DIMENSION" element={<Set16 />} />

      <Route path="/Mjolnir" element={<Other1 />} />
      <Route path="/Risus" element={<Other2 />} />
      <Route path="/QuizOPhile" element={<Other3 />} />
      <Route path="/TECH-TODAY" element={<Other4 />} />
      <Route path="/SOLDER-SPIN" element={<Other5 />} />
      <Route path="/Photography" element={<Other6 />} />

      <Route path="/EthicalHacking" element={<Ws1 />} />
      <Route path="/Web3-Blockchain" element={<Ws2 />} />
      <Route path="/ElectricVehicles" element={<Ws3 />} />
      <Route path="/Generalws" element={<Ws4 />} />
      <Route path="/ADAS" element={<Ws5 />} />
    </Routes>
  </Router>
    </div>
    
    
    
  );
}

export default App;
