import Link from "next/link";
import { Container } from "./styles";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Logo } from "../Logo";

export function Footer() {
    return (
        <Container>
            <footer className="footer">
                <div className="bar">
                    <p>Utilizando a tecnologia para melhorar a vida das pessoas!</p>
                </div>
                <div className="content">
                    <div className="icon-group">
                        <span>SIGA-ME</span>
                        <div className="icons">
                            <Link href="https://www.instagram.com/invites/contact/?i=oci0xypwwkje&utm_content=1zln8sh">
                                <div className="icon">
                                    <FaInstagram />
                                    <span>Instagram</span>
                                </div>
                            </Link>
                            <Link href="https://www.linkedin.com/in/danilo-amaral-305457195/">
                                <div className="icon">
                                    <FaLinkedin />
                                    <span>Linkedin</span>
                                </div>
                            </Link>
                            <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1">
                                <div className="icon">
                                    <FaWhatsapp />
                                    <span>WhatsApp</span>
                                </div>
                            </Link>
                            <Link href="https://github.com/Danilo55Amaral">
                                <div className="icon">
                                    <FaGithub />
                                    <span>GitHub</span>
                                </div>
                            </Link>
                        </div>
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
                        <br />
                        <br />
                        <Link href="/about">
                            <a>Sobre</a>
                        </Link>
                    </div>
                    <Logo />
                </div>
                <hr />
                <div className="coppy">
                    <span>Copyright 2022 Danilo Amaral - Todos os Direitos Reservados</span>
                </div>
            </footer>
        </Container>
    )
}