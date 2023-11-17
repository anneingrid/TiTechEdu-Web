import Footerr from "./Footerr";
import NavBarr from "./NavBarr";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animationData from './animacao2.json';
import animationData2 from './animacao3.json';
import Lottie from "lottie-react";
import CardCursoHome from "../components/CardCursoHome";


export default function Home() {
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
                        <Button
                            className="hover-effect"
                            style={{ minHeight: '10vh', minWidth: '10vh', fontSize: 20 }}
                        >
                            Let's get started!
                        </Button>

                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-5" style={{
                backgroundColor: '#2e2f30',
                backgroundImage: `url('https://img.freepik.com/fotos-gratis/fundo-gradiente-de-luxo-abstrato-azul-escuro-liso-com-banner-de-estudio-vinheta-preta_1258-108775.jpg?w=1380&t=st=1700245488~exp=1700246088~hmac=8c0f7358a5d724cf9d198d6d14d1ec92f87db2159d59cc7aa55121d22035d5ac')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
            }}>
                <Row className="align-items-center" >
                    <Col className="align-items-center text-center">
                        <h1 style={{ color: 'white', textTransform: 'uppercase' }}>
                            <b>Cursos disponíveis</b></h1>

                    </Col>
                </Row>
                <Row className="align-items-center" >
                    <Col className="align-items-center text-center">
                            <CardCursoHome />
                    </Col>
                </Row>
            </Container>
            <Footerr />
        </>

    );
};