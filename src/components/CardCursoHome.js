import { func } from "prop-types";
import { Card } from "react-bootstrap";

export default function CardCursoHome() {
    return (
        <>
            <Card style={{ width: '15rem' }}>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png'} alt="HTML5 Logo"
                        style={{ width: '50px', height: '50px' }} />
                    <Card.Body className="ms-2 mb-0"> {/* Remova a margem inferior aqui */}
                        <Card.Title className='cardCurso-text'>HTML 5</Card.Title>
                    </Card.Body>
                </div>
            </Card>
        </>


    )

}