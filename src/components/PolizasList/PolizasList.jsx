import React from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable';
import imgAllianz from '../../assets/imgAllianz.png'
import imgATM from '../../assets/imgATM.png'
import imgFederación_Patronal from '../../assets/imgFederación_Patronal.png'
import imgHolando_Seguros from '../../assets/imgHolando_Seguros.png'
import imgMercantil_Andina from '../../assets/imgMercantil_Andina.png'
import imgVictoria_Seguros from '../../assets/imgVictoria_Seguros.png'
import imgEXPERTA from '../../assets/imgEXPERTA.svg'
import imgMapfre from '../../assets/imgMapfre.webp'

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
                                <strong>Aseguradora</strong>
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
                                        aseguradora={
                                            poliza.aseguradora_id === 1 
                                            ? <img style={{width: '80px'}} src={imgAllianz} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 2 
                                            ? <img style={{width: '80px'}} src={imgATM} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 3 
                                            ? <img style={{width: '150px'}} src={imgFederación_Patronal} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 4 
                                            ? <img style={{width: '80px'}} src={imgHolando_Seguros} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 5 
                                            ? <img style={{width: '80px'}} src={imgMapfre} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 6 
                                            ? <img style={{width: '80px'}} src={imgMercantil_Andina} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 7 
                                            ? <img style={{width: '80px'}} src={imgVictoria_Seguros} alt="imgCompania" /> 
                                            : poliza.aseguradora_id === 8 
                                            ? <img style={{width: '80px'}} src={imgEXPERTA} alt="imgCompania" /> 
                                            : " "
                                          }
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
