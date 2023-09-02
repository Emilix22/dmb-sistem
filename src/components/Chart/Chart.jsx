import './Chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
   {name: "Enero", Total: 1200},
   {name: "Febrero", Total: 800},
   {name: "Marzo", Total: 1300},
   {name: "Abril", Total: 650},
   {name: "Mayo", Total: 1820},
   {name: "Junio", Total: 1000},
];

function Chart() {
    return (
        <div className="chart">
            <div className="titleChart">Ultimos 6 Meses (Ganancias)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
