import React from 'react';
import styles from './AgregarDocumento.module.css';

function AgregarDocumento({ onBack }) {
  return (
    <div className={styles.agregarDocumentoContainer}>
 
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
