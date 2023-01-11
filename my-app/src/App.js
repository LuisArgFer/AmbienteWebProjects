
import './App.css';
import Login from './components/Login/body';
import Home from './components/home/home';
import {
  Routes,
  Route,
} from "react-router-dom";

//npm install react-router-dom
function App() {
  
  return (
    <div className="App"> 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>   
    </div>
  ); 
}


export default App;
