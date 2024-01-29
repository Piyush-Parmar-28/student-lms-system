import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Routes
} from "react-router-dom";

import './App.css';
import Home from "./pages/home.tsx"
import Login from './pages/login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
          path='/'
          element= {
            <Home />
          }
        />

        <Route 
          path='/login'
          element= {
            <Login />
          }
        />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App as React.ComponentType;
