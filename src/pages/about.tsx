import Head from "next/head";
import { Container } from "../styles/about.module";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaReact, FaAngular, FaBootstrap, FaHtml5, FaGithub, FaGitlab, FaSlack, FaGitSquare, FaLinkedin, FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStyledcomponents, SiTailwindcss, SiTypescript, SiJavascript, SiCss3, SiPhp, SiMysql, SiTrello, SiGoogleanalytics, SiVercel, SiNetlify, SiFigma, SiFirebase } from "react-icons/si";
import { Footer } from "../components/Footer";

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
                            src="/img/perfil-sobre02.jpeg"
                            alt="perfil"
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                        
                    </div>
                    <div className="content-profile">
                        <h1>Sobre mim</h1>
                        <p>
                            Me chamo Danilo Amaral tenho 27 anos e sou natural de Vitória de Santo Antão
                            Pernambuco, sou graduado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Leonardo Da Vinci 
                            (UNIASSELVI). Atualmente estou cursando Pós Graduação e me especializando em Data Science.<br /><br />
                            Desenvolvedor web tenho experiência em desenvolvimento front-end com projetos pessoais e como freelancer
                            utilizando tecnologias modernas como React, Next, Typescript, Styled-Components, Tailwind CSS e outras ferramentas
                            utilizadas no front end. Estagiei na CMTECH onde adquirir experiência no back end com php utilizando o ScriptCase 
                            que é um gerador de aplicações que suporta o Licenciamento Ambiental de Pernambuco, além disso também utilizei MySQL e Workbench.
                            Dentro da CMTECH trabalhei com metodologia SCRUM onde pude ter vivência com essa metodologia ágil para o desenvolvimento de software.
                            <br />Hoje estudo tecnologias back end como Node.js, criação de API RESTful com Node.js, tecnologias como Fastify, Knex, Zod, 
                            SQLite, PostgreSQL, realização de testes automatizados, testes e2e e testes unitários utilizando bibliotecas como Vitest.<br /><br />
                            Iniciei na área de TI em 2019 quando trabalhei na Brisanet telecomunicações
                            e comecei a aprender sobre redes de computadores, tecnologia wireless e tecnologia fibra óptica.
                            Iniciei meus estudos na área de TI em Análise e Desenvolvimento de Sistemas e pude aprender mais
                            sobre o mundo da programação e me tornar um programador.<br /><br />Atualmente trabalho como freelancer desenvolvendo sistemas web e buscando a melhor
                            solução em tecnologia para meus clientes, entre em contato comigo agora mesmo e comece a sua transformação digital.
                        </p>
                        <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1">
                            <button type="submit">Entrar em Contato</button>
                        </Link>
                    </div>
                </section>
                <section className="container-skills">
                    <div className="group-skills">
                        <h1>Habilidades</h1>
                        <div className="card">
                            <span>React</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaReact />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Nextjs</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <TbBrandNextjs />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Angular</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaAngular />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Styled-component</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiStyledcomponents />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Tailwind CSS</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiTailwindcss />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Bootstrap</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaBootstrap />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Typescript</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiTypescript />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Javascript</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiJavascript />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Html5</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaHtml5 />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Css3</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiCss3 />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Php</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiPhp />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Mysql</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiMysql />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Sass</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaSass />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="group-tools">
                        <h1>Ferramentas</h1>
                        <div className="card">
                            <span>Trello</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiTrello />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Github</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaGithub />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Gitlab</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaGitlab />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Google Analytics</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiGoogleanalytics />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Slack</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaSlack />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Git</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <FaGitSquare />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Vercel Cloud</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiVercel />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Netlify Cloud</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiNetlify />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Figma</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiFigma />
                            </IconContext.Provider>
                        </div>
                        <div className="card">
                            <span>Firebase</span>
                            <IconContext.Provider value={{ color: "var(--dark-violet)", size: "50%", className: "global-class-name" }}>
                                <SiFirebase />
                            </IconContext.Provider>
                        </div>
                    </div>
                </section>
                <section className="container-certifications">
                    <span>Alguns Certificados</span>
                    <div className="certifications">
                        <div className="card-certification">
                            <Image src="/img/certificado-react-coder.PNG" alt="certificado" width={300} height={300} />
                        </div>
                        <div className="card-certification">
                            <Image src="/img/certificado-avanade-aceleracao.PNG" alt="certificado" width={300} height={300} />
                        </div>
                        <div className="card-certification">
                            <Image src="/img/certificado-web-moderno.jpg" alt="certificado" width={300} height={300} />
                        </div>
                        <div className="card-certification">
                            <Image src="/img/certificado-angular-developer.PNG" alt="certificado" width={300} height={300} />
                        </div>
                    </div>
                    <Link href="https://www.linkedin.com/in/danilo-amaral-305457195/">
                        <button
                            type="submit"
                        >
                            Veja mais
                            <FaLinkedin />
                        </button>
                    </Link>
                </section>
            </main>
            <Footer /> 
        </Container>
    );
};