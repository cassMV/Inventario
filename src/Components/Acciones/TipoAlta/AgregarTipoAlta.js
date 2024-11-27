import React from 'react';
import styles from './AgregarTipoAlta.module.css';

function AgregarTipoAlta({ onBack }) {
  return (
    <div className={styles.agregarTipoAltaContainer}>
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
