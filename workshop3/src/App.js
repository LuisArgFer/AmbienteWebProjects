//import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Help from './Pages/Help';
import {NavLink} from "react-router-dom"
import Footer from './Pages/Footer';

function App() {



  return (
    <Router>
      <div className=''>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className='link2'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='link3'>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>

      
        <Routes>
          <Route path="/home" exact element={ <Home />}/>
          <Route path="/about" exact element={ <About />}/>
          <Route path="/help" exact element={ <Help />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    

  );
}


export default App;
