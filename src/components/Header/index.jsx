import { Input } from "../Input";
import { Link } from "react-router-dom";

import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

                <Input
                    placeholder="Pesquisar pelo título"
                    type="text"
                    className="header-input"
                    width="40%"
                    margin="0 288px"
                />

                <Link to="/profile">
                <div className="user-infos">
                    <div>
                        <span>Felipe Kimura</span>
                        <strong>sair</strong>
                    </div>

                    <img src="https://www.github.com/felipeslopes2010.png" alt="Foto de usuário" />
                </div>
                </Link>
            </Profile>
        </Container>
    );
}
