//importamos react solo si lo ocuparemos dentro de este archivo ".js"
import React from "react";
//Rutas de acceso a nuestras páginas a través del navegador web.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importa las páginas existentes.
import { AutoPage, HomePage } from "./pages";

const App = () => {
    return (
        //desde el navegador 
        <BrowserRouter>
            {/* Vamos a tener distintas rutas */}
            <Routes>
                {/* Expecificamos cada ruta */}
                <Route path="/" element={<HomePage />} />
                <Route path="/Auto" element={<AutoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;