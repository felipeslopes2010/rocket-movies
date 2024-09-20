import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { MovieCardItem } from "../../components/MovieCardItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api"

import { Container, Form } from "./styles";

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescrption] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
    }

    async function handleNewMovie() {
        const movie = {
            title: title,
            description: description,
            rating: rating,
            tags: tags,
        }

        if(!title) {
            return alert("Digite o título do filme!");
        }

        if(!rating) {
            return alert("Digite a nota do filme!");
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
        }

        try {
            await api.post("/movies", movie);
            alert("Filme criado com sucesso!")
            navigate(-1);
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar o filme.");
            }
        }
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <div
                        className="back-container"
                        onClick={handleBack}    
                    >
                        <FiArrowLeft />
                        <ButtonText title="Voltar" isActive />
                    </div>

                    <h1>Novo filme</h1>

                    <div className="input-wrapper">
                        <Input
                            type="text"
                            width="50%"
                            margin="0px 0px 20px 0px"
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            type="number"
                            width="50%"
                            margin="0px 0px 20px 0px"
                            min={0}
                            max={5}
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescrption(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <MovieCardItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <MovieCardItem
                                isNew
                                placeholder="Novo marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className="button-wrapper">
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    );
}