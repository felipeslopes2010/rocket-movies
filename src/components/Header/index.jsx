import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { Container, Profile } from "./styles";

export function Header({ onSearchChange }) {
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Profile>
                <h1
                    onClick={handleBack}
                >
                    RocketMovies
                </h1>

                <Input
                    placeholder="Pesquisar pelo título"
                    type="text"
                    className="header-input"
                    width="40%"
                    margin="0 288px"
                    onChange={e => onSearchChange(e.target.value)}
                />

                <div className="user-infos">
                    <div>
                        <Link to="/profile">
                            <span>{user.name}</span>
                        </Link>
                        <strong onClick={signOut}>
                            sair
                        </strong>
                    </div>

                    <Link to="/profile">
                        <img src={avatarURL} alt={user.name} />
                    </Link>
                </div>
            </Profile>
        </Container>
    );
}
