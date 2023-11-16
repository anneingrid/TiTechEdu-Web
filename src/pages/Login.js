import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import animationData from './animacaoLoginCadastro.json';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigate();

    const salvar = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        })
            .then(async response => {
                const data = await response.json(); // 
                if (!response.ok) {
                    throw new Error(data.message || 'Erro no login');
                }
                return data;
            })
            .then((data) => {
                localStorage.setItem('userId', data.idUsuario);
                navegacao('/home');
            })
            .catch((error) => {
                alert(error.message);
            });

    }

    return (
        <Row className="vh-100 m-0">
            <Col md={6} sm={12} className="d-flex align-items-center justify-content-center bg-white">
                <Container className='d-flex justify-content-center'>
                    <Form className='text-center' onSubmit={salvar}>
                        <h2>LOGIN</h2>
                        <h6 className='my-3'>Realize seu login agora!</h6>
                        <Form.Group controlId="formEmail">
                            <Form.Control className='caixaTexto mb-3'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control className='caixaTexto'
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} />
                        </Form.Group>
                        <Button className="botao mt-4" variant="primary" type="submit" >
                            ENTRAR
                        </Button>
                        <div className='mt-3 fw-bold'>Não tem conta?</div>
                        <Link to='/cadastro' className='text-black'>Criar conta</Link>
                    </Form>
                </Container>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <Lottie className='animacaoTamanho' animationData={animationData} />
            </Col>
        </Row>
    );
}

export default Login;
