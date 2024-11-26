import React from 'react';
import styles from './AgregarBien.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarBien({ onBack, onNext }) {
  return (
    <div className={styles.agregarBienContainer}>
      <header className={styles.agregarBienHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarBienLogo} />
        <div className={styles.agregarBienUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarBienMenuLateral}>
        <button className={styles.agregarBienBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarBienMenuList}>
          <h2 className={styles.agregarBienMenuTitle}>Agregar</h2>
          <li className={styles.agregarBienActive}>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
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

