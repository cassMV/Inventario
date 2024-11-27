import React from 'react';
import styles from './AgregarMarca.module.css';
function AgregarMarca({ onBack }) {
  return (
    <div className={styles.agregarMarcaContainer}>
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
