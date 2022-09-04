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
                    <div className="group-cards">
                        <Link href="/">
                            <div className="card">
                                <Image
                                    src="/img/portfolio01.jpg"
                                    alt="perfil"
                                    width={300}
                                    height={250}
                                />
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="card">
                                <Image
                                    src="/img/portfolio01.jpg"
                                    alt="perfil"
                                    width={300}
                                    height={250}
                                />
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="card">
                                <Image
                                    src="/img/portfolio01.jpg"
                                    alt="perfil"
                                    width={300}
                                    height={250}
                                />
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="card">
                                <Image
                                    src="/img/portfolio01.jpg"
                                    alt="perfil"
                                    width={300}
                                    height={250}
                                />
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                                <p>esse projeto teste esse projeto teste esse<br /> projeto teste esse projeto teste</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </Container>
    );
};