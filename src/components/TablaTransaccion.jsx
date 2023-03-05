import React from "react";

const Tabla = () => {
    return (
        <div className='table'>
                <h1 className="content-table">Transacciones</h1>
                <table className="content-table">
        <thead>
          <tr>
            <th>Tipo de Movimiento</th>
            <th>Tipo Documento</th>
            <th>Numero de documento</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Monto</th>
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
          </tr>
          <tr>
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
            <td>88,110</td>
            <td>Domenic</td>
            <td>88,110</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
            <td>88,110</td>
            <td>Domenic</td>
            <td>88,110</td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}

export default Tabla