import React from 'react';
import './Login.css';


function Login() {
    return (
        <div className='login-pagina'>
           <form className='login-container' >
            <h3 className='welcome-login'>BIENVENID@</h3>
            <div className='login-form'>
                
                <div className='form-group'>
                    <label htmlFor="usuario">Usuario</label>
                    <input
                     className='form-input'
                     type="usuario"
                     id='usuario'
                     name='usuario'
                     placeholder='Ingrese su Usuario...'
                     //onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {/* {
                        errors && errors.email ? <span className='error-msg'> {errors.email.msg} </span> : ''
                   
                    } */}
                </div>
                <div className='form-group'>
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                     className='form-input'
                     id='passwordLogin'
                     type="password"
                     name='password'
                     placeholder='Ingrese su Password...'
                     //onChange={(e) => setPassword(e.target.value)} 
                     />
                     {/* {
                        errors && errors.password ? <span className='error-msg'> {errors.password.msg} </span> : ''
                   
                     } */}
                </div>
                {/* <div className='form-group'>
                    <FormControlLabel name='rememberUser' control={<Checkbox onChange={(e) => setRememberUser(e.target.value)} color="success" />} label="Recordarme" />
                </div> */}
                <button >Login</button>
            </div>
        </form> 
        </div>
    )
}

export default Login
