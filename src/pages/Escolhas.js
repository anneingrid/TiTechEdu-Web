import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import animationData from './animacaoEscolhas.json';
import Lottie from "lottie-react";

function Escolhas() {
    const [interesse1, setInteresse1] = useState('');
    const [interesse2, setInteresse2] = useState('');
    const [interesse3, setInteresse3] = useState('');
    const [interesse4, setInteresse4] = useState('');
    const [interesse5, setInteresse5] = useState('');
    const [interesse6, setInteresse6] = useState('');
    const [interesse7, setInteresse7] = useState('');
    const [interesse8, setInteresse8] = useState('');
    const [interesse9, setInteresse9] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const navegacao = useNavigate();

    const salvar = (event) => {
        event.preventDefault();
        const usuario = localStorage.getItem("userId")
        fetch('http://localhost:3001/preferencia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ interesse1, interesse2, interesse3, interesse4, interesse5, interesse6, interesse7, interesse8, interesse9, experiencia, usuario }),
        })
            .then(data => {
                console.log('Success:', data);
                navegacao('/home');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <Row className="vh-100 m-0">
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <Lottie className='animacaoTamanho' animationData={animationData} />
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
                <Container className='d-flex justify-content-center'>
                    <Form onSubmit={salvar}>
                        <div className="d-flex justify-content-center">
                            <h2 className='mb-3'>
                                PREFERÊNCIAS
                            </h2>
                        </div>
                        <FormLabel>Quais são suas áreas de interesse?</FormLabel>
                        <FormGroup className='mb-4'>
                            <Form.Check
                                type="checkbox"
                                label="HTML5"
                                value="HTML5"
                                onChange={(e) => setInteresse1(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="CSS"
                                value="CSS"
                                onChange={(e) => setInteresse2(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="JavaScript"
                                value="JavaScript"
                                onChange={(e) => setInteresse3(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Python"
                                value="Python"
                                onChange={(e) => setInteresse4(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="C#"
                                value="C#"
                                onChange={(e) => setInteresse5(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="C++"
                                value="C++"
                                onChange={(e) => setInteresse6(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="PHP"
                                value="PHP"
                                onChange={(e) => setInteresse7(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Ruby"
                                value="Ruby"
                                onChange={(e) => setInteresse8(e.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Kotlin"
                                value="Kotlin"
                                onChange={(e) => setInteresse9(e.target.value)}
                            />
                        </FormGroup>
                        <FormLabel>Qual é o seu nível de experiência?</FormLabel>
                        <FormGroup className='mb-4'>
                            <Form.Check
                                type="radio"
                                label="Iniciante"
                                name="experiencia"
                                value="iniciante"
                                onChange={(e) => setExperiencia(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Intermediário"
                                name="experiencia"
                                value="intermediario"
                                onChange={(e) => setExperiencia(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Avançado"
                                name="experiencia"
                                value="avancado"
                                onChange={(e) => setExperiencia(e.target.value)}
                            />
                        </FormGroup>
                        <div className="d-flex justify-content-center">
                            <Button className="botao" type="submit" >
                                SALVAR
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default Escolhas;
