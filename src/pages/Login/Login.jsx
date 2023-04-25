import { useState } from 'react';
import './Login.css'
import SignupScreen from '../SignupScreen/SignupScreen';
function Login() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginscreen">
        <div className="loginscreen__background">
            <img className="loginscreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            <button className='loginscreen__button' onClick={() => setSignIn(true)} >Sign In</button>

            <div className='loginscreen__gradient' />
            <div className='loginscreen__body'>
                {signIn ? <SignupScreen /> :
                <>
                <h1>Unlimited films, TV Programmes and more</h1>
                <h2>Watch anywhere, Cancel at anytime</h2>
                <h3>Ready to Watch? Enter your email to create or restart your membership.</h3>
                <div className='loginscreen__form'>
                    <form>
                    <input type='email' placeholder='Email Address' />
                    <button onClick={() => setSignIn(true)} className='loginscreen__getStarted'>
                        GET STARTED
                    </button>
                    </form>
                </div>
                </>}
            </div>
        </div>

    </div>
  )
}

export default Login