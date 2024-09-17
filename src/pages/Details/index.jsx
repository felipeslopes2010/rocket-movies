import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import FulfilledStar from "../../assets/fulfilled-star.png";
import EmptyStar from "../../assets/empty-star.png";
import { Header } from "../../components/Header";
import { ShowMovieCardItem } from "../../components/ShowMovieCardItem";

import { Container, Content } from "./styles";

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
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
                        <div className="title-wrapper">
                            <h1>{data.title}</h1>

                            <div className="rate-wrapper">
                                {getRatingStars(data.rating)}
                            </div>
                        </div>

                        <div className="information">
                            <img src={`tmp/uploads/${user.avatar}`} alt={`Foto de ${user.name}`} />
                            <span>{`Por ${user.name}`}</span>
                            <FiClock />
                            <span>{data.created_at}</span>
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