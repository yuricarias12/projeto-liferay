import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/config';
import FiltrarEvento from './pages/FiltrarEvento';
import DescubraEvento from './pages/FiltrarEvento';
import Competencias from './pages/Competencias';
import Nivelamento from './pages/Nivelamento';



export default () => {

    return (
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/config" element={<Config />} />
                    <Route exact path="/FiltrarEvento" element={<FiltrarEvento />} />
                    <Route exact path="/DescubraEvento" element={<DescubraEvento />} />
                    <Route excat path="/Competencias" element={<Competencias />} />
                    <Route excat path="/Nivelamento" element={<Nivelamento />} />
                </Routes>
        
    );
}