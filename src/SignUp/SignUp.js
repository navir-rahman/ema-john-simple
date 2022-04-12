import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../components/firebase.init';

const SignUp = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('')
    const [error, seterror]=useState();
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur =(event)=>{
        setemail(event.target.value);
    }
    const handlepassword =(event)=>{
        setpassword(event.target.value);
    }
    const handleconfirmpassword =(event)=>{
        setconfirmpassword(event.target.value);
    }
    const handleCreateUser =(event)=>{
        event.preventDefault();
        if(password !== confirmpassword){
            seterror('your password did not match')
            return;
        }
    
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/shop')
    }
    return (
        <div className='form_container'>
            <div>
                <h2 className="from_title">Sign up</h2>
                <form>
                    <div className="input_group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' />
                    </div>
                    <div className="input_group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlepassword} type="password" name="password" id="" />
                    </div>
                    <div className="input_group">
                        <label htmlFor="confirm_password">Password</label>
                        <input onBlur={handleconfirmpassword} type="password" name="confirm_password" id="" />
                    </div>
                    <p style={{color:"red", margin:"20px"}}>{error}</p>
                    <input type="submit" onClick={handleCreateUser} value="Login" className='form_submit' />
                </form>
                <p>
                    Already have an account <Link className='from_link' to='/login'>Login to account</Link>
                </p>
            </div>

        </div>
    );
};

export default SignUp;