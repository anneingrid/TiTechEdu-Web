import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Row className="vh-100">
            <Col md={6} sm={12} className="d-flex align-items-center justify-content-center bg-white">
                <Container className='d-flex justify-content-center'>
                    <Form className='text-center'>
                        <h2>LOGIN</h2>
                        <h6 className='my-3'>Realize seu login agora!</h6>
                        <Form.Group controlId="formEmail">
                            <Form.Control className='caixaTexto mb-3' type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control className='caixaTexto' type="password" placeholder="Senha" />
                        </Form.Group>
                        <Link to='/home'>
                            <Button className="botao mt-4" variant="primary" type="submit" >
                                ENTRAR
                            </Button>
                        </Link>
                        <div className='mt-3 fw-bold'>Não tem conta?</div>
                        <Link to='/cadastro' className='text-black'>Criar conta</Link>
                    </Form>
                </Container>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <img src="/logo.png" alt="Descrição da imagem" />
            </Col>
        </Row>
    );
}

export default Login;
