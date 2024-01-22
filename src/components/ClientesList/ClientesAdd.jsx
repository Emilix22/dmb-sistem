import React, { useEffect, useState } from 'react'
import './ClientePersonaFicha.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function ClientesAdd() {
    const [metodoPago, setMetodoPago] = useState()

    useEffect(() => {
        const loadMetodoPago = async () => {
            const response = await fetch("https://dmb-back.onrender.com/api/metodosPago")

            const info = await response.json();
            setMetodoPago(info);
          };
          loadMetodoPago()
    }, []);

    
    return (
        <div className='clienteAdd_container'>
            <h3>Datos del Cliente a Agregar</h3>
            <form action="">
            <div className="form-group-1 form-group-2">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="dni">DNI</label>
                    <input
                        type="text"
                        name="dni"
                        id="dni"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="celular">Celular</label>
                    <input
                        type="tel"
                        name="celular"
                        id="celular"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="telefono">Teléfono Fijo</label>
                    <input
                        type="tel"
                        name="telefono"
                        id="telefono"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="calle">Calle</label>
                    <input
                        type="text"
                        name="calle"
                        id="calle"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="altura">Altura</label>
                    <input
                        type="text"
                        name="altura"
                        id="altura"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="piso">Piso</label>
                    <input
                        type="text"
                        name="piso"
                        id="piso"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="departamento">Departamento</label>
                    <input
                        type="text"
                        name="departamento"
                        id="departamento"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="cp">Código Postal</label>
                    <input
                        type="text"
                        name="cp"
                        id="cp"
                        value={''}
                    />
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="localidad">Localidad</label>
                    <select 
                        name="localidad" 
                        id="localidad"
                        value={''}
                    >
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="provincia">Provincia</label>
                    <select 
                        name="provincia" 
                        id="provincia"
                        value={''}
                    >
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="metodo_pago">Metodo de Pago</label>
                    <select 
                        name="metodo_pago" 
                        id="metodo_pago"
                        value={''}
                    >
                        {
                            metodoPago ? metodoPago.data.map((metodo, index) => {
                                return <option value={metodo.nombre_metodo_pago} key={metodo + index}>{metodo.nombre_metodo_pago}</option>
                            }) : ""
                        }
                        
                    </select>
                </div>
                <div className="form-group-1 form-group-2">
                    <label htmlFor="vendedor">Vendedor</label>
                    <select 
                        name="vendedor" 
                        id="vendedor"
                        value={''}
                    >
                        <option value=""></option>
                    </select>
                </div>
            </form>
                <button className='btn-crear'>Agregar a Base de Datos<PersonAddIcon /></button>
        </div>
    )
}

export default ClientesAdd
