import { api } from "../../services/api"

import { Tag } from "../Tag"

import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
    async function handleRemove(event) {
        event.stopPropagation();

        const confirm = window.confirm("Deseja realmente remover o filme?");
        
        if(confirm) {
            await api.delete(`/movies/${data.id}`);
        }
    }

    return (
        <Container {...rest}>
            <div className="header">
                <h2>{data.title}</h2>

                <button onClick={handleRemove}>
                    Excluir filme
                 </button>
            </div>

            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/empty-star.png" alt="Estrela Vazia" />

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