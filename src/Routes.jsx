import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Configuracoes from './pages/Configuracoes';
import Conquistas from './pages/Conquistas';
import DescubraEvento from './pages/DescubraEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';



export default () => {

    return (
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Configuracoes" element={<Configuracoes />} />
                    <Route exact path="/Conquistas" element={<Conquistas />} />
                    <Route exact path="/DescubraEvento" element={<DescubraEvento />} />
                    <Route exact path="/Competencias" element={<Competencias />} />
                    <Route exact path="/Nivelamento" element={<Nivelamento />} />
                </Routes>
        
    );
}