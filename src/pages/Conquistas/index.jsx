import React from "react";
import { Link } from 'react-router-dom';

import { ContainerPage, TittlePage } from "../../components/Main";

const Page = () => {
    return (

        <ContainerPage>

            <div className="tittle-page-conquista">
                <img width={'250px;'} src="../../../liferayc.png"></img>
                
            </div>

            <div className="text-h2">
                <h2>Certificados:</h2>
            </div>

            <section className="certificados-usuario">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome:</th>
                            <th scope="col">Visualizar:</th>
                            <th scope="col">Compartilhar:</th>
                            <th scope="col">Download:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Java: Programação Orientada a Objetos</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">JavaScript: Programação Assíncrona</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">React: UseState - Simplificando os Hooks</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>

                        <tr>
                            <th scope="row">HTML/CSS: Deixando Sites Responsivo</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>

                        <tr>
                            <th scope="row">Python: Biblioteca Pandas e Numpy</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>

                        <tr>
                            <th scope="row">C# e .NET Framework</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>

                        <tr>
                            <th scope="row">JavaScript Object Notation</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>

                        <tr>
                            <th scope="row">Maven: Gerenciamentos de dependências e build de aplicações Java</th>
                            <td><img className="btn-imgs" src="../../../Eye.png" alt="olho"></img></td>
                            <td><img className="btn-imgs" src="../../../Share.png" alt="compartilhar"></img></td>
                            <td><img className="btn-imgs" src="../../../ExportPdf.png" alt="pdf"></img></td>
                        </tr>
                        
                    </tbody>
                </table>

            </section>




        </ContainerPage>

    );
}

export default Page;