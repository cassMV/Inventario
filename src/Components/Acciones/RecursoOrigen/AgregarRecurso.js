import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarRecurso.module.css';

function AgregarRecurso({ onBack }) {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarRecursoContainer}>
      <main className={styles.agregarRecursoMainContent}>
        <h2 className={styles.agregarRecursoTitle}>Agregar Recurso de Origen</h2>
        <div className={styles.agregarRecursoFormContainer}>
          <div className={styles.agregarRecursoFormRow}>
            <input
              type="text"
              placeholder="Recurso Origen (ID)"
              className={styles.agregarRecursoInput2}
            />
            <select className={styles.agregarRecursoSelect}>
              <option value="">Descripción Origen</option>
              <option value="Estatal">Estatal</option>
              <option value="FASP">FASP</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarRecursoFormActions}>
          <button
            className={styles.agregarRecursoBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarRecursoAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarRecursoHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
}

export default AgregarRecurso;
