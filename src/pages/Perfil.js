import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarr from './NavBarr';
import Footerr from './Footerr';

export default function Perfil() {
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
                src="https://www.palmeiras87fm.com.br/wp-content/uploads/2022/11/ana-castela-celso-tavares-g1-4-de-18-b-scaled.jpg"
                alt="foto de perfil"
                style={{ width: '300px', height: '300px' }}
              />
              <label htmlFor="upload" >Upload foto</label>
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
            <Button  style={{backgroundColor:'#0a253f'}} className='text-white'onClick={alteraUsuario}> Salvar Alteração </Button>
          </Col>

          <Col xs={12} md={6}>
            <Button variant="danger" onClick={sair}> Sair da Conta </Button>
          </Col>
        </Row>
      </Container>

      <Footerr />
    </>
  );
}
