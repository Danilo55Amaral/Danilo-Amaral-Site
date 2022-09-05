import Head from "next/head";
import { Container } from "../styles/portfolio.module";
import Image from "next/image";
import Link from "next/link";
// import { Footer } from "../components/Footer";

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
                            src="/img/portfolio01.jpg"
                            alt="perfil"
                            width={1950}
                            height={800}
                        />
                    </div>
                    <span>Portfolio</span>
                </section>
                <section className="container-cards">
                    <div className="cards">
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                    </div>
                    <div className="cards">
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                        <figure className="card">
                            <Image
                                src="/img/portfolio01.jpg"
                                alt="perfil"
                                width={400}
                                height={450}
                            />
                            <figcaption className="card-title">Projeto template adm</figcaption>
                        </figure>
                    </div>
                   
                </section>
            </main>
        </Container>
    );
};