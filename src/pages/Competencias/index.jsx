import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContainerPage, TittlePage } from "../../components/Main";

const programmingLanguages = [
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Angular", label: "Angular" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "C++", label: "C++" },
  { value: "C#", label: "C#" },
  { value: "Ruby", label: "Ruby" },
  { value: "Swift", label: "Swift" },
  { value: "PHP", label: "PHP" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "Perl", label: "Perl" },
  { value: "Scala", label: "Scala" },
  { value: "Haskell", label: "Haskell" },
  { value: "Lua", label: "Lua" },
  { value: "Objective-C", label: "Objective-C" },
  { value: "Matlab", label: "Matlab" },
];

const Page = () => {
  // Armazena competências escolhidas
  const [competencias, setCompetencias] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const adicionarCompetencias = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    const novasCompetencias = selectedOptions.map(option => {
      return {
        valor: option.label,
        imagem: obterCaminhoImagem(option.label),
      };
    });

    setCompetencias(novasCompetencias);
  };

  const removerCompetencia = (competencia) => {
    const novasCompetencias = competencias.filter(comp => comp.valor !== competencia.valor);
    setCompetencias(novasCompetencias);

    // Atualiza as opções selecionadas no Select
    const novasOpcoesSelecionadas = selectedOptions.filter(option => option.label !== competencia.valor);
    setSelectedOptions(novasOpcoesSelecionadas);
  };

  return (
    <ContainerPage>

      <TittlePage>
        <div className="wc-text"><p>Agora escolha <strong>5 competências</strong> técnicas que você possui.<br />
          Ah! Não se preocupe, depois você poderá adicionar mais competências ao seu perfil ou removê-las na área de configurações.
        </p>
        </div>
      </TittlePage>

      <main>
        <form id="form2">
          {/* Seção de competências */}
          <section className="competencias-usuario">
            <div className="wrapper">
              <Select
                isMulti
                options={programmingLanguages}
                placeholder="Digite ou selecione as tecnologias..."
                value={selectedOptions} // Define as opções selecionadas
                onChange={(selectedOptions) => {
                  adicionarCompetencias(selectedOptions);
                }}
              />
            </div>
          </section>

          {/* Lista de competências adicionadas */}
          <div id="opcoes-container">
            <ul id="lista-competencias" style={{ listStyleType: 'none', padding: 0 }}>
              {competencias.map((competencia, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    margin: '5px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    borderRadius: '16px',
                  }}
                >
                  <li
                    style={{
                      color: 'white',
                      padding: '5px',
                      width: '200px',
                      height: '200px',
                      position: 'relative',
                      bottom: '5px',
                    }}
                  >
                    {competencia.valor}
                    <img
                      src={competencia.imagem}
                      alt={`Imagem de ${competencia.valor}`}
                      style={{ width: '150px', height: '150px', display: 'block', margin: '10px auto' }}
                    />
                    {/*
                    <button
                      type="button"
                      onClick={() => removerCompetencia(competencia)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <img src="../../../../multiplesign.png" alt="Remover" style={{ width: '15px', height: '15px' }} />
                    </button> */}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className="box-btn-add">
            {/* Botão de adicionar competências removido */}
          </div>

          <div className="actions">
            <Link to="/"> <button type="button" className="buttons" id="btnBack"><img src="../../../setaesquerda.png" alt="Seta" />Voltar</button></Link>
            <button type="submit" className="buttons" id="btnNext" onClick={() => navigate('/Nivelamento', { state: { competencias } })}>
              Avançar<img src="../../../setadireita.png" alt="Seta" />
            </button>
          </div>
        </form>
      </main>
    </ContainerPage>
  );
}

// Função para obter o caminho da imagem com base na competência
const obterCaminhoImagem = (competencia) => {
  const imagensFundo = {
    Java: '../../../../javaimg.png',
    Python: '../../../../pythonimg.webp',
    JavaScript: '../../../../javascript.png',
    React: '../../../../react.png',
    Angular: '../../../../angularimg.png',
    TypeScript: '../../../../typescriptimg.png',
    "C++": '../../../../c++img.png',
    "C#": '../../../../csharpimg.png',
    Ruby: '../../../../rubyimg.png',
  };

  return `/img/${imagensFundo[competencia] || 'default-background.jpg'}`;
}

export default Page;
