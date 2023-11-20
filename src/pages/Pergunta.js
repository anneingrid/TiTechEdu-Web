import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarr from "./NavBarr";
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { format } from "date-fns";

export default function Pergunta() {
    const { id } = useParams();
    const [pergunta, setPergunta] = useState([]);
    const floatingLabelRef = useRef(null);
    const [descricao, setDescricao] = useState([]);

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

    const formattedDate = pergunta.dataPergunta
        ? format(new Date(pergunta.dataPergunta), 'dd/MM/yyyy')
        : '';

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
        focusInput()
    };

    const focusInput = () => {
        if (floatingLabelRef.current) {
            floatingLabelRef.current.querySelector('input').focus();
        }
    };

    const salvar = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/comentario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ descricao, id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro na requisição');
            }

            const novoComentario = await response.json();

            setPergunta((prevPergunta) => ({
                ...prevPergunta,
                comentarios: [...prevPergunta.comentarios, novoComentario],
            }));

            setDescricao('');
            if (floatingLabelRef.current) {
                const inputElement = floatingLabelRef.current.querySelector('input');
                if (inputElement) {
                    inputElement.value = '';
                }
            }

        } catch (error) {
            alert(error.message);
            console.error('Erro:', error);
        }
    };


    return (
        <div className="pergunta h-100">
            <NavBarr />
            <Container >
                <div >
                    <Row>
                        <Col >
                            <Card className="mt-5" style={{ backgroundColor: "#041017", border: '0.5px solid #0a253f', color: '#dbf8fe' }} >
                                <Card.Body>
                                    <div style={{ display: 'flex' }}>
                                        <Row className="me-auto align-items-center mb-1">
                                            <Col >
                                                <Card.Title className="text-center text-white" style={{ margin: 1 }}><b>{pergunta.titulo}</b></Card.Title>
                                            </Col>
                                        </Row>
                                    </div>

                                    <Card.Text style={{ color: '#dbf8fe', fontSize: 12 }} >Data:{formattedDate}</Card.Text>
                                    <hr style={{ margin: 2, color: '#49c8ee' }}></hr>
                                    <Card.Text>{pergunta.descricao}</Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col >

                            <Row className="mt-5">
                                <Col>
                                    <h1 className="text-white" style={{ fontSize: 25 }}>Comentários </h1>
                                </Col>
                                <Col className="d-flex justify-content-end">

                                    <Button
                                        variant="outline-light"
                                        onClick={scrollToBottom}
                                        style={{
                                            fontSize: 25,
                                            cursor: 'pointer',
                                            borderRadius: '100%',
                                            width: 40,
                                            height: 40,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        +
                                    </Button>
                                </Col>
                            </Row>


                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            {pergunta.comentarios && pergunta.comentarios.length > 0 ? (
                                pergunta.comentarios.map((comentario) => (
                                    <div key={comentario.id}>
                                        <Card className="mt-2">
                                            <Card.Body>
                                                <Card.Text>
                                                    <Card.Text style={{ color: '#49c8ee', fontSize: 12 }}>Data: {format(new Date(comentario.dataComentario), 'dd/MM/yyyy HH:mm')}</Card.Text>
                                                    <hr ></hr>
                                                    <p>{comentario.descricao}</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                ))
                            ) : (
                                'Não existem comentários para esse post!'
                            )}


                        </Col>
                    </Row>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <Row>
                        <Col >
                            <InputGroup className="mb-3">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    ref={floatingLabelRef}
                                    label="Deixe seu comentário:"
                                    className="mt-3 mb-1"
                                    style={{ marginBottom: '0rem', color: '#dbf8fe' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="name@example.com"
                                        style={{ height: '100px', backgroundColor: "#041017", border: '0.5px solid #0a253f', color: '#dbf8fe'}}
                                        onChange={(e) => setDescricao(e.target.value)}
                                    />
                                </FloatingLabel>
                                <Button
                                    variant="dark"
                                    className="mt-3 mb-1"
                                    style={{ height: '100px', backgroundColor: '#0a253f', border: '0.5px solid #0a253f' }}
                                    onClick={salvar}><i className="bi bi-send text-white"></i></Button>

                            </InputGroup>

                        </Col>

                    </Row>



                </div>

            </Container>
        </div>



    )

};