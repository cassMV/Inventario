import React, { useState } from 'react';
import './Components/Login/Login.module.css';
import './Components/Menu/Menu.module.css';
import './Components/Acciones/Acciones.module.css'
import './Components/Acciones/Bien/AgregarBien.module.css'
import './Components/Acciones/Bien2/AgregarBien2.module.css'
import './Components/Acciones/Area/AgregarArea.module.css'
import './Components/Acciones/Empleado/AgregarEmpleado.module.css' 
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
import './Components/BajasBienes/BajaBien2/AgregarBajaBien2.module.css'
import './Components/BajasBienes/BajaBien/AgregarBajaBien.module.css'
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
import AgregarBajaBien2 from './Components/BajasBienes/BajaBien2/AgregarBajaBien2.js';
import AgregarBajaBien from './Components/BajasBienes/BajaBien/AgregarBajaBien.js'

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
            onBack={() => navigateTo('Acciones')}
            onNavigateTo={(component) => navigateTo(component)} // Navega a cualquier componente
            onNext={() => navigateTo('agregarBien2')}
          />
        ) : currentView === 'agregarBien2' ? (
          <AgregarBien2 onBack={() => navigateTo('agregarBien')} />
        ) : currentView === 'agregarArea' ? (
          <AgregarArea onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarEmpleado' ? (
          <AgregarEmpleado onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarProducto' ? (
          <AgregarProducto onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarRol' ? (
          <AgregarRol onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarDireccion' ? (
          <AgregarDireccion onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarStatus' ? (
          <AgregarStatus onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarMarca' ? (
          <AgregarMarca onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarTipoAlta' ? (
          <AgregarTipoAlta onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarDocumento' ? (
          <AgregarDocumento onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarCodigo' ? (
          <AgregarCodigo onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarSubcuenta' ? (
          <AgregarSubcuenta onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarRecurso' ? (
          <AgregarRecurso onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'agregarTipoPosesion' ? (
          <AgregarTipoPosesion onBack={() => navigateTo('Acciones')} />
        ) : currentView === 'BajaBien' ? (
          <BajaBien 
            onBack={() => navigateTo('menu')}
            onNavigateTo={(component) => navigateTo(component)}/>
        ) : currentView === 'AgregarBajaBien2' ? (
          <AgregarBajaBien2 onBack={() => navigateTo('BajaBien')} 
            onNavigateTo={(component) => navigateTo(component)} // Navega a cualquier componente
            onNext={() => navigateTo('AgregarBajaBien')}/>
        ) : currentView === 'AgregarBajaBien' ? (
          <AgregarBajaBien onBack={() => navigateTo('AgregarBajaBien2')} />
        ) : null}

      </header>
    </div>
  );
}
export default App;