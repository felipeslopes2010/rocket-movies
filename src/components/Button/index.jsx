import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, width, padding, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            width={width}
            padding={padding}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? "Carregando..." : title}
        </Container>
    );
}
