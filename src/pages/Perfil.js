import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarr from './NavBarr';
import Footerr from './Footerr';

export default function Perfil() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState({
    id: '',
    nome: '',
    sobrenome: '',
    idioma: 'portuguese',
    email: '',
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const sair = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  // ...

const salvarAlteracoes = async () => {
  try {
    const idUsuario = localStorage.getItem('userId');

    const response = await fetch(`http://localhost:3001/perfil`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: idUsuario, ...perfil }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Perfil atualizado com sucesso:', data);
  } catch (error) {
    console.error('Erro ao atualizar o perfil:', error.message);
  }
};


  return (
    <>
      <NavBarr />
      <h3>Home/Perfil</h3>
      <Container className="perfil-container">
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={4} className="text-center">
            <div className="box">
              <img
                src="https://assets.propmark.com.br/uploads/2023/02/13DanielOliveira-1.png"
                alt="foto de perfil"
                style={{ width: '300px', height: '300px' }}
              />
              <label htmlFor="upload">Upload foto</label>
              <input type="file" id="upload" className="input-upload" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="perfil-container">
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formNome">
                <Form.Label className="form-label">Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  className="form-input"
                  name="nome"
                  value={perfil.nome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formSobrenome">
                <Form.Label className="form-label">Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu sobrenome"
                  className="form-input"
                  name="sobrenome"
                  value={perfil.sobrenome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formIdioma">
                <Form.Label className="form-label">Idioma</Form.Label>
                <Form.Select
                  className="form-input"
                  name="idioma"
                  value={perfil.idioma}
                  onChange={handleChange}
                >
                  <option value="portuguese">Português</option>
                  <option value="english">English</option>
                  <option value="spanish">Español</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formGridCity">
                <Form.Label className="form-label">E-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu E-mail"
                  className="form-input"
                  name="email"
                  value={perfil.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Row className="mt-3">
          <Col xs={12} md={6}>
            <Button variant="success" onClick={salvarAlteracoes}>
              Salvar Alteração
            </Button>
            <Button variant="danger" onClick={handleShow}>
              Encerrar conta
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Encerrar conta</Modal.Title>
              </Modal.Header>
              <Modal.Body>Acabou, não tem mais jeito!</Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Continuar com a conta
                </Button>
                <Button variant="danger" onClick={sair}>
                  Encerrar com a Conta
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col xs={12} md={6}>
            <Button variant="danger" onClick={sair}>
              Sair da Conta
            </Button>
          </Col>
        </Row>
      </Container>

      <Footerr />
    </>
  );
}
