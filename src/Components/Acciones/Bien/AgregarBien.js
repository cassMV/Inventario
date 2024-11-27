import React from 'react';
import styles from './AgregarBien.module.css';

function AgregarBien({ onBack, onNext }) {
  return (
    <div className={styles.agregarBienContainer}>
      
     
      <main className={styles.agregarBienMainContent}>
        <h2 className={styles.agregarBienTitle}>Agregar Bien</h2>
        <div className={styles.agregarBienSearchContainer}>
          <input
            type="text"
            placeholder="Producto (ID)"
            className={styles.agregarBienSearchInput}
          />
          <button className={styles.agregarBienSearchButton}>🔍</button>
        </div>
        <div className={styles.agregarBienTableContainer}>
          <h3>Lista de bienes:</h3>
          <table className={styles.agregarBienTable}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>ID</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ejemplo 1</td>
                <td>001</td>
                <td>Categoría A</td>
                <td>
                  <button className={styles.agregarBienEditButton}>✏️</button>
                  <button className={styles.agregarBienDeleteButton}>❌</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.agregarBienFormActions}>
          <button className={styles.agregarBienBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarBienNextButton} onClick={onNext}>
            Siguiente
          </button>
        </div>
      </main>
      <button className={styles.agregarBienHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarBien;

