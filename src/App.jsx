import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PrimeiroAcesso from './pages/PrimeiroAcesso';
import Configuracoes from './pages/Configuracoes';
import Conquistas from './pages/Conquistas';
import DescubraEvento from './pages/DescubraEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';
import Login from './pages/Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Função para verificar se a rota atual é a página de login
  const isLoginPage = window.location.pathname.includes("/Login");

  return (
    <BrowserRouter>
      {/* Renderiza o Header apenas se não estiver na página de login */}
      {!isLoginPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Navigate to="/PrimeiroAcesso" replace />} />
        <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/Conquistas" element={<Conquistas />} />
        <Route path="/DescubraEvento" element={<DescubraEvento />} />
        <Route path="/Competencias" element={<Competencias />} />
        <Route path="/Nivelamento" element={<Nivelamento />} />
      </Routes>

      {/* Renderiza o Footer apenas se não estiver na página de login */}
      {!isLoginPage && <Footer />}
    </BrowserRouter>
  );
}

export default App;
