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

function Dashboard({ polizas, clientes, polizasVencer, siniestrosAuto, siniestrosMoto, siniestrosHogar, siniestrosConsorcio, siniestrosOtro, clientesPersonas, clientesEmpresas }) {


    return (
        <div className='dashboard'>
            {/* <div className='btn-excel'>
            <button className='btn-pdf'>lalalalal</button>
            </div> */}
            <div className="widgets">
                    <Widget
                     title="CLIENTES"
                     link={<Link to={'/clientes_todos_list'}>Ver Listado de clientes</Link>}
                     isMoney="#"
                     counter={clientes}
                     icon= {<GroupIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                     icon2={<StoreIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget 
                     title="PÓLIZAS"
                     link={<Link to={'/polizas_todas_list'}>Ver todas las pólizas</Link>}
                     isMoney="#"
                     counter={polizas.meta.total}
                     icon={<DescriptionIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget 
                     title="SINIESTROS DENUNCIADOS"
                     link={<Link to={'/siniestros_todos_list'}>Ver todos los siniestros</Link>}
                     isMoney="#"
                     counter={siniestrosAuto.meta.total + siniestrosMoto.meta.total + siniestrosHogar.meta.total + siniestrosConsorcio.meta.total + siniestrosOtro.meta.total}
                     icon={<NoteAltIcon className="iconWidget" style={{color: "#002a7c", backgroundColor: "dfe9f5"}} />}
                      />
                    <Widget
                     title="PÓLIZAS A VENCER"
                     subtitle="(próximos 30 días)"
                     link={<Link to={"/polizas_a_vencer"}>Ver detalle (Próximos 30 días)</Link>}
                     isMoney="#"
                     counter={polizasVencer}
                     icon={<AssignmentLateIcon className="iconWidget" style={{color: "ff0000", backgroundColor: "dfe9f5"}} />}
                      />
                </div>
                <div className="charts">
                    <Featured polizas={polizas} />
                    <Chart clientesPersonas={clientesPersonas} clientesEmpresas={clientesEmpresas} />
                </div>
            
        </div>
    )
}

export default Dashboard
