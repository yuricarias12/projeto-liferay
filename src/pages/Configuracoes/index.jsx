import React from "react";
import { Link } from 'react-router-dom';

import { ContainerPage, TittlePage } from "../../components/Main";

const Page = () => {
    return (

        <ContainerPage>

            <div className="tittle-page">
                <img src="../../../Settings.png"></img>
                <div className="text-div">
                    <h3><strong>Configurações</strong></h3>
                </div>
            </div>

            <section className="body-page">
                <h3>Áreas do meu Interesse:</h3>
                <div className="config-areas-interesse">
                    <div className="form-element">
                        <input type="checkbox" name="interest-area" value="Back-End" id="back-end" checked />
                        <label className="label-img-config" htmlFor="back-end">
                            <img className="img-icon" src="../../../backend.png" alt="Back-End" />
                            <div className="title">
                                Back-End
                            </div>
                        </label>
                    </div>
                    <div className="form-element">
                        <input type="checkbox" name="interest-area" value="Front-End" id="front-end" checked />
                        <label htmlFor="front-end">
                            <img className="img-icon" src="../../../frontend.png" alt="Front-End" />
                            <div className="title">
                                Front-End
                            </div>
                        </label>
                    </div>
                </div>

                <Link to="/"><button className="buttons-pg-config" type="button">Alterar Areas de Interesse <img src="refresh.png"></img></button></Link>
                
                <div className="competencias-text"><h3>Minhas Competências:</h3></div>
                <div className="config-competencias">
                    
                    <div className="competencias-config">
                        <img className="img-competencias-config" src="../../../javaimg.png" />
                    </div>

                    <div className="competencias-config">
                        <img className="img-competencias-config" src="../../../csharpimg.png" />
                    </div>

                    <div className="competencias-config">
                        <img className="img-competencias-config" src="../../../react.png" />
                    </div>

                    <div className="competencias-config">
                        <img className="img-competencias-config" src="../../../javascript.png" />
                    </div>
                </div>

               <Link to="/Competencias"><button className="buttons-pg-config" type="button">Alterar Competências <img src="refresh.png"></img></button></Link> 

            </section>


        </ContainerPage>

    );
}

export default Page;