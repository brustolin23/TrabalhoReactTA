import { Routes, Route, Navigate} from "react-router-dom";
import { AuthProvider, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Login from "../pages/login/login";


export const AppRoutes = () => {
    const {setDrawerOption} = useDrawerContext();
    useEffect(()=>{
        setDrawerOption([
            {
                label: "Página Inicial",
                icon: "home",
                route:"pagina-inicial"
            },
            {
                label: "Login",
                icon: "login",
                route:"login"
            }
        ])
    });
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<button>Olá mundo</button>}/>
            <Route path="/login" element={
                <AuthProvider>
                <CssBaseline />
                <Login/>
              </AuthProvider>
            }/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};