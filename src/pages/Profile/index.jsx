import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Avatar, Form } from "./styles";


export function Profile() {
    return (
        <Container>
            <header>
                <div>
                    <FiArrowLeft />
                    <span>Voltar</span>
                </div>
            </header>

            <Form>
                <Avatar>
                    <img src="https://www.github.com/felipeslopes2010.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input icon={FiUser} margin="0px 0px 8px 0px" placeholder="Nome" />
                <Input icon={FiMail} margin="0px 0px 24px 0px" placeholder="E-mail" />
                <Input icon={FiLock} margin="0px 0px 8px 0px" placeholder="Senha atual" />
                <Input icon={FiLock} margin="0px 0px 0px 0px" placeholder="Nova senha" />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
}