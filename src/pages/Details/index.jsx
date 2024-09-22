import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import FulfilledStar from "../../assets/fulfilled-star.png";
import EmptyStar from "../../assets/empty-star.png";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ShowMovieCardItem } from "../../components/ShowMovieCardItem";

import { Container, Content } from "./styles";

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover o filme?");
        
        if (confirm) {
            await api.delete(`/movies/${data.id}`);
            navigate(-1);
        
            setTimeout(() => {
                alert("Filme excluído com sucesso!");
            }, 150);
        }
    }

    function handleBack() {
        navigate(-1);
    }

    function getRatingStars(rating) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i <= rating ? FulfilledStar : EmptyStar}
                    alt={i <= rating ? "Estrela Preenchida" : "Estrela Vazia"}
                />
            );
        }
        return stars;
    }

    function formateDate(dateCreatedAt) {

    const date = new Date(data.created_at);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movies/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, [params.id]);

    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                    <header>
                        <div onClick={handleBack}>
                            <FiArrowLeft />
                            <span>Voltar</span>
                        </div>
                    </header>

                    <Content>
                        <div className="details-header">
                            <div className="title-wrapper">
                                <h1>{data.title}</h1>

                                <div className="rate-wrapper">
                                    {getRatingStars(data.rating)}
                                </div>
                            </div>

                            <Button
                                title="Excluir filme"
                                color={({ theme }) => theme.COLORS.ROSE}
                                backgroundColor={({ theme }) => theme.COLORS.BACKGROUND_850}
                                width="250px"
                                margin="0px 15px 0px 0px"
                                onClick={handleRemove}
                             />
                       </div>

                        <div className="information">
                            <img src={`tmp/uploads/${user.avatar}`} alt={`Foto de ${user.name}`} />
                            <span>{`Por ${user.name}`}</span>
                            <FiClock />
                            <span>{formateDate(data.created_at)}</span>
                        </div>

                        {
                            data.tags &&
                            <div className="tags-wrapper">
                                {
                                    data.tags.map(tag => (
                                        <ShowMovieCardItem
                                            key={String(tag.id)}
                                            value={tag.name}
                                        />
                                    ))
                                }
                            </div>
                        }

                        <p>{data.description}</p>
                    </Content>
                </main>
            }
        </Container>
    );
}