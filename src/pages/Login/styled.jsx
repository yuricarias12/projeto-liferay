import styled from "styled-components";

import { CssTelaLogin } from './styled';

export const TelaLoginCss = styled.div`

.body-page {
    width: 100%;
    font-family: Arial;
    background-color: #dadada;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


.area-section {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.cont-img-txt {
    
}

.cont-img-logo {
    margin-top: 50px;
    margin-left: 90px;
    
}

.subtittle {
    color: #1C1E21;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin-left: 35px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.active{
    color: #111827;
    text-align: left;
    font-family: 'Rubik', sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    max-width: 320px;
}

.active2 {
    color: #111827;
    text-align: left;
    font-family: 'Rubik', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    margin-bottom: 40px;
    max-width: 320px;
}


.logotipo {
    width: 350px;
    height: 107.258px;
    flex-shrink: 0;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
}




.fundo-div {
    width: 25%;
    height: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    
    
}

.content-login {
    margin-top: 30px;
    text-align: center;
}

.box-login{
    width: 270px;
}


h2 {
    font-size: 24px;
}

.wrapper p {
    font-size: 12px;
}



.campo {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.botao-submit {
    display: flex;
    width: 290px;
    padding: 13px 0px 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 8.36px;
    border-radius: 8px;
    border: 2px solid #D1D5DB;
    background: #0B63CE;
    margin-top: 20px;
    cursor: pointer;
}

.botao {
    background: #0B63CE;
    color: #D1D5DB;
    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}

.box-lembrar-senha {
    margin-top: 20px;
}

.link {
    color: #007bff;
    text-decoration: none;
}

/* responsivo */ 

@media (max-width: 360px) {

    .area-section {
        display: grid;
        align-items: center;
        margin-left: 0px;
        
        
    }

    .cont-img-logo {
        margin-right: 100px;
    }

    .fundo-div {
        
        margin-left: 75px;
        width: 70%;
        height: 100%;
        
    }

    .body-page {
        width: 450px;
    }

    .subtittle {
        display: none;
    }
    
}

@media (max-width: 720px) {

    .area-section {
        display: grid;
        align-items: center;
        
        
    }

    .fundo-div {
        margin-top: 20px;
        margin-left: 75px;
        width: 70%;
        height: 100%;
    }
    
}   



`;