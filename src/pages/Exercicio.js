import React from 'react';
import { useParams } from 'react-router-dom';

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Defina a altura da tela inteira
  };

export default function Exercicio() {
    const { exercicioId } = useParams();
  
    return (
      <div style={divStyle}>
        <h1>Exercício {exercicioId}</h1>
        {/* Adicione o conteúdo do exercício aqui */}
        
        {/* Cole o código de incorporação do Google Forms aqui */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebdu6IVNWbjifAs8w3Z5CL9cPb4Ooj0vov-Y5RyUhbzpSMKA/viewform?embedded=true" 
        width="1350" 
        height="800" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        Carregando…
        </iframe>
      </div>
    );
  }