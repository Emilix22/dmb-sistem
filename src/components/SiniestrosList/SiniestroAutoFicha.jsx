import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './SiniestroFicha.css'
import imgAllianz from '../../assets/imgAllianz.png'
import imgATM from '../../assets/imgATM.png'
import imgFederación_Patronal from '../../assets/imgFederación_Patronal.png'
import imgHolando_Seguros from '../../assets/imgHolando_Seguros.png'
import imgMercantil_Andina from '../../assets/imgMercantil_Andina.png'
import imgVictoria_Seguros from '../../assets/imgVictoria_Seguros.png'
import imgEXPERTA from '../../assets/imgEXPERTA.svg'
import imgMapfre from '../../assets/imgMapfre.webp'
import Logo from '../../assets/dmbLogo.svg'

function SiniestroAutoFicha() {

    const [siniestro, setSiniestro] = useState();
    const [vehiculos_terceros, setVehiculos_terceros] = useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        const loadSiniestro = async () => {
          const response = await fetch("https://dmb-back.online:3000/api/siniestros_auto/id", {
            method: "POST",
            body: JSON.stringify({
              id: id,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const info = await response.json();
          setSiniestro(info);
          setVehiculos_terceros(JSON.parse(info.data.vehiculos_terceros_inv))
        };
        loadSiniestro()
      }, [siniestro]);

    //   {
    //     siniestro ? console.log(siniestro) : null
    //   }
    //console.log(vehiculos_terceros)

    

    return (
        <div>
            
            {
            siniestro ? 
            <div className='listado-tabla'>
                <div className='encabezado'>
                    <img className="logo_encabezado" width="200" src={Logo} />
                    <Link to={'/siniestros_todos_list'}><button className='btn-buscar'>Volver al Listado</button></Link>
                </div>
                {
                    siniestro.data.cliente_persona_id ?
                    <h2 className='titulo'>Siniestro Automotor N° {siniestro.data.id_siniestro} - Cliente Denunciante : {siniestro.data.clientes_personas_siniestro_auto.nombre+" "+siniestro.data.clientes_personas_siniestro_auto.apellido}</h2>
                    : <h2>Siniestro N° {siniestro.data.id_siniestro} - Cliente Denunciante : {siniestro.data.clientes_empresas_siniestro_auto.nombre_empresa}</h2>
                }
                <div className='inputs'>
                    <div className="form-group-1 form-group-3">
                        <label htmlFor="estado">Estado</label>
                        <input
                            type="text"
                            name="estado"
                            id="estado"
                            value={siniestro.data.estado}
                            disabled
                        />
                        <Link to={`/siniestro_auto/cambia_estado/${siniestro.data.id_siniestro}`}><button className='btn-buscar'>Cambiar Estado / Observaciones</button></Link>
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="fecha">Fecha del Siniestro</label>
                        <input
                            type="date"
                            name="fecha"
                            id="fecha"
                            value={siniestro.data.fecha_siniestro}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="hora">Hora del Siniestro</label>
                        <input
                            type="time"
                            name="hora"
                            id="hora"
                            value={siniestro.data.hora_siniestro}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-4">
                        <label htmlFor="poliza">Póliza N°</label>
                        <input
                            type="text"
                            name="poliza"
                            id="poliza"
                            value={siniestro.data.polizas_siniestro_auto.numero_poliza}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-4">
                        <label htmlFor="tipo">Ramo</label>
                        <input
                            type="text"
                            name="tipo"
                            id="tipo"
                            value="Automotor"
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-4">
                        <label htmlFor="polizaCobertura">Cobertura</label>
                        <input
                            type="text"
                            name="polizaCobertura"
                            id="polizaCobertura"
                            value={siniestro.data.polizas_siniestro_auto.cobertura}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-4">
                        <label htmlFor="compañia">Compañía</label>
                        {
                            siniestro.data.polizas_siniestro_auto.aseguradora_id === 1 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgAllianz} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 2 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgATM} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 3 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgFederación_Patronal} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 4 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgHolando_Seguros} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 5 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgMapfre} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 6 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgMercantil_Andina} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 7 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgVictoria_Seguros} alt="imgCompania" /> 
                            : siniestro.data.polizas_siniestro_auto.aseguradora_id === 8 
                            ? <img className='imgCompañias' style={{width: '100px'}} src={imgEXPERTA} alt="imgCompania" /> 
                            : <span>VER</span>
                        }
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="motivo">Motivo</label>
                        <input
                            type="text"
                            name="motivo"
                            id="motivo"
                            value={siniestro.data.motivo}
                            disabled
                        />
                    </div>
                    {
                        siniestro.data.motivo === "robo" ?
                        <Link className= "links_fotos" to={`https://dmb-back.online:3000/img/Siniestros_auto/${siniestro.data.denuncia_policial}`} target="_blank">
                            Ver Denuncia Policial
                        </Link>
                        : null
                    }

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="consecuencia">Consecuencia</label>
                        <input
                            type="text"
                            name="consecuencia"
                            id="consecuencia"
                            value={siniestro.data.consecuencia}
                            disabled
                        />
                    </div>
                    {
                        siniestro.data.cerradura === "si" ?
                        <div className='inputs' id='daños'>
                            <h4>Cerradura/s Dañada/s</h4>
                            {
                                siniestro.data.cerradura_baul ?
                                <span>Cerradura baúl</span>
                                : null
                            }
                            {
                                siniestro.data.cerradura_derecha ?
                                <span>Cerradura derecha</span>
                                : null
                            }
                            {
                                siniestro.data.cerradura_izquierda ?
                                <span>Cerradura izquierda</span>
                                : null
                            }
                        </div>
                        : null
                    }

                    {
                        siniestro.data.cristales === "si" ?
                        <div className='inputs' id='daños'>
                            <h4>Cristal/es Dañado/s</h4>
                            {
                                siniestro.data.cristales_luneta ?
                                <span>Luneta</span>
                                : null
                            }
                            {
                                siniestro.data.cristales_parabrisas ?
                                <span>Parabrisas</span>
                                : null
                            }
                            {
                                siniestro.data.cristales_del_derecha ?
                                <span>Delantero derecho</span>
                                : null
                            }
                            {
                                siniestro.data.cristales_del_izquierda ?
                                <span>Delantero izquierdo</span>
                                : null
                            }
                            {
                                siniestro.data.cristales_tras_derecha ?
                                <span>Trasero derecho</span>
                                : null
                            }
                            {
                                siniestro.data.cristales_tras_izquierda ?
                                <span>Trasero izquierdo</span>
                                : null
                            }
                        </div>
                        : null
                    }

                    {
                        siniestro.data.consecuencia === "robo de ruedas" ?
                        <div className='inputs' id='daños'>
                            <h4>Rueda/s Robada/s</h4>
                            {
                                siniestro.data.rueda_auxilio ?
                                <span>Auxilio</span>
                                : null
                            }
                            {
                                siniestro.data.rueda_del_derecha ?
                                <span>Delantera derecha</span>
                                : null
                            }
                            {
                                siniestro.data.rueda_del_izquierda ?
                                <span>Delantera izquierda</span>
                                : null
                            }
                            {
                                siniestro.data.rueda_tras_derecha ?
                                <span>Trsera derecha</span>
                                : null
                            }
                            {
                                siniestro.data.rueda_tras_izquierda ?
                                <span>Trasera izquierda</span>
                                : null
                            }
                            <Link className= "links_fotos" to={`https://dmb-back.online:3000/img/Siniestros_auto/${siniestro.data.img_rueda}`} target="_blank">
                                Ver Foto de Rueda
                            </Link>
                        </div>
                        : null
                    }
                    
                    <div className="form-group-1 form-group-2">
                        <label htmlFor="lugar">Lugar</label>
                        <input
                            type="text"
                            name="lugar"
                            id="lugar"
                            value={siniestro.data.lugar_calle + " "+ siniestro.data.lugar_altura +" "+ "("+siniestro.data.lugar_cp+")" +" "+siniestro.data.lugar_localidad+", "+siniestro.data.lugar_provincia}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="caracteristicas">Características</label>
                        <input
                            type="text"
                            name="caracteristicas"
                            id="caracteristicas"
                            value={siniestro.data.lugar_caracteristicas}
                            disabled
                        />
                    </div>

                    <div className="form-group-1">
                        <label htmlFor="descripcion_hechos">Descripción de los Hechos</label>
                        <textarea
                            cols="100"
                            name="descripcion_hechos"
                            id="descripcion_hechos"
                            value={siniestro.data.descripcion_hechos}
                            disabled
                        />
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="conducia_asegurado">Conducía el Asegurado</label>
                        <input
                            type="text"
                            name="conducia_asegurado"
                            id="conducia_asegurado"
                            value={siniestro.data.conducia_asegurado}
                            disabled
                        />
                    </div>
                    
                    {
                        siniestro.data.conducia_asegurado === "no" ?
                        <div className='inputs' id='inputs_conductor'>
                           <div className="form-group-1 form-group-2">
                                <label htmlFor="nombre_conductor">Nombre y Apellido del Conductor</label>
                                <input
                                    type="text"
                                    name="nombre_conductor"
                                    id="nombre_conductor"
                                    value={siniestro.data.cnc_nombre +" "+ siniestro.data.cnc_apellido}
                                    disabled
                                />
                            </div>

                            <div className="form-group-1 form-group-2">
                                <label htmlFor="dni_conductor">DNI del Conductor</label>
                                <input
                                    type="text"
                                    name="dni_conductor"
                                    id="dni_conductor"
                                    value={siniestro.data.cnc_dni}
                                    disabled
                                />
                            </div>

                            <div className="form-group-1 form-group-3">
                                <label htmlFor="telefono_conductor">Teléfono del Conductor</label>
                                <input
                                    type="text"
                                    name="telefono_conductor"
                                    id="telefono_conductor"
                                    value={siniestro.data.cnc_telefono}
                                    disabled
                                />
                            </div>

                            <div className="form-group-1 form-group-3">
                                <label htmlFor="nacimiento_conductor">Fecha de Nacimiento del Conductor</label>
                                <input
                                    type="date"
                                    name="nacimiento_conductor"
                                    id="nacimiento_conductor"
                                    value={siniestro.data.cnc_nacimiento}
                                    disabled
                                />
                            </div>

                            <div className="form-group-1 form-group-3">
                                <label htmlFor="nacionalidad_conductor">Nacionalidad del Conductor</label>
                                <input
                                    type="text"
                                    name="nacionalidad_conductor"
                                    id="nacionalidad_conductor"
                                    value={siniestro.data.cnc_nacionalidad}
                                    disabled
                                />
                            </div>

                            <div className="form-group-1 form-group-2">
                                <label htmlFor="domicilio_conductor">Domicilio del Conductor</label>
                                <input
                                    type="text"
                                    name="domicilio_conductor"
                                    id="domicilio_conductor"
                                    value={siniestro.data.cnc_calle + " "+ siniestro.data.cnc_altura +" "+ "("+siniestro.data.cnc_cp+")" +" "+siniestro.data.cnc_localidad+", "+siniestro.data.cnc_provincia}
                                    disabled
                                />
                            </div>   
                        </div>
                        : null
                    }
                    <div className='inputs' id='inputs_ldv'>                
                        <Link className= "links_fotos" to={`https://dmb-back.online:3000/img/Siniestros_auto/${siniestro.data.registro_frente}`} target="_blank">
                            Ver foto Registro (frente)
                        </Link>
                        <Link className= "links_fotos" to={`https://dmb-back.online:3000/img/Siniestros_auto/${siniestro.data.registro_dorso}`} target="_blank">
                            Ver foto Registro (dorso)
                        </Link>
                    </div>
                    
                    <div className="form-group-1 form-group-3">
                        <label htmlFor="lesionados_dentro_vehiculo">Lesionados dentro del Vehículo</label>
                        <input
                            type="text"
                            name="lesionados_dentro_vehiculo"
                            id="lesionados_dentro_vehiculo"
                            value={siniestro.data.lesionados_dentro_vehiculo}
                            disabled
                        />
                    </div>

                    {
                        siniestro.data.lesionados_dentro_vehiculo === "si" ?
                        <div className='inputs' id='inputs_conductor'>
                           <div className="form-group-1 form-group-2">
                                <label htmlFor="cantidad_ldv">Cantidad de Lesionados Dentro del Vehículo</label>
                                <input
                                    type="text"
                                    name="cantidad_ldv"
                                    id="cantidad_ldv"
                                    value={siniestro.data.ldv_cantidad}
                                    disabled
                                />
                            </div>
                            {
                                siniestro.data.ldv_cantidad === "1" ?
                                <div className='inputs' id='inputs_ldv'>
                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre1 +" "+ siniestro.data.ldv_apellido1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono1}
                                            disabled
                                        />
                                    </div>
                                    </div>
                                </div>
                    
                                : siniestro.data.ldv_cantidad === "2" ?
                                <div className='inputs' id='inputs_ldv'>
                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre1 +" "+ siniestro.data.ldv_apellido1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono1}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre2 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono2}
                                            disabled
                                        />
                                    </div>
                                    </div>
                                </div>

                                : siniestro.data.ldv_cantidad === "3" ?
                                <div className='inputs' id='inputs_ldv'>
                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre1 +" "+ siniestro.data.ldv_apellido1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono1}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre2 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono2}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre3 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni3}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono3}
                                            disabled
                                        />
                                    </div>
                                    </div>
                                </div>

                                : siniestro.data.ldv_cantidad === "4" ?
                                <div className='inputs' id='inputs_ldv'>
                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre1 +" "+ siniestro.data.ldv_apellido1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono1}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre2 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono2}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre3 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni3}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono3}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre4 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni4}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono4}
                                            disabled
                                        />
                                    </div>
                                    </div>
                                </div>

                                : siniestro.data.ldv_cantidad === "5" ?
                                <div className='inputs' id='inputs_ldv'>
                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre1 +" "+ siniestro.data.ldv_apellido1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni1}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 1</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono1}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre2 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 2</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono2}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre3 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni3}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 3</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono3}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre4 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni4}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 4</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono4}
                                            disabled
                                        />
                                    </div>
                                    </div>

                                    <div className='inputs' id='inputs_ldvCadaUno'>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="nombre_ldv">Nombre y Apellido del Lesionado N° 5</label>
                                        <input
                                            type="text"
                                            name="nombre_ldv"
                                            id="nombre_ldv"
                                            value={siniestro.data.ldv_nombre5 +" "+ siniestro.data.ldv_apellido2}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="dni_ldv">DNI del Lesionado N° 5</label>
                                        <input
                                            type="text"
                                            name="dni_ldv"
                                            id="dni_ldv"
                                            value={siniestro.data.ldv_dni5}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group-1 form-group-2">
                                        <label htmlFor="telefono_ldv">Teléfono del Lesionado N° 5</label>
                                        <input
                                            type="text"
                                            name="telefono_ldv"
                                            id="telefono_ldv"
                                            value={siniestro.data.ldv_telefono5}
                                            disabled
                                        />
                                    </div>
                                    </div>
                                </div>
                                : null
                            } 
                        </div>
                        : null
                    }
                    

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="vehiculos_terceros_involucrados">Vehículos de Terceros Involucrados</label>
                        <input
                            type="text"
                            name="vehiculos_terceros_involucrados"
                            id="vehiculos_terceros_involucrados"
                            value={siniestro.data.vehiculos_terceros_involucrados}
                            disabled
                        />
                    </div>
                    {
                        siniestro.data.vehiculos_terceros_involucrados === "si" ?
                        <div className='inputs' id='inputs_ldv'>
                            {
                                vehiculos_terceros.map((vehiculo, index) => {
                                    return <div className='inputs' id='inputs_ldvCadaUno'>
                                                <div className="form-group-1 form-group-2" key={vehiculo + index}>
                                                    <label htmlFor="telefono_ldv">Patente Vehiculo Involucrado {index +1}</label>
                                                    <input
                                                        type="text"
                                                        name="marca_vti"
                                                        id="marca_vti"
                                                        value={vehiculo.patente}
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group-1 form-group-2" key={vehiculo + index}>
                                                    <label htmlFor="telefono_ldv">Compañía Vehiculo Involucrado {index +1}</label>
                                                    <input
                                                        type="text"
                                                        name="marca_vti"
                                                        id="marca_vti"
                                                        value={vehiculo.aseguradora}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                })
                            }
                            
                        
                        </div>
                        : null
                    }
                </div>
            </div>
             : null
            }

        </div>
    )
}

export default SiniestroAutoFicha
