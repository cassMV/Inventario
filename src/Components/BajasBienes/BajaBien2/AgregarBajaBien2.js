import React from 'react';
import styles from './AgregarBajaBien2.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarBajaBien2({ onBack, onNext }) {
  return (
    <div className={styles.agregarBajaBien2Container}>
      <header className={styles.agregarBajaBien2Header}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarBajaBien2Logo} />
        <div className={styles.agregarBajaBien2UserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarBajaBien2MenuLateral}>
        <button className={styles.agregarBajaBien2BackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarBajaBien2MenuList}>
          <h2 className={styles.agregarBajaBien2MenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li className={styles.agregarBajaBien2Active}>Baja Bien</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li>Status del Bien</li>
          <li>Marca</li>
          <li>Tipo de Alta</li>
          <li>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarBajaBien2MainContent}>
        <h2 className={styles.agregarBajaBien2Title}>Agregar Baja Bien</h2>
        <div className={styles.agregarBajaBien2SearchContainer}>
          <input
            type="text"
            placeholder="Empleado (ID)"
            className={styles.agregarBajaBien2SearchInput}
          />
          <button className={styles.agregarBajaBien2SearchButton}>🔍</button>
        </div>
        <div className={styles.agregarBajaBien2TableContainer}>
          <h3>Lista de empleados:</h3>
          <table className={styles.agregarBajaBien2Table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>ID</th>
                <th>Departamento</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ejemplo Empleado</td>
                <td>001</td>
                <td>Finanzas</td>
                <td>
                  <button className={styles.agregarBajaBien2EditButton}>✏️</button>
                  <button className={styles.agregarBajaBien2DeleteButton}>❌</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.agregarBajaBien2FormActions}>
          <button className={styles.agregarBajaBien2BackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarBajaBien2NextButton} onClick={onNext}>
            Siguiente
          </button>
        </div>
      </main>
      <button className={styles.agregarBajaBien2HomeButton}>🏠</button>
    </div>
  );
}

export default AgregarBajaBien2;
