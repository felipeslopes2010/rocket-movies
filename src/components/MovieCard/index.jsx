import { api } from "../../services/api"

import { Tag } from "../Tag"
import FulfilledStar from "../../assets/fulfilled-star.png";
import EmptyStar from "../../assets/empty-star.png";

import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
    async function handleRemove(event) {
        event.stopPropagation();

        const confirm = window.confirm("Deseja realmente remover o filme?");
        
        if(confirm) {
            await api.delete(`/movies/${data.id}`);
        }
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

    return (
        <Container {...rest}>
            <div className="header">
                <h2>{data.title}</h2>

                <button onClick={handleRemove}>
                    Excluir filme
                 </button>
            </div>

            {getRatingStars(data.rating)}

            <p>
                {data.description}
            </p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}