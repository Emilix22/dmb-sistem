import React from 'react'

function RowTable(props) {
    return (
       <tr className="rowTable">
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
