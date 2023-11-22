import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function CursoCard({id, imgSrc, alt, title }) {
  return (
    <Col md={12}>
      <Card className='cardCurso' style={{marginLeft:7, marginRight:7}}>
        <div className="d-flex align-items-center">
          <img src={imgSrc} alt={alt} />
          <Card.Body className="mx-2  text-decoration-none">
            <Card.Title  >{title}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
}
