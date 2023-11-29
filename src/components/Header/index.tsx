import { Container } from "./styles"

interface PropsHeader {
    abrirUser: () => void;
}

export const Header = (props: PropsHeader) => {
    return(
        <Container>
            <div className="imagem-container">
                <img src="/logo.png" alt="logo" />
                <h1>SI BUS</h1>
            </div>
            <div>
                <button
                    type="button"
                    onClick={props.abrirUser}
                    >
                        Cadastre-se
                    </button>
            </div>

        </Container>
    )
}
