import { GoogleLogout } from 'react-google-login';
import React from 'react';

const clientId = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully!');
    }

    return (
        <div>
            <GoogleLogout
                clientId= {clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout;