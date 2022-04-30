import { useContext, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase"
import {authContext} from "../AuthProvider";
import {Navigate} from "react-router-dom";

let Login = () => {
    let user=useContext(authContext);
    console.log(user);
    return (
        <>
        {(user)?<Navigate replace to="/"/>:""}
            <button onClick={() => {
                signInWithGoogle();
            }} className="btn btn-primary">Login with google</button>

           
        </>)
}

export default Login;