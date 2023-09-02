import React, { useEffect, useRef, useState } from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

function ClientesPersonaList() {

    const [clientesPersona, setClientesPersona] = useState();

    useEffect(() => {
        const loadClients = async () => {
            const response = await fetch("http://localhost:3000/api/clientes")

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
            <DownloadTableExcel
              filename="Listado Clientes Personas"
              sheet="Clientes Personas"
              currentTableRef={tablaClientesPersonas.current}
              >

              <button>Excel <SimCardDownloadIcon /></button>
            </DownloadTableExcel>
          </div>
          <div className="listado-tabla">
          <h3>Listado de Clientes Personas</h3>
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
            ref={tablaClientesPersonas}
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
            </tbody>  
          </table>
          </div>
        </div>
    )
}

export default ClientesPersonaList
