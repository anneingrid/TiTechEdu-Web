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
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <i id='menu' className="bi bi-list text-white me-2" onClick={handleShow} style={{ fontSize: 25 }}></i>
                    <img src="/logoNav.png"
                        width="50"
                        height="27,30"
                        className="d-inline-block align-top"
                        alt="Ti Tech Edu logo"
                        href="/home"></img>
                    {/* <Navbar.Brand href="/">Ti Tech Edu</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/cursos">Cursos</Nav.Link>
                        <Nav.Link href="/exercicios">Exercícios</Nav.Link>
                        <Nav.Link href="/forum">Comunidade</Nav.Link>
                        <Nav.Link href="/linkedin">Vagas</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="/perfil">
                            <i className="bi bi-person-circle text-white" style={{ fontSize: 25 }}></i>
                            <span className='ms-2'>Olá, {usuario} </span>
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
                        <div>
                            <Link to="/exercicios" className='linkOffCanvas'>
                                <i className="bi bi-book p-2" style={{ fontSize: 25 }}></i>
                                <span className=" p-2">Exercícios</span>
                                <hr></hr>
                            </Link>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};