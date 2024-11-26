import React from 'react';
import styles from './AgregarTipoPosesion.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarTipoPosesion({ onBack }) {
  return (
    <div className={styles.agregarTipoPosesionContainer}>
      <header className={styles.agregarTipoPosesionHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarTipoPosesionLogo} />
        <div className={styles.agregarTipoPosesionUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarTipoPosesionMenuLateral}>
        <button className={styles.agregarTipoPosesionBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarTipoPosesionMenuList}>
          <h2 className={styles.agregarTipoPosesionMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
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
          <li className={styles.agregarTipoPosesionActive}>Tipo de Posesión</li>
        </ul>
      </div>
      <main className={styles.agregarTipoPosesionMainContent}>
        <h2 className={styles.agregarTipoPosesionTitle}>Agregar Tipo de Posesión</h2>
        <div className={styles.agregarTipoPosesionFormContainer}>
          <input type="text" placeholder="Tipo de Posesión (ID)" className={styles.agregarTipoPosesionInput2}/>
          <div className={styles.agregarTipoPosesionFormRow}>
            <input type="text" placeholder="Descripción de la Posesión" className={styles.agregarTipoPosesionInput}/>
            <input type="text" placeholder="Clave de Posesión" className={styles.agregarTipoPosesionInput}/>
            <select className={styles.agregarTipoPosesionSelect}>
                <option value="">Status de posesión</option>
                <option value="Activa">Activa</option>
                <option value="Inactiva">Inactiva</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarTipoPosesionFormActions}>
          <button className={styles.agregarTipoPosesionBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarTipoPosesionAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarTipoPosesionHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarTipoPosesion;
