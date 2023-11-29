import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function SiniestroAutoCambiaEstado() {

    const {id} = useParams();

    const [estado, setEstado] = useState();
    const [observaciones, setObservaciones] = useState();
    
    const history = useNavigate();

    const guardarCambios = () => {
        
        const editSiniestro = async () => {
            const response = await fetch("https://dmb-back.online:3000/api/siniestros_auto/editar", {
              method: "PUT",
              body: JSON.stringify({
                id: id,
                estado: estado,
                observaciones: observaciones,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const info = await response.json();
            console.log(info)
        };
        editSiniestro()
        history(`/siniestro_auto_ficha/${id}`)    
    }

    const cancelar = () => {
        
        history(`/siniestro_auto_ficha/${id}`)
    }
    
    return (
        <div className='container'>
            <div className='listado-tabla'>
                <h2 className='titulo'>Estado / Observaciones del Siniestro Automotor N° {id}</h2>
                <div className='inputs'>
                    <div className="form-group-1 form-group-3">
                        <label htmlFor="estado">Estado</label>
                        <select 
                        name="estado" 
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}>
                            <option value="">Seleccione...</option>
                            <option value="DENUNCIADO">DENUNCIADO</option>
                            <option value="EN COMPAÑIA">EN COMPAÑÍA</option>
                            <option value="EN PROCESO">EN PROCESO</option>
                            <option value="FINALIZADO">FINALIZADO</option>
                        </select>
                    </div>

                    <div className="form-group-1 form-group-3">
                        <label htmlFor="observaciones">Observaciones</label>
                        <textarea 
                        name="observaciones" 
                        id="observaciones" 
                        cols="50" 
                        rows="10"
                        value={observaciones}
                        onChange={(e) => setObservaciones(e.target.value.toUpperCase())}
                        /> 
                    </div>    
                </div>
                <div className='btn-excel'>
                    <button className='btn-buscar' onClick={guardarCambios}>Guardar Cambios</button>
                    <button className='btn-pdf' onClick={cancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default SiniestroAutoCambiaEstado
