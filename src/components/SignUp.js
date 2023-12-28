import React, { useState } from 'react';
import {validateEmail} from "../utils.js";
import './SignUp.css';
import greeksaladbackground from "./images/greeksaladbackground.jpg";
import Userlogin from './Userlogin.js';


function SignUp(){

const PasswordErrorMessage = () =>  {
    return(
        <p className='password-error'> Password should have at least 8 characters </p>
    );
};

const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [email, setEmail] =useState("");
const [password,setPassword] = useState({
    value:"",
    isTouched: false,
});
const [confirmPassword,setConfirmPassword] = useState({
    value:"",
    isTouched:false,
});
const [subscribeToNewsletter, setSubscribedToNewsletter] = useState(false);
const [passwordsMatch,setPasswordsMatch] = useState(true);
const [isSignInOpen, setIsSignInOpen] = useState(false);

const getIsFormValid = () => {
return(
    firstName &&
    lastName &&
    validateEmail(email) &&
    password.value.length >= 8 &&
    confirmPassword.value.length >= 8 &&
    passwordsMatch
);
};

const clearForm = () => {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setEmail("")
    setPassword({
        value: "",
        isTouched: false,
    });
    setConfirmPassword({
        value: "",
        isTouched: false,
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    if(passwordsMatch){
        clearForm();
    }
};

const handlePasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setPassword({...password, value: newPasswordValue});

    setPasswordsMatch(newPasswordValue === confirmPassword.value)
};

const handleConfirmPasswordChange = (e) => {
    const newConfirmPasswordValue = e.target.value;
    setConfirmPassword({ ...confirmPassword, value: newConfirmPasswordValue });

    setPasswordsMatch(newConfirmPasswordValue === password.value);
};

const handleExistingAccountClick = () => {
    setIsSignInOpen(true);
  };

const closeSignInPopup = () => {
    setIsSignInOpen(false);
}


    return (
<>
<div className='signup-container'>

<div className='signup-content-container'>

<div className='signup-flow-background'>
<img src={greeksaladbackground} alt='background salad picture'/>
</div>

<div className="signup-flow">
        <div className="signup-text">
            <div className="signup-title">
                <h1> Sign up and keep up with us! </h1>
            </div>
        <div className="signup-description">
            <h4>Little Lemon specializes in casual dining and serves crave worthy mediterranean fare.
                Want to know more? Sign up for an account and our eNewsletter to order online &
                learn more about local events and menu updates! Welcome to the Little Lemon family! </h4>
        </div>
        </div>
        <div className="signup-name-input">
    <div className="signup-first-name">
            <fieldset className='signup-field'>
                <label className="signup-label" htmlFor="firstName"></label>
                 <input className="signup-input" id="First Name"
                type="text"
                placeholder="First Name"
                name="First Name" value={firstName}
                onChange={e => setFirstName(e.target.value)}/>
            </fieldset>
    </div>
    <div className="signup-last-name">
            <fieldset className='signup-field'>
                <label className="signup-label" htmlFor='lastName'></label>
                 <input className="signup-input" id='Last Name'
                type="text"
                placeholder="Last Name"
                name="Last Name" value={lastName}
                onChange={e => setLastName(e.target.value)}/>
            </fieldset>
    </div>
        </div>
        <div className="signup-details-input">
        <div className="signup-phone-number">
                <fieldset className='signup-field'>
                    <label className="signup-label" htmlFor='phoneNumber'></label>
                     <input className="signup-input" id='Phone Number'
                    type='text'
                    placeholder='Phone Number' 
                    name='Phone Number' value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}/>
                </fieldset>
        </div>
        <div className="signup-email">
            <fieldset className='signup-field'>
                    <label className="signup-label" htmlFor='email'></label>
                     <input className="signup-input" id='email'
                    type='text'
                    placeholder='email'
                    name='Email' value={email}
                    onChange={e =>setEmail(e.target.value)}/>
            </fieldset>
        </div>
        </div>
    <div className="signup-password-input">
            <div className="signup-password">
                <fieldset className='signup-field'>
                        <label className="signup-label" htmlFor='password'></label>
                         <input className="signup-input"
                            id="password"
                            type='password'
                            placeholder='Password'
                            name='Password'
                            value={password.value}
                            onChange={handlePasswordChange}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }}
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                </fieldset>
            </div>
            <div className="signup-confirm-password">
                <fieldset className='signup-field'>
                        <label className="signup-label" htmlFor='confirmPassword'> </label>
                         <input className="signup-input"
                            id='confirmPassword'
                            type='password'
                            placeholder='Confirm Password'
                            name='Confirm Password'
                            value={confirmPassword.value}
                            onChange={handleConfirmPasswordChange}
                            onBlur={() => {
                                setConfirmPassword({ ...confirmPassword, isTouched: true });
                            }}
                        />
                        {confirmPassword.isTouched && !passwordsMatch ? (
                            <div className="password-error">Passwords do not match</div>
                             ) : null}
                </fieldset>
            </div>
        </div>
    
    <div className='signup-lower-portion'>
    <fieldset className='signup-field-newsletter'>
            <label className="signup-newsletter-label" htmlFor='signup-checkbox'>
            <input
            className="signup-newsletter-input"
            id='signup-checkbox'
            type='checkbox'
            checked={subscribeToNewsletter}
            onChange={() => setSubscribedToNewsletter(!subscribeToNewsletter)}
            />
             <span className="custom-checkbox-signup"></span>
             Sign Up for the Little Lemon newsletter <br/> and receive offers
            </label>
    </fieldset>
         <div className="signup-button">
            <button className="signup-submit-button" type="submit" onClick={handleSubmit}  disabled={!getIsFormValid ()} >
            Sign Up Today!
            </button>
        </div>
    </div>
    <div className='existing-account' onClick={handleExistingAccountClick}>
        <h3> already have an account? </h3>
    </div>
</div>

</div>
</div>
{isSignInOpen && <div className='blurred-background' onClick={closeSignInPopup}></div>}

{isSignInOpen && (
        <div className='sign-in-popup'>
          <div className='popup-content'>
            <span className='close-popup' onClick={closeSignInPopup}>
              &times;
            </span>
            <Userlogin />
          </div>
        </div>
      )}

</>
    )
}




export default SignUp;