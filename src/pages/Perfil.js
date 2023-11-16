import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import Footerr from './Footerr';
import NavBarr from './NavBarr';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Perfil() {
    const navigate = useNavigate();

    function sair() {
        localStorage.removeItem('userId');
        navigate('/');
    }

    return (
        <>
            <NavBarr></NavBarr>
            <h3>Home/Perfil</h3>
            <Container className="perfil-container">
                <Row className="justify-content-center align-items-center">
                    <Col xs={6} md={4} className="text-center">
                        <Image
                            src="https://via.placeholder.com/200"
                            roundedCircle
                            className="perfil-image"
                        />
                    </Col>
                </Row>
            </Container>

            <Container className="perfil-container">
                <Form>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formNome">
                                <Form.Label className="form-label">Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" className="form-input" />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formSobrenome">
                                <Form.Label className="form-label">Sobrenome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu sobrenome" className="form-input" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formIdioma">
                                <Form.Label className="form-label">Idioma</Form.Label>
                                <Form.Select className="form-input">
                                    <option value="portuguese">Português</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Español</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formGridCity">
                                <Form.Label className="form-label">Cidade</Form.Label>
                                <Form.Control type="text" placeholder="Digite sua cidade" className="form-input" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row className="mt-3">
                    <Col xs={12} md={6}>
                        <Button variant="success">Salvar Alteração</Button>
                    </Col>

                    <Col xs={12} md={6}>
                        <Button variant="danger" onClick={sair}>Sair da Conta</Button>
                    </Col>
                </Row>
            </Container>

            <Footerr></Footerr>
        </>
    );
}
