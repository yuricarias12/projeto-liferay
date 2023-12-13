import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import PrimeiroAcesso from './pages/PrimeiroAcesso';
import TelaInicial from './pages/TelaInicial';
import Configuracoes from './pages/Configuracoes';
import Conquistas from './pages/Conquistas';
import DescubraEvento from './pages/DescubraEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';






const App = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Navigate to="/Login" replace />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
            <Route path="/TelaInicial" element={<TelaInicial />} />
            <Route path="/Configuracoes" element={<Configuracoes />} />
            <Route path="/Conquistas" element={<Conquistas />} />
            <Route path="/DescubraEvento" element={<DescubraEvento />} />
            <Route path="/Competencias" element={<Competencias />} />
            <Route path="/Nivelamento" element={<Nivelamento />} />
        </Routes>
    );
}

export default App;
