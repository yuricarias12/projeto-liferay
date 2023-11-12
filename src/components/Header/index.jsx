import React from "react";
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled';

function Header() {
    return (

        <AreaHeader>
                <nav className="nav-bar">

                    <div className="logo-img-search-box">
                        <a href="https://www.liferay.com/pt/" className="liferay-img">
                            <img src="/liferay.png" />
                        </a>

                        <div className="search-box">
                            <a href="#" className="search-btn">
                                <img src="/loupe.png" alt="lupa" height="20" width="20" />
                            </a>
                            <input type="text" className="search-text" placeholder="Pesquisar..." />
                            <img src="/mdi_arrow-down-drop.png" />
                        </div>
                    </div>

                    <div className="nav-items-btn-user-img">
                        
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/DescubraEvento" className="nav-link">Descubra um Evento</Link></li>
                            <li className="nav-item"><Link to="/CriarEvento" className="nav-link">Criar um Evento</Link></li>
                        </ul>

                        <div className="user-img">
                            <a href="#" className="profile-img">
                                <img src="/user-img.png" />
                            </a>
                        </div>
                    </div>
                </nav>
        </AreaHeader>
    );
}

export default Header;