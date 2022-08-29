import Head from "next/head";
import { Container } from "../styles/about.module";
import Image from "next/image";
import Link from "next/link";


export default function about() {
    return (
        <Container>
            <Head>
                <title>Danilo | Sobre</title>
            </Head>
            <main>
                <section className="container-profile">
                    <div className="image-profile">
                        <Image
                            src="/img/perfil-sobre.jpg"
                            alt="perfil"
                            width={600}
                            height={580}
                        />
                    </div>
                    <div className="content-profile">
                        <h1>Sobre mim</h1>
                        <p>
                            Me chamo Danilo, tenho 26 anos, sou natural de Vitória de Santo Antão
                            Pernambuco, Graduando em análise e desenvolvimento de sistemas (ultimo período).<br /><br />
                            Desenvolvedor web , tenho experiência em desenvolvimento front-end com projetos pessoais e como freelancer
                            utilizando tecnologias modernas como React, Next, Typescript, Styled-Components, Tailwind CSS e outras ferramentas
                            utilizadas no front end. Iniciei na área de TI em 2019 quando trabalhei na Brisanet telecomunicações
                            e começei a aprender sobre redes de computadores e tecnologia fibra optica.
                            Iniciei meus estudos na área de TI em análise e desenvolvimento de sistemas e pude aprender mais
                            sobre programação.<br /><br />Atualmente trabalho como freelancer desenvolvendo sistemas web e buscando a melhor
                            solução em tecnologia para meus clientes, entre em contato comigo agora mesmo e comece a sua transformação digital.
                        </p>
                        <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1">
                            <button type="submit">Entrar em Contato</button>
                        </Link>
                    </div>
                </section>
            </main>
        </Container>
    );
};