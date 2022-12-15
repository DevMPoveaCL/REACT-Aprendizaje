import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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