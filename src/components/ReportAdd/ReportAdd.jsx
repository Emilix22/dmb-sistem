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

    const formData1 = new FormData();

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
            console.log(state.filas)
        }        
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

           console.log(datosCargaDB) 
        })
        
    }
    return (
        <div className='reportAdd_container'>
            <h3>Carga de Reporte (Excel)</h3>
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
                    className="tablaa"
                    id="dataTable"
                    width="80%"
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
                                                return <td>{fila[propiedad]}</td>
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
