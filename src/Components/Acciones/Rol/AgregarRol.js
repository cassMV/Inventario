import React from 'react';
import styles from './AgregarRol.module.css';

const AgregarRol = ({ onBack }) => {
  return (
    <div className={styles.agregarRolContainer}>
      
      <main className={styles.agregarRolMainContent}>
          <h2 className={styles.agregarRolTitle}>Agregar Rol</h2>
          <div className={styles.agregarRolFormContainer}>
            <input type="text" placeholder="Rol (ID)" className={styles.agregarRolInput2} />
            <div className={styles.agregarRolFormRow}>
              <input type="text" placeholder="Nombre del rol" className={styles.agregarRolInput2} />
              <input type="text" placeholder="Descripción" className={styles.agregarRolInput} />
            </div>
          </div>
          <div className={styles.agregarRolFormActions}>
            <button className={styles.agregarRolBackButtonAction} onClick={onBack}>Atrás</button>
            <button className={styles.agregarRolAddButton}>Agregar</button>
          </div>
        </main>
      <button className={styles.agregarRolHomeButton}>🏠</button>
    </div>
  );
};

export default AgregarRol;
