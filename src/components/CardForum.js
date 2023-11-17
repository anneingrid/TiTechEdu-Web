
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function CardForum({ pergunta }) {

    return (
        <>

            <Card style={{ width: 'auto', marginTop: '1rem' }} className="cardForum " bg={"info"} text='light'>
                <Card.Body>
                    <Card.Title ><b>{pergunta.titulo}</b></Card.Title>
                    <Card.Text>
                        {pergunta.descricao}
                    </Card.Text>

                    <Link to={`${pergunta.id}`} className='botaoExpandirTop'>
                        <Button className='botaoExpandir'>
                            <i class="bi bi-arrows-fullscreen bold-icon"></i>
                        </Button>

                    </Link>
                </Card.Body>
            </Card>

        </>
    );
};