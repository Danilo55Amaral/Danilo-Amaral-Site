import Head from "next/head";
import { Container } from "../styles/front.module";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export default function front() {
    return (
        <Container>
            <Head>
                <title>Danilo | Front</title>
            </Head>
            <main>
                <section className="container-title">
                    <div className="image">
                        <Image
                            src="/img/portfolio01.jpg"
                            alt="capa"
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                        />
                    </div>
                    <span>Front End</span>
                </section>
                <section className="container-cards">
                    <figure className="card">
                        <Card
                            titulo="Template Administrativo"
                            image="/img/template-admin01.PNG"
                            link="https://github.com/Danilo55Amaral/Projeto-Template-Administrativo"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Ignite Timer"
                            image="/img/ignite-timer.PNG"
                            link="https://github.com/Danilo55Amaral/Ignite-Timer"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Ignite Feed"
                            image="/img/ignite-feed.png"
                            link="https://github.com/Danilo55Amaral/Ignite-Feed"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Dt Money"
                            image="/img/dt-money-01.png"
                            link="https://github.com/Danilo55Amaral/dtmoney"
                        />
                    </figure>
                </section>
                <section className="container-cards">
                    <figure className="card">
                        <Card
                            titulo="Quiz Projeto FullStack"
                            image="/img/quiz-full-01.PNG"
                            link="https://github.com/Danilo55Amaral/Projeto-Quiz-FullStack"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Monty Hall"
                            image="/img/montyHall03.jpg"
                            link="https://github.com/Danilo55Amaral/Desafio-Monty-Hall"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Lista de Tarefas"
                            image="/img/projeto-lista-01.jpg"
                            link="https://github.com/Danilo55Amaral/Desafio-Projeto-Lista"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Calculadora"
                            image="/img/calculadora-react.PNG"
                            link="https://github.com/Danilo55Amaral/Desafio-Calculadora-React"
                        />
                    </figure>
                </section>
            </main>
            <Footer />
        </Container>
    );
};