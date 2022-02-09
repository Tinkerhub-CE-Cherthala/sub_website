import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Event from "./components/Events/Event";
import List from './components/general/List';
import Listee from './components/eee/Listee';
import Listec from './components/ece/Listec';
import Listcs from './components/cse/Listcs';
import Form from './components/general/Form';
import Formee from './components/eee/Formee';
import Formec from './components/ece/Formec';
import Formcs from './components/cse/Formcs';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Event />} exact/>
      <Route path="/general/List" element={<List />} />
      <Route path="/eee/Listee" element={<Listee />} />
      <Route path="/ece/Listec" element={<Listec />} />
      <Route path="/cse/Listcs" element={<Listcs />} />
      <Route path="/general/List/Form" element={<Form />} />
      <Route path="/eee/Listee/Formee" element={<Formee />} />
      <Route path="/ece/Listec/Formec" element={<Formec />} />
      <Route path="/cse/Listcs/Formcs" element={<Formcs />} />

    </Routes>
  </Router>
    
    
    
  );
}

export default App;
