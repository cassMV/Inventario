import React from 'react';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';
import Acciones from '../imagenes/Acciones.PNG';
import Bienes from '../imagenes/Bienes.PNG';
import Bajas from '../imagenes/Bajas.PNG';
import Resguardo from '../imagenes/Resguardo.PNG';
import Usuarios from '../imagenes/Usuarios.PNG';
import styles from './Menu.module.css'; // Importa los estilos como un objeto

const Menu = ({ onNavigate }) => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.logo} />
        <div className={styles['user-icon']}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <h1 className={styles.title}>Sistema de control de Inventarios de Bienes muebles</h1>
      <h2 className={styles.subtitle}>SICOIBM</h2>
      <div className={styles['icon-container']}>
        <div className={styles['icon-item']}>
          <img src={Acciones} alt="Acciones" className={styles.icon} />
          <button className={styles['login-button']} 
            onClick={() => onNavigate('Acciones')}>Acciones</button>
        </div>
        <div className={styles['icon-item']}>
          <img src={Bienes} alt="Bienes" className={styles.icon} />
          <p>Bienes</p>
        </div>
        <div className={styles['icon-item']}>
          <img src={Bajas} alt="BajasBien" className={styles.icon} />
          <button className={styles['login-button']} 
            onClick={() => onNavigate('BajaBien')}>Bajas</button>
        </div>
        <div className={styles['icon-item']}>
          <img src={Resguardo} alt="Resguardo" className={styles.icon} />
          <p>Resguardo</p>
        </div>
        <div className={styles['icon-item']}>
          <img src={Usuarios} alt="Usuarios" className={styles.icon} />
          <p>Usuarios</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
