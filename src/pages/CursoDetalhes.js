import React, { useEffect, useState } from 'react';
import NavBarr from './NavBarr';
import Footerr from './Footerr';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';

export default function CursoDetalhes() {
  const { id } = useParams();
  const [curso, setCurso] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [concluiuAula, setConcluiuAula] = useState(false);

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


    const buscaCursos = async () => {
      try {
        const response = await fetch('http://localhost:3001/cursos', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Erro na requisição: ${response.status}');
        }

        const data = await response.json();

        setCursos(data);

      } catch (error) {
        alert(error.message);
        console.error('Erro:', error);
      }
    };

    buscaCurso();
    buscaCursos();
  }, [id]);




  const handleConcluirAula = async () => {
    try {
      // Faça uma chamada para a rota no seu backend que lidará com a atualização no Prisma
      await axios.post(`http://localhost:3001/concluirAula/${id}`);
      
      // Atualize o estado local
      setConcluiuAula(true);
    } catch (error) {
      console.error('Erro ao concluir aula:', error.message);
    }
  };
  

  return (
    <>
      <NavBarr />
      
      <Container>
      <h1 className="titleForum mt-5 text-center">Curso de {curso.titulo}
        <Button className='botaoDoc'as={Link} to={curso.doc} target="_blank" rel="noopener noreferrer" variant='dark'>
          <i class="bi bi-file-text-fill"></i> Documentação {curso.categoria}
        </Button></h1>
        <Row>
          <Col md={4}>
            <div className='playlistSection'>
              <h2 className='text-center mt-5 mb-4'>Próximos Vídeos</h2>
              <div className='playlistCursos'>
              {cursos.map(curso => {
                if (curso.status === false) {
                  if (curso.id !== parseInt(id)) {
                    return (
                      <Card key={curso.id} className='mb-3 cardPlaylist' style={{width: '24rem'}}>
                        <Card.Body><Link to={`/cursos/${curso.id}`} className='text-decoration-none text-white '> <i class="bi bi-play-circle"></i> {curso.titulo}</Link></Card.Body>
                      </Card>

                    )
                  }
                }
              })}
            </div>
            </div>
          </Col>
          <Col md={8}>
            <div className='iframe mt-5'>
              <ReactPlayer url={curso.video} />
            </div>

          </Col>
        </Row>
      </Container>
      <Footerr />
    </>
  );
}

