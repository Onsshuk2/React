import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from './LoginPage';

const clientId = "454039478511-8jcuaiasctkg5b7avlvhm605vcnivvcp.apps.googleusercontent.com"; 

console.log("Google OAuth client ID:", clientId); 

const LoginPageWithProvider = () => {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <LoginPage />
        </GoogleOAuthProvider>
    );
}

export default LoginPageWithProvider;
