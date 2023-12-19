import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
//import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
//import MessageIcon from '@mui/icons-material/Message';
import avatarimg from '/img/man-g966456346_1280.png'

const Navbar = ({ usuario }) => {
    return (
        <div className="navbar">
            <div className="wrapper">
                {/* <div className="search">
                    <input type="text" placeholder='Buscar...' />
                    <SearchIcon />
                </div> */}

                <div className="text_info">
                    <span>Esta es una VERSIÓN DEMO por lo que algunas funciones pueden estar deshabilitadas</span>
                </div>

                {
                    usuario 
                    ? <div className="items">
                    {/* <div className="item">
                    <NotificationsActiveIcon className='iconNav' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                    <MessageIcon className='iconNav' />
                        <div className="counter">3</div>
                    </div> */}
                    
                    <div className="item">
                        <span>{usuario.nombre+" "+usuario.apellido}</span>
                    </div>
                    <div className="item">
                        <img className="avatar" src={`https://dmb-back.online:3000/img/usuarios/${usuario.imagen}`} alt="avatar" />
                    </div>
                </div> : null
                }
                
            </div>
        </div>
    )
}
export default Navbar;