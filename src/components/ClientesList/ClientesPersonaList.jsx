import React, { useEffect, useRef, useState } from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PrintIcon from '@mui/icons-material/Print';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useReactToPrint } from 'react-to-print';

function ClientesPersonaList() {

    const [clientesPersona, setClientesPersona] = useState();
    const handlePrint = useReactToPrint({
      content: () => tablaClientesPersonas.current,
      documentTitle: 'ClientesPersonas',
      // onAfterPrint: () => alert('Print success')
    })

    useEffect(() => {
        const loadClients = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/clientes")

            const info = await response.json();
            setClientesPersona(info.data);
            // console.log(info)
          };
          loadClients()
    }, [])

    const tablaClientesPersonas = useRef(null);
    return (
        <div className='container'>
          <div className='btn-excel'>
          <button className='btn-crear'>Agregar Cliente<PersonAddIcon /></button>
          <button className='btn-buscar'>Buscar Cliente<PersonSearchIcon /></button>
            <DownloadTableExcel
              filename="Listado Clientes Personas"
              sheet="Clientes Personas"
              currentTableRef={tablaClientesPersonas.current}
              >

              <button className='excel-button'>Excel <SimCardDownloadIcon /></button>
            </DownloadTableExcel>

            <button className='btn-pdf' onClick={handlePrint}><PrintIcon /> / PDF <SimCardDownloadIcon /></button>

          </div>
          <div className="listado-tabla" ref={tablaClientesPersonas} style={{width: '98%'}}>
          <h3>Listado de Clientes Personas</h3>
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
            >
            <thead>
              <tr>
                <td>
                  <strong>Nombre</strong>
                </td>
                <td>
                  <strong>Apellido</strong>
                </td>
                <td>
                  <strong>DNI</strong>
                </td>
                <td>
                  <strong>Email</strong>
                </td>
                <td>
                  <strong>Dirección</strong>
                </td>
                <td>
                  <strong>Teléfonos</strong>
                </td>
                <td>
                  <strong>Método de Pago</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {

                clientesPersona 
                ? clientesPersona.map((cliente, index) => {
                  return (
                    <RowTable
                      id={cliente.id_cliente_persona}
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
                }) : <tr> ⌛ Cargando...</tr>
              }
            </tbody>  
          </table>
          </div>
        </div>
    )
}

export default ClientesPersonaList
