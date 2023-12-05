import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContainerPage, TittlePage } from "../../components/Main";
import { TelaLoginCss } from "./styled";




const Page = () => {

  return (
    <ContainerPage>
      <TelaLoginCss>
        <div className="body-page">
          <section className="area-section">
            <div className="cont-img-txt">
              <div className="cont-img-logo">
                <img
                  className="logotipo"
                  src="../../../liferay_logo1.png"
                  alt="logo-liferay"
                />
              </div>
              <div className="subtittle">
                <p>
                  {" "}
                  Não seríamos a empresa que somos sem as diversas opiniões,
                  <br /> experiências e histórias dos nossos funcionários.
                </p>
              </div>
            </div>

            <div className="fundo-div">
              <div className="content-login">
                <h2 className="active"> Bem vindo(a)! </h2>

                <p className="active2">Faça o login para acessar o portal.</p>

                <form className="box-login" method="post" action="#">
                  <input
                    type="email"
                    id="email"
                    className="campo"
                    name="email"
                    placeholder="Digite o e-mail corporativo*"
                  />
                  <input
                    type="password"
                    id="password"
                    className="campo"
                    name="senha"
                    placeholder="Digite sua senha*"
                  />

                  <div className="botao-submit">
                    <img src="../../../Vector.png" alt="vector"/>
                    <Link to="/PrimeiroAcesso">
                      <input type="button" className="botao" value="Entrar" />
                    </Link>
                  </div>
                </form>

                <div className="box-lembrar-senha">
                  <p>
                    Primeiro acesso? Ative{" "}
                    <a className="link" href="./pages/TelaAtivacaoConta/Cadastro.html">
                      aqui
                    </a>{" "}
                    a sua conta
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </TelaLoginCss>
    </ContainerPage>
  );
};

export default Page;
