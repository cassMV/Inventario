import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarStatus.module.css';

const AgregarStatus = ({ onBack }) => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarStatusContainer}>
      <main className={styles.agregarStatusMainContent}>
        <h2 className={styles.agregarStatusTitle}>Agregar Status del Bien</h2>
        <div className={styles.agregarStatusFormContainer}>
          <div className={styles.agregarStatusFormRow}>
            <input
              type="text"
              placeholder="Status del Bien (ID)"
              className={styles.agregarStatusInput2}
            />
            <select className={styles.agregarStatusSelect}>
              <option value="">Seleccionar Status</option>
              <option value="Asignado">Asignado</option>
              <option value="Extraviado">Extraviado</option>
              <option value="Dado de baja">Dado de baja</option>
              <option value="Reasignado">Reasignado</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarStatusFormActions}>
          <button
            className={styles.agregarStatusBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarStatusAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarStatusHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
};

export default AgregarStatus;
