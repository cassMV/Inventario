import React from 'react';
import styles from './AgregarProducto.module.css';

const AgregarProducto = ({ onBack }) => {
  return (
    <div className={styles.agregarProductoContainer}>
      
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
