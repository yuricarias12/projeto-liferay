import React from "react";
import { Link } from 'react-router-dom';

import { ContainerPage, TittlePage } from "../../components/Main";

const Page = () => {
    return (

        <ContainerPage>

            <TittlePage>
                    <div className="wc-text">Seja Bem-vindo(a) à plataforma de eventos da empresa. Aqui, você vai
                    encontrar inúmeros eventos para participar,<br />dentre eles estão palestras, mentorias, workshops, etc.
                    <strong>Nos informe quais as suas principais áreas de interesse:</strong></div>                 
            </TittlePage>


            <main>
        <form id="form1">
            <section className="areas">
                <div className="container">
                    <div className="list">
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Back-End" id="back-end" />
                            <label htmlFor="back-end">
                                <img className="img-icon" src="../../../backend.png" alt="Back-End" />
                                <div className="title">
                                    Back-End
                                </div>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Front-End" id="front-end" />
                            <label htmlFor="front-end">
                                <img className="img-icon" src="../../../frontend.png" alt="Front-End" />
                                <div className="title">
                                    Front-End
                                </div>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Quality-Assurance" id="quality-assurance" />
                            <label htmlFor="quality-assurance">
                                <img className="img-icon" src="../../../qualityassurance.png" alt="Quality-Assurance" />
                                <div className="title">
                                    Quality Assurance
                                </div>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Project-Management" id="project-management" />
                            <label htmlFor="project-management">
                                <img className="img-icon" src="../../../projectmanagement.png" alt="Project Management" />
                                <div className="title">
                                    Project Management
                                </div>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Common-Skills" id="common-skills" />
                            <label htmlFor="common-skills">
                                <img className="img-icon" src="../../../commonskills.png" alt="Common Skills" />
                                <div className="title">
                                    Common Skills
                                </div>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" name="interest-area" value="Others" id="others" />
                            <label htmlFor="others">
                                <img className="img-icon" src="../../../others.png" alt="Others" />
                                <div className="title">
                                    Outros
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </section>
            <div className="actions">
               
                <Link to="/Competencias"> <button type="submit" className="buttons" id="btnNext">Avançar<img src="../../../setadireita.png" /></button></Link>
            </div>
        </form>
    </main>


        </ContainerPage>

    );
}

export default Page;