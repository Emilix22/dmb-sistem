import React, { useRef, useState, useEffect } from 'react'
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
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PrintIcon from '@mui/icons-material/Print';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useReactToPrint } from 'react-to-print';

function PolizasAvencer() {

  const [polizas, setPolizas] = useState();
  const tablaPolizasVencer = useRef(null);

  useEffect(() => {

    const loadPolizas = async () => {
        const response = await fetch("https://dmb-back.onrender.com/api/polizas")

        const info = await response.json();
        setPolizas(info);
      };
      loadPolizas()
}, [])

  const handlePrint = useReactToPrint({
    content: () => tablaPolizasVencer.current,
    documentTitle: 'PólizasVencer',
    // onAfterPrint: () => alert('Print success')
  })

  

  return (
    <div className='container'>
      <div className='btn-excel'>
        <button className='btn-buscar'>Buscar<PersonSearchIcon /></button>
        <DownloadTableExcel
          filename="Pólizas a vencer (30 días)"
          sheet="Pólizas a vencer"
          currentTableRef={tablaPolizasVencer.current}
          >

          <button className='excel-button'>Excel <SimCardDownloadIcon /></button>
        </DownloadTableExcel>

        <button className='btn-pdf' onClick={handlePrint}><PrintIcon /> / PDF <SimCardDownloadIcon /></button>

      </div>
      <div className="listado-tabla" ref={tablaPolizasVencer} style={{width: '98%'}}>
        <h3>Listado de Pólizas a Vencer Dentro de los Próximos 30 Días</h3>
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
          >
          <thead >
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

              polizas 
              ? polizas.data.map((poliza, index) => {
        /******************************************************************************************************* */             
              const fechaHoy = new Date();
              const fechaHoyFormato = fechaHoy.toLocaleDateString()

              const fechaParaMenosDiez = new Date()
              let menosDiez = fechaParaMenosDiez.setDate(fechaParaMenosDiez.getDate()+30)
              const menosDiezFormato = new Date(menosDiez).toLocaleDateString()


              let año;
              if (fechaHoyFormato.length === 10) {
                  año = fechaHoyFormato.slice(6)
              } else if (fechaHoyFormato.length === 9) {
                  año = fechaHoyFormato.slice(5)
              } else {
                  año = fechaHoyFormato.slice(4)
              }
              //console.log(año)

                let mes;
                if (fechaHoyFormato.length === 10) {
                    mes = fechaHoyFormato.slice(3, -5)
                } else if (fechaHoyFormato.slice(1, -7) === "/") {
                    mes = fechaHoyFormato.slice(2, -5)
                } else if (fechaHoyFormato.slice(1, -6) === "/") {
                    mes = fechaHoyFormato.slice(2, -5)
                } else {
                    mes = fechaHoyFormato.slice(3, -5)
                }

                if (mes.length <= 1) {
                    mes = "0" + mes
                }

                //console.log(mes)

               
                let dia = fechaHoyFormato.slice(0, -8)
                if (dia.length <= 1) {
                    dia = "0" + dia
                }

                //console.log(dia)  

                let añoDiez;
                if (menosDiezFormato.length === 10) {
                    añoDiez = menosDiezFormato.slice(6)
                } else if (menosDiezFormato.length === 9) {
                    añoDiez = menosDiezFormato.slice(5)
                } else {
                    añoDiez = menosDiezFormato.slice(4)
                }
                //console.log(añoDiez)

                let mesDiez;
                if (menosDiezFormato.length === 10) {
                    mesDiez = menosDiezFormato.slice(3, -5)
                } else if (menosDiezFormato.slice(1, -7) === "/") {
                    mesDiez = menosDiezFormato.slice(2, -5)
                } else if (menosDiezFormato.slice(1, -6) === "/") {
                    mesDiez = menosDiezFormato.slice(2, -5)
                } else {
                    mesDiez = menosDiezFormato.slice(3, -5)
                }

                if (mesDiez.length <= 1) {
                    mesDiez = "0" + mesDiez
                }

                //console.log(mesDiez)

                let diaDiez = menosDiezFormato.slice(0, -8)
                  if (diaDiez.length <= 1) {
                  diaDiez = "0" + diaDiez
                }

                //console.log(diaDiez)   
        /********************************************************************************************************** */
                if (poliza.vigencia_hasta >= año+"-"+mes+"-"+dia && poliza.vigencia_hasta <= añoDiez+"-"+mesDiez+"-"+diaDiez) {
                  return (
                    <RowTable
                      numero_poliza={poliza.numero_poliza}
                      tipo={poliza.tipos_polizas.nombre_tipo_poliza}
                      cobertura={poliza.cobertura}
                      //aseguradora={'lalala'}
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
                  );
                }
                  
                }) : <tr> ⌛ Cargando...</tr>
              }
            </tbody>  
      </table>     
    </div>
  </div>
)}

export default PolizasAvencer
