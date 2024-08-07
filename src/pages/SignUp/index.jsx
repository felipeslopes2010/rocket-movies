import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Form, Background } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    margin={"0px 0px 8px 0px"}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    margin={"0px 0px 8px 0px"}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>

            </Form>

            <Background />
        </Container>
    )
}