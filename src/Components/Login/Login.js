import React from 'react';
import logo from '../imagenes/logo.jpeg';
import logo2 from '../imagenes/logo2.PNG';
import styles from './Login.module.css'; // Importa los estilos como un objeto

const Login = ({ onLogin }) => {
  return (
    <div className={styles['login-container']}>
      <img src={logo2} alt="Logo" className={styles['login-logo']} />
      <div className={styles['login-box']}>
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" className={styles['login-input']} />
        <input type="password" placeholder="Contraseña" className={styles['login-input']} />
        <button className={styles['login-button']} onClick={onLogin}>Iniciar</button>
      </div>
      <div className={styles['logo-container']}>
        <img src={logo} alt="Hidalgo Logo" className={styles['logo-hidalgo']} />
      </div>
    </div>
  );
};

export default Login;


