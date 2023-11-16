import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModalPergunta() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cursoRelacionado, setCursoRelacionado] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [corAlert, setCorAlert] = useState('#9bcfa8');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();


    const salvar = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/registroPergunta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo, descricao, cursoRelacionado }),
        })
            .then(data => {
                console.log('Success:', data);
                setAlertMessage('Pergunta cadastrada com sucesso!');
                setShowAlert(true);
                setShowModal(false);

                // setTimeout(() => {
                //     setShowAlert(false);
                // }, 3000);
            })
            .catch((error) => {
                alert(error.message);
                console.error('Erro:', error);
                setAlertMessage(error.message);
                setShowAlert(true);
                setCorAlert('#f56e6e');
                setShowModal(false);
            });

    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const abrirModal = () => {
        limparCampos();
        setShowAlert(false);
        setShowModal(true);
    };

    const limparCampos = (event) => {
        setTitulo("");
        setDescricao("");
        setCursoRelacionado(0);
    }

    return (
        <>
            <div className="botaoAddPergunta" style={{ marginTop: '2rem' }}>
                <Button className="addPergunta" variant="outline-light" size="lg" onClick={abrirModal}><b>+</b></Button>
            </div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            ></div>

            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar pergunta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" >
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                maxLength={60}
                                type={"text"}
                                placeholder="Insira um título"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)} />
                            <Form.Text className="text-muted" >
                                Use palavras chaves.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Pergunta</Form.Label>
                            <Form.Control as="textarea"
                                maxLength={400}
                                placeholder="Insira sua pergunta"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Qual a categoria relacionada?</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={cursoRelacionado}
                                onChange={(e) => setCursoRelacionado(e.target.value)}>
                                
                                <option value="0">Selecione</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={salvar} >
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onClose={handleAlertClose}
                show={showAlert}
                onHide={handleAlertClose}

            >
                <Modal.Header closeButton style={{ backgroundColor: corAlert }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertMessage}
                    </Modal.Title>
                </Modal.Header>



            </Modal >

        </>
    )
}