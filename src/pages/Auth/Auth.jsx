import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
function Auth() {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Social Media</h1>
                    <h6>Explore the idea through the world</h6>

                </div>
            </div>
         {/* <Signup/> */}
         <Login/>

        </div>
    )
}

export const Signup=()=>{
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName'/>
                </div>
                <div>
                    <input type="text" className='infoInput' name='username' placeholder='Usernames' />
                </div>
                <div>
                    <input type="text"  className='infoInput' name='password' placeholder='Password'/>
                    <input type="text" className='infoInput' name='confirmpass' placeholder='Confirm Password' />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
                    <div>
                        <button className="button infoButton" type='submit'>
                            Signup
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export const Login=()=>{
    return(
        <div className="a-right">
            <form  className="infoForm authForm">
                <h3>Login In</h3>
                <div>
                <input type="text" className='infoInput' name='username' placeholder='Usernames' />
                </div>
                <div>
                <input type="text"  className='infoInput' name='password' placeholder='Password'/>
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Don't have an account. SignUp </span>
                    <div>
                        <button className="button infoButton" type='submit'>
                            LogIn
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Auth
