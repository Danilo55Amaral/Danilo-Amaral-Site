import Head from "next/head";
import { Container } from "../styles/contact.module";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { IconContext } from "react-icons";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function contact() {
    return (
        <Container>
            <Head>
                <title>Danilo | Contato</title>
            </Head>
            <main>
                <section className="container-title">
                    <div className="image">
                        <Image
                            src="/img/tec01.jpg"
                            alt="titulo"
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                        />
                    </div>
                    <span>Vamos Conversar</span>
                </section>
                <section className="container-contact">
                    <div className="bg-image">
                        <Image
                            src="/img/img-fundo.jpg"
                            alt="fundo"
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                        />
                    </div>
                    <div className="contact">
                        <h1>Entre em Contato!</h1>
                        <p>Entre em contato comigo através do e-mail abaixo ou pelo meu whatsapp de antendimento</p>
                        <span>Localização</span>
                        <p>Recife-PE</p>
                        <span>Email</span>
                        <p>danilo_kairois@hotmail.com</p>
                    </div>
                    <div className="icon">
                        <span>WhatsApp</span>
                        <IconContext.Provider value={{ color: "var(--green-900)", size: "50%", className: "global-class-name" }}>
                            <div className="wpp">
                                <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1" >
                                    <FaWhatsapp />
                                </Link>
                            </div>
                        </IconContext.Provider>
                    </div>
                </section>
            </main>
            <Footer />
        </Container >
    );
};