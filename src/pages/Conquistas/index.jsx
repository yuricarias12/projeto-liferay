import React from "react";
import { Link } from 'react-router-dom';

import { ContainerPage, TittlePage } from "../../components/Main";

const Page = () => {
    return (

        <ContainerPage>

            <div className="tittle-page-conquista">
                <img src="../../../gold-medal.png"></img>
                <div className="text-div-conquista">
                    <h3><strong>Minhas Conquistas</strong></h3>
                </div>
            </div>

            <div className="text-h2">
                <h2>Certificados:</h2>
            </div>

            <section className="certificados-usuario">
                <div className="acoes">

                    <div className="acoes-evento">
                        <p>Visualizar:</p>
                        
                    </div>

                    <div className="acoes-evento">
                        <p>Compartilhar:</p>
                        
                    </div>

                    <div className="acoes-evento">
                        <p>Download:</p>
                        
                    </div>

                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>Java: Programação Orientada a Objetos</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>JavaScript: Programação Assíncrona</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>React: UseState - Simplificando<br /> os HOOKS</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>HTML/CSS: Deixando Sites Responsivo</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>Python: Biblioteca Pandas e Numpy</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>C# e .NET Framework</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                    <strong><p>JavaScript Object Notation</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>

                <div className="nome-certificado">

                    <div className="certificados">
                        <strong><p>Maven: Gerenciamentos de<br /> dependências e build <br />  de aplicações Java</p></strong>
                    </div>

                    <div className="acoes-usuario">
                        <img className="btn-imgs" src="../../../Eye.png"></img>
                        <img className="btn-imgs" src="../../../Share.png"></img>
                        <img className="btn-imgs" src="../../../ExportPdf.png"></img>
                    </div>
                </div>


            </section>




        </ContainerPage>

    );
}

export default Page;