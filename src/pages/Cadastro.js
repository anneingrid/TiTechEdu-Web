import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import animationData from './animacaoLoginCadastro.json';
import Lottie from "lottie-react";

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();

    const salvar = (event) => {
        event.preventDefault();
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
        } else {
            fetch('http://localhost:3001/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, senha }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Email já cadastrado.');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    navigate('/escolhas');
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    };

    return (
        <Row className="vh-100 m-0">
            <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
                <Container className='d-flex justify-content-center'>
                    <Form className='text-center' onSubmit={salvar}>
                        <h2>CADASTRO</h2>
                        <h6 className='my-3'>Realize seu cadastro agora!</h6>
                        <Form.Group controlId="formName">
                            <Form.Control className='caixaTexto mb-3'
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Control className='caixaTexto mb-3'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control className='caixaTexto mb-3'
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword"> {/* Mude o ID para ser único */}
                            <Form.Control className='caixaTexto mb-3'
                                type="password"
                                placeholder="Confirmar senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)} />
                        </Form.Group>
                        <Link to='/'>
                            <Button className="botaoCancelar mt-4 me-5" variant='danger' type="submit" >
                                CANCELAR
                            </Button>
                        </Link>
                        <Button className="botao mt-4" type="submit" >
                            CADASTRAR
                        </Button>
                    </Form>
                </Container>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <Lottie className='animacaoTamanho' animationData={animationData} />
            </Col>
        </Row>
    );
}

export default Cadastro;
