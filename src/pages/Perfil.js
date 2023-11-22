import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarr from "./NavBarr";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footerr from "./Footerr";

export default function Perfil() {
    const navigate = useNavigate();
    const [id, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    useEffect(() => {
        const buscaUsuario = async () => {
            const usuarioId = localStorage.getItem("userId");
            const id = parseInt(usuarioId);

            const response = await fetch('http://localhost:3001/usuarioPerfil', {
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
                    setUsuario(data.usuario.id);
                    setNome(data.usuario.nome);
                    setEmail(data.usuario.email);
                    setSenha(data.usuario.senha);
                    console.log(data.usuario.nome);
                })
                .catch((error) => {
                    alert(error.message);
                });
        };

        buscaUsuario();
    }, []);
    const sair = () => {
        localStorage.removeItem('userId');
        navigate('/');
    };

    return (
        <>
            <NavBarr></NavBarr>
            <Container fluid
                className='pt-3'
                style={{
                    height: '70vh',
                }}>
                <Row className="d-flex align-items-center">
                    <Col md={4}>
                        <div className='d-flex align-items-center justify-content-start ms-5'>
                            <h3 style={{ fontSize: '30px', color: '#dbf8fe' }}>Olá, <b>{nome}</b>! </h3>

                        </div>
                        <div className=' d-flex align-items-center justify-content-start ms-5'>
                            <i class="bi bi-person-circle" style={{ fontSize: '200px', color: '#dbf8fe' }}></i>

                        </div>
                    </Col>
                    <Col md={7} className='align-items-center me-2'>
                        <div>
                            <span className="campos">Nome: <b>{nome}</b> </span><br></br>
                            <hr style={{color: '#dbf8fe' }}></hr>
                        </div>
                        <div ><span className="campos">Email: <b>{email}</b></span><br></br></div>
                        <hr style={{color: '#dbf8fe' }}></hr>
                        <div ><span className="campos">Cursos Inscritos: <b>...</b></span><br></br></div>
                        <hr style={{color: '#dbf8fe' }}></hr>
                        <div className="d-flex justify-content-end">
                            <Link to='/perfilEditar' className="botoesPefil me-2" style={{backgroundColor:'#134b6c'}}><i class="bi bi-pencil-square"></i> Editar</Link>
                            <Link className="botoesPefil me-2" onClick={sair} style={{backgroundColor:'#8a120a'}}> <i class="bi bi-box-arrow-left"></i> Sair</Link>
                        </div>


                    </Col>
                </Row>



            </Container>
            
<Footerr></Footerr>
        </>
    );
}