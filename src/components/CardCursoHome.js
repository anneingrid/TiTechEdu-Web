import { Card } from "react-bootstrap";

export default function CardCursoHome({ preferencia }) {
    return (
        <>
            <Card
                className="mt-4 p-1 expand-on-hover"
            >
                <div className="d-flex justify-content-start align-items-center text-center">
                    <img src={preferencia.imgSrc} alt={preferencia.alt} style={{ width: '50px', height: '50px' }} />
                    <Card.Body className="ms-2 mb-0">
                        <Card.Title className="textoCardHome">
                            <a href={`cursos/${preferencia.id}`} className="textoCardHome stretched-link">
                                {preferencia.titulo}
                            </a>
                        </Card.Title>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
}