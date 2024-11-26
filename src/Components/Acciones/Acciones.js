import React from 'react';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';
import Acciones2 from '../imagenes/Acciones2.png';
import styles from './Acciones.module.css';

function Acciones({ onBack, onNavigateTo }) {
  return (
    <div className={styles.accionesContainer}>
      <header className={styles.accionesHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.logo} />
        <div className={styles.userIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.menuLateral}>
        <button className={styles.backButton} onClick={onBack}>←</button>
        <ul className={styles.menuList}>
          <h2 className={styles.menuTitle}>Agregar</h2>
          <li onClick={() => onNavigateTo('agregarBien')}>Bien</li>
          <li onClick={() => onNavigateTo('agregarArea')}>Área</li>
          <li onClick={() => onNavigateTo('agregarEmpleado')}>Empleado</li>
          <li onClick={() => onNavigateTo('agregarProducto')}>Producto</li>
          <li onClick={() => onNavigateTo('agregarRol')}>Rol</li>
          <li onClick={() => onNavigateTo('agregarDireccion')}>Dirección</li>
          <li onClick={() => onNavigateTo('agregarStatus')}>Status del Bien</li>
          <li onClick={() => onNavigateTo('agregarMarca')}>Marca</li>
          <li onClick={() => onNavigateTo('agregarTipoAlta')}>Tipo de Alta</li>
          <li onClick={() => onNavigateTo('agregarDocumento')}>Documentos</li>
          <li onClick={() => onNavigateTo('agregarCodigo')}>Código de Partida Específica</li>
          <li onClick={() => onNavigateTo('agregarSubcuenta')}>Subcuenta Armonizada</li>
          <li onClick={() => onNavigateTo('agregarRecurso')}>Recurso del Origen</li>
          <li onClick={() => onNavigateTo('agregarTipoPosesion')}>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.accionesContent}>
        <h2 className={styles.titleAcciones}>Acciones</h2>
        <div className={styles.accionesIcon}>
          <img src={Acciones2} alt="Acciones Icon" />
        </div>
      </main>
      <button onClick={() => onNavigateTo('menu')}className={styles.homeButton}>🏠</button>
    </div>
  );
}

export default Acciones;
