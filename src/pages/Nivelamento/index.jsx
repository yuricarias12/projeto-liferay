import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ContainerPage, TittlePage } from "../../components/Main";

const Nivelamento = () => {

  const location = useLocation();
  const competencias = location.state?.competencias || [];

  // Estados para armazenar níveis selecionados e controle do botão "Finalizar"
  const [nivelSelecionado, setNivelSelecionado] = useState({});
  const [finalizarClicado, setFinalizarClicado] = useState(false);
  const [estaSelecionado, setSelecionado] = useState(false); // Adicionado para controlar se pelo menos um nível foi selecionado

  // Função para lidar com a mudança de nível para uma competência específica
  const handleNivelChange = (index, novoNivel) => {
    setNivelSelecionado((prev) => ({ ...prev, [index]: novoNivel }));
  };

  // Função para verificar se pelo menos um nível foi selecionado
  const verificarNiveisSelecionados = () => {
    const niveisSelecionados = Object.values(nivelSelecionado);
    return niveisSelecionados.some((nivel) => nivel !== ""); // Retorna true se pelo menos um nível não for vazio
  };

  const handleFinalizarClick = (e) => {
    // Verifica se pelo menos uma opção não foi selecionada antes de permitir a navegação
    const algumaOpcaoNaoSelecionada = competencias.some(
      (_, index) => !nivelSelecionado[index]
    );

    if (algumaOpcaoNaoSelecionada) {
      e.preventDefault(); // Impede a navegação se alguma opção não estiver selecionada
      alert("Por favor, selecione os níveis antes de finalizar.");

    }

  };

  // Adicionado para atualizar o estado "estaSelecionado" quando houver mudança nos níveis selecionados
  React.useEffect(() => {
    setSelecionado(verificarNiveisSelecionados());
  }, [nivelSelecionado]);

  return (
    <ContainerPage>
      <TittlePage>
        <div className="wc-text">
          <p>
            Agora para finalizar, nos informe em que <strong>nível</strong> você
            se encontra em cada tecnologia selecionada:
          </p>
        </div>
      </TittlePage>

      {/* Estilo dos itens de nivelamento para cada competência */}
      <div
        className="nivelamento-page"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {competencias.map((competencia, index) => (
          <div
            className="nivelamento-items"
            key={index}
            style={{
              margin: "10px",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "220px",
              height: "220px",
              margin: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: "16px",
            }}
          >
            {/* Exibe a imagem da competência */}
            <img
              src={competencia.imagem}
              alt={`Imagem de ${competencia.valor}`}
              style={{ width: "150px", height: "150px", display: "block" }}
            />
            {/* Seleção do nível para a competência */}
            <select
              id="selectValue"
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              value={nivelSelecionado[index] || ""}
              onChange={(e) => handleNivelChange(index, e.target.value)}
              style={{ marginTop: "10px", width: "65%" }}
            >
              <option value="" data-default disabled selected>
                Selecione...
              </option>
              <option value="Master">Master</option>
              <option value="Leader">Leader</option>
              <option value="Teacher">Teacher</option>
              <option value="Professional">Professional</option>
              <option value="Practitioner">Practitioner</option>
              <option value="Apprentice">Apprentice</option>
              <option value="Beginner">Beginner</option>
            </select>
          </div>
        ))}
      </div>

      <div className="actions">
        <Link to="/Competencias">
          <button type="button" className="buttons" id="btnBack">
            <img src="../../../setaesquerda.png" alt="Seta" />
            Voltar
          </button>
        </Link>

        <Link to="/TelaInicial">
          <button
            onClick={handleFinalizarClick}
            type="button"
            className="buttons"
            id="btnFinalizar"
          >
            Finalizar <img src="../../../finish.png" alt="V" />{" "}
          </button>
        </Link>
      </div>
    </ContainerPage>
  );
};

export default Nivelamento;
