import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            }).catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar")
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    maxLength="30"
                    icon={FiUser}
                    margin={"0px 0px 8px 0px"}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    margin={"0px 0px 8px 0px"}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                <div className="back-wrapper" onClick={handleBack}>
                    <FiArrowLeft />
                    <ButtonText title="Voltar para o login" isActive />
                </div>
            </Form>

            <Background />
        </Container>
    )
}