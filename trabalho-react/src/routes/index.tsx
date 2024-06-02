import { Routes, Route, Navigate} from "react-router-dom";
import { useEffect } from "react";


export const AppRoutes = () => {
    //const {setDrawerOption} = useDrawerContext();
    useEffect(()=>{
        /*setDrawerOption([
            {
                label: "Página Inicial",
                icon: "home",
                route:"pagina-inicial"
            },
            {
                label: "Ednaldo",
                icon: "abc",
                route:"pagina-inicial"
            }
        ])*/
    });
    return(
        <Routes>
            <Route path="/pagina-inicial" element="Olá mundo"/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};