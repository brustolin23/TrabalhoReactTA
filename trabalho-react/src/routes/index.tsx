import { Routes, Route, Navigate} from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";


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
                label: "Ednaldo",
                icon: "abc",
                route:"pagina-inicial"
            }
        ])
    });
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<button>Olá mundo</button>}/>
            <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}/>
        </Routes>
    );
};