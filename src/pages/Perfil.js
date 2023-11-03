import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import Footerr from './Footerr';
import NavBarr from './NavBarr';


export default function Perfil() {
    return (
        <>
            <NavBarr></NavBarr>
            <h3>Home/Perfil</h3>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image
                            src="https://via.placeholder.com/200"
                            roundedCircle
                            className="perfil-image" 
                        />
                    </Col>
                </Row>
            </Container>

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formNome">
                        <Form.Label className="form-label">Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" className="form-input" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSobrenome">
                        <Form.Label className="form-label">Sobrenome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu sobrenome" className="form-input" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formIdioma">
                    <Form.Label className="form-label">Idioma</Form.Label>
                    <Form.Select className="form-input">
                        <option value="portuguese">Português</option>
                        <option value="english">English</option>
                        <option value="spanish">Español</option>
                    </Form.Select>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className="form-label">Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Digite sua cidade" className="form-input" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="form-label">Estado</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu estado" className="form-input" />
                    </Form.Group>
                </Row>
            </Form>
            <Footerr></Footerr>
        </>
    );
}
