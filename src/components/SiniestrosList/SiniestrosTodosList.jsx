import React, { useRef, useState, useEffect } from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PrintIcon from '@mui/icons-material/Print';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useReactToPrint } from 'react-to-print';

function SiniestrosTodosList() {
  
  const [siniestrosAuto, setSiniestrosAuto] = useState({data:""});
  const [siniestrosMoto, setSiniestrosMoto] = useState({data:""});
  const [siniestrosHogar, setSiniestrosHogar] = useState({data:""});
  const [siniestrosConsorcio, setSiniestrosConsorcio] = useState({data:""});
  const [siniestrosOtro, setSiniestrosOtro] = useState({data:""});

  const tablaSiniestrosTodos = useRef(null);

  useEffect(() => {

      const loadSiniestrosAuto = async () => {
          const response = await fetch("https://dmb-back.onrender.com/api/siniestros_auto")

          const info = await response.json();
          setSiniestrosAuto(info);
        };
        loadSiniestrosAuto()
  }, [])

  useEffect(() => {

      const loadSiniestrosMoto = async () => {
          const response = await fetch("https://dmb-back.onrender.com/api/siniestros_moto")

          const info = await response.json();
          setSiniestrosMoto(info);
        };
        loadSiniestrosMoto()
  }, [])

  useEffect(() => {

      const loadSiniestrosHogar = async () => {
          const response = await fetch("https://dmb-back.onrender.com/api/siniestros_hogar")

          const info = await response.json();
          setSiniestrosHogar(info);
        };
        loadSiniestrosHogar()
  }, [])

  useEffect(() => {

      const loadSiniestrosConsorcio = async () => {
          const response = await fetch("https://dmb-back.onrender.com/api/siniestros_consorcio")

          const info = await response.json();
          setSiniestrosConsorcio(info);
        };
        loadSiniestrosConsorcio()
  }, [])

  useEffect(() => {

      const loadSiniestrosOtro = async () => {
          const response = await fetch("https://dmb-back.onrender.com/api/siniestros_otro")

          const info = await response.json();
          setSiniestrosOtro(info);
        };
        loadSiniestrosOtro()
  }, [])

  const handlePrint = useReactToPrint({
    content: () => tablaSiniestrosTodos.current,
    documentTitle: 'SiniestrosTodos',
    //pageStyle: 'print'
    // onAfterPrint: () => alert('Print success')
  })


    return (
      <div className='container'>
        <div className='btn-excel'>
          <button className='btn-buscar'>Buscar<PersonSearchIcon /></button>
          <DownloadTableExcel
            filename="Siniestros todos"
            sheet="Siniestros todos"
            currentTableRef={tablaSiniestrosTodos.current}
            >

            <button className='excel-button'>Excel <SimCardDownloadIcon /></button>
          </DownloadTableExcel>

          <button className='btn-pdf' onClick={handlePrint}><PrintIcon /> / PDF <SimCardDownloadIcon /></button>

        </div>
        <div className="listado-tabla" ref={tablaSiniestrosTodos} style={{width: '98%'}}>
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
                  <strong>Fecha del Siniestro</strong>
                </td>
                <td>
                  <strong>Ramo</strong>
                </td>
                <td>
                  <strong>Cliente</strong>
                </td>
                <td>
                  <strong>Póliza N°</strong>
                </td>
                <td>
                  <strong>Compañía</strong>
                </td>
                <td>
                  <strong>Consecuencia</strong>
                </td>
                <td>
                  <strong>Fecha de la Denuncia</strong>
                </td>
                <td>
                  <strong>Estado</strong>
                </td>
                <td>
                  <strong>Observaciones</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {
                siniestrosAuto.data 
                ? siniestrosAuto.data.map((siniestro, index) => {
                  return (
                    <RowTable
                      siniestro={siniestro}
                      fecha={siniestro.fecha_siniestro}
                      tipo_siniestro={"Automotor"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_auto.nombre+" "+siniestro.clientes_personas_siniestro_auto.apellido : siniestro.clientes_empresas_siniestro_auto.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_auto.numero_poliza}
                      aseguradora={
                        siniestro.polizas_siniestro_auto.aseguradora_id === 1 
                        ? "Allianz" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 2 
                        ? "ATM" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 3 
                        ? "Federación Patronal" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 4 
                        ? "Holando" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 5 
                        ? "Mapfre" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 6 
                        ? "Mercantil Andina" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 7 
                        ? "Victoria" 
                        : siniestro.polizas_siniestro_auto.aseguradora_id === 8 
                        ? "Experta" 
                        : " "
                      }
                      consecuencia={ siniestro.consecuencia}
                      fecha_denuncia={siniestro.createdAt.slice(0,10)}
                      estado={siniestro.estado}
                      observaciones={siniestro.observaciones}
                      key={siniestro + index}
                    />
                  );
                }) : <tr> ⌛Cargando...</tr>
              }

              {
                siniestrosHogar.data 
                ? siniestrosHogar.data.map((siniestro, index) => {
                  const consecuencias = [];
                  siniestro.incendio_contenido === true && consecuencias.push('- incendio contenido ') 
                  siniestro.incendio_edificio === true && consecuencias.push('- incendio edificio ') 
                  siniestro.cristales_rotura_accidental === true && consecuencias.push('- cristales rotura ') 
                  siniestro.cristales_rajadura_accidental === true && consecuencias.push('- cristales rajadura ') 
                  siniestro.robo_mobiliario === true && consecuencias.push('- robo mobiliario ') 
                  siniestro.notebook_rotura === true && consecuencias.push('- notebbok rotura ') 
                  siniestro.notebook_robo === true && consecuencias.push('- notebbok robo ') 
                  siniestro.electrodomesticos_rotura === true && consecuencias.push('- electrodomésticos rotura ') 
                  siniestro.electrodomesticos_robo === true && consecuencias.push('- electrodomésticos robo ') 
                  siniestro.bicicletas_robo === true && consecuencias.push('- bicicleta robo ') 
                  siniestro.por_agua_daños_al_mobiliario === true && consecuencias.push('- por agua daños al mobiliario ') 
                  siniestro.otro_tipo_de_bienes === true && consecuencias.push('- otro tipo de bienes ') 
              
                  return (
                    <RowTable
                      siniestro={siniestro}
                      fecha={siniestro.fecha_siniestro}
                      tipo_siniestro={"Hogar"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_hogar.nombre+" "+siniestro.clientes_personas_siniestro_hogar.apellido : siniestro.clientes_empresas_siniestro_hogar.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_hogar.numero_poliza}
                      aseguradora={
                        siniestro.polizas_siniestro_hogar.aseguradora_id === 1 
                        ? "Allianz" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 2 
                        ? "ATM" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 3 
                        ? "Federación Patronal" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 4 
                        ? "Holando" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 5 
                        ? "Mapfre" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 6 
                        ? "Mercantil Andina" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 7 
                        ? "Victoria" 
                        : siniestro.polizas_siniestro_hogar.aseguradora_id === 8 
                        ? "Experta" 
                        : " "
                      }
                      consecuencia={consecuencias}
                      fecha_denuncia={siniestro.createdAt.slice(0,10)}
                      estado={siniestro.estado}
                      observaciones={siniestro.observaciones}
                      key={siniestro + index}
                    />
                  );
                }) : <tr>⌛Cargando...</tr>
              }

              {
                siniestrosConsorcio.data 
                ? siniestrosConsorcio.data.map((siniestro, index) => {
                  const consecuencias = [];
                  siniestro.incendio_contenido === true && consecuencias.push('- incendio contenido ') 
                  siniestro.incendio_edificio === true && consecuencias.push('- incendio edificio ') 
                  siniestro.cristales_rotura_accidental === true && consecuencias.push('- cristales rotura ') 
                  siniestro.cristales_rajadura_accidental === true && consecuencias.push('- cristales rajadura ') 
                  siniestro.robo_mobiliario === true && consecuencias.push('- robo mobiliario ') 
                  siniestro.por_agua_daños_al_mobiliario === true && consecuencias.push('- por agua daños al mobiliario ') 
                  siniestro.otro_tipo_de_bienes === true && consecuencias.push('- otro tipo de bienes ') 
              
                  return (
                    <RowTable
                      siniestro={siniestro}
                      fecha={siniestro.fecha_siniestro}
                      tipo_siniestro={"Consorcio"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_consorcio.nombre+" "+siniestro.clientes_personas_siniestro_consorcio.apellido : siniestro.clientes_empresas_siniestro_consorcio.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_consorcio.numero_poliza}
                      aseguradora={
                        siniestro.polizas_siniestro_consorcio.aseguradora_id === 1 
                        ? "Allianz" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 2 
                        ? "ATM" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 3 
                        ? "Federación Patronal" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 4 
                        ? "Holando" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 5 
                        ? "Mapfre" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 6 
                        ? "Mercantil Andina" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 7 
                        ? "Victoria" 
                        : siniestro.polizas_siniestro_consorcio.aseguradora_id === 8 
                        ? "Experta" 
                        : " "
                      }
                      consecuencia={consecuencias}
                      fecha_denuncia={siniestro.createdAt.slice(0,10)}
                      estado={siniestro.estado}
                      observaciones={siniestro.observaciones}
                      key={siniestro + index}
                    />
                  );
                }) : <tr>⌛Cargando...</tr>
              }

              {
                siniestrosMoto.data ? siniestrosMoto.data.map((siniestro, index) => {
                  return (
                    <RowTable
                      siniestro={siniestro}
                      fecha={siniestro.fecha_siniestro}
                      tipo_siniestro={"Moto"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_moto.nombre+" "+siniestro.clientes_personas_siniestro_moto.apellido : siniestro.clientes_empresas_siniestro_moto.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_moto.numero_poliza}
                      aseguradora={
                        siniestro.polizas_siniestro_moto.aseguradora_id === 1 
                        ? "Allianz" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 2 
                        ? "ATM" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 3 
                        ? "Federación Patronal" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 4 
                        ? "Holando" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 5 
                        ? "Mapfre" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 6 
                        ? "Mercantil Andina" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 7 
                        ? "Victoria" 
                        : siniestro.polizas_siniestro_moto.aseguradora_id === 8 
                        ? "Experta" 
                        : " "
                      }
                      consecuencia={ siniestro.consecuencia}
                      fecha_denuncia={siniestro.createdAt.slice(0,10)}
                      hora={siniestro.estado}
                      observaciones={siniestro.observaciones}
                      key={siniestro + index}
                    />
                  );
                }) : <tr> ⌛Cargando...</tr>
              }

              {
                siniestrosOtro.data 
                ? siniestrosOtro.data.map((siniestro, index) => {
                  return (
                    <RowTable
                      siniestro={siniestro}
                      fecha={siniestro.fecha_siniestro}
                      tipo_siniestro={"Otro"}
                      cliente={siniestro.cliente_persona_id ? siniestro.clientes_personas_siniestro_otro.nombre+" "+siniestro.clientes_personas_siniestro_otro.apellido : siniestro.clientes_empresas_siniestro_otro.nombre_empresa}
                      poliza={siniestro.polizas_siniestro_otro.numero_poliza}
                      aseguradora={
                        siniestro.polizas_siniestro_otro.aseguradora_id === 1 
                        ? "Allianz" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 2 
                        ? "ATM" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 3 
                        ? "Federación Patronal" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 4 
                        ? "Holando" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 5 
                        ? "Mapfre" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 6 
                        ? "Mercantil Andina" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 7 
                        ? "Victoria" 
                        : siniestro.polizas_siniestro_otro.aseguradora_id === 8 
                        ? "Experta" 
                        : " "
                      }
                      //consecuencia={ siniestro.consecuencia}
                      fecha_denuncia={siniestro.createdAt.slice(0,10)}
                      estado={siniestro.estado}
                      observaciones={siniestro.observaciones}
                      key={siniestro + index}
                    />
                  );
                }) : <tr> ⌛Cargando...</tr>
              }
            </tbody>  
          </table>
        </div>
      </div>
    )
}

export default SiniestrosTodosList
