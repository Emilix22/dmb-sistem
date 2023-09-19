import React from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable';

function PolizasList({ polizas }) {
    return (
                <div className="listado-tabla">
                    <h3>Listado de Pólizas</h3>
                    <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                    >
                        <thead>
                            <tr>
                                <td>
                                <strong>N° Póliza</strong>
                                </td>
                                <td>
                                <strong>Tipo</strong>
                                </td>
                                <td>
                                <strong>Cobertura</strong>
                                </td>
                                <td>
                                <strong>Vigencia Desde</strong>
                                </td>
                                <td>
                                <strong>Vigencia Hasta</strong>
                                </td>
                                <td>
                                <strong>Cliente</strong>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                polizas ? polizas.data.map((poliza, index) => {
                                    
                                    return <RowTable
                                        numero_poliza={poliza.numero_poliza}
                                        tipo={poliza.tipos_polizas.nombre_tipo_poliza}
                                        cobertura={poliza.cobertura}
                                        vigencia_desde={poliza.vigencia_desde}
                                        vigencia_hasta={poliza.vigencia_hasta}
                                        cliente={
                                        poliza.cliente_persona_id 
                                        ? poliza.clientes_personas_poliza.nombre + " " + poliza.clientes_personas_poliza.apellido + " (DNI " + poliza.clientes_personas_poliza.dni + ")" 
                                        : poliza.cliente_empresa_id 
                                        ? poliza.clientes_empresas_poliza.nombre_empresa + " (CUIT " + poliza.clientes_empresas_poliza.cuit 
                                        : ""
                                        }
                                        key={poliza + index}
                                    />
                                }) : "Cargando"
                            }
                        </tbody>  
                    </table>     
                </div>
    )
}

export default PolizasList
