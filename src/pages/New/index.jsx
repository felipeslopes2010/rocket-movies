import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form, StyledLink } from "./styles";


export function New() {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <StyledLink to="/">
                        <FiArrowLeft />
                        <span>Voltar</span>
                    </StyledLink>

                    <h1>Novo filme</h1>

                    <div className="input-wrapper">
                        <Input type="text" width="50%" margin="0px 0px 20px 0px" placeholder="Título" />
                        <Input type="number" width="50%" margin="0px 0px 20px 0px" min={0} max={5} placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <TextArea placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                isNew
                                placeholder="Novo marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className="button-wrapper">
                        <Button title="Excluir filme" color={({ theme }) => theme.COLORS.ROSE} backgroundColor={({ theme }) => theme.COLORS.BLACK_900} />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}