import React, { useEffect, useState } from "react";
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Dashboard from '../Dashboard/Dashboard'
import ClientesPersonaList from "../ClientesList/ClientesPersonaList";
import PolizasAvencer from "../PolizasList/PolizasAvencer";
import SiniestrosTodosList from "../SiniestrosList/SiniestrosTodosList";
import SiniestrosTipos from "../SiniestrosList/SiniestrosTipos";
import ClientePersonaFicha from "../ClientesList/ClientePersonaFicha";
import Login from "../Login/Login";
import PolizasList from "../PolizasList/PolizasList";
import ClientesTodosList from "../ClientesList/ClientesTodosList";


function App() {

    const [clientesPersonas, setClientesPersonas] = useState({meta: {total: 0}});
    const [clientesEmpresas, setClientesEmpresas] = useState({meta: {total: 0}});
    const [polizas, setPolizas] = useState({meta: {total: "Cargando..."}});
    const [polizasVencer, setPolizasVencer] = useState(0);
    const [siniestrosAuto, setSiniestrosAuto] = useState({meta: {total: "Cargando..."}});
    const [siniestrosHogar, setSiniestrosHogar] = useState({meta: {total: "Cargando..."}});

    const {dni} = useParams();

    useEffect(() => {

        const loadClients = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/clientes")

            const info = await response.json();
            setClientesPersonas(info);
          };
          loadClients()
    }, []);

    useEffect(() => {

        const loadClientsEmpresas = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/clientes/empresas")

            const info = await response.json();
            setClientesEmpresas(info);
          };
          loadClientsEmpresas()
    }, []);

    useEffect(() => {

        const loadPolizas = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/polizas")

            const info = await response.json();
            setPolizas(info);
          };
          loadPolizas()
    }, [])

    useEffect(() => {

        const fechaHoy = new Date();
        const fechaHoyFormato = fechaHoy.toLocaleDateString()

        const fechaParaMenosDiez = new Date()
        let menosDiez = fechaParaMenosDiez.setDate(fechaParaMenosDiez.getDate()+10)
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

        let dia = fechaHoyFormato.slice(0, -7)
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

    let diaDiez = menosDiezFormato.slice(0, -7)
    if (diaDiez.length <= 1) {
        diaDiez = "0" + diaDiez
    }

    //console.log(diaDiez)
        
        
        let contador = 0;

        polizas.data 
        ? polizas.data.map((poli) => {
            if (poli.vigencia_hasta >= año+"-"+mes+"-"+dia && poli.vigencia_hasta <= añoDiez+"-"+mesDiez+"-"+diaDiez) {
                //console.log(poli.vigencia_hasta)
                contador += 1;
                setPolizasVencer(contador)
            } 
        }) : ""
    }, [polizas])

    useEffect(() => {

        const loadSiniestrosAuto = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/siniestros_auto")

            const info = await response.json();
            setSiniestrosAuto(info);
          };
          loadSiniestrosAuto()
    }, [])

    useEffect(() => {

        const loadSiniestrosHogar = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/siniestros_hogar")

            const info = await response.json();
            setSiniestrosHogar(info);
          };
          loadSiniestrosHogar()
    }, [])

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
    
                <Routes>
                    <Route path="/" element= {<Login />} />
                    
                    <Route path="/dashboard" element={
                        <Dashboard
                         polizas={polizas} 
                         clientes={clientesPersonas.meta.total + clientesEmpresas.meta.total} 
                         polizasVencer={polizasVencer}
                         siniestrosAuto={siniestrosAuto}
                         siniestrosHogar={siniestrosHogar}
                         clientesPersonas={clientesPersonas}
                         clientesEmpresas={clientesEmpresas}
                        />
                    } />

                    <Route path="/clientes_todos_list" element={
                        <ClientesTodosList />
                    } />

                    <Route path="/clientes_personas_list" element={
                        <ClientesPersonaList />
                    } />

                    <Route path="/polizas_a_vencer" element={
                        <PolizasAvencer polizas={polizas} />
                    } />

                    <Route path="/siniestros_todos_list" element={
                        <SiniestrosTodosList
                         siniestrosAuto={siniestrosAuto} 
                         siniestrosHogar={siniestrosHogar} 
                        />
                    } />

                    <Route path="/polizas_todas_list" element={
                        <PolizasList polizas={polizas} />
                    } />

                    <Route path="/siniestros_tipos" element={
                        <SiniestrosTipos />
                    } />
                    <Route path={"/cliente_persona/ficha/:id"} element={
                        <ClientePersonaFicha />
                    } />

                </Routes>
            </div>
        </div>
    );
};

export default App;