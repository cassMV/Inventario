import React from 'react';
import styles from './AgregarEmpleado.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarEmpleado = ({ onBack }) => {
  return (
    <div className={styles.agregarEmpleadoContainer}>
      <header className={styles.agregarEmpleadoHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarEmpleadoLogo} />
        <div className={styles.agregarEmpleadoUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarEmpleadoMenuLateral}>
        <button className={styles.agregarEmpleadoBackButton} onClick={onBack}>
          ←
        </button>
        <ul className={styles.agregarEmpleadoMenuList}>
          <h2 className={styles.agregarEmpleadoMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li className={styles.agregarEmpleadoActive}>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li>Status del Bien</li>
          <li>Marca</li>
          <li>Tipo de Alta</li>
          <li>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarEmpleadoMainContent}>
        <h2 className={styles.agregarEmpleadoTitle}>Agregar Empleado</h2>
        <div className={styles.agregarEmpleadoFormContainer}>
          <input type="text" placeholder="Empleado (ID)" className={styles.agregarEmpleadoInput2}/>
          <div className={styles.agregarEmpleadoFormRow}>
            <input type="text" placeholder="Nombre del empleado" className={styles.agregarEmpleadoInput}/>
            <input type="text" placeholder="Correo electrónico"className={styles.agregarEmpleadoInput}/>
            <input type="text" placeholder="RFC" className={styles.agregarEmpleadoInput} />
          </div>
          <div className={styles.agregarEmpleadoFormRow}>
            <input type="text" placeholder="Número de empleado" className={styles.agregarEmpleadoInput}/>
            <input type="text" placeholder="Número de contacto" className={styles.agregarEmpleadoInput}/>
            <select className={styles.agregarEmpleadoSelect}>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <input type="text" placeholder="Área (ID)" className={styles.agregarEmpleadoInput}/>
          </div>
        </div>
        <div className={styles.agregarEmpleadoFormActions}>
          <button className={styles.agregarEmpleadoBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarEmpleadoAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarEmpleadoHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarEmpleado;

