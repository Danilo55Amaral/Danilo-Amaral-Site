import Head from "next/head";
import { Container } from "../styles/portfolio.module";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";

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
                        <Link href="https://projeto-template-administrativo.vercel.app/authentication">
                            <figure className="card">
                                <Image
                                    src="/img/template-admin01.PNG"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Projeto template adm</figcaption>
                            </figure>
                        </Link>
                        <Link href="https://projeto-quiz-full-stack.vercel.app">
                            <figure className="card">
                                <Image
                                    src="/img/quiz-full-01.PNG"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Projeto Quiz</figcaption>
                            </figure>
                        </Link>
                        <Link href="https://github.com/Danilo55Amaral/dtmoney">
                            <figure className="card">
                                <Image
                                    src="/img/dt-money.png"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Controle de Finanças</figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="cards">
                        <Link href="https://lista-de-tarefas-mauve.vercel.app">
                            <figure className="card">
                                <Image
                                    src="/img/lista-tarefas.PNG"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Lista de tarefas</figcaption>
                            </figure>
                        </Link>
                        <Link href="https://calculadora-seven-liard.vercel.app">
                            <figure className="card">
                                <Image
                                    src="/img/calculadora-react.PNG"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Calculadora</figcaption>
                            </figure>
                        </Link>
                        <Link href="/portfolio">
                            <figure className="card">
                                <Image
                                    src="/img/Ls-print01.PNG"
                                    alt="perfil"
                                    width={900}
                                    height={1250}
                                />
                                <figcaption className="card-title">Sistema de Gestão</figcaption>
                            </figure>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </Container>
    );
};