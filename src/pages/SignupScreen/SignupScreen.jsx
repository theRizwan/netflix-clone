import { useNavigate } from "react-router-dom";
import "./SignupScreen.css";
import { useState } from "react";
function SignupScreen() {
  const [mode, setMode] = useState('signin')
  const navigate = useNavigate();
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign {mode=== 'signin' ? 'In' : 'Up'}</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button onClick={() => navigate('/')} type="submit">Sign {mode=== 'signin' ? 'In' : 'Up'}</button>
        {mode === 'signin' && <h4><span className="signupScreen__grey">New to Netflix?</span> <span onClick={() => setMode('signup')} className="signupScreen__link">Sign Up Now.</span></h4>}
        {mode === 'signup' && <h4><span className="signupScreen__grey">Already have Account?</span> <span onClick={() => setMode('signin')} className="signupScreen__link">Sign In Now.</span></h4>}
      </form>
    </div>
  )
}

export default SignupScreen