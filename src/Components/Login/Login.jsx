import "./Login.scss";
import Logo from "../../Images/logo.png";
import Fb from "../../Images/facebook.png";
import Ios from "../../Images/180ae7a0bcf7.png"
import Android from "../../Images/e9cd846dc748.png"
import { useState } from "react";
const Login = () => {
	const [pass, setPass] = useState('')
	const [ showPassword, setShowPassword] = useState(false)

  const [show,setShow] = useState(false)

	const handlePasswordChange = (e) => {
		setPass(e.target.value)
	}

  return (
    <div className="login">
      <div className="login__page">
        <div className="login__system">
          <a href="#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <form>
            <input
              className="login__input"
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              placeholder="Phone number, username, password"
            />

            {pass && <span className="login__show" onClick={() => setShowPassword(!showPassword)}>Show</span> }
						<div className="login__password">
							<input
								className="login__input"
								type={showPassword ?  "text" : "password" }
								placeholder="Password"
								onChange={handlePasswordChange}
							/>
              
							{pass && <span onClick={() => setShowPassword(!showPassword)} className="login__show">Show</span>}
						</div>

            <button className="login__btn" type="submit">
              Log in
            </button>
          </form>
          <div className="login-border">
            <div className="login-des"></div>
            <p className="login-change">OR</p>
            <div className="login-des"></div>
          </div>
          <div className="login__change">
            <a className="change-img" href="#">
              <img className="login__fb" alt="facebook" src={Fb} />
            </a>
            <p className="login__bt">Log in with Facebook</p>
          </div>
          <p className="login__forgot">Forgot password?</p>
        </div>
      </div>
      <div className="login__check">
        <p className="login__check--sign">
          Don't have an account? <a className="check--sign--up" href="#"> Sign up</a>
        </p>
      </div>

      <div className="login__app">
        <p className="login__app-modify">Get the app</p>
      </div>

      <div className="login__download">
        <a href="#">
          <img className="login__download--ios" src={Ios}/>
        </a>

        <a href="#">
          <img className="login__download--android"  src={Android}/>
        </a>
      </div>

      {/* <div className="show">
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>HI BRO</p>}
      </div> */}
    </div>
  );
};

export default Login;
