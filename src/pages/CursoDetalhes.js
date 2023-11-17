import React, { useEffect, useState } from 'react';
import NavBarr from './NavBarr';
import Footerr from './Footerr';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

export default function CursoDetalhes() {
  const { id } = useParams();
  const [curso, setCurso] = useState([]);

  useEffect(() => {
      const buscaCurso = async () => {
          try {
              const response = await fetch('http://localhost:3001/curso', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ id }),
              });

              if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.message || 'Erro na requisição');
              }

              const data = await response.json();
              setCurso(data);

          } catch (error) {
              alert(error.message);
          }
      };

      buscaCurso();
  }, [id]);

  return (
    <>
      <NavBarr />
      <h1 className='detalhesCurso'>Curso de {curso.titulo}
        <Button className='botaoDoc' as={Link} to={curso.doc} target="_blank" rel="noopener noreferrer">
          📄Documentação {curso.categoria}
        </Button></h1>
      <Container>
        <div className='iframe'>
        <ReactPlayer url={curso.video} />
        </div>
          <h3 className='transcricaoCurso'>Transcrição</h3>
        </Container>
      <Footerr />
    </>
  );
}

