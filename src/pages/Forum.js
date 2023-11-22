import { Col, Container, Row } from "react-bootstrap";
import NavBarr from "./NavBarr";
import CardForum from "../components/CardForum";
import ModalPergunta from "../components/ModalPergunta";
import { useState, useEffect } from "react";
import Footerr from "./Footerr";
import { Link } from "react-router-dom";


export default function Forum() {
    const [perguntas, setPerguntas] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const abrirModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);;
    };

    const buscaPerguntas = async () => {
        try {
            const response = await fetch('http://localhost:3001/perguntas', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();

            setPerguntas(data);

        } catch (error) {
            alert(error.message);
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        buscaPerguntas();
    }, []);






    return (
        <>
            <NavBarr />
            <Container style={{ marginTop: '2rem' }}>
                <Row className="mt-5">
                    <Col md={11} className="d-flex justify-content-left">
                        
                        <h1 className="titleForum">Comunidade </h1>
                    </Col>
                    <Col className="d-flex justify-content-end" md={1}>
                        <ModalPergunta />
                    </Col>
                </Row>

                {perguntas.length > 0 ? (
                    perguntas.map((pergunta) => (

                        <CardForum
                            key={pergunta.id}
                            pergunta={pergunta}
                            
                        />
                    ))
                ) : (
                    <p>Nenhuma pergunta encontrada.</p>
                )}

            </Container>
            <Footerr></Footerr>

        </>
    );
};