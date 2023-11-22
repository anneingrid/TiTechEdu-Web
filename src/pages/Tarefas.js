import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import NavBarr from "./NavBarr";
import Footerr from './Footerr';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Tarefas() {
    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        const buscaCursos = async () => {
            try {
                const response = await fetch('http://localhost:3001/cursos', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição: ${response.status}');
                }

                const data = await response.json();

                setCursos(data);

            } catch (error) {
                alert(error.message);
                console.error('Erro:', error);
            }
        };

        buscaCursos();
    }, []);
    const categorias = Array.from(new Set(cursos.map((curso) => curso.categoria)));
    return (
        <>
            <NavBarr />
            <Container>
                <span className='titleForum mt-3'>Exercícios</span>
                <div className="row py-4">
                    <Col md={4}>
                        <Form.Select className="caixa-selecao" aria-label="Todos os Cursos">
                            <option>Todos os Cursos</option>
                            {categorias.map((categoria) => (
                                    <option key={categoria} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            
                        </Form.Select>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex">
                            <Form.Control className="me-2 mb-3 caixa-busca" placeholder="Busque por exercícios aqui" />
                            <Button className='botao-buscar' variant="secondary"><i class="bi bi-search"></i></Button>
                        </div>
                    </Col>
                </div>

                <Carousel>
                    <Carousel.Item >
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col md={3}>
                                <Link to="/exercicios/1" className='text-decoration-none'>
                                    <Card className='cardCursoTarefa'>
                                        <div className="d-flex align-items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="Logo do HTML 5" />
                                            <Card.Body className="ms-2">
                                                <Card.Title className='card-text'>HTML5</Card.Title>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>

                            <Col md={3}>
                                <Link to="/exercicios/2" className='text-decoration-none'>
                                    <Card className='cardCursoTarefa'>
                                        <div className="d-flex align-items-center">
                                            <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="Logo do CSS" />
                                            <Card.Body className="ms-2">
                                                <Card.Title className='card-text'>CSS</Card.Title>


                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>

                            <Col md={3}>
                                <Link to="/exercicios/3" className='text-decoration-none'>
                                    <Card className='cardCursoTarefa' >
                                        <div className="d-flex align-items-center">
                                            <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                            <Card.Body className="ms-2">
                                                <Card.Title className='card-text'>JavaScript</Card.Title>



                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>

                            <Col md={3}>
                                <Link to="/exercicios/4" className='text-decoration-none'>
                                    <Card className='cardCursoTarefa'>
                                        <div className="d-flex align-items-center">
                                            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo do Python" />
                                            <Card.Body className="ms-2">
                                                <Card.Title className='card-text'>Python</Card.Title>


                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row  className='d-flex justify-content-center align-items-center'>
                            <Col md={3}>
                                <Link to="/exercicios/5" className='text-decoration-none'>
                                    <Card className='cardCursoTarefa'>
                                        <div className="d-flex align-items-center">
                                            <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                            <Card.Body className="ms-2">
                                                <Card.Title className='card-text'>C#</Card.Title>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>

                            <Col md={3}>
                                <Link to="/exercicios/6" className='text-decoration-none'>
                                <Card className='cardCursoTarefa'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="Logo do C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>C++</Card.Title>
                                            
                                            
                                        </Card.Body>
                                    </div>
                                </Card>
                                </Link>
                            </Col>

                            <Col md={3}>
                                <Link to="/exercicios/7" className='text-decoration-none'>
                                <Card className='cardCursoTarefa'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.php.net/images/logos/new-php-logo.png" alt="Logo do PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>PHP</Card.Title>
                                            
                                            
                                        </Card.Body>
                                    </div>
                                </Card>
                                </Link>
                            </Col>

                            <Col md={3}><Link to="/exercicios/8" className='text-decoration-none'>
                                <Card className='cardCursoTarefa'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo do Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Ruby</Card.Title>
                                            
                                                
                                            
                                        </Card.Body>
                                    </div>
                                </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row  className='d-flex justify-content-center align-items-center'>
                            <Col md={3}>
                                <Link to="/exercicios/9" className='text-decoration-none'>
                                <Card className='cardCursoTarefa'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Kotlin</Card.Title>
                                            
                                                
                                            
                                        </Card.Body>
                                    </div>
                                </Card>
                                </Link>
                            </Col>
                        </Row>

                    </Carousel.Item>
                    {/* Adicione mais itens de carrossel conforme necessário */}
                </Carousel>
                <br />
            </Container>
            <Footerr />
        </>
    );
}