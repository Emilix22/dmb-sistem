import React, { useEffect, useRef, useState } from 'react'
import '../TablasCSS/Tabla.css'
import RowTable from './RowTable'
import RowTableEmpresa from './RowTableEmpresa'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PrintIcon from '@mui/icons-material/Print';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useReactToPrint } from 'react-to-print';

function ClientesTodosList() {

    const [clientesPersonas, setClientesPersonas] = useState({meta: {total: 0}});
    const [clientesEmpresas, setClientesEmpresas] = useState({meta: {total: 0}});

    useEffect(() => {

        const loadClients = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/clientes")

            const info = await response.json();
            setClientesPersonas(info);
          };
          loadClients()
    }, []);

    useEffect(() => {

        const loadClientsEmpresas = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/clientes/empresas")

            const info = await response.json();
            setClientesEmpresas(info);
          };
          loadClientsEmpresas()
    }, []);

    const handlePrint = useReactToPrint({
      content: () => tablaClientes.current,
      documentTitle: 'Clientes',
      // onAfterPrint: () => alert('Print success')
    })
  
    const tablaClientes = useRef(null);

    return (
        <div className='container'>
               <div className='btn-excel'>
        <button className='btn-buscar'>Buscar<PersonSearchIcon /></button>
        <DownloadTableExcel
          filename="Clientes"
          sheet="Clientes"
          currentTableRef={tablaClientes.current}
          >

          <button className='excel-button'>Excel <SimCardDownloadIcon /></button>
        </DownloadTableExcel>

        <button className='btn-pdf' onClick={handlePrint}><PrintIcon /> / PDF <SimCardDownloadIcon /></button>

      </div>
           <div className="listado-tabla" ref={tablaClientes} style={{width: '98%'}}>
          <h3>Listado de todos los Clientes (Personas: {clientesPersonas.meta.total} Empresas: {clientesEmpresas.meta.total})</h3>
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
                  <strong>DNI / CUIT</strong>
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
                clientesPersonas.data ? clientesPersonas.data.map((cliente, index) => {
                  return (
                    <RowTable
                      id={cliente.id_cliente_persona}
                      nombre={cliente.nombre+" "+cliente.apellido}
                      dni={cliente.dni}
                      email={cliente.email}
                      direccion={cliente.calle + " " + cliente.altura + " " + cliente.piso + " " + cliente.departamento + ", " + cliente.localidad + "("+cliente.cp+")"}
                      telefonos={ cliente.telefono_fijo ? cliente.celular + " / " + cliente.telefono_fijo : cliente.celular}
                      metodoPago={cliente.metodos_pagos_cliente_persona.nombre_metodo_pago}
                      key={cliente + index}
                    />
                  );
                }) : <tr> ⌛ Cargando Personas...</tr>
              }
              {
                clientesEmpresas.data ? clientesEmpresas.data.map((cliente, index) => {
                  return (
                    <RowTableEmpresa
                      id={cliente.id_cliente_empresa}
                      nombre={cliente.nombre_empresa}
                      dni={cliente.cuit}
                      email={cliente.email}
                      direccion={cliente.calle + " " + cliente.altura + " " + cliente.piso + " " + cliente.departamento + ", " + cliente.localidad + "("+cliente.cp+")"}
                      telefonos={ cliente.telefono_fijo ? cliente.celular + " / " + cliente.telefono_fijo : cliente.celular}
                      metodoPago={cliente.metodos_pagos_cliente_empresa.nombre_metodo_pago}
                      key={cliente + index}
                    />
                  );
                }) : <tr> ⌛ Cargando Empresas...</tr> 
              }
            </tbody>  
          </table>
          </div>
        </div>
    )
}

export default ClientesTodosList
