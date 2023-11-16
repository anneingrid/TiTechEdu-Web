
import Card from 'react-bootstrap/Card';


export default function CardForum() {
    return (
        <>

            <Card style={{ width: 'auto', marginTop: '2rem' }} className="cardForum " bg={"info"} text='light'>
                <Card.Body>
                    <Card.Title ><b>Card Title</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Mais</Card.Link>
                </Card.Body>
            </Card>

        </>
    );
};