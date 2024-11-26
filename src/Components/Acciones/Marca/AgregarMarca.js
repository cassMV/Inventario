import React from 'react';
import styles from './AgregarMarca.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarMarca({ onBack }) {
  return (
    <div className={styles.agregarMarcaContainer}>
      <header className={styles.agregarMarcaHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarMarcaLogo} />
        <div className={styles.agregarMarcaUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarMarcaMenuLateral}>
        <button className={styles.agregarMarcaBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarMarcaMenuList}>
          <h2 className={styles.agregarMarcaMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li>Status del Bien</li>
          <li className={styles.agregarMarcaActive}>Marca</li>
          <li>Tipo de Alta</li>
          <li>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarMarcaMainContent}>
        <h2 className={styles.agregarMarcaTitle}>Agregar Marca</h2>
        <div className={styles.agregarMarcaFormContainer}>
          <input type="text" placeholder="Marca (ID)" className={styles.agregarMarcaInput2}/>
          <div className={styles.agregarMarcaFormRow}>
            <input type="text" placeholder="Nombre de la marca" className={styles.agregarMarcaInput}/>
            <select className={styles.agregarMarcaSelect}>
              <option value="">Status de la marca</option>
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarMarcaFormActions}>
          <button className={styles.agregarMarcaBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarMarcaAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarMarcaHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarMarca;
