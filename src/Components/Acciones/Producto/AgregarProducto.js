import React from 'react';
import styles from './AgregarProducto.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

const AgregarProducto = ({ onBack }) => {
  return (
    <div className={styles.agregarProductoContainer}>
      <header className={styles.agregarProductoHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarProductoLogo} />
        <div className={styles.agregarProductoUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarProductoMenuLateral}>
        <button className={styles.agregarProductoBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarProductoMenuList}>
          <h2 className={styles.agregarProductoMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li className={styles.agregarProductoActive}>Producto</li>
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
      <main className={styles.agregarProductoMainContent}>
          <h2 className={styles.agregarProductoTitle}>Agregar Producto</h2>
          <div className={styles.agregarProductoFormContainer}>
            <input type="text" placeholder="Producto (ID)" className={styles.agregarProductoInput2} />
            <div className={styles.agregarProductoFormRow}>
              <input type="text" placeholder="Nombre del producto" className={styles.agregarProductoInput} />
              <input type="text" placeholder="Modelo" className={styles.agregarProductoInput} />
              <input type="text" placeholder="Ruta imagen" className={styles.agregarProductoInput} />
            </div>
            <div className={styles.agregarProductoFormRow}>
              <input type="text" placeholder="Características" className={styles.agregarProductoInput} />
              <input type="text" placeholder="Marca (ID)" className={styles.agregarProductoInput2} />
            </div>
          </div>
          <div className={styles.agregarProductoFormActions}>
            <button className={styles.agregarProductoBackButtonAction} onClick={onBack}>Atrás</button>
            <button className={styles.agregarProductoAddButton}>Agregar</button>
          </div>
        </main>
      <button className={styles.agregarProductoHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarProducto;
