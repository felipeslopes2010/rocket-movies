import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, width, color, backgroundColor, margin, padding, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            width={width}
            color={color}
            backgroundColor={backgroundColor}
            margin={margin}
            padding={padding}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? "Carregando..." : title}
        </Container>
    );
}
