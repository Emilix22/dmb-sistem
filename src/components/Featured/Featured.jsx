import { useEffect, useState } from 'react';
import './Featured.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Featured({polizas}) {

    const [poliAutos, setPoliAutos] = useState(0)
    const [poliMotos, setPoliMotos] = useState(0)
    const [poliHogar, setPoliHogar] = useState(0)
    const [poliConsorcio, setPoliConsorcio] = useState(0)
    const [poliOtros, setPoliOtros] = useState(0)

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.tipos_polizas.nombre_tipo_poliza === "Auto") {
                contador +=1
                setPoliAutos(contador)
            }
        }) : null
    }, [poliAutos])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.tipos_polizas.nombre_tipo_poliza === "Moto") {
                contador +=1
                setPoliMotos(contador)
            }
        }) : null
    }, [poliMotos])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.tipos_polizas.nombre_tipo_poliza === "Hogar") {
                contador +=1
                setPoliHogar(contador)
            }
        }) : null
    }, [poliHogar])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.tipos_polizas.nombre_tipo_poliza === "Consorcio") {
                contador +=1
                setPoliConsorcio(contador)
            }
        }) : null
    }, [poliConsorcio])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.tipos_polizas.nombre_tipo_poliza === "Robo" || poliza.tipos_polizas.nombre_tipo_poliza === "Incendio" || poliza.tipos_polizas.nombre_tipo_poliza === "Comercio" || poliza.tipos_polizas.nombre_tipo_poliza === "Accidentes Personales" || poliza.tipos_polizas.nombre_tipo_poliza === "Transporte" || poliza.tipos_polizas.nombre_tipo_poliza === "Cauciones" || poliza.tipos_polizas.nombre_tipo_poliza === "Objetos Personales" || poliza.tipos_polizas.nombre_tipo_poliza === "Embarcaciones" ) {
                contador +=1
                setPoliOtros(contador)
            }
        }) : null
    }, [poliOtros])

    const data = [
        { name: 'Auto', value: poliAutos },
        { name: 'Moto', value: poliMotos },
        { name: 'Hogar', value: poliHogar },
        { name: 'Consorcio', value: poliConsorcio },
        { name: 'Otros', value: poliOtros },
    ];
      
    const COLORS = ['#3E77B6', '#26798E', '#63CAA7', '#FFC172', '#FFE383'];
      
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <div className="featured">
            <div className="titleFeatured">Pólizas por tipo</div>
            <ResponsiveContainer width="100%" height="91%">
                <PieChart width="70%" height="70%" >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {
                data.map((dato, index) => {

                    return <span className='referencias' style={{backgroundColor: COLORS[index % COLORS.length]}} key={dato+index}>{dato.name+' '+dato.value}</span>
                })
            }
        </div>
    )
}

export default Featured
