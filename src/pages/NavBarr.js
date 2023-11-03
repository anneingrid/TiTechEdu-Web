import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBarr() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="dark"  data-bs-theme="dark">
                <Container>
                    <i id='menu' className="bi bi-list text-white me-2" onClick={handleShow} style={{ fontSize: 25 }}></i>
                    {/* <img src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Ti Tech Edu logo"></img> */}
                    <Navbar.Brand href="/">Ti Tech Edu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cursos">Cursos</Nav.Link>
                        <Nav.Link href="/forum">Fórum</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="#perfil">
                            <i className="bi bi-person-circle text-white" style={{ fontSize: 25 }}></i>
                            <span className='ms-2'>Olá, Nome da pessoa</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} bg="dark" data-bs-theme="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ti Tech Edu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <p>
                            Navegue pelo mundo da TI com nossos cursos, do básico ao avançado.
                            Mantenha-se atualizado com nossa newsletter e conecte-se com nossa comunidade vibrante.
                        </p>
                        <div>
                            <Link to="/perfil" className='linkOffCanvas'>
                                <i className="bi bi-person-circle p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Perfil</span></Link>

                            <hr></hr>
                        </div>
                        <div>
                            <Link to="/cursos" className='linkOffCanvas'>
                                <i className="bi bi-mortarboard p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Cursos</span>
                            </Link>

                            <hr></hr>
                        </div>
                        <div>
                            <Link to="/forum" className='linkOffCanvas'>
                                <i className="bi bi-chat p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Fórum</span>
                            </Link>
                            <hr></hr>
                        </div>
                        <div>
                            <Link to="/linkedin" className='linkOffCanvas'>
                                <i className="bi bi-rocket-takeoff p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Vagas disponíveis</span>
                                <hr></hr>
                            </Link>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};