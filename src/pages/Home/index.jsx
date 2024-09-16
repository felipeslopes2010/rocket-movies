import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { Container, Content, NewMovie, Section } from "./styles";

export function Home() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("/movies");
            setMovies(response.data);
            setFilteredMovies(response.data);
        }

        loadMovies();
    }, []);

    useEffect(() => {
        if (search) {
            setFilteredMovies(movies.filter(movie => 
                movie.title.toLowerCase().includes(search.toLowerCase())
            ));
        } else {
            setFilteredMovies(movies);
        }
    }, [search]);

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
                        <Note
                            key={String(movie.id)}
                            title={movie.title}
                            description={movie.description}
                            tags={movie.tags}
                        />
                    ))
                }
                </Section>
            </Content>
        </Container>
    );
}
