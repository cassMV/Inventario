import React from 'react';
import styles from './AgregarRecurso.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarRecurso({ onBack }) {
  return (
    <div className={styles.agregarRecursoContainer}>
      <header className={styles.agregarRecursoHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarRecursoLogo} />
        <div className={styles.agregarRecursoUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarRecursoMenuLateral}>
        <button className={styles.agregarRecursoBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarRecursoMenuList}>
          <h2 className={styles.agregarRecursoMenuTitle}>Agregar</h2>
          <li>Bien</li>
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
          <li className={styles.agregarRecursoActive}>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarRecursoMainContent}>
        <h2 className={styles.agregarRecursoTitle}>Agregar Recurso de Origen</h2>
        <div className={styles.agregarRecursoFormContainer}>
          <div className={styles.agregarRecursoFormRow}>
            <input type="text" placeholder="Recurso Origen (ID)" className={styles.agregarRecursoInput2}/>
            <select className={styles.agregarRecursoSelect}>
                <option value="">Descripción Origen</option>
                <option value="Estatal">Estatal</option>
                <option value="FASP">FASP</option>
            </select>
          </div>
        </div>
        <div className={styles.agregarRecursoFormActions}>
          <button className={styles.agregarRecursoBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarRecursoAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarRecursoHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarRecurso;
