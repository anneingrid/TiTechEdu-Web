import NavBarr from "./NavBarr";
import Footerr from "./Footerr";
import "./Vagas.css";
import Lottie from "lottie-react";
import animationData from "./animacaoVaga.json";

export default function Vagas() {
  let listaVagas = [
    {
      linkVaga:
        "https://br.linkedin.com/jobs/view/desenvolvedor-front-end-wordpress-home-office-at-netvagas-3769151403?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FT1TjjfButeY0KVylqZuN4gHoSrFsfPP10cG5Zk&s",
      nomeVaga: "Desenvolvedor front end wordpress home office",
      empresalVaga: "Netvagas",
      localVaga: "Qualquer lugar",
      descricaoVaga:
        "Formação em Sistemas de Informação ou áreas correlacionadas. Domínio de HTML, CSS e JavaScrip...",
    },
    {
      linkVaga:
        "https://glassdoor.com.br/job-listing/analista-de-ti-sistemas-mainframe-volkswagen-do-brasil-JV_IC2481826_KO0,33_KE34,54.htm?jl=1008985241412&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfirdFS0HQDyBKLzWv_1uCGHplDMhzkd3Dq9FVgg&s",
      nomeVaga: "Analista de TI - Sistemas Mainframe",
      empresalVaga: "Volkswagen do Brasil",
      localVaga: "Qualquer lugar",
      descricaoVaga:
        "O candidato será responsável técnico pelos Sistemas Mainframe da Volkswagen do Brasil por meio de análise... ",
    },
    {
      linkVaga:
        "https://www.turing.com/pt/jobs/desenvolvedor-c-remoto?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organicgit",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rGChs-3HBqRPulfLo4-_2uO_gWol6U1OAmgb01Y&s",
      nomeVaga: "Vagas C | Ganhe em Dólar | Turing Jobs",
      empresalVaga: "Turing.com",
      localVaga: "Qualquer lugar",
      descricaoVaga:
        "Nós, da Turing, estamos procurando preencher vagas C, onde os desenvolvedores experientes irão projetar...",
    },
    {
      linkVaga:
        "https://glassdoor.com.br/job-listing/it-analyst-i-santander-JV_IC2479061_KO0,12_KE13,22.htm?jl=1008986354942&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGRL6TADuPskUdE8bPj8SykM-PlbiVEaiQvuhl2s&s",
      nomeVaga: "IT Analyst I",
      empresalVaga: "Santander",
      localVaga: "Qualquer lugar",
      descricaoVaga:
        "Fazemos parte do maior banco Internacional do Brasil, um dos maiores bancos do mundo...",
    },
  ];

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
                  src={vaga.imagemVaga}
                  alt="Imagem da empresa da Vaga"
                  className="vagas-imagem"
                />
                <div className="content">
                  <h4 className="vaga-titulo">{vaga.nomeVaga}</h4>
                  <p className="vaga-texto">
                    {vaga.empresalVaga} <span>{vaga.localVaga}</span>
                  </p>
                  <p className="vaga-descricao">{vaga.descricaoVaga}</p>
                </div>
                <div className="vagas-container-botao">
                  <a
                    className="vagas-button"
                    href={vaga.linkVaga}
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
