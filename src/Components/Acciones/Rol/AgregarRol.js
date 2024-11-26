import React from 'react';
import styles from './AgregarRol.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarRol = ({ onBack }) => {
  return (
    <div className={styles.agregarRolContainer}>
      <header className={styles.agregarRolHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarRolLogo} />
        <div className={styles.agregarRolUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarRolMenuLateral}>
        <button className={styles.agregarRolBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarRolMenuList}>
          <h2 className={styles.agregarRolMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li className={styles.agregarRolActive}>Rol</li>
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
      <main className={styles.agregarRolMainContent}>
          <h2 className={styles.agregarRolTitle}>Agregar Rol</h2>
          <div className={styles.agregarRolFormContainer}>
            <input type="text" placeholder="Rol (ID)" className={styles.agregarRolInput2} />
            <div className={styles.agregarRolFormRow}>
              <input type="text" placeholder="Nombre del rol" className={styles.agregarRolInput2} />
              <input type="text" placeholder="Descripción" className={styles.agregarRolInput} />
            </div>
          </div>
          <div className={styles.agregarRolFormActions}>
            <button className={styles.agregarRolBackButtonAction} onClick={onBack}>Atrás</button>
            <button className={styles.agregarRolAddButton}>Agregar</button>
          </div>
        </main>
      <button className={styles.agregarRolHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarRol;
