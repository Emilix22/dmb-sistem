import './Featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpRounded';

function Featured() {
    return (
        <div className="featured">
            <div className="topFeatured">
                <h1 className="titleFeatured">Total Ganancias</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottomFeatured">
                <div className="featuredChart">
                    <CircularProgressbar value={60} text="60%" strokeWidth={15} />
                </div>
                <p className="titleDescription">Ventas Totales del día</p>
                <p className="amountDescription">$25000</p>
                <p className="descDescription">Ventas Totales del día con los descuentos incluidos</p>
                <div className="sumary">
                    <div className="item">
                        <div className="itemTitle">Objetivo</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon />
                            <div className="resultAmount">$12.5k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Ultima Semana</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon />
                            <div className="resultAmount">$12.5k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Ultimo Mes</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon />
                            <div className="resultAmount">$12.5k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
