import React, { useState } from 'react';
import './Components/Login/Login.module.css';
import './Components/Menu/Menu.module.css';
import './Components/Acciones/Acciones.module.css'
import './Components/Acciones/Bien/AgregarBien.module.css'
import './Components/Acciones/Bien2/AgregarBien2.module.css'
import './Components/Acciones/Area/AgregarArea.module.css'
import './Components/Acciones/Empleado/AgregarEmpleado.module.css'
import './Components/BajasBienes/BajaBien/AgregarBajaBien.module.css' 
import './Components/Acciones/Producto/AgregarProducto.module.css'
import './Components/Acciones/Rol/AgregarRol.module.css'
import './Components/Acciones/Direccion/AgregarDireccion.module.css'
import './Components/Acciones/StatusBien/AgregarStatus.module.css'
import './Components/Acciones/Marca/AgregarMarca.module.css'
import './Components/Acciones/TipoAlta/AgregarTipoAlta.module.css'
import './Components/Acciones/Documento/AgregarDocumento.module.css'
import './Components/Acciones/CodigoPartida/AgregarCodigo.module.css'
import './Components/Acciones/SubcuentaArmonizada/AgregarSubcuenta.module.css'
import './Components/Acciones/RecursoOrigen/AgregarRecurso.module.css'
import './Components/Acciones/TipoPosesion/AgregarTipoPosesion.module.css'
import './Components/BajasBienes/BajaBien.module.css'
import Login from './Components/Login/Login.js'
import Menu from './Components/Menu/Menu.js'
import Acciones from './Components/Acciones/Acciones.js'
import AgregarBien from './Components/Acciones/Bien/AgregarBien.js'
import AgregarBien2 from './Components/Acciones/Bien2/AgregarBien2.js'
import AgregarArea from './Components/Acciones/Area/AgregarArea.js'
import AgregarEmpleado from './Components/Acciones/Empleado/AgregarEmpleado.js'
import AgregarProducto from './Components/Acciones/Producto/AgregarProducto.js';
import AgregarRol from './Components/Acciones/Rol/AgregarRol.js';
import AgregarDireccion from './Components/Acciones/Direccion/AgregarDireccion.js';
import AgregarStatus from './Components/Acciones/StatusBien/AgregarStatus.js';
import AgregarMarca from './Components/Acciones/Marca/AgregarMarca.js';
import AgregarTipoAlta from './Components/Acciones/TipoAlta/AgregarTipoAlta.js';
import AgregarDocumento from './Components/Acciones/Documento/AgregarDocumento.js';
import AgregarCodigo from './Components/Acciones/CodigoPartida/AgregarCodigo.js';
import AgregarSubcuenta from './Components/Acciones/SubcuentaArmonizada/AgregarSubcuenta.js';
import AgregarRecurso from './Components/Acciones/RecursoOrigen/AgregarRecurso.js';
import AgregarTipoPosesion from './Components/Acciones/TipoPosesion/AgregarTipoPosesion.js';
import BajaBien from './Components/BajasBienes/BajaBien.js'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('menu');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const navigateTo = (view) => {
    console.log('Navigating to:', view); // Verifica qué valor se recibe
    setCurrentView(view);
  };
  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : currentView === 'menu' ? (
          <Menu onNavigate={(view) => navigateTo(view)}/>
        ) : currentView === 'Acciones' ? (
          <Acciones
            onBack={() => navigateTo('menu')}
            onNavigateTo={(component) => navigateTo(component)}/>
        ) : currentView === 'agregarBien' ? (
          <AgregarBien 
            onBack={() => navigateTo('acciones')}
            onNavigateTo={(component) => navigateTo(component)} // Navega a cualquier componente
            onNext={() => navigateTo('agregarBien2')}
          />
        ) : currentView === 'agregarBien2' ? (
          <AgregarBien2 onBack={() => navigateTo('agregarBien')} />
        ) : currentView === 'agregarArea' ? (
          <AgregarArea onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarEmpleado' ? (
          <AgregarEmpleado onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarProducto' ? (
          <AgregarProducto onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarRol' ? (
          <AgregarRol onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarDireccion' ? (
          <AgregarDireccion onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarStatus' ? (
          <AgregarStatus onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarMarca' ? (
          <AgregarMarca onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarTipoAlta' ? (
          <AgregarTipoAlta onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarDocumento' ? (
          <AgregarDocumento onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarCodigo' ? (
          <AgregarCodigo onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarSubcuenta' ? (
          <AgregarSubcuenta onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarRecurso' ? (
          <AgregarRecurso onBack={() => navigateTo('acciones')} />
        ) : currentView === 'agregarTipoPosesion' ? (
          <AgregarTipoPosesion onBack={() => navigateTo('acciones')} />
        ) : currentView === 'BajaBien' ? (
          <BajaBien
            onBack={() => navigateTo('menu')}
            onNavigateTo={(component) => navigateTo(component)}/>
        ) : null}

      </header>
    </div>
  );
}
export default App;