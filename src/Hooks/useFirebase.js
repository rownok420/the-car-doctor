import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    return {
        user,
        signInUsingGoogle,
        signInUsingFacebook,
        signInUsingGitHub,
        logOut,
        error,
    };
};

export default useFirebase;
