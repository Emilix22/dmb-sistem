import React from 'react'

function RowTable(props) {
    return (
       <tr className="rowTable">
            <td>{props.numero_poliza}</td>
            <td>{props.tipo}</td>
            <td>{props.cobertura}</td>
            <td>{props.vigencia_desde}</td>
            <td>{props.vigencia_hasta}</td>
            <td>{props.cliente}</td>
        </tr>
    )
}

export default RowTable