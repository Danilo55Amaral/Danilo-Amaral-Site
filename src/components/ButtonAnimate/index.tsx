import { Container } from "./styles";

export function Buttonanimate() {
    return (
        <Container>
            <a href="#" className="gradient-button">
                <div className="gradient"></div>
                <div className="button">
                    <span>Projetos</span>
                </div>
            </a>
        </Container>
    )
}