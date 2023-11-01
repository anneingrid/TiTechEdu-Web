import Footerr from "./Footerr";
import NavBarr from "./NavBarr";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React, { useState, useRef } from "react";

export default function Home() {
    const handleMouseMove = (event) => {
        const btn = event.currentTarget;
        const effect = btn.querySelector('.hover-effect');
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
    };

    const handleMouseOut = (event) => {
        const effect = event.currentTarget.querySelector('.hover-effect');
        effect.style.left = '50%';
        effect.style.top = '50%';
    };
    return (
        <>
            <NavBarr />
            <Container fluid className="p-5">
                <Row className="align-items-center" style={{ minHeight: '80vh' }}>
                    <Col md={6}>
                        <Image src="/foto.png" alt="Education & Tech" fluid />
                    </Col>
                    <Col md={6}>
                        <Button
                            className="gradient-btn"
                            onMouseMove={handleMouseMove}
                            onMouseOut={handleMouseOut}
                            style={{ minHeight: '60vh', minWidth: '60vh', fontSize:100 }}
                        >
                            Let's get started!
                            <span className="hover-effect"></span>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footerr />
        </>

    );
};