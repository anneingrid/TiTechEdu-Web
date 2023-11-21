
import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function CardForum({ pergunta: initialPergunta }) {
    const [like, setLike] = useState(false);
    const usuario = localStorage.getItem("userId")
    const [hasLiked, setHasLiked] = useState(false);
    const [pergunta, setPergunta] = useState(initialPergunta);


    const addLike = async () => {
        try {
            const response = await fetch(`http://localhost:3001/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: pergunta.id, idUsuario: usuario }),
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const updatedQuestionData = await response.json();
            setLike(!like);
            setPergunta(prevPergunta => ({
                ...prevPergunta,
                likes: updatedQuestionData.likes,
            }));

        } catch (error) {
            console.error('Erro ao atualizar o like:', error);
        }
    };

    useEffect(() => {
        const buscaLike = async () => {
            try {
                const response = await fetch(`http://localhost:3001/verificaLike`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        perguntaId: pergunta.id,
                        usuarioId: usuario,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                const { hasLiked } = await response.json();
                setHasLiked(hasLiked);
                const updatedQuestionData = await response.json();
                setPergunta(prevPergunta => ({
                    ...prevPergunta,
                    likes: updatedQuestionData.likes,
                }));

            } catch (error) {
                console.error('Erro ao atualizar o like:', error);
            }
        };
        buscaLike();
    }, []);



    return (
        <>
            <Card style={{
                width: 'auto',
                marginTop: '1rem',
                marginBottom: '1rem',
                border: '0.5px solid #0a253f',
                backgroundColor: "#041017",
                color: '#dbf8fe'
            }} className="cardForum " >
                <Card.Body>
                    <Card.Title className='text-white'><b>{pergunta.titulo}</b><span
                        style={{ fontSize: 9, backgroundColor: 'transparent', color: 'white', borderRadius: '8px', border: '1px solid #dbf8fe', padding: '5px', marginLeft: 6 }}
                        className="badge">{pergunta.cursoRelacionado}</span></Card.Title>
                    <hr style={{ color: '#dbf8fe', margin: 2, marginBottom: 15 }} />
                    <Card.Text>
                        {pergunta.descricao}
                    </Card.Text>
                    <Row>
                        <Col  className='d-flex justify-content-end align-items-center'>
                            <Link to={`${pergunta.id}`} className='text-decoration-none text-white'>
                                <i className="hover-comment bi bi-chat"></i>
                                {pergunta.comentarios.length}
                            </Link>

                            {(hasLiked || like) ? (
                                <i className="hover-comment bi bi-heart-fill text-decoration-none text-white"  onClick={addLike}></i>
                            ) : (
                                <i className="hover-comment bi bi-heart text-decoration-none text-white"  onClick={addLike}></i>
                            )}
                            {pergunta.likes}


                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};