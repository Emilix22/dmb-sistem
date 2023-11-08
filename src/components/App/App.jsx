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
import ClienteEmpresaFicha from "../ClientesList/ClienteEmpresaFicha";
import Login from "../Login/Login";
import PolizasList from "../PolizasList/PolizasList";
import ClientesTodosList from "../ClientesList/ClientesTodosList";
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import ClientesAdd from "../ClientesList/ClientesAdd";
import ReportAdd from "../ReportAdd/ReportAdd";
import AddMercantilAndina from "../ReportAdd/AddMercantilAndina";


function App() {

    const history = useNavigate()

    const [clientesPersonas, setClientesPersonas] = useState({meta: {total: 0}});
    const [clientesEmpresas, setClientesEmpresas] = useState({meta: {total: 0}});
    const [polizas, setPolizas] = useState({meta: {total: "Cargando..."}});
    const [polizasVencer, setPolizasVencer] = useState(0);
    const [siniestrosAuto, setSiniestrosAuto] = useState({meta: {total: "Cargando..."}});
    const [siniestrosMoto, setSiniestrosMoto] = useState({meta: {total: "Cargando..."}});
    const [siniestrosHogar, setSiniestrosHogar] = useState({meta: {total: "Cargando..."}});
    const [siniestrosConsorcio, setSiniestrosConsorcio] = useState({meta: {total: "Cargando..."}});
    const [siniestrosOtro, setSiniestrosOtro] = useState({meta: {total: "Cargando..."}});
    const [usuario, setUsuario] = useState(null)

    const userLogin = Cookie.get('userLogin');

    const {dni} = useParams();

    useEffect(() => {
    
        userLogin && setUsuario(userLogin)
    
        },[])

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

    useEffect(() => {

        const loadPolizas = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/polizas")

            const info = await response.json();
            setPolizas(info);
          };
          loadPolizas()
    }, [])

    useEffect(() => {

        const fechaHoy = new Date();
        const fechaHoyFormato = fechaHoy.toLocaleDateString()
        //console.log(fechaHoyFormato)
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
        
        
        let contador = 0;

        polizas.data 
        ? polizas.data.map((poli) => {
            //console.log(poli.vigencia_hasta)
            //console.log(año+"-"+mes+"-"+dia)
            if (poli.vigencia_hasta >= año+"-"+mes+"-"+dia && poli.vigencia_hasta <= añoDiez+"-"+mesDiez+"-"+diaDiez) {
                
                contador += 1;
                setPolizasVencer(contador)
            } 
        }) : ""
    }, [polizas])

    useEffect(() => {

        const loadSiniestrosAuto = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_auto")

            const info = await response.json();
            setSiniestrosAuto(info);
          };
          loadSiniestrosAuto()
    }, [])

    useEffect(() => {

        const loadSiniestrosMoto = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_moto")

            const info = await response.json();
            setSiniestrosMoto(info);
          };
          loadSiniestrosMoto()
    }, [])

    useEffect(() => {

        const loadSiniestrosHogar = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_hogar")

            const info = await response.json();
            setSiniestrosHogar(info);
          };
          loadSiniestrosHogar()
    }, [])

    useEffect(() => {

        const loadSiniestrosConsorcio = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_consorcio")

            const info = await response.json();
            setSiniestrosConsorcio(info);
          };
          loadSiniestrosConsorcio()
    }, [])

    useEffect(() => {

        const loadSiniestrosOtro = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_otro")

            const info = await response.json();
            setSiniestrosOtro(info);
          };
          loadSiniestrosOtro()
    }, [])

    return (
        <div className="home">
            <Sidebar usuario={usuario} setUsuario={setUsuario} />
            <div className="homeContainer">
                <Navbar usuario={usuario} />
    
                <Routes>
                    <Route path="/" element= {
                        usuario ? <Dashboard
                        polizas={polizas} 
                        clientes={clientesPersonas.meta.total + clientesEmpresas.meta.total} 
                        polizasVencer={polizasVencer}
                        siniestrosAuto={siniestrosAuto}
                        siniestrosMoto={siniestrosMoto}
                        siniestrosHogar={siniestrosHogar}
                        siniestrosConsorcio={siniestrosConsorcio} 
                        siniestrosOtro={siniestrosOtro}
                        clientesPersonas={clientesPersonas}
                        clientesEmpresas={clientesEmpresas}
                        /> : <Login setUsuario={setUsuario} />
                    } />
                      
                    <Route path="/dashboard" element={
                        usuario ? <Dashboard
                        polizas={polizas} 
                        clientes={clientesPersonas.meta.total + clientesEmpresas.meta.total} 
                        polizasVencer={polizasVencer}
                        siniestrosAuto={siniestrosAuto}
                        siniestrosMoto={siniestrosMoto}
                        siniestrosHogar={siniestrosHogar}
                        siniestrosConsorcio={siniestrosConsorcio} 
                        siniestrosOtro={siniestrosOtro}
                        clientesPersonas={clientesPersonas}
                        clientesEmpresas={clientesEmpresas}
                        /> : <Login setUsuario={setUsuario} />
                    } />
                
                    <Route path="/clientes_todos_list" element={
                        usuario ? <ClientesTodosList /> : <Login setUsuario={setUsuario} />
                    } />

                    <Route path="/clientes_personas_list" element={
                        usuario ? <ClientesPersonaList /> : <Login setUsuario={setUsuario} />
                    } />

                    <Route path="/clientes_personas_add" element={
                        usuario ? <ClientesAdd /> : <Login setUsuario={setUsuario} />
                    } />
                
                    <Route path="/polizas_a_vencer" element={
                        usuario ? <PolizasAvencer /> : <Login setUsuario={setUsuario} />
                    } /> 
                    
                    <Route path="/siniestros_todos_list" element={
                        usuario ? <SiniestrosTodosList
                        siniestrosAuto={siniestrosAuto}
                        siniestrosMoto={siniestrosMoto} 
                        siniestrosHogar={siniestrosHogar} 
                        siniestrosConsorcio={siniestrosConsorcio}  
                        siniestrosOtro={siniestrosOtro} 
                        /> : <Login setUsuario={setUsuario} />
                    } />

                    <Route path="/polizas_todas_list" element={
                        usuario ? <PolizasList /> : <Login setUsuario={setUsuario} />
                    } />
                        
                    <Route path="/siniestros_tipos" element={
                        usuario ? <SiniestrosTipos /> : <Login setUsuario={setUsuario} />
                    } />
                    
                    <Route path={"/cliente_persona/ficha/:id"} element={
                        usuario ? <ClientePersonaFicha />  : <Login setUsuario={setUsuario} />
                    } />

                    <Route path={"/cliente_empresa/ficha/:id"} element={
                        usuario ? <ClienteEmpresaFicha />  : <Login setUsuario={setUsuario} />
                    } />

                    <Route path={"/cargar_reporte"} element={
                        usuario ? <ReportAdd />  : <Login setUsuario={setUsuario} />
                    } />

                    <Route path={"/add_mercantil_andina"} element={
                        usuario ? <AddMercantilAndina />  : <Login setUsuario={setUsuario} />
                    } />

                </Routes>
            </div>
        </div>
    );
};

export default App;