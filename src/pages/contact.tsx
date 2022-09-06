import Head from "next/head";
import { Container } from "../styles/contact.module";
import Image from "next/image";

export default function contact() {
    return (
        <Container>
            <Head>
                <title>Danilo | Contato</title>
            </Head>
            <main>
                <Image
                    src="/img/img-fundo.jpg"
                    alt="perfil"
                    layout="fill"
                />
                <section className="container-title">
                    <div className="image">
                        <Image
                            src="/img/contato01.jpg"
                            alt="perfil"
                            width={1950}
                            height={800}
                        />
                    </div>
                    <span>Vamos Conversar</span>
                </section>
            </main>
        </Container>
    );
};