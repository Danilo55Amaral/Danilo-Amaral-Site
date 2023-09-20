import Head from "next/head";
import { Container } from "../styles/portfolio.module";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function portfolio() {
    return (
        <Container>
            <Head>
                <title>Danilo | Portfólio</title>
            </Head>
            <main>
                <section className="container-title">
                    <div className="image">
                        <Image
                            src="/img/inteligencia-01.jpg"
                            alt="capa"
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                        />
                    </div>
                    <span>Portfolio</span>
                </section>
                <div className="text-area">
                    <span>Escolha uma área</span>
                </div>
                <section className="container-skills">
                    <Link href="/front">
                        <figure className="skill-card">
                            <Image src="/img/front-end01.jpg" alt="perfil" width={520} height={480} />
                            <footer>
                                <strong>Front end</strong>
                                <span>Clique na Imagem</span>
                            </footer>
                        </figure>
                    </Link>
                    <figure className="skill-card">
                        <Image src="/img/data-science.jpg" alt="perfil" width={520} height={480} />
                        <footer>
                            <strong>Back end</strong>
                            <span>Clique na Imagem</span>
                        </footer>
                    </figure>
                    <figure className="skill-card">
                        <Image src="/img/data-science01.jpg" alt="perfil" width={520} height={480} />
                        <footer>
                            <strong>Ciência de Dados</strong>
                            <span>Clique na Imagem</span>
                        </footer>
                    </figure>
                </section>
            </main>
            <Footer />
        </Container>
    );
};