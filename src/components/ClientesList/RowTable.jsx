import React from 'react'
import {useNavigate} from 'react-router-dom'

function RowTable(props) {

    const history = useNavigate()

    const mostrarFicha = () => {
        history(`/cliente_persona/ficha/${props.id}`)
    }
    return (
        <tr className="rowTable" onClick={mostrarFicha}>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.dni}</td>
            <td>{props.email}</td>
            <td>{props.direccion}</td>
            <td>{props.telefonos}</td>
            <td>{props.metodoPago}</td>
        </tr>
    )
}

export default RowTable
