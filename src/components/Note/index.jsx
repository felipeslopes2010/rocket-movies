import { Tag } from "../Tag"

import { Container } from "./styles";

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>

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