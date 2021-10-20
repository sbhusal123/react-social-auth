import React from "react";

import SocialButton from "./SocialButton";

function App() {
    const handleSocialLogin = user => {
        console.log(user);
    };

    const handleSocialLoginFailure = err => {
        console.error(err);
    };
    return (
        <div>
            <SocialButton
                provider="google" // or facebook
                appId="<APP_ID>"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >
                Login with Google
            </SocialButton>
        </div>
    );
}

export default App;
