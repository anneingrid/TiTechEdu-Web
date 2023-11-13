import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import animationData from './animacaoEscolhas.json';
import Lottie from "lottie-react";

function Escolhas() {
    const [interesses, setInteresses] = useState([]);
    const [experiencia, setExperiencia] = useState('');
    const navegacao = useNavigate();

    const mudancaInteresse = (event) => {
        const interesseSelecionado = event.target.value;
        if (interesses.includes(interesseSelecionado)) {
            setInteresses(interesses.filter(interesse => interesse !== interesseSelecionado));
        } else {
            setInteresses([...interesses, interesseSelecionado]);
        }
    };

    const salvar = (event) => {
        event.preventDefault();
        console.log('Preferências:', { interesses, experiencia });
        navegacao('/home');
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
                                label="WEB"
                                value="web"
                                onChange={mudancaInteresse}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Design Gráfico"
                                value="design"
                                onChange={mudancaInteresse}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Banco de Dados"
                                value="banco"
                                onChange={mudancaInteresse}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Inteligencia Artificial"
                                value="ia"
                                onChange={mudancaInteresse}
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
