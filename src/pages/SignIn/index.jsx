import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function SignIn() {

    const data = useAuth();
    console.log("MEU CONTEXTO =>", data);

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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

                <Button title="Entrar" />

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>

            <Background />
        </Container>
    )
}