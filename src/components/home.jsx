import { useContext } from "react";
import { auth } from "../firebase";
import {authContext} from "../AuthProvider";
import { Navigate } from "react-router-dom";
let Home = () => {
    let user=useContext(authContext);
    return <>
    {user ? "" : <Navigate replace to="/login"/>}
        <button onClick={() => {
            auth.signOut();
        }}>
            LOGOUT
        </button>
    </>
}

export default Home;
