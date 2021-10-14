import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";


const useSignIn = () => {
    const { signInUsingGoogle, signInUsingFacebook, signInUsingGitHub } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            console.log(result.user);
            history.push(redirect_uri)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    const handleFacebookLogin = () => {
        signInUsingFacebook()
        .then((result) => {
            console.log(result.user);
            history.push(redirect_uri)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    const handleGithubLogin = () => {
        signInUsingGitHub()
        .then((result) => {
            console.log(result.user);
            history.push(redirect_uri)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    return {
        handleGoogleLogin,
        handleFacebookLogin,
        handleGithubLogin
    }
}

export default useSignIn;