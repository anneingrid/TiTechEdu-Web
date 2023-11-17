import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function CursoCard({id, imgSrc, alt, title }) {
  return (
    <Col md={12}>
      <Card className='cardCurso'>
        <div className="d-flex align-items-center">
          <img src={imgSrc} alt={alt} />
          <Card.Body className="ms-2">
            <Card.Title className='cardCurso-text'>{title}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
}
