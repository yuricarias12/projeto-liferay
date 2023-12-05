import React from "react";
import { Link } from 'react-router-dom';

import { ContainerPage, TittlePage } from "../../components/Main";



const Page = () => {



    return (
        <ContainerPage>
            <TittlePage>
                <div className="wc-text">
                    <h3><strong>Principais Eventos</strong></h3>
                </div>
            </TittlePage>


            <div id="text-div">

                <div id="filter">
                    <img src="../../../filter.png" alt="Seta" />
                    <button id="btn-filter">Filtrar</button>
                </div>
            </div>

            <section className="principais-eventos">

                <div className="lista-eventos1">

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../java.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../scrum.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>



                </div>



                <div className="lista-eventos2">

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <img src="../../../CSS3.png" alt="CSS3" />
                        </div>
                        <div class="category"> Illustration </div>
                        <div class="heading"> A heading that must span over two lines
                            <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
                        </div>
                    </div>



                </div>






            </section>
        </ContainerPage>
    );
}

export default Page;
