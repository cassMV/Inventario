import React from 'react';
import styles from './AgregarArea.module.css';

const AgregarArea = ({ onBack }) => {
  return (
    <div className={styles.agregarAreaContainer}>
      
      <main className={styles.agregarAreaMainContent}>
        <h2 className={styles.agregarAreaTitle}>Agregar Área</h2>
        <div className={styles.agregarAreaFormContainer}>
          <div className={styles.agregarAreaFormRow}>
            <input type="text" placeholder="Área (ID)" className={styles.agregarAreaInput2}/>
            <input type="text" placeholder="Nombre del Área" className={styles.agregarAreaInput}/>
          </div>
        </div>
        <div className={styles.agregarAreaFormActions}>
          <button className={styles.agregarAreaBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarAreaAddButton}>
            Agregar
          </button>
        </div>
      </main>
      <button className={styles.agregarAreaHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarArea;
