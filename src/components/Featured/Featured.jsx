import { useEffect, useState } from 'react';
import './Featured.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Featured({polizas}) {

    const [poliAutos, setPoliAutos] = useState(0)
    const [poliMotos, setPoliMotos] = useState(0)
    const [poliHogar, setPoliHogar] = useState(0)
    const [poliConsorcio, setPoliConsorcio] = useState(0)
    const [poliOtros, setPoliOtros] = useState(0)

    const [compaAllianz, setCompaAllianz] = useState(0)
    const [compaAtm, setCompaAtm] = useState(0)
    const [compaExperta, setCompaExperta] = useState(0)
    const [compaFederacionPatronal, setCompaFederacionPatronal] = useState(0)
    const [compaHolando, setCompaHolando] = useState(0)
    const [compaMapfre, setCompaMapfre] = useState(0)
    const [compaMercantilAndina, setCompaMercantilAndina] = useState(0)
    const [compaVictoria, setCompaVictoria] = useState(0)

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

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 1) {
                contador +=1
                setCompaAllianz(contador)
            }
        }) : null
    }, [compaAllianz])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 2) {
                contador +=1
                setCompaAtm(contador)
            }
        }) : null
    }, [compaAtm])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 3) {
                contador +=1
                setCompaFederacionPatronal(contador)
            }
        }) : null
    }, [compaFederacionPatronal])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 4) {
                contador +=1
                setCompaHolando(contador)
            }
        }) : null
    }, [compaHolando])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 5) {
                contador +=1
                setCompaMapfre(contador)
            }
        }) : null
    }, [compaMapfre])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 6) {
                contador +=1
                setCompaMercantilAndina(contador)
            }
        }) : null
    }, [compaMercantilAndina])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 7) {
                contador +=1
                setCompaVictoria(contador)
            }
        }) : null
    }, [compaVictoria])

    useEffect(() => {
        let contador = 0;
        //console.log(polizas.data)
        polizas.data 
        ? polizas.data.map((poliza) => {
            if (poliza.aseguradora_id === 8) {
                contador +=1
                setCompaExperta(contador)
            }
        }) : null
    }, [compaExperta])

    const data = [
        { name: 'Auto', value: poliAutos },
        { name: 'Moto', value: poliMotos },
        { name: 'Hogar', value: poliHogar },
        { name: 'Consorcio', value: poliConsorcio },
        { name: 'Otros', value: poliOtros },
    ];

    const dataCompa = [
        { name: 'Allianz', value: compaAllianz },
        { name: 'ATM', value: compaAtm },
        { name: 'Experta', value: compaExperta },
        { name: 'Federación Patronal', value: compaFederacionPatronal },
        { name: 'Holando', value: compaHolando },
        { name: 'Mapfre', value: compaMapfre },
        { name: 'Mercantil Andina', value: compaMercantilAndina },
        { name: 'Victoria', value: compaVictoria },
    ];
      
    const COLORS = ['#D22127', '#28A24B', '#293A94', '#F57E1F', '#92278F'];
    const COLORSCOMP = ['#D22127', '#28A24B', '#293A94', '#F57E1F', '#92278F', '#672D93', '#149A9B', '#EF5124'];
      
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
            <div className="titleFeatured"><strong>Pólizas por Tipo</strong></div>
            <ResponsiveContainer width="100%" height="38%">
                <PieChart width="70%" height="70%" >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='refecontain'>
               {
                data.map((dato, index) => {

                    return <span className='referencias' style={{backgroundColor: COLORS[index % COLORS.length]}} key={dato+index}>{dato.name+' '+dato.value}</span>
                })
                } 
            </div>
            
            
        <div className="titleFeaturedC"><strong>Pólizas por Compañia</strong></div>
            <ResponsiveContainer width="100%" height="38%">
                <PieChart width="70%" height="70%" >
                    <Pie
                        data={dataCompa}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                    {dataCompa.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORSCOMP[index % COLORSCOMP.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='refecontain'>
               {
                dataCompa.map((dato, index) => {

                    return <span className='referencias' style={{backgroundColor: COLORSCOMP[index % COLORSCOMP.length]}} key={dato+index}>{dato.name+' '+dato.value}</span>
                })
            } 
            </div>
            
        </div>
    )
}

export default Featured
