import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarr from './NavBarr';
import Footerr from './Footerr';

export default function Perfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const buscaUsuario = async () => {
      try {
        const usuarioId = localStorage.getItem("userId");
        const id = parseInt(usuarioId);
  
        const response = await fetch('http://localhost:3001/usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
  
        if (!response.ok) {
          throw new Error('Erro na resposta do servidor');
        }
  
        const data = await response.json();
  
        setUsuario(data.nomeUsuario);
        setNome(data.nomeUsuario);
        setEmail(data.emailUsuario);
        setSenha(data.senhaUsuario);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };
  
    buscaUsuario();
  }, []);
  

  const alteraUsuario = async () => {
    try {
      const response = await fetch(`http://localhost:3001/usuarioAltera`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id : usuario.id , nome: usuario.nome, email: usuario.email}),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  };

  const deletaUsuario = async () => {
  try {
    const response = await fetch(`http://localhost:3001/usuarioDeleta/${usuario.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
  }
};


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sair = () => {
    localStorage.removeItem('userId');
    navigate('/');
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
                  placeholder={`${nome}`}
                  type="text"
                  className="form-input"
                  name="nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formSenha">
                <Form.Label className="form-label">Senha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${senha}`}
                  className="form-input"
                  name="Senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
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
                >
                  <option value="portuguese">Português</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formGridCity">
                <Form.Label className="form-label">E-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${email}`}
                  className="ms-2"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Row className="mt-3">
          <Col xs={12} md={6}>
            <Button variant="success" onClick={alteraUsuario}> Salvar Alteração </Button>
            <Button variant="danger" onClick={handleShow}> Encerrar conta </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Encerrar conta</Modal.Title>
              </Modal.Header>
              <Modal.Body>Acabou, não tem mais jeito!</Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Continuar com a conta
                </Button>
                <Button variant="danger" onClick={deletaUsuario}>
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
