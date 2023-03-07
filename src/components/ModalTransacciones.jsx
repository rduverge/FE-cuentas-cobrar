import React from "react";
import CerrarBtn from "../img/cerrar.svg";

const ModalTransacciones = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        action=""
      >
        <legend>Transacciones</legend>

        <div className="campo">
          <label htmlFor="tipoMovimientoTran">Tipo de movimiento</label>
          <select id="tipoMovimientoTran">
            <option value="">-- Seleccione el tipo de movimiento --</option>
            <option value="Activo"> Debito </option>
            <option value="Inactivo"> Credito </option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="idTipoDocumento">Tipo Documento</label>
          <select id="idTipoDocumento">
            <option value="">-- Seleccione el tipo de documento --</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="numeroDocumento">Numero de documento</label>
          <input
            type="number"
            placeholder="Añade el numero de documento"
            id="numeroDocumento"
          />
        </div>

        <div className="campo">
          <label htmlFor="fechaTransaccion">Fecha</label>
          <input
            type="date"
            placeholder="Añade la fecha del asiento"
            id="fechaTransaccion"
          />
        </div>

        <div className="campo">
          <label htmlFor="idCliente">Cliente</label>
          <select id="idCliente">
            <option value="">-- Seleccione el cliente --</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="montoTransaccion">Monto</label>
          <input
            type="number"
            min="0"
            placeholder="Añade el monto"
            id="montoTransaccion"
          />
        </div>
        <input type="submit" value="Añadir transaccion" />
      </form>
    </div>
  );
};

export default ModalTransacciones;
