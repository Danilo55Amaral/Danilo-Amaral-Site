import Link from "next/link";
import { Container } from "./styles";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Footer() {
    return (
        <Container>
            <footer className="footer">
                <div className="bar">
                    <p>Utilizando a tecnologia para melhorar a vida das pessoas!</p>
                </div>
                <div className="content">
                    <div className="icons">
                        <span>SIGA-ME:</span>
                        <Link href="https://www.instagram.com/invites/contact/?i=oci0xypwwkje&utm_content=1zln8sh">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.linkedin.com/in/danilo-amaral-305457195/">
                            <FaLinkedin />
                        </Link>
                        <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1">
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://github.com/Danilo55Amaral">
                            <FaGithub />
                        </Link>
                    </div>
                    <div className="links">
                        <Link href="/contact">
                            <a>Contato</a>
                        </Link>
                        <br />
                        <br />
                        <Link href="/portfolio">
                            <a>Serviços</a>
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="coppy">
                    <span>Copyright 2022 Danilo Amaral - Todos os Direitos Reservados</span>
                </div>
            </footer>
        </Container>
    )
}