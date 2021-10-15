import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from ||'/shop'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-form">
            <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your email"/>
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-john? <Link to="/register">Sign_up</Link></p>
            <div>-------------or-------------</div>
            <button
            onClick={handleGoogleLogin}
            className="btn-purchase">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;