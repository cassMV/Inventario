import React from 'react';
import styles from './AgregarRecurso.module.css';
function AgregarRecurso({ onBack }) {
  return (
    <div className={styles.agregarRecursoContainer}>
      <main className={styles.agregarRecursoMainContent}>
        <h2 className={styles.agregarRecursoTitle}>Agregar Recurso de Origen</h2>
        <div className={styles.agregarRecursoFormContainer}>
          <div className={styles.agregarRecursoFormRow}>
            <input type="text" placeholder="Recurso Origen (ID)" className={styles.agregarRecursoInput2}/>
            <select className={styles.agregarRecursoSelect}>
                <option value="">Descripción Origen</option>
                <option value="Estatal">Estatal</option>
                <option value="FASP">FASP</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarRecursoFormActions}>
          <button className={styles.agregarRecursoBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarRecursoAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarRecursoHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarRecurso;
