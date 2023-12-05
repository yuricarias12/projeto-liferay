// useOutsideClick.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AreaHeader } from "./styled";

function Header() {
  const [menuSuspensoVisivel, setMenuSuspensoVisivel] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleImagemClick = (event) => {
    event.preventDefault();

    // Páginas onde o menu suspenso e o clique na logo da liferay serão bloqueados
    const pagesToBlock = ["/PrimeiroAcesso", "/Competencias", "/Nivelamento"];

    if (!pagesToBlock.includes(location.pathname)) {
      setMenuSuspensoVisivel(!menuSuspensoVisivel);
    }
  };

  const handleFecharMenuSuspenso = () => {
    setMenuSuspensoVisivel(false);
  };

  const [finalizarClicado, setFinalizarClicado] = useState(false);

  const handleLogoLiferayClick = (event) => {
    // Páginas onde o clique na liferay-img será bloqueado
    const pagesToBlock = ["/PrimeiroAcesso", "/Competencias", "/Nivelamento"];

    if (pagesToBlock.includes(location.pathname)) {
      event.preventDefault();
    }

    setFinalizarClicado(true);

    // O código abaixo será executado apenas se a página atual não estiver na lista de páginas bloqueadas
    // ...

    // Adicione qualquer lógica específica da página aqui

    // ...
  };

  return (
    <AreaHeader>
      <nav className="nav-bar">
        <div className="logo-img-search-box">
          <a
            className="liferay-img"
            href="./pages/TelaInicial/TelaInicial.html"
            onClick={handleLogoLiferayClick}
          >
            <img src="../../../liferay.png" alt="Liferay" />
          </a>

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
          <a className="nav-item">
            <Link to="/DescubraEvento" className="nav-link">
              Descubra um Evento
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/CriarEvento" className="nav-link">
              Criar um Evento
            </Link>
          </a>

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
                    <a className="menu-link" href="#" id="profile-img">
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
