import React from 'react';
import ReactDOM from 'react-dom';
// or
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './utils/refreshToken'
import "./Login.css"
 

const clientId = "735170873936-3td5sgtm4o6m0umkoh38d9mmcim3c8c4.apps.googleusercontent.com";

// const responseGoogle = (response) => {
//   console.log(response);
// }

function Login() {
    const onSuccess = (res) => {
        console.log('Login Successful!', res.profileObj);

        refreshTokenSetup(res);
        console.log("redirect to...")

        window.location.replace("/")
    }
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Was not able to Authenticate`
        );

}
 
return (
    <div className="Login">
  
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button style={{backgroundColor:"red"}} ><span  onClick={renderProps.onClick} >Signup</span></button>
        )}
        isSignedIn={true}
      />
    </div>
  );
  
}


export default Login;