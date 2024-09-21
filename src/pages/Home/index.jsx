import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";

import { Container, Content, NewMovie, Section } from "./styles";

export function Home() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleDetails(movieId) {
        navigate(`/details/${movieId}`);
    }

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("/movies");
            setMovies(response.data);
            setFilteredMovies(response.data);
        }

        loadMovies();
    }, [movies]);

    useEffect(() => {
        if (search) {
            setFilteredMovies(movies.filter(movie => 
                movie.title.toLowerCase().includes(search.toLowerCase())
            ));
        } else {
            setFilteredMovies(movies);
        }
    }, [search, movies]);

    return (
        <Container>
            <Header onSearchChange={setSearch} />
            <Section title="Menu">
                <h2>Meus Filmes</h2>

                <NewMovie to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
            </Section>

            <Content>
                <Section title="Meus Filmes">
                {
                    filteredMovies.map(movie => (
                        <MovieCard
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => handleDetails(movie.id)}
                        />
                    ))
                }
                </Section>
            </Content>
        </Container>
    );
}
