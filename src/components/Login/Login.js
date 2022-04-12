import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      const [email, setemail] = useState('');
      const [password, setpassword]=useState('');

      const handleemail = (e) =>{
          setemail(e.target.value);
      }
      const handlepassword=(e)=>{
          setpassword(e.target.value)
      }

      const handlesubmit =(e)=>{
          e.preventDefault()
          signInWithEmailAndPassword(email, password);
      }
      if(user){
        navigate(from, {replace: true})
    }
    return (
        <div className='form_container'>
            <div>
                <h2 className="from_title">Log in</h2>
                <form onSubmit={handlesubmit}>
                    <div className="input_group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleemail} type="email" name='email' id='' />
                    </div>
                    <div className="input_group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlepassword} type="password" name="password" id="" />
                    </div>
                    <input type="submit" value="Login" className='form_submit' />
                </form>
                <p>
                    new to ema-jhon <Link className='from_link' to='/signup'>Create new account</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;