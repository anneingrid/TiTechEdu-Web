import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import NavBarr from "./NavBarr";
import Footerr from './Footerr';
import { Link } from 'react-router-dom';

export default function Tarefas() {
    return (
        <>
            <NavBarr />
            <Container>
                <div className="row py-4">
                    <Col md={4}>
                        <Form.Select className="caixa-selecao" aria-label="Todos os Cursos">
                            <option>Todos os Cursos</option>
                            <option value="1">HTML5</option>
                            <option value="2">CSS</option>
                            <option value="3">Java Script</option>
                            <option value="4">Python</option>
                            <option value="5">C#</option>
                            <option value="6">C++</option>
                            <option value="7">PHP</option>
                            <option value="8">Ruby</option>
                            <option value="9">Kotlin</option>
                        </Form.Select>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex">
                            <Form.Control className="me-2 mb-3 caixa-busca" placeholder="Busque por exercícios aqui" />
                            <Button className='botao-buscar' variant="secondary">Buscar</Button>
                        </div>
                    </Col>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <Row className="py-2">
                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="Logo do HTML 5" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco HTML5</Card.Title>
                                            <Link to="/exercicios/1">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="Logo do CSS" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco CSS</Card.Title>
                                            <Link to="/exercicios/2">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco JavaScript</Card.Title>
                                            <Link to="/exercicios/3">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo do Python" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco Python</Card.Title>
                                            <Link to="/exercicios/4">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco C#</Card.Title>
                                            <Link to="/exercicios/5">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="Logo do C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco C++</Card.Title>
                                            <Link to="/exercicios/6">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.php.net/images/logos/new-php-logo.png" alt="Logo do PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco PHP</Card.Title>
                                            <Link to="/exercicios/7">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo do Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco Ruby</Card.Title>
                                            <Link to="/exercicios/8">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='cardCurso'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Exercíco Kotlin</Card.Title>
                                            <Link to="/exercicios/9">
                                                <Button variant="primary">Entrar no Exercício</Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
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