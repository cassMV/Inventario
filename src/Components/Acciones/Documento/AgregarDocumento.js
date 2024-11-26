import React from 'react';
import styles from './AgregarDocumento.module.css';
import Logo from '../imagenes/logo.jpeg';
import Logo2 from '../imagenes/Usuario.PNG';

function AgregarDocumento({ onBack }) {
  return (
    <div className={styles.agregarDocumentoContainer}>
      <header className={styles.agregarDocumentoHeader}>
        <img src={Logo} alt="Hidalgo Logo" className={styles.agregarDocumentoLogo} />
        <div className={styles.agregarDocumentoUserIcon}>
          <img src={Logo2} alt="User Icon" />
        </div>
      </header>
      <div className={styles.agregarDocumentoMenuLateral}>
        <button className={styles.agregarDocumentoBackButton} onClick={onBack}>←</button>
        <ul className={styles.agregarDocumentoMenuList}>
          <h2 className={styles.agregarDocumentoMenuTitle}>Agregar</h2>
          <li>Bien</li>
          <li>Área</li>
          <li>Empleado</li>
          <li>Producto</li>
          <li>Rol</li>
          <li>Dirección</li>
          <li>Status del Bien</li>
          <li>Marca</li>
          <li>Tipo de Alta</li>
          <li className={styles.agregarDocumentoActive}>Documentos</li>
          <li>Código de Partida Específica</li>
          <li>Subcuenta Armonizada</li>
          <li>Recurso del Origen</li>
          <li>Tipo de posesión</li>
        </ul>
      </div>
      <main className={styles.agregarDocumentoMainContent}>
        <h2 className={styles.agregarDocumentoTitle}>Agregar Documento</h2>
        <div className={styles.agregarDocumentoFormContainer}>
            <input type="text" placeholder="Documento (ID)"  className={styles.agregarDocumentoInput2}/>
        <div className={styles.agregarDocumentoFormRow}>
            <input type="text" placeholder="Factura de Documento" className={styles.agregarDocumentoInput}/>
            <input type="date" placeholder="Fecha de Documento" className={styles.agregarDocumentoInput}/>
            <input type="text" placeholder="Status Legal" className={styles.agregarDocumentoInput}/>
        </div>
        <div className={styles.agregarDocumentoFormRow}>
            <select className={styles.agregarDocumentoSelect}>
                <option value="">Documento que Ampare la Propiedad del Bien</option>
                <option value="Comprobante Fiscal Digital por Internet">Comprobante Fiscal Digital por Internet</option>
                <option value="Contrato de Comodato">Contrato de Comodato</option>
                <option value="Contrato de Donación">Contrato de Donación</option>
                <option value="Resguardo Oficial de Asignación">Resguardo Oficial de Asignación</option>
            </select>
            <input type="text" placeholder="Comentarios" className={styles.agregarDocumentoInput}/>
            <input type="text" placeholder="Bien (ID)" className={styles.agregarDocumentoInput}/>
        </div>
        </div>
        <div className={styles.agregarDocumentoFormActions}>
          <button className={styles.agregarDocumentoBackButtonAction} onClick={onBack}>
            Atrás
          </button>
          <button className={styles.agregarDocumentoAddButton}>Agregar</button>
        </div>
      </main>
      <button className={styles.agregarDocumentoHomeButton}>🏠</button>
    </div>
  );
}

export default AgregarDocumento;
