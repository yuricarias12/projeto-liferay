import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [competencias, setCompetencias] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [estaSelecionado, setSelecionado] = useState(false);
  const navigate = useNavigate();

  const adicionarCompetencias = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    const novasCompetencias = selectedOptions.map((option) => {
      return {
        valor: option.label,
        imagem: obterCaminhoImagem(option.label),
      };
    });

    setCompetencias(novasCompetencias);
    setSelecionado(novasCompetencias.length > 0); // Define como true se houver pelo menos uma competência
  };

  const removerCompetencia = (competencia) => {
    const novasCompetencias = competencias.filter(
      (comp) => comp.valor !== competencia.valor
    );
    setCompetencias(novasCompetencias);

    const novasOpcoesSelecionadas = selectedOptions.filter(
      (option) => option.label !== competencia.valor
    );
    setSelectedOptions(novasOpcoesSelecionadas);

    setSelecionado(novasCompetencias.length > 0); // Define como true se houver pelo menos uma competência
  };

  return (
    <ContainerPage>
      <TittlePage>
        <div className="wc-text">
          <p>
            Agora escolha ao menos <strong>uma competência</strong> técnica que
            você possui para avançar.
            <br />
            Ah! Não se preocupe, depois você poderá adicionar mais competências
            ao seu perfil <br /> ou removê-las na área de configurações.
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
                value={selectedOptions}
                onChange={(selectedOptions) => {
                  adicionarCompetencias(selectedOptions);
                }}
              />
            </div>
          </section>

          {/* Lista de competências adicionadas */}
          <div id="opcoes-container">
            <ul
              id="lista-competencias"
              style={{ listStyleType: "none", padding: 0 }}
            >
              {competencias.map((competencia, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    margin: "5px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    borderRadius: "16px",
                  }}
                >
                  <li
                    style={{
                      color: "white",
                      padding: "5px",
                      width: "200px",
                      height: "200px",
                      position: "relative",
                      bottom: "5px",
                    }}
                  >
                    {competencia.valor}
                    <img
                      src={competencia.imagem}
                      alt={`Imagem de ${competencia.valor}`}
                      style={{
                        width: "150px",
                        height: "150px",
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="actions">
            <Link to="/PrimeiroAcesso">
              <button type="button" className="buttons" id="btnBack">
                <img src="../../../setaesquerda.png" alt="Seta" />
                Voltar
              </button>
            </Link>

            <button
              type="button"
              className="buttons"
              id="btnNext"
              disabled={!estaSelecionado}
              onClick={() =>
                navigate("/Nivelamento", { state: { competencias } })
              }
            >
              Avançar
              <img src="../../../setadireita.png" alt="Seta" />
            </button>
          </div>
        </form>
      </main>
    </ContainerPage>
  );
};

const obterCaminhoImagem = (competencia) => {
  const imagensFundo = {
    Java: "../../../../javaimg.png",
    Python: "../../../../pythonimg.webp",
    JavaScript: "../../../../javascript.png",
    React: "../../../../react.png",
    Angular: "../../../../angularimg.png",
    TypeScript: "../../../../typescriptimg.png",
    "C++": "../../../../c++img.png",
    "C#": "../../../../csharpimg.png",
    Ruby: "../../../../rubyimg.png",
    Swift: "../../../../Swift.png",
    PHP: "../../../../php.png",
    Kotlin: "../../../../kotlin.png",
    Go: "../../../../golang.png",
    Rust: "../../../../rust.png",
    Perl: "../../../../perl.png",
    Scala: "../../../../scala.png",
    Haskell: "../../../../haskell.png",
    Lua: "../../../../lua.png",
    "Objective-C": "../../../../objectivec.jpg",
    Matlab: "../../../../matlab.png",
  };

  return `/img/${imagensFundo[competencia] || "default-background.jpg"}`;
};

export default Page;
