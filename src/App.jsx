import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PrimeiroAcesso from './pages/PrimeiroAcesso';
import TelaInicial from './pages/TelaInicial';
import Configuracoes from './pages/Configuracoes';
import Conquistas from './pages/Conquistas';
import DescubraEvento from './pages/DescubraEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';
import Login from './pages/Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <>
      {!isLoginPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
        <Route path="/TelaInicial" element={<TelaInicial />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/Conquistas" element={<Conquistas />} />
        <Route path="/DescubraEvento" element={<DescubraEvento />} />
        <Route path="/Competencias" element={<Competencias />} />
        <Route path="/Nivelamento" element={<Nivelamento />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
