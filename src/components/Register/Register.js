import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login">
            <div>
            <h1>Please Register</h1>
            <form onSubmit="">
          
                <br /><br /><br />
                <input type="email" name="" id=""  placeholder="Enter Email"/>
                <br /><br />
                <input type="password" name="" id="" placeholder="Password"/>
                <br /><br />
                <input type="password" name="" id="" placeholder="Re-Enter your Password"/>
                <br /><br />
                <input className="btn-regular" type="submit" value="Submit" />
            </form>
            <p>Already registered?? <Link to="/Login">Login</Link></p> 

            <p>-------------or-----------</p>
           <button className="btn-regular">Google sign In</button>
            </div>
        </div>
    );
};

export default Register;