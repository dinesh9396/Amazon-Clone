import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className='loginLogo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                />
            </Link>

            <div className="loginContainer">
                <h1 className="signIn">Sign-in</h1>

                <form className='form'>
                    <h5 className="email">Email</h5>
                    <input className="emailInput" type='text'
                    value= {email} onChange= {e => setEmail(e.target.value)}
                    />

                    <h5 className="password">Password</h5>
                    <input className="passwordInput" type='password'
                    value={password} onChange={e => setPassword(e.target.value)}
                    />

                    <button className="signInButton">Sign In</button>
                </form>

                <p className="note"> 
                By continuing, you agree to Amazon fake clone's Conditions of Use and Privacy Notice.
                </p>

                <button className="loginResigtrationButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
