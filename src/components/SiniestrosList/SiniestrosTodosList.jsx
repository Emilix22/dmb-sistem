import React from 'react'
import RowTable from './RowTable'

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
                  <strong>Póliza N°</strong>
                </td>
                <td>
                  <strong>Consecuencia</strong>
                </td>
                <td>
                  <strong>Fecha y hora de la Denuncia</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {
                siniestrosAuto.data 
                ? siniestrosAuto.data.map((siniestro, index) => {
                  return (
                    <RowTable
                      fecha={siniestro.fecha_siniestro}
                      hora={siniestro.hora_siniestro}
                      tipo_siniestro={"Auto"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_auto.nombre+" "+siniestro.clientes_personas_siniestro_auto.apellido : siniestro.clientes_empresas_siniestro_auto.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_auto.numero_poliza}
                      consecuencia={ siniestro.consecuencia}
                      fecha_denuncia={siniestro.createdAt}
                      key={siniestro + index}
                    />
                  );
                }) : <tr></tr>
              }
              {
                siniestrosHogar.data 
                ? siniestrosHogar.data.map((siniestro, index) => {
                  return (
                    <RowTable
                      fecha={siniestro.fecha_siniestro}
                      hora={siniestro.hora_siniestro}
                      tipo_siniestro={"Hogar"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_hogar.nombre+" "+siniestro.clientes_personas_siniestro_hogar.apellido : siniestro.clientes_empresas_siniestro_hogar.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_hogar.numero_poliza}
                      consecuencia={ 
                        siniestro.incendio_contenido_total === true 
                        ? siniestro.incendio_contenido_total : "vacio"
                      }
                      fecha_denuncia={siniestro.createdAt}
                      key={siniestro + index}
                    />
                  );
                }) : <tr></tr>
              }
            </tbody>  
          </table>
        </div>
    )
}

export default SiniestrosTodosList
