import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ClientePersonaFicha.css'

function ClientePersonaFicha() {

  const [cliente, setCliente] = useState();
  const [polizas, setPolizas] = useState();

  const {id} = useParams();

  useEffect(() => {
    const loadClient = async () => {
      const response = await fetch("https://dmb-back.onrender.com/api/clientes/id", {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const info = await response.json();
      setCliente(info);
    };
    loadClient()
  }, []);

  useEffect(() => {
    const loadPolizas = async () => {
      const response = await fetch("https://dmb-back.onrender.com/api/polizas/porCliente", {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const info = await response.json();
      setPolizas(info);
    };
    loadPolizas()
  }, []);
{
  polizas ? console.log(polizas) : null
}
  return (
    <div>
      {
        cliente && polizas ?
        <div className='listado-tabla'>
          <h2>{cliente.data.nombre ? cliente.data.nombre+" "+cliente.data.apellido : cliente.data.nombre_empresa}</h2>
          <div className='inputs'>
            <div className="form-group-1 form-group-3">
              <label htmlFor="dni">DNI</label>
              <input
                  type="text"
                  name="dni"
                  id="dni"
                  value={cliente.data.dni}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-3">
              <label htmlFor="email">Email</label>
              <input
                  type="text"
                  name="email"
                  id="email"
                  value={cliente.data.email}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-3">
              <label htmlFor="celular">Celular</label>
              <input
                  type="text"
                  name="celular"
                  id="celular"
                  value={cliente.data.celular}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-3">
              <label htmlFor="telefono_fijo">Teléfono Fijo</label>
              <input
                  type="text"
                  name="telefono_fijo"
                  id="telefono_fijo"
                  value={cliente.data.telefono_fijo}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-2">
              <label htmlFor="direccion">Dirección</label>
              <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={cliente.data.calle + " "+ cliente.data.altura +" "+ cliente.data.piso +" "+ cliente.data.departamento +" "+ "("+cliente.data.cp+")" +" "+cliente.data.localidad+", "+cliente.data.provincia}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-3">
              <label htmlFor="metodo_pago">Método de pago</label>
              <input
                  type="text"
                  name="metodo_pago"
                  id="metodo_pago"
                  value={cliente.data.metodos_pagos_cliente_persona.nombre_metodo_pago}
                  disabled
              />
            </div>
            <div className="form-group-1 form-group-3">
              <label htmlFor="vendedor">Vendedor</label>
              <input
                  type="text"
                  name="vendedor"
                  id="vendedor"
                  value={cliente.data.vendedores_cliente_persona.nombre+" "+cliente.data.vendedores_cliente_persona.apellido}
                  disabled
              />
            </div>
            <div className="form-group-1">
              <label htmlFor="polizas">Pólizas</label>
              {
                polizas.data.map((poliza, index) => {
                  if(poliza.tipos_polizas.nombre_tipo_poliza === "Auto") {
                    return <input
                      type="text"
                      name="polizas"
                      id="polizas"
                      value={'N°: '+poliza.numero_poliza+' - Tipo: '+poliza.tipos_polizas.nombre_tipo_poliza+' - Aseguradora: '+poliza.aseguradoras.nombre+' - Auto: '+poliza.autos.marca+' '+poliza.autos.modelo+' ('+poliza.autos.año+')'}
                      disabled
                      key={poliza + index}
                    />
                  } else if (poliza.tipos_polizas.nombre_tipo_poliza === "Moto") {
                    return <input
                      type="text"
                      name="polizas"
                      id="polizas"
                      value={'N°: '+poliza.numero_poliza+' - Tipo: '+poliza.tipos_polizas.nombre_tipo_poliza+' - Aseguradora: '+poliza.aseguradoras.nombre+' - Moto: '+poliza.motos.marca+' '+poliza.motos.modelo+' ('+poliza.motos.año+')'}
                      disabled
                      key={poliza + index}
                    />
                  } else if(poliza.tipos_polizas.nombre_tipo_poliza === "Hogar" || poliza.tipos_polizas.nombre_tipo_poliza === "Consorcio") {
                    return <input
                      type="text"
                      name="polizas"
                      id="polizas"
                      value={'N°: '+poliza.numero_poliza+' - Tipo: '+poliza.tipos_polizas.nombre_tipo_poliza+' - Aseguradora: '+poliza.aseguradoras.nombre+' - Ubicación Riesgo: '+poliza.ubicaciones_riesgos.calle + " "+ poliza.ubicaciones_riesgos.altura +" "+ poliza.ubicaciones_riesgos.piso +" "+ poliza.ubicaciones_riesgos.departamento +" "+ "("+poliza.ubicaciones_riesgos.cp+")" +" "+poliza.ubicaciones_riesgos.localidad+", "+poliza.ubicaciones_riesgos.provincia}
                      disabled
                      key={poliza + index}
                    />
                  } else if(poliza.tipos_polizas.nombre_tipo_poliza === "Accidentes Personales") {
                    return <input
                      type="text"
                      name="polizas"
                      id="polizas"
                      value={'N°: '+poliza.numero_poliza+' - Tipo: '+poliza.tipos_polizas.nombre_tipo_poliza+' - Aseguradora: '+poliza.aseguradoras.nombre}
                      disabled
                      key={poliza + index}
                    />
                  }
                  
                })
              }
            </div>    
          </div>
        </div>
        : null
      }
    </div>    
  )
}

export default ClientePersonaFicha
