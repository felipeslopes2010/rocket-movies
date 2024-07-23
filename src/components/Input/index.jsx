import { Container } from "./styles";

export function Input({ icon: Icon, width, margin, ...rest }) {
    return (
        <Container
            width={width}
            margin={margin}
        >
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}