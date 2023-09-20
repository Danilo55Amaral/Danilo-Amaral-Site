import Head from "next/head";
import { Container } from "../styles/back.module";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export default function front() {
    return (
        <Container>
            <Head>
                <title>Danilo | Back</title>
            </Head>
            <main>
                <section className="container-title">
                    <div className="image">
                        <Image
                            src="/img/data-science.jpg"
                            alt="capa"
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                        />
                    </div>
                    <span>Back End</span>
                </section>
                <section className="container-cards">
                    <figure className="card">
                        <Card
                            titulo="Rodando Banco de Dados com Docker"
                            image="/img/docker-post01.PNG"
                            link="https://github.com/Danilo55Amaral/Utilizando-Docker-com-Banco-de-dados"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="API Restful Nodejs (Nesse projeto foi desenvolvido uma API utilizando Node com TypeScript e outras ferramentas)"
                            image="/img/tec02.jpg"
                            link="https://github.com/Danilo55Amaral/Api-Restful-Nodejs"
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
                            titulo="Desafio Projeto Lógico de Banco de Dados"
                            image="/img/modelagem.PNG"
                            link="https://github.com/Danilo55Amaral/Desafio-Projeto-Logico-De-Banco-De-Dados"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Projeto Lógico de Banco de Dados de uma Oficina"
                            image="/img/modelagem_oficina.PNG"
                            link="https://github.com/Danilo55Amaral/Desafio-Projeto-Logico-Oficina"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="Fundamentos do Nodejs (API RESTful utilizando Node.JS feita a mão sem o uso de quaisquer dependências externas)"
                            image="/img/tec02.jpg"
                            link="https://github.com/Danilo55Amaral/Fundamentos-Nodejs"
                        />
                    </figure>
                    <figure className="card">
                        <Card
                            titulo="MyBank 2.0 (O MyBank é um sistema bancário desenvolvido em Python capaz de realizar algumas operações bancárias)"
                            image="/img/mybank01.PNG"
                            link="https://github.com/Danilo55Amaral/Desafio-Otimizando-Sistema-Bancario-Python"
                        />
                    </figure>
                </section>
            </main>
            <Footer />
        </Container>
    );
};