import Footerr from "./Footerr";
import NavBarr from "./NavBarr";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animationData from './animacao2.json';
import animationData2 from './animacao3.json';
import Lottie from "lottie-react";


export default function Home() {
    return (
        <>
            <NavBarr />
            <Container fluid className="p-5">
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
            <Footerr />
        </>

    );
};