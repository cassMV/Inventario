import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import Acciones from "./Components/pageAcciones/pageAcciones";
import Menu from "./Components/Menu/Menu";
function App() {
  return (
    <Router>
      <div>
        {/* Navbar fijo en la parte superior */}
        <Navbar />
        {/* Contenedor principal con las rutas */}
        <Routes>
          {/* Ruta principal de acciones con rutas anidadas */}

          <Route path="/acciones/*" element={<Acciones />} />
          <Route path="/menu" element={<Menu/>} />
          {/* Agrega otras rutas principales si es necesario */}
          <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
