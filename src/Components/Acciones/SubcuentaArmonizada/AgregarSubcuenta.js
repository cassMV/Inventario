import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarSubcuenta.module.css';

function AgregarSubcuenta({ onBack }) {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarSubcuentaContainer}>
      <main className={styles.agregarSubcuentaMainContent}>
        <h2 className={styles.agregarSubcuentaTitle}>Agregar Subcuenta Armonizada</h2>
        <div className={styles.agregarSubcuentaFormContainer}>
          <input
            type="text"
            placeholder="Subcuenta Armonizada (ID)"
            className={styles.agregarSubcuentaInput2}
          />
          <div className={styles.agregarSubcuentaFormRow}>
            <input
              type="text"
              placeholder="Código de la Subcuenta"
              className={styles.agregarSubcuentaInput}
            />
            <input
              type="text"
              placeholder="Nombre de la Subcuenta Armonizada"
              className={styles.agregarSubcuentaInput}
            />
          </div>
          <div className={styles.agregarSubcuentaFormRow}>
            <select className={styles.agregarSubcuentaSelect}>
              <option value="">Borrador de Subcuenta Armonizada</option>
              <option value="Habilitado">Habilitado</option>
              <option value="Inhabilitado">Inhabilitado</option>
            </select>
            <select className={styles.agregarSubcuentaSelect}>
              <option value="">Status de la Subcuenta</option>
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarSubcuentaFormActions}>
          <button
            className={styles.agregarSubcuentaBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarSubcuentaAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarSubcuentaHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
}

export default AgregarSubcuenta;
