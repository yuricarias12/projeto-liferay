import React from "react";
import { Link } from "react-router-dom";

import { ContainerPage, TittlePage } from "../../components/Main";

const Page = () => {
    return (
        <ContainerPage>

            <h1 id="text">Principais Temas:</h1>
            <div className="temas">
                <div className="tema-box">
                    <div className="tema-img">
                        <img src="../../../tema1.png" alt="tema1" />
                    </div>
                    <div className="tema-text">
                        <p className="tema-nome">Back-end</p>
                    </div>
                </div>
                <div className="tema-box">
                    <div className="tema-img">
                        <img src="../../../tema2.png" alt="tema2" />
                    </div>
                    <div className="tema-text">
                        <p className="tema-nome">Front-end</p>
                    </div>
                </div>
                <div className="tema-box">
                    <div className="tema-img">
                        <img src="../../../tema3.png" alt="tema3" />
                    </div>
                    <div className="tema-text">
                        <p className="tema-nome">Quality Assurance</p>
                    </div>
                </div>
                <div className="tema-box">
                    <div className="tema-img">
                        <img src="../../../tema4.png" alt="tema4" />
                    </div>
                    <div className="tema-text">
                        <p className="tema-nome">Project Management</p>
                    </div>
                </div>
                <div className="tema-box">
                    <div className="tema-img">
                        <img src="../../../tema5.png" alt="tema5" />
                    </div>
                    <div className="tema-text">
                        <p className="tema-nome">Common Skills</p>
                    </div>
                </div>
            </div>

            <h1 id="text">Próximos Eventos:</h1>
            <div className="eventos">
                <div className="eventos-box">
                    <a href="../TelaInscricaoEventos/index.html" className="evento-link">
                        <div className="eventos-box-img">
                            <img src="../../../evento1.png" alt="evento1" />
                        </div>
                        <div className="eventos-box-text">
                            <p className="data"> Sab, 29 OUT - 16:00</p>
                            <p className="apresentacao"> Programação básica em Java</p>
                            <p className="palestrante"> Por Thiago de Almeida</p>
                        </div>
                    </a>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento2.png" alt="evento2" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Dom, 30 OUT - 14:00</p>
                        <p className="apresentacao"> Introdução aos conceitos básicos de CSS</p>
                        <p className="palestrante"> Por Gabriel Santos</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento3.png" alt="evento3" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Qua, 2 NOV - 20:00</p>
                        <p className="apresentacao"> Automação de testes com Cypress</p>
                        <p className="palestrante"> Por Caleb Ferreira</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento4.png" alt="evento4" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Sab, 4 NOV - 10:00</p>
                        <p className="apresentacao"> Metodologia Kanban</p>
                        <p className="palestrante"> Por Julia Farias</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento5.png" alt="evento5" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Sab, 11 NOV - 16:00</p>
                        <p className="apresentacao"> React Js do zero ao avançado na prática</p>
                        <p className="palestrante"> Por Rita Ferreira</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento6.png" alt="evento6" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Dom, 12 NOV - 14:00</p>
                        <p className="apresentacao"> Gestão Ágil com Scrum</p>
                        <p className="palestrante"> Por Gustavo Farias</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento7.png" alt="evento7" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Qua, 15 NOV - 20:00</p>
                        <p className="apresentacao"> Primeira aplicação em Flutter</p>
                        <p className="palestrante"> Por Pedro Ferreira</p>
                    </div>
                </div>
                <div className="eventos-box">
                    <div className="eventos-box-img">
                        <img src="../../../evento8.png" alt="evento8" />
                    </div>
                    <div className="eventos-box-text">
                        <p className="data"> Sab, 18 NOV - 10:00</p>
                        <p className="apresentacao"> Aprendendo programação básica com C++</p>
                        <p className="palestrante"> Por Renan Frazito</p>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default Page;
