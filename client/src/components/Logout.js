import { GoogleLogout } from 'react-google-login';

function Logout() {
    return (<GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>)
}

export default Logout;