import React from "react";

const Tabla = () => {
  return (
    <div className="table">
      <h1 className="content-table">Tipos Documentos</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Cuenta Contable</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Domenic</td>
            <td>88,110</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
