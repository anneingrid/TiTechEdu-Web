import React, { useState } from 'react';
import { Container, Row, Form, Button, Carousel, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavBarr from './NavBarr';
import Footerr from './Footerr';
import CursoCard from './CursoCard';
import CursoDetalhes from './CursoDetalhes';
import { useEffect } from 'react';


export default function Cursos() {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const buscaCursos = async () => {
            try {
                const response = await fetch('http://localhost:3001/cursos', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição: ${response.status}');
                }

                const data = await response.json();

                setCursos(data);

            } catch (error) {
                alert(error.message);
                console.error('Erro:', error);
            }
        };

        buscaCursos();
    }, []);

    const categorias = Array.from(new Set(cursos.map((curso) => curso.categoria)));
    const { id } = useParams();

    const cursoId = parseInt(id, 10);

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos os Cursos');
    const [termoBusca, setTermoBusca] = useState('');

    const handleCategoriaChange = (event) => {
        setCategoriaSelecionada(event.target.value);
    };

    const [resultadosBusca, setResultadosBusca] = useState([]);

    const handleBusca = () => {
        // Lógica de busca
        const resultados = cursos.filter(
            (curso) =>
                curso.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
                curso.categoria.toLowerCase().includes(termoBusca.toLowerCase())
        );
        setResultadosBusca(resultados);
    };

    const cursosExibidos =
        resultadosBusca.length > 0
            ? resultadosBusca
            : cursos.filter(
                (curso) =>
                    categoriaSelecionada === 'Todos os Cursos' || curso.categoria === categoriaSelecionada
            );

    const cursosPorPagina = categoriaSelecionada === 'Todos os Cursos' ? 12 : 4;
    const categoriasPorPagina = categoriaSelecionada === 'Todos os Cursos' ? 3 : 1;

    const gruposDeCursos = [];

    // Se a categoria selecionada for 'Todos os Cursos', dividimos os cursos em grupos
    // de acordo com a quantidade de cursos por página
    if (categoriaSelecionada === 'Todos os Cursos') {
        for (let i = 0; i < cursosExibidos.length; i += cursosPorPagina) {
            gruposDeCursos.push(cursosExibidos.slice(i, i + cursosPorPagina));
        }
    } else {
        // Caso contrário, agrupamos os cursos por categoria
        for (let i = 0; i < categorias.length; i += categoriasPorPagina) {
            const categoriasDoGrupo = categorias.slice(i, i + categoriasPorPagina);
            const cursosDoGrupo = cursosExibidos.filter(
                (curso) => categoriasDoGrupo.includes(curso.categoria)
            );

            for (let j = 0; j < cursosDoGrupo.length; j += cursosPorPagina) {
                gruposDeCursos.push(cursosDoGrupo.slice(j, j + cursosPorPagina));
            }
        }
    }

    return (
        <>
            <NavBarr />
            
            <Container>
                <div className="row py-4">
                <h1 className="titleForum">Cursos</h1>
                    <Col md={4}>
                        <Form.Select
                            className="caixa-selecao"
                            aria-label="Todos os Cursos"
                            value={categoriaSelecionada}
                            onChange={handleCategoriaChange}
                        >
                            <option>Todos os Cursos</option>
                            {categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col md={8}>
                        <div className="d-flex">
                            <Form.Control
                                className="me-2 mb-3 caixa-busca"
                                placeholder="Pesquisar..."
                                value={termoBusca}
                                onChange={(e) => setTermoBusca(e.target.value)}
                            />
                            <Button className="botao-buscar" variant="secondary" onClick={handleBusca}>
                            <i class="bi bi-search"></i>
                            </Button>
                        </div>
                    </Col>
                </div>
                <Carousel style={{ marginTop: '-25px' }}>
                    {gruposDeCursos.map((grupo, index) => (
                        <Carousel.Item key={index}>
                            <Row className="py-2">
                                {grupo.map((curso) => (
                                    <Col key={curso.id} md={3}>
                                        <Link to={`/cursos/${curso.id}`}  style={{textDecoration:'none'}}>
                                            <CursoCard
                                                id={curso.id}
                                                imgSrc={curso.imgSrc}
                                                alt={curso.alt}
                                                title={curso.titulo}
                                                
                                            />
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Footerr />
        </>
    );
}

