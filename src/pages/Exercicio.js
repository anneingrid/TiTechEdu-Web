import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px', // Adicionado espaçamento interno para não encostar nas bordas
};

const arrowButtonStyle = {
  position: 'absolute',
  top: '20px', // Ajustado o posicionamento vertical para não encostar na parte superior
  left: '20px', // Ajustado o posicionamento horizontal para não encostar na parte esquerda
};

const iframeContainerStyle = {
  width: '100%',
  maxWidth: '800px',
  overflowY: 'auto', // Adicionado estilo para a barra de rolagem vertical
};

const exerciciosLinks = {
    1: 'https://docs.google.com/forms/d/e/1FAIpQLSebdu6IVNWbjifAs8w3Z5CL9cPb4Ooj0vov-Y5RyUhbzpSMKA/viewform?embedded=true',
    2: 'https://docs.google.com/forms/d/e/1FAIpQLSef0WIfFj2m9cE02UMvBeVO4ipOgQKx2pXwp2uM8moOrwGDGQ/viewform?embedded=true',
    3: 'https://docs.google.com/forms/d/e/1FAIpQLSfA_RNVsKkuoQBTX1iHGSRZqO59Nn8aBmEVpvEXVCjKesYzrA/viewform?embedded=true',
    4: 'https://docs.google.com/forms/d/e/1FAIpQLSfIIBL-VMczK8cVQLOYMd7dAW3tvVi7-MMpZ-KSu9-W_uIEJA/viewform?embedded=true',
    5: 'https://docs.google.com/forms/d/e/1FAIpQLSeHsTkOYEGd7i0ILQ4lJopIm2A4bIUs6QNSWbIfKqAT2wuXmA/viewform?embedded=true',
    6: 'https://docs.google.com/forms/d/e/1FAIpQLSeaWqkYr1MSVtbl72qXNC4-55aGp0zVBi9BHbhgVMHfwnkVaw/viewform?embedded=true',
    7: 'https://docs.google.com/forms/d/e/1FAIpQLSfij2YitgeSC7Rg6uyz2OqCxJUUz4JYb2AjL-SMWb21ZqgSig/viewform?embedded=true',
    8: 'https://docs.google.com/forms/d/e/1FAIpQLSdigLfh-qrC3wxuL740wm09tr-LP-SeFPzAKEkvsTJVA8ZLEw/viewform?embedded=true',
    9: 'https://docs.google.com/forms/d/e/1FAIpQLScxcVen_jO2gn8Xw4woez_FxlDCpiZOREA-fNsUDIszIG6Ojg/viewform?embedded=true',
    // Adicione mais links conforme necessário
};

export default function Exercicio() {
  const { exercicioId } = useParams();

  const linkDoExercicio = exerciciosLinks[exercicioId];

  return (
    <div style={divStyle}>
      <Link to="/exercicios">
        <Button id="btn-arrow-left" variant="primary" className="btn-arrow-left" style={arrowButtonStyle}>
          <i className="bi bi-arrow-left"></i>
        </Button>
      </Link>

      <div style={iframeContainerStyle}>
        {linkDoExercicio ? (
          <iframe
            id="seu-iframe-id"
            src={linkDoExercicio}
            width="100%"
            height="900px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Carregando…
          </iframe>
        ) : (
          <p>Exercício não encontrado.</p>
        )}
      </div>
    </div>
  );
}