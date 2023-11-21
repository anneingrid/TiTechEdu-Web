import Footerr from "./Footerr";
import NavBarr from "./NavBarr";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animationData from './animacaoLoginCadastro.json';
import Lottie from "lottie-react";
import CardCursoHome from "../components/CardCursoHome";
import { Link as ScrollLink } from "react-scroll";


export default function Home() {
    const [preferencias, setPreferencias] = useState([]);
    const id = localStorage.getItem("userId")

    const cursosPreferencia = async () => {
        fetch('http://localhost:3001/h', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        }).then(async response => {
            const data = await response.json(); // 
            if (!response.ok) {
                throw new Error(data.message || 'Erro na requisição');
            }
            return data;
        })
            .then(data => {
                console.log(data);
                setPreferencias(data);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    useEffect(() => {
        cursosPreferencia();
        console.log(preferencias);
    }, []);

    return (
        <>
            <NavBarr />
            <Container fluid className="p-5" >
                <Row className="align-items-center" >
                    <Col md={4} >
                        <Lottie className='animacao' animationData={animationData} />
                    </Col>
                    <Col md={8} className="align-items-center text-center">
                        <h1 className="titleHome">
                            Desenvolva Seu
                            <span className="futuro"> Futuro</span>, <br></br>Codifique com Confiança!</h1>


                        <ScrollLink to="cursosContainer" smooth={true} duration={50}>
                            <Button
                                className="hover-effect"
                                style={{ minHeight: '10vh', minWidth: '10vh', fontSize: 20 }}
                            >
                                Quero começar!
                            </Button>
                        </ScrollLink>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-5" id="cursosContainer" style={{
                backgroundColor: '#041017',
                height: '100%',
            }}>
                <Row className="align-items-center" >
                    <Col className="align-items-center text-center">
                        <h1 className="titleForum">
                            <b>confira esses cursos</b></h1>

                    </Col>
                </Row>
                <Row className="align-items-center" >
                    {preferencias.map((preferencia) => (
                        <Col md={3} className="align-items-center text-center">
                            <CardCursoHome preferencia={preferencia} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footerr />
        </>

    );
};