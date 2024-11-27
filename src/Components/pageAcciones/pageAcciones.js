import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaDesplegable from "../listaDesplegable/listaDesplegable.js";
import AgregarBien from "../Acciones/Bien/AgregarBien.js";
import AgregarArea from "../Acciones/Area/AgregarArea.js";
import AgregarEmpleado from "../Acciones/Empleado/AgregarEmpleado.js";
import AgregarProducto from "../Acciones/Producto/AgregarProducto.js";
import AgregarRol from "../Acciones/Rol/AgregarRol.js";
import AgregarDireccion from "../Acciones/Direccion/AgregarDireccion.js";
import AgregarStatus from "../Acciones/StatusBien/AgregarStatus.js";
import AgregarMarca from "../Acciones/Marca/AgregarMarca.js";
import AgregarTipoAlta from "../Acciones/TipoAlta/AgregarTipoAlta.js";
import AgregarDocumento from "../Acciones/Documento/AgregarDocumento.js";
import AgregarCodigo from "../Acciones/CodigoPartida/AgregarCodigo.js";
import AgregarSubcuenta from "../Acciones/SubcuentaArmonizada/AgregarSubcuenta.js";
import AgregarRecurso from "../Acciones/RecursoOrigen/AgregarRecurso.js";
import AgregarTipoPosesion from "../Acciones/TipoPosesion/AgregarTipoPosesion.js";

const Acciones = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Lista desplegable fija en el lado izquierdo */}
      <ListaDesplegable />

      {/* Área principal donde se renderizan los componentes */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
        <Route path="bien" element={<AgregarBien />} />
        <Route path="area" element={<AgregarArea />} />
        <Route path="empleado" element={<AgregarEmpleado />} />
        <Route path="producto" element={<AgregarProducto />} />
        <Route path="direccion" element={<AgregarDireccion />} />
        <Route path="status-bien" element={<AgregarStatus />} />
        <Route path="marca" element={<AgregarMarca />} />
        <Route path="rol" element={<AgregarRol />} />
        <Route path="tipo-alta" element={<AgregarTipoAlta />} />
        <Route path="documentos" element={<AgregarDocumento />} />
        <Route path="codigo-partida" element={<AgregarCodigo/>} />
        <Route path="subcuenta" element={<AgregarSubcuenta/>} />
        <Route path="recurso-origen" element={<AgregarRecurso/>} />
        <Route path="tipo-posesion" element={<AgregarTipoPosesion/>} />
          {/* Ruta por defecto para /acciones */}
          <Route path="/" element={<h1>Selecciona una opción de la lista</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Acciones;
