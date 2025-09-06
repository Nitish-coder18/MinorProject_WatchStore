import React from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='container'>
        <h1>Sign UP</h1>
        <div className="details-signup">
          <input type="text" placeholder='Your Name' />
<input type="email" placeholder='Your Email' />
<input type="password" placeholder='enter password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account  ?  <span>Login Here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policies.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
