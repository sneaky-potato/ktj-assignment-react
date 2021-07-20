import { useState } from 'react';

function SignIn() {

    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const isEnabled = userName.length > 0 && userPass.length > 0;
    const passwordToggle = () => {
        let x = document.getElementById('pass');
        if (x.type === "password") {
            x.type = "text";
        } 
        else {
            x.type = "password";
        }
    }

    return(
        <div className="sign-in">
            <form>
            <h2 className="message-box">Yo! Get in there and share your ideas</h2>
                <label>
                    <input 
                    placeholder="E-mail" 
                    type="email"
                    className="inp" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required>
                    </input>
                </label>
                <label>
                    <input
                    type="password"
                    id = "pass"
                    placeholder="Password"
                    name="paragraph_text" 
                    placeholder="Password"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}>
                    </input>
                </label>
                <div className="message-box">
                Show Password<input type="checkbox" value="true" onClick={passwordToggle}></input></div>
                <button type="submit" disabled={!isEnabled}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
                </button>
            </form>
        </div>
    );
}

export default SignIn;