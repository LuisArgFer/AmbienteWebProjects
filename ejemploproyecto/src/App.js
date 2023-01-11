import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { HOME, LOGIN, LOGOUT } from "./components/router/paths/paths";

//Contexts Imports

import AuthContextProvider from "./context/authContext";
//Components Imports
import Footer from "./components/Footer";
//Pages imports
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home"
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import About from '../src/pages/About';

export default function App() {

  const userUrl = "https://dummyjson.com/users";

  //Contains the users
  const [usersList, setUsers] = useState({});

  useEffect(() => {
    axios.get(userUrl).then(function (response) {
      setUsers(response.data.users);
    });
  }, []);

  return (
    <AuthContextProvider>
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<PublicRoute/>}>
                <Route index element={<Login UsersList={usersList} />} />
              </Route>
              <Route path={HOME} element={<PrivateRoute/>}>
                <Route index element={<Home />} />
                <Route path={LOGOUT} element={<Logout />} />
              </Route>
              <Route path='/About' element={<About />} />
            </Routes>
            
          </Router>
        </div>
    </AuthContextProvider>
  );
}
