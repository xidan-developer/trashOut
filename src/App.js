import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";

export const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/login" element={<LogIn />} />
                    <Route exact path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;