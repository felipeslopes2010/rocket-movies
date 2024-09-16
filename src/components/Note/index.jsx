import { Tag } from "../Tag"

import { Container } from "./styles";

export function Note({ title, description, tags }) {
    return (
        <Container>
            <h2>{title}</h2>

            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/fulfilled-star.png" alt="Estrela Preenchida" />
            <img src="../../src/assets/empty-star.png" alt="Estrela Vazia" />

            <p>
                {description}
            </p>
            
            {
                tags &&
                <footer>
                    {
                        tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}