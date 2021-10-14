import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';
const Login = () => {
    const {signInWithGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirects_uri=location.state?.from || './Shop';

    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then(() => {
          history.push(redirects_uri);
        })
    }
    
    

    return (
        <div className="login">
            <div>
            <h1>Please Login</h1>
            <form onSubmit="">
          
                <br /><br /><br />
                <input type="email" name="" id=""  placeholder="Enter Email"/>
                <br /><br />
                <input type="password" name="" id="" placeholder="Password"/>
                <br /><br />
                <input className="btn-regular"type="submit" value="Login" />
            </form>
            <p>New to ema-john?  <Link to="/Register">Create an account</Link></p>

            <p>-------------or-----------</p>
           <button className="btn-regular" onClick={handleSignInWithGoogle}>Google sign In</button>
            </div>
        </div>
    );
};

export default Login;