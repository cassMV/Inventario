import React from 'react';
import styles from './AgregarStatus.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarStatus = ({ onBack }) => {
  return (
    <div className={styles.agregarStatusContainer}>
      <header className={styles.agregarStatusHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarStatusLogo} />
        <div className={styles.agregarStatusUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarStatusMenuLateral}>
        <button className={styles.agregarStatusBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarStatusMenuList}>
        <h2 className={styles.agregarStatusMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li className={styles.agregarStatusActive}>Status del Bien</li>
          <li>Marca</li>
          <li>Tipo de Alta</li>
          <li>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarStatusMainContent}>
          <h2 className={styles.agregarStatusTitle}>Agregar Status del Bien</h2>
          <div className={styles.agregarStatusFormContainer}>
            <div className={styles.agregarStatusFormRow}>
              <input type="text" placeholder="Status del Bien (ID)" className={styles.agregarStatusInput2} />
              <select className={styles.agregarStatusSelect}>
                <option value="">Seleccionar Status</option>
                <option value="Asignado">Asignado</option>
                <option value="Extraviado">Extraviado</option>
                <option value="Dado de baja">Dado de baja</option>
                <option value="Reasignado">Reasignado</option>
              </select>
            </div>
          </div>
          <div className={styles.agregarStatusFormActions}>
            <button className={styles.agregarStatusBackButtonAction} onClick={onBack}>Atrás</button>
            <button className={styles.agregarStatusAddButton}>Agregar</button>
          </div>
        </main>
      <button className={styles.agregarStatusHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarStatus;
