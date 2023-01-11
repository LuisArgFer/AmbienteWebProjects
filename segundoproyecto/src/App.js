
import './App.css';
import Login from './components/Login/login';
import Registro from './components/Registro/registro';
import Home from './components/Home/home';
import Match from './components/Match/match';
import Standings from './components/Standings/standings';
import Matchdate from './components/Match/matchdate';
import Standingsgroup from './components/Standings/standingsgroup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/match' element={<Match/>}/>
        <Route path='/standings' element={<Standings/>}/>
        <Route path='/matchdate' element={<Matchdate/>}/>
        <Route path='/standingsgroup' element={<Standingsgroup/>}/>

      </Routes>
           
    </div>
  );
}

export default App;
