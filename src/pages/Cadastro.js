import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <Row className="vh-100">
            <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
                <Container className='d-flex justify-content-center'>
                    <Form className='text-center'>
                        <h2>CADASTRO</h2>
                        <h6 className='my-3'>Realize seu cadastro agora!</h6>
                        <Form.Group controlId="formName">
                            <Form.Control className='caixaTexto mb-3' type="text" placeholder="Nome" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Control className='caixaTexto mb-3' type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control className='caixaTexto mb-3' type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control className='caixaTexto' type="password" placeholder="Confirmar senha" />
                        </Form.Group>
                        <Link to='/'>
                            <Button className="botaoCancelar mt-4 me-5" variant='danger' type="submit" >
                                CANCELAR
                            </Button>
                        </Link>
                        <Link to='/home'>
                            <Button className="botao mt-4" type="submit" >
                                CADASTRAR
                            </Button>
                        </Link>
                    </Form>
                </Container>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <img src="/logo.png" alt="Descrição da imagem" />
            </Col>
        </Row>
    );
}

export default Cadastro;
