import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './Routes';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes />

      <Footer />

    </BrowserRouter>

  );

}

export default App;