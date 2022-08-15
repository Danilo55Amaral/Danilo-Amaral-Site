import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "./styles";

export function Header() {
    const { asPath } = useRouter()

    return (
        <Container>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark p-0">
                    <div className="container">
                        <Link href="#" className="navbar-brand px-5 mx-5 ">
                            <span className="text-uppercase">Danilo Amaral</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#NavDropdown"
                            aria-controls="NavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="NavDropdown">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className={asPath === '/' ? "active" : ''}>
                                            Início
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/portfolio">
                                        <a className={asPath === '/portfolio' ? "active" : ''}>
                                            Portfólio
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className={asPath === '/about' ? "active" : ''}>
                                            Sobre
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact">
                                        <a className={asPath === '/contact' ? "active" : ''}>
                                            Contato
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </Container>
    )
}