import NavBarr from "./NavBarr";
import Footerr from "./Footerr";
import "./Vagas.css";
import Lottie from "lottie-react";
import animationData from "./animacaoVaga.json";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Vagas() {
  const [listaVagas, setListaVagas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/jobs")
      .then((response) => {
        setListaVagas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
      });
  }, []);

  if (listaVagas.length === 0) return <div>Carregando...</div>;

  return (
    <>
      <NavBarr></NavBarr>
      <div className="vaga-flex">
        <div className="Vagas-animation">
          <Lottie className="animacaoVaga" animationData={animationData} />
          <h1 className="vagas-titulo">
            Embarque e<br></br>
            <span className="Explore">Explore</span> novas vagas
          </h1>
        </div>
        <div className="vagas-container">
          <ul className="lista-vagas">
            {listaVagas.map((vaga, index) => (
              <li style={{ "--i": index + 1 }} key={index}>
                <img
                  src={vaga.imageURL}
                  alt="Imagem da empresa da Vaga"
                  className="vagas-imagem"
                />
                <div className="content">
                  <h4 className="vaga-titulo">{vaga.title}</h4>
                  <p className="vaga-texto">
                    {vaga.nameCompany} <span>{vaga.location}</span>
                  </p>
                  <p className="vaga-descricao">{vaga.description}</p>
                </div>
                <div className="vagas-container-botao">
                  <a
                    className="vagas-button"
                    href={vaga.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sobre
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footerr></Footerr>
    </>
  );
}
