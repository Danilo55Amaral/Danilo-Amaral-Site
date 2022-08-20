import Head from "next/head";
import { Carousel } from "../components/Carousel";
import { Container } from "../styles/home.module";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Danilo | Início</title>
      </Head>
      <main>
        <Carousel />
        <section className="container-profile">
          <div className="image">
            <Image src="/img/perfil-home.jpg" alt="perfil" width={300} height={300} />
          </div>
          <div className="content">
            <span>Web Lab's</span>
            <h1>Danilo Amaral</h1>
            <p>Seja bem-vindo ao meu portfólio conheça alguns dos meus trabalhos<br />
              como freelancer e também alguns projetos que construir, meu objetivo<br /> é
              transformar de forma positiva a vida das pessoas através da tecnologia.</p>
          </div>
        </section>
      </main>
    </Container>
  );
};
