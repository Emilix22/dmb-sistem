import { useEffect, useState } from 'react';
import './Chart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({clientesPersonas, clientesEmpresas}) {
    const [personasTarjeta, setPersonasTarjeta] = useState(0)
    const [personasEfectivo, setPersonasEfectivo] = useState(0)
    const [personasDebito, setPersonasDebito] = useState(0)
    const [personasTransferencia, setPersonasTransferencia] = useState(0)

    const [empresasTarjeta, setEmpresasTarjeta] = useState(0)
    const [empresasEfectivo, setEmpresasEfectivo] = useState(0)
    const [empresasDebito, setEmpresasDebito] = useState(0)
    const [empresasTransferencia, setEmpresasTransferencia] = useState(0)    

    useEffect(() => {
        let contadorP = 0;
        let contadorE = 0;

        clientesPersonas.data 
        ? clientesPersonas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_persona.nombre_metodo_pago === "Tarjeta de Crédito") {
                contadorP +=1
                setPersonasTarjeta(contadorP)
            }
        }) : null

        clientesEmpresas.data 
        ? clientesEmpresas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_empresa.nombre_metodo_pago === "Tarjeta de Crédito") {
                contadorE +=1
                setEmpresasTarjeta(contadorE)
            }
        }) : null


    }, [clientesPersonas])

    useEffect(() => {
        let contadorP = 0;
        let contadorE = 0;

        clientesPersonas.data 
        ? clientesPersonas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_persona.nombre_metodo_pago === "Efectivo") {
                contadorP +=1
                setPersonasEfectivo(contadorP)
            }
        }) : null

        clientesEmpresas.data 
        ? clientesEmpresas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_empresa.nombre_metodo_pago === "Efectivo") {
                contadorE +=1
                setEmpresasEfectivo(contadorE)
            }
        }) : null
    }, [clientesPersonas])

    useEffect(() => {
        let contadorP = 0;
        let contadorE = 0;

        clientesPersonas.data 
        ? clientesPersonas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_persona.nombre_metodo_pago === "Débito Automático") {
                contadorP +=1
                setPersonasDebito(contadorP)
            }
        }) : null

        clientesEmpresas.data 
        ? clientesEmpresas.data.map((cliente) => {
            if (cliente.metodos_pagos_cliente_empresa.nombre_metodo_pago === "Débito Automático") {
                contadorE +=1
                setEmpresasDebito(contadorE)
            }
        }) : null
    }, [clientesPersonas])
        
    
    const data = [
        {
          name: 'Efectivo',
          Empresas: empresasEfectivo,
          Personas: personasEfectivo,
        },
        {
          name: 'Débito Automático',
          Empresas: empresasDebito,
          Personas: personasDebito,
        },
        {
          name: 'Tarjeta de Crédito',
          Empresas: empresasTarjeta,
          Personas: personasTarjeta,
        },
        {
          name: 'Transferencia',
          Empresas: 3,
          Personas: 2,
        },
      ];

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text stroke='' x={x + width / 2} y={y + width / 2} fill="#ffff" textAnchor="middle" dy={-6}>{value}</text>;
      };

    return (
        <div className="chart">
            <div className="titleChart">Cantidad de Clientes por Método de Pago</div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Personas" fill="#00569d" label={renderCustomBarLabel} />
                    <Bar dataKey="Empresas" fill="#90b1db" label={renderCustomBarLabel}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
