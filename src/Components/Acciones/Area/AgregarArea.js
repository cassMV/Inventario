import React from 'react';
import styles from './AgregarArea.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarArea = ({ onBack }) => {
  return (
    <div className={styles.agregarAreaContainer}>
      <header className={styles.agregarAreaHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarAreaLogo} />
        <div className={styles.agregarAreaUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarAreaMenuLateral}>
        <button className={styles.agregarAreaBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarAreaMenuList}>
          <h2 className={styles.agregarAreaMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li className={styles.agregarAreaActive}>Área</li>
          <li>Empleado</li>
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
      <main className={styles.agregarAreaMainContent}>
        <h2 className={styles.agregarAreaTitle}>Agregar Área</h2>
        <div className={styles.agregarAreaFormContainer}>
          <div className={styles.agregarAreaFormRow}>
            <input type="text" placeholder="Área (ID)" className={styles.agregarAreaInput2}/>
            <input type="text" placeholder="Nombre del Área" className={styles.agregarAreaInput}/>
          </div>
        </div>
        <div className={styles.agregarAreaFormActions}>
          <button className={styles.agregarAreaBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarAreaAddButton}>
            Agregar
          </button>
        </div>
      </main>
      <button className={styles.agregarAreaHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarArea;
