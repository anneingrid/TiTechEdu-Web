import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
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
    const [cursos, setCursos] = useState([]);
    const usuario = localStorage.getItem("userId");

    const salvar = (event) => {
        event.preventDefault();

        if (!titulo || !descricao || !cursoRelacionado) {
            setAlertMessage('Preencha todos os campos obrigatórios.');
            setCorAlert('#f56e6e');
            setShowAlert(true);
            return;
        }

        fetch('http://localhost:3001/registroPergunta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({ usuario, titulo, descricao, cursoRelacionado }),
        })
            .then(data => {
                console.log('Success:', data);
                setAlertMessage('Pergunta cadastrada com sucesso!');
                setCorAlert('#9bcfa8');
                setShowAlert(true);
                setShowModal(false);

                setTimeout(() => {
                    window.location.reload();
                    setShowAlert(false);
                }, 2000);
            })
            .catch((error) => {
                alert(error.message);
                console.error('Erro:', error);
                setAlertMessage(error.message);
                setCorAlert('#f56e6e');
                setShowModal(false);
                setShowAlert(true);
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

    useEffect(() => {
        const buscaCursos = async () => {
            try {
                const response = await fetch('http://localhost:3001/cursos', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição: ${response.status}');
                }

                const data = await response.json();

                setCursos(data);

            } catch (error) {
                alert(error.message);
                console.error('Erro:', error);
            }
        };

        buscaCursos();
    }, []);

    const categorias = Array.from(new Set(cursos.map((curso) => curso.categoria)));

    return (
        <>
            <div className="botaoAddPergunta  d-flex justify-content-end" >
                <Button
                    variant="outline-light"
                    onClick={abrirModal}
                    style={{
                        fontSize: 30,
                        cursor: 'pointer',
                        borderRadius: '100%', // Ajuste conforme necessário
                        width: 50,
                        height: 50, // Igual à largura para tornar o botão quadrado
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    +
                </Button>

            </div>
            <div
                className="modal show"
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
                                <option value="0">Selecione uma categoria</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={salvar} className='text-white'>
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