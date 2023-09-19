import React, { useEffect, useState } from "react";
import './Dashboard.css'
import Widget from "../Widgets/Widget";
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
//import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import { Link } from "react-router-dom";

function Dashboard({ polizas, clientesPersonas, polizasVencer, siniestrosAuto, siniestrosHogar }) {


    return (
        <div className='dashboard'>
            {/* <div className='btn-excel'>
            <button className='btn-pdf'>lalalalal</button>
            </div> */}
            <div className="widgets">
                    <Widget
                     title="CLIENTES"
                     link="Ver Listado de clientes"
                     isMoney="#"
                     counter={clientesPersonas.meta.total}
                     icon= {<GroupIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                     icon2={<StoreIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget 
                     title="PÓLIZAS"
                     link="Ver todas las pólizas"
                     isMoney="#"
                     counter={polizas.meta.total}
                     icon={<DescriptionIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget 
                     title="SINIESTROS DENUNCIADOS"
                     link={<Link to={'/siniestros_todos_list'}>Ver todos los siniestros</Link>}
                     isMoney="#"
                     counter={siniestrosAuto.meta.total + siniestrosHogar.meta.total}
                     icon={<NoteAltIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget
                     title="PÓLIZAS A VENCER"
                     link={<Link to={"/polizas_a_vencer"}>Ver detalle (Próximos 30 días)</Link>}
                     isMoney="#"
                     counter={polizasVencer}
                     icon={<AssignmentLateIcon className="iconWidget" style={{color: "ff0000", backgroundColor: "dfe9f5"}} />}
                      />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            
        </div>
    )
}

export default Dashboard
