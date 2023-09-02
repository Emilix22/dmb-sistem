import React from 'react'

function SiniestrosTodosList({ siniestrosAuto, siniestrosHogar }) {

    console.log(siniestrosAuto)
    console.log(siniestrosHogar)
    return (
        <div className="listado-tabla">
          <h3>Listado de todos los Siniestros Denunciados</h3>
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
            >
            <thead>
              <tr>
                <td>
                  <strong>Fecha</strong>
                </td>
                <td>
                  <strong>Hora</strong>
                </td>
                <td>
                  <strong>Tipo de Siniestro</strong>
                </td>
                <td>
                  <strong>Cliente</strong>
                </td>
                <td>
                  <strong>Póliza</strong>
                </td>
                <td>
                  <strong>Consecuencia</strong>
                </td>
                <td>
                  <strong>Fecha de la Denuncia</strong>
                </td>
              </tr>
            </thead>
            {/* <tbody>
              {

                clientesPersona 
                ? clientesPersona.map((cliente, index) => {
                  return (
                    <RowTable
                      nombre={cliente.nombre}
                      apellido={cliente.apellido}
                      dni={cliente.dni}
                      email={cliente.email}
                      direccion={cliente.calle + " " + cliente.altura + " " + cliente.piso + " " + cliente.departamento + ", " + cliente.localidad + "("+cliente.cp+")"}
                      telefonos={ cliente.telefono_fijo ? cliente.celular + " / " + cliente.telefono_fijo : cliente.celular}
                      metodoPago={cliente.metodos_pagos_cliente_persona.nombre_metodo_pago}
                      key={cliente + index}
                    />
                  );
                }) : <tr></tr>
              }
            </tbody>   */}
          </table>
        </div>
    )
}

export default SiniestrosTodosList
