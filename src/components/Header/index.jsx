import { Input } from "../Input";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Container, Profile } from "./styles";


export function Header() {
    const { signOut } = useAuth();

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

                <div className="user-infos">
                    <div>
                    <Link to="/profile">
                        <span>Felipe Kimura</span>
                    </Link>
                        <strong
                            onClick={signOut}
                        >
                            sair
                        </strong>
                    </div>

                    <Link to="/profile">
                        <img src="https://www.github.com/felipeslopes2010.png" alt="Foto de usuário" />
                    </Link>
                </div>
            </Profile>
        </Container>
    );
}
