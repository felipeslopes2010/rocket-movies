import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";


import { Container, Main, Menu } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <Main> 
                <Menu >
                    <h1>Meus Filmes</h1>
                    <Button
                        icon={FiPlus}
                        title="Adicionar filme"
                        width="208px"
                        padding="32px 16px"
                    />
                </Menu>
            </Main>
        </Container>
    )
}