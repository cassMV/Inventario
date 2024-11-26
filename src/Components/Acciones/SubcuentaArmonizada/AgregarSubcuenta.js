import React from 'react';
import styles from './AgregarSubcuenta.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarSubcuenta({ onBack }) {
  return (
    <div className={styles.agregarSubcuentaContainer}>
      <header className={styles.agregarSubcuentaHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarSubcuentaLogo} />
        <div className={styles.agregarSubcuentaUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarSubcuentaMenuLateral}>
        <button className={styles.agregarSubcuentaBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarSubcuentaMenuList}>
          <h2 className={styles.agregarSubcuentaMenuTitle}>Agregar</h2>
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
          <li className={styles.agregarSubcuentaActive}>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarSubcuentaMainContent}>
        <h2 className={styles.agregarSubcuentaTitle}>Agregar Subcuenta Armonizada</h2>
        <div className={styles.agregarSubcuentaFormContainer}>
            <input type="text" placeholder="Subcuenta Armonizada (ID)" className={styles.agregarSubcuentaInput2}/>
            <div className={styles.agregarSubcuentaFormRow}>
                <input type="text" placeholder="Código de la Subcuenta" className={styles.agregarSubcuentaInput}/>
                <input type="text" placeholder="Nombre de la Subcuenta Armonizada" className={styles.agregarSubcuentaInput}/>
            </div>
            <div className={styles.agregarSubcuentaFormRow}>
                <select className={styles.agregarSubcuentaSelect}>
                    <option value="">Borrador de Subcuenta Armonizada</option>
                    <option value="Habilitado">Habilitado</option>
                    <option value="Inhabilitado">Inhabilitado</option>
                </select>
                <select className={styles.agregarSubcuentaSelect}>
                    <option value="">Status de la Subcuenta</option>
                    <option value="Activa">Activa</option>
                    <option value="Inactiva">Inactiva</option>
                </select>
          </div>
        </div>
        <div className={styles.agregarSubcuentaFormActions}>
          <button className={styles.agregarSubcuentaBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarSubcuentaAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarSubcuentaHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarSubcuenta;
