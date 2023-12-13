import styled from "styled-components";

import { CssAtivacaoConta } from './styled';

export const AtivacaoContaCss = styled.div`

.body-page {
    height: 100vh;
    font-family: Arial;
    background-color: #dadada;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}

.cont-img-txt {
    margin-right: 200px;
}

.cont-img-logo {
    margin-left: 90px;
}

.subtitle {
    color: #1C1E21;
    text-align: center;
    font-family: 'Inter', sans-serif;
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

.wrapper {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
    height: 335px;
}

.content-login {
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
    width: 265px;
    padding: 13px 0px 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 8.36px;
    border-radius: 8px;
    border: 2px solid #D1D5DB;
    background: #0B63CE;
    margin-top: 5px;
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
    margin-top: 5px;
}

.link {
    color: #007bff;
    text-decoration: none;
}

/* responsivo */ 

@media (max-width: 1200px) {
    .cont-img-txt {
        margin-right: 0px;
    }

    .cont-img-logo {
        margin-left: 0px;
        text-align: center;
    }

    @media (max-width: 1000px) {
        .subtitle {
            display: none;
        }
        .cont-img-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .logotipo {
            width: 250px;
            height: 77.258px;
        }
        .body-page {
            display: grid;
            grid-column: auto;
        }
        section {
            margin-top: 100px;
        }
        .wrapper {
            margin-bottom: 180px;
        }
    }
    @media (max-width: 360px) {
        .logotipo {
            width: 200px;
            height: 61.806px;
        }
        .wrapper {
            margin-bottom: 100px;
        }
        
    }
}


`;