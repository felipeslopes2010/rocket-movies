import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, width, color, backgroundColor, padding, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            width={width}
            color={color}
            backgroundColor={backgroundColor}
            padding={padding}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? "Carregando..." : title}
        </Container>
    );
}
