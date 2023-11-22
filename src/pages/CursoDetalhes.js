import React, { useEffect, useState } from 'react';
import NavBarr from './NavBarr';
import Footerr from './Footerr';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
      <Container>
        <Row className='my-3 d-flex justify-content-center align-items-center'>
          <Col md={8}>
            <h1 className='titleForum'>{curso.titulo}</h1>
          </Col>
          <Col md={2}>
            <Link className='botaoDoc align-items-center' to='/exercicios' rel="noopener noreferrer">
              <i className="bi bi-clipboard-check"></i>Exercícios
            </Link>
          </Col><Col md={2}>
            <Link className='botaoDoc align-items-center' as={Link} to={curso.doc} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-file-earmark-text"></i>Docs <b>{curso.categoria}</b>
            </Link>
          </Col>

        </Row>

        
       

      </Container>
      <Container className='iframe py-2' fluid style={{backgroundColor:'#041017'}}>
          <ReactPlayer url={curso.video} />
        </Container>
      <Footerr />
    </>
  );
}

