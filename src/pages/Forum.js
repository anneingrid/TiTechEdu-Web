import { Button, Container } from "react-bootstrap";
import NavBarr from "./NavBarr";
import CardForum from "../components/CardForum";
import ModalPergunta from "../components/ModalPergunta";
import { useState } from "react";


export default function Forum() {
    const [showModal, setShowModal] = useState(false);

    const abrirModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <NavBarr />
            <Container style={{ marginTop: '2rem' }}>
                <h1 className="text-light">
                    Fórum
                </h1>
                <CardForum />

            </Container>
            <ModalPergunta />

        </>
    );
};