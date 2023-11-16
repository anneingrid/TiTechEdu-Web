import { Button, Container } from "react-bootstrap";
import NavBarr from "./NavBarr";
import CardForum from "../components/CardForum";
import ModalPergunta from "../components/ModalPergunta";
import { useState, useEffect } from "react";


export default function Forum() {
    const [showModal, setShowModal] = useState(false);

    const abrirModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
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

        buscaPerguntas();
    }, []);





    return (
        <>
            <NavBarr />
            <Container style={{ marginTop: '2rem' }}>
                <h1 className="text-light">
                    Fórum
                </h1>

                {perguntas.length > 0 ? (
                    perguntas.map((pergunta) => (

                        <CardForum
                            key={pergunta.id}
                            pergunta={pergunta}
                        />
                    ))
                ) : (
                    <p>Nenhuma pergunta encontrada.</p>
                )};

            </Container>
            <ModalPergunta />

        </>
    );
};