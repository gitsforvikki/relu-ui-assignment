import React from 'react';
//import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './layout/Home';
import Navbar from './layout/Navbar';
import MainContent from './modules/MainContent';
import Photographer from './modules/Photographer';
import MainLayout from './main/MainLayout';

let App =()=> {
  return (
    <React.Fragment>
      
   <Router>

    <Routes>
      {/* <Route path='/' element={<Navbar/>}  /> */}
      <Route path='/' element={<MainLayout/>} />
    </Routes>
   </Router>
    
    </React.Fragment>
  )
}

export default App;
