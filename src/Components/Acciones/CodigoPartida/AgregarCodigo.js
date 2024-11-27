import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarCodigo.module.css';

function AgregarCodigo({ onBack }) {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarCodigoContainer}>
      <main className={styles.agregarCodigoMainContent}>
        <h2 className={styles.agregarCodigoTitle}>Agregar Código de Partida Específica</h2>
        <div className={styles.agregarCodigoFormContainer}>
          <input
            type="text"
            placeholder="Código de Partida Específica (ID)"
            className={styles.agregarCodigoInput2}
          />
          <div className={styles.agregarBajaBienFormRow}>
            <input
              type="text"
              placeholder="Código Partida"
              className={styles.agregarCodigoInput}
            />
            <input
              type="text"
              placeholder="Nombre de la Partida"
              className={styles.agregarCodigoInput}
            />
            <input
              type="text"
              placeholder="Borrador Partida"
              className={styles.agregarCodigoInput}
            />
          </div>
          <div className={styles.agregarBajaBienFormRow}>
            <input
              type="text"
              placeholder="Status Partida"
              className={styles.agregarCodigoInput}
            />
            <input
              type="text"
              placeholder="Subcuenta Armonizada (ID)"
              className={styles.agregarCodigoInput}
            />
          </div>
        </div>
        <div className={styles.agregarCodigoFormActions}>
          <button
            className={styles.agregarCodigoBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarCodigoAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarCodigoHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
}

export default AgregarCodigo;
