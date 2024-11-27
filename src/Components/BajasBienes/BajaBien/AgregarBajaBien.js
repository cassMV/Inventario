import React from 'react';
import styles from './AgregarBajaBien.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarBajaBien({ onBack }) {
  return (
    <div className={styles.agregarBajaBienContainer}>
      <header className={styles.agregarBajaBienHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarBajaBienLogo} />
        <div className={styles.agregarBajaBienUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarBajaBienMenuLateral}>
        <button className={styles.agregarBajaBienBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarBajaBienMenuList}>
          <h2 className={styles.agregarBajaBienMenuTitle}>Agregar</h2>
          <li className={styles.agregarBajaBienActive}>Baja Bien</li>
        </ul>
      </div>
      <main className={styles.agregarBajaBienMainContent}>
        <h2 className={styles.agregarBajaBienTitle}>Agregar Baja Bien</h2>
        <div className={styles.agregarBajaBienFormContainer}>
          <input type="text" placeholder="Baja Bien (ID)" className={styles.agregarBajaBienInput2}/>
          <div className={styles.agregarBajaBienFormRow}>
            <input type="date" placeholder="Fecha de baja" className={styles.agregarBajaBienInput} />
            <input type="text" placeholder="Documento que ampare la baja" className={styles.agregarBajaBienInput} />
            <input type="text" placeholder="No. de póliza" className={styles.agregarBajaBienInput} />
          </div>
          <div className={styles.agregarBajaBienFormRow}>
            <input type="date" placeholder="Fecha de la póliza" className={styles.agregarBajaBienInput} />
            <input type="text" placeholder="Bien (ID)" className={styles.agregarBajaBienInput} />
            <input type="text" placeholder="Usuario (ID)" className={styles.agregarBajaBienInput} />
          </div>
        </div>
        <div className={styles.agregarBajaBienFormActions}>
          <button className={styles.agregarBajaBienBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarBajaBienAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarBajaBienHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarBajaBien;
