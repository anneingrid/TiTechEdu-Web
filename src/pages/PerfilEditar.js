import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarr from './NavBarr';
import Footerr from './Footerr';

export default function PerfilEditar() {
  const navigate = useNavigate();
  const [id, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const buscaUsuario = async () => {
      const usuarioId = localStorage.getItem("userId");
      const id = parseInt(usuarioId);

      const response = await fetch('http://localhost:3001/usuarioPerfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
          }
          return response.json();
        })
        .then(data => {
          setUsuario(data.usuario.id);
          setNome(data.usuario.nome);
          setEmail(data.usuario.email);
          setSenha(data.usuario.senha);
          console.log(data.usuario.nome);
        })
        .catch((error) => {
          alert(error.message);
        });
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
        body: JSON.stringify({ id: id, nome: nome, email: email, senha: senha }),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  };



  

  return (
    <>
      <NavBarr />
      
      <Container className="perfil-container">
      <Button
                        className="mt-3"
                        variant="outline-light"
                        href="/perfil"
                        style={{
                            fontSize: 25,
                            cursor: 'pointer',
                            borderRadius: '100%',
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </Button>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={4} className="text-center">
            <div >
            <i class="bi bi-person-circle text-white" style={{ fontSize: '200px', color: '#02080e' }}></i>
              
              
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
                  placeholder='*****'
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
                  
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Row className="mt-3 d-flex justify-content-end">
          <Col xs={12} className="d-flex justify-content-end">
            <Button  style={{backgroundColor:'#0a253f'}} className='text-white 'onClick={alteraUsuario}> Salvar Alteração </Button>
          </Col>
        </Row>
      </Container>

      <Footerr />
    </>
  );
}
