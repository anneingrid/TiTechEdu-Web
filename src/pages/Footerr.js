import React, { useEffect, useRef } from 'react';



export default function Footerr() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Erro de reprodução automática:', error);
            });
        }
    }, []);

    return (
        <>

            {/* <video autoPlay muted loop ref={videoRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <source src="/fundo.mp4" type="video/mp4" />
            </video> */}
            <footer className="text-center text-white " style={{ backgroundColor: 'rgba(33, 37, 41, 0.7)', position: 'relative' }} >
                <div className="container p-4">
                    Feito com ❤️ por TI Tech EDU
                </div>

            </footer>

        </>
    );
};