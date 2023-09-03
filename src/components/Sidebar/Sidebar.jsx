import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
//import CreditCardIcon from '@mui/icons-material/CreditCard';
//import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import logo from '../../assets/dmbLogo.svg'


function Sidebar() {

    return (
        <div className="sidebar">
            <div className="top">
                <img className="logo" src={logo} />
            </div>
            <div className="center">
                <ul>
                    <p className="title">PRINCIPAL</p>

                    <Link to="/dashboard">
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">LISTADOS</p>

                    <Link to="/clientes_personas_list">
                        <li>
                                <GroupIcon className="icon" />
                                <span>Clientes Personas</span>
                        </li>
                    </Link>

                    <li>
                        <StoreIcon className="icon" />
                        <span>Clientes Empresas</span>
                    </li>

                    <li>
                        <DescriptionIcon className="icon" />
                        <span>Pólizas</span>
                    </li>

                    <Link to={"/siniestros_tipos"}>
                        <li>
                                <NoteAltIcon className="icon" />
                                <span>Siniestros Denunciados</span>   
                        </li>
                    </Link>

                    <p className="title">UTILIDADES</p>

                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Estadísticas</span>
                    </li>

                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notificaciones</span>
                    </li>

                    <p className="title">SERVICIOS</p>

                    <li>
                        <HealthAndSafetyIcon className="icon" />
                        <span>Salud del Sistema</span>
                    </li>

                    <li>
                        <AppRegistrationIcon className="icon" />
                        <span>Registros</span>
                    </li>

                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Ajustes</span>
                    </li>

                    <p className="title">USUARIO</p>

                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Perfil</span>
                    </li>

                    <li>
                        <MeetingRoomIcon className="icon" />
                        <span>Salir</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                {/* para poner algo abajo */}
            </div> 
        </div>
    )
}

export default Sidebar;