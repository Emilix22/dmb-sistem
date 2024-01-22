import React, { useRef, useState } from 'react'
import * as XLSX from 'xlsx'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './ReportAdd.css'

function ReportAdd() {

    const [datosCargaDB, setDatosCargaDB] = useState({
        altas: [],
        bajas: [],
        renovaciones: [],
        extencionesVigencia: [],
        endososSinCosto: [],
        endososAmpliacion: [],
        endososReduccion: []

    })

    const [state, setState] = useState({
        woorksheets: [],
        filas: [],
        propiedades: [],
        status: false
    })


    // const selectHoja = useRef(null);
    const tablaReporte = useRef(null)

    const leerFilas = (index) => {
        var hoja = state.woorksheets[index];
        var filas = XLSX.utils.sheet_to_row_object_array(hoja.data);
        state.filas = [];
        state.filas = filas;
    }

    const leerPropiedades = (index) => {
        var hoja = state.woorksheets[index];
        state.propiedades = [];
        for (let key in hoja.data) {
            let regEx = new RegExp("^\(\\w\)\(1\){1}$");
            if (regEx.test(key) == true) {
                state.propiedades.push(hoja.data[key].v);
            }
        }
    }

    // const cambiarHoja = () => {
    //     leerPropiedades(selectHoja.current.value);
    //     leerFilas(selectHoja.current.value);
    //     setState({
    //         filas: state.filas,
    //         propiedades: state.propiedades
    //     })
    // }

    const leerExcel = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        var excel = formData.get("excel");
        var listWorksheet = [];

        var reader = new FileReader()
        reader.readAsArrayBuffer(excel)
        reader.onloadend = (e) => {
            var data = new Uint8Array(e.target.result)
            var excelRead = XLSX.read(data, {type: 'array'})
            excelRead.SheetNames.forEach(function(sheetName, index) {
                listWorksheet.push({
                    data: excelRead.Sheets[sheetName], 
                    name: sheetName, 
                    index: index
                })
            })
            
            state.woorksheets = listWorksheet;
            // setState({
            //     woorksheets: state.woorksheets
            // })
            
            leerPropiedades(0);
            leerFilas(0);
            setState({
                filas: state.filas,
                propiedades: state.propiedades,
                woorksheets: state.woorksheets,
                status: true
            })
            //console.log(state.filas)
        }
        const formCarga = document.querySelector('.cargarExcel')
        formCarga.classList.add('noMostrar')        
    }
    
    let cargarNuevaPoliza = () => {

        state.filas.map((fila, index) => {
            if (fila.OPERACION === 'póliza nueva') {
                datosCargaDB.altas.push(fila)
            }
            if (fila.OPERACION === 'anulación') {
                datosCargaDB.bajas.push(fila)
            }
            if (fila.OPERACION === 'renovación') {
                datosCargaDB.renovaciones.push(fila)
            }
            if (fila.OPERACION === 'extensión vigencia') {
                datosCargaDB.extencionesVigencia.push(fila)
            }
            if (fila.OPERACION === 'endoso sin costo') {
                datosCargaDB.endososSinCosto.push(fila)
            }
            if (fila.OPERACION === 'endoso ampliación') {
                datosCargaDB.endososAmpliacion.push(fila)
            }
            if (fila.OPERACION === 'endoso reducción') {
                datosCargaDB.endososReduccion.push(fila)
            }   

        })

        datosCargaDB.altas.map((alta, index) => {
            if (String(alta.DNI_CUIT).length === 8) {

                const aseguradoSeparado = alta.ASEGURADO.split(' - ');
                

                fetch("https://dmb-back.onrender.com/api/clientes/crear", {
                    
                    method: "POST",
                    body: JSON.stringify({
                        nombre: aseguradoSeparado[0], // sacar solo nombre
                        apellido: aseguradoSeparado[0], // sacar solo apellido
                        dni: String(alta.DNI_CUIT),
                        email: alta.EMAIL ? String(alta.EMAIL) : 'elmail@elmail.com',
                        celular: alta.CELULAR ? String(alta.CELULAR) : '1111111111',
                        // tarjeta_circula: img,
                        telefono_fijo: '',
                        calle: aseguradoSeparado[1], // sacar la calle
                        altura: '123',// sacar el numero
                        piso: '',// sacar el piso
                        departamento: '',// sacar depto
                        cp: '',// sacar cp
                        localidad: alta.UBICACION,
                        provincia: alta.UBICACION,
                        metodo_pago_id: '1',
                        vendedor_id: '1'

                    }),
                    headers: {
                    "Content-Type": "application/json",
                    },
                })
                .then(res => res.json())
                .then(info => {
                    console.log(info)
                })
                .catch(error => {console.log(error)})
           } 
                
        })


        // fetch("http://localhost:3000/api/reportes/addClienteMercantilAndina", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         altas: datosCargaDB.altas,
        //         //bajas: datosCargaDB.bajas,
        //         //renovaciones: datosCargaDB.renovaciones,
        //         //extencionesVigencia: datosCargaDB.extencionesVigencia,
        //         // endososSinCosto: datosCargaDB.endososSinCosto,
        //         // endososAmpliacion: datosCargaDB.endososAmpliacion,
        //         // endososReduccion:datosCargaDB.endososReduccion,
        //         }),
        //         headers: {
        //         "Content-Type": "application/json",
        //         },
        // })
        // .then(res => res.json())
        // .then(info => {
        //     console.log(info)
        // })
        // .catch(error => {console.log(error)})           
    }
    
    return (
        <div className='reportAdd_container'>
            <h3>Carga de Reporte (Excel) MERCANTIL ANDINA</h3>
            <form className='cargarExcel' onSubmit={leerExcel}>
                <div className="form-group-1">
                    <label htmlFor="excel">Seleccione un archivo excel</label>
                    <input
                    type="file" 
                    name="excel" 
                    id="excel" 
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                    />
                </div>    
                    <button className='btn-Upload'>Cargar <UploadFileIcon /></button>
            </form>
            <hr/>
            {
                state.status &&
                <div className='tabla_container' ref={tablaReporte}>
                    {/* <form>
                        <label className="form-label">Hojas </label>
                        <select className='form-select' ref={selectHoja} onChange={cambiarHoja}>
                        {
                            state.woorksheets.map((hoja, index) => {
                                return (<option key={index} value={index}>{hoja.name}</option>)
                            })
                        }
                        </select>
                    </form> */}
                    
                    <h3>Reporte</h3>
                    <button className='btn-Upload' onClick={cargarNuevaPoliza}>Subir a Base de Datos</button>
                    <table 
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                    >
                        <thead>
                            <tr>
                            {
                                state.propiedades.map((propiedad, index) => {                                    
                                    return (                                      
                                            <th key={index}>
                                                {propiedad}
                                            </th>                                        
                                    )                                    
                                })
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.filas.map((fila, index1) => {
                                    return (
                                    <tr key={index1}>
                                        {
                                            state.propiedades.map((propiedad, index2) => {
                                                return <td key={index2}>{fila[propiedad]}</td>
                                            })
                                        }
                                    </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>                
                </div>
            }
            
        </div>
    )
}

export default ReportAdd
