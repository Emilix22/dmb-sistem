import React, {useState} from 'react';
import './Login.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import isotipo from '../../assets/dmb_isotipo_lineas.svg'


function Login({ setUsuario }) {

    const [userDni, setUserDni] = useState()
    const [password, setPassword] = useState()
    const [rememberUser, setRememberUser] = useState()
    const [errors, setErrors] = useState();
    const [conectando, setConectando] = useState(false)

    const history = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        setConectando(true)
        fetch('http://149.50.132.147:3000/api/usuarios/login', {
            method: 'POST',
            body: JSON.stringify({
                usuario: userDni,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(info => {
            
            {

                if (info.error) {
                    setErrors(info.error)
                }else{

                    setUsuario(info)
                    setUserDni('')
                    setPassword('')

                    if(rememberUser) {
                        Cookie.set('userLogin', info, {
                        expires: 10,
                        secure: true,
                        sameSite: 'strict',
                        path: '/'
                        })
                    }
                    history('/dashboard')  
                }
            }
            
        })
        
    }

    return (
        <div className='login-pagina'>
           <form className='login-container' >
            <h3 className='welcome-login'>BIENVENID@</h3>
            <div className='login-form'>
                {
                    errors && !(errors.password || errors.usuario) ? <span className='error-msg'> {errors} </span> : ''   
                }
                <div className='form-group-1'>
                    <label htmlFor="usuario">Usuario (DNI)</label>
                    <input
                     className='form-input'
                     type="usuario"
                     id='usuario'
                     name='usuario'
                     placeholder='Ingrese su DNI...'
                     onChange={(e) => setUserDni(e.target.value)}
                    />
                    {
                        errors && errors.usuario ? <span className='error-msg'> {errors.usuario.msg} </span> : ''
                   
                    }
                </div>
                <div className='form-group-1'>
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                     className='form-input'
                     id='passwordLogin'
                     type="password"
                     name='password'
                     placeholder='Ingrese su Password...'
                     onChange={(e) => setPassword(e.target.value)} 
                     />
                     {
                        errors && errors.password ? <span className='error-msg'> {errors.password.msg} </span> : ''
                   
                     }
                </div>
                <div className='form-group-1'>
                    <FormControlLabel name='rememberUser' control={<Checkbox onChange={(e) => setRememberUser(e.target.value)} color="success" />} label="Recordarme" />
                </div>
                <button className='btn-login' onClick={handleLogin}>Login</button>
            </div>
            {
                conectando ? <div className='conectando'><span>Conectando...</span> <img src={isotipo} alt="logo-girando" /></div> : null
            }
        </form>
        </div>
    )
}

export default Login
