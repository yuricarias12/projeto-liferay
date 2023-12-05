import React from "react";

import { AreaFooter } from './styled';

function Footer() {

    return (
        <AreaFooter>
            <div className="footer-area">
                <div className="footer-info">

                    <div className="current-language">
                        <img src="../../../glob.png" alt="globo" />
                        <span>Português</span>
                    </div>

                    <ul>
                        <h3>Platform</h3>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/resources">Biblioteca de Documentos</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/subscription-services">Subscription
                            Services</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/request-a-demo">Solicitar uma Demo</a></li>
                        <li className="nav-menu-item"><a
                            href="https://marketplace.liferay.com/?_ga=2.189048232.2004875729.1696619539-1744529282.1694543426&_gac=1.190250329.1696253436.Cj0KCQjw1OmoBhDXARIsAAAYGSGHWli4U2YTVV-qK7ABjkL4BwqyGLn6SMZgQrw7e0XD0F-x1-mAyF8aAt9zEALw_wcB">Apps
                            do Marketplace</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/products/dxp/30-day-trial">Trial 30 Dias</a>
                        </li>
                    </ul>

                    <ul>
                        <h3>Sobre a empresa</h3>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/press-releases/-/categories/18021">Press
                            Releases</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/careers">Carreiras</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/gdpr">GDPR</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/company/our-story">Nossa História</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/compliance">Compilance</a></li>
                        <li className="nav-menu-item"><a href="https://www.liferay.com/pt/legal">Legal</a></li>
                    </ul>

                    <ul>
                        <h3>Expand & Connect</h3>
                        <li className="nav-menu-item"><a href="https://liferay.dev/">Comunidade</a></li>
                        <li className="nav-menu-item"><a href="https://liferay.dev/">Rede de Desenvolvedores</a></li>
                        <li className="nav-menu-item"><a href="https://marketplace.liferay.com/">Marketplace</a></li>
                        <li className="nav-menu-item"><a href="https://login.liferay.com/">Login/Criar conta</a></li>
                    </ul>

                    <ul>
                        <div className="redes-sociais">
                            <li><a href="https://www.facebook.com/liferay/"><img src="../../../facebook.png" alt="Facebook" /></a></li>
                            <li><a href="https://github.com/liferay"><img src="../../../github.png" alt="Github" /></a></li>
                            <li><a href="https://www.instagram.com/liferayinc/"><img src="../../../instagram.png" alt="Instagram" /></a>
                            </li>
                            <li><a href="https://www.linkedin.com/company/liferay-inc-/"><img src="../../../linkedin.png"
                                alt="Linkedin" /></a></li>
                            <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fliferay"> <img
                                src="../../../twitter.png" alt="Twitter" /></a></li>
                            <li><a href="https://www.youtube.com/user/liferayinc"><img src="../../../youtube.png" alt="Youtube" /></a>
                            </li>
                        </div>

                        <div className="contact">
                            <div className="call-center">
                                <a href="https://www.liferay.com/pt/contact-us">
                                    <h4>Fale Conosco</h4>
                                </a>
                            </div>
                            <p id="addRess">Rua dos ARCOS, Nº 160<br />
                                Recife, PE 52061-180<br />
                                Brasil<br />
                                +55 81 2121-6000</p>
                        </div>
                    </ul>
                </div>

                <div className="by-lf">
                    <p>Powered by Liferay</p>
                    <p>© 2023 Liferay Inc. Todos os Direitos Reservados</p>
                    <a href="https://www.liferay.com/pt/privacy-policy">Política de Privacidade</a>
                </div>
            </div>

        </AreaFooter>
    );
}

export default Footer;