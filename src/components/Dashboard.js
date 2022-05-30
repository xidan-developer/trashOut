import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xxl">
                <h1>Главная страница</h1>
                <p>Вы успевно авторизировались и пошли на страницу</p>
                <button onClick={() => firebaseConfig.auth().signOut()}>Выйти</button>
            </Container>
        </ThemeProvider>
    );
};

export default Dashboard;