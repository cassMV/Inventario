import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarDireccion.module.css';

const AgregarDireccion = ({ onBack }) => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarDireccionContainer}>
      <main className={styles.agregarDireccionMainContent}>
        <h2 className={styles.agregarDireccionTitle}>Agregar Dirección</h2>
        <div className={styles.agregarDireccionFormContainer}>
          <div className={styles.agregarDireccionFormRow}>
            <input
              type="text"
              placeholder="Dirección (ID)"
              className={styles.agregarDireccionInput2}
            />
            <input
              type="text"
              placeholder="Nombre de la dirección"
              className={styles.agregarDireccionInput}
            />
          </div>
        </div>
        <div className={styles.agregarDireccionFormActions}>
          <button
            className={styles.agregarDireccionBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarDireccionAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarDireccionHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
};

export default AgregarDireccion;
