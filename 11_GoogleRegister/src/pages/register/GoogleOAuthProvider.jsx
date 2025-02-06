import RegisterPage from './RegisterPage';
import {GoogleOAuthProvider} from "@react-oauth/google";

const clientId = "454039478511-8jcuaiasctkg5b7avlvhm605vcnivvcp.apps.googleusercontent.com"; 

const RegisterPageWithProvider = () => {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <RegisterPage/>
        </GoogleOAuthProvider>
    )
}

export default RegisterPageWithProvider;
