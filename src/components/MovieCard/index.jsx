import { api } from "../../services/api"

import { Tag } from "../Tag"
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";

import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
    async function handleRemove(event) {
        event.stopPropagation();

        const confirm = window.confirm("Deseja realmente remover o filme?");
        
        if(confirm) {
            await api.delete(`/movies/${data.id}`);
            alert("Filme excluído com sucesso!");
        }
    }

    function getRatingStars(rating) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i}>
                    {i <= rating ? <MdStar /> : <MdStarBorder />}
                </span>
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

            <div className="rating-wrapper">
                {getRatingStars(data.rating)}
            </div>

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