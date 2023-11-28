import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrimeiroAcesso from './pages/PrimeiroAcesso';
import Configuracoes from './pages/Configuracoes';
import Conquistas from './pages/Conquistas';
import DescubraEvento from './pages/DescubraEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';


const RedirectToLogin = () => {
    useEffect(() => {
      
      window.location.href = "./pages/TelaLogin/Login.html";
    }, []);
  
    
    return null;
  };


const App = () => {
    return (
        <Routes>
             <Route path="/" element={<RedirectToLogin />} />
            <Route path="/" element={<Navigate to="/PrimeiroAcesso" replace />}/>
            <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
            <Route path="/Configuracoes" element={<Configuracoes />} />
            <Route path="/Conquistas" element={<Conquistas />} />
            <Route path="/DescubraEvento" element={<DescubraEvento />} />
            <Route path="/Competencias" element={<Competencias />} />
            <Route path="/Nivelamento" element={<Nivelamento />} />
        </Routes>
    );
}

export default App;
