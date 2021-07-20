import { useState } from 'react';

function SignUp() {
    //const [passwordMessage, setPasswordMessage] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const isEnabled = email.length > 0 && pass.length > 0 && confirmPass.length > 0;
    return(
        <div className="sign-up">
            <form>
                <h2 className="message-box">Join the hood!</h2>
                <label>
                    <input 
                    placeholder="Enter your name" 
                    type="name"
                    className="inp" 
                    required>
                    </input>
                </label>
                <label>
                    <input 
                    placeholder="Enter a valid E-mail" 
                    type="email"
                    className="inp" 
                    onChange = {(e) => {
                        setEmail(e.target.value);
                    }}
                    required>
                    </input>
                </label>
                <label>
                    <input 
                    placeholder="Enter your phone number" 
                    type="tel"
                    className="inp" 
                    required>
                    </input>
                </label>
                <label>
                    <input 
                    placeholder="Enter a password" 
                    type="password"
                    className="inp" 
                    onChange = {(e) => {
                        setPass(e.target.value);
                    }}
                    required>
                    </input>
                </label>
                <div className="message-box">
                {(pass !== '') && (pass.length >= 8 ? <div className="green">Strong Password</div> : <div className="red">Password weak: must have atleast 8 characters</div>)}
                </div>
                <label>
                    <input 
                    placeholder="Confirm password" 
                    type="password"
                    className="inp"
                    onChange = {(e) => { 
                        setConfirmPass(e.target.value); 
                    }} 
                    required>
                    </input>
                </label>
                <div className="message-box">
                {(pass !== '' && confirmPass !== '') && ((confirmPass === pass && pass !== '') ? (<div className="green">Matched, proceed to submit!</div>) : (<div className="red">Doesn't match senor</div>))}
                </div>
                <button type="submit" disabled={!isEnabled}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
                </button>
            </form>
        </div>
    );
}

export default SignUp;