import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgregarEmpleado.module.css';

const AgregarEmpleado = ({ onBack }) => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className={styles.agregarEmpleadoContainer}>
      <main className={styles.agregarEmpleadoMainContent}>
        <h2 className={styles.agregarEmpleadoTitle}>Agregar Empleado</h2>
        <div className={styles.agregarEmpleadoFormContainer}>
          <input
            type="text"
            placeholder="Empleado (ID)"
            className={styles.agregarEmpleadoInput2}
          />
          <div className={styles.agregarEmpleadoFormRow}>
            <input
              type="text"
              placeholder="Nombre del empleado"
              className={styles.agregarEmpleadoInput}
            />
            <input
              type="text"
              placeholder="Correo electrónico"
              className={styles.agregarEmpleadoInput}
            />
            <input
              type="text"
              placeholder="RFC"
              className={styles.agregarEmpleadoInput}
            />
          </div>
          <div className={styles.agregarEmpleadoFormRow}>
            <input
              type="text"
              placeholder="Número de empleado"
              className={styles.agregarEmpleadoInput}
            />
            <input
              type="text"
              placeholder="Número de contacto"
              className={styles.agregarEmpleadoInput}
            />
            <select className={styles.agregarEmpleadoSelect}>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <input
              type="text"
              placeholder="Área (ID)"
              className={styles.agregarEmpleadoInput}
            />
          </div>
        </div>
        <div className={styles.agregarEmpleadoFormActions}>
          <button
            className={styles.agregarEmpleadoBackButtonAction}
            onClick={onBack}
          >
            Atrás
          </button>
          <button className={styles.agregarEmpleadoAddButton}>Agregar</button>
        </div>
      </main>
      <button
        className={styles.agregarEmpleadoHomeButton}
        onClick={() => navigate('/menu')}
      >
        🏠
      </button>
    </div>
  );
};

export default AgregarEmpleado;
