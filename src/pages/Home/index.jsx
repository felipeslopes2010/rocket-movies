import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { Container, Content, NewMovie, Section } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <Section title="Menu">
                <h2>Meus Filmes</h2>

                <NewMovie to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
            </Section>

            <Content>
                <Section title="Meus Filmes">
                    <Note
                        titulo="Interestellar"
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]}
                    />

                    <Note
                        titulo="Interestellar"
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]}
                    />

                    <Note
                        titulo="Interestellar"
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]}
                    />

                    <Note
                        titulo="Interestellar"
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]}
                    />

                    <Note
                        titulo="Interestellar"
                        tags={[
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]}
                    />
                </Section>
            </Content>
        </Container>
    );
}