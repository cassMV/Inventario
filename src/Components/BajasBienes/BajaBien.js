import React from 'react';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';
import BajaBienIcon from '../imagenes/BajaBienIcon.PNG'; // Asegúrate de que la imagen exista
import styles from './BajaBien.module.css';

function BajaBien({ onBack, onNavigateTo }) {
  return (
    <div className={styles.bajaBienContainerCustom}>
      <header className={styles.bajaBienHeaderCustom}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.logoCustom} />
        <div className={styles.userIconCustom}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.menuLateralCustom}>
        <button className={styles.backButtonCustom} onClick={onBack}>←</button>
        <ul className={styles.menuListCustom}>
          <h2 className={styles.menuTitleCustom}>Baja de Bienes</h2>
          <li onClick={() => onNavigateTo('AgregarBajaBien2')}>Baja Bien</li>
        </ul>
      </div>
      <main className={styles.bajaBienContentCustom}>
        <h2 className={styles.titleBajaBienCustom}>Baja de Bienes</h2>
        <div className={styles.bajaBienIconCustom}>
          <img src={BajaBienIcon} alt="Baja Bien Icon" />
        </div>
      </main>
      <button onClick={() => onNavigateTo('menu')} className={styles.homeButtonCustom}>🏠</button>
    </div>
  );
}

export default BajaBien;

