import Head from "next/head";
import { Carousel } from "../components/Carousel";
import { Container } from "../styles/home.module";
import Image from "next/image";
import Link from "next/link";
import { Buttonanimate } from "../components/ButtonAnimate";

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
            <span>Web Labs</span>
            <h1>Danilo Amaral</h1>
            <p>Seja bem-vindo ao meu portfólio conheça alguns dos meus trabalhos<br />
              como freelancer e também alguns projetos que construir, meu objetivo<br /> é
              transformar de forma positiva a vida das pessoas através da tecnologia.</p>
          </div>
        </section>
        <section className="container-services">
          <span>Serviços</span>
          <h1>A melhor solução online para o seu negócio</h1>
          <div className="group-services">
            <div className="card-services">
              <Image src="/img/web-site.jpg" alt="perfil" width={200} height={200} />
              <span>Web Sites</span>
            </div>
            <div className="card-services">
              <Image src="/img/presenca-digital.jpg" alt="perfil" width={200} height={200} />
              <span>Presença Digital</span>
            </div>
            <div className="card-services">
              <Image src="/img/blog.jpg" alt="perfil" width={200} height={200} />
              <span>Blogs</span>
            </div>
            <div className="card-services">
              <Image src="/img/seo.jpg" alt="perfil" width={200} height={200} />
              <span>SEO</span>
            </div>
          </div>
        </section>
        <section className="container-projects">
          <span>Alguns projetos</span>
          <div className="group-projects">
            <div className="card-project">
              <div className="image-project">
                <Image src="/img/seo.jpg" alt="perfil" width={300} height={300} />
              </div>
              <span>Projeto</span>
            </div>
            <div className="card-project">
              <div className="image-project">
                <Image src="/img/seo.jpg" alt="perfil" width={300} height={300} />
              </div>
              <span>Projeto</span>
            </div>
            <div className="card-project">
              <div className="image-project">
                <Image src="/img/seo.jpg" alt="perfil" width={300} height={300} />
              </div>
              <span>Projeto</span>
            </div>
          </div>
          <Buttonanimate />
        </section>
      </main>
    </Container>
  );
};
