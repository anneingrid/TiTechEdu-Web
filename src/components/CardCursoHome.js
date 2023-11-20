import { Card } from "react-bootstrap";

export default function CardCursoHome({ preferencia }) {
    return (
        <>
            <Card style={{ height: '100px' }} className="mt-4 p-1 d-flex justify-content-center align-items-center text-center">
                <div className="d-flex justify-content-center align-items-center text-center">
                    <img src={preferencia.imgSrc} alt={preferencia.alt}
                        style={{ width: '50px', height: '50px' }} />
                    <Card.Body className="ms-2 mb-0">
                        <Card.Title className='cardCurso-text'>
                            <a href={`cursos/${preferencia.id}`} className="stretched-link text-decoration-none text-dark">
                                {preferencia.titulo}
                            </a></Card.Title>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
}