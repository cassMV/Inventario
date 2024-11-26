import React from 'react';
import styles from './AgregarCodigo.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarCodigo({ onBack }) {
  return (
    <div className={styles.agregarCodigoContainer}>
      <header className={styles.agregarCodigoHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarCodigoLogo} />
        <div className={styles.agregarCodigoUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarCodigoMenuLateral}>
        <button className={styles.agregarCodigoBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarCodigoMenuList}>
          <h2 className={styles.agregarCodigoMenuTitle}>Agregar</h2>
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
          <li className={styles.agregarCodigoActive}>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarCodigoMainContent}>
        <h2 className={styles.agregarCodigoTitle}>Agregar Código de Partida Específica</h2>
        <div className={styles.agregarCodigoFormContainer}>
          <input type="text" placeholder="Código de Partida Específica (ID)" className={styles.agregarCodigoInput2}/>
          <div className={styles.agregarBajaBienFormRow}>
            <input type="text" placeholder="Código Partida" className={styles.agregarCodigoInput}/>
            <input type="text" placeholder="Nombre de la Partida" className={styles.agregarCodigoInput}/>
            <input type="text" placeholder="Borrador Partida" className={styles.agregarCodigoInput}/>
          </div>
          <div className={styles.agregarBajaBienFormRow}>
            <input type="text" placeholder="Status Partida" className={styles.agregarCodigoInput}/>
            <input type="text" placeholder="Subcuenta Armonizada (ID)" className={styles.agregarCodigoInput}/>
          </div>
        </div>
        <div className={styles.agregarCodigoFormActions}>
          <button className={styles.agregarCodigoBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarCodigoAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarCodigoHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarCodigo;
