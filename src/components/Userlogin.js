import React, { useState } from 'react';
import {validateEmail} from "../utils.js";
import './Userlogin.css';



function Userlogin (){


const PasswordErrorMessage =  () => {
    return(
    <p className="signin-password-error"> Password should have atleast 8 characters </p>
    );
};

const [email,setEmail] = useState("");
const [password,setPassword] = useState({
    value:"",
    isTouched: false,
});
const [keepMeSignedIn,setKeepMeSignedIn] = useState(false);

const getIsFormValid = () => {
    return(
        validateEmail(email) &&
        password.value.length >= 8 
    );
    };

const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Success!");
        clearForm();
    };

const clearForm = () => {
    setEmail("")
    setPassword({
        value: "",
        isTouched: false,
    });
}

const handlePasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setPassword({ value: newPasswordValue, isTouched: password.isTouched});
};




    return(
    <>
        <div className="signin-container">
                <div className="login-flow">
                    <div className='login-title'>
                         <h1> Sign in to Little Lemon </h1>
                    </div>
                    <div className="signin-email">
                        <fieldset className="signin-field">
                            <label htmlFor="email" className="signin-label"/>
                            <input className="signin-input" id="email" type="text" placeholder="Email"
                            name="email" value={email}
                            onChange= {e => setEmail(e.target.value)}/>
                        </fieldset>
                    </div>

                    <div className="signin-password">
                        <fieldset className="signin-field">
                            <label htmlFor="password" className="signin-label"/>
                            <input className="signin-input" id="password" type="password" placeholder="Password" 
                            name="password" value={password.value} onChange={handlePasswordChange} 
                            onBlur={() => {setPassword({ ...password, isTouched: true });}} 
                            />
                            <div className='signin-password-lower-portion'>
                                <div className='password-message'>
                                    {password.value.length < 8 ? (
                                    <PasswordErrorMessage/> ) : null}
                                </div>
                                <div className='forgot-password'>
                                    <h4> forgot password? </h4>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="signedin-checkbox">
                    <fieldset className='signedin-field'>
                        <label htmlFor='signin-checkbox' className='signedin-label'>
                        <input className='signedin-input' id='signin-checkbox' type='checkbox'
                        name='Sign in checkbox' checked={keepMeSignedIn}
                        onChange ={() => setKeepMeSignedIn (!keepMeSignedIn)}
                        />
                        <span className="custom-checkbox-signin"></span>
                        keep me signed in
                        </label>
                    </fieldset>
                    </div>

                    <div className="signin-button">
                        <button className="signin-submit-button" type="submit" onClick={handleSubmit}  disabled={!getIsFormValid()} >
                        Login
                        </button>
                    </div>


                </div>

        </div>
    </>
    )
}

export default Userlogin; 