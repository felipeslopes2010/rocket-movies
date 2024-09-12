import { useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Avatar, Form } from "./styles";


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }

        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <div className="header-button">
                    <Link to="/" className="controls">
                        <FiArrowLeft />
                        <span>Voltar</span>
                    </Link>
                </div>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt={avatar}
                    />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    icon={FiUser} margin="0px 0px 8px 0px"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    icon={FiMail}
                    margin="0px 0px 24px 0px"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    icon={FiLock}
                    margin="0px 0px 8px 0px"
                    placeholder="Senha atual"
                    type="password"
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    icon={FiLock}
                    margin="0px 0px 0px 0px"
                    placeholder="Nova senha"
                    type="password"
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    );
}