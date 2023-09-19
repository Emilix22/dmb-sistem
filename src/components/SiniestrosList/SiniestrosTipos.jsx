import React from 'react'
import CarCrashIcon from '@mui/icons-material/CarCrash';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CottageIcon from '@mui/icons-material/Cottage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import './SiniestrosTipos.css'

function SiniestrosTipos() {
    return (
        <section className='section-home'>
            <h2>¿Que tipo de siniestro desea consultar?</h2>
            <div className='cards-siniestros-tipos'>
                <article>
                    <div className='imagen'>{<CarCrashIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Auto</h2>
                </article>
                <article>
                    <div className='imagen'>{<TwoWheelerIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Moto</h2>
                </article>
                <article>
                    <div className='imagen'>{<CottageIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Hogar</h2>
                </article>
                <article>
                    <div className='imagen'>{<LocalPoliceIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Robo</h2>
                </article>
                <article>
                    <div className='imagen'>{<LocalFireDepartmentIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Incendio</h2>
                </article>
                <article>
                    <div className='imagen'>{<StorefrontIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Comercio</h2>
                </article>
                <article>
                    <div className='imagen'>{<LocalHospitalIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Accidentes Personales</h2>
                </article>
                <article>
                    <div className='imagen'>{<ApartmentIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Consorcio</h2>
                </article>
                <article>
                    <div className='imagen'>{<LocalShippingIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Transporte</h2>
                </article>
                <article>
                    <div className='imagen'>{<CurrencyExchangeIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Cauciones</h2>
                </article>
                <article>
                    <div className='imagen'>{<PhoneIphoneIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Objetos Personales</h2>
                </article>
                <article>
                    <div className='imagen'>{<DirectionsBoatIcon style={{color: "#002a7c", backgroundColor: "dfe9f5", fontSize: '40px', borderRadius: '5px'}}/>}</div>
                    <h2>Embarcaciones</h2>
                </article>
            </div>
        </section>
    )
}

export default SiniestrosTipos
