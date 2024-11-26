import React from 'react';
import styles from './AgregarTipoAlta.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarTipoAlta({ onBack }) {
  return (
    <div className={styles.agregarTipoAltaContainer}>
      <header className={styles.agregarTipoAltaHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarTipoAltaLogo} />
        <div className={styles.agregarTipoAltaUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarTipoAltaMenuLateral}>
        <button className={styles.agregarTipoAltaBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarTipoAltaMenuList}>
          <h2 className={styles.agregarTipoAltaMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li>Status del Bien</li>
          <li>Marca</li>
          <li className={styles.agregarTipoAltaActive}>Tipo de Alta</li>
          <li>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarTipoAltaMainContent}>
        <h2 className={styles.agregarTipoAltaTitle}>Agregar Tipo de Alta</h2>
        <div className={styles.agregarTipoAltaFormRow}>
          <input type="text" placeholder="Tipo Alta (ID)" className={styles.agregarTipoAltaInput2}/>
          <select className={styles.agregarTipoAltaSelect}>
            <option value="">Descripción Alta</option>
            <option value="Compra">Compra</option>
            <option value="Asignacion">Asignación</option>
            <option value="Donacion">Donación</option>
            <option value="Comodato">Comodato</option>
          </select>
        </div>
        <div className={styles.agregarTipoAltaFormActions}>
          <button className={styles.agregarTipoAltaBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarTipoAltaAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarTipoAltaHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarTipoAlta;
