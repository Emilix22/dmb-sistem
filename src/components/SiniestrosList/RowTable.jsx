import React from 'react'
import {useNavigate} from 'react-router-dom'

function RowTable(props) {

    const history = useNavigate()

    const verFichaSiniestro = () => {
        
        //console.log(props.siniestro)
        if (props.siniestro.polizas_siniestro_auto) {
            //console.log("de auto")
            history(`/siniestro_auto_ficha/${props.siniestro.id_siniestro}`)
        }
        if (props.siniestro.polizas_siniestro_hogar) {
            //console.log("de hogar")
            history(`/siniestro_hogar_ficha/${props.siniestro.id_siniestro_hogar}`)
        }
        if (props.siniestro.polizas_siniestro_consorcio) {
            console.log("de consrcio")
        }
        if (props.siniestro.polizas_siniestro_moto) {
            console.log("de moto")
        }
        if (props.siniestro.polizas_siniestro_otro) {
            console.log("de otro")
        }

    }


    return (
       <tr className="rowTable" onClick={verFichaSiniestro}>
            <td>{props.fecha}</td>
            <td>{props.tipo_siniestro}</td>
            <td>{props.cliente}</td>
            <td>{props.poliza}</td>
            <td>{props.aseguradora}</td>
            <td>{props.consecuencia}</td>
            <td>{props.fecha_denuncia}</td>
            <td>{props.estado}</td>
            <td>{props.observaciones}</td>
        </tr>
    )
}

export default RowTable
