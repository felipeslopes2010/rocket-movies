import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <FiArrowLeft />
                        <span>Voltar</span>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="input-wrapper">
                        <Input type="text" width="50%" margin="0px 0px 20px 0px" placeholder="Título" />
                        <Input type="number" width="50%" margin="0px 0px 20px 0px" placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <TextArea placeholder="Observações" maxlength="900" />

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="DAIODWJOIAWJDIOWAJDIOJAWD" />
                            <NoteItem value="REACT" />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <div className="button-wrapper">
                        <Button title="Excluir filme" color={({ theme }) => theme.COLORS.ROSE} backgroundColor={({ theme }) => theme.COLORS.BLACK_900}/>
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}