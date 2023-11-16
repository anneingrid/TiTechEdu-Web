import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarr from "./NavBarr";
import { Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function Pergunta() {
    const { id } = useParams();
    const [pergunta, setPergunta] = useState([]);

    useEffect(() => {
        const buscaPergunta = async () => {
            try {
                const response = await fetch('http://localhost:3001/pergunta', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Erro na requisição');
                }

                const data = await response.json();
                setPergunta(data);

            } catch (error) {
                alert(error.message);
            }
        };

        buscaPergunta();
    }, [id]);


    return (
        <div className="pergunta h-100">
            <NavBarr />
            <Container >
                <div style={{ height: 500 }}>
                    <Row>
                        <Col >

                            <Card className="mt-5">
                                <Card.Body>
                                    <div style={{ display: 'flex'}}>
                                    <Row className="me-auto align-items-center">
                                        <Col >
                                            <i className="bi bi-person-circle text-black" style={{ fontSize: 25 }}></i>
                                        </Col>
                                        <Col >
                                            <Card.Title className="text-center" style={{ margin: 0 }}>{pergunta.titulo}</Card.Title>
                                        </Col>
                                    </Row>
                                    </div>
                                    
                                    <Card.Text style={{ color: '#49c8ee' , fontSize: 12 }} >Data: 20/12/2022</Card.Text>
                                    <hr style={{ margin: 2, color: '#49c8ee' }}></hr>
                                    <Card.Text>{pergunta.descricao}</Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <h1 className="text-white mt-5" style={{ fontSize: 25 }}>Respostas</h1>
                            <Card className="mt-2">
                                <Card.Body>

                                    <Card.Text style={{ color: '#49c8ee' , fontSize: 12}}>Data:</Card.Text>
                                    <hr ></hr>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet consequat ex, quis bibendum sapien ullamcorper sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget lectus quam. Morbi cursus vulputate enim in tempus. Vivamus et aliquet dolor. Aenean dapibus vehicula molestie.</Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Digite sua resposta:"
                        className="mb-3"
                        style={{ color: '#153c47' }}
                    >
                        <Form.Control type="text" placeholder="name@example.com" style={{ height: '100px', backgroundColor: '#b6e9f8', borderColor:'#153c47' , borderWidth:3,}} />
                    </FloatingLabel>

                </div>

            </Container>
        </div>



    )

};