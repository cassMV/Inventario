import React from 'react';
import styles from './AgregarDireccion.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarDireccion = ({ onBack }) => {
  return (
    <div className={styles.agregarDireccionContainer}>
      <header className={styles.agregarDireccionHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarDireccionLogo} />
        <div className={styles.agregarDireccionUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarDireccionMenuLateral}>
        <button className={styles.agregarDireccionBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarDireccionMenuList}>
        <h2 className={styles.agregarDireccionMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li className={styles.agregarDireccionActive}>Dirección</li>
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
      <main className={styles.agregarDireccionMainContent}>
          <h2 className={styles.agregarDireccionTitle}>Agregar Dirección</h2>
          <div className={styles.agregarDireccionFormContainer}>
            <div className={styles.agregarDireccionFormRow}>
              <input type="text" placeholder="Dirección (ID)" className={styles.agregarDireccionInput2} />
              <input type="text" placeholder="Nombre de la dirección" className={styles.agregarDireccionInput} />
            </div>
          </div>
          <div className={styles.agregarDireccionFormActions}>
            <button className={styles.agregarDireccionBackButtonAction} onClick={onBack}>Atrás</button>
            <button className={styles.agregarDireccionAddButton}>Agregar</button>
          </div>
        </main>
      <button className={styles.agregarDireccionHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarDireccion;

