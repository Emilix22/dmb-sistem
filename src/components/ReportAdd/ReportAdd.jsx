import React, { useRef, useState } from 'react'
import './ReportAdd.css'
import { Link } from "react-router-dom";
import imgAllianz from '../../assets/imgAllianz.png'
import imgATM from '../../assets/imgATM.png'
import imgFederación_Patronal from '../../assets/imgFederación_Patronal.png'
import imgHolando_Seguros from '../../assets/imgHolando_Seguros.png'
import imgMercantil_Andina from '../../assets/imgMercantil_Andina.png'
import imgVictoria_Seguros from '../../assets/imgVictoria_Seguros.png'
import imgEXPERTA from '../../assets/imgEXPERTA.svg'
import imgMapfre from '../../assets/imgMapfre.webp'

function ReportAdd() {

    
    return (
        <div className='reportAdd_container'>
            <h3>Seleccione la Compañía para Cargar el Reporte</h3>
            <div className='cards_add_report'>
                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgMercantil_Andina} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgAllianz} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgATM} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgFederación_Patronal} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgHolando_Seguros} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgVictoria_Seguros} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgEXPERTA} alt="imgCompania" />
                    </Link>   
                </article>

                <article>
                    <Link to= '/add_mercantil_andina'>
                        <img className='imagen' style={{width: '180px'}} src={imgMapfre} alt="imgCompania" />
                    </Link>   
                </article>
            </div>
        </div>
    )
}

export default ReportAdd
