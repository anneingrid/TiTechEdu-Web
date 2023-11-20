
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
 

export default function CardForum({ pergunta }) {
    const [like, setLike] = useState(false);
    const usuario = localStorage.getItem("userId")

    const addLike = async () => {
        setLike(!like);
        
        try {
            const response = await fetch(`http://localhost:3001/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: pergunta.id }),
            });

            setLike(!like);

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

        } catch (error) {
            console.error('Erro ao atualizar o like:', error);
        }

    };

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
                        style={{ fontSize: 9, backgroundColor: 'transparent', color: 'white', borderRadius: '8px', border: '1px solid #dbf8fe', padding: '5px' }}
                        className="badge">{pergunta.cursoRelacionado}</span></Card.Title>
                    <hr style={{ color: '#dbf8fe', margin: 2, marginBottom: 15 }} />
                    <Card.Text>
                        {pergunta.descricao}
                    </Card.Text>
                    <Row>


                        <Col>
                            <Link to={`${pergunta.id}`} className='text-decoration-none text-white'>
                                <i className="bi bi-chat" style={{ fontSize: 15, marginRight: '5px' }}></i>
                                {pergunta.comentarios.length}
                            </Link>
                            {like && (
                                <i className="bi bi-heart-fill text-decoration-none text-white" style={{ marginLeft: '5px', marginRight: '5px' }} onClick={addLike}></i>

                            )}
                            {!like && (
                                <i className="bi bi-heart text-decoration-none text-white" style={{ marginLeft: '5px', marginRight: '5px' }} onClick={addLike}></i>

                            )}
                            {pergunta.like}
                        </Col>



                        <Col>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};