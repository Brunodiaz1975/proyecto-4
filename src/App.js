import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Reservaciones from "./pages/Reservaciones";
import Pedido from "./pages/Pedido";
import { MdDarkMode } from 'react-icons/md'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          
          <ul>
          <MdDarkMode className="logo"/>
          <li><Link to="/">Inicio</Link> </li> 
          <li><Link to="/Nosotros">Nosotros</Link> </li>
          <li><Link to="/Reservaciones">Reservaciones</Link> </li>
          <li><Link to="/Pedido">Has tu pedido </Link></li>
          </ul>
        </header>
        <div>
          
            <Routes>
              <Route path = "/" element = { <Inicio /> }/>
              <Route path = "/Nosotros" element = {<Nosotros />}/>
              <Route path = "/Reservaciones" element = {<Reservaciones />}/>
              <Route path = "/Pedido" element = {<Pedido />}/>
            </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
