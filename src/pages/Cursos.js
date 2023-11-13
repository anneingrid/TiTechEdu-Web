import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import NavBarr from "./NavBarr";
import Footerr from './Footerr';

export default function Cursos() {
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
                            <Form.Control className="me-2 mb-3 caixa-busca" placeholder="Busque por cursos aqui" />
                            <Button className='botao-buscar' variant="secondary">Buscar</Button>
                        </div>
                    </Col>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <Row className="py-2">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML 5" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Introdução ao HTML5</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML 5" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Estrutura de uma Página HTML</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML 5" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Formulários em HTML5</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML 5" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Elementos Multimídia em HTML5</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Fundamentos do CSS</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Estilização de Texto e Cores</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Layout e Posicionamento</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Animações e Transformações em CSS</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Introdução ao JavaScript</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Manipulação do DOM</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Eventos e Interatividade</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="Logo do Java Script" />
                                        <Card.Body className="ms-">
                                            <Card.Title className='card-text' >AJAX e Requisições Assíncronas </Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo Python" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Introdução à Programação com Python</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo Python" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Estruturas de Dados em Python</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo Python" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Programação Orientada a Objetos em Python</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Logo Python" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text'>Manipulação de Arquivos e Bibliotecas</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Introdução à Programação com C#</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Programação Orientada a Objetos em C#</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Manipulação de Dados em C#</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://seeklogo.com/images/C/c-logo-A44DB3D53C-seeklogo.com.png" alt="C#" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Desenvolvimento de Aplicativos com C#</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Fundamentos de Programação em C++</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Estruturas de Dados em C++</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Programação Orientada a Objetos em C++</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="C++" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Desenvolvimento de Aplicações Avançadas em C++</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png" alt="Logo PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Introdução ao PHP e Programação Web</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png" alt="Logo PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Manipulação de Dados com PHP e MySQL</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png" alt="Logo PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Desenvolvimento de Aplicações Web Dinâmicas em PHP</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png" alt="Logo PHP" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Segurança e Melhores Práticas em PHP</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Introdução à Programação em Ruby</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Estruturas de Dados e Controle de Fluxo em Ruby</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Desenvolvimento de Aplicações Web com Ruby on Rails</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2048px-Ruby_logo.svg.png" alt="Logo Ruby" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Programação Avançada e Desenvolvimento de Aplicações Ruby</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Introdução ao Kotlin</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Programação Orientada a Objetos em Kotlin</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Desenvolvimento de Aplicações Web com Ruby on Rails</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='card'>
                                    <div className="d-flex align-items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Logo Kotlin" />
                                        <Card.Body className="ms-2">
                                            <Card.Title className='card-text' >Tópicos Avançados em Kotlin</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <br />
            </Container>
            <Footerr />
        </>
    );
}
