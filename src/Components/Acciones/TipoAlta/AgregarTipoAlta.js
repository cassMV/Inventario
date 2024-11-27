import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarTipoAlta.module.css';

function AgregarTipoAlta({ onBack }) {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarTipoAltaContainer}>
      <main className={styles.agregarTipoAltaMainContent}>
        <h2 className={styles.agregarTipoAltaTitle}>Agregar Tipo de Alta</h2>
        <div  className={styles.agregarTipoAltaFormContainer}>
        <div className={styles.agregarTipoAltaFormRow}>
          <input
            type="text"
            placeholder="Tipo Alta (ID)"
            className={styles.agregarTipoAltaInput2}
          />
          <select className={styles.agregarTipoAltaSelect}>
            <option value="">Descripción Alta</option>
            <option value="Compra">Compra</option>
            <option value="Asignacion">Asignación</option>
            <option value="Donacion">Donación</option>
            <option value="Comodato">Comodato</option>
          </select>
        </div>
        </div>
        <div className={styles.agregarTipoAltaFormActions}>
          <button
            className={styles.agregarTipoAltaBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarTipoAltaAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarTipoAltaHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
}

export default AgregarTipoAlta;
