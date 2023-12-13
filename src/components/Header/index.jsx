// useOutsideClick.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AreaHeader } from "./styled";

function Header() {

 const [menuSuspensoVisivel, setMenuSuspensoVisivel] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [finalizarClicado, setFinalizarClicado] = useState(false);

  // Função chamada quando a imagem na barra de navegação é clicada
  const handleImagemClick = (event) => {
    event.preventDefault();

    // Lista de páginas que não permitem o menu suspenso
    const pagesToBlock = ["/PrimeiroAcesso", "/Competencias", "/Nivelamento"];

    // Verifica se a página atual está na lista de páginas bloqueadas
    if (!pagesToBlock.includes(location.pathname)) {
      setMenuSuspensoVisivel(!menuSuspensoVisivel);
    }
  };

  // Função para fechar o menu suspenso
  const handleFecharMenuSuspenso = () => {
    setMenuSuspensoVisivel(false);
  };

  // Função para quando um link na barra de navegação é clicado
  const handleLinkClick = (event, targetPage) => {
    // Lista de páginas que não permitem a navegação para outras páginas
    const pagesToBlock = ["/PrimeiroAcesso", "/Competencias", "/Nivelamento"];

    // Bloqueia a navegação se a página atual estiver na lista de páginas bloqueadas
    if (pagesToBlock.includes(location.pathname)) {
      event.preventDefault();
      
    }

  };

  // Função para quando o logo da Liferay é clicado
  const handleLogoLiferayClick = (event) => {
     // Lista de páginas que não permitem a navegação para a página inicial da Liferay
    const pagesToBlock = ["/PrimeiroAcesso", "/Competencias", "/Nivelamento"];

    // Bloqueia a navegação se a página atual estiver na lista de páginas bloqueadas
    if (pagesToBlock.includes(location.pathname)) {
      event.preventDefault();
    }

    setFinalizarClicado(true);


  };

  return (
    <AreaHeader>
      <nav className="nav-bar">
        <div className="logo-img-search-box">
          <Link to="/TelaInicial"
            className="liferay-img"
            onClick={handleLogoLiferayClick}
          >
            <img src="../../../liferay.png" alt="Liferay" />
          </Link>

          <div className="search-box">
            <a href="#" className="search-btn">
              <img src="../../../loupe.png" alt="lupa" height="20" width="20" />
            </a>

            <input
              type="text"
              className="search-text"
              placeholder="Pesquisar..."
            />
            <img src="../../../mdi_arrow-down-drop.png" alt="seta para baixo" />
          </div>
        </div>

        <div className="nav-items-btn-user-img">
          <div className="nav-item">
            <Link to="/TelaInicial"
              className="nav-link"
              onClick={(event) => handleLinkClick(event, "./pages/TelaInicial/TelaInicial.html")}
            >
              Descubra um Evento
            </Link>
          </div>

          <div className="nav-item">
            <a
              href="./pages/TelaCriarEvento/criarevento.html"
              className="nav-link"
              onClick={(event) => handleLinkClick(event, "./pages/TelaCriarEvento/criarevento.html")}
            >
              Criar um Evento
            </a>
          </div>

          <div className="user-img">
            <a href="#" className="profile-img" onClick={handleImagemClick}>
              <img src="../../../user-img.png" alt="Imagem de perfil" />
            </a>
            {menuSuspensoVisivel && (
              <div id="menuSuspenso" onClick={handleFecharMenuSuspenso}>
                <div>
                  <div className="menuItem">
                    <img src="../../../imgperfil.png" alt="perfil" />
                    <a className="menu-link" href="#" id="profile-img">
                      <span>Charles Henrique</span>
                    </a>
                  </div>

                  <div className="menuItem">
                    <img src="../../../imginscricao.jpg" alt="inscricao" />
                    <a className="menu-link" href="./pages/TelaVisualizarEventos/index.html" id="profile-img">
                      <span>Minhas Inscrições</span>
                    </a>
                  </div>

                  <div className="menuItem">
                    <img src="../../../imgagenda.png" alt="agenda" />
                    <a
                      className="menu-link"
                      href="./pages/TelaVisualizarAgendamentos/index.html"
                      id="profile-img"
                    >
                      <span>Meus Agendamentos</span>
                    </a>
                  </div>

                  <div className="menuItem">
                    <img src="../../../imgconquista.png" alt="conquista" />
                    <a
                      className="menu-link"
                      href="/Conquistas"
                      id="profile-img"
                    >
                      <span>Minhas Conquistas</span>
                    </a>
                  </div>

                  <div className="menuItem">
                    <img src="../../../imgconfig.png" alt="config" />
                    <a
                      className="menu-link"
                      href="/Configuracoes"
                      id="profile-img"
                    >
                      <span>Configurações</span>
                    </a>
                  </div>
                  <button className="btn-logout">
                    <a className="link-logout" href="/Login">
                      <span className="logout-text">Logout</span>{" "}
                      <img src="../../../imglogout.png" alt="logout" />
                    </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </AreaHeader>
  );
}

export default Header;
