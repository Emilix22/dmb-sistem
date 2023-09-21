import React from 'react'

function RowTable(props) {
    return (
       <tr className="rowTable">
            <td>{props.fecha}</td>
            <td>{props.hora}</td>
            <td>{props.tipo_siniestro}</td>
            <td>{props.cliente}</td>
            <td>{props.poliza}</td>
            <td>{props.aseguradora}</td>
            <td>{props.consecuencia}</td>
            <td>{props.fecha_denuncia}</td>
            <td>{props.observaciones}</td>
        </tr>
    )
}

export default RowTable
