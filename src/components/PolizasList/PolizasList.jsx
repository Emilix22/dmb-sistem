import React, { useRef, useState, useEffect } from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PrintIcon from '@mui/icons-material/Print';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useReactToPrint } from 'react-to-print';
import imgAllianz from '../../assets/imgAllianz.png'
import imgATM from '../../assets/imgATM.png'
import imgFederación_Patronal from '../../assets/imgFederación_Patronal.png'
import imgHolando_Seguros from '../../assets/imgHolando_Seguros.png'
import imgMercantil_Andina from '../../assets/imgMercantil_Andina.png'
import imgVictoria_Seguros from '../../assets/imgVictoria_Seguros.png'
import imgEXPERTA from '../../assets/imgEXPERTA.svg'
import imgMapfre from '../../assets/imgMapfre.webp'

function PolizasList() {

    const [polizas, setPolizas] = useState();
    const tablaPolizas = useRef(null);

    useEffect(() => {

        const loadPolizas = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/polizas")

            const info = await response.json();
            setPolizas(info);
          };
          loadPolizas()
    }, [])
    
    const handlePrint = useReactToPrint({
        content: () => tablaPolizas.current,
        documentTitle: 'Pólizas',
        // onAfterPrint: () => alert('Print success')
    })
    
    return (
        <div className='container'>
            <div className='btn-excel'>
                <button className='btn-buscar'>Buscar<PersonSearchIcon /></button>
                <DownloadTableExcel
                    filename="Pólizas"
                    sheet="Pólizas"
                    currentTableRef={tablaPolizas.current}
                    >
                    <button className='excel-button'>Excel <SimCardDownloadIcon /></button>
                </DownloadTableExcel>

                <button className='btn-pdf' onClick={handlePrint}><PrintIcon /> / PDF <SimCardDownloadIcon /></button>

            </div>
                
            <div className="listado-tabla" ref={tablaPolizas} style={{width: '98%'}}>
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
                                        ? <div><img style={{width: '80px'}} src={imgAllianz} alt="imgCompania" /><span className='nombre_aseguradora'>Allianz</span></div> 
                                        : poliza.aseguradora_id === 2 
                                        ? <div><img style={{width: '80px'}} src={imgATM} alt="imgCompania" /><span className='nombre_aseguradora'>ATM</span></div> 
                                        : poliza.aseguradora_id === 3 
                                        ? <div><img style={{width: '150px'}} src={imgFederación_Patronal} alt="imgCompania" /><span className='nombre_aseguradora'>Federación Patronal</span></div> 
                                        : poliza.aseguradora_id === 4 
                                        ? <div><img style={{width: '80px'}} src={imgHolando_Seguros} alt="imgCompania" /><span className='nombre_aseguradora'>Holando Seguros</span></div> 
                                        : poliza.aseguradora_id === 5 
                                        ? <div><img style={{width: '80px'}} src={imgMapfre} alt="imgCompania" /><span className='nombre_aseguradora'>Mapfre</span></div> 
                                        : poliza.aseguradora_id === 6 
                                        ? <div><img style={{width: '80px'}} src={imgMercantil_Andina} alt="imgCompania" /><span className='nombre_aseguradora'>Mercantil Andina</span></div> 
                                        : poliza.aseguradora_id === 7 
                                        ? <div><img style={{width: '80px'}} src={imgVictoria_Seguros} alt="imgCompania" /><span className='nombre_aseguradora'>Victoria Seguros</span></div> 
                                        : poliza.aseguradora_id === 8 
                                        ? <div><img style={{width: '80px'}} src={imgEXPERTA} alt="imgCompania" /><span className='nombre_aseguradora'>EXPERTA</span></div> 
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
            </div>    
    )
}

export default PolizasList
