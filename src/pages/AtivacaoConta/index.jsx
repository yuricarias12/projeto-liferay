import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContainerPage, TittlePage } from "../../components/Main";
import { AtivacaoContaCss } from "./styled";




const Page = () => {

  return (
    
      <AtivacaoContaCss>
        <div className="body-page">
        <section className="section-area">
        <div className="cont-img-txt">
      <div className="cont-img-logo">

        <img className="logotipo" src="liferay_logo1.png" alt="logo" />
      </div>
      <p className="subtitle"> Não seríamos a empresa que somos sem as diversas opiniões,<br /> experiências e histórias dos
        nossos funcionários.</p>
    </div>
  </section>
  <div className="wrapper fadeInDown">

    <div className="content-login">

      <h2 className="active"> Ative sua conta: </h2>

      <form className="box-login" method="post" action="#">
        <input type="email" id="email" className="campo" name="email" placeholder="Digite o e-mail corporativo*" />
        <input type="password" id="password" className="campo" name="senha" placeholder="Insira sua senha*" />
        <input type="password" id="password" className="campo" name="senha" placeholder="Confirmar senha*" />

        <div className="botao-submit">
          <img src="Vector.png" alt="vetor" />
          <a href="/Login"><input type="#" className="botao" value="Ativar" /></a>
        </div>

      </form>



      <div className="box-lembrar-senha">
        <p>Conta ativada? <a className="link" href="/Login">Acessar</a></p>
      </div>

    </div>

  </div>
</div>

      </AtivacaoContaCss>
    
  );
};

export default Page;
