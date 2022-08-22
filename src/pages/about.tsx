import Head from "next/head";
import { Container } from "../styles/about.module";
import Image from "next/image";


export default function about() {
    return (
        <Container>
            <Head>
                <title>Danilo | Sobre</title>
            </Head>
            <main>
                <section className="container-profile">
                    <div className="image-profile">
                    <Image src="/img/perfil-sobre.jpg" alt="perfil" width={1950} height={800} />
                    </div>
                    <div className="profile-description">
                        <h1>texto</h1>
                    </div>
                </section>
            </main>
        </Container>
    );
};