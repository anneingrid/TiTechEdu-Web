import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBarr() {
    const [show, setShow] = useState(false);
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const buscaUsuario = () => {
            const usuario = localStorage.getItem("userId");
            const id = parseInt(usuario);

            fetch('http://localhost:3001/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na resposta do servidor');
                    }
                    return response.json();
                })
                .then(data => {
                    setUsuario(data.nomeUsuario);
                    console.log(data.nomeUsuario);
                })
                .catch((error) => {
                    alert(error.message);
                });
        };

        buscaUsuario();
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [currentPage, setCurrentPage] = useState('');
    useEffect(() => {
        const currentPath = window.location.pathname;
        setCurrentPage(currentPath);
    }, []);
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <i id='menu' className="bi bi-list text-white me-2" onClick={handleShow} style={{ fontSize: 25 }}></i>
                    <Link to="/home">
                        <img
                            src="/logoNav.png"
                            width="50"
                            height="27"
                            className="d-inline-block align-top"
                            alt="Ti Tech Edu logo"
                            style={{ marginRight: 5 }}
                        />
                    </Link>
                    {/* <Navbar.Brand href="/">Ti Tech Edu</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/cursos" className={`text-white ${currentPage === '/cursos' ? 'active-page' : ''}`}>
                            Cursos
                        </Nav.Link>
                        <Nav.Link href="/exercicios" className={`text-white ${currentPage === '/exercicios' ? 'active-page' : ''}`}>
                            Exercícios
                        </Nav.Link>
                        <Nav.Link href="/forum" className={`text-white ${currentPage === '/forum' ? 'active-page' : ''}`}>
                            Comunidade
                        </Nav.Link>
                        <Nav.Link href="/linkedin" className={`text-white ${currentPage === '/linkedin' ? 'active-page' : ''}`}>
                            Vagas
                        </Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="/perfil">
                            <i className="bi bi-person-circle text-white" style={{ fontSize: 25 }}></i>
                            <span className='ms-2 text-white'>Olá, <b>{usuario}</b></span>
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
                            <Link to="/perfil" className={`linkOffCanvas ${currentPage === '/perfil' ? 'active-page' : ''}`}>
                                <i className="bi bi-person-circle p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Perfil</span>
                            </Link>
                            <hr></hr>
                        </div>
                        <div>
                            <Link to="/cursos" className={`linkOffCanvas ${currentPage === '/cursos' ? 'active-page-offcanvas' : ''}`}>
                                <i className="bi bi-mortarboard p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Cursos</span>
                            </Link>
                            <hr></hr>
                            <div>
                                <Link to="/exercicios" className={`linkOffCanvas ${currentPage === '/exercicios' ? 'active-page-offcanvas' : ''}`}>
                                    <i className="bi bi-book p-2" style={{ fontSize: 25 }}></i>
                                    <span className=" p-2">Exercícios</span>
                                    <hr></hr>
                                </Link>
                            </div>
                            <div>
                                <Link to="/forum" className={`linkOffCanvas ${currentPage === '/forum' ? 'active-page-offcanvas' : ''}`}>
                                    <i className="bi bi-chat p-2" style={{ fontSize: 25 }}></i>
                                    <span className=" p-2">Comunidade</span>
                                </Link>
                                <hr></hr>
                            </div>

                            <div>
                                <Link to="/linkedin" className={`linkOffCanvas ${currentPage === '/linkedin' ? 'active-page-offcanvas' : ''}`}>
                                    <i className="bi bi-rocket-takeoff p-2" style={{ fontSize: 25 }}></i>
                                    <span className=" p-2">Vagas disponíveis</span>
                                    <hr></hr>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};