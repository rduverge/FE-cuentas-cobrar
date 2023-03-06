import React from "react";

const Tabla = () => {
  return (
    <div className="content-table">
      <h1 className="content-table">Asientos Contables</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Cliente</th>
            <th>Cuenta</th>
            <th>Tipo de Movimiento</th>
            <th>Fecha Asiento</th>
            <th>Monto Asiento</th>
            <th>Estado </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>88,110</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>88,110</td>
            <td>
              <button type="button" className="btn btn-primary">
                Editar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
            <td>88,110</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>88,110</td>
            <td>
              <button type="button" className="btn btn-primary">
                Editar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
            <td>88,110</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>88,110</td>
            <td>
              <button type="button" className="btn btn-primary">
                Editar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
