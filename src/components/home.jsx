import { useContext } from "react";
import { auth } from "../firebase";
import {authContext} from "../AuthProvider";
import { Navigate } from "react-router-dom";
import "./home.css"
import VideoCard from "./videoCard";
let Home = () => {
    let user=useContext(authContext);
    return <> 
    {user ? "" : <Navigate replace to="/login"/>}
    <div className="video-container">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
    </div>
        <button className="home-logout-btn"
        onClick={() => {
            auth.signOut();
        }}>
            LOGOUT
        </button>
    </>
}

export default Home;
