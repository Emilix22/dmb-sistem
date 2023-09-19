import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
//import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
//import MessageIcon from '@mui/icons-material/Message';
import avatarimg from '/img/man-g966456346_1280.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                {/* <div className="search">
                    <input type="text" placeholder='Buscar...' />
                    <SearchIcon />
                </div> */}
                <div className="items">
                    {/* <div className="item">
                    <NotificationsActiveIcon className='iconNav' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                    <MessageIcon className='iconNav' />
                        <div className="counter">3</div>
                    </div> */}
                    <div className="item">
                        <span>Nombre Usuario</span>
                    </div>
                    <div className="item">
                        <img className="avatar" src={avatarimg} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;