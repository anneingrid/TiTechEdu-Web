import NavBarr from "./NavBarr";
import Footerr from "./Footerr";
import "./Vagas.css";
import Lottie from "lottie-react";
import animationData from "./animacaoVaga.json";

export default function Vagas() {
  let listaVagas = [
    {
      linkVaga:
        "https://br.linkedin.com/jobs/view/coordenador-de-ti-palmas-to-at-ultra-apoio-ltda-3649602819?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76Ho4gXpYv-W7PdQVOt_XzbNyJ5z_d61SdLCi&s=0",
      nomeVaga: "Coordenador de TI",
      empresalVaga: "ULTRA APOIO LTDA",
      localVaga: "Palmas, TO",
      descricaoVaga:
        "Atividades Coordenador de TI Suporte técnico e treinamento para sistemas e redes; Comunicação entre a equipe de suporte e usuários internos.",
    },
    {
      linkVaga:
        "https://br.linkedin.com/jobs/view/analista-de-suporte-n%C3%ADvel-1-at-crp-tecnologia-3733651992?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      imagemVaga:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeAhi9wD7JMrPtypoFz049Oe9IKYDZ2aBna-G&s=0",
      nomeVaga: "Analista de Suporte Nível 1",
      empresalVaga: "CRP Tecnologia",
      localVaga: "Palmas, TO",
      descricaoVaga:
        "Estamos em busca de um Analista de Suporte Técnico N1 altamente motivado e qualificado para se juntar à nossa equipe.",
    },
  ];

  return (
    <>
      <NavBarr></NavBarr>
      <div className="vaga-flex">
        <div className="Vagas-animation">
          <Lottie className="animacaoVaga" animationData={animationData} />
          <h1>
            Embarque e<br></br>
            <span className="Explore">Explore</span> novas vagas
          </h1>
        </div>
        <div className="Container">
          <ul className="lista-vagas">
            {listaVagas.map((vaga, index) => (
              <li style={{ "--i": index + 1 }} key={index}>
                <img src={vaga.imagemVaga} />
                <div className="content">
                  <h4>{vaga.nomeVaga}</h4>
                  <p>
                    {vaga.empresalVaga} <span>{vaga.localVaga}</span>
                  </p>
                  <p>{vaga.descricaoVaga}</p>
                </div>
                <div className="container-botao">
                  <a className="button" href={vaga.linkVaga} target="_blank">
                    LER MAIS
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
