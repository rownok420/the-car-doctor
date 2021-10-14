import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);


    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleRegister = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        if (!/(?=.[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 uppercase");
            return;
        }

        isLogin
            ? processLogin(email, password)
            : registerNewUser(email, password);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            });
    };


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {})
            .catch((error) => {
                setError(error.message);
            });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {})
            .catch((err) => {
                setError(err.message);
            });
    };

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {})
            .catch((err) => {
                setError(err.message);
            });
    };

    const toggleLogIn = (e) => {
        setIsLogin(e.target.checked);
    };


    // sign in with google, facebook, github

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    const signInUsingGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
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


        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        toggleLogIn,
        handleResetPassword,
        isLogin,
    };
};

export default useFirebase;
