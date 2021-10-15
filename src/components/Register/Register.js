import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="YourEmail"/>
                    <br />
                    <input type="password" name="" id="" placeholder="YourPassword"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password"/>
                    <br />
                    <input  
                    className="btn-purchase"
                    type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-------------or----------------</div>
                <button className="btn-purchase">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;