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
                            src="/img/front-end01.jpg"
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
                            titulo="Meu site (Navegue pelo código fonte desse site e veja como eu o desenvolvi)"
                            image="/img/site-image.jpg"
                            link="https://github.com/Danilo55Amaral/Danilo-Amaral-Site"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="DT Money 2.0 (Nova versão do Sistema de controle de finanças com novas funcionalidades e um visual mais clean)"
                            image="/img/finance-02.png"
                            link="https://github.com/Danilo55Amaral/dtmoney2.0"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Versionamento de Código com Git e GitHub"
                            image="/img/tec02.jpg"
                            link="https://github.com/Danilo55Amaral/Git-GitHub"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Visite meu GitHub"
                            image="/img/portfolio02.jpg"
                            link="https://github.com/Danilo55Amaral"
                        />
                    </figure>
                </section>
                <section className="container-cards">
                    <figure className="card">
                        <Card
                            titulo="Template Administrativo (Sistema administrativo com Login utilizando o API firebase do Google)"
                            image="/img/template-admin01.PNG"
                            link="https://github.com/Danilo55Amaral/Projeto-Template-Administrativo"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Ignite Timer (Projeto de Temporizador)"
                            image="/img/ignite-timer.PNG"
                            link="https://github.com/Danilo55Amaral/Ignite-Timer"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Ignite Feed (Projeto que simula um feed de rede social)"
                            image="/img/ignite-feed.png"
                            link="https://github.com/Danilo55Amaral/Ignite-Feed"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Dt Money (Sistema de Controle de Finanças)"
                            image="/img/dt-money-01.png"
                            link="https://github.com/Danilo55Amaral/dtmoney"
                        />
                    </figure>
                </section>
                <section className="container-cards">
                    <figure className="card">
                        <Card
                            titulo="Quiz Projeto FullStack (Quiz de Perguntas e respostas)"
                            image="/img/quiz-full-01.PNG"
                            link="https://github.com/Danilo55Amaral/Projeto-Quiz-FullStack"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Monty Hall (Jogo da porta misteriosa, descubra em qual porta está o presente)"
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
                            titulo="Calculadora (A Calculadora mais linda já criada ^-^)"
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