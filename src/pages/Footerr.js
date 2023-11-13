import React, { useEffect, useRef } from 'react';



export default function Footerr() {
    useEffect(() => {
        const setFooterPosition = () => {
            const windowHeight = window.innerHeight;
            const contentHeight = document.body.scrollHeight;
            const footer = document.querySelector('.footer');
            if (contentHeight < windowHeight) {
                footer.style.position = 'absolute';
                footer.style.bottom = '0';
            } else {
                footer.style.position = 'relative';
            }
        };

        setFooterPosition();
        window.addEventListener('resize', setFooterPosition);
        return () => {
            window.removeEventListener('resize', setFooterPosition);
        };
    }, []);

    return (
        <>
            <footer className="footer">
                <div className="container p-4">
                    Feito com ❤️ por TI Tech EDU
                </div>

            </footer>

        </>
    );
};