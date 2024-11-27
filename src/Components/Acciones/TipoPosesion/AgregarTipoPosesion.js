import React from 'react';
import styles from './AgregarTipoPosesion.module.css';

function AgregarTipoPosesion({ onBack }) {
  return (
    <div className={styles.agregarTipoPosesionContainer}>
      <main className={styles.agregarTipoPosesionMainContent}>
        <h2 className={styles.agregarTipoPosesionTitle}>Agregar Tipo de Posesión</h2>
        <div className={styles.agregarTipoPosesionFormContainer}>
          <input type="text" placeholder="Tipo de Posesión (ID)" className={styles.agregarTipoPosesionInput2}/>
          <div className={styles.agregarTipoPosesionFormRow}>
            <input type="text" placeholder="Descripción de la Posesión" className={styles.agregarTipoPosesionInput}/>
            <input type="text" placeholder="Clave de Posesión" className={styles.agregarTipoPosesionInput}/>
            <select className={styles.agregarTipoPosesionSelect}>
                <option value="">Status de posesión</option>
                <option value="Activa">Activa</option>
                <option value="Inactiva">Inactiva</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarTipoPosesionFormActions}>
          <button className={styles.agregarTipoPosesionBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarTipoPosesionAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarTipoPosesionHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarTipoPosesion;
