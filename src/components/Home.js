import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <h1>TrashOut</h1>
            {currentUser ? (
                <p>
                    You are logged - <Link to="dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Log In</Link> или <Link to="signUp">Sign Up</Link>
                </p>
            )}
        </>
    );
};

export default Home;